$(".contact-link").click(function(){$( ".contact" ).show();});

$("#home").click(function(){$( ".contact" ).hide();});

$(document).mousemove(function(e){$(".hover").css({left:e.pageX, top:e.pageY});});

/* VIDEO*/
$(document).delegate('.playbutton',"click",function () {
        $('#vid')[0].play();
});

$(document).delegate('.vidbutton',"click",function () {
        $('#vid')[0].pause();
});

$(document).delegate('.playbutton-mobile',"click",function () {
        $('#vidMobile')[0].play();
});

$(document).delegate('.vidbutton-mobile',"click",function () {
        $('#vidMobile')[0].pause();
});

$(".playbutton, .playbutton-mobile").click(function(){
  $( ".playbutton, .playbutton-mobile" ).hide();
});

$(".vidbutton").click(function(){
  $( ".vidbutton" ).hide();
  $( "#vid" ).hide();
  $( ".text" ).show();
});

$(".vidbutton-mobile").click(function(){
  $( ".vidbutton-mobile, #vidMobile" ).hide();
  $( ".mobile" ).show();
});

$("#replay").click(function(){
  $( ".vidbutton" ).show();
  $('#vid').show();
  $('#vid')[0].currentTime = 0;
  $('#vid')[0].play();
  $( ".text" ).hide(0);
});


/*TYPE*/
var tT = 1;
$( ".typelink" ).click(function() {
  if (tT == 1) {
    $('.typeimg').attr('src', 'img/type2.png'); tT = tT+1;
  } else if (tT == 2) {
    $('.typeimg').attr('src', 'img/type3.gif'); tT = tT+1;
  } else if (tT == 3) {
    $('.typeimg').attr('src', 'img/type4.gif'); tT = tT+1;
  } else if (tT == 4) {
    $('.typeimg').attr('src', 'img/type5.png'); tT = tT+1;
  } else {
    $('.typeimg').attr('src', 'img/type1.png'); tT = 1;
}
});

/*STOIC*/
var tS = 1;
$( ".stoiclink" ).click(function() {
  if (tS== 1) {
    $('.stoicimg').attr('src', 'img/stoic2.png').css('width', '500'); tS= tS+1;
  } else if (tS== 2) {
    $('.stoicimg').attr('src', 'img/stoic3.png'); tS= tS+1;
  } else if (tS== 3) {
    $('.stoicimg').attr('src', 'img/stoic4.png'); tS= tS+1;
  } else if (tS== 4) {
    $('.stoicimg').attr('src', 'img/stoic5.png'); tS= tS+1;
  } else if (tS== 5) {
    $('.stoicimg').attr('src', 'img/stoic6.png').css('width', '250'); tS= tS+1;
  } else {
    $('.stoicimg').attr('src', 'img/stoic1.png'); tS= 1;
}
});

/*BLOD*/
var tBl = 1;
$( ".blodlink" ).click(function() {
  if (tBl == 1) {
    $('.blodimg').attr('src', 'img/blod2.png'); tBl = tBl+1;
  } else if (tBl == 2) {
    $('.blodimg').attr('src', 'img/blod3.png'); tBl = tBl+1;
  } else if (tBl == 3) {
    $('.blodimg').attr('src', 'img/blod4.png'); tBl = tBl+1;
  } else if (tBl == 4) {
    $('.blodimg').attr('src', 'img/blod5.png'); tBl = tBl+1;
  } else {
    $('.blodimg').attr('src', 'img/blod1.png'); tBl = 1;
}
});

/* BLANK */
var tB = 1;
$( ".blanklink" ).click(function() {
  if (tB == 1) {
    $('.blankimg').attr('src', 'img/blank2.png'); tB = tB+1;
  } else {
    $('.blankimg').attr('src', 'img/blank1.gif'); tB = 1;
}
});
