import React, { useRef } from "react";
import { Notification } from "../src";
import { NoticeInstance } from "../src/interface";

export default function() {
    const noticeRef = useRef<NoticeInstance>(null);

    function test() {
        if (!noticeRef.current) {
            return;
        }
        const { add } = noticeRef.current;
        var close = add({
            duration: null,
            closeBtn: <span className="xy-close">✖</span>,
            children: (
                <div>
                    <p>Notification Title</p>
                    <div className="description">I will never close automatically. I will be close automatically. I will never close automatically.</div>
                    <p onClick={() => close()}>手动关闭</p>
                </div>
            ),
        });
    }

    return (
        <div>
            <h2>NotificationWrap</h2>
            <button onClick={test}>测试</button>
            <Notification bindNoticeRef={noticeRef} />
        </div>
    );
}
