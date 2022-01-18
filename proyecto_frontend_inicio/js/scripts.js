	
	$('.formulario__btn').click(function(e){
		e.preventDefault();
	
		$('input, select').each(function(){
			$('#errorCorreo').text('')
			$('#errorPassword').text('')
			$('#errorConfirmacion').text('')
			$('#errorGenero').text('')
			$('#errorEdad').text('')
			$('#errorTerminos').text('')
			
			// --------------------------Correo electrónico--------------------------
				var VAL = $('#correo').val();
				var email = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

				if(!email.test(VAL)){
					$('#errorCorreo').text('El correo electrónico debe tener formato de correo conteniendo un @ y un dominio.')
				}
				
			

			// --------------------------Contraseña--------------------------
				var pass = $('#password').val();
		
				if(pass.length < 8){
					$('#errorPassword').text('La contraseña debe tener más de 8 caracteres.')
				};
				if(pass == ''){
					$('#errorPassword').text('Se deben completar todos los campos.')
				};
			// --------------------------Confirmación--------------------------
				var confirmacion = $('#confirmacion').val()

				if(confirmacion !== pass){
					$('#errorConfirmacion').text('La contraseña y confirmación deben coincidir.')
				};
				if(confirmacion == ''){
					$('#errorConfirmacion').text('Se deben completar todos los campos.')
				};
		
			// --------------------------Género--------------------------
				if($('#genero').val() == '--'){
					$('#errorGenero').text('Se debe especificar un género musical específico.')
				}
			

			// --------------------------Edad--------------------------

				if($('#edad').val() == ''){
					$('#errorEdad').text('Debe especificar una edad.')
				};

			// --------------------------Términos--------------------------
				if(! $('#terminos').prop('checked')){
					$('#errorTerminos').text('Debe aceptar los terminos de uso.')
				}
		});
		// --------------------------Correctamente--------------------------
				
		// if($('.error').val() == ''){
		// 	alert('El formulario se envió correctamente')
		// }
	});



	// function enviar() {
	// 	// var formulario = document.getElementById("myform");
	// 	var formulario = $('.formulario__grupo-input');
	// 	var dato = formulario[0];
	// 	if (dato.value=="enviar") {
	// 	  alert("Enviando el formulario");
	// 	  formulario.submit();
	// 	  return true;
	// 	} else {
	// 	  alert("No se envía el formulario");
	// 	  return false;
	// 	}
	//   }