import{_}from"./ItemButton.vue.ae3bd8ea.js";import x from"./Group.fcc5af0f.js";import{S as h}from"./transition.2f150816.js";import{g as y,r as C,q as w,o as r,j as i,b as f,w as p,a as u,G as v,I as B,i as k,ah as b}from"./entry.d468a8e7.js";const g={class:"flex flex-col overflow-hidden relative"},S={class:"action-sheet-container flex-1 overflow-y-auto space-y-1 justify-end px-4 pb-2 pt-4"},V=y({__name:"index",props:{closeButton:{type:Boolean,default:!0},closeButtonText:{type:String,default:"Cancel"}},emits:["close"],setup(n,{emit:d}){const t=C(!1),a=e=>{t.value=!1,setTimeout(()=>d("close",e),300)},m=e=>{const c=["action-sheet","action-sheet-container"],o=e.target.classList;for(const s of c)if(o.contains(s)){a(e);break}};return w(()=>{t.value=!0}),(e,c)=>{const l=_,o=x,s=h;return r(),i(b,{to:"body"},[f(s,{show:k(t),class:"action-sheet fixed z-50 top-0 left-0 w-screen h-screen max-h-screen max-w-full flex flex-col justify-end bg-black/[0.5]",enter:"transition-opacity duration-300","enter-from":"opacity-0","enter-to":"opacity-100",leave:"transition-opacity duration-300","leave-from":"opacity-100","leave-to":"opacity-0",onClick:m},{default:p(()=>[u("div",g,[u("div",S,[v(e.$slots,"default"),n.closeButton?(r(),i(o,{key:0},{default:p(()=>[f(l,{class:"text-red-500 font-bold",text:n.closeButtonText,onClick:a},null,8,["text"])]),_:1})):B("",!0)])])]),_:3},8,["show"])])}}});export{V as _};
