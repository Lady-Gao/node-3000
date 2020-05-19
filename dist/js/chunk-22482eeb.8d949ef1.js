(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-22482eeb"],{"07a6":function(e,t,a){"use strict";a.r(t),a("96cf");var s,r=a("3b8d"),c=a("cebc"),o=a("2f62"),n={name:"BatteryMonitoring",components:{},data:function(){return{plateCode:"",vehicleId:"",dataItem:[],secondItem:[],cells:[],probes:[],baseMessage:{}}},methods:Object(c.a)({},Object(o.b)(["queryEvVehicleDataInfo"]),{singleCar:function(e){this.vehicleId=e.id,this.plateCode=e.plateCode},showEcharts:function(e){var t={title:{text:"单体电池电压"},yAxis:[{type:"value",name:"电压"}],tooltip:{trigger:"item",formatter:"编号:{b} </br>温度:{c}"},color:["#3398DB"],legend:{left:80},grid:{left:"3%",right:"8%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",data:e.nums,axisTick:{alignWithLabel:!0}}],series:[{name:"电压",type:"bar",barWidth:"60%",data:e.list}]};this.dataItem=t},voltageEcharts:function(e){var t={title:{text:"温度探针值"},yAxis:[{type:"value",name:"温度"}],tooltip:{trigger:"item",formatter:"编号:{b} </br>温度:{c}"},color:["#3398DB"],legend:{left:80},grid:{left:"3%",right:"8%",bottom:"5%",containLabel:!0},xAxis:[{type:"category",data:e.nums,axisTick:{alignWithLabel:!0}}],series:[{name:"温度",type:"bar",barWidth:"60%",data:e.list}]};this.secondItem=t},queryBaseMessage:(s=Object(r.a)(regeneratorRuntime.mark(function e(t){var a,s,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.queryEvVehicleDataInfo(t);case 2:a=e.sent,s=a.data,r=a.flag,this.baseMessage=r&&!this.$service.isEmptyObject(s)?s:{};case 6:case"end":return e.stop()}},e,this)})),function(e){return s.apply(this,arguments)})}),watch:{vehicleId:function(e){var t=this;e&&(this.queryBaseMessage({vehicleId:e}),this.$store.dispatch("queryBatteryVoltage",{vehicleId:e}).then(function(e){e.flag?"208"==e.errorCode?t.dataItem={xAxis:{type:"category",boundaryGap:!1,data:"暂无数据"},series:["暂无数据"]}:t.showEcharts(e.data):t.$message.error({message:t.$t("error."+e.errorCode)})}),this.$store.dispatch("queryBatteryTemp",{vehicleId:e}).then(function(e){e.flag?208==e.errorCode?t.secondItem={xAxis:{type:"category",boundaryGap:!1,data:"暂无数据"},series:["暂无数据"]}:t.voltageEcharts(e.data):t.$message.error({message:t.$t("error."+e.errorCode)})}))}}},i=(a("5d2c"),a("2877")),l=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"alarm"},[a("cv-header"),a("cv-content",[a("div",{staticClass:"text"},[a("el-row",{staticClass:"baseMessage",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[e._v("车牌号: "+e._s(e.plateCode||"--"))]),a("el-col",{attrs:{span:6}},[e._v("车辆状况:  "+e._s(e.baseMessage.vehicleStateName||"--"))]),a("el-col",{attrs:{span:6}},[e._v("上报时间: "+e._s(e._f("'--'")(e._f("format")(e.baseMessage.dateTime,"yyyy-MM-dd HH:mm:ss"))))]),a("el-col",{attrs:{span:6}},[e._v("加速踏板行程值(%): "+e._s(e.baseMessage.aptv||"--"))])],1),a("el-row",{staticClass:"baseMessage",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[e._v(" 电池电量(SOC): "+e._s(e.baseMessage.totalCurrent||"--"))]),a("el-col",{attrs:{span:6}},[e._v("总电压(V): "+e._s(e.baseMessage.totalVoltage||"--"))]),a("el-col",{attrs:{span:6}},[e._v("总电流(A): "+e._s(e.baseMessage.totalCurrent||"--"))]),a("el-col",{attrs:{span:6}},[e._v("累计里程(km): "+e._s(e.baseMessage.totalMileage||"--"))])],1),a("el-row",{staticClass:"baseMessage",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[e._v(" 充电状态: "+e._s(e.baseMessage.chargingStateName||"--"))]),a("el-col",{attrs:{span:6}},[e._v("DC/DC状态: "+e._s(e.baseMessage.dcStateName||"--"))]),a("el-col",{attrs:{span:6}},[e._v("电池类型: "+e._s(e.baseMessage.runningStateName||"--"))]),a("el-col",{attrs:{span:6}},[e._v("车速(km/h): "+e._s(e.baseMessage.speed||"--"))])],1),a("el-row",{staticClass:"baseMessage",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[e._v("挡位名称:"+e._s(e.baseMessage.stallName||"--"))]),a("el-col",{attrs:{span:6}},[e._v("单体电池总数: "+e._s(e.baseMessage.batterCount))]),a("el-col",{attrs:{span:6}},[e._v("温度探针总数: "+e._s(e.baseMessage.tempCount))]),a("el-col",{attrs:{span:6}})],1)],1),a("cv-echart",{staticClass:"propChart",staticStyle:{width:"100%",height:"400px"},attrs:{name:"bar",data:e.dataItem}}),a("cv-echart",{staticClass:"propChart",staticStyle:{width:"100%",height:"400px"},attrs:{name:"bar",data:e.secondItem}})],1)],1)},[],!1,null,"a4c839f2",null).exports;t.default=l},"2cc0":function(e,t,a){},"5d2c":function(e,t,a){"use strict";var s=a("2cc0");a.n(s).a}}]);