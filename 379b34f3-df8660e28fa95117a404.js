"use strict";(self.webpackChunkadobe_dev_console=self.webpackChunkadobe_dev_console||[]).push([[1392],{70542:function(e,t,s){s.d(t,{v:function(){return D}});var i=s(54506),l=(s(71133),s(88763)),a=s(60480),n=s(69659),r=s(90437),o=s(24599),c=s(89745),u=s(63341),d=s(46942),m=s.n(d),h=s(56372),g=s(6652),p=s(28227),v=s(58305);const f="688px",y="All Products",b="keywords",w=e=>e.replace(/[\u00A0-\u9999<>\&]/g,(e=>"&#"+e.charCodeAt(0)+";")).replace(/&#60;mark&#62;/g,"<mark>").replace(/&#60;em&#62;/g,"<em>").replace(/&#60;\/mark&#62;/g,"</mark>").replace(/&#60;\/em&#62;/g,"</em>"),x=(e,t)=>{const s=new URLSearchParams(window.location.search);s.set(e,t),window.history.replaceState({},"",window.location.pathname+"?"+s)},S=()=>{window.history.replaceState({},"",""+window.location.pathname)},Y=async(e,t,s,i,l,a,n,r)=>{let o;if(a.length)o=a;else{const t=await e.listIndices(),i=Object.values(t.items).map((e=>{let{name:t}=e;return t})),a=l.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return s?s+"-"+t:t})).filter((e=>i.includes(e)));n(a),o=a}i=i.includes("all")?o:i.filter((e=>o.includes(e)));const c=[];return i.forEach((e=>{c.push({indexName:e,query:t,params:{facets:[b],attributesToRetrieve:["objectID","url","product"],hitsPerPage:Math.ceil(100/i.length),filters:r.map((e=>b+':"'+e+'"')).join(" AND ")}})})),await e.multipleQueries(c)},z=(e,t)=>{e.forEach((e=>{let{objectID:s,url:i,path:l,_highlightResult:a}=e,n="";n=l||(i.includes("https://developer.adobe.com")?i.replace("https://developer.adobe.com",""):i),(0,c.i9)(n)||t.find((e=>e.url===n))||t.push({objectID:s,url:n,_highlightResult:a})}))};var A={name:"5fn1g1",styles:"margin-top:var(--spectrum-global-dimension-size-100)"},k={name:"pcg0ds",styles:"width:var(--spectrum-global-dimension-size-2400);height:var(--spectrum-global-dimension-size-1200);margin-bottom:var(--spectrum-global-dimension-size-300);fill:var(--spectrum-global-color-static-gray-500)"},H={name:"rwu85d",styles:"margin:var(--spectrum-global-dimension-size-100) 0"},j={name:"1jwcxx3",styles:"font-style:italic"},N={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},E={name:"1hctma0",styles:"margin:var(--spectrum-global-dimension-size-300);mark,em{background-color:transparent;color:inherit;font-weight:700;font-style:inherit;}"},I={name:"13udsys",styles:"height:100%"},_={name:"oragi2",styles:"white-space:nowrap;text-overflow:ellipsis"},P={name:"i2ekfq",styles:"margin-top:var(--spectrum-global-dimension-size-200);margin-bottom:var(--spectrum-global-dimension-size-100)"},M={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},L={name:"3tj9xb",styles:"width:100%;height:100%;display:grid;place-items:start center"},q={name:"1i3xfjj",styles:"margin-bottom:var(--spectrum-global-dimension-size-100)"},O={name:"11en623",styles:"display:flex;flex-direction:column;align-items:center;justify-content:center"},R={name:"14gwd3k",styles:"margin-top:var(--spectrum-global-dimension-size-800);margin-bottom:var(--spectrum-global-dimension-size-800)"},V={name:"1ef11wo",styles:"font-style:italic;margin:var(--spectrum-global-dimension-size-50) 0"},B={name:"pgkztz",styles:"mark,em{background-color:transparent;color:inherit;font-weight:inherit;font-style:inherit;text-decoration:underline;}"},C={name:"11qpleq",styles:"min-width:auto;width:100%"},T={name:"1d3w5wq",styles:"width:100%"};const D=e=>{let{algolia:t,indexAll:s,indexPrefix:d,showSearch:D,setShowSearch:F,searchButtonId:Z,isIFramed:W}=e;const{0:U,1:J}=(0,l.useState)(!1),{0:K,1:Q}=(0,l.useState)(""),{0:X,1:G}=(0,l.useState)(""),{0:$,1:ee}=(0,l.useState)(["all"]),{0:te,1:se}=(0,l.useState)([y]),{0:ie,1:le}=(0,l.useState)([]),{0:ae,1:ne}=(0,l.useState)([]),{0:re,1:oe}=(0,l.useState)(!1),{0:ce,1:ue}=(0,l.useState)(!1),{0:de,1:me}=(0,l.useState)(!1),he=(0,l.useRef)(null),ge=(0,l.useRef)(null),pe=(0,l.useRef)(null),ve=(0,l.useRef)(null),{0:fe,1:ye}=(0,l.useState)([]),{0:be,1:we}=(0,l.useState)([]),{0:xe,1:Se}=(0,l.useState)([]),{0:Ye,1:ze}=(0,l.useState)([]),{0:Ae,1:ke}=(0,l.useState)(!1),{0:He,1:je}=(0,l.useState)(!1),{0:Ne,1:Ee}=(0,l.useState)(0),Ie=async()=>{if(K.length){var e,i;let l;if(ke(!1),x(c.kj.query,K),x(c.kj.keywords,ae),x(c.kj.index,$),W){const e=JSON.stringify({query:K,keywords:ae,index:$}),t=(()=>{const e=document.referrer;return(e.indexOf("localhost")>=0||e.indexOf("developer-stage.adobe")>=0||e.indexOf("hlx.page")>=0||e.indexOf("hlx.live")>=0||e.indexOf("developer.adobe")>=0)&&e})();t&&parent.postMessage(e,t)}oe(!0),K!==X?(J(!0),l=await Y(t,K,d,["all"],s,ie,le,ae)):l=await Y(t,K,d,$,s,ie,le,ae);const a=te.filter((e=>e!==y))[0],n=[y],r=[],o=[];null!==(e=l)&&void 0!==e&&null!==(i=e.results)&&void 0!==i&&i.length&&l.results.forEach((e=>{let{hits:t,facets:s}=e;if(void 0!==s){if(t.length>0){const e=t[0].product;e&&(n.includes(e)||(e!==a?n.push(e):n.splice(1,0,a)))}return z(t,r),((e,t)=>{e[b]&&Object.keys(e[b]).forEach((s=>{const i=t.find((e=>Object.keys(e)[0]===s));i?i[s]+=e[b][s]:t.push({[s]:e[b][s]})}))})(s,o),!0}})),K!==X?(Se(n),G(K),a&&n.includes(a)?(ee((0,u.getIndexesFromProduct)(a)),je(!0)):(we(r),ze(o),J(!1))):(we(r),ze(o),J(!1))}};return(0,l.useEffect)((async()=>{W&&window.addEventListener("message",(e=>{const t=JSON.parse(e.data);if(t.localPathName){let e=t.localPathName;if("/"!==e){e.startsWith("/")||(e="/"+e),e.endsWith("/")||(e+="/");const t=s.find((t=>t.productIndices.some((t=>e.startsWith(t.indexPathPrefix)))));null!=t&&t.productName&&se([t.productName].concat((0,i.A)(te)))}const l=JSON.stringify({received:t.localPathName});parent.postMessage(l,"*")}}));const e=await t.listIndices(),l=Object.values(e.items).map((e=>{let{name:t}=e;return t})),a=s.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return d?d+"-"+t:t})).filter((e=>l.includes(e)));le(a)}),[]),(0,l.useEffect)((()=>{if(D){const e=new URL(window.location).searchParams,t=e.get(c.kj.query),s=e.get(c.kj.keywords),i=e.get(c.kj.index);i&&ee(i.split(",")),s&&ne(s.split(",")),null!=t&&t.length&&(Q(t),me(!0),je(!0)),null!=pe&&pe.current&&pe.current.focus()}else S()}),[D]),(0,l.useEffect)((()=>{He&&(je(!1),Ie())}),[He]),(0,l.useEffect)((()=>{null!=ve&&ve.current&&(ve.current.scrollTop=0)}),[be]),(0,l.useEffect)((()=>{const e=e=>{let{target:t}=e;ke(!1),he.current&&!he.current.contains(t)&&t.id!==Z&&F(!1)};return document.addEventListener("click",e,!0),()=>{document.removeEventListener("click",e,!0)}}),[ke,re,F,he]),(0,l.useEffect)((()=>{const e=e=>{let{key:t}=e;if("Escape"===t){F(!1),S();const e=document.getElementById("aio-Search-close");e&&e.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[F]),(0,l.useEffect)((()=>{const e=setTimeout((()=>l()),500),l=async()=>{if(K.length&&!be.length){var e;me(!0);const l=await(async(e,t,s,l,a,n,r)=>{const o=[];let c;if(n.length)c=n;else{const t=await e.listIndices(),i=Object.values(t.items).map((e=>{let{name:t}=e;return t})),l=a.map((e=>e.productIndices)).flat().map((e=>{let{indexName:t}=e;return s?s+"-"+t:t})).filter((e=>i.includes(e)));r(l),c=l}if(l[0]===y)l=c;else{const e=l.filter((e=>e!==y)),t=(0,u.getIndexesFromProduct)(e[0]);l=[].concat((0,i.A)(t),(0,i.A)(c.filter((t=>!e.includes(t))))).filter((e=>c.includes(e)))}return l.forEach((e=>{o.push({indexName:e,query:t,params:{hitsPerPage:Math.ceil(50/l.length),attributesToRetrieve:["objectID","url","title","description"]}})})),await e.multipleQueries(o)})(t,K,d,te,s,ie,le);if(Ee(Ne+1),console.log("Total search queries counted is:",Ne),null!=l&&null!==(e=l.results)&&void 0!==e&&e.length){const e=[];l.results.forEach((t=>{let{hits:s}=t;z(s,e)})),ye(e),be.length||oe(!1)}else ye([]);ke(!0)}else me(!1),ke(!1)};return()=>clearTimeout(e)}),[K]),W&&(0,l.useEffect)((()=>{if(ge&&fe.length>0){const e=ge.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}if(ve&&be.length>0){const e=ve.current.querySelectorAll("a");e.length>0&&e.forEach((e=>{e.target="_top"}))}}),[fe,be]),(0,a.Y)(l.default.Fragment,null,(0,a.Y)("div",{ref:he,css:(0,a.AH)("position:fixed;top:",W?"0":"var(--spectrum-global-dimension-size-800)",";left:0;right:0;",re&&"bottom: 0;"," background-color:var(--spectrum-global-color-static-white);z-index:10;@media screen and (max-width: ",c.Vh,"){top:var(--spectrum-global-dimension-size-1200);}","")},(0,a.Y)("div",{css:(0,a.AH)("position:relative;margin:var(--spectrum-global-dimension-size-400) auto;max-width:",f,";@media screen and (max-width: ",c.Vh,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},(0,a.Y)("form",{css:T,className:"spectrum-Search",onSubmit:async e=>{e.preventDefault(),ne([]),me(!0),je(!0)}},(0,a.Y)("div",{className:m()("spectrum-Textfield",{"is-focused":ce}),css:C},(0,a.Y)(g.Magnify,{className:"spectrum-Textfield-icon"}),(0,a.Y)("input",{ref:pe,value:K,onFocus:()=>{ue(!0)},onBlur:()=>{ue(!1)},onKeyDown:e=>{let{key:t}=e;null!=ge&&ge.current&&("ArrowDown"===t?ge.current.querySelector('[tabindex="0"]').focus():"ArrowUp"===t&&ge.current.querySelector('[tabindex="0"]:last-of-type').focus())},onChange:async e=>{const t=e.target.value;Q(t)},"aria-label":"Search",type:"search",placeholder:"Search",className:"spectrum-Textfield-input spectrum-Search-input",autoComplete:"off"})),de&&(0,a.Y)(h.r,{css:(0,a.AH)("position:absolute;margin-right:var(--spectrum-global-dimension-size-100);margin-bottom:var(--spectrum-global-dimension-size-40);@media screen and (max-width: ",c.Vh,"){margin-right:0;}&:focus{border:2px solid #007aff!important;border-radius:15%!important;}",""),tabIndex:"0",isQuiet:!0,"aria-label":"Clear Search",type:"reset",className:"spectrum-ClearButton spectrum-Search-clearButton",onClick:()=>{Q(""),we([]),oe(!1),S(),pe.current.focus()}},(0,a.Y)(g.Close,null))),(0,a.Y)(o.A,{isOpen:Ae,css:(0,a.AH)("position:absolute;top:var(--spectrum-global-dimension-size-400);width:",f,";@media screen and (max-width: ",c.Vh,"){max-width:calc(100vw - var(--spectrum-global-dimension-size-800));}","")},fe.length>0?(0,a.Y)(r.W1,{ref:ge,onKeyDown:e=>{let{key:t}=e;if(null!=ge&&ge.current&&ge.current.contains(document.activeElement))if("ArrowDown"===t){const e=document.activeElement.nextElementSibling;e?e.focus():ge.current.querySelector('[tabindex="0"]').focus()}else if("ArrowUp"===t){const e=document.activeElement.previousElementSibling;e?e.focus():ge.current.querySelector('[tabindex="0"]:last-of-type').focus()}}},fe.map((e=>{var t;const s=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let n="";var o,c,u,d,m,h,g,p;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),n=(null===(o=l[0][1])||void 0===o||null===(c=o.value)||void 0===c?void 0:c.length)>(null===(u=l[1][1])||void 0===u||null===(d=u.value)||void 0===d?void 0:d.length)?null===(m=l[0][1])||void 0===m?void 0:m.value:null===(h=l[1][1])||void 0===h?void 0:h.value):n=null!==(g=l[0][1])&&void 0!==g&&g.value?null===(p=l[0][1])||void 0===p?void 0:p.value:"";return n=n.substring(0,250),(0,a.Y)(r.q7,{key:e.objectID,href:s},(0,a.Y)("div",{css:B},(0,a.Y)("strong",{dangerouslySetInnerHTML:{__html:w(i)}}),(0,a.Y)("div",{css:V},s),(0,a.Y)("div",{dangerouslySetInnerHTML:{__html:w(n)}})))}))):(0,a.Y)("div",{css:R},(0,a.Y)("div",{css:O},(0,a.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeS",css:q},"No Results Found"),(0,a.Y)("em",null,"Try another search term"))))),U&&(0,a.Y)("div",{css:L},(0,a.Y)(v.a,{size:"L"})),re&&!U&&(0,a.Y)("div",{css:(0,a.AH)("display:flex;max-width:",c.fy,";margin:auto;height:100%;@media screen and (max-width: ",c.Vh,"){overflow:auto;flex-wrap:wrap;}","")},(0,a.Y)("div",{css:(0,a.AH)("display:flex;align-items:flex-start;flex-direction:column;box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);width:",c.CS,";","")},(0,a.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:M},"Filter by Products"),(0,a.Y)("div",{css:(0,a.AH)("display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:30%;width:",c.CS,";@media screen and (max-width: ",c.Vh,"){margin-bottom:0;}","")},xe.map(((e,t)=>(0,a.Y)(p.S,{key:t,isSelected:e===y?$.includes("all"):$.some((t=>(0,u.getIndexesFromProduct)(e).includes(t))),value:e,onChange:t=>{ee(t?"All Products"===e?["all"]:[].concat((0,i.A)($.filter((e=>"all"!==e))),(0,i.A)((0,u.getIndexesFromProduct)(e))):"All Products"===e?$.filter((e=>"all"!==e)):$.filter((t=>!(0,u.getIndexesFromProduct)(e).includes(t)))),ne([]),je(!0)}},(0,a.Y)("span",null,e))))),(0,a.Y)("h4",{className:"spectrum-Heading spectrum-Heading--sizeXS",css:P},"Filter by Keywords"),(0,a.Y)("div",{css:(0,a.AH)("margin-bottom:var(--spectrum-global-dimension-size-100);display:flex;flex-direction:column;overflow-y:auto;overflow-x:hidden;max-height:50%;width:",c.CS,";@media screen and (max-width: ",c.Vh,"){margin-bottom:0;}","")},Ye.length>0?Ye.map(((e,t)=>{const s=Object.keys(e)[0];return(0,a.Y)(p.S,{key:t,isSelected:ae.includes(s),value:s,onChange:e=>{ne(e?e=>[].concat((0,i.A)(e),[s]):ae.filter((e=>e!==s))),je(!0)}},(0,a.Y)("span",{css:_},s))})):(0,a.Y)("div",{className:"spectrum-Body spectrum-Body--sizeS"},"No filter options available"))),(0,a.Y)("div",{css:I},be.length>0?(0,a.Y)("div",{ref:ve,css:(0,a.AH)("height:calc(\n                      100% - var(--spectrum-global-dimension-size-800) - var(--spectrum-global-dimension-size-800) -\n                        var(--spectrum-global-dimension-size-200)\n                    );overflow:auto;@media screen and (max-width: ",c.Vh,"){height:auto;overflow:inherit;}","")},be.map((e=>{var t;const s=""+location.origin+e.url,i=null!==(t=e._highlightResult.title)&&void 0!==t&&t.value?e._highlightResult.title.value:"",l=Object.entries(e._highlightResult).filter((e=>e[1].matchedWords.length>0));let r="";var o,c,u,d,m,h,g,p;l.length>1?(l.sort(((e,t)=>e[1].value.length>t[1].value.length?-1:1)),r=(null===(o=l[0][1])||void 0===o||null===(c=o.value)||void 0===c?void 0:c.length)>(null===(u=l[1][1])||void 0===u||null===(d=u.value)||void 0===d?void 0:d.length)?null===(m=l[0][1])||void 0===m?void 0:m.value:null===(h=l[1][1])||void 0===h?void 0:h.value):r=null!==(g=l[0][1])&&void 0!==g&&g.value?null===(p=l[0][1])||void 0===p?void 0:p.value:"";return r=r.substring(0,250),(0,a.Y)("div",{css:E},(0,a.Y)("div",{className:"spectrum-Body spectrum-Body--sizeM",css:N},(0,a.Y)(n.M,{to:s},(0,a.Y)("span",{dangerouslySetInnerHTML:{__html:w(i)}}))),(0,a.Y)("div",{css:j},(0,a.Y)(n.M,{variant:"secondary",to:s},s)),(0,a.Y)("div",{className:"spectrum-Body spectrum-Body--sizeS",css:H,dangerouslySetInnerHTML:{__html:w(r)}}))}))):(0,a.Y)("div",{css:(0,a.AH)("position:absolute;top:var(--spectrum-global-dimension-size-3600);height:calc(2 * var(--spectrum-global-dimension-size-1250));margin-top:calc(-1 * var(--spectrum-global-dimension-size-1250));text-align:center;right:0;left:0;padding:0 var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",c.Vh,"){position:static;margin:var(--spectrum-global-dimension-size-800) 0;height:auto;}","")},(0,a.Y)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 104 90",css:k},(0,a.Y)("g",null,(0,a.Y)("g",null,(0,a.Y)("path",{d:"M37.5,69A24.54,24.54,0,1,0,17,57.92l0,0L1.46,73.52A5,5,0,0,0,5,82.05H5a5,5,0,0,0,3.54-1.47L24.06,65l0,0A24.33,24.33,0,0,0,37.5,69Zm0-46A21.5,21.5,0,1,1,16,44.5,21.52,21.52,0,0,1,37.5,23ZM6.41,78.46A2,2,0,0,1,5,79.05H5a2,2,0,0,1-1.42-3.42L18.83,60.34a25.21,25.21,0,0,0,2.83,2.83Z"}),(0,a.Y)("path",{d:"M28.67,53.33a1.51,1.51,0,0,0,1.06.44,1.49,1.49,0,0,0,1.06-.44l6.71-6.71,6.71,6.71a1.5,1.5,0,0,0,2.12,0,1.49,1.49,0,0,0,0-2.12L39.62,44.5l6.71-6.71a1.49,1.49,0,0,0,0-2.12,1.51,1.51,0,0,0-2.12,0L37.5,42.38l-6.71-6.71a1.5,1.5,0,0,0-2.12,2.12l6.71,6.71-6.71,6.71A1.51,1.51,0,0,0,28.67,53.33Z"}),(0,a.Y)("path",{d:"M102.5,31a1.5,1.5,0,0,0-1.5,1.5V86.17a.83.83,0,0,1-.83.83H38.83a.83.83,0,0,1-.83-.83V73.5a1.5,1.5,0,0,0-3,0V86.17A3.84,3.84,0,0,0,38.83,90h61.34A3.84,3.84,0,0,0,104,86.17V32.5A1.5,1.5,0,0,0,102.5,31Z"}),(0,a.Y)("path",{d:"M37.5,17A1.5,1.5,0,0,0,39,15.5V3.83A.83.83,0,0,1,39.83,3H75V26.5A1.5,1.5,0,0,0,76.5,28h25.55a1.5,1.5,0,0,0,1-2.57L77.55.43a1.43,1.43,0,0,0-.49-.32A1.41,1.41,0,0,0,76.52,0H39.83A3.84,3.84,0,0,0,36,3.83V15.5A1.5,1.5,0,0,0,37.5,17ZM78,5.07,98.37,25H78Z"})))),(0,a.Y)("h3",{className:"spectrum-Heading spectrum-Heading--light spectrum-Heading--sizeM"},"Sorry, we couldn't find any results for ",(0,a.Y)("strong",null,K)),(0,a.Y)("p",{className:"spectrum-Body spectrum-Body--S",css:A},"Make sure all the words are spelled correctly or try to refine your keywords."))))),!re&&(0,a.Y)("div",{css:(0,a.AH)("position:fixed;z-index:1;top:",W?"var(--spectrum-global-dimension-size-800)":"calc(var(--spectrum-global-dimension-size-1200) + var(--spectrum-global-dimension-size-800))",";bottom:0;left:0;right:0;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;","")}))}}}]);
//# sourceMappingURL=379b34f3-df8660e28fa95117a404.js.map