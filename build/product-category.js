this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-category"]=function(e){function t(t){for(var n,i,a=t[0],l=t[1],u=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(s&&s(t);d.length;)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var l=r[a];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},c={30:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var s=l;return o.push([755,0]),r()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},107:function(e,t,r){"use strict";r.d(t,"b",(function(){return c}));var n=r(3),c=["woocommerce/product-best-sellers","woocommerce/product-category","woocommerce/product-new","woocommerce/product-on-sale","woocommerce/product-top-rated"];t.a={columns:{type:"number",default:Object(n.getSetting)("default_columns",3)},rows:{type:"number",default:Object(n.getSetting)("default_rows",3)},alignButtons:{type:"boolean",default:!1},categories:{type:"array",default:[]},catOperator:{type:"string",default:"any"},contentVisibility:{type:"object",default:{title:!0,price:!0,rating:!0,button:!0}},isPreview:{type:"boolean",default:!1}}},11:function(e,t){e.exports=window.React},12:function(e,t){e.exports=window.wp.blockEditor},121:function(e,t){},122:function(e,t){e.exports=window.wp.coreData},130:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(4);r(2),t.a=function(e){var t=e.value,r=e.setAttributes;return Object(n.createElement)(o.SelectControl,{label:Object(c.__)("Order products by","woo-gutenberg-products-block"),value:t,options:[{label:Object(c.__)("Newness - newest first","woo-gutenberg-products-block"),value:"date"},{label:Object(c.__)("Price - low to high","woo-gutenberg-products-block"),value:"price_asc"},{label:Object(c.__)("Price - high to low","woo-gutenberg-products-block"),value:"price_desc"},{label:Object(c.__)("Rating - highest first","woo-gutenberg-products-block"),value:"rating"},{label:Object(c.__)("Sales - most first","woo-gutenberg-products-block"),value:"popularity"},{label:Object(c.__)("Title - alphabetical","woo-gutenberg-products-block"),value:"title"},{label:Object(c.__)("Menu Order","woo-gutenberg-products-block"),value:"menu_order"}],onChange:function(e){return r({orderby:e})}})}},139:function(e,t){},14:function(e,t){e.exports=window.wp.data},15:function(e,t){e.exports=window.wp.apiFetch},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var n=r(0),c=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 230 250",style:{width:"100%"}},Object(n.createElement)("title",null,"Grid Block Preview"),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:".162",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"9.216",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"1.565",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"82.478",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"91.532",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"83.882",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:".779",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"76.153",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"101.448",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"65.374",height:"65.374",x:"164.788",y:"136.277",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"47.266",height:"5.148",x:"173.843",y:"211.651",fill:"#E1E3E6",rx:"2.574"}),Object(n.createElement)("rect",{width:"62.8",height:"15",x:"166.192",y:"236.946",fill:"#E1E3E6",rx:"5"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"86.301",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"13.283",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"21.498",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"29.713",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"37.927",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"46.238",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"95.599",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"103.814",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"112.029",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"120.243",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"128.554",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"177.909",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"186.124",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"194.339",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"202.553",y:"221.798",fill:"#E1E3E6",rx:"3"}),Object(n.createElement)("rect",{width:"6.177",height:"6.177",x:"210.864",y:"221.798",fill:"#E1E3E6",rx:"3"}))},21:function(e,t){e.exports=window.wp.compose},22:function(e,t){e.exports=window.regeneratorRuntime},23:function(e,t){e.exports=window.wp.url},25:function(e,t){e.exports=window.wp.htmlEntities},26:function(e,t){e.exports=window.wp.blocks},28:function(e,t){e.exports=window.wp.primitives},3:function(e,t){e.exports=window.wc.wcSettings},31:function(e,t){e.exports=window.moment},36:function(e,t){e.exports=window.wp.dataControls},38:function(e,t,r){"use strict";r.d(t,"o",(function(){return o})),r.d(t,"m",(function(){return i})),r.d(t,"l",(function(){return a})),r.d(t,"n",(function(){return l})),r.d(t,"j",(function(){return u})),r.d(t,"e",(function(){return s})),r.d(t,"f",(function(){return b})),r.d(t,"g",(function(){return d})),r.d(t,"k",(function(){return p})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return f})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return w})),r.d(t,"i",(function(){return O})),r.d(t,"b",(function(){return E}));var n,c=r(3),o=Object(c.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),i=o.pluginUrl+"images/",a=o.pluginUrl+"build/",l=o.buildPhase,u=null===(n=c.STORE_PAGES.shop)||void 0===n?void 0:n.permalink,s=c.STORE_PAGES.checkout.id,b=c.STORE_PAGES.checkout.permalink,d=c.STORE_PAGES.privacy.permalink,p=(c.STORE_PAGES.privacy.title,c.STORE_PAGES.terms.permalink),g=(c.STORE_PAGES.terms.title,c.STORE_PAGES.cart.id),f=c.STORE_PAGES.cart.permalink,h=(c.STORE_PAGES.myaccount.permalink?c.STORE_PAGES.myaccount.permalink:Object(c.getSetting)("wpLoginUrl","/wp-login.php"),Object(c.getSetting)("shippingCountries",{})),w=Object(c.getSetting)("allowedCountries",{}),O=Object(c.getSetting)("shippingStates",{}),E=Object(c.getSetting)("allowedStates",{})},39:function(e,t,r){"use strict";r.d(t,"h",(function(){return p})),r.d(t,"e",(function(){return g})),r.d(t,"b",(function(){return f})),r.d(t,"i",(function(){return h})),r.d(t,"f",(function(){return w})),r.d(t,"c",(function(){return O})),r.d(t,"d",(function(){return E})),r.d(t,"g",(function(){return m})),r.d(t,"a",(function(){return j}));var n=r(5),c=r.n(n),o=r(23),i=r(15),a=r.n(i),l=r(7),u=r(3),s=r(38);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,u=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=void 0===n?"":n,i=e.queryArgs,a=void 0===i?{}:i,l=s.o.productCount>100,u={per_page:l?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},b=[Object(o.addQueryArgs)("/wc/store/products",d(d({},u),a))];return l&&r.length&&b.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:r,per_page:0})),b}({selected:r,search:c,queryArgs:void 0===i?{}:i});return Promise.all(u.map((function(e){return a()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id").map((function(e){return d(d({},e),{},{parent:0})}))})).catch((function(e){throw e}))},g=function(e){return a()({path:"/wc/store/products/".concat(e)})},f=function(){return a()({path:"wc/store/products/attributes"})},h=function(e){return a()({path:"wc/store/products/attributes/".concat(e,"/terms")})},w=function(e){var t=e.selected,r=function(e){var t=e.selected,r=void 0===t?[]:t,n=e.search,c=Object(u.getSetting)("limitTags",!1),i=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:c?100:0,orderby:c?"count":"name",order:c?"desc":"asc",search:n})];return c&&r.length&&i.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:r})),i}({selected:void 0===t?[]:t,search:e.search});return Promise.all(r.map((function(e){return a()({path:e})}))).then((function(e){return Object(l.uniqBy)(Object(l.flatten)(e),"id")}))},O=function(e){return a()({path:Object(o.addQueryArgs)("wc/store/products/categories",d({per_page:0},e))})},E=function(e){return a()({path:"wc/store/products/categories/".concat(e)})},m=function(e){return a()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})})},j=function(e,t){if(!e.title.raw)return e.slug;var r=1===t.filter((function(t){return t.title.raw===e.title.raw})).length;return e.title.raw+(r?"":" - ".concat(e.slug))}},4:function(e,t){e.exports=window.wp.components},42:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return u}));var n=r(29),c=r.n(n),o=r(22),i=r.n(o),a=r(1),l=function(){var e=c()(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof t.json){e.next=11;break}return e.prev=1,e.next=4,t.json();case 4:return r=e.sent,e.abrupt("return",{message:r.message,type:r.type||"api"});case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",{message:e.t0.message,type:"general"});case 11:return e.abrupt("return",{message:t.message,type:t.type||"general"});case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(_x){return e.apply(this,arguments)}}(),u=function(e){if(e.data&&"rest_invalid_param"===e.code){var t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(a.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},46:function(e,t){e.exports=window.wp.keycodes},48:function(e,t){e.exports=window.wp.escapeHtml},52:function(e,t,r){"use strict";var n=r(0),c=r(1),o=(r(2),r(48));t.a=function(e){var t,r,i,a=e.error;return Object(n.createElement)("div",{className:"wc-block-error-message"},(r=(t=a).message,i=t.type,r?"general"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):"api"===i?Object(n.createElement)("span",null,Object(c.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(n.createElement)("br",null),Object(n.createElement)("code",null,Object(o.escapeHTML)(r))):r:Object(c.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")))}},55:function(e,t){e.exports=window.wp.hooks},56:function(e,t){e.exports=window.wp.deprecated},66:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(16),i=r.n(o),a=r(0),l=["srcElement","size"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.a=function(e){var t=e.srcElement,r=e.size,n=void 0===r?24:r,o=i()(e,l);return Object(a.isValidElement)(t)?Object(a.cloneElement)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:n,height:n},o)):null}},7:function(e,t){e.exports=window.lodash},74:function(e,t){e.exports=window.wp.dom},755:function(e,t,r){e.exports=r(874)},756:function(e,t){},757:function(e,t,r){"use strict";var n=r(0),c=r(28),o=Object(n.createElement)(c.SVG,{xmlns:"http://www.w3.org/2000/SVG",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"}));t.a=o},84:function(e,t){e.exports=window.wp.serverSideRender},87:function(e,t){e.exports=window.ReactDOM},874:function(e,t,r){"use strict";r.r(t);var n=r(5),c=r.n(n),o=r(0),i=r(1),a=r(26),l=r(7),u=r(66),s=r(757),b=(r(756),r(17)),d=r.n(b),p=r(18),g=r.n(p),f=r(13),h=r.n(f),w=r(19),O=r.n(w),E=r(20),m=r.n(E),j=r(10),y=r.n(j),v=r(12),_=r(84),x=r.n(_),k=r(4),P=(r(2),r(93)),C=r(94),S=r(98),A=r(130),R=r(188),T=r(3);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M=function(){return Object(o.createElement)(k.Placeholder,{icon:Object(o.createElement)(u.a,{srcElement:s.a}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("No products were found that matched your selection.","woo-gutenberg-products-block"))},N=function(e){O()(a,e);var t,r,n=(t=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=y()(t);if(r){var c=y()(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return m()(this,e)});function a(){var e;d()(this,a);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return e=n.call.apply(n,[this].concat(r)),c()(h()(e),"state",{changedAttributes:{},isEditing:!1}),c()(h()(e),"startEditing",(function(){e.setState({isEditing:!0,changedAttributes:{}})})),c()(h()(e),"stopEditing",(function(){e.setState({isEditing:!1,changedAttributes:{}})})),c()(h()(e),"setChangedAttributes",(function(t){e.setState((function(e){return{changedAttributes:D(D({},e.changedAttributes),t)}}))})),c()(h()(e),"save",(function(){var t=e.state.changedAttributes;(0,e.props.setAttributes)(t),e.stopEditing()})),e}return g()(a,[{key:"componentDidMount",value:function(){this.props.attributes.categories.length||this.setState({isEditing:!0})}},{key:"getInspectorControls",value:function(){var e=this,t=this.props,r=t.attributes,n=t.setAttributes,c=this.state.isEditing,a=r.columns,l=r.catOperator,u=r.contentVisibility,s=r.orderby,b=r.rows,d=r.alignButtons;return Object(o.createElement)(v.InspectorControls,{key:"inspector"},Object(o.createElement)(k.PanelBody,{title:Object(i.__)("Product Category","woo-gutenberg-products-block"),initialOpen:!r.categories.length&&!c},Object(o.createElement)(S.a,{selected:r.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.map((function(e){return e.id})),c={categories:r};n(c),e.setChangedAttributes(c)},operator:l,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any",r={catOperator:t};n(r),e.setChangedAttributes(r)},isCompact:!0})),Object(o.createElement)(k.PanelBody,{title:Object(i.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(C.a,{columns:a,rows:b,alignButtons:d,setAttributes:n,minColumns:Object(T.getSetting)("min_columns",1),maxColumns:Object(T.getSetting)("max_columns",6),minRows:Object(T.getSetting)("min_rows",1),maxRows:Object(T.getSetting)("max_rows",6)})),Object(o.createElement)(k.PanelBody,{title:Object(i.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(P.a,{settings:u,onChange:function(e){return n({contentVisibility:e})}})),Object(o.createElement)(k.PanelBody,{title:Object(i.__)("Order By","woo-gutenberg-products-block"),initialOpen:!1},Object(o.createElement)(A.a,{setAttributes:n,value:s})))}},{key:"renderEditMode",value:function(){var e=this,t=this.props,r=t.attributes,n=t.debouncedSpeak,c=this.state.changedAttributes,a=D(D({},r),c);return Object(o.createElement)(k.Placeholder,{icon:Object(o.createElement)(u.a,{srcElement:s.a}),label:Object(i.__)("Products by Category","woo-gutenberg-products-block"),className:"wc-block-products-grid wc-block-products-category"},Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),Object(o.createElement)("div",{className:"wc-block-products-category__selection"},Object(o.createElement)(S.a,{selected:a.categories,onChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=t.map((function(e){return e.id}));e.setChangedAttributes({categories:r})},operator:a.catOperator,onOperatorChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"any";return e.setChangedAttributes({catOperator:t})}}),Object(o.createElement)(k.Button,{isPrimary:!0,onClick:function(){e.save(),n(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Done","woo-gutenberg-products-block")),Object(o.createElement)(k.Button,{className:"wc-block-products-category__cancel-button",isTertiary:!0,onClick:function(){e.stopEditing(),n(Object(i.__)("Showing Products by Category block preview.","woo-gutenberg-products-block"))}},Object(i.__)("Cancel","woo-gutenberg-products-block"))))}},{key:"renderViewMode",value:function(){var e=this.props,t=e.attributes,r=e.name,n=t.categories.length;return Object(o.createElement)(k.Disabled,null,n?Object(o.createElement)(x.a,{block:r,attributes:t,EmptyResponsePlaceholder:M}):Object(i.__)("Select at least one category to display its products.","woo-gutenberg-products-block"))}},{key:"render",value:function(){var e=this,t=this.state.isEditing;return this.props.attributes.isPreview?R.a:Object(o.createElement)(o.Fragment,null,Object(o.createElement)(v.BlockControls,null,Object(o.createElement)(k.ToolbarGroup,{controls:[{icon:"edit",title:Object(i.__)("Edit"),onClick:function(){return t?e.stopEditing():e.startEditing()},isActive:t}]})),this.getInspectorControls(),t?this.renderEditMode():this.renderViewMode())}}]),a}(o.Component),G=Object(k.withSpokenMessages)(N),V=r(107);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}Object(a.registerBlockType)("woocommerce/product-category",{title:Object(i.__)("Products by Category","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(u.a,{srcElement:s.a}),foreground:"#96588a"},category:"woocommerce",keywords:[Object(i.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(i.__)("Display a grid of products from your selected categories.","woo-gutenberg-products-block"),supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:H(H({},V.a),{},{editMode:{type:"boolean",default:!0},orderby:{type:"string",default:"date"}}),transforms:{from:[{type:"block",blocks:Object(l.without)(V.b,"woocommerce/product-category"),transform:function(e){return Object(a.createBlock)("woocommerce/product-category",H(H({},e),{},{editMode:!1}))}}]},edit:function(e){return Object(o.createElement)(G,e)},save:function(){return null}})},89:function(e,t){e.exports=window.wp.viewport},93:function(e,t,r){"use strict";var n=r(5),c=r.n(n),o=r(0),i=r(1),a=(r(2),r(4));function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=e.onChange,r=e.settings,n=r.button,c=r.price,l=r.rating,s=r.title;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.ToggleControl,{label:Object(i.__)("Product title","woo-gutenberg-products-block"),help:s?Object(i.__)("Product title is visible.","woo-gutenberg-products-block"):Object(i.__)("Product title is hidden.","woo-gutenberg-products-block"),checked:s,onChange:function(){return t(u(u({},r),{},{title:!s}))}}),Object(o.createElement)(a.ToggleControl,{label:Object(i.__)("Product price","woo-gutenberg-products-block"),help:c?Object(i.__)("Product price is visible.","woo-gutenberg-products-block"):Object(i.__)("Product price is hidden.","woo-gutenberg-products-block"),checked:c,onChange:function(){return t(u(u({},r),{},{price:!c}))}}),Object(o.createElement)(a.ToggleControl,{label:Object(i.__)("Product rating","woo-gutenberg-products-block"),help:l?Object(i.__)("Product rating is visible.","woo-gutenberg-products-block"):Object(i.__)("Product rating is hidden.","woo-gutenberg-products-block"),checked:l,onChange:function(){return t(u(u({},r),{},{rating:!l}))}}),Object(o.createElement)(a.ToggleControl,{label:Object(i.__)("Add to Cart button","woo-gutenberg-products-block"),help:n?Object(i.__)("Add to Cart button is visible.","woo-gutenberg-products-block"):Object(i.__)("Add to Cart button is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return t(u(u({},r),{},{button:!n}))}}))}},94:function(e,t,r){"use strict";var n=r(0),c=r(1),o=r(7),i=(r(2),r(4));t.a=function(e){var t=e.columns,r=e.rows,a=e.setAttributes,l=e.alignButtons,u=e.minColumns,s=void 0===u?1:u,b=e.maxColumns,d=void 0===b?6:b,p=e.minRows,g=void 0===p?1:p,f=e.maxRows,h=void 0===f?6:f;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Columns","woo-gutenberg-products-block"),value:t,onChange:function(e){var t=Object(o.clamp)(e,s,d);a({columns:Number.isNaN(t)?"":t})},min:s,max:d}),Object(n.createElement)(i.RangeControl,{label:Object(c.__)("Rows","woo-gutenberg-products-block"),value:r,onChange:function(e){var t=Object(o.clamp)(e,g,h);a({rows:Number.isNaN(t)?"":t})},min:g,max:h}),Object(n.createElement)(i.ToggleControl,{label:Object(c.__)("Align Last Block","woo-gutenberg-products-block"),help:l?Object(c.__)("The last inner block will be aligned vertically.","woo-gutenberg-products-block"):Object(c.__)("The last inner block will follow other content.","woo-gutenberg-products-block"),checked:l,onChange:function(){return a({alignButtons:!l})}}))}},97:function(e,t){e.exports=window.wp.date},98:function(e,t,r){"use strict";var n=r(9),c=r.n(n),o=r(0),i=r(1),a=(r(2),r(49)),l=r(4),u=r(29),s=r.n(u),b=r(17),d=r.n(b),p=r(18),g=r.n(p),f=r(13),h=r.n(f),w=r(19),O=r.n(w),E=r(20),m=r.n(E),j=r(10),y=r.n(j),v=r(22),_=r.n(v),x=r(21),k=r(39),P=r(42);var C=Object(x.createHigherOrderComponent)((function(e){return function(t){O()(a,t);var r,n,i=(r=a,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y()(r);if(n){var c=y()(this).constructor;e=Reflect.construct(t,arguments,c)}else e=t.apply(this,arguments);return m()(this,e)});function a(){var e;return d()(this,a),(e=i.apply(this,arguments)).state={error:null,loading:!1,categories:[]},e.loadCategories=e.loadCategories.bind(h()(e)),e}return g()(a,[{key:"componentDidMount",value:function(){this.loadCategories()}},{key:"loadCategories",value:function(){var e=this;this.setState({loading:!0}),Object(k.c)().then((function(t){e.setState({categories:t,loading:!1,error:null})})).catch(function(){var t=s()(_.a.mark((function t(r){var n;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.a)(r);case 2:n=t.sent,e.setState({categories:[],loading:!1,error:n});case 4:case"end":return t.stop()}}),t)})));return function(_x){return t.apply(this,arguments)}}())}},{key:"render",value:function(){var t=this.state,r=t.error,n=t.loading,i=t.categories;return Object(o.createElement)(e,c()({},this.props,{error:r,isLoading:n,categories:i}))}}]),a}(o.Component)}),"withCategories"),S=r(52),A=r(6),R=r.n(A),T=(r(139),function(e){var t=e.categories,r=e.error,n=e.isLoading,u=e.onChange,s=e.onOperatorChange,b=e.operator,d=e.selected,p=e.isCompact,g=e.isSingle,f=e.showReviewCount,h={clear:Object(i.__)("Clear all product categories","woo-gutenberg-products-block"),list:Object(i.__)("Product Categories","woo-gutenberg-products-block"),noItems:Object(i.__)("Your store doesn't have any product categories.","woo-gutenberg-products-block"),search:Object(i.__)("Search for product categories","woo-gutenberg-products-block"),selected:function(e){return Object(i.sprintf)(
/* translators: %d is the count of selected categories. */
Object(i._n)("%d category selected","%d categories selected",e,"woo-gutenberg-products-block"),e)},updated:Object(i.__)("Category search results updated.","woo-gutenberg-products-block")};return r?Object(o.createElement)(S.a,{error:r}):Object(o.createElement)(o.Fragment,null,Object(o.createElement)(a.b,{className:"woocommerce-product-categories",list:t,isLoading:n,selected:d.map((function(e){return t.find((function(t){return t.id===e}))})).filter(Boolean),onChange:u,renderItem:function(e){var t=e.item,r=e.search,n=e.depth,l=void 0===n?0:n,u=t.breadcrumbs.length?"".concat(t.breadcrumbs.join(", "),", ").concat(t.name):t.name,s=f?Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of reviews for the item. */
Object(i._n)("%1$s, has %2$d review","%1$s, has %2$d reviews",t.review_count,"woo-gutenberg-products-block"),u,t.review_count):Object(i.sprintf)(
/* translators: %1$s is the item name, %2$d is the count of products for the item. */
Object(i._n)("%1$s, has %2$d product","%1$s, has %2$d products",t.count,"woo-gutenberg-products-block"),u,t.count),b=f?Object(i.sprintf)(
/* translators: %d is the count of reviews. */
Object(i._n)("%d review","%d reviews",t.review_count,"woo-gutenberg-products-block"),t.review_count):Object(i.sprintf)(
/* translators: %d is the count of products. */
Object(i._n)("%d product","%d products",t.count,"woo-gutenberg-products-block"),t.count);return Object(o.createElement)(a.c,c()({className:R()("woocommerce-product-categories__item","has-count",{"is-searching":r.length>0,"is-skip-level":0===l&&0!==t.parent})},e,{countLabel:b,"aria-label":s}))},messages:h,isCompact:p,isHierarchical:!0,isSingle:g}),!!s&&Object(o.createElement)("div",{hidden:d.length<2},Object(o.createElement)(l.SelectControl,{className:"woocommerce-product-categories__operator",label:Object(i.__)("Display products matching","woo-gutenberg-products-block"),help:Object(i.__)("Pick at least two categories to use this setting.","woo-gutenberg-products-block"),value:b,onChange:s,options:[{label:Object(i.__)("Any selected categories","woo-gutenberg-products-block"),value:"any"},{label:Object(i.__)("All selected categories","woo-gutenberg-products-block"),value:"all"}]})))});T.defaultProps={operator:"any",isCompact:!1,isSingle:!1},t.a=C(T)}});