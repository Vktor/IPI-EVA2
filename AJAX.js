function nuevoAjax(){
	var xmlhttp=false;
 	try {
 		xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
 	} catch (e) {
 		try {
 			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 		} catch (E) {
 			xmlhttp = false;
 		}
  	}

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
}

function cargarContenido(){
	var contenedor = document.getElementById('AjaxUser');
	var nombre1 = document.getElementById('inpUser').value;
	

	ajax=nuevoAjax();
	ajax.open("GET", "http://localhost/IPI-EVA2/Mostrar.php",true);
	ajax.onreadystatechange=function() {
		if (ajax.readyState==4) {
			contenedor.innerHTML = ajax.responseText
		}
	}
	 ajax.send(null)
	 contenedor.style.textAlign='center';
	 contenedor.style.fontFamily='Helvetica, Arial, sans-serif';
		//Registro del Nombre en la DB
	
		
}
window.onload= function(){cargarContenido()}

