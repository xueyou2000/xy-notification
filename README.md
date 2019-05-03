| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-notification.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-notification.svg?style=flat-square)

[![xy-notification](https://nodei.co/npm/xy-notification.png)](https://npmjs.org/package/xy-notification)

# xy-notification

---

通知组件，从屏幕某一侧滑入通知信息。

## 安装

```bash
# yarn
yarn add xy-notification utils-hooks classnames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { noticePopup } from "xy-notification";

const close = noticePopup({
    duration: 3000,
    closeBtn: <span className="xy-close">✖</span>,
    children: <p>弹出内容</p>,
});
```

## API

### Notice

| 属性           | 说明             | 类型                                            | 默认值 |
| -------------- | ---------------- | ----------------------------------------------- | ------ |
| children       | 通知内容         | React.ReactNode                                 | 无     |
| closeBtn       | 关闭按钮         | React.ReactNode                                 | 无     |
| placement      | 通知滑出方向     | "topLeft"/"topRight"/"bottomLeft"/"bottomRight" | 无     |
| visible        | 是否可视         | boolean                                         | 无     |
| defaultVisible | 默认是否可视     | boolean                                         | 无     |
| duration       | 过度时间         | number                                          | 无     |
| onClose        | 通知关闭事件     | Function                                        | 无     |
| onUnmount      | 通知关闭动画结束 | Function                                        | 无     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-notification is released under the MIT license.
