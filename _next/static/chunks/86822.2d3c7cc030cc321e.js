"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86822],{86822:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});var a=[Object.freeze({displayName:"Shell",name:"shellscript",patterns:[{include:"#initial_context"}],repository:{alias_statement:{begin:"(alias)[ \\t]*+[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))",beginCaptures:{1:{name:"storage.type.alias.shell"},2:{name:"storage.modifier.$2.shell"},3:{name:"variable.other.assignment.shell"},4:{name:"punctuation.definition.array.access.shell"},5:{name:"variable.other.assignment.shell"},6:{name:"punctuation.definition.array.access.shell"},7:{name:"keyword.operator.assignment.shell"},8:{name:"keyword.operator.assignment.compound.shell"},9:{name:"keyword.operator.assignment.compound.shell"}},end:"(?:(?= |\\t|$)|(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n))",endCaptures:{1:{name:"punctuation.terminator.statement.semicolon.shell"},2:{name:"punctuation.separator.statement.and.shell"},3:{name:"punctuation.separator.statement.or.shell"},4:{name:"punctuation.separator.statement.background.shell"}},name:"meta.expression.assignment.shell",patterns:[{include:"#normal_statement_context"}]},argument:{begin:"[ \\t]++(?!(?:&|\\||\\(|\\[|#|\\n|$|;))",beginCaptures:{},end:"(?= |\\t|;|\\||&|$|\\n|\\)|\\`)",endCaptures:{},name:"meta.argument.shell",patterns:[{include:"#argument_context"},{include:"#line_continuation"}]},argument_context:{patterns:[{captures:{1:{name:"string.unquoted.argument.shell",patterns:[{match:"\\*",name:"variable.language.special.wildcard.shell"},{include:"#variable"},{include:"#numeric_literal"},{captures:{1:{name:"constant.language.$1.shell"}},match:"(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"}]}},match:"[ \\t]*+([^ \\t\\n'&;<>\\(\\)\\$`\\\\\"\\|]+(?!>))"},{include:"#normal_statement_context"}]},assignment:{patterns:[{begin:"[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))[ \\t]*+(\\()",beginCaptures:{1:{name:"storage.modifier.$1.shell"},2:{name:"variable.other.assignment.shell"},3:{name:"punctuation.definition.array.access.shell"},4:{name:"variable.other.assignment.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"keyword.operator.assignment.shell"},7:{name:"keyword.operator.assignment.compound.shell"},8:{name:"keyword.operator.assignment.compound.shell"},9:{name:"punctuation.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.shell"}},name:"meta.expression.assignment.shell",patterns:[{include:"#comment"},{include:"#argument_context"}]},{begin:"[ \\t]*+(?:((?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$))[ \\t]*+)?((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?:(\\[)((?:(?:(?:\\$)?(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)|@)|\\*))(\\]))?(?:(?:(\\=)|(\\+\\=))|(\\-\\=))",beginCaptures:{1:{name:"storage.modifier.$1.shell"},2:{name:"variable.other.assignment.shell"},3:{name:"punctuation.definition.array.access.shell"},4:{name:"variable.other.assignment.shell"},5:{name:"punctuation.definition.array.access.shell"},6:{name:"keyword.operator.assignment.shell"},7:{name:"keyword.operator.assignment.compound.shell"},8:{name:"keyword.operator.assignment.compound.shell"}},end:"(?:(?= |\\t|$)|(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n))",endCaptures:{1:{name:"punctuation.terminator.statement.semicolon.shell"},2:{name:"punctuation.separator.statement.and.shell"},3:{name:"punctuation.separator.statement.or.shell"},4:{name:"punctuation.separator.statement.background.shell"}},name:"meta.expression.assignment.shell",patterns:[{include:"#comment"},{include:"#argument_context"}]}]},basic_command_name:{captures:{1:{name:"storage.modifier.$1.shell"},2:{name:"entity.name.function.call.shell entity.name.command.shell",patterns:[{match:"(?<!\\w)(?:continue|return|break)(?!\\w)",name:"keyword.control.$0.shell"},{match:"(?<!\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/)(?!\\w)",name:"support.function.builtin.shell"},{include:"#variable"}]}},match:"(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\\n|$|;|[ \\	]))(?!foreach\\\b(?!\\/)|select\\\b(?!\\/)|repeat\\\b(?!\\/)|until\\\b(?!\\/)|while\\\b(?!\\/)|case\\\b(?!\\/)|done\\\b(?!\\/)|elif\\\b(?!\\/)|else\\\b(?!\\/)|esac\\\b(?!\\/)|then\\\b(?!\\/)|for\\\b(?!\\/)|end\\\b(?!\\/)|in\\\b(?!\\/)|fi\\\b(?!\\/)|do\\\b(?!\\/)|if\\\b(?!\\/))(?:((?<=^|;|&|[ \\	])(?:readonly|declare|typeset|export|local)(?=[ \\	]|;|&|$))|((?!\"|'|\\\\\\\n?$)[^!'\" \\	\\\n\\\r]+?))(?:(?= |\\	)|(?=;|\\||&|\\\n|\\)|\\`|\\{|\\}|[ \\	]*#|\\])(?<!\\\\))",name:"meta.statement.command.name.basic.shell"},block_comment:{begin:"\\s*+(\\/\\*)",beginCaptures:{1:{name:"punctuation.definition.comment.begin.shell"}},end:"\\*\\/",endCaptures:{0:{name:"punctuation.definition.comment.end.shell"}},name:"comment.block.shell"},boolean:{match:"\\b(?:true|false)\\b",name:"constant.language.$0.shell"},"case-clause":{patterns:[{begin:"(?=\\S)",end:";;&?|;&",endCaptures:{0:{name:"punctuation.terminator.case-clause.shell"}},name:"meta.scope.case-clause.shell",patterns:[{begin:"\\(|(?=\\S)",beginCaptures:{0:{name:"punctuation.definition.case-pattern.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.case-pattern.shell"}},name:"meta.scope.case-pattern.shell",patterns:[{match:"\\|",name:"punctuation.separator.pipe-sign.shell"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#pathname"}]},{begin:"(?<=\\))",end:"(?=;;&?|;&)",name:"meta.scope.case-clause-body.shell",patterns:[{include:"#initial_context"}]}]}]},comment:{captures:{1:{name:"comment.line.number-sign.shell meta.shebang.shell"},2:{name:"punctuation.definition.comment.shebang.shell"},3:{name:"comment.line.number-sign.shell"},4:{name:"punctuation.definition.comment.shell"}},match:"(?:^|[ \\t]++)(?:((#!).*)|((#).*))"},comments:{patterns:[{include:"#block_comment"},{include:"#line_comment"}]},"compound-command":{patterns:[{begin:"\\[{1,2}",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]{1,2}",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical-expression"},{include:"#initial_context"}]},{begin:"\\({2}",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"\\){2}",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.other.math.shell",patterns:[{include:"#math"}]},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.subshell.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.subshell.shell"}},name:"meta.scope.subshell.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=\\s|^){(?=\\s|$)",beginCaptures:{0:{name:"punctuation.definition.group.shell"}},end:"(?<=^|;)\\s*(})",endCaptures:{1:{name:"punctuation.definition.group.shell"}},name:"meta.scope.group.shell",patterns:[{include:"#initial_context"}]}]},continuation_of_double_quoted_command_name:{begin:'\\G(?<=")',beginCaptures:{},contentName:"meta.statement.command.name.continuation string.quoted.double entity.name.function.call entity.name.command",end:'"',endCaptures:{0:{name:"string.quoted.double.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}},patterns:[{match:'\\\\[\\$\\n`"\\\\]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},continuation_of_single_quoted_command_name:{begin:"\\G(?<=')",beginCaptures:{},contentName:"meta.statement.command.name.continuation string.quoted.single entity.name.function.call entity.name.command",end:"'",endCaptures:{0:{name:"string.quoted.single.shell punctuation.definition.string.end.shell entity.name.function.call.shell entity.name.command.shell"}}},custom_command_names:{patterns:[]},custom_commands:{patterns:[]},double_quote_context:{patterns:[{match:'\\\\[\\$`"\\\\\\n]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},double_quote_escape_char:{match:'\\\\[\\$`"\\\\\\n]',name:"constant.character.escape.shell"},function_definition:{applyEndPatternLast:1,begin:"[ \\t]*+(?:(\\bfunction\\b)[ \\t]*+([^ \\t\\n\\r\\(\\)=]+)(?:(\\()[ \\t]*+(\\)))?|([^ \\t\\n\\r\\(\\)=]+)[ \\t]*+(\\()[ \\t]*+(\\)))",beginCaptures:{1:{name:"storage.type.function.shell"},2:{name:"entity.name.function.shell"},3:{name:"punctuation.definition.arguments.shell"},4:{name:"punctuation.definition.arguments.shell"},5:{name:"entity.name.function.shell"},6:{name:"punctuation.definition.arguments.shell"},7:{name:"punctuation.definition.arguments.shell"}},end:"(?<=\\}|\\))",endCaptures:{},name:"meta.function.shell",patterns:[{match:"\\G(?:\\t| |\\n)"},{begin:"\\{",beginCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},end:"\\}",endCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},name:"meta.function.body.shell",patterns:[{include:"#initial_context"}]},{begin:"\\(",beginCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.group.shell punctuation.section.function.definition.shell"}},name:"meta.function.body.shell",patterns:[{include:"#initial_context"}]}]},heredoc:{patterns:[{begin:"((?<!<)<<-)[ \\	]*+(\"|')[ \\	]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|\"|')(?:\\2)(.*)",beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{},3:{name:"punctuation.definition.string.heredoc.shell"},4:{patterns:[{include:"#normal_statement_context"}]}},contentName:"string.quoted.heredoc.indent",end:"^\\t*(?:\\3)(?=\\s|;|&|$)",endCaptures:{0:{name:"punctuation.definition.string.heredoc.shell"}},patterns:[]},{begin:"((?<!<)<<(?!<))[ \\	]*+(\"|')[ \\	]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|\"|')(?:\\2)(.*)",beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{},3:{name:"punctuation.definition.string.heredoc.shell"},4:{patterns:[{include:"#normal_statement_context"}]}},contentName:"string.quoted.heredoc.no-indent",end:"^(?:\\3)(?=\\s|;|&|$)",endCaptures:{0:{name:"punctuation.definition.string.heredoc.shell"}},patterns:[]},{begin:"((?<!<)<<-)[ \\	]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|\"|')(.*)",beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.shell"},3:{patterns:[{include:"#normal_statement_context"}]}},contentName:"string.unquoted.heredoc.indent",end:"^\\t*(?:\\2)(?=\\s|;|&|$)",endCaptures:{0:{name:"punctuation.definition.string.heredoc.shell"}},patterns:[{include:"#double_quote_escape_char"},{include:"#variable"},{include:"#interpolation"}]},{begin:"((?<!<)<<(?!<))[ \\	]*+((?<!\\w)[a-zA-Z_0-9-]+(?!\\w))(?=\\s|;|&|<|\"|')(.*)",beginCaptures:{1:{name:"keyword.operator.heredoc.shell"},2:{name:"punctuation.definition.string.heredoc.shell"},3:{patterns:[{include:"#normal_statement_context"}]}},contentName:"string.unquoted.heredoc.no-indent",end:"^(?:\\2)(?=\\s|;|&|$)",endCaptures:{0:{name:"punctuation.definition.string.heredoc.shell"}},patterns:[{include:"#double_quote_escape_char"},{include:"#variable"},{include:"#interpolation"}]}]},herestring:{patterns:[{begin:"(<<<)\\s*(('))",beginCaptures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.quoted.single.shell"},3:{name:"punctuation.definition.string.begin.shell"}},contentName:"string.quoted.single.shell",end:"(')",endCaptures:{0:{name:"string.quoted.single.shell"},1:{name:"punctuation.definition.string.end.shell"}},name:"meta.herestring.shell"},{begin:'(<<<)\\s*(("))',beginCaptures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.quoted.double.shell"},3:{name:"punctuation.definition.string.begin.shell"}},contentName:"string.quoted.double.shell",end:'(")',endCaptures:{0:{name:"string.quoted.double.shell"},1:{name:"punctuation.definition.string.end.shell"}},name:"meta.herestring.shell",patterns:[{include:"#double_quote_context"}]},{captures:{1:{name:"keyword.operator.herestring.shell"},2:{name:"string.unquoted.herestring.shell",patterns:[{include:"#initial_context"}]}},match:"(<<<)\\s*(([^\\s)\\\\]|\\\\.)+)",name:"meta.herestring.shell"}]},initial_context:{patterns:[{include:"#comment"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#logical_expression_double"},{include:"#logical_expression_single"},{include:"#misc_ranges"},{include:"#loop"},{include:"#function_definition"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#keyword"},{include:"#alias_statement"},{include:"#normal_statement"},{include:"#string"},{include:"#support"}]},inline_comment:{captures:{1:{name:"comment.block.shell punctuation.definition.comment.begin.shell"},2:{name:"comment.block.shell"},3:{patterns:[{match:"\\*\\/",name:"comment.block.shell punctuation.definition.comment.end.shell"},{match:"\\*",name:"comment.block.shell"}]}},match:"(\\/\\*)((?:[^\\*]|(?:\\*)++[^\\/])*+((?:\\*)++\\/))"},interpolation:{patterns:[{begin:"\\$\\({2}",beginCaptures:{0:{name:"punctuation.definition.evaluation.arithmetic.begin.shell"}},end:"\\)\\s*\\)",endCaptures:{0:{name:"punctuation.definition.evaluation.arithmetic.end.shell"}},name:"string.other.math.shell",patterns:[{include:"#math"}]},{begin:"`",beginCaptures:{0:{name:"punctuation.definition.evaluation.backticks.shell"}},end:"`",endCaptures:{0:{name:"punctuation.definition.evaluation.backticks.shell"}},name:"string.interpolated.backtick.shell",patterns:[{match:"\\\\[`\\\\$]",name:"constant.character.escape.shell"},{begin:"(?<=\\W)(?=#)(?!#{)",beginCaptures:{1:{name:"punctuation.whitespace.comment.leading.shell"}},end:"(?!\\G)",patterns:[{begin:"#",beginCaptures:{0:{name:"punctuation.definition.comment.shell"}},end:"(?=`)",name:"comment.line.number-sign.shell"}]},{include:"#initial_context"}]},{begin:"\\$\\(",beginCaptures:{0:{name:"punctuation.definition.evaluation.parens.begin.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.evaluation.parens.end.shell"}},name:"string.interpolated.dollar.shell",patterns:[{include:"#initial_context"}]}]},keyword:{patterns:[{match:"(?<=^|;|&| |\\t)(?:continue|foreach|return|select|repeat|break|until|while|case|done|elif|else|esac|then|for|end|do|if|fi|in)(?= |\\t|;|&|$)",name:"keyword.control.$0.shell"}]},line_comment:{begin:"\\s*+(\\/\\/)",beginCaptures:{1:{name:"punctuation.definition.comment.shell"}},end:"(?<=\\n)(?<!\\\\\\n)",endCaptures:{},name:"comment.line.double-slash.shell",patterns:[{include:"#line_continuation_character"}]},line_continuation:{match:"\\\\(?=\\n)",name:"constant.character.escape.line-continuation.shell"},"logical-expression":{patterns:[{comment:"do we want a special rule for ( expr )?",match:"=[=~]?|!=?|<|>|&&|\\|\\|",name:"keyword.operator.logical.shell"},{match:"(?<!\\S)-(nt|ot|ef|eq|ne|l[te]|g[te]|[a-hknoprstuwxzOGLSN])\\b",name:"keyword.operator.logical.shell"}]},logical_expression_context:{patterns:[{include:"#regex_comparison"},{include:"#logical-expression"},{include:"#logical_expression_single"},{include:"#logical_expression_double"},{include:"#comment"},{include:"#boolean"},{include:"#redirect_number"},{include:"#numeric_literal"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#pathname"},{include:"#keyword"},{include:"#support"}]},logical_expression_double:{begin:"\\[\\[",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]\\]",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical_expression_context"}]},logical_expression_single:{begin:"\\[",beginCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},end:"\\]",endCaptures:{0:{name:"punctuation.definition.logical-expression.shell"}},name:"meta.scope.logical-expression.shell",patterns:[{include:"#logical_expression_context"}]},loop:{patterns:[{begin:"(?<=^|;|&|\\s)(for)\\s+(?=\\({2})",beginCaptures:{1:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.for-loop.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)(for)\\s+(.+?)\\s+(in)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"},2:{name:"variable.other.loop.shell",patterns:[{include:"#string"}]},3:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.for-in-loop.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)(while|until)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)done(?=\\s|;|&|$|\\))",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.while-loop.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)(select)\\s+((?:[^\\s\\\\]|\\\\.)+)(?=\\s|;|&|$)",beginCaptures:{1:{name:"keyword.control.shell"},2:{name:"variable.other.loop.shell"}},end:"(?<=^|;|&|\\s)(done)(?=\\s|;|&|$|\\))",endCaptures:{1:{name:"keyword.control.shell"}},name:"meta.scope.select-block.shell",patterns:[{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)case(?=\\s|;|&|$)",beginCaptures:{0:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)esac(?=\\s|;|&|$)",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.case-block.shell",patterns:[{begin:"(?<=^|;|&|\\s)in(?=\\s|;|&|$)",beginCaptures:{0:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)(?=esac(\\s|;|&|$))",name:"meta.scope.case-body.shell",patterns:[{include:"#comment"},{include:"#case-clause"}]},{include:"#initial_context"}]},{begin:"(?<=^|;|&|\\s)if(?=\\s|;|&|$)",beginCaptures:{0:{name:"keyword.control.shell"}},end:"(?<=^|;|&|\\s)fi(?=\\s|;|&|$)",endCaptures:{0:{name:"keyword.control.shell"}},name:"meta.scope.if-block.shell",patterns:[{include:"#initial_context"}]}]},math:{patterns:[{include:"#variable"},{match:"\\+{1,2}|-{1,2}|!|~|\\*{1,2}|/|%|<[<=]?|>[>=]?|==|!=|^|\\|{1,2}|&{1,2}|\\?|\\:|,|=|[*/%+\\-&^|]=|<<=|>>=",name:"keyword.operator.arithmetic.shell"},{match:"0[xX][0-9A-Fa-f]+",name:"constant.numeric.hex.shell"},{match:"0\\d+",name:"constant.numeric.octal.shell"},{match:"\\d{1,2}#[0-9a-zA-Z@_]+",name:"constant.numeric.other.shell"},{match:"\\d+",name:"constant.numeric.integer.shell"}]},misc_ranges:{patterns:[{include:"#logical_expression_single"},{include:"#logical_expression_double"},{begin:"\\(\\(",beginCaptures:{0:{name:"punctuation.section.arithmetic.shell"}},end:"\\)\\)",endCaptures:{0:{name:"punctuation.section.arithmetic.shell"}},name:"meta.arithmetic.shell",patterns:[{include:"#math"}]},{begin:"(?<!=)\\(",beginCaptures:{0:{name:"punctuation.definition.subshell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.subshell"}},name:"meta.scope.subshell",patterns:[{include:"#initial_context"}]},{begin:"(?<![^ \\t])({)",beginCaptures:{1:{name:"punctuation.definition.group.shell"}},end:"}",endCaptures:{0:{name:"punctuation.definition.group.shell"}},name:"meta.scope.group.shell",patterns:[{include:"#initial_context"}]}]},modifiers:{match:"(?<=^|;|&|[ \\t])(?:readonly|declare|typeset|export|local)(?=[ \\t]|;|&|$)",name:"storage.modifier.$0.shell"},normal_statement:{begin:"(?!^[ \\t]*+$)(?:(?<=^until | until |\\tuntil |^while | while |\\twhile |^elif | elif |\\telif |^else | else |\\telse |^then | then |\\tthen |^do | do |\\tdo |^if | if |\\tif )|(?<=(?:^|;|\\||&|!|\\(|\\{|\\`)))[ \\t]*+(?!nocorrect\\W|nocorrect\\$|function\\W|function\\$|foreach\\W|foreach\\$|repeat\\W|repeat\\$|logout\\W|logout\\$|coproc\\W|coproc\\$|select\\W|select\\$|while\\W|while\\$|pushd\\W|pushd\\$|until\\W|until\\$|case\\W|case\\$|done\\W|done\\$|elif\\W|elif\\$|else\\W|else\\$|esac\\W|esac\\$|popd\\W|popd\\$|then\\W|then\\$|time\\W|time\\$|for\\W|for\\$|end\\W|end\\$|fi\\W|fi\\$|do\\W|do\\$|in\\W|in\\$|if\\W|if\\$)",beginCaptures:{},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.shell",patterns:[{include:"#function_definition"},{include:"#assignment"},{begin:"[ \\t]*+(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!foreach\\b(?!\\/)|select\\b(?!\\/)|repeat\\b(?!\\/)|until\\b(?!\\/)|while\\b(?!\\/)|case\\b(?!\\/)|done\\b(?!\\/)|elif\\b(?!\\/)|else\\b(?!\\/)|esac\\b(?!\\/)|then\\b(?!\\/)|for\\b(?!\\/)|end\\b(?!\\/)|in\\b(?!\\/)|fi\\b(?!\\/)|do\\b(?!\\/)|if\\b(?!\\/))(?!\\\\\\n?$)",beginCaptures:{},end:"(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\)",endCaptures:{},name:"meta.statement.command.shell",patterns:[{begin:"\\G",beginCaptures:{},end:"(?= |\\t|;|\\||&|$|\\n|\\)|\\`)",endCaptures:{},name:"meta.statement.command.name.shell",patterns:[{include:"#modifiers"},{match:"(?<!\\w)(?:continue|return|break)(?!\\w)",name:"entity.name.function.call.shell entity.name.command.shell keyword.control.$0.shell"},{match:"(?<!\\w)(?:unfunction|continue|autoload|unsetopt|bindkey|builtin|getopts|command|declare|unalias|history|unlimit|typeset|suspend|source|printf|unhash|disown|ulimit|return|which|alias|break|false|print|shift|times|umask|umask|unset|read|type|exec|eval|wait|echo|dirs|jobs|kill|hash|stat|exit|test|trap|true|let|set|pwd|cd|fg|bg|fc|:|\\.)(?!\\/)(?!\\w)",name:"entity.name.function.call.shell entity.name.command.shell support.function.builtin.shell"},{include:"#variable"},{captures:{1:{name:"entity.name.function.call.shell entity.name.command.shell"}},match:"(?<=\\G|'|\"|\\}|\\))([^ \\\n\\	\\\r\"'=;&\\|`\\)\\{]+)"},{begin:`(?:\\G|(?<! |\\t|;|\\||&|\\n|\\{|#))((?:\\$)?)((?:(")|(')))`,beginCaptures:{1:{name:"meta.statement.command.name.quoted.shell punctuation.definition.string.shell entity.name.function.call.shell entity.name.command.shell"},2:{},3:{name:"meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"},4:{name:"meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"}},end:"(?<!\\G)(?<=(?:\\2))",endCaptures:{},patterns:[{include:"#continuation_of_single_quoted_command_name"},{include:"#continuation_of_double_quoted_command_name"}]},{include:"#line_continuation"}]},{include:"#line_continuation"},{include:"#option"},{include:"#argument"},{include:"#statement_context"},{include:"#string"}]},{include:"#line_continuation"},{include:"#normal_statement_context"}]},normal_statement_context:{patterns:[{include:"#comment"},{include:"#pipeline"},{include:"#normal_statement_seperator"},{include:"#misc_ranges"},{include:"#boolean"},{include:"#redirect_number"},{include:"#numeric_literal"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#keyword"},{include:"#support"}]},normal_statement_seperator:{captures:{1:{name:"punctuation.terminator.statement.semicolon.shell"},2:{name:"punctuation.separator.statement.and.shell"},3:{name:"punctuation.separator.statement.or.shell"},4:{name:"punctuation.separator.statement.background.shell"}},match:"(?:(?:(?:(?:(;)|(&&))|(\\|\\|))|(&))|\\n)"},numeric_literal:{captures:{1:{name:"constant.numeric.shell constant.numeric.hex.shell"},2:{name:"constant.numeric.shell constant.numeric.octal.shell"},3:{name:"constant.numeric.shell constant.numeric.other.shell"},4:{name:"constant.numeric.shell constant.numeric.integer.shell"},5:{name:"constant.numeric.shell constant.numeric.integer.shell"}},match:"[ \\t]*+(?<==| |\\t|^|\\{|\\(|\\[)(?:(?:(?:(?:(0[xX][0-9A-Fa-f]+)|(0\\d+))|(\\d{1,2}#[0-9a-zA-Z@_]+))|(-?\\d+\\.\\d+))|(-?\\d+))(?!>)"},option:{begin:"[ \\t]++(-)((?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t])))",beginCaptures:{1:{name:"string.unquoted.argument.shell constant.other.option.dash.shell"},2:{name:"string.unquoted.argument.shell constant.other.option.shell"}},contentName:"string.unquoted.argument constant.other.option",end:"(?:(?=[ \\t])|(?=;|\\||&|\\n|\\)|\\`|\\{|\\}|[ \\t]*#|\\])(?<!\\\\))",endCaptures:{},patterns:[{include:"#option_context"}]},option_context:{patterns:[{include:"#misc_ranges"},{include:"#string"},{include:"#variable"},{include:"#interpolation"},{include:"#heredoc"},{include:"#herestring"},{include:"#redirection"},{include:"#pathname"},{include:"#keyword"},{include:"#support"}]},pathname:{patterns:[{match:"(?<=\\s|:|=|^)~",name:"keyword.operator.tilde.shell"},{match:"\\*|\\?",name:"keyword.operator.glob.shell"},{begin:"([?*+@!])(\\()",beginCaptures:{1:{name:"keyword.operator.extglob.shell"},2:{name:"punctuation.definition.extglob.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.extglob.shell"}},name:"meta.structure.extglob.shell",patterns:[{include:"#initial_context"}]}]},pipeline:{patterns:[{match:"(?<=^|;|&|\\s)(time)(?=\\s|;|&|$)",name:"keyword.other.shell"},{match:"[|!]",name:"keyword.operator.pipe.shell"}]},redirect_number:{captures:{1:{name:"keyword.operator.redirect.stdout.shell"},2:{name:"keyword.operator.redirect.stderr.shell"},3:{name:"keyword.operator.redirect.$3.shell"}},match:"(?<=[ \\t])(?:(1)|(2)|(\\d+))(?=>)"},redirection:{patterns:[{begin:"[><]\\(",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"\\)",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.interpolated.process-substitution.shell",patterns:[{include:"#initial_context"}]},{match:"(?<![<>])(&>|\\d*>&\\d*|\\d*(>>|>|<)|\\d*<&|\\d*<>)(?![<>])",name:"keyword.operator.redirect.shell"}]},regex_comparison:{match:"\\=~",name:"keyword.operator.logical.regex.shell"},regexp:{patterns:[{match:".+"}]},simple_options:{captures:{0:{patterns:[{captures:{1:{name:"string.unquoted.argument.shell constant.other.option.dash.shell"},2:{name:"string.unquoted.argument.shell constant.other.option.shell"}},match:"[ \\t]++(\\-)(\\w+)"}]}},match:"(?:[ \\t]++\\-\\w+)*"},start_of_command:{match:"[ \\t]*+(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?!foreach\\b(?!\\/)|select\\b(?!\\/)|repeat\\b(?!\\/)|until\\b(?!\\/)|while\\b(?!\\/)|case\\b(?!\\/)|done\\b(?!\\/)|elif\\b(?!\\/)|else\\b(?!\\/)|esac\\b(?!\\/)|then\\b(?!\\/)|for\\b(?!\\/)|end\\b(?!\\/)|in\\b(?!\\/)|fi\\b(?!\\/)|do\\b(?!\\/)|if\\b(?!\\/))(?!\\\\\\n?$)"},start_of_double_quoted_command_name:{captures:{1:{name:"entity.name.function.call.shell entity.name.command.shell",patterns:[{match:"\\*",name:"variable.language.special.wildcard.shell"},{include:"#variable"},{include:"#numeric_literal"},{captures:{1:{name:"constant.language.$1.shell"}},match:"(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"}]}},match:'(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?:[ \\t]*+([^ \\t\\n\'&;<>\\(\\)\\$`\\\\"\\|]+(?!>)))?(?:(?:\\$")|")',name:"meta.statement.command.name.quoted.shell string.quoted.double.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"},start_of_single_quoted_command_name:{captures:{1:{name:"entity.name.function.call.shell entity.name.command.shell",patterns:[{match:"\\*",name:"variable.language.special.wildcard.shell"},{include:"#variable"},{include:"#numeric_literal"},{captures:{1:{name:"constant.language.$1.shell"}},match:"(?<!\\w)(\\b(?:true|false)\\b)(?!\\w)"}]}},match:"(?!(?:!|&|\\||\\(|\\)|\\{|\\[|<|>|#|\\n|$|;|[ \\t]))(?:[ \\t]*+([^ \\t\\n'&;<>\\(\\)\\$`\\\\\"\\|]+(?!>)))?(?:(?:\\$')|')",name:"meta.statement.command.name.quoted.shell string.quoted.single.shell punctuation.definition.string.begin.shell entity.name.function.call.shell entity.name.command.shell"},string:{patterns:[{match:"\\\\.",name:"constant.character.escape.shell"},{begin:"'",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.single.shell"},{begin:'\\$?"',beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:'"',endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.double.shell",patterns:[{match:'\\\\[\\$\\n`"\\\\]',name:"constant.character.escape.shell"},{include:"#variable"},{include:"#interpolation"}]},{begin:"\\$'",beginCaptures:{0:{name:"punctuation.definition.string.begin.shell"}},end:"'",endCaptures:{0:{name:"punctuation.definition.string.end.shell"}},name:"string.quoted.single.dollar.shell",patterns:[{match:"\\\\(?:a|b|e|f|n|r|t|v|\\\\|')",name:"constant.character.escape.ansi-c.shell"},{match:'\\\\[0-9]{3}"',name:"constant.character.escape.octal.shell"},{match:'\\\\x[0-9a-fA-F]{2}"',name:"constant.character.escape.hex.shell"},{match:'\\\\c."',name:"constant.character.escape.control-char.shell"}]}]},support:{patterns:[{match:"(?<=^|;|&|\\s)(?::|\\.)(?=\\s|;|&|$)",name:"support.function.builtin.shell"}]},variable:{patterns:[{captures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.all.shell"},2:{name:"variable.parameter.positional.all.shell"}},match:"(\\$)(\\@(?!\\w))"},{captures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.shell"},2:{name:"variable.parameter.positional.shell"}},match:"(\\$)([0-9](?!\\w))"},{captures:{1:{name:"punctuation.definition.variable.shell variable.language.special.shell"},2:{name:"variable.language.special.shell"}},match:"(\\$)([-*#?$!0_](?!\\w))"},{begin:"(\\$)(\\{)[ \\t]*+(?=\\d)",beginCaptures:{1:{name:"punctuation.definition.variable.shell variable.parameter.positional.shell"},2:{name:"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},contentName:"meta.parameter-expansion",end:"\\}",endCaptures:{0:{name:"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell variable.parameter.positional.shell"}},patterns:[{match:"!|:[-=?]?|\\*|@|##|#|%%|%|\\/",name:"keyword.operator.expansion.shell"},{captures:{1:{name:"punctuation.section.array.shell"},2:{name:"punctuation.section.array.shell"}},match:"(\\[)[^\\]]+(\\])"},{match:"[0-9]+",name:"variable.parameter.positional.shell"},{match:"(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)",name:"variable.other.normal.shell"},{include:"#variable"},{include:"#string"}]},{begin:"(\\$)(\\{)",beginCaptures:{1:{name:"punctuation.definition.variable.shell"},2:{name:"punctuation.section.bracket.curly.variable.begin.shell punctuation.definition.variable.shell"}},contentName:"meta.parameter-expansion",end:"\\}",endCaptures:{0:{name:"punctuation.section.bracket.curly.variable.end.shell punctuation.definition.variable.shell"}},patterns:[{match:"!|:[-=?]?|\\*|@|##|#|%%|%|\\/",name:"keyword.operator.expansion.shell"},{captures:{1:{name:"punctuation.section.array.shell"},2:{name:"punctuation.section.array.shell"}},match:"(\\[)[^\\]]+(\\])"},{match:"(?<!\\w)[a-zA-Z_0-9-]+(?!\\w)",name:"variable.other.normal.shell"},{include:"#variable"},{include:"#string"}]},{captures:{1:{name:"punctuation.definition.variable.shell variable.other.normal.shell"},2:{name:"variable.other.normal.shell"}},match:"(\\$)(\\w+(?!\\w))"}]}},scopeName:"source.shell",aliases:["bash","sh","shell","zsh"]})]}}]);