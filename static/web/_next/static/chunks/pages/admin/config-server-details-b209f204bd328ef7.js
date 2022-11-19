(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3554],{44443:function(__unused_webpack_module,__unused_webpack_exports,__webpack_require__){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-server-details",function(){return __webpack_require__(76848)}])},76848:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return ConfigServerDetails}});var jsx_runtime=__webpack_require__(85893),react=__webpack_require__(67294),typography=__webpack_require__(84485),collapse=__webpack_require__(54907),tooltip=__webpack_require__(94199),es_button=__webpack_require__(71577),objectSpread2=__webpack_require__(1413),asn_RedoOutlined={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M758.2 839.1C851.8 765.9 912 651.9 912 523.9 912 303 733.5 124.3 512.6 124 291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2 3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1-8.1-6.6-15.9-13.7-23.4-21.2a318.64 318.64 0 01-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7 29.4-29.4 63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6 29.4 29.4 52.5 63.6 68.6 101.7 16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.64 318.64 0 01-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 00-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9l-37.3-47.9z"}}]},name:"redo",theme:"outlined"},AntdIcon=__webpack_require__(42135),RedoOutlined_RedoOutlined=function(props,ref){return react.createElement(AntdIcon.Z,(0,objectSpread2.Z)((0,objectSpread2.Z)({},props),{},{ref:ref,icon:asn_RedoOutlined}))};RedoOutlined_RedoOutlined.displayName="RedoOutlined";var icons_RedoOutlined=react.forwardRef(RedoOutlined_RedoOutlined),CopyOutlined=__webpack_require__(57132),TextField=__webpack_require__(40117),TextFieldWithSubmit=__webpack_require__(10135),server_status_context=__webpack_require__(99519),alert_message_context=__webpack_require__(82661),config_constants=__webpack_require__(90745),popconfirm=__webpack_require__(65360),apis=__webpack_require__(64777),input_statuses=__webpack_require__(41983),FormStatusIndicator=__webpack_require__(39664);let ResetYP=()=>{let{setMessage}=(0,react.useContext)(alert_message_context.k),[submitStatus,setSubmitStatus]=(0,react.useState)(null),resetStates=()=>{setSubmitStatus(null),clearTimeout(null)},resetDirectoryRegistration=async()=>{setSubmitStatus((0,input_statuses.kg)(input_statuses.Jk));try{await (0,apis.rQ)(apis.UJ),setMessage(""),setSubmitStatus((0,input_statuses.kg)(input_statuses.zv)),setTimeout(resetStates,config_constants.sI)}catch(error){setSubmitStatus((0,input_statuses.kg)(input_statuses.Un,"There was an error: ".concat(error))),setTimeout(resetStates,config_constants.sI)}};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(typography.Z.Title,{level:3,className:"section-title",children:"Reset Directory"}),(0,jsx_runtime.jsx)("p",{className:"description",children:'If you are experiencing issues with your listing on the Owncast Directory and were asked to "reset" your connection to the service, you can do that here. The next time you go live it will try and re-register your server with the directory from scratch.'}),(0,jsx_runtime.jsx)(popconfirm.Z,{placement:"topLeft",title:"Are you sure you want to reset your connection to the Owncast directory?",onConfirm:resetDirectoryRegistration,okText:"Yes",cancelText:"No",children:(0,jsx_runtime.jsx)(es_button.Z,{type:"primary",children:"Reset Directory Connection"})}),(0,jsx_runtime.jsx)("p",{children:(0,jsx_runtime.jsx)(FormStatusIndicator.E,{status:submitStatus})})]})},{Panel}=collapse.Z,EditInstanceDetails=()=>{let[formDataValues,setFormDataValues]=(0,react.useState)(null),serverStatusData=(0,react.useContext)(server_status_context.aC),{setMessage}=(0,react.useContext)(alert_message_context.k),{serverConfig}=serverStatusData||{},{streamKey,ffmpegPath,rtmpServerPort,webServerPort,yp,socketHostOverride}=serverConfig,[copyIsVisible,setCopyVisible]=(0,react.useState)(!1);if((0,react.useEffect)(()=>{setFormDataValues({streamKey,ffmpegPath,rtmpServerPort,webServerPort,socketHostOverride})},[serverConfig]),!formDataValues)return null;let handleFieldChange=param=>{let{fieldName,value}=param;setFormDataValues({...formDataValues,[fieldName]:value})},showConfigurationRestartMessage=()=>{setMessage("Updating server settings requires a restart of your Owncast server.")},showStreamKeyChangeMessage=()=>{setMessage("Changing your stream key will log you out of the admin and block you from streaming until you change the key in your broadcasting software.")},showFfmpegChangeMessage=()=>{serverStatusData.online&&setMessage("The updated ffmpeg path will be used when starting your next live stream.")};return(0,jsx_runtime.jsxs)("div",{className:"edit-server-details-container",children:[(0,jsx_runtime.jsx)("div",{className:"field-container field-streamkey-container",children:(0,jsx_runtime.jsxs)("div",{className:"left-side",children:[(0,jsx_runtime.jsx)(TextFieldWithSubmit.$7,{fieldName:"streamKey",...config_constants.Ri,value:formDataValues.streamKey,initialValue:streamKey,type:TextField.A8,onChange:handleFieldChange,onSubmit:showStreamKeyChangeMessage}),(0,jsx_runtime.jsxs)("div",{className:"streamkey-actions",children:[(0,jsx_runtime.jsx)(tooltip.Z,{title:"Generate a stream key",children:(0,jsx_runtime.jsx)(es_button.Z,{icon:(0,jsx_runtime.jsx)(icons_RedoOutlined,{}),size:"small",onClick:function(){let key="";for(let i=0;i<3;i+=1)key+=Math.random().toString(36).substring(2);handleFieldChange({fieldName:"streamKey",value:key})}})}),(0,jsx_runtime.jsx)(tooltip.Z,{className:"copy-tooltip",title:copyIsVisible?"Copied!":"Copy to clipboard",children:(0,jsx_runtime.jsx)(es_button.Z,{icon:(0,jsx_runtime.jsx)(CopyOutlined.Z,{}),size:"small",onClick:function(){navigator.clipboard.writeText(formDataValues.streamKey).then(()=>{setCopyVisible(!0),setTimeout(()=>setCopyVisible(!1),3e3)})}})})]})]})}),(0,jsx_runtime.jsx)(TextFieldWithSubmit.$7,{fieldName:"ffmpegPath",...config_constants.KB,value:formDataValues.ffmpegPath,initialValue:ffmpegPath,onChange:handleFieldChange,onSubmit:showFfmpegChangeMessage}),(0,jsx_runtime.jsx)(TextFieldWithSubmit.$7,{fieldName:"webServerPort",...config_constants.rE,value:formDataValues.webServerPort,initialValue:webServerPort,type:TextField.mG,onChange:handleFieldChange,onSubmit:showConfigurationRestartMessage}),(0,jsx_runtime.jsx)(TextFieldWithSubmit.$7,{fieldName:"rtmpServerPort",...config_constants.lT,value:formDataValues.rtmpServerPort,initialValue:rtmpServerPort,type:TextField.mG,onChange:handleFieldChange,onSubmit:showConfigurationRestartMessage}),(0,jsx_runtime.jsx)(collapse.Z,{className:"advanced-settings",children:(0,jsx_runtime.jsxs)(Panel,{header:"Advanced Settings",children:[(0,jsx_runtime.jsx)(typography.Z.Paragraph,{children:"If you have a CDN in front of your entire Owncast instance, specify your origin server here for the websocket to connect to. Most people will never need to set this."}),(0,jsx_runtime.jsx)(TextFieldWithSubmit.$7,{fieldName:"socketHostOverride",...config_constants.ME,value:formDataValues.socketHostOverride,initialValue:socketHostOverride||"",type:TextField.xA,onChange:handleFieldChange}),yp.enabled&&(0,jsx_runtime.jsx)(ResetYP,{})]},"1")})]})},{Title}=typography.Z;function ConfigServerDetails(){return(0,jsx_runtime.jsxs)("div",{className:"config-server-details-form",children:[(0,jsx_runtime.jsx)(Title,{children:"Server Settings"}),(0,jsx_runtime.jsx)("p",{className:"description",children:"You should change your stream key from the default and keep it safe. For most people it's likely the other settings will not need to be changed."}),(0,jsx_runtime.jsx)("div",{className:"form-module config-server-details-container",children:(0,jsx_runtime.jsx)(EditInstanceDetails,{})})]})}}},function(__webpack_require__){__webpack_require__.O(0,[3286,9774,2888,179],function(){return __webpack_require__(__webpack_require__.s=44443)}),_N_E=__webpack_require__.O()}]);