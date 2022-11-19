(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9522],{55583:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/chat/users",function(){return __webpack_require__(46049)}])},37926:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return BanUserButton}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(85402),antd__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(71577),_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(21640),_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(82911),_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(84674),_utils_apis__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(64777);let BanUserButton=param=>{let{user,isEnabled,label,onClick}=param;async function buttonClicked(param){let{id}=param;try{let result=await (0,_utils_apis__WEBPACK_IMPORTED_MODULE_1__.rQ)(_utils_apis__WEBPACK_IMPORTED_MODULE_1__.NM,{data:{userId:id,enabled:!isEnabled},method:"POST",auth:!0});return result.success}catch(e){console.error(e)}return!1}let actionString=isEnabled?"ban":"unban",icon=isEnabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.Z,{style:{color:"var(--ant-error)"}}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.Z,{style:{color:"var(--ant-warning)"}}),content=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:["Are you sure you want to ",actionString," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:user.displayName}),isEnabled?" and remove their messages?":"?"]}),confirmBlockAction=()=>{antd__WEBPACK_IMPORTED_MODULE_4__.Z.confirm({title:"Confirm ".concat(actionString),content,onCancel(){},onOk:()=>new Promise((resolve,reject)=>{let result=buttonClicked(user);result?setTimeout(()=>{resolve(result),null==onClick||onClick()},3e3):reject()}),okType:"danger",okText:isEnabled?"Absolutely":null,icon})};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__.Z,{onClick:confirmBlockAction,size:"small",icon:isEnabled?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.Z,{twoToneColor:"#ff4d4f"}):null,className:"block-user-button",children:label||actionString})};BanUserButton.defaultProps={label:"",onClick:null}},17388:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return UserPopover}});var jsx_runtime=__webpack_require__(85893),react=__webpack_require__(67294),tooltip=__webpack_require__(94199),modal=__webpack_require__(85402),typography=__webpack_require__(84485),row=__webpack_require__(25968),col=__webpack_require__(6226),divider=__webpack_require__(27049),space=__webpack_require__(26713),formatDistanceToNow=__webpack_require__(45938),format=__webpack_require__(58091),lodash=__webpack_require__(96486),BanUserButton=__webpack_require__(37926),es_button=__webpack_require__(71577),ExclamationCircleFilled=__webpack_require__(21640),QuestionCircleFilled=__webpack_require__(82911),StopTwoTone=__webpack_require__(84674),SafetyCertificateTwoTone=__webpack_require__(24478),apis=__webpack_require__(64777);let ModeratorUserButton=param=>{var ref;let{user,onClick}=param;async function buttonClicked(param,setAsModerator){let{id}=param;try{let result=await (0,apis.rQ)(apis.jr,{data:{userId:id,isModerator:setAsModerator},method:"POST",auth:!0});return result.success}catch(e){console.error(e)}return!1}let isModerator=null===(ref=user.scopes)||void 0===ref?void 0:ref.includes("MODERATOR"),actionString=isModerator?"remove moderator":"add moderator",icon=isModerator?(0,jsx_runtime.jsx)(ExclamationCircleFilled.Z,{style:{color:"var(--ant-error)"}}):(0,jsx_runtime.jsx)(QuestionCircleFilled.Z,{style:{color:"var(--ant-warning)"}}),content=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Are you sure you want to ",actionString," ",(0,jsx_runtime.jsx)("strong",{children:user.displayName}),"?"]}),confirmBlockAction=()=>{modal.Z.confirm({title:"Confirm ".concat(actionString),content,onCancel(){},onOk:()=>new Promise((resolve,reject)=>{let result=buttonClicked(user,!isModerator);result?setTimeout(()=>{resolve(result),null==onClick||onClick()},3e3):reject()}),okType:"danger",okText:isModerator?"Yup!":null,icon})};return(0,jsx_runtime.jsx)(es_button.Z,{onClick:confirmBlockAction,size:"small",icon:isModerator?(0,jsx_runtime.jsx)(StopTwoTone.Z,{twoToneColor:"#ff4d4f"}):(0,jsx_runtime.jsx)(SafetyCertificateTwoTone.Z,{twoToneColor:"#22bb44"}),className:"block-user-button",children:actionString})};ModeratorUserButton.defaultProps={onClick:null};var UserTable=__webpack_require__(55709),utils_format=__webpack_require__(70241);let UserPopover=param=>{let{user,connectionInfo,children}=param,[isModalOpen,setIsModalOpen]=(0,react.useState)(!1),handleShowModal=()=>{setIsModalOpen(!0)},handleCloseModal=()=>{setIsModalOpen(!1)},{displayName,createdAt,previousNames,nameChangedAt,disabledAt}=user,{connectedAt,messageCount,userAgent}=connectionInfo||{},lastNameChangeDate=null,nameList=previousNames&&[...previousNames];previousNames&&previousNames.length>1&&nameChangedAt&&(lastNameChangeDate=new Date(nameChangedAt),nameList.reverse());let dateObject=new Date(createdAt),createdAtDate=(0,format.Z)(dateObject,"PP pp"),lastNameChangeDuration=lastNameChangeDate?(0,formatDistanceToNow.Z)(lastNameChangeDate):null;return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(tooltip.Z,{title:(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["Created at: ",createdAtDate,".",(0,jsx_runtime.jsx)("br",{})," Click for more info."]}),placement:"bottomLeft",children:(0,jsx_runtime.jsx)("button",{type:"button","aria-label":"Display more details about this user",className:"user-item-container",onClick:handleShowModal,children:children})}),(0,jsx_runtime.jsx)(modal.Z,{destroyOnClose:!0,width:600,cancelText:"Close",okButtonProps:{style:{display:"none"}},title:"User details: ".concat(displayName),open:isModalOpen,onOk:handleCloseModal,onCancel:handleCloseModal,children:(0,jsx_runtime.jsxs)("div",{className:"user-details",children:[(0,jsx_runtime.jsx)(typography.Z.Title,{level:4,children:displayName}),(0,jsx_runtime.jsxs)("p",{className:"created-at",children:["User created at ",createdAtDate,"."]}),(0,jsx_runtime.jsxs)(row.Z,{gutter:16,children:[connectionInfo&&(0,jsx_runtime.jsxs)(col.Z,{md:lastNameChangeDate?12:24,children:[(0,jsx_runtime.jsx)(typography.Z.Title,{level:5,children:"This user is currently connected to Chat."}),(0,jsx_runtime.jsxs)("ul",{className:"connection-info",children:[(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"Active for:"})," ",(0,formatDistanceToNow.Z)(new Date(connectedAt))]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"Messages sent:"})," ",messageCount]}),(0,jsx_runtime.jsxs)("li",{children:[(0,jsx_runtime.jsx)("strong",{children:"User Agent:"}),(0,jsx_runtime.jsx)("br",{}),(0,utils_format.AB)(userAgent)]})]})]}),lastNameChangeDate&&(0,jsx_runtime.jsxs)(col.Z,{md:connectionInfo?12:24,children:[(0,jsx_runtime.jsx)(typography.Z.Title,{level:5,children:"This user is also seen as:"}),(0,jsx_runtime.jsx)("ul",{className:"previous-names-list",children:(0,lodash.uniq)(nameList).map((name,index)=>(0,jsx_runtime.jsxs)("li",{className:0===index?"latest":"",children:[(0,jsx_runtime.jsx)("span",{className:"user-name-item",children:name}),0===index?" (Changed ".concat(lastNameChangeDuration," ago)"):""]}))})]})]}),(0,jsx_runtime.jsx)(divider.Z,{}),(0,jsx_runtime.jsxs)(space.Z,{direction:"horizontal",children:[disabledAt?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["This user was banned on ",(0,jsx_runtime.jsx)("code",{children:(0,UserTable.u)(disabledAt)}),".",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)(BanUserButton.e,{label:"Unban this user",user:user,isEnabled:!1,onClick:handleCloseModal})]}):(0,jsx_runtime.jsx)(BanUserButton.e,{label:"Ban this user",user:user,isEnabled:!0,onClick:handleCloseModal}),(0,jsx_runtime.jsx)(ModeratorUserButton,{user:user,onClick:handleCloseModal})]})]})})]})};UserPopover.defaultProps={connectionInfo:null}},55709:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{K:function(){return UserTable},u:function(){return formatDisplayDate}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(93626),date_fns_format__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(58091),_UserPopover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(17388),_BanUserButton__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(37926);function formatDisplayDate(date){return(0,date_fns_format__WEBPACK_IMPORTED_MODULE_3__.Z)(new Date(date),"MMM d H:mma")}let UserTable=param=>{let{data}=param;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:[{title:"Last Known Display Name",dataIndex:"displayName",key:"displayName",render:(displayName,user)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_UserPopover__WEBPACK_IMPORTED_MODULE_1__.Z,{user:user,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"display-name",children:displayName})})},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:date=>formatDisplayDate(date),sorter:(a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"Disabled at",dataIndex:"disabledAt",key:"disabledAt",defaultSortOrder:"descend",render:date=>date?formatDisplayDate(date):null,sorter:(a,b)=>new Date(a.disabledAt).getTime()-new Date(b.disabledAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(_,user)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_BanUserButton__WEBPACK_IMPORTED_MODULE_2__.e,{user:user,isEnabled:!user.disabledAt})}],dataSource:data,size:"small",rowKey:"id"})}},46049:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FETCH_INTERVAL:function(){return FETCH_INTERVAL},default:function(){return ChatUsers}});var jsx_runtime=__webpack_require__(85893),react=__webpack_require__(67294),tabs=__webpack_require__(84381),server_status_context=__webpack_require__(99519),apis=__webpack_require__(64777),UserTable=__webpack_require__(55709),input=__webpack_require__(69677),table=__webpack_require__(93626),SearchOutlined=__webpack_require__(68795),formatDistanceToNow=__webpack_require__(45938),UserPopover=__webpack_require__(17388),BanUserButton=__webpack_require__(37926),format=__webpack_require__(70241);let ClientTable=param=>{let{data}=param,columns=[{title:"Display Name",key:"username",render(client){let{user,connectedAt,messageCount,userAgent}=client;return(0,jsx_runtime.jsx)(UserPopover.Z,{user:user,connectionInfo:{connectedAt,messageCount,userAgent},children:(0,jsx_runtime.jsx)("span",{className:"display-name",children:user.displayName})})},sorter:(a,b)=>b.user.displayName.localeCompare(a.user.displayName),filterIcon:(0,jsx_runtime.jsx)(SearchOutlined.Z,{}),filterDropdown(param){let{setSelectedKeys,selectedKeys,confirm}=param;return(0,jsx_runtime.jsx)("div",{style:{padding:8},children:(0,jsx_runtime.jsx)(input.Z,{placeholder:"Search display names...",value:selectedKeys[0],onChange(e){setSelectedKeys(e.target.value?[e.target.value]:[]),confirm({closeDropdown:!1})}})})},onFilter:(value,record)=>record.user.displayName.includes(value),sortDirections:["descend","ascend"]},{title:"Messages sent",dataIndex:"messageCount",key:"messageCount",className:"number-col",width:"12%",sorter:(a,b)=>a.messageCount-b.messageCount,sortDirections:["descend","ascend"],render:count=>(0,jsx_runtime.jsx)("div",{style:{textAlign:"center"},children:count})},{title:"Connected Time",dataIndex:"connectedAt",key:"connectedAt",defaultSortOrder:"ascend",render:time=>(0,formatDistanceToNow.Z)(new Date(time)),sorter:(a,b)=>new Date(b.connectedAt).getTime()-new Date(a.connectedAt).getTime(),sortDirections:["descend","ascend"]},{title:"User Agent",dataIndex:"userAgent",key:"userAgent",render:ua=>(0,format.AB)(ua)},{title:"Location",dataIndex:"geo",key:"geo",render:geo=>geo?"".concat(geo.regionName,", ").concat(geo.countryCode):"-"},{title:"",key:"block",className:"actions-col",render:(_,row)=>(0,jsx_runtime.jsx)(BanUserButton.e,{user:row.user,isEnabled:!row.user.disabledAt})}];return(0,jsx_runtime.jsx)(table.Z,{className:"table-container",pagination:{hideOnSinglePage:!0},columns:columns,dataSource:data,size:"small",rowKey:"id"})};var es_button=__webpack_require__(71577),esm_format=__webpack_require__(58091),StopTwoTone=__webpack_require__(84674);async function removeIPAddressBan(ipAddress){try{await (0,apis.rQ)(apis.RB,{data:{value:ipAddress},method:"POST",auth:!0})}catch(e){console.error(e)}}let BannedIPsTable=param=>{let{data}=param;return(0,jsx_runtime.jsx)(table.Z,{pagination:{hideOnSinglePage:!0},className:"table-container",columns:[{title:"IP Address",dataIndex:"ipAddress",key:"ipAddress"},{title:"Reason",dataIndex:"notes",key:"notes"},{title:"Created",dataIndex:"createdAt",key:"createdAt",render:date=>(0,esm_format.Z)(new Date(date),"MMM d H:mma"),sorter:(a,b)=>new Date(a.createdAt).getTime()-new Date(b.createdAt).getTime(),sortDirections:["descend","ascend"]},{title:"",key:"block",className:"actions-col",render:(_,ip)=>(0,jsx_runtime.jsx)(es_button.Z,{title:"Remove IP Address Ban",onClick:()=>removeIPAddressBan(ip.ipAddress),icon:(0,jsx_runtime.jsx)(StopTwoTone.Z,{twoToneColor:"#ff4d4f"}),className:"block-user-button"})}],dataSource:data,size:"large",rowKey:"ipAddress"})},FETCH_INTERVAL=1e4;function ChatUsers(){let context=(0,react.useContext)(server_status_context.aC),{online}=context||{},[disabledUsers,setDisabledUsers]=(0,react.useState)([]),[ipBans,setIPBans]=(0,react.useState)([]),[clients,setClients]=(0,react.useState)([]),[moderators,setModerators]=(0,react.useState)([]),getInfo=async()=>{try{let result=await (0,apis.rQ)(apis.qk);setDisabledUsers(result)}catch(error){console.log("==== error",error)}try{let result1=await (0,apis.rQ)(apis.Kp);setClients(result1)}catch(error1){console.log("==== error",error1)}try{let result2=await (0,apis.rQ)(apis.GC);setModerators(result2)}catch(error2){console.error("error fetching moderators",error2)}try{let result3=await (0,apis.rQ)(apis.Bu);setIPBans(result3)}catch(error3){console.error("error fetching banned ips",error3)}};(0,react.useEffect)(()=>{let getStatusIntervalId=null;return getInfo(),getStatusIntervalId=setInterval(getInfo,FETCH_INTERVAL),()=>{clearInterval(getStatusIntervalId)}},[online]);let connectedUsers=online?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(ClientTable,{data:clients}),(0,jsx_runtime.jsxs)("p",{className:"description",children:["Visit the"," ",(0,jsx_runtime.jsx)("a",{href:"https://owncast.online/docs/viewers/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"documentation"})," ","to configure additional details about your viewers."]})]}):(0,jsx_runtime.jsx)("p",{className:"description",children:"When a stream is active and chat is enabled, connected chat clients will be displayed here."}),connectedUserTabTitle=(0,jsx_runtime.jsxs)("span",{children:["Connected ",online?"(".concat(clients.length,")"):"(offline)"]}),bannedUsersTabTitle=(0,jsx_runtime.jsxs)("span",{children:["Banned Users (",disabledUsers.length,")"]}),bannedUsersTable=(0,jsx_runtime.jsx)(UserTable.K,{data:disabledUsers}),bannedIPTabTitle=(0,jsx_runtime.jsxs)("span",{children:["IP Bans (",ipBans.length,")"]}),bannedIpTable=(0,jsx_runtime.jsx)(BannedIPsTable,{data:ipBans}),moderatorUsersTabTitle=(0,jsx_runtime.jsxs)("span",{children:["Moderators (",moderators.length,")"]}),moderatorTable=(0,jsx_runtime.jsx)(UserTable.K,{data:moderators});return(0,jsx_runtime.jsx)(tabs.Z,{defaultActiveKey:"1",items:[{label:connectedUserTabTitle,key:"1",children:connectedUsers},{label:bannedUsersTabTitle,key:"2",children:bannedUsersTable},{label:bannedIPTabTitle,key:"3",children:bannedIpTable},{label:moderatorUsersTabTitle,key:"4",children:moderatorTable}]})}}},function(__webpack_require__){__webpack_require__.O(0,[3662,8939,3903,4267,3626,8091,4381,5938,7635,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=55583)}),_N_E=__webpack_require__.O()}]);