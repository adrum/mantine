"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[59380,91873],{59380:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var a=t(99126),s=t(25265),r=t(91873),c=t(70686),i=t(8178),o=t(58903);let u=Object.freeze({displayName:"Ruby Haml",fileTypes:["haml","html.haml"],foldingStartMarker:"^\\s*([-%#\\:\\.\\w\\=].*)\\s$",foldingStopMarker:"^\\s*$",name:"haml",patterns:[{begin:"^(\\s*)==",contentName:"string.quoted.double.ruby",end:"$\\n*",patterns:[{include:"#interpolated_ruby"}]},{begin:"^(\\s*):ruby",end:"^(?!\\1\\s+|$\\n*)",name:"source.ruby.embedded.filter.haml",patterns:[{include:"source.ruby"}]},{captures:{1:{name:"punctuation.definition.prolog.haml"}},match:"^(!!!)($|\\s.*)",name:"meta.prolog.haml"},{begin:"^(\\s*):javascript",end:"^(?!\\1\\s+|$\\n*)",name:"js.haml",patterns:[{include:"source.js"}]},{begin:"^(\\s*)%script",end:"^(?!\\1\\s+|$\\n*)",name:"js.inline.haml",patterns:[{include:"source.js"}]},{begin:"^(\\s*):ruby$",end:"^(?!\\1\\s+|$\\n*)",name:"source.ruby.embedded.filter.haml",patterns:[{include:"source.ruby"}]},{captures:{1:{name:"punctuation.section.comment.haml"}},match:"^(\\s*)(\\/\\[[^\\]].*?$\\n?)",name:"comment.line.slash.haml"},{begin:"^(\\s*)(\\-\\#|\\/|\\-\\s*\\/\\*+)",beginCaptures:{2:{name:"punctuation.section.comment.haml"}},end:"^(?!\\1\\s+|\\n)",name:"comment.block.haml",patterns:[{include:"text.haml"}]},{begin:"^\\s*(?:((%)([-\\w:]+))|(?=\\.|#))",captures:{1:{name:"meta.tag.haml"},2:{name:"punctuation.definition.tag.haml"},3:{name:"entity.name.tag.haml"}},end:"$|(?!\\.|#|\\{|\\(|\\[|&amp;|=|-|~|!=|&=|/)",patterns:[{begin:"==",contentName:"string.quoted.double.ruby",end:"$\\n?",patterns:[{include:"#interpolated_ruby"}]},{captures:{1:{name:"entity.other.attribute-name.class"}},match:"(\\.[\\w\\-\\:]+)",name:"meta.selector.css"},{captures:{1:{name:"entity.other.attribute-name.id"}},match:"(#[\\w-]+)",name:"meta.selector.css"},{begin:"(?<!\\#)\\{(?=.*(,|(do)|\\{|\\}|\\||(\\#.*)|\\R)\\s*)",end:"\\s*\\}(?!\\s*\\,)(?!\\s*\\|)(?!\\#\\{.*\\})",name:"meta.section.attributes.haml",patterns:[{include:"source.ruby"},{include:"#continuation"},{include:"#rubyline"}]},{begin:"\\(",end:"\\)",name:"meta.section.attributes.plain.haml",patterns:[{match:"([\\w-]+)",name:"constant.other.symbol.ruby"},{match:"\\=",name:"punctuation"},{include:"#variables"},{begin:'"',end:'"',name:"string.quoted.double.ruby",patterns:[{match:"\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.)",name:"constant.character.escape.ruby"},{include:"#interpolated_ruby"}]},{include:"#interpolated_ruby"}]},{begin:"\\[(?=.+(,|\\[|\\]|\\||(\\#.*))\\s*)",end:"\\s*\\](?!.*(?!\\#\\[)\\])",name:"meta.section.object.haml",patterns:[{include:"source.ruby"},{include:"#continuation"},{include:"#rubyline"}]},{include:"#interpolated_ruby_line"},{include:"#rubyline"},{match:"/",name:"punctuation.terminator.tag.haml"}]},{begin:"^(\\s*):(ruby|opal)$",end:"^(?!\\1\\s+|$\\n*)",name:"source.ruby.embedded.filter.haml",patterns:[{include:"source.ruby"}]},{begin:"^(\\s*):ruby$",end:"^(?!\\1\\s+|$\\n*)",name:"source.ruby.embedded.filter.haml",patterns:[{include:"source.ruby"}]},{begin:"^(\\s*):(style|sass)$",end:"^(?=\\1\\s+|$\\n*)",name:"source.sass.embedded.filter.haml",patterns:[{include:"source.sass"}]},{begin:"^(\\s*):coffee(script)?",end:"^(?!\\1\\s+|$\\n*)",name:"source.coffee.embedded.filter.haml",patterns:[{include:"source.coffee"}]},{begin:"^(\\s*):plain$",end:"^(?=\\1\\s+|$\\n*)",name:"text.plain.embedded.filter.haml",patterns:[{include:"text.plain"}]},{begin:"^(\\s*)(:ruby)",beginCaptures:{2:{name:"keyword.control.filter.haml"}},end:"(?m:(?<=\\n)(?!\\1\\s+|$\\n*))",name:"source.ruby.embedded.filter.haml",patterns:[{include:"source.ruby"}]},{begin:"^(\\s*)(:sass)",beginCaptures:{2:{name:"keyword.control.filter.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"source.embedded.filter.sass",patterns:[{include:"source.sass"}]},{begin:"^(\\s*):(styles|sass)$",end:"^(?=\\1\\s+|$\\n*)",name:"source.sass.embedded.filter.haml",patterns:[{include:"source.sass"}]},{begin:"^(\\s*):plain$",end:"^(?=\\1\\s+|$\\n*)",name:"text.plain.embedded.filter.haml",patterns:[{include:"text.plain"}]},{captures:{1:{name:"meta.escape.haml"}},match:"^\\s*(\\.)"},{begin:"^\\s*(?==|-|~|!=|&=)",end:"$",patterns:[{include:"#interpolated_ruby_line"},{include:"#rubyline"}]},{begin:"^(\\s*)(:php)",captures:{2:{name:"entity.name.tag.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"meta.embedded.php",patterns:[{include:"text.html.php#language"}]},{begin:"^(\\s*)(:markdown)",captures:{2:{name:"entity.name.tag.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"meta.embedded.markdown",patterns:[{include:"text.html.markdown"}]},{begin:"^(\\s*)(:(css|styles?))$",captures:{2:{name:"entity.name.tag.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"meta.embedded.css",patterns:[{include:"source.css"}]},{begin:"^(\\s*)(:sass)$",captures:{2:{name:"entity.name.tag.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"meta.embedded.sass",patterns:[{include:"source.sass"}]},{begin:"^(\\s*)(:scss)$",captures:{2:{name:"entity.name.tag.haml"}},end:"^(?!\\1\\s+|$\\n*)",name:"meta.embedded.scss",patterns:[{include:"source.scss"}]}],repository:{continuation:{captures:{1:{name:"punctuation.separator.continuation.haml"}},match:"(\\|)\\s*\\n"},interpolated_ruby:{patterns:[{captures:{0:{name:"punctuation.section.embedded.ruby"},1:{name:"source.ruby.embedded.source.empty"}},match:"#\\{(\\})",name:"source.ruby.embedded.source"},{begin:"#\\{",captures:{0:{name:"punctuation.section.embedded.ruby"}},end:"(\\})",name:"source.ruby.embedded.source",patterns:[{include:"#nest_curly_and_self"},{include:"source.ruby"}]},{include:"#variables"}]},interpolated_ruby_line:{begin:"!?==",contentName:"string.source.ruby.embedded.haml",end:"$",name:"meta.line.ruby.interpolated.haml",patterns:[{include:"#interpolated_ruby"},{include:"source.ruby#escaped_char"}]},nest_curly_and_self:{patterns:[{begin:"\\{",captures:{0:{name:"punctuation.section.scope.ruby"}},end:"\\}",patterns:[{include:"#nest_curly_and_self"},{include:"source.ruby"}]}]},rubyline:{begin:"(&amp|!)?(=|-|~)",contentName:"source.ruby.embedded.haml",end:"((do|\\{)( \\|[.*]+\\|)?)$|$|^(?!.*\\|\\s*)$\\n?",endCaptures:{1:{name:"source.ruby.embedded.html"},2:{name:"keyword.control.ruby.start-block"}},name:"meta.line.ruby.haml",patterns:[{captures:{1:{name:"keyword.control.php"}},match:"\\s+((elseif|foreach|switch|declare|default|use))(?=\\s|\\()"},{captures:{1:{name:"keyword.control.import.include.php"}},match:"\\s+(require_once|include_once)(?=\\s|\\()"},{match:"\\s+(catch|try|throw|exception|finally|die)(?=\\s|\\(|\\n*)",name:"keyword.control.exception.php"},{captures:{1:{name:"storage.type.function.php"}},match:"\\s+(function\\s*)((?=\\())"},{captures:{1:{name:"keyword.control.php"}},match:"\\s+(use\\s*)((?=\\())"},{match:"(\\||,|<|do|\\{)\\s*(\\#.*)?$\\n*",name:"source.ruby",patterns:[{include:"#rubyline"}]},{comment:"Hack to let ruby comments work in this context properly",match:"#.*$",name:"comment.line.number-sign.ruby"},{include:"source.ruby"},{include:"#continuation"}]},variables:{patterns:[{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.instance.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#@@)[a-zA-Z_]\\w*",name:"variable.other.readwrite.class.ruby"},{captures:{1:{name:"punctuation.definition.variable.ruby"}},match:"(#\\$)[a-zA-Z_]\\w*",name:"variable.other.readwrite.global.ruby"}]}},scopeName:"text.haml",embeddedLangs:["ruby","javascript","sass","coffee","markdown","css"]});var l=[...a.default,...s.default,...r.default,...c.default,...i.default,...o.default,u]},91873:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=[Object.freeze({displayName:"Sass",fileTypes:["sass"],foldingStartMarker:"/\\*|^#|^\\*|^\\b|*#?region|^\\.",foldingStopMarker:"\\*/|*#?endregion|^\\s*$",name:"sass",patterns:[{begin:"^(\\s*)(/\\*)",end:"(\\*/)|^(?!\\s\\1)",name:"comment.block.sass",patterns:[{include:"#comment-tag"},{include:"#comment-param"}]},{match:"^[\\t ]*/?//[\\t ]*[SRI][\\t ]*$",name:"keyword.other.sass.formatter.action"},{begin:"^[\\t ]*//[\\t ]*(import)[\\t ]*(css-variables)[\\t ]*(from)",captures:{1:{name:"keyword.control"},2:{name:"variable"},3:{name:"keyword.control"}},end:"$\\n?",name:"comment.import.css.variables",patterns:[{include:"#import-quotes"}]},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#placeholder-selector"},{begin:"\\$[a-zA-Z0-9_-]+(?=:)",captures:{0:{name:"variable.other.name"}},end:"$\\n?|(?=\\)\\s\\)|\\)\\n)",name:"sass.script.maps",patterns:[{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#reserved-words"},{include:"#parent-selector"},{include:"#property-value"},{include:"#semicolon"},{include:"#dotdotdot"}]},{include:"#variable-root"},{include:"#numeric"},{include:"#unit"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#dotdotdot"},{begin:"@include|\\+(?!\\W|\\d)",captures:{0:{name:"keyword.control.at-rule.css.sass"}},end:"(?=\\n|\\()",name:"support.function.name.sass.library"},{begin:"^(@use)",captures:{0:{name:"keyword.control.at-rule.css.sass.use"}},end:"(?=\\n)",name:"sass.use",patterns:[{match:"as|with",name:"support.type.css.sass"},{include:"#numeric"},{include:"#unit"},{include:"#variable-root"},{include:"#rgb-value"},{include:"#comma"},{include:"#parenthesis-open"},{include:"#parenthesis-close"},{include:"#colon"},{include:"#import-quotes"}]},{begin:"^@import(.*?)( as.*)?$",captures:{1:{name:"constant.character.css.sass"},2:{name:"invalid"}},end:"(?=\\n)",name:"keyword.control.at-rule.use"},{begin:"@mixin|^[\\t ]*=|@function",captures:{0:{name:"keyword.control.at-rule.css.sass"}},end:"$\\n?|(?=\\()",name:"support.function.name.sass",patterns:[{match:"[\\w-]+",name:"entity.name.function"}]},{begin:"@",end:"$\\n?|\\s(?!(all|braille|embossed|handheld|print|projection|screen|speech|tty|tv|if|only|not)(\\s|,))",name:"keyword.control.at-rule.css.sass"},{begin:"(?<!\\-|\\()\\b(a|abbr|acronym|address|applet|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|embed|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|picture|pre|progress|q|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video|main|svg|rect|ruby|center|circle|ellipse|line|polyline|polygon|path|text|u|slot)\\b(?!-|\\)|:\\s)|&",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\#|\\[|>|-|_)",name:"entity.name.tag.css.sass.symbol",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"#",end:"$\\n?|(?=\\s|,|\\(|\\)|\\.|\\[|>)",name:"entity.other.attribute-name.id.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\.|(?<=&)(-|_)",end:"$\\n?|(?=\\s|,|\\(|\\)|\\[|>)",name:"entity.other.attribute-name.class.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{begin:"\\[",end:"\\]",name:"entity.other.attribute-selector.sass",patterns:[{include:"#double-quoted"},{include:"#single-quoted"},{match:"\\^|\\$|\\*|~",name:"keyword.other.regex.sass"}]},{match:"^((?<=\\]|\\)|not\\(|\\*|>|>\\s)|\n*):[a-z:-]+|(::|:-)[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.sass"},{include:"#module"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{begin:":",end:"$\\n?|(?=\\s\\(|and\\(|\\),)",name:"meta.property-list.css.sass.prop",patterns:[{match:"(?<=:)[a-z-]+\\s",name:"support.type.property-name.css.sass.prop.name"},{include:"#double-slash"},{include:"#double-quoted"},{include:"#single-quoted"},{include:"#interpolation"},{include:"#curly-brackets"},{include:"#variable"},{include:"#rgb-value"},{include:"#numeric"},{include:"#unit"},{include:"#module"},{match:"--.+?(?=\\))",name:"variable.css"},{match:"[\\w-]*\\(",name:"entity.name.function"},{match:"\\)",name:"entity.name.function.close"},{include:"#flag"},{include:"#comma"},{include:"#semicolon"},{include:"#function"},{include:"#function-content"},{include:"#operator"},{include:"#parent-selector"},{include:"#property-value"}]},{include:"#rgb-value"},{include:"#function"},{include:"#function-content"},{begin:"(?<=})(?!\\n|\\(|\\)|[a-zA-Z0-9_-]+:)",end:"\\s|(?=,|\\.|\\[|\\)|\\n)",name:"entity.name.tag.css.sass",patterns:[{include:"#interpolation"},{include:"#pseudo-class"}]},{include:"#operator"},{match:"[a-z-]+((?=:|#{))",name:"support.type.property-name.css.sass.prop.name"},{include:"#reserved-words"},{include:"#property-value"}],repository:{colon:{match:":",name:"meta.property-list.css.sass.colon"},comma:{match:"\\band\\b|\\bor\\b|,",name:"comment.punctuation.comma.sass"},"comment-param":{match:"\\@(\\w+)",name:"storage.type.class.jsdoc"},"comment-tag":{begin:"(?<={{)",end:"(?=}})",name:"comment.tag.sass"},"curly-brackets":{match:"{|}",name:"invalid"},dotdotdot:{match:"\\.\\.\\.",name:"variable.other"},"double-quoted":{begin:'"',end:'"',name:"string.quoted.double.css.sass",patterns:[{include:"#quoted-interpolation"}]},"double-slash":{begin:"//",end:"$\\n?",name:"comment.line.sass",patterns:[{include:"#comment-tag"}]},flag:{match:"!(important|default|optional|global)",name:"keyword.other.important.css.sass"},function:{match:"(?<=[\\s|\\(|,|:])(?!url|format|attr)[a-zA-Z0-9_-][\\w-]*(?=\\()",name:"support.function.name.sass"},"function-content":{begin:"(?<=url\\(|format\\(|attr\\()",end:".(?=\\))",name:"string.quoted.double.css.sass"},"import-quotes":{match:"[\"']?\\.{0,2}[\\w/]+[\"']?",name:"constant.character.css.sass"},interpolation:{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"},{include:"#double-quoted"},{include:"#single-quoted"}]},module:{captures:{1:{name:"constant.character.module.name"},2:{name:"constant.numeric.module.dot"}},match:"([\\w-]+?)(\\.)",name:"constant.character.module"},numeric:{match:"(-|\\.)?[0-9]+(\\.[0-9]+)?",name:"constant.numeric.css.sass"},operator:{match:"\\+|\\s-\\s|\\s-(?=\\$)|(?<=\\()-(?=\\$)|\\s-(?=\\()|\\*|/|%|=|!|<|>|~",name:"keyword.operator.sass"},"parent-selector":{match:"&",name:"entity.name.tag.css.sass"},"parenthesis-close":{match:"\\)",name:"entity.name.function.parenthesis.close"},"parenthesis-open":{match:"\\(",name:"entity.name.function.parenthesis.open"},"placeholder-selector":{begin:"(?<!\\d)%(?!\\d)",end:"$\\n?|\\s",name:"entity.other.inherited-class.placeholder-selector.css.sass"},"property-value":{match:"[a-zA-Z0-9_-]+",name:"meta.property-value.css.sass support.constant.property-value.css.sass"},"pseudo-class":{match:":[a-z:-]+",name:"entity.other.attribute-name.pseudo-class.css.sass"},"quoted-interpolation":{begin:"#{",end:"}",name:"support.function.interpolation.sass",patterns:[{include:"#variable"},{include:"#numeric"},{include:"#operator"},{include:"#unit"},{include:"#comma"}]},"reserved-words":{match:"\\b(false|from|in|not|null|through|to|true)\\b",name:"support.type.property-name.css.sass"},"rgb-value":{match:"(#)([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\\b",name:"constant.language.color.rgb-value.css.sass"},semicolon:{match:";",name:"invalid"},"single-quoted":{begin:"'",end:"'",name:"string.quoted.single.css.sass",patterns:[{include:"#quoted-interpolation"}]},unit:{match:"(?<=[\\d]|})(ch|cm|deg|dpcm|dpi|dppx|em|ex|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vmax|vmin|vw|fr|%)",name:"keyword.control.unit.css.sass"},variable:{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.value"},"variable-root":{match:"\\$[a-zA-Z0-9_-]+",name:"variable.other.root"}},scopeName:"source.sass"})]}}]);