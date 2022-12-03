"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5753],{35753:function(e,t,n){n.r(t),n.d(t,{xQuery:function(){return y}});var r=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"axis_specifier",style:"qualifier"},a={",":{type:"punctuation",style:null}},i=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],s=0,o=i.length;s<o;s++)a[i[s]]=e(i[s]);for(var c=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"],s=0,o=c.length;s<o;s++)a[c[s]]=n;for(var u=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"],s=0,o=u.length;s<o;s++)a[u[s]]=t;for(var l=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"],s=0,o=l.length;s<o;s++)a[l[s]]=r;return a}();function a(e,t,n){return t.tokenize=n,n(e,t)}function i(e,t){var n=e.next(),m=!1,y='"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1);if("<"==n){if(e.match("!--",!0))return a(e,t,l);if(e.match("![CDATA",!1))return t.tokenize=f,"tag";if(e.match("?",!1))return a(e,t,p);var h,k=e.eat("/");e.eatSpace();for(var v,b="";v=e.eat(/[^\s\u00a0=<>\"\'\/?]/);)b+=v;return a(e,t,(h=b,function(e,t){return(e.eatSpace(),k&&e.eat(">"))?(d(t),t.tokenize=i,"tag"):(e.eat("/")||g(t,{type:"tag",name:h,tokenize:i}),e.eat(">")?t.tokenize=i:t.tokenize=u,"tag")}))}if("{"==n)return g(t,{type:"codeblock"}),null;if("}"==n)return d(t),null;if(x(t,"tag"))return">"==n?"tag":"/"==n&&e.eat(">")?(d(t),"tag"):"variable";if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===n&&e.eat(":"))return g(t,{type:"comment"}),a(e,t,s);if(!y&&('"'===n||"'"===n))return a(e,t,o(n));if("$"===n)return a(e,t,c);if(":"===n&&e.eat("="))return"keyword";if("("===n)return g(t,{type:"paren"}),null;if(")"===n)return d(t),null;if("["===n)return g(t,{type:"bracket"}),null;if("]"===n)return d(t),null;var z=r.propertyIsEnumerable(n)&&r[n];if(y&&'"'===n)for(;'"'!==e.next(););if(y&&"'"===n)for(;"'"!==e.next(););z||e.eatWhile(/[\w\$_-]/);var w=e.eat(":");!e.eat(":")&&w&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(m=!0);var I=e.current();return(z=r.propertyIsEnumerable(I)&&r[I],m&&!z&&(z={type:"function_call",style:"def"}),x(t,"xmlconstructor"))?(d(t),"variable"):(("element"==I||"attribute"==I||"axis_specifier"==z.type)&&g(t,{type:"xmlconstructor"}),z?z.style:"variable")}function s(e,t){for(var n,r=!1,a=!1,i=0;n=e.next();){if(")"==n&&r){if(i>0)i--;else{d(t);break}}else":"==n&&a&&i++;r=":"==n,a="("==n}return"comment"}function o(e,t){return function(n,r){var a;if(x(r,"string")&&n.current()==e)return d(r),t&&(r.tokenize=t),"string";if(g(r,{type:"string",name:e,tokenize:o(e,t)}),n.match("{",!1)&&m(r))return r.tokenize=i,"string";for(;a=n.next();){if(a==e){d(r),t&&(r.tokenize=t);break}if(n.match("{",!1)&&m(r)){r.tokenize=i;break}}return"string"}}function c(e,t){var n=/[\w\$_-]/;if(e.eat('"')){for(;'"'!==e.next(););e.eat(":")}else e.eatWhile(n),e.match(":=",!1)||e.eat(":");return e.eatWhile(n),t.tokenize=i,"variable"}function u(e,t){var n=e.next();return"/"==n&&e.eat(">")?(m(t)&&d(t),x(t,"tag")&&d(t),"tag"):">"==n?(m(t)&&d(t),"tag"):"="==n?null:'"'==n||"'"==n?a(e,t,o(n,u)):(m(t)||g(t,{type:"attribute",tokenize:u}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(d(t),t.tokenize=i),"attribute")}function l(e,t){for(var n;n=e.next();)if("-"==n&&e.match("->",!0))return t.tokenize=i,"comment"}function f(e,t){for(var n;n=e.next();)if("]"==n&&e.match("]",!0))return t.tokenize=i,"comment"}function p(e,t){for(var n;n=e.next();)if("?"==n&&e.match(">",!0))return t.tokenize=i,"processingInstruction"}function m(e){return x(e,"attribute")}function x(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function g(e,t){e.stack.push(t)}function d(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||i}let y={name:"xquery",startState:function(){return{tokenize:i,cc:[],stack:[]}},token:function(e,t){return e.eatSpace()?null:t.tokenize(e,t)},languageData:{commentTokens:{block:{open:"(:",close:":)"}}}}}}]);