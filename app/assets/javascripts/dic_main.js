// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};
// bind filter button click
$('.filters-button-group').onclick('button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});



////////////////////////////////////////////////////////////

function viewPathA1(){
	alert("AUTO > Door 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Door</font>";
	document.getElementById("a2").style.display = "none";
	document.getElementById("a3").style.display = "none";
	document.getElementById("a4").style.display = "none";
	setTimeout(function () {
		$('#auto').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 600);
	document.getElementById("a1").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathA2(){
	alert("AUTO > Valve 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Valve</font>";
	document.getElementById("a1").style.display = "none";
	document.getElementById("a3").style.display = "none";
	document.getElementById("a4").style.display = "none";
	setTimeout(function () {
		$('#auto').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 850);
	document.getElementById("a2").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathA3(){
	alert("AUTO > Egress 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Egress</font>";
	document.getElementById("a1").style.display = "none"
	document.getElementById("a2").style.display = "none"
	document.getElementById("a4").style.display = "none"
	setTimeout(function () {
		$('#auto').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 1000);
	document.getElementById("a3").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathA4(){
	alert("AUTO > Mission4 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>AUTO&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Mission4</font>";
	document.getElementById("a1").style.display = "none";
	document.getElementById("a2").style.display = "none";
	document.getElementById("a3").style.display = "none";
	setTimeout(function () {
		$('#auto').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 850);
	document.getElementById("a4").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathE1(){
	alert("EVENT > Handclap 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handclap</font>";
	document.getElementById("e2").style.display = "none"
	document.getElementById("e3").style.display = "none"
	document.getElementById("e4").style.display = "none"
	setTimeout(function () {
		$('#event').trigger('click');
	}, 100);
	setTimeout(function () {
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE1' data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='ReadyE1()'><p class='symbol01' style='margin-top:40px;'>Ready</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE1'    data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='DoE1()'><p class='symbol01' style='margin-top:40px;'>Do</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='EndE1'   data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='EndE1()'><p class='symbol01' style='margin-top:40px;'>End</p></div>";
	divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:5px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 600);
	document.getElementById("e1").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathE2(){
	alert("EVENT > Handshake 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handshake</font>";
	document.getElementById("e1").style.display = "none"
	document.getElementById("e3").style.display = "none"
	document.getElementById("e4").style.display = "none"
	setTimeout(function () {
		$('#event').trigger('click');
	}, 100);
	setTimeout(function () {
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE2' data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='ReadyE2()'><p class='symbol01' style='margin-top:40px;'>Ready</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE2'    data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='DoE2()'><p class='symbol01' style='margin-top:40px;'>Do</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='EndE2'   data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='EndE2()'><p class='symbol01' style='margin-top:40px;'>End</p></div>";
	divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:5px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 850);
	document.getElementById("e2").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathE3(){
	alert("EVENT > Hello 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Hello</font>";
	document.getElementById("e1").remove()
	document.getElementById("e2").remove()
	document.getElementById("e4").style.display = "none"
//	document.getElementById("e1").style.display = "none"
//	document.getElementById("e2").style.display = "none"
	setTimeout(function () {
		$('#event').trigger('click');
	}, 100);
	setTimeout(function () {
	divControl01.innerHTML += "<span class='custom-dropdown big'><select id='CntE3' style='width: 100px;height: 100px;' onClick='OptionCheck()'><option value='1'>1&nbsp;</option><option value='2'>2&nbsp;</option><option value='3'>3&nbsp;</option><option value='4'>4&nbsp;</option><option value='5'>5&nbsp;</option><option value='6'>6&nbsp;</option><option value='7'>7&nbsp;</option><option value='8'>8&nbsp;</option><option value='9'>9&nbsp;</option></select></span>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE3' data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='ReadyE3()'><p class='symbol01' style='margin-top:40px;'>Ready</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE3'    data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='DoE3()'><p class='symbol01' style='margin-top:40px;'>Do</p></div>";
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='EndE3'   data-category='transition' style='cursor:pointer; margin-top:10px;' onClick='EndE3()'><p class='symbol01' style='margin-top:40px;'>End</p></div>";
	divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:5px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 1000);
	document.getElementById("e3").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathE4(){
	alert("EVENT > Introduce 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Introduce</font>";
	document.getElementById("e1").style.display = "none"
	document.getElementById("e2").style.display = "none"
	document.getElementById("e3").style.display = "none"
	setTimeout(function () {
		$('#event').trigger('click');
	}, 100);
	setTimeout(function () {
//	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='ReadyE2' data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='ReadyE4()'><p class='symbol01' style='margin-top:40px;'>Ready</p></div>"
//	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='DoE2'    data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='DoE4()'><p class='symbol01' style='margin-top:40px;'>Do</p></div>"
	divControl01.innerHTML += "<div class='element-item transition01 ㄴ'  id='EndE2'   data-category='transition' style='cursor:pointer; margin-top:115px;' onClick='EndE4()'><p class='symbol01' style='margin-top:40px;'>End</p></div>";
	divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:115px; width:205px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 850);
	document.getElementById("e4").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathM1(){
	alert("MANUAL > Joint Control 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Joint Control</font>";
	document.getElementById("m2").style.display = "none"
	document.getElementById("m3").style.display = "none"	
	setTimeout(function () {
		$('#manual').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 700);
	document.getElementById("m1").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathM2(){
	alert("MANUAL > Task Control 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Task Control</font>";
	document.getElementById("m1").style.display = "none"
	document.getElementById("m3").style.display = "none"
	setTimeout(function () {
		$('#manual').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 850);
	document.getElementById("m2").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function viewPathM3(){
	alert("MANUAL > Recog 실행합니다.")
	var divPath = document.getElementById("path");
	var divControl01 = document.getElementById("test01");
	divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>MANUAL&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Recog</font>";
	document.getElementById("m1").style.display = "none"
	document.getElementById("m2").style.display = "none"
	setTimeout(function () {
		$('#manual').trigger('click');
	}, 50);
	setTimeout(function () {
		divControl01.innerHTML += "<div class='element-item transition02 ㄴ'  data-category='transition' style='cursor:pointer; margin-top:113px; width:320px;' onClick='ModeChange()'><p class='symbol01' style='margin-top:40px;'>Mode change</p></div>";
	}, 1000);
	document.getElementById("m3").style.pointerEvents = 'none';
	document.getElementById("all").style.pointerEvents = 'none';
	document.getElementById("auto").style.pointerEvents = 'none';
	document.getElementById("event").style.pointerEvents = 'none';
	document.getElementById("manual").style.pointerEvents = 'none';
}

function ReadyE1(){
	var check = confirm("Event > Handclap > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Ready</font>";
	}
}
function DoE1(){
	var check = confirm("Event > Handclap > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Do</font>";
	}
}
function EndE1(){
	var check = confirm("Event > Handclap > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handclap&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>End</font>";
	}
}

function ReadyE2(){
	var check = confirm("Event > Handshake > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Ready</font>";
	}
}
function DoE2(){
	var check = confirm("Event > Handshake > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Do</font>";
	}
}
function EndE2(){
	var check = confirm("Event > Handshake > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Handshake&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>End</font>";
	}
}

function ReadyE3(){
	var check = confirm("Event > Hello > Ready 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Ready</font>";
	}
}
function DoE3(){
	var check = confirm("Event > Hello > Do 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Do</font>";
	}
}
function EndE3(){
	var check = confirm("Event > Hello > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Hello&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>End</font>";
	}
}

function EndE4(){
	var check = confirm("Event > Introduce > End 실행합니다.");
	if(check == true){
		var divPath = document.getElementById("path");
		divPath.innerHTML = "<font color='red' size=4 style='margin-left:30px;'>EVENT&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>Introduce&nbsp;&nbsp;></font>&nbsp;&nbsp;<font color='black' size=4>End</font>";
	}
}

function ModeChange(){
	var check = confirm("Mode를 초기화합니다.");
	if(check == true){
		location.href = "/home/dic_main";
	}
}

function OptionCheck(){
	var flag = 1;
	$('#CntE3').on('change', function() {
		var str = this.value + " 회 설정합니다."
		if(flag == 1){
			alert( str );
		}
		else{
			return;
		}
		flag += 1;
	})
}