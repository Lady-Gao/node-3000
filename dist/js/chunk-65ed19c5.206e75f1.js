(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-65ed19c5"],{"4f7e":function(e,t,i){},8476:function(e,t,i){"use strict";var a=i("4f7e");i.n(a).a},df87:function(e,t,i){"use strict";(function(e){i("ac6a"),t.a={data:function(){return{progressTime:0,totalTime:0,reTime:0,firstStep:!0,secondStep:!1,secondStep1:!1,thirdStep:!1,timer:null,checkedReview:null,progress:0,radioFlag:!1,searchFlag:!1,cameraFlag:!1,clarityFlag:!1,openSound:"打开声音",soundFlag:1,rtvFlag:!1,timePoint:null,checkedVideo:"",pauseOrNot:"暂停",activeName:"realTimeVideo",pauseFlag:1,playFlag:!1,rList:[],startTime:null,endTime:null,videoData:null,CameraSelect:"0",claritySelect:"0",Camera:[{value:"0",label:"全部"}],clarity:[{value:"0",label:"高清"},{value:"1",label:"普清"}],locationValue:"1",location:[{value:"1",label:"终端设备"},{value:"2",label:"存储服务器"},{value:"4",label:"下载服务器"}],TTXviewWindow:[],vTimer:null,vList:null,DevID:null,RSearchFlag:!1}},methods:{initial:function(e){switch(e.channelCount){case 4:myViewer.Layout=2;break;case 6:myViewer.Layout=5;break;case 8:myViewer.Layout=3}for(var t=1;t<=e.channelCount;t++)this.Camera.push({value:t,label:"通道"+t});myViewer.ServerIP=e.ip,myViewer.ServerPort=e.port,Viewer.ServerIP=e.ip,Viewer.ServerPort=e.port,this.DevID=e.dvrId},openVideo:function(){var e=myViewer;if(0!=e.CheckOnline(this.DevID))return this.$message.error(this.$t("error.7004")),!1;if(0==this.CameraSelect)for(var t=0;t<this.Camera.length-1;t++)e.StartVideo(this.DevID,t,t),this.TTXviewWindow[t]=[t,e];else e.StartVideo(this.DevID,this.CameraSelect-1,this.CameraSelect-1),this.TTXviewWindow[this.CameraSelect-1]=[this.CameraSelect-1,e]},closeVideo:function(){for(var e in this.TTXviewWindow)this.TTXviewWindow[e]&&this.TTXviewWindow[e][1].StopVideo(this.TTXviewWindow[e][0])},getPic:function(){var e=myViewer;0==this.CameraSelect?e.CaptureAllWindowPicture():e.CapturePicture(this.CameraSelect-1)},searchVideo:function(){var e=this;return window.videoList=[],0!=Viewer.CheckOnline(this.DevID)?(this.$message.error(this.$t("error.7004")),!1):this.startTime&&this.endTime?(this.RSearchFlag=!0,Viewer.StartRecSearch(this.DevID,-1,-1,this.startTime,this.endTime,this.locationValue,2),void(this.vTimer=setInterval(function(){window.VFLAG&&3==window.MSGT&&(e.vList=window.videoList,window.VFLAG=!1,window.MSGT=null,Viewer.StopRecSearch(),clearInterval(e.vTimer),e.RSearchFlag=!1)},1e3))):(this.$message.warning("el.datepicker.selectTime"),!1)},play:function(){Viewer.StartPlaybackRec(this.rList[this.checkedVideo].strFile,this.rList[this.checkedVideo].FstartTime,this.rList[this.checkedVideo].FendTime,this.DevID,this.rList[this.checkedVideo].channel,this.rList[this.checkedVideo].FileLen,this.rList[this.checkedVideo].FileType,this.rList[this.checkedVideo].Location,this.rList[this.checkedVideo].SvrID,this.rList[this.checkedVideo].FstartTime,this.rList[this.checkedVideo].FendTime,!0)}},created:function(){var t=[];[{id:"s1",target:"Viewer"},{id:"s2",target:"Viewer"}].forEach(function(e){var i=document.createElement("script");i.setAttribute("for",e.target),i.type="text/javascript",i.event="s1"==e.id?"RecSearchEvent(strFile, nStartTime, nEndTime, nFileLen, nFileType, nSvrID, nLocation, nChannel)":"RecSearchMsgEvent(msg,params)",i.id=e.id,t.push(i)}),t[0].textContent="window.videoList.push({strFile:strFile, nStartTime:nStartTime, nEndTime:nEndTime, nFileLen:nFileLen, nFileType:nFileType, nSvrID:nSvrID, nLocation:nLocation, nChannel:nChannel});",t[1].textContent="if(msg == 3){window.VFLAG = true;window.MSGT = msg;}else{alert('查询失败');}",t.forEach(function(t){e.document.body.appendChild(t)}),window.videoList=[],window.VFLAG=!1,window.MSGT=null},watch:{vList:function(e){var t=this,i=[];e.forEach(function(e,a){var l={};l.strFile=e.strFile,l.FstartTime=t.$filter.format(new Date(e.nStartTime),"yyyy-MM-dd HH:mm:ss"),l.FendTime=t.$filter.format(new Date(e.nEndTime),"yyyy-MM-dd HH:mm:ss"),l.channel=e.nChannel,l.devId=t.DevID,l.FileLen=e.nFileLen,l.FileType=e.nFileType,l.Location=e.nLocation,l.SvrID=e.nSvrID,l._index=a,i.push(l)}),this.rList=i}},mounted:function(){var e=this;this.videoData=JSON.parse(localStorage.getItem("VideologinData")),setTimeout(function(){e.initial(e.videoData)},2e3)}}}).call(this,i("c8ba"))},e264:function(e,t,i){"use strict";i.r(t);var a=i("df87").a,l=(i("8476"),i("2877")),n=Object(l.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"TTXvideo"},[e.$service.isIe()?e._e():i("div",{staticStyle:{height:"200px","line-height":"200px","text-align":"center","font-size":"24px"}},[e._v("\n                        该视频播放只支持IE浏览器，请用IE浏览器打开!\n    ")]),e.$service.isIe()?i("cv-content",[i("el-tabs",{staticClass:"tabContent",on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"实时视频播放",name:"realTimeVideo"}},[i("div",{staticClass:"controlPanel"},[i("el-form",{attrs:{"label-width":"80px"}},[i("el-form-item",{attrs:{label:"摄像头"}},[i("el-select",{attrs:{disabled:e.cameraFlag},model:{value:e.CameraSelect,callback:function(t){e.CameraSelect=t},expression:"CameraSelect"}},e._l(e.Camera,function(e){return i("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-form-item",{attrs:{label:"清晰度"}},[i("el-select",{attrs:{disabled:e.clarityFlag},model:{value:e.claritySelect,callback:function(t){e.claritySelect=t},expression:"claritySelect"}},e._l(e.clarity,function(e){return i("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1)],1),i("div",{staticClass:"btnGroupOne"},[i("el-button",{attrs:{type:"primary"},on:{click:e.getPic}},[e._v("抓图")]),i("el-button",{attrs:{type:"primary",disabled:""},on:{click:e.openSounds}},[e._v(e._s(e.openSound))])],1),i("div",{staticClass:"btnGroupTwo"},[i("el-button",{attrs:{disabled:e.rtvFlag,type:"primary"},on:{click:e.openVideo}},[e._v("打开视频")]),i("el-button",{attrs:{type:"primary"},on:{click:e.closeVideo}},[e._v("关闭视频")])],1)],1)]),i("el-tab-pane",{attrs:{label:"视频回放",name:"playBack"}},[i("div",{staticClass:"controlPanel"},[i("el-form",{staticStyle:{"margin-bottom":"0px","margin-left":"15px","text-align":"left"}},[i("el-form-item",[i("el-date-picker",{attrs:{placeholder:"开始时间",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}})],1),i("el-form-item",[i("el-date-picker",{attrs:{placeholder:"结束时间",type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1),i("el-form-item",[i("el-select",{staticStyle:{width:"220px"},attrs:{placeholder:"文件位置"},model:{value:e.locationValue,callback:function(t){e.locationValue=t},expression:"locationValue"}},e._l(e.location,function(e){return i("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}),1)],1),i("el-form-item",[i("el-button",{attrs:{loading:e.searchFlag,disabled:e.RSearchFlag},on:{click:e.searchVideo}},[e._v("查询")])],1)],1),i("cv-scrollbar",{staticClass:"listContent",staticStyle:{height:"200px","border-top":"1px solid #ccc",padding:"10px 0","text-align":"left"}},[i("el-radio-group",{staticStyle:{width:"300px","text-align":"left"},attrs:{disabled:e.radioFlag},on:{change:e.change},model:{value:e.checkedVideo,callback:function(t){e.checkedVideo=t},expression:"checkedVideo"}},e._l(e.rList,function(t){return i("el-radio",{key:t._id,ref:"radioBoxes",refInFor:!0,attrs:{label:t._index}},[e._v(e._s(t.FstartTime+"至"+t.FendTime+"通道号"+t.channel))])}),1)],1),i("div",{staticClass:"btnGroupReview"},[i("el-button-group",[i("el-button",{attrs:{disabled:e.playFlag,type:"primary"},on:{click:e.play}},[e._v("回放")])],1)],1)],1)])],1),i("div",{directives:[{name:"show",rawName:"v-show",value:"realTimeVideo"==e.activeName,expression:"activeName == 'realTimeVideo'"}],staticClass:"videoWindow"},[i("object",{attrs:{classid:"clsid:DAB63197-3FF9-4236-924C-F8641094DDFD",codebase:"cmsv6.cab#version=6,0,0,3",width:"100%",height:"100%",id:"myViewer",name:"myViewer"}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:"playBack"==e.activeName,expression:"activeName == 'playBack'"}],staticClass:"videoWindow"},[i("object",{attrs:{classid:"clsid:DAB63197-3FF9-4236-924C-F8641094DDFD",codebase:"cmsv6.cab#version=6,0,0,3",width:"100%",height:"100%",id:"Viewer",name:"Viewer"}})])],1):e._e()],1)},[],!1,null,null,null);t.default=n.exports}}]);