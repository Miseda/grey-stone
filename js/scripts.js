$(document).ready(function() {
  $("button#register").click(function(){
  $(".signup").show();
  $(".intro").hide();
    });
  $("button#appy").click(function(){
    $(".signup").hide();
    $(".intro").show();
  })
    });
