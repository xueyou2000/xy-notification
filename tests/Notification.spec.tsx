import React, { useRef } from "react";
import { render, fireEvent, act } from "react-testing-library";
import { cleanup, renderHook } from "react-hooks-testing-library";
import { Notification } from "../src";
import { NoticeInstance } from "../src/interface";

describe("Notification", () => {
    test("offset", () => {
        const div = document.createElement("div");
        document.body.appendChild(div);
        const wrapper = render(<Notification offset={10} placement="topRight" getContainer={() => div} />, { container: div });
        const root = wrapper.container.querySelector(".xy-notification") as HTMLElement;
        expect(root.style.top).toBe("10px");
        expect(root.style.bottom).toBe("");

        wrapper.rerender(<Notification offset={20} placement="bottomRight" getContainer={() => div} />);
        expect(root.style.bottom).toBe("20px");
        expect(root.style.top).toBe("");
    });

    test("add", () => {
        const { result } = renderHook(() => useRef<NoticeInstance>(null));
        const ref = result.current;
        const div = document.createElement("div");
        document.body.appendChild(div);
        const wrapper = render(<Notification offset={10} placement="topRight" bindNoticeRef={ref} getContainer={() => div} />, { container: div });
        const root = wrapper.container.querySelector(".xy-notification") as HTMLElement;

        act(() => {
            ref.current.add({
                duration: null,
                children: <p>Hello</p>
            });
        });

        let close;
        act(() => {
            close = ref.current.add({
                id: "b2",
                duration: null,
                children: <p>Hello2</p>
            });
        });

        expect(root.children.length).toBe(2);

        act(() => close());
        const Hello2 = wrapper.container.querySelector("#b2");
        fireEvent.transitionEnd(Hello2);

        expect(root.children.length).toBe(1);
    });
});
