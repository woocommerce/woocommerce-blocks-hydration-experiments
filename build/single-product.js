this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["single-product"]=function(e){function t(t){for(var o,s,a=t[0],l=t[1],i=t[2],d=0,m=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(u&&u(t);m.length;)m.shift()();return n.push.apply(n,i||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],o=!0,a=1;a<c.length;a++){var l=c[a];0!==r[l]&&(o=!1)}o&&(n.splice(t--,1),e=s(s.s=c[0]))}return e}var o={},r={41:0},n=[];function s(t){if(o[t])return o[t].exports;var c=o[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.e=function(e){var t=[],c=r[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,o){c=r[e]=[t,o]}));t.push(c[2]=o);var n,a=document.createElement("script");a.charset="utf-8",a.timeout=120,s.nc&&a.setAttribute("nonce",s.nc),a.src=function(e){return s.p+""+({1:"atomic-block-components/add-to-cart--atomic-block-components/button--atomic-block-components/image---8f355022",2:"atomic-block-components/add-to-cart--atomic-block-components/button--atomic-block-components/image---a7e2bb9b",3:"atomic-block-components/stock-indicator--atomic-block-components/summary--atomic-block-components/title",4:"atomic-block-components/add-to-cart--atomic-block-components/button",5:"atomic-block-components/sale-badge",9:"atomic-block-components/add-to-cart",10:"atomic-block-components/button",11:"atomic-block-components/category-list",12:"atomic-block-components/image",13:"atomic-block-components/price",14:"atomic-block-components/rating",15:"atomic-block-components/sku",16:"atomic-block-components/stock-indicator",17:"atomic-block-components/summary",18:"atomic-block-components/tag-list",19:"atomic-block-components/title"}[e]||e)+".js?ver="+{1:"a65364bc2aef96839601",2:"7ca2ec295c30d42f2d9b",3:"76461ee360049ed00215",4:"7de190fbe2df8ec8f501",5:"7d69f97596f26ac9df7b",9:"854480dd085ee6157644",10:"8ecf14e43ca010db9f1f",11:"341c2a01f126719d8a32",12:"8a2caac2e28944911fb8",13:"061fd4397f806ccbd4e5",14:"f893cd7327cfbe0f21ee",15:"30e9fcdc69c79ea4d159",16:"3a64488e8c2d0c984e84",17:"5bbe046a46d2362f145c",18:"b98414d5f33bdd0e8f1c",19:"7041eba2f6edef3011e4"}[e]}(e);var l=new Error;n=function(t){a.onerror=a.onload=null,clearTimeout(i);var c=r[e];if(0!==c){if(c){var o=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+n+")",l.name="ChunkLoadError",l.type=o,l.request=n,c[1](l)}r[e]=void 0}};var i=setTimeout((function(){n({type:"timeout",target:a})}),12e4);a.onerror=a.onload=n,document.head.appendChild(a)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(c,o,function(t){return e[t]}.bind(null,o));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var a=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var i=0;i<a.length;i++)t(a[i]);var u=l;return n.push([436,0]),c()}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.wp.i18n},101:function(e,t){e.exports=window.wp.wordcount},102:function(e,t,c){"use strict";var o=c(5),r=c.n(o),n=c(0),s=c(1),a=c(6),l=(c(10),c(33)),i=c(87),u=c(9),d=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{render(){const{selected:t}=this.props,c=null==t;return Object(n.createElement)(e,r()({},this.props,{selected:c?[]:[t]}))}}return t.defaultProps={selected:null},t},"withTransformSingleSelectToMultipleSelect"),m=c(193),b=c(25),p=c.n(b),g=c(26),h=c.n(g),w=c(27),O=c(28),j=Object(u.createHigherOrderComponent)(e=>{class t extends n.Component{constructor(){super(...arguments),p()(this,"state",{error:null,loading:!1,variations:{}}),p()(this,"loadVariations",()=>{const{products:e}=this.props,{loading:t,variations:c}=this.state;if(t)return;const o=this.getExpandedProduct();if(!o||c[o])return;const r=e.find(e=>e.id===o);r.variations&&0!==r.variations.length?(this.setState({loading:!0}),Object(w.g)(o).then(e=>{const t=e.map(e=>({...e,parent:o}));this.setState({variations:{...this.state.variations,[o]:t},loading:!1,error:null})}).catch(async e=>{const t=await Object(O.a)(e);this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:t})})):this.setState({variations:{...this.state.variations,[o]:null},loading:!1,error:null})})}componentDidMount(){const{selected:e,showVariations:t}=this.props;e&&t&&this.loadVariations()}componentDidUpdate(e){const{isLoading:t,selected:c,showVariations:o}=this.props;o&&(!h()(e.selected,c)||e.isLoading&&!t)&&this.loadVariations()}isProductId(e){const{products:t}=this.props;return t.some(t=>t.id===e)}findParentProduct(e){const{products:t}=this.props;return t.filter(t=>t.variations&&t.variations.find(t=>{let{id:c}=t;return c===e}))[0].id}getExpandedProduct(){const{isLoading:e,selected:t,showVariations:c}=this.props;if(!c)return null;let o=t&&t.length?t[0]:null;return o?this.prevSelectedItem=o:this.prevSelectedItem&&(e||this.isProductId(this.prevSelectedItem)||(o=this.prevSelectedItem)),!e&&o?this.isProductId(o)?o:this.findParentProduct(o):null}render(){const{error:t,isLoading:c}=this.props,{error:o,loading:s,variations:a}=this.state;return Object(n.createElement)(e,r()({},this.props,{error:o||t,expandedProduct:this.getExpandedProduct(),isLoading:c,variations:a,variationsLoading:s}))}}return p()(t,"defaultProps",{selected:[],showVariations:!1}),t},"withProductVariations"),f=c(32),E=c(4),k=c.n(E),v=c(89);c(142);const _={list:Object(s.__)("Products","woo-gutenberg-products-block"),noItems:Object(s.__)("Your store doesn't have any products.","woo-gutenberg-products-block"),search:Object(s.__)("Search for a product to display","woo-gutenberg-products-block"),updated:Object(s.__)("Product search results updated.","woo-gutenberg-products-block")},y=e=>{let{expandedProduct:t,error:c,instanceId:o,isCompact:u,isLoading:d,onChange:m,onSearch:b,products:p,renderItem:g,selected:h,showVariations:w,variations:O,variationsLoading:j}=e;if(c)return Object(n.createElement)(f.a,{error:c});const E=[...p,...O&&O[t]?O[t]:[]];return Object(n.createElement)(i.a,{className:"woocommerce-products",list:E,isCompact:u,isLoading:d,isSingle:!0,selected:E.filter(e=>{let{id:t}=e;return h.includes(t)}),onChange:m,renderItem:g||(w?e=>{const{item:t,search:c,depth:i=0,isSelected:u,onSelect:m}=e,b=t.variations&&Array.isArray(t.variations)?t.variations.length:0,p=k()("woocommerce-search-product__item","woocommerce-search-list__item","depth-"+i,"has-count",{"is-searching":c.length>0,"is-skip-level":0===i&&0!==t.parent,"is-variable":b>0});if(!t.breadcrumbs.length)return Object(n.createElement)(v.a,r()({},e,{className:k()(p,{"is-selected":u}),isSelected:u,item:t,onSelect:()=>()=>{m(t)()},isLoading:d||j,countLabel:t.variations.length>0?Object(s.sprintf)(
/* translators: %1$d is the number of variations of a product product. */
Object(s.__)("%1$d variations","woo-gutenberg-products-block"),t.variations.length):null,name:"products-"+o,"aria-label":Object(s.sprintf)(
/* translators: %1$s is the product name, %2$d is the number of variations of that product. */
Object(s._n)("%1$s, has %2$d variation","%1$s, has %2$d variations",t.variations.length,"woo-gutenberg-products-block"),t.name,t.variations.length)}));const g=Object(a.isEmpty)(t.variation)?e:{...e,item:{...e.item,name:t.variation},"aria-label":`${t.breadcrumbs[0]}: ${t.variation}`};return Object(n.createElement)(l.a,r()({},g,{className:p,name:"variations-"+o}))}:null),onSearch:b,messages:_,isHierarchical:!0})};y.defaultProps={isCompact:!1,expandedProduct:null,selected:[],showVariations:!1},t.a=d(Object(m.a)(j(Object(u.withInstanceId)(y))))},103:function(e,t,c){"use strict";var o=c(0),r=c(18);const n=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"}));t.a=n},104:function(e,t){},11:function(e,t){e.exports=window.wp.apiFetch},116:function(e,t,c){"use strict";var o=c(25),r=c.n(o),n=c(0),s=c(8),a=c(1),l=c(24),i=e=>{let{imageUrl:t=l.m+"/block-error.svg",header:c=Object(a.__)("Oops!","woo-gutenberg-products-block"),text:o=Object(a.__)("There was an error loading the content.","woo-gutenberg-products-block"),errorMessage:r,errorMessagePrefix:s=Object(a.__)("Error:","woo-gutenberg-products-block"),button:i,showErrorBlock:u=!0}=e;return u?Object(n.createElement)("div",{className:"wc-block-error wc-block-components-error"},t&&Object(n.createElement)("img",{className:"wc-block-error__image wc-block-components-error__image",src:t,alt:""}),Object(n.createElement)("div",{className:"wc-block-error__content wc-block-components-error__content"},c&&Object(n.createElement)("p",{className:"wc-block-error__header wc-block-components-error__header"},c),o&&Object(n.createElement)("p",{className:"wc-block-error__text wc-block-components-error__text"},o),r&&Object(n.createElement)("p",{className:"wc-block-error__message wc-block-components-error__message"},s?s+" ":"",r),i&&Object(n.createElement)("p",{className:"wc-block-error__button wc-block-components-error__button"},i))):null};c(174);class u extends s.Component{constructor(){super(...arguments),r()(this,"state",{errorMessage:"",hasError:!1})}static getDerivedStateFromError(e){return void 0!==e.statusText&&void 0!==e.status?{errorMessage:Object(n.createElement)(n.Fragment,null,Object(n.createElement)("strong",null,e.status),": ",e.statusText),hasError:!0}:{errorMessage:e.message,hasError:!0}}render(){const{header:e,imageUrl:t,showErrorMessage:c=!0,showErrorBlock:o=!0,text:r,errorMessagePrefix:s,renderError:a,button:l}=this.props,{errorMessage:u,hasError:d}=this.state;return d?"function"==typeof a?a({errorMessage:u}):Object(n.createElement)(i,{showErrorBlock:o,errorMessage:c?u:null,header:e,imageUrl:t,text:r,errorMessagePrefix:s,button:l}):this.props.children}}t.a=u},12:function(e,t){e.exports=window.wp.blocks},122:function(e,t,c){"use strict";var o=c(0),r=c(18);const n=Object(o.createElement)(r.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(o.createElement)("mask",{id:"external-mask",width:"24",height:"24",x:"0",y:"0",maskUnits:"userSpaceOnUse"},Object(o.createElement)("path",{fill:"#fff",d:"M6.3431 6.3431v1.994l7.8984.0072-8.6055 8.6054 1.4142 1.4143 8.6055-8.6055.0071 7.8984h1.994V6.3431H6.3431z"})),Object(o.createElement)("g",{mask:"url(#external-mask)"},Object(o.createElement)("path",{d:"M0 0h24v24H0z"})));t.a=n},13:function(e,t){e.exports=window.wp.data},14:function(e,t){e.exports=window.wp.htmlEntities},142:function(e,t){},15:function(e,t){e.exports=window.wp.url},16:function(e,t){e.exports=window.wc.wcBlocksData},17:function(e,t,c){"use strict";c.d(t,"a",(function(){return s})),c.d(t,"c",(function(){return l})),c.d(t,"d",(function(){return i})),c.d(t,"b",(function(){return u}));var o=c(0),r=c(6),n=c(1);const s={clear:Object(n.__)("Clear all selected items","woo-gutenberg-products-block"),noItems:Object(n.__)("No items found.","woo-gutenberg-products-block"),
/* Translators: %s search term */
noResults:Object(n.__)("No results for %s","woo-gutenberg-products-block"),search:Object(n.__)("Search for items","woo-gutenberg-products-block"),selected:e=>Object(n.sprintf)(
/* translators: Number of items selected from list. */
Object(n._n)("%d item selected","%d items selected",e,"woo-gutenberg-products-block"),e),updated:Object(n.__)("Search results updated.","woo-gutenberg-products-block")},a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;const c=Object(r.groupBy)(e,"parent"),o=Object(r.keyBy)(t,"id"),n=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.parent)return e.name?[e.name]:[];const t=n(o[e.parent]);return[...t,e.name]},s=e=>e.map(e=>{const t=c[e.id];return delete c[e.id],{...e,breadcrumbs:n(o[e.parent]),children:t&&t.length?s(t):[]}}),a=s(c[0]||[]);return delete c[0],Object(r.forEach)(c,e=>{a.push(...s(e||[]))}),a},l=(e,t,c)=>{if(!t)return c?a(e):e;const o=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"i"),r=e.map(e=>!!o.test(e.name)&&e).filter(Boolean);return c?a(r,e):r},i=(e,t)=>{if(!t)return e;const c=new RegExp(t.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"ig");return e.split(c).map((e,c)=>0===c?e:Object(o.createElement)(o.Fragment,{key:c},Object(o.createElement)("strong",null,t),e))},u=e=>1===e.length?e.slice(0,1).toString():2===e.length?e.slice(0,1).toString()+" › "+e.slice(-1).toString():e.slice(0,1).toString()+" … "+e.slice(-1).toString()},174:function(e,t){},18:function(e,t){e.exports=window.wp.primitives},193:function(e,t,c){"use strict";var o=c(5),r=c.n(o),n=c(0),s=c(24),a=c(27),l=c(118),i=c(28);t.a=e=>t=>{let{selected:c,...o}=t;const[u,d]=Object(n.useState)(!0),[m,b]=Object(n.useState)(null),[p,g]=Object(n.useState)([]),h=s.o.productCount>100,w=async e=>{const t=await Object(i.a)(e);b(t),d(!1)},O=Object(n.useRef)(c);Object(n.useEffect)(()=>{Object(a.h)({selected:O.current}).then(e=>{g(e),d(!1)}).catch(w)},[O]);const j=Object(l.a)(e=>{Object(a.h)({selected:c,search:e}).then(e=>{g(e),d(!1)}).catch(w)},400),f=Object(n.useCallback)(e=>{d(!0),j(e)},[d,j]);return Object(n.createElement)(e,r()({},o,{selected:c,error:m,products:p,isLoading:u,onSearch:h?f:null}))}},2:function(e,t){e.exports=window.wc.wcSettings},24:function(e,t,c){"use strict";c.d(t,"o",(function(){return n})),c.d(t,"m",(function(){return s})),c.d(t,"l",(function(){return a})),c.d(t,"n",(function(){return l})),c.d(t,"j",(function(){return i})),c.d(t,"e",(function(){return u})),c.d(t,"f",(function(){return d})),c.d(t,"g",(function(){return m})),c.d(t,"k",(function(){return b})),c.d(t,"c",(function(){return p})),c.d(t,"d",(function(){return g})),c.d(t,"h",(function(){return h})),c.d(t,"a",(function(){return w})),c.d(t,"i",(function(){return O})),c.d(t,"b",(function(){return j}));var o,r=c(2);const n=Object(r.getSetting)("wcBlocksConfig",{buildPhase:1,pluginUrl:"",productCount:0,defaultAvatar:"",restApiRoutes:{},wordCountType:"words"}),s=n.pluginUrl+"images/",a=n.pluginUrl+"build/",l=n.buildPhase,i=null===(o=r.STORE_PAGES.shop)||void 0===o?void 0:o.permalink,u=r.STORE_PAGES.checkout.id,d=r.STORE_PAGES.checkout.permalink,m=r.STORE_PAGES.privacy.permalink,b=(r.STORE_PAGES.privacy.title,r.STORE_PAGES.terms.permalink),p=(r.STORE_PAGES.terms.title,r.STORE_PAGES.cart.id),g=r.STORE_PAGES.cart.permalink,h=(r.STORE_PAGES.myaccount.permalink?r.STORE_PAGES.myaccount.permalink:Object(r.getSetting)("wpLoginUrl","/wp-login.php"),Object(r.getSetting)("shippingCountries",{})),w=Object(r.getSetting)("allowedCountries",{}),O=Object(r.getSetting)("shippingStates",{}),j=Object(r.getSetting)("allowedStates",{})},26:function(e,t){e.exports=window.wp.isShallowEqual},262:function(e,t,c){"use strict";var o=c(5),r=c.n(o),n=c(25),s=c.n(n),a=c(0),l=c(9),i=c(27),u=c(28);const d=Object(l.createHigherOrderComponent)(e=>class extends a.Component{constructor(){super(...arguments),s()(this,"state",{error:null,loading:!1,product:"preview"===this.props.attributes.productId?this.props.attributes.previewProduct:null}),s()(this,"loadProduct",()=>{const{productId:e}=this.props.attributes;"preview"!==e&&(e?(this.setState({loading:!0}),Object(i.e)(e).then(e=>{this.setState({product:e,loading:!1,error:null})}).catch(async e=>{const t=await Object(u.a)(e);this.setState({product:null,loading:!1,error:t})})):this.setState({product:null,loading:!1,error:null}))})}componentDidMount(){this.loadProduct()}componentDidUpdate(e){e.attributes.productId!==this.props.attributes.productId&&this.loadProduct()}render(){const{error:t,loading:c,product:o}=this.state;return Object(a.createElement)(e,r()({},this.props,{error:t,getProduct:this.loadProduct,isLoading:c,product:o}))}},"withProduct");t.a=d},27:function(e,t,c){"use strict";c.d(t,"h",(function(){return i})),c.d(t,"e",(function(){return u})),c.d(t,"b",(function(){return d})),c.d(t,"i",(function(){return m})),c.d(t,"f",(function(){return b})),c.d(t,"c",(function(){return p})),c.d(t,"d",(function(){return g})),c.d(t,"g",(function(){return h})),c.d(t,"a",(function(){return w}));var o=c(15),r=c(11),n=c.n(r),s=c(6),a=c(2),l=c(24);const i=e=>{let{selected:t=[],search:c="",queryArgs:r={}}=e;const a=(e=>{let{selected:t=[],search:c="",queryArgs:r={}}=e;const n=l.o.productCount>100,s={per_page:n?100:0,catalog_visibility:"any",search:c,orderby:"title",order:"asc"},a=[Object(o.addQueryArgs)("/wc/store/products",{...s,...r})];return n&&t.length&&a.push(Object(o.addQueryArgs)("/wc/store/products",{catalog_visibility:"any",include:t,per_page:0})),a})({selected:t,search:c,queryArgs:r});return Promise.all(a.map(e=>n()({path:e}))).then(e=>Object(s.uniqBy)(Object(s.flatten)(e),"id").map(e=>({...e,parent:0}))).catch(e=>{throw e})},u=e=>n()({path:"/wc/store/products/"+e}),d=()=>n()({path:"wc/store/products/attributes"}),m=e=>n()({path:`wc/store/products/attributes/${e}/terms`}),b=e=>{let{selected:t=[],search:c}=e;const r=(e=>{let{selected:t=[],search:c}=e;const r=Object(a.getSetting)("limitTags",!1),n=[Object(o.addQueryArgs)("wc/store/products/tags",{per_page:r?100:0,orderby:r?"count":"name",order:r?"desc":"asc",search:c})];return r&&t.length&&n.push(Object(o.addQueryArgs)("wc/store/products/tags",{include:t})),n})({selected:t,search:c});return Promise.all(r.map(e=>n()({path:e}))).then(e=>Object(s.uniqBy)(Object(s.flatten)(e),"id"))},p=e=>n()({path:Object(o.addQueryArgs)("wc/store/products/categories",{per_page:0,...e})}),g=e=>n()({path:"wc/store/products/categories/"+e}),h=e=>n()({path:Object(o.addQueryArgs)("wc/store/products",{per_page:0,type:"variation",parent:e})}),w=(e,t)=>{if(!e.title.raw)return e.slug;const c=1===t.filter(t=>t.title.raw===e.title.raw).length;return e.title.raw+(c?"":" - "+e.slug)}},28:function(e,t,c){"use strict";c.d(t,"a",(function(){return r})),c.d(t,"b",(function(){return n}));var o=c(1);const r=async e=>{if("function"==typeof e.json)try{const t=await e.json();return{message:t.message,type:t.type||"api"}}catch(e){return{message:e.message,type:"general"}}return{message:e.message,type:e.type||"general"}},n=e=>{if(e.data&&"rest_invalid_param"===e.code){const t=Object.values(e.data.params);if(t[0])return t[0]}return(null==e?void 0:e.message)||Object(o.__)("Something went wrong. Please contact us to get assistance.","woo-gutenberg-products-block")}},29:function(e,t){e.exports=window.wc.wcBlocksSharedContext},3:function(e,t){e.exports=window.wp.components},31:function(e,t){e.exports=window.wp.escapeHtml},32:function(e,t,c){"use strict";var o=c(0),r=c(1),n=c(31);t.a=e=>{let{error:t}=e;return Object(o.createElement)("div",{className:"wc-block-error-message"},(e=>{let{message:t,type:c}=e;return t?"general"===c?Object(o.createElement)("span",null,Object(r.__)("The following error was returned","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(n.escapeHTML)(t))):"api"===c?Object(o.createElement)("span",null,Object(r.__)("The following error was returned from the API","woo-gutenberg-products-block"),Object(o.createElement)("br",null),Object(o.createElement)("code",null,Object(n.escapeHTML)(t))):t:Object(r.__)("An unknown error occurred which prevented the block from being updated.","woo-gutenberg-products-block")})(t))}},33:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var o=c(5),r=c.n(o),n=c(0),s=c(17);const a=e=>{let{countLabel:t,className:c,depth:o=0,controlId:a="",item:l,isSelected:i,isSingle:u,onSelect:d,search:m="",...b}=e;const p=null!=t&&void 0!==l.count&&null!==l.count,g=[c,"woocommerce-search-list__item"];g.push("depth-"+o),u&&g.push("is-radio-button"),p&&g.push("has-count");const h=l.breadcrumbs&&l.breadcrumbs.length,w=b.name||"search-list-item-"+a,O=`${w}-${l.id}`;return Object(n.createElement)("label",{htmlFor:O,className:g.join(" ")},u?Object(n.createElement)("input",r()({type:"radio",id:O,name:w,value:l.value,onChange:d(l),checked:i,className:"woocommerce-search-list__item-input"},b)):Object(n.createElement)("input",r()({type:"checkbox",id:O,name:w,value:l.value,onChange:d(l),checked:i,className:"woocommerce-search-list__item-input"},b)),Object(n.createElement)("span",{className:"woocommerce-search-list__item-label"},h?Object(n.createElement)("span",{className:"woocommerce-search-list__item-prefix"},Object(s.b)(l.breadcrumbs)):null,Object(n.createElement)("span",{className:"woocommerce-search-list__item-name"},Object(s.d)(l.name,m))),!!p&&Object(n.createElement)("span",{className:"woocommerce-search-list__item-count"},t||l.count))};t.b=a},35:function(e,t){e.exports=window.wc.priceFormat},38:function(e,t){e.exports=window.wc.wcBlocksRegistry},43:function(e,t,c){"use strict";var o=c(0);t.a=function(e){let{srcElement:t,size:c=24,...r}=e;return Object(o.isValidElement)(t)?Object(o.cloneElement)(t,{width:c,height:c,...r}):null}},436:function(e,t,c){e.exports=c(443)},437:function(e,t){},443:function(e,t,c){"use strict";c.r(t);var o=c(1),r=c(65),n=c(0),s=c(3),a=c(262),l=c(116),i=c(93);const u=Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 230 100"},Object(n.createElement)("path",{fill:"#E1E3E6",d:"M76 0h11v6H76zm0 11h88v11H76zm0 16h28v6H76zm0 17h154v28H76zm0 39h22v17H76zm28 0h44v17h-44zM0 0h66v66H0z",style:{width:"100%"}}));var d=c(7),m=(c(437),c(71)),b=e=>{let{error:t,isLoading:c,getProduct:o}=e;return Object(n.createElement)(m.a,{className:"wc-block-single-product-error",error:t,isLoading:c,onRetry:o})},p=c(102),g=e=>{let{attributes:t,setAttributes:c}=e;return Object(n.createElement)(p.a,{selected:t.productId||0,showVariations:!0,onChange:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];const t=e[0]?e[0].id:0;c({productId:t})}})},h=e=>{let{isEditing:t,setIsEditing:c}=e;return Object(n.createElement)(d.BlockControls,null,Object(n.createElement)(s.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit selected product","woo-gutenberg-products-block"),onClick:()=>c(!t),isActive:t}]}))},w=c(13),O=c(29),j=c(12);const f=e=>e.map(e=>{let[t,c={},o=[]]=e;const r=o?f(o):[];return Object(j.createBlock)(t,c,r)});var E=c(43),k=c(18),v=Object(n.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0z"}),Object(n.createElement)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-5 0-9 4-9 9H0l4 4 4-4H5a7 7 0 113 5.7l-1.5 1.4A9 9 0 1012 3z"})),_=Object(n.createElement)(k.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fill:"none",d:"M0 0h24v24H0V0z"}),Object(n.createElement)("path",{d:"M21 4H3a2 2 0 00-2 2v13c0 1.1.9 2 2 2h18a2 2 0 002-2V6a2 2 0 00-2-2zM3 19V6h8v13H3zm18 0h-8V6h8v13zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z"})),y=c(469);const S="woocommerce/single-product",x=Object(o.__)("Single Product","woo-gutenberg-products-block"),P=Object(n.createElement)(E.a,{srcElement:_,className:"wc-block-editor-components-block-icon"}),N=Object(o.__)("Display a single product.","woo-gutenberg-products-block"),C=[["core/columns",{},[["core/column",{},[["woocommerce/product-image",{showSaleBadge:!1}]]],["core/column",{},[["woocommerce/product-sale-badge"],["woocommerce/product-title",{headingLevel:2}],["woocommerce/product-rating"],["woocommerce/product-price"],["woocommerce/product-summary"],["woocommerce/product-stock-indicator"],["woocommerce/product-add-to-cart",{showFormElements:!0}],["woocommerce/product-sku"],["woocommerce/product-category-list"],["woocommerce/product-tag-list"]]]]]],I=["core/columns","core/column",...Object.keys(Object(y.a)(S))];var B=e=>{let{isLoading:t,product:c,clientId:r}=e;const{replaceInnerBlocks:a}=Object(w.useDispatch)("core/block-editor"),l=Object(n.useCallback)(()=>{a(r,f(C),!1)},[r,a]);return Object(n.createElement)(O.InnerBlockLayoutContextProvider,{parentName:S,parentClassName:"wc-block-single-product wc-block-layout"},Object(n.createElement)(O.ProductDataContextProvider,{product:c,isLoading:t},Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(s.PanelBody,{title:Object(o.__)("Layout","woo-gutenberg-products-block"),initialOpen:!0},Object(n.createElement)(s.Button,{label:Object(o.__)("Reset layout to default","woo-gutenberg-products-block"),onClick:l,isTertiary:!0,className:"wc-block-single-product__reset-layout"},Object(n.createElement)(E.a,{srcElement:v})," ",Object(o.__)("Reset layout","woo-gutenberg-products-block")))),Object(n.createElement)("div",{className:"wc-block-single-product wc-block-layout"},Object(n.createElement)(d.InnerBlocks,{template:C,allowedBlocks:I,templateLock:!1,renderAppender:!1}))))},L=Object(a.a)(e=>{let{className:t,attributes:c,setAttributes:r,error:a,getProduct:m,product:p,isLoading:w,clientId:O}=e;const{productId:j,isPreview:f}=c,[E,k]=Object(n.useState)(!j);return f?u:a?Object(n.createElement)(b,{error:a,isLoading:w,getProduct:m}):Object(n.createElement)("div",{className:t},Object(n.createElement)(l.a,{header:Object(o.__)("Single Product Block Error","woo-gutenberg-products-block")},Object(n.createElement)(h,{setIsEditing:k,isEditing:E}),E?Object(n.createElement)(s.Placeholder,{icon:P,label:x,className:"wc-block-single-product"},N,Object(n.createElement)("div",{className:"wc-block-single-product__selection"},Object(n.createElement)(g,{attributes:c,setAttributes:r}),Object(n.createElement)(s.Button,{isSecondary:!0,onClick:()=>{k(!1)}},Object(o.__)("Done","woo-gutenberg-products-block")))):Object(n.createElement)(n.Fragment,null,Object(n.createElement)(d.InspectorControls,null,Object(n.createElement)(s.PanelBody,{title:Object(o.__)("Product","woo-gutenberg-products-block"),initialOpen:!1},Object(n.createElement)(g,{attributes:c,setAttributes:r}))),Object(n.createElement)(i.a,{productId:j}),Object(n.createElement)(B,{clientId:O,product:p,isLoading:w}))))}),z=c(4),A=c.n(z);const M={title:x,icon:{src:P},category:"woocommerce",keywords:[Object(o.__)("WooCommerce","woo-gutenberg-products-block")],description:N,supports:{align:["wide","full"],html:!1},example:{attributes:{isPreview:!0}},attributes:{isPreview:{type:"boolean",default:!1,save:!1},productId:{type:"number"}},edit:L,save:e=>{let{attributes:t}=e;return Object(n.createElement)("div",{className:A()("is-loading",t.className)},Object(n.createElement)(d.InnerBlocks.Content,null))}};Object(r.c)(S,M)},46:function(e,t){e.exports=window.wp.a11y},469:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var o=c(38),r=c(0),n=c(24);c.p=n.l,Object(o.registerBlockComponent)({blockName:"woocommerce/product-price",component:Object(r.lazy)(()=>Promise.all([c.e(0),c.e(13)]).then(c.bind(null,263)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-image",component:Object(r.lazy)(()=>Promise.all([c.e(1),c.e(2),c.e(5),c.e(12)]).then(c.bind(null,502)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-title",component:Object(r.lazy)(()=>Promise.all([c.e(1),c.e(2),c.e(3),c.e(19)]).then(c.bind(null,503)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-rating",component:Object(r.lazy)(()=>c.e(14).then(c.bind(null,264)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-button",component:Object(r.lazy)(()=>Promise.all([c.e(0),c.e(1),c.e(2),c.e(4),c.e(10)]).then(c.bind(null,265)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-summary",component:Object(r.lazy)(()=>Promise.all([c.e(1),c.e(3),c.e(17)]).then(c.bind(null,266)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-sale-badge",component:Object(r.lazy)(()=>c.e(5).then(c.bind(null,195)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-sku",component:Object(r.lazy)(()=>c.e(15).then(c.bind(null,267)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-category-list",component:Object(r.lazy)(()=>c.e(11).then(c.bind(null,268)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-tag-list",component:Object(r.lazy)(()=>c.e(18).then(c.bind(null,269)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-stock-indicator",component:Object(r.lazy)(()=>Promise.all([c.e(1),c.e(3),c.e(16)]).then(c.bind(null,270)))}),Object(o.registerBlockComponent)({blockName:"woocommerce/product-add-to-cart",component:Object(r.lazy)(()=>Promise.all([c.e(0),c.e(1),c.e(2),c.e(4),c.e(9)]).then(c.bind(null,504)))});const s=e=>Object(o.getRegisteredBlockComponents)(e)},54:function(e,t){e.exports=window.wc.wcBlocksSharedHocs},6:function(e,t){e.exports=window.lodash},61:function(e,t){e.exports=window.wp.hooks},65:function(e,t,c){"use strict";c.d(t,"c",(function(){return n})),c.d(t,"d",(function(){return s})),c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return l}));var o=c(12),r=c(24);const n=(e,t)=>{if(r.n>2)return Object(o.registerBlockType)(e,t)},s=(e,t)=>{if(r.n>1)return Object(o.registerBlockType)(e,t)},a=()=>r.n>2,l=()=>r.n>1},67:function(e,t){e.exports=window.wp.deprecated},7:function(e,t){e.exports=window.wp.blockEditor},71:function(e,t,c){"use strict";var o=c(0),r=c(1),n=c(43),s=c(103),a=c(4),l=c.n(a),i=c(3),u=c(32);c(104),t.a=e=>{let{className:t,error:c,isLoading:a=!1,onRetry:d}=e;return Object(o.createElement)(i.Placeholder,{icon:Object(o.createElement)(n.a,{srcElement:s.a}),label:Object(r.__)("Sorry, an error occurred","woo-gutenberg-products-block"),className:l()("wc-block-api-error",t)},Object(o.createElement)(u.a,{error:c}),d&&Object(o.createElement)(o.Fragment,null,a?Object(o.createElement)(i.Spinner,null):Object(o.createElement)(i.Button,{isSecondary:!0,onClick:d},Object(r.__)("Retry","woo-gutenberg-products-block"))))}},76:function(e,t){e.exports=window.wp.autop},8:function(e,t){e.exports=window.React},82:function(e,t){e.exports=window.wp.dom},87:function(e,t,c){"use strict";c.d(t,"a",(function(){return v}));var o=c(5),r=c.n(o),n=c(0),s=c(1),a=c(3),l=c(485),i=c(487),u=c(4),d=c.n(u),m=c(9),b=c(17),p=c(33),g=c(486),h=c(14);const w=e=>{let{id:t,label:c,popoverContents:o,remove:r,screenReaderLabel:i,className:u=""}=e;const[b,p]=Object(n.useState)(!1),O=Object(m.useInstanceId)(w);if(i=i||c,!c)return null;c=Object(h.decodeEntities)(c);const j=d()("woocommerce-tag",u,{"has-remove":!!r}),f="woocommerce-tag__label-"+O,E=Object(n.createElement)(n.Fragment,null,Object(n.createElement)("span",{className:"screen-reader-text"},i),Object(n.createElement)("span",{"aria-hidden":"true"},c));return Object(n.createElement)("span",{className:j},o?Object(n.createElement)(a.Button,{className:"woocommerce-tag__text",id:f,onClick:()=>p(!0)},E):Object(n.createElement)("span",{className:"woocommerce-tag__text",id:f},E),o&&b&&Object(n.createElement)(a.Popover,{onClose:()=>p(!1)},o),r&&Object(n.createElement)(a.Button,{className:"woocommerce-tag__remove",onClick:r(t),label:Object(s.sprintf)(// Translators: %s label.
Object(s.__)("Remove %s","woo-gutenberg-products-block"),c),"aria-describedby":f},Object(n.createElement)(l.a,{icon:g.a,size:20,className:"clear-icon"})))};var O=w;const j=e=>Object(n.createElement)(p.b,e),f=e=>{const{list:t,selected:c,renderItem:o,depth:s=0,onSelect:a,instanceId:l,isSingle:i,search:u}=e;return t?Object(n.createElement)(n.Fragment,null,t.map(t=>{const d=-1!==c.findIndex(e=>{let{id:c}=e;return c===t.id});return Object(n.createElement)(n.Fragment,{key:t.id},Object(n.createElement)("li",null,o({item:t,isSelected:d,onSelect:a,isSingle:i,search:u,depth:s,controlId:l})),Object(n.createElement)(f,r()({},e,{list:t.children,depth:s+1})))})):null},E=e=>{let{isLoading:t,isSingle:c,selected:o,messages:r,onChange:l,onRemove:i}=e;if(t||c||!o)return null;const u=o.length;return Object(n.createElement)("div",{className:"woocommerce-search-list__selected"},Object(n.createElement)("div",{className:"woocommerce-search-list__selected-header"},Object(n.createElement)("strong",null,r.selected(u)),u>0?Object(n.createElement)(a.Button,{isLink:!0,isDestructive:!0,onClick:()=>l([]),"aria-label":r.clear},Object(s.__)("Clear all","woo-gutenberg-products-block")):null),u>0?Object(n.createElement)("ul",null,o.map((e,t)=>Object(n.createElement)("li",{key:t},Object(n.createElement)(O,{label:e.name,id:e.id,remove:i})))):null)},k=e=>{let{filteredList:t,search:c,onSelect:o,instanceId:r,...a}=e;const{messages:u,renderItem:d,selected:m,isSingle:b}=a,p=d||j;return 0===t.length?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-not-found"},Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-icon"},Object(n.createElement)(l.a,{icon:i.a})),Object(n.createElement)("span",{className:"woocommerce-search-list__not-found-text"},c?Object(s.sprintf)(u.noResults,c):u.noItems)):Object(n.createElement)("ul",{className:"woocommerce-search-list__list"},Object(n.createElement)(f,{list:t,selected:m,renderItem:p,onSelect:o,instanceId:r,isSingle:b,search:c}))},v=e=>{const{className:t="",isCompact:c,isHierarchical:o,isLoading:s,isSingle:l,list:i,messages:u=b.a,onChange:p,onSearch:g,selected:h,debouncedSpeak:w}=e,[O,j]=Object(n.useState)(""),f=Object(m.useInstanceId)(v),_=Object(n.useMemo)(()=>({...b.a,...u}),[u]),y=Object(n.useMemo)(()=>Object(b.c)(i,O,o),[i,O,o]);Object(n.useEffect)(()=>{w&&w(_.updated)},[w,_]),Object(n.useEffect)(()=>{"function"==typeof g&&g(O)},[O,g]);const S=Object(n.useCallback)(e=>()=>{l&&p([]);const t=h.findIndex(t=>{let{id:c}=t;return c===e});p([...h.slice(0,t),...h.slice(t+1)])},[l,h,p]),x=Object(n.useCallback)(e=>()=>{-1===h.findIndex(t=>{let{id:c}=t;return c===e.id})?p(l?[e]:[...h,e]):S(e.id)()},[l,S,p,h]);return Object(n.createElement)("div",{className:d()("woocommerce-search-list",t,{"is-compact":c})},Object(n.createElement)(E,r()({},e,{onRemove:S,messages:_})),Object(n.createElement)("div",{className:"woocommerce-search-list__search"},Object(n.createElement)(a.TextControl,{label:_.search,type:"search",value:O,onChange:e=>j(e)})),s?Object(n.createElement)("div",{className:"woocommerce-search-list__list is-loading"},Object(n.createElement)(a.Spinner,null)):Object(n.createElement)(k,r()({},e,{search:O,filteredList:y,messages:_,onSelect:x,instanceId:f})))};Object(a.withSpokenMessages)(v)},89:function(e,t,c){"use strict";var o=c(5),r=c.n(o),n=c(0),s=c(33),a=c(3),l=c(4),i=c.n(l);t.a=e=>{let{className:t,item:c,isSelected:o,isLoading:l,onSelect:u,disabled:d,...m}=e;return Object(n.createElement)(n.Fragment,null,Object(n.createElement)(s.a,r()({},m,{key:c.id,className:t,isSelected:o,item:c,onSelect:u,isSingle:!0,disabled:d})),o&&l&&Object(n.createElement)("div",{key:"loading",className:i()("woocommerce-search-list__item","woocommerce-product-attributes__item","depth-1","is-loading","is-not-active")},Object(n.createElement)(a.Spinner,null)))}},9:function(e,t){e.exports=window.wp.compose},92:function(e,t){e.exports=window.wp.warning},93:function(e,t,c){"use strict";var o=c(0),r=c(1),n=c(43),s=c(122),a=c(2),l=c(7),i=c(29);t.a=e=>{const t=(Object(i.useProductDataContext)().product||{}).id||e.productId||0;return t?Object(o.createElement)(l.InspectorControls,null,Object(o.createElement)("div",{className:"wc-block-single-product__edit-card"},Object(o.createElement)("div",{className:"wc-block-single-product__edit-card-title"},Object(o.createElement)("a",{href:`${a.ADMIN_URL}post.php?post=${t}&action=edit`,target:"_blank",rel:"noopener noreferrer"},Object(r.__)("Edit this product's details","woo-gutenberg-products-block"),Object(o.createElement)(n.a,{srcElement:s.a,size:16}))),Object(o.createElement)("div",{className:"wc-block-single-product__edit-card-description"},Object(r.__)("Edit details such as title, price, description and more.","woo-gutenberg-products-block")))):null}}});