"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1559],{51559:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EmojiPicker:function(){return EmojiPicker}});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(85893),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(67294),picmo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(57741);let EmojiPicker=param=>{let{onEmojiSelect,onCustomEmojiSelect}=param,[customEmoji,setCustomEmoji]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),ref=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(),getCustomEmoji=async()=>{try{let response=await fetch("/api/emoji"),emoji=await response.json();setCustomEmoji(emoji)}catch(e){console.error("cannot fetch custom emoji",e)}};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{getCustomEmoji()},[]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{let e=customEmoji.map(emoji=>({emoji:emoji.name,label:emoji.name,url:emoji.url})),picker=(0,picmo__WEBPACK_IMPORTED_MODULE_2__.wU)({rootElement:ref.current,custom:e,initialCategory:"custom",showPreview:!1,showRecents:!0});picker.addEventListener("emoji:select",event=>{event.url?onCustomEmojiSelect(event.name,event.url):onEmojiSelect(event.emoji)})},[customEmoji]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{ref:ref})}}}]);