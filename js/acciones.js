// JavaScript Document

function buscargenero ()
{alert ('Funcion');
	//datos a mandar
	$ajax({
		type:"POST",
		url: "http://192.168.1.18/practicafinal/consultagenero.php"		
	}).done (function(msg){
		var DatosJuegos = JSON.parse(msg);
		alert (msg);
		if(DatosJuegos.datos == 1)

		
		{alert ('Datos');
		 //colocar los datos en la plantilla de html y agregarlos a el div que corresponde
		 	$('#Accion').empty();
			$('#Aventura').empty();
			$('#Carreras').empty();
			$('#Deportes').empty();
			$('#Plataformas').empty();
			$('#Peleas').empty();
			$('#Terror').empty();
			
			for(var i=0; i < DatosJuegos.juegos.length; i++)
			{
			 switch(DatosJuegos.juegos[i].Genero) {
    case 'Accion':
	
$('#Accion').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
		
		 case 'Aventura':
	
$('#Aventura').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
		
		 case 'Carreras':
	
$('#Carreras').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
		
		
		 case 'Deportes':
	
$('#Deportes').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
		
		
		 case 'Plataformas':
	
$('#Plataformas').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
	
	 case 'Peleas':
	
$('#Peleas').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
	
	
	 case 'Terror':
	
$('#Terror').append('<a href="#" data-role="button" data-inline="true"><img src="http://192.168.1.18/practicafinal/recursos/imagenes/juegos/' + DatosJuegos.juegos[i].Id + '.png" class="imgenj"></a><span class="ui-focus"><strong>'+ DatosJuegos.juegos[i].Nombre + '</strong></span> <br>');
    
	    break;
	

}//switch	

$('.imgenj').width($('#TodosGeneros').width()*.046);
$('#Genero').trigger('pagecreate');			}
		}
		if (DatosJuegos.datos == 0)
		
		{	
		alert ('no hay juegos que mostrar')	
		}
		
	});
}


$(document).ready(function(e){	
	document.addEventListener("deviceready",function(){
		
		$('#BGenero').tap(function(){
			alert ('Entro');
			buscargenero();
			$.mobile.changePage("#Genero");
		});
		
	});
	});