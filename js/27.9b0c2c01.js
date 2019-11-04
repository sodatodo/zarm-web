(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{670:function(n,t,e){"use strict";e.r(t),t.default="## Notification \u63d0\u793a\u6846\n\n\u60ac\u6d6e\u51fa\u73b0\u5728\u9875\u9762\u53f3\u4e0a\u89d2, \u9002\u5408\u590d\u6742\u7c7b\u578b\u6216\u8005\u7cfb\u7edf\u4e3b\u52a8\u63a8\u9001\u7684\u6d88\u606f\u901a\u77e5\u63d0\u793a\u3002\n\n### \u57fa\u672c\u7528\u6cd5\n\n\u9002\u7528\u6027\u5e7f\u6cdb\u7684\u901a\u77e5\u680f\n\n::: demo \u8bbe\u7f6e\u662f\u5426\u81ea\u52a8\u5173\u95ed\n```js\nimport { Notification, Button } from 'dragon-ui';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button theme=\"primary\" onClick={this.open.bind(this)}>\u4f1a\u81ea\u52a8\u5173\u95ed</Button>\n        <Button theme=\"primary\" onClick={this.open2.bind(this)}>\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed</Button>\n      </div>\n    )\n  }\n  \n  open() {\n    Notification.open({\n      title: '\u6807\u9898\u540d\u79f0',\n      message: '\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848\u8fd9\u662f\u63d0\u793a\u6587\u6848',\n    });\n  }\n  \n  open2() {\n    Notification.open({\n      title: '\u63d0\u793a',\n      message: '\u8fd9\u662f\u4e00\u6761\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u7684\u6d88\u606f',\n      stayTime: 0,\n    });\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u5e26\u6709\u56fe\u6807\n\n\u5e26\u6709 icon\uff0c\u5e38\u7528\u6765\u663e\u793a\u300c\u6210\u529f\u3001\u8b66\u544a\u3001\u6d88\u606f\u3001\u9519\u8bef\u300d\u7c7b\u7684\u7cfb\u7edf\u6d88\u606f\n\n::: demo Notification \u7ec4\u4ef6\u6709\u56db\u79cd\u901a\u77e5\u7c7b\u578b\uff1a`success`, `warning`, `info`, `error`\u3002\u901a\u8fc7`type`\u5b57\u6bb5\u6765\u8bbe\u7f6e\n```js\nimport { Notification, Button } from 'dragon-ui';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button onClick={this.open3.bind(this)}>\u6210\u529f</Button>\n        <Button onClick={this.open4.bind(this)}>\u8b66\u544a</Button>\n        <Button onClick={this.open5.bind(this)}>\u6d88\u606f</Button>\n        <Button onClick={this.open6.bind(this)}>\u9519\u8bef</Button>\n      </div>\n    )\n  }\n  \n  open3() {\n    Notification.open({\n      title: '\u6210\u529f',\n      message: '\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a\u6d88\u606f',\n      theme: 'success',\n    });\n  }\n  \n  open4() {\n    Notification.open({\n      title: '\u8b66\u544a',\n      message: '\u8fd9\u662f\u4e00\u6761\u8b66\u544a\u7684\u63d0\u793a\u6d88\u606f',\n      theme: 'warning'\n    });\n  }\n  \n  open5() {\n    Notification.primary({\n      title: '\u6d88\u606f',\n      message: '\u8fd9\u662f\u4e00\u6761\u6d88\u606f\u7684\u63d0\u793a\u6d88\u606f'\n    });\n  }\n  \n  open6() {\n    Notification.danger({\n      title: '\u9519\u8bef',\n      message: '\u8fd9\u662f\u4e00\u6761\u9519\u8bef\u7684\u63d0\u793a\u6d88\u606f'\n    });\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u81ea\u5b9a\u4e49\u6309\u94ae\n\n\u81ea\u5b9a\u4e49\u901a\u77e5\u680f\u5e95\u90e8\u7684\u64cd\u4f5c\u6309\u94ae\n\n::: demo \u901a\u8fc7btn prop\u4f20\u9012\u9700\u8981\u5c55\u793a\u5728\u5e95\u90e8\u7684\u64cd\u4f5c\u6309\u94ae, \u6ce8\u610fkey\u5fc5\u987b\u662f\u552f\u4e00\u7684, \u76f8\u540c\u7684key\u901a\u77e5\u63d0\u9192\u4f1a\u88ab\u7edf\u4e00\u5173\u95ed!\n```js\nimport { Notification, Button } from 'dragon-ui';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button theme=\"primary\" onClick={this.open.bind(this)}>\u81ea\u5b9a\u4e49\u6309\u94ae1</Button>\n        <Button theme=\"primary\" onClick={this.open2.bind(this)}>\u81ea\u5b9a\u4e49\u6309\u94ae2</Button>\n      </div>\n    )\n  }\n  \n  open() {\n    const key = `key-${Date.now()}`\n    const btn = (\n      <React.Fragment>\n        <Button size=\"sm\" onClick={() => Notification.remove(key)}>\u5173\u95ed</Button>\n        <Button theme=\"primary\" size=\"sm\" onClick={() => alert('\u4f60\u70b9\u51fb\u4e86\u786e\u5b9a\u6309\u94ae')}>\u786e\u5b9a</Button>\n      </React.Fragment>\n    )\n    Notification.open({\n      title: '\u8fd9\u662f\u4e00\u6bb5\u6807\u9898',\n      message: '\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9\u6211\u662f\u63cf\u8ff0\u5185\u5bb9',\n      theme: 'success',\n      stayTime: 0,\n      btn,\n      key\n    });\n  }\n  \n  open2() {\n    const key = `open${Date.now()}`;\n    const btn = <Button size=\"sm\" onClick={() => Notification.remove(key)}>\u5173\u95ed\u901a\u77e5</Button>\n    Notification.open({\n      title: '\u63d0\u793a',\n      message: '\u8fd9\u662f\u4e00\u6761\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed\u7684\u6d88\u606f',\n      stayTime: 0,\n      btn,\n      key\n    });\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u56de\u8c03\u51fd\u6570\n\n\u56de\u8c03\u51fd\u6570\n\n::: demo \u70b9\u51fbnotification\u7684\u56de\u8c03\u51fd\u6570\n```js\nimport { Notification, Button } from 'dragon-ui';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Button theme=\"primary\" onClick={this.open.bind(this)}>\u70b9\u51fb\u6211</Button>\n      </div>\n    )\n  }\n  \n  open() {\n    Notification.open({\n      title: '\u70b9\u51fb',\n      message: '\u8fd9\u662f\u4e00\u6761\u6210\u529f\u7684\u63d0\u793a\u6d88\u606f',\n      theme: 'success',\n      onClick () {alert('\u70b9\u51fb\u56de\u8c03\u51fd\u6570')},\n      onClose () { alert('\u5173\u95ed\u56de\u8c03\u51fd\u6570') }\n    });\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n<br/>\n\n### Api:\n<p>Notification.open(props: NotificationProps)</p>\n<p>Notification.success()</p>\n<p>Notification.primary()</p>\n<p>Notification.danger()</p>\n<p>Notification.warning()</p>\n<p>Notification.remove(key: string)</p>\n\n### \u53c2\u6570\n| \u53c2\u6570      | \u8bf4\u660e          | \u7c7b\u578b      | \u53ef\u9009\u503c                           | \u9ed8\u8ba4\u503c  |\n|---------- |-------------- |---------- |--------------------------------  |-------- |\n| title | \u6807\u9898 | string | \u2014 | \u2014 |\n| key   | \u901a\u77e5\u7684\u552f\u4e00\u6027\u6807\u8bc6 | string | \u2014 | \u2014 |\n| message | \u8bf4\u660e\u6587\u5b57 | string/ReactElement | \u2014 | \u2014 |\n| className | \u81ea\u5b9a\u4e49\u7c7b\u540d | string | - | - |\n| theme | \u56fe\u6807\u4e3b\u9898\uff0c\u53ea\u80fd\u4e3a\u5217\u4e3e\u7684\u56db\u79cd\u4e4b\u4e00\uff0c\u5426\u5219\u65e0\u6548(\u9ed8\u8ba4default) | string | success/warning/primary/danger | \u2014 |\n| stayTime | \u663e\u793a\u65f6\u95f4, \u6beb\u79d2\u3002\u8bbe\u4e3a 0 \u5219\u4e0d\u4f1a\u81ea\u52a8\u5173\u95ed | number | \u2014 | 4500 |\n| onClick | \u70b9\u51fb Notification \u65f6\u7684\u56de\u8c03\u51fd\u6570 | (event) => void | \u2014 | \u2014 |\n| onClose | \u5173\u95ed Notification \u65f6\u7684\u56de\u8c03\u51fd\u6570 | (event) => void | \u2014 | \u2014 |\n\n\n\n"}}]);
//# sourceMappingURL=27.9b0c2c01.js.map