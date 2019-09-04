import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import { Notice } from "../src";

describe("Notice", () => {
    test("render", () => {
        const wrapper = render(
            <Notice visible={true}>
                <p>Hello</p>
            </Notice>,
        );
        const root = wrapper.container.querySelector(".xy-notice");
        expect(root.classList.contains("xy-notice-visible")).toBeTruthy();
    });

    test("onUnmount", () => {
        const fn = jest.fn();
        const wrapper = render(
            <Notice visible={true} onUnmount={fn}>
                <p>Hello</p>
            </Notice>,
        );

        wrapper.rerender(
            <Notice visible={false} onUnmount={fn}>
                <p>Hello</p>
            </Notice>,
        );

        const root = wrapper.container.querySelector(".xy-notice");
        fireEvent.transitionEnd(root);
        expect(fn).toBeCalled();
    });
});
