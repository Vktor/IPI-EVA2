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
		ajax=nuevoAjax();
		ajax.open("GET", "http://localhost/IPI-EVA2/Mostrar.php",true);
		ajax.onreadystatechange=function() {
			if (ajax.readyState==4) {
				contenedor.innerHTML = ajax.responseText
			}
		}
	 	ajax.send(null)
	}
/*
		function enviarcontenido(envio){
		var envio = document.getElementById('inpUser').value;
		 ajax2=nuevoAjax();
		ajax2.open("POST", "http://localhost/IPI-EVA2/registro.php",true);
		ajax2.onreadystatechange=function() {
			if (ajax2.readyState==4) {
				 ajax2=ajax2.responseText;
				
			}
		}

		ajax2.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		 ajax2.send("&nombre="+envio)

		}	
*/

	function enviarcontenido(nombre){
		if(window.XMLHttpRequest){
			var nombre =document.getElementById("inpUser").value;
			ajax2= new XMLHttpRequest()
		}
		ajax2.onreadystatechange=function(){
			if (ajax2.readyState==4) {
				if (ajax2.status==200) {
					alert(ajax2.responseText)
				}
			}
		}
	ajax2.open("POST","http://localhost/IPI-EVA2/registro.php", true);
	ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax2.send("&nombre="+nombre);
	}
window.onload= function(){cargarContenido()}


