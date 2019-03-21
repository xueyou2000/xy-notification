import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { EXITED, useTranstion, useMount, useControll } from "utils-hooks";
import { NoticeProps } from "./interface";

export function Notice(props: NoticeProps) {
    const { prefixCls = "xy-notification", className, style, children, placement = "topRight", closeBtn = null, duration = 1500, onClose, onUnmount, id } = props;
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible");
    const [ref, state] = useTranstion(visible, true);
    const opening = state.indexOf("en") !== -1;
    const classString = classNames(prefixCls, className, `state-${state}`, `${prefixCls}-${placement}`, {
        [`${prefixCls}-visible`]: opening
    });

    function handleClose() {
        if (!isControll) {
            setVisible(false);
        }
        if (onClose) {
            onClose();
        }
    }

    useEffect(() => {
        if (state === EXITED && onUnmount) {
            onUnmount();
        }
    }, [state]);

    useMount(() => {
        let timeHandler;
        if (duration) {
            timeHandler = setTimeout(handleClose, duration);
        }
        return () => clearTimeout(timeHandler);
    });

    return (
        <div className={classString} style={style} id={id} ref={ref}>
            <div className={`${prefixCls}-content`}>{children}</div>
            {closeBtn && (
                <a className={`${prefixCls}-close`} onClick={handleClose}>
                    {closeBtn}
                </a>
            )}
        </div>
    );
}

export default Notice;
