(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(13906)}])},8119:function(e,n,t){"use strict";t.d(n,{h:function(){return E},Z:function(){return H}});var o=t(85893),r=t(97183),i=t(94199),s=t(20550),a=t(828),l=t(66516),c=t(38504),u=t(71577),d=t(26713),m=t(86548),f=t(94149),h=t(38545),p=t(87547),x=t(39398),j=t(4480),g=t(67294),v=t(49218),_=t(5152),w=t.n(_),y=t(1899),C=t(47093),b=t.n(C),N=w()((function(){return t.e(2365).then(t.bind(t,32365)).then((function(e){return e.Modal}))}),{loadableGenerated:{webpack:function(){return[32365]}}}),k=w()((function(){return Promise.all([t.e(8939),t.e(8225)]).then(t.bind(t,98225)).then((function(e){return e.NameChangeModal}))}),{loadableGenerated:{webpack:function(){return[98225]}}}),S=w()((function(){return Promise.all([t.e(4381),t.e(9674)]).then(t.bind(t,9674)).then((function(e){return e.AuthModal}))}),{loadableGenerated:{webpack:function(){return[9674]}}}),Z=function(e){var n=e.username,t=void 0===n?void 0:n,r=(0,g.useState)(!1),i=r[0],s=r[1],_=(0,g.useState)(!1),w=_[0],C=_[1],Z=(0,a.Z)((0,j.FV)(y.ZA),2),F=Z[0],A=Z[1],T=(0,j.sJ)(y.Q),M=function(){A(!F)};(0,v.y1)("c",M,{enableOnContentEditable:!1},[F]);var E=(0,j.sJ)(y.db);if(!E)return null;var H=E.displayName,L=t||H,z=(0,o.jsxs)(l.Z,{children:[(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(m.Z,{}),onClick:function(){s(!0)},children:"Change name"},"0"),(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(f.Z,{}),onClick:function(){return C(!0)},children:"Authenticate"},"1"),T.chatAvailable&&(0,o.jsx)(l.Z.Item,{icon:(0,o.jsx)(h.Z,{}),onClick:function(){return M()},children:"Toggle chat"},"3")]});return(0,o.jsxs)("div",{className:"".concat(b().root),children:[(0,o.jsx)(c.Z,{overlay:z,trigger:["click"],children:(0,o.jsx)(u.Z,{type:"primary",icon:(0,o.jsx)(p.Z,{style:{marginRight:".5rem"}}),children:(0,o.jsxs)(d.Z,{children:[L,(0,o.jsx)(x.Z,{})]})})}),(0,o.jsx)(N,{title:"Change Chat Display Name",open:i,handleCancel:function(){return s(!1)},children:(0,o.jsx)(k,{})}),(0,o.jsx)(N,{title:"Authenticate",open:w,handleCancel:function(){return C(!1)},children:(0,o.jsx)(S,{})})]})},F=t(60113),A=t(92910),T=t.n(A),M=r.Z.Header,E=function(e){var n=e.name,t=void 0===n?"Your stream title":n,r=e.chatAvailable,a=e.chatDisabled;return(0,o.jsxs)(M,{className:"".concat(T().header),children:[(0,o.jsxs)("div",{className:"".concat(T().logo),children:[(0,o.jsx)(F.C,{variant:"contrast"}),(0,o.jsx)("span",{children:t})]}),r&&!a&&(0,o.jsx)(Z,{}),!r&&!a&&(0,o.jsx)(i.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,o.jsx)(s.Z,{style:{cursor:"pointer"},children:"Chat offline"})})]})},H=E},32365:function(e,n,t){"use strict";t.r(n),t.d(n,{Modal:function(){return u}});var o=t(85893),r=t(85402),i=t(26303),s=t(11382),a=t(67294),l=t(78890),c=t.n(l),u=function(e){var n=e.title,t=e.url,l=e.open,u=e.handleOk,d=e.handleCancel,m=e.afterClose,f=e.height,h=e.width,p=e.children,x=(0,a.useState)(!!t),j=x[0],g=x[1],v={padding:"0px",minHeight:f,height:null!==f&&void 0!==f?f:"100%"},_=t&&(0,o.jsx)("iframe",{title:n,src:t,width:"100%",height:"100%",sandbox:"allow-same-origin allow-scripts allow-popups allow-forms",frameBorder:"0",allowFullScreen:!0,onLoad:function(){return g(!1)}}),w=j?"none":"inline";return(0,o.jsx)(r.Z,{title:n,open:l,onOk:u,onCancel:d,afterClose:m,bodyStyle:v,width:h,zIndex:9999,footer:null,centered:!0,destroyOnClose:!0,children:(0,o.jsxs)(o.Fragment,{children:[j&&(0,o.jsx)(i.Z,{active:j,style:{padding:"10px"},paragraph:{rows:10}}),_&&(0,o.jsx)("div",{style:{display:w},children:_}),p&&(0,o.jsx)("div",{className:c().content,children:p}),j&&(0,o.jsx)(s.Z,{className:c().spinner,spinning:j,size:"large"})]})})};n.default=u,u.defaultProps={url:void 0,children:void 0,handleOk:void 0,handleCancel:void 0,afterClose:void 0,height:"40vh",width:"70%"}},13906:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return qe}});var o=t(85893),r=t(828),i=t(97183),s=t(4480),a=t(9008),l=t.n(a),c=t(67294),u=t(1899),d=t(26042),m=t(69396),f=t(84381),h=t(11382),p=t(94184),x=t.n(p),j=t(5152),g=t.n(j),v=t(73682),_=t(35603),w=t.n(_),y=function(e){var n=e.version;return(0,o.jsxs)("div",{className:w().footer,children:[(0,o.jsxs)("div",{className:w().text,children:["Powered by ",(0,o.jsx)("a",{href:"https://owncast.online",children:n})]}),(0,o.jsxs)("div",{className:w().links,children:[(0,o.jsx)("div",{className:w().item,children:(0,o.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"})}),(0,o.jsx)("div",{className:w().item,children:(0,o.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"})}),(0,o.jsx)("div",{className:w().item,children:(0,o.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})})]})]})},C=t(28105),b=t.n(C),N=function(e){var n=e.content,t=(0,s.sJ)(u.hz),r=(0,s.sJ)(u.g1).version;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:b().pageContentContainer,children:(0,o.jsx)("div",{className:b().customPageContent,dangerouslySetInnerHTML:{__html:n}})}),t&&(0,o.jsx)(y,{version:r})]})},k=t(83818),S=t(63291),Z=t.n(S),F=t(87412),A=t(32382),T=t(75347),M=t.n(T),E=function(){var e=(0,s.sJ)(u.db),n=(0,s.sJ)(u.pH);if(!e)return null;var t=e.id,r=e.isModerator,i=e.displayName;return(0,o.jsx)(F.ZP,{className:M().root,collapsedWidth:0,width:320,children:(0,o.jsx)(A.ChatContainer,{messages:n,usernameToHighlight:i,chatUserId:t,isModerator:r})})},H=t(69767),L=t.n(H),z=function(e){var n=e.children;return(0,o.jsx)("div",{className:"".concat(L().row),children:n})},I=t(71577),J=t(36879),P=t.n(J),D=function(e){var n=e.action,t=e.primary,r=void 0===t||t,i=e.externalActionSelected,s=n.title,a=n.description,l=n.icon,c=n.color;return(0,o.jsxs)(I.Z,{type:r?"primary":"default",className:"".concat(P().button),onClick:function(){return i(n)},style:{backgroundColor:c},children:[l&&(0,o.jsx)("img",{src:l,className:"".concat(P().icon),alt:a}),s]})},U=t(1698),R=t(34447),O=function(e){var n=e.onClick,t=e.props;return(0,o.jsx)(I.Z,(0,m.Z)((0,d.Z)({},t),{type:"primary",className:P().button,icon:(0,o.jsx)(R.Z,{}),onClick:n,children:"Follow"}))},B=t(71578),G=function(e){var n=e.onClick,t=e.text;return(0,o.jsx)(I.Z,{type:"primary",className:"".concat(P().button),icon:(0,o.jsx)(B.Z,{}),onClick:n,children:t||"Notify"})},Y=t(53731),V=t(79216),q=t(7918),Q=t.n(q),W=function(e){var n=e.src;return(0,o.jsx)("div",{className:Q().root,children:(0,o.jsx)("div",{className:Q().container,children:(0,o.jsx)(V.Z,{src:n,alt:"Logo",className:Q().image,rootClassName:Q().image})})})},K=t(52740),X=t.n(K),$=function(e){var n=e.links;return(0,o.jsx)("div",{className:X().links,children:n.map((function(e){return(0,o.jsx)("a",{href:e.url,className:X().link,target:"_blank",rel:"noreferrer",children:(0,o.jsx)("img",{src:e.icon||"/img/platformlogos/default.svg",alt:e.platform,title:e.platform,className:X().link})},e.platform)}))})},ee=t(74688),ne=t.n(ee),te=function(e){var n=e.name,t=e.title,r=e.summary,i=e.logo,s=e.tags,a=e.links;return(0,o.jsx)("div",{className:ne().root,children:(0,o.jsxs)("div",{className:ne().logoTitleSection,children:[(0,o.jsx)("div",{className:ne().logo,children:(0,o.jsx)(W,{src:i})}),(0,o.jsxs)("div",{className:ne().titleSection,children:[(0,o.jsx)("div",{className:x()(ne().title,ne().row),children:n}),(0,o.jsx)("div",{className:x()(ne().subtitle,ne().row),children:(0,o.jsx)(Y.Z,{children:t||r})}),(0,o.jsx)("div",{className:x()(ne().tagList,ne().row),children:s.length>0&&s.map((function(e){return(0,o.jsxs)("span",{children:["#",e,"\xa0"]},e)}))}),(0,o.jsx)("div",{className:x()(ne().socialLinks,ne().row),children:(0,o.jsx)($,{links:a})})]})]})})},oe=t(43125),re=t(47568),ie=t(70655),se=t(25968),ae=t(6226),le=t(3698),ce=t(24093),ue=t(40305),de=t.n(ue),me=function(e){var n=e.follower;return(0,o.jsx)("div",{className:de().follower,children:(0,o.jsx)("a",{href:n.link,target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(se.Z,{wrap:!1,children:[(0,o.jsx)(ae.Z,{span:6,children:(0,o.jsx)(ce.C,{src:n.image,alt:"Avatar",className:de().avatar,children:(0,o.jsx)("img",{src:"/logo",alt:"Logo",className:de().placeholder})})}),(0,o.jsxs)(ae.Z,{children:[(0,o.jsx)(se.Z,{children:n.name}),(0,o.jsx)(se.Z,{className:de().account,children:n.username})]})]})})})},fe=t(12103),he=t.n(fe),pe=function(e){var n=e.name,t=(0,c.useState)([]),r=t[0],i=t[1],s=(0,c.useState)(0),a=s[0],l=s[1],u=(0,c.useState)(1),d=u[0],m=u[1],f=Math.ceil(a/24),h=function(){var e=(0,re.Z)((function(){var e,n,t,o;return(0,ie.__generator)(this,(function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),[4,fetch("".concat("/api/followers","?page=").concat(d))];case 1:return[4,r.sent().json()];case 2:return e=r.sent(),n=e.results,t=e.total,i(n),l(t),[3,4];case 3:return o=r.sent(),console.error(o),[3,4];case 4:return[2]}}))}));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){h()}),[]),(0,c.useEffect)((function(){h()}),[d]);var p=(0,o.jsxs)("div",{className:he().noFollowers,children:[(0,o.jsx)("h2",{children:"Be the first follower!"}),(0,o.jsxs)("p",{children:["Owncast"!==n?n:"This server"," is a part of the"," ",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",children:"Fediverse"}),", an interconnected network of independent users and servers."]}),(0,o.jsxs)("p",{children:["By following ","Owncast"!==n?n:"this server"," you'll be able to get updates from the stream, share it with others, and and show your appreciation when it goes live, all from your own Fediverse account."]}),(0,o.jsx)(O,{})]});return(null===r||void 0===r?void 0:r.length)?(0,o.jsxs)("div",{className:he().followers,children:[(0,o.jsx)(se.Z,{wrap:!0,gutter:[10,10],children:r.map((function(e){return(0,o.jsx)(ae.Z,{children:(0,o.jsx)(me,{follower:e},e.link)})}))}),(0,o.jsx)(le.Z,{current:d,pageSize:24,total:f||1,onChange:function(e){m(e)},hideOnSinglePage:!0})]}):p},xe=t(32365),je=t(66516),ge=t(38504),ve=t(49647),_e=t(60198),we=t(89705),ye=t(81998),Ce=t.n(ye),be="notify",Ne="follow",ke=function(e){var n=e.actions,t=e.externalActionSelected,r=e.notifyItemSelected,i=e.followItemSelected,s=e.showFollowItem,a=e.showNotifyItem,l=n.map((function(e){return{key:e.url,label:(0,o.jsxs)("span",{className:Ce().item,children:[e.icon&&(0,o.jsx)("img",{className:Ce().icon,src:e.icon,alt:e.title})," ",e.title]})}}));s&&l.unshift({key:Ne,label:(0,o.jsxs)("span",{className:Ce().item,children:[(0,o.jsx)(ve.Z,{className:Ce().icon})," Follow this stream"]})}),a&&l.unshift({key:be,label:(0,o.jsxs)("span",{className:Ce().item,children:[(0,o.jsx)(_e.Z,{className:Ce().icon}),"Notify when live"]})});var c=(0,o.jsx)(je.Z,{items:l,onClick:function(e){if(e.key!==be)if(e.key!==Ne){var o=n.find((function(n){return n.url===e.key}));t(o)}else i();else r()}});return(0,o.jsx)(ge.Z,{overlay:c,placement:"bottomRight",trigger:["click"],className:Ce().menu,children:(0,o.jsx)("div",{className:Ce().buttonWrap,children:(0,o.jsx)(I.Z,{type:"default",onClick:function(e){return e.preventDefault()},size:"large",icon:(0,o.jsx)(we.Z,{size:6,style:{rotate:"90deg"}})})})})},Se=t(26713),Ze=t(14670),Fe=t(69677),Ae=t(13840),Te=t.n(Ae);var Me=function(e){var n=e.handleClose,t=e.account,r=e.name,i=(0,c.useState)(null),s=i[0],a=i[1],l=(0,c.useState)(!1),u=l[0],d=l[1],m=(0,c.useState)(!1),f=m[0],p=m[1],x=(0,c.useState)(null),j=x[0],g=x[1],v=function(e){a(e),!function(e){var n=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(n).toLowerCase())}(e)?d(!1):d(!0)},_=function(){var e=(0,re.Z)((function(){var e,t,o,r;return(0,ie.__generator)(this,(function(i){switch(i.label){case 0:if(!u)return[2];p(!0),i.label=1;case 1:return i.trys.push([1,4,,5]),e=s.replace(/^@+/,""),t={account:e},[4,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(t)})];case 2:return[4,i.sent().json()];case 3:return(o=i.sent()).redirectUrl&&(window.open(o.redirectUrl,"_blank"),n()),o.success?o.redirectUrl?[3,5]:(g("Unable to follow."),p(!1),[2]):(g(o.message),p(!1),[2]);case 4:return r=i.sent(),g(r.message),[3,5];case 5:return p(!1),[2]}}))}));return function(){return e.apply(this,arguments)}}();return(0,o.jsxs)(Se.Z,{direction:"vertical",children:[(0,o.jsxs)("div",{className:Te().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,o.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,o.jsxs)(h.Z,{spinning:f,children:[j&&(0,o.jsx)(Ze.Z,{message:"Follow Error",description:j,type:"error",showIcon:!0}),(0,o.jsxs)("div",{className:Te().account,children:[(0,o.jsx)("img",{src:"/logo",alt:"logo",className:Te().logo}),(0,o.jsxs)("div",{className:Te().username,children:[(0,o.jsx)("div",{className:Te().name,children:r}),(0,o.jsx)("div",{children:t})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:Te().instructions,children:"Enter your username @server to follow"}),(0,o.jsx)(Fe.Z,{value:s,size:"large",onChange:function(e){return v(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:s}),(0,o.jsx)("div",{className:Te().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,o.jsxs)(Se.Z,{className:Te().buttons,children:[(0,o.jsx)(I.Z,{disabled:!u,type:"primary",onClick:_,children:"Follow"}),(0,o.jsx)(I.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})},Ee=i.Z.Content,He=g()((function(){return t.e(5135).then(t.bind(t,5135)).then((function(e){return e.BrowserNotifyModal}))}),{loadableGenerated:{webpack:function(){return[5135]}}}),Le=g()((function(){return t.e(7735).then(t.bind(t,57735)).then((function(e){return e.NotifyReminderPopup}))}),{loadableGenerated:{webpack:function(){return[57735]}}}),ze=g()((function(){return Promise.resolve().then(t.bind(t,32382)).then((function(e){return e.ChatContainer}))}),{loadableGenerated:{webpack:function(){return[32382]}}}),Ie=function(e){var n=e.name,t=e.streamTitle,r=e.summary,i=e.tags,s=e.socialHandles,a=e.extraPageContent,l=[{label:"About",key:"2",children:(0,o.jsx)(N,{content:a})},{label:"Followers",key:"3",children:(0,o.jsx)(pe,{name:n})}];return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:Z().lowerHalf,children:(0,o.jsx)(te,{name:n,title:t,summary:r,tags:i,links:s,logo:"/logo"})}),(0,o.jsx)("div",{className:Z().lowerSection,children:(0,o.jsx)(f.Z,{defaultActiveKey:"0",items:l})})]})};var Je=function(e){var n=e.name,t=e.streamTitle,r=e.summary,i=e.tags,s=e.socialHandles,a=e.extraPageContent,l=e.messages,u=e.currentUser,h=e.showChat,p=e.actions,j=e.setExternalActionToDisplay,g=e.setShowNotifyPopup,v=e.setShowFollowModal;if(!u)return null;var _=(0,c.useRef)(),w=u.id,y=u.displayName,C=[h&&{label:"Chat",key:"0",children:h&&(0,o.jsx)(ze,{messages:l,usernameToHighlight:y,chatUserId:w,isModerator:!1})},{label:"About",key:"2",children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(te,{name:n,title:t,summary:r,tags:i,links:s,logo:"/logo"}),(0,o.jsx)(N,{content:a})]})},{label:"Followers",key:"3",children:(0,o.jsx)(pe,{name:n})}],b="".concat(function(e){var n=(0,c.useState)(0),t=n[0],o=n[1],r=function(){if(e.current){var n=e.current.getBoundingClientRect().top,t=window.innerHeight;o(t-n)}};return(0,c.useEffect)((function(){return r(),window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),t}(_),"px");return(0,o.jsx)("div",{className:x()(Z().lowerSectionMobile),ref:_,style:{height:b},children:(0,o.jsx)(f.Z,{defaultActiveKey:"0",items:C,renderTabBar:function(e,n){return(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"start"},children:[(0,o.jsx)(n,(0,m.Z)((0,d.Z)({},e),{style:{width:"85%"}})),(0,o.jsx)(ke,{showFollowItem:!0,showNotifyItem:!0,actions:p,externalActionSelected:j,notifyItemSelected:function(){return g(!0)},followItemSelected:function(){return v(!0)}})]})}})})},Pe=function(e){var n=e.externalActionToDisplay,t=e.setExternalActionToDisplay,r=n.title,i=n.description,s=n.url;return(0,o.jsx)(xe.Modal,{title:i||r,url:s,open:!!n,height:"80vh",handleCancel:function(){return t(null)}})},De=function(){var e=(0,s.sJ)(u.Q),n=(0,s.sJ)(u.g1),t=(0,s.sJ)(u.pT),i=(0,s.sJ)(u.di),a=(0,s.sJ)(u.db),l=(0,r.Z)((0,s.FV)(u.hz),2),d=l[0],m=l[1],f=(0,s.sJ)(u.j$),p=(0,s.sJ)(u.YW),x=(0,s.sJ)(u.RI),j=x.viewerCount,g=x.lastConnectTime,_=x.lastDisconnectTime,w=x.streamTitle,y=n.extraPageContent,C=(n.version,n.name),b=n.summary,N=n.socialHandles,S=n.tags,F=n.externalActions,A=n.offlineMessage,T=n.chatDisabled,M=n.federation,H=n.notifications,L=(0,c.useState)(!1),I=L[0],J=L[1],P=(0,c.useState)(!1),R=P[0],B=P[1],Y=(0,c.useState)(!1),V=Y[0],q=Y[1],Q=M.account,W=H.browser.enabled,K=(0,c.useState)(null),X=K[0],$=K[1],ee=function(e){var n=e.openExternally,t=e.url;n?window.open(t,"_blank"):$(e)},ne=F.map((function(e){return(0,o.jsx)(D,{action:e,externalActionSelected:ee},e.url)})),te=function(){B(!1),J(!1),(0,v.qQ)(v.dA.hasDisplayedNotificationModal,!0)},re=function(){var e=window.innerWidth;void 0===d&&m(e<=768),!d&&e<=768&&m(!0),d&&e>768&&m(!1)};(0,c.useEffect)((function(){return function(){var e=parseInt((0,v.$o)(v.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,v.qQ)(v.dA.userVisitCount,e+1),e>2&&!(0,v.$o)(v.dA.hasDisplayedNotificationModal)&&J(!0)}(),re(),window.addEventListener("resize",re),function(){window.removeEventListener("resize",re)}}),[]);var ie=!T&&i&&t;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:Z().main,children:[(0,o.jsx)(h.Z,{wrapperClassName:Z().loadingSpinner,size:"large",spinning:e.appLoading,children:(0,o.jsxs)(Ee,{className:Z().root,children:[(0,o.jsxs)("div",{className:Z().mainSection,children:[(0,o.jsxs)("div",{className:Z().topSection,children:[p&&(0,o.jsx)(k.M,{source:"/hls/stream.m3u8",online:p}),!p&&!e.appLoading&&(0,o.jsx)(U.R,{streamName:C,customText:A,notificationsEnabled:W,fediverseAccount:Q,lastLive:_,onNotifyClick:function(){return B(!0)},onFollowClick:function(){return q(!0)}}),p&&(0,o.jsx)(oe.X,{online:p,lastConnectTime:g,lastDisconnectTime:_,viewerCount:j})]}),(0,o.jsx)("div",{className:Z().midSection,children:(0,o.jsxs)("div",{className:Z().buttonsLogoTitleSection,children:[!d&&(0,o.jsxs)(z,{children:[ne,(0,o.jsx)(O,{size:"small",onClick:function(){return q(!0)}}),(0,o.jsx)(Le,{open:I,notificationClicked:function(){return B(!0)},notificationClosed:function(){return te()},children:(0,o.jsx)(G,{onClick:function(){return B(!0)}})})]}),(0,o.jsx)(xe.Modal,{title:"Notify",open:R,afterClose:function(){return te()},handleCancel:function(){return te()},children:(0,o.jsx)(He,{})})]})}),d?(0,o.jsx)(Je,{name:C,streamTitle:w,summary:b,tags:S,socialHandles:N,extraPageContent:y,messages:f,currentUser:a,showChat:ie,actions:F,setExternalActionToDisplay:ee,setShowNotifyPopup:B,setShowFollowModal:q}):(0,o.jsx)(Ie,{name:C,streamTitle:w,summary:b,tags:S,socialHandles:N,extraPageContent:y})]}),ie&&!d&&(0,o.jsx)(E,{})]})}),!d&&!1]}),X&&(0,o.jsx)(Pe,{externalActionToDisplay:X,setExternalActionToDisplay:$}),(0,o.jsx)(xe.Modal,{title:"Follow ".concat(C),open:V,handleCancel:function(){return q(!1)},width:"550px",children:(0,o.jsx)(Me,{account:Q,name:C,handleClose:function(){return q(!1)}})})]})},Ue=t(8119),Re=t(85402),Oe=function(e){var n=e.title,t=e.message;return(0,o.jsx)(Re.Z,{title:n,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,o.jsx)("p",{style:{fontSize:"1.3rem"},children:t})})},Be=t(82670);var Ge=function(){var e=(0,s.sJ)(u.j$),n=(0,s.sJ)(u.RI),t=!1,o="",r=function(){t=!0,o=window.document.title},i=function(){t=!1,window.document.title=o};return(0,c.useEffect)((function(){return o=window.document.title,window.addEventListener("blur",r),window.addEventListener("focus",i),function(){window.removeEventListener("focus",i),window.removeEventListener("blur",r)}}),[]),(0,c.useEffect)((function(){var e=n.online;t&&e&&(window.document.title="\ud83d\udcac :: ".concat(o))}),[e]),(0,c.useEffect)((function(){if(t){var e=n.online;e?window.document.title=" \ud83d\udfe2 :: ".concat(o):e||(window.document.title=" \ud83d\udd34 :: ".concat(o))}}),[u.RI]),null},Ye=function(){return(0,o.jsx)("script",{id:"server-side-hydration",dangerouslySetInnerHTML:{__html:"\n\twindow.configHydration = {{.ServerConfigJSON}};\n\twindow.statusHydration = {{.StatusJSON}};\n\t"}})},Ve=function(){var e=(0,r.Z)((0,s.FV)(u.hz),1)[0],n=(0,s.sJ)(u.g1),t=n.name,a=n.title,d=n.customStyles,m=n.version,f=(0,s.sJ)(u.di),h=(0,s.sJ)(u.ap),p=(0,c.useRef)(null),x=n.chatDisabled;(0,c.useEffect)((function(){!function(e){var n=function(e){e.setAttribute("rel","noopener noreferrer ")};e.querySelectorAll("a").forEach((function(e){return n(e)})),new MutationObserver((function(e){var t=!0,o=!1,r=void 0;try{for(var i,s=e[Symbol.iterator]();!(t=(i=s.next()).done);t=!0){var a=i.value,l=!0,c=!1,u=void 0;try{for(var d,m=a.addedNodes[Symbol.iterator]();!(l=(d=m.next()).done);l=!0){var f=d.value;(0,Be.Z)(f,HTMLElement)&&"a"===f.tagName.toLowerCase()&&n(f)}}catch(h){c=!0,u=h}finally{try{l||null==m.return||m.return()}finally{if(c)throw u}}}}catch(h){o=!0,r=h}finally{try{t||null==s.return||s.return()}finally{if(o)throw r}}})).observe(e,{attributes:!1,childList:!0,subtree:!0})}(p.current)}),[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)(Ye,{}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,o.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,o.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,o.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,o.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,o.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,o.jsx)("style",{children:d}),(0,o.jsx)("base",{target:"_blank"})]}),(0,o.jsxs)(l(),{children:[t?(0,o.jsx)("title",{children:t}):(0,o.jsx)("title",{children:"{{.Name}}"}),(0,o.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"og:type",content:"video.other"}),(0,o.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,o.jsx)("meta",{property:"og:image",content:"{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:url",content:"{{.Thumbnail}}"}),(0,o.jsx)("meta",{property:"og:image:alt",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"og:video:height",content:"315"}),(0,o.jsx)("meta",{property:"og:video:width",content:"560"}),(0,o.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,o.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,o.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,o.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,o.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,o.jsx)("meta",{property:"twitter:card",content:"player"}),(0,o.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}/embed/video"}),(0,o.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,o.jsx)("meta",{property:"twitter:player:height",content:"315"})]}),(0,o.jsx)(u.me,{}),(0,o.jsx)(Ge,{}),(0,o.jsxs)(i.Z,{ref:p,style:{minHeight:"100vh"},children:[(0,o.jsx)(Ue.h,{name:a||t,chatAvailable:f,chatDisabled:x}),(0,o.jsx)(De,{}),h&&(0,o.jsx)(Oe,{title:h.title,message:h.message}),!e&&(0,o.jsx)(y,{version:m})]})]})};function qe(){return(0,o.jsx)(Ve,{})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},81998:function(e){e.exports={item:"ActionButtonMenu_item__OJQdr",buttonWrap:"ActionButtonMenu_buttonWrap__WQ9kt",icon:"ActionButtonMenu_icon__edY1D",menu:"ActionButtonMenu_menu__GChDk"}},69767:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},74688:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},47093:function(e){e.exports={root:"UserDropdown_root__IdxfQ","ant-space":"UserDropdown_ant-space__XJTZ3","ant-space-item":"UserDropdown_ant-space-item__w4nC2"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},63291:function(e){e.exports={root:"Content_root__h1mNK",mainSection:"Content_mainSection__Gk78Y",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",lowerSectionMobile:"Content_lowerSectionMobile__hRr0_",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",main:"Content_main__XVf63"}},28105:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},35603:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV",item:"Footer_item__rXxSr"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},7918:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},78890:function(e){e.exports={spinner:"Modal_spinner__GiSS0",content:"Modal_content__h9my9"}},75347:function(e){e.exports={root:"Sidebar_root__8HE0A"}},52740:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},12103:function(e){e.exports={followers:"FollowerCollection_followers__e_EUS",noFollowers:"FollowerCollection_noFollowers__UaCVW"}},40305:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[1272,8700,2544,8939,3903,4267,4381,5938,9372,7364,2429,6373,1082,5824,1899,2382,2854,9774,2888,179],(function(){return n=48312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);