"use strict";(self.webpackChunk_zhonghe_horse_mobile=self.webpackChunk_zhonghe_horse_mobile||[]).push([[141],{58595:function(Y,h,n){var E;n.r(h),n.d(h,{demos:function(){return a}});var l=n(15009),y=n.n(l),M=n(5574),W=n.n(M),I=n(99289),O=n.n(I),d=n(67294),A=n(62077),o=n(73691),a={"popup-demo-0":{component:d.memo(d.lazy(O()(y()().mark(function z(){var P,g,_,c;return y()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.resolve().then(n.t.bind(n,67294,19));case 2:return P=t.sent,g=P.useState,t.next=6,Promise.resolve().then(n.bind(n,73691));case 6:return _=t.sent,c=_.Popup,t.abrupt("return",{default:function(){var R=g(!0),L=W()(R,2),$=L[0],K=L[1],U=[{label:"\u9009\u9879\u4E00",value:"1"},{label:"\u9009\u9879\u4E8C",value:"2"},{label:"\u9009\u9879\u4E09",value:"3"},{label:"\u9009\u9879\u56DB",value:"4"},{label:"\u9009\u9879\u4E94",value:"5"}],G=function(V){alert(V)},Z=function(){K(!1)};return d.createElement(c,{visible:$,list:U,title:"\u6211\u662F\u4E00\u4E2A\u6807\u9898",onChange:G,onClickCloseIcon:Z})}});case 9:case"end":return t.stop()}},z)})))),asset:{type:"BLOCK",id:"popup-demo-0",refAtomIds:["Popup"],dependencies:{"index.jsx":{type:"FILE",value:`import { useState } from 'react';
import { Popup } from '@zhonghe/horse-mobile';

export default () => {
  const [visible, setVisible] = useState(true);
  const list = [
    { label: '\u9009\u9879\u4E00', value: '1' },
    { label: '\u9009\u9879\u4E8C', value: '2' },
    { label: '\u9009\u9879\u4E09', value: '3' },
    { label: '\u9009\u9879\u56DB', value: '4' },
    { label: '\u9009\u9879\u4E94', value: '5' },
  ];
  const onChange = (value) => {
    alert(value);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <Popup
      visible={visible}
      list={list}
      title="\u6211\u662F\u4E00\u4E2A\u6807\u9898"
      onChange={onChange}
      onClickCloseIcon={onClose}
    />
  );
};`},react:{type:"NPM",value:"18.3.1"},"@zhonghe/horse-mobile":{type:"NPM",value:"0.0.1"}},entry:"index.jsx"},context:{react:E||(E=n.t(d,2)),"@zhonghe/horse-mobile":o},renderOpts:{compile:function(){var z=O()(y()().mark(function g(){var _,c=arguments;return y()().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(19).then(n.bind(n,4019));case 2:return t.abrupt("return",(_=t.sent).default.apply(_,c));case 3:case"end":return t.stop()}},g)}));function P(){return z.apply(this,arguments)}return P}()}}}},73691:function(Y,h,n){n.r(h),n.d(h,{AnswerPopup:function(){return g},Button:function(){return R},Cell:function(){return U},Popup:function(){return F},Tabs:function(){return w},TextArea:function(){return ae}});var E=n(97857),l=n.n(E),y=n(5574),M=n.n(y),W=n(13769),I=n.n(W),O=n(93967),d=n.n(O),A=n(67294),o=n(55649),a=n(85893),z=["visible","round","style","className","title","maxLength","onClickCloseIcon","onSubmit","buttonText"],P=function(e){var u=e.visible,r=e.round,i=r===void 0?!0:r,b=e.style,C=e.className,v=e.title,f=e.maxLength,x=f===void 0?1e3:f,j=e.onClickCloseIcon,m=e.onSubmit,p=e.buttonText,D=p===void 0?"\u63D0\u4EA4":p,N=I()(e,z),s=(0,A.useState)(!1),H=M()(s,2),Q=H[0],te=H[1],le=function(){te(!Q)},oe=(0,A.useState)(""),J=M()(oe,2),se=J[0],re=J[1];return(0,a.jsxs)(o.GI,l()(l()({visible:u,closeable:!1,position:"bottom",round:i},N),{},{style:l()(l()({},b),{},{height:Q?"100%":"200px"}),className:d()("rv-zm__popup",C),onClickCloseIcon:j,children:[(0,a.jsxs)(o.kC,{justify:"center",align:"center",className:"rv-zm__title",children:[(0,a.jsx)("div",{className:"rv-zm__title-left",onClick:le,children:(0,a.jsx)("i",{className:d()(Q?"rv-zm__shrink":"rv-zm__expand")})}),(0,a.jsx)(o.kC.Item,{flex:1,children:(0,a.jsx)(o.kC,{justify:"center",align:"center",className:"rv-zm__title-center",children:v})}),(0,a.jsx)("div",{className:"rv-zm__title-right",children:(0,a.jsx)(o.zx,{color:"#268CFF",round:!0,size:"mini",style:{"--rv-button-mini-padding":"0 18px"},onClick:function(){return m==null?void 0:m(se)},children:D})})]}),(0,a.jsx)(o.II.TextArea,{className:"rv-zm__content",placeholder:"\u6211\u6765\u56DE\u7B54",maxLength:x,showWordLimit:!0,onChange:re})]}))},g=P,_=n(9783),c=n.n(_),B=["size","type","color","block","square","className","style","children","fontColor","borderColor","borderRadius"],t="zm-button",S=function(e){var u=e.size,r=e.type,i=e.color,b=e.block,C=e.square,v=e.className,f=e.style,x=e.children,j=e.fontColor,m=e.borderColor,p=e.borderRadius,D=I()(e,B),N=(0,A.useCallback)(function(){var s={};return i&&(s.background=i,i!=null&&i.includes("gradient")?s.border=0:s.borderColor=i),j&&(s.color=j),m&&(s.borderWidth="1px",s.borderColor=m),p&&(s.borderRadius=p),s},[i]);return(0,a.jsx)("button",l()(l()({type:"button"},D),{},{className:d()(t,c()(c()(c()(c()({},"".concat(t,"-").concat(u),u),"".concat(t,"-").concat(r),r),"".concat(t,"-square"),C),"".concat(t,"-block"),b),v),style:l()(l()({},N()),f),children:x&&(0,a.jsx)("span",{children:x})}))};S.defaultProps={size:"normal",type:"primary",square:!1};var R=S,L=["className"],$=function(e){var u=e.className,r=I()(e,L);return(0,a.jsx)(o.bL,l()(l()({},r),{},{className:d()("rv-zm__cell",u)}))},K=Object.assign($,{Group:o.bL.Group}),U=K,G=["visible","round","closeable","position","style","className","list","title"],Z=function(e){var u=e.visible,r=e.round,i=r===void 0?!0:r,b=e.closeable,C=b===void 0?!0:b,v=e.position,f=v===void 0?"bottom":v,x=e.style,j=e.className,m=e.list,p=m===void 0?[]:m,D=e.title,N=I()(e,G);return(0,a.jsx)(o.GI,l()(l()({visible:u,closeable:C,position:f,round:i},N),{},{style:x,title:D,className:d()("z-popup",j),children:(0,a.jsx)(o.Y8.Group,{onChange:e.onChange,children:(0,a.jsx)(o.bL.Group,{children:p.map(function(s){return(0,a.jsx)(o.bL,{title:s.label,rightIcon:(0,a.jsx)(o.Y8,{name:s.value})},s.value)})})})}))},F=Z,V=["className","size","onChange","children","lineWidth"],X=function(e){var u=e.className,r=e.size,i=r===void 0?16:r,b=e.onChange,C=e.children,v=e.lineWidth,f=v===void 0?15:v,x=I()(e,V);return(0,a.jsx)(o.mQ,l()(l()({},x),{},{style:{"--rv-tab-font-size":"".concat(i,"px")},lineWidth:f,onChange:b,className:d()("rc-zm__tabs",u),children:C}))},k=Object.assign(X,{TabPane:o.mQ.TabPane}),w=k,q=n(49677),ee=n.n(q),ne=function(e){var u=Object.assign({},(ee()(e),e));return(0,a.jsx)("div",{className:"rc-zm__textarea",children:(0,a.jsx)(o.II.TextArea,l()({},u))})},ae=ne},86332:function(Y,h,n){n.r(h),n.d(h,{texts:function(){return l}});var E=n(62077);const l=[{value:"\u5E95\u90E8\u5F39\u7A97\u5C55\u793A, \u652F\u6301\u9009\u9879\u5217\u8868\uFF0C\u9009\u9879\u9009\u4E2D\u5207\u6362\u4E8B\u4EF6\u56DE\u8C03\u3002",paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"visible",paraId:1,tocIndex:2},{value:"\u662F\u5426\u663E\u793A\u5E95\u90E8\u5F39\u7A97",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"title",paraId:1,tocIndex:2},{value:"\u5F39\u51FA\u5C42\u6807\u9898",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"list",paraId:1,tocIndex:2},{value:"\u9009\u9879\u6570\u7EC4",paraId:1,tocIndex:2},{value:"{ name, value }[]",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"\u4E8B\u4EF6\u540D",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u56DE\u8C03\u53C2\u6570",paraId:2,tocIndex:3},{value:"onChange",paraId:2,tocIndex:3},{value:"\u5217\u8868\u503C\u5207\u6362\u9009\u4E2D\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6",paraId:2,tocIndex:3},{value:"value: string",paraId:2,tocIndex:3},{value:"onClickCloseIcon",paraId:2,tocIndex:3},{value:"\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u65F6\u89E6\u53D1",paraId:2,tocIndex:3},{value:"null",paraId:2,tocIndex:3}]}}]);
