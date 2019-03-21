import classNames from "classnames";
import React, { useState } from "react";
import { usePortal, useGlobalState, MonitorState } from "utils-hooks";
import { NoticeProps, NotificationProps } from "./interface";
import Notice from "./Notice";
import { noticeStore } from "./Store";

export function Notification(props: NotificationProps) {
    const { prefixCls = "xy-notification-wrap", className, placement = "topRight", getContainer, offset = 24 } = props;
    const [renderProtal] = usePortal(getContainer);
    const offsetSty = `${offset}px`;
    const top = placement.indexOf("top") !== -1;
    const classString = classNames(prefixCls, className, `${prefixCls}-${placement}`, {
        [`${prefixCls}-fixed`]: !!getContainer
    });
    const style: React.CSSProperties = {
        top: top && offsetSty,
        bottom: !top && offsetSty
    };
    const [notices, setNotices] = useGlobalState<NoticeProps[]>(noticeStore);

    function remove(id: string) {
        if (notices.some((x) => x.id === id)) {
            const other = notices.filter((x) => x.id !== id);
            setNotices([...other]);
        }
    }

    return renderProtal(
        <div className={classString} style={style}>
            {notices.map((cfg) => (
                <Notice {...cfg} key={cfg.id} onUnmount={() => remove(cfg.id)} />
            ))}
        </div>
    );
}
