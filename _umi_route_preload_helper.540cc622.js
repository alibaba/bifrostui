!function(){"use strict";var t="/bifrostui/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"@bifrostui/monorepo","b":"webpack","f":[["docs__guide__theme.md.7665f0f1.chunk.css",257],["docs__guide__theme.md.52b7c90a.async.js",257],["dumi__theme__layouts__DocLayout__index.5cd20dcb.chunk.css",367],["dumi__theme__layouts__DocLayout__index.8abea461.async.js",367],["packages__bui-core__src__TabBar__index.md.7665f0f1.chunk.css",538],["packages__bui-core__src__TabBar__index.md.e23a2cce.async.js",538],["packages__bui-core__src__Radio__index.md.7665f0f1.chunk.css",603],["packages__bui-core__src__Radio__index.md.1f548386.async.js",603],["packages__bui-core__src__Portal__index.md.7665f0f1.chunk.css",1005],["packages__bui-core__src__Portal__index.md.fefcd6a8.async.js",1005],["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",1009],["nm__dumi__dist__client__pages__Demo__index.85a5ce64.async.js",1009],["packages__bui-core__src__Checkbox__index.md.7665f0f1.chunk.css",1190],["packages__bui-core__src__Checkbox__index.md.97d49a2c.async.js",1190],["packages__bui-core__src__Slide__index.md.7665f0f1.chunk.css",1211],["packages__bui-core__src__Slide__index.md.4f84466a.async.js",1211],["packages__bui-core__src__Avatar__index.md.7665f0f1.chunk.css",1379],["packages__bui-core__src__Avatar__index.md.c5c83069.async.js",1379],["packages__bui-icons__src__index.md.7665f0f1.chunk.css",1382],["packages__bui-icons__src__index.md.61d00a33.async.js",1382],["packages__bui-core__src__Stack__index.md.7665f0f1.chunk.css",1733],["packages__bui-core__src__Stack__index.md.c5de43ce.async.js",1733],["dumi__tmp-production__dumi__theme__ContextWrapper.bdae0baf.async.js",1923],["packages__bui-core__src__Steps__index.md.7665f0f1.chunk.css",2411],["packages__bui-core__src__Steps__index.md.682e79e1.async.js",2411],["2567.4ad10a2f.async.js",2567],["packages__bui-core__src__Loading__index.md.7665f0f1.chunk.css",2621],["packages__bui-core__src__Loading__index.md.2db0a2ae.async.js",2621],["nm__dumi__dist__client__pages__404.bed05f99.chunk.css",3065],["nm__dumi__dist__client__pages__404.f9565f20.async.js",3065],["packages__bui-core__src__Slider__index.md.7665f0f1.chunk.css",3210],["packages__bui-core__src__Slider__index.md.c908c77b.async.js",3210],["docs__design__font.md.7665f0f1.chunk.css",3358],["docs__design__font.md.4120a5f6.async.js",3358],["packages__bui-core__src__TextArea__index.md.7665f0f1.chunk.css",3458],["packages__bui-core__src__TextArea__index.md.027f3f3d.async.js",3458],["docs__guide__contribute.md.7665f0f1.chunk.css",3956],["docs__guide__contribute.md.ba8493fe.async.js",3956],["packages__bui-core__src__Tabs__index.md.7665f0f1.chunk.css",4338],["packages__bui-core__src__Tabs__index.md.1b25381a.async.js",4338],["packages__bui-core__src__Fade__index.md.7665f0f1.chunk.css",4482],["packages__bui-core__src__Fade__index.md.fccda9e0.async.js",4482],["packages__bui-core__src__Drawer__index.md.7665f0f1.chunk.css",4603],["packages__bui-core__src__Drawer__index.md.b40ce25e.async.js",4603],["packages__bui-core__src__Calendar__index.md.7665f0f1.chunk.css",5126],["packages__bui-core__src__Calendar__index.md.6c2a3962.async.js",5126],["5340.25ae975a.async.js",5340],["packages__bui-core__src__Modal__index.md.7665f0f1.chunk.css",5395],["packages__bui-core__src__Modal__index.md.9a864d96.async.js",5395],["packages__bui-core__src__Card__index.md.7665f0f1.chunk.css",6148],["packages__bui-core__src__Card__index.md.4a39b9ec.async.js",6148],["docs__guide__faq.md.7665f0f1.chunk.css",6205],["docs__guide__faq.md.606776a9.async.js",6205],["packages__bui-core__src__Countdown__index.md.7665f0f1.chunk.css",6318],["packages__bui-core__src__Countdown__index.md.35c4bfe0.async.js",6318],["packages__bui-core__src__ActionSheet__index.md.7665f0f1.chunk.css",6378],["packages__bui-core__src__ActionSheet__index.md.b8283e88.async.js",6378],["packages__bui-core__src__IconButton__index.md.7665f0f1.chunk.css",6402],["packages__bui-core__src__IconButton__index.md.da7fc273.async.js",6402],["packages__bui-core__src__Tag__index.md.7665f0f1.chunk.css",6451],["packages__bui-core__src__Tag__index.md.d8cd575d.async.js",6451],["packages__bui-core__src__Input__index.md.7665f0f1.chunk.css",6497],["packages__bui-core__src__Input__index.md.09d4cb51.async.js",6497],["packages__bui-core__src__List__index.md.7665f0f1.chunk.css",6836],["packages__bui-core__src__List__index.md.875ec4f3.async.js",6836],["packages__bui-core__src__Swiper__index.md.7665f0f1.chunk.css",6840],["packages__bui-core__src__Swiper__index.md.c8f84810.async.js",6840],["docs__index.md.7665f0f1.chunk.css",6935],["docs__index.md.867d462a.async.js",6935],["docs__design__colors.md.7665f0f1.chunk.css",7297],["docs__design__colors.md.b9b639c9.async.js",7297],["packages__bui-core__src__Backdrop__index.md.7665f0f1.chunk.css",7327],["packages__bui-core__src__Backdrop__index.md.13ffb446.async.js",7327],["docs__guide__quick-start.md.7665f0f1.chunk.css",7568],["docs__guide__quick-start.md.bc1f38d2.async.js",7568],["docs__design__space.md.7665f0f1.chunk.css",7869],["docs__design__space.md.ae69852d.async.js",7869],["packages__bui-core__src__Image__index.md.7665f0f1.chunk.css",8161],["packages__bui-core__src__Image__index.md.035d0578.async.js",8161],["packages__bui-core__src__Skeleton__index.md.7665f0f1.chunk.css",8176],["packages__bui-core__src__Skeleton__index.md.7628c114.async.js",8176],["packages__bui-core__src__Switch__index.md.7665f0f1.chunk.css",8358],["packages__bui-core__src__Switch__index.md.153f633b.async.js",8358],["packages__bui-core__src__Select__index.md.7665f0f1.chunk.css",8359],["packages__bui-core__src__Select__index.md.882dbde1.async.js",8359],["docs__design__dark.md.7665f0f1.chunk.css",8381],["docs__design__dark.md.9ecc156d.async.js",8381],["packages__bui-core__src__Badge__index.md.7665f0f1.chunk.css",8473],["packages__bui-core__src__Badge__index.md.a1b1dde9.async.js",8473],["docs__guide__introduce.md.7665f0f1.chunk.css",8565],["docs__guide__introduce.md.593c61df.async.js",8565],["packages__bui-core__src__Rating__index.md.7665f0f1.chunk.css",8834],["packages__bui-core__src__Rating__index.md.bccf259a.async.js",8834],["packages__bui-core__src__Button__index.md.7665f0f1.chunk.css",9140],["packages__bui-core__src__Button__index.md.85f8d6ae.async.js",9140],["packages__bui-core__src__NavBar__index.md.7665f0f1.chunk.css",9196],["packages__bui-core__src__NavBar__index.md.365195b3.async.js",9196],["packages__bui-core__src__Transition__index.md.7665f0f1.chunk.css",9216],["packages__bui-core__src__Transition__index.md.fa2e6176.async.js",9216],["packages__bui-core__src__ScrollView__index.md.7665f0f1.chunk.css",9358],["packages__bui-core__src__ScrollView__index.md.7194be78.async.js",9358],["packages__bui-core__src__Progress__index.md.7665f0f1.chunk.css",9670],["packages__bui-core__src__Progress__index.md.03ce4f09.async.js",9670],["packages__bui-core__src__Alert__index.md.7665f0f1.chunk.css",9778],["packages__bui-core__src__Alert__index.md.aa7941d0.async.js",9778],["packages__bui-core__src__Divider__index.md.7665f0f1.chunk.css",9878],["packages__bui-core__src__Divider__index.md.3b1bc3d2.async.js",9878]],"r":{"/*":[28,29,2,3,25,22],"/":[46,67,68,2,3,25,22],"/icons":[18,19,46,2,3,25,22],"/~demos/:id":[10,11,22],"/guide/quick-start":[46,73,74,2,3,25,22],"/guide/contribute":[36,37,46,2,3,25,22],"/guide/introduce":[46,89,90,2,3,25,22],"/design/colors":[46,69,70,2,3,25,22],"/design/space":[46,75,76,2,3,25,22],"/design/dark":[46,85,86,2,3,25,22],"/design/font":[32,33,46,2,3,25,22],"/guide/theme":[0,1,46,2,3,25,22],"/guide/faq":[46,51,52,2,3,25,22],"/cores/action-sheet":[46,55,56,2,3,25,22],"/cores/alert":[46,103,104,2,3,25,22],"/cores/avatar":[16,17,46,2,3,25,22],"/cores/backdrop":[46,71,72,2,3,25,22],"/cores/badge":[46,87,88,2,3,25,22],"/cores/button":[46,93,94,2,3,25,22],"/cores/calendar":[44,45,46,2,3,25,22],"/cores/card":[46,49,50,2,3,25,22],"/cores/checkbox":[12,13,46,2,3,25,22],"/cores/countdown":[46,53,54,2,3,25,22],"/cores/divider":[46,105,106,2,3,25,22],"/cores/drawer":[42,43,46,2,3,25,22],"/cores/fade":[40,41,46,2,3,25,22],"/cores/icon-button":[46,57,58,2,3,25,22],"/cores/image":[46,77,78,2,3,25,22],"/cores/input":[46,61,62,2,3,25,22],"/cores/list":[46,63,64,2,3,25,22],"/cores/loading":[26,27,46,2,3,25,22],"/cores/modal":[46,47,48,2,3,25,22],"/cores/nav-bar":[46,95,96,2,3,25,22],"/cores/portal":[8,9,46,2,3,25,22],"/cores/progress":[46,101,102,2,3,25,22],"/cores/radio":[6,7,46,2,3,25,22],"/cores/rating":[46,91,92,2,3,25,22],"/cores/scroll-view":[46,99,100,2,3,25,22],"/cores/select":[46,83,84,2,3,25,22],"/cores/skeleton":[46,79,80,2,3,25,22],"/cores/slide":[14,15,46,2,3,25,22],"/cores/slider":[30,31,46,2,3,25,22],"/cores/stack":[20,21,46,2,3,25,22],"/cores/steps":[23,24,46,2,3,25,22],"/cores/swiper":[46,65,66,2,3,25,22],"/cores/switch":[46,81,82,2,3,25,22],"/cores/tab-bar":[4,5,46,2,3,25,22],"/cores/tabs":[38,39,46,2,3,25,22],"/cores/tag":[46,59,60,2,3,25,22],"/cores/text-area":[34,35,46,2,3,25,22],"/cores/transition":[46,97,98,2,3,25,22]}},{publicPath:"/bifrostui/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();