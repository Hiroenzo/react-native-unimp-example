"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(()=>{var b=Object.create;var h=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var W=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var S=(o,n)=>()=>(n||o((n={exports:{}}).exports,n),n.exports);var B=(o,n,t,a)=>{if(n&&typeof n=="object"||typeof n=="function")for(let i of L(n))!C.call(o,i)&&i!==t&&h(o,i,{get:()=>n[i],enumerable:!(a=k(n,i))||a.enumerable});return o};var d=(o,n,t)=>(t=o!=null?b(W(o)):{},B(n||!o||!o.__esModule?h(t,"default",{value:o,enumerable:!0}):t,o));var u=S((E,_)=>{_.exports=Vue});var s=d(u());var c=(o,n)=>{let t=o.__vccOpts||o;for(let[a,i]of n)t[a]=i;return t};var T={name:"u-link",props:{href:{type:String,default:""},text:{type:String,default:""},inWhiteList:{type:Boolean,default:!1}},methods:{openURL(){plus.runtime.openURL(this.href)}}};function D(o,n,t,a,i,p){return(0,s.openBlock)(),(0,s.createElementBlock)("u-text",{style:{"text-decoration":"underline"},href:t.href,onClick:n[0]||(n[0]=(...g)=>p.openURL&&p.openURL(...g)),inWhiteList:t.inWhiteList},(0,s.toDisplayString)(t.text),9,["href","inWhiteList"])}var v=c(T,[["render",D]]);var e=d(u());var U=d(u());function x(o,n){return typeof o=="string"?n:o}var A="/static/componentIndex.png",F={"uni-icon":{"":{fontFamily:"uniicons",fontWeight:"normal"}},"uni-container":{"":{paddingTop:15,paddingRight:15,paddingBottom:15,paddingLeft:15,backgroundColor:"#f8f8f8"}},"uni-header-logo":{"":{paddingTop:15,paddingRight:15,paddingBottom:15,paddingLeft:15,flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"10rpx"}},"uni-header-image":{"":{width:80,height:80}},"uni-hello-text":{"":{marginBottom:20}},"hello-text":{"":{color:"#7A7E83",fontSize:14,lineHeight:20}},"hello-link":{"":{color:"#7A7E83",fontSize:14,lineHeight:20}},"uni-panel":{"":{marginBottom:12}},"uni-panel-h":{"":{backgroundColor:"#ffffff","!flexDirection":"row","!alignItems":"center",paddingTop:12,paddingRight:12,paddingBottom:12,paddingLeft:12}},"uni-panel-h-on":{"":{backgroundColor:"#f0f0f0"}},"uni-panel-text":{"":{flex:1,color:"#000000",fontSize:14,fontWeight:"normal"}},"uni-panel-icon":{"":{marginLeft:15,color:"#999999",fontSize:14,fontWeight:"normal",transform:"rotate(0deg)",transitionDuration:0,transitionProperty:"transform"}},"uni-panel-icon-on":{"":{transform:"rotate(180deg)"}},"uni-navigate-item":{"":{flexDirection:"row",alignItems:"center",backgroundColor:"#FFFFFF",borderTopStyle:"solid",borderTopColor:"#f0f0f0",borderTopWidth:1,paddingTop:12,paddingRight:12,paddingBottom:12,paddingLeft:12,"backgroundColor:active":"#f8f8f8"}},"uni-navigate-text":{"":{flex:1,color:"#000000",fontSize:14,fontWeight:"normal"}},"uni-navigate-icon":{"":{marginLeft:15,color:"#999999",fontSize:14,fontWeight:"normal"}},"@TRANSITION":{"uni-panel-icon":{duration:0,property:"transform"}}},N=weex.requireModule("dom");N.addRule("fontFace",{fontFamily:"uniicons",src:"url('/static/uni.ttf')"});var R={props:{hasLeftWin:{type:Boolean},leftWinActive:{type:String}},data(){return{list:[{id:"view",name:"\u89C6\u56FE\u5BB9\u5668",open:!1,pages:["view","scroll-view","swiper","movable-view","cover-view"]},{id:"content",name:"\u57FA\u7840\u5185\u5BB9",open:!1,pages:["text","rich-text","progress"]},{id:"form",name:"\u8868\u5355\u7EC4\u4EF6",open:!1,pages:["button","checkbox","form","input","label","picker","picker-view","radio","slider","switch","textarea","editor"]},{id:"nav",name:"\u5BFC\u822A",open:!1,pages:["navigator"]},{id:"media",name:"\u5A92\u4F53\u7EC4\u4EF6",open:!1,pages:["image","video"]},{id:"map",name:"\u5730\u56FE",open:!1,pages:["map"]},{id:"canvas",name:"\u753B\u5E03",open:!1,pages:["canvas"]},{id:"web-view",name:"\u7F51\u9875",open:!1,pages:[{name:"\u7F51\u7EDC\u7F51\u9875",url:"/pages/component/web-view/web-view"},{name:"\u672C\u5730\u7F51\u9875",url:"/pages/component/web-view-local/web-view-local"}]},{id:"ad",url:"ad",name:"AD\u7EC4\u4EF6",open:!1}]}},onShareAppMessage(){return{title:"\u6B22\u8FCE\u4F53\u9A8Cuni-app",path:"/pages/tabBar/component/component"}},onNavigationBarButtonTap(o){uni.navigateTo({url:"/pages/about/about"})},methods:{triggerCollapse(o,n){if(!this.list[o].pages){this.goDetailPage("",this.list[o].url);return}for(var t=0;t<this.list.length;++t)o===t?this.list[t].open=!this.list[t].open:this.list[t].open=!1},goDetailPage(o,n){if(typeof n=="string"){let t="/pages/component/"+n+"/"+n;this.hasLeftWin?uni.reLaunch({url:t}):uni.navigateTo({url:t})}else this.hasLeftWin?uni.reLaunch({url:n.url}):uni.navigateTo({url:n.url})}}};function I(o,n,t,a,i,p){let g=x((0,e.resolveDynamicComponent)("u-link"),v);return(0,e.openBlock)(),(0,e.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,e.createElementVNode)("view",{class:"uni-container"},[t.hasLeftWin?(0,e.createCommentVNode)("",!0):((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:0,class:"uni-header-logo"},[(0,e.createElementVNode)("u-image",{class:"uni-header-image",src:A})])),t.hasLeftWin?(0,e.createCommentVNode)("",!0):((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:1,class:"uni-hello-text"},[(0,e.createElementVNode)("u-text",{class:"hello-text"},"uni-app\u5185\u7F6E\u7EC4\u4EF6\uFF0C\u5C55\u793A\u6837\u5F0F\u4EC5\u4F9B\u53C2\u8003\uFF0C\u6587\u6863\u8BE6\u89C1\uFF1A"),(0,e.createVNode)(g,{class:"hello-link",href:"https://uniapp.dcloud.io/component/",text:"https://uniapp.dcloud.io/component/",inWhiteList:!0},null,8,["href","text"])])),((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(i.list,(r,w)=>((0,e.openBlock)(),(0,e.createElementBlock)("view",{class:"uni-panel",key:r.id},[(0,e.createElementVNode)("view",{class:(0,e.normalizeClass)(["uni-panel-h",r.open?"uni-panel-h-on":""]),onClick:l=>p.triggerCollapse(w,r.id)},[(0,e.createElementVNode)("u-text",{class:"uni-panel-text"},(0,e.toDisplayString)(r.name),1),(0,e.createElementVNode)("u-text",{class:(0,e.normalizeClass)(["uni-panel-icon uni-icon",r.open?"uni-panel-icon-on":""])},(0,e.toDisplayString)(r.pages?"\uE581":"\uE470"),3)],10,["onClick"]),r.open?((0,e.openBlock)(),(0,e.createElementBlock)("view",{key:0,class:"uni-panel-c"},[((0,e.openBlock)(!0),(0,e.createElementBlock)(e.Fragment,null,(0,e.renderList)(r.pages,(l,y)=>((0,e.openBlock)(),(0,e.createElementBlock)("view",{class:(0,e.normalizeClass)([{"left-win-active":t.leftWinActive===(l.url?l.url.split("/")[3]:l)&&t.hasLeftWin},"uni-navigate-item"]),key:y,onClick:V=>p.goDetailPage(r.id,l)},[(0,e.createElementVNode)("u-text",{class:"uni-navigate-text"},(0,e.toDisplayString)(l.name?l.name:l),1),(0,e.createElementVNode)("u-text",{class:"uni-navigate-icon uni-icon"},"\uE470")],10,["onClick"]))),128))])):(0,e.createCommentVNode)("",!0)]))),128))])])}var f=c(R,[["render",I],["styles",[F]]]);var m=plus.webview.currentWebview();if(m){let o=parseInt(m.id),n="pages/tabBar/component/component",t={};try{t=JSON.parse(m.__query__)}catch(i){}f.mpType="page";let a=Vue.createPageApp(f,{$store:getApp({allowDefault:!0}).$store,__pageId:o,__pagePath:n,__pageQuery:t});a.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...f.styles||[]])),a.mount("#root")}})();
