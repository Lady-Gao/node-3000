(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6e62dea6"],{5966:function(e,t,a){"use strict";a("7f7f"),a("c5f6");var r={name:"CvSwitchTimecontrol",props:{type:{type:[String],default:"date"},clearable:{type:Boolean,default:!0},result:{type:[String],default:"Object"}},data:function(){return{datevalue:null,daterangevalue:null,quartervalue:null,format:"yyyy-MM-dd HH:mm:ss",pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()}}}},methods:{transformQuarter:function(e,t){1<arguments.length&&void 0!==t||this.format;var a=this.$filter,r=a.format,l=a.dateWeekMonth,i=r(e,r);return i&&l(i,this.format).quarter.num},enterDatevalue:function(e,t){var a=this.$filter,r=a.format,l=a.dateWeekMonth,i=(a.timeStamp,r(e,this.format)),n=r(new Date,this.format),s=l(i,this.format),o=s.week,u=s.month;switch(t){case"date":return"Object"==this.result?this.$emit("input",{startTime:r(e,"yyyy-MM-dd start"),endTime:r(e,"yyyy-MM-dd end")}):this.$emit("input",r(e,"yyyy-MM-dd"));case"week":return this.$emit("input",{startTime:o.WeekStart,endTime:this.notBeyondCurrenttime(o.WeekEnd,n)});case"month":return"Object"==this.result?this.$emit("input",{startTime:u.MonthStart,endTime:this.notBeyondCurrenttime(u.MonthEnd,n)}):this.$emit("input",r(e,"yyyy-MM"));case"year":return this.$emit("input",r(e,"yyyy"))}},enterQuartervalue:function(e,t){switch(Number(e)){case 1:return this.$emit("input",{startmonth:1});case 2:return this.$emit("input",{startmonth:4});case 3:return this.$emit("input",{startmonth:7});case 7:return this.$emit("input",{startmonth:10})}},enterDaterange:function(e,t){var a=this,r=this.$filter.format;if(this.$service.isArray(e)){var l=e.map(function(e){return r(e,a.format)});this.$emit("input",{startTime:l[0],endTime:l[1]})}},notBeyondCurrenttime:function(e,t){var a=this.$filter.timeStamp;return 0<=a(e)-a(t)?t:e}},computed:{_quarterLists:function(){var e=this.transformQuarter(new Date);return["01季度","02季度","03季度","04季度"].map(function(t,a){return{label:"".concat((new Date).getFullYear(),"(").concat(t,")"),value:a+1,disabled:e<a+1}})}},watch:{datevalue:function(e){e&&this.enterDatevalue(e,this.type)},quartervalue:function(e){e&&this.enterQuartervalue(e,this.type)},daterangevalue:function(e){e&&this.enterDaterange(e,this.type)},type:function(e){this.datevalue=null,this.daterangevalue=null,this.quartervalue=null}}},l=a("2877"),i=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:""}},["date"==e.type||"week"==e.type||"month"==e.type||"year"==e.type?a("el-date-picker",{attrs:{format:"week"==e.type?"yyyy第WW周":"",type:e.type,"picker-options":e.pickerOption,clearable:e.clearable},model:{value:e.datevalue,callback:function(t){e.datevalue=t},expression:"datevalue"}}):"quarter"==e.type?a("el-select",{model:{value:e.quartervalue,callback:function(t){e.quartervalue=t},expression:"quartervalue"}},e._l(e._quarterLists,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1):e._e(),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"daterange"==e.type,expression:"type=='daterange'"}],attrs:{type:"daterange","picker-options":e.pickerOption,clearable:e.clearable},model:{value:e.daterangevalue,callback:function(t){e.daterangevalue=t},expression:"daterangevalue"}})],1)},[],!1,null,null,null).exports;i.install=function(e){e.component(i.name,i)},t.a=i},a91e:function(e,t,a){"use strict";a("c5f6");var r={props:{type:{type:[String],default:"date"}},data:function(){return{datevalue:null,daterangevalue:null,quartervalue:null,format:"yyyy-MM-dd",pickerOption:{disabledDate:function(e){return e.getTime()>Date.now()-864e5}}}},methods:{transformQuarter:function(e,t){1<arguments.length&&void 0!==t||this.format;var a=this.$filter,r=a.format,l=a.dateWeekMonth,i=r(e,r);return i&&l(i,this.format).quarter.num},enterNull:function(){return this.$emit("input",null)},enterDatevalue:function(e,t){var a=this.$filter,r=a.format,l=a.dateWeekMonth,i=(a.timeStamp,r(e,this.format)),n=r(new Date,this.format),s=l(i,this.format),o=s.week,u=s.month;switch(t){case"date":return this.$emit("input",{searchTime:i,startTime:r(e,"yyyy-MM-dd start"),endTime:r(e,"yyyy-MM-dd end")});case"week":return this.$emit("input",{searchTime:i,startTime:o.WeekStart,endTime:this.notBeyondCurrenttime(o.WeekEnd,n)});case"month":case"year":return this.$emit("input",{searchTime:i,startTime:u.MonthStart,endTime:this.notBeyondCurrenttime(u.MonthEnd,n)})}},enterQuartervalue:function(e,t){switch(Number(e)){case 1:return this.$emit("input",{searchTime:1});case 2:return this.$emit("input",{searchTime:4});case 3:return this.$emit("input",{searchTime:7});case 7:return this.$emit("input",{searchTime:10})}},enterDaterange:function(e,t){var a=this,r=this.$filter.format;if(this.$service.isArray(e)){var l=e.map(function(e){return r(e,a.format)});this.$emit("input",{startTime:l[0],endTime:l[1]})}},notBeyondCurrenttime:function(e,t){var a=this.$filter.timeStamp;return 0<=a(e)-a(t)?t:e}},computed:{_quarterLists:function(){var e=this.transformQuarter(new Date);return["01季度","02季度","03季度","04季度"].map(function(t,a){return{label:"".concat((new Date).getFullYear(),"(").concat(t,")"),value:a+1,disabled:e<a+1}})}},watch:{datevalue:function(e){if(!e)return this.enterNull();this.enterDatevalue(e,this.type)},quartervalue:function(e){if(!e)return this.enterNull();this.enterQuartervalue(e,this.type)},daterangevalue:function(e){if(!e)return this.enterNull();this.enterDaterange(e,this.type)},type:function(e){this.datevalue=null,this.daterangevalue=null,this.quartervalue=null}}},l=a("2877"),i=Object(l.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-form-item",{attrs:{label:""}},["date"==e.type||"week"==e.type||"month"==e.type||"year"==e.type?a("el-date-picker",{attrs:{format:"week"==e.type?"yyyy第WW周":"",type:e.type,clearable:!1,"picker-options":e.pickerOption},model:{value:e.datevalue,callback:function(t){e.datevalue=t},expression:"datevalue"}}):"quarter"==e.type?a("el-select",{model:{value:e.quartervalue,callback:function(t){e.quartervalue=t},expression:"quartervalue"}},e._l(e._quarterLists,function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1):e._e(),a("el-date-picker",{directives:[{name:"show",rawName:"v-show",value:"daterange"==e.type,expression:"type=='daterange'"}],attrs:{type:"daterange","picker-options":e.pickerOption,clearable:!1},model:{value:e.daterangevalue,callback:function(t){e.daterangevalue=t},expression:"daterangevalue"}})],1)},[],!1,null,null,null);t.a=i.exports},d5ca:function(e,t,a){"use strict";a.r(t),a("28a5");var r=a("5966"),l=(a("386d"),{props:{time:{}},data:function(){return{search:{startTime:"",endTime:""}}},methods:{tableLoad:function(e){this.time&&(this.search.startTime=this.time.startTime.split(" ")[0],this.search.endTime=this.time.endTime.split(" ")[0],this.$refs.table.tableInitial())},details:function(e){this.$router.push({path:"/monitor/energyConsumption",query:{plateCode:e.plateCode,vehicleId:e.vehicleId,startTime:this.time.startTime.split(" ")[0],endTime:this.time.endTime.split(" ")[0]}})}}}),i=a("2877"),n=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("cv-grid",{ref:"table",attrs:{url:"/vehicleDailyReport/findWeeklyNewspaperInfo",params:e.search}},[a("el-table-column",{attrs:{label:"车牌号码",prop:"plateCode"}}),a("el-table-column",{attrs:{label:"所属公司",prop:"enterpriseName"}}),a("el-table-column",{attrs:{label:"所属车组",prop:"fleetName"}}),a("el-table-column",{attrs:{label:"时间段",prop:"date"}}),a("el-table-column",{attrs:{label:"时间(min)"}},[a("el-table-column",{attrs:{label:"开机时长",prop:"workDurationDb"}}),a("el-table-column",{attrs:{label:"空跑时长",prop:"batholithDurationDb"}}),a("el-table-column",{attrs:{label:"怠速时长",prop:"idlingDurationDb"}}),a("el-table-column",{attrs:{label:"作业时长",prop:"workDriverLastDb"}})],1),a("el-table-column",{attrs:{label:"里程(km)"}},[a("el-table-column",{attrs:{label:"行驶里程",prop:"mile"}})],1),a("el-table-column",{attrs:{label:"油耗(L)"}},[a("el-table-column",{attrs:{label:"行驶油耗",prop:"allSumOilUse"}}),a("el-table-column",{attrs:{label:"怠速油耗",prop:"idlingoil"}}),a("el-table-column",{attrs:{label:"作业油耗",prop:"workSumOilUse"}})],1),a("el-table-column",{attrs:{label:"效率"}},[a("el-table-column",{attrs:{label:"平均油耗(L/100km)",prop:"avgOil",width:"140"}}),a("el-table-column",{attrs:{label:"作业效率(L/h)",prop:"workAvgOil",width:"120"}})],1),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"cv-table-tool"},[a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.details(t.row)}}},[e._v("详情")])],1)]}}])})],1)},[],!1,null,null,null).exports,s={props:{time:{}},data:function(){return{search:{date:""}}},methods:{tableLoad:function(){this.time&&(this.search.date=this.$filter.format(this.$filter.timeStamp(this.time.searchTime),"yyyy-MM"),this.$refs.table.tableInitial())},details:function(e){this.$router.push({path:"/monitor/energyConsumption",query:{plateCode:e.plateCode,vehicleId:e.vehicleId,startTime:this.time.startTime.split(" ")[0],endTime:this.time.endTime.split(" ")[0]}})},down:function(){if(flag){var e=this.$service.winParams(this.$COMMON.baseUrl+"/vehicleEndLocation/exportVehicleEndLocationInfoList",flag);window.location.href=e}}}},o=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("cv-grid",{ref:"table",attrs:{url:"/vehicleDailyReport/findVehicleDailyReportInfoWorkByMonthly",params:e.search}},[a("el-table-column",{attrs:{label:"车牌号码",prop:"plateCode"}}),a("el-table-column",{attrs:{label:"所属公司",prop:"enterpriseName"}}),a("el-table-column",{attrs:{label:"所属车组",prop:"fleetName"}}),a("el-table-column",{attrs:{label:"时间段",prop:"date"}}),a("el-table-column",{attrs:{label:"时间(min)"}},[a("el-table-column",{attrs:{label:"开机时长",prop:"workDurationDb"}}),a("el-table-column",{attrs:{label:"空跑时长",prop:"batholithDurationDb"}}),a("el-table-column",{attrs:{label:"怠速时长",prop:"idlingDurationDb"}}),a("el-table-column",{attrs:{label:"作业时长",prop:"workDriverLastDb"}})],1),a("el-table-column",{attrs:{label:"里程(km)"}},[a("el-table-column",{attrs:{label:"行驶里程",prop:"mile"}})],1),a("el-table-column",{attrs:{label:"油耗(L)"}},[a("el-table-column",{attrs:{label:"行驶油耗",prop:"allSumOilUse"}}),a("el-table-column",{attrs:{label:"怠速油耗",prop:"idlingoil"}}),a("el-table-column",{attrs:{label:"作业油耗",prop:"workSumOilUse"}})],1),a("el-table-column",{attrs:{label:"效率"}},[a("el-table-column",{attrs:{label:"平均油耗(L/100km)",prop:"avgOil",width:"140"}}),a("el-table-column",{attrs:{label:"作业效率(L/h)",prop:"workAvgOil",width:"130"}})],1),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"cv-table-tool"},[a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.details(t.row)}}},[e._v("详情")])],1)]}}])})],1)},[],!1,null,null,null).exports,u=a("a91e"),c={components:{SwitchTimecontrol:r.a,week:n,month:o,dangeractionSwitchdate:u.a},data:function(){return{type:"month",searchTime:"",tabs:{tabName:"tabs0",titles:["月统计","周统计"]}}},methods:{tableLoad:function(){this.searchTime?"tabs1"==this.tabs.tabName?this.$refs.week.tableLoad():this.$refs.month.tableLoad():this.$message.warning("请选择查询时间")},down:function(){if(this.searchTime){var e={};"tabs1"==this.tabs.tabName?(e.startTime=this.searchTime.startTime.split(" ")[0],e.endTime=this.searchTime.endTime.split(" ")[0]):e.date=this.$filter.format(this.$filter.timeStamp(this.searchTime.startTime),"yyyy-MM");var t=this.$service.winParams(this.$COMMON.baseUrl+("tabs1"==this.tabs.tabName?"/vehicleDailyReport/exportExcelByWeeklyNewspaperInfo":"/vehicleDailyReport/exportExcelByMonthly"),e);window.location.href=t}else this.$message.warning("请选择查询时间")}},watch:{"tabs.tabName":function(e){"tabs1"==e?(this.weekLoad=!0,this.type="week"):(this.monthLoad=!0,this.type="month")}}},m=Object(i.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"energy"},[a("cv-operation",{attrs:{position:"left"}},[a("el-form-item",{attrs:{label:"查询时间:"}},[a("dangeractionSwitchdate",{staticStyle:{"margin-top":"-1px",position:"relative","z-index":"99"},attrs:{type:e.type,clearable:!1},model:{value:e.searchTime,callback:function(t){e.searchTime=t},expression:"searchTime"}})],1),a("el-form-item",{staticStyle:{float:"right"}},[a("cv-tool",{staticClass:"cv-tool",staticStyle:{margin:"0"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-remove":!1,"is-add":!1,"is-modify":!1,"is-reset":!1},on:{search:e.tableLoad,export:e.down}})],1)],1),a("cv-content",[a("cv-tabs",{attrs:{titles:e.tabs.titles},model:{value:e.tabs.tabName,callback:function(t){e.$set(e.tabs,"tabName",t)},expression:"tabs.tabName"}},[a("month",{ref:"month",attrs:{time:e.searchTime}}),a("week",{ref:"week",attrs:{time:e.searchTime}})],1)],1)],1)},[],!1,null,null,null).exports;t.default=m}}]);