(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-64589734"],{"0f15":function(e,t,a){"use strict";var i=a("5f40");a.n(i).a},"172e7":function(e,t,a){"use strict";a.r(t);var i=a("5a94").a,s=(a("0f15"),a("2877")),l=Object(s.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"RMvideo"},[e.$service.isIe()?e._e():a("div",{staticStyle:{height:"200px","line-height":"200px","text-align":"center","font-size":"24px"}},[e._v("\n        该视频播放只支持IE浏览器，请用IE浏览器打开!\n    ")]),e.$service.isIe()?a("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[a("a",{staticStyle:{color:"red"},attrs:{href:"http://lib.cvtsp.com/video/NetVideoOCX.exe"}},[e._v("如果视频窗口显示不正常，请先下载视频控件！")]),e._v("  \n        "),a("a",{staticStyle:{color:"red"},attrs:{href:"http://lib.cvtsp.com/video/NPAPI_NetVideoOCX.exe"}},[e._v("视频控件更新！")])]):e._e(),e.$service.isIe()?a("cv-content",[a("el-tabs",{staticClass:"tabContent",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"实时视频播放",name:"realTimeVideo"}},[a("div",{staticClass:"controlPanel"},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"摄像头"}},[a("el-select",{attrs:{disabled:e.cameraFlag},model:{value:e.CameraSelect,callback:function(t){e.CameraSelect=t},expression:"CameraSelect"}},e._l(e.Camera,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"清晰度"}},[a("el-select",{attrs:{disabled:e.clarityFlag},model:{value:e.claritySelect,callback:function(t){e.claritySelect=t},expression:"claritySelect"}},e._l(e.clarity,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("div",{staticClass:"btnGroupOne"},[a("el-button",{attrs:{type:"primary"},on:{click:e.getPic}},[e._v("抓图")]),a("el-button",{attrs:{type:"primary"},on:{click:e.openSounds}},[e._v(e._s(e.openSound))])],1),a("div",{staticClass:"btnGroupTwo"},[a("el-button",{attrs:{disabled:e.rtvFlag,type:"primary"},on:{click:e.openVideo}},[e._v("打开视频")]),a("el-button",{attrs:{type:"primary"},on:{click:e.stopVideo}},[e._v("关闭视频")])],1)],1),a("div",{staticClass:"videoWindow"},[a("div",{staticClass:"up"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"16px"}},[e._v("窗口1")])]),a("object",{attrs:{id:"object1",classid:"clsid:DB5D6116-F923-4aa0-83D9-D6538F55E174",width:"350",height:"230"}})]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"16px"}},[e._v("窗口2")])]),a("object",{attrs:{id:"object2",classid:"clsid:DB5D6116-F923-4aa0-83D9-D6538F55E174",width:"350",height:"230"}})])],1),a("div",{staticClass:"down"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"16px"}},[e._v("窗口3")])]),a("object",{attrs:{id:"object3",classid:"clsid:DB5D6116-F923-4aa0-83D9-D6538F55E174",width:"350",height:"230"}})]),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"16px"}},[e._v("窗口4")])]),a("object",{attrs:{id:"object4",classid:"clsid:DB5D6116-F923-4aa0-83D9-D6538F55E174",width:"350",height:"230"}})])],1)])]),a("el-tab-pane",{attrs:{label:"视频回放",name:"playBack"}},[a("div",{staticClass:"controlPanel"},[a("el-form",{staticStyle:{"margin-bottom":"0px"},attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"请选择时间"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.listData,callback:function(t){e.listData=t},expression:"listData"}}),a("el-button",{attrs:{loading:e.searchFlag},on:{click:e.searchList}},[e._v("查询")])],1)],1),a("cv-scrollbar",{staticClass:"listContent",staticStyle:{height:"337px","border-top":"1px solid #ccc",padding:"10px 0","text-align":"center"}},[e.firstStep?a("div",{staticStyle:{heigth:"335px","line-height":"335px","font-size":"24px"}},[e._v("请选择日期查询获取回放列表！")]):e._e(),e.secondStep?a("div",{staticStyle:{heigth:"335px","line-height":"335px","font-size":"24px"}},[e._v("查询日期无回放列表！")]):e._e(),e.secondStep1?a("div",{staticStyle:{heigth:"335px","line-height":"335px","font-size":"24px"}},[e._v("请选择查询日期！")]):e._e(),e.thirdStep?a("el-radio-group",{staticStyle:{width:"300px","text-align":"left"},attrs:{disabled:e.radioFlag},on:{change:e.change},model:{value:e.checkedVideo,callback:function(t){e.checkedVideo=t},expression:"checkedVideo"}},e._l(e.rList,function(t){return a("el-radio",{key:t._id,ref:"radioBoxes",refInFor:!0,attrs:{label:t.index,"data-st":t.st,"data-et":t.et}},[e._v(e._s(t.filelasts))])}),1):e._e()],1),a("div",{staticClass:"btnGroupReview"},[a("el-button-group",[a("el-button",{attrs:{disabled:e.playFlag,type:"primary"},on:{click:e.play}},[e._v("回放")]),a("el-button",{attrs:{type:"primary"},on:{click:e.pause}},[e._v(e._s(e.pauseOrNot))]),a("el-button",{attrs:{type:"primary"},on:{click:e.stop}},[e._v("停止")])],1),a("span",[e._v("选择倍速：")]),a("el-select",{staticStyle:{width:"80px","vertical-align":"middle"},on:{change:e.speedChange},model:{value:e.speedS,callback:function(t){e.speedS=t},expression:"speedS"}},e._l(e.speedSelect,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("div",{staticClass:"videoWindow"},[a("div",{staticClass:"one"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",{staticStyle:{"line-height":"14px"}},[e._v("视频回放")])]),a("object",{attrs:{id:"object5",classid:"clsid:DB5D6116-F923-4aa0-83D9-D6538F55E174",width:"686",height:"512"}})])],1)])])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=l.exports},"5a94":function(e,t,a){"use strict";(function(e){a("ac6a"),a("28a5"),a("a481");var i=a("ed08");t.a={components:{},mixins:[""],data:function(){return{progressTime:0,totalTime:0,reTime:0,firstStep:!0,secondStep:!1,secondStep1:!1,thirdStep:!1,timer:null,checkedReview:null,progress:0,radioFlag:!1,searchFlag:!1,cameraFlag:!1,clarityFlag:!1,openSound:"打开声音",soundFlag:1,rtvFlag:!1,timePoint:null,checkedVideo:"",pauseOrNot:"暂停",pauseFlag:1,playFlag:!1,rList:[],listData:new Date,videoData:null,activeName:"realTimeVideo",CameraSelect:"0",claritySelect:"0",Camera:[{value:"0",label:"全部"},{value:"1",label:"摄像头1"},{value:"2",label:"摄像头2"},{value:"3",label:"摄像头3"},{value:"4",label:"摄像头4"}],clarity:[{value:"0",label:"高清"},{value:"1",label:"普清"}],speedSelect:[{label:"×1",value:1},{label:"×2",value:2},{label:"×4",value:4},{label:"×8",value:8},{label:"×16",value:16},{label:"×32",value:32},{label:"×-2",value:-2},{label:"×-4",value:-4},{label:"×-8",value:-8},{label:"×-16",value:-16},{label:"×-32",value:-32}],speedS:1}},methods:{getVideoDom:function(e){return document.getElementById(e)},initVideo:function(e){for(var t=1;t<5;t++)this.getVideoDom("object"+t).SetDeviceInfo(124,e.dvrId,e.dvrId,5556,e.ip,e.port,"","")},openVideo:function(){var e=parseInt(this.claritySelect);if(0==this.CameraSelect)for(var t=1;t<5;t++)this.getVideoDom("object"+t).OpenVideo(t-1,e);else this.getVideoDom("object"+this.CameraSelect).OpenVideo(this.CameraSelect-1,e);this.rtvFlag=!0,this.cameraFlag=!0,this.clarityFlag=!0},stopVideo:function(){for(var e=1;e<5;e++)this.getVideoDom("object"+e).CloseVideo();this.rtvFlag=!1,this.cameraFlag=!1,this.clarityFlag=!1},getPic:function(){if(!this.rtvFlag)return this.$message.error(this.$t("请先开启视频")),!1;var e=this.$filter.format(new Date,"yyyy-MM-dd HH:mm:ss").replace(/-/g,"").replace(/:/g,"").replace(/ /g,"");if(0==this.CameraSelect){for(var t=1;t<5;t++)this.getVideoDom("object"+t).CapturePic("D:\\getpic\\CH"+t+"-"+e+".bmp",0);0==this.getVideoDom("object1").CapturePic("D:\\getpic\\CH1-"+e+".bmp",0)?this.$message.success(this.$t("抓拍图片已保存至D:\\getpic文件夹")):this.$message.error(this.$t("抓图失败"))}else this.getVideoDom("object"+this.CameraSelect).CapturePic("D:\\getpic\\CH"+this.CameraSelect+"-"+e+".bmp",0),0==this.getVideoDom("object"+this.CameraSelect).CapturePic("D:\\getpic\\CH"+this.CameraSelect+"-"+e+".bmp",0)?this.$message.success(this.$t("抓拍图片已保存至D:\\getpic文件夹")):this.$message.error(this.$t("抓图失败"))},openSounds:function(){if(!this.rtvFlag)return this.$message.error(this.$t("请先开启视频")),!1;0==this.CameraSelect?this.$message.error(this.$t("只能开启单个摄像头开启声音")):1==this.soundFlag?0==this.getVideoDom("object"+this.CameraSelect).SetEnableSound(this.soundFlag)&&(this.openSound="关闭声音",this.soundFlag=0):0==this.getVideoDom("object"+this.CameraSelect).SetEnableSound(this.soundFlag)&&(this.openSound="打开声音",this.soundFlag=1)},searchList:function(){var e=this;if(!this.listData)return this.secondStep1=!0,!(this.rList=[]);this.rList=[],this.searchFlag=!0;var t=this.$loading({text:this.$t("role.type1"),target:document.querySelector(".listContent")}),a=[];this.getVideoDom("object5").SetDeviceInfo(124,this.videoData.dvrId,this.videoData.dvrId,5556,this.videoData.ip,this.videoData.port,"","");var s=this.$filter.format(this.listData,"yyyy-MM-dd").split("-"),l=this.getVideoDom("object5").SearchTime(this.videoData.dvrId,s[0],s[1],s[2],0,0,0,0,0,0,0,0);this.getVideoDom("object5").SearchGetFileInfo().split(";").forEach(function(e,t){var i=e.split(","),s={};s.fileName=i[0],s.filelasts=i[3],s.index=t,i[3]&&(s.st=i[3].split("-")[0],s.et=i[3].split("-")[1]),a.push(s)}),this.rList=i.e.unique(a,"st"),this.rList.pop(),0==l?setTimeout(function(){t.close(),e.searchFlag=!1,e.secondStep1=!1,e.firstStep=!1,e.thirdStep=!0},1e3):setTimeout(function(){t.close(),e.searchFlag=!1,e.firstStep=!1,e.secondStep=!0,e.secondStep1=!1},1e3)},change:function(e){var t=this;this.rList.forEach(function(a){a.index==e&&(t.timePoint=t.$filter.format(t.listData,"yyyy-MM-dd").split("-").join("")+a.st.split(":").join(""),t.checkedReview=a)})},play:function(){this.timePoint?0==this.getVideoDom("object5").MPlayOpen(1,this.timePoint,15)?this.playFlag=!0:this.playFlag=!1:this.$message.error(this.$t("请选择要回放的视频")),this.radioFlag=!0},stop:function(){0==this.getVideoDom("object5").MPlayClose()?this.playFlag=!1:this.playFlag=!0,this.radioFlag=!1},pause:function(){1==this.pauseFlag?0==this.getVideoDom("object5").PlayPause(this.pauseFlag)&&(this.pauseFlag=0,this.pauseOrNot="播放"):0==this.getVideoDom("object5").PlayPause(this.pauseFlag)&&(this.pauseFlag=1,this.pauseOrNot="暂停")},speedChange:function(e){this.getVideoDom("object5").PlaySetSpeed(e)}},created:function(){[{target:"object1",event:"OnDoubleClick(x,y)",inContext:"FullScreen()"},{target:"object2",event:"OnDoubleClick(x,y)",inContext:"FullScreen()"},{target:"object3",event:"OnDoubleClick(x,y)",inContext:"FullScreen()"},{target:"object4",event:"OnDoubleClick(x,y)",inContext:"FullScreen()"}].forEach(function(t){var a=document.createElement("script");a.setAttribute("for",t.target),a.type="text/javascript",a.event=t.event,a.textContent=t.inContext,e.document.body.appendChild(a)})},mounted:function(){var e=this;this.videoData=JSON.parse(localStorage.getItem("VideologinData")),setTimeout(function(){e.initVideo(e.videoData)},2e3)}}}).call(this,a("c8ba"))},"5f40":function(e,t,a){}}]);