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
//variables globales
var imagenes = ["image/1.png","image/2.png", "image/3.png", "image/4.png"];
var numimagenes = imagenes.length;
var imgpuesta=0;
var dimension=7;
var matriz =[];

$(function(){

//imagenes aleatorias
  function imgaleatoria() {
      imgpuesta = Math.floor((Math.random() * numimagenes));
      return imagenes[imgpuesta];

  }
// funcion crear tablero de imagenes
function tablero(f, c, obj, src)
{
    return {
        f: f,
        c: c,
        fuente: src,
        enCombo: false,
        o: obj
    };
}

 function creartablero() {
     for (var f = 0; f < dimension; f++) {
         matriz[f] = [];
         for (var c = 0; c < dimension; c++) {

             matriz[f][c] = new tablero(f, c, null, imgaleatoria());

             var celda = $('#img_' + f + '_' + c).html("<img class='elemento' src='" + matriz[f][c].fuente + "' alt='" + f + "," + c + "'/>");
             matriz[f][c].o = celda;
         }
     }
 }

 // funcion para boton iniciar
 $(".btn-reinicio").click(btniniciar);
 function btniniciar(){
     $('.btn-reinicio').text('Reiniciar');
     //creardivs();
     creartablero();
     $('.btn-reinicio').click(function(){
       location.reload();
     })
  }



})
