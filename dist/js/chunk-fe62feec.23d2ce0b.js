(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fe62feec"],{"080a":function(e,t,a){},3511:function(e,t,a){"use strict";a.r(t),a("ac6a");var n,i=a("cebc"),s=a("2f62"),r={props:{options:{}},computed:Object(i.a)({},Object(s.c)(["mapName"]),{_table:function(){return this.$refs.table},_mapMethods:function(){return this.$refs.map.mapMethods}}),data:function(){return{height:500,fence:{ruleName:"",fenceType:"",type:103},items:[{value:null,label:this.$t("action.all")},{value:"1",label:this.$t("common.fence.circle")},{value:"2",label:this.$t("common.fence.rectangle")},{value:"3",label:this.$t("common.fence.polygon")},{value:"4",label:this.$t("common.fence.line")}],overlay:null,infoWindow:null}},methods:{rowRender:function(e){switch(e.ruleType){case 1:return this.$t("common.fence.circle");case 2:return this.$t("common.fence.rectangle");case 3:return this.$t("common.fence.polygon");case 4:return this.$t("common.fence.line")}},searchClickLoadGrid:function(){this._table.tableInitial()},selectFence:function(e){var t=this;this.overlay&&this._mapMethods.removeOverlay(this.overlay),this.infoWindow&&this._mapMethods.closeInfoWindow(this.infoWindow);var a={id:e.row.id,mapType:1,type:e.row.type};this.$store.dispatch("queryGetFenceRule",a).then(function(e){if(e.flag){var a="",n={},i=t,s=function(e){i.infoWindow=e};switch(e.data.ruleType){case 1:var r=e.data.requestPoint[0],o={lat:r.latitude,lng:r.longitude},l=e.data.radius;t.overlay=t._mapMethods.mapAddcircle(o,l),a=t.tContent(e.data),n=t._mapMethods.point(o),t._mapMethods.overlayClickOpenInfoWindow(t.overlay,n,a,s,{});break;case 3:var c=[];0<e.data.requestPoint.length&&(e.data.requestPoint.forEach(function(e){c.push({lat:e.latitude,lng:e.longitude})}),t.overlay=t._mapMethods.mapAddpolygon(c,{}),a=t.tContent(e.data),n=t._mapMethods.point(c[0]),t._mapMethods.getBestView(c),t._mapMethods.openInfoWindow(a,t.overlay,t.overlay.getBounds().getCenter()),t._mapMethods.overlayClickOpenInfoWindow(t.overlay,t.overlay.getBounds().getCenter(),a,s,{}));break;case 4:if(0<e.data.requestPoint.length){var m=[];e.data.requestPoint.forEach(function(e){m.push({lat:e.latitude,lng:e.longitude})}),t.overlay=t._mapMethods.mapAddline(m,{}),a=t.tContent(e.data),n=t._mapMethods.point(m[0]),t._mapMethods.getBestView(m),t._mapMethods.overlayClickOpenInfoWindow(t.overlay,n,a,s,{})}}}})},tContent:function(e){var t='<div style="padding-top:5px;padding-bottom:5px;">';if(t+="<div style='font-size:16px;'><span>"+this.$t("fenceManage.ruleName")+"：</span><span>".concat(e.ruleName,"</span></div>"),e.area&&(t+="<div style='font-size:16px;'><span>"+this.$t("fenceManage.area")+"：</span><span>".concat(this.filterArea(e.area),"</span></div>")),t+="<div style='font-size:16px;'><span>"+this.$t("fenceManage.areaType")+"：",0<e.areaNameAndType.length)for(var a=e.areaNameAndType,n=0;n<a.length;n++)switch(e.areaNameAndType[n].areaType){case 2:t+="<div style='text-indent:20px;font-size:14px;'><span>".concat(a[n].areaName," :</span></div>"),t+="<div style='text-indent:40px;font-size:12px;'><span>"+this.$t("fenceManage.limitrpm")+"：</span><span>".concat(null==a[n].limitrpm?"--":a[n].limitrpm," (r/min)</span></div>"),t+="<div style='text-indent:40px;font-size:12px;'><span>"+this.$t("fenceManage.aspeed")+"：</span><span>".concat(null==a[n].aspeed?"--":a[n].aspeed," (km/h)</span></div>");break;case 256:case 512:case 1024:t+="<div style='text-indent:20px;font-size:14px;'><span>".concat(a[n].areaName," :</span></div>"),t+="<div style='text-indent:40px;font-size:12px;'><span>"+this.$t("fenceManage.limitrpm")+"：</span><span>".concat(a[n].limitrpm," (r/min)</span></div>"),t+="<div style='text-indent:40px;font-size:12px;'><span>"+this.$t("fenceManage.aspeed")+"：</span><span>".concat(a[n].aspeed," (km/h)</span></div>");break;case 1:t+="<div style='text-indent:20px;font-size:14px;'><span>".concat(a[n].areaName," :</span></div>"),t+="<div style='text-indent:40px;font-size:12px;'><span>"+this.$t("fenceManage.sTime")+"：</span><span>".concat(a[n].startTime,"</span></br><span style='margin-left:40px'>")+this.$t("fenceManage.eTime")+"：</span><span>".concat(a[n].endTime,"</span></span></div>");break;default:t+="<div style='text-indent:20px;font-size:14px;'><span>".concat(a[n].areaName,"</div>")}return t+"</div>"},addFence:function(){this.options.name="fenceActionzt",this.options.id="",this.options.isModify=!1,this.options.type=103},updateFence:function(e){this.options.name="fenceActionzt",this.options.id=e.row.id,this.options.isModify=!0,this.options.type=e.row.type},removeFence:function(e){var t=this;this.$confirm(this.$t("action.confirmIsRemove"),this.$t("action.tip"),{confirmButtonText:this.$t("action.confirm"),cancelButtonText:this.$t("action.cancel"),type:"warning"}).then(function(){t.$http({url:"/fenece/deletefencerule",params:{id:e.row.id,type:e.row.type}}).then(function(e){e.flag?(t.$message.success({message:t.$t("action.actionSuccess")}),t._table.tableInitial(),t.overlay&&t._mapMethods.removeOverlay(t.overlay),t._mapMethods.clearOverlays()):t.$message.error({message:t.$t("error."+e.errorCode)})})}).catch(function(){t.$message.info({message:t.$t("action.cancelRemove")})})},filterArea:function(e){switch(e){case 1:return"装货区";case 2:return"禁区";case 3:return"倾倒区";case 7:return"一级围栏";case 8:return"二级围栏";case 9:return"三级围栏";case 6:return"绿色围栏"}}}},o=(a("cb5a"),a("2877")),l=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainzt"},[a("cv-operation",{attrs:{position:"left"}},[a("el-form-item",{attrs:{label:e.$t("fenceManage.ruleName"),prop:"fenceName"}},[a("el-input",{staticStyle:{width:"140px"},attrs:{size:"small",placeholder:e.$t("placeholder.inputValue")},model:{value:e.fence.ruleName,callback:function(t){e.$set(e.fence,"ruleName",t)},expression:"fence.ruleName"}})],1),a("el-form-item",[a("cv-tool",{attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-export":!1},on:{add:e.addFence,search:e.searchClickLoadGrid}})],1)],1),a("cv-content",[a("cv-grid",{ref:"table",staticClass:"leftzt",attrs:{params:e.fence,url:"/fenece/queryfencerulepage"}},[a("el-table-column",{attrs:{label:e.$t("fenceManage.ruleName"),prop:"ruleName"}}),a("el-table-column",{attrs:{label:e.$t("fenceManage.ruleType"),prop:"ruleType",formatter:e.rowRender}}),a("el-table-column",{attrs:{label:e.$t("fenceManage.remark"),prop:"remarksss"}}),a("el-table-column",{attrs:{label:e.$t("fenceManage.options")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-span",{staticStyle:{float:"left","padding-right":"10px"},attrs:{type:"info"},nativeOn:{click:function(a){return e.selectFence(t)}}},[e._v(e._s(e.$t("power.look")))]),a("cv-table-tool",{staticStyle:{float:"left"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu},on:{modify:function(a){return e.updateFence(t)},remove:function(a){return e.removeFence(t)}}})]}}])})],1),a("el-row",{staticClass:"rightzt",staticStyle:{height:"100%"}},[a(e.mapName,{ref:"map",tag:"component",staticStyle:{width:"100%",height:"100%",overflow:"hidden",margin:"0"},attrs:{id:"fenceMainZT"}})],1)],1)],1)},[],!1,null,"f6f79140",null).exports,c=(a("6b54"),a("96cf"),a("3b8d")),m=(a("20d6"),a("7f08")),p={props:{options:{}},data:function(){var e=this;return{subStatus:!1,selectDisabled:!0,radius:0,disBtn:!1,fenceForm:{id:"",fenceName:"",fenceType:[],ruleType:"",remark:"",date:[],time:[],limitrpm:"900",aspeed:"20",limitSpeed:"",dateType:0,area:"1"},rules:{fenceName:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{min:2,max:15,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:2,max:15})},{pattern:/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:this.$t("filter.type4")}],remark:[{min:0,max:150,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:150})}],date:[{type:"array",required:!1,message:this.$t("el.datepicker.selectDate"),trigger:"change"},{validator:function(t,a,n){-1<e.fenceForm.fenceType.findIndex(function(e){return"1"==e})&&0==e.fenceForm.dateType?0==a.length?n(new Error("请选择日期")):null==a[0]||null==a[1]?n(new Error("请选择日期")):n():n()},trigger:"blur,change"}],time:[{type:"array",required:!1,message:this.$t("el.datepicker.selectTime"),trigger:"change"},{validator:function(t,a,n){-1<e.fenceForm.fenceType.findIndex(function(e){return"1"==e})&&1==e.fenceForm.dateType?0==a.length?n(new Error("请选择时间")):null==a[0]||null==a[1]?n(new Error("请选择时间")):n():n()},trigger:"blur,change"}],limitrpm:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{validator:function(e,t,a){0<=t-600&&t-2e3<=0?a():a(new Error("转速范围600-2000"))},trigger:"blur,change"},{pattern:/^[0-9]*$/,message:this.$t("filter.type2")}],aspeed:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{validator:function(e,t,a){0<=t-0&&t-100<=0?a():a(new Error("限速范围0-100"))},trigger:"blur,change"},{pattern:/^[0-9]*$/,message:this.$t("filter.type2")}],fenceType:[{type:"array",required:!0,message:"请选择围栏属性",trigger:"change"}]},ztArea:[{value:"2",label:"禁区"},{value:"1",label:"装货区"},{value:"3",label:"倾倒区"},{value:"4",label:"一级围栏"},{value:"5",label:"二级围栏"},{value:"6",label:"三级围栏"},{value:"7",label:"绿色围栏"}],areaTypeItems:[],items:[{value:"1",label:this.$t("common.fence.1"),disabled:!0},{value:"2",label:this.$t("common.fence.2"),disabled:!0},{value:"4",label:this.$t("common.fence.4"),disabled:!0},{value:"8",label:this.$t("common.fence.8"),disabled:!0},{value:"16",label:this.$t("common.fence.16"),disabled:!0},{value:"32",label:this.$t("common.fence.32"),disabled:!0},{value:"256",label:this.$t("common.fenceZt.256"),disabled:!0},{value:"512",label:this.$t("common.fenceZt.512"),disabled:!0},{value:"1024",label:this.$t("common.fenceZt.1024"),disabled:!0},{value:"2048",label:this.$t("common.fenceZt.2048"),disabled:!0},{value:"4096",label:this.$t("common.fenceZt.4096"),disabled:!0}],isShow:!0,overlay:null}},computed:Object(i.a)({},Object(s.c)(["mapName"]),{_mapMethods:function(){return this.$refs.map.mapMethods},isShowDateTime:function(){return-1<this.fenceForm.fenceType.findIndex(function(e){return"1"==e})?(this.options.isModify&&0==this.fenceForm.time.length&&(this.fenceForm.time=[new Date(2016,9,10,0,0),new Date(2016,9,10,23,59)]),!0):(this.rules.date[0].required=!1,this.rules.time[0].required=!1)},isShowDateInput:function(){return-1<this.fenceForm.fenceType.findIndex(function(e){return"1"==e})&&0==this.fenceForm.dateType?this.rules.date[0].required=!0:(this.rules.date[0].required=!1,!(this.fenceForm.date=[]))},isShowTimeInput:function(){return-1<this.fenceForm.fenceType.findIndex(function(e){return"1"==e})&&1==this.fenceForm.dateType?(this.rules.time[0].required=!0,this.options.isModify||(this.fenceForm.time=[new Date(2016,9,10,0,0),new Date(2016,9,10,23,59)]),!0):this.rules.time[0].required=!1},isShowLimitSpeed:function(){return-1<this.fenceForm.fenceType.findIndex(function(e){switch(e){case"2":case"256":case"512":case"1024":return!0}})}}),methods:Object(i.a)({},Object(s.b)(["querymuckfenceT"]),{getType:(n=Object(c.a)(regeneratorRuntime.mark(function e(){var t,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.querymuckfenceT({type:"138"});case 2:t=e.sent,a=t.data,t.flag&&(this.ztArea=a);case 6:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),readyLoad:function(){""!=this.options.id?(this.getFenceToUpdate(this.options.id,this.options.type),this.fenceForm.id=this.options.id,this.disBtn=!0):this.disBtn=!1},typeChange:function(e){var t=e.length-1;"2"==e[t]?this.getIndexSplice(["256","512","1024"]):"256"==e[t]?this.getIndexSplice(["2","512","1024"]):"512"==e[t]?this.getIndexSplice(["2","256","1024"]):"1024"==e[t]?this.getIndexSplice(["2","256","512"]):"2048"==e[t]?this.getIndexSplice(["4096"]):"4096"==e[t]&&this.getIndexSplice(["2048"])},comeBack:function(){this.options.name="fenceMainZt",this.options.id="",this.$refs.fenceForm.resetFields()},Addpolygon:function(){var e=this;this.isShow=!1,this.clearOverlay(),this.fenceForm.ruleType=3,this._mapMethods.onclickPolygon(function(t){e.overlay=t.overlay,e.isShow=!0})},clearOverlay:function(){this.clearMap()},clearMap:function(){this.overlay&&(this._mapMethods.removeOverlay(this.overlay),this._mapMethods.clearOverlays(),this.overlay=null,this.fenceForm.ruleType="")},submitFence:function(){var e=this;this.$refs.fenceForm.validate(function(t){if(!t)return!1;if(e.overlay){var a=e.getParmas();if(1==e.fenceForm.ruleType&&0==e.radius)return e.$message.error({message:"圆形半径不能为0"}),!1;""!=e.fenceForm.id?e.fenceActionZt("/fenece/updatefencerule",a):e.fenceActionZt("/fenece/insertfencerule",a)}else e.$message.error({message:e.$t("action.addOverlay")})})},fenceActionZt:function(e,t){var a=this;this.subStatus=!0,this.$http({url:e,data:JSON.stringify(t)}).then(function(e){!e.flag&&e.errorCode?a.$message.error({message:a.$t("error."+e.errorCode)}):(a.$refs.fenceForm.resetFields(),a.clearOverlay(),a.options.id="",a.options.name="fenceMainZt",a.$message.success({message:a.$t("action.actionSuccess")})),a.subStatus=!1}).catch(function(){a.subStatus=!1})},getParmas:function(){var e=this,t=[],a=[],n={};switch(this.fenceForm.fenceType.forEach(function(a){switch(a){case"1":0==e.fenceForm.dateType?t.push({areaType:a,startTime:m.a.format(e.fenceForm.date[0],"yyyy-MM-dd HH:mm:ss"),endTime:m.a.format(e.fenceForm.date[1],"yyyy-MM-dd HH:mm:ss"),dataType:e.fenceForm.dateType}):t.push({areaType:a,startTime:m.a.format(e.fenceForm.time[0],"HH:mm:ss"),endTime:m.a.format(e.fenceForm.time[1],"HH:mm:ss"),dataType:e.fenceForm.dateType});break;case"2":case"256":case"512":case"1024":t.push({areaType:a,limitrpm:e.fenceForm.limitrpm,aspeed:e.fenceForm.aspeed});break;default:t.push({areaType:a})}}),this.fenceForm.ruleType){case 1:n=this._mapMethods.getCircleOptions(this.overlay),a.push({latitude:n.center.lat,longitude:n.center.lng}),this.radius=parseInt(n.radius);break;case 2:break;case 3:(n=this._mapMethods.getPolygonOptions(this.overlay)).points.forEach(function(e){a.push({latitude:e.lat,longitude:e.lng})});break;case 4:(n=this._mapMethods.getLineOptions(this.overlay)).points.forEach(function(e){a.push({latitude:e.lat,longitude:e.lng})})}return{id:this.fenceForm.id,mapType:1,ruleName:this.fenceForm.fenceName,ruleType:this.fenceForm.ruleType,requestPoint:a,radius:this.radius,remarksss:this.fenceForm.remark,areaNameAndType:t,type:this.options.type,area:this.fenceForm.area}},getFenceToUpdate:function(e,t){var a=this,n={id:e,mapType:1,type:t},i=this.$loading({text:"正在拼命加载中",target:document.querySelector(".el-card")});this.$store.dispatch("queryGetFenceRule",n).then(function(e){switch(a.fenceForm.ruleType=e.data.ruleType,a.fenceForm.area=e.data.area+"",e.data.areaNameAndType.forEach(function(e){e.limitrpm&&(a.fenceForm.limitrpm=e.limitrpm+""),e.aspeed&&(a.fenceForm.aspeed=e.aspeed+"")}),e.data.ruleType){case 1:var t=e.data.requestPoint[0],n={lat:t.latitude,lng:t.longitude};a.radius=e.data.radius;var s=a._mapMethods.point(n);a.overlay=a._mapMethods.mapAddcircle(s,a.radius);break;case 3:var r=[];0<e.data.requestPoint.length&&(e.data.requestPoint.forEach(function(e){r.push({lat:e.latitude,lng:e.longitude})}),a.overlay=a._mapMethods.mapAddpolygon(r,{}),s=a._mapMethods.point(r[0]),a._mapMethods.getBestView(r));break;case 4:var o=[];e.data.requestPoint.forEach(function(e){o.push({lat:e.latitude,lng:e.longitude})}),a.overlay=a._mapMethods.mapAddline(o,{})}a._mapMethods.overlayEdit(a.overlay,!0),a.areaTypeSetVal(e.data),i.close()})},areaTypeSetVal:function(e){var t=this,a="",n="";this.fenceForm.fenceName=e.ruleName,this.fenceForm.remark=e.remarksss,e.areaNameAndType.forEach(function(e){switch(t.fenceForm.fenceType.push(e.areaType.toString()),e.areaType){case 1:t.fenceForm.dateType=parseInt(e.dataType),0==t.fenceForm.dateType?(a=t.$service.dateTimeParse(e.startTime),n=t.$service.dateTimeParse(e.endTime),t.fenceForm.date=[a,n]):(a=t.$service.timeParse(e.startTime),n=t.$service.timeParse(e.endTime),t.fenceForm.time=[a,n]);break;case 2:t.fenceForm.speedTime=e.aseconds,t.fenceForm.speed=e.aspeed,t.isSpeed=!0}})},getIndexSplice:function(e){for(var t=this,a=function(a){var n=t.fenceForm.fenceType.findIndex(function(t){return t==e[a]});-1<n&&t.fenceForm.fenceType.splice(n,1)},n=0;n<e.length;n++)a(n)},removeRuleType:function(e){"1"==e.value&&(this.fenceForm.time=[new Date(2016,9,10,0,0),new Date(2016,9,10,23,59)],this.fenceForm.date=[],this.fenceForm.dateType=0,this.rules.date[0].required=!1,this.rules.time[0].required=!1)}}),created:function(){this.getType()},mounted:function(){var e=[];this.items.forEach(function(t){t.disabled=!1,e.push(t)}),this.areaTypeItems=e,this.options.isModify||(this.fenceForm.fenceType=["2","4","8","16","32","2048"])},watch:{"fenceForm.area":function(e){this.options.isModify||(this.fenceForm.fenceType=1==e?["4096","4","8","16","32","1024"]:2==e?["2","4","8","16","32","2048"]:["4","8","16","32"])}}},d=(a("364e"),{components:{fenceMainZt:l,fenceActionzt:Object(o.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainZT"},[a(e.mapName,{ref:"map",tag:"component",staticStyle:{width:"100%",height:"100%",overflow:"hidden",margin:"0"},attrs:{id:"fenceActionZt",mapLoaded:e.readyLoad}}),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],staticClass:"formAction"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"1","font-size":"18px"}},[e._v(e._s(e.$t("fenceManage.zt.name")))]),a("el-button-group",{staticStyle:{float:"right"}},[a("el-button",{attrs:{size:"small",type:"primary",loading:e.subStatus},on:{click:e.submitFence}},[e._v(e._s(e.$t("action.save")))]),a("el-button",{attrs:{size:"small"},on:{click:e.comeBack}},[e._v(e._s(e.$t("action.back")))])],1)],1),a("cv-scrollbar",{staticClass:"formClass"},[a("el-form",{ref:"fenceForm",attrs:{model:e.fenceForm,rules:e.rules,inline:!0,"label-width":"90px"}},[a("el-form-item",{staticStyle:{"text-align":"left","margin-right":"0px",width:"100%"}},[a("el-button",{staticStyle:{"margin-left":"15px",width:"290%"},attrs:{type:"primary"},on:{click:e.Addpolygon}},[e._v(e._s(e.$t("fenceManage.zt.select")))])],1),a("el-form-item",{attrs:{label:e.$t("fenceManage.ruleName"),prop:"fenceName"}},[a("el-input",{staticClass:"inputStype",staticStyle:{width:"335px"},attrs:{size:"small",placeholder:e.$t("placeholder.inputValue")},model:{value:e.fenceForm.fenceName,callback:function(t){e.$set(e.fenceForm,"fenceName",t)},expression:"fenceForm.fenceName"}})],1),a("el-form-item",{attrs:{label:e.$t("fenceManage.area")}},[a("el-select",{staticStyle:{width:"335px"},attrs:{size:"small"},model:{value:e.fenceForm.area,callback:function(t){e.$set(e.fenceForm,"area",t)},expression:"fenceForm.area"}},e._l(e.ztArea,function(e){return a("el-option",{key:e.wordbookTypeId+"",attrs:{label:e.wordbookName,value:e.wordbookTypeId+""}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("fenceManage.areaType"),prop:"fenceType"}},[a("el-select",{staticStyle:{width:"335px"},attrs:{"collapse-tags":"",multiple:"",size:"small",placeholder:e.$t("placeholder.selectValue")},on:{change:e.typeChange,"remove-tag":e.removeRuleType},model:{value:e.fenceForm.fenceType,callback:function(t){e.$set(e.fenceForm,"fenceType",t)},expression:"fenceForm.fenceType"}},e._l(e.areaTypeItems,function(e){return a("el-option",{key:e.value,attrs:{disabled:e.disabled,label:e.label,value:e.value}})}),1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowDateTime,expression:"isShowDateTime"}],attrs:{label:e.$t("fenceManage.dateTimeTYpe"),prop:"dateType"}},[a("el-radio-group",{model:{value:e.fenceForm.dateType,callback:function(t){e.$set(e.fenceForm,"dateType",t)},expression:"fenceForm.dateType"}},[a("el-radio",{attrs:{label:0,size:"small"}},[e._v(e._s(e.$t("fenceManage.selectDate")))]),a("el-radio",{attrs:{label:1,size:"small"}},[e._v(e._s(e.$t("fenceManage.selectTime")))])],1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowDateInput,expression:"isShowDateInput"}],attrs:{label:e.$t("fenceManage.date"),prop:"date"}},[a("el-date-picker",{staticStyle:{width:"335px"},attrs:{size:"small",align:"right",type:"datetimerange",clearable:!1,editable:!1,placeholder:e.$t("el.datepicker.selectDateTime")},model:{value:e.fenceForm.date,callback:function(t){e.$set(e.fenceForm,"date",t)},expression:"fenceForm.date"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowTimeInput,expression:"isShowTimeInput"}],attrs:{label:e.$t("fenceManage.time"),prop:"time"}},[a("el-time-picker",{staticStyle:{width:"335px"},attrs:{size:"small",clearable:!1,"is-range":"",align:"right",editable:!1,placeholder:e.$t("el.datepicker.selectTime")},model:{value:e.fenceForm.time,callback:function(t){e.$set(e.fenceForm,"time",t)},expression:"fenceForm.time"}})],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowLimitSpeed,expression:"isShowLimitSpeed"}],attrs:{label:e.$t("fenceManage.limitrpm"),prop:"limitrpm"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{maxlength:4,type:"text",size:"small"},model:{value:e.fenceForm.limitrpm,callback:function(t){e.$set(e.fenceForm,"limitrpm",t)},expression:"fenceForm.limitrpm"}}),a("span",{staticStyle:{position:"absolute"}},[e._v(" (r/min)")])],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.isShowLimitSpeed,expression:"isShowLimitSpeed"}],attrs:{label:e.$t("fenceManage.aspeed"),prop:"aspeed"}},[a("el-input",{staticStyle:{width:"150px"},attrs:{maxlength:3,type:"text",size:"small"},model:{value:e.fenceForm.aspeed,callback:function(t){e.$set(e.fenceForm,"aspeed",t)},expression:"fenceForm.aspeed"}}),a("span",{staticStyle:{position:"absolute"}},[e._v(" (km/h)")])],1),a("el-form-item",{attrs:{label:e.$t("fenceManage.remark"),prop:"remark"}},[a("el-input",{staticClass:"inputStype",staticStyle:{width:"335px"},attrs:{type:"textarea",rows:3,size:"small",placeholder:e.$t("placeholder.inputValue")},model:{value:e.fenceForm.remark,callback:function(t){e.$set(e.fenceForm,"remark",t)},expression:"fenceForm.remark"}})],1)],1)],1)],1)],1)],1)},[],!1,null,"b4780ae6",null).exports},data:function(){return{options:{name:"fenceMainZt",power:[],id:""}}}}),f=Object(o.a)(d,function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.options.name,{tag:"component",attrs:{options:e.options}})},[],!1,null,"21d0508a",null).exports;t.default=f},"364e":function(e,t,a){"use strict";var n=a("080a");a.n(n).a},"4f97":function(e,t,a){},cb5a:function(e,t,a){"use strict";var n=a("4f97");a.n(n).a}}]);