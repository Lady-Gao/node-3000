(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-6cbbd26a"],{5239:function(e,t,a){},6794:function(e,t,a){"use strict";(function(e){a("a481"),a("96cf");var i,l=a("3b8d"),o=(a("c5f6"),a("ac6a"),a("cebc")),s=a("2f62"),n=a("8369");t.a={mixins:[n.a],data:function(){return{sName:"视频",replayPower:!1,picCutPower:!1,ytCtrlPower:!1,MTpowerPower:!0,currentFile:null,currentParams:null,VTypeValue:null,reviewActiveName:"Rview",alarmNum:0,alarms:[],PBCTime:null,PBM:!1,isModel5:!1,jumpTime:new Date(2016,9,10,0,0),fullFlag:!1,vehicleId:"",enterpriseId:"",timer:null,searchFlag:!1,cameraFlag:!1,screenFlag:!1,dataFlag:!1,MFlag:!1,rtvFlag:!1,rList:[],listData:"",listData1:"",videoData:null,activeName:"realTimeVideo",CameraSelect:"0",screens:"1",dataSelect:"0",MSelect:"1",channels:null,Camera:[],screenList:[],speedSelect:[{label:"×1",value:1},{label:"×2",value:2},{label:"×4",value:3},{label:"×8",value:4},{label:"×16",value:5}],speedS:1,vdataType:[{value:"0",label:"音视频"},{value:"1",label:"视频"},{value:"2",label:"双向对讲"},{value:"3",label:"监听"}],MType:[{value:"0",label:"主码流"},{value:"1",label:"子码流"}],PlaybackModeList:[{value:"0",label:"正常回放"},{value:"1",label:"快进回放"},{value:"2",label:"关键帧快退回放"},{value:"3",label:"关键帧播放"},{value:"4",label:"单帧上传"}],PlaybackMode:"0",objectList:[],PlaybackControl:"0",PlaybackControlList:[{value:"0",label:"开始回放"},{value:"1",label:"暂停回放"},{value:"3",label:"快进回放"},{value:"4",label:"关键帧快退回放"},{value:"5",label:"拖动回放"},{value:"6",label:"关键帧播放"}],fileLocation:"1",fileLocationList:[{label:"终端设备",value:"1"},{label:"存储服务器",value:"2"},{label:"下载服务器",value:"3"}],fileType:"0",fileTypeList:[{label:"录像",value:"0"},{label:"图片",value:"1"}],videoType:"0",videoTypeList:[{label:"所有",value:"0"},{label:"报警",value:"1"},{label:"非报警",value:"2"}],alarmLists:[],canPlay:!0,playFlag:!1,ipSave:"",simSave:"",portSave:""}},methods:Object(o.a)({},Object(s.b)(["sendVideoRealTimeTransportByOcx","sendVedioQueryResouceStore","getTerminalUpVideofileDetailsLog","sendRemoteVideoPlayBackRequest","sendRemoteVideoPlayBackRequestByOcx","sendRemoteVideoPlayBackController","getAlarmTypeList","addOcxBeginAskStreamLog","addOcxEndAskStreamLog"]),{alarmChange:function(e){var t=0;e.forEach(function(e){t+=Number(e)}),this.alarmNum=t},jumpEvent:function(e){var t=this.$filter.format(1e3*this.currentParams.StartTime,"yyyy-MM-dd");this.PBCTime=t+" "+e;var a={vehicleId:this.vehicleId,enterpriseId:this.enterpriseId,Channel:this.currentParams.Channel,PlaybackControl:this.PlaybackControl,Multiple:this.speedS,PlaybackPosition:this.PBCTime};this.sendRemoteVideoPlayBackController(a)},getVideoDom:function(e){return document.getElementById(e)},screenSelect:function(e){switch(e){case"1":this.setScreens(1),this.Camera[0].disabled=!0,this.CameraSelect="1";break;case"4":this.setScreens(4),this.Camera[0].disabled=!1,this.CameraSelect="0";break;case"6":this.setScreens(6),this.Camera[0].disabled=!1,this.CameraSelect="0";break;case"8":this.setScreens(8),this.Camera[0].disabled=!1,this.CameraSelect="0"}},setScreens:function(e){this.objectList=[];var t=e;if(1==t)this.objectList.push({id:"object1",screen:t});else for(var a=1;a<=e;a++)this.objectList.push({id:"object"+(a+1),screen:4})},setObjClass:function(e){return"obj"+e},openVideo:function(){switch(this.dataSelect){case"0":if(0==this.CameraSelect)for(var e=1;e<=this.channels;e++)this.getVideoDom("object"+(e+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(e+1)).StartRealTimeVideo(this.simSave,e,this.MSelect,!0),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:e,type:1});else 1==this.screens?(this.getVideoDom("object1").SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object1").StartRealTimeVideo(this.simSave,this.CameraSelect,this.MSelect,!0)):(this.getVideoDom("object"+(this.CameraSelect-0+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(this.CameraSelect-0+1)).StartRealTimeVideo(this.simSave,this.CameraSelect,this.MSelect,!0)),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:this.CameraSelect,type:1});break;case"1":if(0==this.CameraSelect)for(var t=1;t<=this.channels;t++)this.getVideoDom("object"+(t+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(t+1)).StartRealTimeVideo(this.simSave,t,this.MSelect,!0),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:t,type:1});else 1==this.screens?(this.getVideoDom("object1").SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object1").StartRealTimeVideo(this.simSave,this.CameraSelect,this.MSelect,!0)):(this.getVideoDom("object"+(this.CameraSelect-0+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(this.CameraSelect-0+1)).StartRealTimeVideo(this.simSave,this.CameraSelect,this.MSelect,!0)),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:this.CameraSelect,type:1});break;case"2":if(0==this.CameraSelect)for(var a=1;a<=this.channels;a++)this.getVideoDom("object"+(a+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(a+1)).StartRTSpeaking(this.simSave,a,this.MSelect),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:a,type:1});else 1==this.screens?(this.getVideoDom("object1").SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object1").StartRTSpeaking(this.simSave,this.CameraSelect,this.MSelect)):(this.getVideoDom("object"+(this.CameraSelect-0+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(this.CameraSelect-0+1)).StartRTSpeaking(this.simSave,this.CameraSelect,this.MSelect)),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:this.CameraSelect,type:1});break;case"3":if(0==this.CameraSelect)for(var i=1;i<=this.channels;i++)this.getVideoDom("object"+(i+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(i+1)).StartMonitorVoice(this.simSave,i,this.MSelect),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:i,type:1});else 1==this.screens?(this.getVideoDom("object1").SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object1").StartMonitorVoice(this.simSave,this.CameraSelect,this.MSelect)):(this.getVideoDom("object"+(this.CameraSelect-0+1)).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.getVideoDom("object"+(this.CameraSelect-0+1)).StartMonitorVoice(this.simSave,this.CameraSelect,this.MSelect)),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:this.CameraSelect,type:1})}this.rtvFlag=!0,this.cameraFlag=!0,this.screenFlag=!0,this.dataFlag=!0,this.MFlag=!0},stopVideo:function(){var e;switch(this.dataSelect){case"0":if(0==this.CameraSelect)for(var t=1;t<=this.channels;t++)this.getVideoDom("object"+(t+1)).StopAll(),e=this.getVideoDom("object"+(t+1)).GetReceiveBytesWithUnit(),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:t,type:1,dataUsage:e});else e=1==this.screens?(this.getVideoDom("object1").StopAll(),this.getVideoDom("object1").GetReceiveBytesWithUnit()):(this.getVideoDom("object"+(this.CameraSelect-0+1)).StopAll(),this.getVideoDom("object"+(this.CameraSelect-0+1)).GetReceiveBytesWithUnit()),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:this.CameraSelect,type:1,dataUsage:e});break;case"1":if(0==this.CameraSelect)for(var a=1;a<=this.channels;a++)this.getVideoDom("object"+(a+1)).StopAll(),e=this.getVideoDom("object"+(a+1)).GetReceiveBytesWithUnit(),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:a,type:1,dataUsage:e});else e=1==this.screens?(this.getVideoDom("object1").StopAll(),this.getVideoDom("object1").GetReceiveBytesWithUnit()):(this.getVideoDom("object"+(this.CameraSelect-0+1)).StopAll(),this.getVideoDom("object"+(this.CameraSelect-0+1)).GetReceiveBytesWithUnit()),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:this.CameraSelect,type:1,dataUsage:e});break;case"2":if(0==this.CameraSelect)for(var i=1;i<=this.channels;i++)this.getVideoDom("object"+(i+1)).StopRTSpeaking(),e=this.getVideoDom("object"+(i+1)).GetReceiveBytesWithUnit(),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:i,type:1,dataUsage:e});else e=1==this.screens?(this.getVideoDom("object1").StopRTSpeaking(),this.getVideoDom("object1").GetReceiveBytesWithUnit()):(this.getVideoDom("object"+(this.CameraSelect-0+1)).StopRTSpeaking(),this.getVideoDom("object"+(this.CameraSelect-0+1)).GetReceiveBytesWithUnit()),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:this.CameraSelect,type:1,dataUsage:e});break;case"3":if(0==this.CameraSelect)for(var l=1;l<5;l++)this.getVideoDom("object"+(l+1)).StopMonitorVoice(),e=this.getVideoDom("object"+(l+1)).GetReceiveBytesWithUnit(),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:l,type:1,dataUsage:e});else e=1==this.screens?(this.getVideoDom("object1").StopMonitorVoice(),this.getVideoDom("object1").GetReceiveBytesWithUnit()):(this.getVideoDom("object"+(this.CameraSelect-0+1)).StopMonitorVoice(),this.getVideoDom("object"+(this.CameraSelect-0+1)).GetReceiveBytesWithUnit()),this.addOcxEndAskStreamLog({vehicleId:this.videoData.vehicleId,channel:this.CameraSelect,type:1,dataUsage:e})}this.rtvFlag=!1,this.cameraFlag=!1,this.screenFlag=!1,this.dataFlag=!1,this.MFlag=!1},searchList:(i=Object(l.a)(regeneratorRuntime.mark(function e(){var t,a,i,l,o=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t=(new Date).getTime(),this.listData&&this.listData1){e.next=4;break}return this.$message.warning("请选择查询时间"),e.abrupt("return",!1);case 4:if(this.listData1>this.listData&&864e5<this.listData1-this.listData)return this.$message.warning("查询范围为一天,且开始时间不能大于结束时间"),e.abrupt("return",!1);e.next=7;break;case 7:(a=this.getVideoDom("objectR")).SetServerInfo(this.ipSave,this.portSave,this.$store.getters.user.userLevel,this.replayPower,this.picCutPower,this.ytCtrlPower,this.MTpowerPower),this.searchFlag=!0,i={Channel:Number(this.CameraSelect),StartTime:this.listData/1e3,EndTime:this.listData1/1e3,type:this.alarmNum,MediaType:Number(this.dataSelect),StreamType:Number(this.MSelect),StorageType:1,vehicleId:this.vehicleId,enterpriseId:this.enterpriseId,DataSource:this.fileLocation},a.SetRequestSequence(String(parseInt(1e6*Math.random()))),a.QueryVideoFiles(this.simSave,i.Channel,i.StartTime,i.EndTime,i.type,i.MediaType,i.StreamType,0,i.DataSource),l=setInterval(function(){var e=(new Date).getTime(),a=JSON.parse(window.localStorage.getItem("reviewList"));3e4<e-t&&(o.$message.warning("暂无数据"),o.rList=[],o.searchFlag=!1,clearInterval(l)),a&&0==a.FileCount?(o.$message.warning("暂无数据"),o.rList=[],o.searchFlag=!1):(o.rList=a.FileList,o.reviewActiveName="RList",o.searchFlag=!1,o.playFlag=!0),clearInterval(l)},1e3);case 14:case"end":return e.stop()}},e,this)})),function(){return i.apply(this,arguments)}),playBackView:function(e){var t=this,a={StartTime:this.$filter.timeStamp(e.StartTime.replace(/T/g," "))/1e3,EndTime:this.$filter.timeStamp(e.EndTime.replace(/T/g," "))/1e3,Channel:e.Channel,MediaType:Number(e.MediaType),StreamType:Number(e.StreamType),StorageType:Number(e.StorageType),PlaybackMode:Number(this.PlaybackMode),Multiple:Number(this.speedS)};this.reviewActiveName="Rview",this.currentFile=e,this.currentParams=a,setTimeout(function(){t.play(a)},1e3)},playBtn:function(){var e=this.currentParams;e.PlaybackMode=this.PlaybackMode,e.Multiple=this.speedS,this.play(e)},play:function(e){this.getVideoDom("objectR").PlayBack_Utc(this.simSave,e.Channel,e.MediaType,e.StreamType,e.StorageType,e.PlaybackMode,e.Multiple,e.StartTime,e.EndTime),this.addOcxBeginAskStreamLog({vehicleId:this.videoData.vehicleId,enterpriseId:this.videoData.enterpriseId,channel:e.Channel,type:2}),this.canPlay=!1},stop:function(){var e=this;setTimeout(function(){var t;e.getVideoDom("objectR").StopAll(),t=e.getVideoDom("objectR").GetReceiveBytesWithUnit(),e.addOcxEndAskStreamLog({vehicleId:e.videoData.vehicleId,channel:e.currentParams.Channel,type:2,dataUsage:t}),e.canPlay=!0},1e3)},pause:function(){},speedChange:function(e){var t=this.currentParams,a=Number(e);this.getVideoDom("objectR").PlayBack_Utc(this.simSave,t.Channel,t.MediaType,t.StreamType,t.StorageType,t.PlaybackMode,a,t.StartTime,t.EndTime)},PlaybackControlChange:function(e){if(this.isModel5=5==e&&this.$message.warning("请选择跳转时间"),5!=e){var t={vehicleId:this.vehicleId,enterpriseId:this.enterpriseId,Channel:this.currentParams.Channel,PlaybackControl:this.PlaybackControl,Multiple:this.speedS,PlaybackPosition:this.PBCTime};this.sendRemoteVideoPlayBackController(t)}},vTypeChange:function(e){this.VTypeValue=1==e},checkPowers:function(e){var t=this;e.forEach(function(e){switch(e){case"replay":t.replayPower=!0;break;case"picCut":t.picCutPower=!0;break;case"ytCtrl":t.ytCtrlPower=!0;break;case"MTpower":t.MTpowerPower=!0}})}}),mounted:function(){var e=this,t=JSON.parse(localStorage.getItem("powers"));this.checkPowers(t),this.videoData=JSON.parse(localStorage.getItem("ocxVideo")),this.vehicleId=this.$route.query.v,this.enterpriseId=this.$route.query.e,this.$http({url:"/sendVideoOrder/getVideoSimCodeAndIp",params:{vehicleId:this.vehicleId}}).then(function(t){t.flag?(e.ipSave=t.data.ipAddress,e.simSave=t.data.simCode,e.portSave=t.data.port,e.channels=t.data.channelCount):e.$message.error({message:e.$t("error."+t.errorCode)})}),setTimeout(function(){e.screenSelect("1")},500)},created:function(){[{target:"object1",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? document.getElementById('realtime').className=\"fullWindow\" : document.getElementById('realtime').className=\"videoWindow\""},{target:"object2",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object5').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object5').className=\"obj4\")"},{target:"object3",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object2').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object5').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object2').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object5').className=\"obj4\")"},{target:"object4",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object3').className=\"hidden\",document.getElementById('object2').className=\"hidden\",document.getElementById('object5').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object2').className=\"obj4\",document.getElementById('object5').className=\"obj4\")"},{target:"object5",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object2').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object2').className=\"obj4\")"},{target:"object6",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object2').className=\"hidden\",document.getElementById('object5').className=\"hidden\",document.getElementById('object7').className=\"hidden\",document.getElementById('object8').className=\"hidden\",document.getElementById('object9').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object2').className=\"obj4\",document.getElementById('object5').className=\"obj4\",document.getElementById('object7').className=\"obj4\",document.getElementById('object8').className=\"obj4\",document.getElementById('object9').className=\"obj4\")"},{target:"object7",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object5').className=\"hidden\",document.getElementById('object6').className=\"hidden\",document.getElementById('object8').className=\"hidden\",document.getElementById('object9').className=\"hidden\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object2').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object2').className=\"obj4\",document.getElementById('object5').className=\"obj4\",document.getElementById('object6').className=\"obj4\",document.getElementById('object8').className=\"obj4\",document.getElementById('object9').className=\"obj4\")"},{target:"object8",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object5').className=\"hidden\",document.getElementById('object6').className=\"hidden\",document.getElementById('object7').className=\"hidden\",document.getElementById('object9').className=\"hidden\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object2').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object2').className=\"obj4\",document.getElementById('object5').className=\"obj4\",document.getElementById('object6').className=\"obj4\",document.getElementById('object7').className=\"obj4\",document.getElementById('object9').className=\"obj4\")"},{target:"object9",event:["OnControlDoubleClickEvent(isFullScreen)","OnRealtimeVideoOuttimeEvent()","OnRealtimeVideoPriorityNotifyEvent(priority)","OnScreenshotCompletedEvent(fileLocation)"],inContext:"isFullScreen ? (document.getElementById('realtime').className=\"fullWindow\",document.getElementById('object5').className=\"hidden\",document.getElementById('object6').className=\"hidden\",document.getElementById('object7').className=\"hidden\",document.getElementById('object8').className=\"hidden\",document.getElementById('object3').className=\"hidden\",document.getElementById('object4').className=\"hidden\",document.getElementById('object2').className=\"hidden\") : (document.getElementById('realtime').className=\"videoWindow\",document.getElementById('object3').className=\"obj4\",document.getElementById('object4').className=\"obj4\",document.getElementById('object2').className=\"obj4\",document.getElementById('object5').className=\"obj4\",document.getElementById('object6').className=\"obj4\",document.getElementById('object7').className=\"obj4\",document.getElementById('object8').className=\"obj4\")"},{target:"objectR",event:"OnControlDoubleClickEvent(isFullScreen)",inContext:"isFullScreen ? document.getElementById('reviewtime').className=\"fullWindow\" : document.getElementById('reviewtime').className=\"videoWindow\""},{target:"objectR",event:"OnAsyncRemoteVideoPlaybackEvent(json)",inContext:"window.localStorage.setItem('reviewList',json)"},{target:"objectR",event:"OnScreenshotCompletedEvent(fileLocation)",inContext:'alert("视频截图操作:图像文件位于" + fileLocation);'}].forEach(function(t){if("string"!=typeof t.event){var a=document.createElement("script"),i=document.createElement("script"),l=document.createElement("script"),o=document.createElement("script");a.setAttribute("for",t.target),i.setAttribute("for",t.target),l.setAttribute("for",t.target),o.setAttribute("for",t.target),a.event=t.event[0],a.textContent=t.inContext,i.event=t.event[1],i.textContent='alert("实时播放提示:播放空闲超时提示即将到达5min超时时间,倒计时30秒之后主动断开实时视频!")',l.event=t.event[2],l.textContent='alert("视频服务器资源不足，您已被断开链接！");console.log(priority);',o.event=t.event[3],o.textContent='alert("视频截图操作:图像文件位于" + fileLocation);',e.document.body.appendChild(a),e.document.body.appendChild(i),e.document.body.appendChild(l),e.document.body.appendChild(o)}else{var s=document.createElement("script");s.setAttribute("for",t.target),s.event=t.event,s.textContent=t.inContext,e.document.body.appendChild(s)}})},beforeMount:function(){var e=this;this.getAlarmTypeList().then(function(t){for(var a in t.data)e.alarmLists.push({label:a,value:t.data[a]})}),window.onbeforeunload=function(){return e.stopVideo(),"退出"}},watch:{dataSelect:function(e){switch(e){case"0":case"1":this.sName="视频";break;case"2":this.sName="双向对讲";break;case"3":this.sName="监听"}},channels:function(e){if(e){for(var t=0;t<=e;t++)0==t?this.Camera.push({label:"全部",value:"0",disabled:!0}):this.Camera.push({label:"通道"+t,value:t+"",disabled:!1});this.screenList.push({label:"1屏",value:"1"},{label:e+"屏",value:e+""})}}}}}).call(this,a("c8ba"))},8369:function(e,t,a){"use strict";var i=a("cebc");t.a={data:function(){return{table:{size:10,total:0,current:1,flag:!1,loading:!1,data:[]}}},methods:{tableLoading:function(e,t,a,l){var o=this;a?(this.table.flag=!0,this.table.current=1):this.table.flag=!1,this.table.loading=!0;var s=Object(i.a)({current:this.table.current,size:this.table.size},t);this.$http(l?{url:e,data:s}:{url:e,params:s}).then(function(e){var t=e.data;e.flag&&0!=t.length?(o.table.data=t.records,o.table.total=t.total,o.table.current=t.current):(o.table.data=[],o.table.total=0),o.table.loading=!1}).catch(function(e){o.table.loading=!1})},tableFilterColor:function(e){return this.$filter.plateCodeColor(e.plateColor)},tableFilterIcType:function(e){return this.$filter.icType(e.state)},tableFilterIcResult:function(e){return this.$filter.icResult(e.readerresult)},tableFilterTiredAlarm:function(e){return this.$filter.tiredAlarmType(e.alarm)},tableFilterTiredAdas:function(e){return this.$filter.tiredAdasType(e.alarm)},tableFilterOrderTypeS:function(e){return this.$filter.orderTypeS(e.sendFlag)},tableFilterFormat:function(e){return this.$filter.format(e.orderTime||e.gpsTime)},tableFilterFormats:function(e){return this.$filter.format(e.backTime)},tableBusLineType:function(e){return this.$filter.lineType(e.lineType)},tableFilterAcc:function(e){return this.$filter.accStatus(e.accStatus)},tableSplitMobile:function(e){return e.mobileCode?e.mobileCode.slice(1,e.mobileCode.length):""},tableConfirm:function(e){return this.$filter.isConfirm(e.isnotarize)},tableUpkeep:function(e){return this.$filter.isConfirm(e.type)},tableRenewal:function(e){return this.$filter.renewal(e.state)},tableReMot:function(e){return this.$filter.reMot(e.state)},tableOil:function(e){return this.$filter.fixNumber(e.total,2)},tableSex:function(e){return this.$filter.sex(e.sex)},plateCodeF:function(e){return e.plateCode?e.plateCode:"--"},plateCodeAndColor:function(e){return e.plateCode+"("+this.$filter.plateCodeColor(e.plateColor)+")"},driverStuas:function(e){return this.$filter.alarmStatus(e.fatigueDrive)},overStuas:function(e){return this.$filter.alarmStatus(e.tOversSpeed)},overHStuas:function(e){return this.$filter.alarmStatus(e.tOverSpeedH)},filterAlStuas:function(e){return this.$filter.alarmStatus(e.overSpeed)},filteralarmStuas:function(e){return this.$filter.alarmStatus(e.overSpeedH)},filterLStuas:function(e){return this.$filter.alarmStatus(e.forbid)},applyFlag:function(e){return this.$filter.applyFlag(e.applyFlag)},SEtime:function(e){return this.$filter.SEtime(e.StartTime,e.EndTime)},channelType:function(e){return this.$filter.channelType(e.Channel)},FileSize:function(e){return this.$filter.FileSize(e.fileSize||e.FileSize||0)},AlarmFilter:function(e){return this.$filter.AlarmFilter(e.Alarm)},MediaTypeFilter:function(e){return this.$filter.MediaTypeFilter(e.MediaType)},StreamTypeFilter:function(e){return this.$filter.StreamTypeFilter(e.StreamType)},StorageTypeFilter:function(e){return this.$filter.StorageTypeFilter(e.StorageType)},statusType:function(e){return this.$filter.statusType(e.Status)},fileSource:function(e){return this.$filter.fileSource(e.fileSource)}}}},b933:function(e,t,a){"use strict";a.r(t);var i=a("6794").a,l=(a("c061"),a("2877")),o=Object(l.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"RMvideo"},[e.$service.isIe()?e._e():a("div",{staticStyle:{height:"200px","line-height":"200px","text-align":"center","font-size":"24px"}},[e._v("\n            该视频播放只支持IE浏览器，请用IE浏览器打开!\n        ")]),e.$service.isIe()?a("div",{staticStyle:{"text-align":"center","margin-top":"5px"}},[a("a",{staticStyle:{color:"red"},attrs:{href:e.$COMMON.ocxLib}},[e._v("请先下载视频控件！")]),e._v("  \n        ")]):e._e(),e.$service.isIe()?a("cv-content",{staticStyle:{top:"30px"}},[a("el-tabs",{staticClass:"tabContent",model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"实时视频播放",name:"realTimeVideo"}},[a("div",{staticClass:"controlPanel"},[a("el-form",{attrs:{"label-width":"80px"}},[a("el-form-item",{attrs:{label:"摄像头"}},[a("el-select",{attrs:{disabled:e.cameraFlag},model:{value:e.CameraSelect,callback:function(t){e.CameraSelect=t},expression:"CameraSelect"}},e._l(e.Camera,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value,disabled:e.disabled}})}),1)],1),a("el-form-item",{attrs:{label:"分屏"}},[a("el-select",{attrs:{disabled:e.screenFlag},on:{change:e.screenSelect},model:{value:e.screens,callback:function(t){e.screens=t},expression:"screens"}},e._l(e.screenList,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"数据类型"}},[a("el-select",{attrs:{disabled:e.dataFlag},model:{value:e.dataSelect,callback:function(t){e.dataSelect=t},expression:"dataSelect"}},e._l(e.vdataType,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{attrs:{label:"码流类型"}},[a("el-select",{attrs:{disabled:e.MFlag},model:{value:e.MSelect,callback:function(t){e.MSelect=t},expression:"MSelect"}},e._l(e.MType,function(e){return a("el-option",{key:e._id,attrs:{label:e.label,value:e.value}})}),1)],1)],1),a("div",{staticClass:"btnGroupOne"},[a("el-button",{attrs:{disabled:e.rtvFlag,type:"primary"},on:{click:e.openVideo}},[e._v("打开"+e._s(e.sName))]),a("el-button",{attrs:{type:"primary"},on:{click:e.stopVideo}},[e._v("关闭"+e._s(e.sName))])],1)],1),a("div",{staticClass:"videoWindow",attrs:{id:"realtime"}},e._l(e.objectList,function(t){return a("object",{key:t._id,class:e.setObjClass(t.screen),attrs:{id:t.id,codebase:e.$COMMON.ocxLib,classid:"clsid:2769FF99-A41F-4AC4-99AD-9CABEB8F83D4"}})}),0)]),a("el-tab-pane",{attrs:{label:"视频回放",name:"playBack"}},[a("div",{staticClass:"controlPanel"},[a("el-form",{staticStyle:{"margin-bottom":"0px"}},[a("el-form-item",[a("el-date-picker",{staticStyle:{float:"left","margin-left":"10px",width:"250px"},attrs:{editable:!1,clearable:!1,"value-format":"timestamp",type:"datetime",placeholder:"开始时间"},model:{value:e.listData,callback:function(t){e.listData=t},expression:"listData"}})],1),a("el-form-item",[a("el-date-picker",{staticStyle:{float:"left","margin-left":"10px",width:"250px"},attrs:{editable:!1,clearable:!1,"value-format":"timestamp",type:"datetime",placeholder:"结束时间"},model:{value:e.listData1,callback:function(t){e.listData1=t},expression:"listData1"}})],1),a("el-form-item",[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},on:{change:e.PlaybackModeChange},model:{value:e.PlaybackMode,callback:function(t){e.PlaybackMode=t},expression:"PlaybackMode"}},e._l(e.PlaybackModeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},model:{value:e.fileLocation,callback:function(t){e.fileLocation=t},expression:"fileLocation"}},e._l(e.fileLocationList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},on:{change:e.speedChange},model:{value:e.speedS,callback:function(t){e.speedS=t},expression:"speedS"}},e._l(e.speedSelect,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},on:{change:e.PlaybackControlChange},model:{value:e.PlaybackControl,callback:function(t){e.PlaybackControl=t},expression:"PlaybackControl"}},e._l(e.PlaybackControlList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},model:{value:e.fileType,callback:function(t){e.fileType=t},expression:"fileType"}},e._l(e.fileTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[a("el-select",{staticStyle:{float:"left","margin-left":"10px"},on:{change:e.vTypeChange},model:{value:e.videoType,callback:function(t){e.videoType=t},expression:"videoType"}},e._l(e.videoTypeList,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1)],1),a("el-form-item",[e.VTypeValue?a("el-select",{staticStyle:{float:"left","margin-left":"10px"},attrs:{multiple:"","collapse-tags":"",placeholder:"报警类型选择"},on:{change:e.alarmChange},model:{value:e.alarms,callback:function(t){e.alarms=t},expression:"alarms"}},e._l(e.alarmLists,function(e){return a("el-option",{key:e.id,attrs:{label:e.label,value:e.value}})}),1):e._e()],1),a("el-form-item",[a("el-button",{attrs:{disabled:e.PBM,loading:e.searchFlag},on:{click:e.searchList}},[e._v("查询")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.playFlag,expression:"playFlag"}],attrs:{disabled:!e.canPlay},on:{click:e.playBtn}},[e._v("下发回放指令")]),a("el-button",{directives:[{name:"show",rawName:"v-show",value:e.playFlag,expression:"playFlag"}],on:{click:e.stop}},[e._v("停止")])],1),a("el-form-item",[a("el-time-picker",{directives:[{name:"show",rawName:"v-show",value:e.isModel5,expression:"isModel5"}],staticStyle:{width:"180px"},attrs:{"value-format":"HH:mm:ss",placeholder:"选择时间点"},on:{change:e.jumpEvent},model:{value:e.jumpTime,callback:function(t){e.jumpTime=t},expression:"jumpTime"}})],1)],1)],1),a("div",{staticClass:"videoWindow",attrs:{id:"reviewtime"}},[a("el-tabs",{model:{value:e.reviewActiveName,callback:function(t){e.reviewActiveName=t},expression:"reviewActiveName"}},[a("el-tab-pane",{attrs:{label:"回放视口",name:"Rview"}},[a("div",{staticClass:"one"},[a("object",{attrs:{id:"objectR",classid:"clsid:2769FF99-A41F-4AC4-99AD-9CABEB8F83D4",codebase:e.$COMMON.ocxLib,width:"870",height:"505"}})])]),a("el-tab-pane",{attrs:{label:"文件列表",name:"RList"}},[a("cv-grid",{attrs:{data:e.rList,defaultHeight:500}},[a("el-table-column",{attrs:{type:"index"}}),a("el-table-column",{attrs:{label:"时间",width:"200",formatter:e.SEtime,prop:"StartTime"}}),a("el-table-column",{attrs:{label:"录像类型",prop:""}}),a("el-table-column",{attrs:{label:"终端设备",prop:""}}),a("el-table-column",{attrs:{label:"通道",formatter:e.channelType,prop:"Channel"}}),a("el-table-column",{attrs:{label:"文件位置",prop:""}}),a("el-table-column",{attrs:{label:"大小(MB)",formatter:e.FileSize,prop:"FileSize"}}),a("el-table-column",{attrs:{label:"文件",prop:""}}),a("el-table-column",{attrs:{label:e.$t("action.operation")},scopedSlots:e._u([{key:"default",fn:function(t){return[a("cv-span",{attrs:{type:"success"},nativeOn:{click:function(a){return e.playBackView(t.row)}}},[e._v("回放")])]}}],null,!1,3090095690)})],1)],1)],1)],1)])],1)],1):e._e()],1)},[],!1,null,null,null);t.default=o.exports},c061:function(e,t,a){"use strict";var i=a("5239");a.n(i).a}}]);