export type GetDrawerContainerFuc = () => HTMLElement;

export interface NotificationProps {
    /**
     * 附加类名
     */
    prefixCls?: string;
    /**
     * 根节点的附加类名
     */
    className?: string;
    /**
     * 内联样式
     */
    style?: React.CSSProperties;
    /**
     * 抽屉包裹内容
     */
    children?: React.ReactNode;
    /**
     * 关闭按钮自定义
     */
    closeBtn?: React.ReactNode;
    /**
     * 抽屉滑出方向
     */
    placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    /**
     * 是否可视
     */
    visible?: boolean;
    /**
     * 默认是否可视
     */
    defaultVisible?: boolean;
    /**
     * 可视改变事件
     */
    onChange?: (visible: boolean) => void;
    /**
     * 可视改变事件
     * @description 不同于onChange, 此事件在动画过度完毕后触发
     */
    onTrsitionComplete?: (visible: boolean) => void;
}
