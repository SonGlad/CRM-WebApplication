"use strict";(self.webpackChunkcrm_web_application=self.webpackChunkcrm_web_application||[]).push([[488],{8589:(e,n,t)=>{t.d(n,{r:()=>i});var r,l=t(2791);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function s(e,n){let{title:t,titleId:s,...i}=e;return l.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":s},i),t?l.createElement("title",{id:s},t):null,r||(r=l.createElement("g",{id:"vuesax/linear/arrow-right"},l.createElement("g",{id:"arrow-right"},l.createElement("path",{id:"Vector",d:"M6.38 3.95312L2.33334 7.99979L6.38 12.0465",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{id:"Vector_2",d:"M13.6667 8H2.44666",strokeMiterlimit:10,strokeLinecap:"round",strokeLinejoin:"round"})))))}const i=l.forwardRef(s);t.p},8488:(e,n,t)=>{t.r(n),t.d(n,{default:()=>R});var r,l=t(168),a=t(2978);const s=a.ZP.div(r||(r=(0,l.Z)(["\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    border-radius: 0.75rem;\n    background-color: ",";\n    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);\n    padding: 0.75rem;\n\n\n    .wraper{\n        width: 100%;\n        border: 1px solid ",";\n        border-radius: 0.75rem;\n        padding: 0.75rem;\n        height: 90.5dvh;\n\n        @media screen and (min-width: 834px) {\n            height: 87.5dvh;\n        }\n    }\n"])),(e=>e.theme.color.background),(e=>e.theme.color.primary_green_lite));var i,o=t(1087),d=t(6081),c=t(4420),m=t(7039),h=t(2865);const u=a.ZP.div(i||(i=(0,l.Z)(["\n  border: 1px solid ",';\n  border-radius: 0.625rem;\n  width: 100%;\n\n  .Table {\n        table-layout: auto;\n    width: 100%;\n    border-collapse: collapse;\n    border-radius: 0.5rem;\n    overflow: hidden;\n  }\n\n  .TableHeader {\n    background: #223f53;\n  }\n\n  .TableHeaderList th {\n    padding: 1rem 0.25rem 1rem 0.25rem;\n  }\n\n  td[id^="lastName-"],\n  td[id^="email-"],\n  td[id^="phone-"],\n  td[id^="resourse-"],\n  td[id^="country-"],\n  td[id^="region-"],\n  td[id^="city-"] {\n    max-width: 70px;\n    max-height: 50px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    position: relative;\n  }\n\n  .TableHeaderItem {\n    padding:0.5rem 0.25rem;\n    border-bottom: 1px solid ',";\n    text-align: left;\n    font-weight: 500;\n    font-size: 0.5rem;\n    overflow-wrap: break-word;\n    text-align: center;\n    position: relative;\n        @media only screen and (min-width: 1800px) {\n     white-space: nowrap;\n    }\n  }\n\n  .TableHeaderItem:not(:last-child) {\n    border-right: 1px solid ",";\n  }\n\n  .WordList textarea,\n  select,\n  input {\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n    resize: none;\n    overflow: hidden;\n    text-align: center;\n    align-items: center;\n    display: flex;\n    color: ",";\n    position: relative;\n\n    &:focus {\n      outline: none;\n      box-shadow: none;\n    }\n  }\n\n  .dropdown {\n    z-index: 1000;\n    position: absolute;\n        font-size: 0.5rem;\n    /* display: grid; */\n    gap: 0.25rem;\n    border-radius: 1rem;\n    padding: 0.75rem 0.5rem;\n    box-shadow: 0 0.25rem 3rem 0 rgba(18, 20, 23, 0.08);\n    background: ",";\n    color: black;\n  }\n\n  .ListItem {\n    cursor: pointer;\n\n    &:hover {\n      color: #a2a59e;\n    }\n  }\n\n\n  .arrow-svg {\n    cursor: pointer;\n    width: 0.875rem;\n    height: 0.875rem;\n    stroke: ",";\n    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n    position: absolute;\n    left: 5px;\n    bottom: 0px;\n  }\n\n  .arrow-svg-close {\n    transform: rotate(180deg);\n  }\n\n  .InputContainer {\n    display: flex;\n    position: absolute;\n    background: #e3ffa8e0;\n    border-radius: 10px;\n    padding: 10px;\n    z-index: 9999;\n    width: max-content;\n    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);\n  }\n\n  .InputContainer input {\n    color: black;\n  }\n\n  .ButtonSave {\n    border-radius: 5px;\n    background: black;\n    color: white;\n    border: none;\n  }\n\n"])),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_white),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite));var p=t(9388),g=t(6677),x=t(184);const w=e=>{let{inputVisible:n,dropdownRef:t,handleDropdownItemClick:r}=e;const{timeZone:l,isTimeZoneLoading:a}=(0,g.t)();return(0,x.jsx)(x.Fragment,{children:null!==n.row&&"timeZone"===n.cell&&(0,x.jsx)("ul",{className:"dropdown",ref:t,children:a?"Loading...".split("").map(((e,n)=>(0,x.jsx)("li",{className:"ListItem",children:e},n))):l.map(((e,t)=>(0,x.jsx)("li",{className:"ListItem",value:e,onClick:()=>r(n.row,e,"timeZone",n.leadId),children:e},t)))})})},b=e=>{let{inputVisible:n,dropdownRef:t,handleDropdownItemClick:r}=e;const{status:l,isStatusLoading:a,isStatusError:s}=(0,g.t)();return s?(0,x.jsx)("div",{children:"Oooops something wrong"}):(0,x.jsx)(x.Fragment,{children:null!==n.row&&"status"===n.cell&&(0,x.jsx)("ul",{className:"dropdown",ref:t,children:a?"Loading...".split("").map(((e,n)=>(0,x.jsx)("li",{className:"ListItem",children:e},n))):l.map(((e,t)=>(0,x.jsx)("li",{className:"ListItem",value:e,onClick:()=>r(n.row,e,"status",n.leadId),children:e},t)))})})};var j=t(3544),y=t(2791);const f=e=>{let{leads:n,inputVisible:t,inputRef:r,setLeads:l,handleTextareaChange:a,setInputVisible:s}=e;const i=(0,c.I0)(),[o,d]=(0,y.useState)("");return(0,x.jsx)(x.Fragment,{children:null!==t.row&&null!==t.cell&&"status"!==t.cell&&"timeZone"!==t.cell&&(0,x.jsxs)("form",{className:"InputContainer",ref:r,children:[(0,x.jsx)("input",{value:o,onChange:e=>{d(e.target.value)},onInput:a}),(0,x.jsx)("button",{className:"ButtonSave",type:"submit",onClick:e=>((e,t,r,a)=>{switch(e.preventDefault(),r){case"city":i((0,j.n7)({id:a,leadCity:o})).then((e=>{if(e.payload.name){const e=[...n];e[t]={...e[t],city:o},l(e),d(""),s({row:null,cell:null,leadId:null})}}));break;case"region":i((0,j.c2)({id:a,leadRegion:o})).then((e=>{if(e.payload.name){const e=[...n];e[t]={...e[t],region:o},l(e),d(""),s({row:null,cell:null,leadId:null})}}));break;case"country":"country"===r&&i((0,j.GM)({id:a,leadCountry:o})).then((e=>{if(e.payload.name){const e=[...n];e[t]={...e[t],country:o},l(e),d(""),s({row:null,cell:null,leadId:null})}}))}})(e,t.row,t.cell,t.leadId),children:"Save"})]})})},I=e=>{let{leads:n,lead:t,setLeads:r,index:l,handleTextareaChange:a}=e;return(0,x.jsx)("td",{className:"TableHeaderItem",children:(0,x.jsx)("label",{children:(0,x.jsx)("input",{type:"datetime-local",value:t.nextCall&&t.nextCall.toString().slice(0,16),onChange:e=>((e,t,l)=>{const a=[...n],s=l.split(".");2===s.length?a[t][s[0]][s[1]]=e.target.value:a[t][l]=e.target.value,r(a)})(e,l,"latestComment.nextCall"),onInput:a})})})},v=e=>{let{lead:n,ArrowDown:t,toggleInputVisibility:r,index:l,toggleUserMenuDropArrow:a}=e;return(0,x.jsxs)("td",{className:"TableHeaderItem",id:"timeZone-".concat(l),children:[n.timeZone,(0,x.jsx)(t,{onClick:()=>r(l,"timeZone",n._id),className:"arrow-svg ".concat(a(l,"timeZone"))})]})},N=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:l,toggleUserMenuDropArrow:a}=e;return(0,x.jsxs)("td",{className:"TableHeaderItem",id:"city-".concat(n),children:[t.city,(0,x.jsx)(r,{onClick:()=>l(n,"city",t._id),className:"arrow-svg ".concat(a(n,"city"))})]})},k=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:l,toggleUserMenuDropArrow:a}=e;return(0,x.jsxs)("td",{className:"TableHeaderItem",id:"region-".concat(n),children:[t.region,(0,x.jsx)(r,{onClick:()=>l(n,"region",t._id),className:"arrow-svg ".concat(a(n,"region"))})]})},T=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:l,toggleUserMenuDropArrow:a}=e;return(0,x.jsxs)("td",{className:"TableHeaderItem",id:"country-".concat(n),children:[t.country,(0,x.jsx)(r,{onClick:()=>l(n,"country",t._id),className:"arrow-svg ".concat(a(n,"country"))})]})},C=e=>{let{index:n,lead:t,ArrowDown:r,toggleInputVisibility:l,toggleUserMenuDropArrow:a}=e;return(0,x.jsxs)("td",{className:"TableHeaderItem",id:"status-".concat(n),children:[t.status,(0,x.jsx)(r,{onClick:()=>l(n,"status",t._id),className:"arrow-svg ".concat(a(n,"status"))})]})};var H=t(7055);const L=()=>{const{isLeadLoading:e,isLeads:n}=(0,g.t)(),[t,r]=(0,y.useState)(n),l=(0,c.I0)();(0,y.useEffect)((()=>{r(n)}),[n]);const{inputVisible:a,inputRef:s,dropdownRef:i,setInputVisible:o,handleTextareaChange:d,calculateClientTime:m,toggleUserMenuDropArrow:h,toggleInputVisibility:L}=(()=>{const[e]=(0,y.useState)(new Date),[n,t]=(0,y.useState)(!1),[r,l]=(0,y.useState)({row:null,cell:null,leadId:null}),a=(0,y.useRef)(null),s=(0,y.useRef)(null),i=(0,c.I0)();(0,y.useEffect)((()=>{if(null!==r.row&&null!==r.cell){const e=document.getElementById("".concat(r.cell,"-").concat(r.row)),n=a.current,t=s.current;if(e&&(n||t)){const l=e.getBoundingClientRect();n&&(n.style.top="".concat(l.top+window.scrollY+l.height,"px"),n.style.left="".concat(l.left+window.scrollX,"px")),t&&(t.style.top="".concat(l.top+window.scrollY+l.height,"px"),t.style.left="".concat(l.left+window.scrollX,"px")),t&&"status"===r.cell&&(t.style.display="grid",t.style.top="".concat((l.top+window.scrollY+l.height)/2,"px"),t.style.left="".concat(l.right+window.scrollX,"px")),t&&"timeZone"===r.cell&&(t.style.display="flex",t.style.left="".concat((l.right+window.scrollX)/1.36,"px"))}}}),[r]);const o=(0,y.useCallback)((e=>{"Escape"===e.key&&(t(!1),l({row:null,cell:null}))}),[]),d=(0,y.useCallback)((e=>{if(!e.target.classList.contains("arrow-svg-close")&&(a.current&&!a.current.contains(e.target)||s.current&&!s.current.contains(e.target)))return t(!1),void l({row:null,cell:null})}),[]);return(0,y.useEffect)((()=>(document.addEventListener("keydown",o),document.addEventListener("click",d),()=>{document.removeEventListener("keydown",o),document.removeEventListener("click",d)})),[d,o]),{inputVisible:r,inputRef:a,isMenuBox:n,dropdownRef:s,setInputVisible:l,setMenuBox:t,handleTextareaChange:e=>{var n;(n=e.target).style.height="auto",n.style.height="".concat(n.scrollHeight,"px")},calculateClientTime:n=>new Date(e.getTime()+60*n*60*1e3).toLocaleString(),toggleUserMenuDropArrow:(e,n)=>r.row===e&&r.cell===n?"arrow-svg-close":"",toggleInputVisibility:(e,a,s)=>{"status"===a?i((0,j.lR)()):"timeZone"===a&&i((0,j.Ze)()),t(!1===n&&e),l(r.row===e&&r.cell===a?{row:null,cell:null}:{row:e,cell:a,leadId:s})}}})(),_=(e,n,a,s)=>{const i=[...t];"timeZone"===a?(l((0,j.f3)({id:s,leadTimeZone:n})),i[e]={...i[e],timeZone:n}):"status"===a&&(l((0,j.Cy)({id:s,leadStatus:n})),i[e]={...i[e],status:n}),r(i),o({row:null,cell:null})};return e?(0,x.jsx)(H.ql,{}):(0,x.jsxs)(u,{children:[(0,x.jsxs)("table",{className:"Table",children:[(0,x.jsx)("thead",{className:"TableHeader",children:(0,x.jsxs)("tr",{className:"TableHeaderList",children:[(0,x.jsx)("th",{className:"TableHeaderItem",children:"Client Id"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Name"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Last Name"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Email"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Phone"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Status"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Source"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Country"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Region"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"City"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Time Zone"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Client Time"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Self created"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Last update"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Created At"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Agent"}),(0,x.jsx)("th",{className:"TableHeaderItem",children:"Next call"})]})}),(0,x.jsx)("tbody",{children:t&&t.map(((e,n)=>(0,x.jsxs)("tr",{className:"WordList",children:[(0,x.jsx)("td",{className:"TableHeaderItem",children:e.clientId}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.name}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.lastName}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.email}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.phone}),(0,x.jsx)(C,{index:n,lead:e,ArrowDown:p.r,toggleInputVisibility:L,toggleUserMenuDropArrow:h}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.resource}),(0,x.jsx)(T,{index:n,lead:e,ArrowDown:p.r,toggleInputVisibility:L,toggleUserMenuDropArrow:h}),(0,x.jsx)(k,{index:n,lead:e,ArrowDown:p.r,toggleInputVisibility:L,toggleUserMenuDropArrow:h}),(0,x.jsx)(N,{index:n,lead:e,ArrowDown:p.r,toggleInputVisibility:L,toggleUserMenuDropArrow:h}),(0,x.jsx)(v,{lead:e,ArrowDown:p.r,toggleInputVisibility:L,index:n,toggleUserMenuDropArrow:h}),(0,x.jsx)("td",{className:"TableHeaderItem",style:{maxWidth:"60px"},children:m(e.timeZone)}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.selfCreated?"Yes":"No"}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.updatedAt&&e.updatedAt.slice(0,16).replace("T"," ")}),(0,x.jsx)("td",{className:"TableHeaderItem",children:e.createdAt&&e.createdAt.slice(0,16).replace("T"," ")}),(0,x.jsx)("td",{className:"TableHeaderItem",style:{background:e.assigned?"none":"#ff000082"},children:e.conAgentId}),(0,x.jsx)(I,{leads:t,lead:e,setLeads:r,index:n,handleTextareaChange:d})]},e._id)))})]}),(0,x.jsx)(f,{leads:t,inputVisible:a,inputRef:s,setLeads:r,handleTextareaChange:d,setInputVisible:o}),(0,x.jsx)(b,{inputVisible:a,dropdownRef:i,handleDropdownItemClick:_}),(0,x.jsx)(w,{inputVisible:a,dropdownRef:i,handleDropdownItemClick:_})]})},_=()=>{const{isAdmin:e}=(0,m.a)(),{availableUsersForAssign:n}=(0,h.a)(),t=(0,c.I0)();console.log("Users for Assign:",n);return(0,x.jsx)(s,{children:(0,x.jsxs)("div",{className:"wraper",children:[e&&(0,x.jsx)(o.OL,{to:"/",onClick:()=>{t((0,d.CT)()),t((0,j.oC)())},children:(0,x.jsx)("h1",{children:"Back"})}),(0,x.jsx)(L,{})]})})};var A;const D=a.ZP.div(A||(A=(0,l.Z)(["\n    margin-top: 0.5rem;\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n    border-radius: 0.75rem;\n    background-color: ",";\n    box-shadow: 4px 0px 14px 5px rgba(227, 255, 168, 0.2);\n    padding: 0.75rem;\n\n\n    .wraper{\n        width: 100%;\n        border: 1px solid ",";\n        border-radius: 0.75rem;\n        padding: 0.75rem;\n        height: 90.5dvh;\n\n        @media screen and (min-width: 834px) {\n            height: 87.5dvh;\n        }\n    }\n\n    .nav-block{\n        display: flex;\n        align-items: center;\n        margin-bottom: 1rem;\n        justify-content: space-between;\n        font-weight: 600;\n        font-size: 1.25rem;\n    }\n\n    .modal-button{\n        display: flex;\n        align-items: center;\n        background-color: transparent;\n        gap: 0.25rem;\n        font-weight: 600;\n        font-size: 1.25rem;\n        color: ",";\n        transition: all ",";\n\n        .svg{\n            width: 1.5rem;\n            height: 1.5rem;\n            stroke: ",";\n        }\n\n        &:hover{\n            color: ",";\n        }\n        &:hover .svg{\n            stroke: ",";\n        }\n    }\n\n\n    .link{\n        display: flex;\n        align-items: center;\n        gap: 0.25rem;\n        transition: all ",";\n        max-width: 30%;\n\n        .svg{\n            width: 1.5rem;\n            height: 1.5rem;\n            transform: rotate(180deg);\n            stroke: ",";\n        }\n\n        &:hover{\n            color: ",";\n        }\n        &:hover .svg{\n            stroke: ",";\n        }\n    }\n\n    .titles{\n        font-weight: 700;\n        font-size: 1.5rem;\n        text-align: center ;\n    }\n"])),(e=>e.theme.color.background),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_white),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_white),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite),(e=>e.theme.transition.main_transition),(e=>e.theme.color.primary_white),(e=>e.theme.color.primary_green_lite),(e=>e.theme.color.primary_green_lite));var V=t(8589),Z=t(8524),M=t(7531);const E=()=>{const{userLeads:e,userName:n,userLeadsComponentData:t}=(0,h.a)(),r=(0,c.I0)();console.log(e);return(0,x.jsx)(D,{children:(0,x.jsxs)("div",{className:"wraper",children:[(0,x.jsxs)("div",{className:"nav-block",children:[(0,x.jsxs)("button",{type:"button",className:"modal-button",onClick:()=>{r((0,Z.t3)())},children:[(0,x.jsx)(V.r,{className:"svg"}),"Back to User Information"]}),(0,x.jsxs)(o.OL,{className:"link",to:"/users",on:!0,onClick:()=>{r((0,M.WK)())},children:["Back to Users",(0,x.jsx)(V.r,{className:"svg"})]})]}),(0,x.jsxs)("h1",{className:"titles",children:[n," all ",t," Leads details"]}),(0,x.jsx)("h2",{children:"UserLeads"})]})})},R=()=>{const{userLeadsComponent:e}=(0,h.a)();return(0,x.jsx)(x.Fragment,{children:e?(0,x.jsx)(E,{}):(0,x.jsx)(_,{})})}}}]);
//# sourceMappingURL=488.ba9a981e.chunk.js.map