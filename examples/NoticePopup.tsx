import React, { useState } from "react";
import { noticePopup } from "../src";

export default function() {
    function pop() {
        const close = noticePopup({
            duration: null,
            closeBtn: <span className="xy-close">✖</span>,
            children: (
                <div>
                    <p>Notification Title</p>
                    <div className="description">I will never close automatically. I will be close automatically. I will never close automatically.</div>
                    <p onClick={() => close()}>手动关闭</p>
                </div>
            )
        });
    }

    return (
        <div>
            <h1>弹出通知</h1>
            <button onClick={pop}>切换显示</button>
        </div>
    );
}
