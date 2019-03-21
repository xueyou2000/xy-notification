import React, { useState, useRef } from "react";
import { Notification } from "../src";
import { newNotificationInstance } from "../src/Store";

export default function() {
    function test() {
        let close = newNotificationInstance({
            duration: null,
            closeBtn: <span>关闭</span>,
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
            <h2>NotificationWrap</h2>
            <button onClick={test}>测试</button>
            <Notification />
        </div>
    );
}
