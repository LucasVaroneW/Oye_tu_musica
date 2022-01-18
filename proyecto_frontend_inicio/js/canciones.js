var canciones;

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

class Cancion{
    constructor(icon, name, path){
        this.name = name;
        this.show = $('<div>', {class: "col-lg-4 col-md-6 col-sm-12 text-white"})
        .append(
            $('<div>', {class: "card bg-secondary"}).css({width: '14rem',  'text-align': 'center', margin: 'auto'})
            .append(
                $('<img>', {src: `./imagenes/icon_${icon}.svg`, class:'card-img-top'}),
                $('<div>', {class: 'card-body'}).append(
                    $('<h5>', {text: name}),
                    $('<audio>', {controls: "", class: 'col-12'}).append(
                        $('<source>', {src: `./canciones/${path}`})
                    )
                )
            )
        )
    }

    mostrar(){
        this.show.css({display: ''})
        return this
    }

    ocultar(){
        this.show.css({display: 'none'})
        return this
    }
}

var arr_canciones = [];

ajax("http://127.0.0.1:5500/datos.json").then(function (resultado) {
    canciones = resultado.canciones;
    var html = $('<div>',{class: "row"});
    for (j in canciones) {
        cancion = new Cancion(canciones[j].icono, canciones[j].nombre, canciones[j].ruta)
        arr_canciones.push(cancion)
        html.append(cancion.show)
    }

    
    $('.canciones').html(html)
})

$('#search').keyup(function(){
    buscar($(this).val())
})

function buscar(str) {
    for (cancion of arr_canciones){
        if (str != ''){
            if (cancion.name.toUpperCase().search(str.toUpperCase()) != -1){
                cancion.mostrar()
            } else {
                cancion.ocultar()
            }
        } else {
            cancion.mostrar()
        }
        
    }
}