(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-73377dae"],{"1c01":function(e,t,a){"use strict";a.r(t),a("7f7f");var s=a("cebc"),r=(a("386d"),{props:{options:{}},inject:["store"],data:function(){return{pickerOptions0:{disabledDate:function(e){return e.getTime()>Date.now()}},time:"",rules:{mobilephone:{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"},idcards:{pattern:/^[0-9]+$/,message:this.$t("filter.type2"),trigger:"blur,change"}}}},methods:{confirm:function(){var e=this;this.options.search.startTime=this.time?this.time[0]:"",this.options.search.endTime=this.time?this.time[1]:"",this.$refs.searchForm.validate(function(t){t&&(e.$emit("confirm"),e.options.flag=!1)})}},mounted:function(){this.options.search.startTime&&(this.time=[this.options.search.startTime,this.options.search.endTime])},watch:{"options.flag":function(e){e||(this.options.name="")}}}),i=a("2877"),o=Object(i.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vehicleMaster-search"},[a("el-form",{ref:"searchForm",attrs:{"label-position":"top",model:e.options.search,rules:e.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:e.$t("terminal.company")}},[a("cv-dropdown-tree",{attrs:{data:e.store.company_tree,text:e.options.search.enterpriseName,placeholder:""},on:{"update:text":function(t){return e.$set(e.options.search,"enterpriseName",t)}},model:{value:e.options.search.enterpriseId,callback:function(t){e.$set(e.options.search,"enterpriseId",t)},expression:"options.search.enterpriseId"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"注册起始时间:"}},[a("el-date-picker",{staticClass:"picker",staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOptions0,clearable:!0,editable:!1,"value-format":"yyyy-MM-dd HH:mm:ss",type:"datetimerange",placeholder:"选择时间范围",prop:"time"},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"姓名:",prop:"username"}},[a("el-input",{attrs:{maxlength:10},model:{value:e.options.search.username,callback:function(t){e.$set(e.options.search,"username","string"==typeof t?t.trim():t)},expression:"options.search.username"}})],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"身份证号:",prop:"idcards"}},[a("el-input",{attrs:{maxlength:18},model:{value:e.options.search.idcards,callback:function(t){e.$set(e.options.search,"idcards","string"==typeof t?t.trim():t)},expression:"options.search.idcards"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"性别:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{clearable:"",filterable:""},model:{value:e.options.search.sexy,callback:function(t){e.$set(e.options.search,"sexy",t)},expression:"options.search.sexy"}},[a("el-option",{attrs:{label:"男",value:"1"}}),a("el-option",{attrs:{label:"女",value:"0"}})],1)],1)],1),a("el-col",{attrs:{span:12}},[a("el-form-item",{attrs:{label:"手机号",prop:"mobilephone"}},[a("el-input",{attrs:{maxlength:11},model:{value:e.options.search.mobilephone,callback:function(t){e.$set(e.options.search,"mobilephone","string"==typeof t?t.trim():t)},expression:"options.search.mobilephone"}})],1)],1)],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.confirm}},[e._v(e._s(e.$t("action.confirm")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,n={mixins:[],props:{options:{}},inject:["store"],data:function(){return{pickerOptions0:{disabledDate:function(e){return e.getTime()>Date.now()}},loading:!1,btnLoading:!1,account:"",add:{account:"",username:"",idcards:"",enterpriseName:"",enterpriseId:"",remark:"",mobilephone:"",phone:"",birthday:"",address:"",shortname:"",sexy:"",email:"",fox:""},rules:{enterpriseId:{required:!0,message:this.$t("filter.notEmpty")},account:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{validator:this.verificationAccount,trigger:"blur"},{pattern:/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:this.$t("filter.type4")}],username:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:this.$t("filter.type4")}],idcards:[{required:!0,message:this.$t("filter.notEmpty"),trigger:"blur,change"},{pattern:/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/,message:this.$t("filter.type11")}],mobilephone:{pattern:/^1[34578]\d{9}$/,message:this.$t("filter.type6"),trigger:"blur,change"},email:{type:"email",message:"请输入正确的邮箱地址",trigger:"blur,change"},fox:{pattern:/^[0-9]/,message:"请输入正确的传真",trigger:"blur,change"},phone:{pattern:/^[0-9]/,message:"请输入正确的电话",trigger:"blur,change"}}}},methods:{verificationAccount:function(e,t,a){var s=this;this.$service.isContext(t)||(t!=this.account?this.$store.dispatch("checkEntUserIsAt",{account:t}).then(function(e){e.flag?a():a(new Error(s.$t("error.4000")))}):a())},confirm:function(){var e=this,t=this;t.$refs.addForm.validate(function(a){a&&(t.btnLoading=!0,e.options.id&&(e.add.id=e.options.id),t.$store.dispatch("addVehicleMaster",e.add).then(function(e){e.flag?(t.options.id?t.$message.success(t.$t("action.modifySuccess")):t.$message.success(t.$t("action.addSuccess")),t.options.flag=!1,t.$emit("confirm")):t.$message.error(t.$t("error."+e.errorCode)),t.btnLoading=!1}).catch(function(e){t.btnLoading=!1}))})}},watch:{"options.flag":function(e){e||(this.options.name="")}},mounted:function(){var e=this;this.options.id&&(this.loading=!0,this.$store.dispatch("updataInit",{id:this.options.id}).then(function(t){t.flag?(e.$service.mapParams(e.add,t.data),e.account=t.data.account):e.$message.error(e.$t("error."+t.errorCode)),e.loading=!1}).catch(function(t){e.loading=!1}))}},l=Object(i.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"vehicleMaster-add"},[a("el-form",{ref:"addForm",attrs:{"label-position":"top",model:e.add,"label-width":"100px",rules:e.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:e.$t("terminal.company"),prop:"enterpriseId"}},[a("cv-dropdown-tree",{attrs:{data:e.store.company_tree},model:{value:e.add.enterpriseId,callback:function(t){e.$set(e.add,"enterpriseId",t)},expression:"add.enterpriseId"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"账号:",prop:"account"}},[a("el-input",{attrs:{maxlength:15},model:{value:e.add.account,callback:function(t){e.$set(e.add,"account","string"==typeof t?t.trim():t)},expression:"add.account"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名:",prop:"username"}},[a("el-input",{attrs:{maxlength:10},model:{value:e.add.username,callback:function(t){e.$set(e.add,"username","string"==typeof t?t.trim():t)},expression:"add.username"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"身份证号:",prop:"idcards"}},[a("el-input",{attrs:{maxlength:18},model:{value:e.add.idcards,callback:function(t){e.$set(e.add,"idcards","string"==typeof t?t.trim():t)},expression:"add.idcards"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"生日:",prop:"birthday"}},[a("el-date-picker",{staticStyle:{width:"100%"},attrs:{"picker-options":e.pickerOptions0,clearable:!0,editable:!1,type:"date","value-format":"yyyy-MM-dd"},model:{value:e.add.birthday,callback:function(t){e.$set(e.add,"birthday",t)},expression:"add.birthday"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"住址:",prop:"address"}},[a("el-input",{attrs:{maxlength:30},model:{value:e.add.address,callback:function(t){e.$set(e.add,"address","string"==typeof t?t.trim():t)},expression:"add.address"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"性别:"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择",clearable:"",filterable:""},model:{value:e.add.sexy,callback:function(t){e.$set(e.add,"sexy",t)},expression:"add.sexy"}},[a("el-option",{attrs:{label:"男",value:"1"}}),a("el-option",{attrs:{label:"女",value:"0"}})],1)],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"昵称:"}},[a("el-input",{attrs:{maxlength:10},model:{value:e.add.shortname,callback:function(t){e.$set(e.add,"shortname","string"==typeof t?t.trim():t)},expression:"add.shortname"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"手机号:",prop:"mobilephone"}},[a("el-input",{attrs:{maxlength:11},model:{value:e.add.mobilephone,callback:function(t){e.$set(e.add,"mobilephone","string"==typeof t?t.trim():t)},expression:"add.mobilephone"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"电话:",prop:"phone"}},[a("el-input",{attrs:{maxlength:11},model:{value:e.add.phone,callback:function(t){e.$set(e.add,"phone","string"==typeof t?t.trim():t)},expression:"add.phone"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"邮箱:",prop:"email"}},[a("el-input",{attrs:{maxlength:18},model:{value:e.add.email,callback:function(t){e.$set(e.add,"email","string"==typeof t?t.trim():t)},expression:"add.email"}})],1)],1),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"传真:",prop:"fox"}},[a("el-input",{model:{value:e.add.fox,callback:function(t){e.$set(e.add,"fox","string"==typeof t?t.trim():t)},expression:"add.fox"}})],1)],1)],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"用户描述:"}},[a("el-input",{attrs:{maxlength:30,type:"textarea"},model:{value:e.add.remark,callback:function(t){e.$set(e.add,"remark","string"==typeof t?t.trim():t)},expression:"add.remark"}})],1)],1),a("el-col",{attrs:{span:8}}),a("el-col",{attrs:{span:8}})],1)],1),a("div",{staticClass:"dialog-footer"},[a("el-button",{attrs:{type:"primary",loading:e.btnLoading},on:{click:e.confirm}},[e._v(e._s(e.$t("action.confirm")))]),a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,c={mixins:[],props:{options:{}},methods:{load:function(){this.$refs.vehicleTable.tableInitial()},plateCodeAndColor:function(e){return this.$filter.plateCodeColor(e.plateColor)}},watch:{"options.flag":function(e){e||(this.options.name="")}}},d=Object(i.a)(c,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vehicleList"},[a("cv-grid",{ref:"vehicleTable",attrs:{params:{id:e.options.id},url:"/vehicleMaster/getOwnerVehiclePage"}},[a("el-table-column",{attrs:{label:"车牌号",prop:"plateCode",width:"150"}}),a("el-table-column",{attrs:{label:"车辆颜色",prop:"plateColor",formatter:e.plateCodeAndColor}}),a("el-table-column",{attrs:{label:"联系人电话",prop:"contactTel"}})],1),a("div",{staticClass:"dialog-footer",staticStyle:{"margin-top":"20px"}},[a("el-button",{on:{click:function(t){e.options.flag=!1}}},[e._v(e._s(e.$t("action.cancel")))])],1)],1)},[],!1,null,null,null).exports,m=a("b0ad"),p=a("69f9"),u=a("2f62"),f={components:{search:o,add:l,list:d,resertPassword:p.a},mixins:[m.a],data:function(){return{dialog:{title:"--",flag:!1,name:"add",size:"dialog-full",id:"",search:{username:"",enterpriseName:"",sexy:"",mobilephone:"",idcards:"",startTime:"",endTime:"",enterpriseId:""}},store:{company_tree:[]}}},computed:Object(s.a)({},Object(u.c)(["getVehicleMasterPage"]),{_tableMethods:function(){return this.$refs.table}}),provide:function(){return{store:this.store}},mounted:function(){var e=this;this.queryCompanyInfoList().then(function(t){var a=t.data,s=t.flag;e.store.company_tree=s?a:[]})},methods:Object(s.a)({},Object(u.b)(["queryCompanyInfoList"]),{search:function(e){this.$service.mapParams(this.dialog,{flag:!0,size:"dialog-large",name:e.name,title:e.title})},remove:function(e){var t=this;this.confirmPrompt().then(function(){t.$store.dispatch("deleteVehicleMasterById",{id:e.row.id}).then(function(e){e.flag?(t.$message.success(t.$t("action.removeSuccess")),t._tableMethods.tableInitial(!1)):t.$message.error(t.$t("action. removeFail"))})})},add:function(e){this.$service.mapParams(this.dialog,{id:"",flag:!0,size:"dialog-middle",name:e.name,title:e.title})},modify:function(e){this.$service.mapParams(this.dialog,{id:e.row.id,flag:!0,size:"dialog-middle",name:"add",title:"修改"})},vehicleList:function(e){this.$service.mapParams(this.dialog,{id:e.row.id,flag:!0,size:"dialog-small",name:"list",title:"车辆信息"})},sexyText:function(e){return"1"==e.sexy?"男":"0"==e.sexy?"女":""},resert:function(e){this.dialog.flag=!0,this.dialog.name="resertPassword",this.dialog.size="dialog-small",this.dialog.title="密码重置",this.dialog.account=e.account,this.dialog.UserId=e.id}})},h=Object(i.a)(f,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vehicleMaster"},[a("cv-operation",[a("el-form-item",[a("cv-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus,"is-remove":!1,"is-modify":!1,"is-export":!1},on:{add:e.add,search:e.search}})],1)],1),a("cv-content",[a("cv-grid",{ref:"table",attrs:{params:e.dialog.search,url:e.getVehicleMasterPage}},[a("el-table-column",{attrs:{label:"姓名",prop:"username",width:"130"}}),a("el-table-column",{attrs:{label:"性别",prop:"sexy",formatter:e.sexyText}}),a("el-table-column",{attrs:{label:"生日",prop:"birthday",width:"200"}}),a("el-table-column",{attrs:{label:"身份证",prop:"idcards",width:"150"}}),a("el-table-column",{attrs:{label:"手机号",prop:"mobilephone"}}),a("el-table-column",{attrs:{label:"注册时间",prop:"registerTime",width:"240"}}),a("el-table-column",{attrs:{label:"所属企业",prop:"enterpriseName"}}),a("el-table-column",{attrs:{label:e.$t("action.operation"),width:"280"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-table-tool",{attrs:{name:e.$route.name,data:e.$store.getters.manageMenus},on:{modify:function(a){return e.modify(t)},remove:function(a){return e.remove(t)}}}),a("div",{staticClass:"cv-table-tool"},[a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.vehicleList(t)}}},[e._v("拥有车辆")]),a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.resert(t.row)}}},[e._v("重置密码")])],1)]}}])})],1)],1),a("el-dialog",{attrs:{visible:e.dialog.flag,title:e.dialog.title,"custom-class":e.dialog.size},on:{"update:visible":function(t){return e.$set(e.dialog,"flag",t)}}},[a(e.dialog.name,{tag:"component",attrs:{options:e.dialog},on:{confirm:function(t){return e._tableMethods.tableInitial(!0)}}})],1)],1)},[],!1,null,null,null).exports;t.default=h},"69f9":function(e,t,a){"use strict";var s=a("cebc"),r=a("a057"),i=a.n(r),o=a("2f62"),n={props:{options:{}},data:function(){return{loading:!1,form:{pass:"",checkPass:""},rules:{pass:[{required:!0,message:this.$t("action.passwordEmpty"),trigger:"blur,change"},{validator:this.validatePass},{min:4,max:20,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:4,max:20})}],checkPass:[{required:!0,message:this.$t("action.passwordEmpty"),trigger:"blur,change"},{validator:this.validatePass2},{min:4,max:20,message:this.$filter.lanReplace(this.$t("filter.Length"),{min:4,max:20})}]}}},computed:Object(s.a)({},Object(o.c)(["user"])),methods:{validatePass:function(e,t,a){""===t?a(new Error(this.$t("action.enterPassword"))):(""!==this.form.checkPass&&this.$refs.form.validateField("checkPass"),a())},validatePass2:function(e,t,a){""===t?a(new Error(this.$t("action.setAgain"))):t!==this.form.pass?a(new Error(this.$t("action.setDifferent"))):a()},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return!1;t.$store.dispatch("updateUserPwdT",{userId:t.options.UserId,newPwd:i.a.$SHA512(i.a.$SHA512(t.form.checkPass)+"&"+t.options.account)}).then(function(e){t.loading=!1,e.flag?(t.$message.success({message:t.$t("action.modifySuccess")}),t.options.flag=!1):t.$message.error({message:t.$t("error."+e.errorCode)})}).catch(function(e){t.loading=!1})})},resetForm:function(e){this.$refs[e].resetFields()}},watch:{"options.flag":function(e){this.$refs.form.resetFields()}}},l=a("2877"),c=Object(l.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modifyPass"},[a("el-form",{ref:"form",attrs:{model:e.form,rules:e.rules,"label-width":"200px"}},[a("el-form-item",{attrs:{label:e.$t("UserManage.newPassword"),prop:"pass"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"password","auto-complete":"off",maxlength:20},model:{value:e.form.pass,callback:function(t){e.$set(e.form,"pass","string"==typeof t?t.trim():t)},expression:"form.pass"}}),a("cvPasswordStrength",{attrs:{value:e.form.pass}})],1),a("el-form-item",{attrs:{label:e.$t("UserManage.onceAgain"),prop:"checkPass"}},[a("el-input",{staticStyle:{width:"200px"},attrs:{type:"password","auto-complete":"off",maxlength:20},model:{value:e.form.checkPass,callback:function(t){e.$set(e.form,"checkPass","string"==typeof t?t.trim():t)},expression:"form.checkPass"}})],1),a("el-form-item",{staticClass:"textcenter"},[a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.submitForm("form")}}},[e._v(e._s(e.$t("action.save")))]),a("el-button",{on:{click:function(t){return e.resetForm("form")}}},[e._v(e._s(e.$t("action.reset")))])],1)],1)],1)},[],!1,null,null,null);t.a=c.exports},b0ad:function(e,t,a){"use strict";(function(e){a("7f7f"),t.a={methods:{confirmPrompt:function(e,t){var a=this,s=e||this.$t("action.confirmIsRemove");return new Promise(function(e,r){a.$confirm(s,a.$t("action.tip"),{confirmButtonText:a.$t("action.confirm"),cancelButtonText:a.$t("action.cancel"),type:"warning"}).then(function(){e()}).catch(function(){"function"==typeof t&&t()})})},timeLimitFunc:function(e,t,a){if(e&&t)return((new Date(t)-new Date(e))/864e5).toFixed(1)<=a||this.$message.error({message:this.$t("请选择时间范围在"+a+"天内")});this.$message.error({message:this.$t("请选择时间范围")})},addRemoveUnique:function(e,t,a){var s=e.length,r=t.length;return r<s?{name:"add",data:this.$service.isUnique(e,t,a)}:s<r?{name:"remove",data:this.$service.isUnique(t,e,a)}:s==r?{name:"equal",data:this.$service.isUnique(e,t,a)}:void 0},showTooltip:function(e,t){var a=e.target,s=this.$refs[t];s.referenceElm=a,s.$refs.popper.style.display="none",s.doDestroy(),s.setExpectedState(!0),s.handleShowPopper()},mouseenterShowTip:function(e,t,a){var s=e.target;if(s.scrollWidth>s.offsetWidth||a)return this.showTooltip(e,t),a?a.startTime+"~"+a.endTime:s.innerText},mouseenterShowToolTip:function(e,t,a){var s=e.target;return this.showTooltip(e,t),!a&&s.innerText},mouseoverHideTip:function(e){var t=this.$refs[e];t&&(t.setExpectedState(!1),t.handleClosePopper())},asyncDownloadScript:function(t,a){var s=this,r=0<arguments.length&&void 0!==t?t:"Baidu",i=1<arguments.length?a:void 0;return e[r]?e[r]._preloader?e[r]._preloader:Promise.resolve(e[r]):(e[r]={},e[r]._preloader=new Promise(function(t,a){var o=document.createElement("script");o.src=i,e.document.body.appendChild(o),s.$service.isIe()&&s.$service.IE_VERSION<11?o.onreadystatechange=function(){"loaded"!=o.readyState&&"complete"!=o.readyState||(t(e[r]),e[r]._preloader=null)}:o.onload=function(){t(e[r]),e[r]._preloader=null}}),e[r]._preloader)}}}}).call(this,a("c8ba"))}}]);