(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1e48849c"],{"05c0":function(e,t,n){"use strict";n("7f7f"),n("20d6"),n("ac6a");var i=n("cebc"),s=n("3f4e"),a=n("2f62"),o={name:"CvPublictreeContent",components:{CvContent:s.a},props:{model:String,vehicleMonitor:Function,loading:Boolean,noresize:{default:!1,type:Boolean}},data:function(){return{entryList:[],condition:""}},computed:Object(i.a)({},Object(a.c)(["onlineList","isAttention","socketEnterprise","socketVehicle","vehicle_data","vehicleCondition"]),{isCheck:function(){switch(this.model){case"multi":return!0;case"single":default:return!1}},_treeMethods:function(){return this.$refs.tabs},_contentMethods:function(){return this.$refs.content}}),beforeDestroy:function(){var e=this._treeMethods.getAllNodes;this.setStoreVehicleSearchCondition(this.condition),this.setStoreVehicleData(e())},mounted:function(){var e=this._treeMethods.$refs.tree.reference().ztreeApi;e()&&e().checkAllNodes(!1)},methods:Object(i.a)({},Object(a.b)(["setStoreVehicleData","setStoreVehicleSearchCondition"]),{handlerVehicleSearch:function(e){this.condition=e},vehicle_Monitor:function(e){var t=e.data;if(e.name,"function"==typeof this.vehicleMonitor)switch(this.model){case"multi":return this.vehicle_Monitor_multi(e);case"single":return this.vehicleMonitor(t[0])}},vehicle_Monitor_multi:function(e){var t=this,n=e.data;switch(e.name){case"check":this.entryList=this.entryList.concat(n);break;case"cancel":n.forEach(function(e){var n=t.entryList.findIndex(function(t){return t.id==e.id});0<=n&&t.entryList.splice(n,1)})}this.vehicleMonitor(this.entryList)}})},r=(n("45d7"),n("2877")),l=Object(r.a)(o,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("cv-content",{ref:"content",attrs:{loading:e.loading,noresize:e.noresize}},[e.model?n("cv-tabs-tree",{ref:"tabs",staticClass:"vehiclemaster-tree",attrs:{slot:"aside","vehicle-search":e.vehicleCondition,"is-checked":e.isCheck,"tree-data":e.vehicle_data,"online-monitor":e.onlineList,"vehicle-monitor":e.socketVehicle,"attention-monitor":e.isAttention,"enterprise-fleet-monitor":e.socketEnterprise,"node-monitor":e.vehicle_Monitor},on:{"vehicle-choose-search":e.handlerVehicleSearch},slot:"aside"}):e._e(),e._t("default")],2)},[],!1,null,"2dfdf41b",null).exports;l.install=function(e){e.component(l.name,l)},t.a=l},"365a":function(e,t,n){"use strict";n.r(t),n("7f7f"),n("ac6a");var i={methods:{queryAskList:function(e){return this.$http({url:"/ask/getVehicleAskTemplatePage",params:e})},insetAskList:function(e){return this.$http({url:"/ask/insertVehicleAskTemplate",data:JSON.stringify(e)})}}},s=(n("ed08"),n("0e86")),a={mixins:[i],props:{options:{}},data:function(){return{activeName:"first",sendDate:{isTemplate:!0,askInfo:"",sendFlag:25,vehicleId:this.options.carId.id,answerLists:[{value:""}]},loading:!1,grid:{}}},computed:{_table:function(){return this.$refs.table}},methods:{removeDom:function(e){var t=this.sendDate.answerLists.indexOf(e);-1!==t&&this.sendDate.answerLists.splice(t,1)},confirm:function(){var e=this,t=this;this.$refs.sendDate.validate(function(n){if(!n)return!1;t.loading=!0;var i=[];for(var a in t.sendDate.answerLists){var o={answerId:a,answerContent:t.sendDate.answerLists[a].value};i.push(o)}var r={answerList:i,isTemplate:t.sendDate.isTemplate,askInfo:t.sendDate.askInfo,sendFlag:t.sendDate.sendFlag,vehicleId:t.sendDate.vehicleId};Object(s.b)({url:"/sendOrder/sendVehicleAskCmd",data:r}).then(function(n){setTimeout(function(i){t.loading=!1,t.options.flag=!1,e.$emit("confirm"),Object(s.a)(n,t.options)},2e3)})})},save:function(){var e=this;"first"==this.activeName?this.confirm():this.currentRow?(this.loading=!0,Object(s.b)({url:"/sendOrder/sendVehicleAskCmd",data:{vehicleId:this.sendDate.vehicleId,askId:this.currentRow.id,sendFlag:this.currentRow.flag}}).then(function(t){setTimeout(function(n){e.loading=!1,e.options.flag=!1,e.$emit("confirm"),Object(s.a)(t,e.options)},2e3)})):this.$message.warning("请选择下发模版")},handleCurrentChange:function(e){this.currentRow=e},showAnswer:function(e){var t="";return e.vehicleAskTemplateDetails.forEach(function(e){t+=e.answerinfo+","}),t=t.substring(0,t.length-1)},addDom:function(){this.sendDate.answerLists.length<5?this.sendDate.answerLists.push({value:"",key:Date.now()}):this.$message.warning("问题答案不能超过5个")},answerList:function(e){}},watch:{"options.flag":function(e){e||(this.options.name="")}},mounted:function(){this.answerList(!0)}},o=(n("bd71"),n("2877")),r={components:{add:Object(o.a)(a,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"askTabs"},[n("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[n("el-tab-pane",{ref:"first",attrs:{label:"提问下发",name:"first"}},[n("el-form",{ref:"sendDate",staticClass:"first",attrs:{model:e.sendDate,"label-position":"right","label-width":"136px",inline:!0}},[n("el-form-item",{attrs:{label:"下发问题:",prop:"askInfo",rules:{required:!0,message:"下发问题不能为空",trigger:"blur"}}},[n("el-input",{attrs:{maxlength:50},model:{value:e.sendDate.askInfo,callback:function(t){e.$set(e.sendDate,"askInfo","string"==typeof t?t.trim():t)},expression:"sendDate.askInfo"}})],1),n("el-form-item",[n("el-checkbox",{model:{value:e.sendDate.isTemplate,callback:function(t){e.$set(e.sendDate,"isTemplate",t)},expression:"sendDate.isTemplate"}},[e._v("加为模版")])],1),n("el-form-item",{attrs:{label:"显示方式:",prop:"sendFlag"}},[n("el-select",{model:{value:e.sendDate.sendFlag,callback:function(t){e.$set(e.sendDate,"sendFlag",t)},expression:"sendDate.sendFlag"}},[n("el-option",{attrs:{value:25,label:"全部"}}),n("el-option",{attrs:{value:1,label:"紧急"}}),n("el-option",{attrs:{value:8,label:"终端TTS播读"}}),n("el-option",{attrs:{value:16,label:"广告屏显示"}}),n("el-option",{attrs:{value:9,label:"紧急+终端TTS播读"}}),n("el-option",{attrs:{value:17,label:"紧急+广告屏显示"}}),n("el-option",{attrs:{value:24,label:"终端TTS播读+广告屏显示"}})],1)],1),e._l(e.sendDate.answerLists,function(t,i){return n("el-form-item",{key:t.key,attrs:{label:"问题答案"+(i+1)+":",prop:"answerLists."+i+".value",rules:{required:!0,message:"问题答案不能为空",trigger:"blur"}}},[n("el-input",{attrs:{maxlength:50},model:{value:t.value,callback:function(n){e.$set(t,"value","string"==typeof n?n.trim():n)},expression:"domain.value"}}),n("el-button",{directives:[{name:"show",rawName:"v-show",value:!(e.sendDate.answerLists.length>i+1||5==e.sendDate.answerLists.length),expression:"(sendDate.answerLists.length > (index+1) || sendDate.answerLists.length==5) ? false : true"}],on:{click:function(t){return t.preventDefault(),e.addDom()}}},[e._v("新增")]),n("el-button",{directives:[{name:"show",rawName:"v-show",value:1!=e.sendDate.answerLists.length,expression:"sendDate.answerLists.length ==1 ? false : true"}],on:{click:function(n){return n.preventDefault(),e.removeDom(t)}}},[e._v("删除")])],1)})],2)],1),n("el-tab-pane",{ref:"second",attrs:{label:"问题模版",name:"second"}},[n("cv-grid",{ref:"table",attrs:{params:e.grid,url:"/ask/getVehicleAskTemplatePage","highlight-current-row":""},on:{"row-click":e.handleCurrentChange}},[n("el-table-column",{attrs:{label:"问题",prop:"askinfo","min-width":"150"}}),n("el-table-column",{attrs:{label:"问题答案",prop:"mobileCode","min-width":"150",formatter:e.showAnswer}})],1)],1)],1),n("div",{staticClass:"dialog-footer",staticStyle:{padding:"10px",clear:"both"}},[n("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("action.confirm")))]),n("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,CvPublictreeContent:n("05c0").a},mixins:[],data:function(){return{loading:!1,gridOptions:{vehicleId:"",askInfo:""},dialog:{title:"--",flag:!1,name:"add",carId:"",size:"dialog-full"}}},computed:{_table:function(){return this.$refs.askQuestion}},methods:{handlerVehicleMonitor:function(e){this.gridOptions.vehicleId!=e.id&&(this.dialog.carId=e,this.gridOptions.vehicleId=e.id,this._table.tableInitial())},load:function(e){var t=this;if(!this.searchOptions.vehicleId)return this.$message.warning("请先选择车辆"),!1;e?(this.gridOptions.options.flag=!0,this.gridOptions.options.current=1):this.gridOptions.options.flag=!1;var n=this.searchOptions;n.current=this.gridOptions.options.current,n.size=this.gridOptions.options.size,this.loading=!0,this.$store.dispatch("getVehicleAskPage",n).then(function(e){e.flag?(t.gridOptions.table=e.data.records,t.gridOptions.options.total=e.data.total):(t.gridOptions.table=[],t.gridOptions.options.total=0),t.loading=!1}).catch(function(){t.$message.error("网络异常"),t.loading=!1})},plateCodeAndColor:function(e){return this.$filter.plateCodeColor(e.plateColor)},showAnswer:function(e){var t="";return e.vehicleAskDetails.forEach(function(e){t+=e.answerInfo+","}),t=t.substring(0,t.length-1)},showAnswerC:function(e){var t="";return e.vehicleAskDetails.forEach(function(e){1==e.answered&&(t+=e.answerInfo+",")}),t=t.substring(0,t.length-1)},addQuestion:function(e){this.gridOptions.vehicleId?(this.dialog.flag=!0,this.dialog.size="dialog-small",this.dialog.name=e.name,this.dialog.title=e.title):this.$message.warning("请先选择车辆")},sendFlag:function(e){return 1==e.sendFlag?"下发成功":"下发失败"},showSendFlag:function(e){var t="";switch(e.flag){case 1:t="紧急";break;case 8:t="终端TTS播读";break;case 9:t="紧急+终端TTS播读";break;case 17:t="紧急+广告屏显示";break;case 24:t="终端TTS播读+广告屏显示";break;case 25:t="全部";break;case 16:t="广告屏显示"}return t},confirm:function(){var e=this;setTimeout(function(){e._table.tableInitial()},200)}}},l=(n("7f83"),Object(o.a)(r,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"askQuestion"},[n("cv-operation",[n("el-form-item",{staticStyle:{float:"left",position:"relative",left:"5px"},attrs:{label:"查询问题:"}},[n("el-input",{attrs:{size:"small"},model:{value:e.gridOptions.askInfo,callback:function(t){e.$set(e.gridOptions,"askInfo",t)},expression:"gridOptions.askInfo"}})],1),n("cv-tool",{staticStyle:{margin:"0px"},attrs:{name:e.$route.name,data:e.$store.getters.monitorMenu,"is-modify":!1,"is-remove":!1,"is-export":!1},on:{add:e.addQuestion,search:e.confirm}})],1),n("cv-content",{staticStyle:{top:"30px"}},[n("cv-publictree-content",{ref:"tabs",attrs:{model:"single","vehicle-monitor":e.handlerVehicleMonitor,loading:!1}},[n("cv-grid",{ref:"askQuestion",attrs:{params:e.gridOptions,url:"/ask/getVehicleAskPage"}},[n("el-table-column",{attrs:{label:"显示方式",prop:"sendFlag",formatter:e.showSendFlag}}),n("el-table-column",{attrs:{label:"问题",prop:"askinfo"}}),n("el-table-column",{attrs:{label:"选项答案",prop:"",formatter:e.showAnswer}}),n("el-table-column",{attrs:{label:"回答答案",prop:"",formatter:e.showAnswerC}}),n("el-table-column",{attrs:{label:"发送时间",prop:"sendTime"}}),n("el-table-column",{attrs:{label:"反馈时间",prop:"backTime"}}),n("el-table-column",{attrs:{label:"反馈状态",prop:"sendFlag",formatter:e.sendFlag}})],1)],1)],1),n("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[n(e.dialog.name,{tag:"component",attrs:{options:e.dialog},on:{confirm:e.confirm}})],1)],1)},[],!1,null,"76668210",null).exports);t.default=l},"45d7":function(e,t,n){"use strict";var i=n("6e18");n.n(i).a},"6e18":function(e,t,n){},"7f83":function(e,t,n){"use strict";var i=n("d208");n.n(i).a},"8c77":function(e,t,n){},bd71:function(e,t,n){"use strict";var i=n("8c77");n.n(i).a},d208:function(e,t,n){}}]);