import{e as i,h as n,i as r,v as e,t as l}from"./index-C1Uq-uBP.js";const u={__name:"Button",props:{title:String,onclick:Function,colorScheme:{type:String,default:"primary"},containerStyle:{type:Object,default:()=>({})}},setup(t){return(c,o)=>(i(),n("div",{style:e({width:"100%",...t.containerStyle})},[r("button",{class:"button flex-center",style:e({height:"50px",width:"100%",borderRadius:"10px",backgroundColor:t.colorScheme==="primary"?"var(--main-turquoise)":"transparent",border:"1px solid var(--main-turquoise)"}),onClick:o[0]||(o[0]=(...a)=>t.onclick&&t.onclick(...a))},[r("span",{style:e({fontFamily:"DM Sans",fontSize:"14px",color:t.colorScheme==="primary"?"var(--white-color)":"var(--main-turquoise)",fontWeight:"bold",textTransform:"capitalize"})},l(t.title),5)],4)],4))}};export{u as default};
