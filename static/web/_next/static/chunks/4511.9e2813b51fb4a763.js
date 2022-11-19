"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4511],{34511:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{tiddlyWiki:function(){return tiddlyWiki}});var textwords={},keywords={allTags:!0,closeAll:!0,list:!0,newJournal:!0,newTiddler:!0,permaview:!0,saveChanges:!0,search:!0,slider:!0,tabs:!0,tag:!0,tagging:!0,tags:!0,tiddler:!0,timeline:!0,today:!0,version:!0,option:!0,with:!0,filter:!0},isSpaceName=/[\w_\-]/i,reHR=/^\-\-\-\-+$/,reWikiCommentStart=/^\/\*\*\*$/,reWikiCommentStop=/^\*\*\*\/$/,reBlockQuote=/^<<<$/,reJsCodeStart=/^\/\/\{\{\{$/,reJsCodeStop=/^\/\/\}\}\}$/,reXmlCodeStart=/^<!--\{\{\{-->$/,reXmlCodeStop=/^<!--\}\}\}-->$/,reCodeBlockStart=/^\{\{\{$/,reCodeBlockStop=/^\}\}\}$/,reUntilCodeStop=/.*?\}\}\}/;function chain(stream,state,f){return state.tokenize=f,f(stream,state)}function tokenBase(stream,state){var sol=stream.sol(),ch=stream.peek();if(state.block=!1,sol&&/[<\/\*{}\-]/.test(ch)){if(stream.match(reCodeBlockStart))return state.block=!0,chain(stream,state,twTokenCode);if(stream.match(reBlockQuote))return"quote";if(stream.match(reWikiCommentStart)||stream.match(reWikiCommentStop)||stream.match(reJsCodeStart)||stream.match(reJsCodeStop)||stream.match(reXmlCodeStart)||stream.match(reXmlCodeStop))return"comment";if(stream.match(reHR))return"contentSeparator"}if(stream.next(),sol&&/[\/\*!#;:>|]/.test(ch)){if("!"==ch)return stream.skipToEnd(),"header";if("*"==ch)return stream.eatWhile("*"),"comment";if("#"==ch)return stream.eatWhile("#"),"comment";if(";"==ch)return stream.eatWhile(";"),"comment";if(":"==ch)return stream.eatWhile(":"),"comment";if(">"==ch)return stream.eatWhile(">"),"quote";if("|"==ch)return"header"}if("{"==ch&&stream.match("{{"))return chain(stream,state,twTokenCode);if(/[hf]/i.test(ch)&&/[ti]/i.test(stream.peek())&&stream.match(/\b(ttps?|tp|ile):\/\/[\-A-Z0-9+&@#\/%?=~_|$!:,.;]*[A-Z0-9+&@#\/%=~_|$]/i))return"link";if('"'==ch)return"string";if("~"==ch||/[\[\]]/.test(ch)&&stream.match(ch))return"brace";if("@"==ch)return stream.eatWhile(isSpaceName),"link";if(/\d/.test(ch))return stream.eatWhile(/\d/),"number";if("/"==ch){if(stream.eat("%"))return chain(stream,state,twTokenComment);if(stream.eat("/"))return chain(stream,state,twTokenEm)}if("_"==ch&&stream.eat("_"))return chain(stream,state,twTokenUnderline);if("-"==ch&&stream.eat("-")){if(" "!=stream.peek())return chain(stream,state,twTokenStrike);if(" "==stream.peek())return"brace"}return"'"==ch&&stream.eat("'")?chain(stream,state,twTokenStrong):"<"==ch&&stream.eat("<")?chain(stream,state,twTokenMacro):(stream.eatWhile(/[\w\$_]/),textwords.propertyIsEnumerable(stream.current())?"keyword":null)}function twTokenComment(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("/"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="%"==ch}return"comment"}function twTokenStrong(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("'"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="'"==ch}return"strong"}function twTokenCode(stream,state){var sb=state.block;return sb&&stream.current()?"comment":!sb&&stream.match(reUntilCodeStop)||sb&&stream.sol()&&stream.match(reCodeBlockStop)?(state.tokenize=tokenBase,"comment"):(stream.next(),"comment")}function twTokenEm(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("/"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="/"==ch}return"emphasis"}function twTokenUnderline(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("_"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="_"==ch}return"link"}function twTokenStrike(stream,state){for(var ch,maybeEnd=!1;ch=stream.next();){if("-"==ch&&maybeEnd){state.tokenize=tokenBase;break}maybeEnd="-"==ch}return"deleted"}function twTokenMacro(stream,state){if("<<"==stream.current())return"meta";var ch=stream.next();return ch?">"==ch&&">"==stream.peek()?(stream.next(),state.tokenize=tokenBase,"meta"):(stream.eatWhile(/[\w\$_]/),keywords.propertyIsEnumerable(stream.current())?"keyword":null):(state.tokenize=tokenBase,null)}let tiddlyWiki={name:"tiddlywiki",startState:function(){return{tokenize:tokenBase}},token:function(stream,state){return stream.eatSpace()?null:state.tokenize(stream,state)}}}}]);