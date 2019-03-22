import React, { useState } from "react";
import { Notice } from "../src";

export default function() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <h1>简单演示</h1>
            <button onClick={() => setVisible((c) => !c)}>切换显示</button>

            <Notice visible={visible} style={{ width: "320px" }} closeBtn={<span className="xy-close">✖</span>}>
                <p>Notification Title</p>
                <div className="description">I will never close automatically. I will be close automatically. I will never close automatically.</div>
            </Notice>

            <p>内容</p>
        </div>
    );
}
