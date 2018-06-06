//funcion para animar texto
var vueltas = function(){
  $(".main-titulo").animate({
   color: "#FFFFFF"
}, 1500,function(){
      $(this).animate({
        color:"#FFE900"},1500)
      });
}
var bucle = function(){
  vueltas();
  setTimeout("bucle();",2000)
}
$(document).ready(function(){
  bucle();

});

//funcion para cambiar texto boton iniciar
/*$(function(){
  $(".btn-reinicio").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    $(".btn-reinicio").click(function(){
      location.reload();
    });
    //generar numero aleatorio
    var aleatorio = Math.floor(Math.random()*4)+1;
    var aleatorio1 = Math.floor(Math.random()*4)+1;
    var aleatorio2 = Math.floor(Math.random()*4)+1;
    var aleatorio3 = Math.floor(Math.random()*4)+1;
    var aleatorio4 = Math.floor(Math.random()*4)+1;
    $(".cuadro, .elemento, .panel-tablero").draggable({
      grid: [120,90],
      revert: "valid"
    });
    // cargar div con imagenes
     $(".col-1, .col-4, .col-7").html("<div class= 'cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>"+"<div class= 'cuadro'><img src=image/"+aleatorio1+".png class='elemento' class=dulce></img></div>"+ "<div class='cuadro'><img src=image/"+aleatorio2+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio4+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio1+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio4+".png class='elemento'></img></div>");
    //$(".col-2, .col-5").html("<div class='cuadro'><img src=image/"+aleatorio4+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio3+".png class='elemento'></img></div>"+ "<div class='cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio2+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio1+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio4+".png class='elemento'></img></div>");
    // $(".col-3, .col-6").html("<div><img src=image/"+aleatorio2+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>"+ "<div class='cuadro'><img src=image/"+aleatorio1+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio3+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio4+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio2+".png class='elemento'></img></div>"+"<div class='cuadro'><img src=image/"+aleatorio+".png class='elemento'></img></div>");

  })
})*/
