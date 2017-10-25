$('#myCarousel').carousel({
  interval: 2000
});

$(document).ready(function(){
    $("#wrapper > div").addClass('hidden');
    $("#1").removeClass('hidden');
    $("li:has(#pag1,#pag1_2)").addClass('active');
  });

$("#pag1,#pag1_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:not(:has(#pag1,#pag1_2))").removeClass('active');
  $("li:has(#pag1,#pag1_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});


$("#pag2,#pag2_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#2").removeClass('hidden');
  $("li:not(:has(#pag2,#pag2_2))").removeClass('active');
  $("li:has(#pag2,#pag2_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});


$("#pag3,#pag3_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#3").removeClass('hidden');
  $("li:not(:has(#pag3,#pag3_2))").removeClass('active');
  $("li:has(#pag3,#pag3_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});


$("#pag4,#pag4_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#4").removeClass('hidden');
  $("li:not(:has(#pag4,#pag4_2))").removeClass('active');
  $("li:has(#pag4,#pag4_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});


$("#pag5,#pag5_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#5").removeClass('hidden');
  $("li:not(:has(#pag5,#pag5_2))").removeClass('active');
  $("li:has(#pag5,#pag5_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});

$("#pag6,#pag6_2").click(function(){
  $("#wrapper > div").addClass('hidden');
  $("#6").removeClass('hidden');
  $("li:not(:has(#pag6,#pag6_2))").removeClass('active');
  $("li:has(#pag6,#pag6_2)").addClass('active');

  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
});

$(document).ready(function(){
    $("#wrapper2 > div").addClass('hidden');
    $("#1_2").removeClass('hidden');
    $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');
  });

$("#pag1_2_2,#pag1_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#1_2").removeClass('hidden');
  $("li:not(:has(#pag1_2_2,#pag1_2_2_2))").removeClass('active');
  $("li:has(#pag1_2_2,#pag1_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});


$("#pag2_2_2,#pag2_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#2_2").removeClass('hidden');
  $("li:not(:has(#pag2_2_2,#pag2_2_2_2))").removeClass('active');
  $("li:has(#pag2_2_2,#pag2_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});


$("#pag3_2_2,#pag3_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#3_2").removeClass('hidden');
  $("li:not(:has(#pag3_2_2,#pag3_2_2_2))").removeClass('active');
  $("li:has(#pag3_2_2,#pag3_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});


$("#pag4_2_2,#pag4_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#4_2").removeClass('hidden');
  $("li:not(:has(#pag4_2_2,#pag4_2_2_2))").removeClass('active');
  $("li:has(#pag4_2_2,#pag4_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});


$("#pag5_2_2,#pag5_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#5_2").removeClass('hidden');
  $("li:not(:has(#pag5_2_2,#pag5_2_2_2))").removeClass('active');
  $("li:has(#pag5_2_2,#pag5_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});

$("#pag6_2_2,#pag6_2_2_2").click(function(){
  $("#wrapper2 > div").addClass('hidden');
  $("#6_2").removeClass('hidden');
  $("li:not(:has(#pag6_2_2,#pag6_2_2_2))").removeClass('active');
  $("li:has(#pag6_2_2,#pag6_2_2_2)").addClass('active');

  $("#wrapper > div").addClass('hidden');
  $("#1").removeClass('hidden');
  $("li:has(#pag1,#pag1_2)").addClass('active');
});


$('#myCollapsible').collapse({
  toggle: false
});
