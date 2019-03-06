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
});
$("button#search").click(function(){
$(".search").show();
});
$("#enter-login").click(function(){
  $(".intro").show();
});
    });
