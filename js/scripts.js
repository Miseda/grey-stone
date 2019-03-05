$(document).ready(function() {
  $("button#register").click(function(){
  $(".signup").show();
  $(".intro").hide();
    });
  $("button#apply").click(function(){
    $(".signup").hide();
    $(".intro").show();
  })

$("button#login").click(function(){
  $(".intro").hide();
  $(".homerandom").show();
});
$("button#search").click(function(){
$(".search").show();
});
    });
