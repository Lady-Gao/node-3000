(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c012ceec"],{"2a52":function(e,t,a){},"3f66":function(e,t,a){"use strict";a("28a5");var r,i,o,n,s,d=a("cebc"),l=(a("96cf"),a("3b8d")),c=(a("3b2b"),a("ac6a"),{inject:["store"],props:{options:{}},data:function(){return{suggestIp:[],channel:!1,submitFalg:!1,dialogFlag:!1,canCfgVersion:[],videoList:[],protocolVersions:[],manufacturerName:[],modelType:[],flag:!1,flagCom:!1,modeAddFlag:!0,add:{id:"",videoType:"1",enterpriseId:"",mobileCode:"",manufacturerId:"",code:"",enterpriseName:"",canCfgVersion:"",protocolVersion:"1073741828",modelId:"",channelCountStr:"",manufacturerNumber:"",ipPort:"",imeiId:""},rules:{enterpriseId:{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},terminalM:{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},protocolVersion:{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},mobileCode:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^[0-9]+$/,message:this.$t("filter.type2")},{validator:this.isTel,trigger:"blur"}],manufacturerId:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"}],code:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^[A-Z|0-9]+$/,message:this.$t("filter.type7")},{min:7,max:7,message:this.$filter.lanReplace(this.$t("filter.FixedLength"),{len:7})}],channelCountStr:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^([1-2][1-9]|3[1-2]|[1-9])$/,message:this.$t("filter.type16")}],modelId:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{validator:this.isCode,trigger:"blur"}],imeiId:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^[A-Z|a-z|0-9]+$/,message:this.$t("filter.type9")},{min:12,max:18,message:this.$filter.lanReplace(this.$t("filter.videoType4"),{len:18})}]}}},methods:{querySearch:function(e,t){t(e?this.suggestIp.filter(this.createFilter(e)):this.suggestIp)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getServerIp:function(){var e=this;this.$store.dispatch("findVideoServer",{}).then(function(t){t.flag&&t.data.forEach(function(t){e.suggestIp.push({value:t.ip+":"+t.port})}),t.flag&&(e.add.ipPort=t.data[0].ip+":"+t.data[0].port)})},testIpPort:function(e,t,a){var r="(25[0-5]|2[0-4]\\d|1\\d\\d|\\d\\d|\\d)",i=r+"\\.",o=new RegExp("^"+i+i+i+r+"(:(\\d\\d\\d\\d\\d|\\d\\d\\d\\d|\\d\\d\\d|\\d\\d|\\d))?$");t&&(o.test(t)?a():a(new Error(this.$t("action.ipportMess"))))},videoCode:function(e,t,a){"3"!=this.add.videoType?a():this.$service.isContext(t)||(""!=this.add.mobileCode?t!=this.add.mobileCode.slice(5,12)?a(new Error(this.$t("filter.videoType1"))):a():a(new Error(this.$t("filter.videoType2"))))},isTermianls:function(e,t,a){"3"!=this.add.videoType?a():this.$service.isContext(t)||(""!=this.add.mobileCode?t!=this.add.mobileCode.slice(0,5)?a(new Error(this.$t("filter.videoType3"))):a():a(new Error(this.$t("filter.videoType1"))))},isTel:function(e,t,a){var r=this;if(!this.$service.isContext(t)){var i=t;if(i.length<12)for(var o=i.length;o<12;o++)i="0"+i;(this.add.mobileCode=i)!=this.add.text?this.$store.dispatch("isExistTerminalMobile",{mobileCode:i}).then(function(e){e.flag?a():a(new Error(r.$t("terminal.phone")))}):a()}},isCode:(s=Object(l.a)(regeneratorRuntime.mark(function e(t,a,r){var i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(this.$service.isContext(a)){e.next=15;break}if(""!=this.add.modelId){e.next=5;break}r(new Error(this.$t("terminal.teminTypes"))),e.next=15;break;case 5:if(a!=this.add.code2)return e.next=8,this.$store.dispatch("isExistTerminalCode",{code:a,modelId:this.add.modelId});e.next=14;break;case 8:i=e.sent,i.data,i.flag?r():r(new Error(this.$t("terminal.codeNum"))),e.next=15;break;case 14:r();case 15:case"end":return e.stop()}},e,this)})),function(e,t,a){return s.apply(this,arguments)}),saveT:function(){var e=this;this.$refs.formItem.validate(function(t){if(!t)return!1;3!=e.add.videoType&&4!=e.add.videoType&&(e.add.imeiId="");var a=Object(d.a)({},e.add,{deviceTypeCode:e.add.videoType,channelCountStr:e.add.channelCountStr?e.add.channelCountStr:"",ipAddress:e.add.ipPort?e.add.ipPort.split(":")[0]:"",port:e.add.ipPort?e.add.ipPort.split(":")[1]:""});e.submitFalg=!0,e.$store.dispatch("setUpTerminal",a).then(function(t){t.flag?(""==e.options.id||null==e.options.dialog1?e.$message.success(e.$t("action.addSuccess")):e.$message.success(e.$t("action.modifySuccess")),e.$emit("update:search",!0),e.options.flag=!1,e.options.insterTerminal=!0):(e.options.id,e.$message.error(e.$t("error."+t.errorCode)),e.options.insterTerminal=!1),e.submitFalg=!1}).catch(function(t){e.submitFalg=!1})})},addModeMas:function(){this.options.dialog1.flag=!0,this.options.dialog1.insterMode=!1,this.options.dialog1.name="addModeTerminal"},showEqType:function(e){var t=this;this.add.modelId="",this.findTerminalModel(e),this.manufacturerName.forEach(function(a){a.id==e&&(t.add.manufacturerNumber=a.manufacturerNumber)})},getCompany:function(e){this.add.enterpriseId=e.id},getCanCfgVersion:(n=Object(l.a)(regeneratorRuntime.mark(function e(){var t,a,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getCanCfgVersionList");case 2:t=e.sent,a=t.data,r=t.flag,i=t.errorCode,this.canCfgVersion=r&&208!=i?a:[];case 7:case"end":return e.stop()}},e,this)})),function(){return n.apply(this,arguments)}),getProtocolVersion:(o=Object(l.a)(regeneratorRuntime.mark(function e(){var t,a,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getProtocolVersionList");case 2:t=e.sent,a=t.data,r=t.flag,i=t.errorCode,this.protocolVersions=r&&208!=i?a:[],this.add.protocolVersion=this.protocolVersions[7]?this.protocolVersions[7].protocolVersion+"":"";case 8:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)}),getTerminalManufacturer:(i=Object(l.a)(regeneratorRuntime.mark(function e(){var t,a,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("getTerminalManufacturerList");case 2:t=e.sent,a=t.data,r=t.flag,i=t.errorCode,this.manufacturerName=r&&208!=i?a:[];case 7:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)}),findTerminalModel:(r=Object(l.a)(regeneratorRuntime.mark(function e(t){var a,r,i,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.$store.dispatch("findTerminalModelList",{manufacturerId:t});case 2:a=e.sent,r=a.data,i=a.flag,o=a.errorCode,this.modelType=i&&208!=o?r:[];case 7:case"end":return e.stop()}},e,this)})),function(e){return r.apply(this,arguments)}),getPower:function(){for(var e=this.$store.getters.manageMenus,t=0;t<e.length;t++)for(var a=0;a<e[t].child.length;a++)e[t].child[a].title==this.$t("action.terminalManagement")&&0<=e[t].child[a].power.indexOf("add")&&(this.modeAddFlag=!1)},companyTreeLoaded:function(){this.add.enterpriseId=this.options.enterpriseId},getSysDic:function(){var e=this;this.$store.dispatch("getTypeG",{type:139}).then(function(t){t.flag&&(e.videoList=t.data)})}},watch:{"options.flag":function(e){e||(this.options.name="",this.options.carid&&(this.flagCom=!0))},"add.protocolVersion":function(e){"1073741831"==e||"1073741832"==e?this.channel=!0:(this.channel=!1,this.add.channelCountStr="")},"options.dialog1.insterMode":function(e){e&&(this.add.manufacturerId&&this.findTerminalModel(this.add.manufacturerId),this.options.dialog1.insterMode=!1)}},mounted:function(){var e=this;this.getSysDic(),this.getServerIp(),this.getPower(),this.getCanCfgVersion(),this.getProtocolVersion(),this.getTerminalManufacturer(),this.add.enterpriseName=this.options.enterpriseName,""!=this.options.id&&(this.dialogFlag=!0,this.$store.dispatch("getTerminalById",{id:this.options.id}).then(function(t){if(t.flag){var a=e.add;for(var r in e.options.carid?e.flagCom=!0:e.flagCom=!1,null!=t.data.isLogout&&"0"==t.data.isLogout?e.flag=!0:e.flag=!1,a)e.add[r]=t.data[r];e.add.videoType=t.data.deviceTypeCode,e.add.code2=t.data.code,e.add.text=t.data.mobileCode,e.add.mobileCode=t.data.mobileCode,e.add.modelId=t.data.modelId,e.add.manufacturerId=t.data.manufacturerId+"",e.add.ipPort=t.data.ipAddress&&t.data.port?t.data.ipAddress+":"+t.data.port:"",e.findTerminalModel(t.data.manufacturerId)}e.dialogFlag=!1}).catch(function(t){e.dialogFlag=!1}))}}),u=(a("f46b"),a("2877")),p=Object(u.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.dialogFlag,expression:"dialogFlag"}],staticClass:"addTpl"},[a("el-form",{ref:"formItem",attrs:{inline:!0,"label-position":"right","label-width":"136px",model:e.add,rules:e.rules}},[a("el-form-item",{attrs:{label:e.$t("terminal.company"),prop:"enterpriseId"}},[a("cv-dropdown-tree",{staticStyle:{width:"190px"},attrs:{url:"/enterprise/getEnterpriseTreeList","is-default":!e.options.id,disabled:this.flagCom,treeLoaded:e.companyTreeLoaded,placeholder:e.$t("terminal.placeholder")},model:{value:e.add.enterpriseId,callback:function(t){e.$set(e.add,"enterpriseId",t)},expression:"add.enterpriseId"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.terminalTel"),prop:"mobileCode"}},[a("el-input",{attrs:{disabled:this.flag,size:"small",maxlength:12,placeholder:e.$t("companyManage.ph1")},model:{value:e.add.mobileCode,callback:function(t){e.$set(e.add,"mobileCode","string"==typeof t?t.trim():t)},expression:"add.mobileCode"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.manufacturer"),prop:"manufacturerId"}},[a("el-select",{attrs:{clearable:"",placeholder:e.$t("terminal.placeholder"),filterable:"",disabled:this.flag,size:"small"},on:{change:e.showEqType},model:{value:e.add.manufacturerId,callback:function(t){e.$set(e.add,"manufacturerId",t)},expression:"add.manufacturerId"}},e._l(e.manufacturerName,function(e){return a("el-option",{key:e.id,ref:"options",refInFor:!0,attrs:{label:e.name,value:e.id+""}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("terminal.equipment")}},[a("el-select",{class:[e.options.dialog1?"wid144":""],attrs:{clearable:"",placeholder:e.$t("terminal.placeholder"),disabled:this.flag,size:"small"},model:{value:e.add.modelId,callback:function(t){e.$set(e.add,"modelId",t)},expression:"add.modelId"}},e._l(e.modelType,function(e){return a("el-option",{key:e.id+"",attrs:{label:e.model,value:e.id+""}})}),1),e.options.dialog1?a("el-button",{attrs:{icon:"el-icon-plus",disabled:e.modeAddFlag},on:{click:e.addModeMas}}):e._e()],1),a("el-form-item",{attrs:{label:e.$t("terminalProM.terminalCode"),prop:"manufacturerNumber"}},[a("el-input",{attrs:{disabled:!0,size:"small",maxlength:12,placeholder:e.$t("companyManage.ph1")},model:{value:e.add.manufacturerNumber,callback:function(t){e.$set(e.add,"manufacturerNumber","string"==typeof t?t.trim():t)},expression:"add.manufacturerNumber"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.code"),prop:"code"}},[a("el-input",{attrs:{disabled:this.flag,size:"small",maxlength:7,placeholder:e.$t("companyManage.ph1")},model:{value:e.add.code,callback:function(t){e.$set(e.add,"code","string"==typeof t?t.trim():t)},expression:"add.code"}})],1),a("el-form-item",{attrs:{label:e.$t("terminal.versionProtocol"),prop:"protocolVersion"}},[a("el-select",{attrs:{clearable:"",placeholder:e.$t("terminal.placeholder"),size:"small"},on:{change:e.change},model:{value:e.add.protocolVersion,callback:function(t){e.$set(e.add,"protocolVersion",t)},expression:"add.protocolVersion"}},e._l(e.protocolVersions,function(e){return a("el-option",{key:e.protocolVersion+"",attrs:{label:e.name,value:e.protocolVersion+""}})}),1)],1),a("el-form-item",{attrs:{label:e.$t("terminal.Can")}},[a("el-select",{attrs:{clearable:"",placeholder:e.$t("terminal.placeholder"),size:"small"},model:{value:e.add.canCfgVersion,callback:function(t){e.$set(e.add,"canCfgVersion",t)},expression:"add.canCfgVersion"}},e._l(e.canCfgVersion,function(e){return a("el-option",{key:e.id,attrs:{label:e.canRemark,value:e.id}})}),1)],1),e.channel?a("el-form-item",{attrs:{label:e.$t("terminal.videoChannels"),prop:"channelCountStr"}},[a("el-input",{attrs:{size:"small",maxlength:7},model:{value:e.add.channelCountStr,callback:function(t){e.$set(e.add,"channelCountStr","string"==typeof t?t.trim():t)},expression:"add.channelCountStr"}})],1):e._e(),e.channel?a("el-form-item",{attrs:{label:e.$t("terminal.ipPort"),prop:"ipPort"}},[a("el-autocomplete",{staticClass:"inline-input",attrs:{"fetch-suggestions":e.querySearch,placeholder:"10.10.10.10:8888"},model:{value:e.add.ipPort,callback:function(t){e.$set(e.add,"ipPort",t)},expression:"add.ipPort"}})],1):e._e(),a("el-form-item",{attrs:{label:e.$t("terminal.systemType")}},[a("el-select",{attrs:{clearable:"",placeholder:e.$t("terminal.placeholder"),size:"small"},model:{value:e.add.videoType,callback:function(t){e.$set(e.add,"videoType",t)},expression:"add.videoType"}},e._l(e.videoList,function(e){return a("el-option",{key:e.code,attrs:{label:e.codeText,value:e.code}})}),1)],1),"3"==e.add.videoType||"4"==e.add.videoType?a("el-form-item",{attrs:{label:"IMEI",prop:"imeiId"}},[a("el-input",{attrs:{maxlength:18},model:{value:e.add.imeiId,callback:function(t){e.$set(e.add,"imeiId",t)},expression:"add.imeiId"}})],1):e._e()],1),a("div",{staticClass:"dialog-footer",staticStyle:{"margin-top":"20px"}},[a("el-button",{attrs:{type:"primary",loading:e.submitFalg},on:{click:e.saveT}},[e._v(e._s(e.$t("action.confirm")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,"21656fa6",null);t.a=p.exports},b0ad:function(e,t,a){"use strict";(function(e){a("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var a=this,r=e||this.$t("action.confirmIsRemove");return new Promise(function(e,i){a.$confirm(r,a.$t("action.tip"),{confirmButtonText:a.$t("action.confirm"),cancelButtonText:a.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,a){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=a||this.$message.error({message:this.$t("请选择时间范围在"+a+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,a){var r=e.length,i=t.length;return i<r?{name:"add",data:this.$service.isUnique(e,t,a)}:r<i?{name:"remove",data:this.$service.isUnique(t,e,a)}:r==i?{name:"equal",data:this.$service.isUnique(e,t,a)}:void 0},showTooltip:function(e,t){var a=e.target,r=this.$refs[t];r.referenceElm=a,r.$refs.popper.style.display="none",r.doDestroy(),r.setExpectedState(!0),r.handleShowPopper()},mouseenterShowTip:function(e,t,a){var r=e.target;if(r.scrollWidth>r.offsetWidth||a)return this.showTooltip(e,t),a?a.startTime+"~"+a.endTime:r.innerText},mouseenterShowToolTip:function(e,t,a){var r=e.target;return this.showTooltip(e,t),!a&&r.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,a){var r=this,i=0<arguments.length&&void 0!==t?t:"Baidu",o=1<arguments.length?a:void 0;return e[i]?e[i]._preloader?e[i]._preloader:Promise.resolve(e[i]):(e[i]={},e[i]._preloader=new Promise(function(t,a){var n=document.createElement("script");n.src=o,e.document.body.appendChild(n),r.$service.isIe()&&r.$service.IE_VERSION<11?n.onreadystatechange=function(){"loaded"!=n.readyState&&"complete"!=n.readyState||(t(e[i]),e[i]._preloader=null)}:n.onload=function(){t(e[i]),e[i]._preloader=null}}),e[i]._preloader)}}}}).call(this,a("c8ba"))},f46b:function(e,t,a){"use strict";var r=a("2a52");a.n(r).a}}]);