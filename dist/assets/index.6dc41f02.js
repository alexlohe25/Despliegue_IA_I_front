(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const r of l.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function x(){}function Ie(t,e){for(const n in e)t[n]=e[n];return t}function Je(t){return t()}function ze(){return Object.create(null)}function q(t){t.forEach(Je)}function We(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function at(t){return Object.keys(t).length===0}function ut(t,...e){if(t==null)return x;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function u(t,e){t.appendChild(e)}function y(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode.removeChild(t)}function be(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function te(t){return document.createTextNode(t)}function v(){return te(" ")}function oe(){return te("")}function he(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ft(t){return Array.from(t.childNodes)}function $e(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Le(t,e){t.value=e==null?"":e}function R(t,e,n,s){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,s?"important":"")}function dt(t,e,{bubbles:n=!1,cancelable:s=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,s,e),i}let ie;function se(t){ie=t}function we(){if(!ie)throw new Error("Function called outside component initialization");return ie}function ht(t){we().$$.on_mount.push(t)}function pt(t){we().$$.after_update.push(t)}function gt(t){we().$$.on_destroy.push(t)}function mt(){const t=we();return(e,n,{cancelable:s=!1}={})=>{const i=t.$$.callbacks[e];if(i){const l=dt(e,n,{cancelable:s});return i.slice().forEach(r=>{r.call(t,l)}),!l.defaultPrevented}return!0}}function Re(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const ne=[],Se=[],ge=[],Me=[],et=Promise.resolve();let ke=!1;function tt(){ke||(ke=!0,et.then(st))}function nt(){return tt(),et}function Ae(t){ge.push(t)}const xe=new Set;let pe=0;function st(){const t=ie;do{for(;pe<ne.length;){const e=ne[pe];pe++,se(e),_t(e.$$)}for(se(null),ne.length=0,pe=0;Se.length;)Se.pop()();for(let e=0;e<ge.length;e+=1){const n=ge[e];xe.has(n)||(xe.add(n),n())}ge.length=0}while(ne.length);for(;Me.length;)Me.pop()();ke=!1,xe.clear(),se(t)}function _t(t){if(t.fragment!==null){t.update(),q(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Ae)}}const me=new Set;let F;function re(){F={r:0,c:[],p:F}}function le(){F.r||q(F.c),F=F.p}function O(t,e){t&&t.i&&(me.delete(t),t.i(e))}function Z(t,e,n,s){if(t&&t.o){if(me.has(t))return;me.add(t),F.c.push(()=>{me.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function it(t,e){const n={},s={},i={$$scope:1};let l=t.length;for(;l--;){const r=t[l],c=e[l];if(c){for(const o in r)o in c||(s[o]=1);for(const o in c)i[o]||(n[o]=c[o],i[o]=1);t[l]=c}else for(const o in r)i[o]=1}for(const r in s)r in n||(n[r]=void 0);return n}function rt(t){return typeof t=="object"&&t!==null?t:{}}function G(t){t&&t.c()}function T(t,e,n,s){const{fragment:i,on_mount:l,on_destroy:r,after_update:c}=t.$$;i&&i.m(e,n),s||Ae(()=>{const o=l.map(Je).filter(We);r?r.push(...o):q(o),t.$$.on_mount=[]}),c.forEach(Ae)}function Q(t,e){const n=t.$$;n.fragment!==null&&(q(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(ne.push(t),tt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(t,e,n,s,i,l,r,c=[-1]){const o=ie;se(t);const a=t.$$={fragment:null,ctx:null,props:l,update:x,not_equal:i,bound:ze(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:ze(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let m=!1;if(a.ctx=n?n(t,e.props||{},(_,N,...b)=>{const k=b.length?b[0]:N;return a.ctx&&i(a.ctx[_],a.ctx[_]=k)&&(!a.skip_bound&&a.bound[_]&&a.bound[_](k),m&&bt(t,_)),N}):[],a.update(),m=!0,q(a.before_update),a.fragment=s?s(a.ctx):!1,e.target){if(e.hydrate){const _=ft(e.target);a.fragment&&a.fragment.l(_),_.forEach(w)}else a.fragment&&a.fragment.c();e.intro&&O(t.$$.fragment),T(t,e.target,e.anchor,e.customElement),st()}se(o)}class J{$destroy(){Q(this,1),this.$destroy=x}$on(e,n){const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const i=s.indexOf(n);i!==-1&&s.splice(i,1)}}$set(e){this.$$set&&!at(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ee=[];function lt(t,e){return{subscribe:ot(t,e).subscribe}}function ot(t,e=x){let n;const s=new Set;function i(c){if(U(t,c)&&(t=c,n)){const o=!ee.length;for(const a of s)a[1](),ee.push(a,t);if(o){for(let a=0;a<ee.length;a+=2)ee[a][0](ee[a+1]);ee.length=0}}}function l(c){i(c(t))}function r(c,o=x){const a=[c,o];return s.add(a),s.size===1&&(n=e(i)||x),c(t),()=>{s.delete(a),s.size===0&&(n(),n=null)}}return{set:i,update:l,subscribe:r}}function ct(t,e,n){const s=!Array.isArray(t),i=s?[t]:t,l=e.length<2;return lt(n,r=>{let c=!1;const o=[];let a=0,m=x;const _=()=>{if(a)return;m();const b=e(s?o[0]:o,r);l?r(b):m=We(b)?b:x},N=i.map((b,k)=>ut(b,P=>{o[k]=P,a&=~(1<<k),c&&_()},()=>{a|=1<<k}));return c=!0,_(),function(){q(N),m()}})}function wt(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,s,i,l,r=[],c="",o=t.split("/");for(o[0]||o.shift();i=o.shift();)n=i[0],n==="*"?(r.push("wild"),c+="/(.*)"):n===":"?(s=i.indexOf("?",1),l=i.indexOf(".",1),r.push(i.substring(1,~s?s:~l?l:i.length)),c+=!!~s&&!~l?"(?:/([^/]+?))?":"/([^/]+?)",~l&&(c+=(~s?"?":"")+"\\"+i.substring(l))):c+="/"+i;return{keys:r,pattern:new RegExp("^"+c+(e?"(?=$|/)":"/?$"),"i")}}function yt(t){let e,n,s;const i=[t[2]];var l=t[0];function r(c){let o={};for(let a=0;a<i.length;a+=1)o=Ie(o,i[a]);return{props:o}}return l&&(e=new l(r()),e.$on("routeEvent",t[7])),{c(){e&&G(e.$$.fragment),n=oe()},m(c,o){e&&T(e,c,o),y(c,n,o),s=!0},p(c,o){const a=o&4?it(i,[rt(c[2])]):{};if(l!==(l=c[0])){if(e){re();const m=e;Z(m.$$.fragment,1,0,()=>{Q(m,1)}),le()}l?(e=new l(r()),e.$on("routeEvent",c[7]),G(e.$$.fragment),O(e.$$.fragment,1),T(e,n.parentNode,n)):e=null}else l&&e.$set(a)},i(c){s||(e&&O(e.$$.fragment,c),s=!0)},o(c){e&&Z(e.$$.fragment,c),s=!1},d(c){c&&w(n),e&&Q(e,c)}}}function vt(t){let e,n,s;const i=[{params:t[1]},t[2]];var l=t[0];function r(c){let o={};for(let a=0;a<i.length;a+=1)o=Ie(o,i[a]);return{props:o}}return l&&(e=new l(r()),e.$on("routeEvent",t[6])),{c(){e&&G(e.$$.fragment),n=oe()},m(c,o){e&&T(e,c,o),y(c,n,o),s=!0},p(c,o){const a=o&6?it(i,[o&2&&{params:c[1]},o&4&&rt(c[2])]):{};if(l!==(l=c[0])){if(e){re();const m=e;Z(m.$$.fragment,1,0,()=>{Q(m,1)}),le()}l?(e=new l(r()),e.$on("routeEvent",c[6]),G(e.$$.fragment),O(e.$$.fragment,1),T(e,n.parentNode,n)):e=null}else l&&e.$set(a)},i(c){s||(e&&O(e.$$.fragment,c),s=!0)},o(c){e&&Z(e.$$.fragment,c),s=!1},d(c){c&&w(n),e&&Q(e,c)}}}function xt(t){let e,n,s,i;const l=[vt,yt],r=[];function c(o,a){return o[1]?0:1}return e=c(t),n=r[e]=l[e](t),{c(){n.c(),s=oe()},m(o,a){r[e].m(o,a),y(o,s,a),i=!0},p(o,[a]){let m=e;e=c(o),e===m?r[e].p(o,a):(re(),Z(r[m],1,1,()=>{r[m]=null}),le(),n=r[e],n?n.p(o,a):(n=r[e]=l[e](o),n.c()),O(n,1),n.m(s.parentNode,s))},i(o){i||(O(n),i=!0)},o(o){Z(n),i=!1},d(o){r[e].d(o),o&&w(s)}}}function Oe(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let s="";return n>-1&&(s=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:s}}const Ce=lt(null,function(e){e(Oe());const n=()=>{e(Oe())};return window.addEventListener("hashchange",n,!1),function(){window.removeEventListener("hashchange",n,!1)}});ct(Ce,t=>t.location);ct(Ce,t=>t.querystring);const Ne=ot(void 0);async function kt(t){if(!t||t.length<1||t.charAt(0)!="/"&&t.indexOf("#/")!==0)throw Error("Invalid parameter location");await nt(),history.replaceState({...history.state,__svelte_spa_router_scrollX:window.scrollX,__svelte_spa_router_scrollY:window.scrollY},void 0),window.location.hash=(t.charAt(0)=="#"?"":"#")+t}function At(t){t?window.scrollTo(t.__svelte_spa_router_scrollX,t.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function Ct(t,e,n){let{routes:s={}}=e,{prefix:i=""}=e,{restoreScrollState:l=!1}=e;class r{constructor(d,h){if(!h||typeof h!="function"&&(typeof h!="object"||h._sveltesparouter!==!0))throw Error("Invalid component object");if(!d||typeof d=="string"&&(d.length<1||d.charAt(0)!="/"&&d.charAt(0)!="*")||typeof d=="object"&&!(d instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:M,keys:C}=wt(d);this.path=d,typeof h=="object"&&h._sveltesparouter===!0?(this.component=h.component,this.conditions=h.conditions||[],this.userData=h.userData,this.props=h.props||{}):(this.component=()=>Promise.resolve(h),this.conditions=[],this.props={}),this._pattern=M,this._keys=C}match(d){if(i){if(typeof i=="string")if(d.startsWith(i))d=d.substr(i.length)||"/";else return null;else if(i instanceof RegExp){const E=d.match(i);if(E&&E[0])d=d.substr(E[0].length)||"/";else return null}}const h=this._pattern.exec(d);if(h===null)return null;if(this._keys===!1)return h;const M={};let C=0;for(;C<this._keys.length;){try{M[this._keys[C]]=decodeURIComponent(h[C+1]||"")||null}catch{M[this._keys[C]]=null}C++}return M}async checkConditions(d){for(let h=0;h<this.conditions.length;h++)if(!await this.conditions[h](d))return!1;return!0}}const c=[];s instanceof Map?s.forEach((g,d)=>{c.push(new r(d,g))}):Object.keys(s).forEach(g=>{c.push(new r(g,s[g]))});let o=null,a=null,m={};const _=mt();async function N(g,d){await nt(),_(g,d)}let b=null,k=null;l&&(k=g=>{g.state&&(g.state.__svelte_spa_router_scrollY||g.state.__svelte_spa_router_scrollX)?b=g.state:b=null},window.addEventListener("popstate",k),pt(()=>{At(b)}));let P=null,S=null;const V=Ce.subscribe(async g=>{P=g;let d=0;for(;d<c.length;){const h=c[d].match(g.location);if(!h){d++;continue}const M={route:c[d].path,location:g.location,querystring:g.querystring,userData:c[d].userData,params:h&&typeof h=="object"&&Object.keys(h).length?h:null};if(!await c[d].checkConditions(M)){n(0,o=null),S=null,N("conditionsFailed",M);return}N("routeLoading",Object.assign({},M));const C=c[d].component;if(S!=C){C.loading?(n(0,o=C.loading),S=C,n(1,a=C.loadingParams),n(2,m={}),N("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:a}))):(n(0,o=null),S=null);const E=await C();if(g!=P)return;n(0,o=E&&E.default||E),S=C}h&&typeof h=="object"&&Object.keys(h).length?n(1,a=h):n(1,a=null),n(2,m=c[d].props),N("routeLoaded",Object.assign({},M,{component:o,name:o.name,params:a})).then(()=>{Ne.set(a)});return}n(0,o=null),S=null,Ne.set(void 0)});gt(()=>{V(),k&&window.removeEventListener("popstate",k)});function A(g){Re.call(this,t,g)}function X(g){Re.call(this,t,g)}return t.$$set=g=>{"routes"in g&&n(3,s=g.routes),"prefix"in g&&n(4,i=g.prefix),"restoreScrollState"in g&&n(5,l=g.restoreScrollState)},t.$$.update=()=>{t.$$.dirty&32&&(history.scrollRestoration=l?"manual":"auto")},[o,a,m,s,i,l,A,X]}class jt extends J{constructor(e){super(),I(this,e,Ct,xt,U,{routes:3,prefix:4,restoreScrollState:5})}}function Et(t){let e,n,s,i,l,r,c,o,a,m,_,N,b,k,P,S,V,A,X,g;return{c(){e=f("main"),n=f("div"),s=f("div"),i=f("div"),l=f("div"),l.innerHTML="<h1>American Express Customer Default Prediction</h1>",r=v(),c=f("div"),o=f("div"),o.innerHTML="<p>Introduce an ID:</p>",a=v(),m=f("div"),_=f("input"),N=v(),b=f("button"),b.innerHTML='<i class="material-icons" style="font-size: 35px;" id="btn-dice">casino</i>',k=v(),P=f("div"),S=f("button"),S.innerHTML=`<div class="containe-btn-predict">Predict
                  <i class="material-icons" style="font-size: 45px;">pages</i></div>`,V=v(),A=f("div"),A.innerHTML=`<p>Model: Neural network with 3 hiden layers from Scikit-learn MLP Model using ReLu as activaction function and Adam algorithm as solver.</p> 
          <p>Dataset from: 
            <a href="https://www.kaggle.com/competitions/amex-default-prediction/overview" id="link-to-kaggle">https://www.kaggle.com/competitions/amex-default-prediction/overview</a></p>`,p(l,"class","title"),p(o,"class","subtitle-input-section"),p(_,"id","txtInput"),p(_,"type","text"),p(_,"placeholder","customer id"),p(_,"class","svelte-mt6c2i"),p(b,"id","btn-random"),p(m,"class","input-component-container"),p(c,"class","input-section"),p(S,"id","btn-predict"),p(P,"class","buton-container"),p(i,"class","card-general-container"),p(s,"class","container-above"),p(A,"class","container-footer"),p(n,"class","container-general")},m(d,h){y(d,e,h),u(e,n),u(n,s),u(s,i),u(i,l),u(i,r),u(i,c),u(c,o),u(c,a),u(c,m),u(m,_),Le(_,t[0]),u(m,N),u(m,b),u(i,k),u(i,P),u(P,S),u(n,V),u(n,A),X||(g=[he(_,"input",t[4]),he(_,"input",t[5]),he(b,"click",t[2]),he(S,"click",t[3])],X=!0)},p(d,[h]){h&1&&_.value!==d[0]&&Le(_,d[0])},i:x,o:x,d(d){d&&w(e),X=!1,q(g)}}}function zt(t,e,n){let s="";function i(m){n(0,s=m.target.value)}let l={randomId:""};async function r(){l={randomId:(await(await fetch("http://ec2-44-209-10-17.compute-1.amazonaws.com:8080/random_customer")).json()).randomCustomer},n(0,s=l.randomId)}const c=()=>{kt("/Results/"+s)};function o(){s=this.value,n(0,s)}return[s,i,r,c,o,m=>i(m)]}class Lt extends J{constructor(e){super(),I(this,e,zt,Et,U,{})}}function Rt(t){let e;return{c(){e=f("main"),e.innerHTML="<h1>Error</h1>"},m(n,s){y(n,e,s)},p:x,i:x,o:x,d(n){n&&w(e)}}}class St extends J{constructor(e){super(),I(this,e,null,Rt,U,{})}}const Pe=/[a-zA-Z]/,Mt=(t,e)=>{if(t[0]==="#"&&(t=t.slice(1)),t.length===3){let s="";t.split("").forEach(i=>{s+=i,s+=i}),t=s}return`rgba(${(t.match(/.{2}/g)||[]).map(s=>parseInt(s,16)).join(", ")}, ${e})`},_e=(t,e=0)=>[...Array(t).keys()].map(n=>n+e);function De(t,e,n){const s=t.slice();return s[5]=e[n],s}function Be(t){let e;return{c(){e=f("div"),p(e,"class","lines small-lines "+t[5]+" svelte-vhcw6"),R(e,"--color",t[0]),R(e,"--duration",t[2])},m(n,s){y(n,e,s)},p(n,s){s&1&&R(e,"--color",n[0]),s&4&&R(e,"--duration",n[2])},d(n){n&&w(e)}}}function Ot(t){let e,n=_e(2,1),s=[];for(let i=0;i<n.length;i+=1)s[i]=Be(De(t,n,i));return{c(){e=f("div");for(let i=0;i<s.length;i+=1)s[i].c();p(e,"class","wrapper svelte-vhcw6"),R(e,"--size",t[3]+t[1]),R(e,"--rgba",t[4])},m(i,l){y(i,e,l);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(i,[l]){if(l&5){n=_e(2,1);let r;for(r=0;r<n.length;r+=1){const c=De(i,n,r);s[r]?s[r].p(c,l):(s[r]=Be(c),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}l&10&&R(e,"--size",i[3]+i[1]),l&16&&R(e,"--rgba",i[4])},i:x,o:x,d(i){i&&w(e),be(s,i)}}}function Nt(t,e,n){let{color:s="#FF3E00"}=e,{unit:i="px"}=e,{duration:l="2.1s"}=e,{size:r="60"}=e,c;return t.$$set=o=>{"color"in o&&n(0,s=o.color),"unit"in o&&n(1,i=o.unit),"duration"in o&&n(2,l=o.duration),"size"in o&&n(3,r=o.size)},t.$$.update=()=>{t.$$.dirty&1&&n(4,c=Mt(s,.2))},[s,i,l,r,c]}class Pt extends J{constructor(e){super(),I(this,e,Nt,Ot,U,{color:0,unit:1,duration:2,size:3})}}function He(t,e,n){const s=t.slice();return s[6]=e[n],s}function Ye(t){let e;return{c(){e=f("div"),p(e,"class","bar svelte-8cmcz4"),R(e,"left",t[6]*(+t[3]/5+(+t[3]/15-+t[3]/100))+t[1]),R(e,"animation-delay",t[6]*(+t[5]/8.3)+t[4])},m(n,s){y(n,e,s)},p(n,s){s&10&&R(e,"left",n[6]*(+n[3]/5+(+n[3]/15-+n[3]/100))+n[1])},d(n){n&&w(e)}}}function Dt(t){let e,n=_e(10,0),s=[];for(let i=0;i<n.length;i+=1)s[i]=Ye(He(t,n,i));return{c(){e=f("div");for(let i=0;i<s.length;i+=1)s[i].c();p(e,"class","wrapper svelte-8cmcz4"),R(e,"--size",t[3]+t[1]),R(e,"--color",t[0]),R(e,"--duration",t[2])},m(i,l){y(i,e,l);for(let r=0;r<s.length;r+=1)s[r].m(e,null)},p(i,[l]){if(l&58){n=_e(10,0);let r;for(r=0;r<n.length;r+=1){const c=He(i,n,r);s[r]?s[r].p(c,l):(s[r]=Ye(c),s[r].c(),s[r].m(e,null))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}l&10&&R(e,"--size",i[3]+i[1]),l&1&&R(e,"--color",i[0]),l&4&&R(e,"--duration",i[2])},i:x,o:x,d(i){i&&w(e),be(s,i)}}}function Bt(t,e,n){let{color:s="#FF3E00"}=e,{unit:i="px"}=e,{duration:l="1.25s"}=e,{size:r="60"}=e,c=l.match(Pe)[0],o=l.replace(Pe,"");return t.$$set=a=>{"color"in a&&n(0,s=a.color),"unit"in a&&n(1,i=a.unit),"duration"in a&&n(2,l=a.duration),"size"in a&&n(3,r=a.size)},[s,i,l,r,c,o]}class Ht extends J{constructor(e){super(),I(this,e,Bt,Dt,U,{color:0,unit:1,duration:2,size:3})}}function Ze(t,e,n){const s=t.slice();return s[3]=e[n],s}function Xe(t,e,n){const s=t.slice();return s[6]=e[n],s[8]=n,s}function Ke(t){let e,n,s;return{c(){e=f("div"),n=v(),s=f("p"),s.textContent="Approved",p(e,"class","state-results-tick")},m(i,l){y(i,e,l),y(i,n,l),y(i,s,l)},d(i){i&&w(e),i&&w(n),i&&w(s)}}}function Te(t){let e,n,s;return{c(){e=f("div"),n=v(),s=f("p"),s.textContent="Denied",p(e,"class","state-results-cross")},m(i,l){y(i,e,l),y(i,n,l),y(i,s,l)},d(i){i&&w(e),i&&w(n),i&&w(s)}}}function Qe(t){let e,n;return e=new Pt({props:{size:"200",color:"#3054C5"}}),{c(){G(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},i(s){n||(O(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){Q(e,s)}}}function Ue(t){let e,n;return e=new Ht({props:{size:"100",color:"#EB5027"}}),{c(){G(e.$$.fragment)},m(s,i){T(e,s,i),n=!0},i(s){n||(O(e.$$.fragment,s),n=!0)},o(s){Z(e.$$.fragment,s),n=!1},d(s){Q(e,s)}}}function Ve(t){let e,n=t[1].columns,s=[];for(let i=0;i<n.length;i+=1)s[i]=Fe(Xe(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=oe()},m(i,l){for(let r=0;r<s.length;r+=1)s[r].m(i,l);y(i,e,l)},p(i,l){if(l&2){n=i[1].columns;let r;for(r=0;r<n.length;r+=1){const c=Xe(i,n,r);s[r]?s[r].p(c,l):(s[r]=Fe(c),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(i){be(s,i),i&&w(e)}}}function Fe(t){let e,n,s=t[8]+1+"",i,l;return{c(){e=f("th"),n=te("col_"),i=te(s),l=v()},m(r,c){y(r,e,c),u(e,n),u(e,i),u(e,l)},p:x,d(r){r&&w(e)}}}function Ge(t){let e,n=t[1].data,s=[];for(let i=0;i<n.length;i+=1)s[i]=qe(Ze(t,n,i));return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=oe()},m(i,l){for(let r=0;r<s.length;r+=1)s[r].m(i,l);y(i,e,l)},p(i,l){if(l&2){n=i[1].data;let r;for(r=0;r<n.length;r+=1){const c=Ze(i,n,r);s[r]?s[r].p(c,l):(s[r]=qe(c),s[r].c(),s[r].m(e.parentNode,e))}for(;r<s.length;r+=1)s[r].d(1);s.length=n.length}},d(i){be(s,i),i&&w(e)}}}function qe(t){let e,n=Number(t[3]).toFixed(4)+"",s;return{c(){e=f("td"),s=te(n),p(e,"class","show-results-table-body-td")},m(i,l){y(i,e,l),u(e,s)},p(i,l){l&2&&n!==(n=Number(i[3]).toFixed(4)+"")&&$e(s,n)},d(i){i&&w(e)}}}function Yt(t){let e,n,s,i,l,r,c,o,a,m,_,N,b,k,P=t[0].id+"",S,V,A,X,g,d,h,M,C,E,ye,W,ce,ae,je,ve,ue,fe,Ee,de,$,H=t[1].target_calculated==1&&Ke(),Y=t[1].target_calculated==0&&Te(),z=t[2]!=!1&&Qe(),L=t[2]!=!1&&Ue(),D=t[2]!=!0&&Ve(t),B=t[2]!=!0&&Ge(t);return{c(){e=f("main"),n=f("div"),s=f("div"),i=f("div"),l=f("div"),l.innerHTML="<h1>American Express Customer Default Prediction</h1>",r=v(),c=f("div"),o=f("div"),a=f("div"),a.innerHTML="<h3>Customer Credit Card Status</h3>",m=v(),_=f("div"),_.innerHTML='<i id="icon_user" class="material-icons">account_circle</i>',N=v(),b=f("div"),k=f("p"),S=te(P),V=v(),A=f("div"),H&&H.c(),X=v(),Y&&Y.c(),g=v(),z&&z.c(),d=v(),h=f("div"),M=f("div"),M.innerHTML="<p>Customer Data Summary</p>",C=v(),E=f("div"),L&&L.c(),ye=v(),W=f("table"),ce=f("thead"),ae=f("tr"),D&&D.c(),je=v(),ve=f("tbody"),ue=f("tr"),B&&B.c(),Ee=v(),de=f("div"),de.innerHTML=`<p>Model: Neural network with 3 hiden layers from Scikit-learn MLP Model using ReLu as activaction function and Adam algorithm as solver.</p> 
            <p>Dataset from: 
                <a href="https://www.kaggle.com/competitions/amex-default-prediction/overview" id="link-to-kaggle">https://www.kaggle.com/competitions/amex-default-prediction/overview</a></p>`,p(l,"class","title"),p(a,"class","subtitle-rectangle-results"),p(_,"class","icon-results"),p(b,"class","test-id-results"),p(A,"class","state-results"),p(o,"class","rectangle-results"),p(c,"class","results-section"),p(M,"class","show-results-title"),p(ce,"class","show-results-table-head"),p(W,"class","show-results-table"),p(E,"class",fe=`show-results-summary-${t[2]!=!0?"table":""}`),p(h,"class","show-results-section"),p(i,"class","card-general-container-results"),p(s,"class","container-above"),p(de,"class","container-footer"),p(n,"class","container-general")},m(j,K){y(j,e,K),u(e,n),u(n,s),u(s,i),u(i,l),u(i,r),u(i,c),u(c,o),u(o,a),u(o,m),u(o,_),u(o,N),u(o,b),u(b,k),u(k,S),u(o,V),u(o,A),H&&H.m(A,null),u(A,X),Y&&Y.m(A,null),u(A,g),z&&z.m(A,null),u(i,d),u(i,h),u(h,M),u(h,C),u(h,E),L&&L.m(E,null),u(E,ye),u(E,W),u(W,ce),u(ce,ae),D&&D.m(ae,null),u(W,je),u(W,ve),u(ve,ue),B&&B.m(ue,null),u(n,Ee),u(n,de),$=!0},p(j,[K]){(!$||K&1)&&P!==(P=j[0].id+"")&&$e(S,P),j[1].target_calculated==1?H||(H=Ke(),H.c(),H.m(A,X)):H&&(H.d(1),H=null),j[1].target_calculated==0?Y||(Y=Te(),Y.c(),Y.m(A,g)):Y&&(Y.d(1),Y=null),j[2]!=!1?z?K&4&&O(z,1):(z=Qe(),z.c(),O(z,1),z.m(A,null)):z&&(re(),Z(z,1,1,()=>{z=null}),le()),j[2]!=!1?L?K&4&&O(L,1):(L=Ue(),L.c(),O(L,1),L.m(E,ye)):L&&(re(),Z(L,1,1,()=>{L=null}),le()),j[2]!=!0?D?D.p(j,K):(D=Ve(j),D.c(),D.m(ae,null)):D&&(D.d(1),D=null),j[2]!=!0?B?B.p(j,K):(B=Ge(j),B.c(),B.m(ue,null)):B&&(B.d(1),B=null),(!$||K&4&&fe!==(fe=`show-results-summary-${j[2]!=!0?"table":""}`))&&p(E,"class",fe)},i(j){$||(O(z),O(L),$=!0)},o(j){Z(z),Z(L),$=!1},d(j){j&&w(e),H&&H.d(),Y&&Y.d(),z&&z.d(),L&&L.d(),D&&D.d(),B&&B.d()}}}function Zt(t,e,n){let{params:s={}}=e,i=[],l=!0;return ht(async()=>{fetch(`http://ec2-44-209-10-17.compute-1.amazonaws.com:8080/id/${s.id}`).then(r=>r.json()).then(r=>{n(1,i=r),n(2,l=!1),console.log("Target_calculated: "+i.target_calculated),console.log("Original target: "+i.target)}).catch(r=>(console.log(r),[]))}),t.$$set=r=>{"params"in r&&n(0,s=r.params)},[s,i,l]}class Xt extends J{constructor(e){super(),I(this,e,Zt,Yt,U,{params:0})}}function Kt(t){let e,n,s;return n=new jt({props:{routes:t[0]}}),{c(){e=f("main"),G(n.$$.fragment)},m(i,l){y(i,e,l),T(n,e,null),s=!0},p:x,i(i){s||(O(n.$$.fragment,i),s=!0)},o(i){Z(n.$$.fragment,i),s=!1},d(i){i&&w(e),Q(n)}}}function Tt(t){return[{"/":Lt,"/results/:id":Xt,"*":St}]}class Qt extends J{constructor(e){super(),I(this,e,Tt,Kt,U,{})}}new Qt({target:document.getElementById("app")});
