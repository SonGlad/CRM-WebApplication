"use strict";(self.webpackChunkcrm_web_application=self.webpackChunkcrm_web_application||[]).push([[249],{9066:(n,e,t)=>{t.d(e,{t:()=>C});var r,o,i=t(168),l=t(2978);const a=l.ZP.div(r||(r=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: auto;\n\n    .pagination-block{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.625rem;\n    }\n\n\n    .left-button-block,\n    .right-button-block{\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.625rem;\n    }\n\n    .paginaton-button{\n        border-radius: 50%;\n        padding: 0.25rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        scale: calc(1);\n        transition: scale ",";\n\n        & .arrow-icon{\n            width: 1rem;\n            height: 1rem;\n        }\n        & .icon{\n            width: 0.75rem;\n            height: 0.75rem;\n        }\n        & .left-arrow{\n            transform: rotate(90deg);\n        }\n        & .right-arrow{\n            transform: rotate(-90deg);\n        }\n        &:hover{\n            scale: calc(1.2);\n        }\n    }\n\n    .right-button-block{\n        & button {\n            background-color: ",";\n\n            & .right-arrow{\n                stroke: ",";\n            }\n            & .arrow-icon{\n                fill: ",";\n            }\n\n            &:disabled{\n                scale: calc(1);\n                pointer-events: none;\n\n                & .arrow-icon{\n                    fill: ",";\n                }\n                & .right-arrow{\n                    stroke: ",";\n                }\n            }\n\n        }\n        \n    }\n\n    .left-button-block{\n        & button {\n            background-color: ",";\n\n            & .left-arrow{\n                stroke: ",";\n            }\n            & .arrow-icon{\n                fill: ",";\n            }\n\n            &:disabled{\n                scale: calc(1);\n                pointer-events: none;\n\n                & .left-arrow{\n                    stroke: ",";\n                }\n                & .arrow-icon{\n                    fill: ",";\n                }\n            }\n        }\n    }\n\n    .button{\n        padding: 0.375rem;\n    }\n"])),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_black),(n=>n.theme.color.primary_black),(n=>n.theme.color.primary_grey),(n=>n.theme.color.primary_grey),(n=>n.theme.color.for_modal_color),(n=>n.theme.color.primary_white),(n=>n.theme.color.primary_white),(n=>n.theme.color.background),(n=>n.theme.color.background)),c=l.ZP.div(o||(o=(0,i.Z)(["\n    display: flex;\n    align-items: center;\n    gap: 0.375rem;\n\n    .content-list{\n        display: flex;\n        align-items: center;\n        gap: 0.5rem;\n        max-width: 17.875rem;\n        overflow-x: auto;\n        scroll-snap-type: x mandatory;\n        padding: 0 2px;\n\n        &::-webkit-scrollbar {\n            display: none;\n        }\n        &::-webkit-scrollbar-thumb {\n            display: none;\n        }\n    }\n\n    .content-item {\n        scroll-snap-align: center;\n        padding: 0;\n    }\n\n    .button-background{\n        font-size: 0.75rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: 0.25rem;\n        width: 1.5rem;\n        height: 1.5rem;\n        border-radius: 50%;\n        background-color: pink;\n        background-color: ",";\n        color: ",";\n        transition: all ",";\n\n        &:hover{\n            background-color: ",";\n            color: ",";\n        }\n    }\n\n    .button-active{\n        background-color: ",";\n        color: ",";\n    }\n"])),(n=>n.theme.color.for_modal_color),(n=>n.theme.color.primary_white),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_black),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_black));var s,h=t(2791);function d(){return d=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},d.apply(this,arguments)}function m(n,e){let{title:t,titleId:r,...o}=n;return h.createElement("svg",d({className:"icon icon-angle-double-right",ref:e,"aria-labelledby":r},o),t?h.createElement("title",{id:r},t):null,s||(s=h.createElement("use",{xlinkHref:"#icon-angle-double-right"},h.createElement("symbol",{id:"icon-angle-double-right",viewBox:"0 0 16 28"},h.createElement("path",{d:"M9.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359zM15.297 15c0 0.125-0.063 0.266-0.156 0.359l-7.281 7.281c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-0.781-0.781c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l6.141-6.141-6.141-6.141c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l0.781-0.781c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l7.281 7.281c0.094 0.094 0.156 0.234 0.156 0.359z"})))))}const b=h.forwardRef(m);t.p;var g;function p(){return p=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},p.apply(this,arguments)}function u(n,e){let{title:t,titleId:r,...o}=n;return h.createElement("svg",p({className:"icon icon-angle-double-left",ref:e,"aria-labelledby":r},o),t?h.createElement("title",{id:r},t):null,g||(g=h.createElement("use",{xlinkHref:"#icon-angle-double-left"},h.createElement("symbol",{id:"icon-angle-double-left",viewBox:"0 0 16 28"},h.createElement("path",{d:"M9.797 21.5c0 0.125-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359zM15.797 21.5c0 0.125-0.063 0.266-0.156 0.359l-0.781 0.781c-0.094 0.094-0.234 0.156-0.359 0.156s-0.266-0.063-0.359-0.156l-7.281-7.281c-0.094-0.094-0.156-0.234-0.156-0.359s0.063-0.266 0.156-0.359l7.281-7.281c0.094-0.094 0.234-0.156 0.359-0.156s0.266 0.063 0.359 0.156l0.781 0.781c0.094 0.094 0.156 0.234 0.156 0.359s-0.063 0.266-0.156 0.359l-6.141 6.141 6.141 6.141c0.094 0.094 0.156 0.234 0.156 0.359z"})))))}const f=h.forwardRef(u);t.p;var x=t(9388),k=t(184);const y=(0,h.forwardRef)(((n,e)=>{let{firstVisible:t,clickOnFirstVisible:r,listRef:o,elements:i,toggleButtonBackground:l,setButtonActive:a,lastVisible:s,clickOnLastVisible:h}=n;return(0,k.jsxs)(c,{children:[t&&(0,k.jsx)("button",{type:"button",className:"button-background",onClick:r,children:(0,k.jsx)("p",{children:"..."})}),(0,k.jsx)("ul",{className:"content-list",ref:o,children:i.map(((n,e)=>(0,k.jsx)("li",{className:"content-item",children:(0,k.jsx)("button",{type:"button",className:"button-background ".concat(l(e+1)),onClick:()=>a(e+1),children:(0,k.jsx)("p",{children:n})})},e)))}),s&&(0,k.jsx)("button",{type:"button",className:"button-background",onClick:h,children:(0,k.jsx)("p",{children:"..."})})]})}));var w=t(3544),_=t(7039),v=t(2865),j=t(6677),N=t(4420);const C=()=>{const n=(0,N.I0)(),{isAdmin:e,isManager:t,isConversion:r}=(0,_.a)(),{totalPages:o,leadOffice:i,leadsAmountPerPage:l}=(0,j.t)(),{userLeadsComponent:c}=(0,v.a)(),[s,d]=(0,h.useState)(1),[m,g]=(0,h.useState)(!1),[p,u]=(0,h.useState)(!1),[C,M]=(0,h.useState)(0),[E,O]=(0,h.useState)(0),[z,P]=(0,h.useState)(!1),[Z,S]=(0,h.useState)(!1),V=(0,h.useRef)(null);let B;B=o?Number(o):1;const A=Array.from({length:B},((n,e)=>e+1)),I=s.toString(),R=l.toString();(0,h.useEffect)((()=>{(e||t||r)&&!c&&n((0,w.oC)({page:I,limit:R,branch:i}))}),[n,e,r,t,i,R,I,c]),(0,h.useEffect)((()=>{if(V.current){const n=V.current.querySelector(".button-active");n&&n.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})}}),[s]),(0,h.useEffect)((()=>{A.length>9&&(u(!0),M(10)),A.length>1&&S(!0),A.length<9&&u(!1),1===A.length&&(S(!1),u(!1))}),[A.length]);return(0,k.jsx)(a,{children:(0,k.jsxs)("div",{className:"pagination-block",children:[(0,k.jsxs)("div",{className:"left-button-block",children:[(0,k.jsx)("button",{type:"button",className:"paginaton-button",onClick:()=>{d(1),S(!0),P(!1),A.length>9&&(u(!0),g(!1),M(10),O(0))},disabled:!z,children:(0,k.jsx)(f,{className:"arrow-icon",width:16,height:16})}),(0,k.jsx)("button",{type:"button",className:"paginaton-button button",onClick:()=>{if(s>=2&&(d((n=>n-1)),S(!0)),s-1<=1&&P(!1),A.length>9&&A.length-s>=4){u(!0);const n=Math.max(10,s+4);M(n>A.length?A.length:n);const e=s-6;O(e>1?e:1)}A.length>9&&s<=6&&g(!1)},disabled:!z,children:(0,k.jsx)(x.r,{className:"icon left-arrow",width:12,height:12})})]}),(0,k.jsx)(y,{firstVisible:m,clickOnFirstVisible:()=>{d(E),S(!0);const n=E-5,e=A.length-9,t=Math.min(n,e);O(Math.max(t,0)),1===E&&P(!1),s<=10&&g(!1),A.length>=s&&u(!0);const r=E+5,o=Math.min(Math.max(r,10),A.length);M(o)},listRef:V,elements:A,toggleButtonBackground:n=>n===s?"button-active":"",setButtonActive:n=>{d(n);const e=A.length-n,t=A.length>9;if(g(t&&n>5),u(t&&e>=5),t){const e=Math.max(Math.min(n+5,A.length),10),t=A.length-9,r=Math.max(n-5,1),o=r>t?t:r;M(e),O(o)}else g(!1),u(!1);P(n>1),S(n<A.length)},lastVisible:p,clickOnLastVisible:()=>{d(C),g(!0),P(!0);const n=Math.min(A.length,C+5);M(n),n>=A.length&&u(!1),C===A.length&&S(!1);const e=C-5,t=A.length-9,r=Math.min(e,t);O(r)}}),(0,k.jsxs)("div",{className:"right-button-block",children:[(0,k.jsx)("button",{type:"button",className:"paginaton-button button",onClick:()=>{if(s<=A.length-1&&(d((n=>n+1)),P(!0)),A.length-s<=5&&u(!1),s+1===A.length&&S(!1),A.length>9&&s>=5){g(!0);const n=s+6;M(n>A.length?A.length:n);const e=s-4;O(e>A.length-9?A.length-9:e)}},disabled:!Z,children:(0,k.jsx)(x.r,{className:"icon right-arrow",width:12,height:12})}),(0,k.jsx)("button",{type:"button",className:"paginaton-button",onClick:()=>{d(A.length),S(!1),P(!0),A.length>9&&(u(!1),g(!0),M(A.length),O(A.length-9))},disabled:!Z,children:(0,k.jsx)(b,{className:"arrow-icon",width:16,height:16})})]})]})})}},1600:(n,e,t)=>{t.d(e,{X:()=>s});var r=t(8580),o=t(1879),i=t(8192),l=t(6081),a=t(4420),c=t(184);const s=n=>{let{selectedExternalLeadsCheckedCheckbox:e,lead:t}=n;const s=(0,a.I0)();return(0,c.jsx)(r.dA,{children:(0,c.jsxs)("div",{className:"custom-checkbox",children:[(0,c.jsx)("input",{className:"checkbox",type:"checkbox",name:"delete_external_lead",id:t._id,checked:e.includes(t._id),onChange:()=>{return n=t._id,void s((0,l.Nj)({_id:n}));var n}}),(0,c.jsxs)("div",{className:"custom-checkbox",children:[(0,c.jsx)(i.r,{className:"custom-checkbox-before",width:"16",height:"16"}),(0,c.jsx)(o.r,{className:"custom-checkbox-after",width:"16",height:"16"})]})]})})}},8580:(n,e,t)=>{t.d(e,{ZI:()=>c,dA:()=>s,yP:()=>h});var r,o,i,l=t(168),a=t(2978);const c=a.ZP.div(r||(r=(0,l.Z)(["\n  color: ",";\n  overflow-y: auto;\n  height: 74dvh;\n  position: relative;\n  border: 1px solid ",";\n  border-right: none;\n  border-radius: 12px;\n\n  @media screen and (min-width: 834px){\n    height: 71dvh;\n  }\n\n  @media screen and (min-width: 1236px){\n    height: 68.93dvh;\n  }\n\n\n  &::-webkit-scrollbar {\n    width: 0.5rem;\n    background-color: ",";\n    border-radius: 24px;\n  }\n  &::-webkit-scrollbar-thumb {\n    border-radius: 5px;\n    background-color: ",";\n    border-radius: 5px;\n  }\n\n\n  & table {\n    width: 100%;\n    border-collapse: collapse;\n    table-layout: fixed;\n\n    & thead{\n      position: sticky;\n      top: 0;\n      z-index: 2;\n\n      & th{\n        background-color: ",";\n        border-bottom: 1px solid ",";\n        border-right: 1px solid ",";\n\n        &:last-child{\n          border-right: none;\n        }\n      }\n    }\n  }\n\n\n  .back-color{\n    background-color: #369469;\n    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px 10px inset;\n  }\n  \n\n  & tr, td, th{\n    text-align: center;\n    padding: 1rem 0;\n  }\n\n  & tbody{\n    & td {\n      border-bottom: 1px solid ",";\n      border-right: 1px solid ",";\n    }\n\n    & tr:last-child{\n      & td{\n        border-bottom: none;\n      }\n    }\n  }\n\n      \n  & td:last-child, \n  & th:last-child{\n    border-right: none;\n    width: 3.75rem;\n  }\n\n\n  & td:nth-last-child(2),\n  & th:nth-last-child(2),\n  & td:nth-last-child(3),\n  & th:nth-last-child(3) {\n    width: 6rem;\n  }\n\n  \n  & td:last-child{\n    position: relative;\n  }\n\n\n  .TableHeaderName{\n    padding:0.5rem 0.25rem;\n    font-weight: 600;\n    font-size: 0.9rem;\n    overflow-wrap: break-word;\n    text-align: center;\n  }\n\n  .TableHeaderItem {\n    padding:0.5rem 0.25rem;\n    font-weight: 500;\n    font-size: 0.8rem;\n    overflow-wrap: break-word;\n    text-align: center;\n  }\n\n\n  #sourceColumn{\n    width: 5.5rem;\n  }\n  #createdColumn {\n    width: 7rem;\n  }\n  #officeColumn {\n    width: 5rem;\n  }\n\n\n  .check-btn{\n    font-size: 0.8rem;\n    width: 70%;\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 0.25rem 0.25rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    transition: color ",";\n\n    &:hover{\n      color: ",";\n    }\n  }\n\n"])),(n=>n.theme.color.primary_white),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_grey),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.background3),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_black),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_green_lite),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_grey)),s=a.ZP.div(o||(o=(0,l.Z)(["\n\n  .custom-checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .checkbox {\n    margin-top: 5px;\n    width: 16px;\n    height: 16px;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    opacity: 0;\n  }\n  \n  .custom-checkbox-before, .custom-checkbox-after{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n  }\n  .custom-checkbox-before{\n    opacity: 1;\n    transition: opacity ",";\n  }\n  .custom-checkbox-after{\n    opacity: 0;\n    transition: opacity ",";\n  }\n  .checkbox:focus + .custom-checkbox > .custom-checkbox-before{\n    outline: 3px solid ",";\n    border-radius: 2px;\n    outline-offset: -3px; \n  }\n\n  .checkbox:checked + .custom-checkbox > .custom-checkbox-after{\n    opacity: 1;\n  }\n  .checkbox:checked + .custom-checkbox > .custom-checkbox-before{\n    opacity: 0;\n  }\n\n"])),(n=>n.theme.transition.main_transition),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_green_lite)),h=a.ZP.div(i||(i=(0,l.Z)(["\n  position: relative;\n\n\n  .office-list{\n    width: 6rem;\n    position: absolute;\n    z-index: 1;\n    top: -0.5rem;\n    right: -115%;\n    border-radius: 0.5rem;\n    padding: 0.7rem 0.2rem;\n    gap: 1.4rem;\n    background-color: ",";\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    visibility: hidden;\n    opacity: 0;\n    scale: 0;\n    transform: scale(0.5) translateY(10px);\n    transform-origin: left top;\n    transition: all ",";\n  }\n\n  .office-list-visible{\n    opacity: 1;\n    visibility: visible;\n    scale: 1;\n    transform: scale(1) translateY(6px);\n    transform-origin: left top;\n  }\n\n  .office-item{\n    cursor: pointer;\n\n    & p{\n      font-size: 1rem;\n      transition: color ",";\n\n      &:hover{\n        color: ","\n      }\n    }\n  }\n\n\n  .assign-btn{\n    margin-left: 2px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.1rem;\n    font-size: 0.8rem;\n    width: 95%;\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 0.25rem 0.25rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    transition: color ",";\n\n    & .icon{\n      width: 0.875rem;\n      height: 0.875rem;\n      rotate: -90deg;\n      stroke: ",";\n      transition: all ",";\n    }\n\n    & .icon-active{\n      rotate: 90deg;\n    }\n\n    &:hover{\n      color: ",";\n    }\n  }\n"])),(n=>n.theme.color.background2),(n=>n.theme.transition.main_transition),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_black),(n=>n.theme.color.primary_green_lite),(n=>n.theme.color.primary_green_lite),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_black),(n=>n.theme.transition.main_transition),(n=>n.theme.color.primary_grey))}}]);
//# sourceMappingURL=249.dbd818c1.chunk.js.map