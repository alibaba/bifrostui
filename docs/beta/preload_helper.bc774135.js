!function(){"use strict";var t="/beta/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"@bifrostui/monorepo","b":"webpack","f":[["packages__bui-core__src__Tag__index.en-US.md.1b19d99d.async.js",132],["packages__bui-icons__src__index.zh-CN.md.8f970bef.async.js",210],["docs__guide__theme.md.a0156f22.async.js",257],["packages__bui-core__src__Collapse__index.zh-CN.md.f616c005.async.js",335],["dumi__theme__layouts__DocLayout__index.522ada83.chunk.css",367],["dumi__theme__layouts__DocLayout__index.42d211d6.async.js",367],["packages__bui-core__src__CollapsePanel__index.zh-CN.md.de8e0c8e.async.js",382],["packages__bui-core__src__Skeleton__index.zh-CN.md.876f5d84.async.js",610],["packages__bui-core__src__ScrollView__index.zh-CN.md.9d07fcbc.async.js",618],["docs__guide__quick-start.en-US.md.19362a09.async.js",690],["packages__bui-core__src__Transition__index.zh-CN.md.2fd3fa08.async.js",697],["packages__bui-core__src__Avatar__index.en-US.md.169ea59c.async.js",710],["packages__bui-core__src__IconButton__index.en-US.md.493279a7.async.js",758],["783.32883c42.async.js",783],["packages__bui-core__src__Slide__index.en-US.md.55c6d336.async.js",833],["packages__bui-core__src__Divider__index.zh-CN.md.a1bcec62.async.js",938],["packages__bui-core__src__Loading__index.zh-CN.md.fdf7aac7.async.js",969],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",1009],["nm__dumi__dist__client__pages__Demo__index.b42b7428.async.js",1009],["packages__bui-core__src__Popover__index.en-US.md.eeb44ef2.async.js",1220],["packages__bui-core__src__Progress__index.zh-CN.md.7988ca96.async.js",1256],["packages__bui-core__src__Countdown__index.zh-CN.md.3616de79.async.js",1314],["packages__bui-core__src__Picker__index.zh-CN.md.9fdb2fc4.async.js",1320],["packages__bui-core__src__TabBar__index.en-US.md.417335f6.async.js",1468],["packages__bui-core__src__Dialog__index.en-US.md.f9cbf203.async.js",1472],["packages__bui-core__src__Checkbox__index.zh-CN.md.bcd0b0ce.async.js",1600],["packages__bui-core__src__ThemeProvider__index.zh-CN.md.d49f401d.async.js",1681],["packages__bui-core__src__Breadcrumb__index.zh-CN.md.2e8810f9.async.js",1776],["dumi__tmp-production__dumi__theme__ContextWrapper.dc1d379f.async.js",1923],["packages__bui-core__src__Breadcrumb__index.en-US.md.abc49063.async.js",1974],["packages__bui-core__src__Calendar__index.en-US.md.13ee6889.async.js",2025],["docs__guide__faq.en-US.md.c195db0c.async.js",2187],["packages__bui-core__src__Countdown__index.en-US.md.133ba4f7.async.js",2283],["docs__guide__theme.en-US.md.fcd183fd.async.js",2359],["dumi__pages__index-en__index.7a9bf322.chunk.css",2366],["dumi__pages__index-en__index.ea20cbbf.async.js",2366],["packages__bui-core__src__Rating__index.zh-CN.md.5ac65749.async.js",2434],["docs__design__dark.en-US.md.bbbe52df.async.js",2479],["packages__bui-core__src__Fade__index.zh-CN.md.b7ea5c0c.async.js",2494],["packages__bui-core__src__ThemeProvider__index.en-US.md.12f5d1fb.async.js",2528],["packages__bui-core__src__Dialog__index.zh-CN.md.3c2603ed.async.js",2561],["packages__bui-core__src__ScrollView__index.en-US.md.3cecebb8.async.js",2619],["packages__bui-core__src__List__index.en-US.md.108a5b9a.async.js",2680],["packages__bui-core__src__Input__index.zh-CN.md.a132a7e6.async.js",2791],["packages__bui-core__src__IconButton__index.zh-CN.md.cbcefbe8.async.js",2911],["packages__bui-core__src__Steps__index.zh-CN.md.8a09ccaa.async.js",3025],["nm__dumi__dist__client__pages__404.bed05f99.chunk.css",3065],["nm__dumi__dist__client__pages__404.6f8dd831.async.js",3065],["docs__design__font.md.f710c0d2.async.js",3358],["packages__bui-core__src__Fade__index.en-US.md.47ad059f.async.js",3696],["packages__bui-core__src__Select__index.en-US.md.1af2296e.async.js",3729],["packages__bui-core__src__Switch__index.zh-CN.md.00817706.async.js",3767],["packages__bui-core__src__Portal__index.en-US.md.dc4186e9.async.js",3898],["docs__guide__contribute.md.6b00ec06.async.js",3956],["packages__bui-core__src__Transition__index.en-US.md.7f82b776.async.js",4008],["packages__bui-core__src__Badge__index.en-US.md.78de830a.async.js",4085],["packages__bui-core__src__Image__index.zh-CN.md.a51c2a44.async.js",4177],["packages__bui-core__src__Toast__index.zh-CN.md.c3147c96.async.js",4178],["packages__bui-core__src__List__index.zh-CN.md.0005b579.async.js",4228],["docs__design__space.en-US.md.ac04315f.async.js",4236],["packages__bui-core__src__Stack__index.zh-CN.md.7b2b1655.async.js",4325],["packages__bui-core__src__Checkbox__index.en-US.md.e0c5e8de.async.js",4340],["packages__bui-core__src__Button__index.en-US.md.f46bb888.async.js",4450],["docs__design__colors.en-US.md.1b1d4f69.async.js",4528],["packages__bui-core__src__Tooltip__index.en-US.md.942ff40c.async.js",4726],["packages__bui-core__src__Stack__index.en-US.md.98708e73.async.js",5088],["packages__bui-core__src__Alert__index.en-US.md.e7ad1df7.async.js",5137],["packages__bui-core__src__Avatar__index.zh-CN.md.1cbfd4fe.async.js",5181],["packages__bui-core__src__Picker__index.en-US.md.f318784c.async.js",5196],["packages__bui-core__src__NavBar__index.zh-CN.md.433c54de.async.js",5229],["docs__guide__introduce.en-US.md.cf107d69.async.js",5330],["packages__bui-core__src__NavBar__index.en-US.md.35dae6d5.async.js",5335],["packages__bui-core__src__Input__index.en-US.md.a892e10c.async.js",5362],["packages__bui-core__src__TextArea__index.en-US.md.b6b1b17f.async.js",5363],["packages__bui-core__src__ActionSheet__index.en-US.md.99e164b2.async.js",5407],["dumi__pages__index__user-icon__dm.f7271bd8.async.js",5495],["packages__bui-core__src__Switch__index.en-US.md.c69f5ce8.async.js",5535],["packages__bui-core__src__Swiper__index.zh-CN.md.ca0d9a5a.async.js",5539],["dumi__pages__index__user-icon__tpp.6560620c.async.js",5623],["packages__bui-core__src__Calendar__index.zh-CN.md.f16e34b5.async.js",5683],["packages__bui-core__src__Swiper__index.en-US.md.d3157403.async.js",5734],["packages__bui-core__src__Toast__index.en-US.md.e4a8f3ba.async.js",5759],["packages__bui-core__src__Loading__index.en-US.md.ec7cf003.async.js",5864],["packages__bui-core__src__Steps__index.en-US.md.629c1820.async.js",5952],["packages__bui-core__src__Progress__index.en-US.md.57a6a300.async.js",6021],["docs__guide__faq.md.c258c0b8.async.js",6205],["packages__bui-core__src__Radio__index.en-US.md.9f87536b.async.js",6245],["packages__bui-core__src__Tag__index.zh-CN.md.4251bae8.async.js",6354],["packages__bui-core__src__CitySelector__index.zh-CN.md.337b626c.async.js",6365],["packages__bui-core__src__Skeleton__index.en-US.md.3cada45f.async.js",6382],["packages__bui-core__src__Badge__index.zh-CN.md.00382a1d.async.js",6400],["packages__bui-core__src__Modal__index.en-US.md.2158e0d0.async.js",6448],["packages__bui-core__src__Tooltip__index.zh-CN.md.2262c88f.async.js",6554],["packages__bui-core__src__CitySelector__index.en-US.md.48352a02.async.js",6555],["packages__bui-core__src__TabBar__index.zh-CN.md.e94b3957.async.js",6695],["packages__bui-core__src__Drawer__index.zh-CN.md.c82c8198.async.js",6785],["docs__guide__contribute.en-US.md.938a09ee.async.js",7031],["packages__bui-core__src__Radio__index.zh-CN.md.50884aea.async.js",7244],["docs__design__colors.md.831b1d74.async.js",7297],["packages__bui-core__src__Slider__index.en-US.md.8062feef.async.js",7339],["packages__bui-core__src__Backdrop__index.en-US.md.58d96533.async.js",7375],["packages__bui-core__src__Card__index.en-US.md.287aab54.async.js",7500],["packages__bui-core__src__Slide__index.zh-CN.md.e0fcffc7.async.js",7517],["docs__guide__quick-start.md.b2dd5109.async.js",7568],["packages__bui-core__src__Rating__index.en-US.md.498a3613.async.js",7569],["packages__bui-core__src__Backdrop__index.zh-CN.md.fb8a542f.async.js",7578],["docs__design__font.en-US.md.d1f4a107.async.js",7588],["packages__bui-core__src__CollapsePanel__index.en-US.md.0c702448.async.js",7683],["packages__bui-icons__src__index.en-US.md.40f5399a.async.js",7731],["docs__design__space.md.00670e6f.async.js",7869],["packages__bui-core__src__Popover__index.zh-CN.md.be0ddb07.async.js",8139],["packages__bui-core__src__Alert__index.zh-CN.md.8f1ce497.async.js",8199],["docs__design__dark.md.2dfe44dc.async.js",8381],["packages__bui-core__src__Modal__index.zh-CN.md.8e352630.async.js",8389],["docs__guide__introduce.md.85790bef.async.js",8565],["packages__bui-core__src__Portal__index.zh-CN.md.95b5c881.async.js",8650],["dumi__pages__index__index.7a9bf322.chunk.css",8863],["dumi__pages__index__index.804bd58e.async.js",8863],["packages__bui-core__src__Tabs__index.zh-CN.md.f67210a4.async.js",9159],["packages__bui-core__src__Select__index.zh-CN.md.a0c2320c.async.js",9212],["dumi__pages__index__locales.f929ee63.async.js",9310],["packages__bui-core__src__ActionSheet__index.zh-CN.md.feee3cf0.async.js",9330],["packages__bui-core__src__Tabs__index.en-US.md.c0d0206f.async.js",9447],["packages__bui-core__src__Card__index.zh-CN.md.e7ab6b1e.async.js",9511],["packages__bui-core__src__Button__index.zh-CN.md.9de3d898.async.js",9569],["packages__bui-core__src__Slider__index.zh-CN.md.9434ac68.async.js",9668],["packages__bui-core__src__Divider__index.en-US.md.7f46a29b.async.js",9693],["packages__bui-core__src__Image__index.en-US.md.9c1b74ec.async.js",9721],["packages__bui-core__src__Collapse__index.en-US.md.fedf7ccb.async.js",9793],["packages__bui-core__src__TextArea__index.zh-CN.md.8c5f80cc.async.js",9863],["packages__bui-core__src__Drawer__index.en-US.md.c3d8ef08.async.js",9899]],"r":{"/*":[46,47,4,5,13,28],"/":[116,117,4,5,13,28],"/index-en":[34,35,4,5,13,28],"/icons-en":[108,4,5,13,28],"/icons":[1,4,5,13,28],"/~demos/:id":[17,18,28],"/index/locales":[120,4,5,13,28],"/guide/quick-start-en":[9,4,5,13,28],"/guide/contribute-en":[96,4,5,13,28],"/guide/introduce-en":[70,4,5,13,28],"/design/colors-en":[63,4,5,13,28],"/design/space-en":[59,4,5,13,28],"/design/dark-en":[37,4,5,13,28],"/design/font-en":[106,4,5,13,28],"/guide/quick-start":[103,4,5,13,28],"/guide/theme-en":[33,4,5,13,28],"/guide/contribute":[53,4,5,13,28],"/guide/faq-en":[31,4,5,13,28],"/guide/introduce":[114,4,5,13,28],"/design/colors":[98,4,5,13,28],"/design/space":[109,4,5,13,28],"/design/dark":[112,4,5,13,28],"/design/font":[48,4,5,13,28],"/guide/theme":[2,4,5,13,28],"/guide/faq":[85,4,5,13,28],"/cores/action-sheet-en":[74,4,5,13,28],"/cores/action-sheet":[121,4,5,13,28],"/cores/alert-en":[66,4,5,13,28],"/cores/alert":[111,4,5,13,28],"/cores/avatar-en":[11,4,5,13,28],"/cores/avatar":[67,4,5,13,28],"/cores/backdrop-en":[100,4,5,13,28],"/cores/backdrop":[105,4,5,13,28],"/cores/badge-en":[55,4,5,13,28],"/cores/badge":[90,4,5,13,28],"/cores/breadcrumb-en":[29,4,5,13,28],"/cores/breadcrumb":[27,4,5,13,28],"/cores/button-en":[62,4,5,13,28],"/cores/button":[124,4,5,13,28],"/cores/calendar-en":[30,4,5,13,28],"/cores/calendar":[79,4,5,13,28],"/cores/card-en":[101,4,5,13,28],"/cores/card":[123,4,5,13,28],"/cores/checkbox-en":[61,4,5,13,28],"/cores/checkbox":[25,4,5,13,28],"/cores/city-selector-en":[93,4,5,13,28],"/cores/city-selector":[88,4,5,13,28],"/cores/collapse-en":[128,4,5,13,28],"/cores/collapse":[3,4,5,13,28],"/cores/collapse-panel-en":[107,4,5,13,28],"/cores/collapse-panel":[6,4,5,13,28],"/cores/countdown-en":[32,4,5,13,28],"/cores/countdown":[21,4,5,13,28],"/cores/dialog-en":[24,4,5,13,28],"/cores/dialog":[40,4,5,13,28],"/cores/divider-en":[126,4,5,13,28],"/cores/divider":[15,4,5,13,28],"/cores/drawer-en":[130,4,5,13,28],"/cores/drawer":[95,4,5,13,28],"/cores/fade-en":[49,4,5,13,28],"/cores/fade":[38,4,5,13,28],"/cores/icon-button-en":[12,4,5,13,28],"/cores/icon-button":[44,4,5,13,28],"/cores/image-en":[127,4,5,13,28],"/cores/image":[56,4,5,13,28],"/cores/input-en":[72,4,5,13,28],"/cores/input":[43,4,5,13,28],"/cores/list-en":[42,4,5,13,28],"/cores/list":[58,4,5,13,28],"/cores/loading-en":[82,4,5,13,28],"/cores/loading":[16,4,5,13,28],"/cores/modal-en":[91,4,5,13,28],"/cores/modal":[113,4,5,13,28],"/cores/nav-bar-en":[71,4,5,13,28],"/cores/nav-bar":[69,4,5,13,28],"/cores/picker-en":[68,4,5,13,28],"/cores/picker":[22,4,5,13,28],"/cores/popover-en":[19,4,5,13,28],"/cores/popover":[110,4,5,13,28],"/cores/portal-en":[52,4,5,13,28],"/cores/portal":[115,4,5,13,28],"/cores/progress-en":[84,4,5,13,28],"/cores/progress":[20,4,5,13,28],"/cores/radio-en":[86,4,5,13,28],"/cores/radio":[97,4,5,13,28],"/cores/rating-en":[104,4,5,13,28],"/cores/rating":[36,4,5,13,28],"/cores/scroll-view-en":[41,4,5,13,28],"/cores/scroll-view":[8,4,5,13,28],"/cores/select-en":[50,4,5,13,28],"/cores/select":[119,4,5,13,28],"/cores/skeleton-en":[89,4,5,13,28],"/cores/skeleton":[7,4,5,13,28],"/cores/slide-en":[14,4,5,13,28],"/cores/slide":[102,4,5,13,28],"/cores/slider-en":[99,4,5,13,28],"/cores/slider":[125,4,5,13,28],"/cores/stack-en":[65,4,5,13,28],"/cores/stack":[60,4,5,13,28],"/cores/steps-en":[83,4,5,13,28],"/cores/steps":[45,4,5,13,28],"/cores/swiper-en":[80,4,5,13,28],"/cores/swiper":[77,4,5,13,28],"/cores/switch-en":[76,4,5,13,28],"/cores/switch":[51,4,5,13,28],"/cores/tab-bar-en":[23,4,5,13,28],"/cores/tab-bar":[94,4,5,13,28],"/cores/tabs-en":[122,4,5,13,28],"/cores/tabs":[118,4,5,13,28],"/cores/tag-en":[0,4,5,13,28],"/cores/tag":[87,4,5,13,28],"/cores/text-area-en":[73,4,5,13,28],"/cores/text-area":[129,4,5,13,28],"/cores/theme-provider-en":[39,4,5,13,28],"/cores/theme-provider":[26,4,5,13,28],"/cores/toast-en":[81,4,5,13,28],"/cores/toast":[57,4,5,13,28],"/cores/tooltip-en":[64,4,5,13,28],"/cores/tooltip":[92,4,5,13,28],"/cores/transition-en":[54,4,5,13,28],"/cores/transition":[10,4,5,13,28],"/index/user-icon/tpp":[78,4,5,13,28],"/index/user-icon/dm":[75,4,5,13,28]}},{publicPath:"/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();