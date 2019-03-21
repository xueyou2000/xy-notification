import React, { useState } from "react";
import { Notification } from "../src";

export default function() {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <p>简单演示</p>
            <button onClick={() => setVisible((c) => !c)}>切换显示</button>
            <Notification style={{ width: "320px" }} visible={visible} onChange={setVisible}>
                <p>Notification Title</p>
                <div className="description">I will never close automatically. I will be close automatically. I will never close automatically.</div>
            </Notification>
        </div>
    );
}
