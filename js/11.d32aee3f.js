(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{169:function(n,e,t){"use strict";var o=t(170),r=t.n(o),i=t(174),s=t.n(i),a=t(175),l=t.n(a),d=t(176),c=t.n(d),u=t(22),p=t.n(u),m=t(18),h=t.n(m),v=t(19),b=t.n(v),f=t(20),w=t.n(f),y=t(21),g=t.n(y),k=t(0),D=t.n(k),C=t(43),x=t.n(C),M=t(168),B=t.n(M),I=t(177),E=t.n(I),_=t(173),S=t.n(_),N=t(23),L=t.n(N),R=t(178),V=t(1),T=t.n(V),W=t(172),O=t.n(W),z=(t(179),t(180),t(181),t(182),function(n){function e(){return h()(this,e),w()(this,(e.__proto__||p()(e)).apply(this,arguments))}return g()(e,n),b()(e,[{key:"componentDidMount",value:function(){var n=this,e=this.props,t=e.onChange,o=e.value;this.cm=O()(this.editor,{mode:"jsx",theme:"react",keyMap:"sublime",viewportMargin:1/0,lineNumbers:!1,dragDrop:!1}),this.cm.setValue(o),this.cm.on("changes",function(e){t&&(clearTimeout(n.timeout),n.timeout=setTimeout(function(){t(e.getValue())},300))})}},{key:"render",value:function(){var n=this;return D.a.createElement("div",{className:"editor",ref:function(e){n.editor=e}})}}]),e}(k.Component)),j=z;z.propTypes={onChange:T.a.func,value:T.a.string},z.defaultProps={onChange:function(){},value:""};var A=function(n){function e(n){h()(this,e);var t=w()(this,(e.__proto__||p()(e)).call(this,n));return t.playerId=""+parseInt(1e9*Math.random(),10).toString(36),t.document=t.props.children.match(/([^]*)\n?(```[^]+```)/),t.description=B()(t.document[1]),t.source=t.document[2].match(/```(.*)\n?([^]+)```/),t.state={showBlock:!1},t.blockControl=t.blockControl.bind(t),t}return g()(e,n),b()(e,[{key:"componentDidMount",value:function(){this.renderSource(this.source[2])}},{key:"componentWillUnmount",value:function(){this.containerElem&&x.a.unmountComponentAtNode(this.containerElem)}},{key:"blockControl",value:function(){this.setState({showBlock:!this.state.showBlock})}},{key:"renderSource",value:function(n){var e=this;Promise.all([t.e(44),t.e(42)]).then(t.bind(null,316)).then(function(n){var t=["context","React","ReactDOM"],o=[e,D.a,x.a];return L()(n).forEach(function(e){t.push(e),o.push(n[e])}),{args:t,argv:o}}).then(function(t){var o=t.args,r=t.argv,i=Object(R.transform)("\n        class Demo extends React.Component {\n          "+n+"\n        }\n\n        ReactDOM.render(<Demo {...context.props} />, document.getElementById('"+e.playerId+"'))\n      ",{presets:["es2015","react"]}).code;o.push(i),(new(Function.prototype.bind.apply(Function,[null].concat(S()(o))))).apply(void 0,S()(r)),e.source[2]=n}).catch(function(n){0})}},{key:"render",value:function(){var n=this;return D.a.createElement("div",{className:"demo-block demo-box demo-"+this.props.name},D.a.createElement("div",{className:"source",id:this.playerId,ref:function(e){n.containerElem=e}}),this.state.showBlock&&D.a.createElement("div",{className:"meta"},this.description&&D.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:this.description}}),D.a.createElement(j,{value:this.source[2],onChange:function(e){return n.renderSource(e)}})),D.a.createElement("div",{className:"demo-block-control",onClick:this.blockControl},this.state.showBlock?D.a.createElement("span",null,D.a.createElement("i",{className:"el-icon-caret-top"}),"隐藏"):D.a.createElement("span",null,D.a.createElement("i",{className:"el-icon-caret-bottom"}),"展开")))}}]),e}(D.a.Component),H=function(n){function e(n){h()(this,e);var t=w()(this,(e.__proto__||p()(e)).call(this,n));return t.nodeList=[],t.components=new c.a,t.renderer=new B.a.Renderer,t.renderer.table=function(n,e){return'<table class="grid"><thead>'+n+"</thead><tbody>"+e+"</tbody></table>"},t}return g()(e,n),b()(e,[{key:"componentDidMount",value:function(){this.renderDOM()}},{key:"componentDidUpdate",value:function(){this.renderDOM()}},{key:"componentWillUnmount",value:function(){this.nodeList.forEach(function(n){x.a.unmountComponentAtNode(n)})}},{key:"renderDOM",value:function(){var n=!0,e=!1,t=void 0;try{for(var o,r=s()(this.components);!(n=(o=r.next()).done);n=!0){var i=o.value,a=l()(i,2),d=a[0],c=a[1],u=document.getElementById(d);this.nodeList.push(u),u instanceof HTMLElement&&x.a.render(c,u)}}catch(n){e=!0,t=n}finally{try{!n&&r.return&&r.return()}finally{if(e)throw t}}E.a.highlightAll()}},{key:"render",value:function(){var n=this,e=this.document();if("string"==typeof e){this.components.clear();var t=B()(e.replace(/:::\s?demo\s?([^]+?):::/g,function(e,t,o){var i=o.toString(36);return n.components.set(i,D.a.createElement(A,r()({name:n.constructor.name.toLowerCase()},n.props),t)),"<div id="+i+"></div>"}),{renderer:this.renderer});return D.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})}return D.a.createElement("span",null)}}]),e}(D.a.Component);e.a=H},249:function(n,e){n.exports='## Dropdown 下拉框\n下拉框组件。\n\n### 基础用法\n目前支持三种触发方式 `click hover contextMenus`,默认值为`click`。\n:::demo 通过`visible`属性控制显隐。\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      dropdown: false,\n      dropdown2:false,\n      dropdown3:false,\n      dropdown4:false\n    }\n  }\n\n  render() {\n    const overlay = <Menu>\n                <Menu.Item><Checkbox value="name">姓名</Checkbox></Menu.Item>\n                <Menu.Item><Checkbox value="age">年龄</Checkbox></Menu.Item>\n                <Menu.Item onClick={()=>{\n                  this.setState({\n                    dropdown: false,\n                    dropdown2:false,\n                    dropdown3:false,\n                    dropdown4:false\n                  });\n                }}>点我关闭弹窗</Menu.Item>\n              </Menu>;\n\n    return (\n      <div style={{position: \'relative\'}}>\n        <Dropdown\n          visible={this.state.dropdown}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button theme="info">\n              toggle\n            </Button>\n        </Dropdown>\n\n\n        <Dropdown\n          disabled\n          visible={this.state.dropdown2}\n          style={{position: \'absolute\', left: 0, top: 36, minWidth: 200}}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown2: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button disabled theme="info">\n              disabled\n            </Button>\n        </Dropdown>\n\n\n        <Dropdown\n          trigger="hover"\n          visible={this.state.dropdown3}\n          style={{position: \'absolute\', left: 0, top: 36, minWidth: 200}}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown3: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button theme="info">\n              hover me\n            </Button>\n        </Dropdown>\n\n        <Dropdown\n          trigger="contextMenu"\n          visible={this.state.dropdown4}\n          style={{position: \'absolute\', left: 0, top: 36, minWidth: 200}}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown4: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button theme="info">\n              right click me\n            </Button>\n        </Dropdown>\n      </div>\n    )\n  }\n```\n:::\n\n### 弹窗的定位\n定位信息有6种 `bottomLeft, bottomCenter, bottomRight, topLeft, topCenter, topRight`。通过`placement`控制显示位置\n:::demo 通过`placement`属性控制弹窗的位置。\n```js\n  constructor(props) {\n    super(props);\n    this.state = {\n      dropdown: false,\n      dropdown2:false,\n    }\n  }\n  render() {\n    const overlay = <Menu>\n                <Menu.Item><Checkbox value="name">姓名</Checkbox></Menu.Item>\n                <Menu.Item><Checkbox value="age">年龄</Checkbox></Menu.Item>\n                <Menu.Item onClick={()=>{\n                  this.setState({\n                    dropdown: false,\n                    dropdown2:false,\n                  });\n                }}>点我关闭当前弹窗</Menu.Item>\n              </Menu>;\n\n    return (\n      <div style={{position: \'relative\'}}>\n        <Dropdown\n          visible={this.state.dropdown}\n          style={{position: \'absolute\', left: 0, top: 36, minWidth: 200}}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button theme="info">\n              点我从下面弹出\n            </Button>\n        </Dropdown>\n\n        <Dropdown\n          placement="topLeft"\n          visible={this.state.dropdown2}\n          style={{position: \'absolute\', left: 0, top: 36, minWidth: 200}}\n          onVisibleChange={visible => {\n            this.setState({\n              dropdown2: visible\n            });\n          }}\n          overlay={overlay}\n          >\n            <Button theme="info">\n              点我从上面弹出\n            </Button>\n        </Dropdown>\n      </div>\n    )\n  }\n```\n:::\n\n\n### `onVisibleChange` 参数\n这个参数为当显示属性发生变化的回调函数 为必传项，一般情况下, 我们都需要保持外部数据和内部数据的一致性。参考下面用法\n```\nonVisibleChange={(visible)=>{\n      this.setState({\n        dropdownVisible: visible\n      })\n  }\n}\n```\n\n### 静态方法\n```\nDrop.hide();         // 隐藏所有的Dropdown组件\nDrop.show();         // 显示所有的Dropdown组件(不包括禁用的组件)\nDrop.reposition();   // 重新定位所有的组件(不包括隐藏和禁用的组件)\n```\n\n\n### `notRenderInDisabledMode` 参数\n当这个参数为true 且 disable参数也为true的时候，将不会渲染弹窗，这会在一些一直都是disabled状态下的组件节省渲染开销，尤其在渲染大量数据的情况下。\n\n### `className` 和 `style`参数\nclassName 和 style 参数会作用在弹出框的最外层 ui-dropdown节点上。内部的style会覆盖传入的style(若冲突), 会被覆盖的属性有：\n```\ndisplay                  // 控制dropdown的显示\nleft                     // 控制dropdown的位置\ntop                      // 控制dropdown的位置\nanimationDuration        // 控制dropdown动画的事件 默认为300\nzIndex                   // 控制组件的显示层级 默认为9999\nposition                 // 控制组件的定位方式，只能为absolute\n```\n\n### 内部实现\n设 点击的触发组件为 triggerBox, 弹出的组件为 DropdownBox\n+ Dropdown组件在实现的时候，考虑到定位信息的获取，把所有的DropdownBox都动态创建到body的根节点下。然后相对于body进行绝对定位。计算出当前triggerBox的位置然后设置弹出框的绝对定位信息， 若父级中有position:fixed样式，则动态创建到该元素下。\n+ 监听了window.resize事件，当window.resize的时候自动计算目前已弹出的DropdownBox的位置。  \n+ 监听了document的点击事件，当点击外部的时候回自动隐藏DropdownBox。  \n+ 默认在triggerBox和DropdownBox之间有5px的间隙。  \n+ 当trigger参数为hover的时候，鼠标移出之后会延迟300ms后，DropdownBox才会消失，为了让用户在从triggerBox滑到DropdownBox的时候，经过间隙不会直接隐藏DropdownBox。  \n+ DropdownBox的动画效果时长为300ms，目前不支持自定义。  \n+ 当前的弹出框的最小宽度为当前triggerBox的宽度。可以自己设置宽度。\n\n\n### Attributes\n| 参数      | 说明    | 类型      | 可选值       | 默认值   |\n|---------- |-------- |---------- |-------------  |-------- |\n| visible   |  是否显示         | boolean |  -     |    false    |\n| radius    |  是否圆角         | boolean |  -     |    false    |\n| prefixCls |  组件的className  | string | -      | ui-dropdown|\n| overlay   |  组件弹出层的内容  | ReactElement | -  |-|\n| placement |  组件对齐的方式    | string | bottomLeft, bottomCenter, bottomRight, topLeft, topCenter, topRight| bottomLeft |\n| className |  弹出层的className | string | - | - |\n| style |  弹出层的style | React.CSSProperties | - | - |\n| trigger | 出发弹出框的方式 | string | click hover contextMenu | click |\n| disabled | 是否禁用弹出框 | boolean | - | false |\n| zIndex | 当前弹框的zIndex值 | number | - | 9999 |\n| notRenderInDisabledMode | 在disable为true的时候是否不渲染overlay | boolean | - | false |\n| onVisibleChange | 显示属性变化时候的回调函数（必传）| (visible:boolean):=> void | - | - |\n| getPopupContainer | 获取dropdown挂载点的函数（必传）| ():=> HTMLElement | - | - |'},87:function(n,e,t){"use strict";t.r(e);var o=t(22),r=t.n(o),i=t(18),s=t.n(i),a=t(19),l=t.n(a),d=t(20),c=t.n(d),u=t(21),p=t.n(u),m=function(n){function e(){return s()(this,e),c()(this,(e.__proto__||r()(e)).apply(this,arguments))}return p()(e,n),l()(e,[{key:"document",value:function(){return t(249)}}]),e}(t(169).a);e.default=m}}]);