webpackJsonp([1],{44:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(65),e=o.n(i),r=o(66),a=o.n(r),u=o(67),s=o.n(u),l=o(68),p=o.n(l),m=o(69),d=o.n(m),g=o(269),b=function(n){function t(){return a()(this,t),p()(this,(t.__proto__||e()(t)).apply(this,arguments))}return d()(t,n),s()(t,[{key:"document",value:function(){return o(496)}}]),t}(g.a);t.default=b},496:function(n,t){n.exports="# dragon-ui\n  基于React的UI组件库。\n\n### Install 安装\n```bash\nnpm install dragon-ui --save\n```\n\n### Usage 使用\n\n* 全组件引入\n\n```js\nimport { Button, Cell } from 'dragon-ui';\nimport 'dragon-ui/dist/dragon-ui.min.css';\n```\n\n* 按需引入\n\n方法一\n> 使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 自动加载Sass文件\n\n```js\n  // .babelrc or babel-loader option\n  {\n    \"plugins\": [\n      ['import', {\n        libraryName: 'dragon-ui',\n        style: true,\n        camel2DashComponentName: false,\n      }],\n    ]\n  }\n```\n```js\nimport { Button, Cell } from 'dragon-ui';\n```\n\n方法二\n\n```js\nimport Button from 'dragon-ui/lib/Button';\nimport 'dragon-ui/lib/Button/style';\n```\n\n### Examples & Docs 示例和文档\n[中文](https://jeromelin.github.io/dragon-ui)\n\n### License\nMIT\n"}});