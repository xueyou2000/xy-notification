export type GetDrawerContainerFuc = () => HTMLElement;

export interface NoticeProps {
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
     * Id
     */
    id?: string;
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
    defaultVisible?: boolean;
    /**
     * 过度时间
     */
    duration?: number;
    /**
     * 通知关闭事件
     */
    onClose?: Function;
    /**
     * 通知关闭动画结束
     */
    onUnmount?: Function;
}

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
     * 偏移量
     */
    offset?: number;
    /**
     * 抽屉滑出方向
     */
    placement?: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
    /**
     * 获取容器
     */
    getContainer?: () => HTMLElement;
}
