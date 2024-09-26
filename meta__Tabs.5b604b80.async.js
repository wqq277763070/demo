"use strict";(self.webpackChunk_zhonghe_horse_mobile=self.webpackChunk_zhonghe_horse_mobile||[]).push([[541],{15521:function($,d,e){var C;e.r(d),e.d(d,{demos:function(){return s}});var r=e(15009),h=e.n(r),j=e(99289),O=e.n(j),t=e(67294),A=e(81198),v=e(73691),L=e(75020),s={"tabs-demo-0":{component:t.memo(t.lazy(O()(h()().mark(function l(){var D,W,E,n,x,o;return h()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,Promise.resolve().then(e.t.bind(e,67294,19));case 2:return D=c.sent,W=D.useState,c.next=6,Promise.resolve().then(e.bind(e,73691));case 6:return E=c.sent,n=E.Tabs,c.next=10,Promise.resolve().then(e.bind(e,75020));case 10:return x=c.sent,o=x.default,c.abrupt("return",{default:function(){var S=function(K){console.log(K)};return t.createElement("div",null,t.createElement(o,{title:"\u57FA\u7840\u7528\u6CD5"},t.createElement(n,{onChange:S},t.createElement(n.TabPane,{title:"\u6807\u7B7E1"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98751"),t.createElement(n.TabPane,{title:"\u6807\u7B7E2"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98752"),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98753"))),t.createElement(n,{size:14},t.createElement(n.TabPane,{title:"\u6807\u7B7E1"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98751"),t.createElement(n.TabPane,{title:"\u6807\u7B7E2"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98752"),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"},"\u4E0B\u5212\u7EBF\u6807\u7B7E\u98753")),t.createElement(n,{type:"capsule"},t.createElement(n.TabPane,{title:"\u6807\u7B7E1"},"\u80F6\u56CA\u6807\u7B7E\u98751"),t.createElement(n.TabPane,{title:"\u6807\u7B7E2"},"\u80F6\u56CA\u6807\u7B7E\u98752"),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"},"\u80F6\u56CA\u6807\u7B7E\u98753")),t.createElement(o,{title:"\u5BF9\u9F50\u65B9\u5F0F"},t.createElement(n,{align:"start"},t.createElement(n.TabPane,{title:"\u6807\u7B7E1"}),t.createElement(n.TabPane,{title:"\u6807\u7B7E2"}),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"})),t.createElement(n,{align:"start",type:"capsule"},t.createElement(n.TabPane,{title:"\u6807\u7B7E1"}),t.createElement(n.TabPane,{title:"\u6807\u7B7E2"}),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"}))),t.createElement(o,{title:"\u7981\u7528\u6807\u7B7E"},t.createElement(n,null,t.createElement(n.TabPane,{title:"\u6807\u7B7E1"}),t.createElement(n.TabPane,{title:"\u6807\u7B7E2",disabled:!0}),t.createElement(n.TabPane,{title:"\u6807\u7B7E3"}))),t.createElement(o,{title:"\u6807\u7B7E\u680F\u6EDA\u52A8"},t.createElement(n,null,[1,2,3,4,5,6,7,8].map(function(N){return t.createElement(n.TabPane,{key:N,title:"\u6807\u7B7E".concat(N)},"\u5185\u5BB9 ",N)}))))}});case 13:case"end":return c.stop()}},l)})))),asset:{type:"BLOCK",id:"tabs-demo-0",refAtomIds:["Tabs"],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Tabs } from '@zhonghe/horse-mobile';
import Demo from './demo';

export default () => {
  const onChange = (value) => {
    console.log(value);
  };
  return (
    <div>
      <Demo title="\u57FA\u7840\u7528\u6CD5">
        <Tabs onChange={onChange}>
          <Tabs.TabPane title="\u6807\u7B7E1">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98751</Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E2">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98752</Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E3">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98753</Tabs.TabPane>
        </Tabs>
      </Demo>
      <Tabs size={14}>
        <Tabs.TabPane title="\u6807\u7B7E1">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98751</Tabs.TabPane>
        <Tabs.TabPane title="\u6807\u7B7E2">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98752</Tabs.TabPane>
        <Tabs.TabPane title="\u6807\u7B7E3">\u4E0B\u5212\u7EBF\u6807\u7B7E\u98753</Tabs.TabPane>
      </Tabs>
      <Tabs type="capsule">
        <Tabs.TabPane title="\u6807\u7B7E1">\u80F6\u56CA\u6807\u7B7E\u98751</Tabs.TabPane>
        <Tabs.TabPane title="\u6807\u7B7E2">\u80F6\u56CA\u6807\u7B7E\u98752</Tabs.TabPane>
        <Tabs.TabPane title="\u6807\u7B7E3">\u80F6\u56CA\u6807\u7B7E\u98753</Tabs.TabPane>
      </Tabs>

      <Demo title="\u5BF9\u9F50\u65B9\u5F0F">
        <Tabs align="start">
          <Tabs.TabPane title="\u6807\u7B7E1"></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E2"></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E3"></Tabs.TabPane>
        </Tabs>
        <Tabs align="start" type="capsule">
          <Tabs.TabPane title="\u6807\u7B7E1"></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E2"></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E3"></Tabs.TabPane>
        </Tabs>
      </Demo>

      <Demo title="\u7981\u7528\u6807\u7B7E">
        <Tabs>
          <Tabs.TabPane title="\u6807\u7B7E1"></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E2" disabled></Tabs.TabPane>
          <Tabs.TabPane title="\u6807\u7B7E3"></Tabs.TabPane>
        </Tabs>
      </Demo>

      <Demo title="\u6807\u7B7E\u680F\u6EDA\u52A8">
        <Tabs>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <Tabs.TabPane key={item} title={\`\u6807\u7B7E\${item}\`}>
              \u5185\u5BB9 {item}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </Demo>
    </div>
  );
};`},react:{type:"NPM",value:"18.3.1"},"@zhonghe/horse-mobile":{type:"NPM",value:"0.0.1"},"./demo.tsx":{type:"FILE",value:e(82480).Z}},entry:"index.jsx"},context:{react:C||(C=e.t(t,2)),"@zhonghe/horse-mobile":v,"D:/fyzh/horse-mobile/src/Tabs/demo.tsx":L},renderOpts:{compile:function(){var l=O()(h()().mark(function W(){var E,n=arguments;return h()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e.e(19).then(e.bind(e,4019));case 2:return o.abrupt("return",(E=o.sent).default.apply(E,n));case 3:case"end":return o.stop()}},W)}));function D(){return l.apply(this,arguments)}return D}()}}}},75020:function($,d,e){e.r(d),e.d(d,{default:function(){return j}});var C=e(67294),r=e(85893),h=function(t){var A=t.title,v=t.children;return(0,r.jsxs)("div",{className:"demo",children:[A&&(0,r.jsx)("div",{className:"demo-title",children:A}),(0,r.jsx)("div",{className:"demo-content",children:v})]})},j=h},73691:function($,d,e){e.r(d),e.d(d,{AnswerPopup:function(){return E},Button:function(){return G},Cell:function(){return Q},Popup:function(){return J},Tabs:function(){return w},TextArea:function(){return te}});var C=e(97857),r=e.n(C),h=e(5574),j=e.n(h),O=e(13769),t=e.n(O),A=e(93967),v=e.n(A),L=e(67294),s=e(55649),l=e(85893),D=["visible","round","style","className","title","maxLength","onClickCloseIcon","onSubmit","buttonText"],W=function(a){var b=a.visible,u=a.round,m=u===void 0?!0:u,P=a.style,y=a.className,T=a.title,f=a.maxLength,p=f===void 0?1e3:f,M=a.onClickCloseIcon,I=a.onSubmit,g=a.buttonText,B=g===void 0?"\u63D0\u4EA4":g,_=t()(a,D),i=(0,L.useState)(!1),Z=j()(i,2),U=Z[0],ne=Z[1],le=function(){ne(!U)},re=(0,L.useState)(""),F=j()(re,2),se=F[0],oe=F[1];return(0,l.jsxs)(s.GI,r()(r()({visible:b,closeable:!1,position:"bottom",round:m},_),{},{style:r()(r()({},P),{},{height:U?"100%":"200px"}),className:v()("rv-zm__popup",y),onClickCloseIcon:M,children:[(0,l.jsxs)(s.kC,{justify:"center",align:"center",className:"rv-zm__title",children:[(0,l.jsx)("div",{className:"rv-zm__title-left",onClick:le,children:(0,l.jsx)("i",{className:v()(U?"rv-zm__shrink":"rv-zm__expand")})}),(0,l.jsx)(s.kC.Item,{flex:1,children:(0,l.jsx)(s.kC,{justify:"center",align:"center",className:"rv-zm__title-center",children:T})}),(0,l.jsx)("div",{className:"rv-zm__title-right",children:(0,l.jsx)(s.zx,{color:"#268CFF",round:!0,size:"mini",style:{"--rv-button-mini-padding":"0 18px"},onClick:function(){return I==null?void 0:I(se)},children:B})})]}),(0,l.jsx)(s.II.TextArea,{className:"rv-zm__content",placeholder:"\u6211\u6765\u56DE\u7B54",maxLength:p,showWordLimit:!0,onChange:oe})]}))},E=W,n=e(9783),x=e.n(n),o=["size","type","color","block","square","className","style","children","fontColor","borderColor","borderRadius"],z="zm-button",c=function(a){var b=a.size,u=a.type,m=a.color,P=a.block,y=a.square,T=a.className,f=a.style,p=a.children,M=a.fontColor,I=a.borderColor,g=a.borderRadius,B=t()(a,o),_=(0,L.useCallback)(function(){var i={};return m&&(i.background=m,m!=null&&m.includes("gradient")?i.border=0:i.borderColor=m),M&&(i.color=M),I&&(i.borderWidth="1px",i.borderColor=I),g&&(i.borderRadius=g),i},[m]);return(0,l.jsx)("button",r()(r()({type:"button"},B),{},{className:v()(z,x()(x()(x()(x()({},"".concat(z,"-").concat(b),b),"".concat(z,"-").concat(u),u),"".concat(z,"-square"),y),"".concat(z,"-block"),P),T),style:r()(r()({},_()),f),children:p&&(0,l.jsx)("span",{children:p})}))};c.defaultProps={size:"normal",type:"primary",square:!1};var G=c,S=["className"],N=function(a){var b=a.className,u=t()(a,S);return(0,l.jsx)(s.bL,r()(r()({},u),{},{className:v()("rv-zm__cell",b)}))},K=Object.assign(N,{Group:s.bL.Group}),Q=K,Y=["visible","round","closeable","position","style","className","list","title"],H=function(a){var b=a.visible,u=a.round,m=u===void 0?!0:u,P=a.closeable,y=P===void 0?!0:P,T=a.position,f=T===void 0?"bottom":T,p=a.style,M=a.className,I=a.list,g=I===void 0?[]:I,B=a.title,_=t()(a,Y);return(0,l.jsx)(s.GI,r()(r()({visible:b,closeable:y,position:f,round:m},_),{},{style:p,title:B,className:v()("z-popup",M),children:(0,l.jsx)(s.Y8.Group,{onChange:a.onChange,children:(0,l.jsx)(s.bL.Group,{children:g.map(function(i){return(0,l.jsx)(s.bL,{title:i.label,rightIcon:(0,l.jsx)(s.Y8,{name:i.value})},i.value)})})})}))},J=H,V=["className","size","onChange","children","lineWidth"],X=function(a){var b=a.className,u=a.size,m=u===void 0?16:u,P=a.onChange,y=a.children,T=a.lineWidth,f=T===void 0?15:T,p=t()(a,V);return(0,l.jsx)(s.mQ,r()(r()({},p),{},{style:{"--rv-tab-font-size":"".concat(m,"px")},lineWidth:f,onChange:P,className:v()("rc-zm__tabs",b),children:y}))},k=Object.assign(X,{TabPane:s.mQ.TabPane}),w=k,q=e(49677),ee=e.n(q),ae=function(a){var b=Object.assign({},(ee()(a),a));return(0,l.jsx)("div",{className:"rc-zm__textarea",children:(0,l.jsx)(s.II.TextArea,r()({},b))})},te=ae},99974:function($,d,e){e.r(d),e.d(d,{texts:function(){return r}});var C=e(81198);const r=[{value:"\u63D0\u4F9B\u591A\u4E2A\u9009\u9879\u4F9B\u7528\u6237\u9009\u62E9\uFF0C\u4E00\u822C\u5728\u7B5B\u9009\u548C\u8868\u5355\u4E2D\u4F7F\u7528\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"active",paraId:1,tocIndex:2},{value:"\u5F53\u524D\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26",paraId:1,tocIndex:2},{value:"number | string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"defaultActive",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u9009\u4E2D\u9879\u7684\u6807\u8BC6\u7B26",paraId:1,tocIndex:2},{value:"number | string",paraId:1,tocIndex:2},{value:"0",paraId:1,tocIndex:2},{value:"type",paraId:1,tocIndex:2},{value:"\u6837\u5F0F\u98CE\u683C\u7C7B\u578B",paraId:1,tocIndex:2},{value:"line|card|capsule|jumbo",paraId:1,tocIndex:2},{value:"line",paraId:1,tocIndex:2},{value:"align",paraId:1,tocIndex:2},{value:"\u6807\u7B7E\u680F\u5BF9\u9F50\u65B9\u5F0F, \u53EF\u9009\u503C ",paraId:1,tocIndex:2},{value:"start",paraId:1,tocIndex:2},{value:" ",paraId:1,tocIndex:2},{value:"center",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"center",paraId:1,tocIndex:2},{value:"lineWidth",paraId:1,tocIndex:2},{value:"type",paraId:1,tocIndex:2},{value:" \u4E3A ",paraId:1,tocIndex:2},{value:"line",paraId:1,tocIndex:2},{value:" \u65F6\u751F\u6548\uFF0C\u5E95\u90E8\u6761\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D ",paraId:1,tocIndex:2},{value:"px",paraId:1,tocIndex:2},{value:"number | string",paraId:1,tocIndex:2},{value:"15px",paraId:1,tocIndex:2},{value:"lineHeight",paraId:1,tocIndex:2},{value:"type",paraId:1,tocIndex:2},{value:" \u4E3A ",paraId:1,tocIndex:2},{value:"line",paraId:1,tocIndex:2},{value:" \u65F6\u751F\u6548\uFF0C\u5E95\u90E8\u6761\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D ",paraId:1,tocIndex:2},{value:"px",paraId:1,tocIndex:2},{value:"number | string",paraId:1,tocIndex:2},{value:"3px",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6\u540D",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onClickTab",paraId:2,tocIndex:3},{value:"\u70B9\u51FB\u6807\u7B7E\u65F6\u89E6\u53D1",paraId:2,tocIndex:3},{value:"{ name: string | number, event: MouseEvent, disabled: boolean }",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\u5F53\u524D\u6FC0\u6D3B\u7684\u6807\u7B7E\u6539\u53D8\u65F6\u89E6\u53D1",paraId:2,tocIndex:3},{value:"name: string | number, tabIndex: number",paraId:2,tocIndex:3}]},82480:function($,d){d.Z=`import React from 'react';
import './demo.scss';

const Demo = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="demo">
      {title && <div className="demo-title">{title}</div>}
      <div className="demo-content">{children}</div>
    </div>
  );
};

export default Demo;
`}}]);
