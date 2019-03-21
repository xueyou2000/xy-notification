import classNames from "classnames";
import React, { useEffect } from "react";
import { useControll, useTranstion, ENTERED, EXITED } from "utils-hooks";
import { NotificationProps } from "./interface";

export function Notification(props: NotificationProps) {
    const { prefixCls = "xy-notification", className, style, children, placement = "topRight", closeBtn = null, onChange, onTrsitionComplete } = props;
    const [visible, setVisible, isControll] = useControll(props, "visible", "defaultVisible", false);
    const [ref, state] = useTranstion(visible);
    const opening = state.indexOf("en") !== -1;
    const classString = classNames(prefixCls, className, `state-${state}`, `${prefixCls}-${placement}`, {
        [`${prefixCls}-visible`]: opening
    });

    function handleClose() {
        if (!isControll) {
            setVisible(false);
        }
        if (onChange) {
            onChange(false);
        }
    }

    useEffect(() => {
        if (!onTrsitionComplete) {
            return;
        }
        if (state === ENTERED) {
            onTrsitionComplete(true);
        } else if (state === EXITED) {
            onTrsitionComplete(false);
        }
    }, [state]);

    return (
        <div className={classString} style={style} ref={ref}>
            <div className={`${prefixCls}-content`}>{children}</div>
            <a className={`${prefixCls}-close`} onClick={handleClose}>
                {closeBtn}
            </a>
        </div>
    );
}
