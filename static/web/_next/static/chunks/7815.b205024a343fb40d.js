(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7815],{17815:function(t,e,o){"use strict";o.r(e),o.d(e,{NotifyReminderPopup:function(){return c}});var n=o(85893),r=o(55241),i=o(97937),p=o(67294),s=o(93162),u=o.n(s);let c=t=>{let{children:e,open:o,notificationClicked:s,notificationClosed:c}=t,[l,a]=(0,p.useState)(o),[d,f]=(0,p.useState)(!1);(0,p.useEffect)(()=>{a(o)},[o]),(0,p.useEffect)(()=>{f(!0)},[]);let m=(0,n.jsx)("div",{className:u().title,children:"Stay updated!"}),b=t=>{t.stopPropagation(),s()},_=t=>{t.stopPropagation(),a(!1),c()},x=(0,n.jsxs)("div",{onClick:b,onKeyDown:b,role:"menuitem",tabIndex:0,children:[(0,n.jsx)("button",{type:"button",className:u().closebutton,onClick:_,children:(0,n.jsx)(i.Z,{})}),(0,n.jsxs)("div",{className:u().contentbutton,children:["Click and never miss",(0,n.jsx)("br",{}),"future streams!"]})]});return d&&(0,n.jsx)(r.Z,{placement:"topLeft",defaultOpen:l,open:l,destroyTooltipOnHide:!0,title:m,content:x,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"16px"},color:u().popupBackgroundColor,children:e})}},93162:function(t){t.exports={popupBackgroundColor:"var(--theme-color-components-primary-button-background)",contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}}}]);