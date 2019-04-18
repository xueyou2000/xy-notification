import React from "react";
import ReactDOM from "react-dom";
import { NoticeProps, NoticeInstance } from "./interface";
import { topLeft, topRight, bottomLeft, bottomRight } from "./Notice";
import Notification from "./Notification";

const noticeRefMap: { [key: string]: React.MutableRefObject<NoticeInstance> } = {
    [topLeft]: null,
    [topRight]: null,
    [bottomLeft]: null,
    [bottomRight]: null
};

export function noticePopup(config: NoticeProps) {
    const placement = config.placement || topRight;
    let noticeRef = noticeRefMap[placement];
    let close;

    function handleGetNoticeRef(ref: React.MutableRefObject<NoticeInstance>) {
        noticeRefMap[placement] = ref;

        // 延迟到Notification加载到DOM后, 再加入
        setTimeout(() => {
            close = ref.current.add(config);
        }, 100);
    }

    if (noticeRef && noticeRef.current) {
        return noticeRef.current.add(config);
    } else {
        // 创建
        const div = document.createElement("div");
        document.body.appendChild(div);
        ReactDOM.render(<Notification placement={placement} getContainer={() => div} getNoticeRef={handleGetNoticeRef} />, div);
        return () => {
            if (close) {
                close();
            }
        };
    }
}
