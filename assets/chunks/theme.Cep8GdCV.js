import{d as M,c as d,r as c,n as G,o as a,a as N,t as A,b as h,w as p,T as Mn,e as b,_ as y,u as Kn,i as $n,f as Zn,g as gn,h as R,j as X,k as f,l as B,m,p as s,q as H,s as dn,v as F,x as Q,y as yn,z as On,A as Jn,B as qn,F as w,C as _,D as W,E as Vn,G as nn,H as g,I as z,J as _n,K as en,L as Z,M as tn,N as Qn,O as In,P as ne,Q as mn,R as ee,S as Nn,U as te,V as Ln,W as j,X as Un,Y as kn,Z as re,$ as oe,a0 as ae,a1 as ie,a2 as En,a3 as An}from"./framework.BMMljfWr.js";const se=M({__name:"VPBadge",props:{text:{},type:{default:"tip"}},setup(t){return(n,e)=>(a(),d("span",{class:G(["VPBadge",n.type])},[c(n.$slots,"default",{},()=>[N(A(n.text),1)])],2))}}),le={key:0,class:"VPBackdrop"},ce=M({__name:"VPBackdrop",props:{show:{type:Boolean}},setup(t){return(n,e)=>(a(),h(Mn,{name:"fade"},{default:p(()=>[n.show?(a(),d("div",le)):b("",!0)]),_:1}))}}),de=y(ce,[["__scopeId","data-v-c79a1216"]]),P=Kn;function me(t,n){let e,r=!1;return()=>{e&&clearTimeout(e),r?e=setTimeout(t,n):(t(),(r=!0)&&setTimeout(()=>r=!1,n))}}function pn(t){return/^\//.test(t)?t:`/${t}`}function Dn(t){const{pathname:n,search:e,hash:r,protocol:o}=new URL(t,"http://a.com");if($n(t)||t.startsWith("#")||!o.startsWith("http")||!Zn(n))return t;const{site:i}=P(),l=n.endsWith("/")||n.endsWith(".html")?t:t.replace(/(?:(^\.+)\/)?.*$/,`$1${n.replace(/(\.md)?$/,i.value.cleanUrls?"":".html")}${e}${r}`);return gn(l)}const Cn=R(X?location.hash:"");X&&window.addEventListener("hashchange",()=>{Cn.value=location.hash});function $({removeCurrent:t=!0,correspondingLink:n=!1}={}){const{site:e,localeIndex:r,page:o,theme:i}=P(),l=f(()=>{var u,C;return{label:(u=e.value.locales[r.value])==null?void 0:u.label,link:((C=e.value.locales[r.value])==null?void 0:C.link)||(r.value==="root"?"/":`/${r.value}/`)}});return{localeLinks:f(()=>Object.entries(e.value.locales).flatMap(([u,C])=>t&&l.value.label===C.label?[]:{text:C.label,link:pe(C.link||(u==="root"?"/":`/${u}/`),i.value.i18nRouting!==!1&&n,o.value.relativePath.slice(l.value.link.length-1),!e.value.cleanUrls)+Cn.value})),currentLang:l}}function pe(t,n,e,r){return n?t.replace(/\/$/,"")+pn(e.replace(/(^|\/)index\.md$/,"$1").replace(/\.md$/,r?".html":"")):t}const ue={class:"NotFound"},xe={class:"code"},be={class:"title"},Me={class:"quote"},ge={class:"action"},ye=["href","aria-label"],De=M({__name:"NotFound",setup(t){const{site:n,theme:e}=P(),{localeLinks:r}=$({removeCurrent:!1}),o=R("/");return B(()=>{var l;const i=window.location.pathname.replace(n.value.base,"").replace(/(^.*?\/).*$/,"/$1");r.value.length&&(o.value=((l=r.value.find(({link:x})=>x.startsWith(i)))==null?void 0:l.link)||r.value[0].link)}),(i,l)=>{var x,u,C,v,D;return a(),d("div",ue,[m("p",xe,A(((x=s(e).notFound)==null?void 0:x.code)??"404"),1),m("h1",be,A(((u=s(e).notFound)==null?void 0:u.title)??"PAGE NOT FOUND"),1),l[0]||(l[0]=m("div",{class:"divider"},null,-1)),m("blockquote",Me,A(((C=s(e).notFound)==null?void 0:C.quote)??"But if you don't change your direction, and if you keep looking, you may end up where you are heading."),1),m("div",ge,[m("a",{class:"link",href:s(gn)(o.value),"aria-label":((v=s(e).notFound)==null?void 0:v.linkLabel)??"go to home"},A(((D=s(e).notFound)==null?void 0:D.linkText)??"Take me home"),9,ye)])])}}}),Ce=y(De,[["__scopeId","data-v-f87ff6e4"]]);function jn(t,n){if(Array.isArray(t))return J(t);if(t==null)return[];n=pn(n);const e=Object.keys(t).sort((o,i)=>i.split("/").length-o.split("/").length).find(o=>n.startsWith(pn(o))),r=e?t[e]:[];return Array.isArray(r)?J(r):J(r.items,r.base)}function he(t){const n=[];let e=0;for(const r in t){const o=t[r];if(o.items){e=n.push(o);continue}n[e]||n.push({items:[]}),n[e].items.push(o)}return n}function fe(t){const n=[];function e(r){for(const o of r)o.text&&o.link&&n.push({text:o.text,link:o.link,docFooterText:o.docFooterText}),o.items&&e(o.items)}return e(t),n}function un(t,n){return Array.isArray(n)?n.some(e=>un(t,e)):H(t,n.link)?!0:n.items?un(t,n.items):!1}function J(t,n){return[...t].map(e=>{const r={...e},o=r.base||n;return o&&r.link&&(r.link=o+r.link),r.items&&(r.items=J(r.items,o)),r})}function U(){const{frontmatter:t,page:n,theme:e}=P(),r=dn("(min-width: 960px)"),o=R(!1),i=f(()=>{const V=e.value.sidebar,E=n.value.relativePath;return V?jn(V,E):[]}),l=R(i.value);F(i,(V,E)=>{JSON.stringify(V)!==JSON.stringify(E)&&(l.value=i.value)});const x=f(()=>t.value.sidebar!==!1&&l.value.length>0&&t.value.layout!=="home"),u=f(()=>C?t.value.aside==null?e.value.aside==="left":t.value.aside==="left":!1),C=f(()=>t.value.layout==="home"?!1:t.value.aside!=null?!!t.value.aside:e.value.aside!==!1),v=f(()=>x.value&&r.value),D=f(()=>x.value?he(l.value):[]);function T(){o.value=!0}function S(){o.value=!1}function O(){o.value?S():T()}return{isOpen:o,sidebar:l,sidebarGroups:D,hasSidebar:x,hasAside:C,leftAside:u,isSidebarEnabled:v,open:T,close:S,toggle:O}}function ve(t,n){let e;Q(()=>{e=t.value?document.activeElement:void 0}),B(()=>{window.addEventListener("keyup",r)}),yn(()=>{window.removeEventListener("keyup",r)});function r(o){o.key==="Escape"&&t.value&&(n(),e==null||e.focus())}}function Pe(t){const{page:n}=P(),e=R(!1),r=f(()=>t.value.collapsed!=null),o=f(()=>!!t.value.link),i=R(!1),l=()=>{i.value=H(n.value.relativePath,t.value.link)};F([n,t,Cn],l),B(l);const x=f(()=>i.value?!0:t.value.items?un(n.value.relativePath,t.value.items):!1),u=f(()=>!!(t.value.items&&t.value.items.length));Q(()=>{e.value=!!(r.value&&t.value.collapsed)}),On(()=>{(i.value||x.value)&&(e.value=!1)});function C(){r.value&&(e.value=!e.value)}return{collapsed:e,collapsible:r,isLink:o,isActiveLink:i,hasActiveLink:x,hasChildren:u,toggle:C}}function Te(){const{hasSidebar:t}=U(),n=dn("(min-width: 960px)"),e=dn("(min-width: 1280px)");return{isAsideEnabled:f(()=>!e.value&&!n.value?!1:t.value?e.value:n.value)}}const xn=[];function Hn(t){return typeof t.outline=="object"&&!Array.isArray(t.outline)&&t.outline.label||t.outlineTitle||"On this page"}function hn(t){const n=[...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")].filter(e=>e.id&&e.hasChildNodes()).map(e=>{const r=Number(e.tagName[1]);return{element:e,title:Ee(e),link:"#"+e.id,level:r}});return Ae(n,t)}function Ee(t){let n="";for(const e of t.childNodes)if(e.nodeType===1){if(e.classList.contains("VPBadge")||e.classList.contains("header-anchor")||e.classList.contains("ignore-header"))continue;n+=e.textContent}else e.nodeType===3&&(n+=e.textContent);return n.trim()}function Ae(t,n){if(n===!1)return[];const e=(typeof n=="object"&&!Array.isArray(n)?n.level:n)||2,[r,o]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e;t=t.filter(l=>l.level>=r&&l.level<=o),xn.length=0;for(const{element:l,link:x}of t)xn.push({element:l,link:x});const i=[];n:for(let l=0;l<t.length;l++){const x=t[l];if(l===0)i.push(x);else{for(let u=l-1;u>=0;u--){const C=t[u];if(C.level<x.level){(C.children||(C.children=[])).push(x);continue n}}i.push(x)}}return i}function Se(t,n){const{isAsideEnabled:e}=Te(),r=me(i,100);let o=null;B(()=>{requestAnimationFrame(i),window.addEventListener("scroll",r)}),Jn(()=>{l(location.hash)}),yn(()=>{window.removeEventListener("scroll",r)});function i(){if(!e.value)return;const x=window.scrollY,u=window.innerHeight,C=document.body.offsetHeight,v=Math.abs(x+u-C)<1,D=xn.map(({element:S,link:O})=>({link:O,top:Re(S)})).filter(({top:S})=>!Number.isNaN(S)).sort((S,O)=>S.top-O.top);if(!D.length){l(null);return}if(x<1){l(null);return}if(v){l(D[D.length-1].link);return}let T=null;for(const{link:S,top:O}of D){if(O>x+qn()+4)break;T=S}l(T)}function l(x){o&&o.classList.remove("active"),x==null?o=null:o=t.value.querySelector(`a[href="${decodeURIComponent(x)}"]`);const u=o;u?(u.classList.add("active"),n.value.style.top=u.offsetTop+39+"px",n.value.style.opacity="1"):(n.value.style.top="33px",n.value.style.opacity="0")}}function Re(t){let n=0;for(;t!==document.body;){if(t===null)return NaN;n+=t.offsetTop,t=t.offsetParent}return n}const Ge=["href","title"],we=M({__name:"VPDocOutlineItem",props:{headers:{},root:{type:Boolean}},setup(t){function n({target:e}){const r=e.href.split("#")[1],o=document.getElementById(decodeURIComponent(r));o==null||o.focus({preventScroll:!0})}return(e,r)=>{const o=W("VPDocOutlineItem",!0);return a(),d("ul",{class:G(["VPDocOutlineItem",e.root?"root":"nested"])},[(a(!0),d(w,null,_(e.headers,({children:i,link:l,title:x})=>(a(),d("li",null,[m("a",{class:"outline-link",href:l,onClick:n,title:x},A(x),9,Ge),i!=null&&i.length?(a(),h(o,{key:0,headers:i},null,8,["headers"])):b("",!0)]))),256))],2)}}}),Bn=y(we,[["__scopeId","data-v-b933a997"]]),Oe={class:"content"},Ve={class:"outline-title",role:"heading","aria-level":"2"},_e={"aria-labelledby":"doc-outline-aria-label"},Ie=M({__name:"VPDocAsideOutline",setup(t){const{frontmatter:n,theme:e}=P(),r=Vn([]);nn(()=>{r.value=hn(n.value.outline??e.value.outline)});const o=R(),i=R();return Se(o,i),(l,x)=>(a(),d("div",{class:G(["VPDocAsideOutline",{"has-outline":r.value.length>0}]),ref_key:"container",ref:o,role:"navigation"},[m("div",Oe,[m("div",{class:"outline-marker",ref_key:"marker",ref:i},null,512),m("div",Ve,A(s(Hn)(s(e))),1),m("nav",_e,[x[0]||(x[0]=m("span",{class:"visually-hidden",id:"doc-outline-aria-label"}," Table of Contents for current page ",-1)),g(Bn,{headers:r.value,root:!0},null,8,["headers"])])])],2))}}),Ne=y(Ie,[["__scopeId","data-v-935f8a84"]]),Le={class:"VPDocAsideCarbonAds"},Ue=M({__name:"VPDocAsideCarbonAds",props:{carbonAds:{}},setup(t){const n=()=>null;return(e,r)=>(a(),d("div",Le,[g(s(n),{"carbon-ads":e.carbonAds},null,8,["carbon-ads"])]))}}),ke={class:"VPDocAside"},je=M({__name:"VPDocAside",setup(t){const{theme:n}=P();return(e,r)=>(a(),d("div",ke,[c(e.$slots,"aside-top",{},void 0,!0),c(e.$slots,"aside-outline-before",{},void 0,!0),g(Ne),c(e.$slots,"aside-outline-after",{},void 0,!0),r[0]||(r[0]=m("div",{class:"spacer"},null,-1)),c(e.$slots,"aside-ads-before",{},void 0,!0),s(n).carbonAds?(a(),h(Ue,{key:0,"carbon-ads":s(n).carbonAds},null,8,["carbon-ads"])):b("",!0),c(e.$slots,"aside-ads-after",{},void 0,!0),c(e.$slots,"aside-bottom",{},void 0,!0)]))}}),He=y(je,[["__scopeId","data-v-3f215769"]]);function Be(){const{theme:t,page:n}=P();return f(()=>{const{text:e="Edit this page",pattern:r=""}=t.value.editLink||{};let o;return typeof r=="function"?o=r(n.value):o=r.replace(/:path/g,n.value.filePath),{url:o,text:e}})}function Fe(){const{page:t,theme:n,frontmatter:e}=P();return f(()=>{var C,v,D,T,S,O,V,E;const r=jn(n.value.sidebar,t.value.relativePath),o=fe(r),i=We(o,I=>I.link.replace(/[?#].*$/,"")),l=i.findIndex(I=>H(t.value.relativePath,I.link)),x=((C=n.value.docFooter)==null?void 0:C.prev)===!1&&!e.value.prev||e.value.prev===!1,u=((v=n.value.docFooter)==null?void 0:v.next)===!1&&!e.value.next||e.value.next===!1;return{prev:x?void 0:{text:(typeof e.value.prev=="string"?e.value.prev:typeof e.value.prev=="object"?e.value.prev.text:void 0)??((D=i[l-1])==null?void 0:D.docFooterText)??((T=i[l-1])==null?void 0:T.text),link:(typeof e.value.prev=="object"?e.value.prev.link:void 0)??((S=i[l-1])==null?void 0:S.link)},next:u?void 0:{text:(typeof e.value.next=="string"?e.value.next:typeof e.value.next=="object"?e.value.next.text:void 0)??((O=i[l+1])==null?void 0:O.docFooterText)??((V=i[l+1])==null?void 0:V.text),link:(typeof e.value.next=="object"?e.value.next.link:void 0)??((E=i[l+1])==null?void 0:E.link)}}})}function We(t,n){const e=new Set;return t.filter(r=>{const o=n(r);return e.has(o)?!1:e.add(o)})}const L=M({__name:"VPLink",props:{tag:{},href:{},noIcon:{type:Boolean},target:{},rel:{}},setup(t){const n=t,e=f(()=>n.tag??(n.href?"a":"span")),r=f(()=>n.href&&_n.test(n.href));return(o,i)=>(a(),h(z(e.value),{class:G(["VPLink",{link:o.href,"vp-external-link-icon":r.value,"no-icon":o.noIcon}]),href:o.href?s(Dn)(o.href):void 0,target:o.target??(r.value?"_blank":void 0),rel:o.rel??(r.value?"noreferrer":void 0)},{default:p(()=>[c(o.$slots,"default")]),_:3},8,["class","href","target","rel"]))}}),Ye={class:"VPLastUpdated"},ze=["datetime"],Xe=M({__name:"VPDocFooterLastUpdated",setup(t){const{theme:n,page:e,frontmatter:r,lang:o}=P(),i=f(()=>new Date(r.value.lastUpdated??e.value.lastUpdated)),l=f(()=>i.value.toISOString()),x=R("");return B(()=>{Q(()=>{var u,C,v;x.value=new Intl.DateTimeFormat((C=(u=n.value.lastUpdated)==null?void 0:u.formatOptions)!=null&&C.forceLocale?o.value:void 0,((v=n.value.lastUpdated)==null?void 0:v.formatOptions)??{dateStyle:"short",timeStyle:"short"}).format(i.value)})}),(u,C)=>{var v;return a(),d("p",Ye,[N(A(((v=s(n).lastUpdated)==null?void 0:v.text)||s(n).lastUpdatedText||"Last updated")+": ",1),m("time",{datetime:l.value},A(x.value),9,ze)])}}}),Ke=y(Xe,[["__scopeId","data-v-7e05ebdb"]]),$e={key:0,class:"VPDocFooter"},Ze={key:0,class:"edit-info"},Je={key:0,class:"edit-link"},qe={key:1,class:"last-updated"},Qe={key:1,class:"prev-next"},nt={class:"pager"},et=["innerHTML"],tt=["innerHTML"],rt={class:"pager"},ot=["innerHTML"],at=["innerHTML"],it=M({__name:"VPDocFooter",setup(t){const{theme:n,page:e,frontmatter:r}=P(),o=Be(),i=Fe(),l=f(()=>n.value.editLink&&r.value.editLink!==!1),x=f(()=>e.value.lastUpdated&&r.value.lastUpdated!==!1),u=f(()=>l.value||x.value||i.value.prev||i.value.next);return(C,v)=>{var D,T,S,O;return u.value?(a(),d("footer",$e,[c(C.$slots,"doc-footer-before",{},void 0,!0),l.value||x.value?(a(),d("div",Ze,[l.value?(a(),d("div",Je,[g(L,{class:"edit-link-button",href:s(o).url,"no-icon":!0},{default:p(()=>[v[0]||(v[0]=m("span",{class:"vpi-square-pen edit-link-icon"},null,-1)),N(" "+A(s(o).text),1)]),_:1},8,["href"])])):b("",!0),x.value?(a(),d("div",qe,[g(Ke)])):b("",!0)])):b("",!0),(D=s(i).prev)!=null&&D.link||(T=s(i).next)!=null&&T.link?(a(),d("nav",Qe,[m("div",nt,[(S=s(i).prev)!=null&&S.link?(a(),h(L,{key:0,class:"pager-link prev",href:s(i).prev.link},{default:p(()=>{var V;return[m("span",{class:"desc",innerHTML:((V=s(n).docFooter)==null?void 0:V.prev)||"Previous page"},null,8,et),m("span",{class:"title",innerHTML:s(i).prev.text},null,8,tt)]}),_:1},8,["href"])):b("",!0)]),m("div",rt,[(O=s(i).next)!=null&&O.link?(a(),h(L,{key:0,class:"pager-link next",href:s(i).next.link},{default:p(()=>{var V;return[m("span",{class:"desc",innerHTML:((V=s(n).docFooter)==null?void 0:V.next)||"Next page"},null,8,ot),m("span",{class:"title",innerHTML:s(i).next.text},null,8,at)]}),_:1},8,["href"])):b("",!0)])])):b("",!0)])):b("",!0)}}}),st=y(it,[["__scopeId","data-v-09de1c0f"]]),lt={class:"container"},ct={class:"aside-container"},dt={class:"aside-content"},mt={class:"content"},pt={class:"content-container"},ut={class:"main"},xt=M({__name:"VPDoc",setup(t){const{theme:n}=P(),e=en(),{hasSidebar:r,hasAside:o,leftAside:i}=U(),l=f(()=>e.path.replace(/[./]+/g,"_").replace(/_html$/,""));return(x,u)=>{const C=W("Content");return a(),d("div",{class:G(["VPDoc",{"has-sidebar":s(r),"has-aside":s(o)}])},[c(x.$slots,"doc-top",{},void 0,!0),m("div",lt,[s(o)?(a(),d("div",{key:0,class:G(["aside",{"left-aside":s(i)}])},[u[0]||(u[0]=m("div",{class:"aside-curtain"},null,-1)),m("div",ct,[m("div",dt,[g(He,null,{"aside-top":p(()=>[c(x.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[c(x.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[c(x.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(x.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(x.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(x.$slots,"aside-ads-after",{},void 0,!0)]),_:3})])])],2)):b("",!0),m("div",mt,[m("div",pt,[c(x.$slots,"doc-before",{},void 0,!0),m("main",ut,[g(C,{class:G(["vp-doc",[l.value,s(n).externalLinkIcon&&"external-link-icon-enabled"]])},null,8,["class"])]),g(st,null,{"doc-footer-before":p(()=>[c(x.$slots,"doc-footer-before",{},void 0,!0)]),_:3}),c(x.$slots,"doc-after",{},void 0,!0)])])]),c(x.$slots,"doc-bottom",{},void 0,!0)],2)}}}),bt=y(xt,[["__scopeId","data-v-39a288b8"]]),Mt=M({__name:"VPButton",props:{tag:{},size:{default:"medium"},theme:{default:"brand"},text:{},href:{},target:{},rel:{}},setup(t){const n=t,e=f(()=>n.href&&_n.test(n.href)),r=f(()=>n.tag||n.href?"a":"button");return(o,i)=>(a(),h(z(r.value),{class:G(["VPButton",[o.size,o.theme]]),href:o.href?s(Dn)(o.href):void 0,target:n.target??(e.value?"_blank":void 0),rel:n.rel??(e.value?"noreferrer":void 0)},{default:p(()=>[N(A(o.text),1)]),_:1},8,["class","href","target","rel"]))}}),gt=y(Mt,[["__scopeId","data-v-cad61b99"]]),yt=["src","alt"],Dt=M({inheritAttrs:!1,__name:"VPImage",props:{image:{},alt:{}},setup(t){return(n,e)=>{const r=W("VPImage",!0);return n.image?(a(),d(w,{key:0},[typeof n.image=="string"||"src"in n.image?(a(),d("img",Z({key:0,class:"VPImage"},typeof n.image=="string"?n.$attrs:{...n.image,...n.$attrs},{src:s(gn)(typeof n.image=="string"?n.image:n.image.src),alt:n.alt??(typeof n.image=="string"?"":n.image.alt||"")}),null,16,yt)):(a(),d(w,{key:1},[g(r,Z({class:"dark",image:n.image.dark,alt:n.image.alt},n.$attrs),null,16,["image","alt"]),g(r,Z({class:"light",image:n.image.light,alt:n.image.alt},n.$attrs),null,16,["image","alt"])],64))],64)):b("",!0)}}}),q=y(Dt,[["__scopeId","data-v-8426fc1a"]]),Ct={class:"container"},ht={class:"main"},ft={key:0,class:"name"},vt=["innerHTML"],Pt=["innerHTML"],Tt=["innerHTML"],Et={key:0,class:"actions"},At={key:0,class:"image"},St={class:"image-container"},Rt=M({__name:"VPHero",props:{name:{},text:{},tagline:{},image:{},actions:{}},setup(t){const n=tn("hero-image-slot-exists");return(e,r)=>(a(),d("div",{class:G(["VPHero",{"has-image":e.image||s(n)}])},[m("div",Ct,[m("div",ht,[c(e.$slots,"home-hero-info-before",{},void 0,!0),c(e.$slots,"home-hero-info",{},()=>[e.name?(a(),d("h1",ft,[m("span",{innerHTML:e.name,class:"clip"},null,8,vt)])):b("",!0),e.text?(a(),d("p",{key:1,innerHTML:e.text,class:"text"},null,8,Pt)):b("",!0),e.tagline?(a(),d("p",{key:2,innerHTML:e.tagline,class:"tagline"},null,8,Tt)):b("",!0)],!0),c(e.$slots,"home-hero-info-after",{},void 0,!0),e.actions?(a(),d("div",Et,[(a(!0),d(w,null,_(e.actions,o=>(a(),d("div",{key:o.link,class:"action"},[g(gt,{tag:"a",size:"medium",theme:o.theme,text:o.text,href:o.link,target:o.target,rel:o.rel},null,8,["theme","text","href","target","rel"])]))),128))])):b("",!0),c(e.$slots,"home-hero-actions-after",{},void 0,!0)]),e.image||s(n)?(a(),d("div",At,[m("div",St,[r[0]||(r[0]=m("div",{class:"image-bg"},null,-1)),c(e.$slots,"home-hero-image",{},()=>[e.image?(a(),h(q,{key:0,class:"image-src",image:e.image},null,8,["image"])):b("",!0)],!0)])])):b("",!0)])],2))}}),Gt=y(Rt,[["__scopeId","data-v-303bb580"]]),wt=M({__name:"VPHomeHero",setup(t){const{frontmatter:n}=P();return(e,r)=>s(n).hero?(a(),h(Gt,{key:0,class:"VPHomeHero",name:s(n).hero.name,text:s(n).hero.text,tagline:s(n).hero.tagline,image:s(n).hero.image,actions:s(n).hero.actions},{"home-hero-info-before":p(()=>[c(e.$slots,"home-hero-info-before")]),"home-hero-info":p(()=>[c(e.$slots,"home-hero-info")]),"home-hero-info-after":p(()=>[c(e.$slots,"home-hero-info-after")]),"home-hero-actions-after":p(()=>[c(e.$slots,"home-hero-actions-after")]),"home-hero-image":p(()=>[c(e.$slots,"home-hero-image")]),_:3},8,["name","text","tagline","image","actions"])):b("",!0)}}),Ot={class:"box"},Vt={key:0,class:"icon"},_t=["innerHTML"],It=["innerHTML"],Nt=["innerHTML"],Lt={key:4,class:"link-text"},Ut={class:"link-text-value"},kt=M({__name:"VPFeature",props:{icon:{},title:{},details:{},link:{},linkText:{},rel:{},target:{}},setup(t){return(n,e)=>(a(),h(L,{class:"VPFeature",href:n.link,rel:n.rel,target:n.target,"no-icon":!0,tag:n.link?"a":"div"},{default:p(()=>[m("article",Ot,[typeof n.icon=="object"&&n.icon.wrap?(a(),d("div",Vt,[g(q,{image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])])):typeof n.icon=="object"?(a(),h(q,{key:1,image:n.icon,alt:n.icon.alt,height:n.icon.height||48,width:n.icon.width||48},null,8,["image","alt","height","width"])):n.icon?(a(),d("div",{key:2,class:"icon",innerHTML:n.icon},null,8,_t)):b("",!0),m("h2",{class:"title",innerHTML:n.title},null,8,It),n.details?(a(),d("p",{key:3,class:"details",innerHTML:n.details},null,8,Nt)):b("",!0),n.linkText?(a(),d("div",Lt,[m("p",Ut,[N(A(n.linkText)+" ",1),e[0]||(e[0]=m("span",{class:"vpi-arrow-right link-text-icon"},null,-1))])])):b("",!0)])]),_:1},8,["href","rel","target","tag"]))}}),jt=y(kt,[["__scopeId","data-v-a3976bdc"]]),Ht={key:0,class:"VPFeatures"},Bt={class:"container"},Ft={class:"items"},Wt=M({__name:"VPFeatures",props:{features:{}},setup(t){const n=t,e=f(()=>{const r=n.features.length;if(r){if(r===2)return"grid-2";if(r===3)return"grid-3";if(r%3===0)return"grid-6";if(r>3)return"grid-4"}else return});return(r,o)=>r.features?(a(),d("div",Ht,[m("div",Bt,[m("div",Ft,[(a(!0),d(w,null,_(r.features,i=>(a(),d("div",{key:i.title,class:G(["item",[e.value]])},[g(jt,{icon:i.icon,title:i.title,details:i.details,link:i.link,"link-text":i.linkText,rel:i.rel,target:i.target},null,8,["icon","title","details","link","link-text","rel","target"])],2))),128))])])])):b("",!0)}}),Yt=y(Wt,[["__scopeId","data-v-a6181336"]]),zt=M({__name:"VPHomeFeatures",setup(t){const{frontmatter:n}=P();return(e,r)=>s(n).features?(a(),h(Yt,{key:0,class:"VPHomeFeatures",features:s(n).features},null,8,["features"])):b("",!0)}}),Xt=M({__name:"VPHomeContent",setup(t){const{width:n}=Qn({includeScrollbar:!1});return(e,r)=>(a(),d("div",{class:"vp-doc container",style:In(s(n)?{"--vp-offset":`calc(50% - ${s(n)/2}px)`}:{})},[c(e.$slots,"default",{},void 0,!0)],4))}}),Kt=y(Xt,[["__scopeId","data-v-82d4af08"]]),$t={class:"VPHome"},Zt=M({__name:"VPHome",setup(t){const{frontmatter:n}=P();return(e,r)=>{const o=W("Content");return a(),d("div",$t,[c(e.$slots,"home-hero-before",{},void 0,!0),g(wt,null,{"home-hero-info-before":p(()=>[c(e.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(e.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(e.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(e.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(e.$slots,"home-hero-image",{},void 0,!0)]),_:3}),c(e.$slots,"home-hero-after",{},void 0,!0),c(e.$slots,"home-features-before",{},void 0,!0),g(zt),c(e.$slots,"home-features-after",{},void 0,!0),s(n).markdownStyles!==!1?(a(),h(Kt,{key:0},{default:p(()=>[g(o)]),_:1})):(a(),h(o,{key:1}))])}}}),Jt=y(Zt,[["__scopeId","data-v-686f80a6"]]),qt={},Qt={class:"VPPage"};function nr(t,n){const e=W("Content");return a(),d("div",Qt,[c(t.$slots,"page-top"),g(e),c(t.$slots,"page-bottom")])}const er=y(qt,[["render",nr]]),tr=M({__name:"VPContent",setup(t){const{page:n,frontmatter:e}=P(),{hasSidebar:r}=U();return(o,i)=>(a(),d("div",{class:G(["VPContent",{"has-sidebar":s(r),"is-home":s(e).layout==="home"}]),id:"VPContent"},[s(n).isNotFound?c(o.$slots,"not-found",{key:0},()=>[g(Ce)],!0):s(e).layout==="page"?(a(),h(er,{key:1},{"page-top":p(()=>[c(o.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[c(o.$slots,"page-bottom",{},void 0,!0)]),_:3})):s(e).layout==="home"?(a(),h(Jt,{key:2},{"home-hero-before":p(()=>[c(o.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[c(o.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(o.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(o.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(o.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(o.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[c(o.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[c(o.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[c(o.$slots,"home-features-after",{},void 0,!0)]),_:3})):s(e).layout&&s(e).layout!=="doc"?(a(),h(z(s(e).layout),{key:3})):(a(),h(bt,{key:4},{"doc-top":p(()=>[c(o.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[c(o.$slots,"doc-bottom",{},void 0,!0)]),"doc-footer-before":p(()=>[c(o.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[c(o.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[c(o.$slots,"doc-after",{},void 0,!0)]),"aside-top":p(()=>[c(o.$slots,"aside-top",{},void 0,!0)]),"aside-outline-before":p(()=>[c(o.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(o.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(o.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(o.$slots,"aside-ads-after",{},void 0,!0)]),"aside-bottom":p(()=>[c(o.$slots,"aside-bottom",{},void 0,!0)]),_:3}))],2))}}),rr=y(tr,[["__scopeId","data-v-1428d186"]]),or={class:"container"},ar=["innerHTML"],ir=["innerHTML"],sr=M({__name:"VPFooter",setup(t){const{theme:n,frontmatter:e}=P(),{hasSidebar:r}=U();return(o,i)=>s(n).footer&&s(e).footer!==!1?(a(),d("footer",{key:0,class:G(["VPFooter",{"has-sidebar":s(r)}])},[m("div",or,[s(n).footer.message?(a(),d("p",{key:0,class:"message",innerHTML:s(n).footer.message},null,8,ar)):b("",!0),s(n).footer.copyright?(a(),d("p",{key:1,class:"copyright",innerHTML:s(n).footer.copyright},null,8,ir)):b("",!0)])],2)):b("",!0)}}),lr=y(sr,[["__scopeId","data-v-e315a0ad"]]);function cr(){const{theme:t,frontmatter:n}=P(),e=Vn([]),r=f(()=>e.value.length>0);return nn(()=>{e.value=hn(n.value.outline??t.value.outline)}),{headers:e,hasLocalNav:r}}const dr={class:"header"},mr={class:"outline"},pr=M({__name:"VPLocalNavOutlineDropdown",props:{headers:{},navHeight:{}},setup(t){const n=t,{theme:e}=P(),r=R(!1),o=R(0),i=R(),l=R();ne(i,()=>{r.value=!1}),mn("Escape",()=>{r.value=!1}),nn(()=>{r.value=!1});function x(){r.value=!r.value,o.value=window.innerHeight+Math.min(window.scrollY-n.navHeight,0)}function u(v){v.target.classList.contains("outline-link")&&(l.value&&(l.value.style.transition="none"),ee(()=>{r.value=!1}))}function C(){r.value=!1,window.scrollTo({top:0,left:0,behavior:"smooth"})}return(v,D)=>(a(),d("div",{class:"VPLocalNavOutlineDropdown",style:In({"--vp-vh":o.value+"px"}),ref_key:"main",ref:i},[v.headers.length>0?(a(),d("button",{key:0,onClick:x,class:G({open:r.value})},[N(A(s(Hn)(s(e)))+" ",1),D[0]||(D[0]=m("span",{class:"vpi-chevron-right icon"},null,-1))],2)):(a(),d("button",{key:1,onClick:C},A(s(e).returnToTopLabel||"Return to top"),1)),g(Mn,{name:"flyout"},{default:p(()=>[r.value?(a(),d("div",{key:0,ref_key:"items",ref:l,class:"items",onClick:u},[m("div",dr,[m("a",{class:"top-link",href:"#",onClick:C},A(s(e).returnToTopLabel||"Return to top"),1)]),m("div",mr,[g(Bn,{headers:v.headers},null,8,["headers"])])],512)):b("",!0)]),_:1})],4))}}),ur=y(pr,[["__scopeId","data-v-d2ecc192"]]),xr={class:"container"},br=["aria-expanded"],Mr={class:"menu-text"},gr=M({__name:"VPLocalNav",props:{open:{type:Boolean}},emits:["open-menu"],setup(t){const{theme:n,frontmatter:e}=P(),{hasSidebar:r}=U(),{headers:o}=cr(),{y:i}=Nn(),l=R(0);B(()=>{l.value=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--vp-nav-height"))}),nn(()=>{o.value=hn(e.value.outline??n.value.outline)});const x=f(()=>o.value.length===0),u=f(()=>x.value&&!r.value),C=f(()=>({VPLocalNav:!0,"has-sidebar":r.value,empty:x.value,fixed:u.value}));return(v,D)=>s(e).layout!=="home"&&(!u.value||s(i)>=l.value)?(a(),d("div",{key:0,class:G(C.value)},[m("div",xr,[s(r)?(a(),d("button",{key:0,class:"menu","aria-expanded":v.open,"aria-controls":"VPSidebarNav",onClick:D[0]||(D[0]=T=>v.$emit("open-menu"))},[D[1]||(D[1]=m("span",{class:"vpi-align-left menu-icon"},null,-1)),m("span",Mr,A(s(n).sidebarMenuLabel||"Menu"),1)],8,br)):b("",!0),g(ur,{headers:s(o),navHeight:l.value},null,8,["headers","navHeight"])])],2)):b("",!0)}}),yr=y(gr,[["__scopeId","data-v-a6f0e41e"]]);function Dr(){const t=R(!1);function n(){t.value=!0,window.addEventListener("resize",o)}function e(){t.value=!1,window.removeEventListener("resize",o)}function r(){t.value?e():n()}function o(){window.outerWidth>=768&&e()}const i=en();return F(()=>i.path,e),{isScreenOpen:t,openScreen:n,closeScreen:e,toggleScreen:r}}const Cr={},hr={class:"VPSwitch",type:"button",role:"switch"},fr={class:"check"},vr={key:0,class:"icon"};function Pr(t,n){return a(),d("button",hr,[m("span",fr,[t.$slots.default?(a(),d("span",vr,[c(t.$slots,"default",{},void 0,!0)])):b("",!0)])])}const Tr=y(Cr,[["render",Pr],["__scopeId","data-v-1d5665e3"]]),Er=M({__name:"VPSwitchAppearance",setup(t){const{isDark:n,theme:e}=P(),r=tn("toggle-appearance",()=>{n.value=!n.value}),o=f(()=>n.value?e.value.lightModeSwitchTitle||"Switch to light theme":e.value.darkModeSwitchTitle||"Switch to dark theme");return(i,l)=>(a(),h(Tr,{title:o.value,class:"VPSwitchAppearance","aria-checked":s(n),onClick:s(r)},{default:p(()=>[...l[0]||(l[0]=[m("span",{class:"vpi-sun sun"},null,-1),m("span",{class:"vpi-moon moon"},null,-1)])]),_:1},8,["title","aria-checked","onClick"]))}}),fn=y(Er,[["__scopeId","data-v-d1f28634"]]),Ar={key:0,class:"VPNavBarAppearance"},Sr=M({__name:"VPNavBarAppearance",setup(t){const{site:n}=P();return(e,r)=>s(n).appearance&&s(n).appearance!=="force-dark"?(a(),d("div",Ar,[g(fn)])):b("",!0)}}),Rr=y(Sr,[["__scopeId","data-v-e6aabb21"]]),vn=R();let Fn=!1,sn=0;function Gr(t){const n=R(!1);if(X){!Fn&&wr(),sn++;const e=F(vn,r=>{var o,i,l;r===t.el.value||(o=t.el.value)!=null&&o.contains(r)?(n.value=!0,(i=t.onFocus)==null||i.call(t)):(n.value=!1,(l=t.onBlur)==null||l.call(t))});yn(()=>{e(),sn--,sn||Or()})}return te(n)}function wr(){document.addEventListener("focusin",Wn),Fn=!0,vn.value=document.activeElement}function Or(){document.removeEventListener("focusin",Wn)}function Wn(){vn.value=document.activeElement}const Vr={class:"VPMenuLink"},_r=M({__name:"VPMenuLink",props:{item:{}},setup(t){const{page:n}=P();return(e,r)=>(a(),d("div",Vr,[g(L,{class:G({active:s(H)(s(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,target:e.item.target,rel:e.item.rel},{default:p(()=>[N(A(e.item.text),1)]),_:1},8,["class","href","target","rel"])]))}}),rn=y(_r,[["__scopeId","data-v-43f1e123"]]),Ir={class:"VPMenuGroup"},Nr={key:0,class:"title"},Lr=M({__name:"VPMenuGroup",props:{text:{},items:{}},setup(t){return(n,e)=>(a(),d("div",Ir,[n.text?(a(),d("p",Nr,A(n.text),1)):b("",!0),(a(!0),d(w,null,_(n.items,r=>(a(),d(w,null,["link"in r?(a(),h(rn,{key:0,item:r},null,8,["item"])):b("",!0)],64))),256))]))}}),Ur=y(Lr,[["__scopeId","data-v-69e747b5"]]),kr={class:"VPMenu"},jr={key:0,class:"items"},Hr=M({__name:"VPMenu",props:{items:{}},setup(t){return(n,e)=>(a(),d("div",kr,[n.items?(a(),d("div",jr,[(a(!0),d(w,null,_(n.items,r=>(a(),d(w,{key:r.text},["link"in r?(a(),h(rn,{key:0,item:r},null,8,["item"])):(a(),h(Ur,{key:1,text:r.text,items:r.items},null,8,["text","items"]))],64))),128))])):b("",!0),c(n.$slots,"default",{},void 0,!0)]))}}),Br=y(Hr,[["__scopeId","data-v-e7ea1737"]]),Fr=["aria-expanded","aria-label"],Wr={key:0,class:"text"},Yr=["innerHTML"],zr={key:1,class:"vpi-more-horizontal icon"},Xr={class:"menu"},Kr=M({__name:"VPFlyout",props:{icon:{},button:{},label:{},items:{}},setup(t){const n=R(!1),e=R();Gr({el:e,onBlur:r});function r(){n.value=!1}return(o,i)=>(a(),d("div",{class:"VPFlyout",ref_key:"el",ref:e,onMouseenter:i[1]||(i[1]=l=>n.value=!0),onMouseleave:i[2]||(i[2]=l=>n.value=!1)},[m("button",{type:"button",class:"button","aria-haspopup":"true","aria-expanded":n.value,"aria-label":o.label,onClick:i[0]||(i[0]=l=>n.value=!n.value)},[o.button||o.icon?(a(),d("span",Wr,[o.icon?(a(),d("span",{key:0,class:G([o.icon,"option-icon"])},null,2)):b("",!0),o.button?(a(),d("span",{key:1,innerHTML:o.button},null,8,Yr)):b("",!0),i[3]||(i[3]=m("span",{class:"vpi-chevron-down text-icon"},null,-1))])):(a(),d("span",zr))],8,Fr),m("div",Xr,[g(Br,{items:o.items},{default:p(()=>[c(o.$slots,"default",{},void 0,!0)]),_:3},8,["items"])])],544))}}),Pn=y(Kr,[["__scopeId","data-v-b6c34ac9"]]),$r=["href","aria-label","innerHTML"],Zr=M({__name:"VPSocialLink",props:{icon:{},link:{},ariaLabel:{}},setup(t){const n=t,e=f(()=>typeof n.icon=="object"?n.icon.svg:`<span class="vpi-social-${n.icon}" />`);return(r,o)=>(a(),d("a",{class:"VPSocialLink no-icon",href:r.link,"aria-label":r.ariaLabel??(typeof r.icon=="string"?r.icon:""),target:"_blank",rel:"noopener",innerHTML:e.value},null,8,$r))}}),Jr=y(Zr,[["__scopeId","data-v-eee4e7cb"]]),qr={class:"VPSocialLinks"},Qr=M({__name:"VPSocialLinks",props:{links:{}},setup(t){return(n,e)=>(a(),d("div",qr,[(a(!0),d(w,null,_(n.links,({link:r,icon:o,ariaLabel:i})=>(a(),h(Jr,{key:r,icon:o,link:r,ariaLabel:i},null,8,["icon","link","ariaLabel"]))),128))]))}}),Tn=y(Qr,[["__scopeId","data-v-7bc22406"]]),no={key:0,class:"group translations"},eo={class:"trans-title"},to={key:1,class:"group"},ro={class:"item appearance"},oo={class:"label"},ao={class:"appearance-action"},io={key:2,class:"group"},so={class:"item social-links"},lo=M({__name:"VPNavBarExtra",setup(t){const{site:n,theme:e}=P(),{localeLinks:r,currentLang:o}=$({correspondingLink:!0}),i=f(()=>r.value.length&&o.value.label||n.value.appearance||e.value.socialLinks);return(l,x)=>i.value?(a(),h(Pn,{key:0,class:"VPNavBarExtra",label:"extra navigation"},{default:p(()=>[s(r).length&&s(o).label?(a(),d("div",no,[m("p",eo,A(s(o).label),1),(a(!0),d(w,null,_(s(r),u=>(a(),h(rn,{key:u.link,item:u},null,8,["item"]))),128))])):b("",!0),s(n).appearance&&s(n).appearance!=="force-dark"?(a(),d("div",to,[m("div",ro,[m("p",oo,A(s(e).darkModeSwitchLabel||"Appearance"),1),m("div",ao,[g(fn)])])])):b("",!0),s(e).socialLinks?(a(),d("div",io,[m("div",so,[g(Tn,{class:"social-links-list",links:s(e).socialLinks},null,8,["links"])])])):b("",!0)]),_:1})):b("",!0)}}),co=y(lo,[["__scopeId","data-v-d0bd9dde"]]),mo=["aria-expanded"],po=M({__name:"VPNavBarHamburger",props:{active:{type:Boolean}},emits:["click"],setup(t){return(n,e)=>(a(),d("button",{type:"button",class:G(["VPNavBarHamburger",{active:n.active}]),"aria-label":"mobile navigation","aria-expanded":n.active,"aria-controls":"VPNavScreen",onClick:e[0]||(e[0]=r=>n.$emit("click"))},[...e[1]||(e[1]=[m("span",{class:"container"},[m("span",{class:"top"}),m("span",{class:"middle"}),m("span",{class:"bottom"})],-1)])],10,mo))}}),uo=y(po,[["__scopeId","data-v-e5dd9c1c"]]),xo=["innerHTML"],bo=M({__name:"VPNavBarMenuLink",props:{item:{}},setup(t){const{page:n}=P();return(e,r)=>(a(),h(L,{class:G({VPNavBarMenuLink:!0,active:s(H)(s(n).relativePath,e.item.activeMatch||e.item.link,!!e.item.activeMatch)}),href:e.item.link,noIcon:e.item.noIcon,target:e.item.target,rel:e.item.rel,tabindex:"0"},{default:p(()=>[m("span",{innerHTML:e.item.text},null,8,xo)]),_:1},8,["class","href","noIcon","target","rel"]))}}),Mo=y(bo,[["__scopeId","data-v-9c663999"]]),go=M({__name:"VPNavBarMenuGroup",props:{item:{}},setup(t){const n=t,{page:e}=P(),r=i=>"link"in i?H(e.value.relativePath,i.link,!!n.item.activeMatch):i.items.some(r),o=f(()=>r(n.item));return(i,l)=>(a(),h(Pn,{class:G({VPNavBarMenuGroup:!0,active:s(H)(s(e).relativePath,i.item.activeMatch,!!i.item.activeMatch)||o.value}),button:i.item.text,items:i.item.items},null,8,["class","button","items"]))}}),yo={key:0,"aria-labelledby":"main-nav-aria-label",class:"VPNavBarMenu"},Do=M({__name:"VPNavBarMenu",setup(t){const{theme:n}=P();return(e,r)=>s(n).nav?(a(),d("nav",yo,[r[0]||(r[0]=m("span",{id:"main-nav-aria-label",class:"visually-hidden"},"Main Navigation",-1)),(a(!0),d(w,null,_(s(n).nav,o=>(a(),d(w,{key:o.text},["link"in o?(a(),h(Mo,{key:0,item:o},null,8,["item"])):(a(),h(go,{key:1,item:o},null,8,["item"]))],64))),128))])):b("",!0)}}),Co=y(Do,[["__scopeId","data-v-7f418b0f"]]);function ho(t){const{localeIndex:n,theme:e}=P();function r(o){var O,V,E;const i=o.split("."),l=(O=e.value.search)==null?void 0:O.options,x=l&&typeof l=="object",u=x&&((E=(V=l.locales)==null?void 0:V[n.value])==null?void 0:E.translations)||null,C=x&&l.translations||null;let v=u,D=C,T=t;const S=i.pop();for(const I of i){let k=null;const Y=T==null?void 0:T[I];Y&&(k=T=Y);const on=D==null?void 0:D[I];on&&(k=D=on);const an=v==null?void 0:v[I];an&&(k=v=an),Y||(T=k),on||(D=k),an||(v=k)}return(v==null?void 0:v[S])??(D==null?void 0:D[S])??(T==null?void 0:T[S])??""}return r}const fo=["aria-label"],vo={class:"DocSearch-Button-Container"},Po={class:"DocSearch-Button-Placeholder"},Sn=M({__name:"VPNavBarSearchButton",setup(t){const e=ho({button:{buttonText:"Search",buttonAriaLabel:"Search"}});return(r,o)=>(a(),d("button",{type:"button",class:"DocSearch DocSearch-Button","aria-label":s(e)("button.buttonAriaLabel")},[m("span",vo,[o[0]||(o[0]=m("span",{class:"vp-icon DocSearch-Search-Icon"},null,-1)),m("span",Po,A(s(e)("button.buttonText")),1)]),o[1]||(o[1]=m("span",{class:"DocSearch-Button-Keys"},[m("kbd",{class:"DocSearch-Button-Key"}),m("kbd",{class:"DocSearch-Button-Key"},"K")],-1))],8,fo))}}),To={class:"VPNavBarSearch"},Eo={id:"local-search"},Ao={key:1,id:"docsearch"},So=M({__name:"VPNavBarSearch",setup(t){const n=Ln(()=>j(()=>import("./VPLocalSearchBox.BRZJ3f5Z.js"),[])),e=()=>null,{theme:r}=P(),o=R(!1),i=R(!1);B(()=>{});function l(){o.value||(o.value=!0,setTimeout(x,16))}function x(){const D=new Event("keydown");D.key="k",D.metaKey=!0,window.dispatchEvent(D),setTimeout(()=>{document.querySelector(".DocSearch-Modal")||x()},16)}function u(D){const T=D.target,S=T.tagName;return T.isContentEditable||S==="INPUT"||S==="SELECT"||S==="TEXTAREA"}const C=R(!1);mn("k",D=>{(D.ctrlKey||D.metaKey)&&(D.preventDefault(),C.value=!0)}),mn("/",D=>{u(D)||(D.preventDefault(),C.value=!0)});const v="local";return(D,T)=>{var S;return a(),d("div",To,[s(v)==="local"?(a(),d(w,{key:0},[C.value?(a(),h(s(n),{key:0,onClose:T[0]||(T[0]=O=>C.value=!1)})):b("",!0),m("div",Eo,[g(Sn,{onClick:T[1]||(T[1]=O=>C.value=!0)})])],64)):s(v)==="algolia"?(a(),d(w,{key:1},[o.value?(a(),h(s(e),{key:0,algolia:((S=s(r).search)==null?void 0:S.options)??s(r).algolia,onVnodeBeforeMount:T[2]||(T[2]=O=>i.value=!0)},null,8,["algolia"])):b("",!0),i.value?b("",!0):(a(),d("div",Ao,[g(Sn,{onClick:l})]))],64)):b("",!0)])}}}),Ro=M({__name:"VPNavBarSocialLinks",setup(t){const{theme:n}=P();return(e,r)=>s(n).socialLinks?(a(),h(Tn,{key:0,class:"VPNavBarSocialLinks",links:s(n).socialLinks},null,8,["links"])):b("",!0)}}),Go=y(Ro,[["__scopeId","data-v-0394ad82"]]),wo=["href","rel","target"],Oo={key:1},Vo={key:2},_o=M({__name:"VPNavBarTitle",setup(t){const{site:n,theme:e}=P(),{hasSidebar:r}=U(),{currentLang:o}=$(),i=f(()=>{var u;return typeof e.value.logoLink=="string"?e.value.logoLink:(u=e.value.logoLink)==null?void 0:u.link}),l=f(()=>{var u;return typeof e.value.logoLink=="string"||(u=e.value.logoLink)==null?void 0:u.rel}),x=f(()=>{var u;return typeof e.value.logoLink=="string"||(u=e.value.logoLink)==null?void 0:u.target});return(u,C)=>(a(),d("div",{class:G(["VPNavBarTitle",{"has-sidebar":s(r)}])},[m("a",{class:"title",href:i.value??s(Dn)(s(o).link),rel:l.value,target:x.value},[c(u.$slots,"nav-bar-title-before",{},void 0,!0),s(e).logo?(a(),h(q,{key:0,class:"logo",image:s(e).logo},null,8,["image"])):b("",!0),s(e).siteTitle?(a(),d("span",Oo,A(s(e).siteTitle),1)):s(e).siteTitle===void 0?(a(),d("span",Vo,A(s(n).title),1)):b("",!0),c(u.$slots,"nav-bar-title-after",{},void 0,!0)],8,wo)],2))}}),Io=y(_o,[["__scopeId","data-v-ab179fa1"]]),No={class:"items"},Lo={class:"title"},Uo=M({__name:"VPNavBarTranslations",setup(t){const{theme:n}=P(),{localeLinks:e,currentLang:r}=$({correspondingLink:!0});return(o,i)=>s(e).length&&s(r).label?(a(),h(Pn,{key:0,class:"VPNavBarTranslations",icon:"vpi-languages",label:s(n).langMenuLabel||"Change language"},{default:p(()=>[m("div",No,[m("p",Lo,A(s(r).label),1),(a(!0),d(w,null,_(s(e),l=>(a(),h(rn,{key:l.link,item:l},null,8,["item"]))),128))])]),_:1},8,["label"])):b("",!0)}}),ko=y(Uo,[["__scopeId","data-v-88af2de4"]]),jo={class:"wrapper"},Ho={class:"container"},Bo={class:"title"},Fo={class:"content"},Wo={class:"content-body"},Yo=M({__name:"VPNavBar",props:{isScreenOpen:{type:Boolean}},emits:["toggle-screen"],setup(t){const{y:n}=Nn(),{hasSidebar:e}=U(),{frontmatter:r}=P(),o=R({});return On(()=>{o.value={"has-sidebar":e.value,home:r.value.layout==="home",top:n.value===0}}),(i,l)=>(a(),d("div",{class:G(["VPNavBar",o.value])},[m("div",jo,[m("div",Ho,[m("div",Bo,[g(Io,null,{"nav-bar-title-before":p(()=>[c(i.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(i.$slots,"nav-bar-title-after",{},void 0,!0)]),_:3})]),m("div",Fo,[m("div",Wo,[c(i.$slots,"nav-bar-content-before",{},void 0,!0),g(So,{class:"search"}),g(Co,{class:"menu"}),g(ko,{class:"translations"}),g(Rr,{class:"appearance"}),g(Go,{class:"social-links"}),g(co,{class:"extra"}),c(i.$slots,"nav-bar-content-after",{},void 0,!0),g(uo,{class:"hamburger",active:i.isScreenOpen,onClick:l[0]||(l[0]=x=>i.$emit("toggle-screen"))},null,8,["active"])])])])]),l[1]||(l[1]=m("div",{class:"divider"},[m("div",{class:"divider-line"})],-1))],2))}}),zo=y(Yo,[["__scopeId","data-v-ccf7ddec"]]),Xo={key:0,class:"VPNavScreenAppearance"},Ko={class:"text"},$o=M({__name:"VPNavScreenAppearance",setup(t){const{site:n,theme:e}=P();return(r,o)=>s(n).appearance&&s(n).appearance!=="force-dark"?(a(),d("div",Xo,[m("p",Ko,A(s(e).darkModeSwitchLabel||"Appearance"),1),g(fn)])):b("",!0)}}),Zo=y($o,[["__scopeId","data-v-2d7af913"]]),Jo=M({__name:"VPNavScreenMenuLink",props:{item:{}},setup(t){const n=tn("close-screen");return(e,r)=>(a(),h(L,{class:"VPNavScreenMenuLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:s(n)},{default:p(()=>[N(A(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),qo=y(Jo,[["__scopeId","data-v-05f27b2a"]]),Qo=M({__name:"VPNavScreenMenuGroupLink",props:{item:{}},setup(t){const n=tn("close-screen");return(e,r)=>(a(),h(L,{class:"VPNavScreenMenuGroupLink",href:e.item.link,target:e.item.target,rel:e.item.rel,onClick:s(n)},{default:p(()=>[N(A(e.item.text),1)]),_:1},8,["href","target","rel","onClick"]))}}),Yn=y(Qo,[["__scopeId","data-v-19976ae1"]]),na={class:"VPNavScreenMenuGroupSection"},ea={key:0,class:"title"},ta=M({__name:"VPNavScreenMenuGroupSection",props:{text:{},items:{}},setup(t){return(n,e)=>(a(),d("div",na,[n.text?(a(),d("p",ea,A(n.text),1)):b("",!0),(a(!0),d(w,null,_(n.items,r=>(a(),h(Yn,{key:r.text,item:r},null,8,["item"]))),128))]))}}),ra=y(ta,[["__scopeId","data-v-8133b170"]]),oa=["aria-controls","aria-expanded"],aa=["innerHTML"],ia=["id"],sa={key:1,class:"group"},la=M({__name:"VPNavScreenMenuGroup",props:{text:{},items:{}},setup(t){const n=t,e=R(!1),r=f(()=>`NavScreenGroup-${n.text.replace(" ","-").toLowerCase()}`);function o(){e.value=!e.value}return(i,l)=>(a(),d("div",{class:G(["VPNavScreenMenuGroup",{open:e.value}])},[m("button",{class:"button","aria-controls":r.value,"aria-expanded":e.value,onClick:o},[m("span",{class:"button-text",innerHTML:i.text},null,8,aa),l[0]||(l[0]=m("span",{class:"vpi-plus button-icon"},null,-1))],8,oa),m("div",{id:r.value,class:"items"},[(a(!0),d(w,null,_(i.items,x=>(a(),d(w,{key:x.text},["link"in x?(a(),d("div",{key:x.text,class:"item"},[g(Yn,{item:x},null,8,["item"])])):(a(),d("div",sa,[g(ra,{text:x.text,items:x.items},null,8,["text","items"])]))],64))),128))],8,ia)],2))}}),ca=y(la,[["__scopeId","data-v-ff6087d4"]]),da={key:0,class:"VPNavScreenMenu"},ma=M({__name:"VPNavScreenMenu",setup(t){const{theme:n}=P();return(e,r)=>s(n).nav?(a(),d("nav",da,[(a(!0),d(w,null,_(s(n).nav,o=>(a(),d(w,{key:o.text},["link"in o?(a(),h(qo,{key:0,item:o},null,8,["item"])):(a(),h(ca,{key:1,text:o.text||"",items:o.items},null,8,["text","items"]))],64))),128))])):b("",!0)}}),pa=M({__name:"VPNavScreenSocialLinks",setup(t){const{theme:n}=P();return(e,r)=>s(n).socialLinks?(a(),h(Tn,{key:0,class:"VPNavScreenSocialLinks",links:s(n).socialLinks},null,8,["links"])):b("",!0)}}),ua={class:"list"},xa=M({__name:"VPNavScreenTranslations",setup(t){const{localeLinks:n,currentLang:e}=$({correspondingLink:!0}),r=R(!1);function o(){r.value=!r.value}return(i,l)=>s(n).length&&s(e).label?(a(),d("div",{key:0,class:G(["VPNavScreenTranslations",{open:r.value}])},[m("button",{class:"title",onClick:o},[l[0]||(l[0]=m("span",{class:"vpi-languages icon lang"},null,-1)),N(" "+A(s(e).label)+" ",1),l[1]||(l[1]=m("span",{class:"vpi-chevron-down icon chevron"},null,-1))]),m("ul",ua,[(a(!0),d(w,null,_(s(n),x=>(a(),d("li",{key:x.link,class:"item"},[g(L,{class:"link",href:x.link},{default:p(()=>[N(A(x.text),1)]),_:2},1032,["href"])]))),128))])],2)):b("",!0)}}),ba=y(xa,[["__scopeId","data-v-858fe1a4"]]),Ma={class:"container"},ga=M({__name:"VPNavScreen",props:{open:{type:Boolean}},setup(t){const n=R(null),e=Un(X?document.body:null);return(r,o)=>(a(),h(Mn,{name:"fade",onEnter:o[0]||(o[0]=i=>e.value=!0),onAfterLeave:o[1]||(o[1]=i=>e.value=!1)},{default:p(()=>[r.open?(a(),d("div",{key:0,class:"VPNavScreen",ref_key:"screen",ref:n,id:"VPNavScreen"},[m("div",Ma,[c(r.$slots,"nav-screen-content-before",{},void 0,!0),g(ma,{class:"menu"}),g(ba,{class:"translations"}),g(Zo,{class:"appearance"}),g(pa,{class:"social-links"}),c(r.$slots,"nav-screen-content-after",{},void 0,!0)])],512)):b("",!0)]),_:3}))}}),ya=y(ga,[["__scopeId","data-v-cc5739dd"]]),Da={key:0,class:"VPNav"},Ca=M({__name:"VPNav",setup(t){const{isScreenOpen:n,closeScreen:e,toggleScreen:r}=Dr(),{frontmatter:o}=P(),i=f(()=>o.value.navbar!==!1);return kn("close-screen",e),Q(()=>{X&&document.documentElement.classList.toggle("hide-nav",!i.value)}),(l,x)=>i.value?(a(),d("header",Da,[g(zo,{"is-screen-open":s(n),onToggleScreen:s(r)},{"nav-bar-title-before":p(()=>[c(l.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(l.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[c(l.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[c(l.$slots,"nav-bar-content-after",{},void 0,!0)]),_:3},8,["is-screen-open","onToggleScreen"]),g(ya,{open:s(n)},{"nav-screen-content-before":p(()=>[c(l.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[c(l.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3},8,["open"])])):b("",!0)}}),ha=y(Ca,[["__scopeId","data-v-ae24b3ad"]]),fa=["role","tabindex"],va={key:1,class:"items"},Pa=M({__name:"VPSidebarItem",props:{item:{},depth:{}},setup(t){const n=t,{collapsed:e,collapsible:r,isLink:o,isActiveLink:i,hasActiveLink:l,hasChildren:x,toggle:u}=Pe(f(()=>n.item)),C=f(()=>x.value?"section":"div"),v=f(()=>o.value?"a":"div"),D=f(()=>x.value?n.depth+2===7?"p":`h${n.depth+2}`:"p"),T=f(()=>o.value?void 0:"button"),S=f(()=>[[`level-${n.depth}`],{collapsible:r.value},{collapsed:e.value},{"is-link":o.value},{"is-active":i.value},{"has-active":l.value}]);function O(E){"key"in E&&E.key!=="Enter"||!n.item.link&&u()}function V(){n.item.link&&u()}return(E,I)=>{const k=W("VPSidebarItem",!0);return a(),h(z(C.value),{class:G(["VPSidebarItem",S.value])},{default:p(()=>[E.item.text?(a(),d("div",Z({key:0,class:"item",role:T.value},re(E.item.items?{click:O,keydown:O}:{},!0),{tabindex:E.item.items&&0}),[I[1]||(I[1]=m("div",{class:"indicator"},null,-1)),E.item.link?(a(),h(L,{key:0,tag:v.value,class:"link",href:E.item.link,rel:E.item.rel,target:E.item.target},{default:p(()=>[(a(),h(z(D.value),{class:"text",innerHTML:E.item.text},null,8,["innerHTML"]))]),_:1},8,["tag","href","rel","target"])):(a(),h(z(D.value),{key:1,class:"text",innerHTML:E.item.text},null,8,["innerHTML"])),E.item.collapsed!=null&&E.item.items&&E.item.items.length?(a(),d("div",{key:2,class:"caret",role:"button","aria-label":"toggle section",onClick:V,onKeydown:oe(V,["enter"]),tabindex:"0"},[...I[0]||(I[0]=[m("span",{class:"vpi-chevron-right caret-icon"},null,-1)])],32)):b("",!0)],16,fa)):b("",!0),E.item.items&&E.item.items.length?(a(),d("div",va,[E.depth<5?(a(!0),d(w,{key:0},_(E.item.items,Y=>(a(),h(k,{key:Y.text,item:Y,depth:E.depth+1},null,8,["item","depth"]))),128)):b("",!0)])):b("",!0)]),_:1},8,["class"])}}}),Ta=y(Pa,[["__scopeId","data-v-b8d55f3b"]]),Ea={class:"nav",id:"VPSidebarNav","aria-labelledby":"sidebar-aria-label",tabindex:"-1"},Aa=M({__name:"VPSidebar",props:{open:{type:Boolean}},setup(t){const{sidebarGroups:n,hasSidebar:e}=U(),r=t,o=R(null),i=Un(X?document.body:null);return F([r,o],()=>{var l;r.open?(i.value=!0,(l=o.value)==null||l.focus()):i.value=!1},{immediate:!0,flush:"post"}),(l,x)=>s(e)?(a(),d("aside",{key:0,class:G(["VPSidebar",{open:l.open}]),ref_key:"navEl",ref:o,onClick:x[0]||(x[0]=ae(()=>{},["stop"]))},[x[2]||(x[2]=m("div",{class:"curtain"},null,-1)),m("nav",Ea,[x[1]||(x[1]=m("span",{class:"visually-hidden",id:"sidebar-aria-label"}," Sidebar Navigation ",-1)),c(l.$slots,"sidebar-nav-before",{},void 0,!0),(a(!0),d(w,null,_(s(n),u=>(a(),d("div",{key:u.text,class:"group"},[g(Ta,{item:u,depth:0},null,8,["item"])]))),128)),c(l.$slots,"sidebar-nav-after",{},void 0,!0)])],2)):b("",!0)}}),Sa=y(Aa,[["__scopeId","data-v-575e6a36"]]),Ra=M({__name:"VPSkipLink",setup(t){const n=en(),e=R();F(()=>n.path,()=>e.value.focus());function r({target:o}){const i=document.getElementById(decodeURIComponent(o.hash).slice(1));if(i){const l=()=>{i.removeAttribute("tabindex"),i.removeEventListener("blur",l)};i.setAttribute("tabindex","-1"),i.addEventListener("blur",l),i.focus(),window.scrollTo(0,0)}}return(o,i)=>(a(),d(w,null,[m("span",{ref_key:"backToTop",ref:e,tabindex:"-1"},null,512),m("a",{href:"#VPContent",class:"VPSkipLink visually-hidden",onClick:r}," Skip to content ")],64))}}),Ga=y(Ra,[["__scopeId","data-v-0f60ec36"]]),wa=M({__name:"Layout",setup(t){const{isOpen:n,open:e,close:r}=U(),o=en();F(()=>o.path,r),ve(n,r);const{frontmatter:i}=P(),l=ie(),x=f(()=>!!l["home-hero-image"]);return kn("hero-image-slot-exists",x),(u,C)=>{const v=W("Content");return s(i).layout!==!1?(a(),d("div",{key:0,class:G(["Layout",s(i).pageClass])},[c(u.$slots,"layout-top",{},void 0,!0),g(Ga),g(de,{class:"backdrop",show:s(n),onClick:s(r)},null,8,["show","onClick"]),g(ha,null,{"nav-bar-title-before":p(()=>[c(u.$slots,"nav-bar-title-before",{},void 0,!0)]),"nav-bar-title-after":p(()=>[c(u.$slots,"nav-bar-title-after",{},void 0,!0)]),"nav-bar-content-before":p(()=>[c(u.$slots,"nav-bar-content-before",{},void 0,!0)]),"nav-bar-content-after":p(()=>[c(u.$slots,"nav-bar-content-after",{},void 0,!0)]),"nav-screen-content-before":p(()=>[c(u.$slots,"nav-screen-content-before",{},void 0,!0)]),"nav-screen-content-after":p(()=>[c(u.$slots,"nav-screen-content-after",{},void 0,!0)]),_:3}),g(yr,{open:s(n),onOpenMenu:s(e)},null,8,["open","onOpenMenu"]),g(Sa,{open:s(n)},{"sidebar-nav-before":p(()=>[c(u.$slots,"sidebar-nav-before",{},void 0,!0)]),"sidebar-nav-after":p(()=>[c(u.$slots,"sidebar-nav-after",{},void 0,!0)]),_:3},8,["open"]),g(rr,null,{"page-top":p(()=>[c(u.$slots,"page-top",{},void 0,!0)]),"page-bottom":p(()=>[c(u.$slots,"page-bottom",{},void 0,!0)]),"not-found":p(()=>[c(u.$slots,"not-found",{},void 0,!0)]),"home-hero-before":p(()=>[c(u.$slots,"home-hero-before",{},void 0,!0)]),"home-hero-info-before":p(()=>[c(u.$slots,"home-hero-info-before",{},void 0,!0)]),"home-hero-info":p(()=>[c(u.$slots,"home-hero-info",{},void 0,!0)]),"home-hero-info-after":p(()=>[c(u.$slots,"home-hero-info-after",{},void 0,!0)]),"home-hero-actions-after":p(()=>[c(u.$slots,"home-hero-actions-after",{},void 0,!0)]),"home-hero-image":p(()=>[c(u.$slots,"home-hero-image",{},void 0,!0)]),"home-hero-after":p(()=>[c(u.$slots,"home-hero-after",{},void 0,!0)]),"home-features-before":p(()=>[c(u.$slots,"home-features-before",{},void 0,!0)]),"home-features-after":p(()=>[c(u.$slots,"home-features-after",{},void 0,!0)]),"doc-footer-before":p(()=>[c(u.$slots,"doc-footer-before",{},void 0,!0)]),"doc-before":p(()=>[c(u.$slots,"doc-before",{},void 0,!0)]),"doc-after":p(()=>[c(u.$slots,"doc-after",{},void 0,!0)]),"doc-top":p(()=>[c(u.$slots,"doc-top",{},void 0,!0)]),"doc-bottom":p(()=>[c(u.$slots,"doc-bottom",{},void 0,!0)]),"aside-top":p(()=>[c(u.$slots,"aside-top",{},void 0,!0)]),"aside-bottom":p(()=>[c(u.$slots,"aside-bottom",{},void 0,!0)]),"aside-outline-before":p(()=>[c(u.$slots,"aside-outline-before",{},void 0,!0)]),"aside-outline-after":p(()=>[c(u.$slots,"aside-outline-after",{},void 0,!0)]),"aside-ads-before":p(()=>[c(u.$slots,"aside-ads-before",{},void 0,!0)]),"aside-ads-after":p(()=>[c(u.$slots,"aside-ads-after",{},void 0,!0)]),_:3}),g(lr),c(u.$slots,"layout-bottom",{},void 0,!0)],2)):(a(),h(v,{key:1}))}}}),Oa=y(wa,[["__scopeId","data-v-5d98c3a5"]]),ln={Layout:Oa,enhanceApp:({app:t})=>{t.component("Badge",se)}};let zn={},Xn={};function Va(t){zn=t}function _a(t){Xn=t}function Qa(){Ia(),Na()}function Ia(){const t=window;t._vue||(t._vue=zn)}function Na(){const t=window;t._app||(t._app=Xn)}const La=`import { camelize } from '@vue/shared';\r
import { capitalize } from '@vue/shared';\r
import { ComponentPropsOptions as ComponentPropsOptions_2 } from '@vue/runtime-core';\r
import { computed as computed_2 } from '@vue/reactivity';\r
import { ComputedGetter } from '@vue/reactivity';\r
import { ComputedRef } from '@vue/reactivity';\r
import { ComputedSetter } from '@vue/reactivity';\r
import { customRef } from '@vue/reactivity';\r
import { CustomRefFactory } from '@vue/reactivity';\r
import { DebuggerEvent } from '@vue/reactivity';\r
import { DebuggerEventExtraInfo } from '@vue/reactivity';\r
import { DebuggerOptions } from '@vue/reactivity';\r
import { DeepReadonly } from '@vue/reactivity';\r
import { effect } from '@vue/reactivity';\r
import { EffectScheduler } from '@vue/reactivity';\r
import { EffectScope } from '@vue/reactivity';\r
import { effectScope } from '@vue/reactivity';\r
import { getCurrentScope } from '@vue/reactivity';\r
import { IfAny } from '@vue/shared';\r
import { isProxy } from '@vue/reactivity';\r
import { isReactive } from '@vue/reactivity';\r
import { isReadonly } from '@vue/reactivity';\r
import { isRef } from '@vue/reactivity';\r
import { isShallow } from '@vue/reactivity';\r
import { LooseRequired } from '@vue/shared';\r
import { markRaw } from '@vue/reactivity';\r
import { normalizeClass } from '@vue/shared';\r
import { normalizeProps } from '@vue/shared';\r
import { normalizeStyle } from '@vue/shared';\r
import { onScopeDispose } from '@vue/reactivity';\r
import { proxyRefs } from '@vue/reactivity';\r
import { reactive } from '@vue/reactivity';\r
import { ReactiveEffect } from '@vue/reactivity';\r
import { ReactiveEffectOptions } from '@vue/reactivity';\r
import { ReactiveEffectRunner } from '@vue/reactivity';\r
import { ReactiveFlags } from '@vue/reactivity';\r
import { readonly } from '@vue/reactivity';\r
import { Ref } from '@vue/reactivity';\r
import { ref } from '@vue/reactivity';\r
import { ShallowReactive } from '@vue/reactivity';\r
import { shallowReactive } from '@vue/reactivity';\r
import { shallowReadonly } from '@vue/reactivity';\r
import { ShallowRef } from '@vue/reactivity';\r
import { shallowRef } from '@vue/reactivity';\r
import { ShallowUnwrapRef } from '@vue/reactivity';\r
import { ShapeFlags } from '@vue/shared';\r
import { SlotFlags } from '@vue/shared';\r
import { stop as stop_2 } from '@vue/reactivity';\r
import { toDisplayString } from '@vue/shared';\r
import { toHandlerKey } from '@vue/shared';\r
import { toRaw } from '@vue/reactivity';\r
import { ToRef } from '@vue/reactivity';\r
import { toRef } from '@vue/reactivity';\r
import { ToRefs } from '@vue/reactivity';\r
import { toRefs } from '@vue/reactivity';\r
import { TrackOpTypes } from '@vue/reactivity';\r
import { TriggerOpTypes } from '@vue/reactivity';\r
import { triggerRef } from '@vue/reactivity';\r
import { UnionToIntersection } from '@vue/shared';\r
import { unref } from '@vue/reactivity';\r
import { UnwrapNestedRefs } from '@vue/reactivity';\r
import { UnwrapRef } from '@vue/reactivity';\r
import { WritableComputedOptions } from '@vue/reactivity';\r
import { WritableComputedRef } from '@vue/reactivity';\r
\r
/**\r
 * Default allowed non-declared props on component in TSX\r
 */\r
export declare interface AllowedComponentProps {\r
    class?: unknown;\r
    style?: unknown;\r
}\r
\r
export declare interface App<HostElement = any> {\r
    version: string;\r
    config: AppConfig;\r
    use(plugin: Plugin_2, ...options: any[]): this;\r
    mixin(mixin: ComponentOptions): this;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): this;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): this;\r
    mount(rootContainer: HostElement | string, isHydrate?: boolean, isSVG?: boolean): ComponentPublicInstance;\r
    unmount(): void;\r
    provide<T>(key: InjectionKey<T> | string, value: T): this;\r
    _uid: number;\r
    _component: ConcreteComponent;\r
    _props: Data | null;\r
    _container: HostElement | null;\r
    _context: AppContext;\r
    _instance: ComponentInternalInstance | null;\r
    /**\r
     * v2 compat only\r
     */\r
    filter?(name: string): Function | undefined;\r
    filter?(name: string, filter: Function): this;\r
    /* Excluded from this release type: _createRoot */\r
}\r
\r
export declare interface AppConfig {\r
    readonly isNativeTag?: (tag: string) => boolean;\r
    performance: boolean;\r
    optionMergeStrategies: Record<string, OptionMergeFunction>;\r
    globalProperties: Record<string, any>;\r
    errorHandler?: (err: unknown, instance: ComponentPublicInstance | null, info: string) => void;\r
    warnHandler?: (msg: string, instance: ComponentPublicInstance | null, trace: string) => void;\r
    /**\r
     * Options to pass to \`@vue/compiler-dom\`.\r
     * Only supported in runtime compiler build.\r
     */\r
    compilerOptions: RuntimeCompilerOptions;\r
    /**\r
     * @deprecated use config.compilerOptions.isCustomElement\r
     */\r
    isCustomElement?: (tag: string) => boolean;\r
    /**\r
     * Temporary config for opt-in to unwrap injected refs.\r
     * TODO deprecate in 3.3\r
     */\r
    unwrapInjectedRef?: boolean;\r
}\r
\r
export declare interface AppContext {\r
    app: App;\r
    config: AppConfig;\r
    mixins: ComponentOptions[];\r
    components: Record<string, Component>;\r
    directives: Record<string, Directive>;\r
    provides: Record<string | symbol, any>;\r
    /* Excluded from this release type: optionsCache */\r
    /* Excluded from this release type: propsCache */\r
    /* Excluded from this release type: emitsCache */\r
    /* Excluded from this release type: reload */\r
    /* Excluded from this release type: filters */\r
}\r
\r
declare interface AppRecord {\r
    id: number;\r
    app: App;\r
    version: string;\r
    types: Record<string, string | Symbol>;\r
}\r
\r
export declare type AsyncComponentLoader<T = any> = () => Promise<AsyncComponentResolveResult<T>>;\r
\r
export declare interface AsyncComponentOptions<T = any> {\r
    loader: AsyncComponentLoader<T>;\r
    loadingComponent?: Component;\r
    errorComponent?: Component;\r
    delay?: number;\r
    timeout?: number;\r
    suspensible?: boolean;\r
    onError?: (error: Error, retry: () => void, fail: () => void, attempts: number) => any;\r
}\r
\r
declare type AsyncComponentResolveResult<T = Component> = T | {\r
    default: T;\r
};\r
\r
export declare const BaseTransition: new () => {\r
    $props: BaseTransitionProps<any>;\r
};\r
\r
export declare interface BaseTransitionProps<HostElement = RendererElement> {\r
    mode?: 'in-out' | 'out-in' | 'default';\r
    appear?: boolean;\r
    persisted?: boolean;\r
    onBeforeEnter?: Hook<(el: HostElement) => void>;\r
    onEnter?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterEnter?: Hook<(el: HostElement) => void>;\r
    onEnterCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeLeave?: Hook<(el: HostElement) => void>;\r
    onLeave?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterLeave?: Hook<(el: HostElement) => void>;\r
    onLeaveCancelled?: Hook<(el: HostElement) => void>;\r
    onBeforeAppear?: Hook<(el: HostElement) => void>;\r
    onAppear?: Hook<(el: HostElement, done: () => void) => void>;\r
    onAfterAppear?: Hook<(el: HostElement) => void>;\r
    onAppearCancelled?: Hook<(el: HostElement) => void>;\r
}\r
\r
declare const enum BooleanFlags {\r
    shouldCast = 0,\r
    shouldCastTrue = 1\r
}\r
\r
export declare function callWithAsyncErrorHandling(fn: Function | Function[], instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any[];\r
\r
export declare function callWithErrorHandling(fn: Function, instance: ComponentInternalInstance | null, type: ErrorTypes, args?: unknown[]): any;\r
\r
export { camelize }\r
\r
export { capitalize }\r
\r
/**\r
 * Use this for features with the same syntax but with mutually exclusive\r
 * behavior in 2 vs 3. Only warn if compat is enabled.\r
 * e.g. render function\r
 */\r
declare function checkCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
declare interface ClassComponent {\r
    new (...args: any[]): ComponentPublicInstance<any, any, any, any, any>;\r
    __vccOpts: ComponentOptions;\r
}\r
\r
export declare function cloneVNode<T, U>(vnode: VNode<T, U>, extraProps?: (Data & VNodeProps) | null, mergeRef?: boolean): VNode<T, U>;\r
\r
declare const Comment_2: unique symbol;\r
export { Comment_2 as Comment }\r
\r
declare type CompatConfig = Partial<Record<DeprecationTypes, boolean | 'suppress-warning'>> & {\r
    MODE?: 2 | 3 | ((comp: Component | null) => 2 | 3);\r
};\r
\r
/* Excluded from this release type: compatUtils */\r
\r
/**\r
 * @deprecated the default \`Vue\` export has been removed in Vue 3. The type for\r
 * the default export is provided only for migration purposes. Please use\r
 * named imports instead - e.g. \`import { createApp } from 'vue'\`.\r
 */\r
export declare type CompatVue = Pick<App, 'version' | 'component' | 'directive'> & {\r
    configureCompat: typeof configureCompat;\r
    new (options?: ComponentOptions): LegacyPublicInstance;\r
    version: string;\r
    config: AppConfig & LegacyConfig;\r
    nextTick: typeof nextTick;\r
    use(plugin: Plugin_2, ...options: any[]): CompatVue;\r
    mixin(mixin: ComponentOptions): CompatVue;\r
    component(name: string): Component | undefined;\r
    component(name: string, component: Component): CompatVue;\r
    directive(name: string): Directive | undefined;\r
    directive(name: string, directive: Directive): CompatVue;\r
    compile(template: string): RenderFunction;\r
    /**\r
     * @deprecated Vue 3 no longer supports extending constructors.\r
     */\r
    extend: (options?: ComponentOptions) => CompatVue;\r
    /**\r
     * @deprecated Vue 3 no longer needs set() for adding new properties.\r
     */\r
    set(target: any, key: string | number | symbol, value: any): void;\r
    /**\r
     * @deprecated Vue 3 no longer needs delete() for property deletions.\r
     */\r
    delete(target: any, key: string | number | symbol): void;\r
    /**\r
     * @deprecated use \`reactive\` instead.\r
     */\r
    observable: typeof reactive;\r
    /**\r
     * @deprecated filters have been removed from Vue 3.\r
     */\r
    filter(name: string, arg?: any): null;\r
    /* Excluded from this release type: cid */\r
    /* Excluded from this release type: options */\r
    /* Excluded from this release type: util */\r
    /* Excluded from this release type: super */\r
};\r
\r
declare interface CompiledSlotDescriptor {\r
    name: string;\r
    fn: Slot;\r
}\r
\r
/**\r
 * A type used in public APIs where a component type is expected.\r
 * The constructor type is an artificial type returned by defineComponent().\r
 */\r
export declare type Component<Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ConcreteComponent<Props, RawBindings, D, C, M> | ComponentPublicInstanceConstructor<Props>;\r
\r
/**\r
 * Interface for declaring custom options.\r
 *\r
 * @example\r
 * \`\`\`ts\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomOptions {\r
 *     beforeRouteUpdate?(\r
 *       to: Route,\r
 *       from: Route,\r
 *       next: () => void\r
 *     ): void\r
 *   }\r
 * }\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomOptions {\r
}\r
\r
/**\r
 * Custom properties added to component instances in any way and can be accessed through \`this\`\r
 *\r
 * @example\r
 * Here is an example of adding a property \`$router\` to every component instance:\r
 * \`\`\`ts\r
 * import { createApp } from 'vue'\r
 * import { Router, createRouter } from 'vue-router'\r
 *\r
 * declare module '@vue/runtime-core' {\r
 *   interface ComponentCustomProperties {\r
 *     $router: Router\r
 *   }\r
 * }\r
 *\r
 * // effectively adding the router to every component instance\r
 * const app = createApp({})\r
 * const router = createRouter()\r
 * app.config.globalProperties.$router = router\r
 *\r
 * const vm = app.mount('#app')\r
 * // we can access the router from the instance\r
 * vm.$router.push('/')\r
 * \`\`\`\r
 */\r
export declare interface ComponentCustomProperties {\r
}\r
\r
/**\r
 * For extending allowed non-declared props on components in TSX\r
 */\r
export declare interface ComponentCustomProps {\r
}\r
\r
declare type ComponentInjectOptions = string[] | ObjectInjectOptions;\r
\r
/**\r
 * We expose a subset of properties on the internal instance as they are\r
 * useful for advanced external libraries and tools.\r
 */\r
export declare interface ComponentInternalInstance {\r
    uid: number;\r
    type: ConcreteComponent;\r
    parent: ComponentInternalInstance | null;\r
    root: ComponentInternalInstance;\r
    appContext: AppContext;\r
    /**\r
     * Vnode representing this component in its parent's vdom tree\r
     */\r
    vnode: VNode;\r
    /* Excluded from this release type: next */\r
    /**\r
     * Root vnode of this component's own vdom tree\r
     */\r
    subTree: VNode;\r
    /**\r
     * Render effect instance\r
     */\r
    effect: ReactiveEffect;\r
    /**\r
     * Bound effect runner to be passed to schedulers\r
     */\r
    update: SchedulerJob;\r
    /* Excluded from this release type: render */\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: provides */\r
    /* Excluded from this release type: scope */\r
    /* Excluded from this release type: accessCache */\r
    /* Excluded from this release type: renderCache */\r
    /* Excluded from this release type: components */\r
    /* Excluded from this release type: directives */\r
    /* Excluded from this release type: filters */\r
    /* Excluded from this release type: propsOptions */\r
    /* Excluded from this release type: emitsOptions */\r
    /* Excluded from this release type: inheritAttrs */\r
    /**\r
     * is custom element?\r
     */\r
    isCE?: boolean;\r
    /**\r
     * custom element specific HMR method\r
     */\r
    ceReload?: (newStyles?: string[]) => void;\r
    proxy: ComponentPublicInstance | null;\r
    exposed: Record<string, any> | null;\r
    exposeProxy: Record<string, any> | null;\r
    /* Excluded from this release type: withProxy */\r
    /* Excluded from this release type: ctx */\r
    data: Data;\r
    props: Data;\r
    attrs: Data;\r
    slots: InternalSlots;\r
    refs: Data;\r
    emit: EmitFn;\r
    /* Excluded from this release type: emitted */\r
    /* Excluded from this release type: propsDefaults */\r
    /* Excluded from this release type: setupState */\r
    /* Excluded from this release type: devtoolsRawSetupState */\r
    /* Excluded from this release type: setupContext */\r
    /* Excluded from this release type: suspense */\r
    /* Excluded from this release type: suspenseId */\r
    /* Excluded from this release type: asyncDep */\r
    /* Excluded from this release type: asyncResolved */\r
    isMounted: boolean;\r
    isUnmounted: boolean;\r
    isDeactivated: boolean;\r
    /* Excluded from this release type: bc */\r
    /* Excluded from this release type: c */\r
    /* Excluded from this release type: bm */\r
    /* Excluded from this release type: m */\r
    /* Excluded from this release type: bu */\r
    /* Excluded from this release type: u */\r
    /* Excluded from this release type: bum */\r
    /* Excluded from this release type: um */\r
    /* Excluded from this release type: rtc */\r
    /* Excluded from this release type: rtg */\r
    /* Excluded from this release type: a */\r
    /* Excluded from this release type: da */\r
    /* Excluded from this release type: ec */\r
    /* Excluded from this release type: sp */\r
    /**\r
     * For caching bound $forceUpdate on public proxy access\r
     */\r
    f?: () => void;\r
    /**\r
     * For caching bound $nextTick on public proxy access\r
     */\r
    n?: () => Promise<void>;\r
}\r
\r
declare interface ComponentInternalOptions {\r
    /* Excluded from this release type: __scopeId */\r
    /* Excluded from this release type: __cssModules */\r
    /* Excluded from this release type: __hmrId */\r
    /**\r
     * Compat build only, for bailing out of certain compatibility behavior\r
     */\r
    __isBuiltIn?: boolean;\r
    /**\r
     * This one should be exposed so that devtools can make use of it\r
     */\r
    __file?: string;\r
    /**\r
     * name inferred from filename\r
     */\r
    __name?: string;\r
}\r
\r
export declare type ComponentObjectPropsOptions<P = Data> = {\r
    [K in keyof P]: Prop<P[K]> | null;\r
};\r
\r
export declare type ComponentOptions<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = any, M extends MethodOptions = any, Mixin extends ComponentOptionsMixin = any, Extends extends ComponentOptionsMixin = any, E extends EmitsOptions = any> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E> & ThisType<CreateComponentPublicInstance<{}, RawBindings, D, C, M, Mixin, Extends, E, Readonly<Props>>>;\r
\r
export declare interface ComponentOptionsBase<Props, RawBindings, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin, E extends EmitsOptions, EE extends string = string, Defaults = {}> extends LegacyOptions<Props, D, C, M, Mixin, Extends>, ComponentInternalOptions, ComponentCustomOptions {\r
    setup?: (this: void, props: Readonly<LooseRequired<Props & UnionToIntersection<ExtractOptionProp<Mixin>> & UnionToIntersection<ExtractOptionProp<Extends>>>>, ctx: SetupContext<E>) => Promise<RawBindings> | RawBindings | RenderFunction | void;\r
    name?: string;\r
    template?: string | object;\r
    render?: Function;\r
    components?: Record<string, Component>;\r
    directives?: Record<string, Directive>;\r
    inheritAttrs?: boolean;\r
    emits?: (E | EE[]) & ThisType<void>;\r
    expose?: string[];\r
    serverPrefetch?(): Promise<any>;\r
    compilerOptions?: RuntimeCompilerOptions;\r
    /* Excluded from this release type: ssrRender */\r
    /* Excluded from this release type: __ssrInlineRender */\r
    /* Excluded from this release type: __asyncLoader */\r
    /* Excluded from this release type: __asyncResolved */\r
    call?: (this: unknown, ...args: unknown[]) => never;\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    __defaults?: Defaults;\r
}\r
\r
export declare type ComponentOptionsMixin = ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>;\r
\r
export declare type ComponentOptionsWithArrayProps<PropNames extends string = string, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<{\r
    [key in PropNames]?: any;\r
}> & EmitsToProps<E>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props: PropNames[];\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentOptionsWithObjectProps<PropsOptions = ComponentObjectPropsOptions, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, Props = Readonly<ExtractPropTypes<PropsOptions>> & EmitsToProps<E>, Defaults = ExtractDefaultPropTypes<PropsOptions>> = ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & {\r
    props: PropsOptions & ThisType<void>;\r
} & ThisType<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, Props, Defaults, false>>;\r
\r
export declare type ComponentOptionsWithoutProps<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string, PE = Props & EmitsToProps<E>> = ComponentOptionsBase<PE, RawBindings, D, C, M, Mixin, Extends, E, EE, {}> & {\r
    props?: undefined;\r
} & ThisType<CreateComponentPublicInstance<PE, RawBindings, D, C, M, Mixin, Extends, E>>;\r
\r
export declare type ComponentPropsOptions<P = Data> = ComponentObjectPropsOptions<P> | string[];\r
\r
export declare type ComponentProvideOptions = ObjectProvideOptions | Function;\r
\r
export declare type ComponentPublicInstance<P = {}, // props type extracted from props option\r
B = {}, // raw bindings returned from setup()\r
D = {}, // return from data()\r
C extends ComputedOptions = {}, M extends MethodOptions = {}, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, Options = ComponentOptionsBase<any, any, any, any, any, any, any, any, any>> = {\r
    $: ComponentInternalInstance;\r
    $data: D;\r
    $props: MakeDefaultsOptional extends true ? Partial<Defaults> & Omit<P & PublicProps, keyof Defaults> : P & PublicProps;\r
    $attrs: Data;\r
    $refs: Data;\r
    $slots: Slots;\r
    $root: ComponentPublicInstance | null;\r
    $parent: ComponentPublicInstance | null;\r
    $emit: EmitFn<E>;\r
    $el: any;\r
    $options: Options & MergedComponentOptionsOverride;\r
    $forceUpdate: () => void;\r
    $nextTick: typeof nextTick;\r
    $watch(source: string | Function, cb: Function, options?: WatchOptions): WatchStopHandle;\r
} & P & ShallowUnwrapRef<B> & UnwrapNestedRefs<D> & ExtractComputedReturns<C> & M & ComponentCustomProperties;\r
\r
declare type ComponentPublicInstanceConstructor<T extends ComponentPublicInstance<Props, RawBindings, D, C, M> = ComponentPublicInstance<any>, Props = any, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): T;\r
};\r
\r
declare type ComponentWatchOptionItem = WatchOptionItem | WatchOptionItem[];\r
\r
declare type ComponentWatchOptions = Record<string, ComponentWatchOptionItem>;\r
\r
export declare const computed: typeof computed_2;\r
\r
export { ComputedGetter }\r
\r
export declare type ComputedOptions = Record<string, ComputedGetter<any> | WritableComputedOptions<any>>;\r
\r
export { ComputedRef }\r
\r
export { ComputedSetter }\r
\r
/**\r
 * Concrete component type matches its actual value: it's either an options\r
 * object, or a function. Use this where the code expects to work with actual\r
 * values, e.g. checking if its a function or not. This is mostly for internal\r
 * implementation code.\r
 */\r
export declare type ConcreteComponent<Props = {}, RawBindings = any, D = any, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions> = ComponentOptions<Props, RawBindings, D, C, M> | FunctionalComponent<Props, any>;\r
\r
declare function configureCompat(config: CompatConfig): void;\r
\r
declare interface Constructor<P = any> {\r
    __isFragment?: never;\r
    __isTeleport?: never;\r
    __isSuspense?: never;\r
    new (...args: any[]): {\r
        $props: P;\r
    };\r
}\r
\r
export declare type CreateAppFunction<HostElement> = (rootComponent: Component, rootProps?: Data | null) => App<HostElement>;\r
\r
/**\r
 * Create a block root vnode. Takes the same exact arguments as \`createVNode\`.\r
 * A block root keeps track of dynamic nodes within the block in the\r
 * \`dynamicChildren\` array.\r
 *\r
 * @private\r
 */\r
export declare function createBlock(type: VNodeTypes | ClassComponent, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[]): VNode;\r
\r
/**\r
 * @private\r
 */\r
export declare function createCommentVNode(text?: string, asBlock?: boolean): VNode;\r
\r
declare function createCompatVue(createApp: CreateAppFunction<Element>, createSingletonApp: CreateAppFunction<Element>): CompatVue;\r
\r
declare function createComponentInstance(vnode: VNode, parent: ComponentInternalInstance | null, suspense: SuspenseBoundary | null): ComponentInternalInstance;\r
\r
export declare type CreateComponentPublicInstance<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, PublicProps = P, Defaults = {}, MakeDefaultsOptional extends boolean = false, PublicMixin = IntersectionMixin<Mixin> & IntersectionMixin<Extends>, PublicP = UnwrapMixinsType<PublicMixin, 'P'> & EnsureNonVoid<P>, PublicB = UnwrapMixinsType<PublicMixin, 'B'> & EnsureNonVoid<B>, PublicD = UnwrapMixinsType<PublicMixin, 'D'> & EnsureNonVoid<D>, PublicC extends ComputedOptions = UnwrapMixinsType<PublicMixin, 'C'> & EnsureNonVoid<C>, PublicM extends MethodOptions = UnwrapMixinsType<PublicMixin, 'M'> & EnsureNonVoid<M>, PublicDefaults = UnwrapMixinsType<PublicMixin, 'Defaults'> & EnsureNonVoid<Defaults>> = ComponentPublicInstance<PublicP, PublicB, PublicD, PublicC, PublicM, E, PublicProps, PublicDefaults, MakeDefaultsOptional, ComponentOptionsBase<P, B, D, C, M, Mixin, Extends, E, string, Defaults>>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createElementBlock(type: string | typeof Fragment, props?: Record<string, any> | null, children?: any, patchFlag?: number, dynamicProps?: string[], shapeFlag?: number): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createElementVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, shapeFlag?: number | ShapeFlags, isBlockNode?: boolean, needFullChildrenNormalization?: boolean): VNode<RendererNode, RendererElement, {\r
    [key: string]: any;\r
}>;\r
\r
export declare function createHydrationRenderer(options: RendererOptions<Node, Element>): HydrationRenderer;\r
\r
/* Excluded from this release type: createPropsRestProxy */\r
\r
declare function createRecord(id: string, initialDef: HMRComponent): boolean;\r
\r
/**\r
 * The createRenderer function accepts two generic arguments:\r
 * HostNode and HostElement, corresponding to Node and Element types in the\r
 * host environment. For example, for runtime-dom, HostNode would be the DOM\r
 * \`Node\` interface and HostElement would be the DOM \`Element\` interface.\r
 *\r
 * Custom renderers can pass in the platform specific types like this:\r
 *\r
 * \`\`\` js\r
 * const { render, createApp } = createRenderer<Node, Element>({\r
 *   patchProp,\r
 *   ...nodeOps\r
 * })\r
 * \`\`\`\r
 */\r
export declare function createRenderer<HostNode = RendererNode, HostElement = RendererElement>(options: RendererOptions<HostNode, HostElement>): Renderer<HostElement>;\r
\r
/**\r
 * Compiler runtime helper for creating dynamic slots object\r
 * @private\r
 */\r
export declare function createSlots(slots: Record<string, Slot>, dynamicSlots: (CompiledSlotDescriptor | CompiledSlotDescriptor[] | undefined)[]): Record<string, Slot>;\r
\r
/**\r
 * @private\r
 */\r
export declare function createStaticVNode(content: string, numberOfNodes: number): VNode;\r
\r
declare function createSuspenseBoundary(vnode: VNode, parent: SuspenseBoundary | null, parentComponent: ComponentInternalInstance | null, container: RendererElement, hiddenContainer: RendererElement, anchor: RendererNode | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, isHydrating?: boolean): SuspenseBoundary;\r
\r
/**\r
 * @private\r
 */\r
export declare function createTextVNode(text?: string, flag?: number): VNode;\r
\r
export declare const createVNode: typeof _createVNode;\r
\r
declare function _createVNode(type: VNodeTypes | ClassComponent | typeof NULL_DYNAMIC_COMPONENT, props?: (Data & VNodeProps) | null, children?: unknown, patchFlag?: number, dynamicProps?: string[] | null, isBlockNode?: boolean): VNode;\r
\r
export { customRef }\r
\r
export { CustomRefFactory }\r
\r
declare type Data = Record<string, unknown>;\r
\r
export { DebuggerEvent }\r
\r
export { DebuggerEventExtraInfo }\r
\r
declare type DebuggerHook = (e: DebuggerEvent) => void;\r
\r
export { DebuggerOptions }\r
\r
export { DeepReadonly }\r
\r
declare type DefaultFactory<T> = (props: Data) => T | null | undefined;\r
\r
declare type DefaultKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        type: BooleanConstructor;\r
        required: true;\r
    } ? never : K : never;\r
}[keyof T];\r
\r
export declare function defineAsyncComponent<T extends Component = {\r
    new (): ComponentPublicInstance;\r
}>(source: AsyncComponentLoader<T> | AsyncComponentOptions<T>): T;\r
\r
export declare type DefineComponent<PropsOrPropOptions = {}, RawBindings = {}, D = {}, C extends ComputedOptions = ComputedOptions, M extends MethodOptions = MethodOptions, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = {}, EE extends string = string, PP = PublicProps, Props = Readonly<PropsOrPropOptions extends ComponentPropsOptions ? ExtractPropTypes<PropsOrPropOptions> : PropsOrPropOptions> & ({} extends E ? {} : EmitsToProps<E>), Defaults = ExtractDefaultPropTypes<PropsOrPropOptions>> = ComponentPublicInstanceConstructor<CreateComponentPublicInstance<Props, RawBindings, D, C, M, Mixin, Extends, E, PP & Props, Defaults, true> & Props> & ComponentOptionsBase<Props, RawBindings, D, C, M, Mixin, Extends, E, EE, Defaults> & PP;\r
\r
export declare function defineComponent<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): DefineComponent<Props, RawBindings>;\r
\r
export declare function defineComponent<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Props, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<Readonly<{\r
    [key in PropNames]?: any;\r
}>, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
export declare function defineComponent<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>): DefineComponent<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE>;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's emitted\r
 * events. The expected argument is the same as the component \`emits\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * const emit = defineEmits(['change', 'update'])\r
 * \`\`\`\r
 *\r
 * Example type-based declaration:\r
 * \`\`\`ts\r
 * const emit = defineEmits<{\r
 *   (event: 'change'): void\r
 *   (event: 'update', id: number): void\r
 * }>()\r
 *\r
 * emit('change')\r
 * emit('update', 1)\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineEmits<EE extends string = string>(emitOptions: EE[]): EmitFn<EE[]>;\r
\r
export declare function defineEmits<E extends EmitsOptions = EmitsOptions>(emitOptions: E): EmitFn<E>;\r
\r
export declare function defineEmits<TypeEmit>(): TypeEmit;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring a component's exposed\r
 * instance properties when it is accessed by a parent component via template\r
 * refs.\r
 *\r
 * \`<script setup>\` components are closed by default - i.e. variables inside\r
 * the \`<script setup>\` scope is not exposed to parent unless explicitly exposed\r
 * via \`defineExpose\`.\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineExpose<Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed): void;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for declaring component props. The\r
 * expected argument is the same as the component \`props\` option.\r
 *\r
 * Example runtime declaration:\r
 * \`\`\`js\r
 * // using Array syntax\r
 * const props = defineProps(['foo', 'bar'])\r
 * // using Object syntax\r
 * const props = defineProps({\r
 *   foo: String,\r
 *   bar: {\r
 *     type: Number,\r
 *     required: true\r
 *   }\r
 * })\r
 * \`\`\`\r
 *\r
 * Equivalent type-based declaration:\r
 * \`\`\`ts\r
 * // will be compiled into equivalent runtime declarations\r
 * const props = defineProps<{\r
 *   foo?: string\r
 *   bar: number\r
 * }>()\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the\r
 * output and should **not** be actually called at runtime.\r
 */\r
export declare function defineProps<PropNames extends string = string>(props: PropNames[]): Readonly<{\r
    [key in PropNames]?: any;\r
}>;\r
\r
export declare function defineProps<PP extends ComponentObjectPropsOptions = ComponentObjectPropsOptions>(props: PP): Readonly<ExtractPropTypes<PP>>;\r
\r
export declare function defineProps<TypeProps>(): Readonly<TypeProps>;\r
\r
export declare const enum DeprecationTypes {\r
    GLOBAL_MOUNT = "GLOBAL_MOUNT",\r
    GLOBAL_MOUNT_CONTAINER = "GLOBAL_MOUNT_CONTAINER",\r
    GLOBAL_EXTEND = "GLOBAL_EXTEND",\r
    GLOBAL_PROTOTYPE = "GLOBAL_PROTOTYPE",\r
    GLOBAL_SET = "GLOBAL_SET",\r
    GLOBAL_DELETE = "GLOBAL_DELETE",\r
    GLOBAL_OBSERVABLE = "GLOBAL_OBSERVABLE",\r
    GLOBAL_PRIVATE_UTIL = "GLOBAL_PRIVATE_UTIL",\r
    CONFIG_SILENT = "CONFIG_SILENT",\r
    CONFIG_DEVTOOLS = "CONFIG_DEVTOOLS",\r
    CONFIG_KEY_CODES = "CONFIG_KEY_CODES",\r
    CONFIG_PRODUCTION_TIP = "CONFIG_PRODUCTION_TIP",\r
    CONFIG_IGNORED_ELEMENTS = "CONFIG_IGNORED_ELEMENTS",\r
    CONFIG_WHITESPACE = "CONFIG_WHITESPACE",\r
    CONFIG_OPTION_MERGE_STRATS = "CONFIG_OPTION_MERGE_STRATS",\r
    INSTANCE_SET = "INSTANCE_SET",\r
    INSTANCE_DELETE = "INSTANCE_DELETE",\r
    INSTANCE_DESTROY = "INSTANCE_DESTROY",\r
    INSTANCE_EVENT_EMITTER = "INSTANCE_EVENT_EMITTER",\r
    INSTANCE_EVENT_HOOKS = "INSTANCE_EVENT_HOOKS",\r
    INSTANCE_CHILDREN = "INSTANCE_CHILDREN",\r
    INSTANCE_LISTENERS = "INSTANCE_LISTENERS",\r
    INSTANCE_SCOPED_SLOTS = "INSTANCE_SCOPED_SLOTS",\r
    INSTANCE_ATTRS_CLASS_STYLE = "INSTANCE_ATTRS_CLASS_STYLE",\r
    OPTIONS_DATA_FN = "OPTIONS_DATA_FN",\r
    OPTIONS_DATA_MERGE = "OPTIONS_DATA_MERGE",\r
    OPTIONS_BEFORE_DESTROY = "OPTIONS_BEFORE_DESTROY",\r
    OPTIONS_DESTROYED = "OPTIONS_DESTROYED",\r
    WATCH_ARRAY = "WATCH_ARRAY",\r
    PROPS_DEFAULT_THIS = "PROPS_DEFAULT_THIS",\r
    V_ON_KEYCODE_MODIFIER = "V_ON_KEYCODE_MODIFIER",\r
    CUSTOM_DIR = "CUSTOM_DIR",\r
    ATTR_FALSE_VALUE = "ATTR_FALSE_VALUE",\r
    ATTR_ENUMERATED_COERCION = "ATTR_ENUMERATED_COERCION",\r
    TRANSITION_CLASSES = "TRANSITION_CLASSES",\r
    TRANSITION_GROUP_ROOT = "TRANSITION_GROUP_ROOT",\r
    COMPONENT_ASYNC = "COMPONENT_ASYNC",\r
    COMPONENT_FUNCTIONAL = "COMPONENT_FUNCTIONAL",\r
    COMPONENT_V_MODEL = "COMPONENT_V_MODEL",\r
    RENDER_FUNCTION = "RENDER_FUNCTION",\r
    FILTERS = "FILTERS",\r
    PRIVATE_APIS = "PRIVATE_APIS"\r
}\r
\r
export declare let devtools: DevtoolsHook;\r
\r
declare interface DevtoolsHook {\r
    enabled?: boolean;\r
    emit: (event: string, ...payload: any[]) => void;\r
    on: (event: string, handler: Function) => void;\r
    once: (event: string, handler: Function) => void;\r
    off: (event: string, handler: Function) => void;\r
    appRecords: AppRecord[];\r
}\r
\r
export declare type Directive<T = any, V = any> = ObjectDirective<T, V> | FunctionDirective<T, V>;\r
\r
export declare type DirectiveArguments = Array<[Directive] | [Directive, any] | [Directive, any, string] | [Directive, any, string, DirectiveModifiers]>;\r
\r
export declare interface DirectiveBinding<V = any> {\r
    instance: ComponentPublicInstance | null;\r
    value: V;\r
    oldValue: V | null;\r
    arg?: string;\r
    modifiers: DirectiveModifiers;\r
    dir: ObjectDirective<any, V>;\r
}\r
\r
export declare type DirectiveHook<T = any, Prev = VNode<any, T> | null, V = any> = (el: T, binding: DirectiveBinding<V>, vnode: VNode<any, T>, prevVNode: Prev) => void;\r
\r
declare type DirectiveModifiers = Record<string, boolean>;\r
\r
export { effect }\r
\r
export { EffectScheduler }\r
\r
export { EffectScope }\r
\r
export { effectScope }\r
\r
declare type EmitFn<Options = ObjectEmitsOptions, Event extends keyof Options = keyof Options> = Options extends Array<infer V> ? (event: V, ...args: any[]) => void : {} extends Options ? (event: string, ...args: any[]) => void : UnionToIntersection<{\r
    [key in Event]: Options[key] extends (...args: infer Args) => any ? (event: key, ...args: Args) => void : (event: key, ...args: any[]) => void;\r
}[Event]>;\r
\r
export declare type EmitsOptions = ObjectEmitsOptions | string[];\r
\r
declare type EmitsToProps<T extends EmitsOptions> = T extends string[] ? {\r
    [K in string & \`on\${Capitalize<T[number]>}\`]?: (...args: any[]) => any;\r
} : T extends ObjectEmitsOptions ? {\r
    [K in string & \`on\${Capitalize<string & keyof T>}\`]?: K extends \`on\${infer C}\` ? T[Uncapitalize<C>] extends null ? (...args: any[]) => any : (...args: T[Uncapitalize<C>] extends (...args: infer P) => any ? P : never) => any : never;\r
} : {};\r
\r
declare type EnsureNonVoid<T> = T extends void ? {} : T;\r
\r
declare type ErrorCapturedHook<TError = unknown> = (err: TError, instance: ComponentPublicInstance | null, info: string) => boolean | void;\r
\r
export declare const enum ErrorCodes {\r
    SETUP_FUNCTION = 0,\r
    RENDER_FUNCTION = 1,\r
    WATCH_GETTER = 2,\r
    WATCH_CALLBACK = 3,\r
    WATCH_CLEANUP = 4,\r
    NATIVE_EVENT_HANDLER = 5,\r
    COMPONENT_EVENT_HANDLER = 6,\r
    VNODE_HOOK = 7,\r
    DIRECTIVE_HOOK = 8,\r
    TRANSITION_HOOK = 9,\r
    APP_ERROR_HANDLER = 10,\r
    APP_WARN_HANDLER = 11,\r
    FUNCTION_REF = 12,\r
    ASYNC_COMPONENT_LOADER = 13,\r
    SCHEDULER = 14\r
}\r
\r
declare type ErrorTypes = LifecycleHooks | ErrorCodes;\r
\r
declare type ExtractComputedReturns<T extends any> = {\r
    [key in keyof T]: T[key] extends {\r
        get: (...args: any[]) => infer TReturn;\r
    } ? TReturn : T[key] extends (...args: any[]) => infer TReturn ? TReturn : never;\r
};\r
\r
export declare type ExtractDefaultPropTypes<O> = O extends object ? {\r
    [K in keyof Pick<O, DefaultKeys<O>>]: InferPropType<O[K]>;\r
} : {};\r
\r
declare type ExtractMixin<T> = {\r
    Mixin: MixinToOptionTypes<T>;\r
}[T extends ComponentOptionsMixin ? 'Mixin' : never];\r
\r
declare type ExtractOptionProp<T> = T extends ComponentOptionsBase<infer P, // Props\r
any, // RawBindings\r
any, // D\r
any, // C\r
any, // M\r
any, // Mixin\r
any, // Extends\r
any> ? unknown extends P ? {} : P : {};\r
\r
export declare type ExtractPropTypes<O> = {\r
    [K in keyof Pick<O, RequiredKeys<O>>]: InferPropType<O[K]>;\r
} & {\r
    [K in keyof Pick<O, OptionalKeys<O>>]?: InferPropType<O[K]>;\r
};\r
\r
export declare const Fragment: {\r
    new (): {\r
        $props: VNodeProps;\r
    };\r
    __isFragment: true;\r
};\r
\r
export declare interface FunctionalComponent<P = {}, E extends EmitsOptions = {}> extends ComponentInternalOptions {\r
    (props: P, ctx: Omit<SetupContext<E>, 'expose'>): any;\r
    props?: ComponentPropsOptions<P>;\r
    emits?: E | (keyof E)[];\r
    inheritAttrs?: boolean;\r
    displayName?: string;\r
    compatConfig?: CompatConfig;\r
}\r
\r
export declare type FunctionDirective<T = any, V = any> = DirectiveHook<T, any, V>;\r
\r
export declare const getCurrentInstance: () => ComponentInternalInstance | null;\r
\r
export { getCurrentScope }\r
\r
export declare function getTransitionRawChildren(children: VNode[], keepComment?: boolean, parentKey?: VNode['key']): VNode[];\r
\r
export declare function guardReactiveProps(props: (Data & VNodeProps) | null): (Data & VNodeProps) | null;\r
\r
export declare function h(type: string, children?: RawChildren): VNode;\r
\r
export declare function h(type: string, props?: RawProps | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Text_2 | typeof Comment_2, props?: null, children?: string | number | boolean): VNode;\r
\r
export declare function h(type: typeof Fragment, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Fragment, props?: RawProps | null, children?: VNodeArrayChildren): VNode;\r
\r
export declare function h(type: typeof Teleport, props: RawProps & TeleportProps, children: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, children?: RawChildren): VNode;\r
\r
export declare function h(type: typeof Suspense, props?: (RawProps & SuspenseProps) | null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P, E extends EmitsOptions = {}>(type: FunctionalComponent<P, E>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Component, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent | string, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: ConcreteComponent<P> | string, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren): VNode;\r
\r
export declare function h(type: Component, props: null, children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h<P>(type: ComponentOptions<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: Constructor, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: Constructor<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function h(type: DefineComponent, children?: RawChildren): VNode;\r
\r
export declare function h<P>(type: DefineComponent<P>, props?: (RawProps & P) | ({} extends P ? null : never), children?: RawChildren | RawSlots): VNode;\r
\r
export declare function handleError(err: unknown, instance: ComponentInternalInstance | null, type: ErrorTypes, throwInDev?: boolean): void;\r
\r
declare type HMRComponent = ComponentOptions | ClassComponent;\r
\r
export declare interface HMRRuntime {\r
    createRecord: typeof createRecord;\r
    rerender: typeof rerender;\r
    reload: typeof reload;\r
}\r
\r
declare type Hook<T = () => void> = T | T[];\r
\r
declare function hydrateSuspense(node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals, hydrateNode: (node: Node, vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
declare function hydrateTeleport(node: Node, vnode: TeleportVNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean, { o: { nextSibling, parentNode, querySelector } }: RendererInternals<Node, Element>, hydrateChildren: (node: Node | null, vnode: VNode, container: Element, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, slotScopeIds: string[] | null, optimized: boolean) => Node | null): Node | null;\r
\r
export declare interface HydrationRenderer extends Renderer<Element | ShadowRoot> {\r
    hydrate: RootHydrateFunction;\r
}\r
\r
declare type InferDefault<P, T> = T extends null | number | string | boolean | symbol | Function ? T | ((props: P) => T) : (props: P) => T;\r
\r
declare type InferDefaults<T> = {\r
    [K in keyof T]?: InferDefault<T, NotUndefined<T[K]>>;\r
};\r
\r
declare type InferPropType<T> = [T] extends [null] ? any : [T] extends [{\r
    type: null | true;\r
}] ? any : [T] extends [ObjectConstructor | {\r
    type: ObjectConstructor;\r
}] ? Record<string, any> : [T] extends [BooleanConstructor | {\r
    type: BooleanConstructor;\r
}] ? boolean : [T] extends [DateConstructor | {\r
    type: DateConstructor;\r
}] ? Date : [T] extends [(infer U)[] | {\r
    type: (infer U)[];\r
}] ? U extends DateConstructor ? Date | InferPropType<U> : InferPropType<U> : [T] extends [Prop<infer V, infer D>] ? unknown extends V ? IfAny<V, V, D> : V : T;\r
\r
export declare function initCustomFormatter(): void;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string): T | undefined;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T, treatDefaultAsFactory?: false): T;\r
\r
export declare function inject<T>(key: InjectionKey<T> | string, defaultValue: T | (() => T), treatDefaultAsFactory: true): T;\r
\r
export declare interface InjectionKey<T> extends Symbol {\r
}\r
\r
/* Excluded from this release type: InternalRenderFunction */\r
\r
declare type InternalSlots = {\r
    [name: string]: Slot | undefined;\r
};\r
\r
declare type IntersectionMixin<T> = IsDefaultMixinComponent<T> extends true ? OptionTypesType<{}, {}, {}, {}, {}> : UnionToIntersection<ExtractMixin<T>>;\r
\r
declare function isCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, enableForBuiltIn?: boolean): boolean;\r
\r
declare type IsDefaultMixinComponent<T> = T extends ComponentOptionsMixin ? ComponentOptionsMixin extends T ? true : false : false;\r
\r
export declare function isMemoSame(cached: VNode, memo: any[]): boolean;\r
\r
export { isProxy }\r
\r
export { isReactive }\r
\r
export { isReadonly }\r
\r
export { isRef }\r
\r
export declare const isRuntimeOnly: () => boolean;\r
\r
export { isShallow }\r
\r
export declare function isVNode(value: any): value is VNode;\r
\r
export declare const KeepAlive: {\r
    new (): {\r
        $props: VNodeProps & KeepAliveProps;\r
    };\r
    __isKeepAlive: true;\r
};\r
\r
export declare interface KeepAliveProps {\r
    include?: MatchPattern;\r
    exclude?: MatchPattern;\r
    max?: number | string;\r
}\r
\r
export declare type LegacyConfig = {\r
    /**\r
     * @deprecated \`config.silent\` option has been removed\r
     */\r
    silent?: boolean;\r
    /**\r
     * @deprecated use false compile-time feature flag instead\r
     * https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags\r
     */\r
    devtools?: boolean;\r
    /**\r
     * @deprecated use \`config.isCustomElement\` instead\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-ignoredelements-is-now-config-iscustomelement\r
     */\r
    ignoredElements?: (string | RegExp)[];\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/keycode-modifiers.html\r
     */\r
    keyCodes?: Record<string, number | number[]>;\r
    /**\r
     * @deprecated\r
     * https://v3-migration.vuejs.org/breaking-changes/global-api.html#config-productiontip-removed\r
     */\r
    productionTip?: boolean;\r
};\r
\r
declare interface LegacyOptions<Props, D, C extends ComputedOptions, M extends MethodOptions, Mixin extends ComponentOptionsMixin, Extends extends ComponentOptionsMixin> {\r
    compatConfig?: CompatConfig;\r
    [key: string]: any;\r
    data?: (this: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>, vm: CreateComponentPublicInstance<Props, {}, {}, {}, MethodOptions, Mixin, Extends>) => D;\r
    computed?: C;\r
    methods?: M;\r
    watch?: ComponentWatchOptions;\r
    provide?: ComponentProvideOptions;\r
    inject?: ComponentInjectOptions;\r
    filters?: Record<string, Function>;\r
    mixins?: Mixin[];\r
    extends?: Extends;\r
    beforeCreate?(): void;\r
    created?(): void;\r
    beforeMount?(): void;\r
    mounted?(): void;\r
    beforeUpdate?(): void;\r
    updated?(): void;\r
    activated?(): void;\r
    deactivated?(): void;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?(): void;\r
    beforeUnmount?(): void;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?(): void;\r
    unmounted?(): void;\r
    renderTracked?: DebuggerHook;\r
    renderTriggered?: DebuggerHook;\r
    errorCaptured?: ErrorCapturedHook;\r
    /**\r
     * runtime compile only\r
     * @deprecated use \`compilerOptions.delimiters\` instead.\r
     */\r
    delimiters?: [string, string];\r
    /**\r
     * #3468\r
     *\r
     * type-only, used to assist Mixin's type inference,\r
     * typescript will try to simplify the inferred \`Mixin\` type,\r
     * with the \`__differentiator\`, typescript won't be able to combine different mixins,\r
     * because the \`__differentiator\` will be different\r
     */\r
    __differentiator?: keyof D | keyof C | keyof M;\r
}\r
\r
declare type LegacyPublicInstance = ComponentPublicInstance & LegacyPublicProperties;\r
\r
declare interface LegacyPublicProperties {\r
    $set(target: object, key: string, value: any): void;\r
    $delete(target: object, key: string): void;\r
    $mount(el?: string | Element): this;\r
    $destroy(): void;\r
    $scopedSlots: Slots;\r
    $on(event: string | string[], fn: Function): this;\r
    $once(event: string, fn: Function): this;\r
    $off(event?: string | string[], fn?: Function): this;\r
    $children: LegacyPublicProperties[];\r
    $listeners: Record<string, Function | Function[]>;\r
}\r
\r
declare type LifecycleHook<TFn = Function> = TFn[] | null;\r
\r
declare const enum LifecycleHooks {\r
    BEFORE_CREATE = "bc",\r
    CREATED = "c",\r
    BEFORE_MOUNT = "bm",\r
    MOUNTED = "m",\r
    BEFORE_UPDATE = "bu",\r
    UPDATED = "u",\r
    BEFORE_UNMOUNT = "bum",\r
    UNMOUNTED = "um",\r
    DEACTIVATED = "da",\r
    ACTIVATED = "a",\r
    RENDER_TRIGGERED = "rtg",\r
    RENDER_TRACKED = "rtc",\r
    ERROR_CAPTURED = "ec",\r
    SERVER_PREFETCH = "sp"\r
}\r
\r
declare type MapSources<T, Immediate> = {\r
    [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : T[K] extends object ? Immediate extends true ? T[K] | undefined : T[K] : never;\r
};\r
\r
export { markRaw }\r
\r
declare type MatchPattern = string | RegExp | (string | RegExp)[];\r
\r
declare type MergedComponentOptions = ComponentOptions & MergedComponentOptionsOverride;\r
\r
declare type MergedComponentOptionsOverride = {\r
    beforeCreate?: MergedHook;\r
    created?: MergedHook;\r
    beforeMount?: MergedHook;\r
    mounted?: MergedHook;\r
    beforeUpdate?: MergedHook;\r
    updated?: MergedHook;\r
    activated?: MergedHook;\r
    deactivated?: MergedHook;\r
    /** @deprecated use \`beforeUnmount\` instead */\r
    beforeDestroy?: MergedHook;\r
    beforeUnmount?: MergedHook;\r
    /** @deprecated use \`unmounted\` instead */\r
    destroyed?: MergedHook;\r
    unmounted?: MergedHook;\r
    renderTracked?: MergedHook<DebuggerHook>;\r
    renderTriggered?: MergedHook<DebuggerHook>;\r
    errorCaptured?: MergedHook<ErrorCapturedHook>;\r
};\r
\r
/* Excluded from this release type: mergeDefaults */\r
\r
declare type MergedHook<T = () => void> = T | T[];\r
\r
export declare function mergeProps(...args: (Data & VNodeProps)[]): Data;\r
\r
export declare interface MethodOptions {\r
    [key: string]: Function;\r
}\r
\r
declare type MixinToOptionTypes<T> = T extends ComponentOptionsBase<infer P, infer B, infer D, infer C, infer M, infer Mixin, infer Extends, any, any, infer Defaults> ? OptionTypesType<P & {}, B & {}, D & {}, C & {}, M & {}, Defaults & {}> & IntersectionMixin<Mixin> & IntersectionMixin<Extends> : never;\r
\r
declare type MountChildrenFn = (children: VNodeArrayChildren, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, start?: number) => void;\r
\r
declare type MountComponentFn = (initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
declare type MoveFn = (vnode: VNode, container: RendererElement, anchor: RendererNode | null, type: MoveType, parentSuspense?: SuspenseBoundary | null) => void;\r
\r
declare function moveTeleport(vnode: VNode, container: RendererElement, parentAnchor: RendererNode | null, { o: { insert }, m: move }: RendererInternals, moveType?: TeleportMoveTypes): void;\r
\r
declare const enum MoveType {\r
    ENTER = 0,\r
    LEAVE = 1,\r
    REORDER = 2\r
}\r
\r
declare type MultiWatchSources = (WatchSource<unknown> | object)[];\r
\r
declare type NextFn = (vnode: VNode) => RendererNode | null;\r
\r
export declare function nextTick<T = void>(this: T, fn?: (this: T) => void): Promise<void>;\r
\r
export { normalizeClass }\r
\r
declare type NormalizedProp = null | (PropOptions & {\r
    [BooleanFlags.shouldCast]?: boolean;\r
    [BooleanFlags.shouldCastTrue]?: boolean;\r
});\r
\r
declare type NormalizedProps = Record<string, NormalizedProp>;\r
\r
declare type NormalizedPropsOptions = [NormalizedProps, string[]] | [];\r
\r
export { normalizeProps }\r
\r
export { normalizeStyle }\r
\r
declare function normalizeSuspenseChildren(vnode: VNode): void;\r
\r
declare function normalizeVNode(child: VNodeChild): VNode;\r
\r
declare type NotUndefined<T> = T extends undefined ? never : T;\r
\r
declare const NULL_DYNAMIC_COMPONENT: unique symbol;\r
\r
export declare interface ObjectDirective<T = any, V = any> {\r
    created?: DirectiveHook<T, null, V>;\r
    beforeMount?: DirectiveHook<T, null, V>;\r
    mounted?: DirectiveHook<T, null, V>;\r
    beforeUpdate?: DirectiveHook<T, VNode<any, T>, V>;\r
    updated?: DirectiveHook<T, VNode<any, T>, V>;\r
    beforeUnmount?: DirectiveHook<T, null, V>;\r
    unmounted?: DirectiveHook<T, null, V>;\r
    getSSRProps?: SSRDirectiveHook;\r
    deep?: boolean;\r
}\r
\r
export declare type ObjectEmitsOptions = Record<string, ((...args: any[]) => any) | null>;\r
\r
declare type ObjectInjectOptions = Record<string | symbol, string | symbol | {\r
    from?: string | symbol;\r
    default?: unknown;\r
}>;\r
\r
declare type ObjectProvideOptions = Record<string | symbol, unknown>;\r
\r
declare type ObjectWatchOptionItem = {\r
    handler: WatchCallback | string;\r
} & WatchOptions;\r
\r
export declare function onActivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onBeforeMount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUnmount: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onBeforeUpdate: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
declare type OnCleanup = (cleanupFn: () => void) => void;\r
\r
export declare function onDeactivated(hook: Function, target?: ComponentInternalInstance | null): void;\r
\r
export declare function onErrorCaptured<TError = Error>(hook: ErrorCapturedHook<TError>, target?: ComponentInternalInstance | null): void;\r
\r
export declare const onMounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTracked: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onRenderTriggered: (hook: DebuggerHook, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export { onScopeDispose }\r
\r
export declare const onServerPrefetch: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUnmounted: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
export declare const onUpdated: (hook: () => any, target?: ComponentInternalInstance | null) => false | Function | undefined;\r
\r
/**\r
 * Open a block.\r
 * This must be called before \`createBlock\`. It cannot be part of \`createBlock\`\r
 * because the children of the block are evaluated before \`createBlock\` itself\r
 * is called. The generated code typically looks like this:\r
 *\r
 * \`\`\`js\r
 * function render() {\r
 *   return (openBlock(),createBlock('div', null, [...]))\r
 * }\r
 * \`\`\`\r
 * disableTracking is true when creating a v-for fragment block, since a v-for\r
 * fragment always diffs its children.\r
 *\r
 * @private\r
 */\r
export declare function openBlock(disableTracking?: boolean): void;\r
\r
declare type OptionalKeys<T> = Exclude<keyof T, RequiredKeys<T>>;\r
\r
export declare type OptionMergeFunction = (to: unknown, from: unknown) => any;\r
\r
declare type OptionTypesKeys = 'P' | 'B' | 'D' | 'C' | 'M' | 'Defaults';\r
\r
declare type OptionTypesType<P = {}, B = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Defaults = {}> = {\r
    P: P;\r
    B: B;\r
    D: D;\r
    C: C;\r
    M: M;\r
    Defaults: Defaults;\r
};\r
\r
declare type PatchBlockChildrenFn = (oldChildren: VNode[], newChildren: VNode[], fallbackContainer: RendererElement, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null) => void;\r
\r
declare type PatchChildrenFn = (n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean) => void;\r
\r
declare type PatchFn = (n1: VNode | null, // null means this is a mount\r
n2: VNode, container: RendererElement, anchor?: RendererNode | null, parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, isSVG?: boolean, slotScopeIds?: string[] | null, optimized?: boolean) => void;\r
\r
declare type Plugin_2 = (PluginInstallFunction & {\r
    install?: PluginInstallFunction;\r
}) | {\r
    install: PluginInstallFunction;\r
};\r
export { Plugin_2 as Plugin }\r
\r
declare type PluginInstallFunction = (app: App, ...options: any[]) => any;\r
\r
/**\r
 * Technically we no longer need this after 3.0.8 but we need to keep the same\r
 * API for backwards compat w/ code generated by compilers.\r
 * @private\r
 */\r
export declare function popScopeId(): void;\r
\r
export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;\r
\r
declare type PropConstructor<T = any> = {\r
    new (...args: any[]): T & {};\r
} | {\r
    (): T;\r
} | PropMethod<T>;\r
\r
declare type PropMethod<T, TConstructor = any> = [T] extends [\r
((...args: any) => any) | undefined\r
] ? {\r
    new (): TConstructor;\r
    (): T;\r
    readonly prototype: TConstructor;\r
} : never;\r
\r
declare interface PropOptions<T = any, D = T> {\r
    type?: PropType<T> | true | null;\r
    required?: boolean;\r
    default?: D | DefaultFactory<D> | null | undefined | object;\r
    validator?(value: unknown): boolean;\r
}\r
\r
declare type PropsWithDefaults<Base, Defaults> = Base & {\r
    [K in keyof Defaults]: K extends keyof Base ? NotUndefined<Base[K]> : never;\r
};\r
\r
export declare type PropType<T> = PropConstructor<T> | PropConstructor<T>[];\r
\r
export declare function provide<T>(key: InjectionKey<T> | string | number, value: T): void;\r
\r
export { proxyRefs }\r
\r
declare type PublicProps = VNodeProps & AllowedComponentProps & ComponentCustomProps;\r
\r
/**\r
 * Set scope id when creating hoisted vnodes.\r
 * @private compiler helper\r
 */\r
export declare function pushScopeId(id: string | null): void;\r
\r
export declare function queuePostFlushCb(cb: SchedulerJobs): void;\r
\r
declare type RawChildren = string | number | boolean | VNode | VNodeArrayChildren | (() => any);\r
\r
declare type RawProps = VNodeProps & {\r
    __v_isVNode?: never;\r
    [Symbol.iterator]?: never;\r
} & Record<string, any>;\r
\r
declare type RawSlots = {\r
    [name: string]: unknown;\r
    $stable?: boolean;\r
    /* Excluded from this release type: _ctx */\r
    /* Excluded from this release type: _ */\r
};\r
\r
export { reactive }\r
\r
export { ReactiveEffect }\r
\r
export { ReactiveEffectOptions }\r
\r
export { ReactiveEffectRunner }\r
\r
export { ReactiveFlags }\r
\r
export { readonly }\r
\r
export { Ref }\r
\r
export { ref }\r
\r
/**\r
 * For runtime-dom to register the compiler.\r
 * Note the exported method uses any to avoid d.ts relying on the compiler types.\r
 */\r
export declare function registerRuntimeCompiler(_compile: any): void;\r
\r
declare function reload(id: string, newComp: HMRComponent): void;\r
\r
declare type RemoveFn = (vnode: VNode) => void;\r
\r
declare function renderComponentRoot(instance: ComponentInternalInstance): VNode;\r
\r
export declare interface Renderer<HostElement = RendererElement> {\r
    render: RootRenderFunction<HostElement>;\r
    createApp: CreateAppFunction<HostElement>;\r
}\r
\r
export declare interface RendererElement extends RendererNode {\r
}\r
\r
declare interface RendererInternals<HostNode = RendererNode, HostElement = RendererElement> {\r
    p: PatchFn;\r
    um: UnmountFn;\r
    r: RemoveFn;\r
    m: MoveFn;\r
    mt: MountComponentFn;\r
    mc: MountChildrenFn;\r
    pc: PatchChildrenFn;\r
    pbc: PatchBlockChildrenFn;\r
    n: NextFn;\r
    o: RendererOptions<HostNode, HostElement>;\r
}\r
\r
export declare interface RendererNode {\r
    [key: string]: any;\r
}\r
\r
export declare interface RendererOptions<HostNode = RendererNode, HostElement = RendererElement> {\r
    patchProp(el: HostElement, key: string, prevValue: any, nextValue: any, isSVG?: boolean, prevChildren?: VNode<HostNode, HostElement>[], parentComponent?: ComponentInternalInstance | null, parentSuspense?: SuspenseBoundary | null, unmountChildren?: UnmountChildrenFn): void;\r
    insert(el: HostNode, parent: HostElement, anchor?: HostNode | null): void;\r
    remove(el: HostNode): void;\r
    createElement(type: string, isSVG?: boolean, isCustomizedBuiltIn?: string, vnodeProps?: (VNodeProps & {\r
        [key: string]: any;\r
    }) | null): HostElement;\r
    createText(text: string): HostNode;\r
    createComment(text: string): HostNode;\r
    setText(node: HostNode, text: string): void;\r
    setElementText(node: HostElement, text: string): void;\r
    parentNode(node: HostNode): HostElement | null;\r
    nextSibling(node: HostNode): HostNode | null;\r
    querySelector?(selector: string): HostElement | null;\r
    setScopeId?(el: HostElement, id: string): void;\r
    cloneNode?(node: HostNode): HostNode;\r
    insertStaticContent?(content: string, parent: HostElement, anchor: HostNode | null, isSVG: boolean, start?: HostNode | null, end?: HostNode | null): [HostNode, HostNode];\r
}\r
\r
export declare type RenderFunction = () => VNodeChild;\r
\r
/**\r
 * v-for string\r
 * @private\r
 */\r
export declare function renderList(source: string, renderItem: (value: string, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for number\r
 */\r
export declare function renderList(source: number, renderItem: (value: number, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for array\r
 */\r
export declare function renderList<T>(source: T[], renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for iterable\r
 */\r
export declare function renderList<T>(source: Iterable<T>, renderItem: (value: T, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * v-for object\r
 */\r
export declare function renderList<T>(source: T, renderItem: <K extends keyof T>(value: T[K], key: K, index: number) => VNodeChild): VNodeChild[];\r
\r
/**\r
 * Compiler runtime helper for rendering \`<slot/>\`\r
 * @private\r
 */\r
export declare function renderSlot(slots: Slots, name: string, props?: Data, fallback?: () => VNodeArrayChildren, noSlotted?: boolean): VNode;\r
\r
declare type RequiredKeys<T> = {\r
    [K in keyof T]: T[K] extends {\r
        required: true;\r
    } | {\r
        default: any;\r
    } | BooleanConstructor | {\r
        type: BooleanConstructor;\r
    } ? T[K] extends {\r
        default: undefined | (() => undefined);\r
    } ? never : K : never;\r
}[keyof T];\r
\r
declare function rerender(id: string, newRender?: Function): void;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveComponent(name: string, maybeSelfReference?: boolean): ConcreteComponent | string;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDirective(name: string): Directive | undefined;\r
\r
/**\r
 * @private\r
 */\r
export declare function resolveDynamicComponent(component: unknown): VNodeTypes;\r
\r
/* Excluded from this release type: resolveFilter */\r
\r
/* Excluded from this release type: resolveFilter_2 */\r
\r
export declare function resolveTransitionHooks(vnode: VNode, props: BaseTransitionProps<any>, state: TransitionState, instance: ComponentInternalInstance): TransitionHooks;\r
\r
export declare type RootHydrateFunction = (vnode: VNode<Node, Element>, container: (Element | ShadowRoot) & {\r
    _vnode?: VNode;\r
}) => void;\r
\r
export declare type RootRenderFunction<HostElement = RendererElement> = (vnode: VNode | null, container: HostElement, isSVG?: boolean) => void;\r
\r
/**\r
 * Subset of compiler options that makes sense for the runtime.\r
 */\r
export declare interface RuntimeCompilerOptions {\r
    isCustomElement?: (tag: string) => boolean;\r
    whitespace?: 'preserve' | 'condense';\r
    comments?: boolean;\r
    delimiters?: [string, string];\r
}\r
\r
declare interface SchedulerJob extends Function {\r
    id?: number;\r
    active?: boolean;\r
    computed?: boolean;\r
    /**\r
     * Indicates whether the effect is allowed to recursively trigger itself\r
     * when managed by the scheduler.\r
     *\r
     * By default, a job cannot trigger itself because some built-in method calls,\r
     * e.g. Array.prototype.push actually performs reads as well (#1740) which\r
     * can lead to confusing infinite loops.\r
     * The allowed cases are component update functions and watch callbacks.\r
     * Component update functions may update child component props, which in turn\r
     * trigger flush: "pre" watch callbacks that mutates state that the parent\r
     * relies on (#1801). Watch callbacks doesn't track its dependencies so if it\r
     * triggers itself again, it's likely intentional and it is the user's\r
     * responsibility to perform recursive state mutation that eventually\r
     * stabilizes (#1727).\r
     */\r
    allowRecurse?: boolean;\r
    /**\r
     * Attached by renderer.ts when setting up a component's render effect\r
     * Used to obtain component information when reporting max recursive updates.\r
     * dev only.\r
     */\r
    ownerInstance?: ComponentInternalInstance;\r
}\r
\r
declare type SchedulerJobs = SchedulerJob | SchedulerJob[];\r
\r
/**\r
 * Block tracking sometimes needs to be disabled, for example during the\r
 * creation of a tree that needs to be cached by v-once. The compiler generates\r
 * code like this:\r
 *\r
 * \`\`\` js\r
 * _cache[1] || (\r
 *   setBlockTracking(-1),\r
 *   _cache[1] = createVNode(...),\r
 *   setBlockTracking(1),\r
 *   _cache[1]\r
 * )\r
 * \`\`\`\r
 *\r
 * @private\r
 */\r
export declare function setBlockTracking(value: number): void;\r
\r
/**\r
 * Note: rendering calls maybe nested. The function returns the parent rendering\r
 * instance if present, which should be restored after the render is done:\r
 *\r
 * \`\`\`js\r
 * const prev = setCurrentRenderingInstance(i)\r
 * // ...render\r
 * setCurrentRenderingInstance(prev)\r
 * \`\`\`\r
 */\r
declare function setCurrentRenderingInstance(instance: ComponentInternalInstance | null): ComponentInternalInstance | null;\r
\r
export declare function setDevtoolsHook(hook: DevtoolsHook, target: any): void;\r
\r
export declare function setTransitionHooks(vnode: VNode, hooks: TransitionHooks): void;\r
\r
declare function setupComponent(instance: ComponentInternalInstance, isSSR?: boolean): Promise<void> | undefined;\r
\r
export declare interface SetupContext<E = EmitsOptions> {\r
    attrs: Data;\r
    slots: Slots;\r
    emit: EmitFn<E>;\r
    expose: (exposed?: Record<string, any>) => void;\r
}\r
\r
declare type SetupRenderEffectFn = (instance: ComponentInternalInstance, initialVNode: VNode, container: RendererElement, anchor: RendererNode | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, optimized: boolean) => void;\r
\r
export { ShallowReactive }\r
\r
export { shallowReactive }\r
\r
export { shallowReadonly }\r
\r
export { ShallowRef }\r
\r
export { shallowRef }\r
\r
export { ShallowUnwrapRef }\r
\r
export declare type Slot = (...args: any[]) => VNode[];\r
\r
export declare type Slots = Readonly<InternalSlots>;\r
\r
/**\r
 * Use this for features where legacy usage is still possible, but will likely\r
 * lead to runtime error if compat is disabled. (warn in all cases)\r
 */\r
declare function softAssertCompatEnabled(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): boolean;\r
\r
export declare const ssrContextKey: unique symbol;\r
\r
declare type SSRDirectiveHook = (binding: DirectiveBinding, vnode: VNode) => Data | undefined;\r
\r
/* Excluded from this release type: ssrUtils */\r
\r
export declare const Static: unique symbol;\r
\r
export { stop_2 as stop }\r
\r
export declare const Suspense: {\r
    new (): {\r
        $props: VNodeProps & SuspenseProps;\r
    };\r
    __isSuspense: true;\r
};\r
\r
export declare interface SuspenseBoundary {\r
    vnode: VNode<RendererNode, RendererElement, SuspenseProps>;\r
    parent: SuspenseBoundary | null;\r
    parentComponent: ComponentInternalInstance | null;\r
    isSVG: boolean;\r
    container: RendererElement;\r
    hiddenContainer: RendererElement;\r
    anchor: RendererNode | null;\r
    activeBranch: VNode | null;\r
    pendingBranch: VNode | null;\r
    deps: number;\r
    pendingId: number;\r
    timeout: number;\r
    isInFallback: boolean;\r
    isHydrating: boolean;\r
    isUnmounted: boolean;\r
    effects: Function[];\r
    resolve(force?: boolean): void;\r
    fallback(fallbackVNode: VNode): void;\r
    move(container: RendererElement, anchor: RendererNode | null, type: MoveType): void;\r
    next(): RendererNode | null;\r
    registerDep(instance: ComponentInternalInstance, setupRenderEffect: SetupRenderEffectFn): void;\r
    unmount(parentSuspense: SuspenseBoundary | null, doRemove?: boolean): void;\r
}\r
\r
declare const SuspenseImpl: {\r
    name: string;\r
    __isSuspense: boolean;\r
    process(n1: VNode | null, n2: VNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, rendererInternals: RendererInternals): void;\r
    hydrate: typeof hydrateSuspense;\r
    create: typeof createSuspenseBoundary;\r
    normalize: typeof normalizeSuspenseChildren;\r
};\r
\r
export declare interface SuspenseProps {\r
    onResolve?: () => void;\r
    onPending?: () => void;\r
    onFallback?: () => void;\r
    timeout?: string | number;\r
}\r
\r
export declare const Teleport: {\r
    new (): {\r
        $props: VNodeProps & TeleportProps;\r
    };\r
    __isTeleport: true;\r
};\r
\r
declare const TeleportImpl: {\r
    __isTeleport: boolean;\r
    process(n1: TeleportVNode | null, n2: TeleportVNode, container: RendererElement, anchor: RendererNode | null, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, isSVG: boolean, slotScopeIds: string[] | null, optimized: boolean, internals: RendererInternals): void;\r
    remove(vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, optimized: boolean, { um: unmount, o: { remove: hostRemove } }: RendererInternals, doRemove: Boolean): void;\r
    move: typeof moveTeleport;\r
    hydrate: typeof hydrateTeleport;\r
};\r
\r
declare const enum TeleportMoveTypes {\r
    TARGET_CHANGE = 0,\r
    TOGGLE = 1,\r
    REORDER = 2\r
}\r
\r
export declare interface TeleportProps {\r
    to: string | RendererElement | null | undefined;\r
    disabled?: boolean;\r
}\r
\r
declare type TeleportVNode = VNode<RendererNode, RendererElement, TeleportProps>;\r
\r
declare const Text_2: unique symbol;\r
export { Text_2 as Text }\r
\r
export { toDisplayString }\r
\r
export { toHandlerKey }\r
\r
/**\r
 * For prefixing keys in v-on="obj" with "on"\r
 * @private\r
 */\r
export declare function toHandlers(obj: Record<string, any>): Record<string, any>;\r
\r
export { toRaw }\r
\r
export { ToRef }\r
\r
export { toRef }\r
\r
export { ToRefs }\r
\r
export { toRefs }\r
\r
export { TrackOpTypes }\r
\r
/**\r
 * Internal API for registering an arguments transform for createVNode\r
 * used for creating stubs in the test-utils\r
 * It is *internal* but needs to be exposed for test-utils to pick up proper\r
 * typings\r
 */\r
export declare function transformVNodeArgs(transformer?: typeof vnodeArgsTransformer): void;\r
\r
export declare interface TransitionHooks<HostElement extends RendererElement = RendererElement> {\r
    mode: BaseTransitionProps['mode'];\r
    persisted: boolean;\r
    beforeEnter(el: HostElement): void;\r
    enter(el: HostElement): void;\r
    leave(el: HostElement, remove: () => void): void;\r
    clone(vnode: VNode): TransitionHooks<HostElement>;\r
    afterLeave?(): void;\r
    delayLeave?(el: HostElement, earlyRemove: () => void, delayedLeave: () => void): void;\r
    delayedLeave?(): void;\r
}\r
\r
export declare interface TransitionState {\r
    isMounted: boolean;\r
    isLeaving: boolean;\r
    isUnmounting: boolean;\r
    leavingVNodes: Map<any, Record<string, VNode>>;\r
}\r
\r
export { TriggerOpTypes }\r
\r
export { triggerRef }\r
\r
declare type UnmountChildrenFn = (children: VNode[], parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean, start?: number) => void;\r
\r
declare type UnmountFn = (vnode: VNode, parentComponent: ComponentInternalInstance | null, parentSuspense: SuspenseBoundary | null, doRemove?: boolean, optimized?: boolean) => void;\r
\r
export { unref }\r
\r
declare type UnwrapMixinsType<T, Type extends OptionTypesKeys> = T extends OptionTypesType ? T[Type] : never;\r
\r
export { UnwrapNestedRefs }\r
\r
export { UnwrapRef }\r
\r
export declare function useAttrs(): SetupContext['attrs'];\r
\r
export declare function useSlots(): SetupContext['slots'];\r
\r
export declare const useSSRContext: <T = Record<string, any>>() => T | undefined;\r
\r
export declare function useTransitionState(): TransitionState;\r
\r
export declare const version: string;\r
\r
export declare interface VNode<HostNode = RendererNode, HostElement = RendererElement, ExtraProps = {\r
    [key: string]: any;\r
}> {\r
    /* Excluded from this release type: __v_isVNode */\r
    /* Excluded from this release type: __v_skip */\r
    type: VNodeTypes;\r
    props: (VNodeProps & ExtraProps) | null;\r
    key: string | number | symbol | null;\r
    ref: VNodeNormalizedRef | null;\r
    /**\r
     * SFC only. This is assigned on vnode creation using currentScopeId\r
     * which is set alongside currentRenderingInstance.\r
     */\r
    scopeId: string | null;\r
    /* Excluded from this release type: slotScopeIds */\r
    children: VNodeNormalizedChildren;\r
    component: ComponentInternalInstance | null;\r
    dirs: DirectiveBinding[] | null;\r
    transition: TransitionHooks<HostElement> | null;\r
    el: HostNode | null;\r
    anchor: HostNode | null;\r
    target: HostElement | null;\r
    targetAnchor: HostNode | null;\r
    /* Excluded from this release type: staticCount */\r
    suspense: SuspenseBoundary | null;\r
    /* Excluded from this release type: ssContent */\r
    /* Excluded from this release type: ssFallback */\r
    shapeFlag: number;\r
    patchFlag: number;\r
    /* Excluded from this release type: dynamicProps */\r
    /* Excluded from this release type: dynamicChildren */\r
    appContext: AppContext | null;\r
    /* Excluded from this release type: memo */\r
    /* Excluded from this release type: isCompatRoot */\r
    /* Excluded from this release type: ce */\r
}\r
\r
declare let vnodeArgsTransformer: ((args: Parameters<typeof _createVNode>, instance: ComponentInternalInstance | null) => Parameters<typeof _createVNode>) | undefined;\r
\r
export declare type VNodeArrayChildren = Array<VNodeArrayChildren | VNodeChildAtom>;\r
\r
export declare type VNodeChild = VNodeChildAtom | VNodeArrayChildren;\r
\r
declare type VNodeChildAtom = VNode | string | number | boolean | null | undefined | void;\r
\r
declare type VNodeMountHook = (vnode: VNode) => void;\r
\r
export declare type VNodeNormalizedChildren = string | VNodeArrayChildren | RawSlots | null;\r
\r
declare type VNodeNormalizedRef = VNodeNormalizedRefAtom | VNodeNormalizedRefAtom[];\r
\r
declare type VNodeNormalizedRefAtom = {\r
    i: ComponentInternalInstance;\r
    r: VNodeRef;\r
    k?: string;\r
    f?: boolean;\r
};\r
\r
export declare type VNodeProps = {\r
    key?: string | number | symbol;\r
    ref?: VNodeRef;\r
    ref_for?: boolean;\r
    ref_key?: string;\r
    onVnodeBeforeMount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeMounted?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeBeforeUpdate?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeUpdated?: VNodeUpdateHook | VNodeUpdateHook[];\r
    onVnodeBeforeUnmount?: VNodeMountHook | VNodeMountHook[];\r
    onVnodeUnmounted?: VNodeMountHook | VNodeMountHook[];\r
};\r
\r
export declare type VNodeRef = string | Ref | ((ref: Element | ComponentPublicInstance | null, refs: Record<string, any>) => void);\r
\r
export declare type VNodeTypes = string | VNode | Component | typeof Text_2 | typeof Static | typeof Comment_2 | typeof Fragment | typeof TeleportImpl | typeof SuspenseImpl;\r
\r
declare type VNodeUpdateHook = (vnode: VNode, oldVNode: VNode) => void;\r
\r
export declare function warn(msg: string, ...args: any[]): void;\r
\r
declare function warnDeprecation(key: DeprecationTypes, instance: ComponentInternalInstance | null, ...args: any[]): void;\r
\r
export declare function watch<T extends MultiWatchSources, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends Readonly<MultiWatchSources>, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<MapSources<T, false>, MapSources<T, Immediate>>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare function watch<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions<Immediate>): WatchStopHandle;\r
\r
export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onCleanup: OnCleanup) => any;\r
\r
export declare type WatchEffect = (onCleanup: OnCleanup) => void;\r
\r
export declare function watchEffect(effect: WatchEffect, options?: WatchOptionsBase): WatchStopHandle;\r
\r
declare type WatchOptionItem = string | WatchCallback | ObjectWatchOptionItem;\r
\r
export declare interface WatchOptions<Immediate = boolean> extends WatchOptionsBase {\r
    immediate?: Immediate;\r
    deep?: boolean;\r
}\r
\r
export declare interface WatchOptionsBase extends DebuggerOptions {\r
    flush?: 'pre' | 'post' | 'sync';\r
}\r
\r
export declare function watchPostEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);\r
\r
export declare type WatchStopHandle = () => void;\r
\r
export declare function watchSyncEffect(effect: WatchEffect, options?: DebuggerOptions): WatchStopHandle;\r
\r
/* Excluded from this release type: withAsyncContext */\r
\r
/**\r
 * Wrap a slot function to memoize current rendering instance\r
 * @private compiler helper\r
 */\r
export declare function withCtx(fn: Function, ctx?: ComponentInternalInstance | null, isNonScopedSlot?: boolean): Function;\r
\r
/**\r
 * Vue \`<script setup>\` compiler macro for providing props default values when\r
 * using type-based \`defineProps\` declaration.\r
 *\r
 * Example usage:\r
 * \`\`\`ts\r
 * withDefaults(defineProps<{\r
 *   size?: number\r
 *   labels?: string[]\r
 * }>(), {\r
 *   size: 3,\r
 *   labels: () => ['default label']\r
 * })\r
 * \`\`\`\r
 *\r
 * This is only usable inside \`<script setup>\`, is compiled away in the output\r
 * and should **not** be actually called at runtime.\r
 */\r
export declare function withDefaults<Props, Defaults extends InferDefaults<Props>>(props: Props, defaults: Defaults): PropsWithDefaults<Props, Defaults>;\r
\r
/**\r
 * Adds directives to a VNode.\r
 */\r
export declare function withDirectives<T extends VNode>(vnode: T, directives: DirectiveArguments): T;\r
\r
export declare function withMemo(memo: any[], render: () => VNode<any, any>, cache: any[], index: number): VNode<any, any, {\r
    [key: string]: any;\r
}>;\r
\r
/**\r
 * Only for backwards compat\r
 * @private\r
 */\r
export declare const withScopeId: (_id: string) => typeof withCtx;\r
\r
export { WritableComputedOptions }\r
\r
export { WritableComputedRef }\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeCoreBailTypes:
      | VNode
      | {
          // directly bailing on ComponentPublicInstance results in recursion
          // so we use this as a bail hint
          $: ComponentInternalInstance
        }
  }
}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.
type _defineProps = typeof defineProps
type _defineEmits = typeof defineEmits
type _defineExpose = typeof defineExpose
type _withDefaults = typeof withDefaults

declare global {
  const defineProps: _defineProps
  const defineEmits: _defineEmits
  const defineExpose: _defineExpose
  const withDefaults: _withDefaults
}
`,Ua=`import { BaseTransitionProps } from '@vue/runtime-core';\r
import { ComponentInternalInstance } from '@vue/runtime-core';\r
import { ComponentOptionsMixin } from '@vue/runtime-core';\r
import { ComponentOptionsWithArrayProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithObjectProps } from '@vue/runtime-core';\r
import { ComponentOptionsWithoutProps } from '@vue/runtime-core';\r
import { ComponentPropsOptions } from '@vue/runtime-core';\r
import { ComponentPublicInstance } from '@vue/runtime-core';\r
import { ComputedOptions } from '@vue/runtime-core';\r
import { ConcreteComponent } from '@vue/runtime-core';\r
import { CreateAppFunction } from '@vue/runtime-core';\r
import { EmitsOptions } from '@vue/runtime-core';\r
import { ExtractPropTypes } from '@vue/runtime-core';\r
import { FunctionalComponent } from '@vue/runtime-core';\r
import { MethodOptions } from '@vue/runtime-core';\r
import { ObjectDirective } from '@vue/runtime-core';\r
import { RenderFunction } from '@vue/runtime-core';\r
import { RootHydrateFunction } from '@vue/runtime-core';\r
import { RootRenderFunction } from '@vue/runtime-core';\r
import { SetupContext } from '@vue/runtime-core';\r
\r
declare const ANIMATION = "animation";\r
\r
declare type AssignerFn = (value: any) => void;\r
\r
declare const BaseClass: {\r
    new (): HTMLElement;\r
    prototype: HTMLElement;\r
};\r
\r
export declare const createApp: CreateAppFunction<Element>;\r
\r
export declare const createSSRApp: CreateAppFunction<Element>;\r
\r
export declare function defineCustomElement<Props, RawBindings = object>(setup: (props: Readonly<Props>, ctx: SetupContext) => RawBindings | RenderFunction): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<Props = {}, RawBindings = {}, D = {}, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = EmitsOptions, EE extends string = string>(options: ComponentOptionsWithoutProps<Props, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<Props>;\r
\r
export declare function defineCustomElement<PropNames extends string, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithArrayProps<PropNames, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<{\r
    [K in PropNames]: any;\r
}>;\r
\r
export declare function defineCustomElement<PropsOptions extends Readonly<ComponentPropsOptions>, RawBindings, D, C extends ComputedOptions = {}, M extends MethodOptions = {}, Mixin extends ComponentOptionsMixin = ComponentOptionsMixin, Extends extends ComponentOptionsMixin = ComponentOptionsMixin, E extends EmitsOptions = Record<string, any>, EE extends string = string>(options: ComponentOptionsWithObjectProps<PropsOptions, RawBindings, D, C, M, Mixin, Extends, E, EE> & {\r
    styles?: string[];\r
}): VueElementConstructor<ExtractPropTypes<PropsOptions>>;\r
\r
export declare function defineCustomElement(options: {\r
    new (...args: any[]): ComponentPublicInstance;\r
}): VueElementConstructor;\r
\r
export declare const defineSSRCustomElement: typeof defineCustomElement;\r
\r
export declare const hydrate: RootHydrateFunction;\r
\r
/* Excluded from this release type: initDirectivesForSSR */\r
\r
declare type InnerComponentDef = ConcreteComponent & {\r
    styles?: string[];\r
};\r
\r
declare type ModelDirective<T> = ObjectDirective<T & {\r
    _assign: AssignerFn;\r
}>;\r
\r
export declare const render: RootRenderFunction<Element | ShadowRoot>;\r
\r
declare const TRANSITION = "transition";\r
\r
export declare const Transition: FunctionalComponent<TransitionProps>;\r
\r
export declare const TransitionGroup: new () => {\r
    $props: TransitionGroupProps;\r
};\r
\r
export declare type TransitionGroupProps = Omit<TransitionProps, 'mode'> & {\r
    tag?: string;\r
    moveClass?: string;\r
};\r
\r
export declare interface TransitionProps extends BaseTransitionProps<Element> {\r
    name?: string;\r
    type?: typeof TRANSITION | typeof ANIMATION;\r
    css?: boolean;\r
    duration?: number | {\r
        enter: number;\r
        leave: number;\r
    };\r
    enterFromClass?: string;\r
    enterActiveClass?: string;\r
    enterToClass?: string;\r
    appearFromClass?: string;\r
    appearActiveClass?: string;\r
    appearToClass?: string;\r
    leaveFromClass?: string;\r
    leaveActiveClass?: string;\r
    leaveToClass?: string;\r
}\r
\r
export declare function useCssModule(name?: string): Record<string, string>;\r
\r
/**\r
 * Runtime helper for SFC's CSS variable injection feature.\r
 * @private\r
 */\r
export declare function useCssVars(getter: (ctx: any) => Record<string, string>): void;\r
\r
export declare const vModelCheckbox: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelDynamic: ObjectDirective<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;\r
\r
export declare const vModelRadio: ModelDirective<HTMLInputElement>;\r
\r
export declare const vModelSelect: ModelDirective<HTMLSelectElement>;\r
\r
export declare const vModelText: ModelDirective<HTMLInputElement | HTMLTextAreaElement>;\r
\r
export declare const vShow: ObjectDirective<VShowElement>;\r
\r
declare interface VShowElement extends HTMLElement {\r
    _vod: string;\r
}\r
\r
export declare class VueElement extends BaseClass {\r
    private _def;\r
    private _props;\r
    /* Excluded from this release type: _instance */\r
    private _connected;\r
    private _resolved;\r
    private _numberProps;\r
    private _styles?;\r
    constructor(_def: InnerComponentDef, _props?: Record<string, any>, hydrate?: RootHydrateFunction);\r
    connectedCallback(): void;\r
    disconnectedCallback(): void;\r
    /**\r
     * resolve inner component definition (handle possible async component)\r
     */\r
    private _resolveDef;\r
    protected _setAttr(key: string): void;\r
    /* Excluded from this release type: _getProp */\r
    /* Excluded from this release type: _setProp */\r
    private _update;\r
    private _createVNode;\r
    private _applyStyles;\r
}\r
\r
export declare type VueElementConstructor<P = {}> = {\r
    new (initialProps?: Record<string, any>): VueElement & P;\r
};\r
\r
/**\r
 * @private\r
 */\r
export declare const withKeys: (fn: Function, modifiers: string[]) => (event: KeyboardEvent) => any;\r
\r
/**\r
 * @private\r
 */\r
export declare const withModifiers: (fn: Function, modifiers: string[]) => (event: Event, ...args: unknown[]) => any;\r
\r
\r
export * from "@vue/runtime-core";\r
\r
export { }\r

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

// This code is based on react definition in DefinitelyTyped published under the MIT license.
//      Repository: https://github.com/DefinitelyTyped/DefinitelyTyped
//      Path in the repository: types/react/index.d.ts
//
// Copyrights of original definition are:
//      AssureSign <http://www.assuresign.com>
//      Microsoft <https://microsoft.com>
//                 John Reilly <https://github.com/johnnyreilly>
//      Benoit Benezech <https://github.com/bbenezech>
//      Patricio Zavolinsky <https://github.com/pzavolinsky>
//      Digiguru <https://github.com/digiguru>
//      Eric Anderson <https://github.com/ericanderson>
//      Dovydas Navickas <https://github.com/DovydasNavickas>
//                 Josh Rutherford <https://github.com/theruther4d>
//                 Guilherme Hübner <https://github.com/guilhermehubner>
//                 Ferdy Budhidharma <https://github.com/ferdaber>
//                 Johann Rakotoharisoa <https://github.com/jrakotoharisoa>
//                 Olivier Pascal <https://github.com/pascaloliv>
//                 Martin Hochel <https://github.com/hotell>
//                 Frank Li <https://github.com/franklixuefei>
//                 Jessica Franco <https://github.com/Jessidhia>
//                 Saransh Kataria <https://github.com/saranshkataria>
//                 Kanitkorn Sujautra <https://github.com/lukyth>
//                 Sebastian Silbermann <https://github.com/eps1lon>

import { VNode } from '@vue/runtime-core'
import * as CSS from 'csstype'

export interface CSSProperties
  extends CSS.Properties<string | number>,
    CSS.PropertiesHyphen<string | number> {
  /**
   * The index signature was removed to enable closed typing for style
   * using CSSType. You're able to use type assertion or module augmentation
   * to add properties or an index signature of your own.
   *
   * For examples and more information, visit:
   * https://github.com/frenic/csstype#what-should-i-do-when-i-get-type-errors
   */
  [v: \`--\${string}\`]: string | number | undefined
}

type Booleanish = boolean | 'true' | 'false'
type Numberish = number | string

// All the WAI-ARIA 1.1 attributes from https://www.w3.org/TR/wai-aria-1.1/
interface AriaAttributes {
  /** Identifies the currently active element when DOM focus is on a composite widget, textbox, group, or application. */
  'aria-activedescendant'?: string
  /** Indicates whether assistive technologies will present all, or only parts of, the changed region based on the change notifications defined by the aria-relevant attribute. */
  'aria-atomic'?: Booleanish
  /**
   * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be
   * presented if they are made.
   */
  'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both'
  /** Indicates an element is being modified and that assistive technologies MAY want to wait until the modifications are complete before exposing them to the user. */
  'aria-busy'?: Booleanish
  /**
   * Indicates the current "checked" state of checkboxes, radio buttons, and other widgets.
   * @see aria-pressed @see aria-selected.
   */
  'aria-checked'?: Booleanish | 'mixed'
  /**
   * Defines the total number of columns in a table, grid, or treegrid.
   * @see aria-colindex.
   */
  'aria-colcount'?: Numberish
  /**
   * Defines an element's column index or position with respect to the total number of columns within a table, grid, or treegrid.
   * @see aria-colcount @see aria-colspan.
   */
  'aria-colindex'?: Numberish
  /**
   * Defines the number of columns spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-colindex @see aria-rowspan.
   */
  'aria-colspan'?: Numberish
  /**
   * Identifies the element (or elements) whose contents or presence are controlled by the current element.
   * @see aria-owns.
   */
  'aria-controls'?: string
  /** Indicates the element that represents the current item within a container or set of related elements. */
  'aria-current'?: Booleanish | 'page' | 'step' | 'location' | 'date' | 'time'
  /**
   * Identifies the element (or elements) that describes the object.
   * @see aria-labelledby
   */
  'aria-describedby'?: string
  /**
   * Identifies the element that provides a detailed, extended description for the object.
   * @see aria-describedby.
   */
  'aria-details'?: string
  /**
   * Indicates that the element is perceivable but disabled, so it is not editable or otherwise operable.
   * @see aria-hidden @see aria-readonly.
   */
  'aria-disabled'?: Booleanish
  /**
   * Indicates what functions can be performed when a dragged object is released on the drop target.
   * @deprecated in ARIA 1.1
   */
  'aria-dropeffect'?: 'none' | 'copy' | 'execute' | 'link' | 'move' | 'popup'
  /**
   * Identifies the element that provides an error message for the object.
   * @see aria-invalid @see aria-describedby.
   */
  'aria-errormessage'?: string
  /** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
  'aria-expanded'?: Booleanish
  /**
   * Identifies the next element (or elements) in an alternate reading order of content which, at the user's discretion,
   * allows assistive technology to override the general default of reading in document source order.
   */
  'aria-flowto'?: string
  /**
   * Indicates an element's "grabbed" state in a drag-and-drop operation.
   * @deprecated in ARIA 1.1
   */
  'aria-grabbed'?: Booleanish
  /** Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an element. */
  'aria-haspopup'?: Booleanish | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog'
  /**
   * Indicates whether the element is exposed to an accessibility API.
   * @see aria-disabled.
   */
  'aria-hidden'?: Booleanish
  /**
   * Indicates the entered value does not conform to the format expected by the application.
   * @see aria-errormessage.
   */
  'aria-invalid'?: Booleanish | 'grammar' | 'spelling'
  /** Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element. */
  'aria-keyshortcuts'?: string
  /**
   * Defines a string value that labels the current element.
   * @see aria-labelledby.
   */
  'aria-label'?: string
  /**
   * Identifies the element (or elements) that labels the current element.
   * @see aria-describedby.
   */
  'aria-labelledby'?: string
  /** Defines the hierarchical level of an element within a structure. */
  'aria-level'?: Numberish
  /** Indicates that an element will be updated, and describes the types of updates the user agents, assistive technologies, and user can expect from the live region. */
  'aria-live'?: 'off' | 'assertive' | 'polite'
  /** Indicates whether an element is modal when displayed. */
  'aria-modal'?: Booleanish
  /** Indicates whether a text box accepts multiple lines of input or only a single line. */
  'aria-multiline'?: Booleanish
  /** Indicates that the user may select more than one item from the current selectable descendants. */
  'aria-multiselectable'?: Booleanish
  /** Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous. */
  'aria-orientation'?: 'horizontal' | 'vertical'
  /**
   * Identifies an element (or elements) in order to define a visual, functional, or contextual parent/child relationship
   * between DOM elements where the DOM hierarchy cannot be used to represent the relationship.
   * @see aria-controls.
   */
  'aria-owns'?: string
  /**
   * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value.
   * A hint could be a sample value or a brief description of the expected format.
   */
  'aria-placeholder'?: string
  /**
   * Defines an element's number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-setsize.
   */
  'aria-posinset'?: Numberish
  /**
   * Indicates the current "pressed" state of toggle buttons.
   * @see aria-checked @see aria-selected.
   */
  'aria-pressed'?: Booleanish | 'mixed'
  /**
   * Indicates that the element is not editable, but is otherwise operable.
   * @see aria-disabled.
   */
  'aria-readonly'?: Booleanish
  /**
   * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified.
   * @see aria-atomic.
   */
  'aria-relevant'?: 'additions' | 'additions text' | 'all' | 'removals' | 'text'
  /** Indicates that user input is required on the element before a form may be submitted. */
  'aria-required'?: Booleanish
  /** Defines a human-readable, author-localized description for the role of an element. */
  'aria-roledescription'?: string
  /**
   * Defines the total number of rows in a table, grid, or treegrid.
   * @see aria-rowindex.
   */
  'aria-rowcount'?: Numberish
  /**
   * Defines an element's row index or position with respect to the total number of rows within a table, grid, or treegrid.
   * @see aria-rowcount @see aria-rowspan.
   */
  'aria-rowindex'?: Numberish
  /**
   * Defines the number of rows spanned by a cell or gridcell within a table, grid, or treegrid.
   * @see aria-rowindex @see aria-colspan.
   */
  'aria-rowspan'?: Numberish
  /**
   * Indicates the current "selected" state of various widgets.
   * @see aria-checked @see aria-pressed.
   */
  'aria-selected'?: Booleanish
  /**
   * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM.
   * @see aria-posinset.
   */
  'aria-setsize'?: Numberish
  /** Indicates if items in a table or grid are sorted in ascending or descending order. */
  'aria-sort'?: 'none' | 'ascending' | 'descending' | 'other'
  /** Defines the maximum allowed value for a range widget. */
  'aria-valuemax'?: Numberish
  /** Defines the minimum allowed value for a range widget. */
  'aria-valuemin'?: Numberish
  /**
   * Defines the current value for a range widget.
   * @see aria-valuetext.
   */
  'aria-valuenow'?: Numberish
  /** Defines the human readable text alternative of aria-valuenow for a range widget. */
  'aria-valuetext'?: string
}

// Vue's style normalization supports nested arrays
export type StyleValue = string | CSSProperties | Array<StyleValue>

export interface HTMLAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  class?: any
  style?: StyleValue

  // Standard HTML Attributes
  accesskey?: string
  contenteditable?: Booleanish | 'inherit'
  contextmenu?: string
  dir?: string
  draggable?: Booleanish
  hidden?: Booleanish
  id?: string
  lang?: string
  placeholder?: string
  spellcheck?: Booleanish
  tabindex?: Numberish
  title?: string
  translate?: 'yes' | 'no'

  // Unknown
  radiogroup?: string // <command>, <menuitem>

  // WAI-ARIA
  role?: string

  // RDFa Attributes
  about?: string
  datatype?: string
  inlist?: any
  prefix?: string
  property?: string
  resource?: string
  typeof?: string
  vocab?: string

  // Non-standard Attributes
  autocapitalize?: string
  autocorrect?: string
  autosave?: string
  color?: string
  itemprop?: string
  itemscope?: Booleanish
  itemtype?: string
  itemid?: string
  itemref?: string
  results?: Numberish
  security?: string
  unselectable?: 'on' | 'off'

  // Living Standard
  /**
   * Hints at the type of data that might be entered by the user while editing the element or its contents
   * @see https://html.spec.whatwg.org/multipage/interaction.html#input-modalities:-the-inputmode-attribute
   */
  inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search'
  /**
   * Specify that a standard HTML element should behave like a defined custom built-in element
   * @see https://html.spec.whatwg.org/multipage/custom-elements.html#attr-is
   */
  is?: string
}

export interface AnchorHTMLAttributes extends HTMLAttributes {
  download?: any
  href?: string
  hreflang?: string
  media?: string
  ping?: string
  rel?: string
  target?: string
  type?: string
  referrerpolicy?: string
}

export interface AreaHTMLAttributes extends HTMLAttributes {
  alt?: string
  coords?: string
  download?: any
  href?: string
  hreflang?: string
  media?: string
  rel?: string
  shape?: string
  target?: string
}

export interface AudioHTMLAttributes extends MediaHTMLAttributes {}

export interface BaseHTMLAttributes extends HTMLAttributes {
  href?: string
  target?: string
}

export interface BlockquoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ButtonHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  name?: string
  type?: 'submit' | 'reset' | 'button'
  value?: string | string[] | number
}

export interface CanvasHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  width?: Numberish
}

export interface ColHTMLAttributes extends HTMLAttributes {
  span?: Numberish
  width?: Numberish
}

export interface ColgroupHTMLAttributes extends HTMLAttributes {
  span?: Numberish
}

export interface DataHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface DetailsHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface DelHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface DialogHTMLAttributes extends HTMLAttributes {
  open?: Booleanish
}

export interface EmbedHTMLAttributes extends HTMLAttributes {
  height?: Numberish
  src?: string
  type?: string
  width?: Numberish
}

export interface FieldsetHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  form?: string
  name?: string
}

export interface FormHTMLAttributes extends HTMLAttributes {
  acceptcharset?: string
  action?: string
  autocomplete?: string
  enctype?: string
  method?: string
  name?: string
  novalidate?: Booleanish
  target?: string
}

export interface HtmlHTMLAttributes extends HTMLAttributes {
  manifest?: string
}

export interface IframeHTMLAttributes extends HTMLAttributes {
  allow?: string
  allowfullscreen?: Booleanish
  allowtransparency?: Booleanish
  frameborder?: Numberish
  height?: Numberish
  marginheight?: Numberish
  marginwidth?: Numberish
  name?: string
  referrerpolicy?: string
  sandbox?: string
  scrolling?: string
  seamless?: Booleanish
  src?: string
  srcdoc?: string
  width?: Numberish
}

export interface ImgHTMLAttributes extends HTMLAttributes {
  alt?: string
  crossorigin?: 'anonymous' | 'use-credentials' | ''
  decoding?: 'async' | 'auto' | 'sync'
  height?: Numberish
  sizes?: string
  src?: string
  srcset?: string
  usemap?: string
  width?: Numberish
}

export interface InsHTMLAttributes extends HTMLAttributes {
  cite?: string
  datetime?: string
}

export interface InputHTMLAttributes extends HTMLAttributes {
  accept?: string
  alt?: string
  autocomplete?: string
  autofocus?: Booleanish
  capture?: boolean | 'user' | 'environment' // https://www.w3.org/tr/html-media-capture/#the-capture-attribute
  checked?: Booleanish | any[] | Set<any> // for IDE v-model multi-checkbox support
  crossorigin?: string
  disabled?: Booleanish
  form?: string
  formaction?: string
  formenctype?: string
  formmethod?: string
  formnovalidate?: Booleanish
  formtarget?: string
  height?: Numberish
  indeterminate?: boolean
  list?: string
  max?: Numberish
  maxlength?: Numberish
  min?: Numberish
  minlength?: Numberish
  multiple?: Booleanish
  name?: string
  pattern?: string
  placeholder?: string
  readonly?: Booleanish
  required?: Booleanish
  size?: Numberish
  src?: string
  step?: Numberish
  type?: string
  value?: any // we support :value to be bound to anything w/ v-model
  width?: Numberish
}

export interface KeygenHTMLAttributes extends HTMLAttributes {
  autofocus?: Booleanish
  challenge?: string
  disabled?: Booleanish
  form?: string
  keytype?: string
  keyparams?: string
  name?: string
}

export interface LabelHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
}

export interface LiHTMLAttributes extends HTMLAttributes {
  value?: string | string[] | number
}

export interface LinkHTMLAttributes extends HTMLAttributes {
  as?: string
  crossorigin?: string
  href?: string
  hreflang?: string
  integrity?: string
  media?: string
  rel?: string
  sizes?: string
  type?: string
}

export interface MapHTMLAttributes extends HTMLAttributes {
  name?: string
}

export interface MenuHTMLAttributes extends HTMLAttributes {
  type?: string
}

export interface MediaHTMLAttributes extends HTMLAttributes {
  autoplay?: Booleanish
  controls?: Booleanish
  controlslist?: string
  crossorigin?: string
  loop?: Booleanish
  mediagroup?: string
  muted?: Booleanish
  playsinline?: Booleanish
  preload?: string
  src?: string
}

export interface MetaHTMLAttributes extends HTMLAttributes {
  charset?: string
  content?: string
  httpequiv?: string
  name?: string
}

export interface MeterHTMLAttributes extends HTMLAttributes {
  form?: string
  high?: Numberish
  low?: Numberish
  max?: Numberish
  min?: Numberish
  optimum?: Numberish
  value?: string | string[] | number
}

export interface QuoteHTMLAttributes extends HTMLAttributes {
  cite?: string
}

export interface ObjectHTMLAttributes extends HTMLAttributes {
  classid?: string
  data?: string
  form?: string
  height?: Numberish
  name?: string
  type?: string
  usemap?: string
  width?: Numberish
  wmode?: string
}

export interface OlHTMLAttributes extends HTMLAttributes {
  reversed?: Booleanish
  start?: Numberish
  type?: '1' | 'a' | 'A' | 'i' | 'I'
}

export interface OptgroupHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
}

export interface OptionHTMLAttributes extends HTMLAttributes {
  disabled?: Booleanish
  label?: string
  selected?: Booleanish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface OutputHTMLAttributes extends HTMLAttributes {
  for?: string
  form?: string
  name?: string
}

export interface ParamHTMLAttributes extends HTMLAttributes {
  name?: string
  value?: string | string[] | number
}

export interface ProgressHTMLAttributes extends HTMLAttributes {
  max?: Numberish
  value?: string | string[] | number
}

export interface ScriptHTMLAttributes extends HTMLAttributes {
  async?: Booleanish
  charset?: string
  crossorigin?: string
  defer?: Booleanish
  integrity?: string
  nomodule?: Booleanish
  nonce?: string
  src?: string
  type?: string
}

export interface SelectHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  disabled?: Booleanish
  form?: string
  multiple?: Booleanish
  name?: string
  required?: Booleanish
  size?: Numberish
  value?: any // we support :value to be bound to anything w/ v-model
}

export interface SourceHTMLAttributes extends HTMLAttributes {
  media?: string
  sizes?: string
  src?: string
  srcset?: string
  type?: string
}

export interface StyleHTMLAttributes extends HTMLAttributes {
  media?: string
  nonce?: string
  scoped?: Booleanish
  type?: string
}

export interface TableHTMLAttributes extends HTMLAttributes {
  cellpadding?: Numberish
  cellspacing?: Numberish
  summary?: string
}

export interface TextareaHTMLAttributes extends HTMLAttributes {
  autocomplete?: string
  autofocus?: Booleanish
  cols?: Numberish
  dirname?: string
  disabled?: Booleanish
  form?: string
  maxlength?: Numberish
  minlength?: Numberish
  name?: string
  placeholder?: string
  readonly?: boolean
  required?: Booleanish
  rows?: Numberish
  value?: string | string[] | number
  wrap?: string
}

export interface TdHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
  valign?: 'top' | 'middle' | 'bottom' | 'baseline'
}

export interface ThHTMLAttributes extends HTMLAttributes {
  align?: 'left' | 'center' | 'right' | 'justify' | 'char'
  colspan?: Numberish
  headers?: string
  rowspan?: Numberish
  scope?: string
}

export interface TimeHTMLAttributes extends HTMLAttributes {
  datetime?: string
}

export interface TrackHTMLAttributes extends HTMLAttributes {
  default?: Booleanish
  kind?: string
  label?: string
  src?: string
  srclang?: string
}

export interface VideoHTMLAttributes extends MediaHTMLAttributes {
  height?: Numberish
  playsinline?: Booleanish
  poster?: string
  width?: Numberish
  disablePictureInPicture?: Booleanish
}

export interface WebViewHTMLAttributes extends HTMLAttributes {
  allowfullscreen?: Booleanish
  allowpopups?: Booleanish
  autoFocus?: Booleanish
  autosize?: Booleanish
  blinkfeatures?: string
  disableblinkfeatures?: string
  disableguestresize?: Booleanish
  disablewebsecurity?: Booleanish
  guestinstance?: string
  httpreferrer?: string
  nodeintegration?: Booleanish
  partition?: string
  plugins?: Booleanish
  preload?: string
  src?: string
  useragent?: string
  webpreferences?: string
}

export interface SVGAttributes extends AriaAttributes, EventHandlers<Events> {
  innerHTML?: string

  /**
   * SVG Styling Attributes
   * @see https://www.w3.org/TR/SVG/styling.html#ElementSpecificStyling
   */
  class?: any
  style?: string | CSSProperties

  color?: string
  height?: Numberish
  id?: string
  lang?: string
  max?: Numberish
  media?: string
  method?: string
  min?: Numberish
  name?: string
  target?: string
  type?: string
  width?: Numberish

  // Other HTML properties supported by SVG elements in browsers
  role?: string
  tabindex?: Numberish

  // SVG Specific attributes
  'accent-height'?: Numberish
  accumulate?: 'none' | 'sum'
  additive?: 'replace' | 'sum'
  'alignment-baseline'?:
    | 'auto'
    | 'baseline'
    | 'before-edge'
    | 'text-before-edge'
    | 'middle'
    | 'central'
    | 'after-edge'
    | 'text-after-edge'
    | 'ideographic'
    | 'alphabetic'
    | 'hanging'
    | 'mathematical'
    | 'inherit'
  allowReorder?: 'no' | 'yes'
  alphabetic?: Numberish
  amplitude?: Numberish
  'arabic-form'?: 'initial' | 'medial' | 'terminal' | 'isolated'
  ascent?: Numberish
  attributeName?: string
  attributeType?: string
  autoReverse?: Numberish
  azimuth?: Numberish
  baseFrequency?: Numberish
  'baseline-shift'?: Numberish
  baseProfile?: Numberish
  bbox?: Numberish
  begin?: Numberish
  bias?: Numberish
  by?: Numberish
  calcMode?: Numberish
  'cap-height'?: Numberish
  clip?: Numberish
  'clip-path'?: string
  clipPathUnits?: Numberish
  'clip-rule'?: Numberish
  'color-interpolation'?: Numberish
  'color-interpolation-filters'?: 'auto' | 'sRGB' | 'linearRGB' | 'inherit'
  'color-profile'?: Numberish
  'color-rendering'?: Numberish
  contentScriptType?: Numberish
  contentStyleType?: Numberish
  cursor?: Numberish
  cx?: Numberish
  cy?: Numberish
  d?: string
  decelerate?: Numberish
  descent?: Numberish
  diffuseConstant?: Numberish
  direction?: Numberish
  display?: Numberish
  divisor?: Numberish
  'dominant-baseline'?: Numberish
  dur?: Numberish
  dx?: Numberish
  dy?: Numberish
  edgeMode?: Numberish
  elevation?: Numberish
  'enable-background'?: Numberish
  end?: Numberish
  exponent?: Numberish
  externalResourcesRequired?: Numberish
  fill?: string
  'fill-opacity'?: Numberish
  'fill-rule'?: 'nonzero' | 'evenodd' | 'inherit'
  filter?: string
  filterRes?: Numberish
  filterUnits?: Numberish
  'flood-color'?: Numberish
  'flood-opacity'?: Numberish
  focusable?: Numberish
  'font-family'?: string
  'font-size'?: Numberish
  'font-size-adjust'?: Numberish
  'font-stretch'?: Numberish
  'font-style'?: Numberish
  'font-variant'?: Numberish
  'font-weight'?: Numberish
  format?: Numberish
  from?: Numberish
  fx?: Numberish
  fy?: Numberish
  g1?: Numberish
  g2?: Numberish
  'glyph-name'?: Numberish
  'glyph-orientation-horizontal'?: Numberish
  'glyph-orientation-vertical'?: Numberish
  glyphRef?: Numberish
  gradientTransform?: string
  gradientUnits?: string
  hanging?: Numberish
  'horiz-adv-x'?: Numberish
  'horiz-origin-x'?: Numberish
  href?: string
  ideographic?: Numberish
  'image-rendering'?: Numberish
  in2?: Numberish
  in?: string
  intercept?: Numberish
  k1?: Numberish
  k2?: Numberish
  k3?: Numberish
  k4?: Numberish
  k?: Numberish
  kernelMatrix?: Numberish
  kernelUnitLength?: Numberish
  kerning?: Numberish
  keyPoints?: Numberish
  keySplines?: Numberish
  keyTimes?: Numberish
  lengthAdjust?: Numberish
  'letter-spacing'?: Numberish
  'lighting-color'?: Numberish
  limitingConeAngle?: Numberish
  local?: Numberish
  'marker-end'?: string
  markerHeight?: Numberish
  'marker-mid'?: string
  'marker-start'?: string
  markerUnits?: Numberish
  markerWidth?: Numberish
  mask?: string
  maskContentUnits?: Numberish
  maskUnits?: Numberish
  mathematical?: Numberish
  mode?: Numberish
  numOctaves?: Numberish
  offset?: Numberish
  opacity?: Numberish
  operator?: Numberish
  order?: Numberish
  orient?: Numberish
  orientation?: Numberish
  origin?: Numberish
  overflow?: Numberish
  'overline-position'?: Numberish
  'overline-thickness'?: Numberish
  'paint-order'?: Numberish
  'panose-1'?: Numberish
  pathLength?: Numberish
  patternContentUnits?: string
  patternTransform?: Numberish
  patternUnits?: string
  'pointer-events'?: Numberish
  points?: string
  pointsAtX?: Numberish
  pointsAtY?: Numberish
  pointsAtZ?: Numberish
  preserveAlpha?: Numberish
  preserveAspectRatio?: string
  primitiveUnits?: Numberish
  r?: Numberish
  radius?: Numberish
  refX?: Numberish
  refY?: Numberish
  renderingIntent?: Numberish
  repeatCount?: Numberish
  repeatDur?: Numberish
  requiredExtensions?: Numberish
  requiredFeatures?: Numberish
  restart?: Numberish
  result?: string
  rotate?: Numberish
  rx?: Numberish
  ry?: Numberish
  scale?: Numberish
  seed?: Numberish
  'shape-rendering'?: Numberish
  slope?: Numberish
  spacing?: Numberish
  specularConstant?: Numberish
  specularExponent?: Numberish
  speed?: Numberish
  spreadMethod?: string
  startOffset?: Numberish
  stdDeviation?: Numberish
  stemh?: Numberish
  stemv?: Numberish
  stitchTiles?: Numberish
  'stop-color'?: string
  'stop-opacity'?: Numberish
  'strikethrough-position'?: Numberish
  'strikethrough-thickness'?: Numberish
  string?: Numberish
  stroke?: string
  'stroke-dasharray'?: Numberish
  'stroke-dashoffset'?: Numberish
  'stroke-linecap'?: 'butt' | 'round' | 'square' | 'inherit'
  'stroke-linejoin'?: 'miter' | 'round' | 'bevel' | 'inherit'
  'stroke-miterlimit'?: Numberish
  'stroke-opacity'?: Numberish
  'stroke-width'?: Numberish
  surfaceScale?: Numberish
  systemLanguage?: Numberish
  tableValues?: Numberish
  targetX?: Numberish
  targetY?: Numberish
  'text-anchor'?: string
  'text-decoration'?: Numberish
  textLength?: Numberish
  'text-rendering'?: Numberish
  to?: Numberish
  transform?: string
  u1?: Numberish
  u2?: Numberish
  'underline-position'?: Numberish
  'underline-thickness'?: Numberish
  unicode?: Numberish
  'unicode-bidi'?: Numberish
  'unicode-range'?: Numberish
  'unitsPer-em'?: Numberish
  'v-alphabetic'?: Numberish
  values?: string
  'vector-effect'?: Numberish
  version?: string
  'vert-adv-y'?: Numberish
  'vert-origin-x'?: Numberish
  'vert-origin-y'?: Numberish
  'v-hanging'?: Numberish
  'v-ideographic'?: Numberish
  viewBox?: string
  viewTarget?: Numberish
  visibility?: Numberish
  'v-mathematical'?: Numberish
  widths?: Numberish
  'word-spacing'?: Numberish
  'writing-mode'?: Numberish
  x1?: Numberish
  x2?: Numberish
  x?: Numberish
  xChannelSelector?: string
  'x-height'?: Numberish
  xlinkActuate?: string
  xlinkArcrole?: string
  xlinkHref?: string
  xlinkRole?: string
  xlinkShow?: string
  xlinkTitle?: string
  xlinkType?: string
  xmlns?: string
  y1?: Numberish
  y2?: Numberish
  y?: Numberish
  yChannelSelector?: string
  z?: Numberish
  zoomAndPan?: string
}

interface IntrinsicElementAttributes {
  a: AnchorHTMLAttributes
  abbr: HTMLAttributes
  address: HTMLAttributes
  area: AreaHTMLAttributes
  article: HTMLAttributes
  aside: HTMLAttributes
  audio: AudioHTMLAttributes
  b: HTMLAttributes
  base: BaseHTMLAttributes
  bdi: HTMLAttributes
  bdo: HTMLAttributes
  blockquote: BlockquoteHTMLAttributes
  body: HTMLAttributes
  br: HTMLAttributes
  button: ButtonHTMLAttributes
  canvas: CanvasHTMLAttributes
  caption: HTMLAttributes
  cite: HTMLAttributes
  code: HTMLAttributes
  col: ColHTMLAttributes
  colgroup: ColgroupHTMLAttributes
  data: DataHTMLAttributes
  datalist: HTMLAttributes
  dd: HTMLAttributes
  del: DelHTMLAttributes
  details: DetailsHTMLAttributes
  dfn: HTMLAttributes
  dialog: DialogHTMLAttributes
  div: HTMLAttributes
  dl: HTMLAttributes
  dt: HTMLAttributes
  em: HTMLAttributes
  embed: EmbedHTMLAttributes
  fieldset: FieldsetHTMLAttributes
  figcaption: HTMLAttributes
  figure: HTMLAttributes
  footer: HTMLAttributes
  form: FormHTMLAttributes
  h1: HTMLAttributes
  h2: HTMLAttributes
  h3: HTMLAttributes
  h4: HTMLAttributes
  h5: HTMLAttributes
  h6: HTMLAttributes
  head: HTMLAttributes
  header: HTMLAttributes
  hgroup: HTMLAttributes
  hr: HTMLAttributes
  html: HtmlHTMLAttributes
  i: HTMLAttributes
  iframe: IframeHTMLAttributes
  img: ImgHTMLAttributes
  input: InputHTMLAttributes
  ins: InsHTMLAttributes
  kbd: HTMLAttributes
  keygen: KeygenHTMLAttributes
  label: LabelHTMLAttributes
  legend: HTMLAttributes
  li: LiHTMLAttributes
  link: LinkHTMLAttributes
  main: HTMLAttributes
  map: MapHTMLAttributes
  mark: HTMLAttributes
  menu: MenuHTMLAttributes
  meta: MetaHTMLAttributes
  meter: MeterHTMLAttributes
  nav: HTMLAttributes
  noindex: HTMLAttributes
  noscript: HTMLAttributes
  object: ObjectHTMLAttributes
  ol: OlHTMLAttributes
  optgroup: OptgroupHTMLAttributes
  option: OptionHTMLAttributes
  output: OutputHTMLAttributes
  p: HTMLAttributes
  param: ParamHTMLAttributes
  picture: HTMLAttributes
  pre: HTMLAttributes
  progress: ProgressHTMLAttributes
  q: QuoteHTMLAttributes
  rp: HTMLAttributes
  rt: HTMLAttributes
  ruby: HTMLAttributes
  s: HTMLAttributes
  samp: HTMLAttributes
  script: ScriptHTMLAttributes
  section: HTMLAttributes
  select: SelectHTMLAttributes
  small: HTMLAttributes
  source: SourceHTMLAttributes
  span: HTMLAttributes
  strong: HTMLAttributes
  style: StyleHTMLAttributes
  sub: HTMLAttributes
  summary: HTMLAttributes
  sup: HTMLAttributes
  table: TableHTMLAttributes
  template: HTMLAttributes
  tbody: HTMLAttributes
  td: TdHTMLAttributes
  textarea: TextareaHTMLAttributes
  tfoot: HTMLAttributes
  th: ThHTMLAttributes
  thead: HTMLAttributes
  time: TimeHTMLAttributes
  title: HTMLAttributes
  tr: HTMLAttributes
  track: TrackHTMLAttributes
  u: HTMLAttributes
  ul: HTMLAttributes
  var: HTMLAttributes
  video: VideoHTMLAttributes
  wbr: HTMLAttributes
  webview: WebViewHTMLAttributes

  // SVG
  svg: SVGAttributes

  animate: SVGAttributes
  animateMotion: SVGAttributes
  animateTransform: SVGAttributes
  circle: SVGAttributes
  clipPath: SVGAttributes
  defs: SVGAttributes
  desc: SVGAttributes
  ellipse: SVGAttributes
  feBlend: SVGAttributes
  feColorMatrix: SVGAttributes
  feComponentTransfer: SVGAttributes
  feComposite: SVGAttributes
  feConvolveMatrix: SVGAttributes
  feDiffuseLighting: SVGAttributes
  feDisplacementMap: SVGAttributes
  feDistantLight: SVGAttributes
  feDropShadow: SVGAttributes
  feFlood: SVGAttributes
  feFuncA: SVGAttributes
  feFuncB: SVGAttributes
  feFuncG: SVGAttributes
  feFuncR: SVGAttributes
  feGaussianBlur: SVGAttributes
  feImage: SVGAttributes
  feMerge: SVGAttributes
  feMergeNode: SVGAttributes
  feMorphology: SVGAttributes
  feOffset: SVGAttributes
  fePointLight: SVGAttributes
  feSpecularLighting: SVGAttributes
  feSpotLight: SVGAttributes
  feTile: SVGAttributes
  feTurbulence: SVGAttributes
  filter: SVGAttributes
  foreignObject: SVGAttributes
  g: SVGAttributes
  image: SVGAttributes
  line: SVGAttributes
  linearGradient: SVGAttributes
  marker: SVGAttributes
  mask: SVGAttributes
  metadata: SVGAttributes
  mpath: SVGAttributes
  path: SVGAttributes
  pattern: SVGAttributes
  polygon: SVGAttributes
  polyline: SVGAttributes
  radialGradient: SVGAttributes
  rect: SVGAttributes
  stop: SVGAttributes
  switch: SVGAttributes
  symbol: SVGAttributes
  text: SVGAttributes
  textPath: SVGAttributes
  tspan: SVGAttributes
  use: SVGAttributes
  view: SVGAttributes
}

export interface Events {
  // clipboard events
  onCopy: ClipboardEvent
  onCut: ClipboardEvent
  onPaste: ClipboardEvent

  // composition events
  onCompositionend: CompositionEvent
  onCompositionstart: CompositionEvent
  onCompositionupdate: CompositionEvent

  // drag drop events
  onDrag: DragEvent
  onDragend: DragEvent
  onDragenter: DragEvent
  onDragexit: DragEvent
  onDragleave: DragEvent
  onDragover: DragEvent
  onDragstart: DragEvent
  onDrop: DragEvent

  // focus events
  onFocus: FocusEvent
  onFocusin: FocusEvent
  onFocusout: FocusEvent
  onBlur: FocusEvent

  // form events
  onChange: Event
  onBeforeinput: Event
  onInput: Event
  onReset: Event
  onSubmit: Event
  onInvalid: Event

  // image events
  onLoad: Event
  onError: Event

  // keyboard events
  onKeydown: KeyboardEvent
  onKeypress: KeyboardEvent
  onKeyup: KeyboardEvent

  // mouse events
  onAuxclick: MouseEvent
  onClick: MouseEvent
  onContextmenu: MouseEvent
  onDblclick: MouseEvent
  onMousedown: MouseEvent
  onMouseenter: MouseEvent
  onMouseleave: MouseEvent
  onMousemove: MouseEvent
  onMouseout: MouseEvent
  onMouseover: MouseEvent
  onMouseup: MouseEvent

  // media events
  onAbort: Event
  onCanplay: Event
  onCanplaythrough: Event
  onDurationchange: Event
  onEmptied: Event
  onEncrypted: Event
  onEnded: Event
  onLoadeddata: Event
  onLoadedmetadata: Event
  onLoadstart: Event
  onPause: Event
  onPlay: Event
  onPlaying: Event
  onProgress: Event
  onRatechange: Event
  onSeeked: Event
  onSeeking: Event
  onStalled: Event
  onSuspend: Event
  onTimeupdate: Event
  onVolumechange: Event
  onWaiting: Event

  // selection events
  onSelect: Event

  // UI events
  onScroll: UIEvent

  // touch events
  onTouchcancel: TouchEvent
  onTouchend: TouchEvent
  onTouchmove: TouchEvent
  onTouchstart: TouchEvent

  // pointer events
  onPointerdown: PointerEvent
  onPointermove: PointerEvent
  onPointerup: PointerEvent
  onPointercancel: PointerEvent
  onPointerenter: PointerEvent
  onPointerleave: PointerEvent
  onPointerover: PointerEvent
  onPointerout: PointerEvent

  // wheel events
  onWheel: WheelEvent

  // animation events
  onAnimationstart: AnimationEvent
  onAnimationend: AnimationEvent
  onAnimationiteration: AnimationEvent

  // transition events
  onTransitionend: TransitionEvent
  onTransitionstart: TransitionEvent
}

type EventHandlers<E> = {
  [K in keyof E]?: E[K] extends Function ? E[K] : (payload: E[K]) => void
}

// use namespace import to avoid collision with generated types which use
// named imports.
import * as RuntimeCore from '@vue/runtime-core'

type ReservedProps = {
  key?: string | number | symbol
  ref?: RuntimeCore.VNodeRef
  ref_for?: boolean
  ref_key?: string
}

type ElementAttrs<T> = T & ReservedProps

type NativeElements = {
  [K in keyof IntrinsicElementAttributes]: ElementAttrs<
    IntrinsicElementAttributes[K]
  >
}

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass {
      $props: {}
    }
    interface ElementAttributesProperty {
      $props: {}
    }
    interface IntrinsicElements extends NativeElements {
      // allow arbitrary elements
      // @ts-ignore suppress ts:2374 = Duplicate string index signature.
      [name: string]: any
    }
    interface IntrinsicAttributes extends ReservedProps {}
  }
}

// suppress ts:2669
export {}

// Note: this file is auto concatenated to the end of the bundled d.ts during
// build.

declare module '@vue/reactivity' {
  export interface RefUnwrapBailTypes {
    runtimeDOMBailTypes: Node | Window
  }
}
`;let Rn=!0,bn;async function ni(){const t=await j(()=>import("./editor.main.d83c2780.CpOutwyU.js"),[]).then(n=>n.e);return Rn&&typeof bn=="function"&&(Rn=!1,bn(t)),t.languages.typescript.typescriptDefaults.setCompilerOptions({target:t.languages.typescript.ScriptTarget.Latest,allowNonTsExtensions:!0,moduleResolution:t.languages.typescript.ModuleResolutionKind.NodeJs,module:t.languages.typescript.ModuleKind.CommonJS,noEmit:!0,esModuleInterop:!0,jsx:t.languages.typescript.JsxEmit.Preserve,allowJs:!0}),t.languages.typescript.typescriptDefaults.setDiagnosticsOptions({noSemanticValidation:!1,noSyntaxValidation:!1}),t.languages.typescript.typescriptDefaults.addExtraLib(Ua,"jsx:type"),t.languages.typescript.typescriptDefaults.addExtraLib(`
    declare module 'vue' { ${La} }
  `,"ts:vue"),await Promise.all([(async()=>{const[{default:n},{default:e},{default:r}]=await Promise.all([j(()=>import("./editor.worker.9c35f395.DBCG97RU.js"),[]),j(()=>import("./html.worker.b57725c2.Cqm1ft0w.js"),[]),j(()=>import("./ts.worker.3260b66b.B6ognq5f.js"),[])]);window.MonacoEnvironment={getWorker(o,i){return i==="html"||i==="handlebars"||i==="razor"?new e:i==="typescript"||i==="javascript"?new r:new n}}})()]),t}function ka(t){bn=t||null}const ja=Symbol(),K={};function cn(t,n){K[t]=n}function ei(t){const n=window;return n.importMaps||(n.importMaps=K),t=Ha(t),t=t.replace(/import(.*?)from\s+['"](.*?)['"]/g,(e,r,o)=>{const i=o,l=K[i];return l?(K[`${i}`]||(K[`${i}`]=l),`const ${r} = importMaps['${o}']`):e}),t}function Ha(t){return t.replace(/import(.*?)from\s+['"]vue['"]/g,(n,e)=>(e=e.replace(/\sas\s/g,":"),`const ${e} = _vue`)).replace(/import 'vue'/g,"")}const ti=()=>Math.random().toString(36).slice(2,12),Ba=t=>typeof t=="object"&&t!==null,Fa=t=>function(n,e,r,...o){return Array.isArray(r)&&(r=r.map(i=>Array.isArray(i)?i:Ba(i)&&!i.__v_isVNode?t.createTextVNode(String(i)):i)),t.createVNode(n,e,r,...o)},Wa=function(t,n){n=Object.assign({ms:300,defaultDirection:"row"},n);const e=Ln(()=>j(()=>import("./Demo.10a78ca5.Ba2j0Sfj.js"),[]));t.component("Demo",e),t.config.errorHandler=function(r){console.error(r)},Va(Object.assign({},En,{createVNode:Fa(En)})),_a(t),t.provide(ja,n),ka(n.onMonacoCreated)},Ya=`declare module "mxdraw" {
  import * as three from 'three';
  import { Color } from 'three';
  
  /**
   * 加载MxDraw库的核心代码 才能使用Mx的其他模块
   * @returns Promise<{@link MxFun}>
   * @example
   * \`\`\`
   * Mx.loadCoreCode().then(()=> console.log("加载完成", Mx.MxFun))
   * \`\`\`
   */
   function loadCoreCode(): Promise<void>;
  
  type EventType = string | symbol;
  type PubSubEvent = Record<EventType, (...ages: any) => any>;
   class PubSub<Events extends PubSubEvent = PubSubEvent> {
      events: {
          [x: EventType]: Events[keyof Events][];
      };
      constructor();
      /**
       * 订阅
       * @param event 事件名称
       * @param callback 事件回调
       */
      on<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
      /**
       * 发布
       * @param event 事件名称
       * @param data 载荷
       */
      emit<Key extends keyof Events>(event: Key | number, ...data: Parameters<Events[Key]>): void;
      /**
       * 销毁事件
       * @param event 事件名称
       * @param callback 事件方法
       */
      off<Key extends keyof Events>(event: Key, callback?: Events[keyof Events]): void;
  }
  
  type RendererEventsType = {
      "click": () => void;
      "hover": () => void;
      "mousemove": () => void;
      "mouseout": () => void;
      "mouseover": () => void;
      "mousedown": () => void;
      "mouseup": () => void;
  };
  /**
   * Node 节点
   * @type E 事件类型 { "name": { name: string, id:number } } key-val key对应事件名称 val 对应回调值
   * @example
   * \`\`\`ts
   * class ObjClass extends Node<{"added": { node: Node, id: number }}> {}
   * \`\`\`
   * */
   class Node<E extends PubSubEvent = PubSubEvent, T extends Node<E, Node<E, any>> = Node<E, Node<E, any>>> extends PubSub<E> {
      /** 它的父节点 */
      parent: (this | T | null);
      /** 它的子节点集合 */
      children: (this | T)[];
      /** 添加子节点 */
      add(...ages: (this | T)[]): this;
      /** 移除子节点 **/
      remove(...ages: (this | T)[]): this;
      /** 从父节点中移除 */
      removeFromParent(): this;
      /** 清除 children */
      clear(): this;
      /** 根据属性名称找到对应的Node节点
       * @param name 属性名称
       * @param value 属性值
       * @example
       * \`\`\`ts
       * new Node().getNodeByProperty("id", "23548")
       * \`\`\`
       *   */
      getNodeByProperty<V = any>(name: string, value: V): (this | T) | undefined;
      /** 根据属性名称找到对应的Node节点
      * @param name 属性名称
      * @param value 属性值
      * @example
      * \`\`\`ts
      * new Node().getNodeByProperty("id", "23548")
      * \`\`\`
      *   */
      getNodesByProperty<V = any>(name: string, value: V): (T | this)[];
      /** 遍历它的所有子节点包括孙子节点，直到它包含的节点全部遍历完成并都执行传入的方法
       * @param callback 回调函数
       *  */
      traverse(callback: (node: this) => void): void;
      /***
       * 让它的父节点依次冒泡执行传入的方法的方法
       * @param callback 回调函数，第一个参数是父节点, callback的返回值为false 将停止继续传递
       * */
      traverseParent<V extends (Node<any, any>) = this>(callback: (node: V) => boolean | void): void;
      /***
       * 发布
       * @param event — 事件名称
       * @param data — 载荷
      **/
      emit<Key extends keyof E>(event: number | Key, ...data: Parameters<E[Key]>): void;
  }
   class RenderOrderNode<E extends PubSubEvent = PubSubEvent, T extends Node<any, any> = Node<any, any>> extends Node<E & RendererEventsType, T> {
      constructor();
      /**
     * 显示顺序
     * */
      renderOrder: number;
      /**
       * 设置显示顺序 (通过显示顺序控制图层)
       * @param renderOrder 显示顺序
       */
      setRenderOrder(renderOrder: number): void;
      /**
       * 得到显示顺序
       * @returns number
       */
      getRenderOrder(): number;
      /**
       * top 同层级下最上层
       * **/
      top(): void;
      /**
       * bottom 同层级下最上层
       * */
      bottom(): void;
      /** 恢复默认显示顺序 */
      restoreDefaultRenderOrder(): void;
  }
  
  /** @module McGiWorldDrawType*/
  /**
   * 动态绘制类型
   * @example \`\`\`typescript
  
   * \`\`\`
   */
   enum McGiWorldDrawType {
      /** 正常绘制 */
      kWorldDraw = 1,
      /** 动态拖动的绘制 */
      kDynDragDraw = 2,
      /** 对选择高亮的绘制 */
      kSelectDraw = 3
  }
  
  /**
   * 动态绘制类型
   * @example \`\`\`typescript
  
   * \`\`\`
   */
   enum MxCloneType {
      /** 正常Clone */
      kClone = 1,
      /** 动态拖动Clone */
      kDragClone = 2,
      /** 数据归档 */
      kMxFileClone = 3,
      /** 保存数据到DWG文件 */
      kSaveDwgClone = 4
  }
  /**
   * 命令标记
   * @example \`\`\`typescript
  
   * \`\`\`
   */
   enum MxCommandFlag {
      MCRX_CMD_MODAL = 0,
      MCRX_CMD_TRANSPARENT = 1,
      MCRX_CMD_NO_UNDO_MARKER = 2,
      MCRX_CMD_NOPRV = 4,
      MCRX_CMD_NO_RECORD_PRVCMD = 8,
      MCRX_CMD_NO_CLEAR_SELECT = 16,
      MCRX_CMD_NO_CLEAR_SELECT_GRIP_POINT = 32
  }
  /**
   * 控件对象缺省的绘制顺序
   * @example \`\`\`typescript
  
   * \`\`\`
   */
   enum MxDefaultRenderOrder {
      kCADMeshRenderOrder = 10,
      kCADCurveRenderOrder = 20,
      kMxEntityRenderOrder = 30,
      kGripRenderOrder = 110,
      kDynJigRenderOrder = 120
  }
  /**
   * 交互操作，需要的输入的触摸类型.
   * @example \`\`\`typescript
   * \`\`\`
   */
   enum InputToucheType {
      kGetBegan = 1,
      kGetEnd = 2
  }
  type MxColorType = number | string | THREE.Color;
  type UnstableColor = MxColorType | undefined;
  
  type MxType_MxCloneType = MxCloneType;
   const MxType_MxCloneType: typeof MxCloneType;
  type MxType_MxCommandFlag = MxCommandFlag;
   const MxType_MxCommandFlag: typeof MxCommandFlag;
  type MxType_MxDefaultRenderOrder = MxDefaultRenderOrder;
   const MxType_MxDefaultRenderOrder: typeof MxDefaultRenderOrder;
  type MxType_InputToucheType = InputToucheType;
   const MxType_InputToucheType: typeof InputToucheType;
  type MxType_MxColorType = MxColorType;
  type MxType_UnstableColor = UnstableColor;
   namespace MxType {
    export {
      MxType_MxCloneType as MxCloneType,
      MxType_MxCommandFlag as MxCommandFlag,
      MxType_MxDefaultRenderOrder as MxDefaultRenderOrder,
      MxType_InputToucheType as InputToucheType,
      MxType_MxColorType as MxColorType,
      MxType_UnstableColor as UnstableColor,
    };
  }
  
  /** @module McGiWorldDraw*/
  
  /**
   * McGiWorldDraw 用于构建一个动态绘制回调对象的规范接口
   * @abstract 是  {@link MxDbEntity.worldDraw }必须实现的抽象回调方法中的回调对象 通过回调对象完成一些动态绘制任务
   * @example \`\`\`typescript
   *
   * \`\`\`
   */
  interface McGiWorldDraw {
      /**
       * 得到WorldDraw的绘制类型.
       * @returns McGiWorldDrawType
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getType(): McGiWorldDrawType;
      /**
       * 绘制一个Three.js对象
       * @param ent Three.js对象
       * @returns void
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawEntity(ent: THREE.Object3D): void;
      /**
       * 返回动态绘制的控件对像
       * @returns MxDrawObject
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getMxObject(): MxDrawObject;
      /**
       * 设置绘制颜色
       * @param iColor 颜色值
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setColor(iColor: UnstableColor): void;
      /**
       * 返回绘制颜色
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getColor(): number;
      /**
       * 设置绘制的线宽
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setLineWidth(iLineWidth: number): void;
      /**
       * 返回绘制的线宽
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getLineWidth(): number;
      /**
       * 绘制直线
       * @param pt1 第一个点 THREE.Vector3
       * @param pt2 第二个点
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawLine(pt1: THREE.Vector3 | number, pt2: THREE.Vector3 | number, x2?: number, y2?: number): void;
      /**
       * 绘制连续的直线
       * @param points 点数组
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawLines(points: THREE.Vector3[] | THREE.Vector2[]): void;
      /**
       * 根据几何数据绘制直线
       * @param points 点数组
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawGeometryLines(geometry: THREE.Geometry): void;
      /**
       * 绘制圆
       * @param cen 圆的中心点 THREE.Vector3
       * @param dRadius 圆的半径
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawCircle(cen: THREE.Vector3, dRadius: number): void;
      /**
       * 绘文本
       * @param sText 文本信息
       * @param iSize 文字大小
       * @param dAngle  角度
       * @param pt 位置
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawText(sText: string, iSize: number, dAngle: number, pt: THREE.Vector3, width?: number, callGetFontStyle?: (iFontSize: number) => string): THREE.Sprite | null;
      /**
       * 设置DrawOrder,默认值为100.
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setRenderOrder(iRenderOrder: number): void;
      /**
       * 得到DrawOrder
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getRenderOrder(): number;
      /**
       * 设置宽度单位是屏幕像素，默认是屏幕像素，设置false,单位是Threejs坐标。
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setLineWidthByPixels(isPixels: boolean): void;
      /**
       * 得到宽度单位
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getLineWidthIsPixels(): boolean;
      /**
       * 设置虚线显示数据。
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setDash(dDashArray: number, dDashRatio: number): void;
      /**
       * 得到虚线显示数据。
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getDash(): any;
      /**
       * 设置虚线显示
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setDashLineDisplay(isDashLine: boolean): void;
      /**
       *是否虚线显示
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      isDashLineDisplay(): boolean;
      /**
       *绘制选择线。
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawSelectLine(pt1: THREE.Vector3 | number, pt2: THREE.Vector3 | number, x2?: number, y2?: number): void;
      /**
       * 设置变换矩阵
       * @param
       */
      setMatrix(matrix: THREE.Matrix4 | null): void;
      /**
       * 返回变换矩阵
       * @param
       */
      getMatrix(): THREE.Matrix4 | null;
      /**
       *设置透明度
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setOpacity(opacity: number): void;
      /**
       *返回透明度
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      getOpacity(): number;
      /**
       *绘制纯色填充
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      drawSolid(points: THREE.Vector3[]): void;
      /**
       *把一个对象的绘图属性设置到当前绘图上下文
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setupForEntity(ent: MxDbEntity): void;
      /**
       *设置drawEntity函数，绘制的three.js对象，附加一个扩展数据，方便在后续选择对象，得到该扩展数据.、
       *只会对一次的drawEntity调用有效.
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       *
       */
      setXData(xData: any): void;
  }
  
  type MxDbEntityEventsType = {
      onStartGripEidt: () => void;
      onEndGripEidt: () => void;
  };
  /**
   * MxDbEntity 用于构建一个自定义对象的抽象类(该类无法实例化 请通过继承的方式对其抽象方法进行实现)
   * @description MxDbEntity 属于 abstract class(抽象类) 主要用途是通过继承这个类实现一个用于动态绘制的图形对象
   * 继承实现这个类必须实现的抽象方法：（方法名称前有'Abstract'标签就是必须实现的方法）
   * @example \`\`\`typescript
   * import THREE from "three"
   * import { McGiWorldDraw, MxDbEntity } from "mxdraw"
   * class MxLineEntity extends MxDbEntity {
   *    constructor() {
   *       super(); // 在派生类的构造函数中必须调用 super()
   *    }
   *    private pt1: THREE.Vector3 = new THREE.Vector3();
   *    private pt2: THREE.Vector3 = new THREE.Vector3();
   *    worldDraw(pWorldDraw: McGiWorldDraw) {
   *        pWorldDraw.drawLine(this.pt1,this.pt2);
   *    }
   *    ...
   * }
   * \`\`\`
   */
  type EntityEvent = MxDbEntityEventsType;
   abstract class MxDbEntity extends RenderOrderNode<EntityEvent, MxDbEntity> {
      constructor();
      /** 该类注册的cmd命令名称 */
      static cmd: string;
      /** 该类注册的cmd命令绘制函数 */
      static draw: Function;
      /** 该类是否已注册 */
      static isRegister: boolean;
      /** 注册该类的cmd命令和初始化 (引入该类时自动注册 当该类的isRegister为ture时表示已经注册) */
      static register(): void;
      /** 使用该类的cmd命令 执行默认的绘制功能 */
      static use<T extends MxDbEntity = MxDbEntity>(callback?: (obj: T) => any, data?: any): Promise<T>;
      /**
       * 颜色值
       * */
      color: UnstableColor;
      /**
       * 设置透明度 0 ~ 1,1表示完全不透明，0表示全透明.
       * */
      opacity: number;
      /**
       * 该对象是否可见
       * */
      visible: boolean;
      /**
       * 用户自定义数据.
       * */
      userData: {
          [key: string]: any;
      };
      protected sGuid: string;
      dLineWidth: number;
      lineWidthByPixels: boolean;
      dDashArray: number;
      dDashRatio: number;
      layer: string;
      protected use_smallcoord_display: boolean;
      abstract getTypeName(): string;
      initGuid(guid: string): void;
      toSmallcoord2(mxobj: MxDrawObject, x: number, y: number, z?: number): THREE.Vector3;
      toSmallcoord(mxobj: MxDrawObject, pt: THREE.Vector3): THREE.Vector3;
      isUseSmallcoordDisplay(): boolean;
      setUseSmallcoordDisplay(use_smallcoord_display: boolean): void;
      /**
       * 自定义对象的绘制函数。在方法中定义如何绘制图形
       * @param  pWorldDraw 绘制对象{@link McGiWorldDraw }
       * @returns void
       */
      abstract worldDraw(pWorldDraw: McGiWorldDraw): void;
      /**
       * 返回自定义对象的夹点.
       * @param
       * @returns Array<THREE.Vector3>
       */
      abstract getGripPoints(): Array<THREE.Vector3>;
      /**
       * 移动自定义对象的夹点.
       * @param
       * @returns boolean
       */
      abstract moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      /**
       * 自定义对象数据输入，辅助函数.
       * @param obj 数据对象
       * @param aryProp 属性名称列表
       * @param hooks.getVal 交互数据输入钩子函数 return null | undefined 默认深拷贝 ; return Value 返回数据
       * @param hooks.getCacheVal 归档数据构子函数 return null | undefined 默认深拷贝 ; return Value 返回数据
       * @returns boolean
       * @example
       * \`\`\` typescript
       *  class MxLine extends MxDbEntity {
       *    dwgIn(obj) {
       *        // 必须调用 同步自定义数据对象输入
       *       this.dwgInHelp(obj,["xxx"])
       *    }
       *  }
       * \`\`\`
       */
      protected dwgInHelp<T extends (string | {
          key: string;
          default: any;
      })[]>(obj: any, aryProp: T, hooks?: {
          getVal?: (v: any) => any;
          getCacheVal?: (v: any) => any;
      }): boolean;
      /**
       * 自定义对象数据输出 辅助函数.
       * @param
       * @returns object
       * @example
       * \`\`\` typescript
       *  class MxLine extends MxDbEntity {
       *    dwgOut(obj) {
       *        // 必须调用 同步自定义数据对象输出
       *       this.dwgOutHelp(obj,["xxx"])
       *    }
       *  }
       * \`\`\`
       */
      protected dwgOutHelp(obj: any, aryProp: (string | {
          key: string;
          default: any;
      })[]): any;
      /**
       * 新创建一个自定义对象 (默认调用该对象的构造函数来创建新的对象)
       * @param { T } options
       * @returns MxDbEntity
       */
      create(options?: {}): any;
      /**
       * 自定义对象数据输入，必须要实现该函数
       * @param
       * @returns boolean
       * @example
       * \`\`\` typescript
       *  class MxLine extends MxDbEntity {
       *    dwgIn(obj) {
       *        // 必须调用 同步自定义数据对象输入
       *       this.onDwgIn(obj)
       *    }
       *  }
       * \`\`\`
       */
      abstract dwgIn(obj: {
          type: MxType.MxCloneType;
          [x: string]: any;
      }): boolean;
      /**
       * 自定义对象数据输出，必须要实现该函数
       * @param
       * @returns object
       * @example
       * \`\`\` typescript
       *  class MxLine extends MxDbEntity {
       *    dwgOut(obj) {
       *        // 必须调用 同步自定义数据对象输出
       *       this.onDwgOut(obj)
       *    }
       *  }
       * \`\`\`
       */
      abstract dwgOut(obj: {
          type: MxType.MxCloneType;
          [x: string]: any;
      }): object;
      /**
       * 自定义实体的矩阵 坐标变换 (需要重写该方法实现如果通过矩阵对自定义实体进行操作 默认不会进行任何操作)
       * @param _mat THREE.Matrix4 变化矩阵
       * @returns void
       */
      transformBy(_mat: THREE.Matrix4): void;
      /**
       * 缩放对像
       * @returns void
       */
      transformScale(ptBase: THREE.Vector3, scale: number): void;
      /**
       * 旋转对象
       * @returns void
       */
      transformRotate(ptBase: THREE.Vector3, angle: number): void;
      /**
       * 移动对象
       * @returns void
       */
      transformMove(ptMove: THREE.Vector3): void;
      /**
       * 返回对象最小外包.
       * @param
       * @returns void
       */
      getGeomExtents(): THREE.Box3 | null;
      /**
       * 对一个点到这个对象的最近点 。
       * iOperationType == 0正常操作求值最近点.
       * iOperationType == 1点选择操作求值最近点.
       * @param
       * @returns void
       */
      getClosestPointTo(pt: THREE.Vector3, iOperationType?: number): THREE.Vector3 | null;
      private getImp;
      /**
       * 更新显示
       * @param 为true 重绘时立即更新显示,默认值false
       * @returns boolean
    
       */
      setNeedUpdateDisplay(isImmediate?: boolean): boolean;
      /**
       * 返回对象所在的控件对象。
       * @returns {@link MxDrawObject}
       */
      getMxObject(): MxDrawObject | null;
      /**
       * 视区显示比较发生成变化，继承类可以向应该事件，更新显示大小。
       * @returns boolean
       */
      protected onViewChange(): boolean;
      /**
       * 得到对象的id.
       * @returns number
       */
      objectId(): number;
      /**
       * 删除对象
       * @returns boolean
       */
      erase(): boolean;
      /**
       * 设置图层
       * @returns boolean
       */
      setLayer(layer: string): void;
      /**
       * 得到图层
       * @returns boolean
       */
      getLayer(): string;
      /**
       * 设置颜色
       * @param color 颜色值
       * @returns boolean
       */
      setColor(color: MxColorType): this;
      /**
       * 得到颜色
       * @returns boolean
       */
      getColor(): MxColorType;
      /**
       * 复制克隆对象。
       * @param type {@link MxType.MxCloneType} 传入参数区分是正常拷贝还是动态拷贝
       * @returns MxDbEntity
       */
      clone(type?: number): any;
      /**
       * 自定义对象内部数据输入同步（重写实现dwgIn抽象方法时 必须在实现中调用 this.onDwgIn(obj)）
       * @param obj dwgIn抽象方法的回调数据
       */
      protected onDwgIn(obj: any): void;
      /**
       * 自定义对象内部数据输出同步（重写实现dwgIn抽象方法 必须在实现中调用 this.onDwgIn(obj)
       * @param obj dwgOut抽象方法的回调数据
       */
      protected onDwgOut(obj: any): void;
      /**
       * 初始自定义对象的类型信息.(如果需要实现该图形对象的保存数据和恢复数据的功能, 需要在项目中初始化一次该图形对象的类)
       * @returns
       */
      rxInit(): void;
      /**
       * 设置显示顺序 (通过显示顺序控制图层)
       * @param renderOrder 显示顺序
       */
      setRenderOrder(renderOrder: number): void;
      /**
       * 得到显示顺序
       * @returns number
       */
      getRenderOrder(): number;
      /**
       * 设置线宽是否随像素
       * @returns number
       */
      setLineWidthByPixels(isPixels: boolean): this;
      /**
       * 线宽是否随像素
       * @returns number
       */
      getLineWidthByPixels(): boolean;
      /**
       * 设置线宽
       * @returns number
       */
      setLineWidth(dLineWidth: number): this;
      /**
       * 得到线宽
       * @returns number
       */
      getLineWidth(): number;
      /**
       * 返回曲线长度
       * @returns number
       */
      getGetLength(): number;
      /**
       * 设置虚线 +实线的长度.
       * dDashRatio确定虚线，与实线的比率.
       * @returns number
       */
      setDashLen(dashLen: number): this;
      /**
       * 设置虚线，与实线的比率
       * @returns number
       */
      setDashRatio(dDashRatio: number): this;
      /**
       * 设置实线虚线总段数 = 1 / dashArray
       * @returns number
       */
      setDashArray(dDashArray: number): this;
      /**
       * 设置虚线数据
       * @returns number
       */
      setDash(dDashArray: number, dDashRatio: number): this;
      /**
       * 得到虚线数据
       * @returns number
       */
      getDash(): any;
      /**
       * 设置虚线显示。并初始化一个默认值。
       * @returns number
       */
      setDashLineDisplay(isDashLine: boolean): this;
      /**
       * 是否虚线显示
       * @returns number
       */
      isDashLineDisplay(): boolean;
      /**
       * 返回唯一标识guid
       * @returns string
       */
      guid(): string;
      /**
       * 修改唯一标识guid
       * @returns string
       */
      setGuid(val: string): string;
      /**
       * 添加一个事件处理
       * @returns void
       */
      addEvent: <Key extends keyof MxDbEntityEventsType | keyof RendererEventsType>(event: Key, callback: (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void)) => void;
      /**
       * 删除一个事件处理
       * @returns void
       */
      removeEvent: <Key extends keyof MxDbEntityEventsType | keyof RendererEventsType>(event: Key, callback?: (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | (() => void) | undefined) => void;
      private callEvent;
      /**
       * 对象结束开始编辑
       * @returns string
       */
      onEndGripEidt(): void;
      /**
       * 对象开始开始编辑
       * @returns string
       */
      onStartGripEidt(): any;
      /**
       * 把一个对象变成一个json字体串.
       * @returns void
       */
      toJsonString(type?: MxType.MxCloneType): string;
      /**
       * 从一个josn字符串加载数据.
       * @returns void
       */
      fromJsonString(str: string): boolean;
  }
  
  /** @module MxDbGroup */
  /**
   * MxDbGroup 组对象对象.
   *
   */
  interface MxDbGroup {
      name(): string;
      append(id: number): void;
      clear(): void;
      getAll(): number[];
      has(id: number): boolean;
      delete(id: number): boolean;
  }
  
  /** @module MxDbLayerTableRecord */
  /**
   * MxDbDatabase 当前数据库对象.
   *
   */
  interface MxDbLayerTableRecord {
      getName(): string;
      setVisible(visible: boolean): void;
      getVisible(): boolean;
  }
  
  /** @module MxDbDatabase */
  
  /**
   * MxDbDatabase 当前数据库对象.
   *
   */
   class MxDbDatabase {
      private _mxDatabase;
      constructor(mxDatabase: any);
      /**
       * 添加图层.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      addLayer(layer: string): MxDbLayerTableRecord;
      /**
       * 显示或隐藏图层
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      showLayer(layer: string, isVisible: boolean): void;
      /**
       * 设置当前图层
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      setCurrentLayer(layer: string): MxDbLayerTableRecord;
      /**
       * 得到图层对象.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getLayer(layer: string): MxDbLayerTableRecord;
      /**
       * 添加对象到当前数据库.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      addEntity(ent: MxDbEntity): number;
      /**
       * 根据组名，得到组对象。
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getGroup(sName: string): MxDbGroup;
      /**
       * 添加一个组，如果组已经存在，直接返回该组。
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      addGroup(sName: string): MxDbGroup;
      /**
       * 得到一个实体所在的所有组。
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getEntityInGroup(id: number): MxDbGroup[];
      /**
       * 删除一个组.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      deleteGroup(sName: string): MxDbGroup;
  }
  
   class MxVueComandLine {
      [x: string]: any;
      msCmdText: string;
      msCmdDisplay: string;
      msCmdTip: string;
      mUpDisplayFun: ((data: {
          msCmdTip: string;
          msCmdDisplay: string;
          msCmdText: string;
      }) => void) | undefined;
      mxFunObject: undefined;
      mountUpDisplayFun: (fun: ((data: {
          msCmdTip: string;
          msCmdDisplay: string;
          msCmdText: string;
      }) => void) | undefined) => void;
      upDisplay(): void;
      setCmdText: (str: string) => void;
      getCmdText: () => string;
      getCmdDisplay: () => string;
      setCmdDisplay: (str: string) => void;
      addCmdDisplay: (str: string) => void;
      setCmdTip: (str: string) => void;
      getCmdTip: () => string;
  }
   class MxDynamicInput {
      [x: string]: any;
      mType: number;
      mPos: number[];
      mTip: string;
      mValue1: string;
      mValue1Pos: number[];
      mValue2: string;
      mValue2Pos: number[];
      misShow: boolean;
      focusIndex: number;
      mLockValues: Map<any, any>;
      mOnKeydownEvent: ((arg0: any) => number) | undefined;
      mFocusValue: string;
      setFocusValue: (value: string) => void;
      getFocusValue: () => string;
      setLockValues(index: number, value: string): void;
      getLockValues(index: number): string;
      getLockValuesMap(): Map<number, string>;
      clearLockValuesMap(): void;
      getFocusIndex: () => number;
      setFocusIndex: (index: number) => void;
      mountKeydownEvent: (fun: ((arg0: any) => number) | undefined) => void;
      onKeydown: (keyCode: any) => number;
      setType: (type: number) => void;
      getType: () => number;
      isShow: () => boolean;
      setPos: (pos: number[]) => void;
      setTip: (tip: string) => void;
      setValue1: (val: string) => void;
      getValue1: () => string;
      setValue1Pos: (pos: number[]) => void;
      setValue2: (val: string) => void;
      getValue2: () => string;
      setValue2Pos: (pos: number[]) => void;
      setShow: (isShow: boolean) => void;
      getData: () => {
          list: Array<{
              value: string;
              readonly: boolean;
              show?: boolean;
              pos?: number[];
          }>;
          pos: number[];
          postype: number;
      } | undefined;
  }
   class MxVueInterface {
      [x: string]: any;
      mSetCoordFun: ((coordTip: string) => void) | undefined;
      mUpdateCursorFun: ((cursorType: string) => void) | undefined;
      mOnKeydownEvent: ((arg0: any) => void) | undefined;
      mCursorType: string;
      mComandLine: MxVueComandLine;
      mdynamicInput: MxDynamicInput;
      mMxEvents: {
          [key: string]: Function;
      };
      mxFunObject: any;
      mFooterData: any;
      mLinetypeComboxData: any;
      mTitle: any;
      mTopButtonBarData: any;
      mMenuBarData: any;
      mRighButtonBarData: any;
      mLeftButtonBarData: any;
      mTitleButtonBarData: any;
      mLayerComboxData: any;
      mColorComboxData: any;
      mRightMenuSnapTypeFun: any;
      mTsWeb_MxUiVue: any;
      mountSetCoordFun: (fun: ((coordTip: string) => void) | undefined) => void;
      mountUpdateCursorFun: (fun: ((cursorType: string) => void) | undefined) => void;
      mountKeydownEvent: (fun: ((arg0: any) => void) | undefined) => void;
      onKeydown: (keyCode: number) => void;
      mountsetRightMenuSnapTypeFun: (fun: ((type: number) => void) | undefined) => void;
      setRightMenuOSmodeValue(lOSmode: number): void;
      executeOperations(lUiOperations: number): void;
      mountTsWeb_MxUiVue(mxuiVue: any): void;
      setTipCoord: (str: any) => void;
      getCursorType: () => string;
      setCursorType: (curtype: string | number) => void;
      getTitle: () => any;
      getTopButtonBarData: () => any;
      getMenuBarData: () => any;
      getRighButtonBarData: () => any;
      getLeftButtonBarData: () => any;
      getTitleButtonBarData: () => any;
      getLayerComboxData: () => any;
      getColorComboxData: () => any;
      getLinetypeComboxData: () => any;
      getFooterData: () => any;
      sendStringToExecute: (sCmd: any) => void;
      getCmdLine: () => MxVueComandLine;
      getDynamicInput: () => MxDynamicInput;
      init: (mxFun: any) => void;
      OnMxEvent: (event: {
          [x: string]: any;
      }) => void;
      mountMxEvent: (name: string | number, call: any) => void;
      getRightMenuType(isShift: boolean): number;
  }
  
  /**
   * 创建图纸展示控件实例
   * @param canvasId 提供一个canvas元素或者唯一的ID或者class类亦或者Jquery选中的元素
   * @paramType string | HTMLCanvasElement | JQuery<HTMLElement>
   * @param cadFile 提供要展示的图纸名称
   * @paramType string
   * @param callback 图纸展示控件创建完成后的回调函数 回调参数mxDraw和dom
   * @paramType function
   * @param isNewFile 是否新建文件
   * @paramType boolean
   * @return void
   * @example
   * \`\`\` typescript
   * Mx.MxFun.createMxObject({
   *   canvasId: "my-app",
   *   cadFile： "test2.dwg",
   *   callback(mxDraw, { canvas, canvasParent }) {
   *       console.log(mxDraw, canvas, canvasParent)
   *   },
   *   isNewFile: true
   * })
   * \`\`\`
   */
   function createMxObject(this: MxFunType, { canvasId, cadFile, callback, isNewFile, useWebsocket, isAutoResize, mapBox, isMxCAD, userIdentitySign, isCPPMxCAD }: {
      canvasId?: string;
      cadFile?: string | string[];
      callback?: (mxDraw: MxDrawObject, dom: {
          canvas: HTMLCanvasElement;
          canvasParent: CanvasParent;
      }) => void;
      isNewFile?: boolean;
      useWebsocket?: boolean;
      isAutoResize?: boolean;
      mapBox?: any;
      isMxCAD?: boolean;
      userIdentitySign?: string;
      isCPPMxCAD?: boolean;
  }): void;
  
   let mxUiData: MxVueInterface;
  interface MxFunClass {
      /** mxdraw引入初始化(一般用于在这个阶段注册命令) */
      on(name: 'init'): void;
      /**
       * 注册一个系统事件的监听
       * init 事件会在模块加载完成后触发。
       * */
      on(eventName: string, call: any): void;
  }
  /**
   * MxFun 模块
   * 导出库时已实例化，只需要调用实例方法 例如：
   * \`\`\`typescript
   *  Mx.MxFun.createMxObject
   * \`\`\`
   */
   class MxFunClass {
      createMxObject: typeof createMxObject;
      /**
       * 为程序设置服务器地址
       * @param MXSERVER 服务器地址
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.setMxServer("ws://localhost:5090")
       * \`\`\`
       */
      setMxServer(MXSERVER?: string): void;
      /**
       * 设置加载图片回调函数。
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      setloadImageFuction(call: (url: string, onLoad?: (texture: any) => void, onError?: (event: any) => void) => void): void;
      /**
       * MxFun 模块
       * mxdraw模块初始化同步
       */
      onInitSync(syncInit: () => Promise<boolean>): void;
      /**
       * @internal
       * 内部使用
       * \`\`\`
       */
      callSyncInitialization(): Promise<boolean>;
      /**
       * 屏幕转文档坐标
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 文档坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.screenCoord2Doc(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      screenCoord2Doc(x: number | THREE.Vector3, y?: number): THREE.Vector3;
      /**
       * 文档转屏幕坐标.
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 屏幕坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.docCoord2Screen(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      docCoord2Screen(x: number | THREE.Vector3, y?: number): THREE.Vector3;
      /**
       * 获取当前绘图控件对象
       * @return MxDrawObjectType 当前绘图控件对象
       * @example
       * \`\`\` typescript
       * const mxDraw = Mx.MxFun.getCurrentDraw()
       * mxDraw.getScene()
       * \`\`\`
       */
      getCurrentDraw(): MxDrawObject;
      /**
       * 添加一个MxDbEntity实体到当前绘图对象上。
       * @param ent  实体对象
       * @returns number 返回对象的id.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      addToCurrentSpace(ent: MxDbEntity): number;
      /**
       * 初始化插件的UI数据对象。
       * @param uiDataObj
       * @return
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      initUiDataObject(uiDataObj: typeof mxUiData): void;
      /**
       * 获取UI数据对象
       * @param uiDataObj
       * @return  mxUiData
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      getUIData(): MxVueInterface;
      /**
       * 获得到当前数据库对象.
       * @return MxDbDatabase
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      getCurrentDatabase(): MxDbDatabase;
      /**
       * 梦想开发测试
       * @param p
       * @return any
       * @example
       * \`\`\` typescript
       * console.log(Mx.MxFun.TestMX());
       * \`\`\`
       */
      testMX(p?: any): any;
      /**
       * 加载一个图片对象，返回Three.js材质对象，该函数具有缓存功能，下次加载同样的图片，可以直接返回.
       * @param p
       * @return any
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       */
      loadImageMaterial(imageUrlPath: string, callResult?: (material: THREE.MeshLambertMaterial) => void | null): Promise<THREE.MeshLambertMaterial | null>;
      /**
       * 在图上选择一个对象。
       * @param strPrompt  提示字符串
       * @param filter  过滤条件
       * @returns number 返回对象的id
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      selectEnt(strPrompt: string, filter?: any): Promise<number>;
      /** 初始化MxDbEntity的类型 */
      initMxDbEntityType: (entity: MxDbEntity) => void;
      /** 获取THREE */
      getTHREE: () => typeof three;
      /**
       * 设置加载dwg文件，直接使用html get协议加载数据，这样就不需要梦想后台服务器程序。
       * @param isStaticLoad 是否启用html get协议加载数据文件
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.enablStaticLoad(true)
       * \`\`\`
       */
      enablStaticLoad: (isStaticLoad?: boolean) => void;
      /**
       * 设置加载dwg文件，直接使用html get协议加载数据时，使用的服务器地址。
       * @param server 服务网络地址.
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.setStaticServer("http://localhost:3000/demo");
       * \`\`\`
       */
      setStaticServer: (server: string) => void;
      /**
       * 注册命令
       * @param cmdName 命令名
       * @param fun 命令函数,cmdFlag取值MxCommandFlag枚举的逻辑或
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.addCommand("draw", ()=> {
       *   console.log("draw")
       * })
       * \`\`\`
       */
      addCommand: (cmdName: string, fun: Function, cmdFlag?: number) => void;
      /**
       * 执行命令
       * @param cmdName 命令名
       * @return boolean 命令执行成功为true
       * @example
       * \`\`\` typescript
       * if(Mx.MxFun.sendStringToExecute("draw")) {
       *   console.log("成功执行draw命令")
       * }
       * \`\`\`
       */
      sendStringToExecute: (cmdName: string, ages?: any) => boolean;
      /**
       * 调用后台服务程序中的NodeJS用户定义函数 后台程序使用Mx.MxFun.registFun注册用户定义函数
       * @param funName 函数名
       * @param param 函数参数
       * @param retfun 函数返回值回调
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.call("getDrawObject", {
       *   cadFile: "test.dwg"
       * }, (res)=> {
       *   console.log(res)
       * })
       * \`\`\`
       */
      call: (funName: string, param?: any, retfun?: Function) => void;
      /**
       * 屏幕坐标长度转THREE.JS坐标长度
       * @param len 屏幕坐标长度
       * @return number THREE.JS坐标长度
       * @example
       * \`\`\` typescript
       * const len = Mx.MxFun.screenCoordLong2World(36)
       * console.log(len)
       * \`\`\`
       */
      screenCoordLong2World: (len: number) => number;
      /**
       * 屏幕坐标长度转文档坐标长度
       * @param len 屏幕坐标长度
       * @return number 文档坐标长度
       * @example
       * \`\`\` typescript
       * const len = Mx.MxFun.screenCoordLong2Doc(36)
       * console.log(len)
       * \`\`\`
       */
      screenCoordLong2Doc: (len: number) => number;
      /**
       * 文档坐标长度转屏幕坐标长度
       * @param len 文档坐标长度
       * @return number 屏幕坐标长度
       * @example
       * \`\`\` typescript
       * const len = Mx.MxFun.docCoordLong2Screen(36)
       * console.log(len)
       * \`\`\`
       */
      docCoordLong2Screen: (len: number) => number;
      /**
       * THREE.JS坐标长度转屏幕坐标长度
       * @param len THREE.JS坐标长度
       * @return number 屏幕坐标长度
       * @example
       * \`\`\` typescript
       * const len = Mx.MxFun.worldCoordLong2Doc(36)
       * console.log(len)
       * \`\`\`
       */
      worldCoordLong2Doc: (len: number) => number;
      /**
       * DWG文档坐标长度到ThreeJS坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoordLong2World: (l: number) => number;
      /**
       * 屏幕坐标转THREE.JS坐标.
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 THREE.JS坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.screenCoord2World(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      screenCoord2World: (x: number | THREE.Vector3, y?: number, z?: number) => THREE.Vector3;
      /**
       * THREE.JS坐标转屏幕坐标.,屏幕坐标的Y轴向下。坐标原点在左上角.
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 屏幕坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.worldCoord2Screen(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      worldCoord2Screen: (x: number | THREE.Vector3, y?: number, z?: number) => THREE.Vector3;
      /**
       * 文档坐标转THREE.JS坐标
       * 说明： 文档坐标，THREE.JS坐标的X轴都是从左到右，Y轴是下到上,但是屏幕像素坐标系：X轴都是从左到右，Y轴是上到下
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 THREE.JS坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.docCoord2World(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      docCoord2World: (x: number, y: number, z: number) => THREE.Vector3;
      /**
       * THREE.JS坐标转文档坐标.
       * @param  x 坐标x
       * @param  y 坐标y
       * @param  z 坐标z
       * @return THREE.Vector3 文档坐标
       * @example
       * \`\`\` typescript
       * const vector3 = Mx.MxFun.worldCoord2Doc(36, 21, 0)
       * console.log(vector3)
       * \`\`\`
       */
      worldCoord2Doc: (x: number, y: number, z: number) => THREE.Vector3;
      /**
       * 更新显示，使用Three.js绘制了对象，调用该函数更新显示。
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.updateDisplay()
       * \`\`\`
       */
      updateDisplay: () => void;
      /**
       * 设置窗口鼠标等事件的回调操作
       * @param fun  参数1 type： 鼠标事件类型 "mouseup"鼠标释放 、"mousedown" 鼠标按下 参数2 event：事件对象 返回值: number 为0，表示事件往下传递，如果非0，表示事件已经被处理，不要往下传递了
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.addWindowsEvent((type, event)=> {
       *   console.log(event)
       *   if(type = "mouseup") {
       *       console.log("鼠标释放")
       *   }else {
       *       console.log("鼠标按下")
       *   }
       *  // 事件往下传递
       *  // return 0
       *  // 事件已处理不再传递
       *   return -1
       * })
       * \`\`\`
       */
      addWindowsEvent: (fun: (type: string, event: any) => number) => void;
      /**
       * 当前是否有命令在运行
       * @return boolean
       * @example
       * \`\`\` typescript
       * if(Mx.MxFun.isRunningCommand()) {
       *    // 当前已有命令在运行
       * }
       * \`\`\`
       */
      isRunningCommand: () => boolean;
      /**
       * 当前正在运行的命令
       * @return any
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      getRunningCommand: () => any;
      /**
       * 窗口缩放，把指定的范围内的图形放到视区中
       * @param dLBx 矩形框范围的左下角X坐标
       * @param dLBy 矩形框范围的左下角X坐标
       * @param dRTx 矩形框范围的左下角X坐标
       * @param dRTy 矩形框范围的左下角X坐标
       * @param isWorld 传入的坐标是否是thruee.js坐标，默认传文档坐标
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.zoomW(21, 22, 300, 310, false)
       * \`\`\`
       */
      zoomW: (dLBx: number, dLBy: number, dRTx: number, dRTy: number, isWorld?: boolean) => void;
      zoomAll: () => void;
      /**
       * 显示或隐藏图层
       * @param idLayer 图层id,或层名
       * @param isShow 是否显示
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.showLayer(366, true)
       * Mx.MxFun.showLayer("2363", fasle)
       * \`\`\`
       */
      showLayer: (idLayer: number | string, isShow: boolean) => void;
      /**
       * 输出字符串到命令行.
       * @param sval 输出字符串
       * @param ...val 剩余参数 命令cmd
       * @return void
       * @example
       * \`\`\` typescript
       * Mx.MxFun.acutPrintf("{0}:", "draw")
       * \`\`\`
       */
      acutPrintf: (format: string, ...val: string[]) => void;
      /**
       * 得到地址栏参数
       * @param name
       * @return string 地址栏参数
       * @example
       * \`\`\` typescript
       *  if(Mx.MxFun.getQueryString("mousetest") === "y")
       * \`\`\`
       */
      getQueryString: (name: string) => string;
      /**
       * 当前是否在电脑上运行
       */
      isPC: () => boolean;
      /**
       * 设置配制参数.
       * @param name
       * @example
       * \`\`\` typescript
       *       Mx.MxFun.setIniset({
       *           EnableIntelliSelect: true
       *       })
       * \`\`\`
       */
      setIniset: (iniObj: iniConfig) => void;
      /**
       * 得到当前配制参数.
       * @return object 配制参数.
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      getIniSet: () => iniConfig;
      /**
       * 重新打开cad文件，该函数在控件创建完后，需要再次重新打开文件，调用。
       * @param sFile 打的cad文件路径
       * @return any
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      openFile: (sFile: string | string[], useWebsocket?: boolean) => boolean;
      /**
       * 调用服务器后台CAD命令.
       * */
      callCommand: (cmd: string, param: string, retCall?: (param: any) => void) => void;
      /**
       * CAD坐标到文档坐标.
       * 默认情况下，cad等于doc,当前m_isCorrectLargeCoordinates为true时，doc变成了把cad图纸修改到小范围坐标系下的坐标。
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      cadCoord2Doc: (x: number, y: number, z: number) => THREE.Vector3;
      /**
       * 文档坐标坐标到CAD.
       * 默认情况下，cad等于doc,当前m_isCorrectLargeCoordinates为true时，doc变成了把cad图纸修改到小范围坐标系下的坐标。
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoord2Cad: (x: number, y: number, z: number) => THREE.Vector3;
      /**
       * 通过id得到对象.
       * @returns 返MxDbEntity
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getMxEntity: (id: number) => MxDbEntity | undefined;
      /**
       * 停止运行当前命令
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      stopRunCommand: () => void;
      /**
       * 设置当前运行MxCAD的MxCPP环境对象。
       */
      initMxCpp: (mxcppimp: any) => void;
      /**
       * Three.js坐标转MxCAD的DWG坐标长度
       */
      docCoordLong2Cad: (l: number) => number;
      /**
       * MxCAD的DWG坐标长度转Three.js坐标.
       */
      cadCoordLong2Doc: (l: number) => number;
      /**
       * View坐标长度转MxCAD的DWG坐标.
       */
      viewCoordLong2Cad: (l: number) => number;
      /**
       * MxCAD的DWG坐标长度转View坐标.
       */
      cadCoordLong2View: (l: number) => number;
      /**
       * 监听命令行消息动态更新的数据
       * 在取点对象中设置的命令以及我们提供的图形对象中是有一套命令提示和参数化绘图，而该回调函数主要用来监听消息变化
       * @parma callback 回调函数中data中的msCmdTip表示命令提示 msCmdText表示当前用户输入的输入内容  msCmdDisplay表示所有的消息记录
       * */
      listenForCommandLineInput(callback: ((data: {
          msCmdTip: string;
          msCmdDisplay: string;
          msCmdText: string;
      }) => void) | undefined): void;
      /**
       * 设置命令行消息数据 (在监听input输入框的onKeydown事件的回调函数中调用)
       * @param msCmdText 用户输入的数据 input输入框输入的文本信息
       * @param keyCode 按键Code input输入框的onKeydown事件的event事件对象的keyCode属性
       * */
      setCommandLineInputData(msCmdText: string, keyCode: number): void;
      /**
       * 监听指针(鼠标光标)移动变化的坐标信息
       * @parma callback 回调函数中返回坐标信息
       * */
      listenForCoordTip(callback: (coordTip: string) => void): void;
      /**
       * 监听光标更新
       * @parma cursorType当前使用的光标类型
       * */
      listenForUpdateCursor(callback: ((cursorType: string) => void) | undefined): void;
      /**
       * 返回mxfun.min.js中的THREE.JS对象，可以用它来创建mxfun.min.js中THREE对象。
       * */
      getMxFunTHREE: () => typeof three;
      /**
       * 返回mxfun.min.js中的ThreeJsTool对象
       * */
      getMxFunThreeTool(): any;
      /**
       * 创建十字光标图片
       * */
      ceneratecursor(cursorSize?: number, squareSize?: number, isRoss?: boolean, color?: string): HTMLImageElement;
      /**
       * 得到当前鼠标位置,返回的是屏幕坐标 。
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getCurrentMousePostion(): THREE.Vector3;
      /**
       * 触发一个系统事件的调用
       * */
      callEvent: (eventName: string, param?: any) => any;
      /**
       * 得到当前网页路径
       * init 事件会在模块加载完成后触发。
       * */
      getLocationPageUrl: () => string;
      /**
       * 得到当前主机路径
       * init 事件会在模块加载完成后触发。
       * */
      getHostUrl: () => string;
      /** 监听use或者调用自定义图形定义的绘制命令后创建图形对象的回调 */
      onUseCreateMxDbEntity(callback: (...ages: [MxDbEntity]) => any): void;
      /**
       * 初始快捷命令。
       * */
      initQuickCommand: (aryQuickCommand: string[][]) => void;
      /**
       * 初始化语言表
       * */
      InitLanguageString: (mapid2str: Object) => void;
      /**
       * 得以语言字符串
       * */
      getLanguageString: (id: string, sDef?: string) => string;
      /**
       * 把一个颜色变量转成一个数组颜色
       * */
      getNumberColor: (iColor: number | string | THREE.Color) => number;
      /**
       * 发送一个消息到ifarme的父窗口
       * */
      postMessageToParentFrame: (param: any) => boolean;
  }
   const MxFun: MxFunClass;
  
  interface CanvasParent extends HTMLElement {
      tabindex?: number;
  }
  /** 控件配置 **/
  interface iniConfig {
      /** 启用智能选择 */
      EnableIntelliSelect?: boolean;
      /** 启动O 捕捉功能 */
      EnableOsnapFunction?: boolean;
      /** 启动夹点编辑,true,1表示启用，0,fase表示禁用，2表示只显示夹点，但响应夹点编辑. */
      EnableGripEdit?: boolean | number;
      /** 启动多选,框选功能,默认值是false */
      multipleSelect?: boolean;
      /**自动重置渲染器 */
      autoResetRenderer?: boolean;
      /** 更正大坐标 */
      correctLargeCoordinates?: boolean;
      /** 请求标头缓存控制 */
      requestHeaderCacheControl?: boolean;
      /** 选择方式控制 1：多选，但不支持连续多选，2：多选，并支持连续多选,默认值为1 */
      IntelliSelectType?: number;
      /** 禁用动态输入框 */
      ForbiddenDynInput?: boolean;
      /** 夹点和拾取框的大小,单位是屏幕上的像素 */
      inputRectWidth?: number;
      /** 夹点颜色,0xFFFFFFFF,0xNRGB  */
      gripPointColor?: number;
      /** 动态输入提示线的颜色,0X808080  */
      dynamicInputLineColor?: number;
      /** 1,使用EnableGripEdit设置，默认值是1
       ** 2 启用CAD对象夹点编辑
       ** 0 禁用AD对象夹点编辑
       */
      EnableCADEntityGripEdit?: number;
      /** 是使用图纸中的视区角度设置，默认为true */
      EnableDrawingViewAngle?: boolean;
      /** 是否启用命令与用户交互操作启动右键菜单，默认为false */
      EnableCommandRightClickMenu?: boolean;
      /** 是否启用触模屏命令交互操作时支持多点触模放大缩小视区，默认为true */
      MobileCommandOperationSupportsMultipoint?: boolean;
  }
  type MxFunType = MxFunClass;
  
  /** @module MxTempMarkDraw */
  /**
   * MxTempMarkDraw 绘制一个临时标记对象，该对象，在视区改变，或执行一个命令时会自动清除.
   *
   */
   class MxTempMarkDraw {
      private imp;
      constructor(imp: any);
      /**
      * 清除标记
      * @example
      */
      clear(): void;
      /**
      * 绘制直线
      * @example
      */
      drawLine(pt1: THREE.Vector3, pt2: THREE.Vector3, iColor?: number, opacity?: number): void;
      /**
      * 绘制圆
      * @example
      */
      drawCircle(cen: THREE.Vector3, dRadius: number, iColor: number): void;
      /**
      * 绘制对象
       * @example
      */
      drawEntity(obj: THREE.Object3D): void;
      /**
      * 绘制圆标记
      * @example
      */
      drawCircleMark(cen: THREE.Vector3, dRadius: number, iColor: number): void;
  }
  
  /** @module MxDrawObject */
  
  interface MxDrawObjectType {
      addEvent(arg0: string, arg1: (...parmes: any) => any): void;
      setIniset(arg0: iniConfig): void;
      getScene(): THREE.Scene;
      getCamera(): THREE.Camera;
      setMouseRightRotate(isRotate: boolean): void;
      getFullDisplayRange(): object;
      getCanvas(): HTMLCanvasElement;
      updateDisplay(isImmediate: boolean): void;
      createCanvasImageData(fun: (imageData: string) => void, param?: object): void;
      setViewColor(color: number): void;
      setSize(width: number, height: number): void;
      getIntersectObjects(ptMouse: THREE.Vector3): THREE.Intersection[];
      getViewWidth(): number;
      getViewHeight(): number;
      zoomInitialStates(): void;
      zoomScale(scale: number): void;
      zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean, animate?: boolean, autoRegen?: boolean): void;
      zoomCenter(dCenX: number, dCenY: number): void;
      initZoomW(pt1Doc: THREE.Vector3, pt2Doc: THREE.Vector3): void;
      addMxEntity(ent: any): number;
      eraseMxEntity(id: number): boolean;
      screenCoord2World(x: number, y: number, z?: number): THREE.Vector3;
      worldCoord2Screen(x: number, y: number, z: number): THREE.Vector3;
      screenCoord2Doc(x: number, y: number, z: number): THREE.Vector3;
      worldCoordLong2Doc(l: number): number;
      docCoordLong2World(l: number): number;
      docCoord2World(x: number, y: number, z: number): THREE.Vector3;
      worldCoord2Doc(x: number, y: number, z: number): THREE.Vector3;
      docCoord2Screen(x: number, y: number, z: number): THREE.Vector3;
      screenCoordLong2Doc(l: number): number;
      docCoordLong2Screen(l: number): number;
      screenCoordLong2World(l: number): number;
      worldCoordLong2Screen(l: number): number;
      initRendererParam(param: object): void;
      getMxAllSelect(): Array<number>;
      addMxCurrentSelect(id: number, isFireSelectChange: boolean, isDisplayGrid: boolean): boolean;
      clearMxCurrentSelect(): boolean;
      getMxEntityUserObject(id: number): MxDbEntity;
      findMxEntityAtPoint(ptMouse: THREE.Vector3, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Array<MxDbEntity>;
      setMouseMiddlePan(isPan: boolean | number): void;
      resetThreeJSControls(): void;
      getAllMxEntity(): Array<MxDbEntity>;
      enableZoom(isEnable: boolean): void;
      enablePan(isEnable: boolean): void;
      addObject(obj: THREE.Object3D | null, isAddToSelect?: boolean): void;
      addViewObject(obj: THREE.Object3D): void;
      removeViewObject(obj: THREE.Object3D): void;
      removeObject(obj: THREE.Object3D, isRemoveSelectObject?: boolean): void;
      saveMxEntityToJson(isSaveToDWG?: boolean): object;
      loadMxEntityFromJson(dataString: object): Promise<boolean>;
      eraseAllMxEntity(): void;
      makeCurrent(): void;
      getViewCenterDocCoord(): THREE.Vector3;
      updateCanvasSize(): void;
  }
  /**
   * mxdraw事件
   * @example
   * \`\`\`typescript
   * 响应夹点编辑事件
   *    mxcad.mxdraw.on("objectGripEdit",(grips)=>{
   *     grips.forEach((grip)=>{
   *         let id = new McObjectId(grip.id,grip.type == "mxcad" ? McObjectIdType.kMxCAD :McObjectIdType.kMxDraw);
   *         console.log(id.getMcDbEntity());
   *     });
   *     console.log(grips);
   * })
   * \`\`\`
   */
  type MxDrawEvents = {
      loadComplete: () => void;
      render: () => void;
      addResizeEvent: (resize: Function) => void;
      initObject: () => void;
      openFileComplete: (iResult: number) => void;
      saveFileComplete: (iResult: number, sServerResult: string) => void;
      uiSetLayerData: (layerList: {
          name: string;
          id: number;
          off?: number;
          color?: string;
          colorValue?: number;
          zerolayer?: number;
          isState?: boolean;
      }[]) => void;
      viewchange: () => void;
      MxEntitySelectChange: (ids: number[]) => void;
      objectGripEdit: (entity: MxDbEntity) => void;
      whetherEditTheGripPoint: (entity: MxDbEntity) => void;
      databaseModify: () => void;
  } & RendererEventsType;
  /**
   * 引入mxdraw库不会挂载MxDrawObject 只能在以下特定函数中获取
   * @function
   * {@link MxFun.createMxObject}中callback回调参数\`mxDraw\`的构造类
   * @function
   * {@link MxFun.getCurrentDraw} 方法返回值的构造类
   *
   */
   class MxDrawObject extends Node<MxDrawEvents, Node<any, any>> {
      private _mxdrawObj;
      private rootLayer;
      constructor(Mxdraw: MxDrawObjectType);
      /**
       * 得执行的内部MxObject对象.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getMxObjectImplement(): any;
      /**
       * 获取Three.js绘图场景
       * @returns THREE.Scene
       */
      getScene(): THREE.Scene;
      /**
       * 设置多选模式。
       */
      setMultipleSelect(isMultipleSelect: boolean): void;
      /**
       * 当前是否是mapbox兼容模式在运行
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      isMapBox(): boolean;
      /**
       * @instance
       */
      renderer: THREE.WebGLRenderer;
      /**
       * 获取Three.js相机对象
       * @returns THREE.Camera
       */
      getCamera(): THREE.Camera;
      /**
       * 获取Three renderer渲染器
       * @returns THREE.WebGLRenderer
       */
      getRenderer(): THREE.WebGLRenderer;
      /**
       * 设置鼠标按下是否旋视区
       * @param isRotate  是否旋视区
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().setMouseRightRotate(false)
       * \`\`\`
       *
       */
      setMouseRightRotate(isRotate?: boolean): void;
      /**
       * 得到全部显示所有图形所需要的显示的范围 ，Three.js的坐标系。world坐标。
       * @returns {minPt: value,maxPt: value}
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().getFullDisplayRange()
       * \`\`\`
       */
      getFullDisplayRange(): object;
      /**
       * 获取Canvas对象.
       * @returns HTMLCanvasElement
       */
      getCanvas(): HTMLCanvasElement;
      /**
       * 通知Three.js更新显示
       * @returns void
       */
      updateDisplay(isImmediate?: boolean): void;
      /**
       * 通知Three.js生成ImgeData显示I数据.
       * @param fn 回调函数或者imageData
       * @param param 函数载荷
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().createCanvasImageData((imageData)=> {
       *      console.log(imageData)
       * })
       * \`\`\`
       */
      createCanvasImageData(fn: (imageData: string) => void, param?: object): void;
      /**
       * 设置视区背景色,
       * @param color 如0xFFFFFF 白色
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().setViewColor(0xFFFFFF)
       * \`\`\`
       */
      setViewColor(color: number): void;
      /**
       * 返回视区背景色,
       * @param color 如0xFFFFFF 白色
       * @returns void
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getViewColor(): number;
      /**
       * 设置视区背景色,
       * @param width 宽度
       * @param height 宽度
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().setSize(0xFFFFFF)
       * \`\`\`
       */
      setSize(width: number, height: number): void;
      /**
       * 获取某屏幕点下的绘制对象，ptMouse是.,
       * @param ptMouse THREE.Vector2 屏幕坐标
       * @returns THREE.Intersection[]
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().getIntersectObjects(new THREE.Vector2(2, 3))
       * \`\`\`
       */
      getIntersectObjects(ptMouse: THREE.Vector3): THREE.Intersection[];
      /**
       * 添加THREE.Object3D对象到当前场景
       * @param obj THREE.Object3D
       * @param isAddToSelect 默认值为true  是否把对象添加选择对象集中,调用 getIntersectObjects可以找到
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().addObject(new THREE.Object3D(), false)
       * \`\`\`
       */
      addObject(obj: THREE.Object3D, isAddToSelect?: boolean): void;
      /**
       * 添加THREE.Object3D对象到视区场景，对象坐标系是窗口视区坐标系。0,0点在左下角.
       * @param obj THREE.Object3D
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().addViewObject(new THREE.Object3D())
       * \`\`\`
       */
      addViewObject(obj: THREE.Object3D): void;
      /**
       * 得到对象画布的宽度，单位屏幕像素
       * @returns number
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().getViewWidth()
       * \`\`\`
       */
      getViewWidth(): number;
      /**
       * 得到对象画布的高度，单位屏幕像素
       * @returns number
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().getViewHeight()
       * \`\`\`
       */
      getViewHeight(): number;
      /**
       * 删除addObject函数添加的THREE.Object3D对象
       * @param obj THREE.Object3D
       * @param isRemoveSelectObject 默认值为true  删除选择集中的对象
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().removeObject(new THREE.Object3D(), false)
       * \`\`\`
       */
      removeObject(obj: THREE.Object3D, isRemoveSelectObject?: boolean): void;
      /**
       * 把视区显示范围恢复到初始显示范围.
       * @returns void
       */
      zoomInitialStates(): void;
      /**
       * 缩放当前显示范围，它是相对于当前显示范围进行缩放
       * @param scale scale缩放比例
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().zoomScale(0.8)
       * \`\`\`
       */
      zoomScale(scale: number): void;
      /**
       * 把当前显示范围移到指定的显示范围
       * @param minPt 坐标1 THREE.Vector3
       * @param maxPt 坐标2 THREE.Vector3
       * @param isWorld 默认为felse DWG图纸坐标，设置为true是THREEJS坐标
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().zoomW(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20), true)
       * \`\`\`
       */
      zoomW(minPt: THREE.Vector3, maxPt: THREE.Vector3, isWorld?: boolean, animate?: boolean, autoRegen?: boolean): void;
      /**
       * 保存当前显示范围.
       */
      saveZoom(): void;
      /**
       * 恢复当前显示范围.
       */
      recoverZoom(): void;
      /**
       * 把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。
       * @param minPt DWG图纸坐标1 THREE.Vector3
       * @param maxPt DWG图纸坐标2 THREE.Vector3
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().zoomCenter(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20))
       * \`\`\`
       */
      zoomCenter(dCenX: number, dCenY: number): void;
      /**
       * 初始化控件默认加载后，显示视区范围，默认使用图纸转换时的显示范围。。
       * @param minPt DWG文档坐标1显示区域的左下角 THREE.Vector3
       * @param maxPt DWG文档坐标2显示区域的右上角 THREE.Vector3
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().initZoomW(new THREE.Vector3(0,10,10), new THREE.Vector3(3,8,20))
       *
       * \`\`\`
       */
      initZoomW(pt1Doc: THREE.Vector3, pt2Doc: THREE.Vector3): void;
      /**
       * 控件对象的事件监听
       * @param eventNaem 事件名称
       * @param fun 回调函数
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().addEvent("addResizeEvent", ()=> {})
       * Mx.MxFun.getCurrentDraw().addEvent("viewchange", ()=> {})
       * 图纸加载完成
       * Mx.MxFun.getCurrentDraw().addEvent("loadComplete", ()=> {})
       * 视区重绘事件.
       * Mx.MxFun.getCurrentDraw().addEvent("render", (renderer)=> {})
       * 视区大小被修改事件.,viewsize={viewWidth:viewWidth,viewHeight:viewHeight}
       * Mx.MxFun.getCurrentDraw().addEvent("viewsizechange", (viewsize)=> {})
       * 实体选择状态发生改变的事件.
       * Mx.MxFun.getCurrentDraw().addEvent("MxEntitySelectChange", (aryId:Array<number>)=> {})
       * \`\`\`
       */
      addEvent(eventNaem: keyof MxDrawEvents, fun: MxDrawEvents[keyof MxDrawEvents]): void;
      on(event: keyof MxDrawEvents, callback: MxDrawEvents[keyof MxDrawEvents]): void;
      off(event: keyof MxDrawEvents, callback: MxDrawEvents[keyof MxDrawEvents]): boolean;
      /**
       * 移除事件函数。
       * @param options { eventNaem: string, fun:any; }
       * @returns boolean
       * @example
       * \`\`\`
       */
      removeEventFuction(eventNaem: keyof MxDrawEvents, fun: MxDrawEvents[keyof MxDrawEvents]): boolean;
      /**
       * INI设置
       * @param options { EnableOsnapFunction: boolean; }
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxFun.getCurrentDraw().setIniset(options: { EnableOsnapFunction: true })
       *
       * \`\`\`
       */
      setIniset(options: iniConfig): void;
      /**
       * 返回当前视区的显示范围,cad坐标。
       * @returns {pt1:THREE.Vector3,pt2:THREE.Vector3,pt3:THREE.Vector3,pt4:THREE.Vector3}
       */
      getViewDocCoord(): {
          pt1: THREE.Vector3;
          pt2: THREE.Vector3;
          pt3: THREE.Vector3;
          pt4: THREE.Vector3;
      };
      /**
       * 屏幕坐标到ThreeJS坐标
       * @returns THREE.Vector3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      screenCoord2World(x: number, y: number, z?: number): THREE.Vector3;
      /**
       * ThreeJS坐标到屏幕坐标,屏幕坐标的Y轴向下。坐标原点在左上角.
       * @returns THREE.Vector3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      worldCoord2Screen(x: number, y: number, z: number): THREE.Vector3;
      /**
       * 屏幕坐标到DWG文档坐标
       * @returns THREE.Vector3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      screenCoord2Doc(x: number, y: number): THREE.Vector3;
      /**
       * ThreeJS坐标长度到DWG文档坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      worldCoordLong2Doc(l: number): number;
      /**
       * DWG文档坐标长度到ThreeJS坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoordLong2World(l: number): number;
      /**
       * DWG文档坐标到ThreeJS坐标
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoord2World(x: number, y: number, z: number): THREE.Vector3;
      /**
       * DWG文档坐标到ThreeJS坐标
       * @returns THREE.Vector3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoord2World2(pt: THREE.Vector3): THREE.Vector3;
      /**
       * ThreeJS坐标到DWG文档坐标
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      worldCoord2Doc(x: number, y: number, z: number): THREE.Vector3;
      /**
       * ThreeJS坐标到DWG文档坐标
       * @returns THREE.Vector3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      worldCoord2Doc2(pt: THREE.Vector3): THREE.Vector3;
      /**
       * DWG文档坐标到屏幕坐标
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoord2Screen(x: number, y: number): THREE.Vector3;
      /**
       * 屏幕坐标长度到DWG文档坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      screenCoordLong2Doc(l: number): number;
      /**
       * DWG文档坐标长度到屏幕坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoordLong2Screen(l: number): number;
      /**
       * 屏幕坐标长度到ThreeJS坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      screenCoordLong2World(l: number): number;
      /**
       * ThreeJS坐标长度到屏幕坐标长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      worldCoordLong2Screen(l: number): number;
      /**
       * 初始WebGL Renderer的创建参数,该函数在MxFun.createMxObject函数调用时，调用。
       * @param param
       * @returns void
       * @example
       * \`\`\`typescript
       * mxObj.initRendererParam({preserveDrawingBuffer: true})
       *
       * \`\`\`
       */
      initRendererParam(param: object): void;
      /**
       * 添加一个自定义实体到图上。
       * @param ent 自定义实体对象
       * @returns number 返回对象的id.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      addMxEntity(ent: MxDbEntity): number;
      /**
       * 得到图上当前选择的对象.
       * @returns Array<number> 返回对象的id数组.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getMxCurrentSelect(): Array<number>;
      /**
       * 得到图上当前选择的MxCAD对象.
       * @returns Array<number> 返回对象的id数组.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getMxCADCurrentSelect(): Array<number>;
      /**
       * 得到图上当前选择对象时，选择范围点.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getSelectPoints(): {
          point1: THREE.Vector3;
          point2: THREE.Vector3;
          isvalid: boolean;
      };
      /**
       * 把mxdraw对象添加到当前选择集中
       * @returns void
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      addMxCurrentSelect(id: number, isFireSelectChange?: boolean, isDisplayGrid?: boolean): boolean;
      /**
       * 把MxCAD对象添加到当前选择中.
       * @returns void
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      addMxCADCurrentSelect(id: number, isFireSelectChange?: boolean, isDisplayGrid?: boolean): boolean;
      /**
       * 触发选择状态改变事件
       * @returns void
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      fireSelectChange(isMxCAD: boolean): void;
      /**
       * 清除当前所有选择
       * @returns void
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      clearMxCurrentSelect(): boolean;
      /**
       *通过id获取绘制的对象.
       * @param id 返回对象的id
       * @returns MxDbEntity
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getMxEntity(id: number): MxDbEntity;
      /**
       * 查找某点位置处的用户自绘对象.
       * @param ptMouse 查找的点位 THREE.Vector3,默认是文档坐标
       * @returns MxDbEntity[] 返回用户自绘对象数组
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      findMxEntityAtPoint(ptMouse: THREE.Vector3, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Array<MxDbEntity>;
      /**
       *得到所有用户自绘对象.
       * @returns MxDbEntity[] 返回用户自绘对象数组
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getAllMxEntity(): Array<MxDbEntity>;
      /**
       * 设置鼠标中键移动视区。
       * @param iMethod 设置是否可以鼠标中键移动视区,iMethod= true,iMethod=1
       * iMethod = 0,中键不移动视区，左键移动
       * iMethod = 1,中键移动视区，左键不移动
       * iMethod = 2,中键移动视区，左键移动视区
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      setViewMovementMethod(iMethod: boolean | number): void;
      /**
       * setMouseMiddlePan函数与setViewMovementMethod一样，为了兼容老程序暂没删除，将来会删除
       */
      setMouseMiddlePan(iPan: boolean | number): void;
      /**
       *重新设置ThreeJS Controls状态.
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      resetThreeJSControls(): void;
      /**
       * 启用或禁用鼠标中键滚动缩放视区
       * @param isEnable 是否启用
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      enableZoom(isEnable: boolean): void;
      /**
       * 启用或禁用鼠标移动视区
       * @param isEnable 是否启用
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      enablePan(isEnable: boolean): void;
      /**
       * 删除MxEntity
       * @param id 实体id.
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      eraseMxEntity(id: number): boolean;
      /**
       * 移除安视图坐标绘制的对象.
       * @param obj 对象.
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      removeViewObject(obj: THREE.Object3D): void;
      /**
       * 保存所有MxEntity的数据到json字符串.
       * @param
       * @returns json字符串
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      saveMxEntityToJson(isSaveToDWG?: boolean): string;
      /**
       * 保存所有MxEntity的数据到js对象.
       * @param
       * @returns js对象
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      saveMxEntityToObject(isSaveToDWG?: boolean): object;
      /**
       * 从json字符串恢复MxEntity
       * @param dataString json字符串.
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      loadMxEntityFromJson(dataString: string | object, aryPreloadSVG?: string[] | null): Promise<boolean>;
      /**
       * 删除所有的MxEntity
       * @param
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      eraseAllMxEntity(): void;
      /**
       * 把该控件对象，设置成当前控件.
       * @param
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      makeCurrent(): void;
      /**
       * 得到视区中心的文档坐标.
       * @param
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getViewCenterDocCoord(): THREE.Vector3;
      /**
       * 画布大小，自动修改到它父亲div大小。
       * @param
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      updateCanvasSize(): void;
      /**
       * 新建图纸.
       * @param ptin1,ptin2新建图纸的显示范围.
       * @returns
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      newFile(ptin1: THREE.Vector3 | number, ptin2: THREE.Vector3 | number, x2?: number, y2?: number): boolean;
      /**
       * 停止当前加载
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      stopAllLoading(): void;
      /**
       * 得到Three.js的 OrbitControls对象.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getOrbitControls(): any;
      /**
       * 禁用或启用视区的移动，放大，缩小等操作.
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      enableViewControls(isEnable: boolean): void;
      /**
       * 得到当前图形数据库对象
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getMxDatabase(): MxDbDatabase;
      /**
       * 得到临时标记绘制对象
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      getTempMarkDraw(): MxTempMarkDraw;
      /**
       * 设置鼠标中键的滚动的缩放比例,在PC上，默认值4，手机上默认值，1.5
       * 返回之前设置值。
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      setZoomSpeed(zoomSpeed: number): number;
      /**
       * 重新计数Renderer状态, this.renderer.info.reset();
       * @return
       * @example
       * \`\`\` typescript
       * \`\`\`
       */
      resetRenderer(): any;
      /**
       * 设置服务器发送文件请求时，需要带的参数.注意：带参数后，可能会出现跨域访问失败
       * @return
       * @example
       * \`\`\` typescript
       * \`\`\` mxobj.setRequestHeader("{'data':'value1'}");
       */
      setRequestHeader(val: string): any;
      /**
       * 在MxCAD模式下，关闭与服务器的socket连接 。
       * @return
       * @example
       */
      closeWebSocket(): any;
      /**
       * CAD坐标到文档坐标.
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      cadCoord2Doc(x: number, y: number, z: number): THREE.Vector3;
      cadCoord2Doc2(pt: THREE.Vector3): THREE.Vector3;
      toSmallcoord(pt: THREE.Vector3): THREE.Vector3;
      toSmallcoord2(x: number, y: number, z?: number): THREE.Vector3;
      /**
       * 文档坐标坐标到CAD.
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoord2Cad(x: number, y: number, z: number): THREE.Vector3;
      docCoord2Cad2(pt: THREE.Vector3): THREE.Vector3;
      /**
       * 视区坐标到CAD坐标.
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      viewCoord2Cad(x: number, y: number, z: number): THREE.Vector3;
      /**
       *CAD坐标到视区坐标.
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      cadCoord2View(x: number, y: number, z: number): THREE.Vector3;
      /**
       *CAD长度到视区长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      cadCoordLong2View(l: number): number;
      /**
       *视区长度到CAD长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      viewCoordLong2Cad(l: number): number;
      /**
       *Doc长度到CAD长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      docCoordLong2Cad(l: number): number;
      /**
       *CAD长度到Doc长度
       * @returns number
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      cadCoordLong2Doc(l: number): number;
      /**
       * 设置视区的旋转角度
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      setViewAngle(ang: number): void;
      /**
       * 得到视区的旋转角度
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getViewAngle(): number;
      /**
       * 得到系统变量
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getSysVar(sName: string): any;
      /**
       * 设置系统变量
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      setSysVar(sName: string, val: any): void;
      /**
       * 是否是CppMxCAD模式运行.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      isMxCAD(): boolean;
      /**
       * 得到所有布局名
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getAllLayoutName(): string[];
      /**
       * 得到数据库Json字符串数据.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getDtabaseJsonString(): string;
      /**
       * 跳转另一个布局页面.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      gotoLayout(layout: string): void;
      /**
       * 初始cpp对象.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      initMxCpp(mcppObjectImp: any): void;
      /**
       * 当前是否支持 opengles3
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      isWebgl2(): boolean;
      /**
       * 返回对象的ID.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      getId(): number;
      /**
       * 添加鼠标键盘响应事件.
       * @example
       * \`\`\`typescript
       * // mousedown,touchstart,mouseup,mousemove,touchend,touchmove
       * //事件返回0,事件会继续传递，返回1事件不再被后续程序处理.
       * mxobj.addControlsEvent("touchstart",(event)=>{
       *         return 0;
       *       })
       *
       * \`\`\`
       */
      addControlsEvent(type: string, call: (event: any) => number, isFront?: boolean): number;
      /**
       * 清除图上所有数据
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      clearAllObject(): any;
      /**
       * 设置点选支持多选，默认不支持。
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      setPointMultipleSelect(isMultipleSelect?: boolean): void;
      /**
       * 当前是否为白色白背景色
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      isWhiteViewColor(): boolean;
      /**
       * 根据当前颜色，自动对color进行反色，比如：背景色是白色，自动取黑色.
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      automaticInversionColor(color: number): number;
      /**
       * 启动或停止动画渲染
       * @example
       * \`\`\`typescript
       *
       *
       * \`\`\`
       */
      renderLoop(isLoop?: boolean): void;
  }
  
  /**
   * 使用canvas大小调整侦听器 (只有在 {@link MxFun.createMxObject} 的callbakc回调中调用才有效) 不调用该方法则默认使用window窗口监听从而自动调整画布大小，canvas大小或者其canvas父级元素变化不会自动调整。
   * > 注意：调用方法会加载[element-resize-event-polyfill](https://www.npmjs.com/package/element-resize-event-polyfill)}依赖包  可以通过resize监听dom元素大小变化 \`dom.addEventListener('resize', callback)\`
   * > 注意: MxFun.createMxObject 方法调用后默认会依据canvasParent父级元素作为自动调整的参考大小 所以传入的canvas也会默认监听canvas父级元素，适配大小请将canvas和canvasParent当作一个整体。
   * @param mxdrawObj 调用{@link MxFun.createMxObject}的callback回调函数拿到的 mxDraw 对象参数
   * @param canvas 调用{@link MxFun?.createMxObject}的callback回调函数拿到的dom.canvas作为要监听的元素
   * @param time 大小监听节流函数节流时间 默认 100
   * @param autoAdjust 是否自动调整大小 默认true
   * @param callback 监听回调
   */
   function useCanvasResizeListener(mxdrawObj: MxDrawObject, canvas: HTMLCanvasElement, time?: number): Promise<void>;
  
  /** @module McGePoint3d */
  /**
   * McGePoint3d
   * @example \`\`\`typescript
   * \`\`\`
   */
  interface McGePoint3d {
      x: number;
      y: number;
      z: number;
  }
  
  /** @module McGePoint3dArray */
  
  /**
   * McGePoint3dArray
   * @example \`\`\`typescript
   * \`\`\`
   */
  interface McGePoint3dArray {
      /**
       *
       * @returns
       */
      append(pt: McGePoint3d): void;
  }
  
  interface MxassemblyType {
      McGePoint3d: any;
      McGePoint3dArray: any;
      McGeTool: any;
  }
   class MxassemblyClass {
      constructor();
      private mxassembly;
      private initImp;
      NewMcGePoint3d(x?: number, y?: number, z?: number): McGePoint3d;
      NewMcGePoint3dArray(aryPoint?: Array<THREE.Vector3>): McGePoint3dArray;
  }
  /**
   * Mxassembly 模块
   * 导出库时已实例化，只需要调用实例方法 例如：
   * \`\`\`typescript
   * \`\`\`
   */
   const Mxassembly: MxassemblyClass;
  
   class Store<T extends {}> {
      actions: {
          [x: string | number]: Function;
      };
      mutations: {
          [x: string | number]: Function;
      };
      state: T;
      status: string;
      events: PubSub<{
          "MxUiMain": (call: Function) => void;
          "MxMain": (call: Function) => void;
          "use:create:MxDbEntity": (obj: MxDbEntity) => void;
          "use:error": (e: any) => void;
          "MxDbEntityRegister": () => void;
          "stateChange": (state: any) => void;
      }>;
      constructor(params: {
          state: T;
          mutations: {
              [x: string | number]: Function;
          };
          actions: {
              [x: string | number]: Function;
          };
      });
      /**
       * 调用active方法 触发修改状态前的异步行为
       * @param actionKey 方法名称
       * @param payload 执行参数
       */
      dispatch<T>(actionKey: string | number, payload: T | any): boolean;
      /**
       * 调用mutation 的方法 修改state中属性的状态
       * @param mutationKey 方法名称
       * @param payload 执行参数
       */
      commit<T>(mutationKey: string | number, payload: T | any): boolean;
  }
  
  type stateType = {
      [x: string]: any;
      MxFun: any | null;
      Mxassembly: MxassemblyType | null;
      isCreateDrawObj: boolean;
  };
   const store: Store<stateType>;
  
  /**
   * MxThreeJS 模块
   * ##### 使用说明:
   *
   * > 基于three.js实现创建直线对象、加载图片、SVG等功能，以下是使用的流程:
   * - 模块中大部分方法返回的{@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/core/Object3D | THREE.Object3D}类型继承创建的对象都可以通过取点对象{@link MrxDbgUiPrPointClass.value} 得到鼠标对应位置
   * - {@link MrxDbgUiPrPointClass.go}和{@link MrxDbgUiPrPointClass.goWhile}方法监听鼠标点击事件回调中通过
   * - {@link MxDrawObject.addObject} 方法添加到场景{@link MxDrawObject.getScene}中
   * - 最后调用{@link MxFun.updateDisplay} 更新视图显示完成
   *
   * > 提示: 在实际开发中MxThreeJS是配合着{@link MxDrawObject} 和 {@link MrxDbgUiPrPointClass} 完成绘制线段、文字、图片等功能,当然你也可以使用{@link http://www.yanhuangxueyuan.com/threejs/docs/index.html | three.js}来完成MxThreeJS模块的这些工作
   *
   * > 该模块导出库时已实例化为对象，只需要调用实例方法 例如：
   *
   * \`\`\`typescript
   * // html
   * <button id="line">line</button>
   *
   * // js
   * import Mx from "mxdraw"
   * import Three from "three"
   * Mx.loadCoreCode().then(()=> {
   *  Mx.MxFun.setMxServer()
   *  Mx.MxFun.createMxObject({
   *    callback(mxDraw, dom) {
   *      document.getElementById("line").onclick = ()=> {
   *       const getPoint = new Mx.MrxDbgUiPrPointClass()
   *       let lastPt, isLine
   *       getPoint.goWhile(()=> {
   *         const pt1 = getPoint.value()
   *         if(isLine) {
   *              const line = Mx.MxThreeJS.createLine(pt1, lastPt, 0xffffff)
   *              const currentDraw = Mx.MxFun.getCurrentDraw()
   *              currentDraw.addObject(line)
   *              Mx.MxFun.updateDisplay()
   *          }
   *          lastPt = pt1.clone()
   *          isLine = !isLine
   *       })
   *      }
   *    }
   * })
   * })
   * \`\`\`
   */
   class MxThreeJS$1 {
      /**
       * 创建Three.js直线对象。
       * @param vPt1  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3 | THREE.Vector3} 点1
       * @param vPt2  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/math/Vector3 | THREE.Vector3} 点2
       * @param iColor 颜色Color
       * @returns  {@link http://www.yanhuangxueyuan.com/threejs/docs/index.html#api/zh/objects/Line |THREE.Line}
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createLine(new Three.Vector3(1,10,0), new Three.Vector3(1,300,0), 0)
       * \`\`\`
       */
      createLine(vPt1: THREE.Vector3, vPt2: THREE.Vector3, iColor: number | string | THREE.Color): THREE.Line;
      /**
       * 创建Three.js圆对象。
       * @param mCenterPt 圆中心点
       * @param dRadius 圆半径
       * @param iColor 颜色
       * @returns THREE.Object3D
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createCircle(new Three.Vector3(1,10,0), 10, 0)
       * \`\`\`
       */
      createCircle(mCenterPt: THREE.Vector3, dRadius: number, iColor: number | string | THREE.Color): THREE.Object3D;
      /**
       * 创建Three.js点对象。
       * @param mPt 点位置
       * @param iColor 颜色
       * @param size 大小
       * @returns THREE.Points
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createPoint(new Three.Vector3(1,10,0), 0)
       * \`\`\`
       */
      createPoint(mPt: THREE.Vector3, iColor: number | string | THREE.Color, size?: number): THREE.Points;
      /**
       * 创建Three.js 文字
       * @param message 文字信息
       * @param pt 位置
       * @param iSize 文字大小
       * @param fAngle 旋转角度
       * @param iColor 颜色
       * @returns THREE.Sprite
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.creatTextSprite("hello",new Three.Vector3(1,10,0), 90, 60, 0)
       * \`\`\`
       */
      creatTextSprite: (message: string, pt: THREE.Vector3, iSize: number, fAngle: number, iColor: number | string | THREE.Color) => THREE.Sprite | null;
      /**
       * 计算creatTextSprite函数，创建的文字对象，的尺寸.
       * @param message 文字信息
       * @param iHeight 文字大小
       * @param iWidth 文字宽度.
       * @returns {spritewidth:number,spriteheight:number,textwidth:number,singleline:boolean}
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      clacTextSpriteSize: (message: string, iHeight: number, iWidth?: number) => {
          spritewidth: number;
          spriteheight: number;
          textwidth: number;
          singleline: boolean;
      };
      /**
       * 计算文字宽度.
       * @param message 文字信息
       * @param iHeight 文字大小
       * @returns number
       * @example
       * \`\`\`typescript
       *
       * \`\`\`
       */
      clacTextSize: (message: string, iHeight: number) => number;
      /**
       * 根据三角形数组，创建Three.js Mesh
       * @param points 由三个点组成的数组
       * @param iColor 颜色
       * @param opacity 透明度
       * @returns THREE.Mesh
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createTriangle(
       * [new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)],
       *  0,
       *  1
       * )
       * \`\`\`
       */
      createTriangle(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color, opacity?: number): THREE.Mesh | null;
      /**
       * 创建连续直线
       * @param points 由多个点组成的数组
       * @param iColor 颜色
       * @returns THREE.Line
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createLines([new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)], 0)
       * \`\`\`
       */
      createLines(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color): THREE.Line;
      /**
       * 创建虚线
       * @param points 由多个点组成的数组
       * @param iColor 颜色
       * @param dashSize 短划线的大小
       * @param gapSize 短划线之间的距离
       * @returns THREE.Line
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createDashedLines([new THREE.Vector3(1,2,2),new THREE.Vector3(1,65,4),new THREE.Vector3(12,2,2)], 10, 20, 2)
       * \`\`\`
       */
      createDashedLines(points: Array<THREE.Vector3>, iColor: number | string | THREE.Color, dashSize: number, gapSize: number): THREE.Line;
      /**
       * 创建Image
       * @param pos 图片中心点位置,屏幕坐标，屏幕坐标的Y轴向上。坐标原点在左下角.
       * @param w 图片宽度
       * @param h 图片高度
       * @param imageUrlPath 图片URl地址
       * @param callResult 图片加载完成的回调 回调参数：THREE.Mesh
       * @returns void
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.createImage(new THREE.Vector3(12,2,2), 10, 20, "../img/icon.png", (mesh)=> {
       *      console.log(mesh)
       * })
       * \`\`\`
       */
      createImage: (pos: THREE.Vector3, w: number, h: number, imageUrlPath: string, callResult?: (mesh: THREE.Mesh | null) => void) => void | Promise<THREE.Mesh | null>;
      /**
       * 加载SVG
       * @param url SVG路径地址,该函数具有缓存功能，下次加载同样的图片，可以直接返回.
       * @param color 颜色
       * @param callResult SVG加载完成的回调 回调参数：THREE.Object3D和Array<THREE.MeshBasicMaterial>
       * @returns void | THREE.Object3D | null
       * @example
       * \`\`\`typescript
       * Mx.MxThreeJS.loadSVG("../img/icon.svg", 10, 20, 1.5, new THREE.Color(0xff0000), (threeobj, aryMeterial)=> {
       *      console.log(threeobj, aryMeterial)
       * })
       * \`\`\`
       */
      loadSVG: (url: string, color?: number | string | THREE.Color, callResult?: (threeobj: THREE.Object3D, aryMeterial: Array<THREE.MeshBasicMaterial>) => void, loadSet?: any) => Promise<THREE.Object3D | null>;
  }
  
   const MxThreeJS: MxThreeJS$1;
  
  /** @module McGeTool */
  
  /**
   * McGeTool
   * @example \`\`\`typescript
   * \`\`\`
   */
   class McGeToolClass {
      private mxgeTool;
      private initImp;
      /**
       * 计算闭合的区域面积
       * @param aryPoint 构成区域面积的顶点位置集合
       * @return number
       * @example
       * \`\`\`
       */
      calcArea(aryPoint: McGePoint3dArray | THREE.Vector3[]): number;
      /**
       * 判断点是否在一个闭合的多边形区域。
       * @param pt 点的坐标位置
       * @param aryPoint 闭合多边形区域的顶点坐标集合
       * @return any
       * @example
       * \`\`\` typescript
       *      let aryPoint:Array<THREE.Vector3> = [];
       *      aryPoint.push(new THREE.Vector3(0,0,0));
       *      aryPoint.push(new THREE.Vector3(0,100,0));
       *      aryPoint.push(new THREE.Vector3(100,100,0));
       *      aryPoint.push(new THREE.Vector3(100,0,0));
       *      let pt:THREE.Vector3 = new THREE.Vector3(150,150);
       *      if(McGeTool.pointInPolyline(pt,aryPoint) ){
       *        console.log("in");
       *      }
       * \`\`\`
       */
      pointInPolyline(pt: McGePoint3d, aryPoint: McGePoint3dArray | THREE.Vector3[]): boolean;
  }
   const McGeTool: McGeToolClass;
  
  /** @module McGeTool */
  
  /**
   * MrxDbgUtils
   * 当常用的工具类.
   * @example \`\`\`typescript
   * \`\`\`
   */
   class MrxDbgUtilsClass {
      private imp;
      private initImp;
      /**
       * 查找某个位置的对象.
       * @param pt 查找位置
       * @return 返回找到的对象id数组.
       * @example
       * \`\`\`
       */
      findEntAtPoint(pt: THREE.Vector3, filter?: any, mxObj?: MxDrawObject, isDocCoord?: boolean, retWordDrawXDataCall?: (id: number, data: any) => void): Promise<number[]>;
      /**
       * 交互选择对象.
       * @param strPrompt 提示字符串
       * @return 返回找到的对象id数组.
       * @example
       * \`\`\`
       */
      selectEnt(strPrompt?: string, filter?: any): Promise<number[]>;
      /**
       * 交互动态绘制一个矩形框.
       * @param pt1 矩形框绘制基点.
       * @param strPrompt 提示字符串
       * @example
       * \`\`\`
       */
      getCorner(pt1: THREE.Vector3, strPrompt?: string, drawSelectCroner?: boolean, detailedResult?: Function, isDisableAllTrace?: boolean): Promise<THREE.Vector3 | null>;
  }
   const MrxDbgUtils: MrxDbgUtilsClass;
  
  interface MxPaintBrushPropsType {
      /** 基础颜色 */
      color?: MxColorType;
      /** 渲染顺序 */
      renderOrder?: number;
      /** 透明度 */
      opacity?: number;
      /** 是否可见 */
      visible?: boolean;
      /** 线段宽度 */
      dLineWidth?: number;
      /** 线段宽度是否按照屏幕尺寸计算 */
      lineWidthByPixels?: boolean;
      /** 实线虚线总段数 破折号之间的长度和间距。
       * @describe
       * 0: 表示实线了, 0.1:有10段, 0.5:表示有两段 1: 有一段*/
      dashArray?: number;
      /** 虚线长度和实线长度的比率 (0 -全实线，1 -全虚线[不可见])
       * @describe
       * 例如取值为0.5, 虚线长度 / (实线长度 + 虚线长度) = 0.5,表示，实线与虚线长度相等*/
      dDashRatio?: number;
      /** 设置图层 */
      layer?: string;
      /** 自定义数据（必须保证JSON.parse(JSON.stringify(userData))不报错） */
      userData?: {
          [key: string]: any;
      };
      /** 其它自定义对象上的属性 */
      [propName: string]: any;
  }
  /** 自定义对象绘制时使用全局默认属性的画笔对象 */
   const MxPaintBrush: {
      /** 获取当前的画笔属性 */
      getProps(): MxPaintBrushPropsType;
      /** 设置当前画笔属性 */
      setProps(props: MxPaintBrushPropsType): MxPaintBrushPropsType;
      /** 使用画笔设置自定义对象的默认属性
       * @param entity MxDbEntity类的实例
       *  */
      use(entity: MxDbEntity): MxDbEntity & MxPaintBrushPropsType;
  };
  
  /**
   * McEdGetPointWorldDrawObject 用于构建一个动态绘制回调对象
   * @example \`\`\`typescript
   *  Mx.McEdGetPointWorldDrawObject()
   * \`\`\`
   */
   class McEdGetPointWorldDrawObject {
      [x: string]: any;
      private _McEdGetPointWorldDraw;
      constructor();
      /**
       * 绘制圆
       * @param cen 圆心位置
       * @param dRadius 圆半径
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.drawCircle(new HTREE.Vector3(0,100,5), 6)
       * \`\`\`
       *
       */
      drawCircle(cen: THREE.Vector3, dRadius: number): void;
      /**
       * 绘制直线
       * @param pt1 开始点
       * @param pt2 结束点
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.drawLine(new HTREE.Vector3(0,100,5), new HTREE.Vector3(0,600,5))
       * \`\`\`
       *
       */
      drawLine(pt1: THREE.Vector3, pt2: THREE.Vector3): void;
      /**
       * 绘制一个填充区域
       * @returns void
       * @example
       * \`\`\` typescript
       * \`\`\`
       *
       */
      drawSolid(points: THREE.Vector3[], opacity?: number): void;
      /**
       * 绘制矩形框
       * @param pt1 矩形框对角点1
       * @param pt2 矩形框对角点2
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.drawRect(new HTREE.Vector3(0,100,5), new HTREE.Vector3(0,600,5))
       * \`\`\`
       *
       */
      drawRect(pt1: THREE.Vector3, pt2: THREE.Vector3): void;
      /**
       * 绘制一个Three.js对象.
       * @param ent THREE.Object3D对象
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.drawEntity(new THREE.Object3D()))
       * \`\`\`
       *
       */
      drawEntity(ent: THREE.Object3D | null, renderOrder?: number): void;
      /**
       * 绘制一个MxCAD数据库对象
       * @param mcdbEntity MxCAD数据库对象
       * @returns void
       * @example
       * \`\`\` typescript
       * \`\`\`
       *
       */
      drawMcDbEntity(mcdbEntity: any, isUseDatabaseCurrentProperties?: boolean): any;
      /**
       * 绘制一个MxCAD数据库对象
       * @param mcdbEntity MxCAD数据库对象
       * @returns void
       * @example
       * \`\`\` typescript
       * \`\`\`
       *
       */
      drawMcDbLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): any;
      /**
       * 绘制一个文档对象
       * @param sText 文本
       * @param iSize 大小
       * @param dAngle 角度
       * @param pt 位置
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.drawText("字符串" ,36 ,90 ,new HTREE.Vector3(0,100,5))
       * \`\`\`
       *
       */
      drawText(sText: string, iSize: number, dAngle: number, pt: THREE.Vector3): void;
      /**
       * 设置动态绘制回调函数。
       * @param call 回调函数 currentPoint 回调参数 当前位置 pWorldDraw 回调参数文档绘制对象
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.setDraw((currentPoint, pWorldDraw)=> {
       *
       * })
       * \`\`\`
       */
      setDraw(call: (currentPoint: THREE.Vector3, pWorldDraw?: any) => void): void;
      /**
       * 设置绘制对象颜色.
       * @param iColor 颜色
       * @returns void
       * @example
       * \`\`\` typescript
       * pWorldDraw.setColor(0xFFFFFF)
       * \`\`\`
       */
      setColor(iColor: number | string | THREE.Color): void;
      /**
       * 得到绘制对象颜色.
       * @returns 颜色
       * @example
       * \`\`\` typescript
       * pWorldDraw.getColor()
       * \`\`\`
       */
      getColor(): number | string | THREE.Color;
      /**
       * 动态绘制一个自定义实体
       * @returns
       * @example
       * \`\`\` typescript
       *
       * \`\`\`
       */
      drawCustomEntity(ent: any, renderOrder?: number): void;
  }
  
  /** @module MrxDbgUiPrBaseReturn*/
  /**
   * MrxDbgUiPrBaseReturn枚举
   * @description
   * 用于适配{@link MrxDbgUiPrPoint.go} 和 {@link MrxDbgUiPrPoint.goWhile} 方法中的回调参数\`status\`
   * @example
   * \`\`\`
   * const Point = new Mx.MrxDbgUiPrPoint()
   * Point.go((status)=> {
   *  if(Mx.MrxDbgUiPrBaseReturn.kCancel === status) {
   *    // 取消
   *  }
   * })
   *
   * \`\`\`
   * @enum
   * */
   enum MrxDbgUiPrBaseReturn {
      /** 取消 */
      kCancel = -2,
      /** 空输入，当输入关键字和实体时会返回此值 */
      kNone = -1,
      /** 获取用户输入成功 */
      kOk = 0,
      /** 用户输入了关键字*/
      kKeyWord = 1
  }
  
  /** @module MrxDbgUiPrPointClass */
  
  /** 鼠标样式类型 */
   enum MxCursorType {
      /** 正常 */
      kNormal = 0,
      /** 矩形 */
      kRect = 1,
      /**十字 */
      kCross = 2
  }
  /** 动态输入显示类型 */
   enum DynamicInputType {
      /** 不进行动态显示 */
      kNoInput = 0,
      /** X,Y坐标输入 */
      kXYCoordInput = 1,
      /** 输入与前一个点的距离和与水平的夹角,并能动态跟踪. */
      kDistanceInput = 2,
      /** 仅显示提示 */
      kDynTip = 3,
      /** 自动确定输入类型. */
      kAutoInput = 4
  }
  /** 当前交互操作返回值类型 */
   enum DetailedResult {
      /** 未知操作 */
      kUnknown = 1,
      /** 移动触摸按下 */
      kTouchDownIn = 2,
      /** 移动触摸抬起 */
      kTouchUpIn = 3,
      /** 鼠标左键输入。 */
      kMouseLeftIn = 4,
      /** 鼠标左键输入抬起。 */
      kMouseLeftUpIn = 5,
      /** 鼠标右键输入 */
      kMouseRightIn = 6,
      /** 命令行输入有效内容退出,比如输入了关键字 */
      kKeyIn = 7,
      /** 坐标输入（文字提示输入对应数字也行） */
      kCoordIn = 8,
      /** 空回车输入 */
      kNullEnterIn = 9,
      /** 空回空格输入 */
      kNullSpaceIn = 10,
      /** ESC输入 */
      kEcsIn = 11,
      /** 新命令，使用当前命令退出. */
      kNewCommadIn = 12,
      /** 程序终止. */
      kCodeAbort = 13
  }
  /** 用户输入函数控制操作符 */
   enum UserInputControls {
      /** 由正射模式控制 */
      kGovernedByOrthoMode = 1,
      /** 接受用户空输入 */
      kNullResponseAccepted = 2,
      /** 不回显Ctrl c的取消 */
      kDontEchoCancelForCtrlC = 4,
      /** 不更新最后一点 */
      kDontUpdateLastPoint = 8,
      /** 无图纸限制检查 */
      kNoDwgLimitsChecking = 16,
      /** 不接受0输入 */
      kNoZeroResponseAccepted = 32,
      /** 不接受负数输入 */
      kNoNegativeResponseAccepted = 64,
      /** 接受3d坐标 */
      kAccept3dCoordinates = 128,
      /** 接受鼠标向上移动作为指针 */
      kAcceptMouseUpAsPoint = 256,
      /** 任何空格都会终止输入 */
      kAnyBlankTerminatesInput = 512,
      /** 首字母空格终止输入 */
      kInitialBlankTerminatesInput = 1024,
      /** 接受其他输入字符串 */
      kAcceptOtherInputString = 2048,
      /** 由UCS检测控制 */
      kGovernedByUCSDetect = 4096,
      /** 无z方向正交 */
      kNoZDirectionOrtho = 8192,
      /** 接受空格输入 */
      kSpacesInAccepted = 16384
  }
   class MrxDbgUiPrBase {
      protected imp: any;
      protected status: MrxDbgUiPrBaseReturn;
      constructor(imp: any);
      /**
       * 返回关键字列表
       * @returns 关键词列表
       */
      keyWords(): string;
      /**
       * 设置关键字列表
       * @param keyWordList 关键词列表
       * @returns void
       */
      setKeyWords(keyWordList: string): void;
      /**
       * 提示字符串
       * @returns 提示消息
       */
      message(): string;
      /**
       * 设置提示字符串
       * @param message 提示消息
       * @returns 提示消息
       */
      setMessage(message: string): void;
      /**
       * 清除上一次的输入点
       * @returns 选择的关键字
       */
      clearLastInputPoint(): void;
      /**
       * 设置上一次的输入点。
       * @returns 选择的关键字
       */
      setLastInputPoint(pt: THREE.Vector3 | undefined): void;
      /**
       * 返回用户选择的关键字
       * @returns 选择的关键字
       */
      keyWordPicked(): string;
      /**
       * 测试某一个关键字是否被用户选择
       * @param matchKeyWord 要检测的关键字
       * @returns true为真
       */
      isKeyWordPicked(matchKeyWord: string): boolean;
      /**
       * 设置交互过程的动态绘制调用对象
       * @param pDraw {@link McEdGetPointWorldDrawObject | 动态绘制调用对象}
       * @returns void
       */
      setUserDraw(pDraw: McEdGetPointWorldDrawObject | ((currentPoint: THREE.Vector3, pWorldDraw: McEdGetPointWorldDrawObject) => void)): void;
      /**
       * 返回交互操作退出的详细原因
       */
      getDetailedResult(): DetailedResult;
      getStatus(): MrxDbgUiPrBaseReturn;
      /**
       * 把动态绘制的对象，保留到图上。
       * @param callAddEntity 回调参数ent 类型：THREE.THREE.Object3D
       * @returns 点对象 DWG图纸坐标
       */
      drawReserve(callAddEntity?: (ent: THREE.Object3D) => void): void;
      /**
       * 设置需要的Touche输入类型,默认值是 {@link MxType.InputToucheType.kGetBegan}
       */
      setInputToucheType(toucheType: number): void;
      /**
       * 返回需要的Touche输入类型
       */
      getInputToucheType(): number;
      /**
       * 设置光标类型
       */
      setCursorType(type: MxCursorType): void;
      /**
       * 返回光标类型
       */
      getCursorType(): MxCursorType;
      /**
       * 设置动态输入类型
       */
      setDynamicInputType(type: DynamicInputType): void;
      /**
       * 返回动态输入类型
       */
      getDynamicInputType(): DynamicInputType;
      /**
       * 是否禁用动态输入框
       */
      isDisableDynInput(): boolean;
      /**
       * 设置是否禁用动态输入框
       */
      setDisableDynInput(isDisable: boolean): void;
      /**
       * 设置是否禁用捕捉
       */
      setDisableOsnap(isDisable: boolean): void;
      /**
       * 是否输入点遍移一个距离
       */
      isOffsetInputPostion(): boolean;
      /**
       * 设置输入点遍移一个距离
       */
      setOffsetInputPostion(isOffset: boolean): void;
      /**
       * 是否禁用捕捉
       */
      isDisableOsnap(): boolean;
      setDisableDynamicTrace(isDisable: boolean): void;
      isDisableDynamicTrace(): boolean;
      setDisablePolarAxisTrace(isDisable: boolean): void;
      isDisablePolarAxisTrace(): boolean;
      setDisableGridTrace(isDisable: boolean): void;
      isDisableGridTrace(): boolean;
      setDisableOrthoTrace(isDisable: boolean): void;
      isDisableOrthoTrace(): boolean;
      disableAllTrace(isDisable?: boolean): void;
      /**
       * 返回输入控制设置，UserInputControls
       */
      userInputControls(): number;
      /**
       * 设置输入控制设置，UserInputControls
       */
      setUserInputControls(contros: number): void;
  }
  /**
   * MrxDbgUiPrPoint 用于构建一个取点对象
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrPoint()
   * \`\`\`
   */
   class MrxDbgUiPrPoint extends MrxDbgUiPrBase {
      constructor();
      /**
       * 得以获取的点对象，Three.js坐标
       * @returns 点对象 THREE.THREE.Vector3
       */
      value(): THREE.Vector3;
      /**
       * 得到 MxCAD下CAD图纸坐标.
       * @returns 点对象 MdGePoint3d
       */
      getCADValue(): any;
      /**
       * 得以获取的点对象，DWG图纸坐标.
       * @returns 点对象 DWG图纸坐标
       */
      valueDocCoord(): THREE.Vector3;
      /**
       * 得到动态拖动的基点
       * @returns 基点 THREE.THREE.Vector3
       */
      basePt(): THREE.Vector3;
      /**
       * 设置动态拖动的基点
       * @param basePt 基点 THREE.THREE.Vector3
       * @returns 点对象 DWG图纸坐标
       */
      setBasePt(basePt: THREE.Vector3): void;
      /**
       * 设置使用动态拖动的基点
       * @param useIt 是否设置 默认为false
       * @returns void
       */
      setUseBasePt(useIt: boolean): void;
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<THREE.Vector3 | null>;
      /**
       * 动态拖动，连续取点，直到ESC退出。
       * @param retcall 回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @param exitcall 回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      goWhile(retcall: (status: MrxDbgUiPrBaseReturn) => any, exitcall?: (status: MrxDbgUiPrBaseReturn) => any): void;
      /**
       * 停止当前动态拖动
       * @returns void
       */
      abort(cause: DetailedResult): void;
  }
  
   function drawMxDbImage(): void;
  
  /**
   * MxDbImage 图片对象.
   */
   class MxDbImage extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbImage;
      private pt1;
      private pt2;
      private imagePath;
      private isLoadMaterialFromPath;
      private material;
      private angle;
      getTypeName(): string;
      /** 返回图片的旋转角度,相对图片中心点旋转.
       * @param
       * */
      getAngle(): number;
      /** 设置图片的旋转角度,相对图片中心点旋转.
       * @param
       * */
      setAngle(angle: number): void;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /** 设置图片路径
       * @param sPath 路径
       * */
      setImagePath(sPath: string): void;
      /** 获取图片路径 */
      getImagePath(): string;
      /** 设置图片材质
       * @param material  THREE.MeshLambertMaterial
       * */
      setMaterial(material: THREE.MeshLambertMaterial): void;
      /** 加载图片材质
       * */
      loadMaterial(imagePath?: string): void;
      /** 设置图片对角点1
       * @param pt1 THREE.Vector3坐标点
       * */
      setPoint1(pt1: THREE.Vector3): void;
      /** 获得图片对角点1 */
      getPoint1(): THREE.Vector3;
      /** 设置图片对角点2
       * @param pt2 THREE.Vector3坐标点
       *  */
      setPoint2(pt2: THREE.Vector3): void;
      /** 获得图片对角点2 */
      getPoint2(): THREE.Vector3;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbEntity;
  }
  
  /** @module MxDbSVG*/
  /**
   * MxDbSVGText 为SVG提供文字数据
   * */
   class MxDbSVGText {
      /** 文字的位置 */
      txtPos: THREE.Vector3;
      /** 文字内容 */
      txt: string;
      /** 文字高度 */
      txtHeight: number;
      /** 文字颜色 */
      color: number | string | THREE.Color | undefined;
      /** THREE.Sprite */
      _txtObject: THREE.Sprite | null;
      /** 比例 */
      _txtAspectRatio: number;
      /** 文字是否能独立移动 */
      move: boolean;
      /** 文字移动到距图片远处，自动绘制一个连接线 */
      drawConnectingLine: boolean;
      /** 连接线的临时绘制对象 */
      _connectingLine: THREE.Line | null;
      /** 字体样式 */
      fontStyle: string;
      /** 下划线 */
      underline: boolean;
      /** 下划线的临时绘制对象 */
      _underLine: THREE.Line | null;
  }
  
   function drawMxDbSVG(): Promise<void>;
  
  /** @module MxDbSVG*/
  
  /**
   * MxDbSVG 绘制SVG图形.
   */
   class MxDbSVG extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbSVG;
      private svgPos;
      private svg;
      private svgPath;
      private svgSize;
      private svgAlignmentRatio;
      private imagePath;
      private isLoadMaterialFromPath;
      private material;
      /** 延z轴旋转的数值 */
      svgRotate: number;
      /** 是否倒置SVG图形 */
      svgReverse: boolean;
      svgMirror: boolean;
      private svgChildColor;
      svgMargin: THREE.Vector2;
      private isSvgDirtyLocation;
      private isLoadFromPath;
      private aryText;
      private svgBoxSize;
      /** 固定尺寸，图片和文字大小，取屏幕像素绘图单位。 */
      fixedSize: boolean;
      /**使用svg的颜色 */
      useSvgColor: boolean;
      setSvgChildColor(aryColor: number[]): void;
      getSvgChildColor(): number[];
      private calcVewSize;
      calcSvgDrawRect(mxObj: MxDrawObject): any;
      private calcImageDrawRect;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /**
       * 设置SVG的路径
       * @param path 路径
       * @param preload 是否提前加载SVG
       * */
      setSvgPath(path: string, preload?: boolean): Promise<void>;
      /**
       * 获取SVG的路径
       * */
      getSvgPath(): string;
      /**
       * 设置SVG显示位置
       * @param pos  THREE.Vector3
       * */
      setSvgPostion(pos: THREE.Vector3): void;
      /** 设置图片路径
       * @param sPath 路径
       * */
      setImagePath(sPath: string, material?: THREE.MeshLambertMaterial): void;
      /** 获取图片路径 */
      getImagePath(): string;
      /**
       * 获取SVG显示位置
       * */
      getSvgPostion(): THREE.Vector3;
      /**
       * 设置SVG大小
       * @param size THREE.Vector2 x表示宽度y表示高度
       * */
      setSvgSize(size: THREE.Vector2): void;
      getSvgSize(): THREE.Vector2;
      /** 设置SVG 的调整比例
       * @param alignmentRatio THREE.Vector2
       *  */
      setSvgAlignmentRatio(alignmentRatio: THREE.Vector2): void;
      getSvgAlignmentRatio(): THREE.Vector2;
      /** 获取文字数组下标中的文字
       * @param index 数组下标
       * @return {@link MxDbSVGText}
       *  */
      getText(index: number): MxDbSVGText | null;
      /** 添加文字
       * @param txt {@link MxDbSVGText}
       *  */
      addText(txt: MxDbSVGText): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      private calcSvgPosition;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbSVG;
      transformBy(mat: THREE.Matrix4): void;
      getTypeName(): string;
      /**
       * 设置颜色
       * @param color 颜色值
       * */
      setColor(color: number | string | THREE.Color): this;
      /**
       * 设置svg对象
       * */
      setSvg(svg: any): void;
      private calcSvgBoxSize;
      reComputeSVG(): void;
      protected onViewChange(): boolean;
  }
  
   function drawMxDbPolyline(): void;
  
  /**
   * MxDbPolyline 多义线对象(多个点构成的线段)
   */
   class MxDbPolyline extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbPolyline;
      /** 顶点位置集合 */
      points: THREE.Vector3[];
      getTypeName(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      create(): MxDbEntity;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      /** 添加顶点位置 */
      addVertexAt(pt: THREE.Vector3): void;
      /** 顶点数量 */
      numVerts(): number;
      getPointAt(index: number): THREE.Vector3 | null;
      /**  设置顶点
       * @param index 替换的顶点在当前points集合的下标位置
       * @param pt 要替换设置的顶点
       *  */
      setPointAt(index: number, pt: THREE.Vector3): boolean;
  }
  
   function drawMxDb2LineAngularDimension(): MxDb2LineAngularDimension;
  
   class MxDb2LineAngularDimension extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDb2LineAngularDimension;
      /**
       * MxDb2LineAngularDimension
       * 显示角度测量的图形
       * @param  options.points [point1(起始点)、point2(角顶点)、point3(结束点)]
       * @param  options.colors [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]
       * @example
       * \`\`\` typescript
       * const draw = Mx.MxFun.getCurrentDraw();
       * const points = [ getPoint.value(),
       *          getPoint.value().add(new THREE.Vector3(8880, 0, 0)),
       *          getPoint.value().add(new THREE.Vector3(0, 6666, 0)),
       *       ]
       * const colors = ['#F00880','#00ff1a', void 0, 0XFF0000]
       * const obj = new Mx.MxDb2LineAngularDimension().setPoints(points).setColor(colors).setLineWidth(6)
       * draw.addMxEntity(obj)
       * \`\`\`
       **/
      constructor(options?: {
          /** 传入三个位置THREE向量 分别对应 属性: point1(起始点)、point2(角顶点)、point3(结束点) 计算角度 */
          points?: THREE.Vector3[];
          /**  colors 各标注的颜色设置:
           * [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]
           * 某一项为null或undefined采用绘制颜色 */
          colors?: UnstableColor[];
      });
      point1: three.Vector3;
      point2: three.Vector3;
      point3: three.Vector3;
      /**
       * colors 各标注的颜色设置:
       * [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]
       * 某一项为null或undefined采用绘制颜色
       * */
      colors: UnstableColor[];
      private calculateLineAngle;
      /**
       * 设置point1 、 point2、point3 向量位置
       * @param { THREE.Vector3[] } points
       */
      setPoints(points: THREE.Vector3[]): this;
      /**
       * 设置颜色组合
       * @param colors [起始线段颜色, 结束线段颜色, 标注角度圆弧颜色, 文字标注的角度颜色]
       * 某一项为null或undefined采用绘制颜色 || 单颜色
       * */
      setColor(colors: UnstableColor[] | MxColorType): this;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): three.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): any;
      create(): MxDb2LineAngularDimension;
      transformBy(mat: THREE.Matrix4): void;
      getTypeName(): string;
  }
  
  /** 简单颜色滤镜矩阵 */
  interface ChannelParamTypes {
      r?: number;
      g?: number;
      b?: number;
  }
   class MxFilters {
      private uniformObj;
      private filtersStr;
      private filtersTypes;
      private VSHADER_SOURCE;
      private FSHADER_SOURCE;
      private _matrix;
      /**
       * 过滤或增强某个颜色通道
       * @param {ChannelParamTypes}
       * */
      channel({ r, g, b }: ChannelParamTypes): this;
      /**
       * 改变亮度
       * @param {number} p
       * p = 0 全暗，p > 0 且 p < 1 调暗，p = 1 原色， p > 1 调亮
       * */
      brightness(p: number): this;
      /**
       * 饱和度
       * @param {number} p
       * p = 0 完全灰度化，p = 1 原色，p > 1 增强饱和度
       * */
      saturate(p: number): this;
      /**
       * 对比度
       * @param {number} p
       *  p = 1 原色， p < 1 减弱对比度，p > 1 增强对比度
       * */
      contrast(p: number): this;
      /**
       * 透明度
       * @param {number} p
       * p = 0 全透明，p = 1 原色
       * */
      opacity(p: number): this;
      /**
       * 反色
       * @param {number} p
       * p = 0 原色， p = 1 完全反色
       * */
      invert(p: number): this;
      /**
       * 灰度
       * @param {number} p 0~1
       * */
      grayscale(p?: number): this;
      /**
       * 深褐色
       * @param {number} p 0~1
       * */
      sepia(p?: number): this;
      /**
       * 色相旋转，将色调沿极坐标转过deg角度
       * @param {number} deg 0~360
       * */
      hueRotate(deg: number): this;
      /**
       * 色相旋转，将色调沿极坐标转过deg角度
       * @param {number} deg 0~360
       * */
      /**
       * 卷积
       * @param {Matrix3} cKernel 3*3的矩阵
       * @param {number} stStep 1 / 9
       * @param {number} scaleFactor 521
       * */
      convolution(cKernel: THREE.Matrix3, stStep?: number, scaleFactor?: number): this;
      /**
       * 重置所有滤镜效果
       * */
      reset(): this;
      _getFilterShaderData(texture: THREE.Texture): {
          uniforms: {
              e_Texture: {
                  value: three.Texture;
              };
              colorMatrix: {
                  value: three.Matrix4;
              };
          };
          vertexShader: string;
          fragmentShader: string;
      };
      _getFilterColor(color?: string | number | THREE.Color, opacity?: number): three.Color;
      /** 转成JSON字符串 */
      toJSON(): string;
      /** 还原序列化的数据 */
      static fromJSON(json: string): MxFilters;
  }
  
  /** 动态绘制形状
   * 基于THREE.Shape计算实现的形状
   * 通过扩展可以实现各种2d 3d形状
   *  **/
   class MxDbShape extends MxDbEntity {
      protected _paths: THREE.CurvePath<THREE.Vector3 | THREE.Vector2>;
      protected points: THREE.Vector3[];
      protected closedLine: THREE.Curve<THREE.Vector3>;
      protected isLoadMaterialFromPath: boolean;
      protected material: THREE.MeshLambertMaterial | null;
      /** 描边颜色 */
      stroke: UnstableColor;
      setStroke(stroke: UnstableColor): this;
      /** 描边线段的宽度 */
      strokeLineWidth: number;
      setStrokeLineWidth(strokeLineWidth: number): this;
      /** 描边是否为虚线 */
      isStrokeDashLine: boolean;
      setIsStrokeDashLine(isStrokeDashLine: boolean): this;
      /** 填充 */
      isFill: boolean;
      setIsFill(isFill: boolean): this;
      /** 填充图片路径 */
      protected _fillImageSrc: string | false | null | undefined;
      get fillImageSrc(): string | false | null | undefined;
      set fillImageSrc(src: string | false | null | undefined);
      /**
       * 设置图片值
       * fillImageSrc 当设置为null | false 时取消图片填充
       * */
      setFillImageSrc(fillImageSrc: string | null | false | undefined): this;
      /**
       * fillImageParam 填充背景图片的参数设置(如果使用了滤镜则部分参数功能失效)
       * */
      fillImageParam: {
          offset?: THREE.Vector2;
          repeat?: THREE.Vector2;
          rotation?: number;
          center?: THREE.Vector2;
      } | undefined;
      setFillImageParam(param: MxDbShape['fillImageParam']): void;
      /** 线段细分数值 */
      curveSegments: number;
      setCurveSegments(curveSegments: number): this;
      /** 闭合 */
      closed: boolean;
      setClosed(closed: boolean): this;
      /**
       * 设置滤镜对象{@link MxFilters} 默认为undefined | null 则不使用该滤镜效果
       * */
      filter: MxFilters | undefined | null;
      /** 获取当前滤镜对象 {@link MxFilters} */
      getFilter(): MxFilters | undefined | null;
      setFilter(filter: MxFilters | undefined | null): void;
      _cornerRadius: number[] | number;
      /** 圆角半径 (一个向量点对应一个角的半径值)*/
      get cornerRadius(): number | number[];
      set cornerRadius(radius: number | number[]);
      /**
       * 设置圆角 圆角的半径（如果参数为数组则一个角度对应一个圆角半径）
       * @param { number | number[] } radius 圆角半径 为数组时[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4； 或者直接设置半径值 则四个角统一半径
       * @param isScreenCoord 是否根据屏幕坐标设置
       * */
      setCornerRadius(radius: number | number[], isScreenCoord?: boolean): void;
      /** 需要输入和输出的属性 */
      protected _propertyDbKeys: string[];
      getTypeName(): string;
      /** 获取坐标集合 */
      protected getShapePoints(paths: THREE.CurvePath<THREE.Vector3 | THREE.Vector2>): three.Vector3[];
      /*** 创建路径 */
      protected createPaths(shapes: THREE.Curve<THREE.Vector3 | THREE.Vector2> | THREE.Curve<THREE.Vector3 | THREE.Vector2>[]): three.CurvePath<three.Vector3 | three.Vector2>;
      /** 动态绘制函数*/
      protected _draw(pWorldDraw: McGiWorldDraw, vertices: THREE.Vector3[]): void;
      /** 获取生成圆角后的点 */
      getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];
      /** 绘制描边 */
      protected _drawStoreLine(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[], draw?: (pWorldDraw: McGiWorldDraw) => void): void;
      /** 获取线段闭合后的曲线点数 */
      getClosedPoints(points: THREE.Vector3[]): three.Vector3[];
      /** 获取长度 */
      getTotalLength(): number | undefined;
      getGetLength(): number;
      /** 获取面积 */
      getArea(): number;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /** 图片填充 */
      _fillImg(pWorldDraw: McGiWorldDraw, points: THREE.Vector3[]): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      transformBy(mat: THREE.Matrix4): void;
  }
  
  /*** 椭圆(弧)形状 */
   class MxDbEllipseShape extends MxDbShape {
      constructor();
      getTypeName(): string;
      /** 圆心 */
      center: three.Vector3;
      setCenter(center: THREE.Vector3): this;
      /** X轴椭圆弧半径 默认当前坐标转换下的10像素 */
      xRadius: number;
      setXRadius(xRadius: number): this;
      /**  Y轴椭圆弧半径 默认当前坐标转换下的10像素 */
      yRadius: number;
      setYRadius(yRadius: number): this;
      /** 弧开始角度 默认0*/
      startAngle: number;
      setStartAngle(startAngle: number): this;
      /** 弧结束角度 默认0*/
      endAngle: number;
      setEndAngle(endAngle: number): this;
      /** 以顺时针方向创建（扫过）弧线 默认false */
      clockwise: boolean;
      setClockwise(clockwise: boolean): this;
      /** 旋转角度 */
      rotation: number;
      setRotation(rotation: number): this;
      /** 是否闭合到中心位置 */
      isClosedToCenter: boolean;
      setIsClosedToCenter(isClosedToCenter: boolean): this;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /** 绘制椭圆形状 */
      drawEllipseShape(pWorldDraw: McGiWorldDraw): {
          /** 圆心角 */
          centralAngle: number;
          /** 圆弧曲线 */
          curve: three.EllipseCurve;
          /** 构成圆弧的向量点 */
          points: three.Vector3[];
      };
      /** 创建圆弧 */
      createEllipseCurve(x?: number, y?: number, xRadius?: number, yRadius?: number, startAngle?: number, endAngle?: number, clockwise?: boolean, rotation?: number): three.EllipseCurve;
      /** 获取圆角的点集合(椭圆不需要) */
      getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];
      getClosedPoints(points: THREE.Vector3[]): THREE.Vector3[];
      getClosedLine(points: THREE.Vector3[]): three.CatmullRomCurve3;
      getGripPoints(): three.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
  /*** 圆(弧)形状 */
   class MxDbCircleShape extends MxDbEllipseShape {
      getTypeName(): string;
      /*** 圆半径 */
      get radius(): number;
      set radius(radius: number);
      setRadius(radius: number): this;
      setXRadius(xRadius: number): this;
      setYRadius(yRadius: number): this;
  }
  
   function drawMx3PointArc(): void;
  
  /** 三点动态绘制圆弧 point1圆弧起始点 point2是圆弧结束点, point3圆弧任意一点  */
   class Mx3PointArc extends MxDbCircleShape {
      static cmd: string;
      static draw: typeof drawMx3PointArc;
      static isRegister: boolean;
      constructor();
      point1: three.Vector3;
      point2: three.Vector3;
      point3: three.Vector3;
      /** 自动确定顺逆时针绘制 */
      autoClockwise: boolean;
      closed: boolean;
      /** 圆心角 */
      centralAngle: number;
      getTypeName(): string;
      create(): Mx3PointArc;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      /** 计算三个控制点的角度 */
      compute3PointAngle(point1?: three.Vector3, point2?: three.Vector3, point3?: three.Vector3): number[];
      /** 根据三个控制点更新圆心 */
      upDateCenter(point1?: three.Vector3, point2?: three.Vector3, point3?: three.Vector3): three.Vector3;
      /** 根据圆心和一个控制点自动更新半径大小 */
      upDateRadius(point?: three.Vector3): number;
      /** 根据 三个控制点到圆心的角度  更新顺逆时针绘制 */
      upDataClockwise(angle1: number, angle2: number, angle3: number): void;
      /** 更新数据信息 */
      updateDataInfo(): void;
      /** 获取圆弧线中点坐标 */
      getArcMidPoint(): three.Vector3;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   class Mx2PointArc extends Mx3PointArc {
      static cmd: string;
      static draw: () => Promise<void>;
      static isRegister: boolean;
      getTypeName(): string;
      create(): Mx2PointArc;
      get startPoint(): three.Vector3;
      set startPoint(v: three.Vector3);
      get endPoint(): three.Vector3;
      set endPoint(v: three.Vector3);
  }
  
   function drawMxDbCoord(): void;
  
  /**
   * MxDbCoord 引线坐标测量
   */
   class MxDbCoord extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbCoord;
      /** 测量点位置 */
      point1: THREE.Vector3;
      /** 测量结果显示位置 */
      point2: THREE.Vector3;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbEntity;
      transformBy(mat: THREE.Matrix4): void;
      getTypeName(): string;
  }
  
  /** 绘制 MxDbLine */
   function drawMxDbLine(): Promise<void>;
  
  /**
   * MxDbLine 直线对象.
   */
   class MxDbLine extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbLine;
      /** 直线的开始点 */
      pt1: THREE.Vector3;
      /** 直线的结束点 */
      pt2: THREE.Vector3;
      getTypeName(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /** 设置的开始点 */
      setPoint1(pt1: THREE.Vector3): void;
      getPoint1(): THREE.Vector3;
      /** 设置的结束点 */
      setPoint2(pt2: THREE.Vector3): void;
      getPoint2(): THREE.Vector3;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbEntity;
      getGeomExtents(): THREE.Box3 | null;
      /**
       * 返回曲线长度.
       * @returns number
       */
      getGetLength(): number;
  }
  
   function drawMxDbRect(): Promise<void>;
  
  /**
   * MxRectEntity 矩形对象.
   */
   class MxDbRect extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbRect;
      private cornerRadius;
      /**
       * pt1: 构成矩形的第一个点
       * */
      pt1: THREE.Vector3;
      /**
       * pt1: 构成矩形的第二个点(对角点)
       * */
      pt2: THREE.Vector3;
      /**
       * 是否需要颜色填充.
       * */
      isSolidColorFill: boolean;
      /**
       * fillImageParam 填充背景图片的参数设置(如果使用了滤镜则部分参数功能失效)
       * */
      private fillImageParam;
      /**
       * 设置滤镜对象{@link MxFilters} 默认为undefined | null 则不使用该滤镜效果
       * */
      private filter;
      /**
       * fillImageSrc(优先级低于fillColor属性) 填充背景图片的地址
       * */
      private fillImageSrc;
      private isLoadMaterialFromPath;
      private material;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbRect;
      transformBy(mat: THREE.Matrix4): void;
      /**
       * setRadius 设置圆角 圆角的半径  如[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4
       * @param { number | number[] } radius 圆角半径 为数组时[3, 2, 1, 4]分别对应左上角圆角半径3  右上角2  右下角1 左下角4； 或者直接设置半径值 则四个角统一半径
       * */
      setRadius(radius: number | number[], isScreenCoord?: boolean): void;
      getTypeName(): string;
      /** 获取当前滤镜对象 {@link MxFilters} */
      getFilter(): MxFilters | undefined | null;
      /** 设置当前滤镜对象
       * @param filter {@link MxFilters}
       *  */
      setFilter(filter: MxFilters | undefined | null): void;
      /** 设置填充的背景图片路径 */
      setFillImagePath(sPath: string | undefined): void;
      /** 获取填充的背景图片路径 */
      getFillImagePath(): string | undefined;
  }
  
   function drawMxDbAlignedDimension(): MxDbAlignedDimension;
  
  /** @module MxDbAlignedDimension*/
  
  /**
   * MxDbAlignedDimension 尺寸标注
   */
   class MxDbAlignedDimension extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbAlignedDimension;
      /**
       * MxDbAlignedDimension
       * 尺寸标注
       * @param options.points 提供两个向量测量尺寸
       * @param options.fontColor 字体颜色
       * @example \`\`\`typescript
       * const draw = Mx.MxFun.getCurrentDraw();
       * const v3 = new THREE.Vector3()
       * const points = [v3 , v3.clone().add(new THREE.Vector3(8880, 0, 0))]
       * const colors = ['#F00880','#00ff1a']
       * draw.addMxEntity(
       *   new Mx.MxDbAlignedDimension({ points })
       *   .setColor(colors)
       *   .setLineWidth(6)
       * )
       * \`\`\`
       **/
      constructor(options?: {
          /** [point1, point2] 两个向量位置 */
          points?: THREE.Vector3[];
          /** 字体颜色 */
          fontColor?: MxColorType;
      });
      point1: THREE.Vector3;
      point2: THREE.Vector3;
      fontColor: UnstableColor;
      /**
       * 设置两个点位置向量
       * @param { THREE.Vector3[] } points [THREE.Vector3, THREE.Vector3]
       */
      setPoints(points: THREE.Vector3[]): void;
      getTypeName(): string;
      private getDirection;
      /**
       * 获取尺寸距离
       * */
      getDimText(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /**
       * 设置测量的开始点
       * @parma pt1 three.js坐标点位
       * */
      setPoint1(pt1: THREE.Vector3): void;
      /**
       * 设置测量的结束点
       * @parma pt1 three.js坐标点位
       * */
      setPoint2(pt2: THREE.Vector3): void;
      setColor(color: UnstableColor | UnstableColor[]): this;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      create(): MxDbAlignedDimension;
  }
  
   function drawMxDbArea(): void;
  
  /**
   * MxDbArea 任意不规则多边形
   * */
   class MxDbArea extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbArea;
      /** 构成多边形的顶点集合 */
      points: Array<THREE.Vector3>;
      isFill: boolean;
      fillColor: MxColorType;
      fillOpacity: number;
      getTypeName(): string;
      create(): MxDbEntity;
      /** 在worldDraw动态绘制时会计算当前顶点坐标集合的面积,并显示渲染计算后的计算结果
       * @returns 返回的计算后的面积结果
       *  */
      getDimText(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      /**
       * 添加构成多边形的点
       * @param pt 位置坐标
       *  */
      addPoint(pt: THREE.Vector3): void;
      /**
       * 获取构成多边形的顶点集合
       *  */
      getPoints(): Array<THREE.Vector3>;
      /**
       * 清空构成多边形的顶点集合
       *  */
      clearPoint(): void;
  }
  
   function drawMxDbLeadTag(): Promise<void>;
  
  /**
   * MxDbLeadTag 引出标注
   * */
   class MxDbLeadTag extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbLeadTag;
      point: three.Vector3;
      leadLen: number;
      text: string;
      textHeight: number;
      getTypeName(): string;
      private createDots;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      onViewChange(): boolean;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): any;
  }
  
   function drawMxDbAnyLine(): void;
  
  /** @module MxDbAnyLine*/
  
  /**
   * MxDbAnyLine
   * 任意线段
   */
   class MxDbAnyLine extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbAnyLine;
      /** 构成线段的顶点坐标集合 */
      points: THREE.Vector3[];
      getTypeName(): string;
      create(): MxDbAnyLine;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /** 设置线段points
       * @param points 构成线段的多个点
       */
      setPoints(points: THREE.Vector3[]): this;
      /** 获取线段的包围盒的中心点坐标 */
      getCenter(): THREE.Vector3;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
  }
  
   function drawMxDbCloudLine(): void;
  
  /**
   * MxDbCloudLine 对象. 绘制任意的云线
   */
   class MxDbCloudLine extends MxDbEntity {
      static isRegister: boolean;
      static cmd: string;
      static draw: typeof drawMxDbCloudLine;
      private points;
      private radius;
      private cachePoint;
      constructor();
      getTypeName(): string;
      create(): MxDbEntity;
      /** 设置构成云线的每个圆弧半径长度
       * @parma radius 圆弧半径
       *  */
      setRadius(radius: number): void;
      /**
       * 获取云线的圆弧半径
       * */
      getRadius(): number;
      getCachePoint(): THREE.Vector3[] | null;
      private clacNewArcDiameterPoint;
      private createCloudArcCurvePoints;
      /**
       * 添加云线的顶点坐标, 该顶点坐标会根据上一个构成云线的点计算出下一个云线的顶点位置
       * @param pt 坐标位置
       * @param isAddToDrawGeometry 如果为true 将立即添加顶点并绘制下一个圆弧
       * */
      addPoint(pt: THREE.Vector3, isAddToDrawGeometry?: boolean): void;
      /**
       * 绘制两点之间的云线(与addPoint不同的是它不是只绘制一个半圆弧,而是绘制两点之间相连接的所有半圆弧)
       * @param pt1 云线开始点
       * @param pt2 云线结束点
       * */
      addLine(pt1: THREE.Vector3, pt2: THREE.Vector3): three.Vector3;
      /** 重新计算云线的的所有顶点坐标, 如绘制完云线后 重新设置了圆弧半径, 在worldDraw动态绘制时会调用该方法 */
      reCalculateDrawGeometryPoint(): THREE.Vector3[] | null;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /**
       * 获取云线包围盒的中心点
       * */
      getCenter(): THREE.Vector3;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
  }
  
   function drawMxDbRegularPolygon(): void;
  
   class MxDbRegularPolygon extends MxDbShape {
      static cmd: string;
      static draw: typeof drawMxDbRegularPolygon;
      /** 正多边形的中心点位置 */
      centerPoint: three.Vector3;
      /** 正多边形两条边之间的交点位置 */
      otherPoint: three.Vector3;
      /** 正多边形边的数量 */
      sidesNumber: number;
      getTypeName(): string;
      /**
       * MxDbRegularPolygon 正多边形
       */
      constructor();
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbLeadComment(): void;
  
  /**
   * MxDbLeadComment 引线文字标注
   * */
   class MxDbLeadComment extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbLeadComment;
      /** 标注点 */
      point1: THREE.Vector3;
      /** 文字显示位置 */
      point2: THREE.Vector3;
      /** 文字内容 */
      text: string;
      /** 文字高度 */
      textHeight: number;
      textWidth: number;
      /** 文字大小，取屏幕像素绘图单位。 */
      fixedSize: boolean;
      constructor();
      getTypeName(): string;
      create(): MxDbEntity;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      protected onViewChange(): boolean;
  }
  
   function drawMxDbRectBoxLeadComment(): void;
  
  /**
   * MxDbRectBoxLeadComment 引线审图标注
   * */
   class MxDbRectBoxLeadComment extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbRectBoxLeadComment;
      /** 云线矩形的对角点1 */
      point1: THREE.Vector3;
      /** 云线矩形的对角点2 */
      point2: THREE.Vector3;
      /** 要标注的内容位置 */
      point3: THREE.Vector3;
      /** 要显示的文字内容*/
      text: string;
      /**文字高度*/
      textHeight: number;
      /** 云线的半圆弧半径 */
      radius: number;
      textWidth: number;
      /** 文字大小，取屏幕像素绘图单位。 */
      fixedSize: boolean;
      constructor();
      getTypeName(): string;
      create(): MxDbEntity;
      getCloudLine(): any;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      protected onViewChange(): boolean;
  }
  
   function drawMxDbEllipse(): void;
  
  /** 通过两个构成矩形的点绘制椭圆形 */
   class MxDbEllipse extends MxDbEllipseShape {
      static cmd: string;
      static draw: typeof drawMxDbEllipse;
      constructor();
      getTypeName(): string;
      create(): MxDbEllipse;
      /** 开始点 */
      point1: three.Vector3;
      setPoint1(point1: THREE.Vector3): this;
      /** 结束点 */
      point2: three.Vector3;
      setPoint2(point2: THREE.Vector3): this;
      isClosedToCenter: boolean;
      closed: boolean;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbText(): Promise<void>;
  
  type SpriteTextColorType = THREE.Color | string | number | CanvasGradient | CanvasPattern | undefined;
  type SpriteTextObj = SpriteText;
  type TextFontWeight = 'normal' | 'bold' | 'lighter' | 'bolder' | 'inherit' | number;
  type TextFontStyle = 'normal' | 'italic' | 'oblique';
   class SpriteText extends THREE.Sprite {
      constructor(options?: SpriteTextOptions);
      text: string;
      textHeight: number;
      color: SpriteTextColorType;
      backgroundColor: SpriteTextColorType;
      padding: number | number[];
      borderWidth: number;
      borderRadius: number;
      borderColor: SpriteTextColorType;
      fontFace: string;
      fontSize: number;
      fontWeight: TextFontWeight;
      strokeWidth: number;
      strokeColor: SpriteTextColorType;
      textAlign: CanvasTextAlign;
      textShadowBlur: number;
      textShadowColor: string | number | THREE.Color | undefined;
      textShadowOffsetX: number;
      textShadowOffsetY: number;
      angle: number;
      textScale: number;
      underline: boolean;
      fontStyle: TextFontStyle;
      fontVariant: string;
      _genCanvas(): void;
      dispose(): void;
  }
  interface SpriteTextOptions {
      text?: string;
      textHeight?: number;
      color?: SpriteTextColorType;
      backgroundColor?: SpriteTextColorType | undefined;
      padding?: number | number[];
      borderWidth?: number;
      borderRadius?: number;
      borderColor?: SpriteTextColorType;
      strokeWidth?: number;
      strokeColor?: SpriteTextColorType;
      fontFace?: string;
      fontSize?: number;
      fontWeight?: TextFontWeight;
      textAlign?: CanvasTextAlign;
      textBaseline?: CanvasTextBaseline;
      textShadowBlur?: number;
      textShadowColor?: string | number | THREE.Color | undefined;
      textShadowOffsetX?: number;
      textShadowOffsetY?: number;
      angle?: number;
      scale?: number;
      underline?: boolean;
      fontStyle?: TextFontStyle;
      fontVariant?: string;
  }
  
  /**
   * MxDbText 绘制文字
   * @describe 适用于标签标注类型的文字(永远面向相机的平面)
   * @example
   * \`\`\` js
   *  obj = new MxDbText()
      obj.rxInit()
      obj.position = new THREE.Vector3()
      obj.backgroundColor = '#ff0000'
      obj.padding = 5
      obj.strokeWidth = 3
      obj.strokeColor = "#3a8bd2"
      obj.borderColor = "#ff00ff"
      obj.borderWidth = 2
      obj.borderRadius = 2
      obj.opacity = 0.8
      obj.text  = 'This is\\nsome multi-line\\ntext'
      obj.height = 100000
      obj.color = "#fff000"
   * \`\`\`
   */
   class MxDbText extends MxDbEntity {
      static cmd: string;
      static draw: typeof drawMxDbText;
      /** 文字所在位置*/
      position: three.Vector3;
      setPosition(position: THREE.Vector3): this;
      private _text;
      /** 文字内容*/
      get text(): string;
      set text(text: string);
      setText(text: string): this;
      private _height;
      /** 文字高度*/
      get height(): number;
      set height(height: number);
      setHeight(height: number): this;
      private _backgroundColor;
      /** 背景颜色 */
      get backgroundColor(): SpriteTextColorType;
      set backgroundColor(color: SpriteTextColorType);
      setBackgroundColor(backgroundColor: SpriteTextColorType): this;
      private _padding;
      /** 填充范围 */
      get padding(): number | number[];
      set padding(padding: number | number[]);
      setPadding(padding: number | number[]): this;
      private _borderWidth;
      /** 边框宽度 */
      get borderWidth(): number;
      set borderWidth(borderWidth: number);
      setBorderWidth(borderWidth: number): this;
      private _borderRadius;
      /** 边框圆角 */
      get borderRadius(): number;
      set borderRadius(borderRadius: number);
      setBorderRadius(borderRadius: number): this;
      private _borderColor;
      /** 边框颜色 */
      get borderColor(): SpriteTextColorType;
      set borderColor(borderColor: SpriteTextColorType);
      setBorderColor(borderColor: SpriteTextColorType): this;
      private _fontFace;
      /** 客户端字体 */
      get fontFace(): string;
      set fontFace(fontFace: string);
      setFontFace(fontFace: string): this;
      private _fontSize;
      /** 字体大小 */
      get fontSize(): number;
      set fontSize(fontSize: number);
      setFontSize(fontSize: number): this;
      private _fontWeight;
      /** 字体粗细 */
      get fontWeight(): TextFontWeight;
      set fontWeight(fontWeight: TextFontWeight);
      setFontWeight(fontWeight: TextFontWeight): this;
      private _strokeWidth;
      /** 笔划宽度 */
      get strokeWidth(): number;
      set strokeWidth(strokeWidth: number);
      setStrokeWidth(strokeWidth: number): this;
      private _strokeColor;
      /** 笔划颜色 */
      get strokeColor(): SpriteTextColorType;
      set strokeColor(strokeColor: SpriteTextColorType);
      setStrokeColor(strokeColor: SpriteTextColorType): this;
      private _textAlign;
      /** 文本格式 */
      get textAlign(): CanvasTextAlign;
      set textAlign(textAlign: CanvasTextAlign);
      setTextAlign(textAlign: CanvasTextAlign): this;
      private _textShadowBlur;
      /** 文字阴影模糊程度 */
      get textShadowBlur(): number;
      set textShadowBlur(textShadowBlur: number);
      setTextShadowBlur(textShadowBlur: number): this;
      private _textShadowColor;
      /**  文字阴影颜色*/
      get textShadowColor(): string | number | Color | undefined;
      set textShadowColor(textShadowColor: string | number | Color | undefined);
      setTextShadowColor(textShadowColor: string | number | Color | undefined): this;
      private _textShadowOffsetX;
      /** 文字阴影X轴偏移量 */
      get textShadowOffsetX(): number;
      set textShadowOffsetX(textShadowOffsetX: number);
      setTextShadowOffsetX(textShadowOffsetX: number): this;
      private _textShadowOffsetY;
      /** 文字阴影X轴偏移量 */
      get textShadowOffsetY(): number;
      set textShadowOffsetY(textShadowOffsetY: number);
      setTextShadowOffsetY(textShadowOffsetY: number): this;
      private _angle;
      /** 角度*/
      get angle(): number;
      set angle(angle: number);
      setAngle(angle: number): this;
      private _scale;
      /** 缩放倍数 */
      get scale(): number;
      set scale(scale: number);
      setScale(scale: number): this;
      private _underline;
      /** 下划线 */
      get underline(): boolean;
      set underline(underline: boolean);
      setUnderline(underline: boolean): void;
      /** SpriteText实例 */
      protected spriteText: SpriteTextObj;
      getTypeName(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      /**创建精灵文字对象 */
      protected createSpriteText(): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      create(): MxDbEntity;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      getGeomExtents(): THREE.Box3 | null;
      erase(): boolean;
  }
  
  /**
   * MxDbHatch 填充对象
   */
   class MxDbHatch extends MxDbEntity {
      points: THREE.Vector3[];
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getTypeName(): string;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      /** 设置顶点坐标 */
      setPoints(points: THREE.Vector3[]): void;
      getGripPoints(): THREE.Vector3[];
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): any;
  }
  
  /***
   * 渐变线段
   * @augments MxDbEntity
   * */
   class MxDbGradientLine extends MxDbEntity {
      /** 点集合 */
      points: THREE.Vector3[];
      /** 渐变色 */
      colors: (THREE.Color | string | number)[];
      /**
       * 定义线两端的样式
       *  @access public
       * */
      linecap: 'butt' | 'round' | 'square';
      /**
       * 定义线连接节点的样式
       * @access public
       * */
      linejoin: 'round' | 'bevel' | 'miter';
      /**
       * 定义线形状是否闭合，从而创建多边形或斑点
       * @access public
       * */
      closed: boolean;
      /**
       * 曲线的类型: chordal: 弦线、 centripetal： 向心线、 catmullrom: Catmull-Rom曲线 默认：centripetal
       * @access public
       * */
      curveType: 'chordal' | 'centripetal' | 'catmullrom';
      /**
       *  当curveType为catmullrom时，定义catmullrom的张力。 张力: 数值越大，曲线越弯曲。值为0将导致没有插值。默认值是0
       *  @access public
       *
       */
      tension: number;
      /**
       * 如果没有提供张力，但bezierType赋值为'quadratic'| 'cubic'，则使用点集合中的点绘制一条bezier线  默认: undefined
       * @summary quadratic: 三维二次贝塞尔曲线 => 起点 – 中间的控制点 – 终点
       * @summary cubic: 三维三次贝塞尔曲线 => 起点v – 第一个控制点 – 第二个控制点 – 终点
       */
      bezierType: 'quadratic' | 'cubic' | undefined;
      protected curve?: THREE.CatmullRomCurve3 | THREE.CurvePath<THREE.Vector3>;
      create(): MxDbGradientLine;
      getTypeName(): string;
      setPoints(points: THREE.Vector3[]): this;
      setColors(colors: (THREE.Color | string | number)[]): this;
      addColor(color: THREE.Color): this;
      setLinecap(linecap: 'butt' | 'round' | 'square'): void;
      setClosed(closed: boolean): void;
      setCurveType(curveType: 'chordal' | 'centripetal' | 'catmullrom'): void;
      setTension(tension: number): void;
      setBezierType(bezierType: 'quadratic' | 'cubic'): void;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      getPoints(): three.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      move(index: number, offset: THREE.Vector3): this;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
  }
  
   function drawMxDbEllipseArc(): void;
  
  /**
   * 根据中心点、椭圆开始点和结束点确定椭圆弧
   *  */
   class MxDbEllipseArc extends MxDbEllipseShape {
      static cmd: string;
      static draw: typeof drawMxDbEllipseArc;
      getTypeName(): string;
      constructor();
      /** 椭圆弧决定开始点 控制x轴半径和开始角度 */
      startPoint: THREE.Vector3;
      setStartPoint(startPoint: THREE.Vector3): this;
      /** 椭圆弧决定结束点 控制y轴半径和结束角度*/
      endPoint: THREE.Vector3;
      setEndPoint(endPoint: THREE.Vector3): this;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): three.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbCircleArc(): void;
  
   class MxDbCircleArc extends MxDbCircleShape {
      static cmd: string;
      static draw: typeof drawMxDbCircleArc;
      /** 根据圆心、起始点、结束点位置动态绘制圆弧 **/
      constructor();
      getTypeName(): string;
      /** 圆弧开始点 设置开始点将自动计算 radius、startAngle、endAngle */
      startPoint: THREE.Vector3;
      setStartPoint(startPoint: THREE.Vector3): this;
      /** 圆弧结束点 设置结束点将自动计算 radius、startAngle、endAngle */
      endPoint: THREE.Vector3;
      setEndPoint(endPoint: THREE.Vector3): this;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      computePointAngle(point: THREE.Vector3): number;
      getGripPoints(): three.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   class MxDbArcShape extends MxDbCircleArc {
      /** 环形 */
      constructor();
      getTypeName(): string;
      center: three.Vector3;
      innerRadius: number;
      outerRadius: number;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      drawArcShape(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbArcShape(): void;
  
   class MxDbArcShapeDraw extends MxDbArcShape {
      static isRegister: boolean;
      static cmd: string;
      static draw: typeof drawMxDbArcShape;
      getTypeName(): string;
      /** 绘制弧形 */
      constructor();
      outerRadiusPoint: three.Vector3;
      interRadiusPoint: three.Vector3;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbRingShape(): void;
  
  /** 环形 */
   class MxDbRingShape extends MxDbArcShape {
      static isRegister: boolean;
      static cmd: string;
      static draw: typeof drawMxDbRingShape;
      getTypeName(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
  }
  
   function drawMxDbStarShape(): void;
  
  /** 星形 */
   class MxDbStarShape extends MxDbShape {
      static cmd: string;
      static draw: typeof drawMxDbStarShape;
      getTypeName(): string;
      constructor();
      center: three.Vector3;
      /** 顶点数量 */
      numPoints: number;
      /** 内部半径 */
      innerRadius: number;
      /** 外部半径 */
      outerRadius: number;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
  /** 等边多边形 */
   class MxDbRegularPolygonShape extends MxDbShape {
      center: three.Vector3;
      sidesNumber: number;
      radius: number;
      getTypeName(): string;
      constructor();
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      _drawPolygonShape(pWorldDraw: McGiWorldDraw): void;
      _getPoints(): {
          x: number;
          y: number;
      }[];
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
  }
  
   function drawMxDbArrow(): void;
  
   class MxDbArrow extends MxDbShape {
      static cmd: string;
      static draw: typeof drawMxDbArrow;
      /** 箭头图形  */
      constructor();
      /** 开始是否为尖角 */
      isSharpCorner: boolean;
      /** 内部偏移量 */
      innerOffset: number;
      /** 外部偏移量 */
      outerOffset: number;
      /** 顶部偏移量 */
      topOffset: number;
      startPoint: three.Vector3;
      endPoint: three.Vector3;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getArrowVertex(p1: THREE.Vector3, p2: THREE.Vector3, isSharpCorner?: boolean): three.Vector3[] | undefined;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      getCornerRadiusPoints(points: THREE.Vector3[]): three.Vector3[];
  }
  
  /** 线形状 */
   class MxDbLineShape extends MxDbShape {
      points: THREE.Vector3[];
      setPoints(points: THREE.Vector3[]): this;
      addPoint(point: THREE.Vector3): this;
      removePoint(index: number): this;
      constructor();
      getTypeName(): string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): Array<THREE.Vector3>;
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      /** 获取包围盒 */
      getGeomExtents(): THREE.Box3 | null;
      /**
       * 返回曲线长度.
       * @returns number
       */
      getGetLength(): number;
  }
  
  /** 图层管理 */
   class Layer extends RenderOrderNode<{}, MxDbEntity> {
      isLayer: boolean;
      name: string;
      constructor(name?: string);
      get visible(): boolean;
      set visible(val: boolean);
      /** 设置层是否可见 */
      setVisible(val: boolean): void;
      private _database;
      private getDatabase;
      private getLayer;
      private getLayerMap;
      private getEntityMap;
      private getCurrentName;
      private callLayerContextFun;
      /** 默认的层名称 **/
      getRootLayerName: () => string;
      /*** 获取该数据库下的所有层的名称 */
      getNames(): string[];
      /*** 获取该层包含的所有MxDbEntity */
      getAllEntity(): MxDbEntity[];
      /** 将MxDbEntity添加到层
       * @param entityList 可以是id也可以是MxDbEntity实例
       * @example
       * \`\`\`
       * new Layer().add(new MxDbLine(), new MxDbLine(), 3)
       * \`\`\`
       */
      add(...entityList: MxDbEntity[]): this;
      /*** 移除该层的MxDbEntity,  MxDbEntity回退到默认层*/
      remove(...entityList: MxDbEntity[]): this;
  }
  
   function drawMxDbSplineCurve(): Promise<void>;
  
   class MxDbSplineCurve extends MxDbEntity {
      static draw: typeof drawMxDbSplineCurve;
      static cmd: string;
      /** 圆中心点 */
      points: THREE.Vector3[];
      /** 闭合 */
      closed: boolean;
      /** 曲线的张力 */
      tension: number;
      /** 曲线类型： centripetal、chordal和catmullrom */
      curveType: string;
      worldDraw(pWorldDraw: McGiWorldDraw): void;
      getGripPoints(): THREE.Vector3[];
      moveGripPointsAt(index: number, offset: THREE.Vector3): boolean;
      create(): MxDbEntity;
      dwgIn(obj: any): boolean;
      dwgOut(obj: any): object;
      getTypeName(): string;
  }
  
  /** @module MrxDbgUiPrDistClass */
  
  /**
   * MrxDbgUiPrDist 用于构建一个取点对象
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrPoint()
   * \`\`\`
   */
   class MrxDbgUiPrDist extends MrxDbgUiPrBase {
      constructor();
      /**
       * 得以获取的距离
       */
      value(): number;
      /**
       * 得到动态拖动的基点
       * @returns 基点 THREE.THREE.Vector3
       */
      basePt(): THREE.Vector3;
      /**
       * 设置动态拖动的基点
       * @param basePt 基点 THREE.THREE.Vector3
       * @returns 点对象 DWG图纸坐标
       */
      setBasePt(basePt: THREE.Vector3): void;
      /**
       * 设置使用动态拖动的基点
       * @param useIt 是否设置 默认为false
       * @returns void
       */
      setUseBasePt(useIt: boolean): void;
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;
  }
  
  /** @module MrxDbgUiPrIntClass */
  
  /**
   * MrxDbgUiPrInt 交互输入一个整数
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrInt()
   * \`\`\`
   */
   class MrxDbgUiPrInt extends MrxDbgUiPrBase {
      constructor();
      /**
       * 得以获取的距离
       */
      value(): number;
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;
  }
  
  /** @module MrxDbgUiPrStringClass */
  
  /**
   * MrxDbgUiPrString 交互输入字符串
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrString()
   * \`\`\`
   */
   class MrxDbgUiPrString extends MrxDbgUiPrBase {
      constructor();
      /**
       * 得以获取的距离
       */
      value(): string;
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<string | null>;
  }
  
  /** @module MrxDbgUiPrKeyWordClass */
  
  /**
   * MrxDbgUiPrKeyWord 交互输入关键值选项
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrKeyWord()
   * \`\`\`
   */
   class MrxDbgUiPrKeyWord extends MrxDbgUiPrBase {
      constructor();
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<string | null>;
  }
  
  /** @module MrxDbgUiPrAngleClass */
  
  /**
   * MrxDbgUiPrAngle 交互输入一个角度对象
   * @example \`\`\`typescript
   *  new Mx.MrxDbgUiPrAngle()
   * \`\`\`
   */
   class MrxDbgUiPrAngle extends MrxDbgUiPrBase {
      constructor();
      /**
       * 得以获取的距离
       */
      value(): number;
      /**
       * 得到动态拖动的基点
       * @returns 基点 THREE.THREE.Vector3
       */
      basePt(): THREE.Vector3;
      /**
       * 设置动态拖动的基点
       * @param basePt 基点 THREE.THREE.Vector3
       * @returns 点对象 DWG图纸坐标
       */
      setBasePt(basePt: THREE.Vector3): void;
      /**
       * 设置使用动态拖动的基点
       * @param useIt 是否设置 默认为false
       * @returns void
       */
      setUseBasePt(useIt: boolean): void;
      /**
       * 开始动态拖动
       * @param retcall  回调参数status {@link MrxDbgUiPrBaseReturn | 状态值}
       * @returns void
       */
      go(retcall?: (status: MrxDbgUiPrBaseReturn) => void): Promise<number | null>;
  }
  
   const Mx_loadCoreCode: typeof loadCoreCode;
   const Mx_useCanvasResizeListener: typeof useCanvasResizeListener;
   const Mx_store: typeof store;
   const Mx_MxFun: typeof MxFun;
   const Mx_MxThreeJS: typeof MxThreeJS;
   const Mx_MxType: typeof MxType;
   const Mx_Mxassembly: typeof Mxassembly;
   const Mx_McGeTool: typeof McGeTool;
   const Mx_MrxDbgUtils: typeof MrxDbgUtils;
   const Mx_MxPaintBrush: typeof MxPaintBrush;
  type Mx_MrxDbgUiPrPoint = MrxDbgUiPrPoint;
   const Mx_MrxDbgUiPrPoint: typeof MrxDbgUiPrPoint;
  type Mx_McEdGetPointWorldDrawObject = McEdGetPointWorldDrawObject;
   const Mx_McEdGetPointWorldDrawObject: typeof McEdGetPointWorldDrawObject;
  type Mx_MrxDbgUiPrBaseReturn = MrxDbgUiPrBaseReturn;
   const Mx_MrxDbgUiPrBaseReturn: typeof MrxDbgUiPrBaseReturn;
  type Mx_MxDbEntity = MxDbEntity;
   const Mx_MxDbEntity: typeof MxDbEntity;
  type Mx_MxDbImage = MxDbImage;
   const Mx_MxDbImage: typeof MxDbImage;
  type Mx_MxDbSVG = MxDbSVG;
   const Mx_MxDbSVG: typeof MxDbSVG;
  type Mx_MxDbSVGText = MxDbSVGText;
   const Mx_MxDbSVGText: typeof MxDbSVGText;
  type Mx_MxDbPolyline = MxDbPolyline;
   const Mx_MxDbPolyline: typeof MxDbPolyline;
  type Mx_MxDb2LineAngularDimension = MxDb2LineAngularDimension;
   const Mx_MxDb2LineAngularDimension: typeof MxDb2LineAngularDimension;
  type Mx_Mx3PointArc = Mx3PointArc;
   const Mx_Mx3PointArc: typeof Mx3PointArc;
  type Mx_Mx2PointArc = Mx2PointArc;
   const Mx_Mx2PointArc: typeof Mx2PointArc;
  type Mx_MxDbCoord = MxDbCoord;
   const Mx_MxDbCoord: typeof MxDbCoord;
  type Mx_MxDbLine = MxDbLine;
   const Mx_MxDbLine: typeof MxDbLine;
  type Mx_MxDbRect = MxDbRect;
   const Mx_MxDbRect: typeof MxDbRect;
  type Mx_MxDbAlignedDimension = MxDbAlignedDimension;
   const Mx_MxDbAlignedDimension: typeof MxDbAlignedDimension;
  type Mx_MxFilters = MxFilters;
   const Mx_MxFilters: typeof MxFilters;
  type Mx_McGiWorldDraw = McGiWorldDraw;
  type Mx_McGiWorldDrawType = McGiWorldDrawType;
   const Mx_McGiWorldDrawType: typeof McGiWorldDrawType;
  type Mx_MxDbArea = MxDbArea;
   const Mx_MxDbArea: typeof MxDbArea;
  type Mx_MxDbLeadTag = MxDbLeadTag;
   const Mx_MxDbLeadTag: typeof MxDbLeadTag;
  type Mx_MxDbAnyLine = MxDbAnyLine;
   const Mx_MxDbAnyLine: typeof MxDbAnyLine;
  type Mx_MxDbCloudLine = MxDbCloudLine;
   const Mx_MxDbCloudLine: typeof MxDbCloudLine;
  type Mx_MxDbRegularPolygon = MxDbRegularPolygon;
   const Mx_MxDbRegularPolygon: typeof MxDbRegularPolygon;
  type Mx_McGePoint3d = McGePoint3d;
  type Mx_McGePoint3dArray = McGePoint3dArray;
  type Mx_MxDbLeadComment = MxDbLeadComment;
   const Mx_MxDbLeadComment: typeof MxDbLeadComment;
  type Mx_MxDbRectBoxLeadComment = MxDbRectBoxLeadComment;
   const Mx_MxDbRectBoxLeadComment: typeof MxDbRectBoxLeadComment;
  type Mx_MxDbEllipse = MxDbEllipse;
   const Mx_MxDbEllipse: typeof MxDbEllipse;
  type Mx_MxDbText = MxDbText;
   const Mx_MxDbText: typeof MxDbText;
  type Mx_MxDrawObject = MxDrawObject;
   const Mx_MxDrawObject: typeof MxDrawObject;
  type Mx_MxDbHatch = MxDbHatch;
   const Mx_MxDbHatch: typeof MxDbHatch;
  type Mx_MxDbLayerTableRecord = MxDbLayerTableRecord;
  type Mx_MxDbDatabase = MxDbDatabase;
   const Mx_MxDbDatabase: typeof MxDbDatabase;
  type Mx_MxDbGroup = MxDbGroup;
  type Mx_MxDbGradientLine = MxDbGradientLine;
   const Mx_MxDbGradientLine: typeof MxDbGradientLine;
  type Mx_MxDbShape = MxDbShape;
   const Mx_MxDbShape: typeof MxDbShape;
  type Mx_MxDbEllipseShape = MxDbEllipseShape;
   const Mx_MxDbEllipseShape: typeof MxDbEllipseShape;
  type Mx_MxDbEllipseArc = MxDbEllipseArc;
   const Mx_MxDbEllipseArc: typeof MxDbEllipseArc;
  type Mx_MxDbCircleShape = MxDbCircleShape;
   const Mx_MxDbCircleShape: typeof MxDbCircleShape;
  type Mx_MxDbCircleArc = MxDbCircleArc;
   const Mx_MxDbCircleArc: typeof MxDbCircleArc;
  type Mx_MxDbArcShapeDraw = MxDbArcShapeDraw;
   const Mx_MxDbArcShapeDraw: typeof MxDbArcShapeDraw;
  type Mx_MxDbRingShape = MxDbRingShape;
   const Mx_MxDbRingShape: typeof MxDbRingShape;
  type Mx_MxDbStarShape = MxDbStarShape;
   const Mx_MxDbStarShape: typeof MxDbStarShape;
  type Mx_MxDbRegularPolygonShape = MxDbRegularPolygonShape;
   const Mx_MxDbRegularPolygonShape: typeof MxDbRegularPolygonShape;
  type Mx_MxDbArrow = MxDbArrow;
   const Mx_MxDbArrow: typeof MxDbArrow;
  type Mx_MxDbLineShape = MxDbLineShape;
   const Mx_MxDbLineShape: typeof MxDbLineShape;
  type Mx_Layer = Layer;
   const Mx_Layer: typeof Layer;
  type Mx_MxDbSplineCurve = MxDbSplineCurve;
   const Mx_MxDbSplineCurve: typeof MxDbSplineCurve;
  type Mx_MrxDbgUiPrBase = MrxDbgUiPrBase;
   const Mx_MrxDbgUiPrBase: typeof MrxDbgUiPrBase;
  type Mx_MxCursorType = MxCursorType;
   const Mx_MxCursorType: typeof MxCursorType;
  type Mx_DetailedResult = DetailedResult;
   const Mx_DetailedResult: typeof DetailedResult;
  type Mx_DynamicInputType = DynamicInputType;
   const Mx_DynamicInputType: typeof DynamicInputType;
  type Mx_UserInputControls = UserInputControls;
   const Mx_UserInputControls: typeof UserInputControls;
  type Mx_MrxDbgUiPrDist = MrxDbgUiPrDist;
   const Mx_MrxDbgUiPrDist: typeof MrxDbgUiPrDist;
  type Mx_MrxDbgUiPrInt = MrxDbgUiPrInt;
   const Mx_MrxDbgUiPrInt: typeof MrxDbgUiPrInt;
  type Mx_MrxDbgUiPrString = MrxDbgUiPrString;
   const Mx_MrxDbgUiPrString: typeof MrxDbgUiPrString;
  type Mx_MrxDbgUiPrKeyWord = MrxDbgUiPrKeyWord;
   const Mx_MrxDbgUiPrKeyWord: typeof MrxDbgUiPrKeyWord;
  type Mx_MrxDbgUiPrAngle = MrxDbgUiPrAngle;
   const Mx_MrxDbgUiPrAngle: typeof MrxDbgUiPrAngle;
  type Mx_MxTempMarkDraw = MxTempMarkDraw;
   const Mx_MxTempMarkDraw: typeof MxTempMarkDraw;
   namespace Mx {
    export {
      Mx_loadCoreCode as loadCoreCode,
      Mx_useCanvasResizeListener as useCanvasResizeListener,
      Mx_store as store,
      Mx_MxFun as MxFun,
      Mx_MxThreeJS as MxThreeJS,
      Mx_MxType as MxType,
      Mx_Mxassembly as Mxassembly,
      Mx_McGeTool as McGeTool,
      Mx_MrxDbgUtils as MrxDbgUtils,
      Mx_MxPaintBrush as MxPaintBrush,
      Mx_MrxDbgUiPrPoint as MrxDbgUiPrPoint,
      Mx_McEdGetPointWorldDrawObject as McEdGetPointWorldDrawObject,
      Mx_MrxDbgUiPrBaseReturn as MrxDbgUiPrBaseReturn,
      Mx_MxDbEntity as MxDbEntity,
      Mx_MxDbImage as MxDbImage,
      Mx_MxDbSVG as MxDbSVG,
      Mx_MxDbSVGText as MxDbSVGText,
      Mx_MxDbPolyline as MxDbPolyline,
      Mx_MxDb2LineAngularDimension as MxDb2LineAngularDimension,
      Mx_Mx3PointArc as Mx3PointArc,
      Mx_Mx2PointArc as Mx2PointArc,
      Mx_MxDbCoord as MxDbCoord,
      Mx_MxDbLine as MxDbLine,
      Mx_MxDbRect as MxDbRect,
      Mx_MxDbAlignedDimension as MxDbAlignedDimension,
      Mx_MxFilters as MxFilters,
      Mx_McGiWorldDraw as McGiWorldDraw,
      Mx_McGiWorldDrawType as McGiWorldDrawType,
      Mx_MxDbArea as MxDbArea,
      Mx_MxDbLeadTag as MxDbLeadTag,
      Mx_MxDbAnyLine as MxDbAnyLine,
      Mx_MxDbCloudLine as MxDbCloudLine,
      Mx_MxDbRegularPolygon as MxDbRegularPolygon,
      Mx_McGePoint3d as McGePoint3d,
      Mx_McGePoint3dArray as McGePoint3dArray,
      Mx_MxDbLeadComment as MxDbLeadComment,
      Mx_MxDbRectBoxLeadComment as MxDbRectBoxLeadComment,
      Mx_MxDbEllipse as MxDbEllipse,
      Mx_MxDbText as MxDbText,
      Mx_MxDrawObject as MxDrawObject,
      Mx_MxDbHatch as MxDbHatch,
      Mx_MxDbLayerTableRecord as MxDbLayerTableRecord,
      Mx_MxDbDatabase as MxDbDatabase,
      Mx_MxDbGroup as MxDbGroup,
      Mx_MxDbGradientLine as MxDbGradientLine,
      Mx_MxDbShape as MxDbShape,
      Mx_MxDbEllipseShape as MxDbEllipseShape,
      Mx_MxDbEllipseArc as MxDbEllipseArc,
      Mx_MxDbCircleShape as MxDbCircleShape,
      Mx_MxDbCircleArc as MxDbCircleArc,
      Mx_MxDbArcShapeDraw as MxDbArcShapeDraw,
      Mx_MxDbRingShape as MxDbRingShape,
      Mx_MxDbStarShape as MxDbStarShape,
      Mx_MxDbRegularPolygonShape as MxDbRegularPolygonShape,
      Mx_MxDbArrow as MxDbArrow,
      Mx_MxDbLineShape as MxDbLineShape,
      Mx_Layer as Layer,
      Mx_MxDbSplineCurve as MxDbSplineCurve,
      Mx_MrxDbgUiPrBase as MrxDbgUiPrBase,
      Mx_MxCursorType as MxCursorType,
      Mx_DetailedResult as DetailedResult,
      Mx_DynamicInputType as DynamicInputType,
      Mx_UserInputControls as UserInputControls,
      Mx_MrxDbgUiPrDist as MrxDbgUiPrDist,
      Mx_MrxDbgUiPrInt as MrxDbgUiPrInt,
      Mx_MrxDbgUiPrString as MrxDbgUiPrString,
      Mx_MrxDbgUiPrKeyWord as MrxDbgUiPrKeyWord,
      Mx_MrxDbgUiPrAngle as MrxDbgUiPrAngle,
      Mx_MxTempMarkDraw as MxTempMarkDraw,
    };
  }
  
   global {
      type THREE = typeof THREE;
      interface Window {
          THREE: typeof THREE;
      }
  }
  
  export { DetailedResult, DynamicInputType, Layer, McEdGetPointWorldDrawObject, McGePoint3d, McGePoint3dArray, McGeTool, McGiWorldDraw, McGiWorldDrawType, MrxDbgUiPrAngle, MrxDbgUiPrBase, MrxDbgUiPrBaseReturn, MrxDbgUiPrDist, MrxDbgUiPrInt, MrxDbgUiPrKeyWord, MrxDbgUiPrPoint, MrxDbgUiPrString, MrxDbgUtils, Mx2PointArc, Mx3PointArc, MxCursorType, MxDb2LineAngularDimension, MxDbAlignedDimension, MxDbAnyLine, MxDbArcShapeDraw, MxDbArea, MxDbArrow, MxDbCircleArc, MxDbCircleShape, MxDbCloudLine, MxDbCoord, MxDbDatabase, MxDbEllipse, MxDbEllipseArc, MxDbEllipseShape, MxDbEntity, MxDbGradientLine, MxDbGroup, MxDbHatch, MxDbImage, MxDbLayerTableRecord, MxDbLeadComment, MxDbLeadTag, MxDbLine, MxDbLineShape, MxDbPolyline, MxDbRect, MxDbRectBoxLeadComment, MxDbRegularPolygon, MxDbRegularPolygonShape, MxDbRingShape, MxDbSVG, MxDbSVGText, MxDbShape, MxDbSplineCurve, MxDbStarShape, MxDbText, MxDrawObject, MxFilters, MxFun, MxPaintBrush, MxTempMarkDraw, MxThreeJS, MxType, Mxassembly, UserInputControls, Mx as default, loadCoreCode, store, useCanvasResizeListener };
}
`,za=`declare module "mxcad" {
  // Generated by dts-bundle-generator v6.13.0
  
  import { DetailedResult, DynamicInputType, McEdGetPointWorldDrawObject, MrxDbgUiPrBaseReturn, MrxDbgUiPrPoint, MxCursorType, MxDbEntity, MxDrawObject } from 'mxdraw';
  
  /**
   * 将数据进行 Base64 编码
   * @param str 目标数据
   * @return Base64 编码
  */
  export  function b64Encode(str: string): string;
  /**
   * 将 Base64 编码的字符串解码为原始数据
   * @param str Base64 编码
   * @returns 原始数据
   */
  export  function b64Decode(str: string): string;
  /**
   * 把字符串转成16进制格式编辑
   */
  export  function crateHexString(str: string): string;
  export type FileTypes = {
  	description?: string;
  	accept: {
  		[type: string]: string[];
  	};
  }[];
  /**
   *  文件下载保存（另存为只支持 Chrome86 或 Edge 86 以及 Opera 72）兼容 iE10等较低版本的浏览器
   */
  export  function saveAsFileDialog({ blob, filename, types }: {
  	blob: Blob;
  	filename?: string;
  	types?: FileTypes;
  }): Promise<(FileSystemFileHandle & {
  	createWritable: () => Promise<WritableStreamDefaultWriter<any>>;
  }) | undefined>;
  /**
   * 在浏览器中下载一个文件
   * @param blob Blob 对象，它包含了要下载的文件的数据
   * @param filename 将要保存的文件的文件名
   */
  export  function downloadFile(blob: any, filename: string): void;
  /**
   * 从指定的 URL 下载文件到用户的计算机中
   * @param url 下载文件的 URL 地址
   * @param filename 将要保存的文件的文件名
   */
  export  function downloadFileFromUrl(url: string, filename: string): void;
  /**
   * 从指定URL中获取文件json字符串
   * @param url 文件的 URL 地址
   * @returns json字符串
   */
  export  const getJsonFromUrl: (url: string) => Promise<any>;
  /**
   * 从指定URL中获取文件
   * @param url 文件的 URL 地址
   * @returns 目标文件
   */
  export  const getFileFromUrl: (url: string) => Promise<Response | undefined>;
  /** 接收输入的提示字符串
   * @param strId 字符串的ID 起一个符合定义的ID名称
   * @param str 提示字符串
   *  */
  export  function _ML_String(strId: string, str: string): string;
  /**
   * 检查一个数值是否接近于零的
   * @param val 数值
   * @returns 布尔值
   */
  export  function IsZero(val: number): boolean;
  /**
   * 将内存中的数据发送到指定的 URL，以实现文件上传功能
   * @param memoryData 内存中数据的对象或者数据结构
   * @param url 数据将要发送到的目标 URL 地址
   * @param filename 上传的文件的文件名
   * @param retCall 回调函数
   * @param param 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数
   */
  export  function postMemoryFile(memoryData: any, url: string, filename: string, retCall: (code: number, message: string) => void, param?: any): void;
  /**
   * 从 IndexedDB（Indexed Database，索引数据库）中获取文件，并将其上传到指定的 URL
   * @param filekey 从 IndexedDB 中获取的文件的键（key）
   * @param url 数据将要发送到的目标 URL 地址，用于上传文件
   * @param retCall 回调函数
   * @param param 可选的额外参数，可以用来传递额外的数据或配置信息给上传函数
   */
  export  function postEmscriptenIndexedDBFile(filekey: string, url: string, retCall: (code: number, message: string) => void, param?: any): void;
  export  function createCursor(cursorSize?: number, targetFrameSize?: number, color?: string): any;
  export  const MxTools: {
  	b64Encode: typeof b64Encode;
  	b64Decode: typeof b64Decode;
  	saveAsFileDialog: typeof saveAsFileDialog;
  	downloadFile: typeof downloadFile;
  	downloadFileFromUrl: typeof downloadFileFromUrl;
  	getJsonFromUrl: (url: string) => Promise<any>;
  	getFileFromUrl: (url: string) => Promise<Response | undefined>;
  	_ML_String: typeof _ML_String;
  	IsZero: typeof IsZero;
  	postEmscriptenIndexedDBFile: typeof postEmscriptenIndexedDBFile;
  	postMemoryFile: typeof postMemoryFile;
  	createCursor: typeof createCursor;
  };
  export  class MxCanvas2Image {
  	private $support;
  	private downloadMime;
  	private mydocument;
  	constructor(in_document?: any);
  	private scaleCanvas;
  	private getDataURL;
  	private saveFile;
  	private genImage;
  	private fixType;
  	private encodeData;
  	private getImageData;
  	private makeURI;
  	private genBitmapImage;
  	/**
  	 * saveAsImage
  	 * @param canvasElement
  	 * @param {String} image type
  	 * @param {Number} [optional] png width
  	 * @param {Number} [optional] png height
  	 */
  	saveAsImage(canvas: any, width: any, height: any, type: any): void;
  	convertToImage(canvas: any, width: any, height: any, type: any): HTMLImageElement | undefined;
  }
  /**
   * 表示一个 Rx 对象的基类。
   */
  export  class McRxObject {
  	/**
  	 * 内部实现对象。
  	 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from "mxcad"
  	 *
  	   let obj = new McRxObject();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 受保护的构造函数，用于特定子类的初始化
  	 * @param imp 内部实现对象
  	 */
  	protected constructor_MxCADResbuf(imp: any): void;
  	/**
  	 * 获取内部实现对象。
  	 * @returns 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * let imp = obj.getImp();
  	 * \`\`\`
  	 */
  	getImp(): any;
  	/**
  	 * 初始化临时对象。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * obj.initTempObject()
  	 * \`\`\`
  	 */
  	initTempObject(imp: any): void;
  	/**
  	 * 获取对象名称。
  	 * @returns 返回对象名
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * console.log(obj.objectName);
  	 * \`\`\`
  	 */
  	get objectName(): string;
  	/**
  	 * 得到对象的DXF组码的类型名，这个和AutoCAD中的DXF组码是一样。
  	 * 比如直线的类型名为：McDbLine，DXF0组码值: LINE,DXF0组码值可以用来构造集时的类型过滤。
  	 */
  	get dxf0(): string;
  	/**
  	 * 获取 JSON 格式的字符串。
  	 * @returns JSON 格式的字符串。
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * const json = obj.getJson()
  	 * \`\`\`
  	 */
  	getJson(): string;
  	/**
  	 * 设置 JSON 格式的字符串。
  	 * @param str JSON 格式的字符串。
  	 * @returns 是否设置成功。
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * const res = obj.setJson('{"key": "value"}');
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	setJson(str: string): boolean;
  	/** 判断对象类型
  	 * @param sObjectName 类型名
  	 * @returns 返回对象是否是目标类型
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * let isKind = obj.isKindOf('SomeObjectType');
  	 * console.log(isKind); // 输出: true 或 false
  	 * \`\`\`
  	 */
  	isKindOf(sObjectName: string): boolean;
  	/**
  	 * 判断是否为空对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McRxObject } from 'mxcad';
  	 *
  	 * let obj = new McRxObject();
  	 * console.log(obj.isNull()); // 输出: true 或 false
  	 * \`\`\`
  	 * */
  	isNull(): any;
  }
  /**
   * 枚举类型 McObjectIdType 表示对象的类型。
   *
   * @remarks
   * - kMxCAD：  CAD 对象。
   * - kMxDraw： 绘图对象。
   * - kInvalid：无效对象。
   */
  export  enum McObjectIdType {
  	/** CAD 对象 */
  	kMxCAD = 0,
  	/** 绘图对象 */
  	kMxDraw = 1,
  	/** 无效对象 */
  	kInvalid = 2
  }
  /**
   * McObjectId类表示一个模型对象的唯一标识符。
   */
  export  class McObjectId {
  	/** 对象ID */
  	id: number;
  	/** 对象类型 */
  	type: McObjectIdType;
  	/**
  	 * 创建一个McObjectId实例。
  	 * @param id 对象的唯一标识符。
  	 * @param type 对象的类型。
  	 */
  	constructor(id?: number, type?: McObjectIdType);
  	/**
  	 * id是否有效.
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个模型对象id
  	 * const res = objectId.isValid();
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	isValid(): boolean;
  	/**
  	  * id是否为NULL.
  	  * @return 布尔值
  	  * @example
  	  * \`\`\`ts
  	  * // 假设objectId为一个模型对象id
  	  * const res = objectId.isNull();
  	  * console.log(res)
  	  * \`\`\`
  	 */
  	isNull(): boolean;
  	/**
  	 * id是指向的对像，是否是删除状态.
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个模型对象id
  	 * const res = objectId.isErase();
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	isErase(): boolean;
  	/**
  	 * 删除对象。
  	 * @param isErase 是否删除
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个模型对象id
  	 * objectId.erase();
  	 * \`\`\`
  	 */
  	erase(isErase?: boolean): void;
  	/**
  	 * 返回MxCAD McDbObject对象。
  	 * @returns 返回一个数据库对象
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个模型对象id
  	 * const obj = objectId.getMcDbObject();
  	 * \`\`\`
  	 */
  	getMcDbObject(): McDbObject | null;
  	/**
  	* 判断一个对象的类型
  	* @param className 类型名
  	* @example
  	* \`\`\`ts
  	* import { McDbLine, McGePoint3d, MxCpp } from 'mxcad';
  	*
  	* const line = new McDbLine(new McGePoint3d(0,0,0),new McGePoint3d(20,20,0) );
  	* const objectId = MxCpp.getCurrentCAD().drawEntity(line);
  	* console.log(objectId.isKindOf('McDbLine'))
  	* \`\`\`
  	*/
  	isKindOf(className: string): boolean;
  	/**
  	 * 返回MxCAD McDbEntity 对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个图形对象id
  	 * const ent = objectId.getMcDbEntity();
  	 * \`\`\`
  	 */
  	getMcDbEntity(): McDbEntity | null;
  	/**
  	 * 返回MxCAD McDbCurve 对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个曲线对象id
  	 * const curve = objectId.getMcDbCurve();
  	 * \`\`\`
  	 */
  	getMcDbCurve(): McDbCurve | null;
  	/**
  	 * 返回 MxCAD 块表记录对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个块对象id
  	 * const blkRecord = objectId.getMcDbBlockTableRecord();
  	 * \`\`\`
  	 */
  	getMcDbBlockTableRecord(): McDbBlockTableRecord | null;
  	/**
  	 * 返回 MxCAD 图层表记录对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个图层对象id
  	 * const layerRecord = objectId.getMcDbLayerTableRecord();
  	 * \`\`\`
  	 */
  	getMcDbLayerTableRecord(): McDbLayerTableRecord | null;
  	/**
  	* 返回 MxCAD 标注样表记录对象。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getMcDbDimStyleTableRecord(): McDbDimStyleTableRecord | null;
  	/**
  	 * 返回 MxCAD 线型表记录对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个线型对象id
  	 * const lineTypeRecord = objectId.getMcDbLinetypeTableRecord();
  	 * \`\`\`
  	 */
  	getMcDbLinetypeTableRecord(): McDbLinetypeTableRecord | null;
  	/**
  	 * 返回 MxCAD 文字样式表记录对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个文字样式id
  	 * const textStyleRecord = objectId.getMcDbTextStyleTableRecord();
  	 * \`\`\`
  	 */
  	getMcDbTextStyleTableRecord(): McDbTextStyleTableRecord | null;
  	/**
  	 * 返回MxCAD McDbDimension 对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个标注id
  	 * const dim = objectId.getMcDbDimension();
  	 * \`\`\`
  	 */
  	getMcDbDimension(): McDbDimension | null;
  	/**
  	 * 获取自定义实体
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个自定义实体id
  	 * const customEnt = objectId.getMcDbCustomEntity();
  	 * \`\`\`
  	 */
  	getMcDbCustomEntity(): McDbCustomEntity | null;
  	/**
  	 * 克隆对象
  	 * @returns 返回克隆后的数据库对象
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const obj_clone = objectId.clone();
  	 * \`\`\`
  	 */
  	clone(): McDbObject | null;
  	/**
  	 * 返回id指向的对象名称.
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const obj_name = objectId.getObjectName();
  	 * \`\`\`
  	 */
  	getObjectName(): string;
  	/**
  	 * 返回MxDraw对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const mx_obj = objectId.getMxDbEntity();
  	 * \`\`\`
  	 */
  	getMxDbEntity(): MxDbEntity | null;
  	/**
  	 * 获取栅格图像信息
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const def = objectId.getMcDbRasterImageDef();
  	 * \`\`\`
  	 */
  	getMcDbRasterImageDef(): McDbRasterImageDef | null;
  	/**
  	 * 获取数据库中的字典信息
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const dic = objectId.getMcDbDictionary();
  	 * \`\`\`
  	 */
  	getMcDbDictionary(): McDbDictionary | null;
  	/**
  	 * 获取扩展记录信息
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个对象id
  	 * const Xrecord = objectId.getMcDbXrecord();
  	 * \`\`\`
  	 */
  	getMcDbXrecord(): McDbXrecord | null;
  	/**
  	 * 返回MxCAD McDbGroup 对象。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设objectId为一个Group id
  	 * const group = objectId.getMcDbGroup();
  	 * \`\`\`
  	 */
  	getMcDbGroup(): McDbGroup | null;
  }
  /**
   * 表示一个数据库对象，并提供了数据库中的对象的一些基本操作函数，如内存的分配，对象删除，对象Id，归档等操作。
   */
  export  class McDbObject extends McRxObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbObject } from "mxcad";
  	 *
  	 * const obj = new McDbObject()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取对象 ID。
  	 * @returns 对象 ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbObject } from "mxcad";
  	 * const id = obj.getObjectID();
  	 * \`\`\`
  	 */
  	getObjectID(): McObjectId;
  	/**
  	 * 删除对象。
  	 * @returns 是否删除成功。
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const res = obj.erase();
  	 * console.log(res);
  	 * \`\`\`
  	 */
  	erase(): boolean;
  	/**
  	 * 对象是否已经删除
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const res = obj.isErased();
  	 * console.log(res);
  	 * \`\`\`
  	 */
  	isErased(): boolean;
  	/**
  	 * 反删除对象。
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const res = obj.unErase();
  	 * console.log(res);
  	 * \`\`\`
  	 */
  	unErase(): boolean;
  	/**
  	 * 克隆对象。
  	 * @returns 克隆出的对象。
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const obj_clone = obj.clone();
  	 * \`\`\`
  	 */
  	clone(): McDbObject | null;
  	/**
  	* 得到对象句柄
  	* @return 返回对象句柄
  	* @example
  	* \`\`\`ts
  	* //假设obj为一个数据库对象
  	* const handle = obj.getHandle();
  	* \`\`\`
  	*/
  	getHandle(): string;
  	/**
  	* 得到对象所在的数据库
  	* @return 返回数据库
  	* @example
  	* \`\`\`ts
  	* //假设obj为一个数据库对象
  	* const data = obj.getDatabase();
  	* \`\`\`
  	*/
  	getDatabase(): McDbDatabase;
  	/**
  	 * 得到对象拥用者的id
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const id = obj.getOwnerID();
  	 * \`\`\`
  	 */
  	getOwnerID(): number;
  	/**
  	 * 得到对象的扩展字典数据.
  	 * @return 扩展字典数据
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const id = obj.getOwnerID();
  	 * \`\`\`
  	 */
  	getExtensionDictionary(): McDbDictionary;
  	/**
  	 * 是否有扩展字典数据.
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const res = obj.isHaveExtensionDictionary();
  	 * \`\`\`
  	 */
  	isHaveExtensionDictionary(): boolean;
  	/**
  	 * 创建对象的扩展字典数据.
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const res = obj.createExtensionDictionary();
  	 * \`\`\`
  	 */
  	createExtensionDictionary(): boolean;
  	/**
  	 * 获取对象的索引ID
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const id = obj.getDatabaseIndexId();
  	 * \`\`\`
  	 */
  	getDatabaseIndexId(): number;
  	/** 移动对象的控制点
  	 * @param iIndex 索引
  	 * @param dXOffset X轴偏移量
  	 * @param dYOffset Y轴偏移量
  	 * @param dZOffset Z轴偏移量
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * obj.moveGripPointsAt(1,10,10,10);
  	 * \`\`\`
  	 */
  	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): any;
  	/**
  	 * 获取对象的控制点
  	 * @example
  	 * \`\`\`ts
  	 * //假设obj为一个数据库对象
  	 * const ptArr = obj.getGripPoints();
  	 * \`\`\`
  	 */
  	getGripPoints(): McGePoint3dArray;
  	/**
  	* @internal
  	* MxCAD辅助,内部使用
  	* \`\`\`
  	*/
  	tempRelationObject(): number;
  	/**
  	 * @internal
  	 * MxCAD辅助,内部使用
  	 * \`\`\`
  	 */
  	freeTempRelationObject(): void;
  	/**
  	  * 设置对象被改变的状态，可自动触发更新显示函数，更新显示。
  	  * 比如块表记录更新了，需要通知块引用更新显示，可以调用该函数。
  	  * @example
  	  * \`\`\`ts
  	  * //假设obj为一个数据库对象
  	  * obj.assertObjectModification()
  	  * \`\`\`
  	  */
  	assertObjectModification(autoUndo?: boolean): number;
  }
  /** McDbObject 的一个数组，该数组存储了多个 McDbObject 对象的引用。 */
  export  class McDbObjectArray {
  	/** 对象数组 */
  	aryVal: McDbObject[];
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	  import { McDbObjectArray } from "mxcad";
  	  // 创建一个 McDbObjectArray 实例
  	  const objectArray = new McDbObjectArray();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 遍历对象
  	 * @example
  	 * \`\`\`ts
  	  import { McDbObjectArray } from "mxcad";
  	  // 创建一个 McDbObjectArray 实例
  	  const objectArray = new McDbObjectArray();
  	  objectArray.forEach((val: McDbObject, index: number) => {
  		console.log(\`Object at index \${index}:\`, val);
  	  });
  	 * \`\`\`
  	 */
  	forEach(call: (val: McDbObject, index: number) => void): void;
  	/**
  	 * 数组长度
  	 * @example
  	 * \`\`\`ts
  	  import { McDbObjectArray } from "mxcad";
  	  // 创建一个 McDbObjectArray 实例
  	  const objectArray = new McDbObjectArray();
  	  const length = objectArray.length();
  	  console.log("Length of the array:", length);
  	 * \`\`\`
  	 */
  	length(): number;
  	/**
  	 * 清空数组
  	 * @example
  	 * \`\`\`ts
  	  import { McDbObjectArray } from "mxcad";
  	  // 创建一个 McDbObjectArray 实例
  	  const objectArray = new McDbObjectArray();
  	  const isEmpty = objectArray.empty();
  	  console.log("Is the array empty?", isEmpty);
  	 * \`\`\`
  	 */
  	empty(): boolean;
  }
  /**
   * 表示三维点的对象。
   */
  export  class McGePoint3d {
  	/**
  	 * 坐标系的原点
  	 * @example
  	 * \`\`\`ts
  	 * const origin = McGePoint3d.kOrigin;
  	 * \`\`\`
  	 * */
  	static kOrigin: McGePoint3d;
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param dX X 坐标。
  	 * @param dY Y 坐标。
  	 * @param dZ Z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from 'mxcad'
  	 *
  	 * const point = new McGePoint3d(20,10,0);
  	 * \`\`\`
  	 */
  	constructor(dX?: number | object, dY?: number, dZ?: number);
  	/**
  	 * 将当前对象的坐标信息转换为 THREE.Vector3 类的实例
  	 * @return THREE.Vector3实例对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad";
  	 * const pt = new McGePoint3d(20,10,0);
  	 * const pt_vec = pt.toVector3();
  	 * \`\`\`
  	*/
  	toVector3(): THREE.Vector3;
  	/** 将three.js 的向量设置成点
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad";
  	 *
  	 * const pt_vec = new THREE.Vector3(20,50,0);
  	 * const pt = pt_vec.setFromVector3();
  	 * \`\`\`
  	*/
  	setFromVector3(val: THREE.Vector3): this;
  	/**
  	 * 复制点对象的值
  	 * @param val 点对象
  	 * @return 复制后的点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad"
  	 *
  	 * const point1 = new McGePoint3d(20,10,0);
  	 * const point2 = new McGePoint3d();
  	 * point2.copy(point1);
  	 * \`\`\`
  	 */
  	copy(val: McGePoint3d): this;
  	/**
  	 * 使用矩阵变换该点
  	 * @param leftSide 变换矩阵
  	 * @returns 变换后的点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McGeVector3d, McGeMatrix3d } from "mxcad"
  	 *
  	 * const point = new McGePoint3d(20,10,0);
  	   let matrix = new McGeMatrix3d();
  	   matrix.setToTranslation(new McGeVector3d(10,10,0));//平移
  	   point.transformBy(matrix);
  	 * \`\`\`
  	 */
  	transformBy(leftSide: McGeMatrix3d): this;
  	/**
  	* 计算点加上向量后的新位置
  	* @param vec 向量
  	* @return 计算后的点对象
  	* @example
  	* \`\`\`ts
  	* import { McGePoint3d, McGeVector3d } from "mxcad";
  	*
  	* const pt1 = new McGePoint3d(20,10,0);
  	* const pt = pt1.clone().addvec(new McGeVector3d(10,10,0))
  	* \`\`\`
  	*/
  	addvec(vec: McGeVector3d): this;
  	/**
  	 * 计算点加上向量后的新位置
  	 * @param vec 向量
  	 * @return 计算后的点对象
  	 */
  	av(vec: McGeVector3d): this;
  	/**
  	 * 计算点减去向量后的新位置
  	 * @param vec 向量
  	 * @return 计算后的点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McGeVector3d } from "mxcad";
  	 *
  	 * const pt1 = new McGePoint3d(20,10,0);
  	 * const pt = pt1.clone().subvec(new McGeVector3d(10,10,0));
  	 * \`\`\`
  	 */
  	subvec(vec: McGeVector3d): this;
  	/**
  	 * 计算点减去向量后的新位置
  	 * @param vec 向量
  	 * @return 计算后的点对象
  	 */
  	sv(vec: McGeVector3d): this;
  	/**
  	 * 返回两点相减后得到的一个新的向量
  	 * @param pt 三维点对象
  	 * @return 三维点向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad";
  	 *
  	 * const pt1 = new McGePoint3d(20,10,0);
  	 * const pt2 = new McGePoint3d(50,20,0);
  	 * const vec = pt1.sub(pt2);
  	 * \`\`\`
  	 */
  	sub(pt: McGePoint3d): McGeVector3d;
  	/**
  	 * 计算两点距离
  	 * @param pnt 三维点对象
  	 * @return 两点距离
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad";
  	 *
  	 * const pt1 = new McGePoint3d(20,10,0);
  	 * const pt2 = new McGePoint3d(50,20,0);
  	 * const dist = pt1.distanceTo(pt2);
  	 * \`\`\`
  	 */
  	distanceTo(pnt: McGePoint3d): number;
  	/**
  	* 判断两个点是否相等
  	* @param pnt 三维点对象
  	* @return 布尔值
  	* @example
  	* \`\`\`ts
  	* import { McGePoint3d } from "mxcad"
  	*
  	* const pt1 = new McGePoint3d(10,20,0);
  	* const pt2 = new McGePoint3d(10,10,0);
  	* const res = pt1.isEqualTo(pt2);
  	* console.log(res)//输出false
  	* \`\`\`
  	*/
  	isEqualTo(pnt: McGePoint3d): boolean;
  	/**
  	 * 刻隆一个点对象
  	 * @return 三维点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(10,10,0);
  	 * const pt2 = pt1.clone();
  	 * \`\`\`
  	 */
  	clone(): McGePoint3d;
  	/**
  	 * 刻隆一个点对象
  	 * @return 三维点对象
  	 */
  	c(): McGePoint3d;
  	/**
  	 * 获取或设置 X 坐标。
  	 * @param val X轴坐标值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad'
  	 *
  	 * const point = new McGePoint3d();
  	 * point.x = 10;
  	 * console.log(point.x)//输出10
  	 * \`\`\`
  	 */
  	get x(): number;
  	set x(val: number);
  	/**
  	 * 获取或设置 Y 坐标。
  	 * @param val Y轴坐标值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad'
  	 *
  	 * const point = new McGePoint3d();
  	 * point.y = 10;
  	 * console.log(point.y)//输出10
  	 * \`\`\`
  	 */
  	get y(): number;
  	set y(val: number);
  	/**
  	 *获取或设置 Z 坐标。
  	 * @param val Z轴坐标值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d } from "mxcad'
  	 *
  	 * const point = new McGePoint3d();
  	 * point.z = 10;
  	 * console.log(point.z)//输出10
  	 * \`\`\`
  	 */
  	get z(): number;
  	set z(val: number);
  }
  /**
   * 表示三维向量的对象。
   * @example
   * \`\`\`ts
   * //求失量与X轴的夹角
   * const angle1 = vetT.angleTo2(McGeVector3d.McGeVector3d.kXAxis ,McGeVector3d.kNegateZAxis)
   * \`\`\`
   * \`\`\`ts
   * //求出vetFx逆时针到vetT的角度
   * const angle2 = vetFx.angleTo2(vetT, McGeVector3d.kZAxis)
   * \`\`\`
   * \`\`\`ts
   * //判断向量vetT在向量VetFX的左边,还是在右边的调用
   * const angle3 = vetFx.angleTo2(vetT, McGeVector3d.kZAxis);
     if(angle >= 0.0 && angle <= PI ){
  	   //向量vetT在vetFX的左边.
  	} else {
  	  //向量vetT在vetFX的右边.
  	}
     // 或
     if (vetFX.dotProduct(vetT.perpVector()) < 0){
  	 //  vetFX在vetT的左边。
     }
   * \`\`\`
   */
  export  class McGeVector3d {
  	/**
     * 0长度向量
     * @example
     * \`\`\`ts
     * \`\`\`
     * */
  	static kIdentity: McGeVector3d;
  	/**
  	 * X轴单位向量, 指向正 X 轴方向
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad"
  	 *
  	 * const x_vec = McGeVector3d.kXAxis;
  	 * \`\`\`
  	 * */
  	static kXAxis: McGeVector3d;
  	/**
  	 * Y轴单位向量, 指向正 Y 轴方向
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad"
  	 *
  	 * const y_vec = McGeVector3d.kYAxis;
  	 * \`\`\`
  	 */
  	static kYAxis: McGeVector3d;
  	/**
  	* Z轴单位向量, 指向正 Z 轴方向
  	* @example
  	* \`\`\`ts
  	* import { McGeVector3d } from "mxcad"
  	*
  	* const y_vec = McGeVector3d.kZAxis;
  	* \`\`\`
  	 */
  	static kZAxis: McGeVector3d;
  	/**
  	 * Z轴单位向量, 指向负 Z 轴方向
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad"
  	 *
  	 * const zNegate_vec = McGeVector3d.kNegateZAxis;
  	 * \`\`\`
  	 */
  	static kNegateZAxis: McGeVector3d;
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param dX X 坐标。
  	 * @param dY Y 坐标。
  	 * @param dZ Z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { MdGeVector3d } from "mxcad";
  	 *
  	 * const vec = new MdGeVector3d(20,10,0)
  	 * \`\`\`
  	 */
  	constructor(dX?: number | object, dY?: number, dZ?: number);
  	/** 转换为THREE.Vector3
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec = new McGeVector3d(20,10,0);
  	 * const v = vec.toVector3();
  	 * \`\`\`
  	 * */
  	toVector3(): THREE.Vector3;
  	/**
  	 * 复制对象的值
  	 * @param val 三维向量对象
  	 * @return 复制后的三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad"
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec2 = new McGeVector3d();
  	 * vec2.copy(vec1);
  	 * \`\`\`
  	 */
  	copy(val: McGeVector3d): this;
  	/**
  	 * 刻隆一个向量对象
  	 * @return 三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad"
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec2 = vec1.clone();
  	 * \`\`\`
  	 */
  	clone(): McGeVector3d;
  	/**
  	 * 刻隆一个向量对象
  	 * @return 三维向量对象
  	 */
  	c(): McGeVector3d;
  	/** 旋转
  	 * @param ang 旋转角度。
  	 * @param axis 旋转轴向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec = new McGeVector3d(20,10,0);
  	 * vec.rotateBy(Math.PI * 0.5);
  	 * \`\`\`
  	 *  */
  	rotateBy(ang: number, axis?: McGeVector3d): this;
  	/**
  	 * 向量取反
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec = new McGeVector3d(20,10,0);
  	 * vec_neg = vec.clone().negate()
  	 * \`\`\`
  	 * */
  	negate(): this;
  	/**
  	 * 垂直向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec = new McGeVector3d(20,10,0);
  	 * vec_perp = vec.clone().perpVector()
  	 * \`\`\`
  	 * */
  	perpVector(): this;
  	/** 计算两向量在[0, Pi]范围内所夹的角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec2 = new McGeVector3d(50,0,0);
  	 * const angle = vec1.angleTo1(vec2);
  	 * \`\`\`
  	 * */
  	angleTo1(vec: McGeVector3d): number;
  	/** 计算两向量在[0, 2*Pi]范围内所夹的角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const angle = vec1.angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);
  	 * \`\`\`
  	 * */
  	angleTo2(vec: McGeVector3d, refVec?: McGeVector3d): number;
  	/**
  	 * 向量归一化操作
  	 * @return 三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * vec1.normalize();
  	 * \`\`\`
  	 * */
  	normalize(): this;
  	/**
  	 * 获取向量长度
  	 * @return 向量长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const length = vec1.length();
  	 * \`\`\`
  	 * */
  	length(): number;
  	/**
  	 * 检查当前向量是否为单位长度
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const res = vec1.isUnitLength();
  	 * console.log(res)//输出false
  	 * \`\`\`
  	 * */
  	isUnitLength(): boolean;
  	/**
  	 * 是否为零向量
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const res = vec1.isZeroLength();
  	 * console.log(res)//输出false
  	 * \`\`\`
  	 * */
  	isZeroLength(): boolean;
  	/**
  	 * 两向量的点积
  	 * @param vec 三维向量对象
  	 * @return 点积结果
  	 * @example
  	 \`\`\`ts
  	 //判断两个向量方向相同还是相反
  	  const db = vec1.dotProduct(vec2);
  	  if(db < 0 ){
  		  //向量返向.
  	  }
  	 // 两个向量点乘如果等于0,表示向量垂直。
  	 // 两个向量点乘如果等于1,表示向量方向完全向同。
  	 // 两个向量点乘如果等于-1,表示向量方向完全反向。
  	 \`\`\`
  	 * */
  	dotProduct(vec: McGeVector3d): number;
  	/**
  	 * 两向量的交叉积
  	 * @return 三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec2 = new McGeVector3d(10,10,0);
  	 * const vec = vec2.crossProduct(vec1)
  	 * \`\`\`
  	 * */
  	crossProduct(vec: McGeVector3d): McGeVector3d;
  	/**
  	 * 判断比较两个向量是否相等
  	 * @param vec 三维向量对象
  	 * @return 布尔值
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec2 = new McGeVector3d(10,10,0);
  	 * const res = vec1.isEqualTo(vec2)
  	 * \`\`\`
  	 * */
  	isEqualTo(vec: McGeVector3d): boolean;
  	/**
  	 * 向量与某个值相乘，修改向量长度
  	 * @param val 数字
  	 * @return 三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d(20,10,0);
  	 * const vec = vec1.clone().normalize().mult(20)
  	 * \`\`\`
  	 * */
  	mult(val: number): this;
  	/**
  	 * 获取或设置向量 X 坐标。
  	 * @param val x轴坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d();
  	 * vec1.x = 10;
  	 * \`\`\`
  	 */
  	get x(): number;
  	set x(val: number);
  	/**
  	 * 获取或设置向量 Y 坐标。
  	 * @param val y轴坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d();
  	 * vec1.y = 10;
  	 * \`\`\`
  	 */
  	get y(): number;
  	set y(val: number);
  	/**
  	 * 获取或设置向量 Z 坐标。
  	 * @param val z轴坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeVector3d } from "mxcad";
  	 *
  	 * const vec1 = new McGeVector3d();
  	 * vec1.z = 0;
  	 * \`\`\`
  	 */
  	get z(): number;
  	set z(val: number);
  }
  /** 表示三维矩阵对象 */
  export  class McGeMatrix3d {
  	/** 乘法的单位矩阵  */
  	static kIdentity: McGeMatrix3d;
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeMatrix3d } from "mxcad"
  	 *
  	 * const matrix = new McGeMatrix3d()
  	 * \`\`\`
  	 */
  	constructor(imp?: object);
  	/**
  	 * 复制对象的值
  	 * @param val 三维矩阵对象
  	 * @return 复制后的三维矩阵对象
  	 * \`\`\`ts
  	 * // matrix1 一个三维矩阵对象
  	 * const matrix = new McGeMatrix3d();
  	 * matrix.copy(matrix1)
  	 * \`\`\`
  	 */
  	copy(val: McGeMatrix3d): this;
  	/**
  	 * 刻隆一个三维矩阵对象
  	 * @return 三维矩阵对象
  	 * @example
  	 * \`\`\`ts
  	 * // matrix1 一个三维矩阵对象
  	 * const matrix = matrix1.clone()
  	 * \`\`\`
  	 */
  	clone(): McGeMatrix3d;
  	/**
  	 * 将矩阵设置为单位矩阵。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix 表示一个三维矩阵对象
  	 * matrix.setToIdentity()
  	 * \`\`\`
  	 */
  	setToIdentity(): this;
  	/**
  	 * 左乘指定的矩阵。
  	 * @param leftSide 左侧矩阵。
  	 * @return 返回左乘后的矩阵
  	 * @example
  	 * \`\`\`ts
  	 * // matrix1 表示一个三维矩阵对象
  	 * const matrix = new McGeMatrix3d()
  	 * matrix.preMultBy(matrix1);
  	 * \`\`\`
  	 */
  	preMultBy(leftSide: McGeMatrix3d): this;
  	/**
  	 * 右乘指定的矩阵。
  	 * @return 返回右乘后的矩阵
  	 * @example
  	 * \`\`\`ts
  	 * // matrix1 表示一个三维矩阵对象
  	 * const matrix = new McGeMatrix3d()
  	 * matrix.postMultBy(matrix1);
  	 * \`\`\`
  	 */
  	postMultBy(rightSide: McGeMatrix3d): this;
  	/**
  	 * 将矩阵设置为两个矩阵的乘积。
  	 * @param mat1 第一个矩阵。
  	 * @param mat2 第二个矩阵。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix1 matrix2 表示两个三维矩阵对象
  	 * const matrix = new McGeMatrix3d()
  	 * matrix.setToProduct(matrix1, matrix2);
  	 * \`\`\`
  	 */
  	setToProduct(mat1: McGeMatrix3d, mat2: McGeMatrix3d): this;
  	/**
  	 * 求矩阵的逆矩阵。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix表示一个三维矩阵对象
  	 * const mat_invert = matrix.clone().invert();
  	 * \`\`\`
  	 */
  	invert(): this;
  	/**
  	 * 判断矩阵是否为奇异矩阵。
  	 * @returns 如果是奇异矩阵返回 true，否则返回 false。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix表示一个三维矩阵对象
  	 * const res = matrix.isSingular();
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	isSingular(): boolean;
  	/**
  	 * 将矩阵转置。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix表示一个三维矩阵对象
  	 * const mst_trs = matrix.clone().transposeIt();
  	 * \`\`\`
  	 */
  	transposeIt(): this;
  	/**
  	 * 判断矩阵是否与指定的矩阵相等。
  	 * @param mat 指定的矩阵。
  	 * @returns 如果相等返回 true，否则返回 false。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix1 matrix2 表示两个三维矩阵对象
  	 * const res = matrix1.isEqualTo(matrix2);
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	isEqualTo(mat: McGeMatrix3d): boolean;
  	/**
  	 * 求矩阵的行列式。
  	 * @returns 矩阵的行列式。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix 表示一个三维矩阵对象
  	 * const detNum = matrix.det();
  	 * console.log(detNum)
  	 * \`\`\`
  	 */
  	det(): number;
  	/**
  	 * 将矩阵设置为指定的坐标系。
  	 * @param origin 坐标系原点。
  	 * @param xAxis X 轴向量。
  	 * @param yAxis Y 轴向量。
  	 * @param zAxis Z 轴向量。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeMatrix3d , McGePoint3d, McGeVector3d} from "mxcad"
  	 *
  	 * const m1 = new McGeMatrix3d()
  	 * m1.setCoordSystem(new McGePoint3d(), new McGeVector3d(), new McGeVector3d(), new McGeVector3d())
  	 * \`\`\`
  	 */
  	setCoordSystem(origin: McGePoint3d, xAxis: McGeVector3d, yAxis: McGeVector3d, zAxis: McGeVector3d): this;
  	/**
  	 * 将矩阵设置为平移矩阵。
  	 * @param vec 平移向量。
  	 * @example
  	 * \`\`\`ts
  	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
    
  	  let matrix = new McGeMatrix3d();
  	  const event = new McDbEntity();
  	  matrix.setToTranslation(new McGeVector3d(20,10,0));//平移
  	  event.transformBy(matrix);
  	 * \`\`\`
  	 */
  	setToTranslation(vec: McGeVector3d): this;
  	/**
  	 * 将矩阵设置为绕指定轴旋转指定角度的矩阵。
  	 * @param angle 旋转角度。
  	 * @param axis 旋转轴向量。
  	 * @param center 旋转中心点。
  	 * @example
  	 * \`\`\`ts
  	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
    
  	  let matrix = new McGeMatrix3d();
  	  const event = new McDbEntity();
  	  matrix.setToRotation(Math.PI, McGeVector3d.kZAxis / 180.0, new McGeVector3d(20,10,0));//平移
  	  event.transformBy(matrix);
  	 * \`\`\`
  	 */
  	setToRotation(angle: number, axis: McGeVector3d, center: McGePoint3d): this;
  	/**
  	 * 将矩阵设置为缩放矩阵。
  	 * @param scaleAll 缩放因子。
  	 * @param center 缩放中心点。
  	 * @example
  	 * \`\`\`ts
  	 *import { McGeMatrix3d, McDbEntity } from "mxcad";
    
  	  let matrix = new McGeMatrix3d();
  	  const event = new McDbEntity();
  	  matrix.setToScaling(0.5, new McGeVector3d(0, 0, 0));//平移
  	  event.transformBy(matrix);
  	 * \`\`\`
  	 */
  	setToScaling(scaleAll: number, center: McGePoint3d): this;
  	/**
     * 将矩阵设置为镜向矩阵
     * @example
     * \`\`\`ts
     *import { McGeMatrix3d, McDbEntity } from "mxcad";
    
  	const matrix = new McGeMatrix3d();
  	const event = new McDbEntity();
  	matrix.setMirror(new McGeVector3d(0, 0, 0), new McGeVector3d(20, 0, 0));//平移
  	event.transformBy(matrix);
     * \`\`\`
     */
  	setMirror(pt1: McGePoint3d, pt2: McGePoint3d): this;
  	/**
  	 * 获取矩阵的缩放因子。
  	 * @returns 矩阵的缩放因子。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix 表示一个三维矩阵对象
  	 * const scaleNum = matrix.scale()
  	 * console.log(scaleNum)
  	 * \`\`\`
  	 */
  	scale(): number;
  	/**
  	 * 获取矩阵在XY平面的旋转角度因子。
  	 * @returns旋转角度因子。
  	 * @example
  	 */
  	angleXYPlane(): number;
  	/**
  	 * 获取矩阵中指定位置的元素值。
  	 * @param row 行索引。
  	 * @param col 列索引。
  	 * @returns 指定位置的元素值。
  	 * @example
  	 * \`\`\`ts
  	 * // matrix 表示一个三维矩阵对象
  	 * const data = matrix.getData(2,3)
  	 * console.log(data)
  	 * \`\`\`
  	 */
  	getData(row: number, col: number): number;
  	/**
  	 * 设置矩阵中指定位置的元素值。
  	 * @param row 行索引。
  	 * @param col 列索引。
  	 * @param val 指定位置的元素值。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	setData(row: number, col: number, val: number): void;
  }
  /**
   * 整数数组
   */
  export  class McGeLongArray {
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeLongArray } from "mxcad"
  	 *
  	  // 创建一个新的 McGeLongArray 实例
  	  const myArray = new McGeLongArray();
    
  	  // 通过传入一个对象初始化 McGeLongArray
  	  const initialValues = { data: [1, 2, 3, 4] };
  	  const myArray2 = new McGeLongArray(initialValues);
  	 * \`\`\`
  	 */
  	constructor(imp?: object);
  	/**
  	 * 复制对象的值
  	 * @param val 整数数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeLongArray } from "mxcad"
  	 *
  	   const array1 = new McGeLongArray();
  	   const array2 = new McGeLongArray();
  	   array2.append(10);
  	   array2.append(20);
    
  	   // 复制 array2 的值到 array1
  	   array1.copy(array2);
  	 * \`\`\`
  	 */
  	copy(val: McGeLongArray): this;
  	/**
  	 * 从 McObjectId 数组中复制值
  	 * @param aryId McObjectId 数组
  	 * @example
  	 * \`\`\`ts
  	 * //objectIdArray 为一个对象id数组
  	   const array = new McGeLongArray();
  	   array.copyFormAryId(objectIdArray);
  	 * \`\`\`
  	 */
  	copyFormAryId(aryId: McObjectId[]): this;
  	/**
  	* 向数组中添加一个值
  	* @param val 整数值
  	* @example
  	* \`\`\`ts
  	* import { McGeLongArray } from "mxcad";
  	*
  	  const array = new McGeLongArray();
  	  array.append(5);
  	  array.append(10)
  	* \`\`\`
  	*/
  	append(val: number): void;
  	/**
  	 * 返回数组长度
  	 * @return 数组长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeLongArray } from "mxcad"
  	 *
  	   const array = new McGeLongArray();
  	   console.log(array.length()); // 输出: 0
  	 * \`\`\`
  	 */
  	length(): number;
  	/**
  	 * 根据数组索引得到数据元素的值
  	 * @param index 数组索引
  	 * @return 返回元素值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeLongArray } from "mxcad"
  	 *
  	   const array = new McGeLongArray();
  	   array.append(5);
  	   array.append(10);
    
  	   console.log(array.at(0)); // 输出: 5
  	   console.log(array.at(1)); // 输出: 10
  	 * \`\`\`
  	 */
  	at(index: number): number;
  	/**
  	 * 通过数组索引设置数据元素的值
  	 * @param index 数组索引值
  	 * @param val 整数数值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeLongArray } from "mxcad"
  	 *
  	   const array = new McGeLongArray();
  	   array.append(5);
  	   array.append(10);
    
  	   array.setAt(0, 15);
  	   console.log(array.at(0)); // 输出: 15
  	 * \`\`\`
  	 */
  	setAt(index: number, val: number): void;
  	/**
  	 * 清空数组
  	 * @example
  	 * \`\`\`ts
  	 * // array为整数数组
  	 * array.clear()
  	 * \`\`\`
  	 */
  	clear(): void;
  	/**
  	* 遍历数组
  	* @param call 回调函数
  	* @example
  	* \`\`\`ts
  	* import { McGeLongArray } from "mxcad"
  	*
  	  const array = new McGeLongArray();
  	  array.append(5);
  	  array.append(10);
    
  	  array.forEach((val, index) => {
  		console.log(\`Index \${index}: Value \${val}\`);
  	  });
  	  // 输出:
  	  // Index 0: Value 5
  	  // Index 1: Value 10
  	* \`\`\`
  	*/
  	forEach(call: (val: number, index: number) => void): void;
  }
  /**
   * 表示字符串的数组
   */
  export  class McGeStringArray {
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   // 创建一个新的 McGeStringArray 实例
  	   const myArray = new McGeStringArray();
    
  	   // 通过传入一个对象初始化 McGeStringArray
  	   const initialValues = { data: ["apple", "banana", "orange"] };
  	   const myArray2 = new McGeStringArray(initialValues);
  	 * \`\`\`
  	 */
  	constructor(imp?: object);
  	/**
  	 * 复制对象的值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   const array1 = new McGeStringArray();
  	   const array2 = new McGeStringArray();
  	   array2.append("apple");
  	   array2.append("banana");
    
  	   // 复制 array2 的值到 array1
  	   array1.copy(array2);
  	 * \`\`\`
  	 */
  	copy(val: McGeStringArray): this;
  	/**
  	* 添加一个值
  	* @param val 字符串
  	* @example
  	* \`\`\`ts
  	* import { McGeStringArray } from "mxcad";
  	*
  	* const array = new McGeStringArray();
  	  array.append("apple");
  	  array.append("banana");
  	* \`\`\`
  	*/
  	append(val: string): void;
  	/**
  	 * 返回数组长度
  	 * @return 数组长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	 * const array = new McGeStringArray();
  	 * console.log(array.length()); // 输出: 0
  	 * \`\`\`
  	 */
  	length(): number;
  	/**
  	 * 根据数组索引得到数据元素的值
  	 * @param index 数组索引
  	 * @return 字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   const array = new McGeStringArray();
  	   array.append("apple");
  	   array.append("banana");
    
  	   console.log(array.at(0)); // 输出: "apple"
  	   console.log(array.at(1)); // 输出: "banana"
  	 * \`\`\`
  	 */
  	at(index: number, decodeFromGb2312?: boolean): string;
  	/**
  	 * 通过数组索引设置数据元素的值
  	 * @param index 数组索引
  	 * @param val 字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   const array = new McGeStringArray();
  	   array.append("apple");
  	   array.append("banana");
    
  	   array.setAt(0, "orange");
  	   console.log(array.at(0)); // 输出: "orange"
  	 * \`\`\`
  	 */
  	setAt(index: number, val: string, decodeFromGb2312?: boolean): void;
  	/**
  	 * 遍历数组
  	 * @param call 回调函数
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   const array = new McGeStringArray();
  	   array.append("apple");
  	   array.append("banana");
    
  	   array.forEach((val, index) => {
  		 console.log(\`Index \${index}: Value \${val}\`);
  	   });
  	   // 输出:
  	   // Index 0: Value apple
  	   // Index 1: Value banana
  	 * \`\`\`
  	 */
  	forEach(call: (val: string, index: number) => void, decodeFromGb2312?: boolean): void;
  	/**
  	 * 清空数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeStringArray } from "mxcad";
  	 *
  	   const array = new McGeStringArray();
  	   array.append("apple");
  	   array.append("banana");
    
  	   array.clear();
  	   console.log(array.length()); // 输出: 0
  	 * \`\`\`
  	 * */
  	clear(): void;
  }
  /**
   * 表示三维点的数组
   */
  export  class McGePoint3dArray {
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad";
  	 *
  	   // 创建一个新的 McGePoint3dArray 实例
  	   const myArray = new McGePoint3dArray();
    
  	   // 通过传入一个对象初始化 McGePoint3dArray
  	   const initialValues = [
  		 new McGePoint3d({ x: 1, y: 2, z: 3 }),
  		 new McGePoint3d({ x: 4, y: 5, z: 6 }),
  	   ];
  	   const myArray2 = new McGePoint3dArray(initialValues);
  	 * \`\`\`
  	 */
  	constructor(imp?: object, isDestroyImp?: boolean);
  	/**
  	 * 复制对象的值
  	 * @param val 三维点的数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McGePoint3dArray } from "mxcad"
  	 *
  	   const array1 = new McGePoint3dArray();
  	   const array2 = new McGePoint3dArray();
  	   array2.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   array2.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
    
  	   // 复制 array2 的值到 array1
  	   array1.copy(array2);
  	 * \`\`\`
  	 */
  	copy(val: McGePoint3dArray | McGePoint3d[]): this;
  	/**
  	* 添加一个值
  	* @param val 三维点对象
  	* @example
  	* \`\`\`ts
  	* import { McGePoint3d, McGePoint3dArray } from "mxcad"
  	*
  	* const array = new McGePoint3dArray();
  	  array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	  array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
  	* \`\`\`
  	*/
  	append(val: McGePoint3d): void;
  	/**
  	 * 返回数组长度
  	 * @return 数组长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray } from "mxcad"
  	 *const array = new McGePoint3dArray();
  	  console.log(array.length()); // 输出: 0
  	 * \`\`\`
  	 */
  	length(): number;
  	/**
  	 * 返回数组为空
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
  	   const array = new McGePoint3dArray();
  	   console.log(array.isEmpty()); // 输出: true
    
  	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   console.log(array.isEmpty()); // 输出: false
  	 * \`\`\`
  	 */
  	isEmpty(): boolean;
  	/**
  	 * 根据数组索引值得到数据元素的值
  	 * @param index 数组索引
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
  	 *
  	   const array = new McGePoint3dArray();
  	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
    
  	   const point = array.at(0);
  	   console.log(point); // 输出: McGePoint3d { x: 1, y: 2, z: 3 }
  	 * \`\`\`
  	 */
  	at(index: number): McGePoint3d;
  	/**
  	 * 通过数组索引设置数据元素的值
  	 * @param index 数组索引
  	 * @param val 三维点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
  	 *
  	   const array = new McGePoint3dArray();
  	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
    
  	   array.setAt(0, new McGePoint3d({ x: 7, y: 8, z: 9 }));
  	   console.log(array.at(0)); // 输出: McGePoint3d { x: 7, y: 8, z: 9 }
  	 * \`\`\`
  	 */
  	setAt(index: number, val: McGePoint3d): void;
  	/**
  	 * 清空数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
  	 *
  	   const array = new McGePoint3dArray();
  	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
    
  	   array.clear();
  	   console.log(array.length()); // 输出: 0
  	 * \`\`\`
  	 * */
  	clear(): void;
  	/**
  	 * 遍历数组
  	 * @param call 回调函数
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3dArray, McGePoint3d } from "mxcad"
  	 *
  	   const array = new McGePoint3dArray();
  	   array.append(new McGePoint3d({ x: 1, y: 2, z: 3 }));
  	   array.append(new McGePoint3d({ x: 4, y: 5, z: 6 }));
    
  	   array.forEach((point, index) => {
  		 console.log(\`Index \${index}: Point \${point}\`);
  	   });
  	   // 输出:
  	   // Index 0: Point McGePoint3d { x: 1, y: 2, z: 3 }
  	   // Index 1: Point McGePoint3d { x: 4, y: 5, z: 6 }
  	 * \`\`\`
  	 */
  	forEach(call: (val: McGePoint3d, index: number) => void): void;
  }
  /**
   * 双精度浮点数数组
   */
  export  class McGeDoubleArray {
  	/** 内部实现对象 */
  	imp: any;
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
    
  	   const array = new McGeDoubleArray();
  	 * \`\`\`
  	 */
  	constructor(imp?: object, isDestroyImp?: boolean);
  	/**
  	 * 复制对象的值
  	 * @param val 双精度浮点数数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
  	 *
  	  // array1 表示一个双精度浮点数数组
  	  const array2 = new McGeDoubleArray();
  	  array2.copy(array1);
    
  	  // 现在array2与array1具有相同的值
  	 * \`\`\`
  	 */
  	copy(val: McGeDoubleArray): this;
  	/**
  	* 添加一个值
  	* @param val 双精度浮点数
  	* @example
  	* \`\`\`ts
  	* import { McGeDoubleArray } from "mxcad"
  	*
  	  // 创建数组实例
  	  const array = new McGeDoubleArray();
  	  array.append(3.14159);
  	* \`\`\`
  	*/
  	append(val: number): void;
  	/**
  	 * 返回数组长度
  	 * @return 数组长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
    
  	   const array = new McGeDoubleArray();
  	   const length = array.length();//0
  	 * \`\`\`
  	 */
  	length(): number;
  	/**
  	 * 通过数组索引得到数据元素的值
  	 * @param index 数组索引
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
    
  	   const array = new McGeDoubleArray();
  	   // 获取特定索引位置的值
  	   const value = array.at(2); // 假设索引为2的位置有值
  	 * \`\`\`
  	 */
  	at(index: number): number;
  	/**
  	 * 通过数组索引设置数据元素的值
  	 * @param 数组索引
  	 * @param val 双精度浮点数
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
    
  	   const array = new McGeDoubleArray();
  	   array.setAt(1, 3.14159); // 将索引为1的位置的值设置为3.14159
  	 * \`\`\`
  	 */
  	setAt(index: number, val: number): void;
  	/**
  	 * 清空数组
  	 * @example
  	 * \`\`\`ts
  	 * // array 表示一个McGeDoubleArray数组
  	   array.clear();
  	 * \`\`\`
  	 * */
  	clear(): void;
  	/**
  	 * 遍历数组
  	 * @param call 回调函数
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeDoubleArray } from "mxcad"
    
  	   const array = new McGeDoubleArray();
  	   array.append(3.14159);
  	   array.forEach((val,index)=>{
  		 console.log(\`Value at index \${index}: \${value}\`);
  	   })
  	 * \`\`\`
  	 */
  	forEach(call: (val: number, index: number) => void): void;
  }
  /**
   * 范围对象
   */
  export  class McGeBound {
  	/**
  	 *  最小点
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound, McGePoint3d } from "mxcad"
  	 *
  	  // 创建 McGeBound 实例
  	  const bound = new McGeBound();
  	  // 访问最小点属性并设置其值
  	  bound.minPoint = new McGePoint3d(0, 0, 0);
  	  \`\`\`
  	*/
  	minPoint: McGePoint3d;
  	/**
  	 * 最大点
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound, McGePoint3d } from "mxcad"
  	 *
  	  // 创建 McGeBound 实例
  	  const bound = new McGeBound();
  	  // 访问最大点属性并设置其值
  	  bound.maxPoint = new McGePoint3d(20, 10, 0);
  	  \`\`\`
  	 * */
  	maxPoint: McGePoint3d;
  	/**
  	 * 是否有效
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound } from "mxcad"
  	 *
  	  // 创建 McGeBound 实例
  	  const bound = new McGeBound();
  	  // 访问是否有效属性并设置其值
  	  bound.isValid = true;;
  	  \`\`\`
  	 * */
  	isValid: boolean;
  	/**
  	 * 构造函数。
  	 * @param pts 三维点数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound, McGePoint3d } from "mxcad"
  	 *
  	   const points = [new McGePoint3d(1, 2, 3), new McGePoint3d(4, 5, 6)];
  	   const bound = new McGeBound(points);
  	 * \`\`\`
  	 */
  	constructor(pts?: McGePoint3dArray | McGePoint3d[]);
  	/**
  	 * 添加一个点
  	 * @param pt 三维点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound, McGePoint3d } from "mxcad"
  	 * // 创建 McGeBound 实例
  	   const bound = new McGeBound();
  	   // 添加一个点到边界
  	   const point = new McGePoint3d(3, 4, 5);
  	   bound.addPoint(point);
  	 * \`\`\`
  	 */
  	addPoint(pt: McGePoint3d): void;
  	/**
  	 * 添加一组点
  	 * @param pts 三维点对象数组
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeBound } from "mxcad"
  	 *
  	   // 创建 McGeBound 实例
  	   const bound = new McGeBound();
    
  	   // 创建一组点
  	   const points = [new McGePoint3d(1, 2, 3), new McGePoint3d(4, 5, 6), new McGePoint3d(7, 8, 9)];
    
  	   // 添加一组点到边界
  	   bound.addPoints(points);
  	 * \`\`\`
  	 */
  	addPoints(pts: McGePoint3dArray | McGePoint3d[]): void;
  }
  /** 坐标转换类型 */
  export  class MxCoordConvertType {
  	/** 文档坐标转cad坐标
  	 * @param pt 三维点的对象
  	 * @returns 三维点的对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McGePoint3d } from 'mxcad';
  	 * const mxcad = MxCpp.getCurrentCAD();
  	 * let pt1CAD = mxcad.doc2cad1(new McGePoint3d(20,0,0));
  	 * console.log(pt1CAD)
  	 * \`\`\`
  	*/
  	doc2cad(pt: McGePoint3d): McGePoint3d;
  	/** cad坐标转文档坐标
  	 * @param pt 三维点的对象
  	 * @returns 三维点的对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McGePoint3d } from 'mxcad';
  	 * const mxcad = MxCpp.getCurrentCAD();
  	 * let pt1DOC = mxcad.cad2doc(new McGePoint3d(20,0,0));
  	 * console.log(pt1DOC)
  	 * \`\`\`
  	 */
  	cad2doc(pt: McGePoint3d): McGePoint3d;
  	/** 文档坐标转cad坐标
  	 * @param pt THREE.js点对象
  	 * @returns 三维点的对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McGePoint3d } from 'mxcad';
  	 *
  	 * const mxcad = MxCpp.getCurrentCAD();
  	 * let pt = mxcad.doc2cad1(new THREE.Vector3(20, 10));
  	 * console.log(pt)
  	 * \`\`\`
  	 */
  	doc2cad1(pt: THREE.Vector3): McGePoint3d;
  	/** cad坐标转文档坐标
  	 * @param x X轴坐标
  	 * @param y Y轴坐标
  	 * @param z Z轴坐标
  	 * @returns 三维点的对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McGePoint3d } from 'mxcad';
  	 *
  	 * const mxcad = MxCpp.getCurrentCAD();
  	 * let pt = mxcad.doc2cad1(20, 10, 0);
  	 * console.log(pt)
  	 * \`\`\`
  	*/
  	doc2cad2(x: number, y: number, z: number): McGePoint3d;
  	/** cad坐标转文档坐标
  	 * @param pt 三维点的对象
  	 * @returns THREE.js点对象
  	 */
  	cad2doc1(pt: McGePoint3d): THREE.Vector3;
  	/** cad坐标转文档坐标
  	 * @param x X轴坐标
  	 * @param y Y轴坐标
  	 * @param z Z轴坐标
  	 * @returns THREE.js点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McGePoint3d } from 'mxcad';
  	 * const mxcad = MxCpp.getCurrentCAD();
  	 * let pt = mxcad.cad2doc2(20,0,0);
  	 * console.log(pt)
  	 * \`\`\`
  	*/
  	cad2doc2(x: number, y: number, z: number): THREE.Vector3;
  }
  /** 提供坐标转换方法 */
  export  let MxCoordConvert: MxCoordConvertType;
  /**
   * 检索一个CAD(计算机辅助设计)过滤器
   * @param filter 过滤器
   * @returns CAD过滤器imp
   * @example
   * \`\`\`ts
     import { getFilterImp, MxCADResbuf } from 'mxcad';
  
     // 当filter为null时，检索CAD filter
     const filterImp1 = getFilterImp();
     console.log("Filter Implementation 1:", filterImp1);
  
     // 示例2:在提供filter时检索CAD filter
     const filter = new MxCADResbuf(); // Assuming you have a MxCADResbuf object
  
     // MxCADResbuf有一个方法getImp()返回imp
     const filterImp2 = getFilterImp(filter);
     console.log("Filter Implementation 2:", filterImp2);
   * \`\`\`
   */
  export  function getFilterImp(filter?: MxCADResbuf | null): any;
  /**
   * MxCADResbuf 类用于操作 AutoCAD 中的 resbuf 数据。
   * @example
   * \`\`\`ts
     // 筛选图纸中的所有文字对象
     import { MxCADResbuf } from "mxcad"
     // 定义过滤
     const filter = new MxCADResbuf();
     filter.AddMcDbEntityTypes("TEXT,MTEXT");
     // 设置选择，筛选文字对象
     let ss = new MxCADSelectionSet();
     ss.allSelect(filter);
     ss.forEach((id) => {
  	 let ent: any = id.getMcDbEntity();
  	 if (!ent) return;
  	 ent = McDbEntityToJsonObject(ent);
  	 console.log(JSON.stringify(ent));
     })
   * \`\`\`
   */
  export  class MxCADResbuf extends McRxObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf, DxfCode } from "mxcad"
  	 * // 定义过滤器,过滤实体类型：直线，圆弧，圆，多义线
  	 * const filter = new MxCADResbuf([DxfCode.kEntityType, "LINE,ARC,CIRCLE,LWPOLYLINE"]));
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 清空 resbuf 数据。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddMcDbEntityTypes("TEXT,MTEXT");
  	 * filter.Clear();
  	 * console.log(filter.GetCount())//输出0
  	 * \`\`\`
  	 */
  	Clear(): void;
  	/**
  	 * 遍历数据。
  	 * @param call 接受3个参数的回调函数（val:元素的值，type:元素类型，dxf:元素的数据交换格式）
  	 * @example
  	 * \`\`\`ts
  	   import {MxCADResbuf} from "mxcad"
  
  	   //创建MxCADResbuf实例
  	   const cadResbuf = new MxCADResbuf();
  	   cadResbuf.AddPoint(new McGePoint3d(1,2,3));//添加一个point元素
  	   cadResbuf.AddString(“Hello”);//添加一个字符串元素
  	   cadResbuf.AddDouble (3.14);//添加双精度型数据
  	   cadResbuf.AddLong (42);//添加一个整型数据
  
  	   //迭代CAD Resbuf实例中的元素
  	   cadResbuf.forEach((val, type, dxf)=>{
  		console.log("值:",val);
  		console.log("类型:",type);
  		console.log("DXF:",DXF);
  		});
  		//输出:
  		//值:{x: 1, y: 2, z: 3}
  		//类型:5009
  		// dxf: 10
  		//值:Hello
  		//类型:5005
  		// dxf: 10
  		//取值:3.14
  		//类型:5001
  		// dxf: 10
  		//取值:42
  		//类型:5010
  		// dxf: 10
  	 * \`\`\`
  	 */
  	forEach(call: (val: any, type: number, dxf: number, index: number) => void): void;
  	/**
  	 * 获取 resbuf 数据项个数。
  	 * @returns resbuf 数据项个数。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.GetCount())//输出0
  	 * \`\`\`
  	 */
  	GetCount(): number;
  	/**
  	 * 获取 resbuf 中所有点数据。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	GetPoints(): McGePoint3dArray;
  	/**
  	 * 获取 resbuf 数据项中的 double 类型值。
  	 * @param lItem 数据项索引。
  	 * @returns 包含 double 类型值和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.AtDouble(0))
  	 * \`\`\`
  	 */
  	AtDouble(lItem: number): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取 resbuf 数据项中的 long 类型值。
  	 * @param lItem 数据项索引。
  	 * @returns 包含 long 类型值和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.AtLong(0))
  	 * \`\`\`
  	 */
  	AtLong(lItem: number): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取 resbuf 数据项中的 McRxObject 对象。
  	 * @param lItem 数据项索引。
  	 * @returns 包含 数据库对象和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.AtObject(0))
  	 * \`\`\`
  	*/
  	AtObject(lItem: number): {
  		val: McDbObject | undefined;
  		ret: boolean;
  	};
  	/**
  	 * 添加 McRxObject 对象到 resbuf 中
  	 * @param pObj McRxObject示例对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf, McRxObject } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf();
  	 * filter.AddObject( new McRxObject());
  	 * \`\`\`
  	 */
  	AddObject(pObj: McRxObject): void;
  	/**
  	 * 获取 resbuf 数据项中的 ObjectId。
  	 * @param lItem 数据项索引。
  	 * @returns 包含 ObjectId 和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad
  	 *
  	 * const filter = new MxCADResbuf();
  	 * console.log(filter.AtObjectId(0))
  	 * \`\`\`
  	 */
  	AtObjectId(lItem: number): {
  		val: McObjectId;
  		ret: boolean;
  	};
  	/**
  	 * 获取 resbuf 数据项中的字符串。
  	 * @param lItem 数据项索引。
  	 * @returns 包含字符串和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad
  	 *
  	 * const filter = new MxCADResbuf();
  	 * console.log(filter.AtString(0))
  	 * \`\`\`
  	 */
  	AtString(lItem: number, decodeFromGb2312?: boolean): {
  		val: string;
  		ret: boolean;
  	};
  	/**
  	 * 获取 resbuf 数据项中的点坐标。
  	 * @param lItem 数据项索引。
  	 * @returns 包含点坐标和返回值的对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad
  	 *
  	 * const filter = new MxCADResbuf();
  	 * console.log(filter.AtPoint(0))
  	 * \`\`\`
  	 */
  	AtPoint(lItem: number): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 获取 resbuf 数据项中的数据类型。
  	 * @param index 索引值
  	 * @returns 数据类型。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.ItemDataType(0))
  	 * \`\`\`
  	 */
  	ItemDataType(index: number): number;
  	/**
  	 * 获取 resbuf 数据项中的数据的DXF值
  	 * @param index 索引值
  	 * @returns DXF值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * console.log(filter.ItemDataDxf(0))
  	 * \`\`\`
  	 */
  	ItemDataDxf(index: number): number;
  	/**
  	 * 添加 double 类型值到 resbuf 中。
  	 * @param val double 类型值。
  	 * @param lDataType 数据类型。
  	 * @returns 添加的数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddDouble (3.14);
  	 * \`\`\`
  	 */
  	AddDouble(val: number, lDataType?: number): number;
  	/**
  	 * 添加 long 类型值到 resbuf 中。
  	 * @param val long 类型值。
  	 * @param lDataType 数据类型。
  	 * @returns 添加的数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddLong (42);
  	 * \`\`\`
  	 */
  	AddLong(val: number, lDataType?: number): number;
  	/**
  	 * 添加 ObjectId 到 resbuf 中。
  	 * @param val ObjectId。
  	 * @param lDataType 数据类型。
  	 * @returns 添加的数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf, McDbObject } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * const objId = new McDbObject();
  	 * filter.AddObjectId (objId);
  	 * \`\`\`
  	 */
  	AddObjectId(val: number, lDataType?: number): number;
  	/**
  	 * 添加字符串到 resbuf 中。
  	 * @param str 字符串。
  	 * @param lDataType 数据类型。
  	 * @returns 添加的数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddString ("测试字符串");
  	 * \`\`\`
  	 */
  	AddString(str: string, lDataType?: number, decodeFromGb2312?: boolean): number;
  	/**
  	 * 添加扩展数据名，用选择集过滤使用
  	 */
  	AddAppName(str: string, decodeFromGb2312?: boolean): number;
  	/**
  	 * 添加实体类型，用于选择集过滤使用
  	 * @param str 多个类型用,连接 例如: "TEXT,MTEXT"
  	 * @description 实体的类型表
  	 * | 类型 | 描述 |
  	 * | ------- | ------- |
  	 * | POINT  | 文字  |
  	 * | TEXT  | 文字  |
  	 * | MTEXT  | 多行文字  |
  	 * | CIRCLE  | 圆  |
  	 * | ARC  | 圆弧  |
  	 * | LINE  | 线  |
  	 * | LWPOLYLINE | 多段线 |
  	 * | INSERT | 图块 |
  	 * | ELLIPSE | 椭圆 |
  	 * | SPLINE | 样条线 |
  	 * | LinkLine | 超链接 |
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddMcDbEntityTypes ("TEXT,LINE");
  	 * \`\`\`
  	 */
  	AddMcDbEntityTypes(str: string): any;
  	/**
  	 * 添加点坐标到 resbuf 中。
  	 * @param pt 点坐标。
  	 * @param lDataType 数据类型。
  	 * @returns 添加的数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf, McGePoint3d } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddPoint (new McGePoint3d(10,20,0));
  	 * \`\`\`
  	 */
  	AddPoint(pt: McGePoint3d, lDataType?: number): number;
  	/**
  	 * 移除所有 resbuf 数据项。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AtLong (42);
  	 * filter.RemoveAll();
  	 * \`\`\`
  	 */
  	RemoveAll(): void;
  	/**
  	 * 移除指定索引的 resbuf 数据项。
  	 * @param lItem 数据项索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AtLong (42);
  	 * filter.Remove(0);
  	 * \`\`\`
  	 */
  	Remove(lItem: number): void;
  	/**
  	 * 调试输入信息
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADResbuf } from "mxcad"
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.PrintData("调试信息")
  	 * \`\`\`
  	 */
  	PrintData(): void;
  }
  /**
   * MxCADUtilityClass 类提供了一系列与绘图相关的工具方法。
   * @example
   * \`\`\`ts
   * import { MxCADUtility, MxCADUiPrPoint } from "mxcad"
   * //点选
   * const getPoint = new MxCADUiPrPoint()
   * const point = await getPoint.go()
   * if(!point) return
   * let objId = MxCADUtility.findEntAtPoint(point.x, point.y,point.z,-1,filter)
   * // 选中对象设置高亮
   * MxCADUtility.highlightEntity(objId.id, true)
   * console.log(objId)
   * \`\`\`
   */
  export  class MxCADUtilityClass {
  	/** 内部实现对象 */
  	private imp;
  	constructor();
  	/**
  	 * eraseObject 方法用于删除指定的图形对象
  	 * @param lId - 需要删除的图形对象的 ID
  	 * @returns 返回一个布尔值，表示是否删除成功
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUtility, McGePoint3d } from "mxcad";
  	 *
  	 * const lineId = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
  	 * const res = MxCADUtility.eraseObject(lineId)
  	 * \`\`\`
  	 */
  	eraseObject(lId: number, isErase?: boolean): boolean;
  	/**
  	 * highlightEntity 方法用于高亮指定的图形对象
  	 * @param lId - 需要高亮的图形对象的 ID
  	 * @param isHighlight - 是否需要高亮，默认为 true
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUtility, McGePoint3d } from "mxcad";
  	 *
  	 * const lineId = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
  	 * MxCADUtility.highlightEntity(lineId.id, true)
  	 * \`\`\`
  	 */
  	highlightEntity(lId: number, isHighlight?: boolean): any;
  	/**
  	 * findEntAtPoint 方法用于在指定坐标点附近查找图形对象
  	 * @param dX - 坐标点的 X 坐标值
  	 * @param dY - 坐标点的 Y 坐标值
  	 * @param dZ - 坐标点的 Z 坐标值
  	 * @param dSearhRange - 查找范围，默认为 -1（表示查找整个绘图区域）
  	 * @param filter - 过滤器，用于过滤查找到的图形对象，默认为 null（表示不进行过滤）
  	 * @returns 返回查找到的图形对象的 ID
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADUiPrPoint, MxCADUtility, MxCpp } from "mxcad"
  	   const mxcad = MxCpp.getCurrentCAD();
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setMessage('请选择对象\\n');
  	   const point = await getPoint.go();
  	   if (!point) break;
  	   let objId = MxCADUtility.findEntAtPoint(point.x, point.y, point.z, -1, filter);
  	   mxcad.addCurrentSelect(objId);
  	 * \`\`\`
  	 */
  	findEntAtPoint(dX: number, dY: number, dZ: number, dSearhRange?: number, filter?: MxCADResbuf | null): McObjectId;
  	/**
  	 * selectEnt 方法用于在指定位置选择图形对象
  	 * @param strPrompt - 选择时的提示信息，默认为 null（表示不显示提示信息）
  	 * @param filter - 过滤器，用于过滤选择到的图形对象，默认为 null（表示不进行过滤）
  	 * @param isSelectMxDraw 是否选择批注图形 默认true
  	 * @param init 选择图形前初始化函数( 会在实例化{@link https://mxcadx.gitee.io/mxdraw_api_docs/classes/MrxDbgUiPrPoint.html | mxdraw取点类}时触发，得到取点实例)
  	 * @param callbackGetPoint 回调函数 获取选中图形时的坐标点
  	 * @returns 返回一个 Promise，其中包含选择到的图形对象的 ID 数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUtility, MxCADResbuf } from "mxcad";
  	 *
  	 * // 定义过滤器
  	 * const filter = new MxCADResbuf()
  	 * filter.AddMcDbEntityTypes ("TEXT,LINE");
  	 *
  	 * let retIds = await MxCADUtility.selectEnt("\\n选择删除对象", filter);
  	 * console.log(retIds)
  	 * \`\`\`
  	 */
  	selectEnt(strPrompt?: string, filter?: MxCADResbuf | null, isSelectMxDraw?: boolean, init?: (getPoint: MrxDbgUiPrPoint) => any, callbackGetPoint?: (point: McGePoint3d) => void): Promise<McObjectId[]>;
  	/**
  	* 得到图上当前选择对象时，选择范围点.
  	* @returns { object } point1 角点1 | point2 角点2 | isvalid 是否有效
  	* @example
  	* \`\`\`ts
  	 import { MxCADUtility } from "mxcad"
  	 let ids = MxCADUtility.getCurrentSelect()
  	 let pt1!: McGePoint3d, pt2!: McGePoint3d
  	 const { point1, point2 } = MxCADUtility.getCurrentSelectPoints()
  	 console.log(pt1, pt2)
  	*
  	* \`\`\`
  	*/
  	getCurrentSelectPoints(): {
  		point1: McGePoint3d;
  		point2: McGePoint3d;
  		isvalid: boolean;
  	};
  	/**
     * 得到当前选中的对象。
     * @param filter 过滤对象
     * @example
     * \`\`\`ts
  	 import { MxCADResbuf, MxCADUtility } from "mxcad";
  	 const filter = new MxCADResbuf();
  	 filter.AddMcDbEntityTypes('TEXT');
  	 const objIds = MxCADUtility.getCurrentSelect();
  	 console.log(objIds);
     * \`\`\`
     */
  	getCurrentSelect(filter?: MxCADResbuf | null, returnMxCADObject?: boolean, returnMxDrawObject?: boolean): McObjectId[];
  	/** 用户选择
  	 * @param strPrompt 字符串提示
  	 * @param filter 过滤对象
  	 * @returns 返回一个 Promise，其中包含得到选择的对象ID
  	 * @example
  	 * \`\`\`ts
  		import { MxCADResbuf, MxCADUtility } from 'mxcad';
  		let filter = new MxCADResbuf();
  		filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
  		let aryId = await MxCADUtility.userSelect("选择目标曲线", filter);
  		console.log(aryId);
  	 * \`\`\`
  	 *  */
  	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (ss: MxCADSelectionSet, getPoint: MrxDbgUiPrPoint) => any): Promise<McObjectId[]>;
  	/**
  	 * 初始化
  	 * @example
  	 * \`\`\`ts
  	  import { MxCADUtility } from "mxcad";
  	  MxCADUtility.init()
  	 * \`\`\`
  	 * */
  	init(): void;
  	/** 获取角点(鼠标点击的两个点)
  	 * @param strPrompt 字符串提示
  	 * @param pt1 第一个点 (已知一个角点的情况)
  	 * @param detailedResult {@link DetailedResult} 交互结果讲台的回调
  	 * @param drawSelectCroner 绘制选择对象的选框(true有背景false无背景)
  	 * @param isDisableAllTrace 是否禁用所有跟踪
  	 * @returns 返回一个 Promise，其中包含两个角点对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUtility } from "mxcad";
  	 *
  	 * const ret = await MxCADUtility.getCorner("测试");
  	 * if (!ret) return;
  	 * console.log(ret.pt1, ret.pt2)
  	 * \`\`\`
  	 *  */
  	getCorner(strPrompt?: string, pt1?: McGePoint3d, detailedResult?: (retcode: DetailedResult) => any, drawSelectCroner?: boolean, isDisableAllTrace?: boolean, init?: (getPoint: MxCADUiPrPoint) => any): Promise<{
  		pt1: McGePoint3d;
  		pt2: McGePoint3d;
  	} | null>;
  	/** 获取多个实体形成的包围盒
  	 * @param aryId 实体对象ID数组
  	 * @returns { object} minPt 最小点 | maxPt 最大点
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADUtility } from "mxcad";
  	 *
  	   let aryId = await MxCADUtility.userSelect("选择目标对象");
  	   let ext = MxCADUtility.getMcDbEntitysBoundingBox(aryId);
  	   if (!ext) return;
  	   console.log("最小点"，ext.minPt)
  	   console.log("最大点", ext.maxPt)
  	 * \`\`\`
  	 *  */
  	getMcDbEntitysBoundingBox(aryId: McObjectId[]): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  	} | undefined;
  	/** 计算凸度
  	 * @param pt1 开始点
  	 * @param pt2 中点
  	 * @param pt3 结束点
  	 * @returns 计算凸度结果
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, MxCADUtility } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,10,0);
  	 * const pt3 = new McGePoint3d(40,0,0);
  	 * const Bulge = MxCADUtility.calcBulge(pt1, pt2, pt3);
  	 * console.log(Bulge)
  	 * \`\`\`
  	 *  */
  	calcBulge(pt1: McGePoint3d, pt2: McGePoint3d, pt3: McGePoint3d): {
  		val: number;
  		ret: boolean;
  	};
  	/** 判断一个点是否在闭合区域内
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 *  */
  	pointInPolygon(aryPoint: McGePoint3dArray, x: number, y: Number): boolean;
  	/** 通过一个点坐标填充对应位置实体的填充
  	 * @param pt 点对象
  	 * @returns 返回一个填充对象
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADUiPrPoint, MxCADUtility } from 'mxcad'
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setMessage("\\n指定填充区域内部一点:");
  	   getPoint.disableAllTrace(true);
  	   getPoint.setDisableOsnap(true);
  	   let pt = (await getPoint.go()) as McGePoint3d;
  	   if (!pt) return;
  
  	   let hatch = MxCADUtility.builderHatchFromPoint(pt);
  	 * \`\`\`
  	 * */
  	builderHatchFromPoint(pt: McGePoint3d): McDbHatch | null;
  	/** 计算文字的外包框
  	 * */
  	getTextBox(str: string, dTextHeight: number, dWidthFactor: number, idTextStyleRecord: McObjectId): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  		ret: boolean;
  	};
  	/** 计算文字对象的外包框
  	 * */
  	getTextEntityBox(text: McDbEntity, isTrimLastSpace?: boolean): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  		ret: boolean;
  	};
  }
  /** 提供了一系列与绘图相关的工具方法 */
  export  let MxCADUtility: MxCADUtilityClass;
  /** 选择集状态枚举 */
  export  enum MxCADSelectionSetStatus {
  	/** 构造选择集成功 */
  	kSelected = 0,
  	/** 当交互构造选择集时，用户直接按下了 Enter 键。 */
  	kNone = 1,
  	/** 当交互构造选择集时，用户按下了 Esc 键取消。 */
  	kCanceled = 2,
  	/** 拒绝执行的无效请求(关键字错误)。 */
  	kRejected = 3,
  	/** 输入了关键值 */
  	kKeyword = 4
  }
  /**
   * 选择集 用于选择实体
  * @example
  * \`\`\`ts
  * 比如：通过扩展数据名DataName过滤选择图上所有PL线对象
  *  let ss = new MxCADSelectionSet();
  *          ss.allSelect(new MxCADResbuf([DxfCode.kAppName,0,1001,"DataName",DxfCode.kEntityType, "LWPOLYLINE"]));
  *          ss.forEach(id=>{
  *              let ent = id.getMcDbEntity();
  *              if(ent){
  *                  console.log(ent.getxDataString("DataName") );
  *              }
  *          })
  * \`\`\`
  * */
  export  class MxCADSelectionSet extends McRxObject {
  	/**
  	 * 是否循环选择
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  
  	   let ss = new MxCADSelectionSet();
  	   ss.isWhileSelect = false;
  	 * \`\`\`
  	 * */
  	isWhileSelect: boolean;
  	/**
  	 * 选择是否高亮
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  
  	   let ss = new MxCADSelectionSet();
  	   ss.isSelectHighlight = true;
  	 * \`\`\`
  	 * */
  	isSelectHighlight: boolean;
  	/**
  	 * 选择角点1
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  
  	   let ss = new MxCADSelectionSet();
  	   ss.selectPt1 = new McGePoint3d(20,10,0);
  	 * \`\`\`
  	 * */
  	private selectPt1;
  	/**
  	 * 选择角点2
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  
  	   let ss = new MxCADSelectionSet();
  	   ss.selectPt1 = new McGePoint3d(0,0,0);
  	 * \`\`\`
  	 *  */
  	private selectPt2;
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	   let ss = new MxCADSelectionSet();
  	 * \`\`\`
  	 * */
  	constructor();
  	/**
  	 * 得到选择形成的两个对角点
  	 * @returns {object} pt1 角点1 | pt2 角点2
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
   
  	   let ss = new MxCADSelectionSet();
  	   if (!await ss.userSelect("选择目标范围")) return;
  	   const selectPt  = ss.getSelectPoint();
  	   console.log(selectPt.pt1, selectPt.pt2);
  	 * \`\`\`
  	 * */
  	getSelectPoint(): {
  		pt1: McGePoint3d;
  		pt2: McGePoint3d;
  	};
  	/** 全选
  	 * @param filter 过滤对象
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	
  	   let ss = new MxCADSelectionSet();
  	   ss.allSelect();
  	   ss.forEach((id) => {
  			let ent: any = id.getMcDbEntity();
  			if (!ent) return;
  			ent = McDbEntityToJsonObject(ent);
  			console.log(JSON.stringify(ent));
  		})
  	 * \`\`\`
  	 * @example
  	 * \`\`\`ts
  		import { MxCADSelectionSet } from "mxcad";
  		let ss = new MxCADSelectionSet();
  		// 得到图上，直线，圆，圆弧，多义线，在0层上的对象.
  		ss.allSelect(new MxCADResbuf([DxfCode.kEntityType, "LINE,ARC,CIRCLE,LWPOLYLINE",DxfCode.kLayer,"0"]));
  		console.log("得到对象数目:" + ss.count());
  	 * \`\`\`
  	 * @example
  	 * \`\`\`ts
  	 *    import { MxCADSelectionSet } from "mxcad";
  	 *    let ss = new MxCADSelectionSet();
  	 *    // 得到0层上的对象.
  	 *    ss.allSelect(new MxCADResbuf([DxfCode.kLayer,"0"]));
  	 *    console.log("得到对象数目:" + ss.count());
  	 *    // 遍历对象
  	 *     ss.forEach((id) => {
  	 *    let ent = id.getMcDbEntity();
  	 *    if (!ent) return;
  	 *    let entBox = ent.getBoundingBox();
  	 *  })
  	 * \`\`\`
  	 *  */
  	allSelect(filter?: MxCADResbuf | null): number;
  	/** 根据一个坐标点选择一个实体对象的索引
  	 * @param dX 坐标x
  	 * @param dY 坐标y
  	 * @param filter 过滤对象
  	 * @return 实体对象索引
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	  
  	   let ss = new MxCADSelectionSet();
  	   const index = ss.pointSelect(20,10);
  	 * \`\`\`
  	 *  */
  	pointSelect(dX: number, dY: number, filter?: MxCADResbuf | null, dTol?: number): number;
  	/** 根据两个对角点选择一个实体对象的索引
  	 * @param dX1 角点1 X轴值
  	 * @param dY1 角点1 Y轴值
  	 * @param dX2 角点2 X轴值
  	 * @param dY2 角点2 Y轴值
  	 * @param filter 过滤对象
  	 * @return 实体对象索引
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	 
  	   let ss = new MxCADSelectionSet();
  	   const index = ss.pointSelect(0,0,20,10);
  	 * \`\`\`
  	 *  */
  	crossingSelect(dX1: number, dY1: number, dX2: number, dY2: number, filter?: MxCADResbuf | null): number;
  	/**
  	 * 获取当前选中的个数
  	 * @return 当前选中实体个数
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	
  	   let ss = new MxCADSelectionSet();
  	   if (!await ss.userSelect("选择目标范围")) return;
  	   const count = ss.count();
  	   console.log(count);
  	 * \`\`\`
  	 * */
  	count(): number;
  	/**
  	 * 判断选择集是否为空
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	  
  	   let ss = new MxCADSelectionSet();
  	   if (!await ss.userSelect("选择目标范围")) return;
  	   const res = ss.isNull();
  	 * \`\`\`
  	 * */
  	isNull(): boolean;
  	/** 根据对象索引 得到对应对象ID
  	 * @param lItem 对象索引
  	 * @return 对象id
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	 
  	   let ss = new MxCADSelectionSet();
  	   const objId = ss.item(2);
  	 * \`\`\`
  	 * */
  	item(lItem: number): McObjectId;
  	/** 遍历已选中的实体
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	 *
  	   let ss = new MxCADSelectionSet();
  	   ss.allSelect();
  	   ss.forEach((id) => {
  		   let ent: any = id.getMcDbEntity();
  	   })
  	 * \`\`\`
  	 * */
  	forEach(call: (val: McObjectId) => void): void;
  	/** 得到当前已选中的所有对象ID
  	 * @returns 选中id对象数组
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADSelectionSet } from "mxcad";
  	 
  	   let ss = new MxCADSelectionSet();
  	   ss.allSelect();
  	   const ids = ss.getIds();
  	 * \`\`\`
  	 * */
  	getIds(): McObjectId[];
  	/** 用户选择
  	 * @param  strPrompt 字符串提示
  	 * @param filter 提示
  	 * @param init 用户选择前的初始化操作
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADResbuf, MxCADSelectionSet } from "mxcad";
  	
  	   let filter = new MxCADResbuf();
  	   filter.AddMcDbEntityTypes("INSERT");
  	   let ss = new MxCADSelectionSet();
  	   if (!await ss.userSelect("选择要刷的目标块:", filter)) return;
  	   if (ss.count() == 0) return;
  	   let ids = ss.getIds();
  	   console.log(ids);
  	 * \`\`\`
  	 *  */
  	userSelect(strPrompt?: string, filter?: MxCADResbuf | null, init?: (getPoint: MrxDbgUiPrPoint) => any): Promise<boolean>;
  }
  /** MxCADUiPrBase 作为 MxCADUiPr* 系列的基类，提供了一些基础的功能。 */
  export  class MxCADUiPrBase {
  	/** 内部实现对象 */
  	protected imp: any;
  	/** MxDraw 实例对象 */
  	protected mxobj: MxDrawObject;
  	/** 构造函数
  	 * @param imp 内部实现对象
  	 */
  	constructor(imp: any);
  	/** 文档坐标转cad坐标
  	 * @param pt THREE.js坐标
  	 * @returns 三维点对象
  	 */
  	protected doc2cad1(pt: THREE.Vector3): McGePoint3d;
  	/** 文档坐标转cad坐标
  	 * @param x X轴值
  	 * @param y Y轴值
  	 * @param z Z轴值
  	 * @returns 三维点对象
  	 */
  	protected doc2cad2(x: number, y: number, z: number): McGePoint3d;
  	/** cad坐标转文档坐标
  	 * @param pt 三维点对象
  	 * @returns THREE.js点对象
  	 */
  	protected cad2doc1(pt: McGePoint3d): THREE.Vector3;
  	/** cad坐标转文档坐标
  	 * @param x X轴值
  	 * @param y Y轴值
  	 * @param z Z轴值
  	 * @returns THREE.js点对象
  	 */
  	protected cad2doc2(x: number, y: number, z: number): THREE.Vector3;
  	/**
     * 返回关键字列表
     * @returns 关键词列表
     * @example
     * \`\`\`ts
     * //以 MxCADUiPrPoint 类示例，其他MxCADUiPr* 系列的类同理
  	 import { MxCADUiPrPoint } from 'mxcad'
  	 const getPoint = new MxCADUiPrPoint();
  	 getPoint.setKeyWords("[选项1(A)/选项2(B)]");
  	 const keyList = getPoint.keyWords();
  	 console.log("关键词列表", keyList)// 关键词列表 [选项1(A)/选项2(B)]
     * \`\`\`
     */
  	keyWords(): string;
  	/**
  	 * 设置关键字列表
  	 * @param keyWordList 关键词列表
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	   //以 MxCADUiPrPoint 类示例, 其他MxCADUiPr* 系列的类同理
  	   import { MxCADUiPrPoint } from 'mxcad'
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setKeyWords("[选项1(A)/选项2(B)]")
  	 * \`\`\`
  	 */
  	setKeyWords(keyWordList: string): void;
  	/**
  	 * 清除上一次的输入点数据。
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例, 其他MxCADUiPr* 系列的类同理
  	   import { MxCADUiPrPoint } from 'mxcad'
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.clearLastInputPoint();
  	 * \`\`\`
  	*/
  	clearLastInputPoint(): void;
  	/**
  	 * 设置上一次的输入点。
  	 * @param pt 点对象
  	 * @example
  	 * \`\`\`ts
  	   //以 MxCADUiPrPoint 类示例, 其他MxCADUiPr* 系列的类同理
  	   import { MxCADUiPrPoint , McGePoint3d} from 'mxcad'
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setLastInputPoint(new McGePoint3d(0,0,0));
  	 * \`\`\`
  	 */
  	setLastInputPoint(pt: McGePoint3d): void;
  	/**
  	 * 提示字符串
  	 * @returns 提示消息
  	 * @example
  	 * \`\`\`ts
  	  //以 MxCADUiPrPoint 类示例, 其他MxCADUiPr* 系列的类同理
  	   import { MxCADUiPrPoint , McGePoint3d} from 'mxcad'
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setMessage("测试信息");
  	   console.log(getPoint.message());//测试信息
  	 * \`\`\`
  	 */
  	message(): string;
  	/**
  	 * 设置提示字符串
  	 * @param message 提示消息
  	 * @returns 提示消息
  	 * @example
  	 * \`\`\`ts
  	   //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad'
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setMessage("\\n提示消息")
  	 * \`\`\`
  	 */
  	setMessage(message: string): void;
  	/**
  	 * 返回用户选择的关键字
  	 * @returns 选择的关键字
  	 * @example
  	 * \`\`\`ts
  	   //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setKeyWords("[选项1(A)/选项2(B)]");
  	   const pt = await getPoint.go();
  	   const key = getPoint.keyWordPicked();
  	   console.log(key)
  	 * \`\`\`
  	 */
  	keyWordPicked(): string;
  	/**
  	 * 测试某一个关键字是否被用户选择
  	 * @param matchKeyWord 要检测的关键字
  	 * @returns true为真
  	 * @example
  	 * \`\`\`ts
  	   //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setKeyWords("[选项1(A)/选项2(B)]");
  	   const pt = await getPoint.go();
  	   if(getPoint.isKeyWordPicked('A')){
  		console.log('选项1')
  	   }else if(getPoint.isKeyWordPicked('B')){
  		console.log('选项2')
  	   }
  	 * \`\`\`
  	 */
  	isKeyWordPicked(matchKeyWord: string): boolean;
  	/**
  	 * 设置交互过程的动态绘制调用对象
  	 * @param pDraw {@link McEdGetPointWorldDrawObject | 动态绘制调用对象}
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setUserDraw((pt,pw)=>{
  		 console.log(pt, pw)
  	   })
  	   const pt = await getPoint.go();
  	 * \`\`\`
  	 */
  	setUserDraw(pDraw: ((currentPoint: McGePoint3d, pWorldDraw: McEdGetPointWorldDrawObject) => void)): void;
  	/**
  	* 返回交互操作退出的详细原因
  	* @returns 当前交互操作返回值类型
  	* @example
  	* \`\`\`ts
  	* //以 MxCADUiPrDist 类示例
  	  import { MxCADUiPrDist } from 'mxcad';
  	  import { DetailedResult } from "mxdraw";
  	*
  	  const getDist = new MxCADUiPrDist();
  	  const val = await getDist.go();
  	  if (!val) return;
  	  if (getDist.getDetailedResult() === DetailedResult.kCoordIn) {
  		 console.log('提示输入', val)
  	   }
  	* \`\`\`
  	*/
  	getDetailedResult(): DetailedResult;
  	/**
  	 * 获取操作状态
  	 * @return 操作状态值
  	* @example
  	* \`\`\`ts
  	* //以 MxCADUiPrDist 类示例
  	  import { MxCADUiPrDist } from 'mxcad';
  	  import { MrxDbgUiPrBaseReturn } from "mxdraw";
  	*
  	  const getDist = new MxCADUiPrDist();
  	  const val = await getDist.go();
  	  if (!val) return;
  	  if(getPoint.getStatus() === MrxDbgUiPrBaseReturn.kNone) {
  		// 空输入
  	  }
  	* \`\`\`
  	 * */
  	getStatus(): MrxDbgUiPrBaseReturn;
  	/**
  	 * 把动态绘制的对象，保留到图上。
  	 * @param callAddEntity 回调参数ent 类型：THREE.THREE.Object3D
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	  import { MxCADUiPrPoint } from 'mxcad';
  	*
  	  const getPoint = new MxCADUiPrPoint();
  	  const basePt = new McGePoint3d(0, 0, 0);
  	  getPoint.setBasePt(basePt);
  	  getPoint.setUserDraw((pt,pw)=>{
  	   const line = new McDbLine(basePt, pt);
  	   pw.drawMcDbEntity(line)
  	  })
  	  const val = await getPoint.go();
  	  if (!val) return;
  	  getPoint.drawReserve()
  	 * \`\`\`
  	 */
  	drawReserve(callAddEntity?: (ent: THREE.Object3D) => void): void;
  	/**
  	 * 设置需要的Touche输入类型,默认值是 {@link MxType.InputToucheType.kGetBegan}
  	 * @param toucheType toucheType类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   getPoint.setInputToucheType(MxType.InputToucheType.kGetEnd);
  	 * \`\`\`
  	 */
  	setInputToucheType(toucheType: number): void;
  	/**
  	 * 返回需要的Touche输入类型
  	 * @returns Touche输入类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint();
  	   const toucheType = getPoint.getInputToucheType();
  	   console.log(toucheType)
  	 * \`\`\`
  	 */
  	getInputToucheType(): number;
  	/**
  	 * 设置光标类型
  	 * @param type 鼠标样式类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	   import { MxCursorType } from "mxdraw";
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setMessage("指定文字起点:")
  	   getPoint.setCursorType(MxCursorType.kCross);
  	   const pt = await getPoint.go();
  	 * \`\`\`
  	 */
  	setCursorType(type: MxCursorType): void;
  	/**
  	 * 返回光标类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.getCursorType())
  	 * \`\`\`
  	 */
  	getCursorType(): MxCursorType;
  	/**
  	 * 设置动态输入类型
  	 * @param type 动态输入显示类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	   import { DynamicInputType } from "mxdraw";
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDynamicInputType(DynamicInputType.kXYCoordInput);
  	 * \`\`\`
  	 */
  	setDynamicInputType(type: DynamicInputType): void;
  	/**
  	 * 返回动态输入类型
  	 * @returns 动态输入显示类型
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.getDynamicInputType())
  	 * \`\`\`
  	 */
  	getDynamicInputType(): DynamicInputType;
  	/**
  	 * 是否禁用动态输入框
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisableDynInput())
  	 * \`\`\`
  	*/
  	isDisableDynInput(): boolean;
  	/**
  	 * 设置是否禁用动态输入框
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisableDynInput(true);
  	 * \`\`\`
  	 */
  	setDisableDynInput(isDisable: boolean): void;
  	/**
  	 * 设置是否禁用捕捉
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisableOsnap(true);
  	 * \`\`\`
  	 */
  	setDisableOsnap(isDisable: boolean): void;
  	/**
  	 * 是否禁用捕捉
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisableOsnap())
  	 * \`\`\`
  	 */
  	isDisableOsnap(): boolean;
  	/**
    * 是否输入点遍移一个距离
    */
  	isOffsetInputPostion(): boolean;
  	/**
  	 * 设置输入点遍移一个距离
  	 */
  	setOffsetInputPostion(isOffset: boolean): void;
  	/** 设置是否禁用动态跟踪
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisableDynamicTrace(true);
  	 * \`\`\`
  	 *  */
  	setDisableDynamicTrace(isDisable: boolean): void;
  	/** 是否禁用动态跟踪
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisableDynamicTrace())
  	 * \`\`\`
  	 * */
  	isDisableDynamicTrace(): boolean;
  	/** 设置是否禁用极轴跟踪
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisablePolarAxisTrace(true);
  	 * \`\`\`
  	 * */
  	setDisablePolarAxisTrace(isDisable: boolean): void;
  	/** 是否禁用极轴跟踪
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisablePolarAxisTrace())
  	 * \`\`\`
  	 * */
  	isDisablePolarAxisTrace(): boolean;
  	/** 设置是否禁用格网追踪
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisableGridTrace(true);
  	 * \`\`\`
  	 * */
  	setDisableGridTrace(isDisable: boolean): void;
  	/** 是否禁用格网追踪
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisableGridTrace())
  	 * \`\`\`
  	 * */
  	isDisableGridTrace(): boolean;
  	/** 设置是否禁用正射追踪
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.setDisableOrthoTrace(true);
  	 * \`\`\`
  	 * */
  	setDisableOrthoTrace(isDisable: boolean): void;
  	/** 是否禁用正射追踪
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   console.log(getPoint.isDisableOrthoTrace())
  	 * \`\`\`
  	 * */
  	isDisableOrthoTrace(): boolean;
  	/** 禁用所有跟踪
  	 * @param isDisable 是否禁用
  	 * @example
  	 * \`\`\`ts
  	 * //以 MxCADUiPrPoint 类示例
  	   import { MxCADUiPrPoint } from 'mxcad';
  	 *
  	   const getPoint = new MxCADUiPrPoint()
  	   getPoint.disableAllTrace(true);
  	 * \`\`\`
  	*/
  	disableAllTrace(isDisable?: boolean): void;
  	/**
  	 * 返回输入控制设置
  	 * @example
  	 * \`\`\`ts
  	 * // 以 MxCADUiPrInt 类示例
  	   import { MxCADUiPrInt } from 'mxcad';
  
  	   let getInt = new MxCADUiPrInt();
  	   console.log(getInt.userInputControls())
  	 * \`\`\`
  	 */
  	userInputControls(): number;
  	/**
  	* 设置输入控制设置
  	* @example
  	* \`\`\`ts
  	* // 以 MxCADUiPrInt 类示例
  	  import { MxCADUiPrInt } from 'mxcad';
  	  import { UserInputControls } from "mxdraw"
  	*
  	  let getInt = new MxCADUiPrInt();
  	  getInt.setMessage("输入整数:");
  	  getInt.setUserInputControls(UserInputControls.kNoZeroResponseAccepted);
  	  let iRowNum = await getInt.go();
  	  if (iRowNum == null) return;
  	* \`\`\`
  	*/
  	setUserInputControls(contros: number): void;
  	/**
  	* 停止当前动态拖动
  	* @returns void
  	*/
  	abort(cause?: DetailedResult): void;
  }
  /**
   * UI交互取点 (鼠标点击画布)
   * @example
   * \`\`\`ts
     import { MxCADUiPrPoint } from 'mxcad'
     const getPoint = new MxCADUiPrPoint();
     getPoint.setMessage("请设置第一个点")
     const point = await getPoint.go()
     console.log(point)
   * \`\`\`
   */
  export  class MxCADUiPrPoint extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 运行go方法, 将返回用户交互的Promise任务
  	 * @returns 返回一个promise对象，包含了用户点击页面得到的坐标点
  	 * @description
  	 * 当鼠标点击画布后 Promise完成, 得到其点击的坐标点
  	 * 其他交互操作方式将返回null 如按下Esc取消键或在交互中输入对应的关键词
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * const pt = await getPoint.go();
  	 * console.log(pt)
  	 * \`\`\`
  	 */
  	go(): Promise<McGePoint3d | null>;
  	/**
  	 * 得以获取的点
  	 * @returns 点坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * await getPoint.go();
  	 * const pt = getPoint.value();
  	 * console.log(pt)
  	 * \`\`\`
  	 */
  	value(): McGePoint3d;
  	/**
  	 * 得到文档坐标.
  	 * @returns 点对象 MdGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * await getPoint.go();
  	 * const pt = getPoint.getDocValue();
  	 * console.log(pt)
  	 * \`\`\`
  	 */
  	getDocValue(): McGePoint3d;
  	/**
  	 * 得到动态拖动的基点
  	 * @returns 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * getPoint.setBasePt(new McGePoint3d(0,0,0));
  	 * await getPoint.go();
  	 * console.log(getPoint.basePt())//(0,0,0)
  	 * \`\`\`
  	 */
  	basePt(): McGePoint3d;
  	/**
  	 * 设置动态拖动的基点
  	 * @param basePt 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * getPoint.setBasePt(new McGePoint3d(0,0,0));
  	 * \`\`\`
  	 */
  	setBasePt(basePt: McGePoint3d): void;
  	/**
  	 * 设置动态拖动的基点用于动态绘制。
  	 * @param useIt 是否设置,setBasePt会自设置true.
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint } from "mxcad"
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * getPoint.setUseBasePt(true);
  	 * \`\`\`
  	 */
  	setUseBasePt(useIt: boolean): void;
  }
  /** UI交互获取距离
   * @description 根据两个点确定一段距离
   * @example
   * \`\`\`ts
     import { MxCADUiPrDist } from 'mxcad'
    
     const getDist = new MxCADUiPrDist()
     getDist.setMessage("提示用户设置距离:")
     const distVal = await getDist.go()
     console.log(distVal)
   * \`\`\`
   */
  export  class MxCADUiPrDist extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist()
  	 * \`\`\`
  	 * */
  	constructor();
  	/**
  	 * 得以获取的距离
  	 * @returns 返回距离值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist();
  	 * const val = await getDist.go();
  	 * if(!val) return;
  	 * const dist = getDist.value();
  	 * console.log(dist)
  	 * \`\`\`
  	 */
  	value(): number;
  	/**
  	 * 得到动态拖动的基点
  	 * @returns 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist, McGePoint3d } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist();
  	 * getDist.setBasePt(new McGePoint3d(0,0,0))
  	 * console.log(getDist.basePt())//(0,0,0)
  	 * \`\`\`
  	 */
  	basePt(): McGePoint3d;
  	/**
  	 * 设置动态拖动的基点
  	 * @param basePt 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist, McGePoint3d } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist();
  	 * getDist.setBasePt(new McGePoint3d(0,0,0))
  	 * \`\`\`
  	 */
  	setBasePt(basePt: McGePoint3d): void;
  	/**
  	 * 设置使用动态拖动的基点
  	 * @param useIt 是否设置 默认为false
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist();
  	 * getDist.setUseBasePt(true)
  	 * \`\`\`
  	 */
  	setUseBasePt(useIt: boolean): void;
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户设置的距离
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrDist } from 'mxcad'
  	 *
  	 * const getDist = new MxCADUiPrDist();
  	 * const val = await getDist.go();
  	 * \`\`\`
  	 */
  	go(): Promise<number | null>;
  }
  /**
   * UI交互 根据两个点计算得到角度
   * @example
   * \`\`\`ts
     import { MxCADUiPrAngle } from 'mxcad'
   
     const getAngle = new MxCADUiPrAngle()
     getAngle.setMessage("提示用户设置角度:")
     const angleVal = await getAngle.go()
     console.log(angleVal)
   * \`\`\`
   */
  export  class MxCADUiPrAngle extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle()
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 得到获取的距离
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle();
  	 * const val = await getAngle.go();
  	 * const angle = getAngle.value();
  	 * console.log(angle);
  	 * \`\`\`
  	 */
  	value(): number;
  	/**
  	 * 得到动态拖动的基点
  	 * @returns 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle, McGePoint3d } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle();
  	 * getAngle.setBasePt(new McGePoint3d(0,0,0));
  	 * console.log(getAngle.basePt());//(0,0,0)
  	 * \`\`\`
  	 */
  	basePt(): McGePoint3d;
  	/**
  	 * 设置动态拖动的基点
  	 * @param basePt 基点 McGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle, McGePoint3d } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle();
  	 * getAngle.setBasePt(new McGePoint3d(0,0,0));
  	 * \`\`\`
  	 */
  	setBasePt(basePt: McGePoint3d): void;
  	/**
  	 * 设置使用动态拖动的基点
  	 * @param useIt 是否设置 默认为false
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle, McGePoint3d } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle();
  	 * getAngle.setUseBasePt(true));
  	 * \`\`\`
  	 */
  	setUseBasePt(useIt: boolean): void;
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户设置的角度
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrAngle, McGePoint3d } from 'mxcad'
  	 *
  	 * const getAngle = new MxCADUiPrAngle();
  	 * const angle = await getAngle.go();
  	 * \`\`\`
  	 */
  	go(): Promise<number | null>;
  }
  /**
   *  UI交互 根据用户输入得到整型数字
   * @example
   * \`\`\`ts
     import { MxCADUiPrInt } from 'mxcad'
   
     const getInt = new MxCADUiPrInt()
     getInt.setMessage("提示用户输入数字:")
     const intVal = await getInt.go()
     console.log(intVal)
   * \`\`\`
   */
  export  class MxCADUiPrInt extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrInt } from 'mxcad';
  	 *
  	 * const getInt = new MxCADUiPrInt();
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 得以获取的整数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrInt } from 'mxcad';
  	 *
  	 * const getInt = new MxCADUiPrInt();
  	 * const val = await getInt.go();
  	 * if(!val) return;
  	 * const int = getInt.value();
  	 * \`\`\`
  	 */
  	value(): number;
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户输入的整数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrInt } from 'mxcad'
  	 *
  	 * const getInt = new MxCADUiPrInt();
  	 * const int = await getInt.go();
  	 * \`\`\`
  	 */
  	go(): Promise<number | null>;
  }
  /**
   * UI交互 根据用户输入得到关键词
   * @example
   * \`\`\`ts
     import { MxCADUiPrKeyWord } from 'mxcad'
    
     const getKey = new MxCADUiPrKeyWord
     getKey.setMessage("提示用户关键词 A、 B、 C:")
     getKey.setKeyWords("A B C")
     const keyVal = await getKey.go()
     console.log(keyVal)
   * \`\`\`
   */
  export  class MxCADUiPrKeyWord extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrKeyWord } from "mxcad";
  	 *
  	 * const getKey = new MxCADUiPrKeyWord();
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户输入的关键字
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrKeyWord } from 'mxcad'
  	 *
  	 * const getType = new MxCADUiPrKeyWord();
  	 * getType.setMessage('选择连接方式');
  	 * getType.setKeyWords('[手动逐个连线(H)/自动批量连线(A)]')
  	 * const type = await getType.go();
  	 * if (!type) return;
  	 * \`\`\`
  	 */
  	go(): Promise<string | null>;
  }
  /**
   * UI交互 根据用户输入得到字符串
   * @example
   * \`\`\`ts
     import { MxCADUiPrString } from 'mxcad'
   
     const getStr = new MxCADUiPrString()
     getStr.setMessage("提示用户输入字符串:")
     const strVal = await getStr.go()
     console.log(strVal)
   * \`\`\`
   */
  export  class MxCADUiPrString extends MxCADUiPrBase {
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrString } from 'mxcad';
  	 *
  	 * const getStr = new MxCADUiPrString();
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 获取用户输入的字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrString } from 'mxcad';
  	 *
  	 * const getStr = new MxCADUiPrString();
  	 * const val = await getStr.go();
  	 * if(!val) return;
  	 * const string = getStr.value();
  	 * console.log(string)
  	 * \`\`\`
  	 */
  	value(): string;
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户输入的字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrString } from 'mxcad'
  	 *
  	 * const getStr = new MxCADUiPrString();
  	 * const string = await getStr.go();
  	 * \`\`\`
  	 */
  	go(): Promise<string | null>;
  }
  /**
   * UI交互 根据用户鼠标点击的坐标得到对应的实体
   * @example
   * \`\`\`ts
     import { MxCADUiPrEntity, MxCpp } from "mxcad"
  
     let getEnt = new MxCADUiPrEntity();
     getEnt.setMessage("选择目标对象");
     let entId = await getEnt.go();
     if(!entId.id) return;
     // 通过ID对象得到图形数据对象
     let ent = entId.getMcDbEntity();
   * \`\`\`
   */
  export  class MxCADUiPrEntity extends MxCADUiPrBase {
  	private filter?;
  	private id;
  	/**
  	 * 构造函数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from "mxcad";
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * \`\`\`
  	 */
  	constructor();
  	/**
  	 * 设置或获取过滤器
  	 * @param filter 过滤器
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, MxCADResbuf } from "mxcad";
  	 *
  	 * const filter = new MxCADResbuf();
  	 * filter.AddMcDbEntityTypes("LINE");
  	 * const getEnt = new MxCADUiPrEntity();
  	 * getEnt.setFilter(filter);
  	 * \`\`\`
  	 */
  	setFilter(filter: MxCADResbuf): void;
  	/**
  	 * 获取MxCADUiPrEntity设置的过滤器详情
  	 * @returns 过滤器
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, MxCADResbuf } from "mxcad";
  	 *
  	 * const filter = new MxCADResbuf();
  	 * filter.AddMcDbEntityTypes("LINE");
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * getEnt.setFilter(filter);
  	 * console.log(getEnt.getFilter());
  	 * \`\`\`
  	 */
  	getFilter(): MxCADResbuf | undefined;
  	/**
  	 * 开始动态拖动
  	 * @returns 返回一个promise对象，包含了用户选择的对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from 'mxcad'
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * const entId = await getEnt.go();
  	 * if (!entId.id) return
  	 * \`\`\`
  	 */
  	go(): Promise<McObjectId>;
  	/**
  	 * 得到获取对象时的输入点
  	 * @return 获取对象时的输入点
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from 'mxcad'
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * const entId = await getEnt.go();
  	 * if (!entId.id) return;
  	 * const point = getEnt.pickPoint();
  	 * console.log(point)
  	 * \`\`\`
  	 */
  	pickPoint(): McGePoint3d;
  	/**
  	 * 得以获取对象时的id
  	 * @returns 返回对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from 'mxcad'
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * const entId = await getEnt.go();
  	 * if (!entId.id) return;
  	 * const id = getEnt.value();
  	 * \`\`\`
  	 */
  	value(): McObjectId;
  	/**
  	 * 得以获取对象时的输入点的CAD图纸坐标.
  	 * @returns 点对象 MdGePoint3d
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from 'mxcad'
  	 *
  	 * const getEnt = new MxCADUiPrEntity();
  	 * const entId = await getEnt.go();
  	 * if (!entId.id) return;
  	 * const point = getEnt.getDocPickPoint();
  	 * \`\`\`
  	 */
  	getDocPickPoint(): McGePoint3d;
  }
  /**
   * 具有一个图形表示的所有数据库对象的基类，包括了显示实体的通用属性操作，如线型，图层，文字样式，颜色，几何外包等
   */
  export  class McDbEntity extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from "mxcad";
  	 *
  	 * const ent = new McDbEntity()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 打碎对象，返回打后对象数据链表
  	 * @return resbuf 数据
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity, MxCADResbuf } from "mxcad";
  	 * // 获取目标对象
  	 * let getEnt = new MxCADUiPrEntity();
  	 * getEnt.setMessage("选择打碎对象:");
  	 * let id = await getEnt.go();
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * // 打碎对象
  	 *       let retExplode: MxCADResbuf = ent.explode();
  	 *       if (retExplode.GetCount() == 0) return;
  	 *       let iExplodeConut = retExplode.GetCount();
  	 *       for (let j = 0; j < iExplodeConut; j++) {
  	 *           let tmpobj = retExplode.AtObject(j).val;
  	 *           if(tmpobj instanceof McDbEntity ){
  	 *               mxcad.drawEntity(tmpobj);
  	 *           }
  	 *       }
  	 * \`\`\`
  	 */
  	explode(): MxCADResbuf;
  	/**
  	 * 得到对象颜色
  	 * @example
  	 * \`\`\`ts
  	  import { McDbEntity, McCmColor} from 'mxcad'
  	  const ent = new McDbEntity();
  	  ent.trueColor = new McCmColor(255, 0, 0);
  	  console.log(ent.trueColor)
  	 * \`\`\`
  	 */
  	get trueColor(): McCmColor;
  	/**
  	 * 设置对象颜色
  	 */
  	set trueColor(val: McCmColor);
  	/**
  	 * 得到对象颜色索引
  	 * @example
  	 * \`\`\`ts
  	  import { McDbEntity, ColorIndexType } from 'mxcad'
  	  const ent = new McDbEntity();
  	  ent.colorIndex = ColorIndexType.kByblock;
  	  console.log(ent.colorIndex)
  	 * \`\`\`
  	 */
  	get colorIndex(): number;
  	/**
  	 * 设置对象颜色索引
  	 * @param val 颜色索引（ColorIndexType）
  	 */
  	set colorIndex(val: number);
  	/**
  	 * 得到对象图层名
  	 */
  	get layer(): string;
  	/**
  	 * 设置对象图层名
  	 * @param val 图层名
  	 * @example
  	 * \`\`\`ts
  	  import { McDbEntity } from 'mxcad'
  	  const ent = new McDbEntity();
  	  ent.layer = "newLayerName";
  	  console.log(ent.layer)
  	  \`\`\`
  	 */
  	set layer(val: string);
  	/**
  	* 得到对象线型名
  	*/
  	get linetype(): string;
  	/**
  	 * 设置对象线型名
  	 * @param  val 线型名
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.linetype = "MyLineType";
  	 * console.log(ent.linetype)
  	 * \`\`\`
  	 */
  	set linetype(val: string);
  	/**
  	 * 得到对象线型比例
  	 */
  	get linetypeScale(): number;
  	/**
  	 * 设置对象线型比例
  	 * @param val 线型比例
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.linetypeScale = 0.8;
  	 * console.log(ent.linetypeScale)
  	 * \`\`\`
  	 */
  	set linetypeScale(val: number);
  	/**
  	 * 对象是否可见
  	 */
  	get visible(): boolean;
  	/**
  	 * 设置是否可见
  	 * @param val 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.visible = true;
  	 * console.log(ent.visible)
  	 * \`\`\`
  	 */
  	set visible(val: boolean);
  	/**
  	 * 得到对象线重
  	 */
  	get lineweight(): number;
  	/**
  	 * 设置对象线重
  	 * @param val 线重
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.lineweight = 20;
  	 * console.log(ent.lineweight)
  	 * \`\`\`
  	 */
  	set lineweight(val: number);
  	/**
  	 * 得到对象文字样式
  	 */
  	get textStyle(): string;
  	/**
  	 * 设置对象文字样式
  	 * @param val 文字样式名
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.textStyle = "st_style";
  	 * \`\`\`
  	 */
  	set textStyle(val: string);
  	/**
  	 * 设置对象是否高亮
  	 * @param isHighlight 是否高亮
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.highlight(true);
  	 * \`\`\`
  	 */
  	highlight(isHighlight: boolean): void;
  	/**
  	 * 移动对象
  	 * @param fromPoint 移动开始点
  	 * @param toPoint 移动结束点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity, McGePoint3d } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.move(new McGePoint3d(0,0,0), new McGePoint3d(20,0,0))
  	 * \`\`\`
  	 */
  	move(fromPoint: McGePoint3d, toPoint: McGePoint3d): boolean;
  	/**
  	 * 旋转对象
  	 * @param basePoint 旋转基点
  	 * @param dRotationAngle 旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity, McGePoint3d } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.rotate(new McGePoint3d(0,0,0), Math.PI)
  	 * \`\`\`
  	 */
  	rotate(basePoint: McGePoint3d, dRotationAngle: number): boolean;
  	/**
  	 * 镜向对象
  	 * @param point1 镜像基点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity, McGePoint3d } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.mirror(new McGePoint3d(0,0,0), new McGePoint3d(20,10,0))
  	 * \`\`\`
  	 */
  	mirror(point1: McGePoint3d, point2: McGePoint3d): boolean;
  	/**
  	 * 缩放对象
  	 * @param basePoint 缩放基点
  	 * @param dScaleFactor 缩放因子（<1 缩小； >1 放大）
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEntity, McGePoint3d } from 'mxcad'
  	 * const ent = new McDbEntity()
  	 * ent.scaleEntity(new McGePoint3d(0,0,0), 0.5)
  	 * \`\`\`
  	 */
  	scaleEntity(basePoint: McGePoint3d, dScaleFactor: number): boolean;
  	/**
  	 * 变换对象
  	 * @param transformationMatrix 变换矩阵
  	 * @example
  	 * \`\`\`ts
  	 * import { McGeMatrix3d, McDbEntity, McGeVector3d} from 'mxcad'
  	 *  const ent = new McDbEntity()
  		let matrix = new McGeMatrix3d();
  		matrix.setToTranslation(new McGeVector3d(20,0,0));//平移
  		ent.transformBy(matrix);
  	 * \`\`\`
  	 */
  	transformBy(transformationMatrix: McGeMatrix3d): boolean;
  	/**
  	 * 得到对象的最小外包
  	 * @param minPt 实例对象的最小点
  	 * @param maxPt 实例对象的最大点
  	 * @param ret 是否获取成功
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText, McGePoint3d } from 'mxcad'
  	 * const text = new McDbText();
  	 * text.textString = "测试Test";
  	 * text.height = 20;
  	 * text.position = text.alignmentPoint = new McGePoint3d(0,0,0);
  	 * const { minPt, maxPt, ret } = text.getBoundingBox()
  	 * \`\`\`
  	 */
  	getBoundingBox(): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  		ret: boolean;
  	};
  	/**
     * 得到对象的扩展数据
     * @param appName 扩展数据名
     * @example
     * \`\`\`ts
     * // 假设ent为有效实例对象
     * const xData = ent.getXData();
     * \`\`\`
     */
  	getxData(appName?: string): MxCADResbuf;
  	/**
  	 * 设置对象的扩展数据
  	 * @param xdata 扩展数据链表
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, McDbEntity } from "mxcad";
  	 *
  	 * //设置扩展数据
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let id = await selEntity.go();
  	 * if (!id.isValid()) return;
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * ent.setxData(new MxCADResbuf([{type:DxfCode.kExDataName,val:"DataName"},{type:DxfCode.kString,val:"yyyyy"}]));
  	 * \`\`\`
  	 */
  	setxData(xdata: MxCADResbuf): boolean;
  	/**
  	 * 获取与特定实体关联的 XData 信息，并以字符串形式返回
  	 * @param appName 扩展数据名称
  	 * @returns { object } val XData信息 | ret 是否返回成功
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * let data = ent.getxDataString("DataName");
  	 * if(data.ret){
  	 *   console.log(data.val)
  	 * }
  	 * \`\`\`
  	 */
  	getxDataString(appName: string): {
  		val: string;
  		ret: boolean;
  	};
  	/**
  	 * 设置与特定实体关联的 XData 信息，并以字符串形式设置
  	 * @param appName 扩展数据名称
  	 * @param val 字符串值
  	 * @returns 是否设置成功
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, McDbEntity } from "mxcad";
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let id = await selEntity.go();
  	 * if (!id.isValid()) return;
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * const res = ent.setxDataString("DataName", "xxxxx");
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setxDataString(appName: string, val: string): boolean;
  	/**
  	 * 获取实体的指定 XData 类型中的 double 值
  	 * @param appName 扩展数据名称
  	 * @returns double 值
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * let data = ent.getxDataDouble("DataName");
  	 * if(data.ret){
  	 *   console.log(data.val)
  	 * }
  	 * \`\`\`
  	 */
  	getxDataDouble(appName: string): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 设置实体的指定 XData 类型中的 double 值
  	 * @param appName 扩展数据名称
  	 * @param val double 值
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, McDbEntity } from "mxcad";
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let id = await selEntity.go();
  	 * if (!id.isValid()) return;
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * const res = ent.setxDataDouble("DataName", 0);
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setxDataDouble(appName: string, val: number): boolean;
  	/**
  	 * 获取实体的指定 XData 类型中的 long（整数）值
  	 * @param appName 扩展数据名称
  	 * @returns long 值
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * let data = ent.getxDataLong("DataName");
  	 * if(data.ret){
  	 *   console.log(data.val)
  	 * }
  	 * \`\`\`
  	 */
  	getxDataLong(appName: string): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 设置实体的指定 XData 类型中的 long（整数）值
  	 * @param appName 扩展数据名称
  	 * @param val long 值
  	 * @returns long 值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, McDbEntity } from "mxcad";
  	 *
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let id = await selEntity.go();
  	 * if (!id.isValid()) return;
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * const res = ent.setxDataLong("DataName", 123456);
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setxDataLong(appName: string, val: number): boolean;
  	/**
  	 * 获取实体的指定 XData 类型中的点对象
  	 * @param appName 扩展数据名称
  	 * @return 获取结果及三维点对象
  	 */
  	getxDataPoint(appName: string): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 设置实体的指定 XData 类型中的点对象
  	 * @param appName 扩展数据名称
  	 * @param val 点对象
  	 * @return 获取结果及三维点对象
  	 */
  	setxDataPoint(appName: string, val: McGePoint3d): boolean;
  	/**
  	 * 删除实体指定应用程序名称相关的数据
  	 * @param appName 扩展数据名称
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, McDbEntity } from "mxcad";
  	 *
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let id = await selEntity.go();
  	 * if (!id.isValid()) return;
  	 * let ent:McDbEntity = id.getMcDbEntity();
  	 * if (ent === null) return;
  	 * const res = ent.deleteXData("DataName");
  	 * if(res){
  	 *   //删除成功
  	 * }else
  	 *   //删除失败
  	 * }
  	 * \`\`\`
  	 */
  	deleteXData(appName: string): boolean;
  	/**
  	 * 获取实体中包含的所有 XData 记录的应用程序名（AppName）
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const appNames = ent.getAllAppName();
  	 * console.log(appNames);
  	 * \`\`\`
  	 */
  	getAllAppName(): McGeStringArray;
  	/**
  	 * 获取图层ID对象
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const layerId = ent.layerId;
  	 * \`\`\`
  	 */
  	get layerId(): McObjectId;
  	/**
  	 * 设置图层Id对象
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * const layerId = mxcad.addLayer("测试图层")
  	 * ent.layerId = layerId;
  	 * \`\`\`
  	 */
  	set layerId(id: McObjectId);
  	/**
  	 * 获取实体对象线型ID
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const linetypeId = ent.linetypeId;
  	 * \`\`\`
  	 */
  	get linetypeId(): McObjectId;
  	/**
  	 * 设置实体对象线型ID
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * const lineId = mxcad.addLinetypeEx("TestMyLine", '25,-5');
  	 * ent.linetypeId = lineId;
  	 * \`\`\`
  	 */
  	set linetypeId(id: McObjectId);
  	/**
  	 * 获取实体文字样式
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const textStyleId = ent.textStyleId;
  	 * \`\`\`
  	 */
  	get textStyleId(): McObjectId;
  	/**
  	 * 设置实体的文字样式
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * const textStyleId = mxcad.addTextStyle("MyLineTypeTextStyle", "txt.shx", "hztxt.shx", 1);
  	 * ent.textStyleId = textStyleId;
  	 * \`\`\`
  	 */
  	set textStyleId(id: McObjectId);
  	/** 与其他实体相交, 得到交点
  	* @param intersectObject 需要相交的是实体对象
  	* @param exOption 相交的选项
  	* @returns 得到所有交点
  	* @example
  	* \`\`\`ts
  	* import { McDbLine, McDb } from 'mxcad'
  	* const line1 = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
  	* const line2 = new McDbLine(new McGePoint3d(10,10,0), new McGePoint3d(11,1,0));
  	* const ptArr = line1.IntersectWith(line2, McDb.Intersect.kExtendBoth)
  	* \`\`\`
  	*  */
  	IntersectWith(intersectObject: McDbEntity, exOption: McDb.Intersect): McGePoint3dArray;
  	/**
  	 * 计算面积
  	 * @returns { object } val 面积值 | ret 是否获取成功
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbCircle } from "mxcad"
  	 *
  	 * const center = new McGePoint3d(0,0,0);
  	 * const circle = new McDbCircle(center, 20);
  	 * const area = circle.getArea();
  	 * console.log("圆面积：", area)
  	 * \`\`\`
  	 */
  	getArea(): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 禁用对象的自动更新显示.
  	 * @param isDisable 是否禁用对象自动更新显示
  	 * @example
  	* \`\`\`ts
  	* import { McDbLine } from 'mxcad'
  	* const line1 = new McDbLine(new McGePoint3d(0,0,0), new McGePoint3d(20,1,0));
  	* line1.disableDisplay(true)
  	* \`\`\`
  	 */
  	disableDisplay(isDisable: boolean): void;
  	/**
  	 * 显示调用对象更新显示.
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * ent.updateDisplay()
  	 * \`\`\`
  	 */
  	updateDisplay(): void;
  	/**
  	 * 同步实体的数据。这个方法可能是在修改了实体的属性或者附加了新的数据之后调用的，以确保所有的改变都被正确地保存到实体的数据库记录中。
  	 * @param _toCpp 是否同步数据
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const res = ent.syncData(true);
  	 * if(res){
  	 *   //同步成功
  	 * }else{
  	 *   //同步失败
  	 * }
  	 * \`\`\`
  	 */
  	syncData(_toCpp?: boolean): boolean;
  	/**
  	 * 对象的显示顺序
  	 * @example
  	 * \`\`\`ts
  	 * // 假设ent为有效实例对象
  	 * const order = ent.drawOrder();
  	 * \`\`\`
  	 */
  	get drawOrder(): number;
  	/**
  	* 对象的显示顺序
  	* @param order 顺序值
  	* @example
  	* \`\`\`ts
  	* import { MxCpp, MxCADSelectionSet } from "mxcad";
  	*
  	* let ss = new MxCADSelectionSet();
  	* if (!await ss.userSelect("\\n选择对象")) return;
  	* //得到当前图上对象的最大，小最显示顺序.
  	* let minmaxOrder = MxCpp.getCurrentDatabase().currentSpace.getMinMaxDrawOrder();
  	* // 把对象放到最上面。
  	* let lOrder = minmaxOrder.maxDrawOrder + 1;
  	* ss.forEach((id) => {
  	*   let ent = id.getMcDbEntity();
  	*   if (ent) {
  	*     ent.drawOrder = lOrder;
  	*   }
  	* })
  	* \`\`\`
  	*/
  	set drawOrder(order: number);
  	/**
  	 * 返回对象的normal
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	get normal(): McGeVector3d;
  	/**
  	* 设置对象的normal
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	set normal(val: McGeVector3d);
  }
  /**
   * 表示数据库曲线。实现了曲线的相关操作，如求曲线的长度，最近点，面积，曲线上任一点在曲线上的长度 切向方向，曲线交点，坐标变换，打断，偏移，离散等功能。
   * @example
   * \`\`\`ts
   * // 下面代码演示了，选择一个曲线，然后选择其它曲线，计算曲线与这个曲线的交点，然后在交点处打断曲线。
  	import { MxCADUiPrEntity, MxCADResbuf, MxCpp, MxCADUtility, McDbCurve } from "mxcad";
  
  	async function Mx_IntersectBreak() {
  		// 选择参考曲线
  		let eventObj = new MxCADUiPrEntity();
  		eventObj.setMessage("请选择参考曲线");
  		let eventObj_id = await eventObj.go();
  		let event = await eventObj_id.getMcDbEntity()//获取实例对象
  		if (event === null) return;
  		const mxcad = MxCpp.App.getCurrentMxCAD();
  		let curve = event.clone();// 克隆曲线
  		let filter = new MxCADResbuf();
  		//设置过滤器 选中圆类、圆弧类、直线类、多段线类、椭圆类
  		filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
  		let aryId = await MxCADUtility.userSelect("选择打断对象", filter);//选中对象的id
  		if (aryId.length == 0) return
  		// 遍历选中的曲线对象
  		aryId.forEach(async (id) => {
  			if (id.id !== eventObj_id.id) {
  				let breakEvent: McDbCurve = (await id.getMcDbEntity()) as McDbCurve;// 获取打断曲线的实例
  				let breakArr = breakEvent.IntersectWith(curve as McDbEntity, McDb.Intersect.kOnBothOperands);//与实体相交的点集合
  				if (breakArr.length() != 0) {
  					//有交点的对象
  					let arr: McGePoint3d[] = [];//交点数组
  					breakArr.forEach((item: McGePoint3d) => {
  						arr.push(item)
  					})
  					let breakPoint: McGePoint3d[] = [];
  					arr.forEach(pt => {
  						let closePoint = breakEvent.getClosestPointTo(pt, false);//曲线上离鼠标位置最近的点
  						if (!closePoint.ret) return;
  						let vec = breakEvent.getFirstDeriv(closePoint.val);//断点所在位置的向量
  						if (!vec.ret) return;
  						vec.val.normalize().mult(MxFun.viewCoordLong2Cad(10));//断开的距离
  						let pt1 = closePoint.val.clone();
  						pt1.addvec(vec.val);
  						let pt2 = closePoint.val.clone();
  						pt2.subvec(vec.val);
  						breakPoint.push(pt1);
  						breakPoint.push(pt2);
  					});
  					let breakcurve = breakEvent.splitCurves(breakPoint);// 根据端点截取曲线
  					if (breakcurve.empty()) {
  						breakEvent.highlight(false);
  						return;
  					}
  					// 重绘打断后的曲线
  					breakcurve.forEach((obj: McDbObject, index: number) => {
  						if (index % 2 == 0) mxcad.drawEntity(obj as McDbEntity);
  					});
  					breakEvent.erase() // 删除原曲线
  				}
  			}
  		})
  	}
   * \`\`\`
   */
  export  class McDbCurve extends McDbEntity {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCurve } from "mxcad";
  	 *
  	 * const curve = new McDbCurve();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取起始参数。
  	 * @returns 起始参数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const startPa = curve.getStartParam();
  	 * if(startPa.ret){
  	 *   console.log(startPa.val)
  	 * }
  	 * \`\`\`
  	 */
  	getStartParam(): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取结束参数。
  	 * @returns 结束参数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const endPa = curve.getEndParam();
  	 * if(endPa.ret){
  	 *   console.log(endPa.val)
  	 * }
  	 * \`\`\`
  	 */
  	getEndParam(): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取参数位置上的距离。
  	 * @param param 参数位置。
  	 * @returns 距离及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const res = curve.getDistAtParam(2);
  	 * if(res.ret){
  	 *   console.log(res.val)
  	 * }
  	 * \`\`\`
  	 */
  	getDistAtParam(param: number): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取距离位置上的参数。
  	 * @param dist 距离位置。
  	 * @returns 参数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const res = curve.getParamAtDist(0);
  	 * if(res.ret){
  	 *   console.log(res.val)
  	 * }
  	 * \`\`\`
  	 */
  	getParamAtDist(dist: number): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取曲线上点的距离位置。
  	 * @param pt 距离位置。
  	 * @returns 点及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2)
  	 * const res = line.getDistAtPoint(pt2);
  	 * if(res.ret){
  	 *   const dist = res.val;
  	 *   console.log(dist);//20
  	 * }
  	 * \`\`\`
  	 */
  	getDistAtPoint(pt: McGePoint3d): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 获取距离位置上的点。
  	 * @param dist 距离位置。
  	 * @returns 点及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2)
  	 * const res = line.getPointAtDist(10);
  	 * if(res.ret){
  	 *   const point = res.val;
  	 *   console.log(point);//(10, 0, 0)
  	 * }
  	 * \`\`\`
  	 */
  	getPointAtDist(dist: number): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到曲线的开始点
  	 * @returns 曲线的开始点及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2)
  	 * const res = line.getStartPoint();
  	 * if(res.ret){
  	 *   const point = res.val;
  	 *   console.log(point);//(0, 0, 0)
  	 * }
  	 * \`\`\`
  	 */
  	getStartPoint(): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到曲线的结束点
  	 * @returns 曲线的结束点及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2)
  	 * const res = line.getEndPoint();
  	 * if(res.ret){
  	 *   const point = res.val;
  	 *   console.log(point);//(20, 0, 0)
  	 * }
  	 * \`\`\`
  	 */
  	getEndPoint(): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到曲线参数所在的点坐标
  	 * @param param 曲线参数
  	 * @returns 点对象及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const res = curve.getPointAtParam(5);
  	 * if(res.ret){
  	 *   console.log(res.val)
  	 * }
  	 * \`\`\`
  	 */
  	getPointAtParam(param: number): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到曲线某点位置的曲线参数
  	 * @param pt 曲线上的点
  	 * @returns 曲线参数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2)
  	 * const res = line.getParamAtPoint(pt1);
  	 * if(res.ret){
  	 *   const val = res.val;
  	 *   console.log(val);
  	 * }
  	 * \`\`\`
  	 */
  	getParamAtPoint(pt: McGePoint3d): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 通过曲线参数得到曲线的一阶导数
  	 * @param param 曲线参数
  	 * @returns 曲线一阶导数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设curve为有效曲线实例对象
  	 * const res = curve.getFirstDerivFromParam(5);
  	 * if(res.ret){
  	 *   console.log(res.val)
  	 * }
  	 * \`\`\`
  	 */
  	getFirstDerivFromParam(param: number): {
  		val: McGeVector3d;
  		ret: boolean;
  	};
  	/**
  	 * 通过曲线上某点得到曲线的一阶导数
  	 * @param pt 曲线上的点
  	 * @returns 曲线一阶导数及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbCircle } from "mxcad"
  	 *
  	 * const center = new McGePoint3d(0,0,0);
  	 * const circle = new McDbCircle(center, 20);
  	 * const vec = circle.getFirstDeriv(new McGePoint3d(20,0,0));//目标点切向量
  	 * if(vec.ret){
  	 *  const val = vec.val;
  	 * }
  	 * \`\`\`
  	 */
  	getFirstDeriv(pt: McGePoint3d): {
  		val: McGeVector3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到一个点到曲线的最近点
  	 * @param givenPnt 参考点
  	 * @param isExtend 是否延展实体
  	 * @returns 点对象及执行结果。
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbCircle, MxCADUiPrPoint, MxCpp } from "mxcad"
  	 *
  	 * const center = new McGePoint3d(0,0,0);
  	 * const circle = new McDbCircle(center, 20);
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * mxcad.drawEntity(circle);
  	 *
  	 * const getPoint = new MxCADUiPrPoint();
  	 * getPoint.setUserDraw((pt,pw)=>{
  	 *   //获取pt到circle上最近的点
  	 *   const point = circle.getClosestPointTo(pt);
  	 *   console.log(point)
  	 * })
  	 * const point = await getPoint.go();
  	 * \`\`\`
  	 */
  	getClosestPointTo(givenPnt: McGePoint3d, isExtend: boolean): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 得到偏移曲线
  	 * @param dOffsetDist 偏移距离
  	 * @param ptOffsetRef 偏移点
  	 * @returns 偏移后的对象数组。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrPoint, MxCpp } from 'mxcad'
  		let getFristPoint = new MxCADUiPrPoint();
  		let offsetDist = 10 ;
  		let getEvent = new MxCADUiPrEntity();
  		getEvent.setMessage('指定偏移对象');
  		let event_id = await getEvent.go();
  		if (!event_id) return;
  		let event = (await event_id.getMcDbEntity()) as McDbCurve;
  		let getoOffPt = new MxCADUiPrPoint();
  		getoOffPt.setMessage('指定偏移点');
  		let offPt = await getoOffPt.go();
  		if (!offPt) return;
  		let objArr = event.offsetCurves(offsetDist, offPt);
  		if (objArr.length() === 0) return;
  		objArr.forEach((obj: McDbObject) => {
  			MxCpp.getCurrentCAD().drawEntity(obj as McDbEntity);
  		});
  	 * \`\`\`
  	 */
  	offsetCurves(dOffsetDist: number, ptOffsetRef: McGePoint3d): McDbObjectArray;
  	/**
  	 * 打断曲线
  	 * @param pts 断点数组
  	 * @returns 打断后的曲线数组。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad"
  	 * // PointsArr:断点数组 event:McDbCurve
  		event.splitCurves(PointsArr).forEach((e:McDbCurve, index:number) => {
  			if(index % 2 === 0){
  				MxCpp.getCurrentCAD().drawEntity(e as McDbEntity)
  			}
  		})
  	 * \`\`\`
  	 */
  	splitCurves(pts: McGePoint3d[]): McDbObjectArray;
  	/**
  	 * 根据曲线参数打断曲线
  	 * @param params 曲线参数数组
  	 * @returns 打断后的曲线数组。
  	 */
  	splitCurvesFromParam(params: number[]): McDbObjectArray;
  	/**
  	 * 把曲线离散成一堆点
  	 * @param dApproxEps 采样间隔
  	 * @returns resbuf 数据
  	 * @example
  	 * \`\`\`ts
  	 * import { McGePoint3d, McDbLine } from "mxcad"
  	 *
  	 * const pt1 = new McGePoint3d(0,0,0);
  	 * const pt2 = new McGePoint3d(20,0,0);
  	 * const line = new McDbLine(pt1, pt2);
  	 * const resBuf = line.getSamplePoints(0.1);
  	 * \`\`\`
  	 */
  	getSamplePoints(dApproxEps?: number): MxCADResbuf;
  	/**
  	 * 得到曲线长度
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, MxCADResbuf, MxCADUtility, MxCADUiPrPoint} from "mxcad"
  	
  	 *  const mxcad = MxCpp.App.getCurrentMxCAD();
  		let filter = new MxCADResbuf();
  		filter.AddMcDbEntityTypes("CIRCLE,ARC,LINE,LWPOLYLINE,ELLIPSE");
  		let aryId = await MxCADUtility.userSelect("选择目标曲线", filter);
  		if (aryId.length == 0)  return;
  		aryId.forEach(async (id) => {
  			let event = id.getMcDbEntity() as McDbCurve;
  			let length = event.getLength().val;
  			console.log(length)
  		});
  	 * \`\`\`
  	 */
  	getLength(): {
  		val: number;
  		ret: boolean;
  	};
  }
  /**
   * 表示一个直线对象。
   * @example
   * \`\`\`ts
   * //参数绘直线 pt1,pt2是直线的两个点。
   * import { MxCpp, McDbLine } from "mxcad"'
   *
   * const line = new McDbLine(); // 构造直线对象
   * line.startPoint = pt1; // 设置直线起点
   * line.endPoint = pt2; // 设置直线终点
   * MxCpp.getCurrentMxCAD().drawEntity(line); // 绘制直线
   * \`\`\`
   * \`\`\`ts
     //交互绘线，点击画布选择直线的起始点。
     import { MxCADUiPrPoint, MxCpp } from "mxcad";
     
     async function MxTest_DrawLine() {
  	// 取起始点
  	const getPoint = new MxCADUiPrPoint();
  	getPoint.setMessage("\\n指定第一点:");
  	let prvPoint = await getPoint.go();
  	if (!prvPoint) return;
  	getPoint.setMessage("\\n指定下一个点:");
  	// 循环取点
  	while (true) {
  		getPoint.setBasePt(prvPoint as any);
  		let pt = await getPoint.go();
  		if (!pt) return;
  		let line = new McDbLine(prvPoint, pt);
  		MxCpp.getCurrentMxCAD().drawEntity(line);
  		prvPoint = pt;
  	}
  	}
   * \`\`\`
   */
  export  class McDbLine extends McDbCurve {
  	/**
  	 * 构造函数。
  	 * @param imp C++ 实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLine, McGePoint3d } from 'mxcad';
  	 *
  	 * // 创建 McGePoint3d 对象表示起点和终点
  	 * const startPoint = new McGePoint3d(0, 0, 0);
  	 * const endPoint = new McGePoint3d(10, 10, 0);
  	 * // 通过 McGePoint3d 对象创建 McDbLine 对象
  	 * const line1 = new McDbLine(startPoint, endPoint);
  	 * // 或者直接传入坐标值创建 McDbLine 对象
  	 * const line2 = new McDbLine(0, 0, 0, 10, 10, 0);
  	 * \`\`\`
  	 */
  	constructor(x1?: object | number, y1?: object | number, z1?: number, x2?: number, y2?: number, z2?: number);
  	/**
  	 * 获取起点。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLine } from "mxcad";
  	 *
  	 * const line = new McDbLine(0, 0, 0, 10, 10, 0);
  	 * const pt1 = line.startPoint;
  	 * console.log(pt1)// (0,0,0)
  	 * \`\`\`
  	 */
  	get startPoint(): McGePoint3d;
  	/**
  	 * 设置起点。
  	 * @param pt 新的起点。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLine, McGePoint3d } from "mxcad";
  	 *
  	 * const line = new McDbLine(0, 0, 0, 10, 10, 0);
  	 * line.startPoint = new McGePoint3d(20,0,0)
  	 * \`\`\`
  	 */
  	set startPoint(pt: McGePoint3d);
  	/**
  	 * 获取终点。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLine } from "mxcad";
  	 *
  	 * const line = new McDbLine(0, 0, 0, 10, 10, 0);
  	 * const pt2 = line.endPoint;
  	 * console.log(pt2)// (10,10,0);
  	 * \`\`\`
  	 */
  	get endPoint(): McGePoint3d;
  	/**
  	 * 设置终点。
  	 * @param pt 新的终点。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLine, McGePoint3d } from "mxcad";
  	 *
  	 * const line = new McDbLine(0, 0, 0, 10, 10, 0);
  	 * line.endPoint = new McGePoint3d(20,0,0)
  	 * \`\`\`
  	 */
  	set endPoint(pt: McGePoint3d);
  }
  /**
   * 表示一个 CAD 文字实体。
   * @example
   * \`\`\`ts
   * //绘垂直中间对齐的文字 pt(McGePoint3d) 文字位置点
   * import { MxCpp, McDbText } from "mxcad"
   *
   * const text = new McDbText(); // 构造文字实体对象
   * text.textString = "测试文字"; // 设置对象内容
   * text.horizontalMode = McDb.TextHorzMode.kTextMid; // 设置文字对齐方式
   * text.alignmentPoint = text.position = pt; // 设置文字对齐点和文字位置
   * MxCpp.getCurrentMxCAD().drawEntity(text); // 绘制文字对象
   *
   * \`\`\`
   * \`\`\`ts
     // 按线对齐:选择文字对象按目标直线方向对齐
     import { MxCADResbuf, MxCADUiPrEntity } from "mxcad";
  
     async function Mx_AlignByLine() {
  		// 选择目标直线对象
  		let filter = new MxCADResbuf();
  		filter.AddMcDbEntityTypes("LINE");
  		const getLineObj = new MxCADUiPrEntity();
  		getLineObj.setMessage("请选择目标对齐线对象(选择直线)");
  		getLineObj.setFilter(filter);
  		const lineObj_id = await getLineObj.go();
  		if (!lineObj_id.id) return;
  		const lineObj = lineObj_id.getMcDbEntity() as McDbLine;
  		const getTextObj = new MxCADUiPrEntity();
  		// 选择目标文字对象
  		let filter2 = new MxCADResbuf();
  		filter2.AddMcDbEntityTypes("TEXT");
  		getTextObj.setMessage("请选择目标文字对象");
  		getTextObj.setFilter(filter2);
  		const textObj_id = await getTextObj.go();
  		if (!textObj_id.id) return;
  		const textObj = textObj_id.getMcDbEntity() as McDbText;
  		// 计算直线与文字对象角度
  		const line_v = lineObj.getFirstDeriv(lineObj.getStartPoint().val);// 直线初始点切向量
  		let angle1 = line_v.val.angleTo2(McGeVector3d.kXAxis, McGeVector3d.kNegateZAxis);//直线与水平方向角度
  		let angle2 = textObj.rotation;//文字初始角度
  		textObj.rotate(textObj.position, angle1 - angle2) // 文字对象旋转
  		const mxcad = MxCpp.App.getCurrentMxCAD();
  		mxcad.updateDisplay() // 更新显示
     }
   * \`\`\`
   */
  export  class McDbText extends McDbEntity {
  	/**
  	 * 构造函数。
  	 * @param imp 实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取文字的位置。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const position = text.position;
  	 * \`\`\`
  	 */
  	get position(): McGePoint3d;
  	/**
  	 * 设置文字的位置。
  	 * @param pt 三维点向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText, McGePoint3d } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.position = new McGePoint3d(0,0,0);
  	 * console.log(text.position)//(0,0,0)
  	 * \`\`\`
  	 */
  	set position(pt: McGePoint3d);
  	/**
  	 * 获取文字的对齐点。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const alignmentPoint = text.alignmentPoint;
  	 * \`\`\`
  	 */
  	get alignmentPoint(): McGePoint3d;
  	/**
  	 * 设置文字的对齐点。
  	 * @param pt 三维点向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText, McGePoint3d } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.alignmentPoint = new McGePoint3d(0,0,0);
  	 * console.log(text.alignmentPoint)//(0,0,0)
  	 * \`\`\`
  	 */
  	set alignmentPoint(pt: McGePoint3d);
  	/**
  	 * 获取文字的倾斜角度。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const oblique = text.oblique;
  	 * \`\`\`
  	 */
  	get oblique(): number;
  	/**
  	 * 设置文字的倾斜角度。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.oblique = Math.PI/4;
  	 * console.log(text.oblique)//45
  	 * \`\`\`
  	 */
  	set oblique(val: number);
  	/**
  	 * 获取文字的旋转角度。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const rotation = text.rotation;
  	 * \`\`\`
  	 */
  	get rotation(): number;
  	/**
  	 * 设置文字的旋转角度。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.rotation = Math.PI/4;
  	 * console.log(text.rotation)//45
  	 * \`\`\`
  	 */
  	set rotation(pt: number);
  	/**
  	 * 获取文字的高度。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const height = text.height;
  	 * \`\`\`
  	 */
  	get height(): number;
  	/**
  	 * 设置文字高度
  	 * @param val 高度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.height = 20;
  	 * console.log(text.height)//20
  	 * \`\`\`
  	 */
  	set height(val: number);
  	/**
  	 * 获取文字的宽度因子。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const widthFactor = text.widthFactor;
  	 * \`\`\`
  	 */
  	get widthFactor(): number;
  	/**
  	 * 设置文字的宽度因子。
  	 * @param val 宽度因子
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.height = 0.8;
  	 * console.log(text.height)//0.8
  	 * \`\`\`
  	 */
  	set widthFactor(val: number);
  	/**
  	 * 获取文字的字符串。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const textString = text.textString;
  	 * \`\`\`
  	 */
  	get textString(): string;
  	/**
  	 * 设置文字的字符串。
  	 * @param val 字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.textString = "测试文本";
  	 * console.log(text.textString)//测试文本
  	 * \`\`\`
  	 */
  	set textString(val: string);
  	/**
  	 * 获取文字的水平对齐方式。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const horizontalMode = text.horizontalMode;
  	 * \`\`\`
  	 */
  	get horizontalMode(): McDb.TextHorzMode;
  	/**
  	 * 设置文字的水平对齐方式。
  	 * @param val 文字水平对齐方式
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText, McDb } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.horizontalMode = McDb.TextHorzMode.kTextAlign;
  	 * console.log(text.horizontalMode)//3
  	 * \`\`\`
  	 */
  	set horizontalMode(val: McDb.TextHorzMode);
  	/**
  	 * 获取文字的垂直对齐方式。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设text为有效文本实体
  	 * const verticalMode = text.verticalMode;
  	 * \`\`\`
  	 */
  	get verticalMode(): McDb.TextVertMode;
  	/**
  	 * 设置文字的垂直对齐方式。
  	 * @param val 文字垂直对齐方式
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbText, McDb } from "mxcad";
  	 *
  	 * const text = new McDbText();
  	 * text.verticalMode = McDb.TextVertMode.kTextVertMid;
  	 * console.log(text.verticalMode)//2
  	 * \`\`\`
  	 */
  	set verticalMode(val: McDb.TextVertMode);
  	/**
  	 * 根据当前文字对齐方式，和对齐点，计算文字位置。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	adjustAlignment(): void;
  }
  /**
   * 块引用中的属性定义文字类
   * @example
   * \`\`\`ts
  	import { McDbBlockReference, McDbAttribute } from "mxcad"
   
  	// 遍历块中的属性文字 ent:块实体
  	let blkRef: McDbBlockReference = ent;
  	let aryId = blkRef.getAllAttribute();
  	aryId.forEach((id) => {
  		let attribt: McDbAttribute = id.getMcDbEntity() as any;
  		console.log(attribt.textString);
  		console.log(attribt.tag);
  	})
   * \`\`\`
   * \`\`\`ts
  	// 在块中插入属性文字 ent:块实体
  	let blkRef: McDbBlockReference = ent;
  	const blkrecId = blkRef.blockTableRecordId; // 获取块表记录id
  	let blkRecord: any = blkrecId.getMcDbBlockTableRecord();// 获取块表记录对象
  	let ids = blkRecord.getAllEntityId(); // 获取块表记录中所有实例对象ID
  	ids.forEach((id: any, index: any) => {
  		// 筛选 McDbAttributeDefinition 对象
  		if (!id.isKindOf("McDbAttributeDefinition")) return;
  		let attribDef = id.getMcDbEntity() as McDbAttributeDefinition;
  		let tag = attribDef.tag; // 获取属性标签
  		let txt = attribDef.textString; // 获取文字的字符串
  
  		let attrib = new McDbAttribute(); // 构造新属性定义文字对象
  		attrib.position = attribDef.position; // 设置对象位置
  		attrib.alignmentPoint = attribDef.alignmentPoint // 设置对象对齐位置
  		attrib.height = attribDef.height ; // 设置对象字高
  		attrib.trueColor = attribDef.trueColor // 设置对象颜色
  		attrib.widthFactor = attribDef.widthFactor; // 设置对象宽度因子
  		// 设置文字的字符串
  		if (txt.length > 0) attrib.textString = txt;
  		else attrib.textString = "test" + index;
  		attrib.tag = tag;// 设置属性标签
  		attrib.isInvisible = attribDef.isInvisible;
  		attrib.transformBy(blkRef.blockTransform); // 块转换
  		attrib = blkRef.appendAttribute(attrib).getMcDbEntity() as McDbAttribute;
  		attrib.textStyle = attribDef.textStyle
  		attrib.layer = attribDef.layer
  	})
   * \`\`\`
   */
  export  class McDbAttribute extends McDbText {
  	/**
  	 * 构造函数。
  	 * @param imp 实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttribute } from "mxcad";
  	 *
  	 * const attrib = new McDbAttribute();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取文字的字符串。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttribute } from "mxcad";
  	 *
  	 * const attrib = new McDbAttribute();
  	 * const tag = attrib.tag;
  	 * \`\`\`
  	 */
  	get tag(): string;
  	/**
  	 * 设置文字的字符串。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttribute } from "mxcad";
  	 *
  	 * const attrib = new McDbAttribute();
  	 * attrib.tag = "example_tag"
  	 * \`\`\`
  	 */
  	set tag(val: string);
  	/**
  	 * 获取块属性文字是否可见
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttribute } from "mxcad";
  	 *
  	 * const attrib = new McDbAttribute();
  	 * const isV = attrib.isInvisible;
  	 * if(isV){
  	 *   //属性可见
  	 * }else{
  	 *   //属性不可见
  	 * }
  	 * \`\`\`
  	 */
  	get isInvisible(): boolean;
  	/**
  	 * 设置块属性文字是否不可见
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttribute } from "mxcad";
  	 *
  	 * const attrib = new McDbAttribute();
  	 * attrib.isInvisible = false;// 设置属性可见
  	 * attrib.isInvisible = true;// 设置属性不可见
  	 */
  	set isInvisible(val: boolean);
  }
  /**
   * 用于定义块属性的属性定义，并提供了一些方法来获取和设置属性的各种参数
   */
  export  class McDbAttributeDefinition extends McDbText {
  	/**
  	 * 构造函数。
  	 * @param imp 实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取文字的字符串。
  	 */
  	get tag(): string;
  	/**
  	 * 设置文字的字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.tag = "TagName"; // 设置属性标签
  	 * console.log(attribute.tag); // 获取属性标签
  	 * \`\`\`
  	 */
  	set tag(val: string);
  	/**
  	 * 获取是否可见
  	 */
  	get isInvisible(): boolean;
  	/**
  	 * 设置是否可见
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.isInvisible = true; // 设置属性为不可见
  	 * attribute.isInvisible = false; // 设置属性为可见
  	 * console.log(attribute.isInvisible); // 获取属性是否可见
  	 * \`\`\`
  	 */
  	set isInvisible(val: boolean);
  	/** 获取插入块实例时，提示用户输入值的文本 */
  	get prompt(): string;
  	/**
  	 * 设置插入块实例时，提示用户输入值的文本
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.prompt = "Enter value here"; // 设置属性的提示文本
  	 * console.log(attribute.prompt); // 获取属性的提示文本
  	 * \`\`\`
  	 */
  	set prompt(val: string);
  	/** 获取指示属性是否是常量 */
  	get isConstant(): boolean;
  	/**
  	 * 设置指示属性是否是常量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.isConstant = true; // 设置属性为常量
  	 * console.log(attribute.isConstant); // 获取属性是否是常量
  	 * \`\`\`
  	 */
  	set isConstant(val: boolean);
  	/** 获取属性是否可验证 */
  	get isVerifiable(): boolean;
  	/**
  	 * 设置属性是否可验证
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.isVerifiable = true; // 设置属性可验证
  	 * console.log(attribute.isVerifiable); // 获取属性是否可验证
  	 * \`\`\`
  	 */
  	set isVerifiable(val: boolean);
  	/** 获取属性是否预设 */
  	get isPreset(): boolean;
  	/**
  	 * 设置属性是否预设
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAttributeDefinition } from "mxcad";
  	 *
  	 * const attribute = new McDbAttributeDefinition();
  	 * attribute.isPreset = true; // 设置属性预设
  	 * console.log(attribute.isPreset); // 获取属性是否预设
  	 * \`\`\`
  	 */
  	set isPreset(val: boolean);
  }
  /**
   * 多行文本实体类
   * @example
   * \`\`\`ts
    // 绘制多行文本
    import { McDbMText, MxCpp } from 'mxcad'
    
    const mText = new McDbMText();// 构造新多行文本对象
    mText.textHeight = 10;// 设置文本高度
    mText.attachment = McDb.AttachmentPoint.kMiddleLeft;// 设置文本对齐方式
    mText.contents = '控件：\\\\P 多行文本'; // 设置文本内容
    mText.location = new McGePoint3d(0,0,0); // 设置文本位置
    MxCpp.getCurrentMxCAD().drawEntity(mText); // 绘制多行文本
   * \`\`\`
   */
  export  class McDbMText extends McDbEntity {
  	/**
  	 * 构造函数
  	 * @param imp 实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText } from "mxcad";
  	 * const mText = new McDbMText();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取位置
  	 * @returns 位置点
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const pt = mText.location
  	 * \`\`\`
  	 */
  	get location(): McGePoint3d;
  	/**
  	 * 设置位置
  	 * @param pt 位置点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText, McGePoint3d } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.location = new McGePoint3d(0,0,0)
  	 * \`\`\`
  	 */
  	set location(pt: McGePoint3d);
  	/**
  	 * 获取旋转角度
  	 * @returns 旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const rotation = mText.rotation
  	 * \`\`\`
  	 */
  	get rotation(): number;
  	/**
  	 * 设置旋转角度
  	 * @param val 旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.rotation = Math.PI/4
  	 * \`\`\`
  	 */
  	set rotation(val: number);
  	/**
  	 * 获取宽度
  	 * @returns 宽度
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const width = mText.width
  	 * \`\`\`
  	 */
  	get width(): number;
  	/**
  	 * 设置宽度
  	 * @param val 宽度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.width = 10;
  	 * \`\`\`
  	 */
  	set width(val: number);
  	/**
  	 * 获取文本高度
  	 * @returns 文本高度
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const textHeight = mText.textHeight
  	 * \`\`\`
  	 */
  	get textHeight(): number;
  	/**
  	 * 设置文本高度
  	 * @param val 文本高度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.textHeight = 20;
  	 * \`\`\`
  	 */
  	set textHeight(val: number);
  	/**
  	 * 获取附着点
  	 * @returns 附着点
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const attachment = mText.attachment
  	 * \`\`\`
  	 */
  	get attachment(): McDb.AttachmentPoint;
  	/**
  	 * 设置附着点
  	 * @param val 附着点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText, McGePoint3d } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.attachment = new McGePoint3d(0,0,0);
  	 * \`\`\`
  	 */
  	set attachment(val: McDb.AttachmentPoint);
  	/**
  	 * 获取文本内容
  	 * @returns 文本内容
  	 * @example
  	 * \`\`\`ts
  	 * //mText 为有效多行文本
  	 * const contents = mText.contents
  	 * \`\`\`
  	 */
  	get contents(): string;
  	/**
  	 * 设置文本内容
  	 * @param val 文本内容
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbMText, McGePoint3d } from "mxcad";
  	 * const mText = new McDbMText();
  	 * mText.contents = "测试文本1 \\\\P 测试文本2";
  	 * \`\`\`
  	 */
  	set contents(val: string);
  	/**
     * 获取文本不带格式控制符的内容
     * @returns 不带格式控制符的内容
     * @example
     * \`\`\`ts
     * //mText 为有效多行文本
     * const str = mText.getTextString();
     * \`\`\`
     */
  	getTextString(): string;
  	/**
  	 * 重新计算多行文档的格式控制符对多行文本的显示数据。
  	 * @example
  	 * \`\`\`ts
  	 */
  	reCompute(): boolean;
  }
  /**
   * 表示圆实体类。
   * @example
   * \`\`\`ts
   * import { McDbCircle, MxCpp } from 'mxcad'
   *
   * //绘制一个圆心在原点，半径为20的圆
   * const circle = new McDbCircle(new McGePoint3d(0,0,0), 20);
   * MxCpp.getCurrentMxCAD().drawEntity(circle);
   * \`\`\`
   * \`\`\`ts
    import { McDbCircle, MxCpp, McGePoint3d } from 'mxcad'
    //交互绘圆
    async function drawCircle() {
  	const getPoint = new MxCADUiPrPoint();
  	let circle = new McDbCircle();
  	// 获取当前绘线颜色
  	let drawColor = MxCpp.getCurrentMxCAD().getCurrentDatabaseDrawColor();
  	circle.trueColor = new McCmColor(drawColor) //设置圆颜色
  	let drawMethod: "default" | "3P" | "2P" | undefined
  	let isRadius: boolean | undefined
  	let center: McGePoint3d | null | undefined
  	let radius: number | undefined
  	let point1: McGePoint3d | null | undefine
  	let point2: McGePoint3d | null | undefined
  	let point3: McGePoint3d | null | undefined
  	let endPoint1: McGePoint3d | null | undefined
  	let endPoint2: McGePoint3d | null | undefined
  	// 循环取点
  	while (true) {
  		if(typeof drawMethod === "undefined") {
  		getPoint.setKeyWords("[三点(3P)/两点(2P)]");// 设置关键词
  		drawMethod = "default"
  		}
  		if (drawMethod === "default") {
  		// 设置圆心
  		if (!center) {
  			getPoint.setMessage("\\n指定圆的圆心");
  			const point = await getPoint.go()
  			if (getPoint.isKeyWordPicked("3P")) {
  			drawMethod = "3P"
  			continue
  			}
  			if (getPoint.isKeyWordPicked("2P")) {
  			drawMethod = "2P"
  			continue
  			}
  			if (!point) return
  			center = point
  		}
  		// 设置半径
  		if (!radius) {
  			const getDist = new MxCADUiPrDist()
  			getDist.setBasePt(center)
  			if(typeof isRadius === "undefined") {
  			getDist.setKeyWords("[直径(D)]");
  			isRadius = true
  			}
  			getDist.setMessage(_ML_String("McDbCircle_Radius", "指定圆的" + (isRadius ? "半径" : "直径")));
  			// 动态绘制圆
  			getDist.setUserDraw(
  			(
  				currentPoint,
  				pWorldDraw
  			) => {
  				if (!center) return
  				let circle = new McDbCircle(center.x, center.y, center.z, isRadius
  				? center.distanceTo(currentPoint)
  				: center.distanceTo(currentPoint) / 2)
  				pWorldDraw.drawMcDbEntity(circle);
  				pWorldDraw.drawLine(circle.center.toVector3(), currentPoint.toVector3());
  			}
  			);
  			const _radius = await getDist.go()
  			if(getDist.isKeyWordPicked("D")) {
  			isRadius = false
  			getDist.clearLastInputPoint()
  			getDist.setBasePt(center)
  			getDist.setMessage(_ML_String("McDbCircle_Diameter", "指定圆的直径"));
  			getDist.setKeyWords("")
  			const diameter = await getDist.go()
  			if(!diameter) return
  			radius = diameter / 2
  			}
  			if(!radius) {
  			if (!_radius) return
  			radius = _radius as number
  			}
  		}
  		circle.center = center
  		circle.radius = radius
  		return MxCpp.getCurrentMxCAD().drawEntity(circle)
  		}
  		if (drawMethod === "3P") {
  		if(!point1) {
  			getPoint.setMessage("指定圆上的第一个点")
  			getPoint.setKeyWords("")
  			point1 = await getPoint.go()
  			if(!point1) return
  		}
  		if(!point2) {
  			getPoint.setMessage("指定圆上的第二个点")
  			getPoint.setKeyWords("")
  			getPoint.setUserDraw((pt, pw) => {
  			if(!point1) return
  			pw.drawLine(point1.toVector3(), pt.toVector3());
  			})
  			point2 = await getPoint.go()
  			if (!point2) return
  		}
  		if(!point3) {
  			getPoint.setMessage("指定圆上的第三个点")
  			getPoint.setKeyWords("")
  			getPoint.setUserDraw((pt, pw) => {
  			if(!point1) return
  			if(!point2) return
  			const center = threePointsToDetermineTheCenterOfTheCircle([
  				point1,
  				point2,
  				pt,
  			]);
  			if (center) {
  				const circle = new McDbCircle(center.x, center.y, center.z, center.distanceTo(point1))
  				pw.drawMcDbEntity(circle)
  			}
  			})
  			point3 = await getPoint.go()
  			if(!point3) return
  		}
  		const center = threePointsToDetermineTheCenterOfTheCircle([
  			point1,
  			point2,
  			point3,
  		]);
  		const circle = new McDbCircle(center.x, center.y, center.z, center.distanceTo(point1))
  		return MxCpp.getCurrentMxCAD().drawEntity(circle)
  		}
  		if(drawMethod === "2P") {
  		if(!endPoint1) {
  			getPoint.setMessage("指定圆直径的第一个端点")
  			getPoint.setKeyWords("")
  			endPoint1 = await getPoint.go()
  			if(!endPoint1) return
  		}
  		if(!endPoint2) {
  			getPoint.setMessage("指定圆直径的第二个端点")
  			getPoint.setKeyWords("")
  			getPoint.setUserDraw((pt, pw)=> {
  			if(!endPoint1) return
  			center = new McGePoint3d((pt.x + endPoint1.x) / 2, (pt.y + endPoint1.y) / 2, (pt.z + endPoint1.z) / 2)
  			radius = center.distanceTo(endPoint1)
  			pw.drawMcDbEntity(new McDbCircle(center.x, center.y, center.z, radius))
  			})
  			endPoint2 = await getPoint.go()
  			if(!endPoint2) return
  		}
  		center = new McGePoint3d((endPoint2.x + endPoint1.x) / 2, (endPoint2.y + endPoint1.y) / 2, (endPoint2.z + endPoint1.z) / 2)
  		radius = center.distanceTo(endPoint1)
  		return MxCpp.getCurrentMxCAD().drawEntity(new McDbCircle(center.x, center.y, center.z, radius))
  		}
  	}
  	}
   * \`\`\`
   */
  export  class McDbCircle extends McDbCurve {
  	/**
  	 * 构造函数。
  	 * @param imp 内部对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * //绘制一个圆心在原点，半径为20的圆
  	 * const circle1 = new McDbCircle(new McGePoint3d(0,0,0), 20);
  	 * //绘制一个圆心在原点，半径为10的圆
  	 * const circle2 = new McDbCircle(0, 0, 0, 10);
  	 * \`\`\`
  	 */
  	constructor(x?: object | number, y?: number, z?: number, radius?: number);
  	/**
  	 * 设置圆心坐标。
  	 * @param x 圆心 x 坐标。
  	 * @param y 圆心 y 坐标。
  	 * @param z 圆心 z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * const circle = new McDbCircle();
  	 * circle.setCenter(0, 0, 0)//设置圆心在(0,0,0)
  	 * \`\`\`
  	 */
  	setCenter(x: number, y: number, z?: number): void;
  	/**
  	 * 获取圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * const circle = new McDbCircle();
  	 * circle.setCenter(20, 10, 0)//设置圆心在(20, 10, 0);
  	 * const center = circle.center;
  	 * console.log(center);//(20, 10, 0)
  	 * \`\`\`
  	 */
  	get center(): McGePoint3d;
  	/**
  	 * 设置圆心坐标。
  	 * @param pt 圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * const circle = new McDbCircle();
  	 * circle.center = new McDbCircle(10, 10, 0);
  	 * \`\`\`
  	 */
  	set center(pt: McGePoint3d);
  	/**
  	 * 获取圆半径。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * const circle = new McDbCircle(new McGePoint3d(0,0,0), 20);
  	 * const radius = circle.radius;
  	 * console.log(radius)//20
  	 * \`\`\`
  	 */
  	get radius(): number;
  	/**
  	 * 设置圆半径。
  	 * @param r 圆半径。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCircle } from 'mxcad'
  	 *
  	 * const circle = new McDbCircle();
  	 * circle.radius = 20;
  	 * \`\`\`
  	 */
  	set radius(r: number);
  }
  /**
   * 多段线类
   * @example
   * \`\`\`ts
   * import { McDbPolyline, MxCpp } from 'mxcad'
   * //绘制线宽为10的矩形，pt1,pt2,pt3,pt4为矩形的4点个顶点
   * const pl = new McDbPolyline();
   * pl.constantWidth = 10;// 设置多段线线宽为10
   * // 设置多段线端点
   * pl.addVertexAt(pt1);
   * pl.addVertexAt(pt2);
   * pl.addVertexAt(pt3);
   * pl.addVertexAt(pt4);
   * pl.isClosed = true; // 设置多段线是否闭合
   * MxCpp.getCurrentMxCAD().drawEntity(pl); // 绘制多段线
   * \`\`\`
   * \`\`\`ts
    // 绘制中心矩形：指定矩形宽高与中心点，动态绘制矩形
    import { McDbPolyline, MxCpp, MxCADUiPrDist, MxCADUiPrPoint } from 'mxcad';
  
    async function Mx_CenterRect() {
  	// 设置矩形宽度
  	let width = 5;
  	const getWidth = new MxCADUiPrDist();
  	getWidth.setMessage("\\n请输入矩形宽度<5>");
  	const widthVal = await getWidth.go();
  	if (widthVal) {
  		width = getWidth.value()
  	}
  	// 设置矩形高度
  	let height = 10;
  	const getHeight = new MxCADUiPrDist();
  	getHeight.setMessage("\\n请输入矩形高度<10>");
  	const heightVal = await getHeight.go();
  	if (heightVal) {
  		height = getHeight.value()
  	}
  	// 设置矩形的中心点
  	const getCenterPt = new MxCADUiPrPoint();
  	getCenterPt.setMessage("请点击确定矩形中心");
  	const centerPt = await getCenterPt.go();
  	if (!centerPt) return;
  	// 根据矩形的中心点和宽高计算矩形的四个顶点
  	let pt1 = new McGePoint3d(centerPt.x + width / 2, centerPt.y + height / 2, centerPt.z)
  	let pt2 = new McGePoint3d(centerPt.x - width / 2, centerPt.y + height / 2, centerPt.z)
  	let pt3 = new McGePoint3d(centerPt.x - width / 2, centerPt.y - height / 2, centerPt.z)
  	let pt4 = new McGePoint3d(centerPt.x + width / 2, centerPt.y - height / 2, centerPt.z)
  	let pl = new McDbPolyline;// 构造一个多段线对象
  	// 依次添加矩形顶点
  	pl.addVertexAt(pt1)
  	pl.addVertexAt(pt2)
  	pl.addVertexAt(pt3)
  	pl.addVertexAt(pt4)
  	const mxcad = MxCpp.App.getCurrentMxCAD();
  	pl.isClosed = true; // 设置多段线闭合
  	mxcad.drawEntity(pl); // 绘制多段线对象
    }
   * \`\`\`
   */
  export  class McDbPolyline extends McDbCurve {
  	/**
  	 * 构造函数
  	 * @param imp 实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline } from "mxcad";
  	 * const pl = new McDbPolyline();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取是否闭合
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline } from "mxcad";
  	 * const pl = new McDbPolyline();
  	 * pl.isClosed = true;//设置多线段闭合
  	 * const res = pl.isClosed;
  	 * console.log(res)//true
  	 * \`\`\`
  	 */
  	get isClosed(): boolean;
  	/**
  	 * 设置是否闭合
  	 * @param val 是否闭合
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.isClosed = true;//设置多线段闭合
  	 * \`\`\`
  	 */
  	set isClosed(val: boolean);
  	/**
  	 * 获取常量宽度
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const width = pl.constantWidth;
  	 * \`\`\`
  	 */
  	get constantWidth(): number;
  	/**
  	 * 设置常量宽度
  	 * @param val 常量宽度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.constantWidth = 10;//设置多线段常量宽度为10
  	 * \`\`\`
  	 */
  	set constantWidth(val: number);
  	/**
  	 * 在指定位置添加顶点
  	 * @param index 位置
  	 * @param pt 点
  	 * @param bulge 凸度
  	 * @param startWidth 起始宽度
  	 * @param endWidth 结束宽度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline, MxCpp } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.isClosed = true;
  	 * pl.addVertexAt(new McGePoint3d(800, 300, 0),0,10,10);
  	 * pl.addVertexAt(new McGePoint3d(900, 300, 0),0,10,10);
  	 * pl.addVertexAt(new McGePoint3d(900, 400, 0),0,10,10);
  	 * MxCpp.getCurrentMxCAD().drawEntity(pl);
  	 * \`\`\`
  	 */
  	addVertexAt(pt: McGePoint3d | THREE.Vector3, bulge?: number, startWidth?: number, endWidth?: number, index?: number): boolean;
  	/**
  	 * 移除指定位置的顶点
  	 * @param index 位置
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const res = pl.removeVertexAt(2);
  	 * if(res){
  	 *   //移除成功
  	 * }else{
  	 *   //移除失败
  	 * }
  	 * \`\`\`
  	 */
  	removeVertexAt(index: number): boolean;
  	/**
  	 * 获取顶点数量
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const num = pl.numVerts();
  	 * \`\`\`
  	 */
  	numVerts(): number;
  	/**
  	 * 获取指定位置的点
  	 * @param index 位置
  	 * @returns val: 点, ret: 返回值
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const res = pl.getPointAt(2);
  	 * const point = res.val;
  	 * \`\`\`
  	 */
  	getPointAt(index: number): {
  		val: McGePoint3d;
  		ret: number;
  	};
  	/**
  	 * 获取指定位置的凸度
  	 * @param index 位置
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const bulge = pl.getBulgeAt(2);
  	 * \`\`\`
  	 */
  	getBulgeAt(index: number): number;
  	/**
  	 * 获取指定位置的起始和结束宽度
  	 * @param index 位置
  	 * @returns val1: 起始宽度, val2: 结束宽度, ret: 返回值
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const width = pl.getWidthsAt(2);
  	 * if(width.ret){
  	 *   const startWidth = width.val1;
  	 *   const endWidth = width.val2
  	 * }else{
  	 *   //获取失败
  	 * }
  	 * \`\`\`
  	 */
  	getWidthsAt(index: number): {
  		val1: number;
  		val2: number;
  		ret: boolean;
  	};
  	/**
  	 * 设置指定位置的点
  	 * @param index 位置
  	 * @param pt 点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline, McGePoint3d } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.setPointAt(0,new McGePoint3d(0,0,0));
  	 * pl.setPointAt(1,new McGePoint3d(10,10,0));
  	 * \`\`\`
  	 */
  	setPointAt(index: number, pt: McGePoint3d): boolean;
  	/**
  	 * 设置指定位置的凸度
  	 * @param index 位置
  	 * @param bulge 凸度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline, McGePoint3d } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.addVertexAt(new McGePoint3d(800, 300, 0));
  	 * const res = pl.setBulgeAt(0, 10);
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setBulgeAt(index: number, bulge: number): boolean;
  	/**
  	 * 判断一个点是否在多线段组成闭合区域内
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	pointInPolygon(x: number, y: number): boolean;
  	/**
  	 * 修改线段的开始宽度，和结束宽度
  	 * @param index 位置
  	 * @param bulge 凸度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline, McGePoint3d } from "mxcad";
  	 *
  	 * const pl = new McDbPolyline();
  	 * pl.addVertexAt(new McGePoint3d(800, 300, 0));
  	 * const res = pl.setWidthsAt(0, 10, 10);
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setWidthsAt(index: number, dStartWdith: number, dEntWdith: number): boolean;
  	/**
  	 * 设置多线段类型
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * const type = pl.getType();
  	 * \`\`\`
  	 */
  	getType(): McDb.PolylineType;
  	/**
  	 * 返回多线段类型
  	 * @param type 多线段类型
  	 * @example
  	 * \`\`\`ts
  	 * // pl 为有效多段线对象
  	 * pl.setType(McDb.PolylineType.kLwPolyline);
  	 * \`\`\`
  	 */
  	setType(type: McDb.PolylineType): boolean;
  }
  /**
   * 表示一个 CAD 图块引用实体，一个块参考用于放置、缩放和显示它参考的McDbBlockTableRecord中的一个实体集合的实例
   * @example
   * \`\`\`ts
   * //插入图块
  	import { McDbBlockReference } from "mxcad"
     
  	let mxcad = MxCpp.App.getCurrentMxCAD();
  	// blkFilePath:图块路径，插入图块
  	let blkrecId = await mxcad.insertBlock(blkFilePath, "tree");
  	if (!blkrecId.isValid()) {
  		// 插入图块
  		return;
  	}
  	// 构造一个新图块引用实体对象
  	let blkRef = new McDbBlockReference();
  	// 设置图块记录对象ID
  	blkRef.blockTableRecordId = blkrecId;
  	// 得到图块的最小外包
  	let box = blkRef.getBoundingBox();
  	if (box.ret) {
  		let dLen = box.maxPt.distanceTo(box.minPt);
  		if (dLen > 0.00001) {
  		blkRef.setScale(mxcad.getMxDrawObject().screenCoordLong2Doc(100) / dLen);
  		}
  	}
  	// 设置图块插入点
  	let getPoint = new MxCADUiPrPoint();
  	getPoint.setMessage("\\指定插入基点");
  	// 动态绘制图块
  	getPoint.setUserDraw((v, worldDraw) => {
  		blkRef.position = v;
  		worldDraw.drawMcDbEntity(blkRef);
  	});
  
  	let pt = await getPoint.go();
  	if (!pt) return;
  	blkRef.position = pt;// 设置块位置
  	let newBlkRefId = mxcad.drawEntity(blkRef);// 绘制图块
  	if (!newBlkRefId.isValid) {
  		console.log("insert error");
  		return;
  	}
   * \`\`\`
   */
  export  class McDbBlockReference extends McDbEntity {
  	/**
  	 * 初始化一个新的 McDbBlockReference 实例。
  	 * @param imp 可选，用于初始化实例的 C++ 对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbBlockReference } from "mxcad";
  	 *
  	 * const blkRef = new McDbBlockReference();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置该实体所引用的图块的 ID。
  	 * @example
  	 * \`\`\`ts
  	   import { McDbBlockReference, McDbBlockTableRecord } from "mxcad";
  	   
  	   let blkRef = new McDbBlockReference();
  	   let blkRecId = blkTable.add(new McDbBlockTableRecord());//图块记录
  	   blkRef.blockTableRecordId = blkrecId;
  	   console.log(blkRef.blockTableRecordId)
  	 * \`\`\`
  	 */
  	get blockTableRecordId(): McObjectId;
  	set blockTableRecordId(val: McObjectId);
  	/**
  	 * 获取或设置该实体的位置。
  	 * @example
  	 * \`\`\`ts
  	   import { McDbBlockReference, McGePoint3d } from "mxcad";
  	   
  	   let blkRef = new McDbBlockReference();
  	   blkRef.position = new McGePoint3d(0, 0, 0);
  	 * \`\`\`
  	 */
  	get position(): McGePoint3d;
  	set position(pt: McGePoint3d);
  	/**
  	 * 获取或设置该实体的缩放因子。
  	 * @example
  	 * \`\`\`ts
  		import { McGePoint3d, McDbBlockReference } from 'mxcad';
  
  		const blkRef = new McDbBlockReference();
  		// 获取初始缩放因子
  		const initialScaleFactors = blkRef.scaleFactors;
  		console.log('Initial Scale Factors:', initialScaleFactors); // 输出初始缩放因子
  		// 设置新的缩放因子
  		const newScaleFactors = new McGePoint3d(2, 2, 2); // 假设将缩放因子设置为 (2, 2, 2)
  		blkRef.scaleFactors = newScaleFactors;
  		// 再次获取缩放因子
  		const updatedScaleFactors = blkRef.scaleFactors;
  		console.log('Updated Scale Factors:', updatedScaleFactors); // 输出更新后的缩放因子
  	 * \`\`\`
  	 */
  	get scaleFactors(): McGePoint3d;
  	set scaleFactors(val: McGePoint3d);
  	/**
  	 * 设置和获取对象的缩放比例
  	 * @param val 缩放比例
  	 * @example
  	 * \`\`\`ts
  		import { McDbBlockReference } from 'mxcad'; // 假设这是你的类和库
  
  		const blkRef = new McDbBlockReference();
  
  		// 设置缩放比例为 2
  		blkRef.setScale(2);
  
  		// 获取缩放比例
  		const scale = blkRef.getScale();
  		console.log('Current Scale:', scale); // 输出当前缩放比例
  	 * \`\`\`
  	 */
  	setScale(val: number): void;
  	getScale(): number;
  	/**
  	 * 获取或设置该实体的旋转角度。
  	 * @example
  	 * \`\`\`ts
  		import { McDbBlockReference } from 'mxcad'; // 假设这是你的类和库
  
  		const blkRef = new McDbBlockReference();
  		blkRef.rotation = Math/4;
  		const rotation = blkRef.rotation;
  		console.log('Current rotation:', rotation); // 输出当前旋转角度
  	 * \`\`\`
  	 */
  	get rotation(): number;
  	set rotation(val: number);
  	/**
  	 * 获取或设置该实体所引用的图块的变换矩阵。
  	 * @example
  	 * \`\`\`ts
  	 * // blkRef 为有效CAD 图块引用实体
  	 * let mat = blkRef.blockTransform;
  	 * \`\`\`
  	 */
  	get blockTransform(): McGeMatrix3d;
  	set blockTransform(val: McGeMatrix3d);
  	/**
  	 * 获取块名
  	 * @returns 块名
  	 * @example
  	 * \`\`\`ts
  	 * // blkRef 为有效CAD 图块引用实体
  	 * let blkName = blkRef.blockName;
  	 * \`\`\`
  	 */
  	get blockName(): string;
  	/**
  	 * 添加属性文字对象
  	 * @param attrib 属性定义文字
  	 * @returns 对象Id
  	 * @example
  	 * \`\`\`ts
  	 * // blkRef 为有效CAD 图块引用实体
  	 * let attrib = new McDbAttribute();
  	 * attrib.textString = "test";
  	 * const objId = blkRef.appendAttribute(attrib);
  	 * \`\`\`
  	 */
  	appendAttribute(attrib: McDbAttribute): McObjectId;
  	/**
  	 * 得到块引用的所有属性文字对象id
  	 * @returns 属性文字对象id数组
  	 * @example
  	 * \`\`\`ts
  	 * // blkRef 为有效CAD 图块引用实体
  	 * let aryId = blkRef.getAllAttribute();
  	 * aryId.forEach((id) => {
  	 *   let attribt: McDbAttribute = id.getMcDbEntity() as any;
  	 * })
  	 * \`\`\`
  	 */
  	getAllAttribute(): McObjectId[];
  	/**
  	 * 通过块表记录中的属性定义创建属性文字对象
  	 * @example
  	 * \`\`\`ts
  	 * // blkRef 为有效CAD 图块引用实体
  	 * let res = blkRef.createAttribute();
  	 * if(res){
  	 *   //创建成功
  	 * }else{
  	 *   //创建失败
  	 * }
  	 * \`\`\`
  	 */
  	createAttribute(): boolean;
  	/**
  	* 得到剪切边界对象
  	* @returns
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getSpatialFilterId(): McObjectId;
  	/**
  	* 创建剪切边界对象，如果剪切边界已经存在就直接返回
  	* @returns
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	createSpatialFilter(): boolean;
  	/**
  	 * 清空当前剪切边界显示缓存，当前边界对象被修改后，使用该函数清理缓存，更新显示.
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	clearSpatialFilterCache(): boolean;
  	/**
  	* 把块引用的属性拷到到另一个块引上，被拷贝的块引用必须在图形数据库中。
  	* @returns
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	copyAttribute(to: McDbBlockReference): boolean;
  	/**
  	 * 删除块引用的所有属性
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	eraseAllAttribute(): void;
  }
  /**
   * 表示一个 CAD 图块的剪切边界对象
   * @example
   * \`\`\`ts
   * \`\`\`
   */
  export  class McDbSpatialFilter extends McDbObject {
  	/**
  	 * 初始化一个新的 McDbSpatialFilter 实例。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 返回剪切边界数组点.
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	boundary(): McGePoint3dArray;
  	/**
  	 * 设置剪切边界数组点，点坐标是块引用的块表记录中的坐标。
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	setBoundary(aryPoint: McGePoint3dArray): boolean;
  	/**
  	* 剪切边界是否反向
  	* @returns
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	isFilterInverted(): boolean;
  	/**
  	 * 设置剪切边界反向
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	setFilterInverted(val: boolean): boolean;
  	/**
  	* 是否启用剪切边界
  	* @returns
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	isEnabled(): boolean;
  	/**
  	 * 设置是否启用剪切边界
  	 * @returns
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	setEnable(val: boolean): boolean;
  }
  /**
   * 表示AutoCAD中所有标注实体类型的类的基类
   */
  export  class McDbDimension extends McDbEntity {
  	/**
  	 * 构造函数
  	 * @param imp 实现对象
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取文本位置
  	 * @returns 文本位置
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * const position = dim.textPosition;
  	 * console.log(position);
  	 * \`\`\`
  	 */
  	get textPosition(): McGePoint3d;
  	/**
  	 * 设置文本位置
  	 * @param pt 文本位置
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.textPosition = new McGePoint3(0,0,0);
  	 * \`\`\`
  	 */
  	set textPosition(pt: McGePoint3d);
  	/**
  	 * 是否使用默认文本位置
  	 * @returns 是否使用默认文本位置
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * const isUsing = dim.isUsingDefaultTextPosition;
  	 * if(isUsing){
  	 *    //使用默认文本位置
  	 * }else{
  	 *    //未使用默认文本位置
  	 * }
  	 * \`\`\`
  	 */
  	isUsingDefaultTextPosition(): boolean;
  	/**
  	 * 使用设置的文本位置
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.useSetTextPosition();
  	 * \`\`\`
  	 */
  	useSetTextPosition(): void;
  	/**
  	 * 使用默认文本位
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.useDefaultTextPosition();
  	 * \`\`\`
  	 */
  	useDefaultTextPosition(): void;
  	/**
  	 * 获取或设置高度
  	 * @param val 高度
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.elevation = 10;
  	 * console.log("获取高度：", dim.elevation)
  	 * \`\`\`
  	 */
  	get elevation(): number;
  	set elevation(val: number);
  	/**
  	 * 获取或设置标注文本
  	 * @param val 标注文本
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.dimensionText = "测试文本";
  	 * console.log("标注文本：", dim.dimensionText)// 测试文本
  	 * \`\`\`
  	 */
  	get dimensionText(): string;
  	set dimensionText(val: string);
  	/**
  	 * 获取或设置文本旋转角度
  	 * @param val 文本旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.textRotation = Math.PI/4;
  	 * console.log("旋转角度：", dim.textRotation)
  	 * \`\`\`
  	 */
  	get textRotation(): number;
  	set textRotation(val: number);
  	/**
  	 * 设置标注样式id
  	 * @param val 标注样式id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * //设置 dim 为有效标注实体
  	 * const dimStyleId = MxCpp.getCurrentMxCAD().addDimStyle("MyDimStyle2", "41,0.18,141,0.09,40,200", "77,1,271,3", "", "");
  	 * dim.dimensionStyle = dimStyleId;
  	 * console.log("标注样式id：", dim.dimensionStyle)
  	 * \`\`\`
  	 */
  	get dimensionStyle(): McObjectId;
  	set dimensionStyle(val: McObjectId);
  	/**
  	 * 获取或设置文本附着点
  	 * @returns 文本附着点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDb } from "mxcad";
  	 *
  	 * //设置 dim 为有效标注实体
  	 * dim.textAttachment = McDb.AttachmentPoin.kMiddleCenter//设置中心点对齐
  	 * console.log("文本附着点：", dim.textAttachment)// 5
  	 * \`\`\`
  	 */
  	get textAttachment(): McDb.AttachmentPoint;
  	set textAttachment(val: McDb.AttachmentPoint);
  	/**
  	 * 需要更新标注块
  	 */
  	needToUpdateDimBlock(need: boolean): void;
  	/**
  	 * 获取或设置水平旋转角度
  	 * @returns 水平旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * //设置 dim 为有效标注实体
  	 * dim.horizontalRotation = Math.PI/4
  	 * console.log("水平旋转角度：", dim.horizontalRotation)// 45
  	 * \`\`\`
  	 */
  	get horizontalRotation(): number;
  	set horizontalRotation(val: number);
  	/**
  	 * 重新计算标注块
  	 * @example
  	 * \`\`\`ts
  	 * dim.recomputeDimBlock()
  	 * \`\`\`
  	 */
  	recomputeDimBlock(): void;
  	/**
  	 * 获取标注变量整数值
  	 * @param iType 标注变量类型
  	 * @returns 标注变量整数值
  	 */
  	getDimVarInt(iType: number): number;
  	/**
  	 * 设置标注变量整数值
  	 * @param iType 标注变量类型
  	 * @param val 标注变量整数值
  	 */
  	setDimVarInt(iType: number, val: number): void;
  	/**
  	 * 获取标注变量浮点数值
  	 * @param iType 标注变量类型
  	 * @returns 标注变量浮点数值
  	 */
  	getDimVarDouble(iType: number): number;
  	/**
  	 * 设置标注变量浮点数值
  	 * @param iType 标注变量类型
  	 * @param val 标注变量浮点数值
  	 */
  	setDimVarDouble(iType: number, val: number): void;
  	/**
  	 * 获取标注变量字符串值
  	 * @param iType 标注变量类型
  	 * @returns 标注变量字符串值
  	 */
  	getDimVarString(iType: number): string;
  	/**
  	 * 设置标注变量字符串值
  	 * @param iType 标注变量类型
  	 * @param val 标注变量字符串值
  	 */
  	setDimVarString(iType: number, val: string): void;
  	/**
  	 * 获取标注变量对象 ID
  	 * @param iType 标注变量类型
  	 * @returns 标注变量对象 ID
  	 */
  	getDimVarObjectId(iType: number): McObjectId;
  	/**
  	 * 设置标注变量对象 ID
  	 * @param iType 标注变量类型
  	 * @param val 标注变量对象 ID
  	 */
  	setDimVarObjectId(iType: number, val: McObjectId): void;
  	/**
  	 * 得到标注对象中的所有文字内容
  	 * @example
  	 * \`\`\`ts
  	 * //遍历dim中的所有文字
  	 * //设置 dim 为有效标注实体
  	 * let txts = dim.GetAllText();
  	 * txts.forEach((val, index) => {
  	 *   console.log(val)
  	 * });
  	 * \`\`\`
  	 */
  	GetAllText(): McGeStringArray;
  }
  /**
   * 对齐标注尺寸类。
   * @example
   * \`\`\`ts
     //绘制对齐标注
     import { McDbAlignedDimension, MxCpp } from "mxcad"
     
     const mDimension = new McDbAlignedDimension() // 构造对齐标注对象
     mDimension.xLine1Point = new McGePoint3d(-1800, 800) // 设置对象第一条线的端点
     mDimension.xLine2Point = new McGePoint3d(1800,800) // 设置对象第二条线的端点
     mDimension.dimLinePoint = new McGePoint3d(800, 500) // 设置对象标注线的端点
     mDimension.textAttachment = McDb.AttachmentPoint.kTopLeft // 设置对象文本对齐方式
     mDimension.trueColor = new McCmColor(200, 255, 0) // 设置对象颜色
     mDimension.oblique = 0 // 设置对象倾斜角度
     MxCpp.getCurrentMxCAD().drawEntity(mDimension); //绘制对齐标注对象
   * \`\`\`
   */
  export  class McDbAlignedDimension extends McDbDimension {
  	/**
  	 * 构造函数
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAlignedDimension } from "mxcad";
  	 *
  	 * const mDimension = new McDbAlignedDimension()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取第一条线的端点
  	 * @returns 第一条线的端点
  	 * @example
  	 * \`\`\`ts
  	 * //mDimension 为有效对齐标注尺寸
  	 * const pt1 = mDimension.xLine1Point;
  	 * \`\`\`
  	 */
  	get xLine1Point(): McGePoint3d;
  	/**
  	 * 设置第一条线的端点
  	 * @param pt 第一条线的端点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAlignedDimension, McGePoint3d } from "mxcad";
  	 *
  	 * const mDimension = new McDbAlignedDimension();
  	 * mDimension.xLine1Point = new McGePoint3d(0,0,0);
  	 * \`\`\`
  	 */
  	set xLine1Point(pt: McGePoint3d);
  	/**
  	 * 获取第二条线的端点
  	 * @returns 第二条线的端点
  	 * @example
  	 * \`\`\`ts
  	 * //mDimension 为有效对齐标注尺寸
  	 * const pt2 = mDimension.xLine2Point;
  	 * \`\`\`
  	 */
  	get xLine2Point(): McGePoint3d;
  	/**
  	 * 设置第二条线的端点
  	 * @param pt 第二条线的端点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAlignedDimension, McGePoint3d } from "mxcad";
  	 *
  	 * const mDimension = new McDbAlignedDimension();
  	 * mDimension.xLine2Point = new McGePoint3d(20,0,0)
  	 * \`\`\`
  	 */
  	set xLine2Point(pt: McGePoint3d);
  	/**
  	 * 获取标注线的端点
  	 * @returns 标注线的端点
  	 * @example
  	 * \`\`\`ts
  	 * //mDimension 为有效对齐标注尺寸
  	 * const pt = mDimension.dimLinePoint;
  	 * \`\`\`
  	 */
  	get dimLinePoint(): McGePoint3d;
  	/**
  	 * 设置标注线的端点
  	 * @param pt 标注线的端点
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAlignedDimension, McGePoint3d } from "mxcad";
  	 *
  	 * const mDimension = new McDbAlignedDimension();
  	 * mDimension.dimLinePoint = new McGePoint3d(20,0,0)
  	 * \`\`\`
  	 */
  	set dimLinePoint(pt: McGePoint3d);
  	/**
  	 * 获取倾斜角度
  	 * @returns 倾斜角度
  	 * @example
  	 * \`\`\`ts
  	 * //mDimension 为有效对齐标注尺寸
  	 * const pt = mDimension.oblique;
  	 * \`\`\`
  	 */
  	get oblique(): number;
  	/**
  	 * 设置倾斜角度
  	 * @param val 倾斜角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbAlignedDimension, McGePoint3d } from "mxcad";
  	 *
  	 * const mDimension = new McDbAlignedDimension();
  	 * mDimension.oblique = Math.PI/4;
  	 * \`\`\`
  	 */
  	set oblique(val: number);
  }
  /**
   * 旋转标注尺寸类。
   * @example
   * \`\`\`ts
  	//旋转标注
  	import { McDbRotatedDimension, MxCpp } from "mxcad"
  
  	const rDimension = new McDbRotatedDimension()  // 构造旋转标注对象
  	rDimension.xLine1Point = new McGePoint3d(-1800, -800) // 设置对象第一条线的端点
  	rDimension.xLine2Point = new McGePoint3d(1800, -800) // 设置对象第二条线的端点
  	rDimension.dimLinePoint = new McGePoint3d(-800, -500) // 设置对象标注线的端点
  	rDimension.textAttachment = McDb.AttachmentPoint.kTopLeft // 设置对象文本对齐方式
  	rDimension.textRotation = 0.6 // 设置对象文字旋转角度
  	rDimension.trueColor = new McCmColor(200, 255, 0) // 设置对象颜色
  	rDimension.oblique = 0  // 设置对象倾斜角度
  	rDimension.rotation = 0 // 设置对象旋转角度
  	rDimension.dimensionText = "标注文本" // 设置对象文本内容
  	MxCpp.getCurrentMxCAD().drawEntity(rDimension);//绘制旋转标注对象
   * \`\`\`
   */
  export  class McDbRotatedDimension extends McDbDimension {
  	/**
  	 * 构造函数
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbRotatedDimension } from "mxcad";
  	 * const rDimension = new McDbRotatedDimension();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取第一条线的端点
  	 * @returns 第一条线的端点
  	 * @example
  	 * \`\`\`ts
  	 *
  	 * \`\`\`
  	 */
  	get xLine1Point(): McGePoint3d;
  	/**
  	 * 设置第一条线的端点
  	 * @param pt 第一条线的端点
  	 */
  	set xLine1Point(pt: McGePoint3d);
  	/**
  	 * 获取第二条线的端点
  	 * @returns 第二条线的端点
  	 */
  	get xLine2Point(): McGePoint3d;
  	/**
  	 * 设置第二条线的端点
  	 * @param pt 第二条线的端点
  	 */
  	set xLine2Point(pt: McGePoint3d);
  	/**
  	 * 获取标注线的端点
  	 * @returns 标注线的端点
  	 */
  	get dimLinePoint(): McGePoint3d;
  	/**
  	 * 设置标注线的端点
  	 * @param pt 标注线的端点
  	 */
  	set dimLinePoint(pt: McGePoint3d);
  	/**
  	 * 获取倾斜角度
  	 * @returns 倾斜角度
  	 */
  	get oblique(): number;
  	/**
  	 * 设置倾斜角度
  	 * @param val 倾斜角度
  	 */
  	set oblique(val: number);
  	/**
  	 * 获取旋转角度
  	 * @returns 旋转角度
  	 */
  	get rotation(): number;
  	/**
  	 * 设置旋转角度
  	 * @param val 旋转角度
  	 */
  	set rotation(val: number);
  }
  /**
   * 角度标注尺寸类。
   * @example
   * \`\`\`ts
    import { MxCpp, MxDb2LineAngularDimension, MxCADUiPrPoint } from "mxcad";
    // 下面代码演示了，先选择需要测量角度的两条边，再设置角度标注位置，最后绘制出角度标注对象。
    function BR_AngleMeasure() {
  	const angleDim = new McDb2LineAngularDimension();// 构造新角度标注尺寸对象
  	// 设置角边1起点
  	const getPoint1 = new MxCADUiPrPoint()
  	getPoint1.setMessage("\\n指定线1起点:");
  	const point1 = await getPoint1.go();
  	if(!point1) return;
  	angleDim.xLine1Start = point1;
  	// 设置角边1终点
  	const getPoint2 = new MxCADUiPrPoint()
  	getPoint1.setMessage("\\n指定线1终点:");
  	const point2 = await getPoint2.go();
  	if(!point2) return;
  	angleDim.xLine1End = point2;
  	// 设置角边2起点
  	const getPoint3 = new MxCADUiPrPoint()
  	getPoint3.setMessage("\\n指定线2起点:");
  	const point3 = await getPoint3.go();
  	if(!point3) return;
  	angleDim.xLine2Start = point3;
  	// 设置角边2终点
  	const getPoint4 = new MxCADUiPrPoint();
  	getPoint4.setMessage("\\n指定线2终点:");
  	const point4 = await getPoint4.go();
  	if(!point4) return;
  	angleDim.xLine2End = point4;
  	// 设置角度标注位置
  	const getArcPoint = new MxCADUiPrPoint()
  	getPoint3.setMessage("\\n指定标注点:");
  	const arcPoint = await getArcPoint.go();
  	if(!arcPoint) return;
  	angleDim.arcPoint = arcPoint;
  	// 绘制角度标注尺寸对象
  	MxCpp.getCurrentMxCAD().drawEntity(angleDim);
   }
   * \`\`\`
   */
  export  class McDb2LineAngularDimension extends McDbDimension {
  	/**
  	 * 构造函数
  	 * @param imp 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDb2LineAngularDimension } from "mxcad";
  	 *
  	 * const angleDim = new McDb2LineAngularDimension()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置角度标注在圆弧上的点
  	 * @returns 角度标注在圆弧上的点
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const angleDim = new McDb2LineAngularDimension();
  		const getArcPoint = new MxCADUiPrPoint();
  		getArcPoint.setMessage("\\n指定标注点:");
  		const arcPoint = await getArcPoint.go();
  		if(!arcPoint) return;
  		angleDim.arcPoint = arcPoint;
  		console.log("输出文本标注点" , angleDim.arcPoint)
  	 * \`\`\`
  	 */
  	get arcPoint(): McGePoint3d;
  	set arcPoint(pt: McGePoint3d);
  	/**
  	 * 获取或设置角度标注第一个参考线的开始点
  	 * @returns 角度标注第一个参考线的开始点
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const angleDim = new McDb2LineAngularDimension()
  		const getPoint1 = new MxCADUiPrPoint()
  		getPoint1.setMessage("\\n指定线1起点:");
  		const point1 = await getPoint1.go();
  		if(!point1) return;
  		angleDim.xLine1Start = point1;
  		console.log(angleDim.xLine1Start)
  	 * \`\`\`
  	 */
  	get xLine1Start(): McGePoint3d;
  	set xLine1Start(pt: McGePoint3d);
  	/**
  	 * 获取或设置角度标注第一个参考线的结束点
  	 * @returns 角度标注第一个参考线的结束点
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const angleDim = new McDb2LineAngularDimension()
  		const getPoint2 = new MxCADUiPrPoint()
  		getPoint2.setMessage("\\n指定线1终点:");
  		const point2 = await getPoint2.go();
  		if(!point2) return;
  		angleDim.xLine1End = point2;
  		console.log(angleDim.xLine1End)
  	 * \`\`\`
  	 */
  	get xLine1End(): McGePoint3d;
  	set xLine1End(pt: McGePoint3d);
  	/**
  	 * 获取或设置角度标注第二个参考线的开始点
  	 * @returns 角度标注第二个参考线的开始点
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const angleDim = new McDb2LineAngularDimension()
  		const getPoint3 = new MxCADUiPrPoint()
  		getPoint3.setMessage("\\n指定线2起点:");
  		const point3 = await getPoint3.go();
  		if(!point3) return;
  		angleDim.xLine2Start = point3;
  		console.log(angleDim.xLine2Start);
  	 * \`\`\`
  	 */
  	get xLine2Start(): McGePoint3d;
  	set xLine2Start(pt: McGePoint3d);
  	/**
  	 * 获取或设置角度标注第二个参考线的结束点
  	 * @returns 角度标注第二个参考线的结束点
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const angleDim = new McDb2LineAngularDimension()
  		const getPoint4 = new MxCADUiPrPoint()
  		getPoint4.setMessage("\\n指定线2终点:");
  		const point4 = await getPoint4.go();
  		if(!point4) return;
  		angleDim.xLine2End = point4;
  		console.log(angleDim.xLine2End)
  	 * \`\`\`
  	 */
  	get xLine2End(): McGePoint3d;
  	set xLine2End(pt: McGePoint3d);
  	/**
  	 * 通过参数计算角度标注
  	 * @param dAngleVertexX 角度向量X轴值
  	 * @param dAngleVertexY 角度向量Y轴值
  	 * @param dFirstEndPointX 标注线1结束点X轴值
  	 * @param dFirstEndPointY 标注线1结束点Y轴值
  	 * @param dSecondEndPointX 标注线2结束点X轴值
  	 * @param dSecondEndPointY 标注线2结束点Y轴值
  	 * @param dTextPointX 标注文字X轴值
  	 * @param dTextPointY 标注文字Y轴值
  	 * @returns 返回布尔值
  	 * @example
  	 * \`\`\`ts
  		import { McDb2LineAngularDimension } from "mxcad";
  
  		const dimension = new McDb2LineAngularDimension()
  		// 设置计算维度所需的参数
  		const dAngleVertexX = 0;
  		const dAngleVertexY = 0;
  		const dFirstEndPointX = 1;
  		const dFirstEndPointY = 2;
  		const dSecondEndPointX = 3;
  		const dSecondEndPointY = 4;
  		const dTextPointX = 5;
  		const dTextPointY = 6;
  
  		// 调用 compute 方法计算维度
  		const result = dimension.compute(
  			dAngleVertexX,
  			dAngleVertexY,
  			dFirstEndPointX,
  			dFirstEndPointY,
  			dSecondEndPointX,
  			dSecondEndPointY,
  			dTextPointX,
  			dTextPointY
  		);
  		if (result) {
  			console.log("计算成功");
  		} else {
  			console.error("计算失败");
  		}
  	 * \`\`\`
  	 */
  	compute(dAngleVertexX: number, dAngleVertexY: number, dFirstEndPointX: number, dFirstEndPointY: number, dSecondEndPointX: number, dSecondEndPointY: number, dTextPointX: number, dTextPointY: number): boolean;
  }
  /**
   * 表示一个圆弧。
   * @example
   * \`\`\`ts
     import { McDbArc, MxCpp } from "mxcad"
     // 绘制圆弧
     const arc = new McDbArc() // 构造新圆弧对象
     arc.center = new McGePoint3d(0,0,0) // 设置圆弧圆心
     arc.radius = 20 // 设置圆弧半径
     arc.startAngle = Math.PI / 2 // 设置圆弧开始角度
     arc.endAngle = Math.PI * 3 / 2 // 设置圆弧结束角度
     arc.trueColor = new McCmColor(255, 233, 0) // 设置圆弧颜色
     MxCpp.getCurrentMxCAD().drawEntity(arc) // 绘制圆弧
   * \`\`\`
   */
  export  class McDbArc extends McDbCurve {
  	/**
  	 * 构造函数。
  	 * @param imp 内部对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc } from "mxcad";
  	 * const arc = new McDbArc()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 设置圆心坐标。
  	 * @param x 圆心 x 坐标。
  	 * @param y 圆心 y 坐标。
  	 * @param z 圆心 z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.setCenter(0,0,0)
  	 * \`\`\`
  	 */
  	setCenter(x: number, y: number, z?: number): void;
  	/**
  	 * 获取圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.setCenter(0,0,0);
  	 * const center = arc.center;
  	 * console.log("圆心",center);//(0,0,0)
  	 * \`\`\`
  	 */
  	get center(): McGePoint3d;
  	/**
  	 * 设置圆心坐标。
  	 * @param pt 圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc, McGePoint3d } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.center = new McGePoint3d(0 ,0 ,0);
  	 * \`\`\`
  	 */
  	set center(pt: McGePoint3d);
  	/**
  	 * 获取圆半径。
  	 * @example
  	 * \`\`\`ts
  	 * // arc 为有效圆弧实例
  	 * cosnt r = arc.radius;
  	 * \`\`\`
  	 */
  	get radius(): number;
  	/**
  	 * 设置圆半径。
  	 * @param r 圆半径。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc  } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.radius = 20;
  	 * \`\`\`
  	 */
  	set radius(r: number);
  	/**
  	 * 获取开始角度。
  	 * @example
  	 * \`\`\`ts
  	 * // arc 为有效圆弧实例
  	 * cosnt startAngle = arc.startAngle;
  	 * \`\`\`
  	 */
  	get startAngle(): number;
  	/**
  	 * 设置开始角度。
  	 * @param r 角度。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.startAngle = Math.PI/4;
  	 * \`\`\`
  	 */
  	set startAngle(r: number);
  	/**
  	 * 获取结束角度。
  	 * @example
  	 * \`\`\`ts
  	 * // arc 为有效圆弧实例
  	 * cosnt endAngle = arc.endAngle;
  	 * \`\`\`
  	 */
  	get endAngle(): number;
  	/**
  	 * 设置结束角度。
  	 * @param r 角度。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc } from "mxcad";
  	 * const arc = new McDbArc();
  	 * arc.endAngle = Math.PI/4;
  	 * \`\`\`
  	 */
  	set endAngle(r: number);
  	/**
  	 * 3点计算圆弧
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbArc, McGePoint3d, MxCpp } from "mxcad";
  	 *
  	 * const arc = new McDbArc();
  	 * const pt1 = new McGePoint3d(20,0,0);
  	 * const pt2 = new McGePoint3d(0,20,0);
  	 * const pt3 = new McGePoint3d(-20,0,0);
  	 * arc.computeArc(pt1.x, pt1.y, pt2.x, pt2.y, pt3.x, pt3.y);
  	 * MxCpp.getCurrentMxCAD().drawEntity(arc)
  	 * \`\`\`
  	 */
  	computeArc(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): boolean;
  }
  /**
   * 表示椭圆椭圆弧实体。它包含了创建、修改了获取椭圆椭圆弧属性的方法。
   * @example
   * \`\`\`ts
  	import { McDbEllipse, MxCpp } from "mxcad"
  	//绘制椭圆弧
  	const ellipse_arc = new McDbEllipse() // 构造椭圆对象
  	ellipse_arc.center = new McGePoint3d(-380, -200) // 设置对象圆心
  	ellipse_arc.majorAxis = new McGeVector3d(0, 150, 0) // 设置对象主轴向量
  	ellipse_arc.minorAxis = new McGeVector3d(280, 0, 0) // 设置对象副轴向量
  	ellipse_arc.startAngle = Math.PI / 2 // 设置对象开始角度
  	ellipse_arc.endAngle = Math.PI * 3 / 2 // 设置对象结束角度
  	ellipse_arc.trueColor = new McCmColor(0, 255, 255) //设置对象颜色
  	MxCpp.getCurrentMxCAD().drawEntity(ellipse_arc) // 绘制椭圆对象
  
  	//绘制椭圆
  	const ellipse = new McDbEllipse() // 构造椭圆对象
  	ellipse.center = new McGePoint3d(-200, -200) // 设置对象圆心
  	ellipse.majorAxis = new McGeVector3d(0, 300, 0) // 设置对象主轴向量
  	ellipse.radiusRatio = 0.5 // 设置椭圆的副轴长度与主轴长度的比值
  	ellipse.trueColor = new McCmColor(255, 233, 0) //设置对象颜色
  	MxCpp.getCurrentMxCAD().drawEntity(ellipse) // 绘制椭圆对象
   * \`\`\`
   */
  export  class McDbEllipse extends McDbCurve {
  	/**
  	 * 构造函数。
  	 * @param imp 内部对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * \`\`\`
  	 */
  	constructor(cenx?: object | number, ceny?: number, cenz?: number, majorAxisx?: number, majorAxisy?: number, majorAxisz?: number, radiusRatio?: number, startAngle?: number, endAngle?: number);
  	/**
  	 * 设置圆心坐标。
  	 * @param x 圆心 x 坐标。
  	 * @param y 圆心 y 坐标。
  	 * @param z 圆心 z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setCenter(0,0,0);
  	 * \`\`\`
  	 */
  	setCenter(x: number, y: number, z?: number): void;
  	/**
  	 * 获取圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setCenter(0,0,0);
  	 * const center = ellipse.center;
  	 * \`\`\`
  	 */
  	get center(): McGePoint3d;
  	/**
  	 * 设置圆心坐标。
  	 * @param pt 圆心坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGePoint3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.center = new McGePoint3d(0,0,0);
  	 * \`\`\`
  	 */
  	set center(pt: McGePoint3d);
  	/**
  	 * 设置主轴向量
  	 * @param x  x 坐标。
  	 * @param y  y 坐标。
  	 * @param z  z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setMajorAxis(20,0,0);
  	 * \`\`\`
  	 */
  	setMajorAxis(x: number, y: number, z?: number): void;
  	/**
  	 * 获取主轴向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setMajorAxis(20,0,0);
  	 * const majorAxis = ellipse.majorAxis;
  	 * \`\`\`
  	 */
  	get majorAxis(): McGeVector3d;
  	/**
  	 * 设置主轴向量。
  	 * @param vec 三维向量对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGeVector3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.majorAxis = new McGeVector3d(20,0,0)
  	 * \`\`\`
  	 */
  	set majorAxis(pt: McGeVector3d);
  	/**
  	 * 设置副轴向量
  	 * @param x  x 坐标。
  	 * @param y  y 坐标。
  	 * @param z  z 坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setMinorAxis(20,0,0);
  	 * \`\`\`
  	 */
  	setMinorAxis(x: number, y: number, z?: number): void;
  	/**
  	 * 获取副轴向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.setMajorAxis(20,0,0);
  	 * const minorAxis = ellipse.minorAxis;
  	 * \`\`\`
  	 */
  	get minorAxis(): McGeVector3d;
  	/**
  	 * 设置副轴向量。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGeVector3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.minorAxis = new McGeVector3d(20,0,0)
  	 * \`\`\`
  	 */
  	set minorAxis(pt: McGeVector3d);
  	/**
  	 * 获取椭圆的副轴长度与主轴长度的比值
  	 * @example
  	 * \`\`\`ts
  	 * //ellipse 为有效椭圆弧实例对象
  	 * const radiusRatio = ellipse.radiusRatio;
  	 * \`\`\`
  	 */
  	get radiusRatio(): number;
  	/**
  	 * 设置椭圆的副轴长度与主轴长度的比值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGeVector3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.radiusRatio = 4;
  	 * \`\`\`
  	 */
  	set radiusRatio(val: number);
  	/**
  	 * 获取椭圆弧的开始角度
  	 * @example
  	 * \`\`\`ts
  	 * //ellipse 为有效椭圆弧实例对象
  	 * const startAngle = ellipse.startAngle;
  	 * \`\`\`
  	 */
  	get startAngle(): number;
  	/**
  	 * 设置椭圆弧的开始角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGeVector3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.startAngle = Math.PI/4;
  	 * \`\`\`
  	 */
  	set startAngle(val: number);
  	/**
  	 * 获取椭圆弧的结束角度
  	 * @example
  	 * \`\`\`ts
  	 * //ellipse 为有效椭圆弧实例对象
  	 * const endAngle = ellipse.endAngle;
  	 * \`\`\`
  	 */
  	get endAngle(): number;
  	/**
  	 * 设置椭圆弧的结束角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbEllipse, McGeVector3d } from "mxcad";
  	 *
  	 * const ellipse = new McDbEllipse();
  	 * ellipse.endAngle = Math.PI/4;
  	 * \`\`\`
  	 */
  	set endAngle(val: number);
  }
  /**
   * 表示一个点对象。
   * @example
   * \`\`\`ts
   * //绘制一个点对象
  	import { McDbPoint } from "mxcad"
  
  	const point = new McDbPoint() // 构造一个点对象
  	const color = new McCmColor(0,255,0)
  	point.trueColor = color // 设置点对象颜色
  	point.setPosition(0, 0) // 设置点对象位置
  	MxCpp.getCurrentMxCAD().drawEntity(point) // 绘制点对象
   * \`\`\`
   */
  export  class McDbPoint extends McDbEntity {
  	/**
  	 * 构造函数。
  	 * @param imp 内部对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPoint, McGePoint3d } from "mxcad";
  	 *
  	 * const pt1 = new McDbPoint(0,0,0);
  	 *
  	 * const point = new McGePoint3d(10,10,0);
  	 * const pt2 = new McDbPoint(point);
  	 * \`\`\`
  	 */
  	constructor(x?: object | number, y?: number, z?: number);
  	/**
  	 * 设置点坐标。
  	 * @param x X坐标
  	 * @param y Y坐标
  	 * @param z Z坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPoint } from "mxcad";
  	 *
  	 * const pt = new McDbPoint();
  	 * pt.setPosition(10,10,0);
  	 * \`\`\`
  	 */
  	setPosition(x: number, y: number, z?: number): void;
  	/**
  	 * 获取点坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPoint } from "mxcad";
  	 *
  	 * const pt = new McDbPoint();
  	 * pt.setPosition(10,10,0);
  	 * const point = pt.position;
  	 * \`\`\`
  	 */
  	get position(): McGePoint3d;
  	/**
  	 * 设置点坐标。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPoint, McGePoint3d } from "mxcad";
  	 *
  	 * const pt = new McDbPoint();
  	 * pt.position = new McGePoint3d(20,20,0)
  	 * \`\`\`
  	 */
  	set position(pt: McGePoint3d);
  }
  /**
   * 表示图案填充类，实现实心颜色填充和各种图案填充效果
   * @example
   * \`\`\`ts
     import { MxCADUiPrPoint, MxCADUtility, McDbHatch, MxCpp, McDb} from "mxcad"
     //选点填充
  	const getPoint = new MxCADUiPrPoint();
  	console.log("\\n指定填充区域内部一点:");
  	let pt = (await getPoint.go()) as McGePoint3d;
  	if (!pt) return;
  
  	let hatch:McDbHatch = MxCADUtility.builderHatchFromPoint(pt);
  	if (!hatch) {
  		console.log("没有找到闭合区域\\n")
  		return;
  	}
  	// 清除填充图案效果
  	hatch.clearPatternDefinition();
  	// 添加图案填充定义
  	hatch.addPatternDefinition(45, 1, 1, 1, 0.25, [45, 0.17677695, 0, 0, 0.25, 0.125, -0.0625])
  	// 设置填充图案
  	hatch.setPattern(McDb.HatchPatternType.kCustomDefined, 'test')
  	// 设置填充颜色
  	hatch.trueColor = new McCmColor(0, 133, 122)
  	// 绘制填充对象
  	MxCpp.getCurrentMxCAD().drawEntity(hatch);
   * \`\`\`
   */
  export  class McDbHatch extends McDbEntity {
  	/**
  	 * 构造函数。
  	 * @param imp 内部对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch()
  	 * \`\`\`
  	 */
  	constructor(x?: object);
  	/**
  	 * 闭合区域次数
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const num = hatch.numLoops
  	 * \`\`\`
  	 */
  	get numLoops(): number;
  	/**
  	 * 某次闭合区域索引中的类型
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const looptType = hatch.loopTypeAt(0)
  	 * \`\`\`
  	 */
  	loopTypeAt(loopIndex: number): number;
  	/** 获取索引的值
  	 * @param loopIndex  index 闭合区域的索引
  	 * @returns { Object } ret 是否成功获取 | lootype 类型 | vertices 坐标集合 | bulges凸度集合
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const numLoops = hatch.numLoops;
  	 * for (let i = 0; i < numLoops; i++) {
  	 *    const loop = hatch.getLoopAt(i);
  	 *    console.log(loop)
  	 * };
  	 * \`\`\`
  	 *  */
  	getLoopAt(loopIndex: number): {
  		ret: boolean;
  		lootype: number;
  		vertices: McGePoint3d[];
  		bulges: number[];
  	};
  	/**
  	 * 填充图案类型
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const type = hatch.patternType()
  	 * \`\`\`
  	 */
  	patternType(): number;
  	/**
  	 * 填充图案名称
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const patternName = hatch.patternName()
  	 * \`\`\`
  	 */
  	patternName(): string;
  	/**
  	 * 设置填充图案
  	 * @param type 填充图案的来源类型
  	 * @param patName 填充图案名称
  	 * @example
  	 * \`\`\`ts
  	   import { McDbHatch, MxCpp } from "mxcad";
  
  	   const hatch = new McDbHatch();
  	   hatch.setPattern(McDb.HatchPatternType.kCustomDefined, 'test')
  	   let mxcad = MxCpp.getCurrentMxCAD();
  	   mxcad.drawEntity(hatch);
  	 * \`\`\`
  	 */
  	setPattern(type: number, patName: string): void;
  	/**
  	 * 获取填充图案角度
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const angle = hatch.patternAngle
  	 * \`\`\`
  	 */
  	get patternAngle(): number;
  	/**
  	 * 设置填充图案角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch();
  	 * hatch.patternAngle(Math.PI/4);
  	 * \`\`\`
  	 */
  	set patternAngle(angle: number);
  	/**
  	 * 获取填充图案缩放比例
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const scale = hatch.patternScale
  	 * \`\`\`
  	 */
  	get patternScale(): number;
  	/**
  	 * 设置填充图案缩放比例
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch();
  	 * hatch.patternScale = 0.8;
  	 * \`\`\`
  	 */
  	set patternScale(scale: number);
  	/**
  	 * 获取填充图案空间
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const patternSpace = hatch.patternSpace
  	 * \`\`\`
  	 */
  	get patternSpace(): number;
  	/**
  	 * 设置填充图案空间
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch();
  	 * hatch.patternSpace = 0.8;
  	 * \`\`\`
  	 */
  	set patternSpace(space: number);
  	/**
  	 * 获取填充图案是否是双倍
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const isDouble = hatch.patternDouble;
  	 * if(isDouble){
  	 *   //填充图案为双倍
  	 * }else{
  	 *   //填充图案不为双倍
  	 * }
  	 * \`\`\`
  	 */
  	get patternDouble(): boolean;
  	/**
  	 * 设置填充图案是否为双倍
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch();
  	 * hatch.patternDouble = true;
  	 * \`\`\`
  	 */
  	set patternDouble(isDouble: boolean);
  	/**
  	 * 图案定义的数量
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const num = hatch.numPatternDefinitions;
  	 * \`\`\`
  	 */
  	get numPatternDefinitions(): number;
  	/** 获取对应图案定义的数据
  	 * @param index 索引
  	 * @returns { Object } ret 是否成功获取 | angle 角度 | baseX, baseY 基点位置 | offsetX, offsetY 偏移位置 | aryDashes 短划线数据
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const obj = {};
  	 * for (let i = 0; i < obj.numPatternDefinitions; i++) {
  	 * obj["patternDefinitions:" + i] = hatch.getPatternDefinitionAt(i);
  	 * };
  	 * \`\`\`
  	 */
  	getPatternDefinitionAt(index: number): {
  		ret: boolean;
  		angle: number;
  		baseX: number;
  		baseY: number;
  		offsetX: number;
  		offsetY: number;
  		aryDashes: number[];
  	};
  	/** 添加图案定义
  	 * @param angle 角度 如 45
  	 * @param baseX 基点x坐标
  	 * @param baseY 基点y坐标
  	 * @param offsetX 偏移x坐标
  	 * @param offsetY 偏移y坐标
  	 * @param dashes 短划线数据
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad"
  	 * const hatch = new McDbHatch()
  	 * const res = hatch.addPatternDefinition(45, 0, 0, 0, 0.25, [45, 0.17677695, 0, 0, 0.25, 0.125, -0.0625]);
  	 * if(res){
  	 *   //添加成功
  	 * }else{
  	 *   //添加失败
  	 * }
  	 * \`\`\`
  	 * @returns { Boolean } 是否成功添加图案定义
  	 *  */
  	addPatternDefinition(angle: number, baseX: number, baseY: number, offsetX: number, offsetY: number, dashes: number[]): boolean;
  	/**
  	 * 清空图案定义
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const res = hatch.clearPatternDefinition();
  	 * if(res){
  	 *   //清空成功
  	 * }else{
  	 *   //清空失败
  	 * }
  	 * \`\`\`
  	 */
  	clearPatternDefinition(): boolean;
  	/**
  	 * 填充样式
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const style = hatch.hatchStyle();
  	 * \`\`\`
  	 */
  	hatchStyle(): McDb.HatchStyle;
  	/**
  	 * 设置填充样式
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch, McDb } from "mxcad"
  	 *
  	 * McDbHatch.setHatchStyle(McDb.HatchStyle.kNormal)
  	 * \`\`\`
  	 */
  	setHatchStyle(val: McDb.HatchStyle): void;
  	/** 追加闭合区域
  	 * @param loopType 闭合区域类型
  	 * @param vertices 坐标集合
  	 * @param bulges 凸度集合
  	 * @return 返回追加结果
  	 * @example
  	 * \`\`\`ts
  	   import { McDbHatch, McGePoint3d, McGePoint3dArray } from "mxcad";
  
  	   let solid = new McDbHatch();
  	   const pts = [
  	   new McGePoint3d({ x: 10, y: 20, z: 0 }),
  	   new McGePoint3d({ x: 0, y: 0, z: 0 }),
  	   ];
  	   const res = solid.appendLoop(new McGePoint3dArray(pts));
  	   if(res){
  		  //设置成功
  	   }else{
  		  //设置失败
  	   }
  	 * \`\`\`
  	 */
  	appendLoop(vertices: McGePoint3dArray, bulges?: number[], loopType?: number): boolean;
  	/**
  	 * 追加圆构造的闭合区域
  	 * @param dCenX 圆心X轴坐标
  	 * @param dCenY 圆心Y轴坐标
  	 * @param dR 圆半径
  	 * @param dPrecision 精度参数，默认值为 0。
  	 * @param loopType 循环类型参数，默认值为 McDb.HatchLoopType.kPolyline
  	 * @return 追加结果
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 * const hatch = new McDbHatch();
  	 * const res = hatch.appendCircleLoop(0,0,0,20);
  	 * if(res){
  	 *    //追加成功
  	 * }else{
  	 *    //追加失败
  	 * }
  	 * \`\`\`
  	 */
  	appendCircleLoop(dCenX: number, dCenY: number, dR: number, dPrecision?: number, loopType?: number): any;
  	/**
  	 * 删除某个索引下的闭合区域
  	 * @param loopIndex 移除的循环的索引
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const res = hatch.removeLoopAt(1);
  	 * if(res){
  	 *   //删除成功
  	 * }else{
  	 *   //删除失败
  	 * }
  	 * \`\`\`
  	 */
  	removeLoopAt(loopIndex: number): boolean;
  	/**
  	 * 删除所有闭合区域
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const res = hatch.removeAllLoop();
  	 * if(res){
  	 *   //删除成功
  	 * }else{
  	 *   //删除失败
  	 * }
  	 * \`\`\`
  	 */
  	removeAllLoop(): boolean;
  	/** 设置某个索引下的闭合区域数据
  	 * @param loopIndex 闭合区域索引
  	 * @param loopType 闭合区域类型
  	 * @param vertices 坐标集合
  	 * @param bulges 凸度集合
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbHatch } from "mxcad";
  	 *
  	 * const hatch = new McDbHatch();
  	 * const pts = [
  	 * new McGePoint3d({ x: 10, y: 20, z: 0 }),
  	 * new McGePoint3d({ x: 0, y: 0, z: 0 }),
  	 * ];
  	 * const isSuccess = hatch.setLoopAt(0, new McGePoint3dArray(pts), [0.4,0.8]);
  	 * if (isSuccess) {
  	 *   console.log("循环设置成功！");
  	 * } else {
  	 *   console.log("循环设置失败...");
  	 * }
  	 * \`\`\`
  	 */
  	setLoopAt(loopIndex: number, vertices: McGePoint3dArray, bulges: number[], loopType?: number): boolean;
  	/**
  	 * 检查填充对象是否为实体填充
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * // hatch 为图案填充实例对象
  	 * const res = hatch.isSolid();
  	 * if(res){
  	 *   //实体填充
  	 * }else{
  	 *   //非实体填充
  	 * }
  	 * \`\`\`
  	 */
  	isSolid(): boolean;
  	/**
  	 * 对当前定义的填充图案数据进行缩放。
  	 */
  	scalePattern(scale: number): boolean;
  }
  /**
   * 代理实体类型，是一种特殊类型的实体，其几何形状和属性信息存储在外部源中，例如外部文件或数据库。
   * @example
   * \`\`\`ts
   * //遍历代理实体中的文字
   * import { MxCADSelectionSet, McDbProxyEntity } from "mxcad";
   *
   * let ss = new MxCADSelectionSet();// 构造选择集对象
   * // 设置过滤器
   * let filter = new MxCADResbuf();
   * filter.AddMcDbEntityTypes("TEXT,MTEXT,INSERT,ACAD_PROXY_ENTITY");
   * ss.allSelect(filter);// 筛选图纸上所有的文本、图块、代理实体对象
   * // 遍历选择对象
   * ss.forEach((id,item)=>{
   * const ent = id.getMcDbEntity();
   * if(ent instanceof McDbProxyEntity){
   *    let proxyEntity: McDbProxyEntity = ent;
   *    let aryText = proxyEntity.getAllTextContent();
   *    aryText.forEach((val)=>{
   *      console.log("遍历文字", val);
   *    });
   * })
   * \`\`\`
   */
  export  class McDbProxyEntity extends McDbEntity {
  	/**
  	* 构造函数。
  	* @param imp 内部对象。
  	*/
  	constructor(x?: object);
  	/**
  	 * 获取代理实体中所有的文本内容
  	 * @return 文本数组
  	 * @example
  	 * \`\`\`ts
  	 * // proxyEntity 为有效代理实体
  	 * let aryText = proxyEntity.getAllTextContent();
  	 * aryText.forEach((val)=>{
  	 *   console.log("遍历文字", val);
  	 * });
  	 * \`\`\`
  	 */
  	getAllTextContent(): McGeStringArray;
  	/**
  	 * 获取代理实体的所有原始实体ID
  	 * @return 对象ID数组
  	 * @example
  	 * \`\`\`ts
  	 * // proxyEntity 为有效代理实体
  	 * let aryIds = proxyEntity.getAllEntityIds();
  	 * aryIds.forEach((id)=>{
  	 *   console.log("实体ID", id);
  	 * });
  	 * \`\`\`
  	 */
  	getAllEntityIds(): McObjectId[];
  	/**
  	 * 获取代理实体的原始类名。
  	 * @return 原始类名
  	 * @example
  	 * \`\`\`ts
  	 * // proxyEntity 为有效代理实体
  	 * let originalName = proxyEntity.getOriginalClassName();
  	 * console.log("原始类名", originalName)
  	 * \`\`\`
  	 */
  	getOriginalClassName(): string;
  }
  /**
   * 光栅图片类，该类用于在CAD中显示光栅图形
   */
  export  class McDbRasterImage extends McDbEntity {
  	/**
  	* 构造函数。
  	* @param imp 内部对象。
  	* @example
  	* \`\`\`ts
  	* import { McDbRasterImage } from "mxcad";
  	* // 创建一个新的 McDbRasterImage 实例
  	* const rasterImage = new McDbRasterImage();
  	* \`\`\`
  	*/
  	constructor(x?: object);
  	/**
  	 * 设置或获取图像的方向
  	 * @param origin 原点
  	 * @param uCorner 沿X轴的向量
  	 * @param vOnPlane 沿Y轴的向量
  	 * @returns 返回一个布尔值，指示设置是否成功
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbRasterImage, McGePoint3d, McGeVector3d } from "mxcad";
  	 *
  	 * const rasterImage = new McDbRasterImage();
  	 * const origin = new McGePoint3d(0, 0, 0);
  	 * const uCorner = McGeVector3d.kXAxis.clone();
  	 * const vOnPlane = McGeVector3d.kYAxis.clone();
  	 * const isSuccess = rasterImage.setOrientation(origin, uCorner, vOnPlane);
  	 * if(isSuccess){
  	 *   // 设置失败
  	 * }else{
  	 *   //设置成功
  	 * }
  	 * \`\`\`
  	 */
  	setOrientation(origin: McGePoint3d, uCorner: McGeVector3d, vOnPlane: McGeVector3d): boolean;
  	/**
  	 * 获取图像的方向
  	 * @returns { object } origin: 原点 | uCorner: 沿X轴的向量 | vOnPlane: 沿Y轴的向量
  	 * @example
  	 * \`\`\`ts
  	 * //假设 rasterImage 为光栅图片实例
  	 * const orientation = rasterImage.getOrientation();
  	 * console.log(orientation.origin); // 输出原点
  	 * console.log(orientation.uCorner); // 输出沿X轴的向量
  	 * console.log(orientation.vOnPlane); // 输出沿Y轴的向量
  	 * \`\`\`
  	 */
  	getOrientation(): {
  		origin: McGePoint3d;
  		uCorner: McGeVector3d;
  		vOnPlane: McGeVector3d;
  	};
  	/**
  	 * 设置保存dwg文件时，图片的宽高像素。
  	 * \`\`\`
  	 */
  	setDwgImageSize(width: number, height: number): boolean;
  	/**
  	 * 返回dwg文件中的图片的宽高像素。
  	 * \`\`\`
  	 */
  	getDwgImageSize(): number[];
  	/**
  	 * 设置图像的定义ID
  	 * @param imageId 图像的定义 ID
  	 * @example
  	 * \`\`\`ts
  	 * import { McObjectId, McDbRasterImage } from "mxcad" ;
  	 *
  	 * const rasterImage = new McDbRasterImage();
  	 * // 20 : 图片id
  	 * const imageId = new McObjectId( 20 , McObjectIdType.kMxCAD);
  	 * rasterImage.setImageDefId(imageId);
  	 * \`\`\`
  	 */
  	setImageDefId(imageId: McObjectId): void;
  	/**
  	 * 获取图像的定义I
  	 * @example
  	 * \`\`\`ts
  	 * //假设 rasterImage 为光栅图片实例
  	 * const imageId = rasterImage.imageDefId();
  	 * console.log(imageId.id); // 输出图像的定义 ID
  	 * \`\`\`
  	 */
  	imageDefId(): McObjectId;
  	/**
  	 * 设置图像对象的裁剪边界
  	 * @param type 裁剪边界的类型
  	 * @param aryPoint 裁剪边界点数组
  	 * @return 返回一个布尔值，指示设置是否成功。
  	 * @example
  	 * \`\`\`ts
  	 * //假设 rasterImage 为光栅图片实例
  	 * const clipBoundaryType = McDb.ClipBoundaryType.kRectangular; // 举例，裁剪类型为矩形
  	 * const clipBoundaryPoints = new McGePoint3dArray(); // 假设已经填充了裁剪边界的点
  	 * const isSuccess = rasterImage.setClipBoundary(clipBoundaryType, clipBoundaryPoints);
  	 * if(isSuccess){
  	 *   //设置成功
  	 *  }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setClipBoundary(type: McDb.ClipBoundaryType, aryPoint: McGePoint3dArray): boolean;
  	/**
  	 * 获取图像对象的裁剪边界
  	 * @example
  	 * \`\`\`ts
  	 * //假设 rasterImage 为光栅图片实例
  	 * const clipBoundaryPoints = rasterImage.clipBoundary();
  	 * console.log(clipBoundaryPoints); // 输出裁剪边界的点数组
  	 * \`\`\`
  	 */
  	clipBoundary(): McGePoint3dArray;
  	/**
  	 * 获取裁剪边界的类型
  	 * @example
  	 * \`\`\`ts
  	 * //假设 rasterImage 为光栅图片实例
  	 * const type = rasterImage.clipBoundaryType();
  	 * console.log(type); // 输出裁剪边界的类型
  	 * \`\`\`
  	 */
  	clipBoundaryType(): McDb.ClipBoundaryType;
  }
  /**
   * Wipeout类
   */
  export  class McDbWipeout extends McDbEntity {
  	/**
  	* 构造函数。
  	* \`\`\`
  	*/
  	constructor(x?: object);
  	/**
  	 * 设置Wipeout类边界
  	 */
  	setVertices(aryPoint: McGePoint3dArray): boolean;
  	/**
  	 * 获取Wipeout类边界
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	getVertices(): McGePoint3dArray;
  }
  /**
   * 背景绘制对象
   */
  export  class McDbBackgroundEntity extends McDbEntity {
  	constructor(x: object);
  	/**
  	* 设置是否显示背景对象
  	*/
  	setShow(sDwgFile: string, isShow: boolean): boolean;
  	/**
  	* 是否显示背景对象
  	*/
  	isShow(sDwgFile: string): boolean;
  	/**
  	* 显示背景时使用指定颜色替换显示
  	*/
  	setShowColor(sDwgFile: string, lColor: number): boolean;
  	/**
  	* 返回背景显示使用的数据库对象.
  	*/
  	getBackgroundDatabase(sDwgFile: string): McDbDatabase | null;
  	/**
  	* 清空所有背景显示
  	*/
  	clearAll(): boolean;
  	/**
  	* 清空背景显示
  	*/
  	clearDwg(sDwgFile: string): boolean;
  }
  /**
   * 样条线对象
   */
  export  class McDbSpline extends McDbCurve {
  	/**
  	 * 构造函数
  	 * @param imp 实现对象
  	 * @example
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 得到样条线的数据.
  	 * @example
  	 * \`\`\`
  	 */
  	getNurbsData(): {
  		degree: number;
  		rational: boolean;
  		closed: boolean;
  		periodic: boolean;
  		controlPoints: McGePoint3dArray;
  		knots: McGeDoubleArray;
  		weights: McGeDoubleArray;
  		controlPtTol: number;
  		knotTol: number;
  	};
  	/**
  	 * 设置样条线的数据.
  	 * @example
  	 * \`\`\`
  	 */
  	setNurbsData(data: {
  		degree: number;
  		rational: boolean;
  		closed: boolean;
  		periodic: boolean;
  		controlPoints: McGePoint3dArray;
  		knots: McGeDoubleArray;
  		weights: McGeDoubleArray;
  		controlPtTol: number;
  		knotTol: number;
  	}): boolean;
  	/**
  	 * 得到样条线的拟合数据.
  	 * @example
  	 * \`\`\`
  	 */
  	getFitPoints(): {
  		degree: number;
  		fitTolerance: number;
  		tangentsExist: boolean;
  		startTangent: McGeVector3d;
  		endTangent: McGeVector3d;
  		fitPoints: McGePoint3dArray;
  	};
  	/**
  	 *设置样条线的拟合数据.
  	 * @example
  	 * \`\`\`
  	 */
  	setFitPoints(data: {
  		degree: number;
  		fitTolerance: number;
  		tangentsExist: boolean;
  		startTangent: McGeVector3d;
  		endTangent: McGeVector3d;
  		fitPoints: McGePoint3dArray;
  	}): boolean;
  }
  /**
   * Dxf组码
   * @public
   */
  export  enum DxfCode {
  	/** 实体类型 */
  	kEntityType = 5020,
  	/** 实体图层 */
  	kLayer = 8,
  	/** 块名 */
  	kBlockName = 2,
  	/** 颜色 */
  	kColor = 62,
  	/** XData 类型 */
  	kAppName = -3,
  	/** 长整型 */
  	kLong = 1071,
  	/** 双精度浮点数 */
  	kDouble = 1040,
  	/** 字符串 */
  	kString = 1000,
  	/** 点坐标 */
  	kPoint = 1010,
  	/** 实体ID */
  	kEntityId = -8000,
  	/** 实体 */
  	kEntity = -8500,
  	/** 扩展数据名称 */
  	kExDataName = 1001
  }
  /**
   * McDb 命名空间包含 AutoCAD 中的一些常用枚举。
   * @public
   */
  export  namespace McDb {
  	/**
  	 * 多线类型
  	 * @public
  	 */
  	enum PolylineType {
  		/** LW Polyline */
  		kLwPolyline = 0,
  		/** 3D Polyline */
  		k3dPolyline = 2
  	}
  	/**
  	 * 文本水平对齐方式枚举。
  	 * @public
  	 */
  	enum TextHorzMode {
  		/** 左对齐 */
  		kTextLeft = 0,
  		/** 居中对齐 */
  		kTextCenter = 1,
  		/** 右对齐 */
  		kTextRight = 2,
  		/** 水平对齐 */
  		kTextAlign = 3,
  		/** 垂直中间对齐 */
  		kTextMid = 4,
  		/** 自适应 */
  		kTextFit = 5
  	}
  	/** 相交的类型
  	 * 调用 {@link McDbEntity.IntersectWith} 方法的第二个参数
  	 *  */
  	enum Intersect {
  		/** 两个实体都不延伸 */
  		kOnBothOperands = 0,
  		/** 只延伸原实体
  		 * 指调用 {@link McDbEntity.IntersectWith} 方法的实例本身
  		 *  */
  		kExtendThis = 1,
  		/**只延伸作为参数的实体
  		 * 指 {@link McDbEntity.IntersectWith} 的第一个参数
  		 *  */
  		kExtendArg = 2,
  		/** 两个实体都延伸  */
  		kExtendBoth = 3
  	}
  	/**
  	 * 文本垂直对齐方式枚举。
  	 * @public
  	 */
  	enum TextVertMode {
  		/** 基线对齐 */
  		kTextBase = 0,
  		/** 底部对齐 */
  		kTextBottom = 1,
  		/** 垂直中间对齐 */
  		kTextVertMid = 2,
  		/** 顶部对齐 */
  		kTextTop = 3
  	}
  	/**
  	 * 实体附着点枚举。
  	 * @public
  	 */
  	enum AttachmentPoint {
  		/** 左上对齐 */
  		kTopLeft = 1,
  		/** 中上对齐 */
  		kTopCenter = 2,
  		/** 右上对齐 */
  		kTopRight = 3,
  		/** 中左对齐 */
  		kMiddleLeft = 4,
  		/** 中心点对齐 */
  		kMiddleCenter = 5,
  		/** 中右对齐 */
  		kMiddleRight = 6,
  		/** 左下对齐 */
  		kBottomLeft = 7,
  		/** 底部中间对齐 */
  		kBottomCenter = 8,
  		/** 右下对齐 */
  		kBottomRight = 9,
  		kBaseLeft = 10,
  		kBaseCenter = 11,
  		kBaseRight = 12,
  		kBaseAlign = 13,
  		kBottomAlign = 14,
  		kMiddleAlign = 15,
  		kTopAlign = 16,
  		kBaseFit = 17,
  		kBottomFit = 18,
  		kMiddleFit = 19,
  		kTopFit = 20,
  		kBaseMid = 21,
  		kBottomMid = 22,
  		kMiddleMid = 23,
  		kTopMid = 24
  	}
  	/**
  	 * 线宽枚举。
  	 * @public
  	 */
  	enum LineWeight {
  		kLnWt000 = 0,
  		kLnWt005 = 5,
  		kLnWt009 = 9,
  		kLnWt013 = 13,
  		kLnWt015 = 15,
  		kLnWt018 = 18,
  		kLnWt020 = 20,
  		kLnWt025 = 25,
  		kLnWt030 = 30,
  		kLnWt035 = 35,
  		kLnWt040 = 40,
  		kLnWt050 = 50,
  		kLnWt053 = 53,
  		kLnWt060 = 60,
  		kLnWt070 = 70,
  		kLnWt080 = 80,
  		kLnWt090 = 90,
  		kLnWt100 = 100,
  		kLnWt106 = 106,
  		kLnWt120 = 120,
  		kLnWt140 = 140,
  		kLnWt158 = 158,
  		kLnWt200 = 200,
  		kLnWt211 = 211,
  		kLnWtByLayer = -1,
  		kLnWtByBlock = -2,
  		kLnWtByLwDefault = -3
  	}
  	/**
  	* 表示图案填充中不同类型的闭合区域
  	* @public
  	*/
  	enum HatchLoopType {
  		/** 默认填充闭合区域类型  */
  		kDefault = 0,
  		/** 外部填充闭合区域类型 表示外部轮廓或边界 */
  		kExternal = 1,
  		/** 多段线填充闭合区域类型 表示由多个线段组成的区域*/
  		kPolyline = 2,
  		/** 派生填充闭合区域类型 表示从其他图形元素派生而来的填充区域*/
  		kDerived = 4,
  		/** 文本框填充闭合区域类型 表示包含文本的区域*/
  		kTextbox = 8,
  		/** 最外层填充闭合区域类型 表示填充区域的最外层边界*/
  		kOutermost = 16,
  		/** 未闭合填充闭合区域类型 表示填充区域的边界没有闭合*/
  		kNotClosed = 32,
  		/** 自相交填充闭合区域类型 表示填充区域的边界自相交*/
  		kSelfIntersecting = 64,
  		/** 文本岛填充闭合区域类型  表示包含文本的孤立区域*/
  		kTextIsland = 128
  	}
  	/**
  	 * 表示填充区域中的边的曲线类型
  	 * @public
  	 */
  	enum HatchEdgeType {
  		/** 表示直线类型的边 */
  		kLine = 1,
  		/** 圆弧类型的边 */
  		kCirArc = 2,
  		/** 椭圆弧类型的边 */
  		kEllArc = 3,
  		/** 样条曲线类型的边 */
  		kSpline = 4
  	}
  	/**
     *  表示填充图案的来源类型
     * @public
     */
  	enum HatchPatternType {
  		/** 用户自定义的填充图案 */
  		kUserDefined = 0,
  		/** 预定义的填充图案 */
  		kPreDefined = 1,
  		/** 自定义定义的填充图案 */
  		kCustomDefined = 2
  	}
  	/**
  	 * 表示填充图案的风格
  	 * @public
  	 * */
  	enum HatchStyle {
  		/** 普通风格 标准的、普通的填充图案风格 */
  		kNormal = 0,
  		/** 外部风格 填充会强调区域的外部边界 用于使外部区域在绘图中更为显眼 */
  		kOuter = 1,
  		/** 忽略风格 表示在某些情况下应忽略填充图案的风格 在特定的绘图需求下，不需要显示填充图案的情况*/
  		kIgnore = 2
  	}
  	/** 指定裁剪操作中使用的边界类型*/
  	enum ClipBoundaryType {
  		/** 无效的裁剪边界类型 */
  		kInvalid = 0,
  		/** 矩形裁剪边界类型 */
  		kRect = 1,
  		/** 多边形裁剪边界类型 */
  		kPoly = 2
  	}
  }
  /**
   * 表示一个颜色对象，可以通过颜色索引或 RGB 值来设置颜色。
   * @example
   * \`\`\`ts
     import { McCmColor, McDbEntity} from "mxcad";
     //设置对象颜色
     const ent = new McDbEntity();
     const color = new McCmColor(255,0,0);
     ent.trueColor = color;
   * \`\`\`
   * \`\`\`ts
     import { McCmColor, McDbEntity} from "mxcad";
     // 修改对象颜色
     async function Mx_Test_ChangeColor() {
  	 // 选择标注对象
  	 let getEntity = new MxCADUiPrEntity();
  	 getEntity.setMessage("选择标注对象");
  	 let id = await getEntity.go();
  	 if (!id.isValid()) return;
  
  	 let ent = id.getMcDbEntity();// 获取目标McDbEntity对象
  	 if (!ent) return;
  	 ent.trueColor = new McCmColor(255, 0, 255);// 修改对象颜色
     }
   * \`\`\`
   */
  export  class McCmColor {
  	/** 内部实现对象 */
  	private imp;
  	/**
  	 * 构造函数。设置 RGB 值。
  	 * @param red 红
  	 * @param green 绿
  	 * @param blue 蓝
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
  	 *
  	 * const colorObj = { red:0, green:255, blue:0};
  	 * const green_color:McCmColor = new McCmColor(colorObj);
  	 * \`\`\`
  	 */
  	constructor(red?: number | object, green?: number, blue?: number, n?: number);
  	/**
  	 * 获取内部实现对象
  	 * @return 内部实现对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * const imp = color.getImp();
  	 * \`\`\`
  	 */
  	getImp(): any;
  	/**
  	 * 复制颜色对象的值。
  	 * @param val 颜色对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color:McCmColor = new McCmColor();
  	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
  	 * color.copy(red_color);
  	 * \`\`\`
  	 */
  	copy(val: McCmColor): this;
  	/**
  	 * 刻隆一个颜色对象
  	 * @return 返回克隆后的颜色对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const red_color:McCmColor = new McCmColor(255, 0, 0);
  	 * const copy_color:McCmColor = red_color.clone();
  	 * \`\`\`
  	 */
  	clone(): McCmColor;
  	/**
  	 * 设置颜色索引,根据颜色索引值设置颜色类型。
  	 * @param colorIndex 颜色索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor, ColorIndexType } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.setColorIndex(ColorIndexType.kBylayer);//设置颜色随层
  	 * \`\`\`
  	 */
  	setColorIndex(colorIndex: number): void;
  	/**
  	 * 设置 RGB 值。
  	 * @param red 红色值。
  	 * @param green 绿色值。
  	 * @param blue 蓝色值。
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.setRGB(255,0,0);//红色
  	 * \`\`\`
  	 */
  	setRGB(red: number, green: number, blue: number): void;
  	/**
  	 * 获取或设置rgb值中的红色值，设置数值范围0~255。
  	 * @param val 颜色数值
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.red = 188;
  	 * console.log(color.red)
  	 * \`\`\`
  	 */
  	get red(): number;
  	set red(val: number);
  	/**
  	 * 获取或设置rgb值中的绿色值，设置数值范围0~255。
  	 * @param val 颜色数值
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.green = 188;
  	 * console.log(color.green)
  	 * \`\`\`
  	 */
  	get green(): number;
  	set green(val: number);
  	/**
  	 * 获取或设置rgb值中的蓝色值，设置数值范围0~255。
  	 * @param val 颜色数值
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.blue = 188;
  	 * console.log(color.blue)
  	 * \`\`\`
  	 */
  	get blue(): number;
  	set blue(val: number);
  	/**
  	 * n
  	 */
  	get n(): number;
  	set n(val: number);
  	/**
  	 * 方法。
  	 */
  	get method(): number;
  	set method(val: number);
  	/**
  	 * 获取或设置颜色索引。
  	 * @param val 颜色索引
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor, ColorIndexType } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * color.colorIndex = ColorIndexType.kBylayer;//设置颜色随层
  	 * console.log(color.colorIndex);
  	 * \`\`\`
  	 */
  	get colorIndex(): number;
  	set colorIndex(val: number);
  	/**
  	 * 得到颜色说明字符串
  	 * @returns 颜色说明字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * const str = color.getColorString();
  	 * console.log(str);
  	 * \`\`\`
  	 */
  	getColorString(): string;
  	/**
  	 * 得到颜色值字符串，十六进制格式，layerId:颜色随层时会取layerId指向的层颜色，blkRefId:颜色随块时，会取blkRefId指向的块颜色
  	 * @param layerId 图层ID
  	 * @param blkRefId 块记录ID
  	 * @returns 颜色值字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { McCmColor } from "mxcad"
  	 *
  	 * const color = new McCmColor();
  	 * const val = color.getColorValue();
  	 * console.log(val);
  	 * \`\`\`
  	 */
  	getColorValue(layerId?: McObjectId, blkRefId?: McObjectId): string;
  	/** 获取 css 颜色的样式 如rgb(0, 0, 0) */
  	getStyle(): string;
  }
  /**
   * 表示一个线型表记录对象，实现了对线型的属性相关操作函数。
   * @example
   * \`\`\`ts
   *  // 添加线型
  	import { MxCpp, McDbLinetypeTableRecord } from "mxcad"
  
  	const mxcad = MxCpp.getCurrentMxCAD();
  	// 拿到当前线型样式表
  	let linetypeTable = mxcad.getDatabase().getLinetypeTable();
  	// 构造新线型表记录对象
  	let newLinetypeRecord = new McDbLinetypeTableRecord();
  	// 设置线型对象的虚线数量
  	newLinetypeRecord.numDashes = 0.2
  	// 设置线型对象的名字
  	newLinetypeRecord.name = "TestMyLine"
  	// 添加线型
  	const res = linetypeTable.add(newLinetypeRecord).isValid()
  	if (res) {
  		console.log("add ok");
  	}
   * \`\`\`
   */
  export  class McDbLinetypeTableRecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord  } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置线型名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.name = "测试线型"
  	 * console.log(linetypeRec.name) // 测试线型
  	 * \`\`\`
  	 */
  	get name(): string;
  	set name(val: string);
  	/**
  	 * 获取或设置线型的虚线数量。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.numDashes = 6
  	 * console.log(linetypeRec.numDashes) // 6
  	 * \`\`\`
  	 */
  	get numDashes(): number;
  	set numDashes(val: number);
  	/**
  	 * 获取或设置指定索引处的虚线长度。
  	 * @param index 线型定义数组中索引。
  	 * @param value 虚线长度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.setDashLengthAt(0, 8)
  	 * console.log(linetypeRec.dashLengthAt(0)) // 8
  	 * \`\`\`
  	 */
  	dashLengthAt(index: number): number;
  	setDashLengthAt(index: number, value: number): boolean;
  	/**
  	 * 获取或设置线型说明字符串。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.comments = "说明字符串"
  	 * console.log(linetypeRec.comments) // 说明字符串
  	 * \`\`\`
  	 */
  	get comments(): string;
  	set comments(val: string);
  	/**
  	 *  获取或设置指定索引处的形状样式。
  	 * @param index 线型定义数组中索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 *
  	 * const shapeStyleAtIndex = linetypeRec.shapeStyleAt(0);
  	 * console.log(shapeStyleAtIndex);
  	 *
  	 * // 设置指定索引处的形状样式为新值
  	 * const newIndex = 5;
  	 * const newValue = 10;
  	 * const isSetSuccessful = linetypeRec.setShapeStyleAt(newIndex, newValue);
  	 * if (isSetSuccessful) {
  	 *    //设置成功
  	 * } else {
  	 *    //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	shapeStyleAt(index: number): number;
  	setShapeStyleAt(index: number, value: number): boolean;
  	/**
  	 *  获取或设置指定索引处的形状编号。
  	 * @param index 线型定义数组中索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 *
  	 * const shapeNumberAtIndex = linetypeRec.shapeNumberAt(0);
  	 * console.log(shapeNumberAtIndex);
  	 *
  	 * // 设置指定索引处的形状编号为新值
  	 * const newIndex = 5;
  	 * const newValue = 10;
  	 * const isSetSuccessful = linetypeRec.setShapeNumberAt(newIndex, newValue);
  	 * if (isSetSuccessful) {
  	 *    //设置成功
  	 * } else {
  	 *    //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	shapeNumberAt(index: number): number;
  	setShapeNumberAt(index: number, shapeNumber: number): boolean;
  	/**
  	 *  获取或设置指定索引处的形状偏移量。
  	 * @param index 线型定义数组中索引。
  	 * @return 偏移向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord, McGeVector3d } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 *
  	 * const vec = linetypeRec.shapeOffsetAt(0);
  	 * console.log(vec);
  	 *
  	 * // 设置指定索引处的形状偏移量为新值
  	 * const isSetSuccessful = linetypeRec.setShapeNumberAt(0, new McGeVector3d(10, 10, 0));
  	 * if (isSetSuccessful) {
  	 *    //设置成功
  	 * } else {
  	 *    //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	shapeOffsetAt(index: number): McGeVector3d;
  	setShapeOffsetAt(index: number, offset: McGeVector3d): boolean;
  	/**
  	 * 获取或设置指定索引处的形状缩放比例。
  	 * @param index 线型定义数组中索引。
  	 * @param scale 缩放因子
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.setShapeScaleAt(0,0.8);
  	 * console.log(linetypeRec.shapeScaleAt(0));// 0.8
  	 * \`\`\`
  	 */
  	shapeScaleAt(index: number): number;
  	setShapeScaleAt(index: number, scale: number): boolean;
  	/**
  	 * 获取或设置线型是否根据绘图比例进行缩放。
  	 * @return 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.isScaledToFit = true;
  	 * console.log(linetypeRec.isScaledToFit) // true
  	 * \`\`\`
  	 */
  	get isScaledToFit(): boolean;
  	set isScaledToFit(scaledToFit: boolean);
  	/**
  	 * 获取指定形状是否按照用户坐标系（UCS）方向排列。
  	 * @param index 线型定义数组中索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * console.log(linetypeRec.shapeIsUcsOrientedAt(0))
  	 * \`\`\`
  	 */
  	shapeIsUcsOrientedAt(index: number): boolean;
  	/**
  	 * 设置指定形状是否按照用户坐标系（UCS）方向排列。
  	 * @param index 线型定义数组中索引。
  	 * @param isUcsOriented 是否按照用户坐标系（UCS）方向排列
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * const res = linetypeRec.setShapeIsUcsOrientedAt(0, true);
  	 * if(res){
  	 *  //设置成功
  	 * }else{
  	 *  //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setShapeIsUcsOrientedAt(index: number, isUcsOriented: boolean): boolean;
  	/**
  	 * 获取指定索引处的形状旋转角度。
  	 * @param index 线型定义数组中索引。
  	 * @return 旋转角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * console.log(linetypeRec.shapeRotationAt(0))
  	 * \`\`\`
  	 */
  	shapeRotationAt(index: number): number;
  	/**
  	 * 设置指定索引处的形状旋转角度。
  	 * @param index 线型定义数组中索引。
  	 * @param rotation 旋转角度
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.setShapeRotationAt(0, Math.PI / 2);
  	 * \`\`\`
  	 */
  	setShapeRotationAt(index: number, rotation: number): boolean;
  	/**
  	 * 获取或设置指定索引处的文本信息。
  	 * @param index 线型定义数组中索引。
  	 * @return 文本信息
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * const text = linetypeRec.textAt(0);
  	 * console.log(text)
  	 * \`\`\`
  	 */
  	textAt(index: number): string;
  	/**
  	 * 设置指定索引处的文本信息。
  	 * @param index 线型定义数组中索引。
  	 * @param text 文本信息
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLinetypeTableRecord } from "mxcad";
  	 *
  	 * const linetypeRec = new McDbLinetypeTableRecord();
  	 * linetypeRec.setTextAt(0, "测试文本");
  	 * \`\`\`
  	 */
  	setTextAt(index: number, text: string): boolean;
  }
  /**
   * 表示一个标注样式记录对象，实现了标注样式的属性相关操作函数。
   * @example
   * \`\`\`ts
   * \`\`\`
   */
  export  class McDbDimStyleTableRecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置标注样式名称。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	get name(): string;
  	set name(val: string);
  	/**
  	* 得到标注样式的整数类型的属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimVarInt(type: number): number;
  	/**
  	* 设置标注样式的整数类型的属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimVarInt(type: number, value: number): boolean;
  	/**
  	* 得到标注样式的double类型的属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimVarDouble(type: number): number;
  	/**
  	* 设置标注样式的double类型的属性。
  	* @example
  	* \`\`\`ts
   
  	* \`\`\`
  	*/
  	setDimVarDouble(type: number, value: number): boolean;
  	/**
  	* 得到标注样式的string类型的属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimVarString(type: number): string;
  	/**
  	* 设置标注样式的string类型的属性。
  	* @example
  	* \`\`\`ts
   
  	* \`\`\`
  	*/
  	setDimVarString(type: number, value: string): boolean;
  	/**
     * 得到标注样式的整数类型的属性。
     * @example
     * \`\`\`ts
     * \`\`\`
     */
  	getDimVarObjectId(type: number): McObjectId;
  	/**
  	* 设置标注样式的整数类型的属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimVarObjectId(type: number, value: McObjectId): boolean;
  	/**
  	* 得到标注样式的Dimblk属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimblk(): string;
  	/**
  	* 设置标注样式的Dimblk属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimblk(value: string): boolean;
  	/**
  	* 得到标注样式的Dimblk1属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimblk1(): string;
  	/**
  	* 设置标注样式的Dimblk1属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimblk1(value: string): boolean;
  	/**
  	* 得到标注样式的Dimblk2属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getDimblk2(): string;
  	/**
  	* 设置标注样式的Dimblk2属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimblk2(value: string): boolean;
  	/**
     * 得到标注样式的Dimldrblk属性。
     * @example
     * \`\`\`ts
     * \`\`\`
     */
  	getDimldrblk(): string;
  	/**
  	* 设置标注样式的Dimblk属性。
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setDimldrblk(value: string): boolean;
  }
  /**
   * 表示一个文字样式表记录对象，实现了对文字的属性相关操作函数。
   * @example
   * \`\`\`ts
   * // 添加文字样式
  	import { McCmColor, MxCpp, McDbTextStyleTableRecord, McDb } from "mxcad"
  
  	const mxcad = MxCpp.getCurrentMxCAD();
  	// 拿到当前文字样式表
  	const textSyleTable = mxcad.getDatabase().getTextStyleTable();
  	// 构造一个文字样式表记录对象
  	let newTextStyleRecord = new McDbTextStyleTableRecord();
  	// 设置对象文件名
  	newTextStyleRecord.fileName = "txt.shx";
  	// 设置对象大字体名称
  	newTextStyleRecord.bigFontFileName = "hztxt.shx";
  	// 设置对象文字大小
  	newTextStyleRecord.textSize = 10;
  	// 设置对象名
  	newTextStyleRecord.name = sMyTextStyle;
  	// 设置对象宽度因子
  	newTextStyleRecord.xScale = 0.7;
  	// 添加文字样式
  	const res = textSyleTable.add(newTextStyleRecord).isValid()
  	if (res) {
  	  console.log("add ok");
  	}
   * \`\`\`
   */
  export  class McDbTextStyleTableRecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置文字样式名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.name = "测试文字样式"
  	 * console.log(newTextStyleRecord.name) // 测试文字样式
  	 * \`\`\`
  	 */
  	get name(): string;
  	set name(val: string);
  	/**
  	 * 获取或设置文本样式是否使用形状字体
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.isShapeFile = false;
  	 * console.log(newTextStyleRecord.isShapeFile) // false
  	 * \`\`\`
  	 */
  	get isShapeFile(): boolean;
  	set isShapeFile(val: boolean);
  	/**
  	 * 获取或设置文本样式是否使用斜体
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.isVertical = false;
  	 * console.log(newTextStyleRecord.isVertical) // false
  	 * \`\`\`
  	 */
  	get isVertical(): boolean;
  	set isVertical(val: boolean);
  	/**
  	 * 文字大小(高度)
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.textSize = 20;
  	 * console.log(newTextStyleRecord.textSize) // 20
  	 * \`\`\`
  	 */
  	get textSize(): number;
  	set textSize(val: number);
  	/**
  	 *
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.xScale = 0.8;
  	 * console.log(newTextStyleRecord.xScale) // 0.8
  	 * \`\`\`
  	 */
  	get xScale(): number;
  	set xScale(val: number);
  	/**
  	 * 倾斜角度
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.obliquingAngle = Math.PI/4;
  	 * console.log(newTextStyleRecord.obliquingAngle) // 45
  	 * \`\`\`
  	 */
  	get obliquingAngle(): number;
  	set obliquingAngle(val: number);
  	/**
  	 * 获取或设置文本样式表记录的一组标志位
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * // 获取标志位的当前值
  	 * const currentFlagBits = newTextStyleRecord.flagBits;
  	 * console.log("当前标志位:", currentFlagBits);
  	 * // 设置新的标志位值
  	 * const newFlagBits = 0b101010; // 例如：使用二进制字面量来表示新的标志位值
  	 * newTextStyleRecord.flagBits = newFlagBits;
  	 * console.log("设置后的标志位:", newTextStyleRecord.flagBits);
  	 * \`\`\`
  	 */
  	get flagBits(): number;
  	set flagBits(val: number);
  	/**
  	 * 字体文件名称
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.fileName = "测试字体名";
  	 * console.log("当前字体文件名：",newTextStyleRecord.fileName)
  	 * \`\`\`
  	 */
  	get fileName(): string;
  	set fileName(val: string);
  	/**
  	 * 大字体文件名称
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.bigFontFileName = "测试";
  	 * console.log("大字体名称：",newTextStyleRecord.bigFontFileName)
  	 * \`\`\`
  	 */
  	get bigFontFileName(): string;
  	set bigFontFileName(val: string);
  	/**
  	 * 设置字体样式
  	 * @param sTypeface 字体名称
  	 * @param bold 是否粗体
  	 * @param italic 是否斜体
  	 * @param charset 字符集
  	 * @param pitchAndFamily 字体间距和风格
  	 * @returns 是否设置成功
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbTextStyleTableRecord } from 'mxcad';
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * // 设置字体
  	 * const typeface = "Arial"; // 字体名称
  	 * const isBold = true; // 是否粗体
  	 * const isItalic = false; // 是否斜体
  	 * const charset = 0; // 字符集
  	 * const pitchAndFamily = 0; // 字体间距和风格
  	 * const isSetFontSuccessful = newTextStyleRecord.setFont(typeface, isBold, isItalic, charset, pitchAndFamily);
  	 * // 检查设置是否成功
  	 * if (isSetFontSuccessful) {
  	 *  console.log("Font set successfully.");
  	 * } else {
  	 *  console.log("Failed to set font.");
  	 * }
  	 * \`\`\`
  	 */
  	setFont(sTypeface: string, bold: boolean, italic: boolean, charset: number, pitchAndFamily: number): boolean;
  	/**
  	 * 获取字体样式
  	 * @returns { object } sTypeface: 字体名称 | bold: 是否粗体 | italic: 是否斜体 | charset: 字符集 | pitchAndFamily: 字体间距和风格
  	 */
  	font(): {
  		sTypeface: string;
  		bold: boolean;
  		italic: boolean;
  		charset: number;
  		pitchAndFamily: number;
  	};
  }
  /**
   * 表示一个图层表记录对象，实现了对图层的属性相关操作函数。
   * @example
   * \`\`\`ts
   * //添加图层
   * import { McCmColor, MxCpp, McDbLayerTableRecord, McDb } from "mxcad"
   *
   * const mxcad = MxCpp.getCurrentMxCAD();
   * // 构造新图层表记录对象
   * const layer = new McDbLayerTableRecord()
   * // 设置图层颜色
   * layer.color = new McCmColor(0, 0, 0)
   * // 设置图层是否被冻结
   * layer.isFrozen = true
   * // 设置图层是否被锁定
   * layer.isLocked = true
   * // 设置图层是否被关闭
   * layer.isOff = true
   * // 设置图层线宽
   * layer.lineWeight = McDb.LineWeight.kLnWt018
   * // 设置图层名
   * layer.name = "图层名称"
   * // 获取当前图层表
   * const layerTable = mxcad.getDatabase().getLayerTable();
   * // 向图表中添加图层
   * const objId = layerTable.add(layer)
   * mxcad.updateDisplay()
   * \`\`\`
   */
  export  class McDbLayerTableRecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置图层名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.name = "测试图层";
  	 * console.log(layerRec.name)//测试图层
  	 * \`\`\`
  	 */
  	get name(): string;
  	set name(val: string);
  	/**
  	 * 获取或设置图层是否被冻结。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.isFrozen = true;
  	 * console.log(layerRec.isFrozen)//true
  	 * \`\`\`
  	 */
  	get isFrozen(): boolean;
  	set isFrozen(val: boolean);
  	/**
  	 * 获取或设置图层是否被关闭。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.isOff = true;
  	 * console.log(layerRec.isOff)//true
  	 * \`\`\`
  	 */
  	get isOff(): boolean;
  	set isOff(val: boolean);
  	/**
  	 * 获取或设置图层是否被锁定。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.isLocked = true;
  	 * console.log(layerRec.isLocked)//true
  	 * \`\`\`
  	 */
  	get isLocked(): boolean;
  	set isLocked(val: boolean);
  	/**
  	 * 获取或设置图层颜色。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord, McCmColor } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.color = new McCmColor(255,255,255);
  	 * console.log(layerRec.color) //(255,255,255)
  	 * \`\`\`
  	 */
  	get color(): McCmColor;
  	set color(val: McCmColor);
  	/**
  	 * 获取或设置图层线型对象 ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * console.log(layerRec.linetypeObjectId)
  	 * \`\`\`
  	 */
  	get linetypeObjectId(): McObjectId;
  	set linetypeObjectId(val: McObjectId);
  	/**
  	 * 获取或设置图层线宽。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbLayerTableRecord, McDb } from "mxcad";
  	 *
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.lineWeight = McDb.LineWeight.kLnWt015;
  	 * console.log(layerRec.lineWeight)//15
  	 * \`\`\`
  	 */
  	get lineWeight(): McDb.LineWeight;
  	set lineWeight(val: McDb.LineWeight);
  }
  /**
   * 表示数据库层表，所有图层信息都存放在层表中。
   * @example
   * \`\`\`ts
   * //获取所有图层
   * import { MxCpp, McDbLayerTable } from "mxcad"
   * // 获取当前cad对象的图层表
   * let layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
   * // 获取图层表中的所有记录对象ID
   * let aryId = layerTable.getAllRecordId();
   * // 遍历图层表记录对象
   * aryId.forEach((id) => {
   *     let layerRec = id.getMcDbLayerTableRecord();
   *     if (layerRec === null) return;
   *     console.log(layerRec);
   *     console.log("layerRec.color:" + layerRec.color.getColorString());
   *     console.log("layerRec.name:" + layerRec.name);
   * });
   * \`\`\`
   */
  export  class McDbLayerTable extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取层表中的所有图层记录的ID。
  	 * @param skipDeleted 是否跳过已删除图层。
  	 * @returns 图层ID数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLayerTable } from "mxcad";
  	 *
  	 * const layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
  	 * const aryId = layerTable.getAllRecordId();
  	 * console.log(aryId)
  	 * \`\`\`
  	 */
  	getAllRecordId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 向图层表中添加图层记录。
  	 * @param rec 图层表记录对象。
  	 * @returns 新增图层记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLayerTable } from "mxcad";
  	 *
  	 * const layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
  	 * const layerRec = new McDbLayerTableRecord();
  	 * const id = layerTable.add(layerRec);
  	 * \`\`\`
  	 */
  	add(rec: McDbLayerTableRecord): McObjectId;
  	/**
  	 * 查找图层表中的图层记录。
  	 * @param sName 图层名称。
  	 * @param skipDeleted 是否跳过已删除图层。
  	 * @returns 图层记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLayerTable } from "mxcad";
  	 *
  	 * const layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.name = "测试图层"
  	 * layerTable.add(layerRec);
  	 * const id = layerTable.get("测试图层")
  	 * \`\`\`
  	 */
  	get(sName: string, skipDeleted?: boolean): McObjectId;
  	/**
  	 * 检查图层表中是否存在指定名称的图层记录。
  	 * @param sName 图层名称。
  	 * @param skipDeleted 是否跳过已删除图层。
  	 * @returns 布尔值。
  	 * @example
  	 * \`\`\`ts
  	 * import {MxCpp, McDbLayerTable } from "mxcad";
  	 *
  	 * const layerTable:McDbLayerTable = MxCpp.getCurrentMxCAD().getDatabase().getLayerTable();
  	 * const layerRec = new McDbLayerTableRecord();
  	 * layerRec.name = "测试图层"
  	 * layerTable.add(layerRec);
  	 * const res = layerTable.has("测试图层");
  	 * console.log(res);
  	 * \`\`\`
  	 */
  	has(sName: string, skipDeleted?: boolean): boolean;
  }
  /**
   * 表示数据库线型表，所有的线型定义都存放在这里。
   * @example
   * \`\`\`ts
   * // 获取所有线型
   * import { MxCpp, McDbLinetypeTable } from "mxcad"
   * // 获取当前CAD对象
   * let mxcad = MxCpp.getCurrentMxCAD();
   * // 获取数据库线型表
   * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
   * // 获取线性表中的所有线型表记录对象ID
   * let aryId = linetypeTable.getAllRecordId();
   * // 遍历线型表记录对象
   * aryId.forEach((id) => {
   * let linetypeRec = id.getMcDbLinetypeTableRecord();
   * if (linetypeRec === null) return;
   * console.log(linetypeRec);
   * console.log("linetypeRec.name:" + linetypeRec.name);
   * });
   * \`\`\`
   */
  export  class McDbLinetypeTable extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取线型表中的所有线型记录的ID。
  	 * @param skipDeleted 是否跳过已删除线型。
  	 * @returns ret 线型ID数组。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLinetypeTable } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
  	 * \`\`\`
  	 */
  	getAllRecordId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 向线型表中添加线型记录。
  	 * @param rec 线型表记录对象。
  	 * @returns 新增线型记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLinetypeTable } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
  	 * let newLinetypeRecord = new McDbLinetypeTableRecord();
  	 * const id = linetypeTable.add(newLinetypeRecord);
  	 * console.log(id)
  	 * \`\`\`
  	 */
  	add(rec: McDbLinetypeTableRecord): McObjectId;
  	/**
  	 * 查找线型表中的线型记录。
  	 * @param sName 线型名称。
  	 * @param skipDeleted 是否跳过已删除线型。
  	 * @returns 线型记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLinetypeTable } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
  	 * let newLinetypeRecord = new McDbLinetypeTableRecord();
  	 * newLinetypeRecord.name = "TestMyLine";
  	 * linetypeTable.add(newLinetypeRecord);
  	 * const id = linetypeTable.get("TestMyLine")
  	 * \`\`\`
  	 */
  	get(sName: string, skipDeleted?: boolean): McObjectId;
  	/**
  	 * 检查线型表中是否存在指定名称的线型记录。
  	 * @param sName 线型名称。
  	 * @param skipDeleted 是否跳过已删除线型。
  	 * @returns 布尔值。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbLinetypeTable } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let linetypeTable: McDbLinetypeTable = mxcad.getDatabase().getLinetypeTable();
  	 * let newLinetypeRecord = new McDbLinetypeTableRecord();
  	 * newLinetypeRecord.name = "TestMyLine";
  	 * linetypeTable.add(newLinetypeRecord);
  	 * const res = linetypeTable.has("TestMyLine");
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	has(sName: string, skipDeleted?: boolean): boolean;
  }
  /**
   * 表示数据库注样式表，所有的注样式都存放在这里。
   * @example
   * \`\`\`ts
   * \`\`\`
   */
  export  class McDbDimStyleTable extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取所有的注样式。
  	 * @param skipDeleted 是否跳过已删除注样式。
  	 * @returns 注样式ID数组
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	getAllRecordId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 向标注样式表中添加标注样式记录。
  	 * @param rec 标注样式记录。
  	 * @returns 新增线型记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 */
  	add(rec: McDbDimStyleTableRecord): McObjectId;
  	/**
  	 * 查找标注样式表中的标注样式记录。
  	 * @param sName 标注样式名称。
  	 * @param skipDeleted 是否跳过已删除标注样式。
  	 * @returns 标注样式记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	get(sName: string, skipDeleted?: boolean): McObjectId;
  	/**
  	 * 检查找标注样式表中是否存在指定名称的找标注样式记录。
  	 * @param sName 找标注样式名称。
  	 * @param skipDeleted 是否跳过已删除找标注样式。
  	 * @returns 布尔值。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	has(sName: string, skipDeleted?: boolean): boolean;
  }
  /**
   * 表示数据库文字样式表。
   * @example
   * \`\`\`ts
   * // 获取所有文字样式
   * import { MxCpp, McDbTextStyleTable } from "mxcad"
   * // 获取当前CAD对象
   * let mxcad = MxCpp.getCurrentMxCAD();
   * // 获取数据库文字样式表
   * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
   * // 获取文字样式表中的所有文字样式表记录对象ID
   * let aryId = textSyleTable.getAllRecordId();
   * // 遍历文字样式表记录对象
   * aryId.forEach((id) => {
   *     let textSyleRec = id.getMcDbTextStyleTableRecord();
   *     if (textSyleRec === null) return;
   *     console.log(textSyleRec);
   *     console.log("textSyleRec.fileName:" + textSyleRec.fileName);
   *     console.log("textSyleRec.name:" + textSyleRec.name);
   * });
   * \`\`\`
   */
  export  class McDbTextStyleTable extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取文字样式表中的所有文字样式记录的ID。
  	 * @param skipDeleted 是否跳过已删除文字样式。
  	 * @returns ret 文字样式ID数组。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbTextStyleTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
  	 * const aryId = textSyleTable.getAllRecordId();
  	 * console.log(aryId)
  	 * \`\`\`
  	 */
  	getAllRecordId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 向文字样式表中添加文字样式记录。
  	 * @param rec 文字样式表记录对象。
  	 * @returns 新增文字样式记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbTextStyleTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * const id = textSyleTable.add(newTextStyleRecord);
  	 * console.log(id)
  	 * \`\`\`
  	 */
  	add(rec: McDbTextStyleTableRecord): McObjectId;
  	/**
  	 * 查找文字样式表中的文字样式记录。
  	 * @param sName 文字样式名称。
  	 * @param skipDeleted 是否跳过已删除文字样式。
  	 * @returns 文字样式记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbTextStyleTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.name = "测试文字样式";
  	 * textSyleTable.add(newTextStyleRecord);
  	 * const objId = textSyleTable.get("测试文字样式")
  	 * \`\`\`
  	 */
  	get(sName: string, skipDeleted?: boolean): McObjectId;
  	/**
  	 * 检查文字样式表中是否存在指定名称的文字样式记录。
  	 * @param sName 文字样式名称。
  	 * @param skipDeleted 是否跳过已删除文字样式。
  	 * @returns 布尔值。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbTextStyleTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let textSyleTable: McDbTextStyleTable = mxcad.getDatabase().getTextStyleTable();
  	 *
  	 * const newTextStyleRecord = new McDbTextStyleTableRecord();
  	 * newTextStyleRecord.name = "测试文字样式";
  	 * textSyleTable.add(newTextStyleRecord);
  	 * const res = textSyleTable.has("测试文字样式");
  	 * console.log(res)// true
  	 * \`\`\`
  	 */
  	has(sName: string, skipDeleted?: boolean): boolean;
  }
  /**
   * 表示数据库，图形中的所有信息都存放在该对象中，调用mxcad.getDatabase()函数得到控件的数据库。
   */
  export  class McDbDatabase extends McRxObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 得到UCS用户坐标系变换矩阵
  	 * @example
  	 */
  	get ucsMatrix(): McGeMatrix3d;
  	/**
  	* 设置UCS用户坐标系变换矩阵
  	* @example
  	*/
  	set ucsMatrix(val: McGeMatrix3d);
  	/**
  	 * 获取层表。
  	 * @returns 层表。
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADUiPrEntity, MxCpp } from "mxcad";
  	   //隐藏目标对象所在图层
  	   async function Mx_SelectEntitHideLayer() {
  		  let selEntity1 = new MxCADUiPrEntity();
  
  		  selEntity1.setMessage("选择要隐藏的对象")
  		  let id = await selEntity1.go();
  		  if (!id.isValid()) return;
  
  		  let ent = id.getMcDbEntity();
  		  let mxcad = MxCpp.getCurrentMxCAD();
  		  let layerTable = mxcad.getDatabase().getLayerTable();
  		  let layerId = layerTable.get(ent.layer);
  		  let layerRec = layerId.getMcDbLayerTableRecord();
  		  if (layerRec === null) return;
  		  layerRec.isOff = true;
  		  mxcad.updateLayerDisplayStatus();
  		  mxcad.updateDisplay()
  		}
  	 * \`\`\`
  	 */
  	getLayerTable(): McDbLayerTable;
  	/**
  	 * 写块
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	wblock(database: McDbDatabase, aryId: McObjectId[], ptBase?: McGePoint3d): boolean;
  	/**
  	 * 插入图块
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	insert(database: McDbDatabase, sBlkName: string): McObjectId;
  	/**
  	 * 读取文件。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	readFile(sFilePath: string): boolean;
  	/**
  	 * 保存文件。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	saveAs(sFilePath: string): boolean;
  	/**
  	 * 获取层表
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let layerTable = dataBase.layerTable;
  	 * \`\`\`
  	 */
  	get layerTable(): McDbLayerTable;
  	/**
  	 * 获取线型表。
  	 * @returns 线型表。
  	 * @example
  	 * \`\`\`ts
  		import { MxCpp } from "mxcad"
  		//得所有线型
  		let mxcad = MxCpp.App.getCurrentMxCAD();
  		let linetypeTable = mxcad.getDatabase().getLinetypeTable();
  		let aryId = linetypeTable.getAllRecordId();
  		aryId.forEach((id) => {
  			let linetypeRec = id.getMcDbLinetypeTableRecord();
  			if (linetypeRec === null) return;
  			console.log(linetypeRec);
  		});
  	 * \`\`\`
  	 */
  	getLinetypeTable(): McDbLinetypeTable;
  	/**
  	* 获取标注样式表。
  	* @returns 线型表。
  	*/
  	getDimStyleTable(): McDbDimStyleTable;
  	/**
  	 * 获取标注样式表。
  	 * @returns 线型表。
  	 */
  	get dimStyleTable(): McDbDimStyleTable;
  	/**
  	 * 获取线型表
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let lineTypeTable = dataBase.linetypeTable;
  	 * \`\`\`
  	 */
  	get linetypeTable(): McDbLinetypeTable;
  	/**
  	 * 获取文字样式表。
  	 * @returns 文字样式表。
  	 * @example
  	 * \`\`\`ts
  	  //获取所有文字样式
  	  import { MxCpp } from "mxcad"
  	  let mxcad = MxCpp.getCurrentMxCAD();
  	  let textSyleTable = mxcad.getDatabase().getTextStyleTable();
  	  let aryId = textSyleTable.getAllRecordId();
  	  aryId.forEach((id) => {
  		  let textSyleRec = id.getMcDbTextStyleTableRecord();
  		  if (textSyleRec === null) return;
  		  let out: any = {};
  		  out.name = textSyleRec.name;
  		  out.font = textSyleRec.font();
  		  out.fileName = textSyleRec.fileName;
  		  out.bigFontFileName = textSyleRec.bigFontFileName;
  		  out.textSize = textSyleRec.textSize;
  		  out.xScale = textSyleRec.xScale;
  		  console.log(out);
  	  });
  	 * \`\`\`
  	 */
  	getTextStyleTable(): McDbTextStyleTable;
  	/**
  	 * 获取文字样式表
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let textStyleTable = dataBase.textStyleTable;
  	 * \`\`\`
  	 */
  	get textStyleTable(): McDbTextStyleTable;
  	/**
  	 * 获取块表。
  	 * @returns 块表。
  	 * @example
  	 * \`\`\`ts
  	   import { MxCpp, McDbDatabase } from "mxcad"
  	   let mxcad = MxCpp.App.getCurrentMxCAD();
  	   let blockTable = mxcad.getDatabase().getBlockTable();
  	   let aryId = blockTable.getAllRecordId();
  	   aryId.forEach((id) => {
  		   let blkRec = id.getMcDbBlockTableRecord();
  		   if (blkRec === null) return;
  		   console.log(blkRec);
  		   console.log("blkRec.name:" + blkRec.name);
  		   console.log("blkRec.origin:" + blkRec.origin);
  	   });
  	 * \`\`\`
  	 */
  	getBlockTable(): McDbBlockTable;
  	/**
  	 * 得到图纸的字典对象。
  	 * @returns McDbDictionary
  	 * @example
  	 * \`\`\`ts
  	   import { MxCpp, McDbDatabase } from "mxcad"
  	   // 写扩展记录
  	   let mxcad = MxCpp.getCurrentMxCAD();
  	   let dict = mxcad.getDatabase().getNamedObjectsDictionary();
  
  	   let sName = "MyDict";
  	   let idDict = dict.getAt(sName);
  	   if (idDict.isNull()) {
  		   let newDict = new McDbDictionary;
  		   idDict = dict.addObject(sName, newDict);
  		}
  		let myDict = idDict.getMcDbDictionary();
  		if (myDict) {
  
  			let xrec = new McDbXrecord();
  			let data = new MxCADResbuf();
  			data.AddString("TestData");
  			xrec.setData(data);
  			myDict.addObject("MyRecord", xrec);
  			console.log("write xrecord ok");
  		}
  	 * \`\`\`
  	 */
  	getNamedObjectsDictionary(): McDbDictionary;
  	/**
     * 得到对象所在组中的所有对象id
     * @returns McDbDictionary
     */
  	getEntitiesInTheGroup(id: McObjectId): McObjectId[];
  	/**
  	* 得到图纸的组字典对象。
  	* @returns McDbDictionary
  	*/
  	GetGroupDictionary(): McDbDictionary;
  	/**
  	 * 把一堆对象创建一个组
  	 * @returns boolean
  	 * @example
  	 * \`\`\`ts
  	 async function Mx_Test_CreateGroup(){
  		let ss = new MxCADSelectionSet();
  		if (!await ss.userSelect("选择要做成组的对象:")) return;
  		if (ss.count() == 0) return;
  		let mxcad = MxCpp.getCurrentMxCAD();
  		mxcad.getDatabase().CreateGroup(ss.getIds(),"GroupName");
  
  		let idGroup = mxcad.database.GetGroupDictionary().getAt("GroupName");
  		let group = idGroup.getMcDbGroup();
  		if(group){
  			console.log(group.getAllEntityId());
  		}
  	 }
  	 * \`\`\`
  	 */
  	CreateGroup(ids: McObjectId[], name?: string): boolean;
  	/**
  	 * 获取块表
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let blkTable = dataBase.blockTable;
  	 * \`\`\`
  	 */
  	get blockTable(): McDbBlockTable;
  	/**
  	 *返回当前空间块表记录
  	 * @returns 块表记录
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let currentBlkRec = dataBase.currentSpace;
  	 * \`\`\`
  	 */
  	get currentSpace(): McDbBlockTableRecord;
  	/**
  	 * 获取当前线型比例。
  	 * @returns 当前线型比例。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * let currentLTS = dataBase.getCurrentlyLineTypeScale();
  	 * \`\`\`
  	 */
  	getCurrentlyLineTypeScale(): number;
  	/**
  	 * 设置当前线型比例。
  	 * @param val 线型比例。
  	 * @returns 当前线型比例。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * dataBase.setCurrentlyLineTypeScale(0.8);
  	 * \`\`\`
  	 */
  	setCurrentlyLineTypeScale(val: number): number;
  	/**
  	 * 获取当前线型名称。
  	 * @returns 当前线型名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const name = dataBase.getCurrentlyLineTypeName();
  	 * \`\`\`
  	 */
  	getCurrentlyLineTypeName(): string;
  	/**
  	 * 设置当前线型名称。
  	 * @param sName 线型名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * dataBase.setCurrentlyLineTypeName("测试线型");
  	 * \`\`\`
  	 */
  	setCurrentlyLineTypeName(sName: string): void;
  	/**
  	 * 获取当前层名称。
  	 * @returns 当前层名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const layerName = dataBase.getCurrentlyLayerName();
  	 * \`\`\`
  	 */
  	getCurrentlyLayerName(): string;
  	/**
  	 * 设置当前层名称。
  	 * @param sName 层名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * dataBase.setCurrentlyLayerName("测试图层");
  	 * \`\`\`
  	 */
  	setCurrentlyLayerName(sName: string): void;
  	/**
  	 * 获取当前CAD颜色。
  	 * @returns 当前CAD颜色。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const color = dataBase.getCurrentlyTrueColor();
  	 * \`\`\`
  	 */
  	getCurrentlyTrueColor(): McCmColor;
  	/**
  	 * 获取当前绘图使用的颜色
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const color = dataBase.getCurrentlyDrawColor();
  	 * \`\`\`
  	 */
  	getCurrentlyDrawColor(): THREE.Color;
  	/**
  	 * 设置当前CAD颜色。
  	 * @param color CAD颜色。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase, McCmColor } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const color = new McCmColor(255, 0, 0);
  	 * dataBase.setCurrentlyTrueColor(color);
  	 * \`\`\`
  	 */
  	setCurrentlyTrueColor(color: McCmColor): any;
  	/**
  	 * 获取当前颜色索引。
  	 * @returns 当前颜色索引（ColorIndexType）。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const colorIndex = dataBase.getCurrentlyColorIndex();
  	 * \`\`\`
  	 */
  	getCurrentlyColorIndex(): number;
  	/**
  	 * 设置当前颜色索引（ColorIndexType）。
  	 * @param colorIndex 颜色索引。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const colorIndex = dataBase.getCurrentlyColorIndex();
  	 * \`\`\`
  	 */
  	setCurrentlyColorIndex(colorIndex: number): any;
  	/**
  	 * 获取当前文字样式名称。
  	 * @returns 当前文字样式名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const textStyName = dataBase.getCurrentlyTextStyleName();
  	 * \`\`\`
  	 */
  	getCurrentlyTextStyleName(): string;
  	/**
  	 * 设置当前文字样式名称。
  	 * @param sName 文字样式名称。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * dataBase.setCurrentlyTextStyle("测试文字样式");
  	 * \`\`\`
  	 */
  	setCurrentlyTextStyle(sName: string): void;
  	/**
  	* 返回当前使用的线重.
  	*/
  	getCurrentlyLineWeight(): McDb.LineWeight;
  	/**
  	* 设置当前使用的线重.
  	*/
  	setCurrentlyLineWeight(lineWeight: McDb.LineWeight): void;
  	/**
  	* 返回当前文字样式id.
  	*/
  	getCurrentlyTextStyleId(): McObjectId;
  	/**
  	* 设置当前文字样式id.
  	*/
  	SetCurrentlyTextStyleId(id: McObjectId): boolean;
  	/**
  	* 返回当前标注样式id.
  	*/
  	getCurrentlyDimStyleId(): McObjectId;
  	/**
  	* 设置当前标注样式id.
  	*/
  	setCurrentlyDimStyleId(id: McObjectId): boolean;
  	/**
  	  * 返回当前层id.
  	  */
  	getCurrentlyLayerId(): McObjectId;
  	/**
  	* 设置当前标注样式id.
  	*/
  	setCurrentlyLayerId(id: McObjectId): boolean;
  	/**
  	 * 返回当前线型id.
  	 */
  	getCurrentlyLinetypeId(): McObjectId;
  	/**
  	* 设置当前标注样式id.
  	*/
  	setCurrentlyLinetypeId(id: McObjectId): boolean;
  	/**
  	 * 根据对象的句柄返回对象id.
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * // 传入句柄并获取相应的对象 ID
  	 * const handle = "ABCD1234"; // 假设这是一个有效的句柄
  	 * const objectId = dataBase.handleToIdIndex(handle);
  	 * // 确保获取的对象 ID 是有效的
  	 * if (objectId) {
  	 *   console.log("success", objectId);
  	 * } else {
  	 *   console.log("error")
  	 * }
  	 * \`\`\`
  	 */
  	handleToIdIndex(sHandle: string): McObjectId;
  	/**
  	 * 当前数据库是否被修改
  	 * @return 返回布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * const res = dataBase.isModifyed();
  	 * if(res){
  	 *   console.log("已修改")
  	 * }else{
  	 *   console.log("未修改")
  	 * }
  	 * \`\`\`
  	 */
  	isModifyed(): boolean;
  	/**
  	 * 把当前数据库修改状态重置成未修改状态
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDatabase } from "mxcad"
  	 *
  	 * const dataBase:McDbDatabase = MxCpp.getCurrentMxCAD().getDatabase();
  	 * dataBase.resetModificationStatus();
  	 * \`\`\`
  	 */
  	resetModificationStatus(): void;
  }
  /**
   * 数据库的块表记录对象，实现了对图块的属性相关操作函数。
   * @example
   * \`\`\`ts
  	// 添加图块
  	import { MxCpp, McDbBlockTableRecord, McDbBlockReference, McDbLine, McCmColor } from "mxcad"
  
  	let mxcad = MxCpp.getCurrentMxCAD();
  	let blkTable =  mxcad.getDatabase().getBlockTable();
  	let blkRecId = blkTable.add(new McDbBlockTableRecord());
  
  	// 根据ObjectId再次得到刚刚添加的图块记录
  	let blkTableRecord:McDbBlockTableRecord = blkRecId.getMcDbBlockTableRecord()
  
  	// 添加两条线段再图块记录中 这里每条线段的具体属性比如开始点和结束点自行赋值
  	const line = new McDbLine(80, 80, 0, -80, -80, 0)
  	line.trueColor = new McCmColor(255, 0, 0)
  	const line1 = new McDbLine(-80, 80, 0, 80, -80, 0)
  	blkTableRecord.appendAcDbEntity(line);
  	blkTableRecord.appendAcDbEntity(line1);
  
  	// 设置图块的基点 一般是包围盒内的点， 可以任意指定
  	blkTableRecord.origin = new McGePoint3d(0,0,0);
  
  	// 实例化块参照 这里需要设置我们刚刚添加图块记录得到的ObjectId
  	let blkRef = new McDbBlockReference();
  	blkRef.blockTableRecordId = blkRecId;
  	// 最后设置位置 渲染图块
  	blkRef.position = new McGePoint3d(0,0,0);
  
  	mxcad.drawEntity(blkRef);
   * \`\`\`
   * \`\`\`ts
  	// 改块颜色
  	import { McDbBlockTableRecord, MxCADResbuf, MxCpp, McCmColor} from "mxcad";
  	
  	async function Mx_BlkColor() {
  		// 选择目标块
  		let filter = new MxCADResbuf();
  		filter.AddMcDbEntityTypes("INSERT");// 设置过滤器，选择块对象
  		const getBlockEvent = new MxCADUiPrEntity()
  		getBlockEvent.setMessage('选择需要修改基点的块');
  		getBlockEvent.setFilter(filter);
  		const block_id = await getBlockEvent.go();
  		if (!block_id.id) return;
  		// 块实体
  		const blkRef = block_id.getMcDbEntity() as McDbBlockReference;
  		let blkRec = blkRef.blockTableRecordId.getMcDbBlockTableRecord();
  		Mx_ModyfBlockRecordEntityColor(blkRec);// 设置块颜色类型为随块
  
  		// 设置块颜色
  		const getColor = new MxCADUiPrInt();
  		getColor.setMessage('输入颜色索引(0~256)');
  		let colorNum = await getColor.go() || 0;
  		let color = new McCmColor();
  		color.setColorIndex(colorNum);
  		blkRef.trueColor = color;
  		const mxcad = MxCpp.getCurrentMxCAD();
  		mxcad.updateDisplay()
  	}
  	// 设置块颜色类型
  	function Mx_ModyfBlockRecordEntityColor(blkRec: McDbBlockTableRecord) {
  		blkRec.getAllEntityId().forEach(id => {
  			let ent = id.getMcDbEntity();
  			ent.colorIndex = ColorIndexType.kByblock;
  			if (ent instanceof McDbBlockReference) {
  				let blkref = ent as McDbBlockReference;
  				Mx_ModyfBlockRecordEntityColor(blkref.blockTableRecordId.getMcDbBlockTableRecord());
  			}
  		})
  	}
   * \`\`\`
   */
  export  class McDbBlockTableRecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbBlockTableRecord } from "mxcad";
  	 *
  	 * const blkRec = new McDbBlockTableRecord();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 给图块添加对应实体
  	 * @param pEntity 实体
  	 * @returns 对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbBlockTableRecord, McDbLine } from "mxcad";
  	 *
  	 * const line = new McDbLine(-80, 80, 0, 80, -80, 0);
  	 * const blkRec = new McDbBlockTableRecord();
  	 * const objId = blkRec.appendAcDbEntity(line)
  	 * \`\`\`
  	 */
  	appendAcDbEntity(pEntity: McDbEntity): McObjectId;
  	/**
  	 * 获取图块中所有实体的对象ID
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbBlockTableRecord, McDbLine } from "mxcad";
  	 *
  	 * const line = new McDbLine(-80, 80, 0, 80, -80, 0);
  	 * const blkRec = new McDbBlockTableRecord();
  	 * blkRec.appendAcDbEntity(line);
  	 * const aryId = blkRec.getAllEntityId();
  	 * console.log(aryId)
  	 * \`\`\`
  	 */
  	getAllEntityId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 返回块表记录中所有对象的最小，最大显示顺序.
  	 * @return { object } minDrawOrder: 最小显示顺序 | maxDrawOrder: 最大显示顺序
  	 * @example
  	 * \`\`\`ts
  	 * // 获取最小和最大绘制顺序
  	 * const { minDrawOrder, maxDrawOrder } = blkRec.getMinMaxDrawOrder();
  	 *
  	 * // 打印结果
  	 * console.log("最小绘制顺序:", minDrawOrder);
  	 * console.log("最大绘制顺序:", maxDrawOrder);
  	 * \`\`\`
  	 */
  	getMinMaxDrawOrder(): {
  		minDrawOrder: number;
  		maxDrawOrder: number;
  	};
  	/**
  	 * 图块原点
  	 * @return 三维点向量
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbBlockTableRecord, McGePoint3d } from "mxcad";
  	 *
  	 * const blkRec = new McDbBlockTableRecord();
  	 * blkRec.origin = new McGePoint3d(0,0,0);
  	 * console.log("图块原点", blkRec.origin)//(0,0,0)
  	 * \`\`\`
  	 */
  	get origin(): McGePoint3d;
  	set origin(origin: McGePoint3d);
  	/**
  	 * 得到图块最小外包，获取图块的最大点和最小点
  	 * @returns { object }  minPt:最小点 | maxPt:最大点 | ret:是否获取成功
  	 * @example
  	 * \`\`\`ts
  	 * // 假设blkRec为一个有效的块表记录对象
  	 * const retVal = blkRec.getBoundingBox();
  	 * if(retVal.ret){
  	 *   console.log("最小点", retVal.minPt);
  	 *   console.log("最大点", retVal.maxPt);
  	 * }else{
  	 *   console.log("error")
  	 * }
  	 * \`\`\`
  	 */
  	getBoundingBox(): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 使边界框缓冲区无效化，强制重新计算或更新边界框信息
  	 * @example
  	 * \`\`\`ts
  	 * // 假设blkRec为一个有效的块表记录对象
  	 * blkRec.invalidBoundingBoxBuffer()
  	 * \`\`\`
  	 */
  	invalidBoundingBoxBuffer(): void;
  	/**
  	 * 获取或设置名称。
  	 * @example
  	 * \`\`\`ts
  	 * // 假设blkRec为一个有效的块表记录对象
  	 * blkRec.name = "测试图块名";
  	 * console.log(blkRec.name);//测试图块名
  	 * \`\`\`
  	 */
  	get name(): string;
  	set name(val: string);
  }
  /**
   * 数据库中的块表类，块表中存放着块表记录。
   * @example
   * \`\`\`ts
   * //遍历图纸中的所有图块
   * import { MxCpp, McDbBlockTable } from "mxcad"
   *
   * // 获取当前cad对象
   * let mxcad = MxCpp.App.getCurrentMxCAD();
   * // 获取块表对象
   * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
   * // 获取块表中的所有记录对象id
   * let aryId = blockTable.getAllRecordId();
   * //遍历记录对象id，获取块表记录对象详情
   * aryId.forEach((id) => {
   * let blkRec = id.getMcDbBlockTableRecord();
   * if (blkRec === null) return;
   *     console.log(blkRec);
   *     console.log("blkRec.name:" + blkRec.name);
   *     console.log("blkRec.origin:" + blkRec.origin);
   * });
   * \`\`\`
   */
  export  class McDbBlockTable extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取块表中的所有图块记录的ID。
  	 * @param skipDeleted 是否跳过已删除图块记录。
  	 * @returns ret 图块记录ID数组。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbBlockTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.App.getCurrentMxCAD();
  	 * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
  	 * const aryId = blockTable.getAllRecordId();
  	 * console.log(aryId)
  	 * \`\`\`
  	 */
  	getAllRecordId(skipDeleted?: boolean): McObjectId[];
  	/**
  	 * 向块表中添加图块记录。
  	 * @param rec 图块记录对象。
  	 * @returns 新增图块记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbBlockTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.App.getCurrentMxCAD();
  	 * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
  	 * const blkRec = new McDbBlockTableRecord();
  	 * const objId = blockTable.add(blkRec);
  	 * \`\`\`
  	 */
  	add(rec: McDbBlockTableRecord | string): McObjectId;
  	/**
  	 * 查找块表中的图块记录。
  	 * @param sName 图块记录名称。
  	 * @param skipDeleted 是否跳过已删除图块记录。
  	 * @returns 图块记录对象ID。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbBlockTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.App.getCurrentMxCAD();
  	 * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
  	 * const blkRec = new McDbBlockTableRecord();
  	 * blkRec.name = "测试图块";
  	 * blockTable.add(blkRec);
  	 * const objId = blockTable.get("测试图块");
  	 * \`\`\`
  	 */
  	get(sName: string, skipDeleted?: boolean): McObjectId;
  	/**
  	 * 检查块表中是否存在指定名称的图块记录。
  	 * @param sName 图块记录名称。
  	 * @param skipDeleted 是否跳过已删除图块记录。
  	 * @returns 布尔值。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbBlockTable } from "mxcad"
  	 *
  	 * let mxcad = MxCpp.App.getCurrentMxCAD();
  	 * let blockTable: McDbBlockTable = mxcad.getDatabase().getBlockTable();
  	 * const blkRec = new McDbBlockTableRecord();
  	 * blkRec.name = "测试图块";
  	 * blockTable.add(blkRec);
  	 * const res = blockTable.has("测试图块");
  	 * console.log(res)
  	 * \`\`\`
  	 */
  	has(sName: string): boolean;
  }
  /**
   * 光栅图片类，该类用于在CAD中显示光栅图形
   */
  export  class McDbRasterImageDef extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbRasterImageDef } from "mxcad";
  	 *
  	 * const imageDef = new McDbRasterImageDef()
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取或设置栅格图像文件的路径。
  	 * @param sPathName 文件的路径
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbRasterImageDef } from "mxcad";
  	 *
  	 * const imageDef = new McDbRasterImageDef();
  	 * imageDef.sourceFileName = "../example.jpg";
  	 * const pathName = imageDef.sourceFileName;
  	 * console.log("文件路径:", pathName);
  	 * \`\`\`
  	 */
  	set sourceFileName(sPathName: string);
  	get sourceFileName(): string;
  	/**
  	 * 将栅格图像保存为 Base64 编码的字符串
  	 * @param sUrl 格栅图像路径
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbRasterImageDef } from "mxcad";
  	 *
  	 * const imageDef = new McDbRasterImageDef();
  	 * const res = imageDef.saveToBase64("../example.jpg");
  	 * if(res){
  	 *   //保存成
  	 * }else{
  	 *   //保存失败
  	 * }
  	 * \`\`\`
  	 */
  	saveToBase64(sUrl: string): boolean;
  }
  /**
   * 数据库中的字典类，用户的自定义数据可以存放在字典中，它可以理解一个映射表，字符串是关键字，可以映射到任何一个对象。字典中可以再包含字典。
   * @example
   * \`\`\`ts
   * import { McDbDictionary, McDbXrecord } from "mxcad"
   *
   * //遍历字典
   * function MxTest_GetNamedObjectsDictionary() {
   *   // 获取当前CAD对象
   *   let mxcad = MxCpp.getCurrentMxCAD();
   *   // 获取数据库中的字典对象
   *   let dict = mxcad.getDatabase().getNamedObjectsDictionary();
   *   // 获取字典中所有的对象名
   *   let aryName = dict.getAllObjectName();
   *   // 遍历对象名
   *   aryName.forEach((name) => {
   *     console.log(name);
   *     let id = dict.getAt(name);
   *     let obj = id.getMcDbObject();
   *     if (obj instanceof McDbDictionary) {
   *       let dict: McDbDictionary = obj;
   *       console.log(dict);
   *       MxTest_DictionaryData(dict);// 递归遍历字典对象
   *     }
   *   })
   * }
   *
   * function MxTest_DictionaryData(dict: McDbDictionary) {
   *   let aryName = dict.getAllObjectName();
   *   aryName.forEach((name) => {
   *     console.log(name);
   *     let id = dict.getAt(name);
   *     let obj = id.getMcDbObject();
   *     if (obj instanceof McDbDictionary) {
   *       let dict: McDbDictionary = obj;
   *       console.log(dict);
   *       MxTest_DictionaryData(dict);
   *     }
   *     else if (obj instanceof McDbXrecord) {
   *       let xrec: McDbXrecord = obj;
   *       let data = xrec.getData()
   *       data.PrintData();
   *     }
   *   })
   * }
   * \`\`\`
   */
  export  class McDbDictionary extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	 * 获取字典中的所有对象。
  	 * @returns 对象ID数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDictionary } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let dict:McDbDictionary = mxcad.getDatabase().getNamedObjectsDictionary();
  	 * const aryId = dict.getAllObject();
  	 * console.log(aryId);
  	 * \`\`\`
  	 */
  	getAllObject(): McObjectId[];
  	/**
  	 * 获取字典中所有的对象名。
  	 * @returns 对象名数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDictionary } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let dict:McDbDictionary = mxcad.getDatabase().getNamedObjectsDictionary();
  	 * const aryName = dict.getAllObjectName();
  	 * console.log(aryName);
  	 * \`\`\`
  	 */
  	getAllObjectName(): McGeStringArray;
  	/**
  	 * 移除指定对象
  	 * @param sName 对象名称
  	 * @returns 布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDictionary } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let dict:McDbDictionary = mxcad.getDatabase().getNamedObjectsDictionary();
  	 * const res = dict.remove("测试字典");
  	 * if(res){
  	 *   //移除成功
  	 * }else{
  	 *   //移除失败
  	 * }
  	 * \`\`\`
  	 */
  	remove(sName: string): boolean;
  	/**
  	 * 向字典中添加对象
  	 * @param sName 对象名称
  	 * @param obj 对象
  	 * @returns 对象ID
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDictionary, McDbObject } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let dict:McDbDictionary = mxcad.getDatabase().getNamedObjectsDictionary();
  	 * const objectId = dict.addObject("newObject", new McDbObject());
  	 * \`\`\`
  	 */
  	addObject(sName: string, obj: McDbObject): McObjectId;
  	/**
  	 * 获取字典中指定对象
  	 * @param sName 对象名称
  	 * @param isGetErased 是否获取已删除的对象
  	 * @returns 对象ID
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDbDictionary } from "mxcad";
  	 *
  	 * let mxcad = MxCpp.getCurrentMxCAD();
  	 * let dict:McDbDictionary = mxcad.getDatabase().getNamedObjectsDictionary();
  	 * const objId = dict.getAt("测试字典");
  	 * \`\`\`
  	 */
  	getAt(sName: string, isGetErased?: boolean): McObjectId;
  	/**
  	* 修改字典中key的值，到新的值，如果新的值，在字典中已经存在，就会设置失败。
  	* sNewName为空，会自动创建一个匿名名称。
  	* @returns 是否成功
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setName(sOldName: string, sNewName: string): boolean;
  }
  /**
   * 扩展记录类型，实体可以设置它的扩展记录，用于存放更多的信息。
   * @example
   * \`\`\`ts
   * // 写扩展记录
   * import { MxCpp, McDbDictionary, McDbXrecord, MxCADResbuf } from "mxcad"
   * // 获取当前CAD对象的字典对象
   * let mxcad = MxCpp.getCurrentMxCAD();
   * let dict = mxcad.getDatabase().getNamedObjectsDictionary();
   * // 获取字典中指定对象"MyDict"
   * let sName = "MyDict";
   * let idDict = dict.getAt(sName);
   * if (idDict.isNull()) {
   *    // 向字典中添加对象
   *    let newDict = new McDbDictionary;
   *    idDict = dict.addObject(sName, newDict);
   * }
   * let myDict = idDict.getMcDbDictionary();
   * if (myDict) {
   *    let xrec = new McDbXrecord();// 构造新扩展记录类型
   *    let data = new MxCADResbuf();// 构造resbuf对象
   *    data.AddString("TestData");// 添加字符串到 resbuf 中
   *    xrec.setData(data);// 设置扩展记录中的数据
   *    myDict.addObject("MyRecord", xrec); // 向字典中添加对象
   *    console.log("write xrecord ok");
   * }
   *
   * // 读取扩展数据。
   * async function MxTest_ReadxData() {
   *   // 选择目标对象
   *   let selEntity = new MxCADUiPrEntity();
   *   selEntity.setMessage("选择对象");
   *   let id = await selEntity.go();
   *   if (!id.isValid()) return;
   *   // 获取实例对象
   *   let ent = id.getMcDbEntity();
   *   if (ent === null) return;
   *   // 读取扩展数据
   *   let data = ent.getxData();
   *   data.forEach((val, type, dxf) => {
   *     console.log(JSON.stringify({ val: val, type: type, dxf: dxf }));
   *   })
   *
   *   //let data = ent.getxDataString("DataName");
   *   //MxFun.acutPrintf(data.val + "\\n");
   * }
   * \`\`\`
   */
  export  class McDbXrecord extends McDbObject {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbXrecord } from "mxcad";
  	 *
  	 * // 创建一个 McDbXrecord 对象
  	 * const xrec = new McDbXrecord();
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	 * 设置扩展记录中的数据。
  	 * @param xdata resbuf 数据
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbXrecord } from "mxcad";
  	 *
  	 * // 创建一个 McDbXrecord 对象
  	 * const xrec = new McDbXrecord();
  	 * let data = new MxCADResbuf();
  	 * data.AddString("TestData");
  	 * const res = xrec.setData(data);
  	 * if(res){
  	 *   //设置成功
  	 * }else{
  	 *   //设置失败
  	 * }
  	 * \`\`\`
  	 */
  	setData(xdata: MxCADResbuf): boolean;
  	/**
  	  * 获取扩展记录中的数据。
  	  * @param xdata resbuf 数据
  	  * @example
  	  * \`\`\`ts
  	  * import { McDbXrecord } from "mxcad";
  	  *
  	  * // 创建一个 McDbXrecord 对象
  	  * const xrec = new McDbXrecord();
  	  * const resbuf = dbXrecord.getData();
  	  * \`\`\`
  	  */
  	getData(): MxCADResbuf;
  }
  /**
   * 组对象
   * @example
   * \`\`\`ts
   *   选择一堆对象，把他们创建到一个组中 。
   *   let ss = new MxCADSelectionSet();
   *   if (!await ss.userSelect("选择要做成组的对象:")) return;
   *   if (ss.count() == 0) return;
   *   let mxcad = MxCpp.getCurrentMxCAD();
   *   mxcad.getDatabase().CreateGroup(ss.getIds());
   * \`\`\`
   */
  export  class McDbGroup extends McDbObject {
  	/**
  	* 构造函数。
  	*/
  	constructor(imp?: any);
  	/**
  	 * 说明内容
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	set description(description: string);
  	get description(): string;
  	/**
     * 组名
     * @example
     * \`\`\`ts
     * \`\`\`
     */
  	set name(name: string);
  	get name(): string;
  	/**
  	 * 是否选择操作
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	set isSelectable(val: boolean);
  	get isSelectable(): boolean;
  	/**
  	  * 清空组
  	  * @example
  	  * \`\`\`ts
  	  * \`\`\`
  	  */
  	clear(): boolean;
  	/**
  	 * 向组添加对象
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	append(id: McObjectId): boolean;
  	/**
     * 向组添加对象数组
     * @example
     * \`\`\`ts
     * \`\`\`
     */
  	appendArray(aryId: McObjectId[]): boolean;
  	/**
  	*组中是否有该对象
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	has(id: McObjectId): boolean;
  	/**
  	*得到组中所有对象
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	getAllEntityId(): McObjectId[];
  	/**
    *得到组中所有对象数量
    * @example
    * \`\`\`ts
    * \`\`\`
    */
  	numEntities(): number;
  }
   class MxAI {
  	private serverUrl;
  	private mapFun;
  	init(serverUrl: string): void;
  	addFunction(name: string, call: any): void;
  	registTool(tool: any): void;
  	reloadTools(param: any): void;
  	chat_tool(str: string): void;
  }
  /** 排除接口包含某些类型的属性名称 */
  export type NonPropertyNames<T, P> = {
  	[K in keyof T]: T[K] extends P ? never : K;
  }[keyof T];
  /** 排除接口包含某些类型的属性
   * @param T 需要排除类型的接口
   * @param P 需要排除类型接口属性的类型
   * @example
   * \`\`\`ts
   * interface MyInterface {
   *  name: string;
   *  age: number;
   *  sayHello(): void;
   *  walk(distance: number): void;
   * }
   * ExcludePropertiesContainingThisType<MyInterface, Function>
   * \`\`\`
   */
  export type ExcludePropertiesContainingThisType<T, P> = Pick<T, NonPropertyNames<T, P>>;
  /** 颜色方法类型 */
  export  enum ColorMethod {
  	/** 颜色随层 */
  	kByLayer = 1,
  	/** 颜色随块 */
  	kByBlock = 2,
  	/** 颜色值 */
  	kByColor = 3,
  	/** 颜色索引值 */
  	kByACI = 4,
  	kByPen = 5,
  	kForeground = 6,
  	kLayerOff = 7,
  	kLayerFrozen = 8,
  	kNone = 9
  }
  /** 颜色索引类型 */
  export  enum ColorIndexType {
  	/** 随块 */
  	kByblock = 0,
  	/** 红色 */
  	kRed = 1,
  	/** 黄色 */
  	kYellow = 2,
  	/** 绿色 */
  	kGreen = 3,
  	/** 青色 */
  	KCyan = 4,
  	/** 蓝色*/
  	kBlue = 5,
  	/** 洋红色*/
  	kMagenta = 6,
  	/** 白色(反色)*/
  	kWhite = 7,
  	/** 随层 */
  	kBylayer = 256
  }
  export type ConstructorArguments<T> = T extends new (...args: infer U) => any ? U : never;
  /**
   * McCmColor的JSON版本
   */
  export type McCmColorJSON = ExcludePropertiesContainingThisType<McCmColor, Function>;
  /** THREE.Color 构造函数参数类型组成的元组：字符串、数字、THREE.Color */
  export type THREEColorArgs = [
  	(string | number | THREE.Color)
  ] | ConstructorArguments<typeof THREE.Color> | [
  ];
  /** 用于指定在创建颜色时可以接受的不同类型的参数形式 */
  export type CreateColorArgs = THREEColorArgs | [
  	(Partial<McCmColorJSON> | McCmColor)
  ];
  /**
   * 获取颜色工具
   * @param ages 颜色参数
   * @returns THREE.Color
   * */
  export  const getColorUtils: (...ages: THREEColorArgs) => import("three").Color;
  /**
   * 创建颜色对象
   * @param ages 颜色参数类型
   * @returns 颜色对象
   */
  export  const createMcCmColor: (...ages: CreateColorArgs) => McCmColor;
  /**
   * 设置颜色
   * @param mcCmColor 颜色对象
   * @param ages 颜色参数类型
   */
  export  const setMcCmColor: (mcCmColor: McCmColor, ...ages: CreateColorArgs) => void;
  /**
   * 枚举 Fetch 属性类型
   */
  export  enum FetchAttributes {
  	/** 将获取的数据加载到内存中 */
  	EMSCRIPTEN_FETCH_LOAD_TO_MEMORY = 1,
  	/** 持久化文件 */
  	EMSCRIPTEN_FETCH_PERSIST_FILE = 4,
  	/** 追加数据 */
  	EMSCRIPTEN_FETCH_APPEND = 8,
  	/** 替换数据 */
  	EMSCRIPTEN_FETCH_REPLACE = 16
  }
   class McRxObjectImp {
  }
  /**
   * McObject 类, 封装了与 MxCAD 对象相关的功能，并提供了一些方法来操作和管理这些功能
   */
  export  class McObject {
  	/** 内部对象实现 */
  	private imp;
  	/** 内部事件 */
  	private event;
  	/** 当前打开的文件名 */
  	private currentFileName;
  	/** 当前打开的原始文件名 */
  	private currentOriginalFileName;
  	/** 是否是第一次打开文件 */
  	private firstTimeOpenFile;
  	private authorized_service;
  	private isInitMxObject;
  	/**
  	 * 构造函数
  	 * @param imp 对象实现
  	 * @example
  	 * \`\`\`ts
  	 * import { McObject } from 'mxcad'
  	 *
  	 * const mxcad = new McObject;
  	 * \`\`\`
  	 */
  	constructor(imp?: any);
  	/**
  	* @internal
  	* \`\`\`
  	*/
  	protected creaeCallId(): number;
  	/**
  	 * 设置对象的一些属性设置
  	 * @param val 属性设置内容.
  	 * 1. DisplayPrecision 显示精度设置，默认为0,可以取0 ~1000,1000为最高精度了
  	 * 2. EnableUndo 启用undo功能，默认是没有启动的
  	 * @example
  	 * \`\`\`ts
  	 * 启用undo
  	 * mxcad.setAttribute({EnableUndo:true})
  	 * \`\`\`
     */
  	setAttribute(val: object): boolean;
  	/**
  	 * 返回与MxCAD对象绑定的MxDraw对象。
  	 * @returns MxDraw对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McObject } from 'mxcad'
  	 *
  	 * const mxcad = new McObject()
  	 * const mxdraw = mxcad.getMxDrawObject()
  	 * \`\`\`
  	 */
  	getMxDrawObject(): MxDrawObject;
  	/**
  	 * 返回与MxCAD对象绑定的MxDraw对象。
  	 * @returns MxDraw对象
  	 * @example
  	 * \`\`\`ts
  	 * import { McObject } from 'mxcad'
  	 *
  	 * const mxcad = new McObject()
  	 * const mxdraw = mxcad.mxdraw
  	 * \`\`\`
  	 */
  	get mxdraw(): MxDrawObject;
  	/**
  	 * 获取内部实现对象
  	 * @returns 内部实现对象
  	 */
  	getImp(): any;
  	/**
  	 * 初始对象
  	 * @param imp 对象实现，默认该函数会被系统自动调用。
  	 *
  	 */
  	init(imp: any): void;
  	/**
  	 * 创建mxcad对象 。
  	 * @param config createMxCad 的参数配置
  	 * @example
  	 * \`\`\`ts
  	 * import { McObject } from "mxcad"
  	 *
  	 * // 创建mxcad示例对象
  	 *  const mxcad = new McObject()
  	 * mxcad.create({
  	 * // canvas元素的id
  	 * canvas: "#myCanvas",
  	 * // 获取加载wasm相关文件(wasm/js/worker.js)路径位置
  	 * locateFile: (fileName)=> new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,
  	 * // 需要初始化打开的文件url路径
  	 * fileUrl: new URL("../src/assets/test.mxweb", import.meta.url).href,
  	 * // 提供加载字体的目录路径
  	 * fontspath:  new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
  	 * })
  	 * \`\`\`
  	 */
  	create(config: MxCadConfig): void;
  	/** 监听对象选择事件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject, McObjectId } from "mxcad"
  	 *
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
  	 * mxcad.on("selectChange", (ids: McObjectId[])=> {
  	 *      if (ids.length == 0) return;
  	 *      let id = ids[0]
  	 *      let ent = id.getMcDbEntity()
  	 *      if(!ent) return
  	 *      console.log(ent.objectName)
  	 * })
  	 * \`\`\`
  	 *  */
  	on(name: "selectChange", fun: (ids: McObjectId[]) => void | ((ids: McObjectId[]) => void)[]): void;
  	/** 监听文件完全打开 */
  	on(name: "openFileComplete", fun: () => void): void;
  	/**mxdraw mxcad程序已经加载，准备初始化cpp程序 */
  	on(name: "init_cpp", fun: () => void): void;
  	/**mxdraw mxcad程序已经加载，准备创建mxdraw对象时触发 */
  	on(name: "init", fun: () => void): void;
  	/**初化地图加载时调用，mxdad-app npm使用 */
  	on(name: "init_map", fun: (init_param: {
  		map: MxMap;
  		plugin: MxCADPluginBase;
  	}) => void): void;
  	/**地图图层加载时调用，mxdad-app npm使用*/
  	on(name: "map_style.load", fun: (map: MxMap) => void): void;
  	/** mxdraw对象创建了,准备初始相关参数时触发 */
  	on(name: "init_before_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;
  	/**mxdraw对象创建后触发 */
  	on(name: "init_mxdraw", fun: (mxdraw: MxDrawObject) => void): void;
  	/**mxcad对象创建后,已经准备完成时触发 */
  	on(name: "init_mxcad", fun: (mxcad: McObject) => void): void;
  	/** 监听数据库修改事件 */
  	on(name: "databaseModify", fun: () => void): void;
  	/** 系统变量被修改 */
  	on(name: "sysVarChanged", fun: (name: string) => void): void;
  	/** 图形数据库初始化 */
  	on(name: "databaseInitialization", fun: () => void): void;
  	/** 图层数据发生了变化 */
  	on(name: "layerChanged", fun: () => void): void;
  	/** 线型数据发生了变化 */
  	on(name: "lineTypeChanged", fun: () => void): void;
  	/** 对象被修改事件，默认不会通知，配制EnableObjectModificationEvent变量启用 status:1:删除，2：增加，0: 修改*/
  	on(name: "objectModified", fun: (param: {
  		cmd: string;
  		entitys: {
  			id: McObjectId;
  			erase: boolean;
  			status: number;
  		}[];
  	}) => void): void;
  	/**
  	 * 关闭事件监听
  	 * @param name 监听事件名
  	 * @param fun 监听事件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 *
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
  	 * // e:事件函数,这里指代在mxcad.on("selectChange", e)中注册的函数
  	 * mxcad.off("selectChange", e);
  	 * \`\`\`
  	 */
  	off(name: string, fun?: Function): void;
  	/**
  	 * 触发一个系统事件的调用
  	 * @param name 事件名
  	 * @param param 事件参数
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 *
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
  	 * mxcad.callEvent("init");
  	 * \`\`\`
  	 */
  	callEvent(sEventName: string, param?: any): boolean;
  	private synchronizeMxDrawEvent;
  	/**
  	 * 初始化对象模型
  	 * @description
  	 * @param mxObject 初始化{@link https://mxcadx.gitee.io/mxdraw_docs | mxdraw} 创建的绘图控件
  	 */
  	initMxObject(mxObject: any): void;
  	/**
  	 * 重绘图上所有对象，在调用ZoomAll,ZoomW后，因为是异步执行，可能需要延迟调用Regen才会启作用。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from 'mxcad'
  	 *  const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	   //绘制一个带有宽度的圆
  		mxcad.addLinetype("CircleLineType", "30,-5,7,-7");
  
  		//设计当前线型为"CircleLineType"
  		mxcad.drawLinetype = ("CircleLineType");
  
  		mxcad.drawLineWidth = 40;
  
  		mxcad.drawCircle(600, 800, 120);
  
  		mxcad.zoomAll();
  		mxcad.regen();
  		mxcad.updateDisplay();
  	 * \`\`\`
  	 */
  	regen(delayTime?: number): void;
  	/**
  	 * 显示全部
  	 */
  	zoomAll(autoRegen?: boolean): boolean;
  	/**
  	 * 缩放当前显示范围，它是相对于当前显示范围进行缩放
  	 * @param scale scale缩放比例
  	 * @returns void
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from 'mxcad'
  	 *  const mxcad:McObject = MxCpp.getCurrentMxCAD()
  		mxcad.drawLine(350, 220, 600, 220);
  		mxcad.zoomScale(o.6);
  	 * \`\`\`
  	 */
  	zoomScale(scale: number): void;
  	/**
  	 * 把对象添加当前选择中
  	 * @param id 对象id
  	 * @returns void
  	 * @example
  	 * \`\`\`typescript
  	 * import { MxCpp, McObject } from "mxcad"
  	 * let mxcad:McObject = MxCpp.getCurrentMxCAD();
  	 * let id = mxcad.drawLine(0,0,1000,1000);
  	 * mxcad.addCurrentSelect(id);
  	 * \`\`\`
  	 */
  	addCurrentSelect(id: McObjectId | McObjectId[], isDisplayGrid?: boolean): void;
  	/**
  	 * 清除当前所有选择
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 *
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.clearCurrentSelect();
  	 * \`\`\`
  	*/
  	clearMxCurrentSelect(): void;
  	/**
  	  * 把当前显示范围移到指定的显示范围
  	  * @param minPt 坐标1 McGePoint3d
  	  * @param maxPt 坐标2 McGePoint3d
  	  * @param isWorld 默认为felse DWG图纸坐标，设置为true是THREEJS坐标
  	  * @returns void
  	  * @example
  	  * \`\`\`typescript
  	  * import { MxApp, McGePoint3d, McObject } from "mxcad"
  	  * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	  * mxcad.zoomW(new McGePoint3d(0, 0), new McGePoint3d(30, 30))
  	  * \`\`\`
    */
  	zoomW(minPt: McGePoint3d, maxPt: McGePoint3d): void;
  	/**
  	 * 把当前显示范围移到指定的位置,dCenX,dCenY是DWG图纸坐标。
  	 * @returns void
  	 * @example
  	 * \`\`\`typescript
  	 * import { MxCpp, McGePoint3d, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.zoomCenter(0, 0)
  	 * \`\`\`
  	 */
  	zoomCenter(dCenX: number, dCenY: number): void;
  	/**
  	 * 设置显示视区的角度，单位是PI.
  	 * @returns void
  	 * @param viewangle 旋转角度 Math.PI
  	 * @example
  	 * \`\`\`typescript
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.zoomAngle(Math.PI / 2)
  	 * \`\`\`
  	 */
  	zoomAngle(viewangle: number): void;
  	/**
  	 * 打开网络文件
  	 * @param sFileUrl 网络文件路径
  	 * @param retCall 回调函数，可选参数，打开文件完成后的回调函数，参数为打开文件的结果,0表示成功，其他值表示失败
  	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true
  	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。
  	 * @returns 是否成功打开文件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * mxcad.openWebFile("http://localhost:1337/mxcad/file/a9cbed3d3a351b79f24484e87bd78338.DWG.mxweb");
  	 * \`\`\`
  	 */
  	openWebFile(sFileUrl: string, retCall?: (iRet: number) => void, isWorkThread?: boolean, initialParameter?: object, fetchAttributes?: number, isFetchTzFile?: boolean): boolean;
  	/**
  	* 清空当前图上内容，新建一个文件
  	* @example
  	* \`\`\`ts
  	* import { MxCpp, McObject } from "mxcad" ;
  	*
  	* let mxcad:McObject = MxCpp.getCurrentMxCAD();
  	* mxcad.newFile();
  	* \`\`\`
  	*/
  	newFile(): boolean;
  	/**
  	 * 插件图块文件
  	 * @param sFileUrl 网络文件路径 该文件为mxweb格式
  	 * @param sBlkName 插入的图块的块名
  	 * @param isWorkThread 是否使用工作线程打开文件，默认为 true
  	 * @param fetchAttributes 1：EMSCRIPTEN_FETCH_LOAD_TO_MEMORY,把图纸数据加载内存中，0:EMSCRIPTEN_FETCH_LOAD_TO_MEMORY | EMSCRIPTEN_FETCH_PERSIST_FILE | EMSCRIPTEN_FETCH_APPEND，把图纸数据加到IndexedDB。
  	 * @param isUpdataInsertBlock 是否更新已经存在的块，默认不会更新
  	 * @param isUpdataSameNameBlock 是插入块的过程中，如果发现原数据库已经相同名称的块，是否也一同更新，默认不会更新
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * const blkrecId = await mxcad.insertBlock("./blkrec.mxweb", "sBlkName");
  	 * \`\`\`
  	*/
  	insertBlock(sFileUrl: string, sBlkName: string, isWorkThread?: boolean, fetchAttributes?: number, isUpdataInsertBlock?: boolean, isUpdataSameNameBlock?: boolean): Promise<McObjectId>;
  	/**
  	 * 获取当前文件名
  	 * @returns 当前文件名
  	 */
  	getCurrentFileName(): string;
  	/**
  	 * 设置当前文件名
  	 */
  	setCurrentFileName(fileName: string): void;
  	/**
   * 获取当前文件名
   * @returns 当前文件名
   */
  	getCurrentOriginaFileName(): string;
  	/**
  	 * 设置当前文件名
  	 */
  	setCurrentOriginaFileName(fileName: string): void;
  	/**
  	 * 将文件保存并转换为网络路径下载
  	 * @param sSaveProgramUrl 后端 POST请求接口, 接口具体实现: 先下载MxDraw云图开发包<https://www.mxdraw.com/download.html>并解压
  	 * 找到MxDrawCloudServer\\Bin\\MxCAD\\MxCADSaveFile\\server.js 可以找到对应的实现接口"/mxcad/savefiledwg",
  	 * "/mxcad/savefiledwg":保存dwg文件到服务器
  	 * "/mxcad/savefile":保存mxweb文件到服务器
  	 * "/mxcad/savepdf":保存pdf文件到服务器
  	 * 如果没有找到则在该项目下寻找这个接口的定义, 必须符合该接口的定义才能作为参数
  	 * @param call 保存文件的结果回调 这里接收到的参数请自己根据接口定义中保存图纸的位置, ref.file 不是完整请求路径，只是保存后的图纸名称
  	 * @returns 是否成功保存文件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 *  MxCpp.getCurrentMxCAD().saveFileToUrl("http://localhost:1337/mxcad/savefiledwg", (iResult, sserverResult) => {
  	 *    let ret = JSON.parse(sserverResult);
  	 *    if (ret.ret == "ok") {
  	 *        console.log(ret.file)
  	 *    }
  	 * })
  	 * //保存pdf文件。
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 *  MxCpp.getCurrentMxCAD().saveFileToUrl("http://localhost:1337/mxcad/savepdf", (iResult, sserverResult) => {
  	 *    let ret = JSON.parse(sserverResult);
  	 *    if (ret.ret == "ok") {
  	 *        console.log(ret.file)
  	 *        let saveFileUrl = "http://localhost:1337/mxcad/file/" + ret.file;
  	 *        MxTools.downloadFileFromUrl(saveFileUrl, ret.file);
  	 *    }
  	 * },"",JSON.stringify({ width: "2000", height: "2000" }));
  	 * \`\`\`
  	 */
  	saveFileToUrl(sSaveProgramUrl: string, call: (iResult: number, sServerResult: string) => void, filename?: string, param?: any): boolean;
  	/**
  	 * 保存文件
  	 * @param filename 另存为的新文件名称
  	 * @param call 回调函数，可选参数，文件保存完成后的回调函数，参数为文件数据
  	 * @param isDownland 是否下载文件，默认为 true
  	 * @param isShowSaveFileDialog 是否显示保存文件对话框，默认为 true
  	 * @returns 是否成功保存文件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD()
  	 * const fileName =  mxcad.getCurrentFileName()
  	 * mxcad.saveFile("test", (data)=> {
  	 *   const blob = new Blob([data.buffer], { type: "application/octet-stream" });
  	 * }, false, false)
  	 * \`\`\`
  	 */
  	saveFile(filename?: string, call?: (data: any) => void, isDownland?: boolean, isShowSaveFileDialog?: boolean, parameter?: object): boolean;
  	/**
  	 * 获取数据库对象
  	 * @returns 数据库对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD()
  	 * let layerTable = mxcad.getDatabase().getLayerTable();
  	 * \`\`\`
  	 */
  	getDatabase(): McDbDatabase;
  	/**
  	* 返回数据库对象
  	*/
  	get database(): McDbDatabase;
  	/**
  	 * 设置浏览模式
  	 */
  	setBrowse(browse: boolean): void;
  	/**
  	 * 获取系统变量的字符串值
  	 * @param varName 变量名称
  	 * @returns 变量的字符串值
  	 */
  	getSysVarString(varName: string): string;
  	/**
  	 * 设置系统变量的字符串值
  	 * @param varName 变量名称
  	 * @param val 变量的字符串值
  	 * @returns 是否成功设置变量值
  	 */
  	setSysVarString(varName: string, val: string): any;
  	/**
  	 * 获取系统变量的浮点数值
  	 * @param varName 变量名称
  	 * @returns 变量的浮点数值
  	 */
  	getSysVarDouble(varName: string): number;
  	/**
    * 获取系统变量的点数值
    * @param varName 变量名称
    * @returns 变量的点数值
    */
  	getSysVarPoint(varName: string): McGePoint3d;
  	/**
     * 设置系统变量的点数值
     * @param varName 变量名称
     * @param val 变量的点数值
     * @returns 是否成功设置变量值
     */
  	setSysVarPoint(varName: string, pt: McGePoint3d): boolean;
  	/**
  	* 设置系统变量的2维点数值
  	* @param varName 变量名称
  	* @param val 变量的点数值
  	* @returns 是否成功设置变量值
  	*/
  	setSysVarPoint2d(varName: string, pt: McGePoint3d): boolean;
  	/**
  	 * 设置系统变量的浮点数值
  	 * @param varName 变量名称
  	 * @param val 变量的浮点数值
  	 * @returns 是否成功设置变量值
  	 */
  	setSysVarDouble(varName: string, val: number): boolean;
  	/**
  	 * 获取系统变量的整数值
  	 * @param varName 变量名称
  	 * @returns 变量的整数值
  	 */
  	getSysVarLong(varName: string): number;
  	/**
  	 * 设置系统变量的整数值
  	 * @param varName 变量名称
  	 * @param val 变量的整数值
  	 * @returns 是否成功设置变量值
  	 */
  	setSysVarLong(varName: string, val: number): boolean;
  	/**
  	 * 获取绘制颜色
  	 * @returns 返回绘制颜色
  	 */
  	get drawColor(): McCmColor;
  	/**
  	 * 设置绘制颜色
  	 * @param val 绘制颜色
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from 'mxcad';
  	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD();
  	 * mxcad.drawColor = new McCmColor(0, 0, 255);
  	 * \`\`\`
  	 */
  	set drawColor(val: McCmColor);
  	/**
     * 设置绘制颜色索引
     * @returns val 颜色索引类型
     */
  	get drawColorIndex(): number;
  	/**
  	 * 设置绘制颜色索引
  	 * @param val 颜色索引类型
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, ColorIndexType, McObject } from "mxcad" ;
  	 * const mxcad:McObject = MxCpp.App.getCurrentMxCAD();
  	 * mxcad.drawColorIndex = ColorIndexType.kMagenta;
  	 * \`\`\`
  	 */
  	set drawColorIndex(val: ColorIndexType | number);
  	/**
  	 * 获取绘制线宽
  	 * @returns 返回绘制线宽
  	 */
  	get drawLineWeight(): McDb.LineWeight;
  	/**
  	 * 设置绘制线宽
  	 * @param val 绘制线宽
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McDb, McObject } from "mxcad" ;
  	 *
  	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
  	 * mxcad.drawLineWeight(McDb.LineWeight.kLnWtByLayer)
  	 * \`\`\`
  	 */
  	set drawLineWeight(val: McDb.LineWeight);
  	/**
  	 * 获取绘制线型比例
  	 * @returns 返回绘制线型比例
  	 */
  	get drawLineTypeScale(): number;
  	/**
  	 * 设置绘制线型比例
  	 * @param val 绘制线型比例
  	 */
  	set drawLineTypeScale(val: number);
  	/**
  	 * 获取绘制线型
  	 * @returns 返回绘制线型
  	 */
  	get drawLinetype(): string;
  	/**
  	 * 设置绘制线型
  	 * @param val 绘制线型
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad" ;
  	 *
  	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
  	 * mxcad.addLinetype("MyLineType3", "30,-10");
  	 * mxcad.drawLinetype = "MyLineType3";
  	 * \`\`\`
  	 */
  	set drawLinetype(val: string);
  	/**
  	 * 获取绘制文字样式
  	 * @returns 返回绘制文字样式
  	 */
  	get drawTextStyle(): string;
  	/**
  	 * 设置绘制文字样式
  	 * @param val 绘制文字样式
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad" ;
  	 *
  	 * const mxcad: McObject = MxCpp.App.getCurrentMxCAD();
  	 * mxcad.addTextStyle("MyTextStyle", "italicc.shx", "gbcbig.shx", 0.7);
  	 * mxcad.drawTextStyle = "MyTextStyle";
  	 * \`\`\`
  	 */
  	set drawTextStyle(val: string);
  	/**
  	 * 获取绘制图层
  	 * @returns 返回绘制图层
  	 */
  	get drawLayer(): string;
  	/**
  	 * 设置绘制图层
  	 * @param val 绘制图层
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from 'mxcad'
  	   const mxcad:McObject = MxCpp.getCurrentMxCAD();
  		mxcad.drawLayer = "MtextLayer";
  	 * \`\`\`
  	 */
  	set drawLayer(val: string);
  	/**
  	 * 添加图层
  	 * @param pszName 图层名称
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.addLayer("图层名称")
  	 * \`\`\`
  	 */
  	addLayer(string: string): McObjectId;
  	/**
  	 * 添加文字样式
  	 * @param pszName 样式名称
  	 * @param pszFileName 字体文件名
  	 * @param pszBigFontFileName 大字体文件名
  	 * @param dXScale X 方向缩放比例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.addTextStyle("MyLineTypeTextStyle", "txt.shx", "hztxt.shx", 1);
  	 * \`\`\`
  	 */
  	addTextStyle(sName: string, sFileName: string, sBigFontFileName: string, dXScale?: number): McObjectId;
  	/**
  	 * 添加使用TrueType字体的文字样式
  	 * @param pszName 样式名称
  	 * @param sTrueTypeFontName TrueType字体名,为空使用默认TrueType字体.
  	 * @param dXScale X 方向缩放比例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.AddTureTypeTextStyle("MyTrueTypeTextStyle");
  	 * \`\`\`
  	 */
  	AddTureTypeTextStyle(sName: string, sTrueTypeFontName?: string, dXScale?: number): McObjectId;
  	/**
  	 * 添加线型
  	 * @param pszName 线型名称
  	 * @param pszLineDefine 线型定义
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * //定义虚线数据据,"MyLineType"是线型名，"6,-8"是虚线的一个单位定义，6是实线长，-8是空格长。
  	 * mxcad.addLinetype("MyLineType", "6,-10");
  	 * \`\`\`
  	 */
  	addLinetype(sName: string, sLineDefine: string): McObjectId;
  	/**
  	 * 添加线型
  	 * @param pszName 线型名称
  	 * @param pszLineDefine 线型定义
  	 * @param pszTextStyle 文字样式
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * let lintype = mxcad.addLinetypeEx("TestMyLine", '.5,-.2,["HW",STANDARD,S=.1,R=0.0,X=-0.1,Y=-.05],-.2', "");
  	 * \`\`\`
  	 */
  	addLinetypeEx(sName: string, sLineDefine: string, sTextStyle?: string): McObjectId;
  	/**
  	 * 绘制直线
  	 * @param dX1 起点 X 坐标
  	 * @param dY1 起点 Y 坐标
  	 * @param dZ1 起点 Z 坐标
  	 * @param dX2 终点 X 坐标
  	 * @param dY2 终点 Y 坐标
  	 * @param dZ2 终点 Z 坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawLine(0, 60, 100, 60);
  	 * \`\`\`
  	 */
  	drawLine(dX1: number, dY1: number, dX2: number, dY2: number): McObjectId;
  	drawLine3d(dX1: number, dY1: number, dZ1: number, dX2: number, dY2: number, dZ2: number): McObjectId;
  	/**
  	 * 添加标注样式
  	 * @param pszName 样式名称
  	 * @param pszDoubleData 双精度型数据
  	 * @param pszIntData 整型数据
  	 * @param pszStringData 字符串型数据
  	 * @param pszIdData ID 型数据
  	 *
  	 * @description pszDoubleData 双精度型数据
  	 * | 系统变量 | 值 | 功能说明 |
  	 * | ------- | ------- | ------- |
  	 * | dimaltf | 143 | 控制换算单位的乘数 |
  	 * | dimasz | 41  | 控制尺寸线和引线箭头的大小。并控制基线的大小。|
  	 * | dimcen | 141 | 控制圆或圆弧圆心标记以及中心线的绘制。|
  	 * | dimdle |  46  | 当使用小斜线代替箭头进行标注时，设置尺寸线超出尺寸界线的距离。|
  	 * | dimdli |  43 | 控制基线标注中尺寸线的间距。|
  	 * | dimexe |  44 | 将命名标注样式及其设置输出到外部文件。|
  	 * | dimexo |  42 | 指定尺寸界线偏离原点的距离。|
  	 * | dimgap |  147 | 设置当打断尺寸线以符合标注文字时，标注文字周围的距离。|
  	 * | dimlfac | 144 | 为线性标注测量值设置比例因子。|
  	 * | dimrnd |  45 | 将所有标注距离舍入为指定值。|
  	 * | dimscale | 40 | 设置应用于标注变量（用于指定尺寸、距离或偏移量）的全局比例因子。|
  	 * | dimtfac | 146 | 与通过 DIMTXT 系统变量设置一样，指定分数和公差值的文字高度相对于标注文字高度的比例因子。|
  	 * | dimtm  |  48 | 为标注文字设置最小（即最低）公差限制。|
  	 * | dimtp  |  47 | 为标注文字设置最大（即最高）公差限制。|
  	 * | dimtsz |  142 | 指定线性标注、半径标注以及直径标注中绘制的代替箭头的小斜线的尺寸。|
  	 * | dimtvp |  145 | 控制标注文字在尺寸线上方或下方的垂直位置。|
  	 * | dimtxt |  140 | 指定标注文字的高度（除非当前文字样式具有固定的高度）。|
  	 * | dimaltrnd | 148 | 舍入换算标注单位。|
  	 *
  	 * @description pszIntData 整型数据
  	 * | 系统变量 | 值 | 功能说明 |
  	 * | ------- | ------- | ------- |
  	 * | dimadec | 179 | 控制角度标注中显示的精度小数位数。|
  	 * | dimalt | 170 | 控制标注中换算单位的显示。|
  	 * | dimaltd | 171 | 控制换算单位中的小数位数。|
  	 * | dimalttd | 274 | 设置换算标注单位中的公差值的小数位数。|
  	 * | dimalttz | 286 | 控制对公差值的消零处理。|
  	 * | dimaltu | 273 | 为所有标注子样式（角度标注除外）的换算单位设定单位格式。|
  	 * | dimaltz | 285 | 控制对换算单位标注值的消零处理。|
  	 * | dimaunit | 275 | 为角度标注设定单位格式。|
  	 * | dimclrd | 176 | 为尺寸线、箭头和标注引线指定颜色。|
  	 * | dimclre | 177 | 为尺寸界线、圆心标记和中心线指定颜色。|
  	 * | dimclrt | 178 | 为标注文字指定颜色。|
  	 * | dimdec | 271 | 设置标注主单位中显示的小数位数。|
  	 * | dimfit | 287 | 尺寸界线内的空间不足以同时放下标注文字和箭头时，此系统变量将确定这两者的排列方式。|
  	 * | dimjust | 280 | 控制标注文字的水平位置。|
  	 * | dimlim | 72 | 生成标注界限作为默认文字。|
  	 * | dimsah | 173 | 控制尺寸线箭头块的显示。|
  	 * | dimsd1 | 281 | 控制是否隐去第一条尺寸线和箭头。|
  	 * | dimsd2 | 282 | 控制是否隐去第二条尺寸线和箭头。|
  	 * | dimse1 | 75 | 控制是否隐去第一条尺寸界线。|
  	 * | dimse2 | 76 | 控制是否隐去第二条尺寸界线。|
  	 * | dimsoxd | 175 | 如果尺寸界线内没有足够的空间，则隐去箭头。|
  	 * | dimtad | 77 | 控制文字相对于尺寸线的垂直位置。|
  	 * | dimtdec | 272 | 设置标注主单位的公差值中显示的小数位数。|
  	 * | dimtih | 73 | 控制所有标注类型（坐标标注除外）的标注文字在尺寸界线内的位置。 |
  	 * | dimtix | 174 | 在尺寸界线之间绘制文字。|
  	 * | dimtofl | 172 | 控制是否在尺寸界线之间绘制尺寸线（即使标注文字被放置在尺寸界线之外）。|
  	 * | dimtoh | 74 | 控制标注文字在尺寸界线外的位置。|
  	 * | dimtol | 71 | 将公差附在标注文字中。|
  	 * | dimtolj | 283 | 设置公差值相对于表面标注文字的垂直对正方式。|
  	 * | dimzin  | 78 | 控制针对主单位值的消零处理。|
  	 * | dimupt | 288 | 控制用户定位文字的选项。|
  	 * | dimtzin | 284 | 控制对公差值的消零处理。|
  	 * | dimfrac | 276 | 设置分数格式。|
  	 * | dimlunit | 277 | 为所有标注类型（角度标注除外）设置单位。|
  	 * | dimatfit | 289 | 尺寸界线内的空间不足以同时放下标注文字和箭头时，此系统变量将确定这两者的排列方式。|
  	 * | dimtmove | 279 | 设置标注文字的移动规则。|
  	 * | dimazin | 79 | 针对角度标注进行消零处理。|
  	 *
  	 * @description pszStringData 字符串型数据
  	 * | 系统变量 | 值 | 功能说明 |
  	 * | ------- | ------- | ------- |
  	 * | dimapost | 4 | 指定用于所有标注类型（角度标注除外）的换算标注测量值的文字前缀或后缀（或两者都指定）。|
  	 * | dimpost | 3 | 为标注测量值指定文字前缀或后缀（或两者）。|
  	 *
  	 * @description pszIdData ID 型数据
  	 * | 系统变量 | 值 | 功能说明 |
  	 * | ------- | ------- | ------- |
  	 * | dimblk | 342 | 为尺寸线的第二个端点设置箭头 。|
  	 * | dimblk1 | 343 | 为尺寸线的第一个端点设置箭头。|
  	 * | dimblk2 | 344 | 为尺寸线的第二个端点设置箭头。|
  	 * | dimldrblk | 341 | 指定引线箭头的类型。|
  	 * | dimtxsty | 340 | 指定标注的文字样式。|
  	 *
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD();
  	 *
  	 * // MyDimStyle2：样式名称
  	 * // "41,0.18,141,0.09,40,200"：双精度型数据
  	 * // "77,1,271,3": 整型数据
  	 * // 其中数值两两一组，如 "41,0.18"：dimasz系统变量值设置为0.18；"77,1"：dimtad系统变量值设置为1
  	 * mxcad.addDimStyle("MyDimStyle2", "41,0.18,141,0.09,40,200", "77,1,271,3", "", "");
  	 * 增加一个%%c前缀 '3,"%%c<>"'
  	 * mxcad.addDimStyle("MyDimStyle", "41,0.18,141,0.09,40,200", "77,1,271,3", '3,"%%c<>"', \`340,\${textId.id}\`);
  	 * \`\`\`
  	 */
  	addDimStyle(pszName: string, pszDoubleData: string, pszIntData: string, pszStringData: string, pszIdData: string): McObjectId;
  	/**
  	 * 获取当前绘制的标注样式
  	 */
  	get drawDimStyle(): string;
  	/**
  	 * 设置当前绘制的标注样式
  	 * @param val 样式名称
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimStyle = "MyDimStyle2"
  	 * \`\`\`
  	 */
  	set drawDimStyle(val: string);
  	/**
  	 * 把当前路径做上排除标记，主要用于填充的绘制，把这个路径组成的闭合区域在填充中挖去
  	 * @param isExclude 是否排除
  	 * @example
  	 * \`\`\`ts
  		import { MxCpp, McObject } from "mxcad"
  		const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	   //绘制一个实心有圆弧边界填充,中间挖去一块.
  		mxcad.pathMoveToEx(440, 3310, 0, 0, 0);
  		mxcad.pathLineTo(480, 3310);
  		mxcad.pathLineTo(480, 3360);
  		mxcad.pathLineTo(450, 3340);
  	   // 把上面定义的路径定义填充排除区域.
  		mxcad.pathMakeExclude(true);
  	 * \`\`\`
  	 */
  	pathMakeExclude(isExclude: boolean): void;
  	/**
  	 * 增加一个图案定义
  	 * @param sName 图案名称
  	 * @param sDefinitionData 图案默认定义数据
  	 * @example
  	 * \`\`\`ts
  		import { MxCpp, McObject } from "mxcad"
  		const mxcad:McObject = MxCpp.getCurrentMxCAD()
  		//angle, x-origin,y-origin, delta-x,delta-y,dash-1,dash-2, …
  		//45 = angle 是图案线角度.
  		//0 = x-origin 是第一个填充线经过的点位置X坐标
  		//0 = y-origin 是第一个填充线经过的点位置Y坐标
  		//0 = delta-x   是下一个填充线相对前一个线的X方向偏移
  		//0.125 = delta-y   是下一个填充线相对前一个线的Y方向偏移
  		mxcad.addPatternDefinition("MyHatchPattern1", "((45, 0,0, 0,0.125))");
  	 * \`\`\`
  	 */
  	addPatternDefinition(sName: string, sDefinitionData: string): void;
  	/**
  	 * 获取当前绘制的线型定义
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawPatternDefinition = "MyHatchPattern1";
  	 * \`\`\`
  	 */
  	get drawPatternDefinition(): string;
  	/**
  	 * 设置当前绘制的线型定义
  	 * @param val 线型定义
  	 */
  	set drawPatternDefinition(val: string);
  	/**
  	 * 获取当前绘制的线宽
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawLineWidth = 4;
  	 * \`\`\`
  	 */
  	get drawLineWidth(): number;
  	/**
  	 * 设置当前绘制的线宽
  	 * @param val 线宽
  	 */
  	set drawLineWidth(val: number);
  	/**
  	 * 返回调用draw开头的绘图数，使用数据库的当前默认属性。
  	 */
  	get drawUseDefaultProperties(): boolean;
  	/**
  	 * 设置调用draw开头的绘图数，使用数据库的当前默认属性
  	 * @param val 线宽
  	 */
  	set drawUseDefaultProperties(val: boolean);
  	/**
  	 * 绘制圆弧
  	 * @param dCenterX 圆心 X 坐标
  	 * @param dCenterY 圆心 Y 坐标
  	 * @param dRadius 半径
  	 * @param dStartAng 起始角度，单位为弧度
  	 * @param dEndAng 结束角度，单位为弧度
  	 * @returns 成功返回 1，失败返回 0
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad: McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawArc(300, 1000, 100, 30, 200);
  	 * \`\`\`
  	 */
  	drawArc(dCenterX: number, dCenterY: number, dRadius: number, dStartAng: number, dEndAng: number): McObjectId;
  	/**
  	 * 绘制圆弧
  	 * @param dStartPointX 起始点 X 坐标
  	 * @param dStartPointY 起始点 Y 坐标
  	 * @param dMidPointX 中间点 X 坐标
  	 * @param dMidPointY 中间点 Y 坐标
  	 * @param dEndPointX 结束点 X 坐标
  	 * @param dEndPointY 结束点 Y 坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * //由圆弧上三个点绘制圆弧
  	 * mxcad.drawArc2(800, 1000, 900, 1200, 1000, 900);
  	 * \`\`\`
  	 */
  	drawArc2(dStartPointX: number, dStartPointY: number, dMidPointX: number, dMidPointY: number, dEndPointX: number, dEndPointY: number): McObjectId;
  	/**
  	* 绘制圆弧
  	* @param dStartPointX 起始点 X 坐标
  	* @param dStartPointY 起始点 Y 坐标
  	* @param dEndPointX 结束点 X 坐标
  	* @param dEndPointY 结束点 Y 坐标
  	* @param dBulge 凸度
  	* @example
  	* \`\`\`ts
  	  import { MxCpp, McObject } from "mxcad"
  	  const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	  //由圆弧上的开始点，结束度和凸度会圆弧
  	  mxcad.drawLineWidth = 40;
  	  mxcad.drawArc3(1200, 1000, 1400, 1000, 0.6);
  	* \`\`\`
  	*/
  	drawArc3(dStartPointX: number, dStartPointY: number, dEndPointX: number, dEndPointY: number, dBulge: number): McObjectId;
  	/**
  	 * 绘制圆
  	 * @param dCenterX 圆心 X 坐标
  	 * @param dCenterY 圆心 Y 坐标
  	 * @param dRadius 半径
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD(
  	 * mxcad.drawCircle(0, 0, 120);
  	 * \`\`\`
  	 */
  	drawCircle(dCenterX: number, dCenterY: number, dRadius: number): McObjectId;
  	/**
  	 * 加载一个外部图片到当前上下文，方便后面使用。
  	 * @param imageUrl 图片路径
  	 * @param call 回调函数
  	 * @example
  	 * \`\`\`ts
  	  import { MxCpp, McObject } from "mxcad"
  	  const mxcad: McObject = MxCpp.getCurrentMxCAD()
  	  mxcad.loadImage(imagUrl, (image) => {
  		if (!image) {
  			console.log("loadImage failed");
  			return;
  		}
  		let width = mxcad.mxdraw.viewCoordLong2Cad(100);
  		let height = (image.height / image.width) * width;
  		idImage = mxcad.drawImage((pt as any).x, (pt as any).y, width, height, 0, imagUrl,true);
  		mxcad.updateDisplay();
  	 });
  	 * \`\`\`
  	 */
  	loadImage(imageUrl: string, call: (image: any) => void, imageFileName?: string): void;
  	/**
  	 * 绘制一个图片
  	 * @param dPosX 图片 X 坐标
  	 * @param dPosY 图片 Y 坐标
  	 * @param dWidth 图片宽度
  	 * @param dHeight 图片高度
  	 * @param dAng 图片角度,单位是度
  	 * @param imageUrl 图片路径
  	 */
  	drawImage(dPosX: number, dPosY: number, dWidth: number, dHeight: number, dAng: number, imageUrl: string, isConvertBase64?: boolean, dwgImageSizeWidth?: number, dwgImageSizeHeight?: number): McObjectId;
  	/**
  	 * 添加一个图片定义到cad数据库中 。
  	 * @param imageUrl 图片路径
  	 * @param sName 图片定义名称
  	 * @example
  	 * \`\`\`ts
  		import { MxCpp, McObject } from "mxcad"
  		let mxcad:McObject = MxCpp.getCurrentMxCAD();
  		let imagUrl = "https://cdn.pixabay.com/photo/2022/11/15/12/23/winter-7593872_960_720.jpg";
  		mxcad.loadImage(imagUrl, (imagedata) => {
  			if (!imagedata) {
  				console.log("loadImage failed");
  				return;
  			}
  			let imagedefid = mxcad.addImageDefine(imagUrl,"winter-7593872_960_720.jpg",true);
  			mxcad.updateDisplay();
  		});
  	 * \`\`\`
  	 */
  	addImageDefine(imageUrl: string, sName?: string, isConvertBase64?: boolean): McObjectId;
  	/**
  	 * 显示线重
  	*/
  	showLineWeight(isShow: boolean): boolean;
  	/**
  	 * 加载另一个dwg文件当前背景对象绘制.
  	*/
  	loadDwgBackground(sFileUrl: string, call: (ret: boolean) => void, color?: number, isShow?: boolean): void;
  	/**
  	 * 返回当前背景对象
  	*/
  	getBackgroundEntity(): McDbBackgroundEntity;
  	/**
  	 * 清除背景绘制对象
  	*/
  	clearDwgBackground(): void;
  	/**
  	 * 添加一个系统变量名，用于变量对像修改后，事件通知.
  	 * 变量对像修改事件名：sysVarChanged
  	*/
  	addSystemVarNameForEvent(aryVarName: string[]): void;
  	/**
  	 * 绘制椭圆
  	 * @param dCenterX 椭圆中心 X 坐标
  	 * @param dCenterY 椭圆中心 Y 坐标
  	 * @param dMajorAxisX 长轴 X 坐标
  	 * @param dMajorAxisY 长轴 Y 坐标
  	 * @param dRadiusRatio 短轴与长轴的比例
  	 * @returns 成功返回 1，失败返回 0
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawEllipse(0, 1400, 100, 0, 0.7);
  	 * \`\`\`
  	 */
  	drawEllipse(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number): McObjectId;
  	/**
  	 * 绘制椭圆弧
  	 * @param dCenterX 椭圆中心 X 坐标
  	 * @param dCenterY 椭圆中心 Y 坐标
  	 * @param dMajorAxisX 长轴 X 坐标
  	 * @param dMajorAxisY 长轴 Y 坐标
  	 * @param dRadiusRatio 短轴与长轴的比例
  	 * @param dStartAng 起始角度，单位为弧度
  	 * @param dEndAng 结束角度，单位为弧度
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawEllipseArc(0, 1600, 80, 30, 0.4, 30, 200);
  	 * \`\`\`
  	 */
  	drawEllipseArc(dCenterX: number, dCenterY: number, dMajorAxisX: number, dMajorAxisY: number, dRadiusRatio: number, dStartAng: number, dEndAng: number): McObjectId;
  	/**
  	 * 绘制点
  	 * @param dX X 坐标
  	 * @param dY Y 坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawPoint(0,0);
  	 * \`\`\`
  	 */
  	drawPoint(dX: number, dY: number): McObjectId;
  	/**
  	 * 绘制实体
  	 * @param dX1 第一个点 X 坐标
  	 * @param dY1 第一个点 Y 坐标
  	 * @param dX2 第二个点 X 坐标
  	 * @param dY2 第二个点 Y 坐标
  	 * @param dX3 第三个点 X 坐标
  	 * @param dY3 第三个点 Y 坐标
  	 * @param dX4 第四个点 X 坐标
  	 * @param dY4 第四个点 Y 坐标
  	 * @returns 实体对象id
  	 */
  	drawSolid(dX1: number, dY1: number, dX2: number, dY2: number, dX3: number, dY3: number, dX4: number, dY4: number): McObjectId;
  	/**
  	 * 绘制多行文本
  	 * @param dPosX 文本位置 X 坐标
  	 * @param dPosY 文本位置 Y 坐标
  	 * @param pszContents 文本内容
  	 * @param dHeight 文本高度
  	 * @param dWidth 文本宽度
  	 * @param dRotation 旋转角度，单位为弧度
  	 * @param iAttachment 对齐方式
  	 * @returns 多行文本对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawMText(0, -100, "控件:\\\\P多行文字测试", 50, 400, 0, 1);
  	 * \`\`\`
  	 */
  	drawMText(dPosX: number, dPosY: number, sContents: string, dHeight: number, dWidth: number, dRotation: number, iAttachment: McDb.AttachmentPoint): McObjectId;
  	/**
  	 * 绘制单行文本
  	 * @param dPosX 文本位置 X 坐标
  	 * @param dPosY 文本位置 Y 坐标
  	 * @param pszText 文本内容
  	 * @param dHeight 文本高度
  	 * @param dRotation 旋转角度，单位为弧度
  	 * @param horizontalMode 横向对齐方式
  	 * @param verticalMode 纵向对齐方式
  	 * @returns 成功返回 1，失败返回 0
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawText(0, 1900, "绘图控件文字测试", 100, 0, 0, 1);
  	 * \`\`\`
  	 */
  	drawText(dPosX: number, dPosY: number, pszText: string, dHeight: number, dRotation: number, horizontalMode: McDb.TextHorzMode, verticalMode: McDb.TextVertMode): McObjectId;
  	/**
  	 * 绘制块参照
  	 * @param dPosX 参照位置 X 坐标
  	 * @param dPosY 参照位置 Y 坐标
  	 * @param pszBlkName 块名
  	 * @param dScale 缩放比例
  	 * @param dAng 旋转角度，单位为弧度
  	 * @returns 块对象id
  	 */
  	drawBlockReference(dPosX: number, dPosY: number, sBlkName: string, dScale: number, dAng: number): McObjectId;
  	/**
  	 * 绘制对齐标注
  	 * @param dExtLine1PointX 第一条尺线起点 X 坐标
  	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标
  	 * @param dExtLine2PointX 第二条尺线起点 X 坐标
  	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标
  	 * @param dTextPositionX 文本位置 X 坐标
  	 * @param dTextPositionY 文本位置 Y 坐标
  	 * @returns 成功返回 1，失败返回 0
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimAligned(0, 4000, 300, 4500, 150, 4600);
  	 * \`\`\`
  	 */
  	drawDimAligned(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dTextPositionX: number, dTextPositionY: number): McObjectId;
  	/**
  	 * 绘制角度标注
  	 * @param dAngleVertexX 角度顶点 X 坐标
  	 * @param dAngleVertexY 角度顶点 Y 坐标
  	 * @param dFirstEndPointX 第一条尺线起点 X 坐标
  	 * @param dFirstEndPointY 第一条尺线起点 Y 坐标
  	 * @param dSecondEndPointX 第二条尺线起点 X 坐标
  	 * @param dSecondEndPointY 第二条尺线起点 Y 坐标
  	 * @param dTextPointX 文本位置 X 坐标
  	 * @param dTextPointY 文本位置 Y 坐标
  	 * @returns 成功返回 1，失败返回 0
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimAngular(500, 5000, 0, 5500, 1000, 5500, 500, 5500);
  	 * \`\`\`
  	 */
  	drawDimAngular(dAngleVertexX: number, dAngleVertexY: number, dFirstEndPointX: number, dFirstEndPointY: number, dSecondEndPointX: number, dSecondEndPointY: number, dTextPointX: number, dTextPointY: number): McObjectId;
  	/**
  	 * 绘制直径标注
  	 * @param dChordPointX 弦线端点 X 坐标
  	 * @param dChordPointY 弦线端点 Y 坐标
  	 * @param dFarChordPointX 弦线远端点 X 坐标
  	 * @param dFarChordPointY 弦线远端点 Y 坐标
  	 * @param dLeaderLength 引线长度
  	 * @returns 直径标注对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimDiametric(500, 0, -500, 0, 20);
  	 * \`\`\`
  	 */
  	drawDimDiametric(dChordPointX: number, dChordPointY: number, dFarChordPointX: number, dFarChordPointY: number, dLeaderLength: number): McObjectId;
  	/**
  	 * 绘制旋转标注
  	 * @param dExtLine1PointX 第一条尺线起点 X 坐标
  	 * @param dExtLine1PointY 第一条尺线起点 Y 坐标
  	 * @param dExtLine2PointX 第二条尺线起点 X 坐标
  	 * @param dExtLine2PointY 第二条尺线起点 Y 坐标
  	 * @param dDimLineLocationX 标注线位置 X 坐标
  	 * @param dDimLineLocationY 标注线位置 Y 坐标
  	 * @param dRotationAngle 旋转角度，单位为弧度
  	 * @returns 旋转标注对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimRotated(0, 7000, 600, 7000, 250, 7050, 0);
  	 * \`\`\`
  	 */
  	drawDimRotated(dExtLine1PointX: number, dExtLine1PointY: number, dExtLine2PointX: number, dExtLine2PointY: number, dDimLineLocationX: number, dDimLineLocationY: number, dRotationAngle: number): McObjectId;
  	/**
  	 * 绘制标注线性尺寸
  	 * @param dDefinitionPointX - 定义点 X 坐标
  	 * @param dDefinitionPointY - 定义点 Y 坐标
  	 * @param dDeaderEndPointX - 标注终点 X 坐标
  	 * @param dDeaderEndPointY - 标注终点 Y 坐标
  	 * @param isUseXAxis - 是否沿 X 轴方向标注
  	 * @returns 线性尺寸对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimOrdinate(500, 0, -500, 0, true);
  	 * \`\`\`
  	 */
  	drawDimOrdinate(dDefinitionPointX: number, dDefinitionPointY: number, dDeaderEndPointX: number, dDeaderEndPointY: number, isUseXAxis: boolean): McObjectId;
  	/**
  	 * 绘制标注径向尺寸
  	 * @param dCenterX - 中心点 X 坐标
  	 * @param dCenterY - 中心点 Y 坐标
  	 * @param dChordPointX - 弦线端点 X 坐标
  	 * @param dChordPointY - 弦线端点 Y 坐标
  	 * @param dLeaderLength - 标注线长度
  	 * @returns 径向尺寸对象id
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.drawDimOrdinate(0, 0, 0, 500, 20);
  	 * \`\`\`
  	 */
  	drawDimRadial(dCenterX: number, dCenterY: number, dChordPointX: number, dChordPointY: number, dLeaderLength: number): McObjectId;
  	/**
  	 * 将路径移动到指定位置
  	 * @param dX - X 坐标
  	 * @param dY - Y 坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.pathMoveTo(0, 300);
  	 * \`\`\`
  	 */
  	pathMoveTo(dX: number, dY: number): void;
  	/**
  	 * 移动路径到指定位置，同时指定起始宽度、终止宽度和凸度
  	 * @param dX - X 坐标
  	 * @param dY - Y 坐标
  	 * @param dStartWidth - 起始宽度
  	 * @param dEndWidth - 终止宽度
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.pathMoveToEx(1000, 300, 10, 10, 0);
  	 * \`\`\`
  	 */
  	pathMoveToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
  	/**
  	 * 从当前位置画一条直线到指定位置
  	 * @param dX - X 坐标
  	 * @param dY - Y 坐标
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.pathLineTo(100, 300);
  	 * \`\`\`
  	 */
  	pathLineTo(dX: number, dY: number): void;
  	/**
  	 * 从当前位置画一条直线到指定位置，同时指定起始宽度、终止宽度和凸度
  	 * @param dX - X 坐标
  	 * @param dY - Y 坐标
  	 * @param dStartWidth - 起始宽度
  	 * @param dEndWidth - 终止宽度
  	 * @param dBulge - 凸度
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp, McObject } from "mxcad"
  	 * const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	 * mxcad.pathLineToEx(1000, 500, 30, 0, 0);
  	 * \`\`\`
  	 */
  	pathLineToEx(dX: number, dY: number, dStartWidth: number, dEndWidth: number, dBulge: number): void;
  	/**
  	 * 根据圆对象创建一个路径
  	 * @example
  	 * \`\`\`ts
  	   import { MxCpp, McObject } from "mxcad"
  	   const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	   mxcad.pathCircle(0, 0, 20);
  	 * \`\`\`
  	*/
  	pathCircle(dCenX: number, dCenY: number, dR: number, dPrecision?: number, dWidth?: number): boolean;
  	/**
  	 * 将路径转换为折线
  	 * @returns 转换结果
  	 */
  	drawPathToPolyline(): McObjectId;
  	/**
  	 * 将路径转换为样条曲线
  	 * @returns 转换结果
  	 */
  	drawPathToSpline(): McObjectId;
  	/**
  	 * 闭合路径
  	 */
  	pathMakeClosed(): void;
  	/**
  	 * 将路径转换为填充图案
  	 * @param dPatternScale - 图案缩放比例
  	 * @returns 转换结果
  	 * @example
  	 * \`\`\`ts
  		import { MxCADUiPrPoint, MxCADUiPrDist, MxCpp } from "mxcad";
  		// 实心圆
  		async function Mx_SolidCircle() {
  			const getCenter = new MxCADUiPrPoint();
  			getCenter.setMessage('请确定圆心位置\\n');
  			const center = await getCenter.go();
  			if (!center) return;
  			const getRadius = new MxCADUiPrDist();
  			getRadius.setBasePt(center);// 设置距离基点为圆心
  			getRadius.setMessage('请输入圆半径');
  			getRadius.setUserDraw((pt, pw) => {
  				const r = pt.distanceTo(center);
  				const circle = new McDbCircle();
  				circle.center = center;
  				circle.radius = r;
  				pw.drawMcDbEntity(circle)
  			})
  			const radiusVal = await getRadius.go();
  			if (!radiusVal) return;
  			const radius = getRadius.value();
  			const mxcad = MxCpp.getCurrentMxCAD();
  			mxcad.pathCircle(center.x, center.y, radius);//设置圆路径
  			mxcad.drawPathToHatch();// 绘制实心圆
  		}
  	 * \`\`\`
  	 */
  	drawPathToHatch(dPatternScale?: number): McObjectId;
  	/**
  	 * 绘制实体
  	 * @param entity - 实体对象
  	 * @returns 绘制结果
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbPolyline, MxCpp } from
  	 * let pl = new McDbPolyline();
  	   pl.addVertexAt(new McGePoint3d(100, 100, 100));
  	   pl.addVertexAt(new McGePoint3d(200, 100, 500));
  	   pl.addVertexAt(new McGePoint3d(300, 400, 200));
  	   MxCpp.getCurrentCAD().drawEntity(pl);
  	 * \`\`\`
  	 */
  	drawEntity(entity: McDbEntity, isUseDatabaseCurrentProperties?: boolean): McObjectId;
  	/**
  	* 绘制填充对象
  	* @param entity - 填充对象对象
  	* @returns 绘制对象id
  	*/
  	drawHatch(hatch: McDbHatch, dPatternScale?: number): McObjectId;
  	/**
    * 将 lIdIndex 转换成 McDbObject 对象
    * @param lIdIndex - 对象 ID
    * @returns 与 ID 对应的 McDbObject 对象，如果对象不存在则返回 null
    */
  	objectIdToObject(lIdIndex: number): McDbObject | null;
  	/**
  	 * 销毁指定的 McRxObjectImp 对象
  	 * @param pObjectImp - 待销毁的 McRxObjectImp 对象
  	 */
  	destroyObject(pObjectImp: McRxObjectImp): void;
  	/**
  	* 得到所有布局名
  	*/
  	getAllLayoutName(): McGeStringArray;
  	/**
  	* 设置当前布局名
  	* @param layoutName 布局名称
  	*/
  	setCurrentLayout(layoutName: string): void;
  	/**
  	 * 返加MxCpp对象，它会在MxDraw模块中调用。
  	*/
  	getMxCpp(): any;
  	/**
     * 返回当前视区的显示范围,cad坐标。
     * @returns 当前视区显示范围
     */
  	getViewCADCoord(): {
  		pt1: McGePoint3d;
  		pt2: McGePoint3d;
  		pt3: McGePoint3d;
  		pt4: McGePoint3d;
  	};
  	/**
  	 * 更新显示
  	 * @param isImmediate 是否立即更新
  	 * @param delayTime 延迟更新时间
  	*/
  	updateDisplay(isImmediate?: boolean, delayTime?: number): void;
  	/**
  	* 更新图层的显示
     */
  	updateLayerDisplayStatus(): void;
  	/**
     * 初始化用户注册数据.
     * @param sRegist 注册数据
    */
  	initRegist(sRegist: string): void;
  	/**
  	* 初始化用户授权服务url.
  	*/
  	iniAuthorizedService(sUrl: string): void;
  	/**
  	 * 当前程序是否是试用版本.
  	*/
  	isTryVersion(): boolean;
  	/**
  	* 设置视区的背景色.
  	* @example
  	* \`\`\`ts
  	* import { MxCpp, McObject } from "mxcad"
  	* const mxcad:McObject = MxCpp.getCurrentMxCAD()
  	* mxcad.setViewBackgroundColor(255, 255, 255)
  	* \`\`\`
     */
  	setViewBackgroundColor(red: number, green?: number, blue?: number): void;
  	/**
  	* 返回视区的背景色，0XFF(red)FF(green)FF(blue)
  	* @example
  	* \`\`\`ts
  	* \`\`\`
     */
  	getViewBackgroundColor(): number;
  	/**
  	 * 返回当前数据库中设置的绘制颜色，它会自动依据背景色，把黑白色转换。
  	*/
  	getCurrentDatabaseDrawColor(): THREE.Color;
  	/**
  	 * 回退到上一个命令或标记处
  	*/
  	undo(): void;
  	/**
  	 *反回退，重做。
  	*/
  	redo(): void;
  	/**
  	 *在当前设置一个回退标记.
  	*/
  	undoMark(): void;
  	/**
  	 *回退标记索引加1.
  	 *在非命令函数里面修改数据据对象，需要回退标记索引加1，这样会记录修改，不然可能会认为上一次的命令修改，跳过当前修改回退记录.
  	 *在命令里面会自动回退标记索引加1
  	*/
  	undoIndexIncrease(): void;
  }
  /**
   * McAppType 类，提供了 MxCAD 的一些基本操作。
   * @example
   * \`\`\`ts
   * import { MxCpp } from "mxcad";
   *
   * const McAppType = MxCpp.App;
   * \`\`\`
   */
  export  class McAppType {
  	/** 内部实现对象 */
  	private imp;
  	/**
  	 * @internal
  	 * MxCAD辅助,内部使用
  	 * \`\`\`
  	 */
  	MxCADAssist: any;
  	/** id 转换为 McDbObject */
  	private objectIdToObjectCalls;
  	/** 根据类型转为实例 */
  	private classNameToCreateCalls;
  	/** shx字体 */
  	private shxFonts;
  	/** shx big 字体 */
  	private shxBigFonts;
  	/** TrueType字体 */
  	private trueFonts;
  	private dMcGeBakTol;
  	/**
  	 * 初始化 McAppType 对象。
  	 * @param imp 传入的 imp 对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const imp = MxCpp.App.getImp();
  	 * MxCpp.App.init(imp);
  	 * \`\`\`
  	 */
  	init(imp: any): void;
  	/**
  	 * 设置McAppType的 imp 对象。
  	 * @param imp 传入的 imp 对象。
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	 */
  	setImp(imp: any): void;
  	/**
  	 * 获取 imp 对象。
  	 * @returns 返回 imp 对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const imp = MxCpp.App.getImp()
  	 * \`\`\`
  	 */
  	getImp(): any;
  	/**
  	 * 获取最后一次调用的结果。
  	 * @returns 返回最后一次调用的结果
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const result = MxCpp.App.getLastCallResult();
  	 * console.log("最后一次调用结果：", result);
  	 * \`\`\`
  	 */
  	getLastCallResult(): number;
  	/**
  	 * 销毁对象。
  	 * @param pObject 要销毁的对象。
  	 */
  	destroyObject(pObject: McRxObjectImp): void;
  	/**
  	 * 获取当前的 MxDraw 对象。
  	 * @returns 返回当前的 McObject 对象。
  	 * @example
  	 * \`\`\`ts
  	 * //添加图层
  	 * import { MxCpp } from 'mxcad'
  	 * // 获取当前cad对象
  	 * let mxcad = MxCpp.App.getCurrentMxCAD();
  	 * // 获取图层表
  	 * let layerTable = mxcad.getDatabase().getLayerTable();
  	 * if (!layerTable.has("xxx11")) {
  	 *   let newLayer = new McDbLayerTableRecord();// 构造新图层记录对象
  	 *   newLayer.name = "xxx11";// 设置新图层名为："xxx11"
  	 *   layerTable.add(newLayer);// 图层表新增图层记录对象
  	 * }
  	 *
  	 * if (layerTable.has("xxx11")) {
  	 *   console.log("add layer ok");
  	 * }
  	 * \`\`\`
  	 */
  	getCurrentMxCAD(): McObject;
  	/**
  	 * 将 RGB 值转换为索引。
  	 * @param red 红色值。
  	 * @param green 绿色值。
  	 * @param blue 蓝色值。
  	 * @param bAutoNearest 是否自动获取最近的颜色值。
  	 * @returns 返回转换后的索引值。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from 'mxcad'
  	 * const colorIndex = MxCpp.App.mcedRGB2Index(255, 0, 0, bAutoNearest)
  	 * \`\`\`
  	 */
  	mcedRGB2Index(red: number, green: number, blue: number, bAutoNearest?: boolean): number;
  	/**
  	 * 设置默认的视区的背景色.
  	 * @param red 红色值。
  	 * @param green 绿色值。
  	 * @param blue 蓝色值。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from 'mxcad'
  	 * MxCpp.App.setDefaultViewBackgroundColor(0, 0, 0)
  	 * \`\`\`
  	 */
  	setDefaultViewBackgroundColor(red: number, green: number, blue: number): void;
  	/**
  	 * 判断一个对象id是否指类类型名对象
  	 * @param lIdIndex 对象id索引
  	 * @param className 对象名称
  	 * @return 返回布尔值
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity } from "mxcad";
  	 * // 选择目标对象
  	 * let selEntity = new MxCADUiPrEntity();
  	 * selEntity.setMessage("选择对象");
  	 * let val = await selEntity.go();
  	 * if (!val.isValid()) return;
  	 * // 判断目标对象是为多段线类
  	 * const isSuccess = MxCpp.objectIdIsKindOf(val.id, "McDbPolyline");
  	 * if(isSuccess){
  	 *   console.log("目标对象为多段线")
  	 * }else{
  	 *   console.log("目标对象不为多段线")
  	 * }
  	 * \`\`\`
  	 */
  	objectIdIsKindOf(lIdIndex: number, className: string): boolean;
  	/**
  	 * 初始化绘图环境、加载插件、设置绘图参数、创建对象等操作
  	 */
  	private initCalls;
  	/**
  	 * 将对象 id 转换为 McDbObject 对象。
  	 * @param lIdIndex 对象的 id。
  	 * @returns 返回转换后的 McDbObject 对象，如果转换失败，则返回 null。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, MxCpp } from "mxcad";
  	 * // 获取目标对象
  	 * let selEntity = new MxCADUiPrEntity();
  	 * let val = await selEntity.go();
  	 * if (!val.isValid()) return;
  	 * const obj = MxCpp.App.objectIdToObject(val.id);
  	 * console.log(obj)
  	 * \`\`\`
  	 */
  	objectIdToObject(lIdIndex: number): McDbObject | null;
  	/**
  	 * 创建克隆对象。
  	 * @param clonobjImp 被克隆的对象。
  	 * @returns 返回创建的 McDbObject 对象。
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCADUiPrEntity, MxCpp } from "mxcad";
  	 * // 获取目标对象
  	 * let selEntity = new MxCADUiPrEntity();
  	 * let val = await selEntity.go();
  	 * if (!val.isValid()) return;
  	 *
  	 * const obj = MxCpp.App.objectIdToObject(val.id);// 对象id转 McDbObject 对象
  	 * const obj_clone = MxCpp.App.createCloneObject(obj?.getImp());// 克隆目标对象
  	 * \`\`\`
  	 */
  	createCloneObject(clonobjImp: any): McDbObject | null;
  	/**
  	 * 配置字体加载位置，默值是fonts
  	 * @param path 字体文件路径
  	 */
  	setFontFilePath(path: string): void;
  	/**
  	 * 配置默认的TrueType字体
  	 * @param sTrueTypeFontName TrueType字体名
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * //设置默认TrueType字体为Arial.ttf
  	 * mxcad.on("init_cpp", async () => {
  	 *    MxCpp.App.setDefaultTrueTypeFontFile("Arial.ttf");
  	 * })
  	 * \`\`\`
  	 */
  	setDefaultTrueTypeFontFile(sTrueTypeFontName: string): void;
  	/**
     * 配置默认的shx,bigshx字体
     * @param shx,bigshx shx字体名
     * @example
     * \`\`\`ts
     * import { MxCpp } from "mxcad";
     * mxcad.on("init_cpp", async () => {
     *   MxCpp.App.setDefaultShxFontFile("txt.shx","hztxt.shx");
     * })
     * \`\`\`
     */
  	setDefaultShxFontFile(sShxFile: string, sBigShxFile: string): void;
  	/**
  	* 配置需要通过网络加载的shx字体
  	* @param fontfiles 加载的字体文件
  	* @example
  	* \`\`\`ts
  	* import { MxCpp } from 'mxcad';
  	* import { MxFun } from "mxdraw";
  	*
  	* // MxCAD创建成功
  	* MxFun.on("mxcadApplicationCreatedMxCADObject", () => {
  	*   MxCpp.App.addNetworkLoadingFont( ["txt.shx","simplex.shx","aaa.shx","ltypeshp.shx","complex.shx"]);
  	* }
  	* \`\`\`
  	*/
  	addNetworkLoadingFont(fontfiles: string | string[], fontFilesLoadOnInitialization?: string[], isAddTo?: boolean): void;
  	/**
     * 全局参数的初始设置
     * @param ini 初始设置值
     * ini.UseUtf8: c++程序是否使用utf8编码格式。
     * ini.McGeTol: 几何计算时，点和向量变量判断是否相等的精度范围，默认值是1.0E-7。
     * ini.EnableObjectModificationEvent: 1启用对象被增加，删除通知道事件，2：启用对象被修改知道事件，默认值为0
     * @example
     * \`\`\`ts
     * \`\`\`
     */
  	IniSet(ini: any): boolean;
  	/**
  	* 设置几何计算时，点和向量变量判断是否相等的精度范围，默认值是1.0E-7
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	setMcGeTol(dTol: number): number;
  	/**
  	* 恢复几何计算时，点和向量变量判断是否相等的默认精度范围值
  	* @example
  	* \`\`\`ts
  	* \`\`\`
  	*/
  	restoreMcGeTol(): void;
  	/**
  	* 配置需要通过网络加载的bigfont shx字体
  	* @param fontfiles 加载的字体文件
  	* @example
  	* \`\`\`ts
  	* import { MxCpp } from 'mxcad'
  	* import { MxFun } from "mxdraw";
  	*
  	* // MxCAD创建成功
  	* MxFun.on("mxcadApplicationCreatedMxCADObject", () => {
  	*   MxCpp.App.addNetworkLoadingBigFont(["hztxt.shx", "gbcbig.shx"]);
  	* }
  	* \`\`\`
  	*/
  	addNetworkLoadingBigFont(fontfiles: string | string[], fontFilesLoadOnInitialization?: string[], isAddTo?: boolean): void;
  	/**
  	* 配置需要通过网络加载的Truetype字体
  	* @param fontname 字体名
  	* @param fontzhName 字体中文名
  	* @param fontfile 加载字体文件
  	* @example
  	* \`\`\`ts
  	* import { MxCpp } from 'mxcad'
  	* import { MxFun } from "mxdraw";
  	*
  	* // MxCAD创建成功
  	* MxFun.on("mxcadApplicationCreatedMxCADObject", () => {
  	*   MxCpp.App.addNetworkLoadingTrueTypeFont(["simsun","syadobe"],["思原宋体","思原黑体"],["stadobe.otf","syadobe.otf"]);
  	* }
  	* \`\`\`
  	*/
  	addNetworkLoadingTrueTypeFont(fontname: string[], fontzhName: string[], fontfile: string[], fontNamesLoadOnInitialization?: string[]): void;
  	/**
  	 * 得到当前支持的所有shx字体.
  	 * @return 字体数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const fontArr = MxCpp.App.getShxFonts();
  	 * console.log(fontArr);
  	 * \`\`\`
  	 */
  	getShxFonts(): string[];
  	/**
  	 * 得到当前支持的所有bigfont shx字体.
  	 * @return 字体数组
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const bigFontArr = MxCpp.App.getShxBigFonts();
  	 * console.log(bigFontArr);
  	 * \`\`\`
  	 */
  	getShxBigFonts(): string[];
  	/**
  	* 通知cad程序，将来要使用的字体需要加载，方便后面程序使用.
  	* @param vecShxFonst shx字体
  	* @param vecBigShxFonst bigfont shx字体
  	* @param vecTureTypeFonts Truetype字体
  	* @param retCall 回调函数
  	* @example
  	* \`\`\`ts
  	  import { MxCpp } from 'mxcad';
  
  	  //修改文字样式
  	  function Mx_Test_TrueText(){
  	  let mxcad = MxCpp.getCurrentMxCAD();
  	  //清空当前显示内容
  	  mxcad.newFile();
  	  MxCpp.App.loadFonts([], [], ["syadobe","simsun"], () => {
  		// 添加一个黑体文字样式
  		mxcad.AddTureTypeTextStyle("ht_style","syadobe");
  		// 添加一个宋体文字样式
  		mxcad.AddTureTypeTextStyle("st_style","simsun");
  		// 设置当前样式为黑体
  		mxcad.drawTextStyle = "ht_style";
  		mxcad.drawColor = new McCmColor(200, 255, 50);
  		let idText = mxcad.drawText(0, 3500, "绘图控件TrueType文字测试", 100, 0, 0, 1);
  		let ent = idText.getMcDbEntity();
  		// 修改文字样式为宋体
  		if(ent) ent.textStyle = "st_style";
  		mxcad.zoomAll();
  		mxcad.regen();
  		mxcad.updateDisplay();
  	   });
  	 }
  	* \`\`\`
  	*/
  	loadFonts(vecShxFonts: string[], vecBigShxFonts: string[], vecTureTypeFonts: string[], retCall: () => void): void;
  	/**
  	 * 得到该字体是否已经从网上加载
  	 * @returns boolean
  	 * @example
  	 * \`\`\`ts
  	 * \`\`\`
  	*/
  	isAlreadyLoaded(sFont: string, iType?: number): boolean;
  	/**
  	 * 得到当前支持的所有TrueType字体.
  	 * @returns { object } name 字体名| zhname 字体中文名 | file 字体文件
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const trueTypeFontArr = MxCpp.App.getTrueTypeFonts();
  	 * console.log(trueTypeFontAr);
  	 * \`\`\`
  	*/
  	getTrueTypeFonts(): {
  		name: string;
  		zhname: string;
  		file: string;
  	}[];
  	/**
  	 * 得当前程序的版本信息
  	 * @return 版本信息
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const version = MxCpp.App.getVersionString();
  	 * console.log("版本信息", version);
  	 * \`\`\`
  	 */
  	getVersionString(): string;
  	/**
  	 * 得当前程序的数字日期版本信息
  	 * @return 数字日期版本信息
  	 */
  	GetVersionDateString(): string;
  	/**
  	 * new 一个McObjectId对象。
  	 * @return 返回新创建的McObjectId
  	 */
  	newMcObjectId(id?: number, type?: McObjectIdType): McObjectId;
  }
  /**
   * MxCppType 类封装了一系列与 CAD 相关的操作，包括创建点、向量、获取当前对象等
   */
  export  class MxCppType {
  	/**
  	 * MxCpp 程序集
  	 * @example
  	 * \`\`\`ts
  	 * //获取与修剪相关的信息
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * let mxcadTrimAssert = new MxCpp.mxcadassemblyimp.MxDrawTrimAssist()
  	 * \`\`\`
  	 */
  	mxcadassemblyimp?: any;
  	/**
  	 * McAppType 实例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * const McAppType = MxCpp.App;
  	 * \`\`\`
  	 */
  	App: McAppType;
  	/**
  	 * PropertiesWindow 属必窗口功能调用实例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * // 属性界面上，对象属性被修改事件。
  	 * MxCpp.PropertiesWindow.onEvent_setProperties((id: McObjectId, prop: any) => {
  	 *   let ent = id.getMcDbEntity();
  	 *   if (!ent) return;
  	 *   if (prop.sVarName == "DN") {
  	 *         ent.setxDataDouble("DN", prop.val);
  	 *   }
  	 *  else if (prop.sVarName == "LEN") {
  	 *      ent.setxDataDouble("LEN", prop.val);
  	 *   }
  	 * });
  	 * \`\`\`
  	 */
  	PropertiesWindow: MxPropertiesWindowCustom;
  	/**
  	 * Mx AI实例
  	 */
  	Ai: MxAI;
  	/**
  	 * 获取上一次调用的结果
  	 * @returns {number} 调用结果
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const res = MxCpp.getCallResult();
  	 * console.log(res);
  	 * \`\`\`
  	 */
  	getCallResult(): number;
  	/**
  	 * 创建新的 McGePoint3d 实例
  	 * @param {any} pt 点坐标
  	 * @returns {McGePoint3d} McGePoint3d 实例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const pt = MxCpp.newMcGePoint3d({x:10,y:10,z:0});
  	 * console.log(pt)
  	 * \`\`\`
  	 */
  	newMcGePoint3d(pt?: any): McGePoint3d;
  	/**
  	 * 创建新的 McGeVector3d 实例
  	 * @param {any} pt 点坐标
  	 * @returns {McGePoint3d} McGePoint3d 实例
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const vec = MxCpp.newMcGeVector3d({x:10,y:10,z:0});
  	 * console.log(vec)
  	 * \`\`\`
  	 */
  	newMcGeVector3d(pt?: any): McGeVector3d;
  	/**
  	 * 返回当前活动的CAD对象
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * const mxcad = MxCpp.getCurrentMxCAD();
  	 * \`\`\`
  	 */
  	getCurrentMxCAD(): McObject;
  	/**
  	 * 返回当前活动的CAD对象的数据库对象.
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * const dataBase = MxCpp.getCurrentDatabase();
  	 * \`\`\`
  	 */
  	getCurrentDatabase(): McDbDatabase;
  	/**
  	 * 把hex格式的Gb2312编码的转成utf8
  	 * @param strHex Gb2312编码
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 *
  	 * const gb2312Hex = "%c4%e3%ba%c3";
  	 * const decodedString = MxCpp.decodeFromGb2312(gb2312Hex);
  	 * console.log("Decoded string from GB2312 hex:", decodedString);
  	 * \`\`\`
  	 */
  	decodeFromGb2312(strHex: string): string;
  	/**
  	 * 把utf8转成hex格式的Gb2312编码
  	 * @param str 字符串
  	 * @example
  	 * \`\`\`ts
  	 * import { MxCpp } from "mxcad";
  	 * const stringToEncode = "你好";
  	 * const encodedHex = MxCpp.encodeToGb2312(stringToEncode);
  	 * console.log("Encoded string to GB2312 hex:", encodedHex);
  	 * \`\`\`
  	 */
  	encodeToGb2312(str: string): string;
  }
  /**
   * MxCADUI 模块提供插件程序使用的接口.
   */
  export interface MxCADUI {
  	/**
  	 * 获取文件下载配置
  	 */
  	getUploadFileConfig: () => {
  		baseUrl: string;
  		saveDwgUrl: string;
  		mxfilepath: string;
  		saveUrl: string;
  		printPdfUrl: string;
  		cutDwgUrl: string;
  	};
  	/**
  	* 获取mxServerConfig.json文件配置
  	*/
  	getServerConfig: () => any;
  	/**
  	 * 初始化
  	 * @param plugin 基础配置
  	 */
  	init: (plugin: MxCADPluginBase) => void;
  	/**
  	* 上传一个文件，并格式转换，然用于后续处理。
  	*/
  	uploadFile: (uploadFile_call: (param: any) => void, isReloadFile: boolean) => void;
  	/**
  	* 当前程序是否在MxCADAppNpm打包模式下运行。
  	*/
  	isMxCADAppLib: () => boolean;
  	/**
  	 * mxcad对象
  	 */
  	mxcad: McObject;
  	/**
  	 * mxmap对象
  	 */
  	mxmap: MxMap;
  }
  /**
   * 初始化、管理或查询地图相关联的默认数据
   * @example
   * \`\`\`ts
   * //设置地图加载的缺省数据
   * import { MxCADPluginMapDefaultData } from "mxcad";
   *
   * let map_default_data = new MxCADPluginMapDefaultData();
   * // CAD图纸与地图的对齐点.
   * map_default_data.cadOrigin = [116275.977014, 19273.279085];
   *
   * // 12698436.047373507,2575109.229937706,12698641.731873507,2575240.5864377064
   * // 地图与CAD图纸的对齐位置 。
   * map_default_data.mapOrigin = [114.06825863001939, 22.54283198132819];
   * // CAD图上一个绘图单是地图上多少米.
   * map_default_data.meterInCADUnits = 1.0;
   * // 需要打开的cad图纸.
   * map_default_data.openFile = './demo/road.dwg.mxweb'
   * \`\`\`\`
   */
  export  class MxCADPluginMapDefaultData {
  	/**  地图与CAD图纸的对齐位置 */
  	mapOrigin: number[];
  	/** CAD图纸与地图的对齐点 */
  	cadOrigin: number[];
  	meterInCADUnits: number;
  	/** mapbox地图token */
  	mapbox_accessToken: string;
  	/** 需要打开的cad图纸 */
  	openFile?: string;
  	/** 栅格瓦片图层列表 */
  	rasterTileLayerList: any[];
  	/** 矢量瓦片关键词*/
  	rasterTileKey?: string;
  	providers?: any;
  	/** 背景颜色 */
  	viewColor?: {
  		red: number;
  		green: number;
  		blue: number;
  	};
  }
  /**
   * MxCADUI 模块提供的示例代码
   */
  export  class MxCADPluginSampleCode {
  	/**  示例代码在那个类型中 */
  	type: string;
  	/**  示例代码在名称 */
  	name: string;
  	/** 示例代码内容 */
  	code: string;
  }
  /** mxcad 基础配置 */
  export  class MxCADPluginBase {
  	/** 注册数据 */
  	sRegistData: string;
  	/**插件程序使用的接口  */
  	mxcadui?: MxCADUI;
  	/** 打开的文件 */
  	openFile?: string;
  	/** 地图默认配置 */
  	map_default_data?: MxCADPluginMapDefaultData;
  	/** 示例代码 */
  	sampleCode?: MxCADPluginSampleCode[];
  }
  /** 自定义属性窗口的值的类型 */
  export  enum MxPropertiesWindowCustomValueType {
  	/** 整数 */
  	kInt = 1,
  	/** 双精度浮点数 */
  	kDouble = 2,
  	/** 字符串 */
  	kString = 3
  }
  /** 自定义属性窗口需要的值 */
  export  class MxPropertiesWindowCustomValue {
  	/** 自定义属性窗口名 */
  	sVarName: string;
  	/** 自定义属性窗口类型 */
  	iVarType: number;
  	/** 自定义属性窗口值 */
  	val: any;
  	/** 是否只读 */
  	isOnlyRead: boolean;
  }
  /**
   * MxPropertiesWindowCustom 属性窗口添加自定义属性.
   */
  export  class MxPropertiesWindowCustom {
  	private getPropertiesCall;
  	private setPropertiesCall;
  	/**
  	 * 插件程序程序调用，注册返回对象自定属性函数。
  	 * @example
  	 * \`\`\`ts
  	   // 属性界面上，得到对象属性事件。
  		MxCpp.PropertiesWindow.onEvent_getProperties((id: McObjectId) => {
  			let ent = id.getMcDbEntity();
  			if (!ent) return [];
  			let dn = ent.getxDataDouble("DN");
  			let len = ent.getxDataDouble("LEN");
  			let ret = [];
  
  			if (dn.ret) {
  				ret.push({
  					sVarName: "DN",
  					iVarType: MxPropertiesWindowCustomValueType.kDouble,
  					val: dn.val,
  					isOnlyRead: false
  				});
  			}
  
  			if (len.ret) {
  				ret.push({
  					sVarName: "LEN",
  					iVarType: MxPropertiesWindowCustomValueType.kDouble,
  					val: len.val,
  					isOnlyRead: false
  				});
  			}
  			return ret;
  		})
  	 * \`\`\`
  	 */
  	onEvent_getProperties(call: (id: McObjectId) => MxPropertiesWindowCustomValue[]): void;
  	/**
  	 * 插件程序程序调用，注册设置对象自定属性函数。
  	 * @example
  	 * \`\`\`ts
  	   // 属性界面上，对象属性被修改事件。
  		MxCpp.PropertiesWindow.onEvent_setProperties((id: McObjectId, prop: any) => {
  			let ent = id.getMcDbEntity();
  			if (!ent) return;
  			if (prop.sVarName == "DN") {
  				ent.setxDataDouble("DN", prop.val);
  			}
  			else if (prop.sVarName == "LEN") {
  				ent.setxDataDouble("LEN", prop.val);
  			}
  		});
  	 * \`\`\`
  	 */
  	onEvent_setProperties(call: (id: McObjectId, prop: MxPropertiesWindowCustomValue) => void): void;
  	/**
  	 * 插件程序程序调用，设置该对象状态支持自定义属性在属性窗口显示。
  	 * @example
  	 * \`\`\`ts
  	   import { MxCADUiPrEntity, MxCpp } from "mxcad";
  
  	   // 设置对象扩展属性值。
  	   async function Mx_TestExProp() {
  		 let selEntity1 = new MxCADUiPrEntity();
  
  		 selEntity1.setMessage("选择要需要开启自定义属性的对象");
  		 let idText = await selEntity1.go();
  		 if (!idText.isValid()) return;
  
  		 let ent = idText.getMcDbEntity();
  		 MxCpp.PropertiesWindow.setEntitySupportCustom(idText);
  
  		 // 设置对象扩展属性值。
  		 ent.setxDataDouble("DN", 100);
  		 ent.setxDataDouble("LEN", 2000);
  	  }
  	 * \`\`\`
  	 */
  	setEntitySupportCustom(id: McObjectId, isCustomProperties?: boolean): void;
  	/** 属性UI程序调用，获取给定实体的自定义属性 */
  	getEntityProperties(id: McObjectId): MxPropertiesWindowCustomValue[];
  	/** 属性UI程序调用，设置给定实体的自定义属性 */
  	setEntityProperties(id: McObjectId, prop: MxPropertiesWindowCustomValue): void;
  }
  /**
   * MxCompare 两个图纸比较
   */
  export  class MxCompare {
  	private imp;
  	private result;
  	constructor();
  	private getTypeString;
  	/**
  	* 把当前控件显示的内容和database的图纸进行比较
  	*/
  	do(database: McDbDatabase): boolean;
  	/**
  	* 得到图纸比较结果
  	*/
  	getResult(): any[];
  }
  /**
   * MxModifyColor 批量修改图上对象颜色
   */
  export  class MxModifyColor {
  	private imp;
  	constructor();
  	/**
  	* 修改图上对象颜色。
  	*/
  	Do(database: McDbDatabase, color: McCmColor): boolean;
  	/**
  	*恢复图上对象颜色。
  	*/
  	DoRestore(): void;
  }
  /**
   * 用来临时禁用当对象选择功能
   */
  export  class MxCADTempForbiddenIntelliSelect {
  	private bakIsIntelliSelect;
  	constructor(isForbidden?: boolean);
  	restoreSettings(): void;
  }
  /**
   * 指定执行克隆操作时的行为类型
   */
  export  enum MxCADCloneType {
  	/** 正常Clone */
  	kClone = 1,
  	/** 动态拖动Clone */
  	kDragClone = 2,
  	/** 数据归档 */
  	kCPPClone = 3
  }
  /**
   * CADWorldDraw类型
   */
  export  enum MxCADWorldDrawType {
  	/** 正常WorldDraw */
  	kWorldDraw = 1,
  	/** 打碎对象时调用的WorldDraw */
  	kExplodeDraw = 2
  }
  /**
   * 用于处理 AutoCAD DWG 文件的读写操作。这个接口提供了一组方法，允许开发者在 AutoCAD 插件中进行 DWG 文件的读取和写入。
   * @example
   * \`\`\`ts
     import { McDbCustomEntity, IMcDbDwgFiler } from "mxcad";
     // 自定义实体类 继承 McDbCustomEntity
     class McDbTestLineCustomEntity extends McDbCustomEntity {
  		// 定义实体内 pt1、pt2 两个点对象
  		private pt1: McGePoint3d = new McGePoint3d();
  		private pt2: McGePoint3d = new McGePoint3d();
  		// 读取自定义实体的数据字段 pt1、pt2
  		public dwgInFields(filter: IMcDbDwgFiler): boolean {
  			this.pt1 = filter.readPoint("pt1").val;
  			this.pt2 = filter.readPoint("pt2").val;
  			return true;
  		}
  		// 写入自定义实体的数据字段 pt1、pt2
  		public dwgOutFields(filter: IMcDbDwgFiler): boolean {
  			filter.writePoint("pt1", this.pt1);
  			filter.writePoint("pt2", this.pt2);
  			return true;
  		}
     }
   * \`\`\`
   */
  export  abstract class IMcDbDwgFiler {
  	/**
  	 * 指定对象克隆类型为正常克隆
  	 */
  	private type;
  	/**
  	 * 构造函数
  	 * @param type 克隆类型
  	 */
  	constructor(type: MxCADCloneType);
  	/**
  	 * 获取对象的类型信息
  	 * @returns 克隆类型
  	 */
  	getType(): MxCADCloneType;
  	/**
  	 * 向已打开的 DWG 文件中写入一组点对象。
  	 * @param name 点对象数组名称
  	 * @param vals 点对象数组
  	 */
  	writePoints(name: string, vals: McGePoint3d[]): void;
  	/**
  	 * 从打开的 DWG 文件中读取一组点对象。
  	 * @param name 点对象数组名称
  	 * @returns { Object } ret 是否成功获取 | val 点对象数组
  	 */
  	readPoints(name: string): {
  		val: McGePoint3d[];
  		ret: boolean;
  	};
  	/**
  	 * 向已打开的 DWG 文件中写入一个点对象。
  	 * @param name 点对象名称
  	 * @param val 点对象
  	 */
  	abstract writePoint(name: string, val: McGePoint3d): void;
  	/**
  	 * 从打开的 DWG 文件中读取一个点对象。
  	 * @param name 点对象名称
  	 * @returns { Object } ret 是否成功获取 | val 点对象数组
  	 */
  	abstract readPoint(name: string): {
  		val: McGePoint3d;
  		ret: boolean;
  	};
  	/**
  	 * 向已打开的 DWG 文件中写入一个长整数。
  	 * @param name 长整数名称
  	 * @param val 长整数值
  	 */
  	abstract writeLong(name: string, val: number): void;
  	/**
  	 * 从打开的 DWG 文件中读取一个长整数。
  	 * @param name 长整数名称
  	 * @returns { Object } ret 是否成功获取 | val 长整数值
  	 */
  	abstract readLong(name: string): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 向已打开的 DWG 文件中写入一个浮点数。
  	 * @param name 浮点数名称
  	 * @param val 浮点数值
  	 */
  	abstract writeDouble(name: string, val: number): void;
  	/**
  	 * 从打开的 DWG 文件中读取一个浮点数。
  	 * @param name 浮点数名称
  	 * @returns { Object } ret 是否成功获取 | val 浮点数值
  	 */
  	abstract readDouble(name: string): {
  		val: number;
  		ret: boolean;
  	};
  	/**
  	 * 向已打开的 DWG 文件中写入一个字符串。
  	 * @param name 字符串名称
  	 * @param val 字符串值
  	 */
  	abstract writeString(name: string, val: string): void;
  	/**
  	 * 从打开的 DWG 文件中读取一个字符串。
  	 * @param name 字符串名称
  	 * @returns { Object } ret 是否成功获取 | val 字符串值
  	 */
  	abstract readString(name: string): {
  		val: string;
  		ret: boolean;
  	};
  }
  /**
   * 在 AutoCAD 中实现自定义的绘图逻辑，例如绘制图形、标注、符号等。
   * @example
   * \`\`\`ts
     import { McDbCustomEntity, McGePoint3d, MxCADWorldDraw, McDbPolyline } from "mxcad";
     // 自定义实体类 继承 McDbCustomEntity
     class McDbTestLineCustomEntity extends McDbCustomEntity {
  		// 定义实体内 pt1、pt2 两个点对象
  		private pt1: McGePoint3d = new McGePoint3d();
  		private pt2: McGePoint3d = new McGePoint3d();
  		// 绘制自定义实体
  		public worldDraw(draw: MxCADWorldDraw): void {
  			// 构造一个新多段线对象pl
  			let pl= new McDbPolyline()
  			// pl新增点对象
  			pl.addVertexAt(this.pt1)
  			pl.addVertexAt(this.pt2)
  			pl.addVertexAt(new McGePoint3d())
  			// 绘制pl多段线
  			draw.drawEntity(pl);
  		}
     }
   * \`\`\`
   */
  export  class MxCADWorldDraw {
  	/** 内部对象实现 */
  	imp: any;
  	/** 内部对象实现 */
  	private type;
  	/**
  	 * 构造函数
  	 * @param lPtrWorldDraw 传递指向绘图设备的指针
  	 */
  	constructor(lPtrWorldDraw: number);
  	/**
  	 * 返回worddraw当前绘制的数据库。
  	 */
  	getDatabase(): McDbDatabase;
  	/**
  	 *使Draw对象使用使用entity的属性
  	 */
  	setupForEntity(entity: McDbEntity): boolean;
  	/**
  	 * 绘制实例对象
  	 */
  	drawEntity(entity: McDbEntity): void;
  	/**
  	 * 绘制一个用于捕捉使用的对象.
  	 */
  	drawOsnapEntity(entity: McDbEntity): void;
  	/**
  	 * 设置或获取颜色
  	 * @param val 颜色对象（McCmColor）
  	 */
  	set trueColor(val: McCmColor);
  	get trueColor(): McCmColor;
  	/**
  	* 设置或获取当前使用的图层
  	* @param val 图层id
  	*/
  	set layerId(val: McObjectId);
  	get layerId(): McObjectId;
  	/**
  	* 设置或获取当前使用的线型id
  	* @param val 线型id
  	*/
  	set lineTypeId(val: McObjectId);
  	get lineTypeId(): McObjectId;
  	/**
  	* 设置或获取当前使用的线重
  	* @param val 使用的线重
  	*/
  	set lineWeight(val: McDb.LineWeight);
  	get lineWeight(): McDb.LineWeight;
  	/**
  	 * 设置或获取当前使用的线型比例
  	 * @param val 线型比例
  	 */
  	set lineTypeScale(val: number);
  	get lineTypeScale(): number;
  	/**
  	* 得到worddraw type
  	*/
  	getType(): MxCADWorldDrawType;
  	/**
  	 * 初始化worddraw type
  	 */
  	initType(type: MxCADWorldDrawType): void;
  }
  /**
   * 自定义实体。
   * @example
   * \`\`\`ts
   * import { IMcDbDwgFiler, McDbCustomEntity, McDbLine, McDbPolyline, McGePoint3d, McGePoint3dArray, MxCADUiPrPoint, MxCADWorldDraw, MxCpp } from "mxcad";
   * import { MxFun } from "mxdraw";
  
  	// 新创建 McDbTestLineCustomEntity 类继承 McDbCustomEntity
  	class McDbTestLineCustomEntity extends McDbCustomEntity {
  	// 定义McDbTestLineCustomEntity内部的点对象 pt1、pt2
  	private pt1: McGePoint3d = new McGePoint3d();
  	private pt2: McGePoint3d = new McGePoint3d();
  	// 构造函数
  	constructor(imp?: any) {
  		super(imp);
  	}
  	// 创建函数
  	public create(imp: any) {
  		return new McDbTestLineCustomEntity(imp)
  	}
  	// 获取类名
  	public getTypeName(): string {
  		return "McDbTestLineCustomEntity";
  	}
  	// 读取自定义实体数据pt1、pt2
  	public dwgInFields(filter: IMcDbDwgFiler): boolean {
  		this.pt1 = filter.readPoint("pt1").val;
  		this.pt2 = filter.readPoint("pt2").val;
  		return true;
  	}
  	// 写入自定义实体数据pt1、pt2
  	public dwgOutFields(filter: IMcDbDwgFiler): boolean {
  		filter.writePoint("pt1", this.pt1);
  		filter.writePoint("pt2", this.pt2);
  		return true;
  	}
  	// 处理夹点编辑效果
  	public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
  		this.assertWrite();
  		if (iIndex == 0) {
  		this.pt1.x += dXOffset;
  		this.pt1.y += dYOffset;
  		this.pt1.z += dZOffset;
  		}
  		else if (iIndex == 1) {
  		this.pt2.x += dXOffset;
  		this.pt2.y += dYOffset;
  		this.pt2.z += dZOffset;
  		}
  	};
  	// 设置对象编辑点位
  	public getGripPoints(): McGePoint3dArray {
  		let ret = new McGePoint3dArray()
  		ret.append(this.pt1);
  		ret.append(this.pt2);
  		return ret;
  	};
  	// 绘制实体
  	public worldDraw(draw: MxCADWorldDraw): void {
  		// let tmpline = new McDbLine(this.pt1, this.pt2);
  		let pl= new McDbPolyline()
  		pl.addVertexAt(this.pt1)
  		pl.addVertexAt(this.pt2)
  		pl.addVertexAt(new McGePoint3d())
  		draw.drawEntity(pl);
  	}
  	// 设置pt1
  	public setPoint1(pt1: McGePoint3d) {
  		this.assertWrite();
  		this.pt1 = pt1.clone();
  	}
  	// 设置pt2
  	public setPoint2(pt2: McGePoint3d) {
  		this.assertWrite();
  		this.pt2 = pt2.clone();
  	}
  	// 获取pt1
  	public getPoint1() {
  		return this.pt1;
  	}
  	// 获取pt2
  	public getPoint2() {
  		return this.pt2;
  	}
  	}
   * \`\`\`
   */
  export  abstract class McDbCustomEntity extends McDbEntity {
  	/**
  	 * 构造函数。
  	 * @param imp 内部实现对象。
  	 */
  	constructor(imp?: any);
  	/**
  	* 自定义实体注册
  	* @example
  	* \`\`\`ts
  	* import { MxFun } from 'mxdraw
  	* // MxCAD创建成功
  	* MxFun.on("mxcadApplicationCreatedMxCADObject", (param) => {
  	* // McDbTestLineCustomEntity 自定义实体
  	*   new McDbTestLineCustomEntity().rxInit();// 自定义实体注册
  	*   MxFun.addCommand("MxTest_DrawCustomEntity");// 注册绘制实体命令
  	* })
  	* \`\`\`
  	*/
  	rxInit(): void;
  	/**
  	 * 复制实体
  	 * @example
  	 * \`\`\`ts
  	 * import { McDbCustomEntity } from "mxcad";
  	 *
  	 * const customEnt = new McDbCustomEntity();// 构造新自定义实体对象
  	 * const cloneEnt = customEnt.clone();// 复制实体
  	 * \`\`\`
  	 */
  	clone(): McDbObject | null;
  	/** js 对像的数据与McDbCustomEntity::m_mapData的同步。 */
  	syncData(toCpp?: boolean): boolean;
  	/**
  	 * @internal
  	 * MxCAD辅助,内部使用
  	 * \`\`\`
  	 */
  	tempRelationObject(): number;
  	/**
  	 * @internal
  	 * MxCAD辅助,内部使用
  	 * \`\`\`
  	 */
  	freeTempRelationObject(): void;
  	protected assertWrite(autoUndo?: boolean): void;
  	/**
  	 * 移动自定义对象的夹点。
  	 * @param _iIndex 夹点索引
  	 * @param _dXOffset X轴偏移量
  	 * @param _dYOffset Y轴偏移量
  	 * @param _dZOffset Z轴偏移量
  	 * @example
  	 * \`\`\`ts
  	   import { McDbCustomEntity, MxCADWorldDraw, McDbLine } from 'mxcad';
  	   // 新创建 McDbTestLineCustomEntity 类继承 McDbCustomEntity
  	   class McDbTestLineCustomEntity extends McDbCustomEntity {
  			// 定义McDbTestLineCustomEntity内部的点对象 pt1、pt2
  			private pt1: McGePoint3d = new McGePoint3d();
  			private pt2: McGePoint3d = new McGePoint3d();
  			// 移动自定义对象的夹点。
  			public moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number) {
  				this.assertWrite();
  				if (iIndex == 0) {
  				this.pt1.x += dXOffset;
  				this.pt1.y += dYOffset;
  				this.pt1.z += dZOffset;
  				}
  				else if (iIndex == 1) {
  				this.pt2.x += dXOffset;
  				this.pt2.y += dYOffset;
  				this.pt2.z += dZOffset;
  				}
  			};
  		}
  	 * \`\`\`
  	 */
  	moveGripPointsAt(_iIndex: number, _dXOffset: number, _dYOffset: number, _dZOffset: number): void;
  	/**
  	 * 获取自定义对象的夹点。
  	 * @returns 夹点对象数组
  	 */
  	getGripPoints(): McGePoint3dArray;
  	/**
  	 * 获取自定义对象矩阵坐标变换
  	 */
  	transformBy(_mat: McGeMatrix3d): boolean;
  	/**
  	 * 新创建一个自定义对象 (默认调用该对象的构造函数来创建新的对象)
  	 */
  	abstract create(imp?: any): McDbCustomEntity;
  	/**
  	 * 获取自定义实体的类型名称。
  	 * @returns 自定义实体的类型名称
  	 */
  	abstract getTypeName(): string;
  	/**
  	 * 获取自定义对象名称
  	 */
  	getName(): string;
  	/**
  	 * 从 DWG 文件中读取自定义实体的数据字段
  	 * @example
  	 * \`\`\`ts
  	  import { McDbCustomEntity, IMcDbDwgFiler } from 'mxcad'
  	  // 新创建 McDbTestLineCustomEntity 类继承 McDbCustomEntity
  	  class McDbTestLineCustomEntity extends McDbCustomEntity {
  		// 定义McDbTestLineCustomEntity内部的点对象 pt1、pt2
  		private pt1: McGePoint3d = new McGePoint3d();
  		private pt2: McGePoint3d = new McGePoint3d();
  		// 读取自定义实体的数据字段pt1、pt2
  		public dwgInFields(filter: IMcDbDwgFiler): boolean {
  		this.pt1 = filter.readPoint("pt1").val;
  		this.pt2 = filter.readPoint("pt2").val;
  		return true;
  		}
  	  }
  	 * \`\`\`
  	 */
  	abstract dwgInFields(filter: IMcDbDwgFiler): boolean;
  	/**
  	 * 将自定义实体的数据字段写入到 DWG 文件中
  	 * @example
  	 * \`\`\`ts
  	  // 新创建 McDbTestLineCustomEntity 类继承 McDbCustomEntity
  	  import { McDbCustomEntity, IMcDbDwgFiler } from 'mxcad'
  	  class McDbTestLineCustomEntity extends McDbCustomEntity {
  		// 定义McDbTestLineCustomEntity内部的点对象 pt1、pt2
  		private pt1: McGePoint3d = new McGePoint3d();
  		private pt2: McGePoint3d = new McGePoint3d();
  		// 写入自定义实体的数据字段pt1、pt2
  		public dwgOutFields(filter: IMcDbDwgFiler): boolean {
  			filter.writePoint("pt1", this.pt1);
  			filter.writePoint("pt2", this.pt2);
  			return true;
  		}
  		}
  	 * \`\`\`
  	 */
  	abstract dwgOutFields(filter: IMcDbDwgFiler): boolean;
  	/**
  	 * 绘制自定义实体
  	 * @example
  	 * \`\`\`ts
  	   import { McDbCustomEntity, MxCADWorldDraw, McDbLine } from 'mxcad'
  	   // 新创建 McDbTestLineCustomEntity 类继承 McDbCustomEntity
  	   class McDbTestLineCustomEntity extends McDbCustomEntity {
  		  // 定义McDbTestLineCustomEntity内部的点对象 pt1、pt2
  		  private pt1: McGePoint3d = new McGePoint3d();
  		  private pt2: McGePoint3d = new McGePoint3d();
  		  //绘制实体
  		  public worldDraw(draw: MxCADWorldDraw): void {
  			let tmpline = new McDbLine(this.pt1, this.pt2);
  			draw.drawEntity(tmpline);
  		  }
  		}
  	 * \`\`\`
  	 */
  	abstract worldDraw(draw: MxCADWorldDraw): void;
  	/**
  	 * 得到对象的最小外包
  	 */
  	getBoundingBox(): {
  		minPt: McGePoint3d;
  		maxPt: McGePoint3d;
  		ret: boolean;
  	};
  }
  export interface MarksStyleText {
  	text: string;
  	font?: string;
  	fontSize?: number;
  	bold?: boolean;
  	italic?: boolean;
  	underline?: boolean;
  	strike?: boolean;
  	style?: string;
  	overline?: boolean;
  	color?: number | number[];
  	type?: string;
  	/** 倾斜角度 */
  	tiltAngle?: number;
  	/**  追踪*/
  	tracking?: number;
  	/** 宽度因子 */
  	widthFactor?: number;
  	/** 文本位置: 'superscript' - 上标, 'subscript' - 下标，undefined - 正常 */
  	textPosition?: "superscript" | "subscript";
  }
  export type CustomText = MarksStyleText;
  export interface BaseElement {
  	type: string;
  	children: Array<IMxEditorElement | CustomText>;
  }
  export interface ParagraphElement extends BaseElement {
  	type: "paragraph";
  	alignment?: "left" | "center" | "right" | "justify" | "distribute";
  	lineHeightRatio?: number;
  }
  export type IMxEditorElement = BaseElement | ParagraphElement;
  export type IMxEditorNode = IMxEditorElement | CustomText;
  export interface IMxEditorPoint {
  	path: number[];
  	offset: number;
  }
  export type IMxEditorDescendant = IMxEditorNode | MarksStyleText;
   enum SequenceType {
  	/** 中文字符序列 */
  	Chinese = "chinese",
  	/** 连续字符序列（如英文单词、数字等） */
  	Continuous = "continuous",
  	/** 其他可断行字符（空格、标点等） */
  	Breakable = "breakable",
  	/** 行内元素 */
  	Element = "element",
  	/** 自定义文本节点*/
  	TextNode = "textNode"
  }
  /**
   * 序列中的片段信息
   */
  export interface SequenceFragment {
  	/** 文本节点 */
  	node: MarksStyleText | IMxEditorElement;
  	/** 节点索引 */
  	nodeIndex: number;
  	/** 在节点中的起始位置 */
  	startOffset: number;
  	/** 在节点中的结束位置 */
  	endOffset: number;
  	/** 片段文本内容 */
  	text: string;
  }
  /**
   * 表示文本中的一个序列
   * 一个序列可能跨越多个文本节点
   */
  export interface TextSequence {
  	/** 序列类型 */
  	type: SequenceType;
  	/** 序列包含的文本片段 */
  	fragments: SequenceFragment[];
  	/** 序列的完整文本 */
  	text: string;
  	/** 是否超出范围自动换行 */
  	isAutoBreak?: boolean;
  }
  /**
   * 文本片段信息
   */
  export interface TextFragment {
  	/** 原始文本节点 */
  	node: MarksStyleText | IMxEditorElement;
  	/** 节点路径 [段落索引, 节点索引] */
  	path: number[];
  	/** 起始偏移 */
  	startOffset: number;
  	/** 结束偏移 */
  	endOffset: number;
  	/** 片段宽度 */
  	width: number;
  	height: number;
  	index: number;
  	/** 是否需要字符级别间距 */
  	hasCharLevelSpacing?: boolean;
  	/** 引用的序列，用于获取字符宽度 */
  	sequence?: TextSequence;
  	/** 字符间的额外间距，分布式布局结果 */
  	extraCharSpacing?: number;
  }
   enum BreakType {
  	None = "none",
  	Overflow = "overflow",
  	Word = "word",
  	Forced = "forced"
  }
  export interface LineInfo {
  	nodes: TextFragment[];
  	height: number;
  	width: number;
  	breakInfo?: {
  		isWrapped: boolean;
  		breakType: BreakType;
  	};
  	horizontalOffset?: number;
  	isEndLine?: boolean;
  }
   class MultilineTextConverter {
  	/**
  	 * 将McDbMText实体转换为McDbCustomEditorEntity
  	 * @param mtext CAD多行文本实体
  	 * @param options 转换选项
  	 * @returns 自定义编辑器实体
  	 */
  	static fromMText(mtext: McDbMText): MxCADMText;
  	/**
  	 * 将McDbCustomEditorEntity转换为McDbMText
  	 * @param customEntity 自定义编辑器实体
  	 * @param options 转换选项
  	 * @returns CAD多行文本实体
  	 */
  	static toMText(customEntity: MxCADMText, mtext?: McDbMText): (McDbEntity | McDbCustomEntity)[];
  }
  export interface CalculateData {
  	width: number;
  	height: number;
  	lines?: LineInfo[];
  	[x: string]: any;
  }
  export interface RenderData {
  	position: McGePoint3d;
  	index: number;
  	alignmentWidth: number;
  }
  export interface RenderResult {
  	[x: string]: any;
  	entitys: (McDbEntity | McDbCustomEntity)[];
  	position: McGePoint3d;
  	width: number;
  	height: number;
  	lines: LineInfo[];
  	lineHeightRatio?: number;
  }
  export  abstract class MxCADBaseCustomElement {
  	/** 类型 */
  	abstract type: string;
  	abstract calculate(entity: MxCADMText, element: IMxEditorElement, index?: number): CalculateData;
  	abstract render(entity: MxCADMText, draw: MxCADWorldDraw, element: IMxEditorElement, calculateData: CalculateData, renderData: RenderData): RenderResult;
  }
  export interface MxCADCustomTextCalculateData {
  	width: number;
  	height: number;
  	[x: string]: any;
  }
  export interface CreateData {
  	position: McGePoint3d;
  }
  export  abstract class MxCADBaseCustomText {
  	/** 类型 */
  	abstract type: string;
  	abstract calculate(entity: MxCADMText, textNode: MarksStyleText): MxCADCustomTextCalculateData;
  	abstract create(entity: MxCADMText, textNode: MarksStyleText, calculateData: MxCADCustomTextCalculateData, renderData: CreateData): (McDbEntity | McDbCustomEntity)[];
  }
   class ElementTextManager {
  	private elementMap;
  	private textMap;
  	/** 特殊字符映射表 (Unicode字符 -> CAD特殊字符) */
  	private specialCharacterMap;
  	constructor();
  	/** 注册自定义元素 */
  	registerElement(props: MxCADBaseCustomElement): void;
  	registerTextNode(props: MxCADBaseCustomText): void;
  	/** 注册特殊字符映射 (Unicode字符 -> CAD特殊字符) */
  	registerSpecialCharacter(unicodeChar: string, cadSpecialChar: string): void;
  	/** 遍历特殊字符映射表 */
  	forEachSpecialCharacter(callback: (unicodeChar: string, cadSpecialChar: string) => void): void;
  	getText(type: string): MxCADBaseCustomText | undefined;
  	hasText(type: string): boolean;
  	get(type: string): MxCADBaseCustomElement | undefined;
  	has(type: string): boolean;
  }
  export type EventType = string | symbol;
  export type PubSubEvent = Record<EventType, (...ages: any) => any>;
   class PubSub<Events extends PubSubEvent = PubSubEvent> {
  	events: {
  		[x: EventType]: Events[keyof Events][];
  	};
  	constructor();
  	/**
  	 * 订阅
  	 * @param event 事件名称
  	 * @param callback 事件回调
  	 */
  	on<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
  	/**
  	 * 订阅一次
  	 * @param event 事件名称
  	 * @param callback 事件回调
  	 */
  	once<Key extends keyof Events>(event: Key, callback: Events[keyof Events]): void;
  	/**
  	 * 发布
  	 * @param event 事件名称
  	 * @param data 载荷
  	 */
  	emit<Key extends keyof Events>(event: Key | number, ...data: Parameters<Events[Key]>): void;
  	/**
  	 * 销毁事件
  	 * @param event 事件名称
  	 * @param callback 事件方法
  	 */
  	off<Key extends keyof Events>(event: Key, callback?: Events[keyof Events]): void;
  }
   function getActualRenderStartPosition(this: MxCADMTextImp, contentHeight?: number, contentWidth?: number): McGePoint3d;
   function getLinePosition(this: MxCADMTextImp, paragraphIndex: number, lineIndex: number): {
  	start: McGePoint3d;
  	end: McGePoint3d;
  	minPt: McGePoint3d;
  	maxPt: McGePoint3d;
  	height: number;
  } | null;
   class MxCADMTextImp extends PubSub<{
  	"changed": () => void;
  }> {
  	position: McGePoint3d;
  	maxWidth: number;
  	maxHeight: number;
  	textBaseHeight: number;
  	data: IMxEditorDescendant[];
  	isWordWrap: boolean;
  	textAlignment: McDb.AttachmentPoint;
  	actualHeight: number;
  	actualWidth: number;
  	mat: McGeMatrix3d;
  	angle: number;
  	lineHeightRatio: number;
  	entityType: "custom" | "mtext";
  	/** 强制不拆散多行文本(entityType === 'mtext' 时有效) */
  	isIntegrityLockedMText: boolean;
  	/** 文档中存在自定义文本或者元素 */
  	get isCustomTextOrElement(): boolean;
  	isEditState: boolean;
  	__PARAGRAPH_INFOS__: (RenderResult & CalculateData)[];
  	dwgInFields(filter: IMcDbDwgFiler): boolean;
  	dwgOutFields(filter: IMcDbDwgFiler): boolean;
  	/** 获取实际渲染起始位置 */
  	getActualRenderStartPosition: typeof getActualRenderStartPosition;
  	/**
  	 * 获取夹点位置
  	 * 返回三个夹点：
  	 * 1. 位置点
  	 * 2. 宽度控制点（position+maxWidth）
  	 * 3. 高度控制点（position + maxWidth/2 + maxHeight）
  	 */
  	getGripPoints(): McGePoint3dArray;
  	/**
  	 * 移动夹点位置
  	 * 根据不同夹点索引更新相应属性：
  	 * 0 - 更新位置点
  	 * 1 - 更新宽度
  	 * 2 - 更新高度
  	 */
  	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): void;
  	/** 获取指定段落和行的位置信息 */
  	getLinePosition: typeof getLinePosition;
  	/**
  	 * 获取指定段落的行信息
  	 * @param this McDbCustomEditorEntity实例
  	 * @param paragraphIndex 段落索引
  	 * @returns 段落中的所有行信息
  	 */
  	getParagraphLines(paragraphIndex: number): LineInfo[];
  	getParagrapInfo(paragraphIndex: number): RenderResult & CalculateData;
  	/**
  	 * 获取指定段落的行数
  	 * @param this McDbCustomEditorEntity实例
  	 * @param paragraphIndex 段落索引
  	 * @returns 行数
  	 */
  	getLineCount(paragraphIndex: number): number;
  	/** 获取文本节点高度 */
  	getTextHeight: (node: MarksStyleText, baseHeight: number, ent: MxCADMText) => number;
  	/** 设置数据 */
  	setData(data: IMxEditorDescendant[]): void;
  	/**
  	 * 获取左上角点
  	 * 直接使用pt1作为参照点，并返回经过矩阵变换后的世界坐标
  	 */
  	getTopLeftPt(): McGePoint3d;
  	/**
  	 * 获取指定行的水平偏移量
  	 * @param paragraphIndex 段落索引
  	 * @param lineIndex 行索引
  	 * @returns 水平偏移量
  	 */
  	getLineHorizontalOffset(paragraphIndex: number, lineIndex: number): number;
  	/**
  	 * 获取总内容高度
  	 * @returns 总内容高度
  	 */
  	getTotalContentHeight(): number;
  	/** 设置实体类型 */
  	setEntityType(type: "custom" | "mtext"): void;
  	/** 获取节点Color颜色 */
  	getColor: (node: MarksStyleText) => McCmColor | undefined;
  }
   function convertCadPointToSlatePoint(this: MxCADMText, point: McGePoint3d): {
  	path: number[];
  	offset: number;
  } | null;
   function convertSlatePointToCadPoint(this: MxCADMText, point: IMxEditorPoint): {
  	point: McGePoint3d;
  	lineIndex: number;
  } | null;
   function transformBy(this: MxCADMText, mat: McGeMatrix3d): boolean;
  /**
   * 自定义编辑器实体类
   * 用于在CAD中渲染和管理富文本编辑器
   */
  export  class MxCADMText extends McDbCustomEntity {
  	private impMText;
  	getMTextImp(): MxCADMTextImp;
  	/** 从McDbMText转换为MxCADMText */
  	static fromMText: typeof MultilineTextConverter.fromMText;
  	/** 从MxCADMText转换为McDbMText */
  	static toMText: typeof MultilineTextConverter.toMText;
  	static elementTextManager: ElementTextManager;
  	constructor(imp?: any);
  	get data(): IMxEditorDescendant[];
  	set data(val: IMxEditorDescendant[]);
  	get textBaseHeight(): number;
  	set textBaseHeight(val: number);
  	get angle(): number;
  	set angle(angle: number);
  	get position(): McGePoint3d;
  	set position(val: McGePoint3d);
  	get maxWidth(): number;
  	set maxWidth(val: number);
  	get maxHeight(): number;
  	set maxHeight(val: number);
  	get isWordWrap(): boolean;
  	/** 设置自动换行 */
  	set isWordWrap(value: boolean);
  	get lineHeightRatio(): number;
  	set lineHeightRatio(ratio: number);
  	get textAlignment(): McDb.AttachmentPoint;
  	set textAlignment(alignment: McDb.AttachmentPoint);
  	create(imp: any): MxCADMText;
  	getTypeName(): string;
  	getName(): string;
  	dwgInFields(filter: IMcDbDwgFiler): boolean;
  	dwgOutFields(filter: IMcDbDwgFiler): boolean;
  	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): void;
  	getGripPoints(): McGePoint3dArray;
  	worldDraw(draw: MxCADWorldDraw): void;
  	/** CAD坐标转换为Slate的Point位置 */
  	convertCadPointToSlatePoint: typeof convertCadPointToSlatePoint;
  	/** Slate的Point位置转换为CAD坐标 */
  	convertSlatePointToCadPoint: typeof convertSlatePointToCadPoint;
  	transformBy: typeof transformBy;
  }
  /**
   * 合并单元格信息接口
   */
  export interface IMergeCellInfo {
  	row: number;
  	col: number;
  	rowspan: number;
  	colspan: number;
  }
  export interface ICellStyleInfo {
  	data: any[][];
  	mergeCells?: IMergeCellInfo[];
  	colWidths?: IColumnWidth[];
  	rowHeights?: IRowHeight[];
  	cellStyles?: CellStyleInfo;
  }
  export interface CellStyleInfo {
  	[key: string]: ICellStyle;
  }
  /**
   * 行高信息接口
   */
  export interface IRowHeight {
  	row: number;
  	height: number;
  }
  /**
   * 列宽信息接口
   */
  export interface IColumnWidth {
  	col: number;
  	width: number;
  }
  /**
   * 单元格样式接口
   */
  export interface ICellStyle {
  	backgroundColor?: number | null;
  	textColor?: number | null;
  	alignment?: "left" | "center" | "right";
  	verticalAlignment?: "top" | "middle" | "bottom";
  	/**
  	 * 文本样式名称
  	 * 指定要使用的文字样式名称
  	 */
  	textStyle?: string;
  	/**
  	 * 文本角度
  	 * 文本旋转角度，以度为单位(0-360)
  	 */
  	textAngle?: number;
  	/**
  	 * 边框线宽
  	 * 单元格边框线宽，单位为毫米
  	 */
  	borderLineWeight?: number;
  	/**
  	 * 边框线型
  	 * 单元格边框线型名称，如"Continuous", "Dashed", "Dotted"等
  	 */
  	borderLineType?: string;
  }
  export  class McDbXlsxTable extends McDbCustomEntity {
  	private _rowHeight;
  	/**
  	 * 表格整体行高
  	 * */
  	get rowHeight(): number;
  	set rowHeight(val: number);
  	private _colWidth;
  	/**
  	 * 表格整体列宽
  	 * */
  	get colWidth(): number;
  	set colWidth(val: number);
  	private _position;
  	/** 表格位置和尺寸 - 渲染必需 */
  	get position(): McGePoint3d;
  	set position(val: McGePoint3d);
  	private _styleName;
  	/** 表格样式名称 */
  	get styleName(): string;
  	set styleName(val: string);
  	private _colWidths;
  	private _rowHeights;
  	private _xlsxData;
  	get xlsxData(): string;
  	set xlsxData(data: string);
  	private _mergeCells;
  	private _selectedCells;
  	private _cellTextDimensions;
  	private _cellStyles;
  	private _mat;
  	constructor(imp?: any);
  	create(imp: any): McDbXlsxTable;
  	getTypeName(): string;
  	/** 获取单元格的样式 */
  	getCellStyles(): CellStyleInfo;
  	private getTableData;
  	private getDefaultStyle;
  	/**
  	 * 处理合并单元格数据，填充空值
  	 * 根据合并单元格信息，将合并区域内的空单元格填充为合并区域左上角的值
  	 */
  	private processMergedCellData;
  	dwgInFields(filter: IMcDbDwgFiler): boolean;
  	dwgOutFields(filter: IMcDbDwgFiler): boolean;
  	/** 计算表格尺寸 */
  	calculateTableDimensions(): {
  		width: number;
  		height: number;
  	};
  	/**
  	 * 获取选中单元格的范围
  	 * @returns 包含选中范围的最小和最大行列索引
  	 */
  	getSelectionRange(): {
  		minRow: number;
  		minCol: number;
  		maxRow: number;
  		maxCol: number;
  	} | null;
  	/**
  	 * 设置当前选中的单元格
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 */
  	setSelectedCell(row: number, col: number): void;
  	/**
  	 * 添加一个单元格到选中集合
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 */
  	addSelectedCell(row: number, col: number): void;
  	/**
  	 * 设置多个选中的单元格
  	 * @param cells 单元格位置数组 [{row, col}, ...]
  	 */
  	setSelectedCells(cells: {
  		row: number;
  		col: number;
  	}[]): void;
  	/**
  	 * 清除当前选中的单元格
  	 */
  	clearSelectedCell(): void;
  	/**
  	 * 获取当前选中的单元格
  	 * @returns 第一个选中的单元格，如果没有选中则返回null
  	 */
  	getSelectedCell(): {
  		row: number;
  		col: number;
  	} | null;
  	/**
  	 * 获取所有选中的单元格
  	 * @returns 所有选中的单元格数组
  	 */
  	getSelectedCells(): {
  		row: number;
  		col: number;
  	}[];
  	/**
  	 * 检查指定单元格是否被选中
  	 * @param row 行索引
  	 * @param col 列索引
  	 * @returns 是否被选中
  	 */
  	isCellSelected(row: number, col: number): boolean;
  	/**
  	 * 获取选中单元格的数量
  	 * @returns 选中的单元格数量
  	 */
  	getSelectedCellCount(): number;
  	worldDraw(draw: MxCADWorldDraw): void;
  	setFromWorkbook(processedData: ICellStyleInfo): void;
  	setFromJson(jsonArray: any[]): void;
  	setFromArray(data: any[][]): void;
  	/**
  	 * 设置合并单元格信息
  	 */
  	setMergeCells(mergeCells: IMergeCellInfo[]): void;
  	/**
  	 * 获取合并单元格信息
  	 */
  	getMergeCells(): IMergeCellInfo[];
  	/**
  	 * 设置指定列的宽度
  	 * @param col 列索引 (0-based)
  	 * @param width 列宽度（单位与style.colWidth一致）
  	 */
  	setColumnWidth(col: number, width: number): void;
  	/**
  	 * 获取指定列的宽度
  	 * @param col 列索引 (0-based)
  	 * @returns 列宽度，如果未设置则返回默认列宽
  	 */
  	getColumnWidth(col: number): number;
  	/**
  	 * 获取所有列宽设置
  	 */
  	getAllColumnWidths(): IColumnWidth[];
  	/**
  	 * 重置指定列的宽度为默认值
  	 * @param col 列索引 (0-based)
  	 */
  	resetColumnWidth(col: number): void;
  	/**
  	 * 设置指定行的高度
  	 * @param row 行索引 (0-based)
  	 * @param height 行高度（单位与style.rowHeight一致）
  	 */
  	setRowHeight(row: number, height: number): void;
  	/**
  	 * 获取指定行的高度
  	 * @param row 行索引 (0-based)
  	 * @returns 行高度，如果未设置则返回默认行高
  	 */
  	getRowHeight(row: number): number;
  	/**
  	 * 获取所有行高设置
  	 */
  	getAllRowHeights(): IRowHeight[];
  	/**
  	 * 重置指定行的高度为默认值
  	 * @param row 行索引 (0-based)
  	 */
  	resetRowHeight(row: number): void;
  	/**
  	 * 获取指定单元格的值
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格值
  	 */
  	getCellValue(row: number, col: number): any;
  	/**
  	 * 设置指定单元格的值
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param value 单元格值（Slate格式或普通文本）
  	 */
  	setCellValue(row: number, col: number, value: any): void;
  	/**
  	 * 获取单元格的纯文本值（如果是Slate格式则提取文本）
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格的纯文本值
  	 */
  	getCellTextValue(row: number, col: number): string;
  	/**
  	 * 获取指定单元格的几何范围
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格的几何范围 { min: McGePoint3d, max: McGePoint3d } 或 null (当单元格不存在时)
  	 */
  	getCellGeometry(row: number, col: number): {
  		min: McGePoint3d;
  		max: McGePoint3d;
  	} | null;
  	/**
  	 * 获取指定单元格的A1格式引用
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns A1格式的单元格引用 (例如 "A1", "B2")
  	 */
  	getCellReference(row: number, col: number): string;
  	/**
  	 * 从A1格式引用获取单元格索引
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @returns 单元格索引 {row, col} 或 null (当引用无效时)
  	 */
  	getCellFromReference(cellRef: string): {
  		row: number;
  		col: number;
  	} | null;
  	/**
  	 * 设置单元格背景颜色
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param color 背景颜色值
  	 * - 支持真彩色：0xRRGGBB，如 0x000000 黑色（RR是红色值，GG是绿色值，BB是蓝色值）
  	 * - 支持颜色索引：0-255
  	 * - 支持ColorMethod.kByLayer(1)表示随层
  	 * - 支持ColorMethod.kByBlock(2)表示随块
  	 * - 传入null可移除背景颜色
  	 */
  	setCellBackgroundColor(row: number, col: number, color: number | null | undefined): void;
  	/**
  	 * 获取单元格背景颜色
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格背景颜色，如果未设置则返回null
  	 */
  	getCellBackgroundColor(row: number, col: number): number | null | undefined;
  	/**
  	 * 通过A1引用格式设置单元格背景颜色
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param color 背景颜色值，null表示删除背景色
  	 * @returns 是否设置成功
  	 */
  	setCellBackgroundColorByRef(cellRef: string, color: number | null | undefined): boolean;
  	/**
  	 * 批量设置单元格背景颜色
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param color 背景颜色值，null表示删除背景色
  	 */
  	setBatchCellBackgroundColor(cells: (string | {
  		row: number;
  		col: number;
  	})[], color: number | null | undefined): void;
  	/**
  	 * 设置单元格文本颜色
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param color 文本颜色值
  	 * - 支持真彩色：0xRRGGBB，如 0x000000 黑色（RR是红色值，GG是绿色值，BB是蓝色值）
  	 * - 支持颜色索引：0-255
  	 * - 支持ColorMethod.kByLayer(1)表示随层
  	 * - 支持ColorMethod.kByBlock(2)表示随块
  	 * - 传入null可移除文本颜色
  	 */
  	setCellTextColor(row: number, col: number, color: number | null | undefined): void;
  	/**
  	 * 获取单元格文本颜色
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格文本颜色，如果未设置则返回null
  	 */
  	getCellTextColor(row: number, col: number): number | null | undefined;
  	/**
  	 * 通过A1引用格式设置单元格文本颜色
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param color 文本颜色值，null表示删除文本颜色
  	 * @returns 是否设置成功
  	 */
  	setCellTextColorByRef(cellRef: string, color: number | null | undefined): boolean;
  	/**
  	 * 批量设置单元格文本颜色
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param color 文本颜色值，null表示删除文本颜色
  	 */
  	setBatchCellTextColor(cells: (string | {
  		row: number;
  		col: number;
  	})[], color: number | null | undefined): void;
  	/**
  	 * 设置单元格水平对齐方式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param alignment 水平对齐方式
  	 */
  	setCellAlignment(row: number, col: number, alignment: "left" | "center" | "right"): void;
  	/**
  	 * 获取单元格水平对齐方式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 水平对齐方式，如果未设置则返回'left'
  	 */
  	getCellAlignment(row: number, col: number): "left" | "center" | "right" | undefined;
  	/**
  	 * 通过A1引用格式设置单元格水平对齐方式
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param alignment 水平对齐方式
  	 * @returns 是否设置成功
  	 */
  	setCellAlignmentByRef(cellRef: string, alignment: "left" | "center" | "right"): boolean;
  	/**
  	 * 批量设置单元格水平对齐方式
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param alignment 水平对齐方式
  	 */
  	setBatchCellAlignment(cells: (string | {
  		row: number;
  		col: number;
  	})[], alignment: "left" | "center" | "right"): void;
  	/**
  	 * 设置单元格垂直对齐方式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param verticalAlignment 垂直对齐方式
  	 */
  	setCellVerticalAlignment(row: number, col: number, verticalAlignment: "top" | "middle" | "bottom"): void;
  	/**
  	 * 获取单元格垂直对齐方式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 垂直对齐方式，如果未设置则返回'top'
  	 */
  	getCellVerticalAlignment(row: number, col: number): "top" | "middle" | "bottom" | undefined;
  	/**
  	 * 通过A1引用格式设置单元格垂直对齐方式
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param verticalAlignment 垂直对齐方式
  	 * @returns 是否设置成功
  	 */
  	setCellVerticalAlignmentByRef(cellRef: string, verticalAlignment: "top" | "middle" | "bottom"): boolean;
  	/**
  	 * 批量设置单元格垂直对齐方式
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param verticalAlignment 垂直对齐方式
  	 */
  	setBatchCellVerticalAlignment(cells: (string | {
  		row: number;
  		col: number;
  	})[], verticalAlignment: "top" | "middle" | "bottom"): void;
  	/**
  	 * 将CAD坐标点转换为表格中的单元格位置
  	 * @param point CAD空间中的三维点
  	 * @returns 单元格位置 {row, col} 或 null (当点不在表格内时)
  	 */
  	getCellAtPoint(point: McGePoint3d): {
  		row: number;
  		col: number;
  	} | null;
  	getGripPoints(): McGePoint3dArray;
  	moveGripPointsAt(iIndex: number, dXOffset: number, dYOffset: number, dZOffset: number): void;
  	transformBy(_mat: McGeMatrix3d): boolean;
  	/**
  	 * 设置单元格文本样式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param textStyle 文本样式名称
  	 */
  	setCellTextStyle(row: number, col: number, textStyle: string): void;
  	/**
  	 * 获取单元格文本样式
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格文本样式，如果未设置则返回undefined
  	 */
  	getCellTextStyle(row: number, col: number): string | undefined;
  	/**
  	 * 通过A1引用格式设置单元格文本样式
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param textStyle 文本样式名称
  	 * @returns 是否设置成功
  	 */
  	setCellTextStyleByRef(cellRef: string, textStyle: string): boolean;
  	/**
  	 * 批量设置单元格文本样式
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param textStyle 文本样式名称
  	 */
  	setBatchCellTextStyle(cells: (string | {
  		row: number;
  		col: number;
  	})[], textStyle: string): void;
  	/**
  	 * 设置单元格文本角度
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param textAngle 文本角度(0-360度)
  	 */
  	setCellTextAngle(row: number, col: number, textAngle: number): void;
  	/**
  	 * 获取单元格文本角度
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格文本角度，如果未设置则返回undefined
  	 */
  	getCellTextAngle(row: number, col: number): number | undefined;
  	/**
  	 * 通过A1引用格式设置单元格文本角度
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param textAngle 文本角度(0-360度)
  	 * @returns 是否设置成功
  	 */
  	setCellTextAngleByRef(cellRef: string, textAngle: number): boolean;
  	/**
  	 * 批量设置单元格文本角度
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param textAngle 文本角度(0-360度)
  	 */
  	setBatchCellTextAngle(cells: (string | {
  		row: number;
  		col: number;
  	})[], textAngle: number): void;
  	/**
  	 * 设置单元格边框线宽
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param lineWeight 边框线宽(毫米)
  	 */
  	setCellBorderLineWeight(row: number, col: number, lineWeight: number): void;
  	/**
  	 * 获取单元格边框线宽
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格边框线宽，如果未设置则返回undefined
  	 */
  	getCellBorderLineWeight(row: number, col: number): number | undefined;
  	/**
  	 * 通过A1引用格式设置单元格边框线宽
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param lineWeight 边框线宽(毫米)
  	 * @returns 是否设置成功
  	 */
  	setCellBorderLineWeightByRef(cellRef: string, lineWeight: number): boolean;
  	/**
  	 * 批量设置单元格边框线宽
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param lineWeight 边框线宽(毫米)
  	 */
  	setBatchCellBorderLineWeight(cells: (string | {
  		row: number;
  		col: number;
  	})[], lineWeight: number): void;
  	/**
  	 * 设置单元格边框线型
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @param lineType 边框线型(如 "Continuous", "Dashed", "Dotted"等)
  	 */
  	setCellBorderLineType(row: number, col: number, lineType: string): void;
  	/**
  	 * 获取单元格边框线型
  	 * @param row 行索引 (0-based)
  	 * @param col 列索引 (0-based)
  	 * @returns 单元格边框线型，如果未设置则返回undefined
  	 */
  	getCellBorderLineType(row: number, col: number): string | undefined;
  	/**
  	 * 通过A1引用格式设置单元格边框线型
  	 * @param cellRef A1格式的单元格引用 (例如 "A1", "B2")
  	 * @param lineType 边框线型(如 "Continuous", "Dashed", "Dotted"等)
  	 * @returns 是否设置成功
  	 */
  	setCellBorderLineTypeByRef(cellRef: string, lineType: string): boolean;
  	/**
  	 * 批量设置单元格边框线型
  	 * @param cells 单元格位置数组 { row, col } 或 A1引用字符串数组
  	 * @param lineType 边框线型(如 "Continuous", "Dashed", "Dotted"等)
  	 */
  	setBatchCellBorderLineType(cells: (string | {
  		row: number;
  		col: number;
  	})[], lineType: string): void;
  	/**
  	 * 检查是否选中了合并的单元格
  	 */
  	isMergedCellSelected(): boolean;
  	/**
  	 * 检查是否选中了未合并的单元格
  	 */
  	hasUnmergedCellsSelected(): boolean;
  	private updateMergeCellsAfterRowInsert;
  	/**
  	* 更新选中单元格并允许外部回调
  	* @param cells 要选中的单元格
  	* @param onSelectionChange 可选的选择变更回调
  	*/
  	private updateSelectedCells;
  	/**
  	* 在指定位置插入行
  	* @param position 插入位置，'above' 为上方插入，'below' 为下方插入
  	* @param onSelectionChange 可选的选择变更回调
  	*/
  	insertRow(position: "above" | "below", onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	private updateMergeCellsAfterRowDelete;
  	/**
  	 * 删除选中的行
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	deleteRow(onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	private updateMergeCellsAfterColumnInsert;
  	/**
  	 * 在指定位置插入列
  	 * @param position 插入位置，'left' 为左侧插入，'right' 为右侧插入
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	insertColumn(position: "left" | "right", onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/** 更新合并单元格信息（删除列后） */
  	private updateMergeCellsAfterColumnDelete;
  	/**
  	 * 删除选中的列
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	deleteColumn(onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	 * 合并选中的单元格
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	mergeCells(onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	  * 取消合并选中的单元格
  	  * @param onSelectionChange 可选的选择变更回调
  	  */
  	unMergeCells(onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	   * 设置选中单元格的水平对齐方式
  	   * @param alignment 对齐方式
  	   * @param onSelectionChange 可选的选择变更回调
  	   */
  	setAlignment(alignment: "left" | "center" | "right", onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	* 设置选中单元格的垂直对齐方式
  	* @param alignment 垂直对齐方式
  	* @param onSelectionChange 可选的选择变更回调
  	*/
  	setVerticalAlignment(alignment: "top" | "middle" | "bottom", onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	 * 设置选中单元格的背景颜色
  	 * @param color 颜色值
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	setSelectCellBackgroundColor(color: number | null | undefined, onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	 * 设置选中单元格的文本颜色
  	 * @param color 颜色值
  	 * @param onSelectionChange 可选的选择变更回调
  	 */
  	setSelectCellTextColor(color: number | null | undefined, onSelectionChange?: (cells: {
  		row: number;
  		col: number;
  	}[]) => void): void;
  	/**
  	 * 获取选中单元格的背景颜色
  	 */
  	getSelectCellBackgroundColor(): number | null | undefined;
  	/**
  	 * 获取选中单元格的文本颜色
  	 */
  	getSelectCellTextColor(): number | null | undefined;
  }
  export interface MLStyleElement {
  	offset: number;
  	color: number;
  	lineType: string;
  }
  export interface MLStyle {
  	name: string;
  	description: string;
  	elements: MLStyleElement[];
  	startCaps: {
  		line: boolean;
  		outerArc: boolean;
  		innerArc: boolean;
  		angle: number;
  	};
  	endCaps: {
  		line: boolean;
  		outerArc: boolean;
  		innerArc: boolean;
  		angle: number;
  	};
  	fill: {
  		enabled: boolean;
  		color: number;
  	};
  	displayJoints: boolean;
  }
  /**  多线对齐方式 */
  export  enum MLineJustificationType {
  	No = -1,
  	Top = 0,
  	Middle = 1,
  	Bottom = 2
  }
  /**
   * 线段关联数据的点对类型
   */
  export type SegmentPointPair = [
  	McGePoint3d,
  	McGePoint3d
  ];
  /**
   * 线段关联数据结构类型
   */
  export interface SegmentRelationsData {
  	[segmentIndex: number]: {
  		[relatedSegmentIndex: number]: SegmentPointPair[];
  	};
  }
  /**  点选获取线段关联数据结构 */
  export interface PointSegmentRelation {
  	/** 线段索引 */
  	segmentIndex: number;
  	/** 偏移元素索引 */
  	elementIndex: number;
  	/** 在线段上的精确点 */
  	clickPoint: McGePoint3d;
  	/** 所有偏移线的坐标点（按特定顺序排列 [最大偏移线，最小偏移线, 次大偏移线，次小偏移线, ...]） */
  	allOffsetLines: McGePoint3d[][];
  }
  /**
   * 多线自定义实体类
   * 实现多线绘制功能，支持多线样式、端点样式、填充等特性
   */
  export  class McDbMLine extends McDbCustomEntity {
  	private vertices;
  	private styleName;
  	private justification;
  	private scale;
  	private isClosed;
  	private currentStyle;
  	private segmentRelations;
  	/**
  	 * 设置线段关联数据
  	 * @param segmentIndex 当前多线的线段索引
  	 * @param relatedSegmentIndex 相关联多线的线段索引
  	 * @param pointPairs 点对数组 [McGePoint3d, McGePoint3d][]
  	 */
  	setSegmentRelation(segmentIndex: number, relatedSegmentIndex: number, pointPairs: SegmentPointPair[]): void;
  	/**
  	 * 获取线段关联数据
  	 * @param segmentIndex 当前多线的线段索引
  	 * @param relatedSegmentIndex 相关联多线的线段索引（可选）
  	 * @returns 如果提供了relatedSegmentIndex，返回对应的点对数组；否则返回所有关联数据
  	 */
  	getSegmentRelation(segmentIndex: number, relatedSegmentIndex?: number): SegmentPointPair[] | {
  		[relatedSegmentIndex: number]: SegmentPointPair[];
  	} | null;
  	/**
  	 * 获取所有线段关联数据
  	 * @returns 完整的线段关联数据结构
  	 */
  	getAllSegmentRelations(): SegmentRelationsData;
  	/**
  	 * 设置所有线段关联数据
  	 * @param data 完整的线段关联数据结构
  	 */
  	setAllSegmentRelations(data: SegmentRelationsData): void;
  	/**
  	 * 合并指定区域（从startPt到endPt）的关联数据
  	 */
  	mergeSegmentRelation(segmentIndex: number, relatedSegmentIndex: number, startPt: McGePoint3d, endPt: McGePoint3d): void;
  	/**
  	 * 清除指定线段的关联数据
  	 * @param segmentIndex 要清除的线段索引
  	 * @param relatedSegmentIndex 要清除的关联线段索引（可选，如果不提供则清除整个segmentIndex的数据）
  	 */
  	clearSegmentRelation(segmentIndex: number, relatedSegmentIndex?: number): void;
  	private get elementOffsets();
  	constructor(imp?: any);
  	/**
  	 * 创建实体的工厂方法
  	 */
  	create(imp: any): McDbMLine;
  	/**
  	 * 获取实体类型名称
  	 */
  	getTypeName(): string;
  	/**
  	 * 从数据文件读取实体数据
  	 */
  	dwgInFields(filter: IMcDbDwgFiler): boolean;
  	/**
  	 * 将实体数据写入到数据文件
  	 */
  	dwgOutFields(filter: IMcDbDwgFiler): boolean;
  	/**
  	 * 移动指定索引的控制点
  	 */
  	moveGripPointsAt(index: number, deltaX: number, deltaY: number, deltaZ: number): void;
  	/**
  	 * 处理移动控制点后的线段关联数据
  	 * @param movedIndex 被移动的控制点索引
  	 * @param originalPoint 移动前的原始点位置
  	 */
  	private handleSegmentRelationsAfterMove;
  	/**
  	 * 获取实体的控制点
  	 */
  	getGripPoints(): McGePoint3dArray;
  	/**
  	 * 绘制实体（统一调度，参数传递点集）
  	 */
  	worldDraw(draw: MxCADWorldDraw): void;
  	/**
  	 * 根据点获取线段索引
  	 * @param point 选择点坐标
  	 * @returns 找到的线段信息，包括线段索引、偏移线段索引及点击位置
  	 */
  	getSegmentByPoint(point: McGePoint3d): PointSegmentRelation | null;
  	/**
  	 * 根据索引获取线段数据
  	 * @param segmentIndex 线段索引
  	 * @returns 找到的线段信息，包括线段索引、偏移线段索引及相关数据
  	 */
  	getSegmentByIndex(segmentIndex: number): PointSegmentRelation | null;
  	/**
  	 * 计算指定偏移量下的多线偏移点（线段偏移+交点法）
  	 */
  	private getOffsetPolylinePoints;
  	/**
  	 * 根据对齐方式计算实际偏移值
  	 * @param offset 原始偏移值
  	 * @returns 根据对齐方式调整后的实际偏移值
  	 */
  	private calculateAlignedOffset;
  	/**
  	 * 绘制多线的每条线（参数传递点集）
  	 */
  	private drawMlines;
  	/**
  	 * 绘制指定偏移量的线（直接用已算好的点集）
  	 */
  	private drawOffsetLine;
  	/**
  	 * 绘制填充（参数传递点集）
  	 */
  	private drawFill;
  	/**
  	 * 绘制端点
  	 */
  	private drawCaps;
  	/**
  	 * 绘制端点弧线
  	 */
  	private drawCapArc;
  	/**
  	 * 获取默认样式
  	 */
  	private getDefaultStyle;
  	/**
  	 * 设置样式名称
  	 */
  	setStyleName(name: string): void;
  	/**
  	 * 获取样式名称
  	 */
  	getStyleName(): string;
  	/**
  	 * 设置对齐方式
  	 */
  	setJustification(justification: number): void;
  	/**
  	 * 获取对齐方式
  	 */
  	getJustification(): number;
  	/**
  	 * 设置比例
  	 */
  	setScale(scale: number): void;
  	/**
  	 * 获取比例
  	 */
  	getScale(): number;
  	/**
  	 * 添加顶点
  	 */
  	addVertex(point: McGePoint3d): void;
  	/**
  	 * 在指定位置插入顶点
  	 * @param index 要插入的位置索引
  	 * @param point 要插入的点
  	 * @returns 是否插入成功
  	 */
  	insertVertexAt(index: number, point: McGePoint3d): boolean;
  	getVertices(): McGePoint3d[];
  	/**
  	 * 获取顶点数量
  	 */
  	getVertexCount(): number;
  	/**
  	 * 获取顶点
  	 */
  	getVertexAt(index: number): McGePoint3d | null;
  	/**
  	 * 设置顶点
  	 */
  	setVertexAt(index: number, point: McGePoint3d): void;
  	/**
  	 * 移除顶点
  	 */
  	removeVertexAt(index: number): void;
  	/**
  	 * 清除所有顶点
  	 */
  	clearVertices(): void;
  	/**
  	 * 绘制拐点连接线
  	 * 在每个转角处绘制从中心点到各条线拐点的连接线
  	 */
  	private drawJoints;
  	/**
  	 * 设置闭合状态
  	 */
  	setIsClosed(isClosed: boolean): void;
  	/**
  	 * 获取闭合状态
  	 */
  	getIsClosed(): boolean;
  }
  export  let MxCpp: MxCppType;
  /**
   * 异步加载 MxCAD assembly，并在加载完成后执行回调函数
   * @param call 回调函数，在加载完成后执行
   * @param locateFile 函数用于确定 wasm 文件的位置，这里提供了一个默认的值
   * @param wasmBinary wasm 二进制数据
   * @param fontspath 字体文件的路径
   * @param networkFonts 网络字体的数组
   * @returns 返回一个 Promise 对象，其中包含 MxCppType 类型的实例
   * @example
   * \`\`\`ts
  	import { loadMxCADassembly } from "mxcad"
  
  	// 调用 loadMxCADassembly 函数并处理返回的 Promise
  	loadMxCADassembly(
  	  (MxCpp) => {
  		console.log('MxCAD assembly 已加载');
  		// 在这里可以对 MxCAD assembly 进行操作
  	  },
  	  // 可选参数，你可以根据需要提供定位函数和其他参数
  	).then((MxCpp) => {
  	  console.log('MxCAD assembly 加载完成');
  	  // 在这里可以继续处理加载完成后的 MxCAD assembly
  	}).catch((error) => {
  	  console.error('加载 MxCAD assembly 时出错：', error);
  	});
   * \`\`\`
   */
  export  function loadMxCADassembly(call?: (MxCpp: MxCppType) => void, locateFile?: (fileName: string, base?: string | URL) => string, wasmBinary?: ArrayBuffer, fontspath?: string, networkFonts?: string[], mxcad?: any): Promise<MxCppType>;
  /**
   * 检查浏览器类型和版本
   * @returns { object } ok 布尔值，表示浏览器是否符合要求 | error 如果浏览器不符合要求，则包含错误信息；否则为空字符串 | var 包含了浏览器信息的对象
   * @example
   * \`\`\`ts
    import { MxCheckTheBrowser } from 'mxcad';
  
    const browserCheckResult = MxCheckTheBrowser();
    if (browserCheckResult.ok) {
  	console.log('浏览器符合要求，可以加载 MxCAD assembly。');
  	// 在这里调用 loadMxCADassembly 函数加载 MxCAD assembly
    } else {
  	console.error('浏览器不符合要求：', browserCheckResult.error);
  	// 在这里处理浏览器不符合要求的情况，可能给出用户友好的提示或者采取其他措施
    }
   * \`\`\`
   */
  export  function MxCheckTheBrowser(): {
  	ok: boolean;
  	error: string;
  	var: any;
  };
  export  function Mx_About(): void;
  /**
   * createMxCad 的参数配置
   * @example
   * \`\`\`ts
     createMxCad({
  	 canvas: "#mxcad",
  	 locateFile: (fileName) => new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,
  	 // 提供要打开的文件 注意../assets/test.mxweb 是相对路径下的文件地址,
  	 // 在vite中可用通过这样的方式得到该文件正确的的网络地址
  	 fileUrl: new URL("../assets/test.mxweb", import.meta.url).href,
  	 // 提供加载字体的目录路径
  	 fontspath: new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
  	 viewBackgroundColor:{red:0,green:0,blue:0}, //黑色背景
  	 middlePan:false, //禁用鼠标中间键操作
  	 multipleSelect: true, // 开启多选
  	 onOpenFileComplete:()=>{
  	   console.log("成功打开文件！")
  	 }
     })
   * \`\`\`
   */
  export interface MxCadConfig {
  	/** 获取加载wasm相关文件(wasm/js/worker.js)路径位置
  	 * @param fileName wasm相关的文件名称
  	 * @param base 相对于js调用位置的http URL绝对路径
  	 * @returns filePath 默认采用base + fileName
  	 * @abstract 本质上locateFile配置函数就是返回wasm相关文件在自己的服务器上的位置
  	 *           在npm包中\`node_modules/mxcad/dist/wasm/2d/\`下的文件就是支持2d的相关wasm文件
  	 */
  	locateFile?: (fileName: string, base?: string | URL) => string;
  	/**  WebAssembly 模块二进制文件 默认情况无需配置 **/
  	wasmBinary?: ArrayBuffer;
  	/**
  	 * 当通过 MxFun.getCurrentDraw 未发现当前mxDraw实例时，
  	 * 会通过 canvas属性(值可以是css选择器字符串也可以是一个canvas元素)来创建mxdraw实例
  	 * 如果想要获得这个mxDraw实例 只需要调用mxdraw包中导出的 MxFun.getCurrentDraw方法即可
  	 * 如果gis模式下，canvas变量不会使用，会自动使用mapbox的canvas.
  	 *   */
  	canvas?: string | HTMLCanvasElement;
  	/**
  	 * mxdraw和mxcad 核心代码加载完成初始化的回调
  	 * onInit默认值函数如下实例所示（请根据你的业务需求自行修改）
  	 * @example
  	 * \`\`\`js
  	 * import { MxFun } from "mxdraw"
  	 * onInit() {
  	 *  MxFun.setIniset({
  	 *       // 启用对象选择功能.
  	 *      EnableIntelliSelect: true,
  	 *       // 是否开启多个选择
  	 *      multipleSelect: false,
  	 *   });
  	 * }
  	 * \`\`\`
  	 * */
  	onInit?: Function;
  	/** 需要初始化打开的文件url路径 */
  	fileUrl?: string;
  	/**
  	 * 监听打开文件成功回调事件
  	 */
  	onOpenFileComplete?: Function;
  	/** 字体文件加载路径，默认是fonts */
  	fontspath?: string;
  	/** 服务器上可供加载的字体列表 */
  	networkFonts?: string[];
  	/** 打开文件参数设置，如，打开文件不使用缓存：{fetchAttributes:FetchAttributes.EMSCRIPTEN_FETCH_LOAD_TO_MEMORY}*/
  	openParameter?: object;
  	/**鼠标中间键操作设置,默认为鼠标中间移动视区，默认值1 */
  	/**  iMethod = 0,中键不移动视区，左键移动
  	* iMethod = 1,中键移动视区，左键不移动
  	* iMethod = 2,中键移动视区，左键移动视区*/
  	middlePan?: number | boolean;
  	/**注册数据 */
  	registdata?: string;
  	/**注册文件 */
  	registfile?: string;
  	/**授权服务 */
  	authorized_service?: string;
  	/**
  	 * 视区背景颜色
  	 */
  	viewBackgroundColor?: {
  		red: number;
  		green: number;
  		blue: number;
  	};
  	/**地图模块 */
  	map?: any;
  	/**多选模式,框选功能,默认值是false */
  	multipleSelect?: boolean;
  	/**是否启用Undo,默认没有启用 */
  	enableUndo?: boolean;
  	/**是否启用选择功能，默认是使用 */
  	enableIntelliSelect?: boolean;
  	/**是否启用浏览模式，默认是编辑模式 */
  	/**true或1,启用浏览模式，CAD对象不能选中
  	/*2,启用浏览模式，CAD对象能选中,但不能夹点编辑*/
  	browse?: boolean | number;
  	/**是否使用webgl1方式启动 */
  	webgl1?: boolean;
  }
  /** 创建MxCad实例
   * @param config 参数配置
   * @param mxcadobj 对象
   * @example
   * //通过创建实例实现图纸展示以下基于vite打包工具
   * \`\`\`ts
   * import { createMxCad } from "mxcad";
   *
   * createMxCad({
   *   canvas: "#mxcad",
   *   locateFile: (fileName) => new URL(\`/node_modules/mxcad/dist/wasm/2d/\${fileName}\`, import.meta.url).href,
   *   // 提供要打开的文件 注意../assets/test.mxweb 是相对路径下的文件地址,
   *   // 在vite中可用通过这样的方式得到该文件正确的的网络地址
   *   fileUrl: new URL("../assets/test.mxweb", import.meta.url).href,
   *   // 提供加载字体的目录路径
   *   fontspath: new URL("node_modules/mxcad/dist/fonts", import.meta.url).href,
   * })
   * \`\`\`
   */
  export  const createMxCad: (config?: MxCadConfig, mxcadobj?: McObject) => Promise<McObject>;
  /** 绘制文字
   * @param height 文字高度
   * @param text 文字内容
   * @param position 文字位置
   * @param angle 文件角度
   * @param color 文字颜色
   */
  export  function drawText(): Promise<McObjectId | undefined>;
  /**
   * 绘圆
   */
  export  function drawCircle(): Promise<McObjectId | undefined>;
  /**
   * 绘直线
   */
  export  function drawLine(): Promise<void>;
  /**
   * 绘多行文本
   */
  export  function drawMText(): Promise<McObjectId | undefined>;
  /** 绘多义线 */
  export  function drawPolyLine(): Promise<McObjectId | undefined>;
  /** 绘制正多边形 */
  export  function drawPolygon(): Promise<void>;
  /**
   * 绘制圆弧
   */
  export  function drawArc(): Promise<void>;
  /**
   * 绘制椭圆或椭圆弧
   */
  export  function drawEllipticalArc(): Promise<McObjectId | undefined>;
  /**
   * 删除对象
   */
  export  function Mx_Erase(): Promise<void>;
  /**
   * 绘制矩形
   */
  export  const drawRectang: () => Promise<void>;
  export  namespace MdGe {
  	enum MxShapeEnum {
  		Enum_COMPOUND = 0,
  		Enum_COMPSOLID = 1,
  		Enum_SOLID = 2,
  		Enum_SHELL = 3,
  		Enum_FACE = 4,
  		Enum_WIRE = 5,
  		Enum_EDGE = 6,
  		Enum_VERTEX = 7,
  		Enum_SHAPE = 8
  	}
  	enum MxHorizontalTextAlignment {
  		HTA_LEFT = 0,
  		HTA_CENTER = 1,
  		HTA_RIGHT = 2
  	}
  	enum MxVerticalTextAlignment {
  		CVTA_BOTTOM = 0,
  		CVTA_CENTER = 1,
  		CVTA_TOP = 2,
  		CVTA_TOPFIRSTLINE = 3
  	}
  	enum MxFontAspect {
  		FA_UNDEFINED = -1,
  		FA_Regular = 0,
  		FA_Bold = 1,
  		FA_Italic = 2,
  		FA_BoldItalic = 3
  	}
  	enum MxTypeOfDisplayText {
  		TODT_NORMAL = 0,
  		TODT_SUBTITLE = 1,
  		TODT_DEKALE = 2,
  		TODT_BLEND = 3,
  		TODT_DIMENSION = 4,
  		TODT_SHADOW = 5
  	}
  	enum MxCF3dFilletShapeEnum {
  		Enum_Rational = 0,
  		Enum_QuasiAngular = 1,
  		Enum_Polynomial = 2
  	}
  	enum MxCFDSChamfMode {
  		Enum_ClassicChamfer = 0,
  		Enum_ConstThroatChamfer = 1,
  		Enum_ConstThroatWithPenetrationChamfer = 2
  	}
  	enum MxGFTrihedron {
  		GF_IsCorrectedFrenet = 0,
  		GF_IsFixed = 1,
  		GF_IsFrenet = 2,
  		GF_IsConstantNormal = 3,
  		GF_IsDarboux = 4,
  		GF_IsGuideAC = 5,
  		GF_IsGuidePlan = 6,
  		GF_IsGuideACWithContact = 7,
  		GF_IsGuidePlanWithContact = 8,
  		GF_IsDiscreteTrihedron = 9
  	}
  	enum MxGAShapeEnum {
  		GA_C0 = 0,
  		GA_G1 = 1,
  		GA_C1 = 2,
  		GA_G2 = 3,
  		GA_C2 = 4,
  		GA_C3 = 5,
  		GA_CN = 6
  	}
  	enum MxOffsetModeEnum {
  		Offset_Skin = 0,
  		Offset_Pipe = 1,
  		Offset_RectoVerso = 2
  	}
  	enum MxGAJoinTypeEnum {
  		GA_Arc = 0,
  		GA_Tangent = 1,
  		GA_Intersection = 2
  	}
  	enum MxNameOfMaterial {
  		Material_NOM_Brass = 0,
  		Material_NOM_Bronze = 1,
  		Material_NOM_Copper = 2,
  		Material_NOM_Gold = 3,
  		Material_NOM_Pewter = 4,
  		Material_NOM_Plastered = 5,
  		Material_NOM_Plastified = 6,
  		Material_NOM_Silver = 7,
  		Material_NOM_Steel = 8,
  		Material_NOM_Stone = 9,
  		Material_NOM_ShinyPlastified = 10,
  		Material_NOM_Satin = 11,
  		Material_NOM_Metalized = 12,
  		Material_NOM_Ionized = 13,
  		Material_NOM_Chrome = 14,
  		Material_NOM_Aluminum = 15,
  		Material_NOM_Obsidian = 16,
  		Material_NOM_Neon = 17,
  		Material_NOM_Jade = 18,
  		Material_NOM_Charcoal = 19,
  		Material_NOM_Water = 20,
  		Material_NOM_Glass = 21,
  		Material_NOM_Diamond = 22,
  		Material_NOM_Transparent = 23,
  		Material_NOM_DEFAULT = 24,
  		Material_NOM_UserDefined = 25
  	}
  	enum MxTypeOfMaterial {
  		Material_TOM_ASPECT = 0,
  		Material_TOM_PHYSIC = 1
  	}
  	enum MxTypeOfReflection {
  		Reflection_TOR_AMBIENT = 0,
  		Reflection_TOR_DIFFUSE = 1,
  		Reflection_TOR_SPECULAR = 2,
  		Reflection_TOR_EMISSION = 3
  	}
  	enum MxNameOfColor {
  		Color_NOC_BLACK = 0,
  		Color_NOC_MATRABLUE = 1,
  		Color_NOC_MATRAGRAY = 2,
  		Color_NOC_ALICEBLUE = 3,
  		Color_NOC_ANTIQUEWHITE = 4,
  		Color_NOC_ANTIQUEWHITE1 = 5,
  		Color_NOC_ANTIQUEWHITE2 = 6,
  		Color_NOC_ANTIQUEWHITE3 = 7,
  		Color_NOC_ANTIQUEWHITE4 = 8,
  		Color_NOC_AQUAMARINE1 = 9,
  		Color_NOC_AQUAMARINE2 = 10,
  		Color_NOC_AQUAMARINE4 = 11,
  		Color_NOC_AZURE = 12,
  		Color_NOC_AZURE2 = 13,
  		Color_NOC_AZURE3 = 14,
  		Color_NOC_AZURE4 = 15,
  		Color_NOC_BEIGE = 16,
  		Color_NOC_BISQUE = 17,
  		Color_NOC_BISQUE2 = 18,
  		Color_NOC_BISQUE3 = 19,
  		Color_NOC_BISQUE4 = 20,
  		Color_NOC_BLANCHEDALMOND = 21,
  		Color_NOC_BLUE = 22,
  		Color_NOC_BLUE1 = 22,
  		Color_NOC_BLUE2 = 23,
  		Color_NOC_BLUE3 = 24,
  		Color_NOC_BLUE4 = 25,
  		Color_NOC_BLUEVIOLET = 26,
  		Color_NOC_BROWN = 27,
  		Color_NOC_BROWN1 = 28,
  		Color_NOC_BROWN2 = 29,
  		Color_NOC_BROWN3 = 30,
  		Color_NOC_BROWN4 = 31,
  		Color_NOC_BURLYWOOD = 32,
  		Color_NOC_BURLYWOOD1 = 33,
  		Color_NOC_BURLYWOOD2 = 34,
  		Color_NOC_BURLYWOOD3 = 35,
  		Color_NOC_BURLYWOOD4 = 36,
  		Color_NOC_CADETBLUE = 37,
  		Color_NOC_CADETBLUE1 = 38,
  		Color_NOC_CADETBLUE2 = 39,
  		Color_NOC_CADETBLUE3 = 40,
  		Color_NOC_CADETBLUE4 = 41,
  		Color_NOC_CHARTREUSE = 42,
  		Color_NOC_CHARTREUSE1 = 42,
  		Color_NOC_CHARTREUSE2 = 43,
  		Color_NOC_CHARTREUSE3 = 44,
  		Color_NOC_CHARTREUSE4 = 45,
  		Color_NOC_CHOCOLATE = 46,
  		Color_NOC_CHOCOLATE1 = 47,
  		Color_NOC_CHOCOLATE2 = 48,
  		Color_NOC_CHOCOLATE3 = 49,
  		Color_NOC_CHOCOLATE4 = 50,
  		Color_NOC_CORAL = 51,
  		Color_NOC_CORAL1 = 52,
  		Color_NOC_CORAL2 = 53,
  		Color_NOC_CORAL3 = 54,
  		Color_NOC_CORAL4 = 55,
  		Color_NOC_CORNFLOWERBLUE = 56,
  		Color_NOC_CORNSILK1 = 57,
  		Color_NOC_CORNSILK2 = 58,
  		Color_NOC_CORNSILK3 = 59,
  		Color_NOC_CORNSILK4 = 60,
  		Color_NOC_CYAN = 61,
  		Color_NOC_CYAN1 = 61,
  		Color_NOC_CYAN2 = 62,
  		Color_NOC_CYAN3 = 63,
  		Color_NOC_CYAN4 = 64,
  		Color_NOC_DARKGOLDENROD = 65,
  		Color_NOC_DARKGOLDENROD1 = 66,
  		Color_NOC_DARKGOLDENROD2 = 67,
  		Color_NOC_DARKGOLDENROD3 = 68,
  		Color_NOC_DARKGOLDENROD4 = 69,
  		Color_NOC_DARKGREEN = 70,
  		Color_NOC_DARKKHAKI = 71,
  		Color_NOC_DARKOLIVEGREEN = 72,
  		Color_NOC_DARKOLIVEGREEN1 = 73,
  		Color_NOC_DARKOLIVEGREEN2 = 74,
  		Color_NOC_DARKOLIVEGREEN3 = 75,
  		Color_NOC_DARKOLIVEGREEN4 = 76,
  		Color_NOC_DARKORANGE = 77,
  		Color_NOC_DARKORANGE1 = 78,
  		Color_NOC_DARKORANGE2 = 79,
  		Color_NOC_DARKORANGE3 = 80,
  		Color_NOC_DARKORANGE4 = 81,
  		Color_NOC_DARKORCHID = 82,
  		Color_NOC_DARKORCHID1 = 83,
  		Color_NOC_DARKORCHID2 = 84,
  		Color_NOC_DARKORCHID3 = 85,
  		Color_NOC_DARKORCHID4 = 86,
  		Color_NOC_DARKSALMON = 87,
  		Color_NOC_DARKSEAGREEN = 88,
  		Color_NOC_DARKSEAGREEN1 = 89,
  		Color_NOC_DARKSEAGREEN2 = 90,
  		Color_NOC_DARKSEAGREEN3 = 91,
  		Color_NOC_DARKSEAGREEN4 = 92,
  		Color_NOC_DARKSLATEBLUE = 93,
  		Color_NOC_DARKSLATEGRAY1 = 94,
  		Color_NOC_DARKSLATEGRAY2 = 95,
  		Color_NOC_DARKSLATEGRAY3 = 96,
  		Color_NOC_DARKSLATEGRAY4 = 97,
  		Color_NOC_DARKSLATEGRAY = 98,
  		Color_NOC_DARKTURQUOISE = 99,
  		Color_NOC_DARKVIOLET = 100,
  		Color_NOC_DEEPPINK = 101,
  		Color_NOC_DEEPPINK2 = 102,
  		Color_NOC_DEEPPINK3 = 103,
  		Color_NOC_DEEPPINK4 = 104,
  		Color_NOC_DEEPSKYBLUE1 = 105,
  		Color_NOC_DEEPSKYBLUE2 = 106,
  		Color_NOC_DEEPSKYBLUE3 = 107,
  		Color_NOC_DEEPSKYBLUE4 = 108,
  		Color_NOC_DODGERBLUE1 = 109,
  		Color_NOC_DODGERBLUE2 = 110,
  		Color_NOC_DODGERBLUE3 = 111,
  		Color_NOC_DODGERBLUE4 = 112,
  		Color_NOC_FIREBRICK = 113,
  		Color_NOC_FIREBRICK1 = 114,
  		Color_NOC_FIREBRICK2 = 115,
  		Color_NOC_FIREBRICK3 = 116,
  		Color_NOC_FIREBRICK4 = 117,
  		Color_NOC_FLORALWHITE = 118,
  		Color_NOC_FORESTGREEN = 119,
  		Color_NOC_GAINSBORO = 120,
  		Color_NOC_GHOSTWHITE = 121,
  		Color_NOC_GOLD = 122,
  		Color_NOC_GOLD1 = 122,
  		Color_NOC_GOLD2 = 123,
  		Color_NOC_GOLD3 = 124,
  		Color_NOC_GOLD4 = 125,
  		Color_NOC_GOLDENROD = 126,
  		Color_NOC_GOLDENROD1 = 127,
  		Color_NOC_GOLDENROD2 = 128,
  		Color_NOC_GOLDENROD3 = 129,
  		Color_NOC_GOLDENROD4 = 130,
  		Color_NOC_GRAY = 131,
  		Color_NOC_GRAY0 = 132,
  		Color_NOC_GRAY1 = 133,
  		Color_NOC_GRAY2 = 134,
  		Color_NOC_GRAY3 = 135,
  		Color_NOC_GRAY4 = 136,
  		Color_NOC_GRAY5 = 137,
  		Color_NOC_GRAY6 = 138,
  		Color_NOC_GRAY7 = 139,
  		Color_NOC_GRAY8 = 140,
  		Color_NOC_GRAY9 = 141,
  		Color_NOC_GRAY10 = 142,
  		Color_NOC_GRAY11 = 143,
  		Color_NOC_GRAY12 = 144,
  		Color_NOC_GRAY13 = 145,
  		Color_NOC_GRAY14 = 146,
  		Color_NOC_GRAY15 = 147,
  		Color_NOC_GRAY16 = 148,
  		Color_NOC_GRAY17 = 149,
  		Color_NOC_GRAY18 = 150,
  		Color_NOC_GRAY19 = 151,
  		Color_NOC_GRAY20 = 152,
  		Color_NOC_GRAY21 = 153,
  		Color_NOC_GRAY22 = 154,
  		Color_NOC_GRAY23 = 155,
  		Color_NOC_GRAY24 = 156,
  		Color_NOC_GRAY25 = 157,
  		Color_NOC_GRAY26 = 158,
  		Color_NOC_GRAY27 = 159,
  		Color_NOC_GRAY28 = 160,
  		Color_NOC_GRAY29 = 161,
  		Color_NOC_GRAY30 = 162,
  		Color_NOC_GRAY31 = 163,
  		Color_NOC_GRAY32 = 164,
  		Color_NOC_GRAY33 = 165,
  		Color_NOC_GRAY34 = 166,
  		Color_NOC_GRAY35 = 167,
  		Color_NOC_GRAY36 = 168,
  		Color_NOC_GRAY37 = 169,
  		Color_NOC_GRAY38 = 170,
  		Color_NOC_GRAY39 = 171,
  		Color_NOC_GRAY40 = 172,
  		Color_NOC_GRAY41 = 173,
  		Color_NOC_GRAY42 = 174,
  		Color_NOC_GRAY43 = 175,
  		Color_NOC_GRAY44 = 176,
  		Color_NOC_GRAY45 = 177,
  		Color_NOC_GRAY46 = 178,
  		Color_NOC_GRAY47 = 179,
  		Color_NOC_GRAY48 = 180,
  		Color_NOC_GRAY49 = 181,
  		Color_NOC_GRAY50 = 182,
  		Color_NOC_GRAY51 = 183,
  		Color_NOC_GRAY52 = 184,
  		Color_NOC_GRAY53 = 185,
  		Color_NOC_GRAY54 = 186,
  		Color_NOC_GRAY55 = 187,
  		Color_NOC_GRAY56 = 188,
  		Color_NOC_GRAY57 = 189,
  		Color_NOC_GRAY58 = 190,
  		Color_NOC_GRAY59 = 191,
  		Color_NOC_GRAY60 = 192,
  		Color_NOC_GRAY61 = 193,
  		Color_NOC_GRAY62 = 194,
  		Color_NOC_GRAY63 = 195,
  		Color_NOC_GRAY64 = 196,
  		Color_NOC_GRAY65 = 197,
  		Color_NOC_GRAY66 = 198,
  		Color_NOC_GRAY67 = 199,
  		Color_NOC_GRAY68 = 200,
  		Color_NOC_GRAY69 = 201,
  		Color_NOC_GRAY70 = 202,
  		Color_NOC_GRAY71 = 203,
  		Color_NOC_GRAY72 = 204,
  		Color_NOC_GRAY73 = 205,
  		Color_NOC_GRAY74 = 206,
  		Color_NOC_GRAY75 = 207,
  		Color_NOC_GRAY76 = 208,
  		Color_NOC_GRAY77 = 209,
  		Color_NOC_GRAY78 = 210,
  		Color_NOC_GRAY79 = 211,
  		Color_NOC_GRAY80 = 212,
  		Color_NOC_GRAY81 = 213,
  		Color_NOC_GRAY82 = 214,
  		Color_NOC_GRAY83 = 215,
  		Color_NOC_GRAY85 = 216,
  		Color_NOC_GRAY86 = 217,
  		Color_NOC_GRAY87 = 218,
  		Color_NOC_GRAY88 = 219,
  		Color_NOC_GRAY89 = 220,
  		Color_NOC_GRAY90 = 221,
  		Color_NOC_GRAY91 = 222,
  		Color_NOC_GRAY92 = 223,
  		Color_NOC_GRAY93 = 224,
  		Color_NOC_GRAY94 = 225,
  		Color_NOC_GRAY95 = 226,
  		Color_NOC_GRAY97 = 227,
  		Color_NOC_GRAY98 = 228,
  		Color_NOC_GRAY99 = 229,
  		Color_NOC_GREEN = 230,
  		Color_NOC_GREEN1 = 230,
  		Color_NOC_GREEN2 = 231,
  		Color_NOC_GREEN3 = 232,
  		Color_NOC_GREEN4 = 233,
  		Color_NOC_GREENYELLOW = 234,
  		Color_NOC_HONEYDEW = 235,
  		Color_NOC_HONEYDEW2 = 236,
  		Color_NOC_HONEYDEW3 = 237,
  		Color_NOC_HONEYDEW4 = 238,
  		Color_NOC_HOTPINK = 239,
  		Color_NOC_HOTPINK1 = 240,
  		Color_NOC_HOTPINK2 = 241,
  		Color_NOC_HOTPINK3 = 242,
  		Color_NOC_HOTPINK4 = 243,
  		Color_NOC_INDIANRED = 244,
  		Color_NOC_INDIANRED1 = 245,
  		Color_NOC_INDIANRED2 = 246,
  		Color_NOC_INDIANRED3 = 247,
  		Color_NOC_INDIANRED4 = 248,
  		Color_NOC_IVORY = 249,
  		Color_NOC_IVORY2 = 250,
  		Color_NOC_IVORY3 = 251,
  		Color_NOC_IVORY4 = 252,
  		Color_NOC_KHAKI = 253,
  		Color_NOC_KHAKI1 = 254,
  		Color_NOC_KHAKI2 = 255,
  		Color_NOC_KHAKI3 = 256,
  		Color_NOC_KHAKI4 = 257,
  		Color_NOC_LAVENDER = 258,
  		Color_NOC_LAVENDERBLUSH1 = 259,
  		Color_NOC_LAVENDERBLUSH2 = 260,
  		Color_NOC_LAVENDERBLUSH3 = 261,
  		Color_NOC_LAVENDERBLUSH4 = 262,
  		Color_NOC_LAWNGREEN = 263,
  		Color_NOC_LEMONCHIFFON1 = 264,
  		Color_NOC_LEMONCHIFFON2 = 265,
  		Color_NOC_LEMONCHIFFON3 = 266,
  		Color_NOC_LEMONCHIFFON4 = 267,
  		Color_NOC_LIGHTBLUE = 268,
  		Color_NOC_LIGHTBLUE1 = 269,
  		Color_NOC_LIGHTBLUE2 = 270,
  		Color_NOC_LIGHTBLUE3 = 271,
  		Color_NOC_LIGHTBLUE4 = 272,
  		Color_NOC_LIGHTCORAL = 273,
  		Color_NOC_LIGHTCYAN = 274,
  		Color_NOC_LIGHTCYAN1 = 274,
  		Color_NOC_LIGHTCYAN2 = 275,
  		Color_NOC_LIGHTCYAN3 = 276,
  		Color_NOC_LIGHTCYAN4 = 277,
  		Color_NOC_LIGHTGOLDENROD = 278,
  		Color_NOC_LIGHTGOLDENROD1 = 279,
  		Color_NOC_LIGHTGOLDENROD2 = 280,
  		Color_NOC_LIGHTGOLDENROD3 = 281,
  		Color_NOC_LIGHTGOLDENROD4 = 282,
  		Color_NOC_LIGHTGOLDENRODYELLOW = 283,
  		Color_NOC_LIGHTGRAY = 284,
  		Color_NOC_LIGHTPINK = 285,
  		Color_NOC_LIGHTPINK1 = 286,
  		Color_NOC_LIGHTPINK2 = 287,
  		Color_NOC_LIGHTPINK3 = 288,
  		Color_NOC_LIGHTPINK4 = 289,
  		Color_NOC_LIGHTSALMON1 = 290,
  		Color_NOC_LIGHTSALMON2 = 291,
  		Color_NOC_LIGHTSALMON3 = 292,
  		Color_NOC_LIGHTSALMON4 = 293,
  		Color_NOC_LIGHTSEAGREEN = 294,
  		Color_NOC_LIGHTSKYBLUE = 295,
  		Color_NOC_LIGHTSKYBLUE1 = 296,
  		Color_NOC_LIGHTSKYBLUE2 = 297,
  		Color_NOC_LIGHTSKYBLUE3 = 298,
  		Color_NOC_LIGHTSKYBLUE4 = 299,
  		Color_NOC_LIGHTSLATEBLUE = 300,
  		Color_NOC_LIGHTSLATEGRAY = 301,
  		Color_NOC_LIGHTSTEELBLUE = 302,
  		Color_NOC_LIGHTSTEELBLUE1 = 303,
  		Color_NOC_LIGHTSTEELBLUE2 = 304,
  		Color_NOC_LIGHTSTEELBLUE3 = 305,
  		Color_NOC_LIGHTSTEELBLUE4 = 306,
  		Color_NOC_LIGHTYELLOW = 307,
  		Color_NOC_LIGHTYELLOW2 = 308,
  		Color_NOC_LIGHTYELLOW3 = 309,
  		Color_NOC_LIGHTYELLOW4 = 310,
  		Color_NOC_LIMEGREEN = 311,
  		Color_NOC_LINEN = 312,
  		Color_NOC_MAGENTA = 313,
  		Color_NOC_MAGENTA1 = 313,
  		Color_NOC_MAGENTA2 = 314,
  		Color_NOC_MAGENTA3 = 315,
  		Color_NOC_MAGENTA4 = 316,
  		Color_NOC_MAROON = 317,
  		Color_NOC_MAROON1 = 318,
  		Color_NOC_MAROON2 = 319,
  		Color_NOC_MAROON3 = 320,
  		Color_NOC_MAROON4 = 321,
  		Color_NOC_MEDIUMAQUAMARINE = 322,
  		Color_NOC_MEDIUMORCHID = 323,
  		Color_NOC_MEDIUMORCHID1 = 324,
  		Color_NOC_MEDIUMORCHID2 = 325,
  		Color_NOC_MEDIUMORCHID3 = 326,
  		Color_NOC_MEDIUMORCHID4 = 327,
  		Color_NOC_MEDIUMPURPLE = 328,
  		Color_NOC_MEDIUMPURPLE1 = 329,
  		Color_NOC_MEDIUMPURPLE2 = 330,
  		Color_NOC_MEDIUMPURPLE3 = 331,
  		Color_NOC_MEDIUMPURPLE4 = 332,
  		Color_NOC_MEDIUMSEAGREEN = 333,
  		Color_NOC_MEDIUMSLATEBLUE = 334,
  		Color_NOC_MEDIUMSPRINGGREEN = 335,
  		Color_NOC_MEDIUMTURQUOISE = 336,
  		Color_NOC_MEDIUMVIOLETRED = 337,
  		Color_NOC_MIDNIGHTBLUE = 338,
  		Color_NOC_MINTCREAM = 339,
  		Color_NOC_MISTYROSE = 340,
  		Color_NOC_MISTYROSE2 = 341,
  		Color_NOC_MISTYROSE3 = 342,
  		Color_NOC_MISTYROSE4 = 343,
  		Color_NOC_MOCCASIN = 344,
  		Color_NOC_NAVAJOWHITE1 = 345,
  		Color_NOC_NAVAJOWHITE2 = 346,
  		Color_NOC_NAVAJOWHITE3 = 347,
  		Color_NOC_NAVAJOWHITE4 = 348,
  		Color_NOC_NAVYBLUE = 349,
  		Color_NOC_OLDLACE = 350,
  		Color_NOC_OLIVEDRAB = 351,
  		Color_NOC_OLIVEDRAB1 = 352,
  		Color_NOC_OLIVEDRAB2 = 353,
  		Color_NOC_OLIVEDRAB3 = 354,
  		Color_NOC_OLIVEDRAB4 = 355,
  		Color_NOC_ORANGE = 356,
  		Color_NOC_ORANGE1 = 356,
  		Color_NOC_ORANGE2 = 357,
  		Color_NOC_ORANGE3 = 358,
  		Color_NOC_ORANGE4 = 359,
  		Color_NOC_ORANGERED = 360,
  		Color_NOC_ORANGERED1 = 360,
  		Color_NOC_ORANGERED2 = 361,
  		Color_NOC_ORANGERED3 = 362,
  		Color_NOC_ORANGERED4 = 363,
  		Color_NOC_ORCHID = 364,
  		Color_NOC_ORCHID1 = 365,
  		Color_NOC_ORCHID2 = 366,
  		Color_NOC_ORCHID3 = 367,
  		Color_NOC_ORCHID4 = 368,
  		Color_NOC_PALEGOLDENROD = 369,
  		Color_NOC_PALEGREEN = 370,
  		Color_NOC_PALEGREEN1 = 371,
  		Color_NOC_PALEGREEN2 = 372,
  		Color_NOC_PALEGREEN3 = 373,
  		Color_NOC_PALEGREEN4 = 374,
  		Color_NOC_PALETURQUOISE = 375,
  		Color_NOC_PALETURQUOISE1 = 376,
  		Color_NOC_PALETURQUOISE2 = 377,
  		Color_NOC_PALETURQUOISE3 = 378,
  		Color_NOC_PALETURQUOISE4 = 379,
  		Color_NOC_PALEVIOLETRED = 380,
  		Color_NOC_PALEVIOLETRED1 = 381,
  		Color_NOC_PALEVIOLETRED2 = 382,
  		Color_NOC_PALEVIOLETRED3 = 383,
  		Color_NOC_PALEVIOLETRED4 = 384,
  		Color_NOC_PAPAYAWHIP = 385,
  		Color_NOC_PEACHPUFF = 386,
  		Color_NOC_PEACHPUFF2 = 387,
  		Color_NOC_PEACHPUFF3 = 388,
  		Color_NOC_PEACHPUFF4 = 389,
  		Color_NOC_PERU = 390,
  		Color_NOC_PINK = 391,
  		Color_NOC_PINK1 = 392,
  		Color_NOC_PINK2 = 393,
  		Color_NOC_PINK3 = 394,
  		Color_NOC_PINK4 = 395,
  		Color_NOC_PLUM = 396,
  		Color_NOC_PLUM1 = 397,
  		Color_NOC_PLUM2 = 398,
  		Color_NOC_PLUM3 = 399,
  		Color_NOC_PLUM4 = 400,
  		Color_NOC_POWDERBLUE = 401,
  		Color_NOC_PURPLE = 402,
  		Color_NOC_PURPLE1 = 403,
  		Color_NOC_PURPLE2 = 404,
  		Color_NOC_PURPLE3 = 405,
  		Color_NOC_PURPLE4 = 406,
  		Color_NOC_RED = 407,
  		Color_NOC_RED1 = 407,
  		Color_NOC_RED2 = 408,
  		Color_NOC_RED3 = 409,
  		Color_NOC_RED4 = 410,
  		Color_NOC_ROSYBROWN = 411,
  		Color_NOC_ROSYBROWN1 = 412,
  		Color_NOC_ROSYBROWN2 = 413,
  		Color_NOC_ROSYBROWN3 = 414,
  		Color_NOC_ROSYBROWN4 = 415,
  		Color_NOC_ROYALBLUE = 416,
  		Color_NOC_ROYALBLUE1 = 417,
  		Color_NOC_ROYALBLUE2 = 418,
  		Color_NOC_ROYALBLUE3 = 419,
  		Color_NOC_ROYALBLUE4 = 420,
  		Color_NOC_SADDLEBROWN = 421,
  		Color_NOC_SALMON = 422,
  		Color_NOC_SALMON1 = 423,
  		Color_NOC_SALMON2 = 424,
  		Color_NOC_SALMON3 = 425,
  		Color_NOC_SALMON4 = 426,
  		Color_NOC_SANDYBROWN = 427,
  		Color_NOC_SEAGREEN = 428,
  		Color_NOC_SEAGREEN1 = 429,
  		Color_NOC_SEAGREEN2 = 430,
  		Color_NOC_SEAGREEN3 = 431,
  		Color_NOC_SEAGREEN4 = 432,
  		Color_NOC_SEASHELL = 433,
  		Color_NOC_SEASHELL2 = 434,
  		Color_NOC_SEASHELL3 = 435,
  		Color_NOC_SEASHELL4 = 436,
  		Color_NOC_BEET = 437,
  		Color_NOC_TEAL = 438,
  		Color_NOC_SIENNA = 439,
  		Color_NOC_SIENNA1 = 440,
  		Color_NOC_SIENNA2 = 441,
  		Color_NOC_SIENNA3 = 442,
  		Color_NOC_SIENNA4 = 443,
  		Color_NOC_SKYBLUE = 444,
  		Color_NOC_SKYBLUE1 = 445,
  		Color_NOC_SKYBLUE2 = 446,
  		Color_NOC_SKYBLUE3 = 447,
  		Color_NOC_SKYBLUE4 = 448,
  		Color_NOC_SLATEBLUE = 449,
  		Color_NOC_SLATEBLUE1 = 450,
  		Color_NOC_SLATEBLUE2 = 451,
  		Color_NOC_SLATEBLUE3 = 452,
  		Color_NOC_SLATEBLUE4 = 453,
  		Color_NOC_SLATEGRAY1 = 454,
  		Color_NOC_SLATEGRAY2 = 455,
  		Color_NOC_SLATEGRAY3 = 456,
  		Color_NOC_SLATEGRAY4 = 457,
  		Color_NOC_SLATEGRAY = 458,
  		Color_NOC_SNOW = 459,
  		Color_NOC_SNOW2 = 460,
  		Color_NOC_SNOW3 = 461,
  		Color_NOC_SNOW4 = 462,
  		Color_NOC_SPRINGGREEN = 463,
  		Color_NOC_SPRINGGREEN2 = 464,
  		Color_NOC_SPRINGGREEN3 = 465,
  		Color_NOC_SPRINGGREEN4 = 466,
  		Color_NOC_STEELBLUE = 467,
  		Color_NOC_STEELBLUE1 = 468,
  		Color_NOC_STEELBLUE2 = 469,
  		Color_NOC_STEELBLUE3 = 470,
  		Color_NOC_STEELBLUE4 = 471,
  		Color_NOC_TAN = 472,
  		Color_NOC_TAN1 = 473,
  		Color_NOC_TAN2 = 474,
  		Color_NOC_TAN3 = 475,
  		Color_NOC_TAN4 = 476,
  		Color_NOC_THISTLE = 477,
  		Color_NOC_THISTLE1 = 478,
  		Color_NOC_THISTLE2 = 479,
  		Color_NOC_THISTLE3 = 480,
  		Color_NOC_THISTLE4 = 481,
  		Color_NOC_TOMATO = 482,
  		Color_NOC_TOMATO1 = 482,
  		Color_NOC_TOMATO2 = 483,
  		Color_NOC_TOMATO3 = 484,
  		Color_NOC_TOMATO4 = 485,
  		Color_NOC_TURQUOISE = 486,
  		Color_NOC_TURQUOISE1 = 487,
  		Color_NOC_TURQUOISE2 = 488,
  		Color_NOC_TURQUOISE3 = 489,
  		Color_NOC_TURQUOISE4 = 490,
  		Color_NOC_VIOLET = 491,
  		Color_NOC_VIOLETRED = 492,
  		Color_NOC_VIOLETRED1 = 493,
  		Color_NOC_VIOLETRED2 = 494,
  		Color_NOC_VIOLETRED3 = 495,
  		Color_NOC_VIOLETRED4 = 496,
  		Color_NOC_WHEAT = 497,
  		Color_NOC_WHEAT1 = 498,
  		Color_NOC_WHEAT2 = 499,
  		Color_NOC_WHEAT3 = 500,
  		Color_NOC_WHEAT4 = 501,
  		Color_NOC_WHITESMOKE = 502,
  		Color_NOC_YELLOW = 503,
  		Color_NOC_YELLOW1 = 503,
  		Color_NOC_YELLOW2 = 504,
  		Color_NOC_YELLOW3 = 505,
  		Color_NOC_YELLOW4 = 506,
  		Color_NOC_YELLOWGREEN = 507,
  		Color_NOC_WHITE = 508
  	}
  	enum MxTypeOfColor {
  		Color_TOC_RGB = 0,
  		Color_TOC_sRGB = 1,
  		Color_TOC_HLS = 2,
  		Color_TOC_CIELab = 3,
  		Color_TOC_CIELch = 4
  	}
  	enum MxDisplayMode {
  		DM_WireFrame = 0,
  		DM_Shaded = 1
  	}
  	enum MxTypeOfLightSource {
  		LightSource_TOLS_AMBIENT = 0,
  		LightSource_TOLS_DIRECTIONAL = 1,
  		LightSource_TOLS_POSITIONAL = 2,
  		LightSource_TOLS_SPOT = 3
  	}
  	enum MxCameraProjection {
  		CProjection_Orthographic = 0,
  		CProjection_Perspective = 1,
  		CProjection_Stereo = 2,
  		CProjection_MonoLeftEye = 3,
  		CProjection_MonoRightEye = 4
  	}
  	enum MxV3dTypeOfOrientation {
  		Orientation_Xpos = 0,
  		Orientation_Ypos = 1,
  		Orientation_Zpos = 2,
  		Orientation_Xneg = 3,
  		Orientation_Yneg = 4,
  		Orientation_Zneg = 5,
  		Orientation_XposYpos = 6,
  		Orientation_XposZpos = 7,
  		Orientation_YposZpos = 8,
  		Orientation_XnegYneg = 9,
  		Orientation_XnegYpos = 10,
  		Orientation_XnegZneg = 11,
  		Orientation_XnegZpos = 12,
  		Orientation_YnegZneg = 13,
  		Orientation_YnegZpos = 14,
  		Orientation_XposYneg = 15,
  		Orientation_XposZneg = 16,
  		Orientation_YposZneg = 17,
  		Orientation_XposYposZpos = 18,
  		Orientation_XposYnegZpos = 19,
  		Orientation_XposYposZneg = 20,
  		Orientation_XnegYposZpos = 21,
  		Orientation_XposYnegZneg = 22,
  		Orientation_XnegYposZneg = 23,
  		Orientation_XnegYnegZpos = 24,
  		Orientation_XnegYnegZneg = 25,
  		Orientation_TypeOfOrientation_Zup_AxoLeft = 24,
  		Orientation_TypeOfOrientation_Zup_AxoRight = 19,
  		Orientation_TypeOfOrientation_Zup_Front = 4,
  		Orientation_TypeOfOrientation_Zup_Back = 1,
  		Orientation_TypeOfOrientation_Zup_Top = 2,
  		Orientation_TypeOfOrientation_Zup_Bottom = 5,
  		Orientation_TypeOfOrientation_Zup_Left = 3,
  		Orientation_TypeOfOrientation_Zup_Right = 0,
  		Orientation_TypeOfOrientation_Yup_AxoLeft = 21,
  		Orientation_TypeOfOrientation_Yup_AxoRight = 18,
  		Orientation_TypeOfOrientation_Yup_Front = 2,
  		Orientation_TypeOfOrientation_Yup_Back = 5,
  		Orientation_TypeOfOrientation_Yup_Top = 1,
  		Orientation_TypeOfOrientation_Yup_Bottom = 4,
  		Orientation_TypeOfOrientation_Yup_Left = 0,
  		Orientation_TypeOfOrientation_Yup_Right = 3
  	}
  	enum MxTypeOfAngle {
  		Angle_TypeOfAngle_Interior = 0,
  		Angle_TypeOfAngle_Exterior = 1
  	}
  	enum MxTypeOfAngleArrowVisibility {
  		Visibility_TOAAV_Both = 0,
  		Visibility_TOAAV_First = 1,
  		Visibility_TOAAV_Second = 2,
  		Visibility_TOAAV_None = 3
  	}
  	enum MxTypeOfLine {
  		Line_TOL_EMPTY = -1,
  		Line_TOL_SOLID = 0,
  		Line_TOL_DASH = 1,
  		Line_TOL_DOT = 2,
  		Line_TOL_DOTDASH = 3,
  		Line_TOL_USERDEFINED = 4
  	}
  	enum MxTextPath {
  		TextPath_TP_UP = 0,
  		TextPath_TP_DOWN = 1,
  		TextPath_TP_LEFT = 2,
  		TextPath_TP_RIGHT = 3
  	}
  	enum MxDimensionArrowOrientation {
  		DimensionArrowOrientation_DAO_Internal = 0,
  		DimensionArrowOrientation_DAO_External = 1,
  		DimensionArrowOrientation_DAO_Fit = 2
  	}
  	enum MxDimensionTextVerticalPosition {
  		DimensionTextVerticalPosition_DTVP_Above = 0,
  		DimensionTextVerticalPosition_DTVP_Below = 1,
  		DimensionTextVerticalPosition_DTVP_Center = 2
  	}
  	enum MxDimensionTextHorizontalPosition {
  		DimensionTextHorizontalPosition_DTHP_Left = 0,
  		DimensionTextHorizontalPosition_DTHP_Right = 1,
  		DimensionTextHorizontalPosition_DTHP_Center = 2,
  		DimensionTextHorizontalPosition_DTHP_Fit = 3
  	}
  	enum MxKindOfDimension {
  		KindOfDimension_KOD_NONE = 0,
  		KindOfDimension_KOD_LENGTH = 1,
  		KindOfDimension_KOD_PLANEANGLE = 2,
  		KindOfDimension_KOD_SOLIDANGLE = 3,
  		KindOfDimension_KOD_AREA = 4,
  		KindOfDimension_KOD_VOLUME = 5,
  		KindOfDimension_KOD_MASS = 6,
  		KindOfDimension_KOD_TIME = 7,
  		KindOfDimension_KOD_RADIUS = 8,
  		KindOfDimension_KOD_DIAMETER = 9,
  		KindOfDimension_KOD_CHAMF2D = 10,
  		KindOfDimension_KOD_CHAMF3D = 11,
  		KindOfDimension_KOD_OFFSET = 12,
  		KindOfDimension_KOD_ELLIPSERADIUS = 13
  	}
  	enum MxDocColorType {
  		DocColor_ColorGen = 0,
  		DocColor_ColorSurf = 1,
  		DocColor_ColorCurv = 2
  	}
  	enum MxKindOfInteractive {
  		KindOfInteractive_None = 0,
  		KindOfInteractive_Datum = 1,
  		KindOfInteractive_Shape = 2,
  		KindOfInteractive_Object = 3,
  		KindOfInteractive_Relation = 4,
  		KindOfInteractive_Dimension = 5,
  		KindOfInteractive_LightSource = 6,
  		KOI_None = 0,
  		KOI_Datum = 1,
  		KOI_Shape = 2,
  		KOI_Object = 3,
  		KOI_Relation = 4,
  		KOI_Dimension = 5
  	}
  	enum MxPrs3dTypeOfHLR {
  		TOH_NotSet = 0,
  		TOH_PolyAlgo = 1,
  		TOH_Algo = 2
  	}
  	enum MxDisplayStatus {
  		DisplayStatus_Displayed = 0,
  		DisplayStatus_Erased = 1,
  		DisplayStatus_None = 2,
  		DS_Displayed = 0,
  		DS_Erased = 1,
  		DS_None = 2
  	}
  	enum MxGlobalDisplayMode {
  		DisplayMode_Wireframe = 0,
  		DisplayMode_HiddenLineRemoval = 1,
  		DisplayMode_Shaded = 2,
  		DisplayMode_ShadedWithFaceBoundary = 3,
  		DisplayMode_Transparency = 4
  	}
  	enum MxGradientFillMethod {
  		GradientFillMethod_None = 0,
  		GradientFillMethod_Horizontal = 1,
  		GradientFillMethod_Vertical = 2,
  		GradientFillMethod_Diagonal1 = 3,
  		GradientFillMethod_Diagonal2 = 4,
  		GradientFillMethod_Corner1 = 5,
  		GradientFillMethod_Corner2 = 6,
  		GradientFillMethod_Corner3 = 7,
  		GradientFillMethod_Corner4 = 8,
  		GradientFillMethod_Elliptical = 9,
  		GFM_NONE = 0,
  		GFM_HOR = 1,
  		GFM_VER = 2,
  		GFM_DIAG1 = 3,
  		GFM_DIAG2 = 4,
  		GFM_CORNER1 = 5,
  		GFM_CORNER2 = 6,
  		GFM_CORNER3 = 7,
  		GFM_CORNER4 = 8
  	}
  	enum MxFormat {
  		Format_Unknown = 0,
  		Format_Image = 1,
  		Format_3DS = 2,
  		Format_3MF = 3,
  		Format_AMF = 4,
  		Format_COLLADA = 5,
  		Format_DXF = 6,
  		Format_FBX = 7,
  		Format_GLTF = 8,
  		Format_IGES = 9,
  		Format_OBJ = 10,
  		Format_OCCBREP = 11,
  		Format_OFF = 12,
  		Format_PLY = 13,
  		Format_STEP = 14,
  		Format_STL = 15,
  		Format_VRML = 16,
  		Format_X3D = 17,
  		Format_Blender = 18
  	}
  	enum MxQuantAspect {
  		Quant_Length = 0,
  		Quant_Area = 1,
  		Quant_Volume = 2
  	}
  	enum MxOrientation {
  		Orientation_FORWARD = 0,
  		Orientation_REVERSED = 1,
  		Orientation_INTERNAL = 2,
  		Orientation_EXTERNAL = 3
  	}
  	enum MxTransitionMode {
  		Mx_Transformed = 0,
  		Mx_RightCorner = 1,
  		Mx_RoundCorner = 2
  	}
  }
   class MxApp3DType extends PubSub<{
  	eventModesSelected: (ids: number[]) => void;
  	eventAddToTree: (node: string) => void;
  	eventRemoveFromTree: (ids: number[]) => void;
  	eventFileSave: (fileName: string) => void;
  	eventRebuildTree: (tree_str: string) => void;
  	eventUpdatePointer: (pointer: number[]) => void;
  	eventUpdateViewSize: (pointer: number[]) => void;
  	eventUpdateAttribute: (attrStr: string) => void;
  }> {
  	/**
  	 * @internal
  	 */
  	init(imp: any): void;
  	/**
  	 * @internal
  	 */
  	imp?: any;
  	/**
  	 * @internal
  	 */
  	cpp_app: any;
  	/**
  	 * @internal
  	 */
  	tool: any;
  	/**
  	 * @internal
  	 */
  	globalMethods: any;
  	/**
  	 * 为当前应用程序创建一个视图
  	 * @param theCanvasSelector canvas的CSS选择器字符串
  	 * @returns 返回一个视图对象
  	 */
  	createView(theCanvasSelector: string): Mx3dView;
  	/**
  	 * 获取当前视图对象
  	 * @returns 返回当前的视图对象
  	 */
  	getCurrentActiveView(): Mx3dView;
  }
  /**
   * 全局应用程序单实例
   */
  export  const MxApp3D: MxApp3DType;
  export interface MxCAD3DConfig {
  	[x: string]: any;
  	canvas: string | HTMLCanvasElement;
  	/** canvas最小宽度 默认300 */
  	minWidth?: number;
  	/** canvas最小高度 默认300 */
  	minHeight?: number;
  	/** 指定更新Canvas大小的函数，不指定则默认自动处理(指定该函数则 minHeight, minWidth无效) */
  	updateCanvasSize?: () => void;
  	locateFile?: (fileName: string, base?: string | URL) => string;
  }
  /**
   * 文档视图对象
   * 一个文档视图对象对应一个Canvas视图和一个文档
   */
  export  class MxCAD3DObject {
  	/**
  	 * @internal
  	 */
  	private event;
  	/**
  	 * @internal
  	 */
  	private imp;
  	/**
  	 * @internal
  	 */
  	private canvas;
  	/**
  	 * @internal
  	 */
  	private ctx;
  	/**
  	 * @internal
  	 */
  	private updateCanvasSizeFun;
  	constructor();
  	/**
  	 * 获取当前文档视图对象的文档
  	 * @returns 返回文档对象
  	 */
  	getDocument(): Mx3dDbDocument;
  	/**
  	 * 移除所有
  	 * @param theUpdateView 移除后是否立即更新视图
  	 */
  	removeAll(theUpdateView?: boolean): void;
  	/**
  	 * 移除选中
  	 */
  	removeSelected(): void;
  	/**
  	 * 更新显示
  	 * @param isUpAllData 是否更新所有数据
  	 * @param isRemoveAll 是否首先移除所有数据
  	 */
  	update(isUpAllData?: boolean, isRemoveAll?: boolean): void;
  	/**
  	 * 设置视图投影模式
  	 * @param theProjection 投影模式
  	 */
  	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
  	/**
  	 * 显示中心坐标轴
  	 * @param theToShow true显示，false不显示
  	 */
  	showCenterTrihedron(theToShow: boolean): void;
  	/**
  	 * 视图中的所有对象缩放至适应整个视图
  	 * @param theAuto 自动缩放
  	 */
  	fitAllObjects(theAuto: boolean): void;
  	/**
  	 * 开启/关闭X轴剖切面
  	 * @param theToEnabled 是否开启X轴剖切面
  	 */
  	enableXClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置X轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setXClipPlaneXPosition(thePosition: number): void;
  	/**
  	 * 翻转X轴剖切面
  	 */
  	setXClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭Y轴剖切面
  	 * @param theToEnabled 是否开启Y轴剖切面
  	 */
  	enableYClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置Y轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setYClipPlaneYPosition(thePosition: number): void;
  	/**
  	 * 翻转Y轴剖切面
  	 */
  	setYClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭Z轴剖切面
  	 * @param theToEnabled 是否开启Z轴剖切面
  	 */
  	enableZClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置Z轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setZClipPlaneZPosition(thePosition: number): void;
  	/**
  	 * 翻转Z轴剖切面
  	 */
  	setZClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭用户自定义剖切面
  	 * @param theToEnabled 是否开启用户自定义剖切面
  	 */
  	enableCustomClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置用户自定义剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setCustomClipPlanePosition(thePosition: number): void;
  	/**
  	 * 翻转用户自定义剖切面
  	 */
  	setCustomClipPlaneReverse(): void;
  	/**
  	 * 设置用户自定义剖切面的法向
  	 * @param x 法向的x分量
  	 * @param y 法向的y分量
  	 * @param z 法向的z分量
  	 */
  	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
  	/**
  	 * 显示文字符号
  	 * @param theSymbol 文字符号对象
  	 */
  	displaySymbolText(theSymbol: Mx3dSymbolText): void;
  	/**
  	 * 显示标注符号
  	 * @param theDimension 标注符号对象
  	 */
  	displayDimension(theDimension: Mx3dDimObject): void;
  	/**
  	 * 为当前选中对象设置纹理贴图
  	 * @param theFileName 图片在文件系统中的完整路径
  	 */
  	addModelTexture(theFileName: string): void;
  	/**
  	 * 移除当前选择对象的纹理贴图
  	 */
  	removeModelTexture(): void;
  	/**
  	 * 设置渐变背景色
  	 * @param theColor1 颜色对象1
  	 * @param theColor2 颜色对象2
  	 * @param theMethod 渐变方式
  	 */
  	setGradientBgColor(theColor1: Mx3dGeColor, theColor2: Mx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
  	/**
  	 * 设置视图方向
  	 * @param theOrientation 视图方向
  	 * @param theIsYup 是否Y轴向上
  	 */
  	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
  	/**
  	 * 设置当前选中对象的颜色
  	 * @param color 颜色
  	 */
  	setSelectedColor(color: Mx3dGeColor): void;
  	/**
  	 * 设置选中对象的材质
  	 * @param material 材质
  	 */
  	setSelectedMaterial(material: Mx3dGeMaterial): void;
  	/**
  	 * 设置当前的显示模式
  	 * @param theMode 显示模式
  	 */
  	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;
  	enableDirLightSrc(theToEnabled: boolean): void;
  	setCubemapBackground(theRight: string, theLeft: string, theTop: string, theBottom: string, theFront: string, theBack: string): void;
  	setManipulatorEnabled(isEnabled: boolean): void;
  	getImp(): any;
  	getCtx(): any;
  	updateCanvasSize(): void;
  	init(imp: any): void;
  	on(name: "init", fun: () => void): void;
  	off(name: string, fun?: Function): void;
  	callEvent(sEventName: string, param?: any): boolean;
  	/**
  	 * 初始化当前文档视图对象
  	 * @param config 初始化需要的相关配置，canvas可以是选择器字符串，也可以是canvas对象
  	 */
  	create(config: MxCAD3DConfig): void;
  }
  export type Vector = [
  	theX: number,
  	theY: number,
  	theZ: number
  ];
  /**
   * 点和数组的联合类型
   */
  export type UniPoint = Mx3dGePoint | Vector;
  /**
   * 方向向量和数组的联合类型
   */
  export type UniDir = Mx3dGeDir | Vector;
  /**
   * 向量和数组的联合类型
   */
  export type UniVec = Mx3dGeVec | Vector;
  /**
   * 应用程序类，全局单实例
   */
  export  class Mx3dApplication {
  	/**
  	 * @internal
  	 */
  	protected imp: any;
  	/**
  	 * @internal
  	 */
  	constructor();
  	/**
  	 * 为当前应用程序创建一个视图
  	 * @param theCanvasSelector canvas的CSS选择器字符串
  	 * @returns 返回一个视图对象
  	 */
  	createView(theCanvasSelector: string): Mx3dView;
  	/**
  	 * 获取当前视图对象
  	 * @returns 返回当前的视图对象
  	 */
  	getCurrentActiveView(): Mx3dView;
  }
  /**
   * 管理对象生命周期的基类
   */
  export  class Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	protected imp: any;
  	/**
  	 * @internal
  	 */
  	constructor(imp?: any);
  	/**
  	 * @internal
  	 */
  	getImp(): any;
  	/**
  	 * @internal
  	 */
  	protected initTempObject(imp: any): void;
  }
  /**
   * 尺寸标注的基类
   */
  export  class Mx3dDimObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 符号的基类
   */
  export  class Mx3dSymbolObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 模型算法的基类
   */
  export  class Mx3dAlgoObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 样式基类
   */
  export  class Mx3dAspectObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 数学几何基类
   */
  export  class Mx3dGeObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 曲线基类
   */
  export  class Mx3dGeCurve extends Mx3dGeObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 圆锥曲线基类
   */
  export  class Mx3dGeConic extends Mx3dGeCurve {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 表示三维空间中的一个点。
   *
   * 提供构造函数以及获取和设置点的坐标的方法。
   */
  export  class Mx3dGePoint extends Mx3dGeObject {
  	/**
  	 * 默认构造一个位于原点 (0, 0, 0) 的点。
  	 */
  	constructor();
  	/**
  	 * 使用给定的坐标数组构造一个点。
  	 *
  	 * @param theXYZ - 包含X, Y, Z坐标值的数组。
  	 */
  	constructor(theXYZ: Vector);
  	/**
  	 * 使用给定的X, Y, Z坐标值构造一个点。
  	 *
  	 * @param theX - X坐标值。
  	 * @param theY - Y坐标值。
  	 * @param theZ - Z坐标值。
  	 */
  	constructor(theX: number, theY: number, theZ: number);
  	/**
  	 * 获取点在世界坐标系下的X坐标值
  	 * @returns X坐标值
  	 */
  	X(): number;
  	/**
  	 * 获取点在世界坐标系下的Y坐标值
  	 * @returns Y坐标值
  	 */
  	Y(): number;
  	/**
  	 * 获取点在世界坐标系下的Z坐标值
  	 * @returns Z坐标值
  	 */
  	Z(): number;
  	/**
  	 * 设置点在世界坐标系下的X坐标值
  	 * @param theX X坐标值
  	 */
  	setX(theX: number): void;
  	/**
  	 * 设置点在世界坐标系下的Y坐标值
  	 * @param theY Y坐标值
  	 */
  	setY(theY: number): void;
  	/**
  	 * 设置点在世界坐标系下的Z坐标值
  	 * @param theZ Z坐标值
  	 */
  	setZ(theZ: number): void;
  	/**
  	 * 设置点在世界坐标系下的X,Y,Z坐标值
  	 * @param theX X坐标值
  	 * @param theY Y坐标值
  	 * @param theZ Z坐标值
  	 */
  	setXYZ(theX: number, theY: number, theZ: number): void;
  	/**
  	 * 获取当前点的拓扑点形状
  	 * @returns 拓扑点形状
  	 */
  	Vertex(): Mx3dShapeVertex;
  }
  /**
   * 表示几何变换
   */
  export  class Mx3dGeTrsf extends Mx3dGeObject {
  	constructor();
  	/**
  	 * 设置按照点镜像变换
  	 * @param point 镜像点
  	 */
  	SetMirrorByPoint(point: UniPoint): void;
  	/**
  	 * 设置按照轴镜像变换
  	 * @param axis 镜像轴
  	 */
  	SetMirrorByAxis(axis: Mx3dGeAxis): void;
  	/**
  	 * 设置按照坐标系镜像变换，镜像平面是坐标系的XOY平面
  	 * @param csysr 镜像坐标系
  	 */
  	SetMirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
  	/**
  	 * 设置按照轴旋转一定角度的变换
  	 * @param axis 旋转轴
  	 * @param ang 旋转角度
  	 */
  	SetRotation(axis: Mx3dGeAxis, ang: number): void;
  	/**
  	 * 设置按照点，以一定的比例进行缩放变换
  	 * @param point 缩放点
  	 * @param s 缩放比例
  	 */
  	SetScale(point: UniPoint, s: number): void;
  	/**
  	 * 设置按照向量进行平移变换，移动的方向和距离分别是向量的方向和模长
  	 * @param vec 向量
  	 */
  	SetTranslationByVec(vec: UniVec): void;
  	/**
  	 * 设置按照起点减去终点构成的向量的平移变换
  	 * @param point1 起点
  	 * @param point2 终点
  	 */
  	SetTranslationBy2Points(point1: UniPoint, point2: UniPoint): void;
  	/**
  	 * 单独设置按照向量的平移变换
  	 * @param vec 向量
  	 */
  	SetTranslationPart(vec: Mx3dGeVec): void;
  	/**
  	 * 设置缩放比例
  	 * @param s 缩放比例
  	 */
  	SetScaleFactor(s: number): void;
  	/**
  	 * 设置除了平移变换的仿射变换矩阵
  	 * @param a11 第1行第1列
  	 * @param a12 第1行第2列
  	 * @param a13 第1行第3列
  	 * @param a14 第1行第4列
  	 * @param a21 第2行第1列
  	 * @param a22 第2行第2列
  	 * @param a23 第2行第3列
  	 * @param a24 第2行第4列
  	 * @param a31 第3行第1列
  	 * @param a32 第3行第2列
  	 * @param a33 第3行第3列
  	 * @param a34 第3行第4列
  	 */
  	SetValues(a11: number, a12: number, a13: number, a14: number, a21: number, a22: number, a23: number, a24: number, a31: number, a32: number, a33: number, a34: number): void;
  	/**
  	 * 判断此变换矩阵的行列式是否为负
  	 * @returns 是否为负
  	 */
  	IsNegative(): boolean;
  	/**
  	 * 获取变换的缩放比例
  	 * @returns 缩放比例
  	 */
  	ScaleFactor(): number;
  	/**
  	 * 获取变换矩阵中指定行列的元素值
  	 * @param row 行
  	 * @param col 列
  	 * @returns 元素值
  	 */
  	Value(row: number, col: number): number;
  	/**
  	 * 将变换矩阵转置
  	 */
  	Invert(): void;
  	/**
  	 * 获取变换矩阵转置后的矩阵
  	 * @returns 转置矩阵
  	 */
  	Inverted(): Mx3dGeTrsf;
  	/**
  	 * 获取矩阵相乘之后的结果，[res] = [me] * t，[res]代表结果，[me]代表自身，t是另外的变换矩阵
  	 * @param t 另一个变换矩阵
  	 * @returns 矩阵相乘后的结果
  	 */
  	Multiplied(t: Mx3dGeTrsf): Mx3dGeTrsf;
  	/**
  	 * 自身乘以另外一个变换矩阵，[me] = [me] * t，[me]代表自身，t是另外的变换矩阵
  	 * @param t 另一个变换矩阵
  	 */
  	Multiply(t: Mx3dGeTrsf): void;
  	/**
  	 * 另外一个变换矩阵乘以自身，[me] = t * [me]，[me]代表自身，t是另外的变换矩阵
  	 * @param t 另一个变换矩阵
  	 */
  	PreMultiply(t: Mx3dGeTrsf): void;
  	/**
  	 * 自身n幂次方运算，[me] * [me] * .......* [me]，[me]代表自身，乘以n次
  	 * @param n 次数
  	 */
  	Power(n: number): void;
  	/**
  	 * 获取当前变换矩阵n次幂方运算后的结果，[res] = [me] * [me] * .......* [me]，[res]代表结果，[me]代表自身，n个[me]相乘
  	 * @param n 次数
  	 * @returns n幂次方的结果
  	 */
  	Powered(n: number): Mx3dGeTrsf;
  	/**
  	 * 对一个点用当前变换矩阵进行变换，参数是引用的，会被函数修改
  	 * @param x
  	 * @param y
  	 * @param z
  	 */
  	Transforms(x: number, y: number, z: number): void;
  }
  /**
   * 表示一个轴
   */
  export  class Mx3dGeAxis extends Mx3dGeObject {
  	/**
  	 * 默认构造
  	 */
  	constructor();
  	/**
  	 * 构造函数
  	 * @param theLoc 轴的原点
  	 * @param theDir 轴的方向
  	 */
  	constructor(theLoc: UniPoint, theDir: UniDir);
  	/**
  	 * 获取轴的方向
  	 * @returns 方向
  	 */
  	Direction(): Mx3dGeDir;
  	/**
  	 * 获取轴的原点
  	 * @returns 原点
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 设置轴的方向
  	 * @param theDir 方向
  	 */
  	SetDirection(theDir: Mx3dGeDir): void;
  	/**
  	 * 设置轴的原点
  	 * @param theLoc 原点
  	 */
  	SetLocation(theLoc: UniPoint): void;
  }
  /**
   * 表示方向的向量，模长始终为1
   */
  export  class Mx3dGeDir extends Mx3dGeObject {
  	/**
  	 * 构造函数
  	 */
  	constructor();
  	/**
  	 * 构造函数
  	 * @param theXv X方向
  	 * @param theYv Y方向
  	 * @param theZv Z方向
  	 */
  	constructor(theXv: number, theYv: number, theZv: number);
  	/**
  	 * 获取X方向的大小
  	 * @returns X方向的大小
  	 */
  	X(): number;
  	/**
  	 * 获取Y方向的大小
  	 * @returns Y方向的大小
  	 */
  	Y(): number;
  	/**
  	 * 获取Z方向的大小
  	 * @returns Z方向的大小
  	 */
  	Z(): number;
  	/**
  	 * 设置X方向的大小
  	 * @param theX X方向的大小
  	 */
  	SetX(theX: number): void;
  	/**
  	 * 设置Y方向的大小
  	 * @param theY Y方向的大小
  	 */
  	SetY(theY: number): void;
  	/**
  	 * 设置Z方向的大小
  	 * @param theZ Z方向的大小
  	 */
  	SetZ(theZ: number): void;
  	/**
  	 * 设置X,Y,Z方向的大小
  	 * @param theXv X方向的大小
  	 * @param theYv Y方向的大小
  	 * @param theZv Z方向的大小
  	 */
  	SetXYZ(theXv: number, theYv: number, theZv: number): void;
  	/**
  	 * 判断是否和另外一个方向相等
  	 * @param theOther 另一个方向
  	 * @param theAngularTolerance 角度精度
  	 * @returns 是否是同一方向
  	 */
  	IsEqual(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
  	/**
  	 * 判断是否和另外一个方向垂直
  	 * @param theOther 另一个方向
  	 * @param theAngularTolerance 角度精度
  	 * @returns 是否垂直
  	 */
  	IsNormal(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
  	/**
  	 * 判断是否和另外一个方向相反
  	 * @param theOther 另一个方向
  	 * @param theAngularTolerance 角度精度
  	 * @returns 是否相反
  	 */
  	IsOpposite(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
  	/**
  	 * 判断是否和另外一个方向平行（同向或反向均为平行）
  	 * @param theOther 另一个方向
  	 * @param theAngularTolerance 角度精度
  	 * @returns 是否平行
  	 */
  	IsParallel(theOther: Mx3dGeDir, theAngularTolerance: number): boolean;
  	/**
  	 * 获取与另一个方向的夹角，范围[0,PI]
  	 * @param theOther 另一个方向
  	 * @returns 夹角
  	 */
  	Angle(theOther: Mx3dGeDir): number;
  	/**
  	 *
  	 * @param theOther
  	 * @param theVRef
  	 * @returns
  	 */
  	AngleWithRef(theOther: Mx3dGeDir, theVRef: Mx3dGeDir): number;
  	/**
  	 * [me] = [me] ^ theRight，[me]代表自身，^代表叉乘
  	 * @param theRight 另一个方向向量
  	 */
  	Cross(theRight: Mx3dGeDir): void;
  	/**
  	 * [res] = [me] ^ theRight，[me]代表自身，[res]代表结果，^代表叉乘
  	 * @param theRight 另一个方向向量
  	 * @returns 叉乘结果
  	 */
  	Crossed(theRight: Mx3dGeDir): Mx3dGeDir;
  	/**
  	 * [me] ^ (theV1 ^ theV2)，[me]代表自身，^代表叉乘
  	 * @param theV1 另一个方向向量
  	 * @param theV2 另一个方向向量
  	 */
  	CrossCross(theV1: Mx3dGeDir, theV2: Mx3dGeDir): void;
  	/**
  	 * [res] ^ (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘
  	 * @param theV1 另一个方向向量
  	 * @param theV2 另一个方向向量
  	 * @returns 叉乘结果
  	 */
  	CrossCrossed(theV1: Mx3dGeDir, theV2: Mx3dGeDir): Mx3dGeDir;
  	/**
  	 * [res] = [me] * theOther，[me]代表自身，[res]代表结果，*代表点乘
  	 * @param theOther 另一个方向向量
  	 * @returns 点乘结果
  	 */
  	Dot(theOther: Mx3dGeDir): number;
  	/**
  	 * [res] = [me] * (theV1 ^ theV2)，[me]代表自身，[res]代表结果，^代表叉乘，*代表点乘
  	 * @param theV1 另一个方向向量
  	 * @param theV2 另一个方向向量
  	 * @returns 最后点乘结果
  	 */
  	DotCross(theV1: Mx3dGeDir, theV2: Mx3dGeDir): number;
  	/**
  	 * 翻转方向
  	 */
  	Reverse(): void;
  	/**
  	 * 获取翻转方向后的结果
  	 * @returns 翻转方向后的结果
  	 */
  	Reversed(): Mx3dGeDir;
  	/**
  	 * 按照一个镜像中心方向向量镜像
  	 * @param theV 镜像中心方向
  	 */
  	MirrorByVec(theV: Mx3dGeDir): void;
  	MirroredByVec(theV: Mx3dGeDir): Mx3dGeDir;
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeDir;
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeDir;
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeDir;
  	Transform(theT: Mx3dGeTrsf): void;
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeDir;
  }
  /**
   * 表示三维空间中的椭圆对象，继承自Mx3dGeObject类。
   * 支持通过不同参数构造椭圆，并提供了丰富的属性访问与操作方法。
   */
  export  class Mx3dGeEllipse extends Mx3dGeObject {
  	/**
  	 * 构造一个未初始化的椭圆实例。
  	 */
  	constructor();
  	/**
  	 * 根据给定的坐标系和半径构造椭圆。
  	 * @param theA2 椭圆所在的坐标系
  	 * @param theMajorRadius 主半径
  	 * @param theMinorRadius 次半径
  	 */
  	constructor(theA2: Mx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
  	/**
  	 * 设置椭圆的轴。
  	 * @param theA1 新的轴
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置椭圆的位置。
  	 * @param theP 新的位置点
  	 */
  	SetLocation(theP: Mx3dGePoint): void;
  	/**
  	 * 设置椭圆的主半径。
  	 * @param theMajorRadius 新的主半径
  	 */
  	SetMajorRadius(theMajorRadius: number): void;
  	/**
  	 * 设置椭圆的次半径。
  	 * @param theMinorRadius 新的次半径
  	 */
  	SetMinorRadius(theMinorRadius: number): void;
  	/**
  	 * 设置椭圆的坐标系。
  	 * @param theA2 新的坐标系
  	 */
  	SetPosition(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 计算并返回椭圆的面积。
  	 * @returns 椭圆的面积
  	 */
  	Area(): number;
  	/**
  	 * 返回椭圆的轴。
  	 * @returns 椭圆的轴
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取椭圆的第一条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。
  	 * @returns 直线1
  	 */
  	Directrix1(): Mx3dGeAxis;
  	/**
  	 * 获取椭圆的第二条直接线，是垂直于主轴的直线，位于椭圆上，满足特定几何关系。
  	 * @returns 直线2
  	 */
  	Directrix2(): Mx3dGeAxis;
  	/**
  	 * 计算并返回椭圆的离心率，即焦距与半长轴之比。
  	 * @returns 离心率
  	 */
  	Eccentricity(): number;
  	/**
  	 * 计算并返回椭圆的焦距，两焦点之间的距离。
  	 * @returns 焦距
  	 */
  	Focal(): number;
  	/**
  	 * 获取椭圆的第一个焦点。
  	 * @returns 第一焦点
  	 */
  	Focus1(): Mx3dGePoint;
  	/**
  	 * 获取椭圆的第二个焦点。
  	 * @returns 二焦点
  	 */
  	Focus2(): Mx3dGePoint;
  	/**
  	 * 获取椭圆的当前位置，即中心点。
  	 * @returns 当前位置
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取椭圆的主半径。
  	 * @returns 主半径
  	 */
  	MajorRadius(): number;
  	/**
  	 * 获取椭圆的次半径。
  	 * @returns 次半径
  	 */
  	MinorRadius(): number;
  	/**
  	 * 获取椭圆的参数，可能指椭圆上某点对应的参数方程中的参数。
  	 * @returns 参数值
  	 */
  	Parameter(): number;
  	/**
  	 * 获取椭圆的位置坐标系，定义椭圆所在的坐标框架。
  	 * @returns 位置坐标系
  	 */
  	Position(): Mx3dGeCSYSR;
  	/**
  	 * 获取椭圆的主轴，即沿主半径方向的轴。
  	 * @returns 椭圆的主轴
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 获取椭圆的次轴，即沿次半径方向的轴。
  	 * @returns 椭圆的次轴
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 对椭圆执行镜像操作，以指定点为中心进行对称变换。
  	 * @param theP 镜像操作的中心点
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 返回沿指定点镜像后的椭圆副本。
  	 * @param theP 镜像操作的中心点
  	 * @returns 镜像后的椭圆副本
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeEllipse;
  	/**
  	 * 对椭圆执行镜像操作，以指定轴为对称轴。
  	 * @param theA1 镜像操作的轴
  	 */
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 返回沿指定轴镜像后的椭圆副本。
  	 * @param theA1 镜像操作的轴
  	 * @returns 镜像后的椭圆副本
  	 */
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeEllipse;
  	/**
  	 * 对椭圆执行镜像操作，以指定坐标系所在的平面为对称面。
  	 * @param theA2 镜像操作的坐标系
  	 */
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 返回沿指定坐标系所在平面镜像后的椭圆副本。
  	 * @param theA2 镜像操作的坐标系
  	 * @returns 镜像后的椭圆副本
  	 */
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeEllipse;
  	/**
  	 * 旋转椭圆，围绕指定轴按给定角度执行旋转操作。
  	 * @param theA1 旋转轴
  	 * @param theAng 旋转角度（弧度）
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 返回旋转后的椭圆副本。
  	 * @param theA1 旋转轴
  	 * @param theAng 旋转角度（弧度）
  	 * @returns 旋转后的椭圆副本
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeEllipse;
  	/**
  	 * 缩放椭圆，从指定点出发按给定比例缩放。
  	 * @param theP 缩放中心点
  	 * @param theS 缩放比例
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 返回缩放后的椭圆副本。
  	 * @param theP 缩放中心点
  	 * @param theS 缩放比例
  	 * @returns 缩放后的椭圆副本
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeEllipse;
  	/**
  	 * 应用变换矩阵转换椭圆。
  	 * @param theT 转换矩阵
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 返回经过变换后的椭圆副本。
  	 * @param theT 转换矩阵
  	 * @returns 变换后的椭圆副本
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeEllipse;
  	/**
  	 * 沿圆沿指定向量平移。
  	 * @param theV 平移向量
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 返回平移后的椭圆副本。
  	 * @param theV 平移向量
  	 * @returns 平移后的椭圆副本
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeEllipse;
  	/**
  	 * 椭距平移椭圆，从一点移到另一点。
  	 * @param theP1 起点
  	 * @param theP2 终点
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 返回等距平移后的椭圆副本。
  	 * @param theP1 起点
  	 * @param theP2 终点
  	 * @returns 平移后的椭圆副本
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeEllipse;
  }
  /**
   * 表示一个三维空间中的双曲线对象。
   * 该类用于创建、操作和查询双曲线的各种属性，包括其轴、位置、半径以及各种变换状态。
   */
  export  class Mx3dGeHyperbola extends Mx3dGeObject {
  	/**
  	 * 默认构造函数，用于创建一个未定义的双曲线。
  	 */
  	constructor();
  	/**
  	 * 根据给定的主半径和次半径以及一个坐标系统（Mx3dGeCSYSR）来构造一个双曲线。
  	 * 坐标系统定义了双曲线的位置，其中：
  	 * - 原点为双曲线中心，
  	 * - "X方向"定义了双曲线的主轴，
  	 * - "Y方向"定义了双曲线的次轴。
  	 * @param theA2 定义双曲线位置的坐标系统。
  	 * @param theMajorRadius 双曲线的主半径。
  	 * @param theMinorRadius 双曲线的次半径。
  	 */
  	constructor(theA2: Mx3dGeCSYSR, theMajorRadius: number, theMinorRadius: number);
  	/**
  	 * 设置双曲线的轴。
  	 * @param theA1 要设置的新轴。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置双曲线的位置。
  	 * @param theP 新的位置点。
  	 */
  	SetLocation(theP: Mx3dGePoint): void;
  	/**
  	 * 设置双曲线的主半径。
  	 * @param theMajorRadius 新的主半径值。
  	 */
  	SetMajorRadius(theMajorRadius: number): void;
  	/**
  	 * 设置双曲线的次半径。
  	 * @param theMinorRadius 新的次半径值。
  	 */
  	SetMinorRadius(theMinorRadius: number): void;
  	/**
  	 * 设置双曲线的坐标系统，从而重新定义其位置和方向。
  	 * @param theA2 新的坐标系统。
  	 */
  	SetPosition(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 获取双曲线的对称轴。
  	 * @returns 返回双曲线的对称轴。
  	 */
  	Asymptote1(): Mx3dGeAxis;
  	/**
  	 * 获取另一条对称轴。
  	 * @returns 返回双曲线的另一条对称轴。
  	 */
  	Asymptote2(): Mx3dGeAxis;
  	/**
  	 * 获取双曲线的轴线。
  	 * @returns 双曲线的轴线。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取共轭分支1。
  	 * @returns 双曲线的共轭分支1。
  	 */
  	ConjugateBranch1(): Mx3dGeHyperbola;
  	/**
  	 * 获取共轭分支2。
  	 * @returns 双曲线的共轭分支2。
  	 */
  	ConjugateBranch2(): Mx3dGeHyperbola;
  	/**
  	 * 获取直接线1。
  	 * @returns 双曲线的直接线1。
  	 */
  	Directrix1(): Mx3dGeAxis;
  	/**
  	 * 获取直接线2。
  	 * @returns 双曲线的直接线2。
  	 */
  	Directrix2(): Mx3dGeAxis;
  	/**
  	 * 获取离心率。
  	 * @returns 双曲线的离心率。
  	 */
  	Eccentricity(): number;
  	/**
  	 * 获取焦距。
  	 * @returns 双曲线的焦距。
  	 */
  	Focal(): number;
  	/**
  	 * 获取焦点1。
  	 * @returns 双曲线的第一个焦点。
  	 */
  	Focus1(): Mx3dGePoint;
  	/**
  	 * 获取焦点2。
  	 * @returns 双曲线的第二个焦点。
  	 */
  	Focus2(): Mx3dGePoint;
  	/**
  	 * 获取双曲线的当前位置点，即中心点。
  	 * @returns 位置点。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取双曲线的长轴半径。
  	 * @returns 一个 number，表示双曲线的长轴半径。
  	 */
  	MajorRadius(): number;
  	/**
  	 * 获取双曲线的短轴半径。
  	 * @returns 一个 number，表示双曲线的短轴半径。
  	 */
  	MinorRadius(): number;
  	/**
  	 * 获取双曲线的另一分支，与当前分支关于主轴对称。
  	 * @returns 另一分支。
  	 */
  	OtherBranch(): Mx3dGeHyperbola;
  	/**
  	 * 获取双曲线的参数。
  	 * @returns 一个 number，表示双曲线的参数。
  	 */
  	Parameter(): number;
  	/**
  	 * 获取双曲线的坐标系统，定义其位置和方向。
  	 * @returns 坐标系。
  	 */
  	Position(): Mx3dGeCSYSR;
  	/**
  	 * 获取X轴，定义双曲线的主要方向。
  	 * @returns X轴。
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 获取Y轴，定义双曲线的次要方向。
  	 * @returns Y轴。
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 通过点镜像变换双曲线。
  	 * @param theP 一个 Mx3dGePoint 对象，表示镜像的中心点。
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 获取按点镜像后的双曲线。
  	 * @param theP 镜像点 (Mx3dGePoint)。
  	 * @returns 按点镜像后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeHyperbola;
  	/**
  	 * 按轴镜像双曲线。
  	 * @param theA1 镜像轴 (Mx3dGeAxis)。
  	 */
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 获取按轴镜像后的双曲线。
  	 * @param theA1 镜像轴 (Mx3dGeAxis)。
  	 * @returns 按轴镜像后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeHyperbola;
  	/**
  	 * 按坐标系镜像双曲线。
  	 * @param theA2 镜像的坐标系 (Mx3dGeCSYSR)。
  	 */
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 获取按坐标系镜像后的双曲线。
  	 * @param theA2 镜像的坐标系 (Mx3dGeCSYSR)。
  	 * @returns 按坐标系镜像后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeHyperbola;
  	/**
  	 * 旋转双曲线。
  	 * @param theA1 旋转轴 (Mx3dGeAxis)。
  	 * @param theAng 旋转角度。
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 获取旋转后的双曲线。
  	 * @param theA1 旋转轴 (Mx3dGeAxis)。
  	 * @param theAng 旋转角度。
  	 * @returns 旋转后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeHyperbola;
  	/**
  	 * 缩放双曲线。
  	 * @param theP 缩放中心 (Mx3dGePoint)。
  	 * @param theS 缩放比例。
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 获取缩放后的双曲线。
  	 * @param theP 缩放中心 (Mx3dGePoint)。
  	 * @param theS 缩放比例。
  	 * @returns 缩放后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeHyperbola;
  	/**
  	 * 对双曲线进行变换。
  	 * @param theTrsf 变换矩阵 (Mx3dGeTrsf)。
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 获取变换后的双曲线。
  	 * @param theTrsf 变换矩阵 (Mx3dGeTrsf)。
  	 * @returns 变换后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeHyperbola;
  	/**
  	 * 按向量平移双曲线。
  	 * @param theV 平移向量 (Mx3dGeVector)。
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 获取按向量平移后的双曲线。
  	 * @param theV 平移向量 (Mx3dGeVector)。
  	 * @returns 平移后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeHyperbola;
  	/**
  	 * 按点平移双曲线。
  	 * @param theP1 起点 (Mx3dGePoint)。
  	 * @param theP2 终点 (Mx3dGePoint)。
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 获取按点平移后的双曲线。
  	 * @param theP1 起点 (Mx3dGePoint)。
  	 * @param theP2 终点 (Mx3dGePoint)。
  	 * @returns 按点平移后的双曲线 (Mx3dGeHyperbola)。
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeHyperbola;
  }
  /**
   * 表示一个三维向量的类。用于三维几何运算。
   */
  export  class Mx3dGeVec extends Mx3dGeObject {
  	/**
  	 * 构造一个新的 Mx3dGeVec 实例。
  	 * 可以不带参数，或者带三个数值参数，或者带两个点。
  	 * @param x 向量的 x 分量。
  	 * @param y 向量的 y 分量。
  	 * @param z 向量的 z 分量。
  	 * @param thePoint1 起点。
  	 * @param thePoint2 终点。
  	 */
  	constructor();
  	constructor(x: number, y: number, z: number);
  	constructor(thePoint1: Mx3dGePoint, thePoint2: Mx3dGePoint);
  	/**
  	 * 获取向量的 x 分量。
  	 * @returns x 分量。
  	 */
  	X(): number;
  	/**
  	 * 获取向量的 y 分量。
  	 * @returns y 分量。
  	 */
  	Y(): number;
  	/**
  	 * 获取向量的 z 分量。
  	 * @returns z 分量。
  	 */
  	Z(): number;
  	/**
  	 * 设置向量的 x 分量。
  	 * @param x 新的 x 分量。
  	 */
  	SetX(x: number): void;
  	/**
  	 * 设置向量的 y 分量。
  	 * @param y 新的 y 分量。
  	 */
  	SetY(y: number): void;
  	/**
  	 * 设置向量的 z 分量。
  	 * @param z 新的 z 分量。
  	 */
  	SetZ(z: number): void;
  	/**
  	 * 设置向量的 x, y 和 z 分量。
  	 * @param x 新的 x 分量。
  	 * @param y 新的 y 分量。
  	 * @param z 新的 z 分量。
  	 */
  	SetXYZ(x: number, y: number, z: number): void;
  	/**
  	 * 判断两个向量是否相等。
  	 * @param other 另一个向量。
  	 * @param linearTolerance 线性公差。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否相等。
  	 */
  	IsEqual(other: Mx3dGeVec, linearTolerance: number, angularTolerance: number): boolean;
  	/**
  	 * 判断两个向量是否互为法向量。
  	 * @param other 另一个向量。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否互为法向量。
  	 */
  	IsNormal(other: Mx3dGeVec, angularTolerance: number): boolean;
  	/**
  	 * 判断两个向量是否互为反向。
  	 * @param other 另一个向量。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否互为反向。
  	 */
  	IsOpposite(other: Mx3dGeVec, angularTolerance: number): boolean;
  	/**
  	 * 判断两个向量是否平行。
  	 * @param other 另一个向量。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否平行。
  	 */
  	IsParallel(other: Mx3dGeVec, angularTolerance: number): boolean;
  	/**
  	 * 计算两个向量之间的角度。
  	 * @param other 另一个向量。
  	 * @returns 角度值。
  	 */
  	Angle(other: Mx3dGeVec): number;
  	/**
  	 * 计算两个向量之间的带参考向量的角度。
  	 * @param other 另一个向量。
  	 * @param ref 参考向量。
  	 * @returns 带参考向量的角度值。
  	 */
  	AngleWithRef(other: Mx3dGeVec, ref: Mx3dGeVec): number;
  	/**
  	 * 获取向量的模。
  	 * @returns 向量的模。
  	 */
  	Magnitude(): number;
  	/**
  	 * 获取向量模的平方。
  	 * @returns 向量模的平方。
  	 */
  	SquareMagnitude(): number;
  	/**
  	 * 将当前向量与另一个向量相加。
  	 * @param other 另一个向量。
  	 */
  	Add(other: Mx3dGeVec): void;
  	/**
  	 * 返回当前向量与另一个向量相加的结果。
  	 * @param other 另一个向量。
  	 * @returns 相加后的向量。
  	 */
  	Added(other: Mx3dGeVec): Mx3dGeVec;
  	/**
  	 * 从当前向量中减去另一个向量。
  	 * @param right 另一个向量。
  	 */
  	Subtract(right: Mx3dGeVec): void;
  	/**
  	 * 返回当前向量减去另一个向量的结果。
  	 * @param right 另一个向量。
  	 * @returns 相减后的向量。
  	 */
  	Subtracted(right: Mx3dGeVec): Mx3dGeVec;
  	/**
  	 * 将当前向量乘以一个标量。
  	 * @param scalar 标量值。
  	 */
  	Multiply(scalar: number): void;
  	/**
  	 * 返回当前向量乘以标量的结果。
  	 * @param scalar 标量值。
  	 * @returns 乘以标量后的向量。
  	 */
  	Multiplied(scalar: number): Mx3dGeVec;
  	/**
  	 * 将当前向量除以一个标量。
  	 * @param scalar 标量值。
  	 */
  	Divide(scalar: number): void;
  	/**
  	 * 返回当前向量除以标量的结果。
  	 * @param scalar 标量值。
  	 * @returns 除以标量后的向量。
  	 */
  	Divided(scalar: number): Mx3dGeVec;
  	/**
  	 * 计算两个向量的叉积。
  	 * @param right 另一个向量。
  	 */
  	Cross(right: Mx3dGeVec): void;
  	/**
  	 * 返回两个向量的叉积结果。
  	 * @param right 另一个向量。
  	 * @returns 叉积后的向量。
  	 */
  	Crossed(right: Mx3dGeVec): Mx3dGeVec;
  	/**
  	 * 计算两个向量的叉积的模。
  	 * @param right 另一个向量。
  	 * @returns 叉积的模。
  	 */
  	CrossMagnitude(right: Mx3dGeVec): number;
  	/**
  	 * 计算两个向量的叉积模的平方。
  	 * @param right 另一个向量。
  	 * @returns 叉积模的平方。
  	 */
  	CrossSquareMagnitude(right: Mx3dGeVec): number;
  	/**
  	 * 计算三个向量的叉积。
  	 * @param v1 向量1。
  	 * @param v2 向量2。
  	 */
  	CrossCross(v1: Mx3dGeVec, v2: Mx3dGeVec): void;
  	/**
  	 * 返回三个向量的叉积结果。
  	 * @param v1 向量1。
  	 * @param v2 向量2。
  	 * @returns 叉积后的向量。
  	 */
  	CrossCrossed(v1: Mx3dGeVec, v2: Mx3dGeVec): Mx3dGeVec;
  	/**
  	 * 计算两个向量的点积。
  	 * @param other 另一个向量。
  	 * @returns 点积值。
  	 */
  	Dot(other: Mx3dGeVec): number;
  	/**
  	 * 计算三个向量的点-叉积。
  	 * @param v1 向量1。
  	 * @param v2 向量2。
  	 * @returns 点-叉积值。
  	 */
  	DotCross(v1: Mx3dGeVec, v2: Mx3dGeVec): number;
  	/**
  	 * 将当前向量归一化。
  	 */
  	Normalize(): void;
  	/**
  	 * 返回归一化后的向量。
  	 * @returns 归一化后的向量。
  	 */
  	Normalized(): Mx3dGeVec;
  	/**
  	 * 反转当前向量的方向。
  	 */
  	Reverse(): void;
  	/**
  	 * 返回反转后的向量。
  	 * @returns 反转后的向量。
  	 */
  	Reversed(): Mx3dGeVec;
  	/**
  	 * 设置当前向量为线性组合。
  	 * @param v1 向量1。
  	 * @param v2 向量2。
  	 */
  	SetLinearForm(v1: Mx3dGeVec, v2: Mx3dGeVec): void;
  	SetLinearForm(a1: number, v1: Mx3dGeVec, v2: Mx3dGeVec): void;
  	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec): void;
  	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, v3: Mx3dGeVec): void;
  	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, a3: number, v3: Mx3dGeVec): void;
  	SetLinearForm(a1: number, v1: Mx3dGeVec, a2: number, v2: Mx3dGeVec, a3: number, v3: Mx3dGeVec, v4: Mx3dGeVec): void;
  	/**
  	 * 根据一个向量镜像当前向量。
  	 * @param vec 镜像向量。
  	 */
  	MirrorByVec(vec: Mx3dGeVec): void;
  	/**
  	 * 返回根据一个向量镜像后的向量。
  	 * @param vec 镜像向量。
  	 * @returns 镜像后的向量。
  	 */
  	MirroredByVec(vec: Mx3dGeVec): Mx3dGeVec;
  	/**
  	 * 根据一个轴镜像当前向量。
  	 * @param axis 镜像轴。
  	 */
  	MirrorByAxis(axis: Mx3dGeAxis): void;
  	/**
  	 * 返回根据一个轴镜像后的向量。
  	 * @param axis 镜像轴。
  	 * @returns 镜像后的向量。
  	 */
  	MirroredByAxis(axis: Mx3dGeAxis): Mx3dGeVec;
  	/**
  	 * 根据一个坐标系镜像当前向量。
  	 * @param csysr 坐标系。
  	 */
  	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
  	/**
  	 * 返回根据一个坐标系镜像后的向量。
  	 * @param csysr 坐标系。
  	 * @returns 镜像后的向量。
  	 */
  	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dGeVec;
  	/**
  	 * 旋转当前向量。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 */
  	Rotate(axis: Mx3dGeAxis, ang: number): void;
  	/**
  	 * 返回旋转后的向量。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 * @returns 旋转后的向量。
  	 */
  	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dGeVec;
  	/**
  	 * 缩放当前向量。
  	 * @param s 缩放系数。
  	 */
  	Scale(s: number): void;
  	/**
  	 * 返回缩放后的向量。
  	 * @param s 缩放系数。
  	 * @returns 缩放后的向量。
  	 */
  	Scaled(s: number): Mx3dGeVec;
  	/**
  	 * 根据坐标系变换当前向量。
  	 * @param csysr 坐标系。
  	 */
  	Transform(t: Mx3dGeTrsf): void;
  	/**
  	 * 返回根据坐标系变换后的向量。
  	 * @param csysr 坐标系。
  	 * @returns 变换后的向量。
  	 */
  	Transformed(t: Mx3dGeTrsf): Mx3dGeVec;
  }
  /**
   * 表示三维空间中的一个包围盒。
   *
   * 提供构造函数以及操作包围盒的方法，包括设置、更新、变换和检查等。
   * 包围盒类主要用于空间中的包围体计算与操作，通常用于碰撞检测、空间分割等场景。
   */
  export  class Mx3dGeBndBox extends Mx3dGeObject {
  	/**
  	 * 默认构造一个空的包围盒。
  	 */
  	constructor();
  	/**
  	 * 使用给定的最小点和最大点构造一个包围盒。
  	 *
  	 * @param theMin - 包围盒的最小点。
  	 * @param theMax - 包围盒的最大点。
  	 */
  	constructor(theMin: Mx3dGePoint, theMax: Mx3dGePoint);
  	/**
  	 * 将包围盒设置为包含整个空间。
  	 */
  	SetWhole(): void;
  	/**
  	 * 将包围盒设置为一个无效状态（空的包围盒）。
  	 */
  	SetVoid(): void;
  	/**
  	 * 设置包围盒的方向。
  	 *
  	 * @param P - 包围盒的参考点。
  	 * @param D - 包围盒的方向。
  	 */
  	Set(P: Mx3dGePoint, D: Mx3dGeDir): void;
  	Update(aXmin: number, aYmin: number, aZmin: number, aXmax: number, aYmax: number, aZmax: number): void;
  	GetGap(): number;
  	SetGap(Tol: number): void;
  	Enlarge(Tol: number): void;
  	CornerMin(): Mx3dGePoint;
  	CornerMax(): Mx3dGePoint;
  	OpenXmin(): void;
  	OpenXmax(): void;
  	OpenYmin(): void;
  	OpenYmax(): void;
  	OpenZmin(): void;
  	OpenZmax(): void;
  	IsOpen(): boolean;
  	IsOpenXmin(): boolean;
  	IsOpenXmax(): boolean;
  	IsOpenYmin(): boolean;
  	IsOpenYmax(): boolean;
  	IsOpenZmin(): boolean;
  	IsOpenZmax(): boolean;
  	IsWhole(): boolean;
  	IsVoid(): boolean;
  	IsXThin(tol: number): boolean;
  	IsYThin(tol: number): boolean;
  	IsZThin(tol: number): boolean;
  	IsThin(tol: number): boolean;
  	Transformed(T: Mx3dGeTrsf): Mx3dGeBndBox;
  	AddBndBox(Other: Mx3dGeBndBox): void;
  	AddPoint(P: Mx3dGePoint): void;
  	AddPointDir(P: Mx3dGePoint, D: Mx3dGeDir): void;
  	AddDir(D: Mx3dGeDir): void;
  	IsOutPoint(P: Mx3dGePoint): boolean;
  	IsOutBndBox(Other: Mx3dGeBndBox): boolean;
  	IsOutBndBox(Other: Mx3dGeBndBox, T: Mx3dGeTrsf): boolean;
  	IsOutTBT(T1: Mx3dGeTrsf, Other: Mx3dGeBndBox, T2: Mx3dGeTrsf): boolean;
  	IsOutPPD(P1: Mx3dGePoint, P2: Mx3dGePoint, D: Mx3dGeDir): boolean;
  	Distance(Other: Mx3dGeBndBox): number;
  	SquareExtent(): number;
  	FinitePart(): Mx3dGeBndBox;
  	HasFinitePart(): boolean;
  }
  /**
   * 非参数几何圆
   */
  export  class Mx3dGeCircle extends Mx3dGeObject {
  	/**
  	 * 创建一个默认的圆对象。
  	 */
  	constructor();
  	/**
  	 * 创建一个带有坐标系和半径的圆对象。
  	 * @param theA2 坐标系。
  	 * @param theRadius 圆的半径。
  	 */
  	constructor(theA2: Mx3dGeCSYSR, theRadius: number);
  	/**
  	 * 设置圆的轴。
  	 * @param theA1 圆的轴。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置圆的位置。
  	 * @param theP 圆的位置点。
  	 */
  	SetLocation(theP: Mx3dGePoint): void;
  	/**
  	 * 设置圆的坐标系。
  	 * @param theA2 圆的坐标系。
  	 */
  	SetPosition(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 设置圆的半径。
  	 * @param theRadius 圆的半径。
  	 */
  	SetRadius(theRadius: number): void;
  	/**
  	 * 返回圆的面积。
  	 * @returns 圆的面积。
  	 */
  	Area(): number;
  	/**
  	 * 返回圆的轴。
  	 * @returns 圆的轴。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 返回圆的周长。
  	 * @returns 圆的周长。
  	 */
  	Length(): number;
  	/**
  	 * 返回圆的位置。
  	 * @returns 圆的位置点。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 返回圆的坐标系。
  	 * @returns 圆的坐标系。
  	 */
  	Position(): Mx3dGeCSYSR;
  	/**
  	 * 返回圆的半径。
  	 * @returns 圆的半径。
  	 */
  	Radius(): number;
  	/**
  	 * 返回圆的X轴。
  	 * @returns 圆的X轴。
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 返回圆的Y轴。
  	 * @returns 圆的Y轴。
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 计算圆到一个点的距离。
  	 * @param theP 点。
  	 * @returns 距离值。
  	 */
  	Distance(theP: Mx3dGePoint): number;
  	/**
  	 * 计算圆到一个点的平方距离。
  	 * @param theP 点。
  	 * @returns 平方距离值。
  	 */
  	SquareDistance(theP: Mx3dGePoint): number;
  	/**
  	 * 判断一个点是否在圆上。
  	 * @param theP 点。
  	 * @param theLinearTolerance 线性容差。
  	 * @returns 如果点在圆上返回true，否则返回false。
  	 */
  	Contains(theP: Mx3dGePoint, theLinearTolerance: number): boolean;
  	/**
  	 * 根据一个点镜像当前圆。
  	 * @param theP 镜像点。
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 返回根据一个点镜像后的圆。
  	 * @param theP 镜像点。
  	 * @returns 镜像后的圆。
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeCircle;
  	/**
  	 * 根据一个轴镜像当前圆。
  	 * @param theA1 镜像轴。
  	 */
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 返回根据一个轴镜像后的圆。
  	 * @param theA1 镜像轴。
  	 * @returns 镜像后的圆。
  	 */
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeCircle;
  	/**
  	 * 根据一个坐标系镜像当前圆。
  	 * @param theA2 镜像坐标系。
  	 */
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 返回根据一个坐标系镜像后的圆。
  	 * @param theA2 镜像坐标系。
  	 * @returns 镜像后的圆。
  	 */
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeCircle;
  	/**
  	 * 旋转当前圆。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 返回旋转后的圆。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 * @returns 旋转后的圆。
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCircle;
  	/**
  	 * 缩放当前圆。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 返回缩放后的圆。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 * @returns 缩放后的圆。
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCircle;
  	/**
  	 * 根据变换矩阵变换当前圆。
  	 * @param theT 变换矩阵。
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 返回根据变换矩阵变换后的圆。
  	 * @param theT 变换矩阵。
  	 * @returns 变换后的圆。
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeCircle;
  	/**
  	 * 根据向量平移当前圆。
  	 * @param theV 平移向量。
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 返回根据向量平移后的圆。
  	 * @param theV 平移向量。
  	 * @returns 平移后的圆。
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCircle;
  	/**
  	 * 根据两个点平移当前圆。
  	 * @param theP1 起点。
  	 * @param theP2 终点。
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 返回根据两个点平移后的圆。
  	 * @param theP1 起点。
  	 * @param theP2 终点。
  	 * @returns 平移后的圆。
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCircle;
  }
  /**
   * 表示三维形状对象的基类。
   */
  export  class Mx3dShapeObject extends Mx3dBaseObject {
  	/**
  	 * 创建一个形状对象，可以选择传入一个对象参数。
  	 * @param p 可选的对象参数。
  	 */
  	constructor(p?: object);
  	/**
  	 * 获取形状对象的边界框。
  	 * @returns 边界框对象。
  	 */
  	getBndBox(): Mx3dGeBndBox;
  	/**
  	 * 形状反向
  	 */
  	reverse(): void;
  	/**
  	 * 获取反向后的新形状
  	 * @returns 反向后的新形状
  	 */
  	reversed(): Mx3dShapeObject;
  	/**
  	 * 获取形状的朝向
  	 * @returns 朝向
  	 */
  	Orientation(): MdGe.MxOrientation;
  	/**
  	 * 移动形状对象到指定位置。
  	 * @param theLocation 移动的位置。
  	 */
  	move(theLocation: Mx3dGeLocation): void;
  	/**
  	 * 返回移动后的形状对象。
  	 * @param theLocation 移动的位置。
  	 * @returns 移动后的形状对象。
  	 */
  	moved(theLocation: Mx3dGeLocation): Mx3dShapeObject;
  	/**
  	 * 克隆当前形状对象。
  	 * @returns 克隆后的形状对象。
  	 */
  	clone(): Mx3dShapeObject;
  	/**
  	 * 与另一个形状对象融合。
  	 * @param theOther 另一个形状对象。
  	 * @returns 融合后的形状对象。
  	 */
  	fuse(theOther: Mx3dShapeObject): Mx3dShapeObject;
  	/**
  	 * 从当前形状对象中减去另一个形状对象。
  	 * @param theOther 另一个形状对象。
  	 * @returns 削减后的形状对象。
  	 */
  	cut(theOther: Mx3dShapeObject): Mx3dShapeObject;
  	/**
  	 * 返回当前形状对象与另一个形状对象的公共部分。
  	 * @param theOther 另一个形状对象。
  	 * @returns 公共部分的形状对象。
  	 */
  	common(theOther: Mx3dShapeObject): Mx3dShapeObject;
  	/**
  	 * 返回当前形状对象与另一个形状对象的相交轮廓。
  	 * @param theOther 另一个形状对象。
  	 * @returns 相交轮廓的形状对象。
  	 */
  	section(theOther: Mx3dShapeObject): Mx3dShapeObject;
  	/**
  	 * 使用工具形状对象分割当前形状对象。
  	 * @param theTools 工具形状对象数组。
  	 * @returns 分割后的形状对象数组。
  	 */
  	spliter(theTools: Mx3dShapeObject[]): Mx3dShapeObject[];
  	/**
  	 * 根据一个点镜像当前形状对象。
  	 * @param theP 镜像点。
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 返回根据一个点镜像后的形状对象。
  	 * @param theP 镜像点。
  	 * @returns 镜像后的形状对象。
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dShapeObject;
  	/**
  	 * 根据一个轴镜像当前形状对象。
  	 * @param axis 镜像轴。
  	 */
  	MirrorByAxis(axis: Mx3dGeAxis): void;
  	/**
  	 * 返回根据一个轴镜像后的形状对象。
  	 * @param axis 镜像轴。
  	 * @returns 镜像后的形状对象。
  	 */
  	MirroredByAxis(axis: Mx3dGeAxis): Mx3dShapeObject;
  	/**
  	 * 根据一个坐标系镜像当前形状对象。
  	 * @param csysr 镜像坐标系。
  	 */
  	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
  	/**
  	 * 返回根据一个坐标系镜像后的形状对象。
  	 * @param csysr 镜像坐标系。
  	 * @returns 镜像后的形状对象。
  	 */
  	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dShapeObject;
  	/**
  	 * 旋转当前形状对象。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 */
  	Rotate(axis: Mx3dGeAxis, ang: number): void;
  	/**
  	 * 返回旋转后的形状对象。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 * @returns 旋转后的形状对象。
  	 */
  	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dShapeObject;
  	/**
  	 * 缩放当前形状对象。
  	 * @param point 缩放中心点。
  	 * @param s 缩放比例。
  	 */
  	Scale(point: Mx3dGePoint, s: number): void;
  	/**
  	 * 返回缩放后的形状对象。
  	 * @param point 缩放中心点。
  	 * @param s 缩放比例。
  	 * @returns 缩放后的形状对象。
  	 */
  	Scaled(point: Mx3dGePoint, s: number): Mx3dShapeObject;
  	/**
  	 * 根据变换矩阵变换当前形状对象。
  	 * @param trsf 变换矩阵。
  	 */
  	Transform(trsf: Mx3dGeTrsf): void;
  	/**
  	 * 返回根据变换矩阵变换后的形状对象。
  	 * @param trsf 变换矩阵。
  	 * @returns 变换后的形状对象。
  	 */
  	Transformed(trsf: Mx3dGeTrsf): Mx3dShapeObject;
  	/**
  	 * 根据向量平移当前形状对象。
  	 * @param vec 平移向量。
  	 */
  	TranslateByVec(vec: Mx3dGeVec): void;
  	/**
  	 * 根据坐标平移当前形状对象。
  	 * @param theX X坐标。
  	 * @param theY Y坐标。
  	 * @param theZ Z坐标。
  	 */
  	TranslateByVec(theX: number, theY: number, theZ: number): void;
  	/**
  	 * 返回根据向量平移后的形状对象。
  	 * @param vec 平移向量。
  	 * @returns 平移后的形状对象。
  	 */
  	TranslatedByVec(vec: Mx3dGeVec): Mx3dShapeObject;
  	/**
  	 * 返回根据坐标平移后的形状对象。
  	 * @param theX X坐标。
  	 * @param theY Y坐标。
  	 * @param theZ Z坐标。
  	 * @returns 平移后的形状对象。
  	 */
  	TranslatedByVec(theX: number, theY: number, theZ: number): Mx3dShapeObject;
  	/**
  	 * 根据两个点平移当前形状对象。
  	 * @param point1 起点。
  	 * @param point2 终点。
  	 */
  	TranslateBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): void;
  	/**
  	 * 返回根据两个点平移后的形状对象。
  	 * @param point1 起点。
  	 * @param point2 终点。
  	 * @returns 平移后的形状对象。
  	 */
  	TranslatedBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): Mx3dShapeObject;
  	/**
  	 * 遍历形状对象。
  	 * @param ToFind 要查找的形状类型。
  	 * @returns 形状对象数组。
  	 */
  	Explore(ToFind: MdGe.MxShapeEnum): Mx3dShapeObject[];
  	/**
  	 * 获取形状类型。
  	 * @returns 形状类型。
  	 */
  	ShapeType(): MdGe.MxShapeEnum;
  	/**
  	 * 获取形状的长度，面积，体积等。
  	 * @param theAspect 设置获取长度，面积还是体积。
  	 * @returns 数量值。
  	 */
  	Quantities(theAspect: MdGe.MxQuantAspect): number;
  	/**
  	 * 获取形状的质心。
  	 * @param theAspect 需要根据形状类型进行设置的质心类型。
  	 * @returns 质心点。
  	 */
  	Centroid(theAspect: MdGe.MxQuantAspect): Mx3dGePoint;
  }
  /**
   * 表示一个面形状
   */
  export  class Mx3dShapeFace extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 表示一个点形状
   */
  export  class Mx3dShapeVertex extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 表示一个边形状
   */
  export  class Mx3dShapeEdge extends Mx3dShapeObject {
  	constructor();
  	/**
  	 * 创建一个边形状，传入起点和终点
  	 * @param pt1 起点
  	 * @param pt2 终点
  	 */
  	constructor(pt1: Mx3dGePoint, pt2: Mx3dGePoint);
  }
  /**
   * 表示一个环，由边构成，可以是不闭合的
   */
  export  class Mx3dShapeWire extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 表示一个壳，由面构成，可以是不闭合的
   */
  export  class Mx3dShapeShell extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 实心形状对象
   */
  export  class Mx3dShapeSolid extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 复合实心实体对象，由实心实体构成
   */
  export  class Mx3dShapeCompSolid extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 复合形状对象，由其他类型的形状构成
   */
  export  class Mx3dShapeCompound extends Mx3dShapeObject {
  	constructor(p?: object);
  }
  /**
   * 倒圆角算法
   */
  export  class Mx3dAlgoFillet extends Mx3dAlgoObject {
  	constructor(S: Mx3dShapeObject, FShape: MdGe.MxCF3dFilletShapeEnum);
  	Add(Radius: number, E: Mx3dShapeEdge): void;
  	Shape(): Mx3dShapeObject;
  }
  /**
   * 倒斜角算法
   */
  export  class Mx3dAlgoChamfer extends Mx3dAlgoObject {
  	/**
  	 * 构造函数，输入需要倒斜角的对象
  	 * @param S 进行倒斜角算法的对象
  	 */
  	constructor(S: Mx3dShapeObject);
  	/**
  	 * 添加对象上需要倒斜角的边
  	 * @param Dis 倒斜角距离
  	 * @param E 对象上的边
  	 */
  	Add(Dis: number, E: Mx3dShapeEdge): void;
  	/**
  	 * 获取倒斜角后的形状对象
  	 * @returns 倒斜角后的形状对象
  	 */
  	Shape(): Mx3dShapeObject;
  }
  /**
   * 二维倒圆角算法
   */
  export  class Mx3dAlgoFillet2d extends Mx3dAlgoObject {
  	/**
  	 * 默认构造函数
  	 */
  	constructor();
  	/**
     * 构造函数，传入Wire和Wire所在平面
     * @param theWire 要倒圆角的Wire
     * @param thePlane Wire所在平面
     */
  	constructor(theWire: Mx3dShapeWire, thePlane: Mx3dGePlane);
  	/**
  	 * 构造函数，传入两条位于同一平面Edge，和所在平面
  	 * @param theEdge1 第一条Edge
  	 * @param theEdge2 第二条Edge
  	 * @param thePlane 所在平面
  	 */
  	constructor(theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, thePlane: Mx3dGePlane);
  	/**
  	 * 初始化函数，传入Wire和Wire所在平面
  	 * @param theWire 要倒圆角的Wire
  	 * @param thePlane Wire所在平面
  	 */
  	Init(theWire: Mx3dShapeWire, thePlane: Mx3dGePlane): void;
  	/**
  	 * 初始化函数，传入两条位于同一平面Edge，和所在平面
  	 * @param theEdge1 第一条Edge
  	 * @param theEdge2 第二条Edge
  	 * @param thePlane 所在平面
  	 */
  	Init(theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, thePlane: Mx3dGePlane): void;
  	/**
  	 * 执行圆角算法
  	 * @param theRadius 圆角的半径
  	 * @returns 算法是否执行成功
  	 */
  	Perform(theRadius: number): boolean;
  	/**
  	 * 获取圆角执行结果的数量
  	 * @param thePoint 计算圆角处的点
  	 * @returns 圆角执行结果的数量
  	 */
  	NbResults(thePoint: Mx3dGePoint): number;
  	/**
  	 *
  	 * @param thePoint 设置要获取位于原曲线位于哪个交点的结果
  	 * @param theEdge1 返回的第一条Edge
  	 * @param theEdge2 返回的第二条Edge
  	 * @param iSolution 默认-1，获取最靠近thePoint的结果
  	 */
  	Result(thePoint: Mx3dGePoint, theEdge1: Mx3dShapeEdge, theEdge2: Mx3dShapeEdge, iSolution?: number): Mx3dShapeEdge;
  }
  /**
   * 数据库对象基类
   */
  export  class Mx3dDbObject extends Mx3dBaseObject {
  	constructor(p?: object);
  }
  export  class Mx3dView extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p: object);
  	/**
  	 * 获取当前文档视图对象的文档
  	 * @returns 返回文档对象
  	 */
  	getDocument(): Mx3dDbDocument;
  	/**
  	 * 移除所有
  	 * @param theUpdateView 移除后是否立即更新视图
  	 */
  	removeAll(theUpdateView?: boolean): void;
  	/**
  	 * 移除选中
  	 */
  	removeSelected(): void;
  	/**
  	 * 更新显示
  	 * @param isUpAllData 是否更新所有数据
  	 * @param isRemoveAll 是否首先移除所有数据
  	 */
  	update(isUpAllData?: boolean, isRemoveAll?: boolean): void;
  	/**
  	 * 设置视图投影模式
  	 * @param theProjection 投影模式
  	 */
  	setProjectionType(theProjection: MdGe.MxCameraProjection): void;
  	/**
  	 * 显示中心坐标轴
  	 * @param theToShow true显示，false不显示
  	 */
  	showCenterTrihedron(theToShow: boolean): void;
  	/**
  	 * 视图中的所有对象缩放至适应整个视图
  	 * @param theAuto 自动缩放
  	 */
  	fitAllObjects(theAuto: boolean): void;
  	/**
  	 * 开启/关闭X轴剖切面
  	 * @param theToEnabled 是否开启X轴剖切面
  	 */
  	enableXClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置X轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setXClipPlaneXPosition(thePosition: number): void;
  	/**
  	 * 翻转X轴剖切面
  	 */
  	setXClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭Y轴剖切面
  	 * @param theToEnabled 是否开启Y轴剖切面
  	 */
  	enableYClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置Y轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setYClipPlaneYPosition(thePosition: number): void;
  	/**
  	 * 翻转Y轴剖切面
  	 */
  	setYClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭Z轴剖切面
  	 * @param theToEnabled 是否开启Z轴剖切面
  	 */
  	enableZClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置Z轴剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setZClipPlaneZPosition(thePosition: number): void;
  	/**
  	 * 翻转Z轴剖切面
  	 */
  	setZClipPlaneReverse(): void;
  	/**
  	 * 开启/关闭用户自定义剖切面
  	 * @param theToEnabled 是否开启用户自定义剖切面
  	 */
  	enableCustomClipPlane(theToEnabled: boolean): void;
  	/**
  	 * 设置用户自定义剖切面的位置
  	 * @param thePosition 剖切平面相对于世界坐标系原点的位置
  	 */
  	setCustomClipPlanePosition(thePosition: number): void;
  	/**
  	 * 翻转用户自定义剖切面
  	 */
  	setCustomClipPlaneReverse(): void;
  	/**
  	 * 设置用户自定义剖切面的法向
  	 * @param x 法向的x分量
  	 * @param y 法向的y分量
  	 * @param z 法向的z分量
  	 */
  	setCustomClipPlaneDirection(x: number, y: number, z: number): void;
  	/**
  	 * 显示文字符号
  	 * @param theSymbol 文字符号对象
  	 */
  	displaySymbolText(theSymbol: Mx3dSymbolText): void;
  	/**
  	 * 显示标注符号
  	 * @param theDimension 标注符号对象
  	 */
  	displayDimension(theDimension: Mx3dDimObject): void;
  	/**
  	 * 为当前选中对象设置纹理贴图
  	 * @param theFileName 图片在文件系统中的完整路径
  	 */
  	addModelTexture(theFileName: string): void;
  	/**
  	 * 移除当前选择对象的纹理贴图
  	 */
  	removeModelTexture(): void;
  	/**
  	 * 设置渐变背景色
  	 * @param theColor1 颜色对象1
  	 * @param theColor2 颜色对象2
  	 * @param theMethod 渐变方式
  	 */
  	setGradientBgColor(theColor1: Mx3dGeColor, theColor2: Mx3dGeColor, theMethod: MdGe.MxGradientFillMethod): void;
  	/**
  	 * 设置视图方向
  	 * @param theOrientation 视图方向
  	 * @param theIsYup 是否Y轴向上
  	 */
  	setProj(theOrientation: MdGe.MxV3dTypeOfOrientation, theIsYup: boolean): void;
  	/**
  	 * 设置当前选中对象的颜色
  	 * @param color 颜色
  	 */
  	setSelectedColor(color: Mx3dGeColor): void;
  	/**
  	 * 设置选中对象的材质
  	 * @param material 材质
  	 */
  	setSelectedMaterial(material: Mx3dGeMaterial): void;
  	/**
  	 * 设置当前的显示模式
  	 * @param theMode 显示模式
  	 */
  	setDisplayMode(theMode: MdGe.MxGlobalDisplayMode): void;
  	enableDirLightSrc(theToEnabled: boolean): void;
  	setCubemapBackground(theRight: string, theLeft: string, theTop: string, theBottom: string, theFront: string, theBack: string): void;
  	setManipulatorEnabled(isEnabled: boolean): void;
  }
  /**
   * 表示颜色对象的类。
   */
  export  class Mx3dGeColor extends Mx3dBaseObject {
  	/**
  	 * 创建一个颜色对象。
  	 */
  	constructor();
  	/**
  	 * 使用颜色名称创建一个颜色对象。
  	 * @param theColorName 颜色名称。
  	 */
  	constructor(theColorName: MdGe.MxNameOfColor);
  	/**
  	 * 使用 RGB 值和颜色类型创建一个颜色对象。
  	 * @param theR 红色分量。
  	 * @param theG 绿色分量。
  	 * @param theB 蓝色分量。
  	 * @param theType 颜色类型。
  	 */
  	constructor(theR: number, theG: number, theB: number, theType: MdGe.MxTypeOfColor);
  	/**
  	 * 获取颜色的名称。
  	 * @returns 颜色名称。
  	 */
  	Name(): MdGe.MxNameOfColor;
  	/**
  	 * 设置颜色的值。
  	 * @param theName 颜色名称。
  	 */
  	SetValues(theName: MdGe.MxNameOfColor): void;
  	/**
  	 * 设置颜色的值。
  	 * @param theC1 红色分量。
  	 * @param theC2 绿色分量。
  	 * @param theC3 蓝色分量。
  	 * @param theType 颜色类型。
  	 */
  	SetValues(theC1: number, theC2: number, theC3: number, theType: MdGe.MxTypeOfColor): void;
  	/**
  	 * 获取红色分量的值。
  	 * @returns 红色分量。
  	 */
  	Red(): number;
  	/**
  	 * 获取绿色分量的值。
  	 * @returns 绿色分量。
  	 */
  	Green(): number;
  	/**
  	 * 获取蓝色分量的值。
  	 * @returns 蓝色分量。
  	 */
  	Blue(): number;
  	/**
  	 * 获取色调值。
  	 * @returns 色调值。
  	 */
  	Hue(): number;
  	/**
  	 * 获取亮度值。
  	 * @returns 亮度值。
  	 */
  	Light(): number;
  	/**
  	 * 改变颜色的强度。
  	 * @param theDelta 强度变化量。
  	 */
  	ChangeIntensity(theDelta: number): void;
  	/**
  	 * 获取饱和度值。
  	 * @returns 饱和度值。
  	 */
  	Saturation(): number;
  	/**
  	 * 改变颜色的对比度。
  	 * @param theDelta 对比度变化量。
  	 */
  	ChangeContrast(theDelta: number): void;
  	/**
  	 * 判断颜色是否不同。
  	 * @param theOther 另一个颜色对象。
  	 * @returns 是否不同。
  	 */
  	IsDifferent(theOther: Mx3dGeColor): boolean;
  	/**
  	 * 判断颜色是否相同。
  	 * @param theOther 另一个颜色对象。
  	 * @returns 是否相同。
  	 */
  	IsEqual(theOther: Mx3dGeColor): boolean;
  	/**
  	 * 计算颜色之间的距离。
  	 * @param theColor 另一个颜色对象。
  	 * @returns 颜色距离。
  	 */
  	Distance(theColor: Mx3dGeColor): number;
  	/**
  	 * 计算颜色之间的平方距离。
  	 * @param theColor 另一个颜色对象。
  	 * @returns 颜色平方距离。
  	 */
  	SquareDistance(theColor: Mx3dGeColor): number;
  	/**
  	 * 计算颜色之间的 Delta E2000 差异。
  	 * @param theOther 另一个颜色对象。
  	 * @returns Delta E2000 差异值。
  	 */
  	DeltaE2000(theOther: Mx3dGeColor): number;
  }
  /**
   * 表示通用坐标系的类。
   */
  export  class Mx3dGeCSYS extends Mx3dGeObject {
  	/**
  	 * 创建一个默认的坐标系对象。
  	 */
  	constructor();
  	/**
  	 * 使用右手坐标系创建一个坐标系对象。
  	 * @param csysr 右手坐标系对象。
  	 */
  	constructor(csysr: Mx3dGeCSYSR);
  	/**
  	 * 使用原点和 Z 轴方向创建一个坐标系对象。
  	 * @param origin 坐标系的原点。
  	 * @param z_axis 坐标系的 Z 轴方向。
  	 */
  	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir);
  	/**
  	 * 使用原点、Z 轴方向和 X 轴向量创建一个坐标系对象。
  	 * @param origin 坐标系的原点。
  	 * @param z_axis 坐标系的 Z 轴方向。
  	 * @param x_vec 坐标系的 X 轴向量。
  	 */
  	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir, x_vec: Mx3dGeDir);
  	/**
  	 * 反转 X 轴方向。
  	 */
  	XReverse(): void;
  	/**
  	 * 反转 Y 轴方向。
  	 */
  	YReverse(): void;
  	/**
  	 * 反转 Z 轴方向。
  	 */
  	ZReverse(): void;
  	/**
  	 * 设置坐标系的轴。
  	 * @param z_axis 坐标系的 Z 轴。
  	 */
  	SetAxis(z_axis: Mx3dGeAxis): void;
  	/**
  	 * 设置坐标系的方向。
  	 * @param z_dir 坐标系的 Z 轴方向。
  	 */
  	SetDirection(z_dir: Mx3dGeDir): void;
  	/**
  	 * 设置坐标系的原点位置。
  	 * @param origin 坐标系的原点。
  	 */
  	SetLocation(origin: Mx3dGePoint): void;
  	/**
  	 * 设置坐标系的原点位置。
  	 * @param theX 原点的 X 坐标。
  	 * @param theY 原点的 Y 坐标。
  	 * @param theZ 原点的 Z 坐标。
  	 */
  	SetLocation(theX: number, theY: number, theZ: number): void;
  	/**
  	 * 设置坐标系的 X 轴方向。
  	 * @param x_dir X 轴方向。
  	 */
  	SetXDirection(x_dir: Mx3dGeDir): void;
  	/**
  	 * 设置坐标系的 Y 轴方向。
  	 * @param y_dir Y 轴方向。
  	 */
  	SetYDirection(y_dir: Mx3dGeDir): void;
  	/**
  	 * 计算与另一个坐标系的角度。
  	 * @param other 另一个坐标系。
  	 * @returns 两个坐标系之间的角度。
  	 */
  	Angle(other: Mx3dGeCSYS): number;
  	/**
  	 * 获取坐标系的轴。
  	 * @returns 坐标系的轴。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取右手坐标系。
  	 * @returns 右手坐标系对象。
  	 */
  	CSYSR(): Mx3dGeCSYSR;
  	/**
  	 * 获取坐标系的方向。
  	 * @returns 坐标系的方向。
  	 */
  	Direction(): Mx3dGeDir;
  	/**
  	 * 获取坐标系的原点位置。
  	 * @returns 坐标系的原点位置。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取坐标系的 X 轴方向。
  	 * @returns X 轴方向。
  	 */
  	XDirection(): Mx3dGeDir;
  	/**
  	 * 获取坐标系的 Y 轴方向。
  	 * @returns Y 轴方向。
  	 */
  	YDirection(): Mx3dGeDir;
  	/**
  	 * 判断坐标系是否为直接的。
  	 * @returns 是否为直接的。
  	 */
  	Direct(): boolean;
  	/**
  	 * 判断坐标系是否与另一个坐标系共面。
  	 * @param other 另一个坐标系。
  	 * @param linearTolerance 线性公差。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否共面。
  	 */
  	IsCoplanarWithCSYS(other: Mx3dGeCSYS, linearTolerance: number, angularTolerance: number): boolean;
  	/**
  	 * 判断坐标系是否与一个轴共面。
  	 * @param axis 轴对象。
  	 * @param linearTolerance 线性公差。
  	 * @param angularTolerance 角度公差。
  	 * @returns 是否共面。
  	 */
  	IsCoplanarWithAxis(axis: Mx3dGeAxis, linearTolerance: number, angularTolerance: number): boolean;
  	/**
  	 * 通过一个点对坐标系进行镜像。
  	 * @param point 镜像点。
  	 */
  	MirrorByPoint(point: Mx3dGePoint): void;
  	/**
  	 * 通过一个点对坐标系进行镜像，并返回镜像后的坐标系对象。
  	 * @param point 镜像点。
  	 * @returns 镜像后的坐标系对象。
  	 */
  	MirroredByPoint(point: Mx3dGePoint): Mx3dGeCSYS;
  	/**
  	 * 通过一个轴对坐标系进行镜像。
  	 * @param axis 镜像轴。
  	 */
  	MirrorByAxis(axis: Mx3dGeAxis): void;
  	/**
  	 * 通过一个轴对坐标系进行镜像，并返回镜像后的坐标系对象。
  	 * @param axis 镜像轴。
  	 * @returns 镜像后的坐标系对象。
  	 */
  	MirroredByAxis(axis: Mx3dGeAxis): Mx3dGeCSYS;
  	/**
  	 * 通过右手坐标系对当前坐标系进行镜像。
  	 * @param csysr 右手坐标系对象。
  	 */
  	MirrorByCSYSR(csysr: Mx3dGeCSYSR): void;
  	/**
  	 * 通过右手坐标系对当前坐标系进行镜像，并返回镜像后的坐标系对象。
  	 * @param csysr 右手坐标系对象。
  	 * @returns 镜像后的坐标系对象。
  	 */
  	MirroredByCSYSR(csysr: Mx3dGeCSYSR): Mx3dGeCSYS;
  	/**
  	 * 绕轴旋转坐标系。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 */
  	Rotate(axis: Mx3dGeAxis, ang: number): void;
  	/**
  	 * 绕轴旋转坐标系，并返回旋转后的坐标系对象。
  	 * @param axis 旋转轴。
  	 * @param ang 旋转角度。
  	 * @returns 旋转后的坐标系对象。
  	 */
  	Rotated(axis: Mx3dGeAxis, ang: number): Mx3dGeCSYS;
  	/**
  	 * 按比例缩放坐标系。
  	 * @param point 缩放的基点。
  	 * @param s 缩放比例。
  	 */
  	Scale(point: Mx3dGePoint, s: number): void;
  	/**
  	 * 按比例缩放坐标系，并返回缩放后的坐标系对象。
  	 * @param point 缩放的基点。
  	 * @param s 缩放比例。
  	 * @returns 缩放后的坐标系对象。
  	 */
  	Scaled(point: Mx3dGePoint, s: number): Mx3dGeCSYS;
  	/**
  	 * 变换坐标系。
  	 * @param t 变换对象。
  	 */
  	Transform(t: Mx3dGeTrsf): void;
  	/**
  	 * 变换坐标系，并返回变换后的坐标系对象。
  	 * @param t 变换对象。
  	 * @returns 变换后的坐标系对象。
  	 */
  	Transformed(t: Mx3dGeTrsf): Mx3dGeCSYS;
  	/**
  	 * 按向量平移坐标系。
  	 * @param vec 平移向量。
  	 */
  	TranslateByVec(vec: Mx3dGeVec): void;
  	/**
  	 * 按向量平移坐标系，并返回平移后的坐标系对象。
  	 * @param vec 平移向量。
  	 * @returns 平移后的坐标系对象。
  	 */
  	TranslatedByVec(vec: Mx3dGeVec): Mx3dGeCSYS;
  	/**
  	 * 通过两个点平移坐标系。
  	 * @param point1 起点。
  	 * @param point2 终点。
  	 */
  	TranslateBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): void;
  	/**
  	 * 通过两个点平移坐标系，并返回平移后的坐标系对象。
  	 * @param point1 起点。
  	 * @param point2 终点。
  	 * @returns 平移后的坐标系对象。
  	 */
  	TranslatedBy2Points(point1: Mx3dGePoint, point2: Mx3dGePoint): Mx3dGeCSYS;
  }
  /**
   * 表示右手坐标系的类。
   */
  export  class Mx3dGeCSYSR extends Mx3dGeObject {
  	/**
  	 * 创建一个默认的右手坐标系对象。
  	 */
  	constructor();
  	/**
  	 * 使用原点、Z 轴方向和 X 轴向量创建一个右手坐标系对象。
  	 * @param origin 坐标系的原点。
  	 * @param z_axis 坐标系的 Z 轴方向。
  	 * @param x_vec 坐标系的 X 轴向量。
  	 */
  	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir, x_vec: Mx3dGeDir);
  	/**
  	 * 使用原点、Z 轴方向创建一个右手坐标系对象，X Y 方向自动确定。
  	 * @param origin 坐标系的原点。
  	 * @param z_axis 坐标系的 Z 轴方向。
  	 */
  	constructor(origin: Mx3dGePoint, z_axis: Mx3dGeDir);
  	/**
  	 * 获取右手坐标系的原点位置。
  	 * @returns 原点位置。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取右手坐标系的 X 轴方向。
  	 * @returns X 轴方向。
  	 */
  	XDirection(): Mx3dGeDir;
  	/**
  	 * 获取右手坐标系的 Y 轴方向。
  	 * @returns Y 轴方向。
  	 */
  	YDirection(): Mx3dGeDir;
  	/**
  	 * 获取右手坐标系的 Z 轴方向。
  	 * @returns Z 轴方向。
  	 */
  	Direction(): Mx3dGeDir;
  	/**
  	 * 设置右手坐标系的原点位置。
  	 * @param origin 坐标系的原点。
  	 */
  	SetLocation(origin: Mx3dGePoint): void;
  	/**
  	 * 设置右手坐标系的原点位置。
  	 * @param theX 原点的 X 坐标。
  	 * @param theY 原点的 Y 坐标。
  	 * @param theZ 原点的 Z 坐标。
  	 */
  	SetLocation(theX: number, theY: number, theZ: number): void;
  	/**
  	 * 设置右手坐标系的 X 轴方向。
  	 * @param x_dir X 轴方向。
  	 */
  	SetXDirection(x_dir: Mx3dGePoint): void;
  	/**
  	 * 设置右手坐标系的 Y 轴方向。
  	 * @param y_dir Y 轴方向。
  	 */
  	SetYDirection(y_dir: Mx3dGeDir): void;
  	/**
  	 * 设置右手坐标系的 Z 轴方向。
  	 * @param z_dir Z 轴方向。
  	 */
  	SetDirection(z_dir: Mx3dGeDir): void;
  	/**
  	 * 计算与另一个右手坐标系的角度。
  	 * @param theOther 另一个右手坐标系。
  	 * @returns 两个坐标系之间的角度。
  	 */
  	Angle(theOther: Mx3dGeCSYSR): number;
  	/**
  	 * 获取右手坐标系的轴。
  	 * @returns 右手坐标系的轴。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 判断右手坐标系是否与另一个右手坐标系共面。
  	 * @param Other 另一个右手坐标系。
  	 * @param LinearTolerance 线性公差。
  	 * @param AngularTolerance 角度公差。
  	 * @returns 是否共面。
  	 */
  	IsCoplanarWithCSYSR(Other: Mx3dGeCSYSR, LinearTolerance: number, AngularTolerance: number): boolean;
  	/**
  	 * 判断右手坐标系是否与一个轴共面。
  	 * @param A1 轴对象。
  	 * @param LinearTolerance 线性公差。
  	 * @param AngularTolerance 角度公差。
  	 * @returns 是否共面。
  	 */
  	IsCoplanarWithAxis(A1: Mx3dGeAxis, LinearTolerance: number, AngularTolerance: number): boolean;
  	/**
  	 * 通过一个点对右手坐标系进行镜像。
  	 * @param P 镜像点。
  	 */
  	MirrorByPoint(P: Mx3dGePoint): void;
  	/**
  	 * 通过一个点对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
  	 * @param P 镜像点。
  	 * @returns 镜像后的右手坐标系对象。
  	 */
  	MirroredByPoint(P: Mx3dGePoint): Mx3dGeCSYSR;
  	/**
  	 * 通过一个轴对右手坐标系进行镜像。
  	 * @param A1 镜像轴。
  	 */
  	MirrorByAxis(A1: Mx3dGeAxis): void;
  	/**
  	 * 通过一个轴对右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
  	 * @param A1 镜像轴。
  	 * @returns 镜像后的右手坐标系对象。
  	 */
  	MirroredByAxis(A1: Mx3dGeAxis): Mx3dGeCSYSR;
  	/**
  	 * 通过右手坐标系对当前右手坐标系进行镜像。
  	 * @param A2 右手坐标系对象。
  	 */
  	MirrorByCSYSR(A2: Mx3dGeCSYSR): void;
  	/**
  	 * 通过右手坐标系对当前右手坐标系进行镜像，并返回镜像后的右手坐标系对象。
  	 * @param A2 右手坐标系对象。
  	 * @returns 镜像后的右手坐标系对象。
  	 */
  	MirroredByCSYSR(A2: Mx3dGeCSYSR): Mx3dGeCSYSR;
  	/**
  	 * 绕轴旋转右手坐标系。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 绕轴旋转右手坐标系，并返回旋转后的右手坐标系对象。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 * @returns 旋转后的右手坐标系对象。
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCSYSR;
  	/**
  	 * 对右手坐标系进行缩放。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 对右手坐标系进行缩放，并返回缩放后的右手坐标系对象。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 * @returns 缩放后的右手坐标系对象。
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCSYSR;
  	/**
  	 * 变换右手坐标系。
  	 * @param theT 变换矩阵。
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 变换右手坐标系，并返回变换后的右手坐标系对象。
  	 * @param theT 变换矩阵。
  	 * @returns 变换后的右手坐标系对象。
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeCSYSR;
  	/**
  	 * 通过向量平移右手坐标系。
  	 * @param theV 平移向量。
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 通过向量平移右手坐标系，并返回平移后的右手坐标系对象。
  	 * @param theV 平移向量。
  	 * @returns 平移后的右手坐标系对象。
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCSYSR;
  	/**
  	 * 通过两个点平移右手坐标系。
  	 * @param theP1 起点。
  	 * @param theP2 终点。
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 通过两个点平移右手坐标系，并返回平移后的右手坐标系对象。
  	 * @param theP1 起点。
  	 * @param theP2 终点。
  	 * @returns 平移后的右手坐标系对象。
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCSYSR;
  }
  /**
   * 表示圆柱体的类。
   */
  export  class Mx3dGeCylinder extends Mx3dGeObject {
  	/**
  	 * 创建一个默认的圆柱体对象。
  	 */
  	constructor();
  	/**
  	 * 使用坐标系和半径创建一个圆柱体对象。
  	 * @param theA3 坐标系。
  	 * @param theRadius 圆柱体的半径。
  	 */
  	constructor(theA3: Mx3dGeCSYS, theRadius: number);
  	/**
  	 * 设置圆柱体的轴。
  	 * @param theA1 圆柱体的轴。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置圆柱体的原点位置。
  	 * @param theLoc 原点位置。
  	 */
  	SetLocation(theLoc: Mx3dGePoint): void;
  	/**
  	 * 设置圆柱体的位置。
  	 * @param theA3 坐标系。
  	 */
  	SetPosition(theA3: Mx3dGeCSYS): void;
  	/**
  	 * 设置圆柱体的半径。
  	 * @param theR 圆柱体的半径。
  	 */
  	SetRadius(theR: number): void;
  	/**
  	 * 反转圆柱体的 U 参数方向。
  	 */
  	UReverse(): void;
  	/**
  	 * 反转圆柱体的 V 参数方向。
  	 */
  	VReverse(): void;
  	/**
  	 * 检查圆柱体的方向是否为正向。
  	 * @returns 是否为正向。
  	 */
  	Direct(): boolean;
  	/**
  	 * 获取圆柱体的轴。
  	 * @returns 圆柱体的轴。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取圆柱体的原点位置。
  	 * @returns 原点位置。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取圆柱体的位置。
  	 * @returns 圆柱体的位置。
  	 */
  	Position(): Mx3dGeCSYS;
  	/**
  	 * 获取圆柱体的半径。
  	 * @returns 圆柱体的半径。
  	 */
  	Radius(): number;
  	/**
  	 * 获取圆柱体的 X 轴。
  	 * @returns X 轴。
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 获取圆柱体的 Y 轴。
  	 * @returns Y 轴。
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 通过一个点对圆柱体进行镜像。
  	 * @param theP 镜像点。
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 通过一个点对圆柱体进行镜像，并返回镜像后的圆柱体对象。
  	 * @param theP 镜像点。
  	 * @returns 镜像后的圆柱体对象。
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dGeCylinder;
  	/**
  	 * 通过一个轴对圆柱体进行镜像。
  	 * @param theA1 镜像轴。
  	 */
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 通过一个轴对圆柱体进行镜像，并返回镜像后的圆柱体对象。
  	 * @param theA1 镜像轴。
  	 * @returns 镜像后的圆柱体对象。
  	 */
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGeCylinder;
  	/**
  	 * 通过右手坐标系对圆柱体进行镜像。
  	 * @param theA2 右手坐标系。
  	 */
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 通过右手坐标系对圆柱体进行镜像，并返回镜像后的圆柱体对象。
  	 * @param theA2 右手坐标系。
  	 * @returns 镜像后的圆柱体对象。
  	 */
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGeCylinder;
  	/**
  	 * 绕轴旋转圆柱体。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 绕轴旋转圆柱体，并返回旋转后的圆柱体对象。
  	 * @param theA1 旋转轴。
  	 * @param theAng 旋转角度。
  	 * @returns 旋转后的圆柱体对象。
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGeCylinder;
  	/**
  	 * 对圆柱体进行缩放。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 对圆柱体进行缩放，并返回缩放后的圆柱体对象。
  	 * @param theP 缩放中心点。
  	 * @param theS 缩放比例。
  	 * @returns 缩放后的圆柱体对象。
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGeCylinder;
  	/**
  	 * 变换圆柱体。
  	 * @param theT 变换矩阵。
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 变换圆柱体，并返回变换后的圆柱体对象。
  	 * @param theT 变换矩阵。
  	 * @returns 变换后的圆柱体对象。
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGeCylinder;
  	/**
  	 * 通过向量平移圆柱体。
  	 * @param theV 平移向量。
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 通过向量平移圆柱体，并返回平移后的圆柱体对象。
  	 * @param theV 平移向量。
  	 * @returns 平移后的圆柱体对象。
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGeCylinder;
  	/**
  	 * 将圆柱体的位置沿着两个点之间的直线进行平移。
  	 * @param theP1 - 第一个点，用于确定平移的起点。
  	 * @param theP2 - 第二个点，用于确定平移的终点。
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 创建一个新的圆柱体对象，位置沿着两个点之间的直线进行平移。
  	 * @param theP1 - 第一个点，用于确定平移的起点。
  	 * @param theP2 - 第二个点，用于确定平移的终点。
  	 * @returns 返回一个新的 Mx3dGeCylinder 对象，平移后的圆柱体。
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGeCylinder;
  	/**
  	 * 创建一个 Mx3dShapeObject 对象，表示圆柱体的形状。
  	 * @param H - 圆柱体的高度。
  	 * @param Angle - 可选参数，表示圆柱体的角度。
  	 * @returns 返回一个新的 Mx3dShapeObject 对象，表示圆柱体的形状。
  	 */
  	Shape(H: number, Angle?: number): Mx3dShapeObject;
  }
  /**
   * 文档类，继承自 Mx3dDbObject。
   */
  export  class Mx3dDbDocument extends Mx3dDbObject {
  	/**
  	 * 构造函数，用于初始化 Mx3dDbDocument 实例。
  	 */
  	constructor();
  	/**
  	 * 读取模型文件并解析为文档。
  	 * @param theFile - 要读取的文件对象。
  	 * @param theFormat - 模型文件格式。
  	 * @returns 返回一个 Promise，解析结果为布尔值，表示成功或失败。
  	 */
  	read(theFile: File, theFormat: MdGe.MxFormat): Promise<boolean>;
  	readFile(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
  	/**
  	 * 获取访问入口标签。
  	 * @returns 返回访问入口标签对象。
  	 */
  	getAccessLabel(): Mx3dDbLabel;
  	/**
  	 * 获取入口形状标签。
  	 * @returns 返回入口形状标签对象。
  	 */
  	getShapesLabel(): Mx3dDbLabel;
  	/**
  	 * 获取入口颜色标签。
  	 * @returns 返回入口颜色标签对象。
  	 */
  	getColorsLabel(): Mx3dDbLabel;
  	/**
  	 * 获取入口图层标签。
  	 * @returns 返回入口图层标签对象。
  	 */
  	getLayersLabel(): Mx3dDbLabel;
  	/**
  	 * 添加一个新的形状标签。
  	 * @returns 返回新增的形状标签对象。
  	 */
  	addShapeLabel(): Mx3dDbLabel;
  	/**
  	 * 删除指定的形状标签。
  	 * @param theLabel - 要删除的形状标签对象。
  	 * @returns 返回布尔值，表示是否成功删除。
  	 */
  	removeShapeLabel(theLabel: Mx3dDbLabel): boolean;
  	/**
  	 * 删除指定的组件。
  	 * @param theLabel - 要删除的标签对象。
  	 */
  	removeComponent(theLabel: Mx3dDbLabel): void;
  	/**
  	 * 获取顶级自由标签列表。
  	 * @returns 返回顶级自由标签的数组。
  	 */
  	getTopFreeLabels(): Mx3dDbLabel[];
  	/**
  	 * 获取文档名称。
  	 * @returns 返回文档名称的字符串。
  	 */
  	getDocName(): string;
  	/**
  	 * 获取视图对象。
  	 * @returns 返回视图对象。
  	 */
  	getView(): Mx3dView;
  	/**
  	 * 添加一个新的颜色标签。
  	 * @param theColor - 颜色对象。
  	 * @returns 返回新增的颜色标签对象。
  	 */
  	addColorLabel(theColor: Mx3dGeColor): Mx3dDbLabel;
  	/**
  	 * 写入文档到指定路径。
  	 * @param theFilePath - 文件路径。
  	 * @param theFormat - 文件格式。
  	 * @returns 返回布尔值，表示是否成功写入。
  	 */
  	write(theFilePath: string, theFormat: MdGe.MxFormat): boolean;
  	/**
  	 * 开启一个事务开始。
  	 */
  	newCommand(): void;
  	/**
  	 * 中止当前事务。
  	 */
  	abortCommand(): void;
  	/**
  	 * 提交当前事务。
  	 * @returns 返回布尔值，表示是否成功提交。
  	 */
  	commitCommand(): boolean;
  	/**
  	 * 撤销最后一个记录的事务。
  	 * @returns 返回布尔值，表示是否成功撤销。
  	 */
  	undo(): boolean;
  	/**
  	 * 重做最后一个撤销的事务。
  	 * @returns 返回布尔值，表示是否成功重做。
  	 */
  	redo(): boolean;
  }
  /**
   * 文档标签类，继承自 Mx3dDbObject，提供对标签的各种操作。
   */
  export  class Mx3dDbLabel extends Mx3dDbObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  	/**
  	 * 设置标签的形状。
  	 * @param theShape - 形状对象。
  	 */
  	setShape(theShape: Mx3dShapeObject): void;
  	/**
  	 * 获取标签的形状。
  	 * @returns 返回形状对象。
  	 */
  	getShape(): Mx3dShapeObject;
  	/**
  	 * 检查标签是否有子标签。
  	 * @returns 返回布尔值，表示是否有子标签。
  	 */
  	hasChildLabel(): boolean;
  	/**
  	 * 获取所有子标签。
  	 * @returns 返回子标签的数组。
  	 */
  	getChildLabels(): Mx3dDbLabel[];
  	/**
  	 * 检查标签是否有父标签。
  	 * @returns 返回布尔值，表示是否有父标签。
  	 */
  	hasParentLabel(): boolean;
  	/**
  	 * 获取父标签。
  	 * @returns 返回父标签对象。
  	 */
  	getParentLabel(): Mx3dDbLabel;
  	/**
  	 * 添加一个子标签。
  	 * @returns 返回新增的子标签对象。
  	 */
  	addChildLabel(): Mx3dDbLabel;
  	/**
  	 * 添加一个子形状。
  	 * @param theShape - 形状对象。
  	 * @returns 返回新增的子标签对象。
  	 */
  	addSubShape(theShape: Mx3dShapeObject): Mx3dDbLabel;
  	/**
  	 * 检查标签是否是引用。
  	 * @returns 返回布尔值，表示是否是引用。
  	 */
  	isReference(): boolean;
  	/**
  	 * 检查标签是否是装配。
  	 * @returns 返回布尔值，表示是否是装配。
  	 */
  	isAssembly(): boolean;
  	/**
  	 * 检查标签是否是简单形状。
  	 * @returns 返回布尔值，表示是否是简单形状。
  	 */
  	isSimpleShape(): boolean;
  	/**
  	 * 检查标签是否是顶级标签。
  	 * @returns 返回布尔值，表示是否是顶级标签。
  	 */
  	isTopLevel(): boolean;
  	/**
  	 * 检查标签是否是自由标签。
  	 * @returns 返回布尔值，表示是否是自由标签。
  	 */
  	isFree(): boolean;
  	/**
  	 * 检查标签是否是形状。
  	 * @returns 返回布尔值，表示是否是形状。
  	 */
  	isShape(): boolean;
  	/**
  	 * 检查标签是否是组件。
  	 * @returns 返回布尔值，表示是否是组件。
  	 */
  	isComponent(): boolean;
  	/**
  	 * 检查标签是否是复合形状。
  	 * @returns 返回布尔值，表示是否是复合形状。
  	 */
  	isCompound(): boolean;
  	/**
  	 * 检查标签是否是子形状。
  	 * @returns 返回布尔值，表示是否是子形状。
  	 */
  	isSubShape(): boolean;
  	/**
  	 * 获取引用的标签。
  	 * @returns 返回引用的标签对象。
  	 */
  	getReferredLabel(): Mx3dDbLabel;
  	/**
  	 * 获取标签的位置。
  	 * @returns 返回位置对象。
  	 */
  	getLocation(): Mx3dGeLocation;
  	/**
  	 * 添加一个组件。
  	 * @param comp - 组件标签对象。
  	 * @param Loc - 位置对象。
  	 * @returns 返回添加的组件标签对象。
  	 */
  	addComponent(comp: Mx3dDbLabel, Loc: Mx3dGeLocation): Mx3dDbLabel;
  	/**
  	 * 设置标签名称。
  	 * @param theName - 标签名称。
  	 */
  	setName(theName: string): void;
  	/**
  	 * 检查标签是否有形状。
  	 * @returns 返回布尔值，表示是否有形状。
  	 */
  	hasShape(): boolean;
  	/**
  	 * 检查标签是否设置了颜色。
  	 * @returns 返回布尔值，表示是否设置了颜色。
  	 */
  	isSetColor(): boolean;
  	/**
  	 * 设置标签颜色。
  	 * @param theColor - 颜色对象。
  	 */
  	setColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 获取标签颜色。
  	 * @returns 返回颜色对象。
  	 */
  	getColor(): Mx3dGeColor;
  	/**
  	 * 获取标签名称。
  	 * @returns 返回标签名称的字符串。
  	 */
  	getName(): string;
  	/**
  	 * 获取标签条目，是一个唯一的数字字符序列。
  	 * @returns 返回标签条目的字符串。
  	 */
  	getEntry(): string;
  	/**
  	 * 获取标签属性字符串，JSON字符串。
  	 * @returns 返回标签属性字符串。
  	 */
  	getAttributeStr(): string;
  	/**
  	 * 设置标签形状的纹理。
  	 * @param theFilePath - 纹理文件路径。
  	 * @param theScaleU - U 方向缩放比例，默认值为 1。
  	 * @param theScaleV - V 方向缩放比例，默认值为 1。
  	 * @param theRepeatU - U 方向重复次数，默认值为 1。
  	 * @param theRepeatV - V 方向重复次数，默认值为 1。
  	 * @param theOriginU - U 方向起始位置，默认值为 0。
  	 * @param theOriginV - V 方向起始位置，默认值为 0。
  	 */
  	setTexture(theFilePath: string, theScaleU?: number, theScaleV?: number, theRepeatU?: number, theRepeatV?: number, theOriginU?: number, theOriginV?: number): void;
  	/**
  	 * 设置标签形状的材质。
  	 * @param theMaterial - 材质对象。
  	 */
  	setMaterial(theMaterial: Mx3dGeMaterial): void;
  }
  /**
   * 表示3D几何系统中的位置。
   * 提供了操作3D位置和变换的各种方法。
   */
  export  class Mx3dGeLocation extends Mx3dGeObject {
  	/**
  	 * 默认构造函数，创建一个单位位置。
  	 */
  	constructor();
  	/**
  	 * 构造函数，使用指定的变换初始化位置。
  	 * @param theTrsf - 用于初始化位置的变换对象。
  	 */
  	constructor(theTrsf: Mx3dGeTrsf);
  	/**
  	 * 检查当前位置是否为单位变换。
  	 * @returns 如果当前位置为单位变换，则返回true；否则返回false。
  	 */
  	IsIdentity(): boolean;
  	/**
  	 * 将当前位置设置为单位变换。
  	 */
  	Identity(): void;
  	/**
  	 * 获取位置的第一幂。
  	 * @returns 位置的第一幂值。
  	 */
  	FirstPower(): number;
  	/**
  	 * 获取下一个位置对象。
  	 * @returns 下一个位置对象。
  	 */
  	NextLocation(): Mx3dGeLocation;
  	/**
  	 * 计算当前位置的逆变换。
  	 * @returns 逆变换后的位置对象。
  	 */
  	Inverted(): Mx3dGeLocation;
  	/**
  	 * 计算当前位置与另一个位置的乘积。
  	 * @param theLocation - 另一个位置对象。
  	 * @returns 乘积后的位置对象。
  	 */
  	Multiplied(theLocation: Mx3dGeLocation): Mx3dGeLocation;
  	/**
  	 * 计算当前位置与另一个位置的除法。
  	 * @param Other - 另一个位置对象。
  	 * @returns 除法后的位置对象。
  	 */
  	Divided(Other: Mx3dGeLocation): Mx3dGeLocation;
  	/**
  	 * 计算当前位置与另一个位置的左除（前除）。
  	 * @param Other - 另一个位置对象。
  	 * @returns 左除后的位置对象。
  	 */
  	Predivided(Other: Mx3dGeLocation): Mx3dGeLocation;
  	/**
  	 * 计算当前位置的幂运算。
  	 * @param pwr - 幂的值。
  	 * @returns 幂运算后的位置对象。
  	 */
  	Powered(pwr: number): Mx3dGeLocation;
  	/**
  	 * 检查当前位置是否与另一个位置相等。
  	 * @param Other - 另一个位置对象。
  	 * @returns 如果当前位置与另一个位置相等，则返回true；否则返回false。
  	 */
  	IsEqual(Other: Mx3dGeLocation): boolean;
  	/**
  	 * 检查当前位置是否与另一个位置不同。
  	 * @param Other - 另一个位置对象。
  	 * @returns 如果当前位置与另一个位置不同，则返回true；否则返回false。
  	 */
  	IsDifferent(Other: Mx3dGeLocation): boolean;
  	/**
  	 * 清除当前位置的变换。
  	 */
  	Clear(): void;
  	/**
  	 * 获取位置的缩放精度。
  	 * @returns 位置的缩放精度值。
  	 */
  	ScalePrec(): number;
  }
  /**
   * 表示3D几何中的平面。
   * 平面对象可通过坐标系、点、方向向量等多种方式定义，并提供了多种几何变换和操作方法。
   */
  export  class Mx3dGePlane extends Mx3dGeObject {
  	/**
  	 * 默认构造函数，创建一个平面。
  	 */
  	constructor();
  	/**
  	 * 构造函数，使用指定坐标系初始化平面。
  	 *
  	 * @param theA3 - 用于初始化平面的坐标系（CSYS）对象。
  	 */
  	constructor(theA3: Mx3dGeCSYS);
  	/**
  	 * 构造函数，使用指定点和向量初始化平面。
  	 *
  	 * @param theP - 平面上的点。
  	 * @param theV - 与平面垂直的向量，用于定义平面的方向。
  	 */
  	constructor(theP: Mx3dGePoint, theV: Mx3dGeDir);
  	/**
  	 * 构造函数，使用平面方程的系数初始化平面。
  	 *
  	 * @param theA - 平面方程中的系数A。
  	 * @param theB - 平面方程中的系数B。
  	 * @param theC - 平面方程中的系数C。
  	 * @param theD - 平面方程中的系数D。
  	 */
  	constructor(theA: number, theB: number, theC: number, theD: number);
  	/**
  	 * 设置平面的轴向。
  	 *
  	 * @param theA1 - 平面轴向对象。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置平面的位置。
  	 *
  	 * @param theLoc - 平面上的一个点，用于定义平面的具体位置。
  	 */
  	SetLocation(theLoc: Mx3dGePoint): void;
  	/**
  	 * 设置平面的位置和方向。
  	 *
  	 * @param theA3 - 用于设置平面位置和方向的坐标系。
  	 */
  	SetPosition(theA3: Mx3dGeCSYS): void;
  	/**
  	 * 反转U方向。
  	 */
  	UReverse(): void;
  	/**
  	 * 反转V方向。
  	 */
  	VReverse(): void;
  	/**
  	 * 检查平面是否是右手坐标系。
  	 *
  	 * @returns 如果平面是右手坐标系，则返回true；否则返回false。
  	 */
  	Direct(): boolean;
  	/**
  	 * 获取平面的法向轴向。
  	 *
  	 * @returns 平面的法向轴向对象。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取平面上的位置点。
  	 *
  	 * @returns 平面上的点对象。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取平面的坐标系位置。
  	 *
  	 * @returns 平面的坐标系对象。
  	 */
  	Position(): Mx3dGeCSYS;
  	/**
  	 * 计算点到平面的距离。
  	 *
  	 * @param theP - 需要计算距离的点。
  	 * @returns 点到平面的距离值。
  	 */
  	DistanceToPoint(theP: Mx3dGePoint): number;
  	/**
  	 * 计算两个平面之间的距离。
  	 *
  	 * @param theOther - 另一个平面对象。
  	 * @returns 两个平面之间的距离值。
  	 */
  	DistanceToPlane(theOther: Mx3dGePlane): number;
  	/**
  	 * 计算点到平面的平方距离。
  	 *
  	 * @param theP - 需要计算平方距离的点。
  	 * @returns 点到平面的平方距离值。
  	 */
  	SquareDistanceToPoint(theP: Mx3dGePoint): number;
  	/**
  	 * 计算两个平面之间的平方距离。
  	 *
  	 * @param theOther - 另一个平面对象。
  	 * @returns 两个平面之间的平方距离值。
  	 */
  	SquareDistanceToPlane(theOther: Mx3dGePlane): number;
  	/**
  	 * 获取平面X轴的方向。
  	 *
  	 * @returns 平面X轴的轴向对象。
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 获取平面Y轴的方向。
  	 *
  	 * @returns 平面Y轴的轴向对象。
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 检查点是否在平面上。
  	 *
  	 * @param theP - 需要检查的点。
  	 * @param theLinearTolerance - 线性容差，用于判定点是否在平面上。
  	 * @returns 如果点在平面上，则返回true；否则返回false。
  	 */
  	Contains(theP: Mx3dGePoint, theLinearTolerance: number): boolean;
  	/**
  	 * 将平面通过指定点进行镜像。
  	 *
  	 * @param theP - 镜像点。
  	 */
  	MirrorByPoint(theP: Mx3dGePoint): void;
  	/**
  	 * 返回镜像平面对象（通过指定点）。
  	 *
  	 * @param theP - 镜像点。
  	 * @returns 镜像后的平面对象。
  	 */
  	MirroredByPoint(theP: Mx3dGePoint): Mx3dGePlane;
  	/**
  	 * 将平面通过指定轴进行镜像。
  	 *
  	 * @param theA1 - 镜像轴向。
  	 */
  	MirrorByAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 返回镜像平面对象（通过指定轴）。
  	 *
  	 * @param theA1 - 镜像轴向。
  	 * @returns 镜像后的平面对象。
  	 */
  	MirroredByAxis(theA1: Mx3dGeAxis): Mx3dGePlane;
  	/**
  	 * 将平面通过指定坐标系进行镜像。
  	 *
  	 * @param theA2 - 镜像坐标系。
  	 */
  	MirrorByCSYSR(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 返回镜像平面对象（通过指定坐标系）。
  	 *
  	 * @param theA2 - 镜像坐标系。
  	 * @returns 镜像后的平面对象。
  	 */
  	MirroredByCSYSR(theA2: Mx3dGeCSYSR): Mx3dGePlane;
  	/**
  	 * 将平面绕指定轴旋转。
  	 *
  	 * @param theA1 - 旋转轴向。
  	 * @param theAng - 旋转角度。
  	 */
  	Rotate(theA1: Mx3dGeAxis, theAng: number): void;
  	/**
  	 * 返回旋转后的平面对象。
  	 *
  	 * @param theA1 - 旋转轴向。
  	 * @param theAng - 旋转角度。
  	 * @returns 旋转后的平面对象。
  	 */
  	Rotated(theA1: Mx3dGeAxis, theAng: number): Mx3dGePlane;
  	/**
  	 * 将平面缩放到指定点和比例。
  	 *
  	 * @param theP - 缩放点。
  	 * @param theS - 缩放比例。
  	 */
  	Scale(theP: Mx3dGePoint, theS: number): void;
  	/**
  	 * 返回缩放后的平面对象。
  	 *
  	 * @param theP - 缩放点。
  	 * @param theS - 缩放比例。
  	 * @returns 缩放后的平面对象。
  	 */
  	Scaled(theP: Mx3dGePoint, theS: number): Mx3dGePlane;
  	/**
  	 * 对平面应用变换。
  	 *
  	 * @param theT - 变换矩阵。
  	 */
  	Transform(theT: Mx3dGeTrsf): void;
  	/**
  	 * 返回变换后的平面对象。
  	 *
  	 * @param theT - 变换矩阵。
  	 * @returns 变换后的平面对象。
  	 */
  	Transformed(theT: Mx3dGeTrsf): Mx3dGePlane;
  	/**
  	 * 将平面沿指定向量平移。
  	 *
  	 * @param theV - 平移向量。
  	 */
  	TranslateByVec(theV: Mx3dGeVec): void;
  	/**
  	 * 返回平移后的平面对象。
  	 *
  	 * @param theV - 平移向量。
  	 * @returns 平移后的平面对象。
  	 */
  	TranslatedByVec(theV: Mx3dGeVec): Mx3dGePlane;
  	/**
  	 * 将平面通过两点平移。
  	 *
  	 * @param theP1 - 第一个点。
  	 * @param theP2 - 第二个点。
  	 */
  	TranslateBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): void;
  	/**
  	 * 返回通过两点平移后的平面对象。
  	 *
  	 * @param theP1 - 第一个点。
  	 * @param theP2 - 第二个点。
  	 * @returns 平移后的平面对象。
  	 */
  	TranslatedBy2Points(theP1: Mx3dGePoint, theP2: Mx3dGePoint): Mx3dGePlane;
  	/**
  	 * 获取平面的拓扑形状。
  	 *
  	 * @returns 平面形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取平面在指定范围内的拓扑形状。
  	 *
  	 * @param UMin - U方向的最小值。
  	 * @param UMax - U方向的最大值。
  	 * @param VMin - V方向的最小值。
  	 * @param VMax - V方向的最大值。
  	 * @returns 平面形状对象。
  	 */
  	Shape(UMin: number, UMax: number, VMin: number, VMax: number): Mx3dShapeObject;
  }
  /**
   * 表示一个文字符号，继承自 Mx3dSymbolObject
   */
  export  class Mx3dSymbolText extends Mx3dSymbolObject {
  	/**
  	 * 创建一个默认的文字符号对象。
  	 */
  	constructor();
  	/**
  	 * 使用文本、高度和位置创建一个文字符号对象。
  	 * @param text 文本内容。
  	 * @param height 文本高度。
  	 * @param position 文本位置。
  	 */
  	constructor(text: string, height: number, position: Mx3dGePoint);
  	/**
  	 * 设置文本颜色。
  	 * @param theColor 颜色对象。
  	 */
  	SetColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 设置文本颜色。
  	 * @param theR 红色分量。
  	 * @param theG 绿色分量。
  	 * @param theB 蓝色分量。
  	 */
  	SetColor(theR: number, theG: number, theB: number): void;
  	/**
  	 * 设置文本内容。
  	 * @param text 文本内容。
  	 */
  	SetText(text: string): void;
  	/**
  	 * 设置文本位置。
  	 * @param position 文本位置。
  	 */
  	SetPositon(position: Mx3dGePoint): void;
  	/**
  	 * 设置水平对齐方式。
  	 * @param theHJust 水平对齐方式。
  	 */
  	SetHJustification(theHJust: MdGe.MxHorizontalTextAlignment): void;
  	/**
  	 * 设置垂直对齐方式。
  	 * @param theVJust 垂直对齐方式。
  	 */
  	SetVJustification(theVJust: MdGe.MxVerticalTextAlignment): void;
  	/**
  	 * 设置文本角度。
  	 * @param theAngle 文本角度。
  	 */
  	SetAngle(theAngle: number): void;
  	/**
  	 * 设置是否可缩放。
  	 * @param theIsZoomable 是否可缩放。
  	 */
  	SetZoomable(theIsZoomable: boolean): void;
  	/**
  	 * 设置文本高度。
  	 * @param height 文本高度。
  	 */
  	SetHeight(height: number): void;
  	/**
  	 * 设置字体样式。
  	 * @param theFontAspect 字体样式。
  	 */
  	SetFontAspect(theFontAspect: MdGe.MxFontAspect): void;
  	/**
  	 * 设置字体。
  	 * @param theFont 字体名称。
  	 */
  	SetFont(theFont: string): void;
  	/**
  	 * 设置3D方向。
  	 * @param theOrientation 3D方向。
  	 */
  	SetOrientation3D(theOrientation: Mx3dGeCSYSR): void;
  	/**
  	 * 取消3D方向设置。
  	 */
  	UnsetOrientation3D(): void;
  	/**
  	 * 获取文本位置。
  	 * @returns 文本位置。
  	 */
  	Position(): Mx3dGePoint;
  	/**
  	 * 获取字体样式。
  	 * @returns 字体外观样式。
  	 */
  	FontAspect(): MdGe.MxFontAspect;
  	/**
  	 * 获取3D方向。
  	 * @returns 3D方向。
  	 */
  	Orientation3D(): Mx3dGeCSYSR;
  	/**
  	 * 检查是否有3D方向。
  	 * @returns 是否有3D方向。
  	 */
  	HasOrientation3D(): boolean;
  	/**
  	 * 设置是否翻转。
  	 * @param theIsFlipping 是否翻转。
  	 */
  	SetFlipping(theIsFlipping: boolean): void;
  	/**
  	 * 检查是否翻转。
  	 * @returns 是否翻转。
  	 */
  	HasFlipping(): boolean;
  	/**
  	 * 检查是否有自定义锚点。
  	 * @returns 是否有自定义锚点。
  	 */
  	HasOwnAnchorPoint(): boolean;
  	/**
  	 * 设置是否有自定义锚点。
  	 * @param theOwnAnchorPoint 是否有自定义锚点。
  	 */
  	SetOwnAnchorPoint(theOwnAnchorPoint: boolean): void;
  	/**
  	 * 设置显示类型。
  	 * @param theDisplayType 显示类型。
  	 */
  	SetDisplayType(theDisplayType: MdGe.MxTypeOfDisplayText): void;
  	/**
  	 * 设置副标题颜色。
  	 * @param theR 红色分量。
  	 * @param theG 绿色分量。
  	 * @param theB 蓝色分量。
  	 */
  	SetColorSubTitle(theR: number, theG: number, theB: number): void;
  }
  /**
   * 形状对象的向下类型转换接口
   */
  export  class Mx3dShapeDownCast {
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeVertex 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeVertex)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Vertex(S: Mx3dShapeObject): Mx3dShapeVertex;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeEdge 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeEdge)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Edge(S: Mx3dShapeObject): Mx3dShapeEdge;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeWire 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeWire)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Wire(S: Mx3dShapeObject): Mx3dShapeWire;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeFace 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeFace)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Face(S: Mx3dShapeObject): Mx3dShapeFace;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeShell 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeShell)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Shell(S: Mx3dShapeObject): Mx3dShapeShell;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeSolid)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Solid(S: Mx3dShapeObject): Mx3dShapeSolid;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeCompSolid 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompSolid)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static CompSolid(S: Mx3dShapeObject): Mx3dShapeCompSolid;
  	/**
  	 * 将 Mx3dShapeObject 对象转换为 Mx3dShapeCompound 对象(Mx3dShapeObject 的实际类型需要是 Mx3dShapeCompound)
  	 * @param S 需要转换的形状对象
  	 * @returns 转换后的子类形状对象
  	 */
  	static Compound(S: Mx3dShapeObject): Mx3dShapeCompound;
  }
  /**
   * 拓扑转换为参数几何的接口
   */
  export  class Mx3dBrepCastGeom {
  	/**
  	 * 将拓扑面转换为参数几何曲面
  	 * @param F 拓扑面
  	 * @returns 参数几何曲面
  	 */
  	static Surface(F: Mx3dShapeFace): Mx3dGeomSurface;
  	/**
  	 * 将拓扑边Edge转换为参数几何曲线
  	 * @param E 拓扑Edge
  	 * @param SEParam 返回转换后曲线的起始参数
  	 * @returns 参数几何曲线
  	 */
  	static Curve(E: Mx3dShapeEdge, SEParam: [
  		FirstParam: number,
  		LastParam: number
  	]): Mx3dGeomCurve;
  }
  /**
   * 工具类
   */
  export  class Mx3dUtils {
  	/**
  	 * 从URL地址加载文件到虚拟文件系统
  	 * @param theFileUrl 资源URL地址
  	 * @param theSaveFileName 文件在虚拟文件系统的完整路径
  	 * @returns 成功后返回文件在虚拟文件系统中的绝对路径
  	 */
  	static LoadFileFromUrl(theFileUrl: string, theSaveFileName: string): Promise<string>;
  	/**
  	 * 从虚拟文件系统中读取模型文件，返回模型文件中的形状
  	 * @param theFilePath 模型文件的完整路径
  	 * @param theFormat 模型文件的格式
  	 * @returns 模型文件中读取到的形状
  	 */
  	static LoadShapeFromFile(theFilePath: string, theFormat: MdGe.MxFormat): Mx3dShapeObject[];
  	static LoadLocalFile(theFile: File, theFilePath: string): Promise<string>;
  }
  /**
   * 表示非参数几何直线的类。
   */
  export  class Mx3dGeLine extends Mx3dGeCurve {
  	/**
  	 * 使用轴创建一条直线。
  	 * @param A1 轴对象。
  	 */
  	constructor(A1: Mx3dGeAxis);
  	/**
  	 * 使用点和方向创建一条直线。
  	 * @param P 起点。
  	 * @param V 方向。
  	 */
  	constructor(P: Mx3dGePoint, V: Mx3dGeDir);
  	/**
  	 * 设置直线的方向。
  	 * @param V 方向对象。
  	 */
  	SetDirection(V: Mx3dGeDir): void;
  	/**
  	 * 设置直线的起点。
  	 * @param P 点对象。
  	 */
  	SetLocation(P: Mx3dGePoint): void;
  	/**
  	 * 设置直线的位置。
  	 * @param A1 轴对象。
  	 */
  	SetPosition(A1: Mx3dGeAxis): void;
  	/**
  	 * 获取直线的位置。
  	 * @returns 轴对象。
  	 */
  	Position(): Mx3dGeAxis;
  	/**
  	 * 反转直线的方向。
  	 */
  	Reverse(): void;
  	/**
  	 * 获取反转方向后的新直线。
  	 * @returns 反转后的新直线对象。
  	 */
  	Reversed(): Mx3dGeLine;
  	/**
  	 * 获取反转参数。
  	 * @param U 原参数。
  	 * @returns 反转后的参数。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取直线的起始参数。
  	 * @returns 起始参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取直线的终止参数。
  	 * @returns 终止参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查直线是否闭合。
  	 * @returns 是否闭合。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查直线是否是周期性的。
  	 * @returns 是否周期性。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取直线的连续性。
  	 * @returns 连续性枚举值。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 检查直线的连续性等级。
  	 * @param N 连续性等级。
  	 * @returns 是否达到指定连续性等级。
  	 */
  	IsCN(N: number): boolean;
  	/**
  	 * 获取给定参数的点。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取给定参数的点和一阶导数向量。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取给定参数的点、一阶导数向量和二阶导数向量。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取给定参数的点、一阶导数向量、二阶导数向量和三阶导数向量。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取给定参数的N阶导数向量。
  	 * @param U 参数值。
  	 * @param N 导数阶数。
  	 * @returns N阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对直线应用变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 获取变换后的参数。
  	 * @param U 原参数。
  	 * @param T 变换对象。
  	 * @returns 变换后的参数。
  	 */
  	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
  	/**
  	 * 获取参数变换的结果。
  	 * @param T 变换对象。
  	 * @returns 参数变换结果。
  	 */
  	ParametricTransformation(T: Mx3dGeTrsf): number;
  	/**
  	 * 获取直线的周期。
  	 * @returns 周期。
  	 */
  	Period(): number;
  	/**
  	 * 获取给定参数对应的点。
  	 * @param U 参数值。
  	 * @returns 点对象。
  	 */
  	Value(U: number): Mx3dGePoint;
  	/**
  	 * 获取指定参数区间内的边界。
  	 * @param p1 起始参数。
  	 * @param p2 终止参数。
  	 * @returns 边界对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  }
  export interface Mx3dGeomObject {
  	DynCast(theObject: Mx3dGeomObject): this;
  }
  /**
   * 表示参数几何对象的基类。
   */
  export  class Mx3dGeomObject extends Mx3dBaseObject {
  	constructor(p?: object);
  	/**
  	 * 通过点对几何对象进行镜像变换。
  	 * @param P 点对象。
  	 */
  	MirrorByPoint(P: Mx3dGePoint): void;
  	/**
  	 * 通过轴对几何对象进行镜像变换。
  	 * @param A1 轴对象。
  	 */
  	MirrorByAxis(A1: Mx3dGeAxis): void;
  	/**
  	 * 通过右手坐标系对几何对象进行镜像变换。
  	 * @param A2 右手坐标系对象。
  	 */
  	MirrorByCSYSR(A2: Mx3dGeCSYSR): void;
  	/**
  	 * 旋转几何对象。
  	 * @param A1 轴对象。
  	 * @param Ang 旋转角度。
  	 */
  	Rotate(A1: Mx3dGeAxis, Ang: number): void;
  	/**
  	 * 缩放几何对象。
  	 * @param P 点对象。
  	 * @param S 缩放比例。
  	 */
  	Scale(P: Mx3dGePoint, S: number): void;
  	/**
  	 * 通过向量平移几何对象。
  	 * @param V 向量对象。
  	 */
  	TranslateByVec(V: Mx3dGeVec): void;
  	/**
  	 * 通过两个点平移几何对象。
  	 * @param P1 起始点对象。
  	 * @param P2 终止点对象。
  	 */
  	TranslateBy2Points(P1: Mx3dGePoint, P2: Mx3dGePoint): void;
  	/**
  	 * 返回通过点镜像变换后的新几何对象。
  	 * @param P 点对象。
  	 * @returns 新的几何对象。
  	 */
  	MirroredByPoint(P: Mx3dGePoint): this;
  	/**
  	 * 返回通过轴镜像变换后的新几何对象。
  	 * @param A1 轴对象。
  	 * @returns 新的几何对象。
  	 */
  	MirroredByAxis(A1: Mx3dGeAxis): this;
  	/**
  	 * 返回通过右手坐标系镜像变换后的新几何对象。
  	 * @param A2 右手坐标系对象。
  	 * @returns 新的几何对象。
  	 */
  	MirroredByCSYSR(A2: Mx3dGeCSYSR): this;
  	/**
  	 * 返回旋转后的新几何对象。
  	 * @param A1 轴对象。
  	 * @param Ang 旋转角度。
  	 * @returns 新的几何对象。
  	 */
  	Rotated(A1: Mx3dGeAxis, Ang: number): this;
  	/**
  	 * 返回缩放后的新几何对象。
  	 * @param P 点对象。
  	 * @param S 缩放比例。
  	 * @returns 新的几何对象。
  	 */
  	Scaled(P: Mx3dGePoint, S: number): this;
  	/**
  	 * 返回变换后的新几何对象。
  	 * @param T 变换对象。
  	 * @returns 新的几何对象。
  	 */
  	Transformed(T: Mx3dGeTrsf): this;
  	/**
  	 * 返回通过向量平移后的新几何对象。
  	 * @param V 向量对象。
  	 * @returns 新的几何对象。
  	 */
  	TranslatedByVec(V: Mx3dGeVec): this;
  	/**
  	 * 返回通过两个点平移后的新几何对象。
  	 * @param P1 起始点对象。
  	 * @param P2 终止点对象。
  	 * @returns 新的几何对象。
  	 */
  	TranslatedBy2Points(P1: Mx3dGePoint, P2: Mx3dGePoint): this;
  }
  /**
   * 表示几何曲线的类，继承自 Mx3dGeomObject。
   */
  export  class Mx3dGeomCurve extends Mx3dGeomObject {
  	constructor(p?: object);
  	/**
  	 * 返回反向后的新几何曲线对象。
  	 * @returns 新的几何曲线对象。
  	 */
  	Reversed(): this;
  	/**
  	 * 返回曲线的周期。
  	 * @returns 曲线的周期。
  	 */
  	Period(): number;
  	/**
  	 * 返回给定参数 U 处的点。
  	 * @param U 参数值。
  	 * @returns 给定参数处的点对象。
  	 */
  	Value(U: number): Mx3dGePoint;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示几何二次曲线(圆锥曲线)的类，继承自 Mx3dGeomCurve。
   */
  export  class Mx3dGeomConic extends Mx3dGeomCurve {
  	constructor(p?: object);
  	/**
  	 * 设置二次曲线的轴。
  	 * @param theA1 轴对象。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置二次曲线的位置。
  	 * @param theP 点对象。
  	 */
  	SetLocation(theP: Mx3dGePoint): void;
  	/**
  	 * 设置二次曲线的右手坐标系。
  	 * @param theA2 右手坐标系对象。
  	 */
  	SetPosition(theA2: Mx3dGeCSYSR): void;
  	/**
  	 * 获取二次曲线的轴。
  	 * @returns 轴对象。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取二次曲线的位置。
  	 * @returns 点对象。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取二次曲线的右手坐标系。
  	 * @returns 右手坐标系对象。
  	 */
  	Position(): Mx3dGeCSYSR;
  	/**
  	 * 获取二次曲线的 X 轴。
  	 * @returns X 轴对象。
  	 */
  	XAxis(): Mx3dGeAxis;
  	/**
  	 * 获取二次曲线的 Y 轴。
  	 * @returns Y 轴对象。
  	 */
  	YAxis(): Mx3dGeAxis;
  	/**
  	 * 反转二次曲线的方向。
  	 */
  	Reverse(): void;
  	/**
  	 * 获取二次曲线的连续性。
  	 * @returns 连续性枚举值。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 检查二次曲线是否具有指定阶数的连续性。
  	 * @param N 阶数。
  	 * @returns 如果具有指定阶数的连续性，则返回 true，否则返回 false。
  	 */
  	IsCN(N: number): boolean;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示参数几何圆的类，继承自 Mx3dGeomConic。
   */
  export  class Mx3dGeomCircle extends Mx3dGeomConic {
  	/**
  	 * 构造函数，接受坐标系和半径参数。
  	 * @param theCSYSR 坐标系对象。
  	 * @param theRadius 圆的半径。
  	 */
  	constructor(theCSYSR: Mx3dGeCSYSR, theRadius: number);
  	/**
  	 * 设置圆的半径。
  	 * @param R 半径。
  	 */
  	SetRadius(R: number): void;
  	/**
  	 * 获取圆的半径。
  	 * @returns 圆的半径。
  	 */
  	Radius(): number;
  	/**
  	 * 获取反向参数。
  	 * @param U 参数值。
  	 * @returns 反向参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取圆的离心率。
  	 * @returns 离心率。
  	 */
  	Eccentricity(): number;
  	/**
  	 * 获取圆的第一个参数。
  	 * @returns 第一个参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取圆的最后一个参数。
  	 * @returns 最后一个参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查圆是否闭合。
  	 * @returns 如果圆是闭合的，返回 true；否则返回 false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查圆是否周期性。
  	 * @returns 如果圆是周期性的，返回 true；否则返回 false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取参数 U 处的点坐标。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取参数 U 处的一阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的二阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的三阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的 N 阶导数。
  	 * @param U 参数值。
  	 * @param N 阶数。
  	 * @returns N 阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对圆进行变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 复制圆对象。
  	 * @returns 复制的圆对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取圆的边。
  	 * @param p1 第一个参数。
  	 * @param p2 第二个参数。
  	 * @returns 圆的边对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取圆的线。
  	 * @returns 圆的线对象。
  	 */
  	Wire(): Mx3dShapeWire;
  	/**
  	 * 获取圆的偏移曲线。
  	 * @param Offset 偏移值。
  	 * @param V 方向向量。
  	 * @param isNotCheckC0 是否不检查 C0 连续性。
  	 * @returns 圆的偏移曲线。
  	 */
  	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * 三点画圆弧
  	 * @param thePt1 第一个点
  	 * @param thePt2 第二个点
  	 * @param thePt3 第三个点
  	 * @returns 圆弧曲线
  	 */
  	static MakeArcOfCircle(thePt1: UniPoint, thePt2: UniPoint, thePt3: UniPoint): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomCircle 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomCircle 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomCircle;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示几何直线的类，继承自 Mx3dGeomCurve。
   */
  export  class Mx3dGeomLine extends Mx3dGeomCurve {
  	/**
  	 * 构造函数，接受一个轴作为参数。
  	 * @param A1 轴对象。
  	 */
  	constructor(A1: Mx3dGeAxis);
  	/**
  	 * 构造函数，接受一个点和一个方向作为参数。
  	 * @param P 点对象。
  	 * @param V 方向对象。
  	 */
  	constructor(P: Mx3dGePoint, V: Mx3dGeDir);
  	/**
  	 * 设置直线的方向。
  	 * @param V 方向对象。
  	 */
  	SetDirection(V: Mx3dGeDir): void;
  	/**
  	 * 设置直线的位置。
  	 * @param P 点对象。
  	 */
  	SetLocation(P: Mx3dGePoint): void;
  	/**
  	 * 设置直线的位置。
  	 * @param A1 轴对象。
  	 */
  	SetPosition(A1: Mx3dGeAxis): void;
  	/**
  	 * 获取直线的位置。
  	 * @returns 轴对象。
  	 */
  	Position(): Mx3dGeAxis;
  	/**
  	 * 反转直线的方向。
  	 */
  	Reverse(): void;
  	/**
  	 * 获取反向参数。
  	 * @param U 参数值。
  	 * @returns 反向参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取直线的第一个参数。
  	 * @returns 第一个参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取直线的最后一个参数。
  	 * @returns 最后一个参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查直线是否闭合。
  	 * @returns 如果直线是闭合的，返回 true；否则返回 false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查直线是否周期性。
  	 * @returns 如果直线是周期性的，返回 true；否则返回 false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取直线的连续性。
  	 * @returns 连续性枚举值。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 检查直线是否是 C^N 连续的。
  	 * @param N 阶数。
  	 * @returns 如果直线是 C^N 连续的，返回 true；否则返回 false。
  	 */
  	IsCN(N: number): boolean;
  	/**
  	 * 获取参数 U 处的点坐标。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取参数 U 处的一阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的二阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的三阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的 N 阶导数。
  	 * @param U 参数值。
  	 * @param N 阶数。
  	 * @returns N 阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对直线进行变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 获取变换后的参数。
  	 * @param U 参数值。
  	 * @param T 变换对象。
  	 * @returns 变换后的参数值。
  	 */
  	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
  	/**
  	 * 获取参数变换。
  	 * @param T 变换对象。
  	 * @returns 参数变换值。
  	 */
  	ParametricTransformation(T: Mx3dGeTrsf): number;
  	/**
  	 * 复制直线对象。
  	 * @returns 复制的直线对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取直线的边形状对象。
  	 * @param p1 第一个参数。
  	 * @param p2 第二个参数。
  	 * @returns 直线的边形状对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取直线的偏移曲线。
  	 * @param Offset 偏移值。
  	 * @param V 方向向量，与偏移方向垂直。
  	 * @param isNotCheckC0 是否不检查 C0 连续性。
  	 * @returns 直线的偏移曲线。
  	 */
  	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomLine 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomLine 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomLine;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示参数几何椭圆的类，继承自 Mx3dGeomConic。
   */
  export  class Mx3dGeomEllipse extends Mx3dGeomConic {
  	/**
  	 * 构造函数，接受一个坐标系、长轴半径和短轴半径作为参数。
  	 * @param A2 坐标系对象。
  	 * @param MajorRadius 长轴半径。
  	 * @param MinorRadius 短轴半径。
  	 */
  	constructor(A2: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
  	/**
  	 * 设置长轴半径。
  	 * @param MajorRadius 长轴半径。
  	 */
  	SetMajorRadius(MajorRadius: number): void;
  	/**
  	 * 设置短轴半径。
  	 * @param MinorRadius 短轴半径。
  	 */
  	SetMinorRadius(MinorRadius: number): void;
  	/**
  	 * 获取反向参数。
  	 * @param U 参数值。
  	 * @returns 反向参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取第一个准线。
  	 * @returns 准线对象。
  	 */
  	Directrix1(): Mx3dGeAxis;
  	/**
  	 * 获取第二个准线。
  	 * @returns 准线对象。
  	 */
  	Directrix2(): Mx3dGeAxis;
  	/**
  	 * 获取离心率。
  	 * @returns 离心率值。
  	 */
  	Eccentricity(): number;
  	/**
  	 * 获取焦距。
  	 * @returns 焦距值。
  	 */
  	Focal(): number;
  	/**
  	 * 获取第一个焦点。
  	 * @returns 第一个焦点对象。
  	 */
  	Focus1(): Mx3dGePoint;
  	/**
  	 * 获取第二个焦点。
  	 * @returns 第二个焦点对象。
  	 */
  	Focus2(): Mx3dGePoint;
  	/**
  	 * 获取长轴半径。
  	 * @returns 长轴半径值。
  	 */
  	MajorRadius(): number;
  	/**
  	 * 获取短轴半径。
  	 * @returns 短轴半径值。
  	 */
  	MinorRadius(): number;
  	/**
  	 * 获取参数。
  	 * @returns 参数值。
  	 */
  	Parameter(): number;
  	/**
  	 * 获取椭圆的第一个参数。
  	 * @returns 第一个参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取椭圆的最后一个参数。
  	 * @returns 最后一个参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查椭圆是否闭合。
  	 * @returns 如果椭圆是闭合的，返回 true；否则返回 false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查椭圆是否周期性。
  	 * @returns 如果椭圆是周期性的，返回 true；否则返回 false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取参数 U 处的点坐标。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取参数 U 处的一阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的二阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的三阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的 N 阶导数。
  	 * @param U 参数值。
  	 * @param N 阶数。
  	 * @returns N 阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对椭圆进行变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 复制椭圆对象。
  	 * @returns 复制的椭圆对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取椭圆的边形状对象。
  	 * @param p1 第一个参数。
  	 * @param p2 第二个参数。
  	 * @returns 椭圆的边形状对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取椭圆的Wire形状对象。
  	 * @returns 椭圆的Wire形状对象。
  	 */
  	Wire(): Mx3dShapeWire;
  	/**
  	 * 获取椭圆的偏移曲线。
  	 * @param Offset 偏移值。
  	 * @param V 方向向量，与偏移方向垂直。
  	 * @param isNotCheckC0 是否不检查 C0 连续性。
  	 * @returns 椭圆的偏移曲线。
  	 */
  	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomEllipse 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomEllipse 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomEllipse;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示参数几何双曲线的类，继承自 Mx3dGeomConic。
   */
  export  class Mx3dGeomHyperbola extends Mx3dGeomConic {
  	/**
  	 * 构造函数，接受一个坐标系、长轴半径和短轴半径作为参数。
  	 * @param A2 坐标系对象。
  	 * @param MajorRadius 长轴半径。
  	 * @param MinorRadius 短轴半径。
  	 */
  	constructor(A2: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
  	/**
  	 * 设置长轴半径。
  	 * @param MajorRadius 长轴半径。
  	 */
  	SetMajorRadius(MajorRadius: number): void;
  	/**
  	 * 设置短轴半径。
  	 * @param MinorRadius 短轴半径。
  	 */
  	SetMinorRadius(MinorRadius: number): void;
  	/**
  	 * 获取反向参数。
  	 * @param U 参数值。
  	 * @returns 反向参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取双曲线的第一个参数。
  	 * @returns 第一个参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取双曲线的最后一个参数。
  	 * @returns 最后一个参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查双曲线是否闭合。
  	 * @returns 如果双曲线是闭合的，返回 true；否则返回 false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查双曲线是否周期性。
  	 * @returns 如果双曲线是周期性的，返回 true；否则返回 false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取第一个渐近线。
  	 * @returns 渐近线对象。
  	 */
  	Asymptote1(): Mx3dGeAxis;
  	/**
  	 * 获取第二个渐近线。
  	 * @returns 渐近线对象。
  	 */
  	Asymptote2(): Mx3dGeAxis;
  	/**
  	 * 获取第一个共轭支。
  	 * @returns 第一个共轭支对象。
  	 */
  	ConjugateBranch1(): Mx3dGeomHyperbola;
  	/**
  	 * 获取第二个共轭支。
  	 * @returns 第二个共轭支对象。
  	 */
  	ConjugateBranch2(): Mx3dGeomHyperbola;
  	/**
  	 * 获取第一个准线。
  	 * @returns 准线对象。
  	 */
  	Directrix1(): Mx3dGeAxis;
  	/**
  	 * 获取第二个准线。
  	 * @returns 准线对象。
  	 */
  	Directrix2(): Mx3dGeAxis;
  	/**
  	 * 获取离心率。
  	 * @returns 离心率值。
  	 */
  	Eccentricity(): number;
  	/**
  	 * 获取焦距。
  	 * @returns 焦距值。
  	 */
  	Focal(): number;
  	/**
  	 * 获取第一个焦点。
  	 * @returns 第一个焦点对象。
  	 */
  	Focus1(): Mx3dGePoint;
  	/**
  	 * 获取第二个焦点。
  	 * @returns 第二个焦点对象。
  	 */
  	Focus2(): Mx3dGePoint;
  	/**
  	 * 获取长轴半径。
  	 * @returns 长轴半径值。
  	 */
  	MajorRadius(): number;
  	/**
  	 * 获取短轴半径。
  	 * @returns 短轴半径值。
  	 */
  	MinorRadius(): number;
  	/**
  	 * 获取另一支双曲线。
  	 * @returns 另一支双曲线对象。
  	 */
  	OtherBranch(): Mx3dGeomHyperbola;
  	/**
  	 * 获取参数。
  	 * @returns 参数值。
  	 */
  	Parameter(): number;
  	/**
  	 * 获取参数 U 处的点坐标。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取参数 U 处的一阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的二阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的三阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的 N 阶导数。
  	 * @param U 参数值。
  	 * @param N 阶数。
  	 * @returns N 阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对双曲线进行变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 复制双曲线对象。
  	 * @returns 复制的双曲线对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取双曲线的边。
  	 * @param p1 第一个参数。
  	 * @param p2 第二个参数。
  	 * @returns 双曲线的边对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取双曲线的偏移曲线。
  	 * @param Offset 偏移量。
  	 * @param V 方向向量，与偏移方向垂直。
  	 * @param isNotCheckC0 是否检查 C0 连续性。
  	 * @returns 偏移曲线的边对象。
  	 */
  	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomHyperbola 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomHyperbola 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomHyperbola;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  export  class Mx3dGeomParabola extends Mx3dGeomConic {
  	/**
  	 * 构造函数，接受一个坐标系和焦距作为参数。
  	 * @param A2 坐标系对象。
  	 * @param Focal 焦距。
  	 */
  	constructor(A2: Mx3dGeCSYSR, Focal: number);
  	/**
  	 * 设置焦距。
  	 * @param Focal 焦距。
  	 */
  	SetFocal(Focal: number): void;
  	/**
  	 * 获取反向参数。
  	 * @param U 参数值。
  	 * @returns 反向参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 获取抛物线的第一个参数。
  	 * @returns 第一个参数。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取抛物线的最后一个参数。
  	 * @returns 最后一个参数。
  	 */
  	LastParameter(): number;
  	/**
  	 * 检查抛物线是否闭合。
  	 * @returns 如果抛物线是闭合的，返回 true；否则返回 false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查抛物线是否周期性。
  	 * @returns 如果抛物线是周期性的，返回 true；否则返回 false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 获取准线。
  	 * @returns 准线所在轴对象。
  	 */
  	Directrix(): Mx3dGeAxis;
  	/**
  	 * 获取离心率。
  	 * @returns 离心率值。
  	 */
  	Eccentricity(): number;
  	/**
  	 * 获取焦点。
  	 * @returns 焦点对象。
  	 */
  	Focus(): Mx3dGePoint;
  	/**
  	 * 获取焦距。
  	 * @returns 焦距值。
  	 */
  	Focal(): number;
  	/**
  	 * 获取参数。
  	 * @returns 参数值。
  	 */
  	Parameter(): number;
  	/**
  	 * 获取参数 U 处的点坐标。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 获取参数 U 处的一阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的二阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的三阶导数。
  	 * @param U 参数值。
  	 * @param P 点对象。
  	 * @param V1 一阶导数向量。
  	 * @param V2 二阶导数向量。
  	 * @param V3 三阶导数向量。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 获取参数 U 处的 N 阶导数。
  	 * @param U 参数值。
  	 * @param N 阶数。
  	 * @returns N 阶导数向量。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 对抛物线进行变换。
  	 * @param T 变换对象。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 获取变换后的参数。
  	 * @param U 参数值。
  	 * @param T 变换对象。
  	 * @returns 变换后的参数值。
  	 */
  	TransformedParameter(U: number, T: Mx3dGeTrsf): number;
  	/**
  	 * 获取参数变换。
  	 * @param T 变换对象。
  	 * @returns 参数变换值。
  	 */
  	ParametricTransformation(T: Mx3dGeTrsf): number;
  	/**
  	 * 复制抛物线对象。
  	 * @returns 复制的抛物线对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取抛物线的边。
  	 * @param p1 第一个参数。
  	 * @param p2 第二个参数。
  	 * @returns 抛物线的边对象。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取抛物线的偏移曲线。
  	 * @param Offset 偏移量。
  	 * @param V 方向向量，与偏移方向垂直。
  	 * @param isNotCheckC0 是否检查 C0 连续性。
  	 * @returns 偏移曲线的边对象。
  	 */
  	OffsetCurve(Offset: number, V: Mx3dGeDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomParabola 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomParabola 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomParabola;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 基础几何建模基类，继承自 Mx3dBaseObject
   */
  export  class Mx3dMkObject extends Mx3dBaseObject {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  }
  /**
   * 表示建模长方体的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkBox extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受长方体的两个对角点作为参数。
  	 * @param thePnt1 第一个对角点。
  	 * @param thePnt2 第二个对角点。
  	 */
  	constructor(thePnt1: UniPoint, thePnt2: UniPoint);
  	/**
  	 * 构造函数，以世界坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。
  	 * @param theDX 第二个角点X方向分量。
  	 * @param theDY 第二个角点Y方向分量。
  	 * @param theDZ 第二个角点Z方向分量。
  	 */
  	constructor(theDX: number, theDY: number, theDZ: number);
  	/**
  	 * 构造函数，以 theAxes 坐标系的(0, 0, 0)点作为第一个角点，接受三个数值(theDX, theDY, theDZ)作为第二个角点参数。
  	 * @param theAxes 坐标系对象。
  	 * @param theDX 第二个角点X方向分量。
  	 * @param theDY 第二个角点Y方向分量。
  	 * @param theDZ 第二个角点Z方向分量。
  	 */
  	constructor(theAxes: Mx3dGeCSYSR, theDX: number, theDY: number, theDZ: number);
  	/**
  	 * 执行长方体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取长方体的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取长方体的拓扑外壳形状。
  	 * @returns 拓扑壳形状。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取长方体的拓扑实体形状。
  	 * @returns 拓扑实体形状。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 获取长方体的底面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	BottomFace(): Mx3dShapeFace;
  	/**
  	 * 获取长方体的背面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	BackFace(): Mx3dShapeFace;
  	/**
  	 * 获取长方体的前面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	FrontFace(): Mx3dShapeFace;
  	/**
  	 * 获取长方体的左面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	LeftFace(): Mx3dShapeFace;
  	/**
  	 * 获取长方体的右面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	RightFace(): Mx3dShapeFace;
  	/**
  	 * 获取长方体的顶面拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	TopFace(): Mx3dShapeFace;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模圆锥的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkCone extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受圆锥的坐标系、底面半径、顶面半径、高度，以及可选的角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R1 底面半径。
  	 * @param R2 顶面半径。
  	 * @param H 高度。
  	 * @param angle （可选）角度。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, H: number, angle?: number);
  	/**
  	 * 执行圆锥的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取圆锥的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取圆锥的拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	Face(): Mx3dShapeFace;
  	/**
  	 * 获取圆锥的拓扑外壳形状。
  	 * @returns 拓扑壳形状。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取圆锥的拓扑实体形状。
  	 * @returns 拓扑实体形状。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模圆柱的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkCylinder extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受圆柱的坐标系、半径、高度，以及可选的角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R 半径。
  	 * @param H 高度。
  	 * @param Angle （可选）角度。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R: number, H: number, Angle?: number);
  	/**
  	 * 执行圆柱的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取圆柱的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取圆柱的拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	Face(): Mx3dShapeFace;
  	/**
  	 * 获取圆柱的拓扑外壳形状。
  	 * @returns 拓扑壳形状。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取圆柱的拓扑实体形状。
  	 * @returns 拓扑实体形状。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示旋转体建模的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkRevol extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受一个形状对象、旋转轴和可选的旋转角度参数。
  	 * @param S 形状对象。
  	 * @param A 旋转轴。
  	 * @param D （可选）旋转角度。
  	 */
  	constructor(S: Mx3dShapeObject, A: Mx3dGeAxis, D?: number);
  	/**
  	 * 执行旋转体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取旋转体的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模球体的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkSphere extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受坐标系对象和球体半径作为参数。
  	 * @param Axes 坐标系对象。
  	 * @param R 球体半径。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R: number);
  	/**
  	 * 构造函数，接受坐标系对象、球体半径和一个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R 球体半径。
  	 * @param angle 角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R: number, angle: number);
  	/**
  	 * 构造函数，接受坐标系对象、球体半径和两个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R 球体半径。
  	 * @param angle1 第一个角度参数。
  	 * @param angle2 第二个角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R: number, angle1: number, angle2: number);
  	/**
  	 * 构造函数，接受坐标系对象、球体半径和三个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R 球体半径。
  	 * @param angle1 第一个角度参数。
  	 * @param angle2 第二个角度参数。
  	 * @param angle3 第三个角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R: number, angle1: number, angle2: number, angle3: number);
  	/**
  	 * 执行球体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取球体的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取球体的拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	Face(): Mx3dShapeFace;
  	/**
  	 * 获取球体的拓扑外壳形状。
  	 * @returns 拓扑壳形状。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取球体的拓扑实体形状。
  	 * @returns 拓扑实体形状。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模圆环体的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkTorus extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受坐标系对象、圆环体主半径和次半径作为参数。
  	 * @param Axes 坐标系对象。
  	 * @param R1 圆环体主半径。
  	 * @param R2 圆环体次半径。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number);
  	/**
  	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和一个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R1 圆环体主半径。
  	 * @param R2 圆环体次半径。
  	 * @param angle 角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle: number);
  	/**
  	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和两个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R1 圆环体主半径。
  	 * @param R2 圆环体次半径。
  	 * @param angle1 第一个角度参数。
  	 * @param angle2 第二个角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number);
  	/**
  	 * 构造函数，接受坐标系对象、圆环体主半径、次半径和三个角度参数。
  	 * @param Axes 坐标系对象。
  	 * @param R1 圆环体主半径。
  	 * @param R2 圆环体次半径。
  	 * @param angle1 第一个角度参数。
  	 * @param angle2 第二个角度参数。
  	 * @param angle3 第三个角度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, R1: number, R2: number, angle1: number, angle2: number, angle: number);
  	/**
  	 * 执行圆环体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取圆环体的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取圆环体的拓扑面形状。
  	 * @returns 拓扑面形状。
  	 */
  	Face(): Mx3dShapeFace;
  	/**
  	 * 获取圆环体的拓扑外壳形状。
  	 * @returns 拓扑壳形状。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取圆环体的拓扑实体形状。
  	 * @returns 拓扑实体形状。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模路径扫掠体的类，继承自 Mx3dMkObject
   */
  export  class Mx3dMkPipe extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受一条路径和一个截面形状来创建扫掠体。
  	 * @param Spine 路径线。
  	 * @param Profile 截面形状。
  	 */
  	constructor(Spine: Mx3dShapeWire, Profile: Mx3dShapeObject);
  	/**
  	 * 构造函数，接受一条路径、一个截面形状、一个模式和一个布尔值来创建扫掠体。
  	 * @param Spine 路径线。
  	 * @param Profile 截面形状。
  	 * @param aMode 模式。
  	 * @param ForceApproxC1 强制近似C1连续性。
  	 */
  	constructor(Spine: Mx3dShapeWire, Profile: Mx3dShapeObject, aMode: MdGe.MxGFTrihedron, ForceApproxC1: boolean);
  	/**
  	 * 执行路径扫掠体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取路径扫掠体的拓扑形状。
  	 * @returns 拓扑形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   *
   */
  export  class Mx3dMkPipeShell extends Mx3dMkObject {
  	constructor(Spine: Mx3dShapeWire);
  	SetTransitionMode(Mode: MdGe.MxTransitionMode): void;
  	Add(Profile: Mx3dShapeObject): void;
  	Build(): void;
  	MakeSolid(): boolean;
  	Shape(): Mx3dShapeObject;
  	IsDone(): boolean;
  }
  /**
   * 表示建模拉伸扫掠体的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkPrism extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受一个拓扑形状和一个向量来创建拉伸扫掠体。
  	 * @param S 拓扑形状对象。
  	 * @param V 拉伸方向向量。
  	 */
  	constructor(S: Mx3dShapeObject, V: Mx3dGeVec);
  	/**
  	 * 构造函数，接受一个拓扑形状和一个方向来创建拉伸扫掠体。
  	 * @param S 拓扑形状对象。
  	 * @param D 拉伸方向。
  	 */
  	constructor(S: Mx3dShapeObject, D: Mx3dGeDir);
  	/**
  	 * 执行拉伸扫掠体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取拉伸扫掠体的形状。
  	 * @returns 拉伸扫掠体的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模楔形体的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkWedge extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受三个尺寸参数和一个长度参数来创建楔形体。
  	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
  	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
  	 * @param dz 楔形体的高度沿z轴方向的尺寸。
  	 * @param ltx 楔形体的长度参数。
  	 */
  	constructor(dx: number, dy: number, dz: number, ltx: number);
  	/**
  	 * 构造函数，接受坐标系和尺寸参数来创建楔形体。
  	 * @param Axes 坐标系对象。
  	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
  	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
  	 * @param dz 楔形体的高度沿z轴方向的尺寸。
  	 * @param ltx 楔形体的长度参数。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, dx: number, dy: number, dz: number, ltx: number);
  	/**
  	 * 构造函数，接受尺寸参数和两个边界值来创建楔形体。
  	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
  	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
  	 * @param dz 楔形体的高度沿z轴方向的尺寸。
  	 * @param xmin 楔形体在x轴方向的最小边界值。
  	 * @param zmin 楔形体在z轴方向的最小边界值。
  	 * @param xmax 楔形体在x轴方向的最大边界值。
  	 * @param zmax 楔形体在z轴方向的最大边界值。
  	 */
  	constructor(dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
  	/**
  	 * 构造函数，接受坐标系、尺寸参数和边界值来创建楔形体。
  	 * @param Axes 坐标系对象。
  	 * @param dx 楔形体的宽度沿x轴方向的尺寸。
  	 * @param dy 楔形体的宽度沿y轴方向的尺寸。
  	 * @param dz 楔形体的高度沿z轴方向的尺寸。
  	 * @param xmin 楔形体在x轴方向的最小边界值。
  	 * @param zmin 楔形体在z轴方向的最小边界值。
  	 * @param xmax 楔形体在x轴方向的最大边界值。
  	 * @param zmax 楔形体在z轴方向的最大边界值。
  	 */
  	constructor(Axes: Mx3dGeCSYSR, dx: number, dy: number, dz: number, xmin: number, zmin: number, xmax: number, zmax: number);
  	/**
  	 * 执行楔形体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取楔形体的拓扑形状。
  	 * @returns 拓扑形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取楔形体的壳体形状。
  	 * @returns 壳体形状对象。
  	 */
  	Shell(): Mx3dShapeShell;
  	/**
  	 * 获取楔形体的实体形状。
  	 * @returns 实体形状对象。
  	 */
  	Solid(): Mx3dShapeSolid;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模放样体的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkLoft extends Mx3dMkObject {
  	/**
  	 * 构造函数，初始化放样体对象。
  	 * @param isSolid 是否创建实体放样体，默认为 false。
  	 * @param ruled 是否使用规则放样，默认为 false。
  	 * @param pres3d 放样体的平面分辨率，默认为 0。
  	 */
  	constructor(isSolid?: boolean, ruled?: boolean, pres3d?: number);
  	/**
  	 * 添加一个Wire到放样体。
  	 * @param wire 要添加的Wire对象。
  	 */
  	AddWire(wire: Mx3dShapeWire): void;
  	/**
  	 * 添加一个顶点到放样体。
  	 * @param aVertex 要添加的顶点对象。
  	 */
  	AddVertex(aVertex: Mx3dShapeVertex): void;
  	/**
  	 * 设置是否使用平滑处理。
  	 * @param UseSmoothing 使用平滑处理的标志。
  	 */
  	SetSmoothing(UseSmoothing: boolean): void;
  	/**
  	 * 设置放样体的连续性。
  	 * @param C 形状的连续性枚举值。
  	 */
  	SetContinuity(C: MdGe.MxGAShapeEnum): void;
  	/**
  	 * 获取放样体的连续性。
  	 * @returns 当前放样体的连续性枚举值。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 检查是否使用平滑处理。
  	 * @returns 平滑处理的使用状态，true 为使用，false 为不使用。
  	 */
  	UseSmoothing(): boolean;
  	/**
  	 * 执行放样体的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取放样体的形状。
  	 * @returns 放样体的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 表示建模多段线的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkPolygon extends Mx3dMkObject {
  	/**
  	 * 构造函数，初始化多段线对象。
  	 */
  	constructor();
  	/**
  	 * 添加一个顶点到多段线。
  	 * @param P 要添加的点对象。
  	 */
  	Add(P: Mx3dGePoint): void;
  	/**
  	 * 检查最后添加的顶点是否与前一个顶点重合。
  	 * @returns 如果最后一个添加的顶点与前一个顶点不重合，则返回 true；否则返回 false。
  	 */
  	Added(): boolean;
  	/**
  	 * 闭合多段线，形成一个闭合的图形。
  	 */
  	Close(): void;
  	/**
  	 * 获取多段线的第一个顶点。
  	 * @returns 第一个顶点对象。
  	 */
  	FirstVertex(): Mx3dShapeVertex;
  	/**
  	 * 获取多段线的最后一个顶点。
  	 * @returns 最后一个顶点对象。
  	 */
  	LastVertex(): Mx3dShapeVertex;
  	/**
  	 * 执行多段线的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取多段线的形状。
  	 * @returns 多段线的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  	/**
  	 * 获取多段线的Edge对象。
  	 * @returns 多段线的Edge对象。
  	 */
  	Edge(): Mx3dShapeEdge;
  	/**
  	 * 获取多段线的Wire对象。
  	 * @returns 多段线的Wire对象。
  	 */
  	Wire(): Mx3dShapeWire;
  }
  /**
   * 表示建模面的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkFace extends Mx3dMkObject {
  	/**
  	 * 构造函数，接受一个Wire对象和一个布尔值来初始化面对象。
  	 * @param theWire 要使用的线条对象 或 面形状对象(可添加Wire，形成Hole)。
  	 * @param OnlyPlane 是否仅限于平面构建，默认为 false。
  	 */
  	constructor(theWire: Mx3dShapeWire | Mx3dShapeFace, OnlyPlane?: boolean);
  	/**
  	 * 执行面的建模算法。
  	 */
  	Build(): void;
  	/**
  	 * 获取面的形状对象。
  	 * @returns 面的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 获取面的具体对象。
  	 * @returns 面的具体对象。
  	 */
  	Face(): Mx3dShapeFace;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 建模算法执行是否完成的标志，true 完成，false 失败。
  	 */
  	IsDone(): boolean;
  	Add(W: Mx3dShapeWire): void;
  }
  /**
   * 表示建模厚壁固体的类，继承自 Mx3dMkObject。
   */
  export  class Mx3dMkThickSolid extends Mx3dMkObject {
  	/**
  	 * 构造函数，初始化厚壁固体对象。
  	 */
  	constructor();
  	/**
  	 * 使用简单算法构建厚壁固体。
  	 * 该方法基于一个固体和一个偏移值来创建厚壁固体。此算法不支持面移除。
  	 * @param theS 要使用的初始固体对象。
  	 * @param theOffsetValue 厚度值，定义壁的厚度。
  	 */
  	MakeThickSolidBySimple(theS: Mx3dShapeObject, theOffsetValue: number): void;
  	/**
  	 * 使用连接算法构建厚壁固体。
  	 * 该方法基于一个固体和一组闭合面来创建厚壁固体。
  	 * @param S 要使用的初始固体对象。
  	 * @param ClosingFaces 要移除的面对象数组。
  	 * @param Offset 厚度值，定义壁的厚度。正值表示外侧，负值表示内侧。
  	 * @param Tol 公差值，定义生成形状的重合度标准。
  	 * @param Mode 构造模式，默认为 BRepOffset_Skin，定义自由边的平行线构造方式。
  	 * @param Intersection 是否计算交集，默认不计算。
  	 * @param SelfInter 是否消除自交，默认不消除。
  	 * @param Join 连接类型，默认为 GeomAbs_Arc，用于填充平行线之间的空隙。
  	 * @param RemoveIntEdges 是否移除内部边，默认不移除。
  	 */
  	MakeThickSolidByJoin(S: Mx3dShapeObject, ClosingFaces: Mx3dShapeObject[], Offset: number, Tol: number, Mode?: MdGe.MxOffsetModeEnum, Intersection?: boolean, SelfInter?: boolean, Join?: MdGe.MxGAJoinTypeEnum, RemoveIntEdges?: boolean): void;
  	/**
  	 * 执行厚壁固体的建模算法。
  	 * 此方法完成厚壁固体的构建过程。
  	 */
  	Build(): void;
  	/**
  	 * 获取厚壁固体的形状对象。
  	 * @returns 厚壁固体的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 检查建模算法是否执行完成。
  	 * @returns 如果建模算法执行完成，则返回 true；否则返回 false。
  	 */
  	IsDone(): boolean;
  }
  /**
   * 处理 Wire 的接口
   */
  export  class Mx3dWireTool {
  	/**
  	 * 将一组边连接成最大长度的线条（线）。连接的标准是边的端点间的距离应小于给定的容差。
  	 * 该方法将输入的边集合转换为最大长度的线条集合。
  	 *
  	 * @param edges - 要连接的边对象数组。
  	 * @param toler - 边连接时的容差值。
  	 * @param shared - 如果为 true，则仅在相邻边共享相同顶点时连接；如果为 false，则在相邻边的端点距离小于容差时连接。
  	 * @returns 一个新的线条对象数组，包含连接后的最大长度的线条。
  	 */
  	static ConnectEdgesToWires(edges: Mx3dShapeObject[], toler?: number, shared?: boolean): Mx3dShapeObject[];
  	/**
  	 * 将一组线条连接成最大长度的线条（线）。连接的标准是线条的端点间的距离应小于给定的容差。
  	 * 该方法将输入的线条集合转换为最大长度的线条集合。
  	 *
  	 * @param wires - 要连接的线条对象数组。
  	 * @param toler - 线条连接时的容差值。
  	 * @param shared - 如果为 true，则仅在相邻线条共享相同顶点时连接；如果为 false，则在相邻线条的端点距离小于容差时连接。
  	 * @returns 一个新的线条对象数组，包含连接后的最大长度的线条。
  	 */
  	static ConnectWiresToWires(wires: Mx3dShapeObject[], toler?: number, shared?: boolean): Mx3dShapeObject[]; /**
  	 * Edge 转换为 Wire
  	 * @param theEdge 待转换的 Edge
  	 * @returns 转换后的 Wire
  	 */
  	static EdgeToWire(theEdge: Mx3dShapeEdge): Mx3dShapeWire;
  }
  /**
   * 表示有限范围的曲线的基类
   */
  export  class Mx3dGeomBoundedCurve extends Mx3dGeomCurve {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 代表一个B样条曲线。
   * 该类继承自Mx3dGeomBoundedCurve并封装了B样条曲线的操作和属性。
   */
  export  class Mx3dGeomBSplineCurve extends Mx3dGeomBoundedCurve {
  	/**
  	 * 构造函数用于创建一个B样条曲线。
  	 * @param Poles 控制点的数组。
  	 * @param Knots 节点序列的数组。
  	 * @param Multiplicities 节点的多重性。
  	 * @param Degree 曲线的阶数。
  	 */
  	constructor(Poles: Mx3dGePoint[], Knots: number[], Multiplicities: number[], Degree: number);
  	/**
     * 构造函数用于创建一个带权重的B样条曲线。
     * @param Poles 控制点的数组。
     * @param Weights 控制点的权重数组。
     * @param Knots 节点序列的数组。
     * @param Multiplicities 节点的多重性。
     * @param Degree 曲线的阶数。
     */
  	constructor(Poles: Mx3dGePoint[], Weights: number[], Knots: number[], Multiplicities: number[], Degree: number);
  	/**
  	 * 提高曲线的阶数。
  	 * @param Degree 新的阶数。
  	 */
  	IncreaseDegree(Degree: number): void;
  	/**
  	 * 提高指定索引处的节点多重性。
  	 * @param Index 节点的索引。
  	 * @param M 新的多重性。
  	 */
  	IncreaseMultiplicity(Index: number, M: number): void;
  	/**
  	 * 提高指定范围内的节点多重性。
  	 * @param I1 范围起始索引。
  	 * @param I2 范围结束索引。
  	 * @param M 新的多重性。
  	 */
  	IncreaseMultiplicity(I1: number, I2: number, M: number): void;
  	/**
  	 * 增量提高指定范围内的节点多重性。
  	 * @param I1 起始索引。
  	 * @param I2 结束索引。
  	 * @param M 增加的多重性值。
  	 */
  	IncrementMultiplicity(I1: number, I2: number, M: number): void;
  	/**
  	 * 插入一个新的节点。
  	 * @param U 新节点的位置。
  	 * @param M 新节点的多重性（可选）。
  	 * @param ParametricTolerance 参数容差（可选）。
  	 * @param Add 是否添加节点而不是替换（可选）。
  	 */
  	InsertKnot(U: number, M?: number, ParametricTolerance?: number, Add?: boolean): void;
  	/**
  	 * 插入多个新的节点。
  	 * @param Knots 新节点的位置数组。
  	 * @param Mults 新节点的多重性数组。
  	 * @param ParametricTolerance 参数容差（可选）。
  	 * @param Add 是否添加节点而不是替换（可选）。
  	 */
  	InsertKnots(Knots: number[], Mults: number[], ParametricTolerance?: number, Add?: boolean): void;
  	/**
  	 * 移除一个节点。
  	 * @param Index 节点的索引。
  	 * @param M 节点的多重性。
  	 * @param Tolerance 容差。
  	 * @returns 是否成功移除节点。
  	 */
  	RemoveKnot(Index: number, M: number, Tolerance: number): boolean;
  	/**
  	 * 反转曲线。
  	 */
  	Reverse(): void;
  	/**
  	 * 获取反转参数值。
  	 * @param U 原参数值。
  	 * @returns 反转后的参数值。
  	 */
  	ReversedParameter(U: number): number;
  	/**
  	 * 截取曲线的一个段。
  	 * @param U1 段的起始参数值。
  	 * @param U2 段的结束参数值。
  	 */
  	Segment(U1: number, U2: number): void;
  	/**
  	 * 设置节点。
  	 * @param Index 节点索引。
  	 * @param K 新的节点值。
  	 */
  	SetKnot(Index: number, K: number): void;
  	/**
  	 * 设置节点并指定其多重性。
  	 * @param Index 节点索引。
  	 * @param K 新的节点值。
  	 * @param M 节点的多重性。
  	 */
  	SetKnot(Index: number, K: number, M: number): void;
  	/**
  	 * 设置所有节点。
  	 * @param dK 节点值数组。
  	 */
  	SetKnots(dK: number[]): void;
  	/**
  	 * 设置曲线为周期性。
  	 */
  	SetPeriodic(): void;
  	/**
  	 * 设置原点。
  	 * @param Index 原点索引。
  	 */
  	SetOrigin(Index: number): void;
  	/**
  	 * 设置原点并指定容差。
  	 * @param U 原点参数值。
  	 * @param Tol 容差。
  	 */
  	SetOrigin(U: number, Tol: number): void;
  	/**
  	 * 设置曲线为非周期性。
  	 */
  	SetNotPeriodic(): void;
  	/**
  	 * 设置指定索引处的控制点。
  	 * @param Index 控制点的索引。
  	 * @param P 控制点。
  	 */
  	SetPole(Index: number, P: UniPoint): void;
  	/**
  	 * 设置指定索引处的控制点和权重。
  	 * @param Index 控制点的索引。
  	 * @param P 控制点。
  	 * @param Weight 权重。
  	 */
  	SetPole(Index: number, P: UniPoint, Weight: number): void;
  	/**
  	 * 设置指定索引处的权重。
  	 * @param Index 权重的索引。
  	 * @param Weight 权重。
  	 */
  	SetWeight(Index: number, Weight: number): void;
  	/**
  	 * 检查曲线在指定阶数下是否连续。
  	 * @param N 阶数。
  	 * @returns 如果曲线在指定阶数下是连续的，则返回true；否则返回false。
  	 */
  	IsCN(N: number): boolean;
  	/**
  	 * 检查曲线在指定范围内是否满足G1连续性。
  	 * @param theTf 起始参数。
  	 * @param theTl 结束参数。
  	 * @param theAngTol 角度公差。
  	 * @returns 如果曲线在指定范围内满足G1连续性，则返回true；否则返回false。
  	 */
  	IsG1(theTf: number, theTl: number, theAngTol: number): boolean;
  	/**
  	 * 检查曲线是否闭合。
  	 * @returns 如果曲线闭合，则返回true；否则返回false。
  	 */
  	IsClosed(): boolean;
  	/**
  	 * 检查曲线是否周期性。
  	 * @returns 如果曲线是周期性的，则返回true；否则返回false。
  	 */
  	IsPeriodic(): boolean;
  	/**
  	 * 检查曲线是否是有理的。
  	 * @returns 如果曲线是有理的，则返回true；否则返回false。
  	 */
  	IsRational(): boolean;
  	/**
  	 * 获取曲线的连续性。
  	 * @returns 曲线的连续性。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 获取曲线的阶数。
  	 * @returns 曲线的阶数。
  	 */
  	Degree(): number;
  	/**
  	 * 在给定参数处计算曲线的点。
  	 * @param U 参数。
  	 * @param P 结果点。
  	 */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	 * 在给定参数处计算曲线的点和一阶导数。
  	 * @param U 参数。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 在给定参数处计算曲线的点、一阶导数和二阶导数。
  	 * @param U 参数。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 * @param V2 二阶导数。
  	 */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 在给定参数处计算曲线的点、一阶导数、二阶导数和三阶导数。
  	 * @param U 参数。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 * @param V2 二阶导数。
  	 * @param V3 三阶导数。
  	 */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 在给定参数处计算曲线的N阶导数。
  	 * @param U 参数。
  	 * @param N 阶数。
  	 * @returns N阶导数。
  	 */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	 * 在指定范围内计算局部参数的点。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @returns 局部参数的点。
  	 */
  	LocalValue(U: number, FromK1: number, ToK2: number): Mx3dGePoint;
  	/**
  	 * 在指定范围内计算局部参数的点。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @param P 结果点。
  	 */
  	LocalD0(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint): void;
  	/**
  	 * 在指定范围内计算局部参数的点和一阶导数。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 */
  	LocalD1(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	 * 在指定范围内计算局部参数的点、一阶导数和二阶导数。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 * @param V2 二阶导数。
  	 */
  	LocalD2(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	 * 在指定范围内计算局部参数的点、一阶导数、二阶导数和三阶导数。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @param P 结果点。
  	 * @param V1 一阶导数。
  	 * @param V2 二阶导数。
  	 * @param V3 三阶导数。
  	 */
  	LocalD3(U: number, FromK1: number, ToK2: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	 * 在指定范围内计算局部参数的N阶导数。
  	 * @param U 参数。
  	 * @param FromK1 起始节点索引。
  	 * @param ToK2 结束节点索引。
  	 * @param N 阶数。
  	 * @returns N阶导数。
  	 */
  	LocalDN(U: number, FromK1: number, ToK2: number, N: number): Mx3dGeVec;
  	/**
  	 * 获取曲线的终点。
  	 * @returns 曲线的终点。
  	 */
  	EndPoint(): Mx3dGePoint;
  	/**
  	 * 获取曲线的第一个节点索引。
  	 * @returns 第一个节点索引。
  	 */
  	FirstUKnotIndex(): number;
  	/**
  	 * 返回曲线的第一个参数值。
  	 * 通常用于确定曲线的起始点。
  	 * @returns 第一个参数值。
  	 */
  	FirstParameter(): number;
  	/**
  	 * 获取曲线在指定索引处的节点。
  	 * @param Index 节点的索引。
  	 * @returns 节点。
  	 */
  	Knot(Index: number): number;
  	/**
  	 * 获取曲线的节点序列。
  	 * @returns 节点序列的数组。
  	 */
  	Knots(): number[];
  	/**
  	 * 获取曲线的最后一个节点索引。
  	 * @returns 最后一个节点索引。
  	 */
  	LastUKnotIndex(): number;
  	/**
  	 * 返回曲线的最后一个参数值。
  	 * 通常用于确定曲线的终点。
  	 * @returns 最后一个参数值。
  	 */
  	LastParameter(): number;
  	/**
  	 * 获取指定索引处的节点多重性。
  	 * 节点多重性用于定义曲线在特定参数值处的重复程度。
  	 * @param Index 节点索引。
  	 * @returns 节点的多重性值。
  	 */
  	Multiplicity(Index: number): number;
  	/**
  	 * 返回曲线的所有节点多重性值。
  	 * 节点多重性用于定义曲线在特定参数值处的重复程度。
  	 * @returns 节点多重性值的数组。
  	 */
  	Multiplicities(): number[];
  	/**
  	 * 获取曲线的节点数。
  	 * @returns 节点数。
  	 */
  	NbKnots(): number;
  	/**
  	 * 获取曲线的控制点数。
  	 * @returns 控制点数。
  	 */
  	NbPoles(): number;
  	/**
  	 * 获取指定索引处的控制点。
  	 * 控制点定义了曲线的形状和位置。
  	 * @param Index 控制点的索引。
  	 * @returns 指定索引处的控制点对象。
  	 */
  	Pole(Index: number): Mx3dGePoint;
  	/**
  	 * 获取曲线的控制点序列。
  	 * @returns 控制点序列的数组。
  	 */
  	Poles(): Mx3dGePoint[];
  	/**
  	 * 获取曲线的起点。
  	 * @returns 曲线的起点。
  	 */
  	StartPoint(): Mx3dGePoint;
  	/**
  	 * 获取指定索引处的权重值。
  	 * 权重值用于定义B样条曲线的局部形状和重要性。
  	 * @param Index 权重值的索引。
  	 * @returns 指定索引处的权重值。
  	 */
  	Weight(Index: number): number;
  	/**
  	 * 获取曲线的权重序列。
  	 * @returns 权重序列的数组。
  	 */
  	Weights(): number[];
  	/**
  	 * 应用给定的变换矩阵变换曲线。
  	 * @param T 变换矩阵。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建当前B样条曲线的副本。
  	 * @returns 返回一个新的B样条曲线对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取曲线的边。
  	 * @param p1 边的起始点参数。
  	 * @param p2 边的终止点参数。
  	 * @returns 返回指定参数范围内的曲线边。
  	 */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	 * 获取曲线的Wire。
  	 * @returns 返回表示曲线的Wire对象。
  	 */
  	Wire(): Mx3dShapeWire;
  	/**
  	 * 创建曲线的偏移副本。
  	 * @param Offset 偏移量。
  	 * @param V 偏移方向，与偏移方向垂直。
  	 * @param isNotCheckC0 是否不检查C0连续性。
  	 * @returns 返回偏移后的曲线边对象。
  	 */
  	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * 比较当前曲线与另一条曲线的相等性。
  	 * @param theOther 另一个B样条曲线对象。
  	 * @param thePreci 比较精度。
  	 * @returns 如果两条曲线在指定精度下相等，返回true；否则返回false。
  	 */
  	IsEqual(theOther: Mx3dGeomBSplineCurve, thePreci: number): boolean;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomBSplineCurve 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomBSplineCurve 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBSplineCurve;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * Mx3dGeomBezierCurve 表示Bezier曲线，提供了一系列方法来操作和查询Bezier曲线的属性。
   */
  export  class Mx3dGeomBezierCurve extends Mx3dGeomBoundedCurve {
  	/**
  	   * 构造函数，创建一个Bezier曲线。
  	   * @param CurvePoles - 控制点数组。
  	   * @param PoleWeights - 控制点权重数组（可选）。
  	   */
  	constructor(CurvePoles: Mx3dGePoint[], PoleWeights?: number[]);
  	/**
  	   * 提高Bezier曲线的阶数。
  	   * @param Degree - 新的阶数。
  	   */
  	Increase(Degree: number): void;
  	/**
  	   * 在指定索引之后插入一个控制点。
  	   * @param Index - 插入点的索引。
  	   * @param P - 新的控制点。
  	   * @param Weight - 新的控制点的权重（可选）。
  	   */
  	InsertPoleAfter(Index: number, P: Mx3dGePoint, Weight?: number): void;
  	/**
  	   * 在指定索引之前插入一个控制点。
  	   * @param Index - 插入点的索引。
  	   * @param P - 新的控制点。
  	   * @param Weight - 新的控制点的权重（可选）。
  	   */
  	InsertPoleBefore(Index: number, P: Mx3dGePoint, Weight?: number): void;
  	/**
  	   * 删除指定索引的控制点。
  	   * @param Index - 要删除的控制点的索引。
  	   */
  	RemovePole(Index: number): void;
  	/**
  	   * 反转Bezier曲线的参数方向。
  	   */
  	Reverse(): void;
  	/**
  	   * 获取反转后的参数值。
  	   * @param U - 原参数值。
  	   * @returns 反转后的参数值。
  	   */
  	ReversedParameter(U: number): number;
  	/**
  	   * 截取Bezier曲线的一部分。
  	   * @param U1 - 起始参数值。
  	   * @param U2 - 结束参数值。
  	   */
  	Segment(U1: number, U2: number): void;
  	/**
  	   * 设置指定索引的控制点。
  	   * @param Index - 要设置的控制点的索引。
  	   * @param P - 新的控制点。
  	   * @param Weight - 新的控制点的权重（可选）。
  	   */
  	SetPole(Index: number, P: Mx3dGePoint, Weight?: number): void;
  	/**
  	   * 设置指定索引的控制点权重。
  	   * @param Index - 要设置的控制点的索引。
  	   * @param Weight - 新的权重值。
  	   */
  	SetWeight(Index: number, Weight: number): void;
  	/**
  	   * 检查曲线是否闭合。
  	   * @returns 曲线是否闭合。
  	   */
  	IsClosed(): boolean;
  	/**
  	   * 检查曲线的连续性。
  	   * @param N - 连续性的阶数。
  	   * @returns 曲线是否具有指定阶数的连续性。
  	   */
  	IsCN(N: number): boolean;
  	/**
  	   * 检查曲线的参数化是否周期性。
  	   * @returns 曲线是否周期性。
  	   */
  	IsPeriodic(): boolean;
  	/**
  	   * 检查曲线是否是有理Bezier曲线。
  	   * @returns 曲线是否是有理的。
  	   */
  	IsRational(): boolean;
  	/**
  	   * 获取曲线的连续性类型。
  	   * @returns 曲线的连续性类型。
  	   */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	   * 获取曲线的阶数。
  	   * @returns 曲线的阶数。
  	   */
  	Degree(): number;
  	/**
  	   * 计算曲线在指定参数值处的点。
  	   * @param U - 参数值。
  	   * @param P - 计算得到的点。
  	   */
  	D0(U: number, P: Mx3dGePoint): void;
  	/**
  	   * 计算曲线在指定参数值处的点及其一阶导数。
  	   * @param U - 参数值。
  	   * @param P - 计算得到的点。
  	   * @param V1 - 计算得到的一阶导数。
  	   */
  	D1(U: number, P: Mx3dGePoint, V1: Mx3dGeVec): void;
  	/**
  	   * 计算曲线在指定参数值处的点及其一阶和二阶导数。
  	   * @param U - 参数值。
  	   * @param P - 计算得到的点。
  	   * @param V1 - 计算得到的一阶导数。
  	   * @param V2 - 计算得到的二阶导数。
  	   */
  	D2(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec): void;
  	/**
  	   * 计算曲线在指定参数值处的点及其一阶、二阶和三阶导数。
  	   * @param U - 参数值。
  	   * @param P - 计算得到的点。
  	   * @param V1 - 计算得到的一阶导数。
  	   * @param V2 - 计算得到的二阶导数。
  	   * @param V3 - 计算得到的三阶导数。
  	   */
  	D3(U: number, P: Mx3dGePoint, V1: Mx3dGeVec, V2: Mx3dGeVec, V3: Mx3dGeVec): void;
  	/**
  	   * 计算曲线在指定参数值处的N阶导数。
  	   * @param U - 参数值。
  	   * @param N - 导数的阶数。
  	   * @returns 计算得到的N阶导数。
  	   */
  	DN(U: number, N: number): Mx3dGeVec;
  	/**
  	   * 获取曲线的起始点。
  	   * @returns 曲线的起始点。
  	   */
  	StartPoint(): Mx3dGePoint;
  	/**
  	   * 获取曲线的终点。
  	   * @returns 曲线的终点。
  	   */
  	EndPoint(): Mx3dGePoint;
  	/**
  	   * 获取曲线的第一个参数值。
  	   * @returns 曲线的第一个参数值。
  	   */
  	FirstParameter(): number;
  	/**
  	   * 获取曲线的最后一个参数值。
  	   * @returns 曲线的最后一个参数值。
  	   */
  	LastParameter(): number;
  	/**
  	   * 获取曲线的控制点数量。
  	   * @returns 曲线的控制点数量。
  	   */
  	NbPoles(): number;
  	/**
  	   * 获取指定索引的控制点。
  	   * @param Index - 控制点的索引。
  	   * @returns 指定的控制点。
  	   */
  	Pole(Index: number): Mx3dGePoint;
  	/**
  	   * 获取所有控制点。
  	   * @returns 所有控制点的数组。
  	   */
  	Poles(): Mx3dGePoint[];
  	/**
  	   * 获取指定索引的控制点权重。
  	   * @param Index - 控制点的索引。
  	   * @returns 指定的控制点权重。
  	   */
  	Weight(Index: number): number;
  	/**
  	   * 获取所有控制点的权重。
  	   * @returns 所有控制点权重的数组。
  	   */
  	Weights(): number[];
  	/**
  	   * 对曲线应用变换。
  	   * @param T - 变换矩阵。
  	   */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	   * 复制曲线对象。
  	   * @returns 复制的曲线对象。
  	   */
  	Copy(): Mx3dGeomObject;
  	/**
  	   * 创建一条边。
  	   * @param p1 - 边的起点参数。
  	   * @param p2 - 边的终点参数。
  	   * @returns 创建的边对象。
  	   */
  	Edge(p1: number, p2: number): Mx3dShapeEdge;
  	/**
  	   * 创建一条线。
  	   * @returns 创建的线对象。
  	   */
  	Wire(): Mx3dShapeWire;
  	/**
  	   * 创建偏移曲线。
  	   * @param Offset - 偏移量。
  	   * @param V - 偏移方向，与偏移方向垂直。
  	   * @param isNotCheckC0 - 是否检查C0连续性。
  	   * @returns 创建的偏移曲线。
  	   */
  	OffsetCurve(Offset: number, V: UniDir, isNotCheckC0: boolean): Mx3dShapeEdge;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomBezierCurve 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomBezierCurve 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBezierCurve;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * Mx3dGeomSurface 类，提供了 3D 表面操作的方法。
   */
  export  class Mx3dGeomSurface extends Mx3dGeomObject {
  	/**
  	   * @internal
  	   */
  	constructor(p?: object);
  	/**
  	   * 反转 U 方向的参数化。
  	   * @returns 返回当前对象以实现链式调用。
  	   */
  	UReversed(): this;
  	/**
  	   * 反转 V 方向的参数化。
  	   * @returns 返回当前对象以实现链式调用。
  	   */
  	VReversed(): this;
  	/**
  	   * 根据给定的变换矩阵 T 变换表面参数。
  	   * @param UV 参数数组，包含 U 和 V 的值。
  	   * @param T 变换矩阵。
  	   */
  	TransformParameters(UV: [
  		dU: number,
  		dV: number
  	], T: Mx3dGeTrsf): void;
  	/**
  	   * 返回表面在 U 方向的周期。
  	   * @returns 表面在 U 方向的周期。
  	   */
  	UPeriod(): number;
  	/**
  	   * 返回表面在 V 方向的周期。
  	   * @returns 表面在 V 方向的周期。
  	   */
  	VPeriod(): number;
  	/**
  	   * 计算参数 (U, V) 对应的表面上的点。
  	   * @param U 表面参数 U。
  	   * @param V 表面参数 V。
  	   * @returns 对应的点。
  	   */
  	Value(U: number, V: number): Mx3dGePoint;
  	/**
  	   * 返回对象的动态类型。
  	   * @returns 动态类型的字符串表示。
  	   */
  	DynamicType(): string;
  }
  /**
   * Mx3dGeomElementarySurface 类是对几何基础表面（Elementary Surface）类的封装，提供了对简单参数方程表面的操作接口。
   * 这些表面包括平面、圆柱、圆锥、球体等。该类继承自 Mx3dGeomSurface，并扩展了相关的几何操作功能。
   */
  export  class Mx3dGeomElementarySurface extends Mx3dGeomSurface {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  	/**
  	 * 设置表面的主轴（Z轴）。
  	 * @param theA1 表面的主轴定义。
  	 */
  	SetAxis(theA1: Mx3dGeAxis): void;
  	/**
  	 * 设置表面局部坐标系的位置点。
  	 * @param theLoc 新的位置点。
  	 */
  	SetLocation(theLoc: Mx3dGePoint): void;
  	/**
  	 * 设置表面的局部坐标系。
  	 * @param theAx3 新的坐标系，包含位置和方向。
  	 */
  	SetPosition(theAx3: Mx3dGeCSYSR): void;
  	/**
  	 * 获取表面的主轴（Z轴）。
  	 * @returns 表面的主轴定义。
  	 */
  	Axis(): Mx3dGeAxis;
  	/**
  	 * 获取表面局部坐标系的位置点。
  	 * @returns 表面位置点。
  	 */
  	Location(): Mx3dGePoint;
  	/**
  	 * 获取表面的局部坐标系。
  	 * @returns 表面的局部坐标系。
  	 */
  	Position(): Mx3dGeCSYSR;
  	/**
  	 * 反转表面在 U 参数方向上的参数化方向。
  	 */
  	UReverse(): void;
  	/**
  	 * 反转表面在 V 参数方向上的参数化方向。
  	 */
  	VReverse(): void;
  	/**
  	 * 返回表面在全局上的连续性（MxGAShapeEnum）。
  	 * @returns 表面在全局上的连续性。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 检查表面在 U 参数方向上的连续性是否达到指定的等级。
  	 * @param N 要检查的连续性等级。
  	 * @returns 如果连续性等级满足条件，则返回 true；否则返回 false。
  	 */
  	IsCNu(N: number): boolean;
  	/**
  	 * 检查表面在 V 参数方向上的连续性是否达到指定的等级。
  	 * @param N 要检查的连续性等级。
  	 * @returns 如果连续性等级满足条件，则返回 true；否则返回 false。
  	 */
  	IsCNv(N: number): boolean;
  	/**
  	 * 返回对象的动态类型名称。
  	 * @returns 对象的类型名称字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * Mx3dGeomPlane 类，提供描述和操作3D空间中平面的功能。
   * 一个平面由坐标系 (Mx3dGeCSYSR) 定义，可以通过其法向量、原点和参数方向来描述。
   */
  export  class Mx3dGeomPlane extends Mx3dGeomElementarySurface {
  	/**
  	   * 根据指定的轴向位置构造一个位于3D空间中的平面。
  	   * @param A3 - 定义平面位置和方向的坐标系 (Mx3dGeCSYSR)。
  	   */
  	constructor(A3: Mx3dGeCSYSR);
  	/**
  	   * 根据一个点和法向量构造一个平面。
  	   * @param P - 平面的原点。
  	   * @param V - 法向量，指向平面的方向。
  	   */
  	constructor(P: UniPoint, V: UniDir);
  	/**
  	   * 根据平面方程的系数构造一个平面。
  	   * @param A - 方程 Ax + By + Cz + D = 0 的系数 A。
  	   * @param B - 方程 Ax + By + Cz + D = 0 的系数 B。
  	   * @param C - 方程 Ax + By + Cz + D = 0 的系数 C。
  	   * @param D - 方程 Ax + By + Cz + D = 0 的系数 D。
  	   */
  	constructor(A: number, B: number, C: number, D: number);
  	/**
  	   * 翻转平面在 U 参数方向上的方向。
  	   */
  	UReverse(): void;
  	/**
  	 * 计算在平面翻转 U 参数方向后的 U 参数值。
  	 * @param U - 原始的 U 参数。
  	 * @returns 翻转后的 U 参数。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	   * 翻转平面在 V 参数方向上的方向。
  	   */
  	VReverse(): void;
  	/**
  	   * 计算在平面翻转 V 参数方向后的 V 参数值。
  	   * @param V - 原始的 V 参数。
  	   * @returns 翻转后的 V 参数。
  	   */
  	VReversedParameter(V: number): number;
  	/**
  	   * 将 U 和 V 参数以及变换 T 应用于平面。
  	   * @param UV - 参数值数组 [dU, dV]。
  	   * @param T - 变换 (Mx3dGeTrsf)。
  	   */
  	TransformParameters(UV: [
  		dU: number,
  		dV: number
  	], T: Mx3dGeTrsf): void;
  	/**
  	   * 计算平面的参数范围。
  	   * @param U1U2V1V2 - 参数范围数组 [dU1, dU2, dV1, dV2]。
  	   */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	   * 计算平面方程的系数。
  	   * @param ABCD - 系数数组 [dA, dB, dC, dD]。
  	   */
  	Coefficients(ABCD: [
  		dA: number,
  		dB: number,
  		dC: number,
  		dD: number
  	]): void;
  	/**
  	   * 判断平面在 U 方向上是否闭合。
  	   * @returns 返回 false。
  	   */
  	IsUClosed(): boolean;
  	/**
  	   * 判断平面在 V 方向上是否闭合。
  	   * @returns 返回 false。
  	   */
  	IsVClosed(): boolean;
  	/**
  	   * 判断平面在 U 方向上是否周期性。
  	   * @returns 返回 false。
  	   */
  	IsUPeriodic(): boolean;
  	/**
  	   * 判断平面在 V 方向上是否周期性。
  	   * @returns 返回 false。
  	   */
  	IsVPeriodic(): boolean;
  	/**
  	 * 计算在指定的 U 和 V 参数值处的点。
  	 * @param U - U 参数值。
  	 * @param V - V 参数值。
  	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
  	 * 计算公式为 P = O + U * XDir + V * YDir，
  	 * 其中 O 为平面的原点，XDir 和 YDir 分别是 U 和 V 参数方向的基向量。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算在指定的 U 和 V 参数值处的点及其一阶导数。
  	 * @param U - U 参数值。
  	 * @param V - V 参数值。
  	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
  	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * 计算公式为：
  	 * - 点：P = O + U * XDir + V * YDir。
  	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算在指定的 U 和 V 参数值处的点、第一阶和第二阶导数。
  	 * @param U - U 参数值。
  	 * @param V - V 参数值。
  	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
  	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * @param D2U - 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * @param D2V - 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * @param D2UV - 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * 计算公式为：
  	 * - 点：P = O + U * XDir + V * YDir。
  	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
  	 * - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算在指定的 U 和 V 参数值处的点、第一、第二和第三阶导数。
  	 * @param U - U 参数值。
  	 * @param V - V 参数值。
  	 * @param P - 用于存储计算点的目标对象 (Mx3dGePoint)。
  	 * @param D1U - 用于存储 U 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * @param D1V - 用于存储 V 方向第一导数的目标对象 (Mx3dGeVec)。
  	 * @param D2U - 用于存储 U 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * @param D2V - 用于存储 V 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * @param D2UV - 用于存储 UV 方向第二导数的目标对象 (Mx3dGeVec)。
  	 * @param D3U - 用于存储 U 方向第三导数的目标对象 (Mx3dGeVec)。
  	 * @param D3V - 用于存储 V 方向第三导数的目标对象 (Mx3dGeVec)。
  	 * @param D3UUV - 用于存储 UUU 方向第三导数的目标对象 (Mx3dGeVec)。
  	 * @param D3UVV - 用于存储 UVV 方向第三导数的目标对象 (Mx3dGeVec)。
  	 * 计算公式为：
  	 * - 点：P = O + U * XDir + V * YDir。
  	 * - 第一导数：D1U 和 D1V 分别为 XDir 和 YDir 的偏导数。
  	 * - 第二导数：D2U、D2V 和 D2UV 为二阶偏导数。
  	 * - 第三导数：D3U、D3V、D3UUV 和 D3UVV 为三阶偏导数。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算在指定的 U 和 V 参数值处的指定阶数的导数。
  	 * @param U - U 参数值。
  	 * @param V - V 参数值。
  	 * @param Nu - U 方向的导数阶数。
  	 * @param Nv - V 方向的导数阶数。
  	 * @returns 返回计算的向量对象 (Mx3dGeVec)。
  	 * @throws 错误：如果 Nu + Nv < 1 或 Nu < 0 或 Nv < 0，则抛出异常。
  	 * 计算公式为计算指定阶数的偏导数，返回对应的向量。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 应用变换 T 到平面上。
  	 * @param T - 变换 (Mx3dGeTrsf)。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建一个新的对象，作为该平面的副本。
  	 * @returns 返回新的平面对象 (Mx3dGeomObject)。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 返回对象的动态类型字符串。
  	 * @returns 类型名称字符串。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomPlane 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomPlane 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomPlane;
  	/**
  	 * 根据公差生成一个平面面。
  	 * @param TolDegen - 公差值。
  	 * @returns 生成的平面面 (Mx3dShapeFace)。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 根据给定的轮廓线和是否在内部生成一个平面面。
  	 * @param W - 轮廓线 (Mx3dShapeWire)。
  	 * @param Inside - 是否在内部。
  	 * @returns 生成的平面面 (Mx3dShapeFace)。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 根据 U 和 V 范围以及公差生成一个平面面。
  	 * @param UMin - U 方向的最小值。
  	 * @param UMax - U 方向的最大值。
  	 * @param VMin - V 方向的最小值。
  	 * @param VMax - V 方向的最大值。
  	 * @param TolDegen - 公差值。
  	 * @returns 生成的平面面 (Mx3dShapeFace)。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示三维空间中的圆锥曲面。
   * 圆锥曲面由其顶点的半角、参考半径和坐标系定义。
   */
  export  class Mx3dGeomConicalSurface extends Mx3dGeomElementarySurface {
  	/**
  	 * 构造一个具有指定坐标系、半角和半径的圆锥曲面。
  	 * @param A3 - 圆锥曲面的局部坐标系。
  	 * @param Ang - 圆锥曲面的半角。其绝对值应在 [0, PI/2] 范围内。
  	 * @param Radius - 圆锥曲面参考平面上的圆的半径。
  	 */
  	constructor(A3: Mx3dGeCSYSR, Ang: number, Radius: number);
  	/**
  	 * 设置放置平面中的圆锥曲面的半径。
  	 * @param R - 新的半径。必须为非负值。
  	 */
  	SetRadius(R: number): void;
  	/**
  	 * 设置圆锥曲面的半角。
  	 * @param Ang - 新的半角。其绝对值应在 ]0, PI/2[ 范围内。
  	 */
  	SetSemiAngle(Ang: number): void;
  	/**
  	 * 返回反转后的U参数。
  	 * @param U - 原始U参数。
  	 * @returns 反转后的U参数。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 返回反转后的V参数。
  	 * @param V - 原始V参数。
  	 * @returns 反转后的V参数。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 反转V参数方向。
  	 */
  	VReverse(): void;
  	/**
  	 * 变换参数。
  	 * @param UV - 参数数组 [dU, dV]。
  	 * @param T - 变换。
  	 */
  	TransformParameters(UV: [
  		dU: number,
  		dV: number
  	], T: Mx3dGeTrsf): void;
  	/**
  	 * 计算并返回圆锥的顶点。顶点在圆锥的旋转轴的负侧（半角为正）或正侧（半角为负）。
  	 * @returns 圆锥的顶点。
  	 */
  	Apex(): Mx3dGePoint;
  	/**
  	 * 返回圆锥曲面的参数范围。
  	 * @param U1U2V1V2 - 参数范围数组 [dU1, dU2, dV1, dV2]。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 返回圆锥曲面的隐式方程的系数。
  	 * 方程形式：A1.X^2 + A2.Y^2 + A3.Z^2 + 2*(B1.X.Y + B2.X.Z + B3.Y.Z) + 2*(C1.X + C2.Y + C3.Z) + D = 0
  	 * @param A1A2A3B1B2B3C1C2C3D - 系数数组 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
  	 */
  	Coefficients(A1A2A3B1B2B3C1C2C3D: [
  		A1: number,
  		A2: number,
  		A3: number,
  		B1: number,
  		B2: number,
  		B3: number,
  		C1: number,
  		C2: number,
  		C3: number,
  		D: number
  	]): void;
  	/**
  	 * 返回圆锥曲面的参考半径。
  	 * @returns 参考半径。
  	 */
  	RefRadius(): number;
  	/**
  	 * 返回圆锥顶点的半角。
  	 * @returns 圆锥的半角。
  	 */
  	SemiAngle(): number;
  	/**
  	 * 检查U参数是否闭合。
  	 * @returns 总是返回 true。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 检查V参数是否闭合。
  	 * @returns 总是返回 false。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 检查U参数是否周期性。
  	 * @returns 总是返回 true。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 检查V参数是否周期性。
  	 * @returns 总是返回 false。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 计算并返回曲面上给定参数 (U, V) 处的点。
  	 * @param U - U参数。
  	 * @param V - V参数。
  	 * @param P - 结果点。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一导数。
  	 * @param U - U参数。
  	 * @param V - V参数。
  	 * @param P - 结果点。
  	 * @param D1U - U方向的第一导数。
  	 * @param D1V - V方向的第一导数。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一和第二导数。
  	 * @param U - U参数。
  	 * @param V - V参数。
  	 * @param P - 结果点。
  	 * @param D1U - U方向的第一导数。
  	 * @param D1V - V方向的第一导数。
  	 * @param D2U - U方向的第二导数。
  	 * @param D2V - V方向的第二导数。
  	 * @param D2UV - UV方向的混合导数。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算并返回曲面上给定参数 (U, V) 处的点及其在U和V方向的第一、第二和第三导数。
  	 * @param U - U参数。
  	 * @param V - V参数。
  	 * @param P - 结果点。
  	 * @param D1U - U方向的第一导数。
  	 * @param D1V - V方向的第一导数。
  	 * @param D2U - U方向的第二导数。
  	 * @param D2V - V方向的第二导数。
  	 * @param D2UV - UV方向的混合导数。
  	 * @param D3U - U方向的第三导数。
  	 * @param D3V - V方向的第三导数。
  	 * @param D3UUV - UU方向的混合导数。
  	 * @param D3UVV - UV方向的混合导数。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算并返回给定参数 (U, V) 处的指定阶数的导数。
  	 * @param U - U参数。
  	 * @param V - V参数。
  	 * @param Nu - U方向的导数阶数。
  	 * @param Nv - V方向的导数阶数。
  	 * @returns 指定阶数的导数向量。
  	 * @throws 如果Nu + Nv小于1，或Nu或Nv为负，则抛出异常。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 对圆锥曲面应用变换。
  	 * @param T - 变换。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建并返回一个此圆锥曲面的副本。
  	 * @returns 圆锥曲面的副本。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串表示。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomConicalSurface 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomConicalSurface 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomConicalSurface;
  	/**
  	 * 根据圆锥曲面创建一个面。
  	 * @param TolDegen - 简化面容差。
  	 * @returns 创建的面对象。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 根据给定的线和方向创建一个面。
  	 * @param W - 给定的线。
  	 * @param Inside - 内部方向标志。
  	 * @returns 创建的面对象。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 根据指定的参数范围创建一个面。
  	 * @param UMin - U参数的最小值。
  	 * @param UMax - U参数的最大值。
  	 * @param VMin - V参数的最小值。
  	 * @param VMax - V参数的最大值。
  	 * @param TolDegen - 简化面容差。
  	 * @returns 创建的面对象。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * Mx3dGeomCylindricalSurface 类封装了圆柱面几何的功能，继承自 Mx3dGeomElementarySurface。
   */
  export  class Mx3dGeomCylindricalSurface extends Mx3dGeomElementarySurface {
  	/**
  	 * 构造函数，创建一个新的圆柱面对象。
  	 * @param A3 圆柱面的局部坐标系。
  	 * @param Radius 圆柱面的半径。
  	 */
  	constructor(A3: Mx3dGeCSYSR, Radius: number);
  	/**
  	 * 设置圆柱面的半径。
  	 * @param R 新的半径值。
  	 */
  	SetRadius(R: number): void;
  	/**
  	 * 返回参数 U 在反向圆柱面上的对应参数值。
  	 * @param U 参数 U。
  	 * @returns 反向参数值。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 返回参数 V 在反向圆柱面上的对应参数值。
  	 * @param V 参数 V。
  	 * @returns 反向参数值。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 变换参数 U 和 V。
  	 * @param UV 原始参数 [dU, dV]。
  	 * @param T 变换矩阵。
  	 */
  	TransformParameters(UV: [
  		dU: number,
  		dV: number
  	], T: Mx3dGeTrsf): void;
  	/**
  	 * 获取圆柱面的参数范围。
  	 * @param U1U2V1V2 参数范围 [dU1, dU2, dV1, dV2]。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 获取圆柱面方程的系数。
  	 * @param A1A2A3B1B2B3C1C2C3D 方程系数 [A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
  	 */
  	Coefficients(A1A2A3B1B2B3C1C2C3D: [
  		A1: number,
  		A2: number,
  		A3: number,
  		B1: number,
  		B2: number,
  		B3: number,
  		C1: number,
  		C2: number,
  		C3: number,
  		D: number
  	]): void;
  	/**
  	 * 返回圆柱面的半径。
  	 * @returns 半径值。
  	 */
  	Radius(): number;
  	/**
  	 * 判断圆柱面在 U 方向是否闭合。
  	 * @returns 如果是闭合的，返回 true，否则返回 false。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 判断圆柱面在 V 方向是否闭合。
  	 * @returns 如果是闭合的，返回 true，否则返回 false。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 判断圆柱面在 U 方向是否周期性。
  	 * @returns 如果是周期性的，返回 true，否则返回 false。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 判断圆柱面在 V 方向是否周期性。
  	 * @returns 如果是周期性的，返回 true，否则返回 false。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 计算当前点在圆柱面上的位置及其法向量。
  	 * @param U 参数 U。
  	 * @param V 参数 V。
  	 * @param P 存储点的位置。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算当前点在圆柱面上的位置及其一阶导数。
  	 * @param U 参数 U。
  	 * @param V 参数 V。
  	 * @param P 存储点的位置。
  	 * @param D1U 存储 U 方向的一阶导数。
  	 * @param D1V 存储 V 方向的一阶导数。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算当前点在圆柱面上的位置及其一阶、二阶导数。
  	 * @param U 参数 U。
  	 * @param V 参数 V。
  	 * @param P 存储点的位置。
  	 * @param D1U 存储 U 方向的一阶导数。
  	 * @param D1V 存储 V 方向的一阶导数。
  	 * @param D2U 存储 U 方向的二阶导数。
  	 * @param D2V 存储 V 方向的二阶导数。
  	 * @param D2UV 存储 U 和 V 方向的混合二阶导数。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算当前点在圆柱面上的位置及其一阶、二阶、三阶导数。
  	 * @param U 参数 U。
  	 * @param V 参数 V。
  	 * @param P 存储点的位置。
  	 * @param D1U 存储 U 方向的一阶导数。
  	 * @param D1V 存储 V 方向的一阶导数。
  	 * @param D2U 存储 U 方向的二阶导数。
  	 * @param D2V 存储 V 方向的二阶导数。
  	 * @param D2UV 存储 U 和 V 方向的混合二阶导数。
  	 * @param D3U 存储 U 方向的三阶导数。
  	 * @param D3V 存储 V 方向的三阶导数。
  	 * @param D3UUV 存储 U 和 U 方向的混合三阶导数。
  	 * @param D3UVV 存储 U 和 V 方向的混合三阶导数。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算指定阶数的导数向量。
  	 * @param U 参数 U。
  	 * @param V 参数 V。
  	 * @param Nu 导数阶数在 U 方向。
  	 * @param Nv 导数阶数在 V 方向。
  	 * @returns 导数向量。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 应用变换 T 到圆柱面。
  	 * @param T 变换矩阵。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建当前圆柱面的副本。
  	 * @returns 圆柱面的副本。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取当前对象的动态类型信息。
  	 * @returns 对象的类型字符串。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomCylindricalSurface 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomCylindricalSurface 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomCylindricalSurface;
  	/**
  	 * 创建圆柱面的面对象。
  	 * @param TolDegen 面的退化容差。
  	 * @returns 面对象。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 创建圆柱面的面对象，指定是否包含内部区域。
  	 * @param W 轮廓线。
  	 * @param Inside 是否包含内部区域。
  	 * @returns 面对象。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 创建圆柱面的面对象，指定参数范围。
  	 * @param UMin 参数 U 的最小值。
  	 * @param UMax 参数 U 的最大值。
  	 * @param VMin 参数 V 的最小值。
  	 * @param VMax 参数 V 的最大值。
  	 * @param TolDegen 面的退化容差。
  	 * @returns 面对象。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示三维空间中的球面。
   * 此类封装了操作球面属性和方法的功能。
   */
  export  class Mx3dGeomSphericalSurface extends Mx3dGeomElementarySurface {
  	/**
  	 * 构造一个具有给定坐标系统和半径的球面。
  	 * @param A3 表面局部坐标系统（Mx3dGeCSYSR）。
  	 * @param Radius 球的半径。
  	 */
  	constructor(A3: Mx3dGeCSYSR, Radius: number);
  	/**
  	 * 设置球面半径。
  	 * @param R 新的球面半径。必须为非负数。
  	 */
  	SetRadius(R: number): void;
  	/**
  	 * 计算在给定点上U参数方向反转后的U参数值。
  	 * @param U 原始的U参数。
  	 * @returns 反转后的U参数值。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 计算在给定点上V参数方向反转后的V参数值。
  	 * @param V 原始的V参数。
  	 * @returns 反转后的V参数值。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 计算球面面积。
  	 * @returns 表面面积。
  	 */
  	Area(): number;
  	/**
  	 * 检索参数域的边界。
  	 * @param U1U2V1V2 包含边界的数组：[dU1, dU2, dV1, dV2]。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 设置球面隐式方程的系数。
  	 * @param A1A2A3B1B2B3C1C2C3D 系数数组：[A1, A2, A3, B1, B2, B3, C1, C2, C3, D]。
  	 */
  	Coefficients(A1A2A3B1B2B3C1C2C3D: [
  		A1: number,
  		A2: number,
  		A3: number,
  		B1: number,
  		B2: number,
  		B3: number,
  		C1: number,
  		C2: number,
  		C3: number,
  		D: number
  	]): void;
  	/**
  	 * 返回球面半径。
  	 * @returns 球的半径。
  	 */
  	Radius(): number;
  	/**
  	 * 计算球面体积。
  	 * @returns 表面体积。
  	 */
  	Volume(): number;
  	/**
  	 * 检查表面在U方向是否闭合。
  	 * @returns 如果U方向闭合则为True，否则为False。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 检查表面在V方向是否闭合。
  	 * @returns 如果V方向闭合则为True，否则为False。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 检查表面在U方向是否周期性。
  	 * @returns 如果U方向周期性则为True，否则为False。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 检查表面在V方向是否周期性。
  	 * @returns 如果V方向周期性则为True，否则为False。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 计算给定U和V参数的表面点。
  	 * @param U U参数。
  	 * @param V V参数。
  	 * @param P 表面上的点。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算给定U和V参数的点及其一阶导数。
  	 * @param U U参数。
  	 * @param V V参数。
  	 * @param P 表面上的点。
  	 * @param D1U U方向的导数。
  	 * @param D1V V方向的导数。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算给定U和V参数的点、一阶和二阶导数。
  	 * @param U U参数。
  	 * @param V V参数。
  	 * @param P 表面上的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV 二阶混合导数。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算给定U和V参数的点、一阶、二阶和三阶导数。
  	 * @param U U参数。
  	 * @param V V参数。
  	 * @param P 表面上的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV 二阶混合导数。
  	 * @param D3U U方向的三阶导数。
  	 * @param D3V V方向的三阶导数。
  	 * @param D3UUV 三阶混合导数（U和U）。
  	 * @param D3UVV 三阶混合导数（U和V）。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算在U和V方向上的指定阶数导数。
  	 * @param U U参数。
  	 * @param V V参数。
  	 * @param Nu U方向上的导数阶数。
  	 * @param Nv V方向上的导数阶数。
  	 * @returns 第N阶导数向量。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 应用变换到球面。
  	 * @param T 要应用的变换。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建球面的副本。
  	 * @returns 球面的新实例。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 返回对象的动态类型。
  	 * @returns 动态类型的字符串。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomSphericalSurface 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomSphericalSurface 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomSphericalSurface;
  	/**
  	 * 使用退化容差生成表面的面。
  	 * @param TolDegen 退化容差。
  	 * @returns 表面表示的面。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 使用线框和内部标志生成表面的面。
  	 * @param W 定义边界的线框。
  	 * @param Inside 布尔值，表示面是否在线框内。
  	 * @returns 表面表示的面。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 使用指定的参数范围和退化容差生成表面的面。
  	 * @param UMin 参数范围的最小U值。
  	 * @param UMax 参数范围的最大U值。
  	 * @param VMin 参数范围的最小V值。
  	 * @param VMax 参数范围的最大V值。
  	 * @param TolDegen 退化容差，用于处理几何退化情况。
  	 * @returns 表面表示的面，通常是一个闭合的曲面片段。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示三维空间中的环面（Toroidal Surface）。
   * 此类封装了操作环面属性和方法的功能。
   */
  export  class Mx3dGeomToroidalSurface extends Mx3dGeomElementarySurface {
  	/**
  	 * 构造一个具有给定坐标系统和主要、次要半径的环面。
  	 * @param A3 表面局部坐标系统（Mx3dGeCSYSR）。
  	 * @param MajorRadius 环面的主要半径。
  	 * @param MinorRadius 环面的次要半径。
  	 */
  	constructor(A3: Mx3dGeCSYSR, MajorRadius: number, MinorRadius: number);
  	/**
  	 * 设置环面主要半径。
  	 * @param MajorRadius 新的主要半径。必须为非负数。
  	 */
  	SetMajorRadius(MajorRadius: number): void;
  	/**
  	 * 设置环面次要半径。
  	 * @param MinorRadius 新的次要半径。必须为非负数。
  	 */
  	SetMinorRadius(MinorRadius: number): void;
  	/**
  	 * 计算在给定U参数上的环面U方向反转后的参数值。
  	 * @param U 原始的U参数。
  	 * @returns 反转后的U参数值。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 计算在给定V参数上的环面V方向反转后的参数值。
  	 * @param V 原始的V参数。
  	 * @returns 反转后的V参数值。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 计算并返回环面的表面积。
  	 * @returns 表面积。
  	 */
  	Area(): number;
  	/**
  	 * 设置参数范围的边界。
  	 * @param U1U2V1V2 参数范围[U1, U2, V1, V2]。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 获取隐式方程系数。
  	 * @param Coef 系数数组，长度至少为31。
  	 */
  	Coefficients(Coef: number[]): void;
  	/**
  	 * 返回环面的主要半径。
  	 * @returns 主要半径。
  	 */
  	MajorRadius(): number;
  	/**
  	 * 返回环面的次要半径。
  	 * @returns 次要半径。
  	 */
  	MinorRadius(): number;
  	/**
  	 * 计算并返回环面的体积。
  	 * @returns 体积。
  	 */
  	Volume(): number;
  	/**
  	 * 检查环面U方向是否闭合。
  	 * @returns 如果U方向闭合则返回true，否则返回false。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 检查环面V方向是否闭合。
  	 * @returns 如果V方向闭合则返回true，否则返回false。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 检查环面U方向是否周期性。
  	 * @returns 如果U方向周期性则返回true，否则返回false。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 检查环面V方向是否周期性。
  	 * @returns 如果V方向周期性则返回true，否则返回false。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 计算并返回指定U和V参数处的点。
  	 * @param U 参数U。
  	 * @param V 参数V。
  	 * @param P 输出点（Mx3dGePoint）。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算当前点和U、V方向的一阶导数。
  	 * @param U 参数U。
  	 * @param V 参数V。
  	 * @param P 输出点（Mx3dGePoint）。
  	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
  	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算当前点、一阶和二阶导数。
  	 * @param U 参数U。
  	 * @param V 参数V。
  	 * @param P 输出点（Mx3dGePoint）。
  	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
  	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
  	 * @param D2U 输出U方向的二阶导数（Mx3dGeVec）。
  	 * @param D2V 输出V方向的二阶导数（Mx3dGeVec）。
  	 * @param D2UV 输出U,V方向的二阶混合导数（Mx3dGeVec）。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算当前点、一阶、二阶和三阶导数。
  	 * @param U 参数U。
  	 * @param V 参数V。
  	 * @param P 输出点（Mx3dGePoint）。
  	 * @param D1U 输出U方向的一阶导数（Mx3dGeVec）。
  	 * @param D1V 输出V方向的一阶导数（Mx3dGeVec）。
  	 * @param D2U 输出U方向的二阶导数（Mx3dGeVec）。
  	 * @param D2V 输出V方向的二阶导数（Mx3dGeVec）。
  	 * @param D2UV 输出U,V方向的二阶混合导数（Mx3dGeVec）。
  	 * @param D3U 输出U方向的三阶导数（Mx3dGeVec）。
  	 * @param D3V 输出V方向的三阶导数（Mx3dGeVec）。
  	 * @param D3UUV 输出U方向的二阶混合三阶导数（Mx3dGeVec）。
  	 * @param D3UVV 输出V方向的二阶混合三阶导数（Mx3dGeVec）。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算指定参数(U, V)处的高阶导数。
  	 * @param U 参数U。
  	 * @param V 参数V。
  	 * @param Nu 高阶导数的U方向阶数。
  	 * @param Nv 高阶导数的V方向阶数。
  	 * @returns 高阶导数（Mx3dGeVec）。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 应用变换T到环面。
  	 * @param T 变换（Mx3dGeTrsf）。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 创建一个新的对象，它是此环面的副本。
  	 * @returns 环面的副本（Mx3dGeomObject）。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 返回对象的动态类型字符串。
  	 * @returns 动态类型字符串。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomToroidalSurface 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomToroidalSurface 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomToroidalSurface;
  	/**
  	 * 创建一个表示环面的平面（由面容表示）。
  	 * @param TolDegen 退化容差。
  	 * @returns 平面（Mx3dShapeFace）。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 创建一个表示环面的平面（由线条表示）。
  	 * @param W 线条（Mx3dShapeWire）。
  	 * @param Inside 表示环面是否在内部。
  	 * @returns 平面（Mx3dShapeFace）。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 创建一个表示环面的平面（指定U, V范围）。
  	 * @param UMin 最小U参数。
  	 * @param UMax 最大U参数。
  	 * @param VMin 最小V参数。
  	 * @param VMax 最大V参数。
  	 * @param TolDegen 退化容差。
  	 * @returns 平面（Mx3dShapeFace）。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示一定范围内曲面的基类。
   */
  export  class Mx3dGeomBoundedSurface extends Mx3dGeomSurface {
  	/**
  	 * @internal
  	 */
  	constructor(p?: object);
  	/**
  	 * 返回对象的动态类型字符串。
  	 * @returns 动态类型字符串。
  	 */
  	DynamicType(): string;
  }
  /**
   * 表示一个B样条曲面，继承自Mx3dGeomBoundedSurface。
   * 提供多种操作和查询方法来处理B样条曲面。
   */
  export  class Mx3dGeomBSplineSurface extends Mx3dGeomBoundedSurface {
  	/**
  	 * 构造函数用于创建一个B样条曲面。
  	 * @param Poles 控制点数组，二维数组表示U方向和V方向的控制点。
  	 * @param dUKnots U方向的节点序列。
  	 * @param dVKnots V方向的节点序列。
  	 * @param iUMults U方向节点的多重性。
  	 * @param iVMults V方向节点的多重性。
  	 * @param UDegree U方向的曲线阶数。
  	 * @param VDegree V方向的曲线阶数。
  	 * @param UPeriodic U方向是否为周期性。
  	 * @param VPeriodic V方向是否为周期性。
  	 */
  	constructor(Poles: Mx3dGePoint[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
  	/**
     * 构造函数用于创建一个带权的B样条曲面。
     * @param Poles 控制点数组，二维数组表示U方向和V方向的控制点。
     * @param dWeights 控制点权重的二维数组。
     * @param dUKnots U方向的节点序列。
     * @param dVKnots V方向的节点序列。
     * @param iUMults U方向节点的多重性。
     * @param iVMults V方向节点的多重性。
     * @param UDegree U方向的曲线阶数。
     * @param VDegree V方向的曲线阶数。
     * @param UPeriodic U方向是否为周期性。
     * @param VPeriodic V方向是否为周期性。
     */
  	constructor(Poles: Mx3dGePoint[][], dWeights: number[][], dUKnots: number[], dVKnots: number[], iUMults: number[], iVMults: number[], UDegree: number, VDegree: number, UPeriodic: boolean, VPeriodic: boolean);
  	/**
  	 * 交换U和V方向的节点序列。
  	 */
  	ExchangeUV(): void;
  	/**
  	 * 设置U方向为周期性。
  	 */
  	SetUPeriodic(): void;
  	/**
  	 * 设置V方向为周期性。
  	 */
  	SetVPeriodic(): void;
  	/**
  	 * 对节点序列进行周期化规范化。
  	 * @param UV 代表U和V方向的参数。
  	 */
  	PeriodicNormalization(UV: [
  		dU: number,
  		dV: number
  	]): void;
  	/**
  	 * 设置U方向的原点索引。
  	 * @param Index 原点索引。
  	 */
  	SetUOrigin(Index: number): void;
  	/**
  	 * 设置V方向的原点索引。
  	 * @param Index 原点索引。
  	 */
  	SetVOrigin(Index: number): void;
  	/**
  	 * 设置U方向为非周期性。
  	 */
  	SetUNotPeriodic(): void;
  	/**
  	 * 设置V方向为非周期性。
  	 */
  	SetVNotPeriodic(): void;
  	/**
  	 * 反转U方向节点序列。
  	 */
  	UReverse(): void;
  	/**
  	 * 反转V方向节点序列。
  	 */
  	VReverse(): void;
  	/**
  	 * 计算U方向反向参数。
  	 * @param U 参数值。
  	 * @returns 返回反向后的参数值。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 计算V方向反向参数。
  	 * @param V 参数值。
  	 * @returns 返回反向后的参数值。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 提高曲面的U和V方向阶数。
  	 * @param UDegree 提高后的U方向阶数。
  	 * @param VDegree 提高后的V方向阶数。
  	 */
  	IncreaseDegree(UDegree: number, VDegree: number): void;
  	/**
  	 * 插入U方向节点。
  	 * @param dKnots 节点值数组。
  	 * @param iMults 节点多重性数组。
  	 * @param dParametricTolerance 参数容差。
  	 * @param Add 是否添加到曲面中。
  	 */
  	InsertUKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
  	/**
  	 * 插入V方向节点。
  	 * @param dKnots 节点值数组。
  	 * @param iMults 节点多重性数组。
  	 * @param dParametricTolerance 参数容差。
  	 * @param Add 是否添加到曲面中。
  	 */
  	InsertVKnots(dKnots: number[], iMults: number[], dParametricTolerance: number, Add: boolean): void;
  	/**
  	 * 移除U方向节点。
  	 * @param iIndex 节点索引。
  	 * @param iM 多重性。
  	 * @param dTolerance 容差值。
  	 * @returns 返回是否成功移除。
  	 */
  	RemoveUKnot(iIndex: number, iM: number, dTolerance: number): boolean;
  	/**
  	 * 移除V方向节点。
  	 * @param iIndex 节点索引。
  	 * @param iM 多重性。
  	 * @param dTolerance 容差值。
  	 * @returns 返回是否成功移除。
  	 */
  	RemoveVKnot(iIndex: number, iM: number, dTolerance: number): boolean;
  	/**
  	 * 增加U方向节点的多重性。
  	 * @param UIndex 节点索引。
  	 * @param M 多重性增量。
  	 */
  	IncreaseUMultiplicity(UIndex: number, M: number): void;
  	/**
  	 * 增加U方向节点多重性在指定区间内。
  	 * @param FromI1 起始索引。
  	 * @param ToI2 结束索引。
  	 * @param M 多重性增量。
  	 */
  	IncreaseUMultiplicity(FromI1: number, ToI2: number, M: number): void;
  	/**
  	 * 增加U方向节点多重性在指定区间内，按步骤增加。
  	 * @param FromI1 起始索引。
  	 * @param ToI2 结束索引。
  	 * @param Step 增量步骤。
  	 */
  	IncrementUMultiplicity(FromI1: number, ToI2: number, Step: number): void;
  	/**
  	 * 增加V方向节点的多重性。
  	 * @param VIndex 节点索引。
  	 * @param M 多重性增量。
  	 */
  	IncreaseVMultiplicity(VIndex: number, M: number): void;
  	/**
  	 * 增加V方向节点多重性在指定区间内。
  	 * @param FromI1 起始索引。
  	 * @param ToI2 结束索引。
  	 * @param M 多重性增量。
  	 */
  	IncreaseVMultiplicity(FromI1: number, ToI2: number, M: number): void;
  	/**
  	 * 增加V方向节点多重性在指定区间内，按步骤增加。
  	 * @param FromI1 起始索引。
  	 * @param ToI2 结束索引。
  	 * @param Step 增量步骤。
  	 */
  	IncrementVMultiplicity(FromI1: number, ToI2: number, Step: number): void;
  	/**
  	 * 插入U方向节点。
  	 * @param U 节点值。
  	 * @param M 多重性。
  	 * @param ParametricTolerance 参数容差。
  	 * @param Add 是否添加到曲面中。
  	 */
  	InsertUKnot(U: number, M: number, ParametricTolerance: number, Add: boolean): void;
  	/**
  	 * 插入V方向节点。
  	 * @param V 节点值。
  	 * @param M 多重性。
  	 * @param ParametricTolerance 参数容差。
  	 * @param Add 是否添加到曲面中。
  	 */
  	InsertVKnot(V: number, M: number, ParametricTolerance: number, Add: boolean): void;
  	/**
  	 * 获取指定U和V范围内的曲面片段。
  	 * @param U1 起始U参数。
  	 * @param U2 结束U参数。
  	 * @param V1 起始V参数。
  	 * @param V2 结束V参数。
  	 */
  	Segment(U1: number, U2: number, V1: number, V2: number): void;
  	/**
  	 * 检查并获取指定U和V范围内的曲面片段。
  	 * @param U1 起始U参数。
  	 * @param U2 结束U参数。
  	 * @param V1 起始V参数。
  	 * @param V2 结束V参数。
  	 */
  	CheckAndSegment(U1: number, U2: number, V1: number, V2: number): void;
  	/**
  	 * 设置U方向的节点值。
  	 * @param UIndex 节点索引。
  	 * @param K 新节点值。
  	 */
  	SetUKnot(UIndex: number, K: number): void;
  	/**
  	 * 设置U方向的节点值，包含多重性。
  	 * @param UIndex 节点索引。
  	 * @param K 新节点值。
  	 * @param M 多重性。
  	 */
  	SetUKnot(UIndex: number, K: number, M: number): void;
  	/**
  	 * 设置V方向的节点值。
  	 * @param VIndex 节点索引。
  	 * @param K 新节点值。
  	 */
  	SetVKnot(VIndex: number, K: number): void;
  	/**
  	 * 设置V方向的节点值，包含多重性。
  	 * @param VIndex 节点索引。
  	 * @param K 新节点值。
  	 * @param M 多重性。
  	 */
  	SetVKnot(VIndex: number, K: number, M: number): void;
  	/**
  	 * 设置U方向节点序列。
  	 * @param dUK 新的U方向节点序列。
  	 */
  	SetUKnots(dUK: number[]): void;
  	/**
  	 * 设置V方向节点序列。
  	 * @param dVK 新的V方向节点序列。
  	 */
  	SetVKnots(dVK: number[]): void;
  	/**
  	 * 定位U方向的节点。
  	 * @param U 参数值。
  	 * @param ParametricTolerance 参数容差。
  	 * @param I1I2 返回的起始和结束节点索引。
  	 * @param WithKnotRepetition 是否包含节点重复。
  	 */
  	LocateU(U: number, ParametricTolerance: number, I1I2: [
  		iI1: number,
  		iI2: number
  	], WithKnotRepetition: boolean): void;
  	/**
  	 * 定位V方向的节点。
  	 * @param V 参数值。
  	 * @param ParametricTolerance 参数容差。
  	 * @param I1I2 返回的起始和结束节点索引。
  	 * @param WithKnotRepetition 是否包含节点重复。
  	 */
  	LocateV(V: number, ParametricTolerance: number, I1I2: [
  		iI1: number,
  		iI2: number
  	], WithKnotRepetition: boolean): void;
  	/**
  	 * 设置指定U和V索引的控制点。
  	 * @param UIndex U方向索引。
  	 * @param VIndex V方向索引。
  	 * @param P 控制点。
  	 */
  	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint): void;
  	/**
  	 * 设置指定U和V索引的控制点及权重。
  	 * @param UIndex U方向索引。
  	 * @param VIndex V方向索引。
  	 * @param P 控制点。
  	 * @param Weight 权重值。
  	 */
  	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint, Weight: number): void;
  	/**
  	 * 设置指定V方向索引的控制点列。
  	 * @param VIndex V方向索引。
  	 * @param CPoles 控制点数组。
  	 */
  	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[]): void;
  	/**
  	 * 设置指定V方向索引的控制点列及权重。
  	 * @param VIndex V方向索引。
  	 * @param CPoles 控制点数组。
  	 * @param dCPoleWeights 控制点权重数组。
  	 */
  	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[], dCPoleWeights: number[]): void;
  	/**
  	 * 设置指定U方向索引的控制点行。
  	 * @param UIndex U方向索引。
  	 * @param CPoles 控制点数组。
  	 */
  	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[]): void;
  	/**
  	 * 设置指定U方向索引的控制点行及权重。
  	 * @param UIndex U方向索引。
  	 * @param CPoles 控制点数组。
  	 * @param dCPoleWeights 控制点权重数组。
  	 */
  	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[], dCPoleWeights: number[]): void;
  	/**
  	 * 设置指定U和V索引的权重值。
  	 * @param UIndex U方向索引。
  	 * @param VIndex V方向索引。
  	 * @param Weight 权重值。
  	 */
  	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
  	/**
  	 * 设置指定V方向索引的权重列。
  	 * @param VIndex V方向索引。
  	 * @param dCPoleWeights 权重数组。
  	 */
  	SetWeightCol(VIndex: number, dCPoleWeights: number[]): void;
  	/**
  	 * 设置指定U方向索引的权重行。
  	 * @param UIndex U方向索引。
  	 * @param dCPoleWeights 权重数组。
  	 */
  	SetWeightRow(UIndex: number, dCPoleWeights: number[]): void;
  	/**
  	 * 移动指定U和V索引的控制点。
  	 * @param U U参数值。
  	 * @param V V参数值。
  	 * @param P 新的控制点。
  	 * @param UIndex1 U方向起始索引。
  	 * @param UIndex2 U方向结束索引。
  	 * @param VIndex1 V方向起始索引。
  	 * @param VIndex2 V方向结束索引。
  	 * @param UFULVFVL 索引数组。
  	 */
  	MovePoint(U: number, V: number, P: Mx3dGePoint, UIndex1: number, UIndex2: number, VIndex1: number, VIndex2: number, UFULVFVL: [
  		iUF: number,
  		iUL: number,
  		iVF: number,
  		iVL: number
  	]): void;
  	/**
  	 * 检查U方向是否为周期性。
  	 * @returns 返回是否为周期性。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 检查V方向是否为周期性。
  	 * @returns 返回是否为周期性。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 检查U方向是否为连续N阶。
  	 * @param N 连续阶数。
  	 * @returns 返回是否为连续N阶。
  	 */
  	IsCNu(N: number): boolean;
  	/**
  	 * 检查V方向是否为连续N阶。
  	 * @param N 连续阶数。
  	 * @returns 返回是否为连续N阶。
  	 */
  	IsCNv(N: number): boolean;
  	/**
  	 * 检查U方向是否为周期性。
  	 * @returns 返回是否为周期性。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 检查U方向是否为有理。
  	 * @returns 返回是否为有理。
  	 */
  	IsURational(): boolean;
  	/**
  	 * 检查V方向是否为周期性。
  	 * @returns 返回是否为周期性。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 检查V方向是否为有理。
  	 * @returns 返回是否为有理。
  	 */
  	IsVRational(): boolean;
  	/**
  	 * 获取曲面的边界。
  	 * @param U1U2V1V2 边界参数。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 获取曲面的连续性。
  	 * @returns 返回曲面的连续性类型。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 获取U方向的第一个节点索引。
  	 * @returns 返回第一个节点索引。
  	 */
  	FirstUKnotIndex(): number;
  	/**
  	 * 获取V方向的第一个节点索引。
  	 * @returns 返回第一个节点索引。
  	 */
  	FirstVKnotIndex(): number;
  	/**
  	 * 获取U方向的最后一个节点索引。
  	 * @returns 返回最后一个节点索引。
  	 */
  	LastUKnotIndex(): number;
  	/**
  	 * 获取V方向的最后一个节点索引。
  	 * @returns 返回最后一个节点索引。
  	 */
  	LastVKnotIndex(): number;
  	/**
  	 * 获取U方向节点数目。
  	 * @returns 返回节点数目。
  	 */
  	NbUKnots(): number;
  	/**
  	 * 获取U方向控制点数目。
  	 * @returns 返回控制点数目。
  	 */
  	NbUPoles(): number;
  	/**
  	 * 获取V方向节点数目。
  	 * @returns 返回节点数目。
  	 */
  	NbVKnots(): number;
  	/**
  	 * 获取V方向控制点数目。
  	 * @returns 返回控制点数目。
  	 */
  	NbVPoles(): number;
  	/**
  	 * 获取指定U和V索引的控制点。
  	 * @param UIndex U方向索引。
  	 * @param VIndex V方向索引。
  	 * @returns 返回控制点。
  	 */
  	Pole(UIndex: number, VIndex: number): Mx3dGePoint;
  	/**
  	 * 获取所有控制点。
  	 * @returns 返回控制点数组。
  	 */
  	Poles(): Mx3dGePoint[][];
  	/**
  	 * 获取U方向的阶数。
  	 * @returns 返回U方向的阶数。
  	 */
  	UDegree(): number;
  	/**
  	 * 获取指定U方向的节点值。
  	 * @param UIndex 节点索引。
  	 * @returns 返回节点值。
  	 */
  	UKnot(UIndex: number): number;
  	/**
  	 * 获取U方向节点数组。
  	 * @returns 返回节点数组。
  	 */
  	UKnots(): number[];
  	/**
  	 * 获取U方向节点序列。
  	 * @returns 返回节点序列。
  	 */
  	UKnotSequence(): number[];
  	/**
  	 * 获取U方向节点多重性。
  	 * @param UIndex 节点索引。
  	 * @returns 返回节点多重性。
  	 */
  	UMultiplicity(UIndex: number): number;
  	/**
  	 * 获取U方向节点多重性数组。
  	 * @returns 返回节点多重性数组。
  	 */
  	UMultiplicities(): number[];
  	/**
  	 * 获取V方向的阶数。
  	 * @returns 返回V方向的阶数。
  	 */
  	VDegree(): number;
  	/**
  	 * 获取指定V方向的节点值。
  	 * @param VIndex 节点索引。
  	 * @returns 返回节点值。
  	 */
  	VKnot(VIndex: number): number;
  	/**
  	 * 获取V方向节点数组。
  	 * @returns 返回节点数组。
  	 */
  	VKnots(): number[];
  	/**
  	 * 获取V方向节点序列。
  	 * @returns 返回节点序列。
  	 */
  	VKnotSequence(): number[];
  	/**
  	 * 获取V方向节点多重性。
  	 * @param VIndex 节点索引。
  	 * @returns 返回节点多重性。
  	 */
  	VMultiplicity(VIndex: number): number;
  	/**
  	 * 获取V方向节点多重性数组。
  	 * @returns 返回节点多重性数组。
  	 */
  	VMultiplicities(): number[];
  	/**
  	 * 获取指定U和V索引的权重值。
  	 * @param UIndex U方向索引。
  	 * @param VIndex V方向索引。
  	 * @returns 返回权重值。
  	 */
  	Weight(UIndex: number, VIndex: number): number;
  	/**
  	 * 获取所有权重数组。
  	 * @returns 返回权重数组。
  	 */
  	Weights(): number[][];
  	/**
  	 * 计算指定参数点的零阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 返回的点。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算指定参数点的一阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算指定参数点的二阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV U和V方向的混合二阶导数。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算指定参数点的三阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV U和V方向的混合二阶导数。
  	 * @param D3U U方向的三阶导数。
  	 * @param D3V V方向的三阶导数。
  	 * @param D3UUV U和U方向的混合三阶导数。
  	 * @param D3UVV U和V方向的混合三阶导数。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算指定参数点的N阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param Nu 导数阶数U。
  	 * @param Nv 导数阶数V。
  	 * @returns 返回导数向量。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 计算局部参数点的零阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 从U方向的起始节点。
  	 * @param ToUK2 到U方向的结束节点。
  	 * @param FromVK1 从V方向的起始节点。
  	 * @param ToVK2 到V方向的结束节点。
  	 * @param P 返回的点。
  	 */
  	LocalD0(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算局部参数点的一阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 从U方向的起始节点。
  	 * @param ToUK2 到U方向的结束节点。
  	 * @param FromVK1 从V方向的起始节点。
  	 * @param ToVK2 到V方向的结束节点。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 */
  	LocalD1(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算局部参数点的二阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 从U方向的起始节点。
  	 * @param ToUK2 到U方向的结束节点。
  	 * @param FromVK1 从V方向的起始节点。
  	 * @param ToVK2 到V方向的结束节点。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV U和V方向的混合二阶导数。
  	 */
  	LocalD2(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算局部参数点的三阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 从U方向的起始节点。
  	 * @param ToUK2 到U方向的结束节点。
  	 * @param FromVK1 从V方向的起始节点。
  	 * @param ToVK2 到V方向的结束节点。
  	 * @param P 返回的点。
  	 * @param D1U U方向的一阶导数。
  	 * @param D1V V方向的一阶导数。
  	 * @param D2U U方向的二阶导数。
  	 * @param D2V V方向的二阶导数。
  	 * @param D2UV U和V方向的混合二阶导数。
  	 * @param D3U U方向的三阶导数。
  	 * @param D3V V方向的三阶导数。
  	 * @param D3UUV U和U方向的混合三阶导数。
  	 * @param D3UVV U和V方向的混合三阶导数。
  	 */
  	LocalD3(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算局部参数点的N阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 从U方向的起始节点。
  	 * @param ToUK2 到U方向的结束节点。
  	 * @param FromVK1 从V方向的起始节点。
  	 * @param ToVK2 到V方向的结束节点。
  	 * @param Nu 导数阶数U。
  	 * @param Nv 导数阶数V。
  	 * @returns 返回导数向量。
  	 */
  	LocalDN(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 在局部范围内计算曲面上的点。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param FromUK1 U方向起始索引。
  	 * @param ToUK2 U方向结束索引。
  	 * @param FromVK1 V方向起始索引。
  	 * @param ToVK2 V方向结束索引。
  	 * @returns 返回计算点的二维点。
  	 */
  	LocalValue(U: number, V: number, FromUK1: number, ToUK2: number, FromVK1: number, ToVK2: number): Mx3dGePoint;
  	/**
  	 * 应用变换矩阵到曲面。
  	 * @param T 变换矩阵。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 复制当前曲面对象。
  	 * @returns 返回一个新的曲面对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	/**
  	 * 获取动态类型名称。
  	 * @returns 返回类型名称的字符串。
  	 */
  	DynamicType(): string;
  	/**
  	 * @internal
  	 */
  	DynCast(theObject: Mx3dGeomObject): this;
  	/**
  	 * 父类对象转 Mx3dGeomBSplineSurface 类对象
  	 * @param theObject 父类对象
  	 * @returns Mx3dGeomBSplineSurface 类对象
  	 */
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBSplineSurface;
  	/**
  	 * 根据容忍度生成面片。
  	 * @param TolDegen 容忍度。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 根据线条和是否在内部生成面片。
  	 * @param W 线条对象。
  	 * @param Inside 是否在内部。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 根据U、V范围和容忍度生成面片。
  	 * @param UMin U方向最小值。
  	 * @param UMax U方向最大值。
  	 * @param VMin V方向最小值。
  	 * @param VMax V方向最大值。
  	 * @param TolDegen 容忍度。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示一个Bezier曲面，继承自Mx3dGeomBoundedSurface。
   * 提供多种操作和查询方法来处理Bezier曲面。
   */
  export  class Mx3dGeomBezierSurface extends Mx3dGeomBoundedSurface {
  	/**
  	 * 构造函数用于创建一个Bezier曲面。
  	 * @param SurfacePoles 控制点数组，二维数组形式。
  	 * @param PoleWeights 控制点权重数组（可选）。
  	 */
  	constructor(SurfacePoles: Mx3dGePoint[][], PoleWeights?: number[][]);
  	/**
  	 * 交换U和V方向的顺序。
  	 */
  	ExchangeUV(): void;
  	/**
  	 * 增加曲面的阶数。
  	 * @param UDeg U方向的增加阶数。
  	 * @param VDeg V方向的增加阶数。
  	 */
  	Increase(UDeg: number, VDeg: number): void;
  	/**
  	 * 在指定列后插入一个新的控制点列。
  	 * @param VIndex 列的索引。
  	 * @param CPoles 要插入的控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	InsertPoleColAfter(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 在指定列前插入一个新的控制点列。
  	 * @param VIndex 列的索引。
  	 * @param CPoles 要插入的控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	InsertPoleColBefore(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 在指定行后插入一个新的控制点行。
  	 * @param UIndex 行的索引。
  	 * @param CPoles 要插入的控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	InsertPoleRowAfter(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 在指定行前插入一个新的控制点行。
  	 * @param UIndex 行的索引。
  	 * @param CPoles 要插入的控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	InsertPoleRowBefore(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 移除指定列的控制点。
  	 * @param VIndex 列的索引。
  	 */
  	RemovePoleCol(VIndex: number): void;
  	/**
  	 * 移除指定行的控制点。
  	 * @param UIndex 行的索引。
  	 */
  	RemovePoleRow(UIndex: number): void;
  	/**
  	 * 定义曲面的一个部分，指定U和V的范围。
  	 * @param U1 起始U值。
  	 * @param U2 结束U值。
  	 * @param V1 起始V值。
  	 * @param V2 结束V值。
  	 */
  	Segment(U1: number, U2: number, V1: number, V2: number): void;
  	/**
  	 * 设置指定位置的控制点和权重。
  	 * @param UIndex U方向的索引。
  	 * @param VIndex V方向的索引。
  	 * @param P 控制点位置。
  	 * @param Weight 控制点权重（可选）。
  	 */
  	SetPole(UIndex: number, VIndex: number, P: Mx3dGePoint, Weight?: number): void;
  	/**
  	 * 设置指定列的控制点和权重。
  	 * @param VIndex 列的索引。
  	 * @param CPoles 控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	SetPoleCol(VIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 设置指定行的控制点和权重。
  	 * @param UIndex 行的索引。
  	 * @param CPoles 控制点数组。
  	 * @param CPoleWeights 控制点权重数组（可选）。
  	 */
  	SetPoleRow(UIndex: number, CPoles: Mx3dGePoint[], CPoleWeights?: number[]): void;
  	/**
  	 * 设置指定控制点的权重。
  	 * @param UIndex U方向的索引。
  	 * @param VIndex V方向的索引。
  	 * @param Weight 权重值。
  	 */
  	SetWeight(UIndex: number, VIndex: number, Weight: number): void;
  	/**
  	 * 设置指定列的控制点权重。
  	 * @param VIndex 列的索引。
  	 * @param CPoleWeights 控制点权重数组。
  	 */
  	SetWeightCol(VIndex: number, CPoleWeights: number[]): void;
  	/**
  	 * 设置指定行的控制点权重。
  	 * @param UIndex 行的索引。
  	 * @param CPoleWeights 控制点权重数组。
  	 */
  	SetWeightRow(UIndex: number, CPoleWeights: number[]): void;
  	/**
  	 * 反转U方向的参数。
  	 */
  	UReverse(): void;
  	/**
  	 * 计算反向U参数。
  	 * @param U 参数U值。
  	 * @returns 返回反向参数。
  	 */
  	UReversedParameter(U: number): number;
  	/**
  	 * 反转V方向的参数。
  	 */
  	VReverse(): void;
  	/**
  	 * 计算反向V参数。
  	 * @param V 参数V值。
  	 * @returns 返回反向参数。
  	 */
  	VReversedParameter(V: number): number;
  	/**
  	 * 获取曲面的边界范围。
  	 * @param U1U2V1V2 范围数组。
  	 */
  	Bounds(U1U2V1V2: [
  		dU1: number,
  		dU2: number,
  		dV1: number,
  		dV2: number
  	]): void;
  	/**
  	 * 获取曲面的连续性。
  	 * @returns 返回连续性枚举值。
  	 */
  	Continuity(): MdGe.MxGAShapeEnum;
  	/**
  	 * 计算曲面在指定点的零阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 输出点。
  	 */
  	D0(U: number, V: number, P: Mx3dGePoint): void;
  	/**
  	 * 计算曲面在指定点的一级导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 输出点。
  	 * @param D1U 输出U方向的一阶导数向量。
  	 * @param D1V 输出V方向的一阶导数向量。
  	 */
  	D1(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec): void;
  	/**
  	 * 计算曲面在指定点的二阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 输出点。
  	 * @param D1U 输出U方向的一阶导数向量。
  	 * @param D1V 输出V方向的一阶导数向量。
  	 * @param D2U 输出U方向的二阶导数向量。
  	 * @param D2V 输出V方向的二阶导数向量。
  	 * @param D2UV 输出UV方向的二阶导数向量。
  	 */
  	D2(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec): void;
  	/**
  	 * 计算曲面在指定点的三阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param P 输出点。
  	 * @param D1U 输出U方向的一阶导数向量。
  	 * @param D1V 输出V方向的一阶导数向量。
  	 * @param D2U 输出U方向的二阶导数向量。
  	 * @param D2V 输出V方向的二阶导数向量。
  	 * @param D2UV 输出UV方向的二阶导数向量。
  	 * @param D3U 输出U方向的三阶导数向量。
  	 * @param D3V 输出V方向的三阶导数向量。
  	 * @param D3UUV 输出UU方向的三阶导数向量。
  	 * @param D3UVV 输出UV方向的三阶导数向量。
  	 */
  	D3(U: number, V: number, P: Mx3dGePoint, D1U: Mx3dGeVec, D1V: Mx3dGeVec, D2U: Mx3dGeVec, D2V: Mx3dGeVec, D2UV: Mx3dGeVec, D3U: Mx3dGeVec, D3V: Mx3dGeVec, D3UUV: Mx3dGeVec, D3UVV: Mx3dGeVec): void;
  	/**
  	 * 计算曲面在指定点的N阶导数。
  	 * @param U 参数U值。
  	 * @param V 参数V值。
  	 * @param Nu U方向阶数。
  	 * @param Nv V方向阶数。
  	 * @returns 返回导数向量。
  	 */
  	DN(U: number, V: number, Nu: number, Nv: number): Mx3dGeVec;
  	/**
  	 * 获取U方向上的控制点数量。
  	 * @returns 返回U方向控制点数量。
  	 */
  	NbUPoles(): number;
  	/**
  	 * 获取V方向上的控制点数量。
  	 * @returns 返回V方向控制点数量。
  	 */
  	NbVPoles(): number;
  	/**
  	 * 获取指定控制点位置。
  	 * @param UIndex U方向的索引。
  	 * @param VIndex V方向的索引。
  	 * @returns 返回控制点位置。
  	 */
  	Pole(UIndex: number, VIndex: number): Mx3dGePoint;
  	/**
  	 * 获取所有控制点数组。
  	 * @returns 返回控制点二维数组。
  	 */
  	Poles(): Mx3dGePoint[][];
  	/**
  	 * 获取U方向的阶数。
  	 * @returns 返回U方向的阶数。
  	 */
  	UDegree(): number;
  	/**
  	 * 获取指定控制点的权重。
  	 * @param UIndex U方向的索引。
  	 * @param VIndex V方向的索引。
  	 * @returns 返回权重值。
  	 */
  	Weight(UIndex: number, VIndex: number): number;
  	/**
  	 * 获取所有控制点权重数组。
  	 * @returns 返回控制点权重二维数组。
  	 */
  	Weights(): number[][];
  	/**
  	 * 判断U方向是否闭合。
  	 * @returns 返回是否闭合的布尔值。
  	 */
  	IsUClosed(): boolean;
  	/**
  	 * 判断V方向是否闭合。
  	 * @returns 返回是否闭合的布尔值。
  	 */
  	IsVClosed(): boolean;
  	/**
  	 * 判断U方向上的连续阶数。
  	 * @param N 阶数。
  	 * @returns 返回是否连续的布尔值。
  	 */
  	IsCNu(N: number): boolean;
  	/**
  	 * 判断V方向上的连续阶数。
  	 * @param N 阶数。
  	 * @returns 返回是否连续的布尔值。
  	 */
  	IsCNv(N: number): boolean;
  	/**
  	 * 判断U方向是否周期性。
  	 * @returns 返回是否周期性的布尔值。
  	 */
  	IsUPeriodic(): boolean;
  	/**
  	 * 判断V方向是否周期性。
  	 * @returns 返回是否周期性的布尔值。
  	 */
  	IsVPeriodic(): boolean;
  	/**
  	 * 判断U方向是否为有理曲面。
  	 * @returns 返回是否有理曲面的布尔值。
  	 */
  	IsURational(): boolean;
  	/**
  	 * 判断V方向是否为有理曲面。
  	 * @returns 返回是否有理曲面的布尔值。
  	 */
  	IsVRational(): boolean;
  	/**
  	 * 应用变换矩阵到曲面。
  	 * @param T 变换矩阵。
  	 */
  	Transform(T: Mx3dGeTrsf): void;
  	/**
  	 * 复制当前曲面对象。
  	 * @returns 返回一个新的曲面对象。
  	 */
  	Copy(): Mx3dGeomObject;
  	DynCast(theObject: Mx3dGeomObject): this;
  	static DownCast(theObject: Mx3dGeomObject): Mx3dGeomBezierSurface;
  	/**
  	 * 根据容忍度生成面片。
  	 * @param TolDegen 容忍度。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(TolDegen: number): Mx3dShapeFace;
  	/**
  	 * 根据线条和是否在内部生成面片。
  	 * @param W 线条对象。
  	 * @param Inside 是否在内部。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(W: Mx3dShapeWire, Inside: boolean): Mx3dShapeFace;
  	/**
  	 * 根据U、V范围和容忍度生成面片。
  	 * @param UMin U方向最小值。
  	 * @param UMax U方向最大值。
  	 * @param VMin V方向最小值。
  	 * @param VMax V方向最大值。
  	 * @param TolDegen 容忍度。
  	 * @returns 返回生成的面片对象。
  	 */
  	Face(UMin: number, UMax: number, VMin: number, VMax: number, TolDegen: number): Mx3dShapeFace;
  }
  /**
   * 表示三维图形中的材料属性，封装了材料的各种属性和设置方法。
   */
  export  class Mx3dGeMaterial extends Mx3dBaseObject {
  	/**
  	 * 创建一个默认材料对象。
  	 */
  	constructor();
  	/**
  	 * 创建一个具有指定名称的材料对象。
  	 * @param theName 材料名称，参见 MdGe.MxNameOfMaterial。
  	 */
  	constructor(theName: MdGe.MxNameOfMaterial);
  	/**
  	 * 返回材料的名称。
  	 * @returns 材料名称。
  	 */
  	Name(): MdGe.MxNameOfMaterial;
  	/**
  	 * 返回请求的材料名称。
  	 * @returns 请求的材料名称。
  	 */
  	RequestedName(): MdGe.MxNameOfMaterial;
  	/**
  	 * 返回材料的字符串表示形式。
  	 * @returns 材料的字符串名称。
  	 */
  	StringName(): string;
  	/**
  	 * 返回材料的名称（字符串形式）。
  	 * @returns 材料的字符串名称。
  	 */
  	MaterialName(): string;
  	/**
  	 * 设置材料的名称。
  	 * @param theName 新的材料名称。
  	 */
  	SetMaterialName(theName: string): void;
  	/**
  	 * 重置材料属性为默认值。
  	 */
  	Reset(): void;
  	/**
  	 * 返回材料的颜色。
  	 * @returns 材料的颜色。
  	 */
  	Color(): Mx3dGeColor;
  	/**
  	 * 设置材料的颜色。
  	 * @param theColor 新的颜色。
  	 */
  	SetColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 返回透明度系数（0.0为完全透明，1.0为完全不透明）。
  	 * @returns 透明度系数。
  	 */
  	Transparency(): number;
  	/**
  	 * 返回反透明度系数（0.0为完全透明，1.0为完全不透明）。
  	 * @returns 反透明度系数。
  	 */
  	Alpha(): number;
  	/**
  	 * 设置透明度系数。
  	 * @param theValue 透明度系数（0.0至1.0）。
  	 */
  	SetTransparency(theValue: number): void;
  	/**
  	 * 设置反透明度系数。
  	 * @param theValue 反透明度系数（0.0至1.0）。
  	 */
  	SetAlpha(theValue: number): void;
  	/**
  	 * 返回环境光颜色。
  	 * @returns 环境光颜色。
  	 */
  	AmbientColor(): Mx3dGeColor;
  	/**
  	 * 设置环境光颜色。
  	 * @param theColor 新的环境光颜色。
  	 */
  	SetAmbientColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 返回漫反射颜色。
  	 * @returns 漫反射颜色。
  	 */
  	DiffuseColor(): Mx3dGeColor;
  	/**
  	 * 设置漫反射颜色。
  	 * @param theColor 新的漫反射颜色。
  	 */
  	SetDiffuseColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 返回镜面反射颜色。
  	 * @returns 镜面反射颜色。
  	 */
  	SpecularColor(): Mx3dGeColor;
  	/**
  	 * 设置镜面反射颜色。
  	 * @param theColor 新的镜面反射颜色。
  	 */
  	SetSpecularColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 返回发光颜色。
  	 * @returns 发光颜色。
  	 */
  	EmissiveColor(): Mx3dGeColor;
  	/**
  	 * 设置发光颜色。
  	 * @param theColor 新的发光颜色。
  	 */
  	SetEmissiveColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 返回材料的光泽度。
  	 * @returns 光泽度值。
  	 */
  	Shininess(): number;
  	/**
  	 * 设置材料的光泽度。
  	 * @param theValue 新的光泽度值（通常在0到1之间）。
  	 */
  	SetShininess(theValue: number): void;
  	/**
  	 * 增加光泽度。
  	 * @param theDelta 增加的百分比。
  	 */
  	IncreaseShine(theDelta: number): void;
  	/**
  	 * 返回折射率。
  	 * @returns 折射率值。
  	 */
  	RefractionIndex(): number;
  	/**
  	 * 设置折射率。
  	 * @param theValue 新的折射率值，必须大于等于1.0。
  	 */
  	SetRefractionIndex(theValue: number): void;
  	/**
  	 * 检查指定类型的反射模式是否启用。
  	 * @param theType 反射类型，参见 MdGe.MxTypeOfReflection。
  	 * @returns 如果指定类型的反射模式启用，则返回 true，否则返回 false。
  	 */
  	ReflectionMode(theType: MdGe.MxTypeOfReflection): boolean;
  	/**
  	 * 返回材料类型。
  	 * @returns 材料类型，参见 MdGe.MxTypeOfMaterial。
  	 */
  	MaterialType(): MdGe.MxTypeOfMaterial;
  	/**
  	 * 设置材料类型。
  	 * @param theType 新的材料类型，参见 MdGe.MxTypeOfMaterial。
  	 */
  	SetMaterialType(theType: MdGe.MxTypeOfMaterial): void;
  	/**
  	 * 检查当前材料是否与另一个材料不同。
  	 * @param theOther 另一个材料对象。
  	 * @returns 如果当前材料与另一个材料不同，则返回 true，否则返回 false。
  	 */
  	IsDifferent(theOther: Mx3dGeMaterial): boolean;
  	/**
  	 * 检查当前材料是否与另一个材料相等。
  	 * @param theOther 另一个材料对象。
  	 * @returns 如果当前材料与另一个材料相等，则返回 true，否则返回 false。
  	 */
  	IsEqual(theOther: Mx3dGeMaterial): boolean;
  }
  /**
   * 表示线样式。
   */
  export  class Mx3dAspectLine extends Mx3dAspectObject {
  	/**
  	 * 构造函数，创建一个指定颜色，线型，线宽的线样式对象。
  	 * @param theColor 颜色。
  	 * @param theType 线型。
  	 * @param theWidth 线宽。
  	 */
  	constructor(theColor: Mx3dGeColor, theType: MdGe.MxTypeOfLine, theWidth: number);
  	/**
  	 * 设置线样式对象的颜色。
  	 * @param theColor 要设置的颜色对象（Mx3dGeColor）。
  	 */
  	SetColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 设置线样式对象的线型。
  	 * @param theType 线型。
  	 */
  	SetTypeOfLine(theType: MdGe.MxTypeOfLine): void;
  	/**
  	 * 设置线样式对象的线宽。
  	 * @param theWidth 线宽。
  	 */
  	SetWidth(theWidth: number): void;
  }
  /**
   * 表示用于定义文本显示属性的类。
   * 此类封装了设置文本颜色、字体、高度、角度、对齐方式和方向的方法。
   */
  export  class Mx3dAspectText extends Mx3dAspectObject {
  	/**
  	 * 创建一个默认的文字样式对象。
  	 */
  	constructor();
  	/**
  	 * 设置文本显示的颜色。
  	 * @param theColor 要设置的颜色对象（Mx3dGeColor）。
  	 */
  	SetColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 设置文本显示的字体。
  	 * @param theFont 要设置的字体名称。
  	 */
  	SetFont(theFont: string): void;
  	/**
  	 * 设置文本显示的高度。
  	 * @param theHeight 要设置的文本高度。
  	 */
  	SetHeight(theHeight: number): void;
  	/**
  	 * 设置文本显示的角度。
  	 * @param theAngle 要设置的文本角度。
  	 */
  	SetAngle(theAngle: number): void;
  	/**
  	 * 获取文本显示的高度。
  	 * @returns 文本的高度。
  	 */
  	Height(): number;
  	/**
  	 * 获取文本显示的角度。
  	 * @returns 文本的角度。
  	 */
  	Angle(): number;
  	/**
  	 * 设置文本的水平对齐方式。
  	 * @param theJustification 要设置的水平对齐方式（MdGe.MxHorizontalTextAlignment）。
  	 */
  	SetHorizontalJustification(theJustification: MdGe.MxHorizontalTextAlignment): void;
  	/**
  	 * 设置文本的垂直对齐方式。
  	 * @param theJustification 要设置的垂直对齐方式（MdGe.MxVerticalTextAlignment）。
  	 */
  	SetVerticalJustification(theJustification: MdGe.MxVerticalTextAlignment): void;
  	/**
  	 * 设置文本的显示方向。
  	 * @param theOrientation 要设置的文本方向（MdGe.MxTextPath）。
  	 */
  	SetOrientation(theOrientation: MdGe.MxTextPath): void;
  	/**
  	 * 获取文本的水平对齐方式。
  	 * @returns 水平对齐方式（MdGe.MxHorizontalTextAlignment）。
  	 */
  	HorizontalJustification(): MdGe.MxHorizontalTextAlignment;
  	/**
  	 * 获取文本的垂直对齐方式。
  	 * @returns 垂直对齐方式（MdGe.MxVerticalTextAlignment）。
  	 */
  	VerticalJustification(): MdGe.MxVerticalTextAlignment;
  	/**
  	 * 获取文本的显示方向。
  	 * @returns 文本方向（MdGe.MxTextPath）。
  	 */
  	Orientation(): MdGe.MxTextPath;
  }
  /**
   * Mx3dAspectArrow 类用于定义箭头的显示属性。
   * 该类提供了设置箭头角度、长度、颜色和缩放特性的方法。
   */
  export  class Mx3dAspectArrow extends Mx3dAspectObject {
  	/**
  	 * 构造一个箭头显示属性对象。
  	 */
  	constructor();
  	/**
  	 * 构造一个具有指定角度和长度的箭头显示属性对象。
  	 * @param anAngle 箭头的角度。
  	 * @param aLength 箭头的长度。
  	 */
  	constructor(anAngle: number, aLength: number);
  	/**
  	 * 设置箭头的角度。
  	 * @param anAngle 要设置的箭头角度。
  	 */
  	SetAngle(anAngle: number): void;
  	/**
  	 * 获取箭头的当前角度。
  	 * @returns 当前箭头的角度。
  	 */
  	Angle(): number;
  	/**
  	 * 设置箭头的长度。
  	 * @param theLength 要设置的箭头长度。
  	 */
  	SetLength(theLength: number): void;
  	/**
  	 * 获取箭头的当前长度。
  	 * @returns 当前箭头的长度。
  	 */
  	Length(): number;
  	/**
  	 * 设置箭头是否可缩放。
  	 * @param theIsZoomable 如果为 true，箭头是可缩放的；否则为 false。
  	 */
  	SetZoomable(theIsZoomable: boolean): void;
  	/**
  	 * 检查箭头是否可缩放。
  	 * @returns 如果箭头是可缩放的，则返回 true；否则返回 false。
  	 */
  	IsZoomable(): boolean;
  	/**
  	 * 设置箭头的颜色。
  	 * @param theColor 要设置的箭头颜色。
  	 */
  	SetColor(theColor: Mx3dGeColor): void;
  }
  /**
   * Mx3dAspectDim 类定义了在 3D 表示中显示尺寸的属性。
   * 这包括尺寸测量相关的线条、文本和箭头的设置。
   */
  export  class Mx3dAspectDim extends Mx3dAspectObject {
  	/**
  	 * 构造函数，创建一个默认的显示尺寸的属性对象。
  	 */
  	constructor();
  	/**
  	 * 设置尺寸线条的显示属性。
  	 * @param theAspect - 线条显示属性。
  	 */
  	SetLineAspect(theAspect: Mx3dAspectLine): void;
  	/**
  	 * 设置尺寸文本的显示属性。
  	 * @param theAspect - 文本显示属性。
  	 */
  	SetTextAspect(theAspect: Mx3dAspectText): void;
  	/**
  	 * 检查尺寸文本是否为 3D。
  	 * @returns 如果文本为 3D，返回 true，否则返回 false。
  	 */
  	IsText3d(): boolean;
  	/**
  	 * 设置尺寸文本为 3D 或 2D。
  	 * @param isText3d - 如果为 true，将文本设置为 3D；否则为 2D。
  	 */
  	MakeText3d(isText3d: boolean): void;
  	/**
  	 * 检查 3D 尺寸文本是否有阴影。
  	 * @returns 如果文本有阴影，返回 true，否则返回 false。
  	 */
  	IsTextShaded(): boolean;
  	/**
  	 * 开启或关闭 3D 尺寸文本的阴影。
  	 * @param theIsTextShaded - 如果为 true，开启阴影；否则关闭阴影。
  	 */
  	MakeTextShaded(theIsTextShaded: boolean): void;
  	/**
  	 * 检查箭头是否为 3D。
  	 * @returns 如果箭头为 3D，返回 true，否则返回 false。
  	 */
  	IsArrows3d(): boolean;
  	/**
  	 * 设置箭头为 3D 或 2D。
  	 * @param theIsArrows3d - 如果为 true，将箭头设置为 3D；否则为 2D。
  	 */
  	MakeArrows3d(theIsArrows3d: boolean): void;
  	/**
  	 * 检查是否显示单位。
  	 * @returns 如果显示单位，返回 true，否则返回 false。
  	 */
  	IsUnitsDisplayed(): boolean;
  	/**
  	 * 设置是否显示单位。
  	 * @param theIsDisplayed - 如果为 true，显示单位；否则不显示。
  	 */
  	MakeUnitsDisplayed(theIsDisplayed: boolean): void;
  	/**
  	 * 设置箭头的方向（外部或内部）。
  	 * @param theArrowOrient - 箭头方向。
  	 */
  	SetArrowOrientation(theArrowOrient: MdGe.MxDimensionArrowOrientation): void;
  	/**
  	 * 获取箭头的方向。
  	 * @returns 箭头方向。
  	 */
  	ArrowOrientation(): MdGe.MxDimensionArrowOrientation;
  	/**
  	 * 设置文本的垂直位置。
  	 * @param thePosition - 文本的垂直位置。
  	 */
  	SetTextVerticalPosition(thePosition: MdGe.MxDimensionTextVerticalPosition): void;
  	/**
  	 * 获取文本的垂直位置。
  	 * @returns 文本的垂直位置。
  	 */
  	TextVerticalPosition(): MdGe.MxDimensionTextVerticalPosition;
  	/**
  	 * 设置文本的水平位置。
  	 * @param thePosition - 文本的水平位置。
  	 */
  	SetTextHorizontalPosition(thePosition: MdGe.MxDimensionTextHorizontalPosition): void;
  	/**
  	 * 获取文本的水平位置。
  	 * @returns 文本的水平位置。
  	 */
  	TextHorizontalPosition(): MdGe.MxDimensionTextHorizontalPosition;
  	/**
  	 * 设置尺寸箭头的显示属性。
  	 * @param theAspect - 箭头显示属性。
  	 */
  	SetArrowAspect(theAspect: Mx3dAspectArrow): void;
  	/**
  	 * 为尺寸的所有部分（线条、箭头和文本）设置相同的颜色。
  	 * @param theColor - 颜色值。
  	 */
  	SetCommonColor(theColor: Mx3dGeColor): void;
  	/**
  	 * 设置延伸尺寸的大小。
  	 * @param theSize - 尺寸值。
  	 */
  	SetExtensionSize(theSize: number): void;
  	/**
  	 * 获取延伸尺寸的大小。
  	 * @returns 尺寸值。
  	 */
  	ExtensionSize(): number;
  	/**
  	 * 设置箭头尾部的大小（无文本的延伸）。
  	 * @param theSize - 尺寸值。
  	 */
  	SetArrowTailSize(theSize: number): void;
  	/**
  	 * 获取箭头尾部的大小。
  	 * @returns 尺寸值。
  	 */
  	ArrowTailSize(): number;
  	/**
  	 * 设置用于格式化尺寸值标签的语法格式。
  	 * @param theFormat - 格式字符串。
  	 */
  	SetValueStringFormat(theFormat: string): void;
  	/**
  	 * 获取尺寸值标签的格式。
  	 * @returns 格式字符串。
  	 */
  	ValueStringFormat(): string;
  }
  /**
   * @class Mx3dDimDiameter
   * @extends Mx3dDimObject
   *
   * 表示3D环境中的直径尺寸。该类封装了在圆形或可以通过其直径进行测量的形状上创建、管理和显示直径尺寸的逻辑。
   * 它与几何定义和表示方面集成，以便在3D空间中实现精确的尺寸标注。
   */
  export  class Mx3dDimDiameter extends Mx3dDimObject {
  	/**
  	 * 构造直径尺寸，针对指定的圆形。
  	 * @param theCircle 要测量的圆形。
  	 */
  	constructor(theCircle: Mx3dGeCircle);
  	/**
  	 * 构造直径尺寸，针对指定的圆形，并按照给定的平面进行定向。
  	 * @param theCircle 要测量的圆形。
  	 * @param thePlane 定义尺寸首选定向的平面。
  	 */
  	constructor(theCircle: Mx3dGeCircle, thePlane: Mx3dGePlane);
  	/**
  	 * @returns 返回该尺寸正在测量的圆形。
  	 */
  	Circle(): Mx3dGeCircle;
  	/**
  	 * @returns 返回圆上的锚点，用于此直径尺寸。
  	 */
  	AnchorPoint(): Mx3dGePoint;
  	/**
  	 * @returns 返回正在测量的形状对象。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 设置要测量的几何体。
  	 * @param theCircle 要测量的圆形。
  	 */
  	SetMeasuredGeometry(theCircle: Mx3dGeCircle): void;
  	/**
  	 * 设置文本位置。
  	 * @param theTextPos 文本位置点。
  	 */
  	SetTextPosition(theTextPos: Mx3dGePoint): void;
  	/**
  	 * 获取文本位置。
  	 * @returns 返回文本位置点。
  	 */
  	GetTextPosition(): Mx3dGePoint;
  	/**
  	 * 设置显示单位。
  	 * @param theUnits 单位字符串。
  	 */
  	SetDisplayUnits(theUnits: string): void;
  	/**
  	 * 设置模型单位。
  	 * @param theUnits 单位字符串。
  	 */
  	SetModelUnits(theUnits: string): void;
  	/**
  	 * 获取当前的尺寸值。
  	 * @returns 返回当前的尺寸值。
  	 */
  	GetValue(): number;
  	/**
  	 * 设置计算的尺寸值。
  	 */
  	SetComputedValue(): void;
  	/**
  	 * 设置自定义尺寸值。
  	 * @param theValue 自定义尺寸值。
  	 */
  	SetCustomValue(theValue: number): void;
  	/**
  	 * 获取当前的平面。
  	 * @returns 返回当前的平面。
  	 */
  	GetPlane(): Mx3dGePlane;
  	/**
  	 * 获取几何类型。
  	 * @returns 返回几何类型。
  	 */
  	GetGeometryType(): number;
  	/**
  	 * 设置自定义平面。
  	 * @param thePlane 自定义平面。
  	 */
  	SetCustomPlane(thePlane: Mx3dGePlane): void;
  	/**
  	 * 取消自定义平面。
  	 */
  	UnsetCustomPlane(): void;
  	/**
  	 * 判断文本位置是否为自定义。
  	 * @returns 返回布尔值，表示文本位置是否为自定义。
  	 */
  	IsTextPositionCustom(): boolean;
  	/**
  	 * 设置尺寸的显示外观。
  	 * @param theDimensionAspect 尺寸外观。
  	 */
  	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
  	/**
  	 * 获取尺寸类型。
  	 * @returns 返回尺寸类型。
  	 */
  	KindOfDimension(): MdGe.MxKindOfDimension;
  	/**
  	 * 取消固定文本位置。
  	 */
  	UnsetFixedTextPosition(): void;
  	/**
  	 * 获取二维文本的选择容差。
  	 * @returns 返回二维文本的选择容差。
  	 */
  	SelToleranceForText2d(): number;
  	/**
  	 * 设置二维文本的选择容差。
  	 * @param theTol 容差值。
  	 */
  	SetSelToleranceForText2d(theTol: number): void;
  	/**
  	 * 获取尺寸线位置距离。
  	 * @returns 返回尺寸线位置距离。
  	 */
  	GetFlyout(): number;
  	/**
  	 * 设置尺寸线位置距离。
  	 * @param theFlyout 尺寸线位置距离值。
  	 */
  	SetFlyout(theFlyout: number): void;
  	/**
  	 * 判断当前尺寸是否有效。
  	 * @returns 返回布尔值，表示尺寸是否有效。
  	 */
  	IsValid(): boolean;
  }
  /**
   * @class Mx3dDimRadius
   * @extends Mx3dDimObject
   *
   * 表示3D环境中的半径尺寸。该类封装了在圆形或可以通过其半径进行测量的形状上创建、管理和显示半径尺寸的逻辑。
   * 它与几何定义和表示方面集成，以便在3D空间中实现精确的尺寸标注。
   */
  export  class Mx3dDimRadius extends Mx3dDimObject {
  	/**
  	 * 构造半径尺寸，针对指定的圆形。
  	 * @param theCircle 要测量的圆形。
  	 */
  	constructor(theCircle: Mx3dGeCircle);
  	/**
  	 * 构造半径尺寸，针对指定的圆形，并按照给定的锚点进行定向。
  	 * @param theCircle 要测量的圆形。
  	 * @param theAnchorPoint 用于定向的锚点，必须位于圆上。
  	 */
  	constructor(theCircle: Mx3dGeCircle, theAnchorPoint: Mx3dGePoint);
  	/**
  	 * 获取正在测量的圆形。
  	 * @returns 返回该尺寸正在测量的圆形。
  	 */
  	Circle(): Mx3dGeCircle;
  	/**
  	 * 获取圆上的锚点，用于此半径尺寸。
  	 * @returns 返回圆上的锚点。
  	 */
  	AnchorPoint(): Mx3dGePoint;
  	/**
  	 * 获取测量的形状。
  	 * @returns 返回测量的形状。
  	 */
  	Shape(): Mx3dShapeObject;
  	/**
  	 * 设置测量的圆形。
  	 * @param theCircle 要测量的圆形。
  	 */
  	SetMeasuredGeometry(theCircle: Mx3dGeCircle): void;
  	/**
  	 * 设置测量的圆形，并指定锚点。
  	 * @param theCircle 要测量的圆形。
  	 * @param theAnchorPoint 用于定向的锚点，必须位于圆上。
  	 * @param theHasAnchor 是否使用锚点。
  	 */
  	SetMeasuredGeometry(theCircle: Mx3dGeCircle, theAnchorPoint: Mx3dGePoint, theHasAnchor: boolean): void;
  	/**
  	 * 设置文本位置。
  	 * @param theTextPos 文本的位置。
  	 */
  	SetTextPosition(theTextPos: Mx3dGePoint): void;
  	/**
  	 * 获取文本位置。
  	 * @returns 返回文本位置。
  	 */
  	GetTextPosition(): Mx3dGePoint;
  	/**
  	 * 获取尺寸值。
  	 * @returns 返回尺寸值。
  	 */
  	GetValue(): number;
  	/**
  	 * 设置计算的尺寸值。
  	 */
  	SetComputedValue(): void;
  	/**
  	 * 设置自定义的尺寸值。
  	 * @param theValue 自定义的尺寸值。
  	 */
  	SetCustomValue(theValue: number): void;
  	/**
  	 * 获取尺寸平面。
  	 * @returns 返回尺寸平面。
  	 */
  	GetPlane(): Mx3dGePlane;
  	/**
  	 * 获取几何类型。
  	 * @returns 返回几何类型。
  	 */
  	GetGeometryType(): number;
  	/**
  	 * 设置自定义平面。
  	 * @param thePlane 自定义平面。
  	 */
  	SetCustomPlane(thePlane: Mx3dGePlane): void;
  	/**
  	 * 取消自定义平面。
  	 */
  	UnsetCustomPlane(): void;
  	/**
  	 * 检查文本位置是否为自定义。
  	 * @returns 返回是否为自定义文本位置。
  	 */
  	IsTextPositionCustom(): boolean;
  	/**
  	 * 设置尺寸的外观。
  	 * @param theDimensionAspect 尺寸的外观。
  	 */
  	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
  	/**
  	 * 获取尺寸类型。
  	 * @returns 返回尺寸类型。
  	 */
  	KindOfDimension(): MdGe.MxKindOfDimension;
  	/**
  	 * 取消固定文本位置。
  	 */
  	UnsetFixedTextPosition(): void;
  	/**
  	 * 获取2D文本选择公差。
  	 * @returns 返回2D文本选择公差。
  	 */
  	SelToleranceForText2d(): number;
  	/**
  	 * 设置2D文本选择公差。
  	 * @param theTol 2D文本选择公差。
  	 */
  	SetSelToleranceForText2d(theTol: number): void;
  	/**
  	 * 获取尺寸线位置距离。
  	 * @returns 返回尺寸线位置距离。
  	 */
  	GetFlyout(): number;
  	/**
  	 * 设置尺寸线位置距离。
  	 * @param theFlyout 尺寸线位置距离。
  	 */
  	SetFlyout(theFlyout: number): void;
  	/**
  	 * 检查该半径尺寸是否有效。
  	 * @returns 返回是否有效。
  	 */
  	IsValid(): boolean;
  }
  /**
   * @class Mx3dDimAngle
   * @extends Mx3dDimObject
   *
   * 表示3D环境中的角度尺寸。该类封装了在不同几何体（如线段、点和面）之间创建、管理和显示角度尺寸的逻辑。
   * 它集成了几何定义和显示参数，以便在3D空间中实现精确的角度标注。
   */
  export  class Mx3dDimAngle extends Mx3dDimObject {
  	/**
  	 * 构造角度尺寸，针对指定的两条交叉边。
  	 * @param theFirstEdge 第一条边。
  	 * @param theSecondEdge 第二条边。
  	 */
  	constructor(theFirstEdge: Mx3dShapeEdge, theSecondEdge: Mx3dShapeEdge);
  	/**
  	 * 构造角度尺寸，针对指定的三点。
  	 * @param theFirstPoint 第一点。
  	 * @param theSecondPoint 第二点（角度中心点）。
  	 * @param theThirdPoint 第三点。
  	 */
  	constructor(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, theThirdPoint: Mx3dGePoint);
  	/**
  	 * @returns 返回角度的第一点。
  	 */
  	FirstPoint(): Mx3dGePoint;
  	/**
  	 * @returns 返回角度的第二点。
  	 */
  	SecondPoint(): Mx3dGePoint;
  	/**
  	 * @returns 返回角度的中心点。
  	 */
  	CenterPoint(): Mx3dGePoint;
  	/**
  	 * @returns 返回第一个形状对象。
  	 */
  	FirstShape(): Mx3dShapeObject;
  	/**
  	 * @returns 返回第二个形状对象。
  	 */
  	SecondShape(): Mx3dShapeObject;
  	/**
  	 * @returns 返回第三个形状对象。
  	 */
  	ThirdShape(): Mx3dShapeObject;
  	/**
  	 * 设置测量几何体为圆锥面。
  	 * @param theCone 圆锥面。
  	 */
  	SetMeasuredGeometry(theCone: Mx3dShapeFace): void;
  	/**
  	 * 设置测量几何体为两条交叉边。
  	 * @param theFirstEdge 第一条边。
  	 * @param theSecondEdge 第二条边。
  	 */
  	SetMeasuredGeometry(theFirstEdge: Mx3dShapeEdge, theSecondEdge: Mx3dShapeEdge): void;
  	/**
  	 * 设置测量几何体为三点。
  	 * @param theFirstPoint 第一点。
  	 * @param theSecondPoint 第二点（角度中心点）。
  	 * @param theThridPoint 第三点。
  	 */
  	SetMeasuredGeometry(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, theThridPoint: Mx3dGePoint): void;
  	/**
  	 * 设置文本位置。
  	 * @param theTextPos 文本位置点。
  	 */
  	SetTextPosition(theTextPos: Mx3dGePoint): void;
  	/**
  	 * @returns 返回文本位置点。
  	 */
  	GetTextPosition(): Mx3dGePoint;
  	/**
  	 * @returns 返回显示单位字符串。
  	 */
  	GetDisplayUnits(): string;
  	/**
  	 * @returns 返回模型单位字符串。
  	 */
  	GetModelUnits(): string;
  	/**
  	 * 设置显示单位字符串。
  	 * @param theUnits 显示单位。
  	 */
  	SetDisplayUnits(theUnits: string): void;
  	/**
  	 * 设置模型单位字符串。
  	 * @param theUnits 模型单位。
  	 */
  	SetModelUnits(theUnits: string): void;
  	/**
  	 * 设置角度类型。
  	 * @param theType 角度类型。
  	 */
  	SetType(theType: MdGe.MxTypeOfAngle): void;
  	/**
  	 * @returns 返回当前角度类型。
  	 */
  	GetType(): MdGe.MxTypeOfAngle;
  	/**
  	 * 设置箭头可见性类型。
  	 * @param theType 箭头可见性类型。
  	 */
  	SetArrowsVisibility(theType: MdGe.MxTypeOfAngleArrowVisibility): void;
  	/**
  	 * @returns 返回箭头可见性类型。
  	 */
  	GetArrowsVisibility(): MdGe.MxTypeOfAngleArrowVisibility;
  	/**
  	 * @returns 返回角度值。
  	 */
  	GetValue(): number;
  	/**
  	 * 设置计算值。
  	 */
  	SetComputedValue(): void;
  	/**
  	 * 设置自定义值。
  	 * @param theValue 自定义角度值。
  	 */
  	SetCustomValue(theValue: number): void;
  	/**
  	 * @returns 返回角度的平面。
  	 */
  	GetPlane(): Mx3dGePlane;
  	/**
  	 * @returns 返回几何类型。
  	 */
  	GetGeometryType(): number;
  	/**
  	 * 设置自定义平面。
  	 * @param thePlane 自定义平面。
  	 */
  	SetCustomPlane(thePlane: Mx3dGePlane): void;
  	/**
  	 * 取消设置自定义平面。
  	 */
  	UnsetCustomPlane(): void;
  	/**
  	 * @returns 返回文本位置是否自定义。
  	 */
  	IsTextPositionCustom(): boolean;
  	/**
  	 * 设置尺寸外观。
  	 * @param theDimensionAspect 尺寸外观。
  	 */
  	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
  	/**
  	 * @returns 返回尺寸的类型。
  	 */
  	KindOfDimension(): MdGe.MxKindOfDimension;
  	/**
  	 * 取消设置固定文本位置。
  	 */
  	UnsetFixedTextPosition(): void;
  	/**
  	 * @returns 返回二维文本选择公差。
  	 */
  	SelToleranceForText2d(): number;
  	/**
  	 * 设置二维文本选择公差。
  	 * @param theTol 选择公差。
  	 */
  	SetSelToleranceForText2d(theTol: number): void;
  	/**
  	 * @returns 返回尺寸线位置距离。
  	 */
  	GetFlyout(): number;
  	/**
  	 * 设置尺寸线位置距离。
  	 * @param theFlyout 尺寸线位置距离。
  	 */
  	SetFlyout(theFlyout: number): void;
  	/**
  	 * @returns 返回是否有效。
  	 */
  	IsValid(): boolean;
  }
  /**
   * @class Mx3dDimLength
   * @extends Mx3dDimObject
   *
   * 表示3D环境中的长度尺寸。该类封装了在不同几何体（如点和面）之间创建、管理和显示长度尺寸的逻辑。
   * 它集成了几何定义和显示参数，以便在3D空间中实现精确的长度标注。
   */
  export  class Mx3dDimLength extends Mx3dDimObject {
  	/**
  	 * 构造一个空的长度尺寸对象。
  	 */
  	constructor();
  	/**
  	 * 构造长度尺寸，针对指定的边和平面。
  	 * @param theEdge 测量的边。
  	 * @param thePlane 测量的平面。
  	 */
  	constructor(theEdge: Mx3dShapeEdge, thePlane: Mx3dGePlane);
  	/**
  	 * 构造长度尺寸，针对指定的两点和平面。
  	 * @param theFirstPoint 第一点。
  	 * @param theSecondPoint 第二点。
  	 * @param thePlane 测量的平面。
  	 */
  	constructor(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, thePlane: Mx3dGePlane);
  	/**
  	 * 返回长度尺寸的第一点。
  	 * @returns 第一点。
  	 */
  	FirstPoint(): Mx3dGePoint;
  	/**
  	 * 返回长度尺寸的第二点。
  	 * @returns 第二点。
  	 */
  	SecondPoint(): Mx3dGePoint;
  	/**
  	 * 返回长度尺寸的第一形状对象。
  	 * @returns 第一形状对象。
  	 */
  	FirstShape(): Mx3dShapeObject;
  	/**
  	 * 返回长度尺寸的第二形状对象。
  	 * @returns 第二形状对象。
  	 */
  	SecondShape(): Mx3dShapeObject;
  	/**
  	 * 设置测量几何，基于指定的两点和平面。
  	 * @param theFirstPoint 第一点。
  	 * @param theSecondPoint 第二点。
  	 * @param thePlane 测量的平面。
  	 */
  	SetMeasuredGeometry(theFirstPoint: Mx3dGePoint, theSecondPoint: Mx3dGePoint, thePlane: Mx3dGePlane): void;
  	/**
  	 * 设置测量几何，基于指定的形状。
  	 * @param theFirstShape 第一形状对象。
  	 * @param theSecondShape 第二形状对象。
  	 */
  	SetMeasuredShapes(theFirstShape: Mx3dShapeObject, theSecondShape: Mx3dShapeObject): void;
  	/**
  	 * 设置文本位置。
  	 * @param theTextPos 文本位置。
  	 */
  	SetTextPosition(theTextPos: Mx3dGePoint): void;
  	/**
  	 * 获取文本位置。
  	 * @returns 文本位置。
  	 */
  	GetTextPosition(): Mx3dGePoint;
  	/**
  	 * 设置自定义方向。
  	 * @param theDirection 方向。
  	 * @param theUseDirection 是否使用自定义方向。
  	 */
  	SetDirection(theDirection: Mx3dGeDir, theUseDirection: boolean): void;
  	/**
  	 * 获取尺寸值。
  	 * @returns 尺寸值。
  	 */
  	GetValue(): number;
  	/**
  	 * 设置计算值。
  	 */
  	SetComputedValue(): void;
  	/**
  	 * 设置自定义值。
  	 * @param theValue 自定义值。
  	 */
  	SetCustomValue(theValue: number): void;
  	/**
  	 * 获取测量平面。
  	 * @returns 测量平面。
  	 */
  	GetPlane(): Mx3dGePlane;
  	/**
  	 * 获取几何类型。
  	 * @returns 几何类型。
  	 */
  	GetGeometryType(): number;
  	/**
  	 * 设置自定义平面。
  	 * @param thePlane 自定义平面。
  	 */
  	SetCustomPlane(thePlane: Mx3dGePlane): void;
  	/**
  	 * 取消自定义平面设置。
  	 */
  	UnsetCustomPlane(): void;
  	/**
  	 * 检查文本位置是否自定义。
  	 * @returns 如果文本位置是自定义的，则返回 true；否则，返回 false。
  	 */
  	IsTextPositionCustom(): boolean;
  	/**
  	 * 设置尺寸外观。
  	 * @param theDimensionAspect 尺寸外观。
  	 */
  	SetDimensionAspect(theDimensionAspect: Mx3dAspectDim): void;
  	/**
  	 * 获取尺寸类型。
  	 * @returns 尺寸类型。
  	 */
  	KindOfDimension(): MdGe.MxKindOfDimension;
  	/**
  	 * 取消固定文本位置。
  	 */
  	UnsetFixedTextPosition(): void;
  	/**
  	 * 获取2D文本选择公差。
  	 * @returns 2D文本选择公差。
  	 */
  	SelToleranceForText2d(): number;
  	/**
  	 * 设置2D文本选择公差。
  	 * @param theTol 2D文本选择公差。
  	 */
  	SetSelToleranceForText2d(theTol: number): void;
  	/**
  	 * 获取尺寸线位置距离。
  	 * @returns 尺寸线位置距离。
  	 */
  	GetFlyout(): number;
  	/**
  	 * 设置尺寸线位置距离。
  	 * @param theFlyout 尺寸线位置距离。
  	 */
  	SetFlyout(theFlyout: number): void;
  	/**
  	 * 检查尺寸是否有效。
  	 * @returns 如果尺寸有效，则返回 true；否则，返回 false。
  	 */
  	IsValid(): boolean;
  }
  /**
   * 表示插值B样条曲线算法。
   */
  export  class Mx3dInterpolateBSplineCurve extends Mx3dBaseObject {
  	/**
  	 * 构造函数，创建用于生成B样条曲线的对象。
  	 * @param Points 插值点数组。
  	 * @param PeriodicFlag 周期性标志。
  	 * @param Tolerance 精度。
  	 */
  	constructor(Points: Mx3dGePoint[], PeriodicFlag: boolean, Tolerance: number);
  	/**
  	 * 构造函数，创建用于生成B样条曲线的对象。
  	 * @param Points 插值点数组。
  	 * @param Parameters 参数值数组。
  	 * @param PeriodicFlag 周期性标志。
  	 * @param Tolerance 精度。
  	 */
  	constructor(Points: Mx3dGePoint[], Parameters: number[], PeriodicFlag: boolean, Tolerance: number);
  	/**
  	 * 设置起点终点切向。
  	 * @param InitialTangent 起点切向。
  	 * @param FinalTangent 终点切向。
  	 */
  	LoadEnds(InitialTangent: UniVec, FinalTangent: UniVec): void;
  	/**
  	 * 设置所有插值点切向。
  	 * @param Tangents 切向数组。
  	 * @param TangentFlags 是否应用切向数组。
  	 */
  	Load(Tangents: Mx3dGeVec[], TangentFlags: boolean[]): void;
  	/**
     * 执行算法。
     */
  	Perform(): void;
  	/**
  	 * 获取插值算法生成的B样条曲线。
  	 * @returns B样条曲线。
  	 */
  	Curve(): Mx3dGeomBSplineCurve;
  	/**
  	 * 判断算法是否执行成功。
  	 * @returns 算法是否执行成功标志，true 成功， false 失败。
  	 */
  	IsDone(): boolean;
  }
  export type Map = any;
  /**
   * cad地图对象
   * @example
   * \`\`\`ts
   * import { MxMap } from 'mxcad';
   * let mx_map = new MxMap;
   * \`\`\`
   */
  export  class MxMap {
  	private imp;
  	private map;
  	private originLngLatLike;
  	private originCAD;
  	private meterInCADUnits;
  	private modelAltitude;
  	private loadOldEditionMethod;
  	/**mxcad对象 */
  	mxcad: McObject;
  	constructor(inMxcad?: McObject);
  	/**
  	 * 用于设置加载旧版本地图
  	 */
  	setLoadOldEditionMethod(): void;
  	/**
  	 * 获取当前mxdraw对象
  	 * @return mxdraw对象
  	 * */
  	getMxDrawObject(): MxDrawObject;
  	/**
  	 * 初始化mapbox
  	 * @param map map对象
  	 */
  	initMapbox(map: Map): void;
  	/**
  	 * 获取mapbox的map对象
  	 * @return map对象
  	 */
  	getMapbox(): Map;
  	/**
  	 * mapbox的墨卡托坐标系到cad
  	* @param x X轴坐标
  	* @param y Y轴坐标
  	* @returns 三维点对象
  	 */
  	mercatorCoord2CAD(x: number, y: number): THREE.Vector3;
  	/**
  	 * mapbox的墨卡托坐标系到cad
  	 * @param x X轴坐标
  	 * @param y Y轴坐标
  	 * @returns 三维点对象
  	 */
  	mercatorCoordToCAD(x: number, y: number): THREE.Vector3;
  	/**
  	 * cad到mapbox的墨卡托坐标系
  	 * @param pt 三维点对象
  	 * @returns 三维点对象
  	 */
  	cadToMercatorCoord(pt: THREE.Vector3): THREE.Vector3;
  	/**
  	 * 经纬度到cad坐标
  	 * @param lng 经度
  	 * @param lat 纬度
  	 * @return 三维点对象
  	 */
  	lnglatToCAD(lng: number, lat: number): THREE.Vector3;
  	/**
  	 * cad坐标转换为经度和纬度
  	 * @param pt 三维点对象
  	 * @returns 经纬度
  	 */
  	cadTolnglat(pt: THREE.Vector3): number[];
  	/**
  	 * 地图墨卡托坐标系到经纬度
  	 * @param x X轴坐标
  	 * @param y Y轴坐标
  	 * @returns 经纬度
  	 */
  	map_meters_to_lnglat(x: number, y: number): number[];
  	/**
  	 * 将地理坐标系下的坐标（经度和纬度）转换为平面坐标系下的坐标（米）
  	 * @param lng 经度
  	 * @param lat 维度
  	 * @returns 平面坐标
  	 */
  	map_lnglat_to_meters(lng: number, lat: number): number[];
  	/**
  	 * 经纬度到mapbox的墨卡托坐标系坐标
  	 * @param lng 经度
  	 * @param lat 维度
  	 * @returns 三维点对象
  	 */
  	lnglat_to_mercator(lng: number, lat: number): THREE.Vector3;
  	/**
  	 * mapbox的墨卡托坐标系到经纬度
  	 * @param x X轴坐标
  	 * @param y Y轴坐标
  	 * @param z Z轴坐标
  	 * @returns 经纬度
  	 */
  	mercator_to_lnglat(x: number, y: number, z: number): number[];
  	/**
  	 * 是否超出中国范围
  	 * @param lng 经度
  	 * @param lat 维度
  	 * @returns 布尔值
  	 */
  	outOfChina(lng: number, lat: number): boolean;
  	/**
  	 * 将经度坐标转换为墨卡托投影下的坐标
  	 * @param len 经度
  	 * @return 墨卡托投影下的坐标
  	 */
  	cadLongToMercatorCoord(len: number): number;
  	/**
  	 * 设置坐标点的对齐方式
  	 * @param originLngLatLike 经度和纬度的原点坐标
  	 * @param originCAD 绘图坐标系下的起始点，即AutoCAD 中的原点坐标。
  	 * @param meterInCADUnits 地理坐标系和 AutoCAD 绘图使用的坐标单位转换
  	 */
  	setCoordinatePointAlignment(originLngLatLike: number[], originCAD: number[], meterInCADUnits: number): void;
  	/**
  	 * 创建地图
  	 * @param map map对象
  	 * @param MxCadConfig createMxCad 的参数配置
  	 */
  	create(map: Map, config: MxCadConfig | any): Promise<void>;
  }
  /**
   * 加载地图图层
   * @param map map对象
   * @param layerList 图层列表
   * @param key 访问瓦片图层的 API 密钥或者令牌
   * @param providers 指定瓦片图层的提供者信息
   */
  export  function MxMapAddRasterTileLayer(map: any, layerList: any[], key?: string, providers?: any): void;
  /**
   * 加载GoogleCnLayer地图图层,火星坐标系
   * @param map map对象
   * @param types 谷歌地图图层的类型
   * @param urls 谷歌地图图层的URL
   */
  export  function MxMapAddGoogleCnLayer(map: any, types: string[], urls?: string[]): void;
  /**
   * GPS 坐标（WGS 84 坐标系）转换为国测局坐标（GCJ-02 坐标系）
   * @param lng 经度
   * @param lat 纬度
   * @returns 转换后的经纬度
   */
  export  function mx_gps84_To_gcj02(lng: any, lat: any): {
  	lng: any;
  	lat: any;
  };
  /**
   * 国测局坐标（GCJ-02 坐标系）转换为GPS 坐标（WGS 84 坐标系）
   * @param lng 经度
   * @param lat 纬度
   * @returns @returns 转换后的经纬度
   */
  export  function mx_gcj02_To_gps84(lng: any, lat: any): {
  	lng: number;
  	lat: number;
  };
  /**
   * tiff加载
   * @example
   * \`\`\`ts
   * \`\`\`
   */
  export  class MxTIFFLoader {
  	private imp;
  	load(url: string, onLoad?: (texture: any) => void, onError?: (event: any) => void): void;
  }
  
  export {};
}
`,Xa=`/// <reference path="./mxcad.d.ts" />
/// <reference path="./mxdraw.d.ts" />

import { App } from 'vue';\r
import { DateInstance } from 'vuetify/lib/framework.mjs';\r
import { DefaultsInstance } from 'vuetify/lib/framework.mjs';\r
import { DisplayInstance } from 'vuetify/lib/framework.mjs';\r
import { GoToInstance } from 'vuetify/lib/framework.mjs';\r
import { IconAliases } from 'vuetify/lib/framework.mjs';\r
import { IconSet } from 'vuetify/lib/framework.mjs';\r
import { LocaleInstance } from 'vuetify/lib/framework.mjs';\r
import { LocaleMessages } from 'vuetify/lib/framework.mjs';\r
import { LocaleOptions } from 'vuetify/lib/framework.mjs';\r
import { McObject } from 'mxcad';\r
import { Ref } from 'vue';\r
import { ThemeInstance } from 'vuetify/lib/framework.mjs';\r
\r
declare interface AppConfig {\r
    uiConfig?: string;\r
    serverConfig?: string;\r
    sketchesUiConfig?: string;\r
    quickCommandConfig?: string;\r
    themeConfig?: string;\r
}\r
\r
/**\r
 * 事件总线类\r
 */\r
declare class EventBus<EventMap extends Record<string, any>> {\r
    private handlers;\r
    /**\r
     * 注册事件监听器\r
     * @param event - 事件类型\r
     * @param handler - 事件处理函数\r
     */\r
    on<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;\r
    /**\r
     * 移除事件监听器\r
     */\r
    off<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;\r
    /**\r
     * 触发事件\r
     */\r
    emit<E extends keyof EventMap>(event: E, payload?: EventMap[E]): any;\r
    /**\r
     * 注册一次性事件监听器\r
     */\r
    once<E extends keyof EventMap>(event: E, handler: (payload: EventMap[E]) => any): any;\r
    /**\r
     * 清除指定事件的所有监听器\r
     */\r
    clear<E extends keyof EventMap>(event?: E): any;\r
    /**\r
     * 获取指定事件的监听器数量\r
     */\r
    count<E extends keyof EventMap>(event: E): number;\r
}\r
\r
declare class MxCADApp extends MxCADEvents {\r
    setStaticAssetPath(url: string): void;\r
    getStaticAssetPath(): string;\r
    initConfig(config: AppConfig): void;\r
    /** 获取mxcad-app使用的vuetify实例 */\r
    getVuetify(): Promise<{\r
        install: (app: App) => void;\r
        defaults: Ref<DefaultsInstance>;\r
        display: DisplayInstance;\r
        theme: ThemeInstance & {\r
            install: (app: App) => void;\r
        };\r
        icons: {\r
            defaultSet: string;\r
            aliases: Partial<IconAliases>;\r
            sets: Record<string, IconSet>;\r
        };\r
        locale: {\r
            isRtl: Ref<boolean>;\r
            rtl: Ref<Record<string, boolean>>;\r
            rtlClasses: Ref<string>;\r
            name: string;\r
            messages: Ref<LocaleMessages>;\r
            current: Ref<string>;\r
            fallback: Ref<string>;\r
            t: (key: string, ...params: unknown[]) => string;\r
            n: (value: number) => string;\r
            provide: (props: LocaleOptions) => LocaleInstance;\r
        };\r
        date: {\r
            options: {\r
                adapter: (new (options: {\r
                    locale: any;\r
                    formats?: any;\r
                }) => DateInstance) | DateInstance;\r
                formats?: Record<string, any>;\r
                locale: Record<string, any>;\r
            };\r
            instance: {\r
                locale?: any;\r
                date: (value?: any) => unknown;\r
                format: (date: unknown, formatString: string) => string;\r
                toJsDate: (value: unknown) => Date;\r
                parseISO: (date: string) => unknown;\r
                toISO: (date: unknown) => string;\r
                startOfDay: (date: unknown) => unknown;\r
                endOfDay: (date: unknown) => unknown;\r
                startOfWeek: (date: unknown, firstDayOfWeek?: number | string) => unknown;\r
                endOfWeek: (date: unknown) => unknown;\r
                startOfMonth: (date: unknown) => unknown;\r
                endOfMonth: (date: unknown) => unknown;\r
                startOfYear: (date: unknown) => unknown;\r
                endOfYear: (date: unknown) => unknown;\r
                isAfter: (date: unknown, comparing: unknown) => boolean;\r
                isAfterDay: (value: unknown, comparing: unknown) => boolean;\r
                isSameDay: (date: unknown, comparing: unknown) => boolean;\r
                isSameMonth: (date: unknown, comparing: unknown) => boolean;\r
                isSameYear: (value: unknown, comparing: unknown) => boolean;\r
                isBefore: (date: unknown, comparing: unknown) => boolean;\r
                isEqual: (date: unknown, comparing: unknown) => boolean;\r
                isValid: (date: any) => boolean;\r
                isWithinRange: (date: unknown, range: [unknown, unknown]) => boolean;\r
                addMinutes: (date: unknown, amount: number) => unknown;\r
                addHours: (date: unknown, amount: number) => unknown;\r
                addDays: (date: unknown, amount: number) => unknown;\r
                addWeeks: (date: unknown, amount: number) => unknown;\r
                addMonths: (date: unknown, amount: number) => unknown;\r
                getYear: (date: unknown) => number;\r
                setYear: (date: unknown, year: number) => unknown;\r
                getDiff: (date: unknown, comparing: unknown, unit?: string) => number;\r
                getWeekArray: (date: unknown, firstDayOfWeek?: number | string) => unknown[][];\r
                getWeekdays: (firstDayOfWeek?: number | string) => string[];\r
                getMonth: (date: unknown) => number;\r
                setMonth: (date: unknown, month: number) => unknown;\r
                getDate: (date: unknown) => number;\r
                setDate: (date: unknown, day: number) => unknown;\r
                getNextMonth: (date: unknown) => unknown;\r
                getPreviousMonth: (date: unknown) => unknown;\r
                getHours: (date: unknown) => number;\r
                setHours: (date: unknown, hours: number) => unknown;\r
                getMinutes: (date: unknown) => number;\r
                setMinutes: (date: unknown, minutes: number) => unknown;\r
            };\r
        };\r
        goTo: GoToInstance;\r
    }>;\r
}\r
\r
export declare let mxcadApp: MxCADApp;\r
\r
declare namespace mxcadApp_2 {\r
    export {\r
        MxCADView,\r
        mxcadApp\r
    }\r
}\r
export default mxcadApp_2;\r
\r
declare class MxCADEvents extends EventBus<MxCADEventsMap> {\r
    /**\r
     * 创建vue app 实例\r
     */\r
    on(event: 'createVueApp', handler: (payload: MxCADEventsMap['createVueApp']) => void): void;\r
    /**\r
     * 挂载vue app 实例\r
     */\r
    on(event: 'mountedVueApp', handler: (payload: MxCADEventsMap['mountedVueApp']) => void): void;\r
    /**\r
     * 一次性监听创建vue app 实例\r
     */\r
    once(event: 'createVueApp', handler: (payload: MxCADEventsMap['createVueApp']) => void): void;\r
    /**\r
     * 一次性监听挂载vue app 实例\r
     */\r
    once(event: 'mountedVueApp', handler: (payload: MxCADEventsMap['mountedVueApp']) => void): void;\r
}\r
\r
declare interface MxCADEventsMap {\r
    "createVueApp": App;\r
    "mountedVueApp": App;\r
}\r
\r
export declare class MxCADView {\r
    constructor(config?: MxCADViewConfig);\r
    private vueApp?;\r
    private rootContainer?;\r
    private _config;\r
    mxcad: McObject;\r
    create(rootContainer?: string | HTMLElement): boolean;\r
    getVueApp(): App<Element> | undefined;\r
    getRootContainer(): HTMLElement | undefined;\r
    get config(): MxCADViewConfig;\r
}\r
\r
declare interface MxCADViewConfig {\r
    rootContainer?: string | HTMLElement;\r
    openFile?: string;\r
    map?: boolean;\r
}\r
\r
export { }\r


declare global {
    interface Window {
        /*** 只支持 Chrome 103版本 */
        queryLocalFonts(): Promise<{
            postscriptName: string;
            fullName: string;
            family: string;
            style: string;
            blob(): Blob;
        }[]>;
    }
}


declare global {
    interface Window {
        MxElectronAPI: IElectronAPI;
    }
}


declare module "@/editor/core" {
    interface IMxCADEditor {
        /**
         * 检查当前测试元素是否处于激活状态
         */
        isMxCADTestActive: () => boolean;
        /**
         * 将选中内容包装为测试元素
         */
        wrapMxCADTest: () => void;
        /**
         * 解除测试元素的包装
         */
        unwrapMxCADTest: () => void;
        /**
         * 插入新的测试元素
         */
        insertMxCADTest: () => void;
    }
}


declare module "@/editor/core" {
    interface IMxCADEditor {
        /**
         * 插入新的测试元素
         */
        insertMxCADTestText: () => void;
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        fontSize: {
            /**
             * Set the font size attribute
             */
            setFontSize: (size: string) => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetFontSize: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Overline: {
            /**
             * Set the font size attribute
             */
            setOverline: () => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetOverline: () => ReturnType;
            toggleOverline: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Underline: {
            setUnderline: () => ReturnType;
            unsetUnderline: () => ReturnType;
            toggleUnderline: () => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        TextDecoration: {
            /**
             * Set the font size attribute
             */
            setTextDecoration: (textDecoration: string) => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetTextDecoration: () => ReturnType;
        };
    }
}


declare module "@tiptap/core" {
    interface Commands<ReturnType> {
        selectedText: {
            setSelectedText: (from: number, to: number) => ReturnType;
            unsetSelectedText: (from: number, to: number) => ReturnType;
        };
    }
}


declare module '@tiptap/core' {
    interface Commands<ReturnType> {
        Strike: {
            /**
             * Set the font size attribute
             */
            setStrike: () => ReturnType;
            /**
             * Unset the font size attribute
             */
            unsetStrike: () => ReturnType;
            toggleStrike: () => ReturnType;
        };
    }
}
`,Ka="/mxcadApp/assets/WX-Two-dimensional-code.R04ml8j9.png",$a={},Za={class:"side-bar"};function Ja(t,n){return a(),d("div",Za,[...n[0]||(n[0]=[m("a",{href:"#",class:"icon-chat"},[N("WECHAT"),m("div",{class:"chat-tips"},[m("i"),m("img",{style:{width:"138px",height:"138px"},src:Ka,alt:"微信"})])],-1),m("a",{href:"mailto:710714273@qq.com",class:"icon-mail"},"mail",-1)])])}const Gn=y($a,[["render",Ja]]);let wn=!0;const ri={...ln,Layout(){return An(ln.Layout,null,{"layout-top":()=>An(Gn)})},enhanceApp(t){const{app:n,siteData:e}=t;e.value.router.prefetchLinks=!1,n.component("ContactWidget",Gn),ln.enhanceApp(t),n.mixin({async mounted(){wn&&(wn=!1,await j(()=>import("./lib.Cdm3KEls.js").then(r=>r.cw),[]).then(r=>{cn("mxcad-app",r.default||r),cn("mxcad",globalThis.MxCAD),cn("mxdraw",globalThis.Mx)}))}}),n.use(Wa,{defaultDirection:"column",ms:300,handleError(r){},onMonacoCreated(r){r.languages.typescript.typescriptDefaults.addExtraLib(`
          ${Ya} 
          `,"mxdraw"),r.languages.typescript.typescriptDefaults.addExtraLib(`
          ${za} 
          `,"mxcad"),r.languages.typescript.typescriptDefaults.addExtraLib(`
          declare module 'mxcad-app' { 
            ${Xa} 
          }
          `,"mxcad-app")}})}};export{Qa as A,ni as O,ti as P,ri as R,ei as a,ho as c,P as u,ja as v};
