$(document).ready(function() {
   $("div").mouseenter(function() {
       $("#color").text($(this).css("background-color"));    
       });
 });