var canciones;
var max_reproduciones = [];
var aux_reproducciones = [];

function ajax(url) {
    return $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (data) {
            return data
        }
    })
}

ajax("http://127.0.0.1:5500/datos.json").then(function (resultado) {
    canciones = resultado.canciones;
    for(var i = 0; i < canciones.length; i++){
        aux_reproducciones[i] = canciones[i].reproducciones;
        max_reproduciones = aux_reproducciones.sort(function (a, b) { return b - a; }).slice(0, 3);
        }
    var html = "";
    console.log(aux_reproducciones)
    for (var index in canciones) {
      if (canciones[index].reproducciones == max_reproduciones[0] 
        || canciones[index].reproducciones == max_reproduciones[1] 
        || canciones[index].reproducciones == max_reproduciones[2]) {
        html += `
        <div class="row">
        <div class="col d-none d-sm-block text-white">
          <p class="">${canciones[index].nombre}</p>
        </div>
        <div class="col">
        <audio controls class="col-12 mx-auto text-center">
        <source src="./canciones/${canciones[index].ruta}" type="audio/mp3" id="" >
            Tu navegador no soporta audio HTML5.
        </audio>
        </div>
        </div>
        <hr>
        `;

      }
      document.getElementById("contenedor_canciones").innerHTML = html;
    };
})



