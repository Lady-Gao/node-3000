(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-8fd3266a"],{"05c0":function(t,e,i){"use strict";i("7f7f"),i("20d6"),i("ac6a");var a=i("cebc"),n=i("3f4e"),r=i("2f62"),o={name:"CvPublictreeContent",components:{CvContent:n.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(a.a)({},Object(r.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var t=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(t())},mounted:function(){var t=this._treeMethods.$refs.tree.reference().ztreeApi;t()&&t().checkAllNodes(!1)},methods:Object(a.a)({},Object(r.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(t){this.condition=t},vehicle_Monitor:function(t){var e=t.data;if(t.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(t);case"single":return this.vehicleMonitor(e[0])}},vehicle_Monitor_multi:function(t){var e=this,i=t.data;switch(t.name){case"check":this.entryList=this.entryList.concat(i);break;case"cancel":i.forEach(function(t){var i=e.entryList.findIndex(function(e){return e.id==t.id});0<=i&&e.entryList.splice(i,1)})}this.vehicleMonitor(this.entryList)}})},s=(i("45d7"),i("2877")),l=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("cv-content",{ref:"content",attrs:{loading:t.loading,noresize:t.noresize}},[t.model?i("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":t.vehicleCondition,"is-checked":t.isCheck,"tree-data":t.vehicle_data,"online-monitor":t.onlineList,"vehicle-monitor":t.socketVehicle,"attention-monitor":t.isAttention,"enterprise-fleet-monitor":t.socketEnterprise,"node-monitor":t.vehicle_Monitor},on:{"vehicle-choose-search":t.handlerVehicleSearch},slot:"aside"}):t._e(),t._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;l.install=function(t){t.component(l.name,l)},e.a=l},"16a8":function(t,e,i){"use strict";i.r(e);var a=i("dd0f"),n=i("05c0"),r={components:{echart:a.a,CvPublictreeContent:n.a},data:function(){return{vehicleId:"",dataItem:[],searchTime:[this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd")),this.$filter.timeStamp(this.$filter.format(new Date-864e5,"yyyy-MM-dd"))],table:[],loading:!1}},methods:{tableLoad:function(){var t=this,e=this.getData();e&&(this.loading=!0,this.$store.dispatch("queryVehicleDailyReportInfoWork",e).then(function(e){var i=e.flag,a=e.data;e.errorCode,i&&(a?(t.table=a,t.deailCharData(a)):(t.table=[],t.dataItem=[])),t.loading=!1}).catch(function(e){t.loading=!1,t.$message.error("请求异常")}))},setEchartData:function(t){this.dataItem={title:"工作量趋势图",data:["总时长(秒)","总里程(公里)"],xAxis:{data:t.x},yAxis:[{type:"value",axisLabel:{formatter:function(t,e){return t+"秒"}}},{type:"value",yAxisIndex:1,axisLabel:{formatter:function(t,e){return t+"公里"}}}],series:[{name:"总时长(秒)",type:"bar",barWidth:15,data:t.times,itemStyle:{normal:{color:"#008ee2"}},barGap:"10%"},{name:"总里程(公里)",type:"line",yAxisIndex:"1",symbolSize:10,barWidth:15,data:t.mile,itemStyle:{normal:{color:"#2ece2f"}},barGap:"10%"}]}},deailCharData:function(t){var e=[],i=[],a=[];for(var n in t)e.push(t[n].date),i.push(t[n].workDriverLast),a.push(t[n].workMile);var r={x:e,times:i,mile:a};this.setEchartData(r)},getData:function(){return this.vehicleId?this.searchTime?{vehicleId:this.vehicleId,startTime:this.$filter.format(this.searchTime[0],"yyyy-MM-dd"),endTime:this.$filter.format(this.searchTime[1],"yyyy-MM-dd")}:(this.$message.warning("请选择时间"),!1):(this.$message.warning("请选择车辆"),!1)},handlerVehicleMonitor:function(t){this.vehicleId=t.id}}},o=i("2877"),s=Object(o.a)(r,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"work-list"},[i("cv-operation",{attrs:{position:"left"}},[i("el-form-item",{attrs:{label:"查询时间:"}},[i("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",clearable:!1},model:{value:t.searchTime,callback:function(e){t.searchTime=e},expression:"searchTime"}})],1),i("el-form-item",{staticStyle:{float:"right"},attrs:{label:""}},[i("cv-tool",{staticStyle:{margin:"0"},attrs:{name:t.$route.name,data:t.$store.getters.monitorMenu,"is-remove":!1,"is-add":!1,"is-modify":!1,"is-export":!1},on:{search:t.tableLoad}})],1)],1),i("cv-publictree-content",{attrs:{model:"single","vehicle-monitor":t.handlerVehicleMonitor}},[i("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%","margin-bottom":"30px"}},[i("echart",{attrs:{model:t.dataItem,name:"workStatic",title:"工作量趋势图"}})],1),i("cv-grid",{attrs:{data:t.table,"default-height":200}},[i("el-table-column",{attrs:{label:"日期",prop:"date"}}),i("el-table-column",{attrs:{label:"总时长(秒)",prop:"workDriverLast"}}),i("el-table-column",{attrs:{label:"总里程(公里)",prop:"workMile"}})],1)],1)],1)},[],!1,null,null,null).exports;e.default=s},"45d7":function(t,e,i){"use strict";var a=i("6e18");i.n(a).a},"6e18":function(t,e,i){},dd0f:function(t,e,i){"use strict";var a={props:{model:{},name:{type:String,default:"workStatic"},title:""},data:function(){return{loading:!1,dataItem:[]}},methods:{showEchart:function(t){var e={title:{text:t.title},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"line"}},legend:{data:t.data,left:"32%"},xAxis:t.xAxis,yAxis:t.yAxis,series:t.series};this.dataItem=e}},watch:{model:function(t){this.showEchart(t)}}},n=i("2877"),r=Object(n.a)(a,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticStyle:{width:"100%"}},[e("cv-echart",{staticClass:"propChart",staticStyle:{width:"100%",height:"400px"},attrs:{name:"line",data:this.dataItem,title:this.title}})],1)},[],!1,null,null,null);e.a=r.exports}}]);