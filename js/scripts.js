$(document).ready(function() {
  $("button#register").click(function(){
  $(".signup").show();
  $(".intro").hide();
  $(".pic").hide();
    });
  $("button#apply").click(function(){
    $(".signup").hide();
    $(".intro").show();
    $(".pic").show();
  })

$("button#login").click(function(){
  $(".intro").hide();
  $(".homerandom").show();
  $(".pic").hide();
  $("#enter-login").hide();
  $("#leave-login").show();
});
$("button#search").click(function(){
$(".search").show();
});
$("#enter-login").click(function(){
  $(".intro").show();
});
$("#home1").click(function(){
  $(".pic").show();
  $(".homerandom").hide();
  $("#return").show();
});
$("#leave-login").click(function(){
  $(".pic").show();
  $("#leave-login").hide();
  $(".homerandom").hide();
  $("#enter-login").show();
});

$("button#return").click(function(){
  $(".homerandom").show();
  $(".pic").hide();
});

    });
