import{N as oe,C as se,t as ue,c as de,a as fe,H as Y,p as ve,T as pe,l as p,S as g,u as H,o as W}from"./open-closed.a6770954.js";import{g as Z,n as b,B as _,q as w,z as E,a0 as k,a6 as A,K as me,a5 as $,s as ce,a7 as P}from"./entry.cd41ae5a.js";function he(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function q(){let e=[],t={addEventListener(n,r,i,a){return n.addEventListener(r,i,a),t.add(()=>n.removeEventListener(r,i,a))},requestAnimationFrame(...n){let r=requestAnimationFrame(...n);t.add(()=>cancelAnimationFrame(r))},nextFrame(...n){t.requestAnimationFrame(()=>{t.requestAnimationFrame(...n)})},setTimeout(...n){let r=setTimeout(...n);t.add(()=>clearTimeout(r))},style(n,r,i){let a=n.style.getPropertyValue(r);return Object.assign(n.style,{[r]:i}),this.add(()=>{Object.assign(n.style,{[r]:a})})},group(n){let r=q();return n(r),this.add(()=>r.dispose())},add(n){return e.push(n),()=>{let r=e.indexOf(n);if(r>=0)for(let i of e.splice(r,1))i()}},dispose(){for(let n of e.splice(0))n()}};return t}function x(e,...t){e&&t.length>0&&e.classList.add(...t)}function F(e,...t){e&&t.length>0&&e.classList.remove(...t)}var j=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(j||{});function ge(e,t){let n=q();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:i}=getComputedStyle(e),[a,l]=[r,i].map(o=>{let[s=0]=o.split(",").filter(Boolean).map(u=>u.includes("ms")?parseFloat(u):parseFloat(u)*1e3).sort((u,d)=>d-u);return s});return a!==0?n.setTimeout(()=>t("finished"),a+l):t("finished"),n.add(()=>t("cancelled")),n.dispose}function X(e,t,n,r,i,a){let l=q(),o=a!==void 0?he(a):()=>{};return F(e,...i),x(e,...t,...n),l.nextFrame(()=>{F(e,...n),x(e,...r),l.add(ge(e,s=>(F(e,...r,...t),x(e,...i),o(s))))}),l.add(()=>F(e,...t,...n,...r,...i)),l.add(()=>o("cancelled")),l.dispose}function h(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let D=Symbol("TransitionContext");var be=(e=>(e.Visible="visible",e.Hidden="hidden",e))(be||{});function ye(){return P(D,null)!==null}function Ee(){let e=P(D,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function Se(){let e=P(U,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let U=Symbol("NestingContext");function C(e){return"children"in e?C(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function G(e){let t=b([]),n=b(!1);E(()=>n.value=!0),k(()=>n.value=!1);function r(a,l=g.Hidden){let o=t.value.findIndex(({id:s})=>s===a);o!==-1&&(H(l,{[g.Unmount](){t.value.splice(o,1)},[g.Hidden](){t.value[o].state="hidden"}}),!C(t)&&n.value&&(e==null||e()))}function i(a){let l=t.value.find(({id:o})=>o===a);return l?l.state!=="visible"&&(l.state="visible"):t.value.push({id:a,state:"visible"}),()=>r(a,g.Unmount)}return{children:t,register:i,unregister:r}}let J=oe.RenderStrategy,Te=Z({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r,expose:i}){let a=b(0);function l(){a.value|=p.Opening,t("beforeEnter")}function o(){a.value&=~p.Opening,t("afterEnter")}function s(){a.value|=p.Closing,t("beforeLeave")}function u(){a.value&=~p.Closing,t("afterLeave")}if(!ye()&&se())return()=>_(Fe,{...e,onBeforeEnter:l,onAfterEnter:o,onBeforeLeave:s,onAfterLeave:u},r);let d=b(null),S=w(()=>e.unmount?g.Unmount:g.Hidden);i({el:d,$el:d});let{show:m,appear:M}=Ee(),{register:N,unregister:B}=Se(),f=b(m.value?"visible":"hidden"),R={value:!0},y=ue(),T={value:!1},V=G(()=>{!T.value&&f.value!=="hidden"&&(f.value="hidden",B(y),u())});E(()=>{let v=N(y);k(v)}),A(()=>{if(S.value===g.Hidden&&y){if(m.value&&f.value!=="visible"){f.value="visible";return}H(f.value,{hidden:()=>B(y),visible:()=>N(y)})}});let z=h(e.enter),I=h(e.enterFrom),ee=h(e.enterTo),K=h(e.entered),te=h(e.leave),ne=h(e.leaveFrom),re=h(e.leaveTo);E(()=>{A(()=>{if(f.value==="visible"){let v=W(d);if(v instanceof Comment&&v.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function ae(v){let O=R.value&&!M.value,c=W(d);!c||!(c instanceof HTMLElement)||O||(T.value=!0,m.value&&l(),m.value||s(),v(m.value?X(c,z,I,ee,K,L=>{T.value=!1,L===j.Finished&&o()}):X(c,te,ne,re,K,L=>{T.value=!1,L===j.Finished&&(C(V)||(f.value="hidden",B(y),u()))})))}return E(()=>{me([m],(v,O,c)=>{ae(c),R.value=!1},{immediate:!0})}),$(U,V),de(w(()=>H(f.value,{visible:p.Open,hidden:p.Closed})|a.value)),()=>{let{appear:v,show:O,enter:c,enterFrom:L,enterTo:we,entered:Ae,leave:Ce,leaveFrom:Be,leaveTo:Oe,...Q}=e,le={ref:d},ie={...Q,...M.value&&m.value&&fe.isServer?{class:ce([n.class,Q.class,...z,...I])}:{}};return Y({theirProps:ie,ourProps:le,slot:{},slots:r,attrs:n,features:J,visible:f.value==="visible",name:"TransitionChild"})}}}),Le=Te,Fe=Z({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:n,slots:r}){let i=ve(),a=w(()=>e.show===null&&i!==null?(i.value&p.Open)===p.Open:e.show);A(()=>{if(![!0,!1].includes(a.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let l=b(a.value?"visible":"hidden"),o=G(()=>{l.value="hidden"}),s=b(!0),u={show:a,appear:w(()=>e.appear||!s.value)};return E(()=>{A(()=>{s.value=!1,a.value?l.value="visible":C(o)||(l.value="hidden")})}),$(U,o),$(D,u),()=>{let d=pe(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),S={unmount:e.unmount};return Y({ourProps:{...S,as:"template"},theirProps:{},slot:{},slots:{...r,default:()=>[_(Le,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...n,...S,...d},r.default)]},attrs:{},features:J,visible:l.value==="visible",name:"Transition"})}}});export{Fe as S,Te as h};
