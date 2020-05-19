(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6922cd5c"],{30153:function(e,t,a){"use strict";var r=a("7837");a.n(r).a},3483:function(e,t,a){"use strict";a.r(t),a("386d"),a("ac6a"),a("96cf");var r=a("3b8d"),o=(a("7f7f"),a("cebc")),i={mixins:[],props:{options:{}},data:function(){return{label:"",rules:{terminalTel:[{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}],plateCode:[{pattern:/^[\u4e00-\u9fa5|WJ]|[A-Z0-9]+$/,message:this.$t("filter.type6"),trigger:"blur,change"}]}}},methods:{confirm:function(){this.$emit("update:search",!0),this.options.flag=!1}},watch:{"options.flag":function(e){e||(this.options.name="")}}},n=(a("30153"),a("2877")),l=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-form",{ref:"searchForm",attrs:{inline:!0,"label-position":"right",model:e.options.search,"label-width":"100px",rules:e.rules}},[a("el-form-item",{attrs:{label:e.$t("terminal.company")}},[a("cv-dropdown-tree",{staticStyle:{width:"240px"},attrs:{placeholder:"",url:"/enterprise/getEnterpriseTreeList"},model:{value:e.options.search.enterpriseId,callback:function(t){e.$set(e.options.search,"enterpriseId",t)},expression:"options.search.enterpriseId"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.terminalTel"),prop:"terminalTel"}},[a("el-input",{attrs:{size:"small",maxlength:12},model:{value:e.options.search.mobileCode,callback:function(t){e.$set(e.options.search,"mobileCode","string"==typeof t?t.trim():t)},expression:"options.search.mobileCode"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.plateCode"),prop:"plateCode"}},[a("el-input",{attrs:{size:"small",maxlength:10},model:{value:e.options.search.plateCode,callback:function(t){e.$set(e.options.search,"plateCode","string"==typeof t?t.trim():t)},expression:"options.search.plateCode"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.code")}},[a("el-input",{attrs:{size:"small",maxlength:10},model:{value:e.options.search.code,callback:function(t){e.$set(e.options.search,"code","string"==typeof t?t.trim():t)},expression:"options.search.code"}})],1)],1),a("div",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"}},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.$t("action.confirm")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,"ce5e355a",null).exports,s=a("3f66"),c=a("b0ad"),m=a("6b98"),d=a("2f62"),u={components:{search:l,add:s.a,addModeTerminal:m.a},mixins:[c.a],data:function(){return{classIcon:"jia",flag:!1,searchFlag:!1,treeFlag:!1,protocolVersionList:[],dialog:{title:"--",flag:!1,name:"search",size:"dialog-small",id:"",carid:"",search:{enterpriseId:"",mobileCode:"",plateCode:"",code:""},dialog1:{flag:!1,insterMode:!1,name:"addModeTerminal",size:"dialog-small",title:this.$t("terminal.newModel")}},infor:{flag:!1,deviceInfoData:[]},filterText:"",companyTree:[]}},computed:{_table:function(){return this.$refs.terminalMTable}},methods:Object(o.a)({},Object(d.b)(["queryCompanyInfoList","logoutTerminal","getProtocolVersionList"]),{addEvent:function(e){this.dialog.id="",this.dialog.carid="",this.dialogOpen("dialog-middle",e.name,e.title)},searchEvent:function(e){this.dialogOpen("dialog-tiny",e.name,e.title)},modify:function(e){this.dialogOpen("dialog-middle","add",this.$t("power.modify")),this.dialog.id=e.row.id,this.dialog.carid=e.row.vehicleId},dialogOpen:function(e,t,a){this.dialog.size=e,this.dialog.flag=!0,this.dialog.name=t,this.dialog.title=a},isLogout:function(e){return this.$filter.isRegisterFilter(e.isLogout)},removes:function(e){var t=this;this.confirmPrompt(this.$t("action.DeletingequipmentMess")).then(function(){Object(r.a)(regeneratorRuntime.mark(function a(){var r,o,i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$store.dispatch("deleteTerminalById",{id:e.row.id});case 2:r=a.sent,r.data,o=r.flag,i=r.errorCode,o?(t.searchFlag=!0,t.$message.success(t.$t("action.removeSuccess"))):t.$message.error(t.$t("error."+i));case 7:case"end":return a.stop()}},a)}))()})},updataTerminal:function(e){var t=this;this.confirmPrompt(this.$t("action.DeregistrationquipmentMess")).then(function(){Object(r.a)(regeneratorRuntime.mark(function a(){var r,o,i;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.logoutTerminal(e.row.vehicleId);case 2:r=a.sent,r.data,o=r.flag,i=r.errorCode,o?(t.searchFlag=!0,t.$message.success(t.$t("terminal.cancelSuccess"))):t.$message.error(t.$t("error."+i));case 7:case"end":return a.stop()}},a)}))()})},inforList:function(e){var t=this;this.$store.dispatch("informationG",{terminalId:e}).then(function(e){e.flag?(t.infor.flag=!0,t.infor.deviceInfoData=e.data):(t.infor.flag=!1,t.$message.error({message:t.$t("error."+e.errorCode)}))})},information:function(e){this.inforList(e.row.id)},protocolVersionMatch:function(e){var t="";return this.protocolVersionList.forEach(function(a){e==a.protocolVersion&&(t=a.name)}),t},loadTree:function(){var e=this;this.treeFlag=!0,this.$http({url:"/enterprise/getEnterpriseTreeList"}).then(function(t){!t.flag&&t.errorCode?e.$message.error({message:e.$t("error."+t.errorCode)}):(e.companyTree=t.data,e.dialog.childTreeData=t.data,e.treeFlag=!1)})},treeLoaded:function(){document.getElementById("scrollW1").style.height="450px",this.treeLoadFlag=!1},handleCheckChange:function(e){this.dialog.search.enterpriseId=e.id,this.searchFlag=!0},showIcon:function(e){if(null==e.row.deviceTypeCode)return"jia";switch(e.row.deviceTypeCode){case"1":return"jiankong";case"2":return"bofang";case"3":return"cheliang"}}}),mounted:function(){var e=this;this.getProtocolVersionList().then(function(t){t.flag&&(e.protocolVersionList=t.data)}),this.loadTree()},watch:{searchFlag:function(e){e&&(this._table.tableInitial(),this.searchFlag=!1)},filterText:function(e){this.$refs.companyTree.filterNodes(e)}}},f=(a("5fbf"),Object(n.a)(u,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"terminal"},[a("cv-operation",[a("el-form-item",[a("cv-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-remove":!1,"is-modify":!1,"is-export":!1},on:{add:e.addEvent,search:e.searchEvent}})],1)],1),a("cv-content",[a("div",{attrs:{slot:"aside"},slot:"aside"},[a("el-input",{attrs:{placeholder:e.$t("companyManage.ph")},model:{value:e.filterText,callback:function(t){e.filterText=t},expression:"filterText"}}),a("cv-scrollbar",{directives:[{name:"loading",rawName:"v-loading",value:e.treeFlag,expression:"treeFlag"}],attrs:{id:"scrollW1"}},[a("cv-tree",{ref:"companyTree",staticStyle:{height:"100%"},attrs:{data:e.companyTree,"tree-loaded":e.treeLoaded},on:{"node-click":e.handleCheckChange}})],1)],1),a("cv-grid",{ref:"terminalMTable",attrs:{params:e.dialog.search,url:"/terminal/findTerminalPage"}},[a("el-table-column",{attrs:{label:e.$t("terminal.systemType"),prop:"code"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-icon",{attrs:{name:e.showIcon(t)}})]}}])}),a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:e.$t("terminal.channelsNumber")}},[a("span",[e._v(e._s(t.row.channelCount||"--"))])]),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:e.$t("terminal.ip")}},[a("span",[e._v(e._s(t.row.ipAddress||"--"))])]),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:e.$t("terminal.portO")}},[a("span",[e._v(e._s(t.row.port||"--"))])]),a("el-form-item",{staticStyle:{"margin-right":"20px"},attrs:{label:e.$t("companyManage.agreement")}},[a("span",[e._v(e._s(e.protocolVersionMatch(t.row.protocolVersion)||"--"))])])],1)]}}])}),a("el-table-column",{attrs:{label:e.$t("terminal.code"),prop:"code",width:"120"}}),a("el-table-column",{attrs:{label:e.$t("terminal.terminalType"),prop:"manufacturerModel"}}),a("el-table-column",{attrs:{label:e.$t("terminal.terminalTel"),prop:"mobileCode",width:"150"}}),a("el-table-column",{attrs:{label:e.$t("terminal.company"),prop:"enterpriseName"}}),a("el-table-column",{attrs:{label:e.$t("terminal.bindingCar"),prop:"plateCode",width:"130"}}),a("el-table-column",{attrs:{label:e.$t("terminal.isLogOut"),prop:"isLogout",width:"110",formatter:e.isLogout}}),a("el-table-column",{attrs:{label:e.$t("action.operation"),width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-table-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-remove":"0"!=t.row.isLogout},on:{modify:function(a){return e.modify(t)},remove:function(a){return e.removes(t)}}}),a("div",{staticClass:"cv-table-tool"},[a("cv-span",{directives:[{name:"show",rawName:"v-show",value:null!=t.row.isLogout&&"0"==t.row.isLogout,expression:'(scope.row.isLogout !=null && scope.row.isLogout=="0") ? true : false'}],attrs:{type:"success"},nativeOn:{click:function(a){return e.updataTerminal(t)}}},[e._v(e._s(e.$t("terminal.cancellation")))]),a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.information(t)}}},[e._v(e._s(e.$t("terminal.terminalMessage")))])],1)]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[a(e.dialog.name,{tag:"component",attrs:{options:e.dialog,search:e.searchFlag},on:{"update:search":function(t){e.searchFlag=t}}})],1),a("el-dialog",{attrs:{visible:e.dialog.dialog1.flag,title:e.dialog.dialog1.title,"custom-class":e.dialog.dialog1.size},on:{"update:visible":function(t){return e.$set(e.dialog.dialog1,"flag",t)}}},[a(e.dialog.dialog1.name,{tag:"component",attrs:{options:e.dialog.dialog1}})],1),a("el-dialog",{attrs:{visible:e.infor.flag,title:e.$t("terminal.terminalMessage"),"custom-class":e.dialog.dialog1.size},on:{"update:visible":function(t){return e.$set(e.infor,"flag",t)}}},[a("cv-grid",{staticClass:"infor",attrs:{data:e.infor.deviceInfoData}},[a("el-table-column",{attrs:{label:e.$t("terminal.configuration"),prop:"key"}}),a("el-table-column",{attrs:{label:e.$t("terminal.codeType"),prop:"value"}})],1)],1)],1)},[],!1,null,null,null).exports);t.default=f},"4a50":function(e,t,a){},"5fbf":function(e,t,a){"use strict";var r=a("4a50");a.n(r).a},"6b98":function(e,t,a){"use strict";var r={props:{options:{}},data:function(){return{loadFlag:!1,manufacturerList:[],formData:{id:"",manufacturerId:"",model:"",manufacturerNumber:"",remark:""},rules:{manufacturerId:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"}],model:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{min:0,max:15,message:this.$t("deviceManage.rule2")}]}}},mixins:[],methods:{resetForm:function(){this.$refs.formItem.resetFields()},changeNum:function(e){this.formData.manufacturerNumber=e.manufacturerNumber},save:function(){var e=this;this.$refs.formItem.validate(function(t){if(!t)return!1;var a={manufacturerId:e.formData.manufacturerId,model:e.formData.model,remark:e.formData.remark};e.options.isModify?(a.id=e.options.rowInfo.id,e.loadFlag=!0,e.$store.dispatch("updateTerminalModel",a).then(function(t){t.flag?(e.$message.success(e.$t("action.updateSuccess")),e.loadFlag=!1,e.options.flag=!1,e.$emit("update:search",!0)):(e.$message.error(e.$t("error."+t.errorCode)),e.loadFlag=!1)}).catch(function(t){e.loadFlag=!1})):(e.loadFlag=!0,e.$store.dispatch("insertTerminalModel",a).then(function(t){t.flag?(e.$message.success(e.$t("action.addSuccess")),e.loadFlag=!1,e.options.flag=!1,e.options.insterMode=!0,e.$emit("update:search",!0)):(e.$message.error(e.$t("error."+t.errorCode)),e.loadFlag=!1,e.options.insterMode=!1)}).catch(function(t){e.loadFlag=!1}))})},getList:function(){var e=this;this.$store.dispatch("findTerminalManufacturerList").then(function(t){t.flag&&(e.manufacturerList=t.data)})}},watch:{"options.flag":function(e){e||(this.options.name="")}},mounted:function(){this.getList(),this.options.isModify&&(this.options.rowInfo.id,this.formData.manufacturerId=this.options.rowInfo.manufacturerId+"",this.formData.model=this.options.rowInfo.model+"",this.formData.manufacturerNumber=this.options.rowInfo.manufacturerNumber+"",this.formData.remark=this.options.rowInfo.remark)}},o=(a("7bca"),a("2877")),i=Object(o.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deviceType"},[a("el-row",{},[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"formItem",attrs:{model:e.formData,"label-position":"right","label-width":"200px",inline:!0,rules:e.rules}},[a("el-form-item",{attrs:{label:e.$t("action.terminalCode"),prop:"manufacturerId"}},[a("el-select",{attrs:{clearable:"",filterable:"",placeholder:e.$t("terminal.placeholder")},model:{value:e.formData.manufacturerId,callback:function(t){e.$set(e.formData,"manufacturerId",t)},expression:"formData.manufacturerId"}},e._l(e.manufacturerList,function(e){return a("el-option",{key:e.id+"",attrs:{label:e.manufacturerNumber?e.name+"/"+e.manufacturerNumber:e.name,value:e.id+""}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("action.deviceType"),prop:"model"}},[a("el-input",{attrs:{maxlength:15,placeholder:e.$t("companyManage.ph1")},model:{value:e.formData.model,callback:function(t){e.$set(e.formData,"model","string"==typeof t?t.trim():t)},expression:"formData.model"}})],1),a("el-form-item",{attrs:{label:e.$t("terminalProM.remark"),prop:"remark"}},[a("el-input",{attrs:{maxlength:50,placeholder:e.$t("companyManage.ph1")},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark","string"==typeof t?t.trim():t)},expression:"formData.remark"}})],1)],1)],1),a("el-col",{staticClass:"dialog-footer",staticStyle:{"text-align":"center"},attrs:{span:24}},[a("el-button",{attrs:{loading:e.loadFlag,type:"primary"},on:{click:e.save}},[e._v(e._s(e.$t("action.save")))]),a("el-button",{on:{click:e.resetForm}},[e._v(e._s(e.$t("action.reset")))])],1)],1)],1)},[],!1,null,null,null);t.a=i.exports},7837:function(e,t,a){},"7bca":function(e,t,a){"use strict";var r=a("eaa1");a.n(r).a},eaa1:function(e,t,a){}}]);