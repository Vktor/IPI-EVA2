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

	if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
 		xmlhttp = new XMLHttpRequest();
	}
	return xmlhttp;
	}


	function cargarContenido(){
		var contenedor = document.getElementById('AjaxUser');
		ajax=nuevoAjax();
		ajax.open("GET", "http://localhost/IPI-EVA2/Mostrar.php",true);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {
				contenedor.innerHTML = ajax.responseText;
			}
		}
	 	ajax.send(null)
	 //contenedor.style.textAlign='center';
	
	}
	window.onload= function(){cargarContenido()}


	function enviarcontenido(){
		var envio = document.getElementById('inpUser').value;
		 ajax2=nuevoAjax();
		ajax2.open("POST", "http://localhost/IPI-EVA2/registro.php",true);
		ajax2.onreadystatechange=function() {
			if (ajax2.readyState==4) {
				envio.innerHTML = ajax2.responseText
			}
		}
		ajax2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		 ajax2.send("nombre="+envio)
	}	
		
}


