import classNames from "classnames";
import React, { useState, useRef } from "react";
import { usePortal, useMount } from "utils-hooks";
import { NoticeProps, NotificationProps, NoticeInstance } from "./interface";
import Notice, { topRight } from "./Notice";

export function Notification(props: NotificationProps) {
    const { prefixCls = "xy-notification", className, placement = topRight, getContainer, offset = 24, getNoticeRef, bindNoticeRef } = props;
    const [renderProtal] = usePortal(getContainer);
    const offsetSty = `${offset}px`;
    const top = placement.indexOf("top") !== -1;
    const reverse = placement.indexOf("bottom") !== -1;
    const classString = classNames(prefixCls, className, `${prefixCls}-${placement}`, {
        [`${prefixCls}-fixed`]: !getContainer
    });
    const style: React.CSSProperties = {
        top: top && offsetSty,
        bottom: !top && offsetSty
    };
    const [notices, setNotices] = useState<NoticeProps[]>([]);
    const noticeRef = useRef<NoticeInstance>();

    function close(id: string) {
        const config: NoticeProps = notices.find((x) => x.id === id);
        if (config) {
            config.visible = false;
            setNotices([...notices]);
        }
    }

    function add(config: NoticeProps) {
        if (!config.id) {
            config.id = `notification-id-${notices.length}`;
        }
        const cfg = Object.assign({ duration: 4500 }, config, { placement, visible: true, onClose: () => noticeRef.current.close(cfg.id) });

        if (reverse) {
            setNotices([cfg, ...notices]);
        } else {
            setNotices([...notices, cfg]);
        }

        return () => noticeRef.current.close(cfg.id);
    }

    function remove(id: string) {
        if (notices.some((x) => x.id === id)) {
            const other = notices.filter((x) => x.id !== id);
            setNotices([...other]);
        }
    }

    noticeRef.current = { add, close, remove };
    if (bindNoticeRef) {
        bindNoticeRef.current = noticeRef.current;
    }

    useMount(() => {
        if (getNoticeRef) {
            getNoticeRef(noticeRef);
        }
    });

    return renderProtal(
        <div className={classString} style={style}>
            {notices.map((cfg) => (
                <Notice {...cfg} key={cfg.id} onUnmount={() => remove(cfg.id)} />
            ))}
        </div>
    );
}

export default React.memo(Notification);
