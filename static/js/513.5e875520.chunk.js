"use strict";(self.webpackChunkcrm_web_application=self.webpackChunkcrm_web_application||[]).push([[513],{8589:(e,n,t)=>{t.d(n,{r:()=>i});var r,a=t(2791);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function l(e,n){let{title:t,titleId:l,...i}=e;return a.createElement("svg",o({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":l},i),t?a.createElement("title",{id:l},t):null,r||(r=a.createElement("g",{id:"vuesax/linear/arrow-right"},a.createElement("g",{id:"arrow-right"},a.createElement("path",{id:"Vector",d:"M6.38 3.95312L2.33334 7.99979L6.38 12.0465",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),a.createElement("path",{id:"Vector_2",d:"M13.6667 8H2.44666",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))))}const i=a.forwardRef(l);t.p},4513:(e,n,t)=>{t.r(n),t.d(n,{default:()=>Y});var r,a=t(168),o=t(2978);const l=o.ZP.div(r||(r=(0,a.Z)(["\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    border-radius: 0.75rem;\n    background-color: ",";\n    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);\n    padding: 0.75rem;\n\n\n    .wraper{\n        width: 100%;\n        border: 1px solid ",";\n        border-radius: 0.75rem;\n        padding: 0.75rem;\n        height: 90.5dvh;\n\n        @media screen and (min-width: 834px) {\n            height: 87.5dvh;\n            display: flex;\n            flex-direction: column;\n        }\n    }\n\n    .content-container{\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        flex-grow: 1;\n    }\n"])),(e=>e.theme.color.background),(e=>e.theme.color.primary_green_lite));var i,s,c=t(1087),d=t(6081),m=t(7531),u=t(4420),h=t(7039),g=t(2865),p=t(6677);const x=o.ZP.div(i||(i=(0,a.Z)(["\n  border-radius: 0.625rem;\n  width: 100%;\n  margin-top: 2rem;\n  position: relative;\n  overflow-y: auto;\n\n  .TableContainer{\nborder: 1px solid ",';\n  }\n\n  .Table {\n    table-layout: auto;\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 0.5rem;\n  }\n\n\n  .TableHeader {\n    position: sticky;\n    top: 0;\n    z-index: 1;\n    background: #223f53;\n  }\n\n  .TableHeaderItem::after {\n    content: "";\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    height: 1px; \n     background-color: #E3FFA8;\n    z-index: 5;\n}\n\n/* \n  .TableHeaderList thead {\n    padding: 1rem 0.25rem 1rem 0.25rem;\n\n    border-top: 1px solid #E3FFA8;\n  } */\n\n  td[id^="status-"],\n  td[id^="timeZone-"],\n  td[id^="country-"],\n  td[id^="region-"],\n  td[id^="city-"] {\n    max-width: 70px;\n    max-height: 50px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n\n  .TableHeaderItem {\n    padding:0.5rem 0.25rem;\n    border-bottom: 1px solid transparent;\n    text-align: left;\n    font-weight: 500;\n    font-size: 0.5rem;\n    overflow-wrap: break-word;\n    text-align: center;\n    position: relative;\n\n    @media only screen and (min-width: 1800px) {\n      white-space: nowrap;\n    }\n  }\n\n  .TableHeaderItem:not(:last-child) {\n    border-right: 1px solid ',";\n  }\n\n\n  .WordList textarea,\n  select,\n  input {\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n    resize: none;\n    overflow: hidden;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    color: ",";\n    position: relative;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  .dropdown {\n    width: 10rem;\n    z-index: 1000;\n    position: absolute;\n    font-size: 0.75rem;\n    gap: 0.2rem;\n    border-radius: 1rem;\n    padding: 0.75rem 0.5rem;\n    box-shadow: 0 0.25rem 3rem 0 rgba(18, 20, 23, 0.08);\n       background-color: ",";\n    border: 0.25rem solid ",";\n    color: black;\n    overflow: hidden;\n     overflow-x: auto; \n  }\n\n\n  .ListItem {\n    cursor: pointer;\n    color: #E3FFA8;\n\n    &:hover {\n      color: #a2a59e;\n    }\n  }\n\n\n  .arrow-svg {\n    cursor: pointer;\n    width: 0.875rem;\n    height: 0.875rem;\n    stroke: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    position: absolute;\n    left: 5px;\n    bottom: 0px;\n  }\n\n  .arrow-svg-close {\n     cursor: pointer;\n    transform: rotate(180deg);\n  }\n\n  .InputContainer {\n    display: flex;\n    position: absolute;\n    background-color: ",";\n    border: 0.25rem solid ",";\n    border-radius: 10px;\n    padding: 10px;\n    z-index: 999;\n    width: max-content;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  }\n\n  .InputContainer input {\n    color: white;\n  }\n\n  .ButtonSave {\n    cursor: pointer;\n    border-radius: 5px;\n    background: #E3FFA8;\n    color: ",";\n    border: none;\n  }\n\n    .check-btn{\n    font-size: 0.5rem;\n    /* width: 70%; */\n    color: ",";\n    background-color: ",";\n    border: 1px solid ",";\n    padding: 0.25rem 0.25rem;\n    border-radius: 0.5rem;\n    cursor: pointer;\n    transition: color ",";\n    flex-wrap: nowrap;\n\n    &:hover{\n      color: ",";\n    }\n  }\n\n\n  .calendar-cont{\n    width: 72px;\n\n    & input{\n      padding: 0;\n      text-align: center;\n      color: ",";\n      transition: border ",";\n\n      &:focus,\n      &:hover {\n        color: ",";\n\n        &::placeholder{\n        color: ",";\n      }\n      }\n      \n      &::placeholder{\n        color: ",";\n      }\n    }\n  }\n"])),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_white),(e=>e.theme.color.background2),(e=>e.theme.color.background3),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.background2),(e=>e.theme.color.background3),(e=>e.theme.color.background2),(e=>e.theme.color.primary_black),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_grey),(e=>e.theme.color.primary_white),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_white));o.ZP.div(s||(s=(0,a.Z)(["\n\n  .custom-checkbox{\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  .checkbox {\n    margin-top: 5px;\n    width: 1rem;\n    height: 1rem;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    opacity: 0;\n  }\n  \n  .custom-checkbox-before, .custom-checkbox-after{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    pointer-events: none;\n  }\n  .custom-checkbox-before{\n    opacity: 1;\n    transition: opacity ",";\n  }\n  .custom-checkbox-after{\n    opacity: 0;\n    transition: opacity ",";\n  }\n  .checkbox:focus + .custom-checkbox > .custom-checkbox-before{\n    outline: 3px solid ",";\n    border-radius: 2px;\n    outline-offset: -3px; \n  }\n\n  .checkbox:checked + .custom-checkbox > .custom-checkbox-after{\n    opacity: 1;\n  }\n  .checkbox:checked + .custom-checkbox > .custom-checkbox-before{\n    opacity: 0;\n  }\n\n"])),(e=>e.theme.transition.main_transition),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_green_lite));var b=t(9388),w=t(3544),f=t(184);const j=e=>{let{inputVisible:n,dropdownRef:t,setInputVisible:r}=e;const a=(0,u.I0)(),{timeZone:o,isTimeZoneLoading:l}=(0,p.t)();return(0,f.jsx)(f.Fragment,{children:null!==n.row&&"timeZone"===n.cell&&(0,f.jsx)("ul",{className:"dropdown",ref:t,children:l?"Loading...".split("").map(((e,n)=>(0,f.jsx)("li",{className:"ListItem",children:e},n))):o.map(((e,t)=>(0,f.jsx)("li",{className:"ListItem",value:e,onClick:t=>((e,n,t,o)=>{e.preventDefault(),a((0,w.f3)({id:o,leadTimeZone:t})),r({row:null,cell:null,leadId:null})})(t,n.row,e,n.leadId),children:e},t)))})})},y=e=>{let{inputVisible:n,dropdownRef:t,setInputVisible:r}=e;const a=(0,u.I0)(),{status:o,isStatusLoading:l,isStatusError:i}=(0,p.t)();return i?(0,f.jsx)("div",{children:"Oooops something wrong"}):(0,f.jsx)(f.Fragment,{children:null!==n.row&&"status"===n.cell&&(0,f.jsx)("ul",{className:"dropdown",ref:t,children:l?"Loading...".split("").map(((e,n)=>(0,f.jsx)("li",{className:"ListItem",children:e},n))):o.map(((e,t)=>(0,f.jsx)("li",{className:"ListItem",value:e,onClick:t=>((e,n,t)=>{e.preventDefault(),a((0,w.Cy)({id:t,leadStatus:n})),r({row:null,cell:null,leadId:null})})(t,n.row,e,n.leadId),children:e},t)))})})};var I=t(2791);const v=e=>{let{inputVisible:n,inputRef:t,handleTextareaChange:r,setInputVisible:a}=e;const o=(0,u.I0)(),[l,i]=(0,I.useState)("");return(0,f.jsx)(f.Fragment,{children:null!==n.row&&null!==n.cell&&"status"!==n.cell&&"timeZone"!==n.cell&&(0,f.jsxs)("form",{className:"InputContainer",ref:t,children:[(0,f.jsx)("input",{value:l,onChange:e=>{i(e.target.value)},onInput:r}),(0,f.jsx)("button",{className:"ButtonSave",type:"submit",onClick:e=>((e,n,t,r)=>{switch(e.preventDefault(),t){case"city":o((0,w.n7)({id:r,leadCity:l})),i(""),a({row:null,cell:null,leadId:null});break;case"region":o((0,w.c2)({id:r,leadRegion:l})),i(""),a({row:null,cell:null,leadId:null});break;case"country":"country"===t&&(o((0,w.GM)({id:r,leadCountry:l})),i(""),a({row:null,cell:null,leadId:null}))}})(e,n.row,n.cell,n.leadId),children:"Save"})]})})};var k=t(9557);t(7717);const N=e=>{let{lead:n}=e;const[t,r]=(0,I.useState)(null),a=(0,I.useRef)(new Date),o=(0,u.I0)(),l=(0,I.useMemo)((()=>n.nextCall?new Date(n.nextCall):null),[n.nextCall]),i=t&&t<a.current,s=t?t-a.current:0,c=!i&&s<=216e5,d=t&&a.current.toDateString()===t.toDateString(),m=t&&t>a.current?"today":null,h=d?a.current.toTimeString().slice(0,5):null;(0,I.useEffect)((()=>{n.nextCall?r(l):r(null)}),[n.nextCall,l]);return(0,f.jsx)("td",{className:"TableHeaderItem",style:{backgroundColor:i?"#ff000082":c?"#223f53":"transparent"},children:(0,f.jsx)("div",{className:"calendar-cont",children:(0,f.jsx)(k.Z,{"data-enable-time":!0,value:t||"",onChange:e=>{let[n]=e;return r(n)},options:{dateFormat:"d.m.Y  H:i",minDate:m,minTime:h,weekNumbers:!0,locale:{firstDayOfWeek:1}},placeholder:"Select Date/ Time",onClose:()=>{if(t!==(l||null)&&t!==a.current)if(i)r(null);else{const e=t.toISOString().slice(0,16);o((0,w.rN)({id:n._id,leadNextcall:e}))}}})})})},T=e=>{let{lead:n,ArrowDown:t,toggleInputVisibility:r,index:a,toggleUserMenuDropArrow:o}=e;return(0,f.jsxs)("td",{className:"TableHeaderItem",id:"timeZone-".concat(a),children:[n.timeZone,(0,f.jsx)(t,{onClick:()=>r(a,"timeZone",n._id),className:"arrow-svg ".concat(o(a,"timeZone"))})]})},C=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:a,toggleUserMenuDropArrow:o}=e;return(0,f.jsxs)("td",{className:"TableHeaderItem",id:"city-".concat(n),children:[t.city,(0,f.jsx)(r,{onClick:()=>a(n,"city",t._id),className:"arrow-svg ".concat(o(n,"city"))})]})},_=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:a,toggleUserMenuDropArrow:o}=e;return(0,f.jsxs)("td",{className:"TableHeaderItem",id:"region-".concat(n),children:[t.region,(0,f.jsx)(r,{onClick:()=>a(n,"region",t._id),className:"arrow-svg ".concat(o(n,"region"))})]})},H=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:a,toggleUserMenuDropArrow:o}=e;return(0,f.jsxs)("td",{className:"TableHeaderItem",id:"country-".concat(n),children:[t.country,(0,f.jsx)(r,{onClick:()=>a(n,"country",t._id),className:"arrow-svg ".concat(o(n,"country"))})]})},A=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:a,toggleUserMenuDropArrow:o}=e;return(0,f.jsxs)("td",{className:"TableHeaderItem",id:"status-".concat(n),children:[t.status,(0,f.jsx)(r,{onClick:()=>a(n,"status",t._id),className:"arrow-svg ".concat(o(n,"status"))})]})},L=e=>{let{lead:n}=e;const[t,r]=(0,I.useState)(new Date);(0,I.useEffect)((()=>{const e=setInterval((()=>{r(new Date)}),6e4);return()=>clearInterval(e)}),[]);return(0,f.jsx)("td",{className:"TableHeaderItem",style:{maxWidth:"60px",textWrap:"unset"},children:(e=>{const n=new Date(t.getTime()+6e4*t.getTimezoneOffset());return new Date(n.getTime()+60*e*60*1e3).toLocaleString("ru-RU",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:void 0})})(n.timeZone)})};var D=t(8524),M=t(8580),V=t(1879),E=t(8192);const S=e=>{let{selectedAssignLeadsCheckedCheckbox:n,lead:t}=e;const r=(0,u.I0)();return(0,f.jsx)(M.dA,{children:(0,f.jsxs)("div",{className:"custom-checkbox",children:[(0,f.jsx)("input",{className:"checkbox",type:"checkbox",name:"delete_external_lead",id:t._id,checked:n.includes(t._id),onChange:()=>{return e=t._id,void r((0,d.R2)({_id:e}));var e}}),(0,f.jsxs)("div",{className:"custom-checkbox",children:[(0,f.jsx)(E.r,{className:"custom-checkbox-before",width:"16",height:"16"}),(0,f.jsx)(V.r,{className:"custom-checkbox-after",width:"16",height:"16"})]})]})})};var R=t(6486);const Z=()=>{const{isLeads:e,selectedAssignLeadsCheckedCheckbox:n,leadOffice:t}=(0,p.t)(),{formatDateTime:r}=(0,R.n)(),{userBranch:a,userRole:o,isAdmin:l,isConversion:i,isManager:s,isLoggedIn:c}=(0,h.a)(),{userLeads:m,userLeadsComponent:k}=(0,g.a)(),[M,V]=(0,I.useState)(),E=(0,u.I0)();(0,I.useEffect)((()=>{k&&m?V(m):e&&V(e)}),[e,m,k]);const{inputVisible:Z,inputRef:z,dropdownRef:U,setInputVisible:O,handleTextareaChange:F,toggleUserMenuDropArrow:B,toggleInputVisibility:W}=(()=>{const[e,n]=(0,I.useState)(!1),[t,r]=(0,I.useState)({row:null,cell:null,leadId:null}),[a,o]=(0,I.useState)(),l=(0,I.useRef)(null),i=(0,I.useRef)(null),{isLeads:s}=(0,p.t)();(0,I.useEffect)((()=>{if(null!==t.row&&null!==t.cell){const e=document.getElementById("".concat(t.cell,"-").concat(t.row)),n=document.querySelector(".TableHeaderItem").offsetHeight,r=l.current,o=i.current,c=s.findIndex((e=>e._id===a));if(e&&(r||o)){const l=e.getBoundingClientRect();r&&(r.style.top="".concat(n+(l.height*(c+1)-window.scrollX),"px"),r.style.left="".concat(l.left-1.5*r.clientWidth,"px")),o&&(o.style.top="".concat(l.top+window.scrollY+l.height,"px"),o.style.left="".concat(l.left+window.scrollX,"px")),o&&"status"===t.cell&&(o.style.display="grid",o.style.top="".concat(l.height*(c+1)-window.scrollX,"px"),o.style.left="".concat(l.right-1.6*o.clientWidth,"px")),o&&"timeZone"===t.cell&&(o.style.display="flex",o.style.left="".concat(s[s.length-1]._id!==a?(l.right+window.scrollX)/1.55:l.right,"px"),o.style.top="".concat(n+(l.height*(c+1)-window.scrollX),"px"))}}}),[t,s,a]);const c=(0,I.useCallback)((e=>{"Escape"===e.key&&(n(!1),r({row:null,cell:null}))}),[]),d=(0,I.useCallback)((e=>{if(!e.target.classList.contains("arrow-svg-close")&&(l.current&&!l.current.contains(e.target)||i.current&&!i.current.contains(e.target)))return n(!1),void r({row:null,cell:null})}),[]);return(0,I.useEffect)((()=>(document.addEventListener("keydown",c),document.addEventListener("click",d),()=>{document.removeEventListener("keydown",c),document.removeEventListener("click",d)})),[d,c]),{inputVisible:t,inputRef:l,isMenuBox:e,dropdownRef:i,setInputVisible:r,setMenuBox:n,handleTextareaChange:e=>{var n;(n=e.target).style.height="auto",n.style.height="".concat(n.scrollHeight,"px")},toggleUserMenuDropArrow:(e,n)=>t.row===e&&t.cell===n?"arrow-svg-close":"",toggleInputVisibility:(a,l,i)=>{o(i),n(!1===e&&a),r(t.row===a&&t.cell===l?{row:null,cell:null}:{row:a,cell:l,leadId:i})}}})();return(0,f.jsx)(x,{children:(0,f.jsxs)("div",{className:"TableContainer",children:[(0,f.jsxs)("table",{className:"Table",children:[(0,f.jsx)("thead",{className:"TableHeader",children:(0,f.jsxs)("tr",{className:"TableHeaderList",children:[(0,f.jsx)("th",{className:"TableHeaderItem",children:"Client Id"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Name"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Last Name"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Email"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Phone"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Status"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Source"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Country"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Region"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"City"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Time Zone"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Client Time"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Self created"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Last update"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Created At"}),"Conversion Agent"!==o&&(0,f.jsx)("th",{className:"TableHeaderItem",children:"Assign / Reassign Agent"}),"Conversion Manager"!==o&&"Conversion Agent"!==o&&(0,f.jsx)("th",{className:"TableHeaderItem",children:"Assign / Reassign Manager"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Next call"}),(0,f.jsx)("th",{className:"TableHeaderItem",children:"Details"}),"Main"===a&&(0,f.jsx)("th",{className:"TableHeaderItem",children:"Check"})]})}),(0,f.jsx)("tbody",{children:M&&M.map(((e,m)=>(0,f.jsxs)("tr",{className:"WordList",children:[(0,f.jsx)("td",{className:"TableHeaderItem",children:e.clientId}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.name}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.lastName}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.email}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.phone}),(0,f.jsx)(A,{index:m,lead:e,ArrowDown:b.r,toggleInputVisibility:W,toggleUserMenuDropArrow:B}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.resource}),(0,f.jsx)(H,{index:m,lead:e,ArrowDown:b.r,toggleInputVisibility:W,toggleUserMenuDropArrow:B}),(0,f.jsx)(_,{index:m,lead:e,ArrowDown:b.r,toggleInputVisibility:W,toggleUserMenuDropArrow:B}),(0,f.jsx)(C,{index:m,lead:e,ArrowDown:b.r,toggleInputVisibility:W,toggleUserMenuDropArrow:B}),(0,f.jsx)(T,{lead:e,ArrowDown:b.r,toggleInputVisibility:W,index:m,toggleUserMenuDropArrow:B}),(0,f.jsx)(L,{lead:e}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.selfCreated?"Yes":"No"}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.updatedAt&&r(e.updatedAt)}),(0,f.jsx)("td",{className:"TableHeaderItem",children:e.createdAt&&r(e.createdAt)}),"Conversion Agent"!==o&&(0,f.jsx)("td",{className:"TableHeaderItem",style:{background:e.conAgentId?"":"#ff000082"},children:e.conAgentId?e.conAgentId.username:"Not Assigned"}),"Conversion Manager"!==o&&"Conversion Agent"!==o&&(0,f.jsx)("td",{className:"TableHeaderItem",style:{background:e.conManagerId?"":"#ff000082"},children:e.conManagerId?e.conManagerId.username:"Not Assigned"}),(0,f.jsx)(N,{lead:e}),(0,f.jsx)("td",{className:"TableHeaderItem",children:(0,f.jsx)("button",{className:"check-btn",type:"button",onClick:()=>{return n=e._id,e.branch,E((0,D.pk)()),E((0,d.xm)("Office")),void(c&&l?E((0,w.zs)({leadId:n,branch:t})):c&&(i||s)&&E((0,w.zs)({leadId:n})));var n},children:"Open"})}),"Main"===a&&(0,f.jsx)("td",{className:"TableHeaderItem",children:(0,f.jsx)(S,{lead:e,selectedAssignLeadsCheckedCheckbox:n})})]},e._id)))})]}),(0,f.jsx)(v,{inputVisible:Z,inputRef:z,handleTextareaChange:F,setInputVisible:O}),(0,f.jsx)(y,{inputVisible:Z,dropdownRef:U,setInputVisible:O}),(0,f.jsx)(j,{inputVisible:Z,dropdownRef:U,setInputVisible:O})]})})};var z=t(9066),U=t(7055),O=t(905);const F=()=>{const{isAdmin:e}=(0,h.a)(),{isLeadLoading:n,leadOffice:t}=(0,p.t)(),{isLeadDetails:r}=(0,O.d)(),{userLeadsComponent:a}=(0,g.a)(),o=(0,u.I0)();return(0,f.jsx)(l,{children:(0,f.jsxs)("div",{className:"wraper",children:[e&&(0,f.jsx)(c.OL,{to:"/",onClick:()=>{t&&o((0,d.pg)()),a&&o((0,m.WK)())},children:(0,f.jsx)("h1",{children:"Back"})}),(0,f.jsxs)("div",{className:"content-container",children:[n&&!r?(0,f.jsx)(U.ql,{}):(0,f.jsx)(Z,{}),(0,f.jsx)(z.t,{})]})]})})};var B;const W=o.ZP.div(B||(B=(0,a.Z)(["\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    border-radius: 0.75rem;\n    background-color: ",";\n    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);\n    padding: 0.75rem;\n\n\n    .wraper{\n        width: 100%;\n        border: 1px solid ",";\n        border-radius: 0.75rem;\n        padding: 0.75rem;\n        height: 90.5dvh;\n\n        @media screen and (min-width: 834px) {\n            height: 87.5dvh;\n        }\n    }\n\n    .nav-block{\n        display: flex;\n        align-items: center;\n        margin-bottom: 1rem;\n        justify-content: space-between;\n        font-weight: 600;\n        font-size: 1.25rem;\n    }\n\n    .modal-button{\n        display: flex;\n        align-items: center;\n        background-color: transparent;\n        gap: 0.25rem;\n        font-weight: 600;\n        font-size: 1.25rem;\n        color: ",";\n        transition: all ",";\n\n        .svg{\n            width: 1.5rem;\n            height: 1.5rem;\n            stroke: ",";\n        }\n\n        &:hover{\n            color: ",";\n        }\n        &:hover .svg{\n            stroke: ",";\n        }\n    }\n\n\n    .link{\n        display: flex;\n        align-items: center;\n        gap: 0.25rem;\n        transition: all ",";\n        max-width: 30%;\n\n        .svg{\n            width: 1.5rem;\n            height: 1.5rem;\n            transform: rotate(180deg);\n            stroke: ",";\n        }\n\n        &:hover{\n            color: ",";\n        }\n        &:hover .svg{\n            stroke: ",";\n        }\n    }\n\n    .titles{\n        font-weight: 700;\n        font-size: 1.5rem;\n        text-align: center;\n    }\n"])),(e=>e.theme.color.background),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_white),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_white),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_white),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite));var P=t(8589);const X=()=>{const{userName:e,userLeadsComponentData:n,isUserLeadsLoading:t}=(0,g.a)(),r=(0,u.I0)();return(0,f.jsx)(W,{children:(0,f.jsxs)("div",{className:"wraper",children:[(0,f.jsxs)("div",{className:"nav-block",children:[(0,f.jsxs)("button",{type:"button",className:"modal-button",onClick:()=>{r((0,D.t3)())},children:[(0,f.jsx)(P.r,{className:"svg"}),"Back to User Information"]}),(0,f.jsxs)(c.OL,{className:"link",to:"/users",onClick:()=>{r((0,m.WK)())},children:["Back to Users",(0,f.jsx)(P.r,{className:"svg"})]})]}),(0,f.jsxs)("h1",{className:"titles",children:[e," all ",n," Leads details"]}),t?(0,f.jsx)(U.ql,{}):(0,f.jsx)(Z,{})]})})};var q=t(6001);const Y=()=>{const e=(0,u.I0)(),{userLeadsComponent:n}=(0,g.a)(),{isAdmin:t,isManager:r,isConversionManager:a,isConversion:o}=(0,h.a)();return(0,I.useEffect)((()=>{!n&&(t||r||o)&&(e((0,w.lR)()),e((0,w.Ze)())),n||t||!r&&!a||e((0,q.aM)())}),[e,t,o,a,r,n]),(0,f.jsx)(f.Fragment,{children:n?(0,f.jsx)(X,{}):(0,f.jsx)(F,{})})}}}]);
//# sourceMappingURL=513.5e875520.chunk.js.map