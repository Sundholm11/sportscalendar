(function(t){function e(e){for(var n,o,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),r()}function r(){for(var t,e=0;e<s.length;e++){for(var r=s[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=r[0]))}return t}var n={},a={app:0},s=[];function o(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=n,o.d=function(t,e,r){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(r,n,function(e){return t[e]}.bind(null,n));return r},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;s.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var n=r("85ec"),a=r.n(n);a.a},"15ec":function(t,e,r){"use strict";var n=r("b523"),a=r.n(n);a.a},4944:function(t,e,r){"use strict";var n=r("8ab3"),a=r.n(n);a.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=r("5f5b"),s=(r("f9e3"),r("2dd8"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("Banner"),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[t._v("Sports")]),t._v(" | "),r("router-link",{attrs:{to:"/gyms"}},[t._v("Gyms")])],1),r("router-view")],1)}),o=[],i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"banner"}},[r("h1",{attrs:{id:"title"}},[t._v("Welcome to sportscalendar")]),r("div",{attrs:{id:"metatitle"}},[t._v(" Quick and easy access to view daily sports - for more info, visit "),r("a",{attrs:{id:"cslink",href:"https://www.campussport.fi/fi/etusivu/"}},[t._v("CampusSport")])])])}],u=(r("4944"),r("2877")),l={},p=Object(u["a"])(l,i,c,!1,null,"827f1848",null),d=p.exports,f={components:{Banner:d}},m=f,v=(r("034f"),Object(u["a"])(m,s,o,!1,null,null,null)),b=v.exports,h=r("8c4f"),y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Gyms")]),r("b-container",[r("b-dropdown",{attrs:{split:"",dropright:"",variant:"outline-dark","split-variant":"outline-dark"},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._v(" Displaying visits: "+t._s(t.selectedGym)+" ")]},proxy:!0}])},t._l(t.gymNames,(function(e,n){return r("b-dropdown-item",{key:e,attrs:{disabled:0===t.gyms.length},on:{click:function(r){return t.setSelectedGym(e,n)}}},[t._v(t._s(e))])})),1)],1),r("hr",{attrs:{id:"bigdivider"}}),0!==t.gyms.length?r("b-container",{attrs:{variant:"outline"}},[r("b-row",[r("b-col",[t._v("Time")]),r("b-col",[t._v("Mon")]),r("b-col",[t._v("Tue")]),r("b-col",[t._v("Wed")]),r("b-col",[t._v("Thu")]),r("b-col",[t._v("Fri")]),r("b-col",[t._v("Sat")]),r("b-col",[t._v("Sun")])],1),r("hr"),null!==t.selectedHeatmap?r("div",t._l(t.numbers,(function(e){return r("b-row",{key:e},[r("b-col",[t._v(t._s(6+e+".00"))]),t._l(t.weekLength,(function(n){return r("b-col",{key:n},[t._v(t._s(t.displayVisit(t.selectedHeatmap[n-1][e+1])))])}))],2)})),1):t._e()],1):r("div",[r("h5",[t._v("Loading gyms...")])])],1)},g=[],_=(r("a630"),r("d3b7"),r("ac1f"),r("3ca3"),r("1276"),r("ddb0"),r("5530")),w=r("3835"),k=r("2f62"),O={data:function(){return{selectedGym:null,selectedHeatmap:null,gymNames:["Asa","Educarium","Formis","Roddis","Ruiskatu"],numbers:Array.from(Array(17).keys())}},methods:{setSelectedGym:function(t,e){this.selectedGym=t,this.selectedHeatmap=this.gyms[e]},displayVisit:function(t){var e=t.split("-"),r=Object(w["a"])(e,2),n=r[1];return void 0===n?"Closed":n}},computed:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["gyms"])),{},{weekLength:function(){return this.selectedHeatmap.length}})},S=O,j=(r("f9e0"),Object(u["a"])(S,y,g,!1,null,"5cd43354",null)),x=j.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h1",[t._v("Sports")]),r("b-container",[r("b-row",{staticClass:"justify-content-md-center d-flex align-items-center"},[r("b-col",{attrs:{md:"auto"}},[r("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.changeDay(-1)}}},[t._v("Previous day")])],1),r("b-col",{attrs:{md:"auto"}},[r("div",[t._v("Displaying: "+t._s(t.selectedDate))])]),r("b-col",{attrs:{md:"auto"}},[r("b-button",{attrs:{variant:"outline-dark",size:"sm"},on:{click:function(e){return t.changeDay(1)}}},[t._v("Next day")])],1)],1)],1),r("SportsTable",{attrs:{day:t.date.getDay()}})],1)},G=[],R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return 0!==t.sports.length?r("b-container",{attrs:{id:"sportstable"}},[r("b-row",{attrs:{id:"mainRow"}},[r("b-col",[t._v("Time")]),r("b-col",[t._v("Edu liikuntasali")]),r("b-col",[t._v("Edu voimistelusali")]),r("b-col",[t._v("Sport Sirkka")]),r("b-col",[t._v("Iskeri")])],1),t._l(t.numbers,(function(e){return r("b-row",{key:e,attrs:{id:"secondaryRow"}},[r("b-col",{attrs:{id:"timeCol"}},[t._v(t._s(7+e+".00 - "+(8+e)+".00"))]),t._l(t.sportsLength,(function(n){return r("SportsClass",{key:n,attrs:{sport:t.displayClass(t.sports[n-1][t.dataForDay],e)}})}))],2)}))],2):r("div",[r("hr"),r("h5",[t._v("Loading sports...")])])},C=[],T=(r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-col",{class:[t.sportsBase,t.emptyName?"":[t.activeClass,t.cardColor]],on:{mouseover:function(e){t.hover=!0},mouseleave:function(e){t.hover=!1}}},[t._v(" "+t._s(t.name)+" ")])}),E=[],$=(r("b0c0"),{props:{sport:Array},data:function(){return{hover:!1,activeClass:"sportsActive",sportsBase:"sportsCol"}},computed:{name:function(){return this.sport[0]},emptyName:function(){return""===this.name},cardColor:function(){var t;if(this.sport.length<3)return"";switch(this.sport[3]){case"t1":t="sportsGray";break;case"t2":t="sportsGreen";break;case"t3":t="sportsRed";break;case"t4":t="sportsOrange";break;case"t5":t="sportsBlue";break;case"t6":t="sportsYellow";break;case"t7":t="sportsDarkGreen";break;case"t9":t="sportsDarkRed";break}return t}}}),P=$,A=(r("15ec"),Object(u["a"])(P,T,E,!1,null,"43245ea6",null)),F=A.exports,L={props:{day:Number},data:function(){return{numbers:Array.from(Array(16).keys())}},components:{SportsClass:F},methods:{displayClass:function(t,e){return void 0===t[e]||0===t[e].length?[""]:t[e]}},computed:Object(_["a"])(Object(_["a"])({},Object(k["b"])(["sports"])),{},{dataForDay:function(){return this.day>0?this.day-1:6},sportsLength:function(){return this.sports.length}})},N=L,B=(r("ac4f"),Object(u["a"])(N,R,C,!1,null,"bab7593a",null)),H=B.exports,M={data:function(){return{selectedDate:new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric"}).format(this.date),date:new Date}},components:{SportsTable:H},methods:{changeDay:function(t){this.date.setDate(this.date.getDate()+t),this.selectedDate=new Intl.DateTimeFormat("en-US",{weekday:"long",month:"long",day:"numeric"}).format(this.date)}}},I=M,z=Object(u["a"])(I,D,G,!1,null,null,null),J=z.exports;n["default"].use(h["a"]);var U=[{path:"/",name:"Sports",component:J},{path:"/gyms",name:"Gyms",component:x}],V=new h["a"]({mode:"history",base:"/",routes:U}),W=V,Q=(r("d81d"),r("96cf"),r("1da1")),Y=r("bc3a"),q=r.n(Y),K=function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("http://localhost:3003/api/sports");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),X=function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,q.a.get("http://localhost:3003/api/gyms");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Z={getSports:K,getGyms:X};n["default"].use(k["a"]);var tt=new k["a"].Store({state:{sports:[],gyms:[]},mutations:{retrieveSports:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.getSports();case 2:r=t.sent,r.map((function(t){return e.sports.push(t)}));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}(),retrieveGyms:function(){var t=Object(Q["a"])(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Z.getGyms();case 2:r=t.sent,r.map((function(t){return e.gyms.push(t)}));case 4:case"end":return t.stop()}}),t)})));function e(e){return t.apply(this,arguments)}return e}()},actions:{getSports:function(t){var e=t.commit;e("retrieveSports")},getGyms:function(t){var e=t.commit;e("retrieveGyms")}},modules:{}});n["default"].use(a["a"]),n["default"].config.productionTip=!1,new n["default"]({router:W,store:tt,created:function(){this.$store.dispatch("getSports"),this.$store.dispatch("getGyms")},render:function(t){return t(b)}}).$mount("#app")},6498:function(t,e,r){},"6fa1":function(t,e,r){},"85ec":function(t,e,r){},"8ab3":function(t,e,r){},ac4f:function(t,e,r){"use strict";var n=r("6fa1"),a=r.n(n);a.a},b523:function(t,e,r){},f9e0:function(t,e,r){"use strict";var n=r("6498"),a=r.n(n);a.a}});
//# sourceMappingURL=app.97596b03.js.map