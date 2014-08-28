var mini = "";
for ( var i = 0; i < 60; i++) {
	var a = i + 1;
	if (a == 60) {
		a = 0;
	}
	mini += "<input type='checkbox' value='" + a
			+ "' name='minchk' disabled='disabled'><span>" + a + "</span>";
	if (a != 0 && a % 10 == 0) {
		mini += "<br>";
	}
}
$("#minPanel").html(mini);

var day = "";
for ( var i = 0; i < 31; i++) {
	var a = i + 1;
	day += "<input type='checkbox' value='" + a
			+ "' name='daychk' disabled='disabled'><span>" + a + "</span>";
	if (a != 0 && a % 10 == 0) {
		day += "<br>";
	}
}
$("#dayPanel").html(day);

var mon = "";
for ( var i = 0; i < 12; i++) {
	var a = i + 1;
	mon += "<input type='checkbox' value='" + a
			+ "' name='monchk' disabled='disabled'><span>" + a + "</span>";
	if (a != 0 && a % 10 == 0) {
		mon += "<br>";
	}
}
$("#monPanel").html(mon);

var week = "";
for ( var i = 0; i < 7; i++) {
	var a = i + 1;
	week += "<input type='checkbox' value='" + a
			+ "' name='weekchk' disabled='disabled'><span>" + a + "</span>";
}
$("#weekPanel").html(week);

var hour = "AM:";
for ( var i = 0; i < 24; i++) {
	var a = i + 1;
	if (a == 24)
		a = 0;
	hour += "<input type='checkbox' value='" + a
			+ "' name='hourchk' disabled='disabled'><span>" + a + "</span>";
	if (a != 0 && a % 12 == 0 && a != 24) {
		hour += "<br>PM:";
	}
}
$("#hourPanel").html(hour);

function getMin() {
	var minR = $("input[name='rMin']:checked").val();
	if (minR == 'c') {
		var cks = $("input[name='minchk']:checked");
		if (cks.length == 1) {
			return cks[0].value;
		} else {
			var vs = "";
			for ( var i = 0; i < cks.length; i++) {
				vs += cks[i].value;
				if (i < cks.length - 1) {
					vs += ","
				}
			}
			return vs;
		}
	} else {
		return $("#minStart").val() + "/" + $("#minEnd").val();
	}
}

function getHour() {
	var HourR = $("input[name='rHour']:checked").val();
	if (HourR == 'c') {
		var cks = $("input[name='hourchk']:checked");
		if (cks.length == 1) {
			return cks[0].value;
		} else {
			var vs = "";
			for ( var i = 0; i < cks.length; i++) {
				vs += cks[i].value;
				if (i < cks.length - 1) {
					vs += ","
				}
			}
			return vs;
		}
	}
	return "*";
}

function getWeek() {
	var WeekR = $("input[name='rWeek']:checked").val();
	if (WeekR == 'c') {
		return $("input[name='weekchk']:checked").val();
	}
	return "?";
}

function getDay1(){
	var DayR = 	$("input[name='rDay']:checked").val();
	if(DayR == 'c'){
		return $("input[name='daychk']:checked").val();
	}
	return "*";
}

function getMon(){
	var MonR = 	$("input[name='rMon']:checked").val();
	if(MonR == 'c'){
		return $("input[name='monchk']:checked").val();
	}
	return "*";
}

function initChecks(){
	$("input[name='rMin']").click(function(){						  
		var v = $(this).val();
		if("c"==v){
				$("input[name='minchk']").removeAttr("disabled");
		}else{
			$("input[name='minchk']").attr("disabled","disabled");
		}
	});	 
	$("input[name='rHour']").click(function(){						  
		var v = $(this).val();
		if("c"==v){
				$("input[name='hourchk']").removeAttr("disabled");
		}else{
			$("input[name='hourchk']").attr("disabled","disabled");
		}
	});	
	$("input[name='rDay']").click(function(){						  
		var v = $(this).val();
		if("c"==v){
				$("input[name='daychk']").removeAttr("disabled");
		}else{
			$("input[name='daychk']").attr("disabled","disabled");
		}
	});	
	$("input[name='rMon']").click(function(){						  
		var v = $(this).val();
		if("c"==v){
				$("input[name='monchk']").removeAttr("disabled");
		}else{
			$("input[name='monchk']").attr("disabled","disabled");
		}
	});	
	$("input[name='rWeek']").click(function(){						  
		var v = $(this).val();
		if("c"==v){
				$("input[name='weekchk']").removeAttr("disabled");
		}else{
			$("input[name='weekchk']").attr("disabled","disabled");
		}
	});	
}
function fanMin(txt){
	$("#exMin").val(txt);
	if(txt.indexOf('/')!=-1){
		var ts = txt.split("/");
		$("#minStart").val(ts[0]);
		$("#minEnd").val(ts[1]);
	}else{
		var mincks = $("input[name='minchk']");
		var mins = txt.split(",");
		for(var i=0;i<mins.length;i++){
			mincks[i+1].checked = "checked";
		}
		for(var i=0;i<mincks.length;i++){
			mincks[i].disabled = null;
		}
	}
}

function fanHour(txt){
	$("#exHour").val(txt);
	if(txt=="*"){
		$("#hourId").attr("checked","checked");
	}else{
		$("#hourId2").attr("checked","checked");
		$("input[name='hourchk']").each(function(){
				if($(this).val()==txt){
					$(this)	.attr("checked","checked");
				}	
				$(this).removeAttr("disabled");
		})
	}
}

function fanObj(txt,idTxt,exSuf){
	$("#ex"+exSuf).val(txt);
	if(txt=="*"){
		$("#"+idTxt+"Id").attr("checked","checked");
	}else{
		$("#"+idTxt+"Id2").attr("checked","checked");
		$("input[name='"+idTxt+"chk']").each(function(){
				if($(this).val()==txt){
					$(this)	.attr("checked","checked");
				}	
				$(this).removeAttr("disabled");
		})
	}
}

function fan(txt){
	var regs = txt.split(' ');
	$("#exSec").val(regs[0]);
	fanMin(regs[1]);
	fanHour(regs[2]);
	fanObj(regs[3],"day","Day");
	fanObj(regs[4],"mon","Mon");
	fanObj(regs[5],"week","Week");
}

function changeByEx(){
	var html = "";
	var exLen = $("input[id^='ex']").size();
	$("input[id^='ex']").each(function(i){
		html+=$(this).val();	
		if(i<exLen-1){
			html+=" ";
		}
	})
	$("#txtCron").val(html);
}
							
$(function(){
	 initChecks(); 
		   
	$("#btnGen").click(function(){
		$("#copysuccess").text("");
		$("#exSec").val(0);
		var mini = getMin();
		$("#exMin").val(mini);
		var hour = getHour();
		$("#exHour").val(hour);
		var day = getDay1();
		$("#exDay").val(day);
		var mon = getMon();
		$("#exMon").val(mon);
		var week = getWeek();
		$("#exWeek").val(week);
		var str = "0 "+mini+" "+hour+" "+day+" "+mon+" "+week;
		$("#txtCron").val(str);
	});
	
	$("input[id^='ex']").keyup(function(){
		changeByEx();									
	})
	
	$("#btnFan").click(function(){
		var txt = $("#txtCron").val();
		fan(txt);
	});
	
});


	