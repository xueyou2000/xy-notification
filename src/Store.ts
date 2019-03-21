import { usePortal, useGlobalState, MonitorState } from "utils-hooks";
import { NoticeProps } from "./interface";

export const DefaultConfig: NoticeProps = {
    placement: "topRight",
    duration: 4500
};
export const noticeStore = new MonitorState<NoticeProps[]>([]);

function closeNotification(config: NoticeProps) {
    config.visible = false;
    noticeStore.setState([...noticeStore.getState()]);
}

export function newNotificationInstance(config: NoticeProps) {
    const notices = noticeStore.getState();
    if (!config.id) {
        config.id = `notification-id-${notices.length}`;
    }
    const cfg = Object.assign({}, DefaultConfig, config, { visible: true, onClose: () => closeNotification(cfg) });
    noticeStore.setState([...notices, cfg]);
    return () => closeNotification(cfg);
}
