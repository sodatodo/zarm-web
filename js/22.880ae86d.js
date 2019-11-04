(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{681:function(n,e,t){"use strict";t.r(e),e.default="# \u56fd\u9645\u5316\n\nLocaleProvider\u7ec4\u4ef6\u63d0\u4f9b\u4e86\u56fd\u9645\u5316\u529f\u80fd\uff0c\u53ef\u4ee5\u901a\u8fc7locale\u5c5e\u6027\u8bbe\u7f6e\u8bed\u8a00\u5305\u3002\n\n## \u57fa\u672c\u7528\u6cd5\n\n```jsx\nimport { Alert, Button, LocaleProvider } from 'zarm-web';\n\nconst localeCN = {\n  locale: 'zh-cn',\n  Alert: {\n    close: '\u5173\u95ed',\n  },\n}\nconst localeEN = {\n  locale: 'en',\n  Alert: {\n    close: 'Close'\n  }\n}\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      locale: localeCN,\n      alertVisible: false,\n    };\n    this.showAlert = this.showAlert.bind(this);\n    this.hideAlert = this.hideAlert.bind(this);\n    this.toggleLanguage = this.toggleLanguage.bind(this);\n  }\n\n  showAlert() {\n    this.setState({\n      alertVisible: true,\n    });\n  }\n\n  hideAlert() {\n    this.setState({\n      alertVisible: false,\n    });\n  }\n\n  toggleLanguage() {\n    const { locale } = this.state\n\n    if (locale === localeEN) {\n      this.setState({\n        locale: localeCN\n      });\n    } else {\n      this.setState({\n        locale: localeEN\n      });\n    }\n    this.showAlert();\n  }\n\n  render() {\n    const { alertVisible, locale } = this.state;\n    console.log(locale);\n\n    return (\n      <LocaleProvider locale={locale}>\n        <div>\n          <Button theme=\"primary\" onClick={this.toggleLanguage}>\u5207\u6362\u8bed\u8a00</Button>\n          <Alert\n            visible={alertVisible}\n            onClose={this.hideAlert}\n            message='\u6ce8\u610f\u5173\u95ed\u6309\u94ae'\n          />\n        </div>\n      </LocaleProvider>\n    );\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| locale | { locale: string, [componentName: string]: { [localeKey: string]: string } } | - | \u8bbe\u7f6e\u8bed\u8a00\u5305 |\n"}}]);
//# sourceMappingURL=22.880ae86d.js.map