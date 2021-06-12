$(document).ready(function () {
    // hace un fade in 
    $("body").hide().fadeIn(500);

});

document.getElementById("enviarTorneo").addEventListener("submit", function (e) {
    e.preventDefault();
    //alertify
    var nombre = document.getElementById("nameT").value;
    alertify.alert()
        .setting({
            'label': 'CERRAR',
            'message': `Felicitaciones <b>${nombre}</b> ya estas inscripto en el torneo`

        }).show();

    document.getElementById('enviarTorneo').reset();
    return
});

document.getElementById("contact").addEventListener("submit", function (e) {
    e.preventDefault();

    //alertify
    var nombre = document.getElementById("nameF").value;
    alertify.alert().setting({
        'label': 'CERRAR',
        'message': `Gracias <b>${nombre}</b>, en breve nos estaremos comunicando contigo`

    }).show();

    document.getElementById('contact').reset();
    return
});


var b = document.querySelectorAll("input");

for (let index = 0; index < b.length; index++) {

    b[index].addEventListener("click", cambiar, false);
}



function cambiar(e) {
    if (e.target == boton1) {

        var nombre = document.getElementById("1").innerText
        alertify.confirm(`Deseas comprar  <b>${nombre}</b>, te costara $50 dolares`, 'CONFIRMAR COMPRA', function () { alertify.success('Has comprado!') }
            , function () { alertify.error('Compra cancelada') });

    } else if (e.target == boton2) {

        var nombre = document.getElementById("2").innerText
        alertify.confirm(`Deseas comprar  <b>${nombre}</b>, te costara $50 dolares`, 'CONFIRMAR COMPRA', function () { alertify.success('Has comprado!') }
            , function () { alertify.error('Compra cancelada') });

    } else if (e.target == boton3) {

        var nombre = document.getElementById("3").innerText
        alertify.confirm(`Deseas comprar  <b>${nombre}</b>, te costara $50 dolares`, 'CONFIRMAR COMPRA', function () { alertify.success('Has comprado!') }
            , function () { alertify.error('Compra cancelada') });
    } else if (e.target == boton4) {

        var nombre = document.getElementById("4").innerText
        alertify.confirm(`Deseas comprar  <b>${nombre}</b>, te costara $50 dolares`, 'CONFIRMAR COMPRA', function () { alertify.success('Has comprado!') }
            , function () { alertify.error('Compra cancelada') });
    } else if (e.target == boton5) {

        var nombre = document.getElementById("5").innerText
        alertify.confirm(`Deseas comprar  <b>${nombre}</b>, te costara $50 dolares`, 'CONFIRMAR COMPRA', function () { alertify.success('Has comprado!') }
            , function () { alertify.error('Compra cancelada') });
    }


}