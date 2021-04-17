(window.webpackJsonp=window.webpackJsonp||[]).push([[32,4,5],{308:function(t,e,r){"use strict";r.r(e);var n=r(5),l=Object(n.b)({name:"Author",props:{author:{type:Object,required:!0}}}),o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex lg:px-1/6 my-4"},[r("div",{staticClass:"w-32 min-w-max-content"},[r("NuxtLink",{attrs:{to:"/author/"+t.author.name}},[r("img",{staticClass:"h-12 w-12 md:h-16 md:w-16 rounded-full",attrs:{src:t.author.image}})])],1),t._v(" "),r("div",{staticClass:"px-3"},[r("NuxtLink",{attrs:{to:"/author/"+t.author.name}},[r("h4",{staticClass:"text-gray-500"},[t._v("Written By")]),t._v(" "),r("h3",{staticClass:"text-gray-700 font-bold text-xl"},[t._v(t._s(t.author.name))]),t._v(" "),r("p",{staticClass:"text-gray-600 font-semibold text-sm"},[t._v("\n        "+t._s(t.author.profession)+"\n      ")])]),t._v(" "),r("p",{staticClass:"py-5 pr-0 md:pr-8 text-sm md:text-base text-gray-700"},[t._v("\n      "+t._s(t.author.bio)+"\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);var n=r(5),l=Object(n.b)({name:"RelatedArticles",props:{relatedArticles:{type:Array,required:!0}}}),o=r(11),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.relatedArticles.length>0?r("div",[r("h3",{staticClass:"px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg font-semibold"},[t._v("\n    Related Articles:\n  ")]),t._v(" "),t._l(t.relatedArticles,(function(article){return r("ul",{key:article.slug},[r("li",{staticClass:"flex lg:px-1/6 my-4"},[r("div",{staticClass:"min-w-max-content"},[r("NuxtLink",{attrs:{to:"/author/"+article.name}},[r("img",{staticClass:"h-12 w-12 md:h-16 md:w-16",attrs:{src:article.image}})])],1),t._v(" "),r("div",{staticClass:"px-3"},[r("NuxtLink",{attrs:{to:"/articles/"+article.slug}},[r("h3",{staticClass:"text-gray-700 font-bold text-lg"},[t._v(t._s(article.title))]),t._v(" "),r("span",{staticClass:"font-semibold text-xs text-gray-600"},[t._v("\n            published: "+t._s(t.$dayjs(article.published).fromNow())+"\n          ")]),t._v(" "),r("p",{staticClass:"text-gray-600 text-sm"},[t._v("\n            "+t._s(article.description)+"\n          ")])])],1)])])}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports},354:function(t,e,r){"use strict";r.r(e);r(209),r(210),r(48),r(59),r(18),r(72);var n=r(45),l=(r(39),r(9)),o=r(5),c=r(29),d=Object(o.b)({name:"Article",setup:function(){var t,e,r,d=Object(o.g)(),v=d.$content,m=d.params,x=d.route,h=Object(o.a)((function(){return m.value.slug})),article=Object(o.j)(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("articles",e).fetch();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h,"articles"),f=Object(o.a)((function(){var t;return null===(t=article.value)||void 0===t?void 0:t.tags[0]})),_=Object(o.j)(function(){var t=Object(l.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v("articles").where({tags:{$contains:[e]}}).only(["title","description","image","slug","published","tags"]).sortBy("published","desc").limit(4).fetch();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f,"articles"),y=Object(o.a)((function(){var t,e;return null!==(e=null===(t=_.value)||void 0===t?void 0:t.filter((function(t){return t.slug!==x.value.params.slug})))&&void 0!==e?e:[]})),w={type:"article",title:null===(t=article.value)||void 0===t?void 0:t.title,description:null===(e=article.value)||void 0===e?void 0:e.description,url:"".concat(c.a.siteUrl,"/articles/").concat(x.value.params.slug),mainImage:null===(r=article.value)||void 0===r?void 0:r.image},meta=Object(o.a)((function(){return function(meta){return[{hid:"description",name:"description",content:meta&&meta.description||c.a.siteDesc},{hid:"og:type",property:"og:type",content:meta&&meta.type||c.a.siteType},{hid:"og:url",property:"og:url",content:meta&&meta.url||c.a.siteUrl},{hid:"og:title",property:"og:title",content:meta&&meta.title||c.a.siteTitle},{hid:"og:description",property:"og:description",content:meta&&meta.description||c.a.siteDesc},{hid:"og:image",property:"og:image",content:meta&&meta.mainImage||c.a.mainImage},{hid:"twitter:url",name:"twitter:url",content:meta&&meta.url||c.a.siteUrl},{hid:"twitter:title",name:"twitter:title",content:meta&&meta.title||c.a.siteTitle},{hid:"twitter:description",name:"twitter:description",content:meta&&meta.description||c.a.siteDesc},{hid:"twitter:image",name:"twitter:image",content:meta&&meta.mainImage||c.a.mainImage}]}(w)}));return Object(o.h)((function(){var t,e,r,l,o,d,v;return{title:null===(t=article.value)||void 0===t?void 0:t.title,meta:[].concat(Object(n.a)(meta.value),[{property:"article:published_time",content:null===(e=article.value)||void 0===e?void 0:e.createdAt},{property:"article:modified_time",content:null===(r=article.value)||void 0===r?void 0:r.updatedAt},{property:"article:tag",content:(null===(l=article.value)||void 0===l?void 0:l.tags)?null===(o=article.value)||void 0===o?void 0:o.tags.toString():""},{name:"twitter:label1",content:"Written by"},{name:"twitter:data1",content:c.a.author||""},{name:"twitter:label2",content:"Filed under"},{name:"twitter:data2",content:(null===(d=article.value)||void 0===d?void 0:d.tags)?null===(v=article.value)||void 0===v?void 0:v.tags.toString():""}]),link:[{hid:"canonical",rel:"canonical",href:"".concat(c.a.siteUrl,"/articles/").concat(x.value.params.slug)}]}})),{article:article,relatedArtices:y}},head:{}}),v=r(11),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.article?r("div",{staticClass:"relative py-16 overflow-hidden"},[r("div",{staticClass:"relative px-4 sm:px-6 lg:px-8 text-left"},[r("div",{staticClass:"text-lg max-w-prose mx-auto"},[r("h1",[r("span",{staticClass:"block text-base text-4xl text-center text-black font-semibold tracking-wide capitalize"},[t._v(t._s(t.article.title))]),t._v(" "),r("span",{staticClass:"block font-semibold text-xs text-green-400 text-center"},[t._v("\n          published: "+t._s(t.$dayjs(t.article.published).fromNow())+"\n        ")]),t._v(" "),r("span",{staticClass:"mt-2 block text-lg text-center leading-8 font-medium tracking-tight text-gray-600"},[t._v(t._s(t.article.description))])])]),t._v(" "),r("div",{staticClass:"mt-6 prose prose-green prose-lg max-w-3xl text-gray-700 mx-auto"},[r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("h3",{staticClass:"px-1/12 lg:px-1/6 bold text-gray-800 my-8 text-lg font-semibold"},[t._v("\n      Tags:\n    ")]),t._v(" "),r("ul",{staticClass:"flex justify-start px-1/12 lg:px-1/6"},t._l(t.article.tags,(function(e){return r("li",{key:e,staticClass:"text-center mr-2 mb-2 p-1 border border-gray-200 rounded"},[r("nuxt-link",{staticClass:"text-sm hover:text-gray-800 text-gray-500",attrs:{to:{name:"tags-tag",params:{tag:e.toLowerCase()}}}},[t._v(t._s(e))])],1)})),0),t._v(" "),r("Author",{attrs:{author:t.article.author}}),t._v(" "),r("RelatedArticle",{attrs:{"related-articles":t.relatedArtices}})],1)]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Author:r(308).default,RelatedArticle:r(316).default})}}]);