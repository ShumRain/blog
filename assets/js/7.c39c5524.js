(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{50:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),n("p",[t._v("编译后：")]),t._v(" "),t._m(14),n("p",[t._v("这样就很完美了。")]),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._m(21),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.w3cplus.com/preprocessor/sass-mixin-placeholder.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Sass:Mixin还是Placeholder"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"http://thesassway.com/intermediate/understanding-placeholder-selectors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding placeholder selectors"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("最近的项目中在用"),s("code",[this._v("sass")]),this._v("写组件，需要用到其中的"),s("code",[this._v("Mixin")]),this._v("和"),s("code",[this._v("placeholder")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"混合器mixin"}},[this._v("混合器Mixin "),s("a",{staticClass:"header-anchor",attrs:{href:"#混合器mixin","aria-hidden":"true"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("一般情况下都是用"),s("code",[this._v("@mixin")]),this._v("来定义一些公共的 css 属性，可以传入参数，在写其他的 css 时可用"),s("code",[this._v("@include")]),this._v("来引入这些公共的 css 属性。可以用更少的代码来完成更多的样式。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$width")]),t._v(","),n("span",{attrs:{class:"token variable"}},[t._v("$height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("定义了一个名叫"),s("code",[this._v("button-size")]),this._v("的混合器，然后就可用"),s("code",[this._v("@include")]),this._v("引入到其他的css中。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("80px,25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px,40px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 编译后 =>")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \t"),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时候就生成了两个不同大小的按钮，如果你还想加上其他样式，但是这些样式都一样，这时候又再定义一个"),s("code",[this._v("mixin")]),this._v("，并引入。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" "),n("span",{attrs:{class:"token selector"}},[t._v("button-base ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" button-base"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("80px,25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" button-base"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("200px,40px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n\n"),n("span",{attrs:{class:"token comment"}},[t._v("// 编译后 =>")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 45px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时会发现第二次引入的"),s("code",[this._v("button-base")]),this._v("其实都是一样的，但是还是分开插入了，这样代码就太多了，其实我们想要的是这样：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".btn-s,.btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("这时就要用到"),s("code",[this._v("placeholder")]),this._v("了")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"placeholder"}},[this._v("placeholder "),s("a",{staticClass:"header-anchor",attrs:{href:"#placeholder","aria-hidden":"true"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("placeholder 的主要用途也是定义公共的代码，用更少的代码干更多的事。定义时用"),s("code",[this._v("%")]),this._v("后跟上定义的名字，用"),s("code",[this._v("@extend")]),this._v("来引入，和定义一个 css 样式有点像，但是用"),s("code",[this._v("%placeholder")]),this._v("不会产生多余的代码。")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{attrs:{class:"token variable"}},[t._v("$width")]),t._v(","),n("span",{attrs:{class:"token variable"}},[t._v("$height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{attrs:{class:"token variable"}},[t._v("$height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[n("span",{attrs:{class:"token placeholder"}},[t._v("%button-base")]),t._v(" ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" "),n("span",{attrs:{class:"token placeholder selector"}},[t._v("%button-base")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("40px,25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@extend")]),t._v(" "),n("span",{attrs:{class:"token placeholder selector"}},[t._v("%button-base")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{attrs:{class:"token function"}},[t._v("button-size")]),n("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("80px,45px"),n("span",{attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token selector"}},[t._v(".btn-s, .btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("color")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("background")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #4BACE4"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("border-radius")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("outline")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("cursor")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pointer"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-s ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 40px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 25px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),n("span",{attrs:{class:"token selector"}},[t._v(".btn-l ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("width")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 80px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("height")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 45px"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用哪个？"}},[this._v("使用哪个？ "),s("a",{staticClass:"header-anchor",attrs:{href:"#使用哪个？","aria-hidden":"true"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("在"),s("code",[this._v("%placeholder")]),this._v("中不能使用变量，如果你需要变量的话，最好使用"),s("code",[this._v("@mixin")]),this._v("。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("举个例子：你的项目中有很多尺寸的按钮，这些按钮遍布很多页面。在你写完之后，你的产品经理可能觉得这个按钮长度有点长了，如果你用的"),s("code",[this._v("@mixin")]),this._v("只需要改一个变量就可以了。")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("如果有些基本的样式，就可以愉快的使用"),s("code",[this._v("%placeholder")]),this._v(",比如：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token selector"}},[n("span",{attrs:{class:"token placeholder"}},[t._v("%center-block")]),t._v(" ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("margin-left")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("margin-right")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" auto"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{attrs:{class:"token selector"}},[n("span",{attrs:{class:"token placeholder"}},[t._v("%over-show-ellipsis")]),t._v(" ")]),n("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("overflow")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" hidden"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("text-overflow")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ellipsis"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{attrs:{class:"token property"}},[t._v("white-space")]),n("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" nowrap"),n("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"参考阅读"}},[this._v("参考阅读 "),s("a",{staticClass:"header-anchor",attrs:{href:"#参考阅读","aria-hidden":"true"}})])}],!1,null,null,null);s.default=e.exports}}]);