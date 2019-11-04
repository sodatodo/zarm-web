(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{643:function(n,e,o){"use strict";o.r(e),e.default='## Radio \u5355\u9009\u6846\n\u5355\u9009\u6846\u3002\n\n### \u57fa\u7840\u7528\u6cd5\n\n\u5355\u72ec\u4f7f\u7528\uff0c\u8868\u793a\u5728\u4e24\u79cd\u72b6\u6001\u4e4b\u95f4\u5207\u6362\u3002\n\n:::demo\n\n```js\nimport { Radio } from \'dragon-ui\';\n\nclass Demo extends React.Component {\n  onChange(e) {\n    console.log(e.target.value);\n  }\n  render() {\n    return (\n      <div>\n        <Radio\n          value="a"\n          onChange={(e) => this.onChange(e)}\n        >\n          \u9009\u62e9\n        </Radio>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u7ec4\u5408\u4f7f\u7528\n\n\u4e00\u7ec4\u53ef\u9009\u9879\u4e2d\u9009\u62e9\u4e00\u9879\u3002\n\n:::demo \u4f7f\u7528`Radio.Group`\u7ec4\u4ef6\u3002\n\n```js\nimport { Radio } from \'dragon-ui\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      radioValue: \'a\'\n    }\n  }\n  render() {\n    return (\n      <div>\n        <div style={{marginBottom: 8}}>\u9009\u62e9\u4e86\uff1a{this.state.radioValue}</div>\n        <Radio.Group\n          value={this.state.radioValue}\n          onChange={(e) => {\n            this.setState({\n              radioValue: e.target.value\n            });\n          }}\n        >\n          <Radio value="a">A</Radio>\n          <Radio value="b">B</Radio>\n          <Radio value="c">C</Radio>\n          <Radio value="d">D</Radio>\n        </Radio.Group>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u6309\u94ae\u6837\u5f0f\u5355\u9009\u3001\u4e0d\u540c\u5c3a\u5bf8\n\n:::demo \u4f7f\u7528`Radio.Group`\u7ec4\u4ef6\u3002\n\n```js\nimport { Radio } from \'dragon-ui\';\n\nclass Demo extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      radioValue: \'\'\n    }\n  }\n  render() {\n    return (\n      <div>\n        <div style={{marginBottom: 8}}>\u9009\u62e9\u4e86\uff1a{this.state.radioValue}</div>\n        <div className="multi-rows">\n          <Radio.Group\n            size="lg"\n            value={this.state.radioValue}\n            onChange={(e) => {\n              this.setState({\n                radioValue: e.target.value\n              });\n            }}\n          >\n            <Radio.Button value="\u4e0a\u7f51">\u4e0a\u7f51</Radio.Button>\n            <Radio.Button value="\u7bee\u7403">\u7bee\u7403</Radio.Button>\n            <Radio.Button value="\u8db3\u7403">\u8db3\u7403</Radio.Button>\n            <Radio.Button value="\u7fbd\u6bdb\u7403">\u7fbd\u6bdb\u7403</Radio.Button>\n          </Radio.Group>\n        </div>\n        <div className="multi-rows">\n          <Radio.Group\n            value={this.state.radioValue}\n            onChange={(e) => {\n              this.setState({\n                radioValue: e.target.value\n              });\n            }}\n          >\n            <Radio.Button value="\u4e0a\u7f511">\u4e0a\u7f511</Radio.Button>\n            <Radio.Button value="\u7bee\u74031">\u7bee\u74031</Radio.Button>\n            <Radio.Button value="\u8db3\u74031">\u8db3\u74031</Radio.Button>\n            <Radio.Button value="\u7fbd\u6bdb\u74031">\u7fbd\u6bdb\u74031</Radio.Button>\n          </Radio.Group>\n        </div>\n        <div className="multi-rows">\n          <Radio.Group\n            size="sm"\n            value={this.state.radioValue}\n            onChange={(e) => {\n              this.setState({\n                radioValue: e.target.value\n              });\n            }}\n          >\n            <Radio.Button disabled value="\u4e0a\u7f512">\u4e0a\u7f512</Radio.Button>\n            <Radio.Button value="\u7bee\u74032">\u7bee\u74032</Radio.Button>\n            <Radio.Button value="\u8db3\u74032">\u8db3\u74032</Radio.Button>\n            <Radio.Button value="\u7fbd\u6bdb\u74032">\u7fbd\u6bdb\u74032</Radio.Button>\n          </Radio.Group>\n        </div>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n### \u7981\u7528\u72b6\u6001\n\n\u4e0d\u53ef\u52fe\u9009\u72b6\u6001\u3002\n\n:::demo \u53ef\u4ee5\u4f7f\u7528`disabled`\u5c5e\u6027\u6765\u5b9a\u4e49\u662f\u5426\u53ef\u7528\u3002\n\n```js\nimport { Radio } from \'dragon-ui\';\n\nclass Demo extends React.Component {\n  render() {\n    return (\n      <div>\n        <Radio disabled onChange={(e) => this.onChange(e)}>\u9009\u62e9</Radio>&nbsp;&nbsp;&nbsp;&nbsp;\n        <Radio disabled checked onChange={(e) => this.onChange(e)}>\u9009\u62e9</Radio>\n      </div>\n    )\n  }\n}\n\nReactDOM.render(<Demo />, mountNode);\n```\n:::\n\n\n### Radio Attributes\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| checked     | \u662f\u5426\u9009\u4e2d  | boolean  |   -           |    false    |\n| defaultChecked    | \u9ed8\u8ba4\u9009\u4e2d  | boolean   |   - |     false   |\n| disabled  | \u7981\u7528    | -   | -  | -   |\n| value  | \u9009\u62e9\u6846\u5bf9\u5e94\u7684\u503c    | string   | -  | -   |\n\n### Radio Events\n| \u4e8b\u4ef6\u540d\u79f0 | \u8bf4\u660e | \u56de\u8c03\u53c2\u6570 |\n|---------- |-------- |---------- |\n| onChange | \u52fe\u9009\u72b6\u6001\u53d8\u5316\u89e6\u53d1\u7684\u4e8b\u4ef6 | event |\n\n### Radio.Group Attributes\n| \u53c2\u6570      | \u8bf4\u660e    | \u7c7b\u578b      | \u53ef\u9009\u503c       | \u9ed8\u8ba4\u503c   |\n|---------- |-------- |---------- |-------------  |-------- |\n| value     | \u9009\u4e2d\u7684\u503c  | string  |   -           |    false    |\n| defaultValue    | \u9ed8\u8ba4\u9009\u4e2d\u7684\u503c  | string  |   - |     false   |\n\n### Radio.Group Events\n| \u4e8b\u4ef6\u540d\u79f0 | \u8bf4\u660e | \u56de\u8c03\u53c2\u6570 |\n|---------- |-------- |---------- |\n| onChange | \u52fe\u9009\u72b6\u6001\u53d8\u5316\u89e6\u53d1\u7684\u4e8b\u4ef6 | event |\n'}}]);
//# sourceMappingURL=34.dc1cc0dd.js.map