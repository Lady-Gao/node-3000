(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2b5b73fe"],{"05c0":function(e,t,i){"use strict";i("7f7f"),i("20d6"),i("ac6a");var a=i("cebc"),n=i("3f4e"),r=i("2f62"),o={name:"CvPublictreeContent",components:{CvContent:n.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(a.a)({},Object(r.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var e=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(e())},mounted:function(){var e=this._treeMethods.$refs.tree.reference().ztreeApi;e()&&e().checkAllNodes(!1)},methods:Object(a.a)({},Object(r.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(e){this.condition=e},vehicle_Monitor:function(e){var t=e.data;if(e.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(e);case"single":return this.vehicleMonitor(t[0])}},vehicle_Monitor_multi:function(e){var t=this,i=e.data;switch(e.name){case"check":this.entryList=this.entryList.concat(i);break;case"cancel":i.forEach(function(e){var i=t.entryList.findIndex(function(t){return t.id==e.id});0<=i&&t.entryList.splice(i,1)})}this.vehicleMonitor(this.entryList)}})},l=(i("45d7"),i("2877")),s=Object(l.a)(o,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("cv-content",{ref:"content",attrs:{loading:e.loading,noresize:e.noresize}},[e.model?i("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":e.vehicleCondition,"is-checked":e.isCheck,"tree-data":e.vehicle_data,"online-monitor":e.onlineList,"vehicle-monitor":e.socketVehicle,"attention-monitor":e.isAttention,"enterprise-fleet-monitor":e.socketEnterprise,"node-monitor":e.vehicle_Monitor},on:{"vehicle-choose-search":e.handlerVehicleSearch},slot:"aside"}):e._e(),e._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;s.install=function(e){e.component(s.name,s)},t.a=s},1446:function(e,t,i){},"45d7":function(e,t,i){"use strict";var a=i("6e18");i.n(a).a},"589c":function(e,t,i){"use strict";var a=i("1446");i.n(a).a},"6e18":function(e,t,i){},"98c3":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU2Njg2QUVEN0UzQjExRTY5NUZGQjIzQjQ3NTgyMEU2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU2Njg2QUVFN0UzQjExRTY5NUZGQjIzQjQ3NTgyMEU2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTY2ODZBRUI3RTNCMTFFNjk1RkZCMjNCNDc1ODIwRTYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTY2ODZBRUM3RTNCMTFFNjk1RkZCMjNCNDc1ODIwRTYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GFva4AAAB5klEQVR42qyVyytFURTG13aPZ6QokkhiZkLJxOMfkLphTEpGJCMTlMdIBkyMlL9AhJQZRgaYmKmbYuIWBoT73L51raPj3L1xH1/9bqe91v7ufq6t1FkBGVQI+kEQdIN6EAH34ALsgAMQ83dUBsMBsA6a6Hfdgmmw5230uimwJgl/mZHk7EofZTJcBTOUuWak748pB2VdctEge7BhET5uQGOOhnegxcHPkM2s6E1R7U2Ayp++lui1StNDa4KiZdqU3gCGHZlumoph1nzuUCD+vd5UGVYp81BXnCJm0yAvYKcpUoORec1ccRvHLOpkwzpTxJ2mSRWP1lgdG8Ypf4qxYcgU4Q2w6aXaGgux4YkpEm5JUMJJ78htHLPojM9hDz5ObTtd4zs2YRwbyw6z+tybcgnac1y/K9Dh3uXZPGzIgrc4HEvlyFZHYN9fbabAYxZm3GfCVL74co8AnYEZ545K3zRD1iFYzsBwRZ4Cshmy5sHmP8w4Z87fWGBJngRbv5htSw7915CvwjhY8q2plrYxySHrq6d7knwduHqXyjPKBNSG6qU2tZhKutbzekqfillMeAdR+GiTYQWo5uoFSuQPHM9MklKdouCDb6McmxfX0PGNmB/zZ0lMjVDMlGfKSd8II16DTwEGADTfiu5ZDIeLAAAAAElFTkSuQmCC"},db49:function(e,t,i){"use strict";i.r(t),i("ac6a");var a=i("cebc"),n=i("98c3"),r=i.n(n),o=i("05c0"),l=i("2f62"),s={components:{CvPublictreeContent:o.a},computed:Object(a.a)({},Object(l.c)(["mapName","mapType"]),{_table1:function(){return this.$refs.table1},_table2:function(){return this.$refs.table2},_table3:function(){return this.$refs.table3},_mapMethods:function(){return this.$refs.overspeedMap.mapMethods}}),data:function(){return{vehicleIdsNew:"",searchTable1:{minimumSpeed:60,vehicleStr:"",queryTime:this.$filter.format(new Date,"yyyy-MM-dd"),isCompress:!1},searchTable3:{id:"",startTime:this.$filter.format(new Date,"yyyy-MM-dd start"),endTime:this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss"),minimumSpeed:60,mapType:"",queryType:!0},pickerOptions:{disabledDate:function(e){return e.getTime()>Date.now()}},infoWindow:null,tabActive:"tabs0",table1Data:[],table1loading:!1}},methods:Object(a.a)({},Object(l.b)(["findSpeedingPointsCountInfo"]),{handlerVehicleMonitor:function(e){var t=[];e.forEach(function(e){t.push(e.id)}),this.searchTable1.vehicleStr=0==t.length?"":t.join(","),this.vehicleIdsNew=this.searchTable1.vehicleStr},getMaxHeight:function(e){switch(e){case 1:return $(".leftTop").height()-60;case 2:return $(".leftBottom").height()-105}},vehicleRowClick:function(e){this.vehicleId=e.id,this.tabActive="tabs0",this.overGridLoad(this.vehicleId,!0)},pointToTrack:function(e){this.tabActive="tabs1",this.searchTable3.startTime=e.startTime,this.searchTable3.endTime=e.stopTime,this.detailGridLoad(this.vehicleId,!0,!0)},sFilter:function(e){return this.$filter.format(e.startTime)},eFilter:function(e){return this.$filter.format(e.stopTime)},detailRowClick:function(e){this._mapMethods.clearOverlays();var t=this,i=this.tContent(e),a=this._mapMethods.point({lat:e.latitude,lng:e.longitude}),n=this._mapMethods.mapAddpoint({latitude:e.latitude,longitude:e.longitude},r.a,{width:32,height:32});this._mapMethods.addOverlay(n),this._mapMethods.moveToCenter(a,17),this._mapMethods.openInfoWindow(i,{offset:3==this.mapType?new AMap.Pixel(-7,-3):new BMap.Size(-7,-3)},a),this._mapMethods.overlayClickOpenInfoWindow(n,a,i,function(e){t.infoWindow=e},{})},tContent:function(e){return"<div>\n                                <span>车牌号码: "+e.plateCode+"</span>\n                                <br>\n                                <span>速度: "+e.speed+" km/h (速度底线: "+this.searchTable1.minimumSpeed+" km/h)</span>\n                                <br>\n                                <span>起始时间: "+e.gpsTime+"</span>\n                                <br>\n                                <span>位置描述: "+e.locationDescribe+"</span>\n                              </div>"},vehicleGridLoad:function(e,t){var i=this;this.table1loading=!0,this.findSpeedingPointsCountInfo(this.searchTable1).then(function(e){e.flag&&(e.data?i.table1Data=e.data:i.table1Data=[],i.table1loading=!1,i.vehicleId=0!=i.table1Data.length&&i.table1Data[0].id)})},overGridLoad:function(e,t){this.searchTable1.vehicleStr=e,this._table2.tableInitial()},detailGridLoad:function(e,t,i){this.searchTable3.mapType=this.mapType,this.searchTable3.id=this.vehicleId,this._table3.tableInitial(!0)},search:function(){return""==this.searchTable1.vehicleStr?(this.$message.warning("请选择车辆"),!1):/^[0-9]*$/.test(this.searchTable1.minimumSpeed)?0==this.searchTable1.minimumSpeed?(this.$message.warning("速度底线不能为0"),!1):(this.searchTable1.vehicleStr=this.vehicleIdsNew,this.tabActive="tabs0",this.vehicleGridLoad(null,!1),this._table2.tableInitial(),void this._table3.tableInitial(!0)):(this.$message.warning("请输入正确的速度底线"),!1)},outPut:function(){if(0==this.table1Data.length)return this.$message.warning("数据为空"),!1;if("tabs0"==this.tabActive){var e=this.$service.winParams(this.$COMMON.baseUrl+"/report/exportSpeedingPointsListInfo",{vehicleStr:this.searchTable1.vehicleStr,queryTime:this.searchTable1.queryTime,minimumSpeed:this.searchTable1.minimumSpeed,isCompress:!1});window.location.href=e}else{var t=this.$service.winParams(this.$COMMON.baseUrl+"/report/exportVehicleSpeedDetailListInfo",{id:this.searchTable3.id,startTime:this.searchTable3.startTime,endTime:this.searchTable3.endTime,minimumSpeed:this.searchTable3.minimumSpeed,mapType:this.$store.getters.mapType});window.location.href=t}}}),watch:{"searchTable1.minimumSpeed":function(e){this.searchTable3.minimumSpeed=e}}},c=(i("589c"),i("2877")),d=Object(c.a)(s,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"overSpeed"},[i("cv-operation",{attrs:{position:"left"}},[i("el-form-item",{attrs:{label:e.$t("reportForm.overSpeed.searchTime")}},[i("el-date-picker",{attrs:{clearable:!1,editable:!1,"value-format":"yyyy-MM-dd",type:"date",placeholder:e.$t("reportForm.overSpeed.selectTime"),"picker-options":e.pickerOptions},model:{value:e.searchTable1.queryTime,callback:function(t){e.$set(e.searchTable1,"queryTime",t)},expression:"searchTable1.queryTime"}})],1),i("el-form-item",{attrs:{label:e.$t("reportForm.overSpeed.minSpeed")}},[i("el-input",{staticStyle:{width:"100px"},attrs:{maxlength:4},model:{value:e.searchTable1.minimumSpeed,callback:function(t){e.$set(e.searchTable1,"minimumSpeed",e._n(t))},expression:"searchTable1.minimumSpeed"}})],1),i("el-form-item",{staticStyle:{float:"right"}},[i("cv-tool",{staticClass:"cv-tool",staticStyle:{margin:"0"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-export":!1,"is-remove":!1,"is-add":!1,"is-modify":!1},on:{search:e.search}})],1)],1),i("cv-publictree-content",{attrs:{model:"multi","vehicle-monitor":e.handlerVehicleMonitor,loading:!1}},[i("div",{staticClass:"left"},[i("div",{staticClass:"leftTop"},[i("cv-grid",{directives:[{name:"loading",rawName:"v-loading",value:e.table1loading,expression:"table1loading"}],ref:"table1",attrs:{data:e.table1Data,defaultHeight:e.getMaxHeight(1)},on:{"row-click":e.vehicleRowClick}},[i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.vehicleInfo")}},[i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.plateCode"),prop:"plateCode"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"listTitle"},[e._v(e._s(t.row.plateCode))])]}}])}),i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.deviceId"),prop:"equipmentNumber"}})],1),i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.overTimes"),prop:"speedingFrequency"}})],1)],1),i("div",{staticClass:"leftBottom"},[i("i",{staticClass:"el-icon-upload downLoad",attrs:{title:"导出"},on:{click:e.outPut}}),i("cv-tabs",{attrs:{titles:[e.$t("reportForm.overSpeed.sCar"),e.$t("reportForm.overSpeed.sTra")],"force-render":!1},model:{value:e.tabActive,callback:function(t){e.tabActive=t},expression:"tabActive"}},[i("cv-grid",{ref:"table2",attrs:{params:e.searchTable1,url:"/report/findSpeedingPointsListInfo",defaultHeight:e.getMaxHeight(2)},on:{"row-click":e.pointToTrack}},[i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.plateCode"),align:"center","min-width":"85"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"listTitle"},[e._v(e._s(t.row.plateCode))])]}}])}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.sTime"),align:"center","min-width":"170",prop:"startTime"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.eTime"),align:"center","min-width":"170",prop:"stopTime"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.overTime"),align:"center","min-width":"100",prop:"duration"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.maxSpeed"),align:"center","min-width":"120",prop:"maxSpeed"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.minSpeed"),align:"center","min-width":"120",prop:"minSpeed"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.avgSpeed"),align:"center","min-width":"120",prop:"avgSpeed"}}),i("el-table-column",{attrs:{label:e.$t("reportForm.overSpeed.rate"),align:"center",width:"70",prop:"overSpeedPercent"}})],1),i("cv-grid",{ref:"table3",attrs:{params:e.searchTable3,url:"/report/findVehicleSpeedDetailListInfo",isInitial:!1},on:{"row-click":e.detailRowClick}},[i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.plateCode"),"min-width":"80",prop:"plateCode"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticClass:"listTitle"},[e._v(e._s(t.row.plateCode))])]}}])}),i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.SEtime"),"min-width":"120",prop:"gpsTime"}}),i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.speed1"),"min-width":"80",prop:"speed"}}),i("el-table-column",{attrs:{align:"center",label:e.$t("reportForm.overSpeed.location"),"min-width":"150",prop:"locationDescribe"}})],1)],1)],1)]),i("div",{staticClass:"right"},[i(e.mapName,{ref:"overspeedMap",tag:"component",staticStyle:{width:"100%",height:"100%",overflow:"hidden",margin:"0"}})],1)])],1)},[],!1,null,null,null).exports;t.default=d}}]);