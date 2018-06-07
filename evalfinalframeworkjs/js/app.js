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
var puntuacion = [10, 50, 75, 100, 150, 200, 250,300,325,350,375,400,425,450];
var imgpuesta=0;
var movimiento = null;
var dimension=7;
var matriz =[];
var arrastre = null;
var puntos = 0;
var movimientos = 0;
var validezImg = 0;
$(function(){

//imagenes aleatorias
  function imgaleatoria() {
      imgpuesta = Math.floor((Math.random() * numimagenes));
      return imagenes[imgpuesta];

  }
// funcion crear tablero de imagenes
function tablero(f, c, obj, src){
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
 function soltarEvento(event, ui) {
     //var draggable = ui.draggable; // a donde llega el div a mover
     arrastre = event.target.id;
     console.log('DIV Final Drop: "' + arrastre + '"!');
     console.log("DIV Inicio Drop: " + movimiento);

 }
 function actualizarMovimientos() {
     $('#movimientos-text').html(movimientos);
    }
 function eliminacionCorrecta() {
        // Combo Horizontal
        for (var f = 0; f < dimension; f++) {
            var prevCelda = null;
            var figLongitud = 0;
            var figInicio = null;
            var figFin = null;

            for (var c = 0; c < dimension; c++) {

                // Primer celda para el combo
                if (prevCelda === null)
                {
                    //console.log("FirstCell: " + r + "," + c);
                    prevCelda = matriz[f][c].fuente;
                    figInicio = c;
                    figLongitud = 1;
                    figFin = null;
                    continue;
                } else {
                    var curCelda = matriz[f][c].fuente;
                    if (!(prevCelda === curCelda)) {
                        if (figLongitud >= 3)
                        {
                            validezImg += 1;
                            figFin = c - 1;
                            console.log("Combo Horizontal de " + figInicio + " a " + figFin + "!");
                            for (var ci = figInicio; ci <= figFin; ci++)
                            {
                                matriz[f][ci].enCombo = true;
                                matriz[f][ci].fuente = null;
                            }
                            puntos += puntuacion[figLongitud];
                            puntos += puntuacion[validezImg];
                        }
                        prevCelda = matriz[f][c].fuente;
                        figInicio = c;
                        figFin = null;
                        figLongitud = 1;
                        continue;
                    } else {
                        figLongitud += 1;
                        if (c === (dimension - 1)) {
                            if (figLongitud >= 3)
                            {
                                validezImg += 1;
                                figFin = c;
                                console.log("Combo Horizontal de " + figInicio + " a " + figFin + "!");
                                for (var ci = figInicio; ci <= figFin; ci++)
                                {
                                    matriz[f][ci].enCombo = true;
                                    matriz[f][ci].fuente = null;
                                }
                                puntos += puntuacion[figLongitud];
                                puntos += puntuacion[validezImg];
                                prevCelda = null;
                                figInicio = null;
                                figFin = null;
                                figLongitud = 1;
                                continue;
                            }
                        } else {
                            prevCelda = matriz[f][c].fuente;
                            figFin = null;
                            continue;
                        }
                    }
                }
            }
        }

        // Combo Vertical
        for (var c = 0; c < dimension; c++)  {
            var prevCelda = null;
            var figLongitud = 0;
            var figInicio = null;
            var figFin = null;

            for (var f = 0; f < dimension; f++)
            {
                if (matriz[f][c].enCombo)
                {
                    figInicio = null;
                    figFin = null;
                    prevCelda = null;
                    figLongitud = 1;
                    continue;
                }
                if (prevCelda === null)
                {
                    prevCelda = matriz[f][c].fuente;
                    figInicio = f;
                    figLongitud = 1;
                    figFin = null;
                    continue;
                } else
                {
                    var curCell = matriz[f][c].fuente;
                    if (!(prevCelda === curCell))
                    {
                        if (figLongitud >= 3)
                        {
                            validezImg += 1;
                            figFin = f - 1;
                            console.log("Combo vertical de " + figInicio + " a " + figFin + "!");
                            for (var ci = figInicio; ci <= figFin; ci++)
                            {
                                matriz[ci][c].enCombo = true;
                                matriz[ci][c].fuente = null;
                            }
                            puntos += puntuacion[figLongitud];
                            puntos += puntuacion[validezImg];
                        }
                        prevCelda = matriz[f][c].fuente;
                        figInicio = f;
                        figFin = null;
                        figLongitud = 1;
                        continue;
                    } else
                    {
                        figLongitud += 1;
                        if (f === (dimension - 1)) {
                            if (figLongitud >= 3)
                            {
                                validezImg += 1;
                                figFin = f;
                                console.log("Combo vertical de " + figInicio + " a " + figFin + "!");
                                for (var ci = figInicio; ci <= figFin; ci++)
                                {
                                    matriz[ci][c].enCombo = true;
                                    matriz[ci][c].fuente = null;
                                }
                                puntos += puntuacion[figLongitud];
                                puntos += puntuacion[validezImg];
                                prevCelda = null;
                                figInicio = null;
                                figFin = null;
                                figLongitud = 1;
                                continue;
                            }
                        } else {
                            prevCelda = matriz[f][c].fuente;
                            figFin = null;
                            continue;
                        }
                    }
                }

            }
        }

        var esCombo = false;
        for (var f = 0; f < dimension; f++) {
            for (var c = 0; c < dimension; c++)
                if (matriz[f][c].enCombo)
                {
                    console.log("Combo para eliminar: " + f + ',' + c);
                    esCombo = true;
                }
        }

        if (esCombo){
            eliminarImagenes();
        }
        else {
            console.log("NO COMBO");
        }
        mostrarImagenes();
    }

  function eliminarImagenes() {
        for (var f = 0; f < dimension; f++){
            for (var c = 0; c < dimension; c++){
                if (matriz[f][c].enCombo)  // Celda vacia
                {
                    matriz[f][c].o.animate({
                        opacity: 0
                    }, 700);
                }
            }
        }
        actualizarPuntos();

        $(":animated").promise().done(function () {
            eliminarMemoriaCache();
         });

        console.log("finaliza aqui en eliminarImagenes");
    }

  function actualizarPuntos() {
        $('#score-text').html(puntos);
    }

  function eliminarMemoriaCache() {
        // mueve las celdas vacias hacia arriba.
        for (var f = 0; f < dimension; f++)
        {
            for (var c = 0; c < dimension; c++)
            {

                if (matriz[f][c].enCombo)  // Pregunta si la celda esta vacia
                {
                    matriz[f][c].o.html("");

                    matriz[f][c].enCombo = false;

                    for (var sr = f; sr >= 0; sr--)
                    {
                        if (sr === 0)
                            break; // no cambia porque es la primer fila

                        // cambio de las celdas
                        var tmp = matriz[sr][c].fuente;
                        matriz[sr][c].fuente = matriz[sr - 1][c].fuente;
                        matriz[sr - 1][c].fuente = tmp;
                    }

                }

            }

        }

        console.log("Fin de movimiento");

        //redibujando la grilla
        //y configurando el respawn

        //Reseteando las celdas
        for (var f = 0; f < dimension; f++)
        {
            for (var c = 0; c < dimension; c++)
            {
                matriz[f][c].o.html("<img class='elemento' src='" + matriz[f][c].fuente + "' alt='" + f + "," + c + "'/>");
                matriz[f][c].o.css("opacity", 1);
                matriz[f][c].enCombo = false;
                if (matriz[f][c].fuente === null)
                    matriz[f][c].respawn = true;

                if (matriz[f][c].respawn === true)
                {

                    matriz[f][c].o.off("arrastrarComienzo");
                    matriz[f][c].o.off("soltarEvento");
                    matriz[f][c].o.off("handleDragStop");


                    matriz[f][c].respawn = false; // respawned!
                    console.log("Respawning " + f + "," + c);
                    matriz[f][c].fuente = imgaleatoria();

                    matriz[f][c].o.html("<img class='elemento' src='" + matriz[f][c].fuente + "' alt='" + f + "," + c + "'/>");


                    matriz[f][c].o.draggable(
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
                    matriz[f][c].o.droppable(
                            {
                                drop: soltarEvento
                            });
                }else{
                     matriz[f][c].o.css("opacity", 1);
                }

            }
        }

        console.log("Combo reseteados y recreados.");
        // Verifica si existen otros combos
        mostrarImagenes();
        eliminacionCorrecta();
        console.log("finaliza aqui en eliminarMemoriaCache");
        mostrarImagenes();
    }

  function mostrarImagenes(){
          for (var f = 0; f < dimension; f++){
                for (var c = 0; c < dimension; c++){
                    if (matriz[f][c].o.css("opacity")===0)
                        console.log("Imagen invisible: " + f+','+c);
                    matriz[f][c].o.css("opacity", 1);
                }
            }
    }

 // funcion para boton iniciar
 $(".btn-reinicio").click(btniniciar);
 function btniniciar(){
     $('.btn-reinicio').text('Reiniciar');
     //creardivs();
     creartablero();
     activarMovimientos();
     eliminacionCorrecta();
     $('.btn-reinicio').click(function(){
       location.reload();
     })
  }



})
