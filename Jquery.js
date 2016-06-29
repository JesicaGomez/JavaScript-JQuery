$(document).ready(function() {
   /*mostrar el color del cubo*/
   $("div").mouseenter(function() {
       $("#color").text($(this).css("background-color"));    
       });
   /*cambiar la clase en el texto*/
   $("#dos").addClass("myclass");
   $("#tres").addClass("highlight");
   /*poner subrayado en el texto al darle click*/
   $(".r").click(function() {
       ($(this).toggleClass("highlight"));
     });
   /*un texto diferente para click y doble click*/
   $("#cuatro").click(function() { 
       $("#text").text("This is a click Event");
   });
   $("#cuatro").dblclick(function() {
       $("#text").text("This is a double-click Event");
   });
   
 });