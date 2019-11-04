(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{644:function(n,e,o){"use strict";o.r(e),e.default="# Checkbox \u591a\u9009\u6846\n\u62e5\u6709\u5f00/\u5173\u72b6\u6001\u7684\u57fa\u7840\u7ec4\u4ef6\uff0c\u5e38\u7528\u4e8e\u6761\u76ee\u591a\u9009\u573a\u666f\u3002\n\n\n\n## \u57fa\u7840\u7528\u6cd5\n\u5355\u72ec\u4f7f\u7528\uff0c\u8868\u793a\u5728\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u5207\u6362\u3002\n\n```jsx\nimport { Checkbox } from 'zarm-web';\n\nReactDOM.render(\n  <Checkbox onChange={(e) => console.log(e)}>\u9009\u62e9</Checkbox>\n, mountNode);\n```\n\n\n## \u7ec4\u5408\u4f7f\u7528\n\u4e00\u7ec4\u53ef\u9009\u9879\u4e2d\u8fdb\u884c\u591a\u9879\u9009\u62e9\u3002\n\n```jsx\nimport { Checkbox } from 'zarm-web';\n\nclass Demo extends React.Component {\n  state = {\n    checkboxValue: []\n  }\n\n  render() {\n    return (\n      <>\n        <div style={{marginBottom: 8}}>\u9009\u62e9\u4e86\uff1a{this.state.checkboxValue.join(',')}</div>\n        <Checkbox.Group\n          value={this.state.checkboxValue}\n          onChange={(values) => {\n            console.log(values)\n            this.setState({\n              checkboxValue: values\n            });\n          }}\n        >\n          <Checkbox value=\"a\" onChange={value => console.log(value)}>A</Checkbox>\n          <Checkbox value=\"b\">B</Checkbox>\n          <Checkbox value=\"c\">C</Checkbox>\n          <Checkbox value=\"d\">D</Checkbox>\n        </Checkbox.Group>\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n\n\n## \u7981\u7528\u72b6\u6001\n\u4e0d\u53ef\u52fe\u9009\u72b6\u6001\u3002\n\n```jsx\nimport { Checkbox } from 'zarm-web';\n\nReactDOM.render(\n  <>\n    <Checkbox\n      disabled\n      onChange={(e) => console.log(e)}\n    >\n      \u9009\u62e9\n    </Checkbox>\n    <Checkbox\n      disabled\n      checked\n      onChange={(e) => console.log(e)}\n    >\n      \u9009\u62e9\n    </Checkbox>\n  </>\n, mountNode);\n```\n\n\n\n## \u90e8\u5206\u9009\u4e2d\u72b6\u6001\n\u672a\u5168\u90e8\u9009\u4e2d\uff0c\u5373\u90e8\u5206\u9009\u4e2d\u72b6\u6001\u3002\n\u53ef\u4ee5\u4f7f\u7528`indeterminate`\u5c5e\u6027\u6765\u5b9a\u4e49\u6837\u5f0f\u662f\u5426\u4e3a\u90e8\u5206\u9009\u4e2d\u3002\n\n```jsx\nimport { Checkbox } from 'zarm-web';\n\nconst plainOptions = ['a', 'b', 'c', 'd'];\n\nclass Demo extends React.Component {\n  state = {\n    checkboxValue: ['a','c'],\n    indeterminate: true,\n    checkAll: false,\n  }\n\n  onCheckAllChange = e => {\n    this.setState({\n      checkboxValue: e.target.checked ? JSON.parse(JSON.stringify(plainOptions)) : [],\n      indeterminate: false,\n      checkAll: e.target.checked,\n    });\n  };\n\n  onChange = checkboxValue => {\n    this.setState({\n      checkboxValue,\n      indeterminate: !!checkboxValue.length && checkboxValue.length < plainOptions.length,\n      checkAll: checkboxValue.length === plainOptions.length,\n    });\n  };\n \n  render() {\n    return (\n      <>\n        <div style={{marginBottom: 8}}>\n          <Checkbox\n            indeterminate={this.state.indeterminate}\n            onChange={this.onCheckAllChange}\n            checked={this.state.checkAll}\n          >\n            \u5168\u9009\n          </Checkbox>\n        </div>\n\n        <Checkbox.Group\n          value={this.state.checkboxValue}\n          onChange={this.onChange}\n        >\n          <Checkbox value=\"a\">A</Checkbox>\n          <Checkbox value=\"b\">B</Checkbox>\n          <Checkbox value=\"c\">C</Checkbox>\n          <Checkbox value=\"d\">D</Checkbox>\n        </Checkbox.Group>\n      </>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n\n## API\n\nCheckbox \n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| checked | boolean | false | \u662f\u5426\u9009\u4e2d |\n| defaultChecked | boolean | false | \u9ed8\u8ba4\u9009\u4e2d |\n| disabled | boolean | false | \u662f\u5426\u7981\u7528 |\n| value | string \\| number | - | - | \u9009\u62e9\u6846\u5bf9\u5e94\u7684\u503c |\n| indeterminate | boolean | false | \u662f\u5426\u662f\u90e8\u5206\u9009\u4e2d\u72b6\u6001 |\n| id | string | - | \u65b9\u4fbf\u5916\u90e8\u5e26\u6709 for \u5c5e\u6027\u7684 label \u6807\u7b7e\u63a7\u5236\u5f53\u524d checkbox |\n| onChange | ChangeEventHandler&lt;HTMLInputElement&gt; | - | \u52fe\u9009\u72b6\u6001\u53d8\u5316\u89e6\u53d1\u7684\u4e8b\u4ef6 |\n\nCheckbox.Group \n\n| \u5c5e\u6027 | \u7c7b\u578b | \u9ed8\u8ba4\u503c | \u8bf4\u660e |\n| :--- | :--- | :--- | :--- |\n| value | string[] \\| number[] | [] | \u9009\u4e2d\u7684\u503c | \n| defaultValue | string[] \\| number[] | [] | \u9ed8\u8ba4\u9009\u4e2d\u7684\u503c |    \n| disabled | boolean | false | \u6574\u7ec4\u7981\u7528 | \n| onChange | (values: string[] \\| number[]) => void | - | \u52fe\u9009\u72b6\u6001\u53d8\u5316\u89e6\u53d1\u7684\u4e8b\u4ef6 | \n\n\n"}}]);
//# sourceMappingURL=12.3ba96c0a.js.map