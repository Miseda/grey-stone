$(document).ready(function() {
  $("button#register").click(function(){
  $(".signup").show();
  $(".intro").hide();
    });
  $("button#apply").click(function(){
    $(".signup").hide();
    $(".intro").show();
  })
    });
