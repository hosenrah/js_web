webpackJsonp([1,0],[function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=s(5),n=a(i),o=s(43),r=a(o),l=s(4),c=(a(l),s(59)),u=a(c),d=s(6),v=a(d);n.default.use(u.default),n.default.config.productionTip=!1,n.default.prototype.$scrollToTop=function(){return window.scrollTo(0,0)},new n.default({el:"#app",router:v.default,template:"<App/>",components:{App:r.default}})},,function(t,e,s){s(21);var a=s(1)(s(9),s(52),null,null);t.exports=a.exports},function(t,e,s){s(19);var a=s(1)(s(10),s(50),null,null);t.exports=a.exports},,,function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(5),n=a(i),o=s(4),r=a(o),l=s(45),c=a(l),u=s(47),d=a(u),v=s(49),p=a(v),m=s(46),f=a(m),_=s(48),g=a(_);n.default.use(r.default),e.default=new r.default({routes:[{path:"/",name:"Home",component:c.default},{path:"/team",name:"Team",component:d.default},{path:"/videos",name:"Videos",component:p.default},{path:"/photos",name:"Photos",component:f.default},{path:"/tutorials",name:"Tutorials",component:g.default}]})},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(16),n=a(i),o=s(44),r=a(o);e.default={name:"app",components:{jsFooter:r.default},data:function(){return{toggleNav:!1,vimeoVideos:[],instaPosts:[]}},mounted:function(){var t=this;this.$http.get("https://api.vimeo.com/me/videos",{headers:{Authorization:"bearer 1bb5838a1c16bdab1e8eac3add1b6f2a"}}).then(function(e){var s=e.body.data;t.vimeoVideos=s.map(t.mapVimeoProperties)},function(t){}),this.$http.jsonp("https://api.instagram.com/v1/users/self/media/recent/?access_token=2235700352.4ee6f6e.b902f5c21acc4655a71b7043b21cdcfc").then(function(e){var s=JSON.parse((0,n.default)(e.data.data));t.instaPosts=s.map(t.mapInstagramProperties)},function(t){})},computed:{bgVideo:function(t){return this.vimeoVideos.find(function(t){return t.name.includes("##")})},videos:function(t){return this.vimeoVideos.filter(function(t){return t.name.includes("#")})},tutorials:function(t){return this.vimeoVideos.filter(function(t){return t.name.includes("$")})}},methods:{mapInstagramProperties:function(t){var e={img:t.images.thumbnail.url.replace("s150x150","s320x320"),link:t.link,description:t.caption.text,date:new Date(1e3*parseInt(t.created_time)),likes:t.likes.count};return e},mapVimeoProperties:function(t){var e={img:t.pictures.sizes[5].link_with_play_button,link:t.uri,name:t.name,date:new Date(1e3*parseInt(t.created_time))};return e}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["content"]}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),n=a(i);e.default={name:"home",components:{jsInstagramContainer:n.default},props:["bgVideo","instaPosts"]}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(2),n=a(i);e.default={name:"videos",components:{jsInstagramContainer:n.default},props:["instaPosts"]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"videos"}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),n=a(i);e.default={name:"tutorials",components:{jsVimeoContainer:n.default},props:["tutorials"]}},function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=s(3),n=a(i);e.default={name:"videos",components:{jsVimeoContainer:n.default},props:["videos"]}},,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,s){t.exports=s.p+"static/img/Just_Shred_Photos.3c24c6d.png"},function(t,e,s){t.exports=s.p+"static/img/Just_Shred_Team.0d05cf7.png"},function(t,e,s){t.exports=s.p+"static/img/Just_Shred_Tutorials.8d43bed.png"},function(t,e,s){t.exports=s.p+"static/img/Just_Shred_Videos.39c7ca4.png"},function(t,e,s){t.exports=s.p+"static/img/js_logo_black_nav.0b1270c.png"},function(t,e,s){t.exports=s.p+"static/img/js_logo_white.e627338.png"},function(t,e,s){t.exports=s.p+"static/img/andy.6d9924d.jpg"},function(t,e,s){t.exports=s.p+"static/img/benni.f360b3a.jpg"},function(t,e,s){t.exports=s.p+"static/img/tobi.28ed1e7.jpg"},function(t,e,s){t.exports=s.p+"static/img/Arbor.0ff7ae5.png"},function(t,e,s){t.exports=s.p+"static/img/Ichthys.548f435.png"},function(t,e,s){t.exports=s.p+"static/img/LeCannabis.76d9176.png"},function(t,e,s){t.exports=s.p+"static/img/Madrid.7d481f0.png"},function(t,e,s){t.exports=s.p+"static/img/Nitro.e27d536.png"},function(t,e,s){t.exports=s.p+"static/img/SportMueller.0beec8d.png"},function(t,e,s){s(25);var a=s(1)(s(7),s(56),null,null);t.exports=a.exports},function(t,e,s){s(22);var a=s(1)(s(8),s(53),null,null);t.exports=a.exports},function(t,e,s){s(26);var a=s(1)(s(11),s(57),null,null);t.exports=a.exports},function(t,e,s){s(27);var a=s(1)(s(12),s(58),null,null);t.exports=a.exports},function(t,e,s){s(24);var a=s(1)(s(13),s(55),null,null);t.exports=a.exports},function(t,e,s){s(20);var a=s(1)(s(14),s(51),null,null);t.exports=a.exports},function(t,e,s){s(23);var a=s(1)(s(15),s(54),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"vimeo-container"},t._l(t.content,function(t){return s("div",{staticClass:"vimeo-container--post"},[s("iframe",{staticClass:"vimeo-container--video",attrs:{src:"https://player.vimeo.com/video/"+t.link.slice(8)+"?badge=1&autopause=1&player_id=0",width:"1600",height:"900",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})],1)}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("Tutorials")]),t._v(" "),s("div",{staticClass:"wrap--vimeo"},[s("jsVimeoContainer",{attrs:{content:t.tutorials.slice(0,3)}})],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.content?s("div",{staticClass:"items"},t._l(t.content,function(e){return s("div",{staticClass:"items--item"},[s("a",{attrs:{href:""}},[s("img",{attrs:{src:e.img,alt:e.title}}),t._v(" "),s("h2",{staticClass:"overlay-title"},[t._v(t._s(e.description.slice(0,15)+"..."))])])])})):t._e()},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"social"},[s("h2",{staticClass:"social--header-white"},[t._v("Follow us")]),t._v(" "),s("div",{staticClass:"social--icons"},[s("a",{attrs:{href:"https://www.facebook.com/jstshrd/",target:"blank"}},[s("svg",{staticClass:"social--icons-white",attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[s("path",{attrs:{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0","fill-rule":"nonzero"}})])]),t._v(" "),s("a",{attrs:{href:"https://www.instagram.com/jstshrd/",target:"blank"}},[s("svg",{staticClass:"social--icons-white",attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[s("path",{attrs:{d:"M8 0C5.827 0 5.555.01 4.702.048 3.85.088 3.27.222 2.76.42c-.526.204-.973.478-1.417.923-.445.444-.72.89-.923 1.417-.198.51-.333 1.09-.372 1.942C.008 5.555 0 5.827 0 8s.01 2.445.048 3.298c.04.852.174 1.433.372 1.942.204.526.478.973.923 1.417.444.445.89.72 1.417.923.51.198 1.09.333 1.942.372.853.04 1.125.048 3.298.048s2.445-.01 3.298-.048c.852-.04 1.433-.174 1.942-.372.526-.204.973-.478 1.417-.923.445-.444.72-.89.923-1.417.198-.51.333-1.09.372-1.942.04-.853.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.852-.174-1.433-.372-1.942-.204-.526-.478-.973-.923-1.417-.444-.445-.89-.72-1.417-.923-.51-.198-1.09-.333-1.942-.372C10.445.008 10.173 0 8 0zm0 1.44c2.136 0 2.39.01 3.233.048.78.036 1.203.166 1.485.276.374.145.64.318.92.598.28.28.453.546.598.92.11.282.24.705.276 1.485.038.844.047 1.097.047 3.233s-.01 2.39-.05 3.233c-.04.78-.17 1.203-.28 1.485-.15.374-.32.64-.6.92-.28.28-.55.453-.92.598-.28.11-.71.24-1.49.276-.85.038-1.1.047-3.24.047s-2.39-.01-3.24-.05c-.78-.04-1.21-.17-1.49-.28-.38-.15-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.24-.71-.28-1.49-.03-.84-.04-1.1-.04-3.23s.01-2.39.04-3.24c.04-.78.17-1.21.28-1.49.14-.38.32-.64.6-.92.28-.28.54-.46.92-.6.28-.11.7-.24 1.48-.28.85-.03 1.1-.04 3.24-.04zm0 2.452c-2.27 0-4.108 1.84-4.108 4.108 0 2.27 1.84 4.108 4.108 4.108 2.27 0 4.108-1.84 4.108-4.108 0-2.27-1.84-4.108-4.108-4.108zm0 6.775c-1.473 0-2.667-1.194-2.667-2.667 0-1.473 1.194-2.667 2.667-2.667 1.473 0 2.667 1.194 2.667 2.667 0 1.473-1.194 2.667-2.667 2.667zm5.23-6.937c0 .53-.43.96-.96.96s-.96-.43-.96-.96.43-.96.96-.96.96.43.96.96z"}})])]),t._v(" "),s("a",{attrs:{href:"https://vimeo.com/jstshrd",target:"blank"}},[s("svg",{staticClass:"social--icons-white",attrs:{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"}},[s("path",{attrs:{d:"M15.992 4.275c-.07 1.56-1.16 3.697-3.263 6.41-2.18 2.832-4.02 4.248-5.53 4.248-.94 0-1.72-.862-2.37-2.588L3.55 7.6c-.48-1.724-.993-2.587-1.542-2.587-.12 0-.538.252-1.255.755L0 4.796C.79 4.1 1.568 3.406 2.335 2.71c1.053-.912 1.844-1.39 2.37-1.44 1.246-.12 2.012.733 2.3 2.56.31 1.97.526 3.194.647 3.673.36 1.634.754 2.45 1.185 2.45.335 0 .838-.53 1.51-1.59.67-1.06 1.028-1.866 1.076-2.42.096-.915-.263-1.374-1.077-1.374-.383 0-.778.08-1.185.26.79-2.58 2.29-3.84 4.51-3.76 1.65.04 2.42 1.11 2.33 3.2z","fill-rule":"nonzero"}})])])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("Videos")]),t._v(" "),s("jsVimeoContainer",{attrs:{content:t.videos.slice(0,9)}})],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c||e;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"team"},[a("h1",[t._v("TEAM")]),t._v(" "),a("div",{staticClass:"team-container"},[a("div",{staticClass:"member"},[a("img",{staticClass:"u-max-full-width",attrs:{src:s(36)}})]),t._v(" "),a("div",{staticClass:"member"},[a("img",{staticClass:"u-max-full-width",attrs:{src:s(35)}})]),t._v(" "),a("div",{staticClass:"member"},[a("img",{staticClass:"u-max-full-width",attrs:{src:s(34)}})])]),t._v(" "),a("h1",[t._v("SPONSORS")]),t._v(" "),a("div",{staticClass:"sponsors-container"},[a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://madridskateboards.com/",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(40)}})])]),t._v(" "),a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://www.talk-about.org/leben-ist-mehr/",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(38)}})])]),t._v(" "),a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://nitrousa.com/de",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(41)}})])]),t._v(" "),a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://arborcollective.com/",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(37)}})])]),t._v(" "),a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://www.sport-mueller.de/",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(42)}})])]),t._v(" "),a("div",{staticClass:"sponsor"},[a("a",{attrs:{href:"http://www.lecannabis.com/de/",target:"_blank"}},[a("img",{staticClass:"img",attrs:{src:s(39)}})])])])])])}]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app"},[a("header",{staticClass:"header",class:{toggleNav:t.toggleNav}},[a("img",{staticClass:"header--logo",attrs:{src:s(32),alt:""}}),t._v(" "),a("div",{staticClass:"header--burger",on:{click:function(e){t.toggleNav=!t.toggleNav}}}),t._v(" "),a("section",{staticClass:"navigation"},[a("router-link",{staticClass:"navigation__element",attrs:{to:"/"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("h3",{staticClass:"navigation--link"},[t._v("Home")])]),t._v(" "),a("router-link",{staticClass:"navigation__element",attrs:{to:"/team"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("h3",{staticClass:"navigation--link"},[t._v("Team")])]),t._v(" "),a("router-link",{staticClass:"navigation__element",attrs:{to:"/videos"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("h3",{staticClass:"navigation--link"},[t._v("Videos")])]),t._v(" "),a("router-link",{staticClass:"navigation__element",attrs:{to:"/photos"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("h3",{staticClass:"navigation--link"},[t._v("Photos")])]),t._v(" "),a("router-link",{staticClass:"navigation__element",attrs:{to:"/tutorials"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("h3",{staticClass:"navigation--link"},[t._v("Tutorials")])])],1)]),t._v(" "),a("main",[a("router-view",{attrs:{vimeoVideos:t.vimeoVideos,instaPosts:t.instaPosts,bgVideo:t.bgVideo,videos:t.videos,tutorials:t.tutorials}})],1),t._v(" "),a("jsFooter")],1)},staticRenderFns:[]}},function(t,e,s){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"video-banner"},[a("img",{staticClass:"video-banner-thumbnail",attrs:{src:s(33),alt:""}}),t._v(" "),t.bgVideo?a("iframe",{staticClass:"video-banner-video",attrs:{frameborder:"0",src:"https://player.vimeo.com/video/"+t.bgVideo.link.slice(8)+"?background=1"}}):t._e()],1),t._v(" "),t._m(0),t._v(" "),a("section",[a("div",{staticClass:"items"},[a("div",{staticClass:"items--item"},[a("router-link",{attrs:{to:"/team"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("img",{attrs:{src:s(29),alt:"team"}}),t._v(" "),a("h2",{staticClass:"overlay-title"},[t._v("Team")])])],1),t._v(" "),a("div",{staticClass:"items--item"},[a("router-link",{attrs:{to:"/videos"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("img",{attrs:{src:s(31),alt:"videos"}}),t._v(" "),a("h2",{staticClass:"overlay-title"},[t._v("Videos")])])],1),t._v(" "),a("div",{staticClass:"items--item"},[a("router-link",{attrs:{to:"/photos"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("img",{attrs:{src:s(28),alt:"photos"}}),t._v(" "),a("h2",{staticClass:"overlay-title"},[t._v("Photos")])])],1),t._v(" "),a("div",{staticClass:"items--item"},[a("router-link",{attrs:{to:"/tutorials"},nativeOn:{click:function(e){t.$scrollToTop,t.toggleNav=!1}}},[a("img",{attrs:{src:s(30),alt:"tutorials"}}),t._v(" "),a("h2",{staticClass:"overlay-title"},[t._v("Tutorials")])])],1)])]),t._v(" "),a("div",{staticClass:"wrap--instagram"},[a("h4",{staticClass:"wrap--instagram-title"},[t._v("Follow us on Instagram")]),t._v(" "),a("jsInstagramContainer",{attrs:{content:t.instaPosts.slice(0,3)}})],1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h4",{staticClass:"wrap--description"},[s("span",{staticClass:"wrap--description-emphasize"},[t._v("Just Shred – ")]),t._v(" From the highest mountains to the most sketchy roads. We are a german snowboard and longboard crew and we love to shred the mountains and shoot videos.")])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrap"},[s("h1",[t._v("Photos")]),t._v(" "),s("div",{staticClass:"wrap--instagram"},[s("jsInstagramContainer",{attrs:{content:t.instaPosts.slice(0,12)}})],1)])},staticRenderFns:[]}},,function(t,e){}]);
//# sourceMappingURL=app.39a191bb0b6021eb374f.js.map