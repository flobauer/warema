(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={ProductivityStats:"ProductivityStats_ProductivityStats__16iDs",main:"ProductivityStats_main__2ZeZw",title:"ProductivityStats_title__2_T6r",info:"ProductivityStats_info__Q84MU",trends:"ProductivityStats_trends__3WvA-",indexStat:"ProductivityStats_indexStat__249id",iconStat:"ProductivityStats_iconStat__1rj_E"}},221:function(e,t,a){e.exports=a.p+"static/media/icon-meeting-intense.bbdb8923.svg"},222:function(e,t,a){e.exports=a.p+"static/media/icon-meeting-formal.72c63cf4.svg"},224:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(67),c=a.n(r),l=a(5),o=a(226),s=a(42),u=a.n(s);var d=function(e){e.defaultWidth,e.defaultHeight;var t=e.calcWidth,a=void 0===t?64:t,r=e.calcHeight,c=void 0===r?48:r,l=e.video,o=e.setScore,s=Object(n.useRef)(null),d=Object(n.useRef)(null);return Object(n.useEffect)(function(){if(!s.current)return!1;s.current.width=a,s.current.height=c,d.current.width=a,d.current.height=c;var e=s.current.getContext("2d"),t=d.current.getContext("2d"),n=setInterval(function(){e.globalCompositeOperation="difference",e.drawImage(l.current,0,0,a,c);var n=e.getImageData(0,0,a,c);if(!0===s.current.ready){var i=function(e){for(var t=e.data,a=0,n=0;n<t.length;n+=4){var i=.3*t[n]+.6*t[n+1]+.1*t[n+2],r=Math.min(255,i*(255/32));t[n]=0,t[n+1]=r,t[n+2]=0,i>=32&&a++}return a}(n);o(i),t.putImageData(n,0,0)}e.globalCompositeOperation="source-over",e.drawImage(l.current,0,0,a,c),s.current.ready=!0},100);return function(){clearInterval(n)}},[]),i.a.createElement("div",{className:u.a.container},i.a.createElement("canvas",{ref:d}),i.a.createElement("canvas",{className:u.a.hide,ref:s}))},m=a(15);m.c.global.animation=!1;var v=function(e){var t=e.score,a=Object(n.useState)({labels:[],datasets:[{data:[],label:"Activity Monitor",borderColor:"#3F93C6",backgroundColor:["rgba(18, 47, 65, .5)"]}]}),r=Object(l.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)(function(){o(function(e){var a=(new Date).getSeconds();return 60===e.labels.length&&(e.labels.shift(),e.datasets.forEach(function(e){e.data.shift()})),e.labels.push(a),e.datasets.forEach(function(e){e.data.push(t)}),e})},[t]),i.a.createElement(m.b,{data:c,redraw:!0,options:{animation:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{scaleLabel:[{fontColor:"white"}],yAxes:[{display:!1}],xAxes:[{ticks:{maxTicksLimit:6}}]},elements:{point:{radius:0}}}})},f=function(e){var t=e.messages;return 0===t.length?i.a.createElement("p",null,"No Entries yet."):i.a.createElement("ul",null,t.map(function(e){return i.a.createElement("li",null,i.a.createElement("span",null,e.time)," ",e.text)}))},p=a(10),E=a.n(p),h=a(69),_=a.n(h),g=function(e){var t=e.title,a=e.info,n=void 0===a?void 0:a;return i.a.createElement("div",null,i.a.createElement("h2",null,t," ",void 0!==n?i.a.createElement("span",{className:_.a.focus},n):""))},b=a(43),y=a.n(b);m.c.global.defaultFontColor="#3F93C6";var x=function(e){var t=e.index,a=10*t,r={animation:!1,legend:{display:!1},tooltips:{enabled:!1},rotation:-1.1*Math.PI,circumference:1.2*Math.PI,cutoutPercentage:80},c=Object(n.useState)({datasets:[{data:[a,100-a],borderColor:"transparent",backgroundColor:["#3F93C6","#122F41"],label:"Dataset 1"}],labels:["Red","Orange","Yellow","Green","Blue"]}),o=Object(l.a)(c,2),s=o[0];o[1];return i.a.createElement("div",{className:y.a.IndexGraph},i.a.createElement(m.a,{data:s,options:r}),i.a.createElement("div",{className:y.a.label},t))},O=a(70),S=a.n(O),j=(a(221),a(222),function(e){var t=e.index;return i.a.createElement("div",{className:E.a.ProductivityStats},i.a.createElement("div",{className:E.a.title},i.a.createElement(g,{title:"Meeting productivity",info:"high"})),i.a.createElement("div",{className:E.a.main},i.a.createElement("div",{className:E.a.indexStat},i.a.createElement(x,{index:t}),i.a.createElement("p",null,"Meeting Productivity Index"))),i.a.createElement("div",{className:E.a.info},i.a.createElement("div",{className:E.a.iconStat,id:"meeting-type"},i.a.createElement("img",{src:S.a,alt:"iconMeetingAmicable"}),i.a.createElement("div",{className:E.a.label},i.a.createElement("h4",null,"Current Meeting Type:"),i.a.createElement("p",null,"Collegial")))),i.a.createElement("div",{className:E.a.trends},i.a.createElement(g,{title:"Trends"})))}),N=function(){var e=Object(n.useState)(150),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)(function(){var e=setInterval(function(){r(function(e){return e-1})},1e3);return function(){clearInterval(e)}},[]);var c=Math.floor(a/60),o=a-60*c;return i.a.createElement("div",null,c,":",o)},w=a(7),M=a.n(w);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(function(){var e=Object(n.useRef)(void 0),t=Object(n.useState)("quiet"),a=Object(l.a)(t,2),r=a[0],c=a[1],s=Object(n.useState)(0),u=Object(l.a)(s,2),m=u[0],p=u[1],E=Object(n.useState)([]),h=Object(l.a)(E,2),_=h[0],b=h[1],y=Object(n.useState)([]),x=Object(l.a)(y,2),O=x[0];x[1];return Object(n.useEffect)(function(){navigator.mediaDevices.getUserMedia({audio:!1,video:{width:640,height:480}}).then(function(t){e.current.srcObject=t}).catch(function(e){console.log(e)})},[e.current]),Object(n.useEffect)(function(){b(function(e){return 100===e.length&&e.shift(),e.push(m),e});var e=_.reduce(function(e,t){return e+t},0);e<=4e3&&"quiet"!==r&&c("quiet"),e>4e3&&e<=7e3&&"normal"!==r&&c("normal"),e>9e3&&"active"!==r&&c("active")},[m]),i.a.createElement(o.a,null,i.a.createElement("div",{className:M.a.container},i.a.createElement("div",{className:M.a.motioncharts},i.a.createElement(g,{title:"Motion charts",info:m}),i.a.createElement(v,{score:m})),i.a.createElement("div",{className:M.a.videostream},i.a.createElement(g,{title:"Video stream",info:"live"}),i.a.createElement("video",{ref:e,autoPlay:!0})),i.a.createElement("div",{className:M.a.motionstream},i.a.createElement(g,{title:"Motion detection",info:"live"}),i.a.createElement(d,{setScore:p,video:e})),i.a.createElement("div",{className:M.a.productivity},i.a.createElement(j,{index:3.71})),i.a.createElement("div",{className:M.a.participants},i.a.createElement("h2",null,"Participants",i.a.createElement("span",{className:M.a.focus},"6")),"quiet"===r&&i.a.createElement("p",null,"Currently no Meeting"),"normal"===r&&i.a.createElement("p",null,"Formal Meeting"),"active"===r&&i.a.createElement("p",null,"Engaged Meeting")),i.a.createElement("div",{className:M.a.timeschedule},i.a.createElement("h2",null,"Timeschedule"),i.a.createElement(N,null)),i.a.createElement("div",{className:M.a.activitylog},i.a.createElement(g,{title:"Activity log",info:"12:43"}),i.a.createElement(f,{messages:O}))))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports={container:"MotionDetector_container__2F9SI",hide:"MotionDetector_hide__GdL7B"}},43:function(e,t,a){e.exports={IndexGraph:"IndexGraph_IndexGraph__2DGG8",label:"IndexGraph_label__glnsD"}},69:function(e,t,a){e.exports={focus:"DashboardElementHeader_focus__2D8ly"}},7:function(e,t,a){e.exports={container:"App_container__3Q3C8",motioncharts:"App_motioncharts__1PHMW",videostream:"App_videostream__21OAi",motionstream:"App_motionstream__3RZAq",productivity:"App_productivity__DWWuJ",participants:"App_participants__2ei75",timeschedule:"App_timeschedule__2hW_N",activitylog:"App_activitylog__cxv8r"}},70:function(e,t,a){e.exports=a.p+"static/media/icon-meeting-amicable.f84a9769.svg"},71:function(e,t,a){e.exports=a(224)}},[[71,2,1]]]);
//# sourceMappingURL=main.26bf65ba.chunk.js.map