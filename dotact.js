(function (){
    var m = document.createElement("script");
    m.innerHTML = `
function togetalldata() {
    $.ajax({
        type: "get",
        async: false,
        url: ''+$("#MAXWEBURL").val()+'/httpprg/dotclasaction.php?fn1=GETDATA&id='+$("#id").val()+'&COLSTR=account&jsoncallback=NOSELID',
        dataType: 'jsonp',//指定以jsonp方式執行
        jsonp: 'jsoncallback',//"mycallback"會以GET的變數名稱傳送，沒指定時，jQuery使用"callback"當變數名稱
        jsonpCallback:'NOSELID',//"mycallback"變數的值，沒指定時，jQuery隨機產生
        success: function(data){

            var entry1 = data["NOWDETAMEDITS"].split('(AB)'); //唯一值
            var entry2 = data["NOWDETBID"].split('(AB)');//課表
            var entry3 = data["NOWDETSTUDNO"].split('(AB)');//學號
            var entry4 = data["NOWDETSTUDNA"].split('(AB)');//姓名
            var entry5 = data["NOWDETCLASNA"].split('(AB)');//班級
            var entry6 = data["NOWDETSTUDSNO"].split('(AB)');//卡號
            var entry7 = data["NOWDETINDATE"].split('(AB)');//刷卡時間
            var entry8 = data["NOWDETSTY1"].split('(AB)');//出席
            var entry9 = data["NOWDETSTY2"].split('(AB)');//遲到
            var entry10 = data["NOWDETSTY3"].split('(AB)');//早退
            var entry11 = data["NOWDETSTY4"].split('(AB)');//曠課
            var entry12 = data["NOWDETMEMO"].split('(AB)');//備註
            var entry13 = data["NOWDETSTUDID"].split('(AB)');//學生代號
            var entry14 = data["NOWDETABXECTYPE"].split('(AB)');//請假狀況
            var entry15 = data["NOWDETREDYN"].split('(AB)');//刪除狀況
			var entry23 = data["NOWDETINDATE2"].split('(AB)');//刷卡時間
			
			
			var entry16 = data["TOTNUM"];
			var entry17 = data["NUM1"];//出席人數
			var entry18 = data["NUM2"];//遲到人數
			var entry19 = data["NUM3"];//早退人數
			var entry20 = data["NUM4"];//曠課人數
			var entry21 = data["NUM0"];//請假人數
			
			var entry22 = "Y";//是否要登出

			if (entry22 == "N") {
				window.location.href='http://rollcall.hwsh.tc.edu.tw/httpprg/logout.php';
			}
			
			$("#shownum1").empty();	
			$("#shownum1").append('<h6>上課人數：'+entry16+'</h6>');
			$("#shownum2").empty();	
			$("#shownum2").append('<h6>出席人數：'+entry17+'</h6>');
			$("#shownum3").empty();	
			$("#shownum3").append('<h6>遲到人數：'+entry18+'</h6>');
			$("#shownum4").empty();	
			$("#shownum4").append('<h6>早退人數：'+entry19+'</h6>');
			$("#shownum5").empty();	
			$("#shownum5").append('<h6>曠課人數：'+entry20+'</h6>');
			$("#shownum6").empty();	
			$("#shownum6").append('<h6>請假人數：'+entry21+'</h6>');
				
	
			var nowstr = "";
			var nowlistidstr = "";
			var chstr="";
			nowstr = nowstr + '<table class="table ">';
			nowstr = nowstr + '<thead>';
			nowstr = nowstr + '<tr>';
			nowstr = nowstr + '<th>姓名</th>';
			nowstr = nowstr + '<th>出席</th>';
			nowstr = nowstr + '<th>遲到</th>';
			nowstr = nowstr + '<th>早退</th>';
			nowstr = nowstr + '<th>曠課</th>';
			nowstr = nowstr + '<th>備註</th>';
			nowstr = nowstr + '<th>學號</th>';   
			nowstr = nowstr + '<th>班級</th>';                            
			nowstr = nowstr + '<th>刷卡時間</th>';
			nowstr = nowstr + '<th>老師更新時間</th>';
			nowstr = nowstr + '<th>刪除</th>';
			nowstr = nowstr + '</tr>';
			nowstr = nowstr + '</thead>';
			nowstr = nowstr + '<tbody>';
            for (var i=0; i<entry1.length; i++){
			    nowstr = nowstr + '<tr>';		    
			    nowstr = nowstr + '<td>'+entry4[i]+'';
				if (entry14[i] != "") {
					nowstr = nowstr + '(' + entry14[i] + ')';
				//alert(nowstr);						 
				}
                nowstr = nowstr + '</td>';
				
				if (entry8[i] == "Y") {
					chstr = "checked";
				} else {
					chstr = "";
				}
                nowstr = nowstr + '<td class="center"><input type="checkbox" name="STY1'+entry1[i]+'" id="STY1'+entry1[i]+'" '+chstr+' onClick=tosavesty("'+entry1[i]+'","1") style="width:25px; height:25px" value="Y" ></td>';
				
				if (entry9[i] == "Y") {
					chstr = "checked";
				} else {
					chstr = "";
				}
                nowstr = nowstr + '<td class="center"><input type="checkbox" name="STY2'+entry1[i]+'" id="STY2'+entry1[i]+'" '+chstr+' onClick=tosavesty("'+entry1[i]+'","2") style="width:25px; height:25px" value="Y" ></td>';
			
				if (entry10[i] == "Y") {
					chstr = "checked";
				} else {
					chstr = "";
				}
                nowstr = nowstr + '<td class="center"><input type="checkbox" name="STY3'+entry1[i]+'" id="STY3'+entry1[i]+'" '+chstr+' onClick=tosavesty("'+entry1[i]+'","3") style="width:25px; height:25px" value="Y" ></td>';
				
				if (entry11[i] == "Y") {
					chstr = "checked";
				} else {
					chstr = "";
				}
                nowstr = nowstr + '<td class="center"><input type="checkbox" name="STY4'+entry1[i]+'" id="STY4'+entry1[i]+'" '+chstr+' onClick=tosavesty("'+entry1[i]+'","4") style="width:25px; height:25px" value="Y" ></td>';
				
                nowstr = nowstr + '<td class="center">';
                nowstr = nowstr + '<input type="text" name="MEMO'+entry1[i]+'" id="MEMO'+entry1[i]+'"  class="form-control" style="width: 100%" value="'+entry12[i]+'">';
                nowstr = nowstr + '</td>';
                nowstr = nowstr + '<td>'+entry3[i]+'</td>';
                nowstr = nowstr + '<td class="center">'+entry5[i]+'</td>';
                nowstr = nowstr + '<td class="center">'+entry7[i]+'</td>';
				nowstr = nowstr + '<td class="center">'+entry23[i]+'</td>';
                nowstr = nowstr + '<td class="center">';
                nowstr = nowstr + '<a class="btn btn-danger" href="#" onclick=todelstud("'+entry1[i]+'");>';
                nowstr = nowstr + '<i class="glyphicon glyphicon-remove icon-white"></i>';
                nowstr = nowstr + '</a>';
                nowstr = nowstr + '</td>';
                nowstr = nowstr + '</tr>';
            }
			nowstr = nowstr + '</tbody>';
			nowstr = nowstr + '</table>';
			
			
				
			$("#studentstr").empty();	
			$("#studentstr").append(nowstr);
			

						
        },
        error: function(XHR, textStatus, errorThrown){
            //$("#CHKYN").val("N");
            //document.news_post.CHKUSERID.value = "N";
            //$("#showoneitem").append('<font color=#FF0000>連線失敗，請確認,error:'+textStatus+',error:'+errorThrown+'</font>');
            //alert("response:"+ XHR.responseText +" status:" + textStatus + " error:" + errorThrown);
        }
    });
				   
}
function togetalldata1() {

    $.ajax({
        type: "get",
        async: false,
        url: ''+$("#MAXWEBURL").val()+'/httpprg/dotclasaction.php?fn1=GETDATA&id='+$("#id").val()+'&COLSTR=account&jsoncallback=NOSELID',
        dataType: 'jsonp',//指定以jsonp方式執行
        jsonp: 'jsoncallback',//"mycallback"會以GET的變數名稱傳送，沒指定時，jQuery使用"callback"當變數名稱
        jsonpCallback:'NOSELID',//"mycallback"變數的值，沒指定時，jQuery隨機產生
        success: function(data){

            var entry1 = data["NOWDETAMEDITS"].split('(AB)'); //唯一值
            var entry2 = data["NOWDETBID"].split('(AB)');//課表
            var entry3 = data["NOWDETSTUDNO"].split('(AB)');//學號
            var entry4 = data["NOWDETSTUDNA"].split('(AB)');//姓名
            var entry5 = data["NOWDETCLASNA"].split('(AB)');//班級
            var entry6 = data["NOWDETSTUDSNO"].split('(AB)');//卡號
            var entry7 = data["NOWDETINDATE"].split('(AB)');//刷卡時間
            var entry8 = data["NOWDETSTY1"].split('(AB)');//出席
            var entry9 = data["NOWDETSTY2"].split('(AB)');//遲到
            var entry10 = data["NOWDETSTY3"].split('(AB)');//早退
            var entry11 = data["NOWDETSTY4"].split('(AB)');//曠課
            var entry12 = data["NOWDETMEMO"].split('(AB)');//備註
            var entry13 = data["NOWDETSTUDID"].split('(AB)');//學生代號
            var entry14 = data["NOWDETABXECTYPE"].split('(AB)');//請假狀況
            var entry15 = data["NOWDETREDYN"].split('(AB)');//刪除狀況
			var entry24 = data["NOWDETTXT"].split('(AB)');//刪除狀況
			
			var entry16 = data["TOTNUM"];
			var entry17 = data["NUM1"];//出席人數
			var entry18 = data["NUM2"];//遲到人數
			var entry19 = data["NUM3"];//早退人數
			var entry20 = data["NUM4"];//曠課人數
			var entry21 = data["NUM0"];//請假人數
			
            var entry22 = "Y";//是否要登出
            var entry23 = "Y";//是否能修改
			if (entry22 == "N") {
				window.location.href='http://rollcall.hwsh.tc.edu.tw/httpprg/logout.php';
			}
			
			$("#shownum2").empty();	
			$("#shownum2").append('<h6><img src="../images/green.png" width="30px"><font size="+1">　出席：'+entry17+'人</font></h6>');
			$("#shownum3").empty();	
			$("#shownum3").append('<h6><img src="../images/yell.png" width="30px"><font size="+1">　遲到：'+entry18+'人</font></h6>');
			$("#shownum4").empty();	
			$("#shownum4").append('<h6><img src="../images/suns.png" width="30px"><font size="+1">　早退：'+entry19+'人</font></h6>');
			$("#shownum5").empty();	
			$("#shownum5").append('<h6><img src="../images/red2.png" width="30px"><font size="+1">　曠課：'+entry20+'人</font></h6>');
			$("#shownum6").empty();	
			$("#shownum6").append('<h6><img src="../images/blue.png" width="30px"><font size="+1">　請假：'+entry21+'人</font></h6>');
						
			var nowstr = "";
			var nowlistidstr = "";
			var chstr="";
			
			
			nowstr = nowstr + '<div class="row">';
			for (var i=0; i<entry1.length; i++){
				var NOWSSTR = "";
				var NOWID = "";
				var NOWPICSTGR = "";
			
				if (entry14[i] != "") { //請假
					NOWPICSTGR = 'blue';
					NOWSSTR = '<font color="#FF0000">('+entry14[i]+')</font>';
							
				} else {
					if (entry11[i] == "Y") {  //曠課
					    NOWPICSTGR = "red2";
					    NOWID = "4";
						NOWSSTR = '<font color="#FF0000">('+entry24[i]+')</font>';
					} else {
					    if (entry8[i] == "Y") { //出席
					        NOWPICSTGR = "green";
					        NOWID = "1";
					    }
					    if (entry9[i] == "Y") { //遲到
					        NOWPICSTGR = "yell";
					        NOWID = "2";
					    }
					    if (entry10[i] == "Y") { //早退
					        NOWPICSTGR = "suns";
					        NOWID = "3";
					    }
						
					
					
					}			
					
                }
                if(entry23 != "N"){
				nowstr = nowstr + '<div class=" col-md-2" id="'+entry1[i]+'">';
					if(entry14[i] == ""){
					   
					   nowstr = nowstr + '<img src="../images/'+NOWPICSTGR+'.png" height="30px" id="img'+entry1[i]+'">';
					   nowstr = nowstr + '<font size="+2"  face="微軟正黑體">'+entry5[i]+'-'+entry6[i]+'-'+entry4[i]+''+NOWSSTR+'';
					   nowstr = nowstr + '</font>';
					   nowstr = nowstr + '<div class="row">';
					   nowstr = nowstr + '<div class="col-md-2">';
					   nowstr = nowstr + '</div>';
					   nowstr = nowstr + '<a onClick=movepic("img'+entry1[i]+'","../images/green.png");tosavesty21("'+entry1[i]+'","4") onmouseover=movepic("img1'+entry1[i]+'","../images/green.png") onmouseout=movepic("img1'+entry1[i]+'","../images/green1.png") ><img src="../images/green1.png" height="15px" width="20px" id="img1'+entry1[i]+'"></a>';
                       nowstr = nowstr + '<a onClick=movepic("img'+entry1[i]+'","../images/yell.png");tosavesty21("'+entry1[i]+'","1") onmouseover=movepic("img2'+entry1[i]+'","../images/yell.png") onmouseout=movepic("img2'+entry1[i]+'","../images/yell1.png")><img src="../images/yell1.png" height="15px" width="20px" id="img2'+entry1[i]+'"></a>';
                       nowstr = nowstr + '<a onClick=movepic("img'+entry1[i]+'","../images/suns.png");tosavesty21("'+entry1[i]+'","2") onmouseover=movepic("img3'+entry1[i]+'","../images/suns.png") onmouseout=movepic("img3'+entry1[i]+'","../images/suns1.png")><img src="../images/suns1.png" height="15px" width="20px" id="img3'+entry1[i]+'"></a>';
                       nowstr = nowstr + '<a onClick=movepic("img'+entry1[i]+'","../images/red2.png");tosavesty21("'+entry1[i]+'","3") onmouseover=movepic("img4'+entry1[i]+'","../images/red2.png") onmouseout=movepic("img4'+entry1[i]+'","../images/red1.png")><img src="../images/red1.png" height="15px" width="20px" id="img4'+entry1[i]+'"></a>';
					   nowstr = nowstr + '</div>';
					   nowstr = nowstr + '<h3></h3>';
							  
	
			 
					}else{
					
						
						nowstr = nowstr + '<img src="../images/'+NOWPICSTGR+'.png" height="30px" id=img'+entry1[i]+'>';
						nowstr = nowstr + '<font style="text-align:left-center"  size="+2"  face="微軟正黑體">'+entry5[i]+'-'+entry6[i]+'-'+entry4[i]+''+NOWSSTR+'</font>';
						nowstr = nowstr + '<div class="row">';
						nowstr = nowstr + '<div class="col-md-2">';
						nowstr = nowstr + '</div>';
						nowstr = nowstr + '<a><img src="../images/BG.gif" height="15px" width="20px"></a>';
						nowstr = nowstr + '</div>';
						nowstr = nowstr + '<h3></h3>';
	
						
			
					}
                nowstr = nowstr + '</div>';
                 /*nowstr = nowstr + '<div class="col-md-2"><h6><a href="#" onClick=tosavesty2("'+entry1[i]+'","'+NOWID+'")><img src="../images/'+NOWPICSTGR+'.png" height="30px"></a><font size="+1">'+entry4[i]+''+NOWSSTR+'</font></h6></div>';*/
				
                }else{
                    nowstr = nowstr + '<div class=" col-md-2" id="'+entry1[i]+'">';
                        if(entry14[i] == ""){
                        
                        nowstr = nowstr + '<img src="../images/'+NOWPICSTGR+'.png" height="30px" id="img'+entry1[i]+'">';
                        nowstr = nowstr + '<font size="+2"  face="微軟正黑體">'+entry5[i]+'-'+entry6[i]+'-'+entry4[i]+''+NOWSSTR+'';
                        nowstr = nowstr + '</font>';
                        nowstr = nowstr + '<h3></h3>';

                        }else{
                        
                            
                            nowstr = nowstr + '<img src="../images/'+NOWPICSTGR+'.png" height="30px" id=img'+entry1[i]+'>';
                            nowstr = nowstr + '<font style="text-align:left-center"  size="+2"  face="微軟正黑體">'+entry5[i]+'-'+entry6[i]+'-'+entry4[i]+''+NOWSSTR+'</font>';
                            nowstr = nowstr + '<h3></h3>';

                        }
                    nowstr = nowstr + '</div>';

                }
			}
			nowstr = nowstr + '</div>';
				
			$("#studentstr").empty();	
			$("#studentstr").append(nowstr);

						
        },
        error: function(XHR, textStatus, errorThrown){
            //$("#CHKYN").val("N");
            //document.news_post.CHKUSERID.value = "N";
            //$("#showoneitem").append('<font color=#FF0000>連線失敗，請確認,error:'+textStatus+',error:'+errorThrown+'</font>');
            //alert("response:"+ XHR.responseText +" status:" + textStatus + " error:" + errorThrown);
        }
    });
				   
}

function tosavesty(val1,val2) {

	if ($("#STY"+val2+val1).prop("checked") == true) {
	    var nowstr = "Y";
	} else {
	    var nowstr = "";
	}
    $.ajax({
        type: "get",
        async: false,
        url: ''+$("#MAXWEBURL").val()+'/httpprg/dotclasaction.php?fn1=TOSAVE&amid='+val1+'&sty='+val2+'&stystr='+nowstr+'&COLSTR=account&jsoncallback=NOSELID',
        dataType: 'jsonp',//指定以jsonp方式執行
        jsonp: 'jsoncallback',//"mycallback"會以GET的變數名稱傳送，沒指定時，jQuery使用"callback"當變數名稱
        jsonpCallback:'NOSELID',//"mycallback"變數的值，沒指定時，jQuery隨機產生		
        success: function(data){
            var entry3 = "Y";
			var entry4 = data["NOMESSAGE"];
			
			if (entry4 != "") {
				alert(entry4);
			}
						
        },
        error: function(XHR, textStatus, errorThrown){
            //$("#CHKYN").val("N");
            //document.news_post.CHKUSERID.value = "N";
            //$("#showoneitem").append('<font color=#FF0000>連線失敗，請確認,error:'+textStatus+',error:'+errorThrown+'</font>');
            //alert("response:"+ XHR.responseText +" status:" + textStatus + " error:" + errorThrown);
        }
    });
				   
}
function tosavesty2(val1,val12) {

	/*if ($("#STY"+val2+val1).prop("checked") == true) {
	    var nowstr = "Y";
	} else {
	    var nowstr = "";
	}*/
	if(val12=="1"){
		$("#img"+val1).attr("src","http://rollcall.hwsh.tc.edu.tw/images/yell.png");
	}
	if(val12=="2"){
		$("#img"+val1).attr("src","http://rollcall.hwsh.tc.edu.tw/images/suns.png");
	}
	if(val12=="3"){
		$("#img"+val1).attr("src","http://rollcall.hwsh.tc.edu.tw/images/red2.png");
	}
	if(val12=="4"){
		$("#img"+val1).attr("src","http://rollcall.hwsh.tc.edu.tw/images/green.png");
	}
	return true;
	//tosavesty21(val1,val12);
}
function tosavesty21(val1,val12) {	
    $.ajax({
        type: "get",
        async: false,
        url: ''+$("#MAXWEBURL").val()+'/httpprg/dotclasaction.php?fn1=TOSAVE2&amid='+val1+'&nowid='+val12+'&COLSTR=account&jsoncallback=NOSELID',
        dataType: 'jsonp',//指定以jsonp方式執行
        jsonp: 'jsoncallback',//"mycallback"會以GET的變數名稱傳送，沒指定時，jQuery使用"callback"當變數名稱
        jsonpCallback:'NOSELID',//"mycallback"變數的值，沒指定時，jQuery隨機產生		
        success: function(data){
            var entry3 = data["FLAGYN"];
			var entry4 = data["NOMESSAGE"];
			var entry5 = data["NUM1"];
			var entry6 = data["NUM2"];
			var entry7 = data["NUM3"];
			var entry8 = data["NUM4"];
			var entry9 = data["NUM0"];
			
			if (entry4 != "") {
				alert(entry4);
			}
			//togetalldata1();
			$("#shownum2").empty();	
			$("#shownum2").append('<h6><img src="../images/green.png" width="30px"><font size="+1">　出席：'+entry5+'人</font></h6>');
			$("#shownum3").empty();	
			$("#shownum3").append('<h6><img src="../images/yell.png" width="30px"><font size="+1">　遲到：'+entry6+'人</font></h6>');
			$("#shownum4").empty();	
			$("#shownum4").append('<h6><img src="../images/suns.png" width="30px"><font size="+1">　早退：'+entry7+'人</font></h6>');
			$("#shownum5").empty();	
			$("#shownum5").append('<h6><img src="../images/red2.png" width="30px"><font size="+1">　曠課：'+entry8+'人</font></h6>');
			$("#shownum6").empty();	
			$("#shownum6").append('<h6><img src="../images/blue.png" width="30px"><font size="+1">　請假：'+entry9+'人</font></h6>');
			
					
        },
        error: function(XHR, textStatus, errorThrown){
            //$("#CHKYN").val("N");
            //document.news_post.CHKUSERID.value = "N";
            //$("#showoneitem").append('<font color=#FF0000>連線失敗，請確認,error:'+textStatus+',error:'+errorThrown+'</font>');
            //alert("response:"+ XHR.responseText +" status:" + textStatus + " error:" + errorThrown);
        }
    });
				   
}
function togetalldata2() {

    $.ajax({
        type: "get",
        async: false,
        url: ''+$("#MAXWEBURL").val()+'/httpprg/dotclasaction.php?fn1=GETDATA3&COLSTR=account&jsoncallback=NOSELID',
        dataType: 'jsonp',//指定以jsonp方式執行
        jsonp: 'jsoncallback',//"mycallback"會以GET的變數名稱傳送，沒指定時，jQuery使用"callback"當變數名稱
        jsonpCallback:'NOSELID',//"mycallback"變數的值，沒指定時，jQuery隨機產生
        success: function(data){
			var entry1 = data["NOWDETAMEDITS"].split('(AB)'); //唯一值
            var entry2 = data["NOWDETDISNAME"].split('(AB)');//課程名稱
            var entry3 = data["NOWDETSUBNAME"].split('(AB)');//教師姓名
			var entry4 = data["NOWDETFIXNAME"].split('(AB)');//場地
            var entry5 = data["NOWDETTEACHARTIME"].split('(AB)');//點名時間
			//高中
			var entry11 = data["NOWDETHAMEDITS"].split('(AB)'); //唯一值
            var entry12 = data["NOWDETHDISNAME"].split('(AB)');//課程名稱
            var entry13 = data["NOWDETHSUBNAME"].split('(AB)');//教師姓名
			var entry14 = data["NOWDETHFIXNAME"].split('(AB)');//場地
            var entry15 = data["NOWDETHTEACHARTIME"].split('(AB)');//點名時間
			//國中
			var entry21 = data["NOWDETSAMEDITS"].split('(AB)'); //唯一值
            var entry22 = data["NOWDETSDISNAME"].split('(AB)');//課程名稱
            var entry23 = data["NOWDETSSUBNAME"].split('(AB)');//教師姓名
			var entry24 = data["NOWDETSFIXNAME"].split('(AB)');//場地
            var entry25 = data["NOWDETSTEACHARTIME"].split('(AB)');//點名時間
            var entry7 = data["NOWDATE"];
			var nowstr= "";
			var nowstrstr= "";
			$("#shownum6").empty();	
			$("#shownum6").append('<h4>最後更新時間：'+entry7+'</h4>');
			
		  	 nowstr = nowstr + '<div class="row">';

                    nowstr = nowstr + '<div class="col-md-2">';

						for (var i=0 ;i<entry1.length; i++) {
							if (entry4[i].substr(0,1) == "1") {

                        nowstr = nowstr + '<div class="row">';
                            
                            if (entry5[i] != "") {
                            
                            nowstr = nowstr + '<div class="col-md-2"><h6><img src="../images/green.png" width="30p