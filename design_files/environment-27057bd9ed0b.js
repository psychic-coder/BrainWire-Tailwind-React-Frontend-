(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{30523:e=>{e.exports={polyfill:function(){var e,t=window,o=document;if(!("scrollBehavior"in o.documentElement.style)||!0===t.__forceSmoothScrollPolyfill__){var r=t.HTMLElement||t.Element,n={scroll:t.scroll||t.scrollTo,scrollBy:t.scrollBy,elementScroll:r.prototype.scroll||c,scrollIntoView:r.prototype.scrollIntoView},l=t.performance&&t.performance.now?t.performance.now.bind(t.performance):Date.now,i=(e=t.navigator.userAgent,RegExp("MSIE |Trident/|Edge/").test(e))?1:0;t.scroll=t.scrollTo=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){n.scroll.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:t.scrollY||t.pageYOffset);return}u.call(t,o.body,void 0!==arguments[0].left?~~arguments[0].left:t.scrollX||t.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:t.scrollY||t.pageYOffset)}},t.scrollBy=function(){if(void 0!==arguments[0]){if(s(arguments[0])){n.scrollBy.call(t,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0);return}u.call(t,o.body,~~arguments[0].left+(t.scrollX||t.pageXOffset),~~arguments[0].top+(t.scrollY||t.pageYOffset))}},r.prototype.scroll=r.prototype.scrollTo=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){if("number"==typeof arguments[0]&&void 0===arguments[1])throw SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop);return}var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}},r.prototype.scrollBy=function(){if(void 0!==arguments[0]){if(!0===s(arguments[0])){n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},r.prototype.scrollIntoView=function(){if(!0===s(arguments[0])){n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0]);return}var e=function(e){for(var t,r,n;e!==o.body&&!1===(r=a(t=e,"Y")&&d(t,"Y"),n=a(t,"X")&&d(t,"X"),r||n);)e=e.parentNode||e.host;return e}(this),r=e.getBoundingClientRect(),l=this.getBoundingClientRect();e!==o.body?(u.call(this,e,e.scrollLeft+l.left-r.left,e.scrollTop+l.top-r.top),"fixed"!==t.getComputedStyle(e).position&&t.scrollBy({left:r.left,top:r.top,behavior:"smooth"})):t.scrollBy({left:l.left,top:l.top,behavior:"smooth"})}}function c(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function a(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function d(e,o){var r=t.getComputedStyle(e,null)["overflow"+o];return"auto"===r||"scroll"===r}function u(e,r,i){var s,a,d,u,f=l();e===o.body?(s=t,a=t.scrollX||t.pageXOffset,d=t.scrollY||t.pageYOffset,u=n.scroll):(s=e,a=e.scrollLeft,d=e.scrollTop,u=c),function e(o){var r,n,i,c=(l()-o.startTime)/468;r=.5*(1-Math.cos(Math.PI*(c=c>1?1:c))),n=o.startX+(o.x-o.startX)*r,i=o.startY+(o.y-o.startY)*r,o.method.call(o.scrollable,n,i),(n!==o.x||i!==o.y)&&t.requestAnimationFrame(e.bind(t,o))}({scrollable:s,method:u,startTime:f,startX:a,startY:d,x:r,y:i})}}}},15947:(e,t,o)=>{"use strict";var r=o(65809),n=o(71207);n.iG?.addEventListener("error",e=>{e.error&&r.eK(e.error)}),n.iG?.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){r.eK(e)}}),n.iG?.location.hash==="#b00m"&&setTimeout(()=>{throw Error("b00m")}),o(30523),o(13604);var l=o(47940),i=o(50655);let c="default";l.ZO.createPolicy(c,{createHTML:e=>i.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!0,fallbackOnError:!0}),createScript:e=>i.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0}),createScriptURL:e=>i.O.apply({policy:()=>e,policyName:c,fallback:e,sanitize:!1,fallbackOnError:!0})});var s=o(18515);(0,o(49237).nn)(),"undefined"!=typeof document&&(()=>{if((0,s.c)("remove_child_patch")&&"function"==typeof Node&&Node.prototype){let e=Node.prototype.removeChild;Node.prototype.removeChild=function(t){try{return e.apply(this,[t])}catch(e){if(e instanceof Error&&e.stack?.includes("react-lib"))return t;throw e}}}})()},79697:(e,t,o)=>{"use strict";let r;o.d(t,{YT:()=>f,qP:()=>p,yM:()=>h});var n=o(88149),l=o(86058),i=o(56363),c=o(43786);let{getItem:s}=(0,i.Z)("localStorage"),a="dimension_",d=["utm_source","utm_medium","utm_campaign","utm_term","utm_content","scid"];try{let e=(0,n.n)("octolytics");delete e.baseContext,r=new l.R(e)}catch(e){}function u(e){let t=(0,n.n)("octolytics").baseContext||{};if(t)for(let[e,o]of(delete t.app_id,delete t.event_url,delete t.host,Object.entries(t)))e.startsWith(a)&&(t[e.replace(a,"")]=o,delete t[e]);let o=document.querySelector("meta[name=visitor-payload]");if(o){let e=JSON.parse(atob(o.content));Object.assign(t,e)}let r=new URLSearchParams(window.location.search);for(let[e,o]of r)d.includes(e.toLowerCase())&&(t[e]=o);return t.staff=(0,c.B)().toString(),Object.assign(t,e)}function f(e){r?.sendPageView(u(e))}function p(e,t={}){let o=document.head?.querySelector('meta[name="current-catalog-service"]')?.content,n=o?{service:o}:{};for(let[e,o]of Object.entries(t))null!=o&&(n[e]=`${o}`);if(r){let t=e||"unknown";u(n),r.sendEvent(t,u(n))}}function h(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,JSON.stringify(t)]))}},50655:(e,t,o)=>{"use strict";o.d(t,{O:()=>a,d:()=>TrustedTypesPolicyError});var r=o(18515),n=o(43786),l=o(65809),i=o(27856),c=o.n(i),s=o(79697);let TrustedTypesPolicyError=class TrustedTypesPolicyError extends Error{};let a={apply:function({policy:e,policyName:t,fallback:o,fallbackOnError:i=!1,sanitize:a,silenceErrorReporting:d=!1}){try{if((0,r.c)("BYPASS_TRUSTED_TYPES_POLICY_RULES"))return o;(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_CALLED",trustedTypesPolicyName:t},!1,.1);let l=e();return a&&new Promise(e=>{let o=window.performance.now(),r=c().sanitize(l,{FORBID_ATTR:[]}),n=window.performance.now();if(l.length!==r.length){let i=Error("Trusted Types policy output sanitized"),c=i.stack?.slice(0,1e3),a=l.slice(0,250);(0,s.qP)("trusted_types_policy.sanitize",{policyName:t,output:a,stack:c,outputLength:l.length,sanitizedLength:r.length,executionTime:n-o}),e(l)}}),l}catch(e){if(e instanceof TrustedTypesPolicyError||(d||(0,l.eK)(e),(0,n.b)({incrementKey:"TRUSTED_TYPES_POLICY_ERROR",trustedTypesPolicyName:t}),!i))throw e}return o}}},47940:(e,t,o)=>{"use strict";o.d(t,{ZO:()=>d});var r,n=o(71207),l=o(43786);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let c={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},s=(r=globalThis).__TRUSTED_TYPE_POLICIES__??(r.__TRUSTED_TYPE_POLICIES__=new Map),a=globalThis.trustedTypes??{createPolicy:(e,t)=>({name:e,...c,...t})},d={createPolicy:(e,t)=>{if(s.has(e))return(0,l.b)({incrementKey:"TRUSTED_TYPES_POLICY_INITIALIZED_TWICE"}),s.get(e);{let o=Object.freeze(a.createPolicy(e,t));return s.set(e,o),o}}},u=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||u||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),u=!0)})},86058:(e,t,o)=>{"use strict";o.d(t,{R:()=>AnalyticsClient});var r=o(82918);let AnalyticsClient=class AnalyticsClient{constructor(e){this.options=e}get collectorUrl(){return this.options.collectorUrl}get clientId(){return this.options.clientId?this.options.clientId:(0,r.b)()}createEvent(e){return{page:location.href,title:document.title,context:{...this.options.baseContext,...e}}}sendPageView(e){let t=this.createEvent(e);this.send({page_views:[t]})}sendEvent(e,t){let o={...this.createEvent(t),type:e};this.send({events:[o]})}send({page_views:e,events:t}){let o={client_id:this.clientId,page_views:e,events:t,request_context:{referrer:function(){let e;try{e=window.top.document.referrer}catch(t){if(window.parent)try{e=window.parent.document.referrer}catch(e){}}return""===e&&(e=document.referrer),e}(),user_agent:navigator.userAgent,screen_resolution:function(){try{return`${screen.width}x${screen.height}`}catch(e){return"unknown"}}(),browser_resolution:function(){let e=0,t=0;try{return"number"==typeof window.innerWidth?(t=window.innerWidth,e=window.innerHeight):null!=document.documentElement&&null!=document.documentElement.clientWidth?(t=document.documentElement.clientWidth,e=document.documentElement.clientHeight):null!=document.body&&null!=document.body.clientWidth&&(t=document.body.clientWidth,e=document.body.clientHeight),`${t}x${e}`}catch(e){return"unknown"}}(),browser_languages:navigator.languages?navigator.languages.join(","):navigator.language||"",pixel_ratio:window.devicePixelRatio,timestamp:Date.now(),tz_seconds:-60*new Date().getTimezoneOffset()}},r=JSON.stringify(o);try{if(navigator.sendBeacon){navigator.sendBeacon(this.collectorUrl,r);return}}catch{}fetch(this.collectorUrl,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:r,keepalive:!1})}}},88149:(e,t,o)=>{"use strict";function r(e="ha"){let t;let o={},r=document.head.querySelectorAll(`meta[name^="${e}-"]`);for(let n of Array.from(r)){let{name:r,content:l}=n,i=r.replace(`${e}-`,"").replace(/-/g,"_");"url"===i?t=l:o[i]=l}if(!t)throw Error(`AnalyticsClient ${e}-url meta tag not found`);return{collectorUrl:t,...Object.keys(o).length>0?{baseContext:o}:{}}}o.d(t,{n:()=>r})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_dompurify_dist_purify_js","vendors-node_modules_stacktrace-parser_dist_stack-trace-parser_esm_js-node_modules_github_bro-a4c183","vendors-node_modules_oddbird_popover-polyfill_dist_popover_js","ui_packages_failbot_failbot_ts"],()=>t(15947)),e.O()}]);
//# sourceMappingURL=environment-9eef62114f09.js.map