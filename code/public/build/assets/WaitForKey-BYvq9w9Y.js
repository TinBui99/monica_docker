import{_ as y}from"./Button-CeJKJvkU.js";import{c as n}from"./createLucideIcon-jKXsEGte.js";import{h as r,o as t,a as e,b as a,d as c,u as d,t as l,w as g,F as p,i as b}from"./app-CapNgXf-.js";/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=n("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=n("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.539.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=n("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),k={key:0,class:"form-error-message mb3"},u={class:"relative rounded-sm border border-red-400/30 bg-red-100/10 px-4 py-3 dark:border-red-600/30 dark:bg-red-900/10",role:"alert"},_={class:"flex font-bold text-red-700/80 dark:text-red-300/80"},v={key:0,class:"mb-4 flex rounded-lg border px-4 py-8 shadow-md bg-gray-500/30 border-gray-300 dark:border-gray-700",role:"alert"},x={class:"me-2"},w={class:"font-bold"},M={key:1,class:"mb-4 flex rounded-lg border px-4 py-8 shadow-md bg-gray-500/30 border-gray-300 dark:border-gray-700"},z={class:"me-2"},V={class:"font-bold"},$={__name:"WaitForKey",props:{errorMessage:String,form:Object},emits:["retry"],setup(s){return(o,i)=>(t(),r("div",null,[s.errorMessage!==""?(t(),r("div",k,[e("div",u,[e("span",_,[a(d(f),{class:"me-2"}),c(" "+l(s.errorMessage),1)])]),a(y,{class:"mt-4",onClick:i[0]||(i[0]=C=>o.$emit("retry"))},{default:g(()=>[a(d(h),{class:"me-2"}),c(l(o.$t("Retry")),1)]),_:1})])):(t(),r(p,{key:1},[s.form.processing?(t(),r("div",v,[e("div",x,[a(d(m),{class:"h-5 w-5 animate-spin text-teal-800 dark:text-teal-200",size:25})]),e("p",w,l(o.$t("Validating key…")),1)])):s.form.hasErrors?b("",!0):(t(),r("div",M,[e("div",z,[a(d(m),{class:"h-5 w-5 animate-spin text-teal-800 dark:text-teal-200",size:25})]),e("p",V,l(o.$t("Waiting for input from browser interaction…")),1)]))],64))]))}},N=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{h as K,N as W,$ as _};
