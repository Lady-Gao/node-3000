(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2348ae69"],{"80a5":function(e,t,a){"use strict";var r=a("c3ed");a.n(r).a},b0ad:function(e,t,a){"use strict";(function(e){a("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var a=this,r=e||this.$t("action.confirmIsRemove");return new Promise(function(e,n){a.$confirm(r,a.$t("action.tip"),{confirmButtonText:a.$t("action.confirm"),cancelButtonText:a.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,a){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=a||this.$message.error({message:this.$t("请选择时间范围在"+a+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,a){var r=e.length,n=t.length;return n<r?{name:"add",data:this.$service.isUnique(e,t,a)}:r<n?{name:"remove",data:this.$service.isUnique(t,e,a)}:r==n?{name:"equal",data:this.$service.isUnique(e,t,a)}:void 0},showTooltip:function(e,t){var a=e.target,r=this.$refs[t];r.referenceElm=a,r.$refs.popper.style.display="none",r.doDestroy(),r.setExpectedState(!0),r.handleShowPopper()},mouseenterShowTip:function(e,t,a){var r=e.target;if(r.scrollWidth>r.offsetWidth||a)return this.showTooltip(e,t),a?a.startTime+"~"+a.endTime:r.innerText},mouseenterShowToolTip:function(e,t,a){var r=e.target;return this.showTooltip(e,t),!a&&r.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,a){var r=this,n=0<arguments.length&&void 0!==t?t:"Baidu",i=1<arguments.length?a:void 0;return e[n]?e[n]._preloader?e[n]._preloader:Promise.resolve(e[n]):(e[n]={},e[n]._preloader=new Promise(function(t,a){var o=document.createElement("script");o.src=i,e.document.body.appendChild(o),r.$service.isIe()&&r.$service.IE_VERSION<11?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(t(e[n]),e[n]._preloader=null)}:o.onload=function(){t(e[n]),e[n]._preloader=null}}),e[n]._preloader)}}}}).call(this,a("c8ba"))},c3ed:function(e,t,a){},e4d3:function(e,t,a){"use strict";t.a={data:function(){return{store:{company_tree:[]}}},provide:function(){return{store:this.store}},methods:{staticTree:function(){var e=this;this.$http({url:"/enterprise/findEnterpriseOrganizationTreeList"}).then(function(t){var a=t.data,r=t.flag;e.store.company_tree=r?a:[]})},staticTreeOld:function(){var e=this;this.$http({url:"/enterprise/getEnterpriseTreeList"}).then(function(t){var a=t.data,r=t.flag;e.store.company_tree=r?a:[]})}}}},e5ee:function(e,t,a){"use strict";a.r(t);var r=a("cebc"),n=a("2f62"),i={props:{options:{}},inject:["store"],created:function(){this.store.modify.id&&this.$service.mapParams(this.formData,this.store.modify)},data:function(){return{enterpriseName:"",label:"",formData:{username:"",mobilephone:"",driverlicenseno:"",sex:"",enterpriseId:""},loading:!1,rules:{username:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{min:0,max:10,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:0,max:10})}],mobilephone:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^1[34578]\d{9}$/,message:this.$t("terminalProM.typeCorrectNum")},{min:11,max:11,message:this.$filter.lanReplace(this.$t("filter.FixedLength"),{len:11})}],driverlicenseno:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^[a-zA-Z\d]+$/,message:this.$t("filter.type9")},{min:18,max:18,message:this.$filter.lanReplace(this.$t("filter.FixedLength"),{len:18})}],enterpriseId:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"}]}}},methods:Object(r.a)({},Object(n.b)(["insertDriver","updateDriverInfo"]),{confirm:function(){var e=this;this.$refs.addForm.validate(function(t){if(!t)return!1;e.loading=!0,e.store.modify.id?e.updateDriverInfo(Object(r.a)({},e.formData,{enterpriseName:e.enterpriseName,id:e.store.modify.id})).then(function(t){e.loading=!1,e.result(t,"modify")}).catch(function(t){e.loading=!1}):e.insertDriver(Object(r.a)({},e.formData,{enterpriseName:e.enterpriseName})).then(function(t){e.loading=!1,e.result(t,"add")}).catch(function(t){e.loading=!1})})},result:function(e,t){!e.flag&&e.errorCode?this.$message.error({message:this.$t("error."+e.errorCode)}):(this.$emit("update:search",!0),this.$message.success(this.$t("action."+t+"Success")),this.options.flag=!1)}}),watch:{"options.flag":function(e){e||this.$refs.addForm.resetFields()}}},o=a("2877"),s=Object(o.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"container",attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("el-form",{ref:"addForm",attrs:{model:e.formData,"label-position":"top",inline:!1,rules:e.rules}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dM.driveName"),prop:"username"}},[a("el-input",{attrs:{size:"small",maxlength:10,placeholder:e.$t("companyManage.ph1")},model:{value:e.formData.username,callback:function(t){e.$set(e.formData,"username","string"==typeof t?t.trim():t)},expression:"formData.username"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dM.telPhone"),prop:"mobilephone"}},[a("el-input",{attrs:{size:"small",maxlength:11,placeholder:e.$t("companyManage.ph1")},model:{value:e.formData.mobilephone,callback:function(t){e.$set(e.formData,"mobilephone","string"==typeof t?t.trim():t)},expression:"formData.mobilephone"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dM.driveCode"),prop:"driverlicenseno"}},[a("el-input",{attrs:{size:"small",maxlength:18,placeholder:e.$t("companyManage.ph1")},model:{value:e.formData.driverlicenseno,callback:function(t){e.$set(e.formData,"driverlicenseno","string"==typeof t?t.trim():t)},expression:"formData.driverlicenseno"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dm.company"),prop:"enterpriseId"}},[a("cv-dropdown-tree",{staticStyle:{width:"100%"},attrs:{data:e.store.company_tree,"is-default":!0,label:e.label,text:e.enterpriseName,placeholder:e.$t("terminal.placeholder")},on:{"update:label":function(t){e.label=t},"update:text":function(t){e.enterpriseName=t}},model:{value:e.formData.enterpriseId,callback:function(t){e.$set(e.formData,"enterpriseId",t)},expression:"formData.enterpriseId"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("dM.sex"),prop:"sex"}},[a("el-select",{staticStyle:{width:"260px"},attrs:{size:"small",clearable:"",placeholder:e.$t("terminal.placeholder")},model:{value:e.formData.sex,callback:function(t){e.$set(e.formData,"sex",t)},expression:"formData.sex"}},[a("el-option",{attrs:{label:e.$t("dM.man"),value:"1"}}),a("el-option",{attrs:{label:e.$t("dM.woman"),value:"0"}})],1)],1)],1)],1)],1),a("el-col",{staticClass:"dialog-footer",attrs:{span:24}},[a("el-button",{attrs:{loading:e.loading,type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.$t("action.save")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,l={props:{options:{}},inject:["store"],data:function(){return{label:""}},methods:{confirm:function(){this.$emit("update:search",!0),this.options.flag=!1}}},c=Object(o.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"driverManageSearch"},[a("el-form",{ref:"searchForm",attrs:{model:e.store.search,"label-position":"top","label-width":"80px"}},[a("el-form-item",{attrs:{label:e.$t("dm.company"),prop:"enterpriseId"}},[a("cv-dropdown-tree",{staticStyle:{width:"100%"},attrs:{url:"/enterprise/getEnterpriseTreeList",placeholder:e.$t("terminal.placeholder"),"is-default":!0},model:{value:e.store.search.enterpriseId,callback:function(t){e.$set(e.store.search,"enterpriseId",t)},expression:"store.search.enterpriseId"}})],1),a("el-form-item",{attrs:{label:e.$t("dM.name"),prop:"username"}},[a("el-input",{attrs:{clearable:"",maxlength:10,placeholder:e.$t("companyManage.ph1")},model:{value:e.store.search.username,callback:function(t){e.$set(e.store.search,"username",t)},expression:"store.search.username"}})],1),a("el-form-item",{attrs:{label:e.$t("dM.telPhone"),prop:"mobilephone"}},[a("el-input",{attrs:{clearable:"",maxlength:11,placeholder:e.$t("companyManage.ph1")},model:{value:e.store.search.mobilephone,callback:function(t){e.$set(e.store.search,"mobilephone",t)},expression:"store.search.mobilephone"}})],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.$t("action.confirm")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,m=a("b0ad"),d=a("e4d3"),p={components:{addModify:s,search:c},mixins:[m.a,d.a],computed:Object(r.a)({},Object(n.c)(["findDriverPage"]),{_table:function(){return this.$refs.driverTable}}),data:function(){return{searchFlag:!1,dialog:{flag:!1,title:"--",size:"dialog-small",name:"search"},store:{search:{enterpriseId:"",username:"",mobilephone:""},modify:{}}}},methods:Object(r.a)({},Object(n.b)(["deleteDriver"]),{filterSex:function(e){switch(e.sex){case"1":return"男";case"0":return"女"}},filterStuas:function(e){switch(e.accountStatus){case 0:return"启用";case 1:return"未启用"}},add:function(e){this.$service.mapParams(this.dialog,{title:e.title,name:"addModify",size:"dialog-small",flag:!0}),this.store.modify={}},search:function(e){this.$service.mapParams(this.dialog,{title:e.title,name:"search",size:"dialog-tiny",flag:!0})},remove:function(e){var t=this;this.confirmPrompt().then(function(){t.deleteDriver(e).then(function(e){!e.flag&&e.errorCode?t.$message.error({message:t.$t("error."+e.errorCode)}):(t._table.tableInitial(!1),t.$message.success({message:t.$t("action.removeSuccess")}))})})},modify:function(e){this.$service.mapParams(this.dialog,{title:this.$t("power.modify"),name:"addModify",size:"dialog-small",flag:!0}),this.store.modify=e}}),watch:{searchFlag:function(e){e&&(this._table.tableInitial(),this.searchFlag=!1)},"dialog.flag":function(e){e||(this.dialog.name="")}},mounted:function(){this.staticTreeOld()}},u=(a("80a5"),Object(o.a)(p,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"driverManage"},[a("cv-operation",[a("el-form-item",[a("cv-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-modify":!1,"is-remove":!1,"is-export":!1},on:{add:e.add,search:e.search}})],1)],1),a("cv-content",[a("cv-grid",{ref:"driverTable",attrs:{params:e.store.search,url:e.findDriverPage}},[a("el-table-column",{attrs:{label:e.$t("dm.company"),prop:"enterpriseName"}}),a("el-table-column",{attrs:{label:e.$t("dM.driveName"),prop:"username"}}),a("el-table-column",{attrs:{label:e.$t("dM.sex"),prop:"sex",formatter:e.filterSex}}),a("el-table-column",{attrs:{label:e.$t("dM.tel"),prop:"mobilephone"}}),a("el-table-column",{attrs:{label:e.$t("dM.driveCode"),prop:"driverlicenseno"}}),a("el-table-column",{attrs:{label:e.$t("action.operation")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-table-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus},on:{remove:function(a){return e.remove(t.row.id)},modify:function(a){return e.modify(t.row)}}})]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[a(e.dialog.name,{tag:"component",attrs:{options:e.dialog,search:e.searchFlag},on:{"update:search":function(t){e.searchFlag=t}}})],1)],1)},[],!1,null,null,null).exports);t.default=u}}]);