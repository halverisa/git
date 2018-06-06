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
$(function(){
  $(".btn-reinicio").click(function(){
    $(".btn-reinicio").text("Reiniciar");
    //generar numero aleatorio
    var a=1
    var b=4
    var aleatorio = Math.round(Math.random()*(b-a)+parseInt(a));
    var aleatorio1 = Math.round(Math.random()*(b-a)+parseInt(a));
    var aleatorio2 = Math.round(Math.random()*(b-a)+parseInt(a));
    var aleatorio3 = Math.round(Math.random()*(b-a)+parseInt(a));
    var aleatorio4 = Math.round(Math.random()*(b-a)+parseInt(a));
    // cargar div con imagenes
     //$("[class^='col-']").html("<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+
     $(".col-1").html("<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+
       "<div><img src=image/"+aleatorio1+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio4+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio3+".png id=dulce></img></div>");
       $(".col-2").html("<div><img src=image/"+aleatorio4+".png id=dulce></img></div>"+
         "<div><img src=image/"+aleatorio3+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio1+".png id=dulce></img></div>");
         $(".col-3").html("<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+
           "<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio1+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio3+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio4+".png id=dulce></img></div>");
           $(".col-4").html("<div><img src=image/"+aleatorio1+".png id=dulce></img></div>"+
             "<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio4+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio3 +".png id=dulce></img></div>");
             $(".col-5").html("<div><img src=image/"+aleatorio3+".png id=dulce></img></div>"+
               "<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio1+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio4+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio2 +".png id=dulce></img></div>");
               $(".col-6").html("<div><img src=image/"+aleatorio4+".png id=dulce></img></div>"+
                 "<div><img src=image/"+aleatorio3+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio1+".png id=dulce></img></div>");
                 $(".col-7").html("<div><img src=image/"+aleatorio2+".png id=dulce></img></div>"+
                   "<div><img src=image/"+aleatorio+".png id=dulce></img></div>"+ "<div><img src=image/"+aleatorio1+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio3+".png id=dulce></img></div>"+"<div><img src=image/"+aleatorio4+".png id=dulce></img></div>");
  })
})
