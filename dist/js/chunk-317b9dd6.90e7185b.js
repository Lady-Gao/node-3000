(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-317b9dd6"],{"05c0":function(t,e,i){"use strict";i("7f7f"),i("20d6"),i("ac6a");var a=i("cebc"),n=i("3f4e"),r=i("2f62"),s={name:"CvPublictreeContent",components:{CvContent:n.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(a.a)({},Object(r.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var t=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(t())},mounted:function(){var t=this._treeMethods.$refs.tree.reference().ztreeApi;t()&&t().checkAllNodes(!1)},methods:Object(a.a)({},Object(r.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(t){this.condition=t},vehicle_Monitor:function(t){var e=t.data;if(t.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(t);case"single":return this.vehicleMonitor(e[0])}},vehicle_Monitor_multi:function(t){var e=this,i=t.data;switch(t.name){case"check":this.entryList=this.entryList.concat(i);break;case"cancel":i.forEach(function(t){var i=e.entryList.findIndex(function(e){return e.id==t.id});0<=i&&e.entryList.splice(i,1)})}this.vehicleMonitor(this.entryList)}})},o=(i("45d7"),i("2877")),c=Object(o.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("cv-content",{ref:"content",attrs:{loading:t.loading,noresize:t.noresize}},[t.model?i("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":t.vehicleCondition,"is-checked":t.isCheck,"tree-data":t.vehicle_data,"online-monitor":t.onlineList,"vehicle-monitor":t.socketVehicle,"attention-monitor":t.isAttention,"enterprise-fleet-monitor":t.socketEnterprise,"node-monitor":t.vehicle_Monitor},on:{"vehicle-choose-search":t.handlerVehicleSearch},slot:"aside"}):t._e(),t._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;c.install=function(t){t.component(c.name,c)},e.a=c},"1af6":function(t,e,i){var a=i("63b6");a(a.S,"Array",{isArray:i("9003")})},"1c4c":function(t,e,i){"use strict";var a=i("9b43"),n=i("5ca1"),r=i("4bf8"),s=i("1fa8"),o=i("33a4"),c=i("9def"),l=i("f1ae"),h=i("27ee");n(n.S+n.F*!i("5cc5")(function(t){Array.from(t)}),"Array",{from:function(t,e,i){var n,u,d,f,v=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=1<g?e:void 0,S=void 0!==m,y=0,_=h(v);if(S&&(m=a(m,2<g?i:void 0,2)),null==_||p==Array&&o(_))for(u=new p(n=c(v.length));y<n;y++)l(u,y,S?m(v[y],y):v[y]);else for(f=_.call(v),u=new p;!(d=f.next()).done;y++)l(u,y,S?s(f,m,[d.value,y],!0):d.value);return u.length=y,u}})},"20fd":function(t,e,i){"use strict";var a=i("d9f6"),n=i("aebd");t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},"3b00":function(t,e,i){},"45d7":function(t,e,i){"use strict";var a=i("6e18");i.n(a).a},"4ac7":function(t,e,i){},"4ce5":function(t,e,i){"use strict";var a=i("3b00");i.n(a).a},"4f7f":function(t,e,i){"use strict";var a=i("c26b"),n=i("b39a");t.exports=i("e0b8")("Set",function(t){return function(e){return t(this,0<arguments.length?e:void 0)}},{add:function(t){return a.def(n(this,"Set"),t=0===t?0:t,t)}},a)},"504c":function(t,e,i){var a=i("9e1e"),n=i("0d58"),r=i("6821"),s=i("52a7").f;t.exports=function(t){return function(e){for(var i,o=r(e),c=n(o),l=c.length,h=0,u=[];h<l;)i=c[h++],a&&!s.call(o,i)||u.push(t?[i,o[i]]:o[i]);return u}}},"549b":function(t,e,i){"use strict";var a=i("d864"),n=i("63b6"),r=i("241e"),s=i("b0dc"),o=i("3702"),c=i("b447"),l=i("20fd"),h=i("7cd6");n(n.S+n.F*!i("4ee1")(function(t){Array.from(t)}),"Array",{from:function(t,e,i){var n,u,d,f,v=r(t),p="function"==typeof this?this:Array,g=arguments.length,m=1<g?e:void 0,S=void 0!==m,y=0,_=h(v);if(S&&(m=a(m,2<g?i:void 0,2)),null==_||p==Array&&o(_))for(u=new p(n=c(v.length));y<n;y++)l(u,y,S?m(v[y],y):v[y]);else for(f=_.call(v),u=new p;!(d=f.next()).done;y++)l(u,y,S?s(f,m,[d.value,y],!0):d.value);return u.length=y,u}})},"54a1":function(t,e,i){i("6c1c"),i("1654"),t.exports=i("95d5")},"5df3":function(t,e,i){"use strict";var a=i("02f4")(!0);i("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,i=this._i;return i>=e.length?{value:void 0,done:!0}:(t=a(e,i),this._i+=t.length,{value:t,done:!1})})},"67ab":function(t,e,i){function a(t){o(t,n,{value:{i:"O"+ ++c,w:{}}})}var n=i("ca5a")("meta"),r=i("d3f4"),s=i("69a8"),o=i("86cc").f,c=0,l=Object.isExtensible||function(){return!0},h=!i("79e5")(function(){return l(Object.preventExtensions({}))}),u=t.exports={KEY:n,NEED:!1,fastKey:function(t,e){if(!r(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!s(t,n)){if(!l(t))return"F";if(!e)return"E";a(t)}return t[n].i},getWeak:function(t,e){if(!s(t,n)){if(!l(t))return!0;if(!e)return!1;a(t)}return t[n].w},onFreeze:function(t){return h&&u.NEED&&l(t)&&!s(t,n)&&a(t),t}}},"6c7b":function(t,e,i){var a=i("5ca1");a(a.P,"Array",{fill:i("36bd")}),i("9c6c")("fill")},"6e18":function(t,e,i){},"75fc":function(t,e,i){"use strict";var a=i("a745"),n=i.n(a),r=i("774e"),s=i.n(r),o=i("c8bb"),c=i.n(o);function l(t){return function(t){if(n()(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}(t)||function(t){if(c()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return s()(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}i.d(e,"a",function(){return l})},"774e":function(t,e,i){t.exports=i("d2d5")},8372:function(t,e,i){"use strict";var a=i("4ac7");i.n(a).a},8615:function(t,e,i){var a=i("5ca1"),n=i("504c")(!1);a(a.S,"Object",{values:function(t){return n(t)}})},"95d5":function(t,e,i){var a=i("40c3"),n=i("5168")("iterator"),r=i("481b");t.exports=i("584a").isIterable=function(t){var e=Object(t);return void 0!==e[n]||"@@iterator"in e||r.hasOwnProperty(a(e))}},a745:function(t,e,i){t.exports=i("f410")},b39a:function(t,e,i){var a=i("d3f4");t.exports=function(t,e){if(!a(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},b5cb:function(t,e,i){"use strict";i.r(e);var a={props:{showItem:{},chartItem:{}},data:function(){return{vehicleBean:{},dataItem:{}}},methods:{queryEngineStatePieChart:function(t){0<t.length?this.dataItem={title:{text:"发动机状态"},tooltip:{formatter:"{b} : {c} ({d}%)"},series:[{type:"pie",center:["50%","50%"],data:t}]}:this.dataItem={title:{text:"发动机状态"},tooltip:{formatter:"{b} : {c} ({d}%)"},series:[{type:"pie",center:["50%","50%"],data:[]}]}},setPieData:function(t){var e=[{value:t.economicSpeedPercent,name:"经济转速"},{value:t.idlePercent,name:"怠速"},{value:t.neutralTaxiingPercent,name:"空档滑行"},{value:t.nonEconomicSpeedPercent,name:"非经济转速"},{value:t.nonNeutralTaxiingPercent,name:"带档滑行"},{value:t.stoppingPercent,name:"停车"}];this.queryEngineStatePieChart(e)}},watch:{showItem:function(t){this.vehicleBean=t||{}},chartItem:function(t){t?this.setPieData(t):this.queryEngineStatePieChart([])}}},n=(i("4ce5"),i("2877")),r=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tableList"},[i("el-row",{staticClass:"tableList-tr"},[i("el-col",{attrs:{span:12}},[i("table",{staticClass:"table",attrs:{cellspacing:"0",cellpadding:"0",border:"0"}},[i("tr",{staticClass:"tableList-header"},[i("td",{attrs:{colspan:"4"}},[t._v("\n                        车辆运行基本信息\n                    ")])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("车牌号码")]),i("td",[t._v(t._s(t.vehicleBean.plateCode||"--"))]),i("td",{staticClass:"title"},[t._v("车架号")]),i("td",[t._v(t._s(t.vehicleBean.vehicleVin||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("设备号")]),i("td",[t._v(t._s(t.vehicleBean.equipmentId||"--"))]),i("td",{staticClass:"title"},[t._v("司机姓名")]),i("td",[t._v(t._s(t.vehicleBean.driverName||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("经济转速时间")]),i("td",[t._v(t._s(t.vehicleBean.economicSpeedTimeStr||"--"))]),i("td",{staticClass:"title"},[t._v("非经济转速时间")]),i("td",[t._v(t._s(t.vehicleBean.nonEconomicSpeedTimeStr||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("空挡滑行时间")]),i("td",[t._v(t._s(t.vehicleBean.neutralTaxiingTimeStr||"--"))]),i("td",{staticClass:"title"},[t._v("带档滑行时间")]),i("td",[t._v(t._s(t.vehicleBean.nonNeutralTaxiingTimeStr||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("怠速时间")]),i("td",[t._v(t._s(t.vehicleBean.idleTimeStr||"--"))]),i("td",{staticClass:"title"},[t._v("停车时间")]),i("td",[t._v(t._s(t.vehicleBean.stoppingTimeStr||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("发动机平均转速")]),i("td",[t._v(t._s(t.vehicleBean.engineSpeed&&t.vehicleBean.engineSpeed.toFixed(2)+"(rpm)"||"--"))]),i("td",{staticClass:"title"},[t._v("平均转速标准差")]),i("td",[t._v(t._s(t.vehicleBean.avgeRotateDeviation&&t.vehicleBean.avgeRotateDeviation.toFixed(2)+"(rpm)"||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("平均车速")]),i("td",[t._v(t._s(t.vehicleBean.avgeSpeed&&t.vehicleBean.avgeSpeed+"(km/h)"||"--"))]),i("td",{staticClass:"title"},[t._v("平均车速标准差")]),i("td",[t._v(t._s(t.vehicleBean.avgeSpeedDeviation&&t.vehicleBean.avgeSpeedDeviation+"(km/h)"||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("本段里程")]),i("td",[t._v(t._s(t.vehicleBean.sectionMileage&&t.vehicleBean.sectionMileage+"(km)"||"--"))]),i("td",{staticClass:"title"},[t._v("总里程")]),i("td",[t._v(t._s(t.vehicleBean.totalMileage&&t.vehicleBean.totalMileage+"(km)"||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("本段油耗")]),i("td",[t._v(t._s(t.vehicleBean.fuelConsumption&&t.vehicleBean.fuelConsumption+"L"||"--"))]),i("td",{staticClass:"title"},[t._v("总油耗")]),i("td",[t._v(t._s(t.vehicleBean.totalFuelConsumption&&t.vehicleBean.totalFuelConsumption+"L"||"--"))])]),i("tr",{staticClass:"tablelist-tr"},[i("td",{staticClass:"title"},[t._v("统计平均油耗")]),i("td",[t._v(t._s(t.vehicleBean.avgeFuelConsumption&&t.vehicleBean.avgeFuelConsumption.toFixed(2)+"L/(100KM)"||"--"))]),i("td",{staticClass:"title"},[t._v("总平均油耗")]),i("td",[t._v(t._s(t.vehicleBean.totalAvgeFuelConsumpt&&t.vehicleBean.totalAvgeFuelConsumpt.toFixed(2)+"L/(100KM)"||"--"))])])])]),i("el-col",{attrs:{span:12}},[i("cv-echart",{staticStyle:{width:"100%",height:"400px"},attrs:{name:"pie",data:t.dataItem}})],1)],1)],1)},[],!1,null,"cfd8607e",null).exports,s=(i("7f7f"),i("8615"),i("6b54"),i("a481"),i("28a5"),i("55dd"),i("ac6a"),i("456d"),i("c5f6"),i("75fc")),o=(i("4f7f"),i("5df3"),i("1c4c"),i("6c7b"),i("d225")),c=i("b0b4"),l=i("9efd"),h=function(){function t(e){Object(o.a)(this,t),this.options=Object.assign({padding:30,vsize:4,vertical:new Array(28).fill(0).map(function(t,e){return 4*e}),horizontal:new Array(12).fill(0).map(function(t,e){return 600+100*e}),gears:[{text:6,start:{x:940,y:13},end:{x:1800,y:26}},{text:7,start:{x:940,y:19},end:{x:1800,y:35}},{text:8,start:{x:940,y:23},end:{x:1800,y:43}},{text:9,start:{x:940,y:31},end:{x:1800,y:57}},{text:10,start:{x:940,y:39},end:{x:1800,y:71}},{text:11,start:{x:940,y:49},end:{x:1800,y:90}},{text:12,start:{x:940,y:61},end:{x:1800,y:108}}]},e),this.canvas=this._createCanvas(this.options.el);var i=this.options,a=i.vertical,n=i.horizontal,r=i.padding;i.ceils,this.canvas.translate(r,r),this.getDataRenderLine(a,n),this.renderCoordinate(a,n)}return Object(c.a)(t,[{key:"_createCanvas",value:function(t){if(t&&1==t.nodeType){var e=t.parentNode;if(e){var i=e.offsetWidth,a=e.offsetHeight;t.width=i,t.height=a,t.style.width=i+"px",t.style.height=a+"px"}return t.getContext("2d")}}},{key:"initialRender",value:function(t){var e=0<arguments.length&&void 0!==t?t:{},i=e.vertical,a=e.horizontal,n=(e.padding,e.ceils),r=this.options.el,s=r.width,o=r.height;this.options.vsize=e.vsize||4,this.canvas.clearRect(-this.options.padding,-this.options.padding,s,o),i&&a&&n?(this.getDataRenderLine(i,a).renderCoordinate(i,a).renderRectContent(i,a,n),this.options.isGear&&this.paintGearFinish(i,a)):(this.getDataRenderLine(this.options.vertical,this.options.horizontal).renderCoordinate(this.options.vertical,this.options.horizontal).renderRectContent(this.options.vertical,this.options.horizontal,this.options.ceils),this.options.isGear&&this.paintGearFinish(this.options.vertical,this.optionshorizontal))}},{key:"renderRectContent",value:function(t,e,i){var a=this;return l.a.isEmptyObject(i)||Object.keys(i).forEach(function(n){var r=n.split(","),o=a.paintGeear(t[0],e[0],{x:r[0],y:r[1]}),c=Array.from(new Set(e)),l=Math.max.apply(Math,Object(s.a)(c));r[1]<0||r[0]>l?a._drawRectInWord(o,i[n],{fillStyle:a.filterOtherColor(i[n])}):a._drawRectInWord(o,i[n],{fillStyle:a.filterColor(i[n])})}),this}},{key:"filterOtherColor",value:function(t){var e=Number(t),i=Math.round(e/255*10)+"%";return 0==e?"#FFFFFF":"rgba(65%,5%,"+i+","+e/100+")"}},{key:"filterColor",value:function(t){var e=Number(t),i=Math.round(e/255*10)+"%",a=e/30;return 0==e?"#FFFFFF":300<=e<=1500?"rgba(100%,80%,"+i+","+a+")":"rgba(100%,100%,"+i+","+a+")"}},{key:"getDataRenderLine",value:function(t,e){var i=this,a=0<arguments.length&&void 0!==t?t:[],n=1<arguments.length&&void 0!==e?e:[],r=this.units_arraySortDown(a),s=this.units_arraySortUp(n);s.push(""),r.push("");var o=this.getDataCalcCellSize(r,s),c=o.verticalSize,l=o.horizontalSize,h=o.width,u=o.height;return this.ceilWidth=h,this.ceilHeight=u,this.vertial=r,this.horizontal=s,r.forEach(function(t,e){var a={x:0,y:u*e},n={x:l,y:u*e};i._drawLine(a,n),e%2==0&&i._drawText(t,a.x-15,a.y+u)}),s.forEach(function(t,e){var a={x:h*e,y:0},n={x:h*e,y:c};i._drawLine(a,n),e%2==0&&i._drawText(t,a.x,c+u/2)}),this}},{key:"paintGearFinish",value:function(t,e){var i=this;this.options.gears,this.options.gears&&this.options.gears.forEach(function(a){var n=a.start,r=a.end,s=a.text,o=i.paintGeear(t[0],e[0],n),c=i.paintGeear(t[0],e[0],r);i._drawLine(o,c,"line",{lineWidth:2,strokeStyle:"#409eff"}),i._drawText(s,o.x-i.ceilWidth/2,o.y,"black","20px Arial bold")})}},{key:"paintGeear",value:function(t,e,i){var a=(i.x-e)*(this.ceilWidth/100),n=(t-i.y)*(this.ceilHeight/this.options.vsize);if(!isNaN(a)&&!isNaN(n))return{x:a,y:n}}},{key:"getDataCalcCellSize",value:function(t,e){var i=0<arguments.length&&void 0!==t?t:[],a=1<arguments.length&&void 0!==e?e:[],n=(this.options.el.width-2*this.options.padding)/a.length,r=(this.options.el.height-2*this.options.padding)/i.length;return{width:n,height:r,horizontalSize:a.length*n,verticalSize:i.length*r}}},{key:"renderCoordinate",value:function(t,e){var i=this.options.el.width-2*this.options.padding,a=this.options.el.height-2*this.options.padding;return this._drawLine({x:0,y:0},{x:0,y:a},"line",{strokeStyle:"red"}),this._drawLine({x:0,y:a},{x:i,y:a},"line",{strokeStyle:"red"}),this}},{key:"_drawLine",value:function(t,e,i,a){var n=3<arguments.length&&void 0!==a?a:{};this.canvas.lineWidth=n.lineWidth||1,this.canvas.strokeStyle=n.strokeStyle||"#ccc",this.canvas.beginPath(),this.canvas.moveTo(t.x,t.y),this.canvas.lineTo(e.x,e.y),this.canvas.stroke(),this.canvas.closePath()}},{key:"_drawText",value:function(t,e,i,a,n){var r=3<arguments.length&&void 0!==a?a:"black",s=4<arguments.length&&void 0!==n?n:"14px serif";this.canvas.fillStyle=r,this.canvas.lineWidth="",this.canvas.textAlign="center",this.canvas.textBaseline="middle",this.canvas.font=s,this.canvas.fillText(t,e,i)}},{key:"_drawRectInWord",value:function(t,e,i){var a=2<arguments.length&&void 0!==i?i:{},n=t.x,r=t.y,s=this.ceilWidth-2,o=this.ceilHeight-2;this.canvas.fillStyle=a.fillStyle||"#fabf75",this.canvas.fillRect(n+1,r+1,s,o),this._drawText(e,n+s/2,r+o/2)}},{key:"units_arraySortUp",value:function(t){return t.sort(function(t,e){return t-e})}},{key:"units_arraySortDown",value:function(t){return t.sort(function(t,e){return e-t})}}]),t}(),u={props:{isGear:{type:Boolean,default:!0},data:{}},data:function(){return{torque:null,width:0,height:0}},computed:{_canvas:function(){return this.$refs.canvas}},watch:{data:function(t){var e=t.x,i=t.y,a=t.column;this.torque.initialRender({vsize:i&&i[1]-i[0],horizontal:e,vertical:i,ceils:a})}},mounted:function(){this.torque=new h({el:this.$refs.canvas,isGear:this.isGear})}},d={components:{Torque:Object(n.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"box"},[i("canvas",{ref:"canvas",style:{width:t.width+"px",height:t.height+"px"},attrs:{width:2*t.width,height:2*t.height}})])},[],!1,null,null,null).exports},props:{data:{}},data:function(){return{speedStatistical:{},engineSpeedStatistical:{},taxiingStatistcal:{},fuelStatistcal:{},speedAvgeTimeStatistical:{},gearRotateSpeedStatistical:{},gearTorqueStatistical:{}}},methods:{showBar:function(t,e,i,a,n){var r={title:{text:i||"",x:"center"},tooltip:{formatter:function(t){var e="";return"function"==typeof n&&(e=n(t)),e}},grid:{left:"3%",right:"10%",bottom:"3%",containLabel:!0},xAxis:{name:a||"",data:t?this.setXAxis(t,e):[]},yAxis:{type:"value"},series:[{data:t?this.setYAxis(t,e):[],type:"bar"}]};this[e]=r},setXAxis:function(t,e){var i=[];return 0!==(i=Object.keys(t)).length&&"taxiingStatistcal"==e&&(i=i.sort(function(t,e){return t-e})),i.toString().replace(/-/g,"R").split(",")},setYAxis:function(t,e){var i=[];return 0!==(i=Object.values(t)).length&&"taxiingStatistcal"==e&&i.unshift(i.pop()),i},getMapCarCount:function(t){var e={title:{text:"车辆 平均速度／小时 走势图",x:"center"},tooltip:{formatter:function(t){return t.name+": "+t.value+"(km/h)"}},xAxis:{type:"category",boundaryGap:!1,data:t&&this.setlineData(t)},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},yAxis:[{name:"平均速度(km/h)",type:"value"}],series:[{type:"line",smooth:!0,itemStyle:{normal:{color:"rgb(64, 203,55)"}},symbolSize:8,lineStyle:{normal:{width:3}},data:t?Object.values(t):[]}]};this.speedAvgeTimeStatistical=e},setlineData:function(t){var e=Object.keys(t),i=[];return e.forEach(function(t){i.push(t+"时")}),i},speedfun:function(t){return"车速统计("+t.name+"km/h) : "+t.value+"秒"},enginefun:function(t){return"发动机转速("+t.name+"rpm) : "+t.value+"秒"},taxiingfun:function(t){return"档位统计("+t.name+"档) : "+t.value+"秒"},fuelfun:function(t){return"油门统计("+t.name+"%) : "+t.value+"秒"},setCanveData:function(t,e,i){return{x:t[e].x,y:t[e].y,column:t[i]}}},watch:{data:function(t){t.speedStatistical?this.showBar(t.speedStatistical.speedColumn,"speedStatistical","车速统计","km/h",this.speedfun):this.showBar([],"speedStatistical"),t.engineSpeedStatistical?this.showBar(t.engineSpeedStatistical.engineSpeedColumn,"engineSpeedStatistical","发动机转速","rpm",this.enginefun):this.showBar([],"engineSpeedStatistical"),t.taxiingStatistcal?this.showBar(t.taxiingStatistcal.taxiingColumn,"taxiingStatistcal","档位统计","档",this.taxiingfun):this.showBar([],"taxiingStatistcal"),t.fuelStatistcal?this.showBar(t.fuelStatistcal.fuelColumn,"fuelStatistcal","油门统计","%",this.fuelfun):this.showBar([],"fuelStatistcal"),t.speedAvgeTimeStatistical?this.getMapCarCount(t.speedAvgeTimeStatistical.speedAvgeTimeColumn):this.getMapCarCount([]),t.gearTorqueStatistical?this.gearTorqueStatistical=this.setCanveData(t.gearTorqueStatistical,"gearTorqueSpeedAxis","gearTorqueColumn"):this.gearTorqueStatistical={},t.gearRotateSpeedStatistical?this.gearRotateSpeedStatistical=this.setCanveData(t.gearRotateSpeedStatistical,"gearRotateSpeedAxis","gearRotateSpeedColumn"):this.gearRotateSpeedStatistical={}}}},f=(i("8372"),{components:{list:r,runEcharts:Object(n.a)(d,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phaseRunReport-echartList"},[i("el-row",[i("el-col",{attrs:{span:12}},[i("cv-echart",{staticClass:"echart-item",attrs:{name:"bar",data:t.engineSpeedStatistical}})],1),i("el-col",{attrs:{span:12}},[i("cv-echart",{staticClass:"echart-item",attrs:{name:"bar",data:t.taxiingStatistcal}})],1)],1),i("el-row",[i("el-col",{attrs:{span:12}},[i("cv-echart",{staticClass:"echart-item",attrs:{name:"bar",data:t.speedStatistical}})],1),i("el-col",{attrs:{span:12}},[i("cv-echart",{staticClass:"echart-item",attrs:{name:"bar",data:t.fuelStatistcal}})],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("cv-echart",{staticClass:"echart-item",attrs:{name:"line",data:t.speedAvgeTimeStatistical}})],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{"text-align":"center",font:"20px bold Arial"}},[t._v("档位-车速档位统计")]),i("torque",{staticClass:"echart-item",attrs:{data:t.gearRotateSpeedStatistical}})],1)],1),i("el-row",[i("el-col",{attrs:{span:24}},[i("div",{staticStyle:{"text-align":"center",font:"20px bold Arial"}},[t._v("转速-扭矩统计")]),i("torque",{staticClass:"echart-item",attrs:{"is-gear":!1,data:t.gearTorqueStatistical}})],1)],1)],1)},[],!1,null,"f0fdbffa",null).exports,CvPublictreeContent:i("05c0").a},data:function(){return{pickerOptions0:{disabledDate:function(t){return t.getTime()>Date.now()-864e5}},time:[this.$filter.format(new Date-864e5,"yyyy-MM-dd"),this.$filter.format(new Date-864e5,"yyyy-MM-dd")],vehicleId:"",loading:!1,vehicleStateBean:{},engineStateStatistical:{},echartsList:{}}},methods:{handlerVehicleMonitor:function(t){this.vehicleId=t.id},load:function(){this.vehicleId?this.queryRunReport():this.$message.warning("请选择车辆")},queryRunReport:function(){var t=this,e={vehicleId:this.vehicleId,startTime:this.time[0],endTime:this.time[1]};this.loading=!0,this.$store.dispatch("queryVehicleStatistical",e).then(function(e){var i=e.flag,a=e.data,n=e.errorCode;i&&a?(t.vehicleStateBean=a.vehicleStateBean,t.engineStateStatistical=a.engineStateStatistical,t.echartsList={speedStatistical:a.speedStatistical,engineSpeedStatistical:a.engineSpeedStatistical,taxiingStatistcal:a.taxiingStatistcal,fuelStatistcal:a.fuelStatistcal,speedAvgeTimeStatistical:a.speedAvgeTimeStatistical,gearRotateSpeedStatistical:a.gearRotateSpeedStatistical,gearTorqueStatistical:a.gearTorqueStatistical}):(t.tableList={},t.echartsList={},t.$message.error(t.$t("error."+n))),t.loading=!1})}},watch:{"$store.getters.ptSingleCar":function(t){this.vehicleId=t.id}}}),v=Object(n.a)(f,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"phaseRun"},[i("cv-operation",{attrs:{position:"left"}},[i("el-form-item",{attrs:{label:"日期选择:"}},[i("el-date-picker",{attrs:{size:"small",type:"daterange","picker-options":t.pickerOptions0,clearable:!1,"value-format":"yyyy-MM-dd"},model:{value:t.time,callback:function(e){t.time=e},expression:"time"}})],1),i("el-form-item",{staticStyle:{float:"right"}},[i("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:t.$route.name,data:t.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-add":!1,"is-export":!1},on:{search:t.load}})],1)],1),i("cv-publictree-content",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"tabs",attrs:{model:"single","vehicle-monitor":t.handlerVehicleMonitor,loading:!1}},[i("list",{attrs:{showItem:t.vehicleStateBean,chartItem:t.engineStateStatistical}}),i("runEcharts",{attrs:{data:t.echartsList}})],1)],1)},[],!1,null,null,null).exports;e.default=v},c26b:function(t,e,i){"use strict";function a(t,e){var i,a=v(e);if("F"!==a)return t._i[a];for(i=t._f;i;i=i.n)if(i.k==e)return i}var n=i("86cc").f,r=i("2aeb"),s=i("dcbc"),o=i("9b43"),c=i("f605"),l=i("4a59"),h=i("01f9"),u=i("d53b"),d=i("7a56"),f=i("9e1e"),v=i("67ab").fastKey,p=i("b39a"),g=f?"_s":"size";t.exports={getConstructor:function(t,e,i,h){var u=t(function(t,a){c(t,u,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[g]=0,null!=a&&l(a,i,t[h],t)});return s(u.prototype,{clear:function(){for(var t=p(this,e),i=t._i,a=t._f;a;a=a.n)a.r=!0,a.p&&(a.p=a.p.n=void 0),delete i[a.i];t._f=t._l=void 0,t[g]=0},delete:function(t){var i=p(this,e),n=a(i,t);if(n){var r=n.n,s=n.p;delete i._i[n.i],n.r=!0,s&&(s.n=r),r&&(r.p=s),i._f==n&&(i._f=r),i._l==n&&(i._l=s),i[g]--}return!!n},forEach:function(t,i){p(this,e);for(var a,n=o(t,1<arguments.length?i:void 0,3);a=a?a.n:this._f;)for(n(a.v,a.k,this);a&&a.r;)a=a.p},has:function(t){return!!a(p(this,e),t)}}),f&&n(u.prototype,"size",{get:function(){return p(this,e)[g]}}),u},def:function(t,e,i){var n,r,s=a(t,e);return s?s.v=i:(t._l=s={i:r=v(e,!0),k:e,v:i,p:n=t._l,n:void 0,r:!1},t._f||(t._f=s),n&&(n.n=s),t[g]++,"F"!==r&&(t._i[r]=s)),t},getEntry:a,setStrong:function(t,e,i){h(t,e,function(t,i){this._t=p(t,e),this._k=i,this._l=void 0},function(){for(var t=this,e=t._k,i=t._l;i&&i.r;)i=i.p;return t._t&&(t._l=i=i?i.n:t._t._f)?u(0,"keys"==e?i.k:"values"==e?i.v:[i.k,i.v]):(t._t=void 0,u(1))},i?"entries":"values",!i,!0),d(e)}}},c8bb:function(t,e,i){t.exports=i("54a1")},d2d5:function(t,e,i){i("1654"),i("549b"),t.exports=i("584a").Array.from},e0b8:function(t,e,i){"use strict";var a=i("7726"),n=i("5ca1"),r=i("2aba"),s=i("dcbc"),o=i("67ab"),c=i("4a59"),l=i("f605"),h=i("d3f4"),u=i("79e5"),d=i("5cc5"),f=i("7f20"),v=i("5dbc");t.exports=function(t,e,i,p,g,m){function S(t){var e=x[t];r(x,t,"delete"==t?function(t){return!(m&&!h(t))&&e.call(this,0===t?0:t)}:"has"==t?function(t){return!(m&&!h(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return m&&!h(t)?void 0:e.call(this,0===t?0:t)}:"add"==t?function(t){return e.call(this,0===t?0:t),this}:function(t,i){return e.call(this,0===t?0:t,i),this})}var y=a[t],_=y,b=g?"set":"add",x=_&&_.prototype,C={};if("function"==typeof _&&(m||x.forEach&&!u(function(){(new _).entries().next()}))){var w=new _,k=w[b](m?{}:-0,1)!=w,B=u(function(){w.has(1)}),A=d(function(t){new _(t)}),T=!m&&u(function(){for(var t=new _,e=5;e--;)t[b](e,e);return!t.has(-0)});A||(((_=e(function(e,i){l(e,_,t);var a=v(new y,e,_);return null!=i&&c(i,g,a[b],a),a})).prototype=x).constructor=_),(B||T)&&(S("delete"),S("has"),g&&S("get")),(T||k)&&S(b),m&&x.clear&&delete x.clear}else _=p.getConstructor(e,t,g,b),s(_.prototype,i),o.NEED=!0;return f(_,t),C[t]=_,n(n.G+n.W+n.F*(_!=y),C),m||p.setStrong(_,t,g),_}},f1ae:function(t,e,i){"use strict";var a=i("86cc"),n=i("4630");t.exports=function(t,e,i){e in t?a.f(t,e,n(0,i)):t[e]=i}},f410:function(t,e,i){i("1af6"),t.exports=i("584a").Array.isArray}}]);