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
var movimiento = null;
var dimension=7;
var matriz =[];
var arrastre = null;
var puntos = 0,
var movimientos = 0,
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
//funcion para llenado del tablero con imagenes
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
// activar el drag y drop
 function activarMovimientos(){
     for (var f = 0; f < dimension; f++) {
          for (var c = 0; c < dimension; c++) {
              var celda = $('#img_' + f + '_' + c);
               celda.draggable(
                     {
                         containment: '.panel-tablero',
                         cursor: 'move',
                         zIndex: 100,
                         opacity: 0.85,
                         snap: '.panel-tablero',
                         stack: '.panel-tablero',
                         revert: true,
                         start: arrastrarComienzo,
                         stop: DragStop
                     });
             celda.droppable(
                     {
                         drop: soltarEvento
                     });
          }
     }
 }

 function arrastrarComienzo(event, ui) {
     movimiento = event.target.id;
     console.log("Div Inicio Start :" + movimiento);
 }

 function DragStop(event, ui) {

     console.log('DIV Final: "' + arrastre);
     console.log("DIV Inicial: " + movimiento);

     var src = movimiento.split("_");

     var sf = src[1];
     var sc = src[2];

     var dst = arrastre.split("_");

     var df = dst[1];
     var dc = dst[2];

     var ddx = Math.abs(parseInt(sf) - parseInt(df));
     var ddy = Math.abs(parseInt(sc) - parseInt(dc));

     if (ddx > 1 || ddy > 1)
     {
         console.log("Distancia invalida > 1");
         return;
     }

     if (sf !== df && sc !== dc) {
         console.log("Movimiento invalido...");
         return;
     }

     console.log("swap " + sf + "," + sc + " to " + df + "," + dc);

     var tmp = matriz[sf][sc].fuente;
     matriz[sf][sc].fuente = matriz[df][dc].fuente;
     matriz[sf][sc].o.html("<img class='elemento'src='" + matriz[sf][sc].fuente + "' alt='" + sf + "," + sc + "'/>");
     matriz[df][dc].fuente = tmp;
     matriz[df][dc].o.html("<img class='elemento'src='" + tmp + "' alt='" + df + "," + dc + "'/>");

     movimientos += 1;
     movimiento = null;
     arrastre = null;
     actualizarMovimientos();
     validezImg = 0;
     eliminacionCorrecta();
 }
 function actualizarMovimientos() {
     $('#movimientos-text').html(movimientos);




 function soltarEvento(event, ui) {
     //var draggable = ui.draggable; // a donde llega el div a mover
     arrastre = event.target.id;
     console.log('DIV Final Drop: "' + arrastre + '"!');
     console.log("DIV Inicio Drop: " + movimiento);

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
