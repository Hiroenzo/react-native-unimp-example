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


(()=>{var b=Object.create;var h=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var w=Object.getOwnPropertyNames;var S=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty;var C=(n,a)=>()=>(a||n((a={exports:{}}).exports,a),a.exports);var B=(n,a,t,o)=>{if(a&&typeof a=="object"||typeof a=="function")for(let l of w(a))!k.call(n,l)&&l!==t&&h(n,l,{get:()=>a[l],enumerable:!(o=v(a,l))||o.enumerable});return n};var _=(n,a,t)=>(t=n!=null?b(S(n)):{},B(a||!n||!n.__esModule?h(t,"default",{value:n,enumerable:!0}):t,n));var s=C((I,p)=>{p.exports=Vue});var i=_(s());var c=(n,a)=>{let t=n.__vccOpts||n;for(let[o,l]of a)t[o]=l;return t};var T={"uni-card":{"":{marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,paddingTop:0,paddingRight:8,paddingBottom:0,paddingLeft:8,borderRadius:4,overflow:"hidden",fontFamily:"Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif",backgroundColor:"#ffffff",flex:1}},"uni-card__cover":{".uni-card ":{position:"relative",marginTop:10,flexDirection:"row",overflow:"hidden",borderRadius:4}},"uni-card__cover-image":{".uni-card .uni-card__cover ":{flex:1}},"uni-card__header":{".uni-card ":{display:"flex",borderBottomWidth:1,borderBottomStyle:"solid",borderBottomColor:"#EBEEF5",flexDirection:"row",alignItems:"center",paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,overflow:"hidden"}},"uni-card__header-box":{".uni-card .uni-card__header ":{flex:1,flexDirection:"row",alignItems:"center",overflow:"hidden"}},"uni-card__header-avatar":{".uni-card .uni-card__header ":{width:40,height:40,overflow:"hidden",borderRadius:5,marginRight:10}},"uni-card__header-avatar-image":{".uni-card .uni-card__header .uni-card__header-avatar ":{flex:1,width:40,height:40}},"uni-card__header-content":{".uni-card .uni-card__header ":{flexDirection:"column",justifyContent:"center",flex:1,overflow:"hidden"}},"uni-card__header-content-title":{".uni-card .uni-card__header .uni-card__header-content ":{fontSize:15,color:"#3a3a3a"}},"uni-card__header-content-subtitle":{".uni-card .uni-card__header .uni-card__header-content ":{fontSize:12,marginTop:5,color:"#909399"}},"uni-card__header-extra":{".uni-card .uni-card__header ":{lineHeight:12}},"uni-card__header-extra-text":{".uni-card .uni-card__header .uni-card__header-extra ":{fontSize:12,color:"#909399"}},"uni-card__content":{".uni-card ":{paddingTop:10,paddingRight:10,paddingBottom:10,paddingLeft:10,fontSize:14,color:"#6a6a6a",lineHeight:22}},"uni-card__actions":{".uni-card ":{fontSize:12}},"uni-card--border":{"":{borderWidth:1,borderStyle:"solid",borderColor:"#EBEEF5"}},"uni-card--shadow":{"":{position:"relative"}},"uni-card--full":{"":{marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,borderLeftWidth:0,borderRadius:0}},"uni-ellipsis":{"":{lines:1}}},R={name:"UniCard",emits:["click"],props:{title:{type:String,default:""},subTitle:{type:String,default:""},padding:{type:String,default:"10px"},margin:{type:String,default:"15px"},spacing:{type:String,default:"0 10px"},extra:{type:String,default:""},cover:{type:String,default:""},thumbnail:{type:String,default:""},isFull:{type:Boolean,default:!1},isShadow:{type:Boolean,default:!0},shadow:{type:String,default:"0px 0px 3px 1px rgba(0, 0, 0, 0.08)"},border:{type:Boolean,default:!0}},methods:{onClick(n){this.$emit("click",n)}}};function z(n,a,t,o,l,u){return(0,i.openBlock)(),(0,i.createElementBlock)("view",{class:(0,i.normalizeClass)(["uni-card",{"uni-card--full":t.isFull,"uni-card--shadow":t.isShadow,"uni-card--border":t.border}]),style:(0,i.normalizeStyle)({margin:t.isFull?0:t.margin,padding:t.spacing,"box-shadow":t.isShadow?t.shadow:""}),renderWhole:!0},[(0,i.renderSlot)(n.$slots,"cover",{},()=>[t.cover?((0,i.openBlock)(),(0,i.createElementBlock)("view",{key:0,class:"uni-card__cover"},[(0,i.createElementVNode)("u-image",{class:"uni-card__cover-image",mode:"widthFix",onClick:a[0]||(a[0]=d=>u.onClick("cover")),src:t.cover},null,8,["src"])])):(0,i.createCommentVNode)("",!0)]),(0,i.renderSlot)(n.$slots,"title",{},()=>[t.title||t.extra?((0,i.openBlock)(),(0,i.createElementBlock)("view",{key:0,class:"uni-card__header"},[(0,i.createElementVNode)("view",{class:"uni-card__header-box",onClick:a[1]||(a[1]=d=>u.onClick("title"))},[t.thumbnail?((0,i.openBlock)(),(0,i.createElementBlock)("view",{key:0,class:"uni-card__header-avatar"},[(0,i.createElementVNode)("u-image",{class:"uni-card__header-avatar-image",src:t.thumbnail,mode:"aspectFit"},null,8,["src"])])):(0,i.createCommentVNode)("",!0),(0,i.createElementVNode)("view",{class:"uni-card__header-content"},[(0,i.createElementVNode)("u-text",{class:"uni-card__header-content-title uni-ellipsis"},(0,i.toDisplayString)(t.title),1),t.title&&t.subTitle?((0,i.openBlock)(),(0,i.createElementBlock)("u-text",{key:0,class:"uni-card__header-content-subtitle uni-ellipsis"},(0,i.toDisplayString)(t.subTitle),1)):(0,i.createCommentVNode)("",!0)])]),(0,i.createElementVNode)("view",{class:"uni-card__header-extra",onClick:a[2]||(a[2]=d=>u.onClick("extra"))},[(0,i.createElementVNode)("u-text",{class:"uni-card__header-extra-text"},(0,i.toDisplayString)(t.extra),1)])])):(0,i.createCommentVNode)("",!0)]),(0,i.createElementVNode)("view",{class:"uni-card__content",style:(0,i.normalizeStyle)({padding:t.padding}),onClick:a[3]||(a[3]=d=>u.onClick("content"))},[(0,i.renderSlot)(n.$slots,"default")],4),(0,i.createElementVNode)("view",{class:"uni-card__actions",onClick:a[4]||(a[4]=d=>u.onClick("actions"))},[(0,i.renderSlot)(n.$slots,"actions")])],6)}var y=c(R,[["render",z],["styles",[T]]]);var e=_(s());var A=_(s());function m(n,a){return typeof n=="string"?a:n}var r=_(s());var E={"uni-section":{"":{backgroundColor:"#ffffff"}},"uni-section-header":{".uni-section ":{position:"relative",flexDirection:"row",alignItems:"center",paddingTop:12,paddingRight:10,paddingBottom:12,paddingLeft:10,fontWeight:"normal"}},"uni-section-header__decoration":{".uni-section ":{marginRight:6,backgroundColor:"#2979ff"},".uni-section .line":{width:4,height:12,borderRadius:10},".uni-section .circle":{width:8,height:8,borderTopRightRadius:50,borderTopLeftRadius:50,borderBottomLeftRadius:50,borderBottomRightRadius:50},".uni-section .square":{width:8,height:8}},"uni-section-header__content":{".uni-section ":{flexDirection:"column",flex:1,color:"#333333"}},distraction:{".uni-section .uni-section-header__content ":{flexDirection:"row",alignItems:"center"}},"uni-section-header__content-sub":{".uni-section ":{marginTop:2}},"uni-section-header__slot-right":{".uni-section ":{fontSize:14}},"uni-section-content":{".uni-section ":{fontSize:14}}},D={name:"UniSection",emits:["click"],props:{type:{type:String,default:""},title:{type:String,required:!0,default:""},titleFontSize:{type:String,default:"14px"},titleColor:{type:String,default:"#333"},subTitle:{type:String,default:""},subTitleFontSize:{type:String,default:"12px"},subTitleColor:{type:String,default:"#999"},padding:{type:[Boolean,String],default:!1}},computed:{_padding(){return typeof this.padding=="string"?this.padding:this.padding?"10px":""}},watch:{title(n){uni.report&&n!==""&&uni.report("title",n)}},methods:{onClick(){this.$emit("click")}}};function F(n,a,t,o,l,u){return(0,r.openBlock)(),(0,r.createElementBlock)("view",{class:"uni-section",renderWhole:!0},[(0,r.createElementVNode)("view",{class:"uni-section-header",onClick:a[0]||(a[0]=(...d)=>u.onClick&&u.onClick(...d))},[t.type?((0,r.openBlock)(),(0,r.createElementBlock)("view",{key:0,class:(0,r.normalizeClass)(["uni-section-header__decoration",t.type])},null,2)):(0,r.renderSlot)(n.$slots,"decoration",{key:1}),(0,r.createElementVNode)("view",{class:"uni-section-header__content"},[(0,r.createElementVNode)("u-text",{style:(0,r.normalizeStyle)({"font-size":t.titleFontSize,color:t.titleColor}),class:(0,r.normalizeClass)(["uni-section__content-title",{distraction:!t.subTitle}])},(0,r.toDisplayString)(t.title),7),t.subTitle?((0,r.openBlock)(),(0,r.createElementBlock)("u-text",{key:0,style:(0,r.normalizeStyle)({"font-size":t.subTitleFontSize,color:t.subTitleColor}),class:"uni-section-header__content-sub"},(0,r.toDisplayString)(t.subTitle),5)):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("view",{class:"uni-section-header__slot-right"},[(0,r.renderSlot)(n.$slots,"right")])]),(0,r.createElementVNode)("view",{class:"uni-section-content",style:(0,r.normalizeStyle)({padding:u._padding})},[(0,r.renderSlot)(n.$slots,"default")],4)])}var x=c(D,[["render",F],["styles",[E]]]);var N={};function L(n,a){let t=m((0,e.resolveDynamicComponent)("uni-card"),y),o=m((0,e.resolveDynamicComponent)("uni-section"),x);return(0,e.openBlock)(),(0,e.createElementBlock)("scroll-view",{scrollY:!0,showScrollbar:!0,enableBackToTop:!0,bubble:"true",style:{flexDirection:"column"}},[(0,e.createElementVNode)("view",{class:"container"},[(0,e.createVNode)(t,{"is-shadow":!1,"is-full":""},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("u-text",{class:"uni-h6"},"\u5B57\u4F53\u8F85\u52A9\u6837\u5F0F\u63D0\u4F9B\u4E86\u5E38\u89C1\u7684\u5B57\u4F53\u6837\u5F0F\u7C7B")]),_:1}),(0,e.createVNode)(o,{title:".uni-h1",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-ma-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h1"},"\u4E00\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-h2",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h2"},"\u4E8C\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-h3",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h3"},"\u4E09\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-h4",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h4"},"\u56DB\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-h5",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h5"},"\u4E94\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-h6",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-h6"},"\u516D\u7EA7\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-subtitle",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-subtitle"},"\u526F\u6807\u9898")])]),_:1}),(0,e.createVNode)(o,{title:".uni-body",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-body"},"uni-ui \u662F DCloud \u5B98\u65B9\u9762\u5411 uni-app \u5F00\u53D1\u8005\u63D0\u4F9B\u7684\u4E00\u5957 ui \u89E3\u51B3\u65B9\u6848")])]),_:1}),(0,e.createVNode)(o,{title:".uni-caption",type:"line"},{default:(0,e.withCtx)(()=>[(0,e.createElementVNode)("view",{class:"uni-mx-5 uni-mb-5 uni-pl-10"},[(0,e.createElementVNode)("u-text",{class:"uni-caption"},"\u6807\u6CE8\u8BF4\u660E\u6587\u5B57")])]),_:1})])])}var f=c(N,[["render",L]]);var g=plus.webview.currentWebview();if(g){let n=parseInt(g.id),a="pages/extUI/font/font",t={};try{t=JSON.parse(g.__query__)}catch(l){}f.mpType="page";let o=Vue.createPageApp(f,{$store:getApp({allowDefault:!0}).$store,__pageId:n,__pagePath:a,__pageQuery:t});o.provide("__globalStyles",Vue.useCssStyles([...__uniConfig.styles,...f.styles||[]])),o.mount("#root")}})();
