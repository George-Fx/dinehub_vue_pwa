import{c as y,b as m,w as b,u as e,e as a,f as l,g as r,h as n,i as o,F as f,q as k,k as d,n as t,v as g,t as p,j as w}from"./index-C1Uq-uBP.js";const v={key:0,class:t("scrollable container"),style:{paddingTop:"10px",paddingBottom:"10px"}},B=["onClick"],C={class:t("row-c-sb")},F={class:t("row-c-sb")},S={class:t("t12"),style:{color:"#fff"}},P={class:t("t12")},T={key:1,class:t("flex-center"),style:{height:"100%",width:"100%"}},A={key:2,style:{padding:"20px",gap:"10px"},class:t("flex-row")},z={__name:"Promocodes",setup(L){const{promocodesLoading:i,promocodes:u}=y.useGetPromocodes(),h=_=>{navigator.clipboard.writeText(_).then(()=>{alert("Promocode copied to clipboard!")}).catch(c=>{console.error("Could not copy text: ",c)})};return(_,c)=>(a(),m(e(r).Screen,null,{default:b(()=>[l(e(r).Header,{showGoBack:!0,title:"Promocodes & gift cards"}),e(i)?d("",!0):(a(),n("main",v,[o("ul",null,[(a(!0),n(f,null,k(e(u),(s,x)=>(a(),n("li",{key:s.id,onClick:N=>h(s.code),style:g({gap:"7px",padding:"20px",borderRadius:"var(--border-radius)",backgroundColor:"var(--white-color)",marginBottom:x===e(u).length-1?"0":"14px"}),class:t("flex-column clickable")},[o("div",C,[o("h3",null,p(s.code),1),l(e(w).CopySvg)]),o("div",F,[o("div",{style:g({padding:"3px 8px",borderRadius:"5px",backgroundColor:s.discount===35?"#FFA462":s.discount===50?"#FA5555":"#00B0B9"}),class:t("flex-center")},[o("span",S,p(s.discount)+"% discount",1)],4),o("span",P,"Expire "+p(s.expiry),1)])],12,B))),128))])])),e(i)?(a(),n("div",T,c[0]||(c[0]=[o("span",{class:t("t16")},"Loading...",-1)]))):d("",!0),e(i)?d("",!0):(a(),n("section",A,[l(e(r).InputField,{inputType:"coupon",placeholder:"Add new coupon",containerStyle:{width:"100%"}}),l(e(r).Button,{title:"+ add",containerStyle:{width:"40%"}})]))]),_:1}))}};export{z as default};
