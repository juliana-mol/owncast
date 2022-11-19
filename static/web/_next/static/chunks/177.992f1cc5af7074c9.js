"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{90177:function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{textile:function(){return textile}});var TOKEN_STYLES={addition:"inserted",attributes:"propertyName",bold:"strong",cite:"keyword",code:"monospace",definitionList:"list",deletion:"deleted",div:"punctuation",em:"emphasis",footnote:"variable",footCite:"qualifier",header:"heading",html:"comment",image:"atom",italic:"emphasis",link:"link",linkDefinition:"link",list1:"list",list2:"list.special",list3:"list",notextile:"string.special",pre:"operator",p:"content",quote:"bracket",span:"quote",specialChar:"character",strong:"strong",sub:"content.special",sup:"content.special",table:"variableName.special",tableHeading:"operator"};function handlePhraseModifier(stream,state,ch){if("_"===ch)return stream.eat("_")?togglePhraseModifier(stream,state,"italic",/__/,2):togglePhraseModifier(stream,state,"em",/_/,1);if("*"===ch)return stream.eat("*")?togglePhraseModifier(stream,state,"bold",/\*\*/,2):togglePhraseModifier(stream,state,"strong",/\*/,1);if("["===ch)return stream.match(/\d+\]/)&&(state.footCite=!0),tokenStyles(state);if("("===ch&&stream.match(/^(r|tm|c)\)/))return TOKEN_STYLES.specialChar;if("<"===ch&&stream.match(/(\w+)[^>]+>[^<]+<\/\1>/))return TOKEN_STYLES.html;if("?"===ch&&stream.eat("?"))return togglePhraseModifier(stream,state,"cite",/\?\?/,2);if("="===ch&&stream.eat("="))return togglePhraseModifier(stream,state,"notextile",/==/,2);if("-"===ch&&!stream.eat("-"))return togglePhraseModifier(stream,state,"deletion",/-/,1);if("+"===ch)return togglePhraseModifier(stream,state,"addition",/\+/,1);if("~"===ch)return togglePhraseModifier(stream,state,"sub",/~/,1);if("^"===ch)return togglePhraseModifier(stream,state,"sup",/\^/,1);if("%"===ch)return togglePhraseModifier(stream,state,"span",/%/,1);if("@"===ch)return togglePhraseModifier(stream,state,"code",/@/,1);if("!"===ch){var type=togglePhraseModifier(stream,state,"image",/(?:\([^\)]+\))?!/,1);return stream.match(/^:\S+/),type}return tokenStyles(state)}function togglePhraseModifier(stream,state,phraseModifier,closeRE,openSize){var charBefore=stream.pos>openSize?stream.string.charAt(stream.pos-openSize-1):null,charAfter=stream.peek();if(state[phraseModifier]){if((!charAfter||/\W/.test(charAfter))&&charBefore&&/\S/.test(charBefore)){var type=tokenStyles(state);return state[phraseModifier]=!1,type}}else(!charBefore||/\W/.test(charBefore))&&charAfter&&/\S/.test(charAfter)&&stream.match(RegExp("^.*\\S"+closeRE.source+"(?:\\W|$)"),!1)&&(state[phraseModifier]=!0,state.mode=Modes.attributes);return tokenStyles(state)}function tokenStyles(state){var disabled=textileDisabled(state);if(disabled)return disabled;var styles=[];return state.layoutType&&styles.push(TOKEN_STYLES[state.layoutType]),styles=styles.concat(function(state){for(var styles=[],i=1;i<arguments.length;++i)state[arguments[i]]&&styles.push(TOKEN_STYLES[arguments[i]]);return styles}(state,"addition","bold","cite","code","deletion","em","footCite","image","italic","link","span","strong","sub","sup","table","tableHeading")),"header"===state.layoutType&&styles.push(TOKEN_STYLES.header+"-"+state.header),styles.length?styles.join(" "):null}function textileDisabled(state){var type=state.layoutType;switch(type){case"notextile":case"code":case"pre":return TOKEN_STYLES[type];default:if(state.notextile)return TOKEN_STYLES.notextile+(type?" "+TOKEN_STYLES[type]:"");return null}}var REs={cache:{},single:{bc:"bc",bq:"bq",definitionList:/- .*?:=+/,definitionListEnd:/.*=:\s*$/,div:"div",drawTable:/\|.*\|/,foot:/fn\d+/,header:/h[1-6]/,html:/\s*<(?:\/)?(\w+)(?:[^>]+)?>(?:[^<]+<\/\1>)?/,link:/[^"]+":\S/,linkDefinition:/\[[^\s\]]+\]\S+/,list:/(?:#+|\*+)/,notextile:"notextile",para:"p",pre:"pre",table:"table",tableCellAttributes:/[\/\\]\d+/,tableHeading:/\|_\./,tableText:/[^"_\*\[\(\?\+~\^%@|-]+/,text:/[^!"_=\*\[\(<\?\+~\^%@-]+/},attributes:{align:/(?:<>|<|>|=)/,selector:/\([^\(][^\)]+\)/,lang:/\[[^\[\]]+\]/,pad:/(?:\(+|\)+){1,2}/,css:/\{[^\}]+\}/},createRe:function(name){switch(name){case"drawTable":return REs.makeRe("^",REs.single.drawTable,"$");case"html":return REs.makeRe("^",REs.single.html,"(?:",REs.single.html,")*","$");case"linkDefinition":return REs.makeRe("^",REs.single.linkDefinition,"$");case"listLayout":return REs.makeRe("^",REs.single.list,RE("allAttributes"),"*\\s+");case"tableCellAttributes":return REs.makeRe("^",REs.choiceRe(REs.single.tableCellAttributes,RE("allAttributes")),"+\\.");case"type":return REs.makeRe("^",RE("allTypes"));case"typeLayout":return REs.makeRe("^",RE("allTypes"),RE("allAttributes"),"*\\.\\.?","(\\s+|$)");case"attributes":return REs.makeRe("^",RE("allAttributes"),"+");case"allTypes":return REs.choiceRe(REs.single.div,REs.single.foot,REs.single.header,REs.single.bc,REs.single.bq,REs.single.notextile,REs.single.pre,REs.single.table,REs.single.para);case"allAttributes":return REs.choiceRe(REs.attributes.selector,REs.attributes.css,REs.attributes.lang,REs.attributes.align,REs.attributes.pad);default:return REs.makeRe("^",REs.single[name])}},makeRe:function(){for(var pattern="",i=0;i<arguments.length;++i){var arg=arguments[i];pattern+="string"==typeof arg?arg:arg.source}return RegExp(pattern)},choiceRe:function(){for(var parts=[arguments[0]],i=1;i<arguments.length;++i)parts[2*i-1]="|",parts[2*i]=arguments[i];return parts.unshift("(?:"),parts.push(")"),REs.makeRe.apply(null,parts)}};function RE(name){return REs.cache[name]||(REs.cache[name]=REs.createRe(name))}var Modes={newLayout:function(stream,state){var newMode;return stream.match(RE("typeLayout"),!1)?(state.spanningLayout=!1,(state.mode=Modes.blockType)(stream,state)):(!textileDisabled(state)&&(stream.match(RE("listLayout"),!1)?newMode=Modes.list:stream.match(RE("drawTable"),!1)?newMode=Modes.table:stream.match(RE("linkDefinition"),!1)?newMode=Modes.linkDefinition:stream.match(RE("definitionList"))?newMode=Modes.definitionList:stream.match(RE("html"),!1)&&(newMode=Modes.html)),(state.mode=newMode||Modes.text)(stream,state))},blockType:function(stream,state){var match,type;return(state.layoutType=null,match=stream.match(RE("type")))?((match=(type=match[0]).match(RE("header")))?(state.layoutType="header",state.header=parseInt(match[0][1])):type.match(RE("bq"))?state.layoutType="quote":type.match(RE("bc"))?state.layoutType="code":type.match(RE("foot"))?state.layoutType="footnote":type.match(RE("notextile"))?state.layoutType="notextile":type.match(RE("pre"))?state.layoutType="pre":type.match(RE("div"))?state.layoutType="div":type.match(RE("table"))&&(state.layoutType="table"),state.mode=Modes.attributes,tokenStyles(state)):(state.mode=Modes.text)(stream,state)},text:function(stream,state){if(stream.match(RE("text")))return tokenStyles(state);var ch=stream.next();return'"'===ch?(state.mode=Modes.link)(stream,state):handlePhraseModifier(stream,state,ch)},attributes:function(stream,state){return(state.mode=Modes.layoutLength,stream.match(RE("attributes")))?TOKEN_STYLES.attributes:tokenStyles(state)},layoutLength:function(stream,state){return stream.eat(".")&&stream.eat(".")&&(state.spanningLayout=!0),state.mode=Modes.text,tokenStyles(state)},list:function(stream,state){var match=stream.match(RE("list"));state.listDepth=match[0].length;var listMod=(state.listDepth-1)%3;return listMod?1===listMod?state.layoutType="list2":state.layoutType="list3":state.layoutType="list1",state.mode=Modes.attributes,tokenStyles(state)},link:function(stream,state){return(state.mode=Modes.text,stream.match(RE("link")))?(stream.match(/\S+/),TOKEN_STYLES.link):tokenStyles(state)},linkDefinition:function(stream){return stream.skipToEnd(),TOKEN_STYLES.linkDefinition},definitionList:function(stream,state){return stream.match(RE("definitionList")),state.layoutType="definitionList",stream.match(/\s*$/)?state.spanningLayout=!0:state.mode=Modes.attributes,tokenStyles(state)},html:function(stream){return stream.skipToEnd(),TOKEN_STYLES.html},table:function(stream,state){return state.layoutType="table",(state.mode=Modes.tableCell)(stream,state)},tableCell:function(stream,state){return stream.match(RE("tableHeading"))?state.tableHeading=!0:stream.eat("|"),state.mode=Modes.tableCellAttributes,tokenStyles(state)},tableCellAttributes:function(stream,state){return(state.mode=Modes.tableText,stream.match(RE("tableCellAttributes")))?TOKEN_STYLES.attributes:tokenStyles(state)},tableText:function(stream,state){return stream.match(RE("tableText"))?tokenStyles(state):"|"===stream.peek()?(state.mode=Modes.tableCell,tokenStyles(state)):handlePhraseModifier(stream,state,stream.next())}};let textile={name:"textile",startState:function(){return{mode:Modes.newLayout}},token:function(stream,state){if(stream.sol()){var state1;(state1=state).mode=Modes.newLayout,state1.tableHeading=!1,"definitionList"===state1.layoutType&&state1.spanningLayout&&stream.match(RE("definitionListEnd"),!1)&&(state1.spanningLayout=!1)}return state.mode(stream,state)},blankLine:function(state){var spanningLayout=state.spanningLayout,type=state.layoutType;for(var key in state)state.hasOwnProperty(key)&&delete state[key];state.mode=Modes.newLayout,spanningLayout&&(state.layoutType=type,state.spanningLayout=!0)}}}}]);