(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-40acb91c","chunk-35226b4a"],{"0c64":function(t,e,a){"use strict";a.r(e),a("386d");var s=a("cebc"),i=a("2f62"),r={computed:Object(s.a)({},Object(i.c)(["mapName"]),{_mapMethods:function(){return this.$refs.imgMap.mapMethods}}),props:{url:{default:a("7f0d")},point:{default:function(){return{}}}},data:function(){return{addPoint:null,img:a("7f0d")}},watch:{point:function(t){if(this._mapMethods.clearOverlays(),0==t.mapLongitude||0==t.mapLatitude)return!1;if(!this.$service.isEmptyObject(t)){var e={plateCode:t.plateCode,vehicleStatus:1};this.addPoint=this._mapMethods.mapAddpoint({longitude:t.mapLongitude,latitude:t.mapLatitude},this.$filter.isOnline(e),{width:36,height:36}),this._mapMethods.addOverlay(this.addPoint),this._mapMethods.moveToCenter(this.addPoint.point)}}}},o=(a("140c"),a("2877")),l={components:{imgMap:Object(o.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cv-imgMap"},[a("li",{staticClass:"cv-imgMap-item"},[a("h2",[t._v("图片")]),a("div",{staticClass:"cv-img-content"},[a("img",{attrs:{src:t.url?t.url:t.img}})])]),a("li",{staticClass:"cv-imgMap-item"},[a("h2",[t._v(t._s(this.$t("common.maptool.map")))]),a(t.mapName,{ref:"imgMap",tag:"component",staticClass:"cv-map-content",staticStyle:{width:"100%",height:"100%",overflow:"hidden",margin:"0"},attrs:{point:t.point}})],1)])},[],!1,null,null,null).exports},computed:{_table:function(){return this.$refs.table}},props:{api:{default:"/driver/queryFatigueDriving"},mapName:{default:"tiredDriving"},flagPage:{type:Boolean,default:!1}},data:function(){return{alarmArray:[],adasDrArray:[],adasDeviceArray:{0:this.$t("systemLog.adasDeviceArray.0"),1:this.$t("systemLog.adasDeviceArray.1"),2:this.$t("systemLog.adasDeviceArray.2"),3:this.$t("systemLog.adasDeviceArray.3"),4:this.$t("systemLog.adasDeviceArray.4"),5:this.$t("systemLog.adasDeviceArray.5"),6:this.$t("systemLog.adasDeviceArray.6"),7:this.$t("systemLog.adasDeviceArray.7"),8:this.$t("systemLog.adasDeviceArray.8"),9:this.$t("systemLog.adasDeviceArray.9"),10:this.$t("systemLog.adasDeviceArray.10"),11:this.$t("systemLog.adasDeviceArray.11"),12:this.$t("systemLog.adasDeviceArray.12"),13:this.$t("systemLog.adasDeviceArray.13"),14:this.$t("systemLog.adasDeviceArray.14"),15:this.$t("systemLog.adasDeviceArray.15"),16:this.$t("systemLog.adasDeviceArray.16"),17:this.$t("systemLog.adasDeviceArray.17"),18:this.$t("systemLog.adasDeviceArray.18"),19:this.$t("systemLog.adasDeviceArray.19"),20:this.$t("systemLog.adasDeviceArray.20"),21:this.$t("systemLog.adasDeviceArray.21"),22:this.$t("systemLog.adasDeviceArray.22")},deviceArray:{0:this.$t("systemLog.deviceArray.0"),1:this.$t("systemLog.deviceArray.1"),2:this.$t("systemLog.deviceArray.2"),3:this.$t("systemLog.deviceArray.3"),4:this.$t("systemLog.deviceArray.4"),5:this.$t("systemLog.deviceArray.5"),6:this.$t("systemLog.deviceArray.6"),7:this.$t("systemLog.deviceArray.7"),8:this.$t("systemLog.deviceArray.8"),9:this.$t("systemLog.deviceArray.9"),10:this.$t("systemLog.deviceArray.10"),11:this.$t("systemLog.deviceArray.11"),12:this.$t("systemLog.deviceArray.12"),13:this.$t("systemLog.deviceArray.13"),14:this.$t("systemLog.deviceArray.14"),15:this.$t("systemLog.deviceArray.15"),16:this.$t("systemLog.deviceArray.16"),17:this.$t("systemLog.deviceArray.17"),18:this.$t("systemLog.deviceArray.18"),19:this.$t("systemLog.deviceArray.19"),20:this.$t("systemLog.deviceArray.20"),21:this.$t("systemLog.deviceArray.21"),22:this.$t("systemLog.deviceArray.22"),23:this.$t("systemLog.deviceArray.23"),24:this.$t("systemLog.deviceArray.24"),25:this.$t("systemLog.deviceArray.25"),26:this.$t("systemLog.deviceArray.26"),27:this.$t("systemLog.deviceArray.27"),28:this.$t("systemLog.deviceArray.28"),29:this.$t("systemLog.deviceArray.29"),30:this.$t("systemLog.deviceArray.30"),31:this.$t("systemLog.deviceArray.31"),32:this.$t("systemLog.deviceArray.32"),33:this.$t("systemLog.deviceArray.33")},dialog:{title:"报警详情",flag:!1,data:[]},search:{plateCode:"",alarm:"",startTime:this.$filter.format(new Date-6048e5,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss"),mapType:this.$store.getters.mapType},alarmTime:[this.$filter.format(new Date(new Date-6048e5),"yyyy-MM-dd start"),this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss")],imgArea:{url:null,point:{}}}},mounted:function(){var t=this;this.$store.dispatch("getSysDictByTypeT",{type:133}).then(function(e){t.alarmArray=e.data}),this.$store.dispatch("getSysDictByTypeT",{type:134}).then(function(e){t.adasDrArray=e.data})},methods:{loadTable:function(){if(this.imgArea.url="",this.imgArea.point={},!this.alarmTime)return this.$message.warning(this.$t("reportForm.overSpeed.selectTime")),!1;this._table.tableInitial()},tableFilterTiredAlarm:function(t){return this.$filter.tiredAlarmType(t.alarm)},tableFilterTiredAdas:function(t){return this.$filter.tiredAdasType(t.alarm)},rowHandler:function(t){this.imgArea={url:t.mediaPath,point:{mapLongitude:t.correctionLongitude,mapLatitude:t.getCorrectionLatitude,plateCode:t.plateCode}}},cellHandler:function(t){var e=this;if(this.dialog.flag=!0,this.$service.isArray(t.deviceStatuslist)){var a=t.deviceStatuslist.map(function(t){return e.flagPage?e.adasDeviceArray[t]:e.deviceArray[t]});this.dialog.data=a}}},watch:{alarmTime:function(t){this.search.startTime=t?t[0]:"",this.search.endTime=t?t[1]:""}}},c=(a("24b7"),Object(o.a)(l,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cv-tiredDriving"},[a("cv-operation",{attrs:{position:"left"}},[a("el-form-item",{attrs:{label:t.$t("cvtsp.plateCode")}},[a("el-input",{staticStyle:{width:"100px"},model:{value:t.search.plateCode,callback:function(e){t.$set(t.search,"plateCode",e)},expression:"search.plateCode"}})],1),a("el-form-item",{attrs:{label:t.$t("systemLog.AlarmType")}},[a("el-select",{staticStyle:{width:"220px"},attrs:{clearable:""},model:{value:t.search.alarm,callback:function(e){t.$set(t.search,"alarm",e)},expression:"search.alarm"}},t._l(t.flagPage?t.adasDrArray:t.alarmArray,function(t){return a("el-option",{key:t.code,attrs:{value:t.code,label:t.codeText}})}),1)],1),a("el-form-item",{attrs:{label:t.$t("systemLog.AlarmTime")}},[a("el-date-picker",{attrs:{editable:!1,clearable:!1,type:"datetimerange","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:this.$t("reportForm.overSpeed.selectTime")},model:{value:t.alarmTime,callback:function(e){t.alarmTime=e},expression:"alarmTime"}})],1),a("el-form-item",[a("el-button",{on:{click:t.loadTable}},[t._v(t._s(this.$t("cvtsp.treeSearch.search")))])],1)],1),a("cv-content",[a("cv-grid",{ref:"table",staticClass:"tiredTable",attrs:{params:t.search,url:t.api},on:{"row-click":t.rowHandler}},[a("el-table-column",{attrs:{width:"100",label:t.$t("cvtsp.plateCode"),prop:"plateCode"}}),a("el-table-column",{attrs:{label:t.$t("systemLog.AlarmTime"),width:"190",prop:"time"}}),a("el-table-column",{attrs:{label:t.$t("reportForm.overSpeed.speed1"),width:"100",prop:"speed"}}),a("el-table-column",{attrs:{label:t.$t("systemLog.AlarmStatus"),width:"165",prop:"alarm",formatter:t.flagPage?t.tableFilterTiredAdas:t.tableFilterTiredAlarm}}),a("el-table-column",{attrs:{label:t.$t("systemLog.AlarmLocation"),"min-width":"100",prop:"locationInfo"}})],1),a("imgMap",{staticClass:"imgMap",attrs:{url:t.imgArea.url,point:t.imgArea.point}})],1),a("el-dialog",{attrs:{title:t.dialog.title,visible:t.dialog.flag},on:{"update:visible":function(e){return t.$set(t.dialog,"flag",e)}}},[t._l(t.dialog.data,function(e){return a("el-tag",{key:e,staticStyle:{display:"inline-block",margin:"5px"}},[t._v(t._s(e))])}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialog.flag=!1}}},[t._v(t._s(this.$t("cvtsp.cancle")))]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialog.flag=!1}}},[t._v(t._s(this.$t("cvtsp.confirm")))])],1)],2)],1)},[],!1,null,null,null).exports);e.default=c},"140c":function(t,e,a){"use strict";var s=a("6b71");a.n(s).a},"218c":function(t,e,a){"use strict";a.r(e);var s={components:{tiredDriving:a("0c64").default}},i=a("2877"),r=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("tiredDriving",{attrs:{api:"/driver/queryAdas",mapName:"adasDriving",flagPage:!0}})},[],!1,null,null,null).exports;e.default=r},"24b7":function(t,e,a){"use strict";var s=a("4506");a.n(s).a},4506:function(t,e,a){},"6b71":function(t,e,a){},"7f0d":function(t,e,a){t.exports=a.p+"img/noImg2.d41c8438.png"}}]);