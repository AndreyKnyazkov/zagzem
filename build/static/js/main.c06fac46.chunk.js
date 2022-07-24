(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[5],{19:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n(2),a=n(5),c=n(20),s=n(11),i=n(21),o=n(22),l=n(0),u=n.n(l),d=n(4),f=u.a.createContext({}),p=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={villages:[],villagesPromo:[],filteredVillages:[],selectedVillage:null,selectedRoads:[],selectedAreas:[],selectedCommunications:[],selectedSafety:[],selectedVillageRoads:[],selectedVillageTypes:[],selectedWaysToGet:[],selectedFromMkad:90,selectedPriceFrom:2e7,selectedTypeProperty:1,selectedWorldSides:[],selectedRoadsBtn:[],selectedAreasBtn:[],selectedFromMkadBtn:90,selectedPriceBtn:2e7,uniqRoads:[],uniqAreas:[],uniqSides:[],uniqPrices:[],defaultSelectedFromMkad:90,defaultSelectedPriceFrom:2e7},e.handlerArr=function(e,t){var n=e.indexOf(t);return-1===n?e.push(t):e.splice(n,1),e},e.setVillagesPromo=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({villagesPromo:n});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.setVillages=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){var a,c,s,i,o,l,u,d,f,p;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=[],c=[],s=[],i=0;case 4:if(!(i<n.length)){t.next=23;break}return o=n[i].road,l=n[i].area,u=n[i].sideOfMkad,t.next=10,c.indexOf(o);case 10:return d=t.sent,t.next=13,s.indexOf(l);case 13:return f=t.sent,t.next=16,a.indexOf(u);case 16:p=t.sent,-1===d&&c.push(o),-1===f&&s.push(l),-1===p&&a.push(u);case 20:i++,t.next=4;break;case 23:return t.next=25,e.setState({villages:n,filteredVillages:n,uniqRoads:c,uniqAreas:s,uniqSides:a});case 25:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.filtered=Object(a.a)(Object(r.a)().mark((function t(){var n,a,c,s,i,o,l,u,d,f,p;return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.state.villages,a=[1,2,3,4,5,6],c=0,s=0,i=e.state.uniqRoads,o=e.state.uniqAreas,l=[1,2],e.state.selectedVillageRoads.length>0&&(a=e.state.selectedVillageRoads),""!==e.state.selectedFromMkad&&(c=1*e.state.selectedFromMkad),""!==e.state.selectedPriceFrom&&(s=1*e.state.selectedPriceFrom),e.state.selectedRoads.length>0&&(i=e.state.selectedRoads),e.state.selectedAreas.length>0&&(o=e.state.selectedAreas),e.state.selectedVillageTypes.length>0&&(l=e.state.selectedVillageTypes),u=e.state.selectedSafety,d=e.state.selectedWaysToGet,f=e.state.selectedCommunications,p=[],t.t0=n,t.next=20,function(e){var t=!0;if(f.length>0){for(var n=e.communications,r=Object.keys(n),v=[],h=0;h<r.length;h++)v.push(1*r[h]);for(var O=0;O<f.length;O++)-1===v.indexOf(f[O])&&(t=!1)}var j=!0;if(d.length>0){for(var b=e.waysToGet,m=Object.keys(b),y=[],x=0;x<m.length;x++)y.push(1*m[x]);for(var g=0;g<d.length;g++)-1===y.indexOf(d[g])&&(j=!1)}var w=!0;if(u.length>0)for(var k=e.safety,S=0;S<u.length;S++)-1===k.indexOf(u[S])&&(w=!1);-1!==a.indexOf(e.roadIn)&&-1!==l.indexOf(e.type)&&-1!==i.indexOf(e.road)&&-1!==o.indexOf(e.area)&&e.fromMkad<=c&&e.priceLands[0]<=s&&t&&j&&w&&p.push(e)};case 20:t.t1=t.sent,t.t0.forEach.call(t.t0,t.t1),e.setState({filteredVillages:p});case 23:case"end":return t.stop()}}),t)}))),e.resetFilter=Object(a.a)(Object(r.a)().mark((function t(){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({filteredVillages:e.state.villages,selectedVillageTypes:[],selectedVillageRoads:[],selectedRoads:[],selectedRoadsBtn:[],selectedAreasBtn:[],selectedAreas:[],selectedFromMkadBtn:e.state.defaultSelectedFromMkad,selectedPriceBtn:e.state.defaultSelectedPriceFrom,selectedCommunications:[],selectedSafety:[],selectedWaysToGet:[],selectedFromMkad:e.state.defaultSelectedFromMkad,selectedPriceFrom:e.state.defaultSelectedPriceFrom});case 2:case"end":return t.stop()}}),t)}))),e.selectTypeProperty=function(t){e.setState({selectedTypeProperty:t.target.value})},e.selectFromMkad=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedFromMkad:1*n.replace(/[^+\d]/g,"")});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectPriceFrom=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedPriceFrom:1*n.replace(/[^+\d]/g,"")});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectWorldSide=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedWorldSides:e.handlerArr(e.state.selectedWorldSides,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectRoad=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedRoads:e.handlerArr(e.state.selectedRoads,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectRoadBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedRoadsBtn:e.handlerArr(e.state.selectedRoadsBtn,n)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectAreaBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedAreasBtn:e.handlerArr(e.state.selectedAreasBtn,n)});case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectFromMkadBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedFromMkadBtn:1*n.replace(/[^+\d]/g,"")});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectPriceBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedPriceBtn:1*n.replace(/[^+\d]/g,"")});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectArea=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedAreas:e.handlerArr(e.state.selectedAreas,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectVillageRoad=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedVillageRoads:e.handlerArr(e.state.selectedVillageRoads,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectVillageType=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedVillageTypes:e.handlerArr(e.state.selectedVillageTypes,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectCommunication=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedCommunications:e.handlerArr(e.state.selectedCommunications,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectSafety=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedSafety:e.handlerArr(e.state.selectedSafety,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectWayToGet=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.setState({selectedWaysToGet:e.handlerArr(e.state.selectedWaysToGet,n)});case 2:return t.next=4,e.filtered();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyVillageType=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.resetFilter();case 2:return t.next=4,e.selectVillageType(n);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyArea=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectArea(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyRoad=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectRoad(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyDist=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectFromMkad(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyPrice=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectPriceFrom(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyRoadBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectRoadBtn(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyAreaBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectAreaBtn(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyFromMkadBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectFromMkadBtn(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.selectOnlyPriceBtn=function(){var t=Object(a.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.selectPriceBtn(n);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(s.a)(n,[{key:"render",value:function(){return Object(d.jsx)(f.Provider,{value:{villages:this.state.villages,villagesPromo:this.state.villagesPromo,uniqRoads:this.state.uniqRoads,uniqAreas:this.state.uniqAreas,uniqPrices:this.state.uniqPrices,filteredVillages:this.state.filteredVillages,selectedRoads:this.state.selectedRoads,selectedAreas:this.state.selectedAreas,selectedSafety:this.state.selectedSafety,selectedVillageRoads:this.state.selectedVillageRoads,selectedVillageTypes:this.state.selectedVillageTypes,selectedWaysToGet:this.state.selectedWaysToGet,selectedCommunications:this.state.selectedCommunications,selectedFromMkad:this.state.selectedFromMkad,selectedToMkad:this.state.selectedToMkad,selectedPriceFrom:this.state.selectedPriceFrom,selectedPriceTo:this.state.selectedPriceTo,selectedTypeProperty:this.state.selectedTypeProperty,selectedWorldSides:this.state.selectedWorldSides,setVillages:this.setVillages,setVillagesPromo:this.setVillagesPromo,selectTypeProperty:this.selectTypeProperty,selectFromMkad:this.selectFromMkad,selectPriceFrom:this.selectPriceFrom,selectSafety:this.selectSafety,selectCommunication:this.selectCommunication,selectRoad:this.selectRoad,selectArea:this.selectArea,selectVillageRoad:this.selectVillageRoad,selectVillageType:this.selectVillageType,selectWayToGet:this.selectWayToGet,selectWorldSide:this.selectWorldSide,resetFilter:this.resetFilter,selectOnlyVillageType:this.selectOnlyVillageType,selectOnlyArea:this.selectOnlyArea,selectOnlyRoad:this.selectOnlyRoad,selectOnlyDist:this.selectOnlyDist,selectOnlyPrice:this.selectOnlyPrice,selectOnlyRoadBtn:this.selectOnlyRoadBtn,selectOnlyAreaBtn:this.selectOnlyAreaBtn,selectOnlyFromMkadBtn:this.selectOnlyFromMkadBtn,selectOnlyPriceBtn:this.selectOnlyPriceBtn,selectedRoadsBtn:this.state.selectedRoadsBtn,selectedAreasBtn:this.state.selectedAreasBtn,selectedFromMkadBtn:this.state.selectedFromMkadBtn,selectedPriceBtn:this.state.selectedPriceBtn},children:this.props.children})}}]),n}(l.Component);window.state=(new p).state,t.b=f},41:function(e,t,n){"use strict";t.a=n.p+"static/media/logo.8cb0d802.png"},56:function(e,t,n){"use strict";n.r(t),n.d(t,"villages",(function(){return D})),n.d(t,"villagesThumbnail",(function(){return I})),n.d(t,"slider",(function(){return N}));var r=n(2),a=n(14),c=n(5),s=n(0),i=n.n(s),o=n(38),l=n.n(o),u=(n(62),n(63),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f,p=n(20),v=n(11),h=n(21),O=n(22),j=n(19),b=n(49),m=n(50),y=n(85),x=n(41),g=(n(65),n(4)),w=m.a.img(f||(f=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media (prefers-reduced-motion: no-preference) {\n    animation: rotate-logo-spin infinite 1s linear;\n  }\n  @keyframes rotate-logo-spin {\n  from {\n    transform: scale(1);\n  }\n  to {\n    transform: scale(1.2);\n  }\n"]))),k=function(){return Object(g.jsx)(y.a,{container:!0,justifyContent:"center",alignItems:"center",style:{position:"fixed",height:"100vh",width:"100vw",top:"0"},children:Object(g.jsx)("div",{style:{position:"relative"},children:Object(g.jsx)(w,{src:x.a,style:{width:"200px",height:"200px"}})})})},S=n(3),P=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(11)]).then(n.bind(null,336))})),T=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(10)]).then(n.bind(null,327))})),A=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(3),n.e(4),n.e(14)]).then(n.bind(null,321))})),R=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(4),n.e(17),n.e(12)]).then(n.bind(null,328))})),B=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(3),n.e(7)]).then(n.bind(null,326))}));function F(){return Object(g.jsxs)(S.c,{children:[Object(g.jsx)(S.a,{exact:!0,path:"/contact",element:Object(g.jsx)(P,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/services",element:Object(g.jsx)(T,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/villages",element:Object(g.jsx)(A,{})}),Object(g.jsx)(S.a,{exact:!0,path:"/village/",element:Object(g.jsx)(R,{}),children:Object(g.jsx)(S.a,{path:":id",element:Object(g.jsx)(R,{})})}),Object(g.jsx)(S.a,{exact:!0,path:"/",element:Object(g.jsx)(B,{})})]})}var V=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(9),n.e(16)]).then(n.bind(null,335))})),M=Object(s.lazy)((function(){return Promise.all([n.e(1),n.e(15)]).then(n.bind(null,330))})),W=Object(s.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(13)]).then(n.bind(null,314))})),C=function(e){Object(h.a)(n,e);var t=Object(O.a)(n);function n(e){var r;return Object(p.a)(this,n),(r=t.call(this,e)).state={},r}return Object(v.a)(n,[{key:"componentDidMount",value:function(){this.context.setVillages(this.props.villages)}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return Object(g.jsxs)(s.Suspense,{fallback:Object(g.jsx)(k,{}),children:[Object(g.jsx)(V,{}),Object(g.jsx)(M,{children:Object(g.jsx)(F,{})}),Object(g.jsx)(W,{})]})}}]),n}(i.a.Component);C.contextType=j.b;var _=C,E=n(54),L=n(88);var q=function(e){void 0===e&&(e="a"),e=e.trim().split(" ").map((function(e){return e[0].toLowerCase()+e.slice(1)})).join("-");for(var t="",n={"\u0430":"a","\u0431":"b","\u0432":"v","\u0433":"g","\u0434":"d","\u0435":"e","\u0451":"e","\u0436":"zh","\u0437":"z","\u0438":"i","\u0439":"y","\u043a":"k","\u043b":"l","\u043c":"m","\u043d":"n","\u043e":"o","\u043f":"p","\u0440":"r","\u0441":"s","\u0442":"t","\u0443":"u","\u0444":"f","\u0445":"h","\u0446":"c","\u0447":"ch","\u0448":"sh","\u0449":"sch","\u044c":"","\u044b":"y","\u044a":"","\u044d":"e","\u044e":"yu","\u044f":"ya","\u0410":"A","\u0411":"B","\u0412":"V","\u0413":"G","\u0414":"D","\u0415":"E","\u0401":"E","\u0416":"Zh","\u0417":"Z","\u0418":"I","\u0419":"Y","\u041a":"K","\u041b":"L","\u041c":"M","\u041d":"N","\u041e":"O","\u041f":"P","\u0420":"R","\u0421":"S","\u0422":"T","\u0423":"U","\u0424":"F","\u0425":"H","\u0426":"C","\u0427":"Ch","\u0428":"Sh","\u0429":"Sch","\u042c":"","\u042b":"Y","\u042a":"","\u042d":"E","\u042e":"Yu","\u042f":"Ya"},r=0;r<e.length;++r)void 0==n[e[r]]?t+=e[r]:t+=n[e[r]];return t},G=n(34),U=n.n(G),z=n(30),D=[],I=[],N=[],H=Object(E.a)({palette:{type:"light",primary:{main:"#0197fd"},secondary:{main:"#53a321"}},shape:{borderRadius:"15px"}});function K(e){for(var t={},n=Object.entries(e).filter((function(e){return""!==e[1]})),r=0;r<n.length;r++)t[n[r][0]]=n[r][1];return t}function Y(e){for(var t={},n=Object.entries(e).filter((function(e){return!1!==e[1]})),r=0;r<n.length;r++)t[n[r][0]]="object"===typeof n[r][1]?n[r][1].url:n[r][1];return t}function J(e){for(var t={},n=Object.entries(e).filter((function(e){return!1!==e[1]})),r=0;r<n.length;r++)t[n[r][0]]="object"===typeof n[r][1]?n[r][1].sizes.medium_large:n[r][1];return t}function Z(e){var t=Object.entries(e).filter((function(e){return!0===e[1]}))[0];return void 0!==t?+t[0]:0}function $(){return($=Object(c.a)(Object(r.a)().mark((function e(t){var n,c,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t);case 3:if(!(n=e.sent).ok){e.next=14;break}return e.next=7,n.json();case 7:(c=e.sent).forEach((function(e){return D.push(Object(a.a)(Object(a.a)({},null===e||void 0===e?void 0:e.acf),{},{uid:U()(),uname:q(null===e||void 0===e?void 0:e.acf.name),area:null!==e&&void 0!==e&&e.acf.new_area?null===e||void 0===e?void 0:e.acf.new_area:(null===e||void 0===e?void 0:e.acf.area)||null,road:null!==e&&void 0!==e&&e.acf.new_road?null===e||void 0===e?void 0:e.acf.new_road:null===e||void 0===e?void 0:e.acf.road,fromMkad:+(null===e||void 0===e?void 0:e.acf.fromMkad),totalLands:+(null===e||void 0===e?void 0:e.acf.totalLands),price:+(null===e||void 0===e?void 0:e.acf.price),communications:K(null===e||void 0===e?void 0:e.acf.communications),infrastructure:K(null===e||void 0===e?void 0:e.acf.infrastructure),coords:[null===e||void 0===e?void 0:e.acf.coords.latitude,null===e||void 0===e?void 0:e.acf.coords.longitude],bgs:Object.values(Y(null===e||void 0===e?void 0:e.acf.bgs)),descr:[null===e||void 0===e?void 0:e.acf.descr],roadTo:Z(null===e||void 0===e?void 0:e.acf.roadTo),roadIn:Z(null===e||void 0===e?void 0:e.acf.roadIn),type:Z(null===e||void 0===e?void 0:e.acf.type),permittedUse:Object.entries(null===e||void 0===e?void 0:e.acf.permittedUse).filter((function(e){return!0===e[1]}))[0],priceLands:Object.values(null===e||void 0===e?void 0:e.acf.priceLands).map((function(e){return+e})),sideOfMkad:Z(null===e||void 0===e?void 0:e.acf.sideOfMkad),key:q(null===e||void 0===e?void 0:e.acf.name)}))})),c.forEach((function(e){return I.push(Object(a.a)(Object(a.a)({},null===e||void 0===e?void 0:e.acf),{},{uid:U()(),uname:q(null===e||void 0===e?void 0:e.acf.name),area:null!==e&&void 0!==e&&e.acf.new_area?null===e||void 0===e?void 0:e.acf.new_area:(null===e||void 0===e?void 0:e.acf.area)||null,road:null!==e&&void 0!==e&&e.acf.new_road?null===e||void 0===e?void 0:e.acf.new_road:null===e||void 0===e?void 0:e.acf.road,fromMkad:+(null===e||void 0===e?void 0:e.acf.fromMkad),totalLands:+(null===e||void 0===e?void 0:e.acf.totalLands),price:+(null===e||void 0===e?void 0:e.acf.price),communications:K(null===e||void 0===e?void 0:e.acf.communications),infrastructure:K(null===e||void 0===e?void 0:e.acf.infrastructure),coords:[null===e||void 0===e?void 0:e.acf.coords.latitude,null===e||void 0===e?void 0:e.acf.coords.longitude],bgs:Object.values(J(null===e||void 0===e?void 0:e.acf.bgs)),descr:[null===e||void 0===e?void 0:e.acf.descr],roadTo:Z(null===e||void 0===e?void 0:e.acf.roadTo),roadIn:Z(null===e||void 0===e?void 0:e.acf.roadIn),type:Z(null===e||void 0===e?void 0:e.acf.type),permittedUse:Object.entries(null===e||void 0===e?void 0:e.acf.permittedUse).filter((function(e){return!0===e[1]}))[0],priceLands:Object.values(null===e||void 0===e?void 0:e.acf.priceLands).map((function(e){return+e})),sideOfMkad:Z(null===e||void 0===e?void 0:e.acf.sideOfMkad),key:q(null===e||void 0===e?void 0:e.acf.name)}))})),s=Object(g.jsx)(z.a,{basename:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).BASE_URL,children:Object(g.jsx)(L.a,{theme:H,children:Object(g.jsx)(j.a,{children:Object(g.jsx)(_,{villages:D})})})}),l.a.render(s,document.getElementById("root")),e.next=15;break;case 14:throw new Error("Could not fetch ".concat(t));case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})))).apply(this,arguments)}!function(e){$.apply(this,arguments)}("https://skgrouptrans.ru/gp-wp-projects/wp-json/wp/v2/poselki?per_page=100"),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");u?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):d(t,e)}))}}()},62:function(e,t,n){},63:function(e,t,n){}},[[56,6,8]]]);
//# sourceMappingURL=main.c06fac46.chunk.js.map