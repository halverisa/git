//funcion para animar texto
var vueltas = function(){
  $(".main-titulo").animate({
   color: "#FFFFFF"
}, 2500,function(){
      $(this).animate({
        color:"#FFE900"},2500)
      });
}
var bucle = function(){
  vueltas();
  setTimeout("bucle();",7000)
}
$(document).ready(function(){
  bucle();
});
