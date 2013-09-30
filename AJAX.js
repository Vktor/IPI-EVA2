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


	function enviarcontenido(nombre){
		if(window.XMLHttpRequest){
			var nombre =document.getElementById("inpUser").value;
			ajax2= new XMLHttpRequest()
		}
		ajax2.onreadystatechange=function(){
			if (ajax2.readyState==4) {
				if (ajax2.status==200) {
					ajax2.responseText
				}
			}
		}
		ajax2.open("POST","http://localhost/IPI-EVA2/registro.php", true);
		ajax2.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		ajax2.send("&nombre="+nombre);
	}

	//================hasta aca todo bien===============

	function sugerencia(str){
		ajax3=nuevoAjax();
		if (str.length=0) {
		document.getElementById('AjaxUser').innerHTML="";	
		return;
		}else if(str==""){
		document.getElementById('AjaxUser').innerHTML="";	
		return;
		}
		
		ajax3.onreadystatechange=function(){
			if (ajax3.readyState==4) {
			 document.getElementById("AjaxUser").innerHTML=ajax3.responseText;
			}
		}
		
		ajax3.open("GET","http://localhost/IPI-EVA2/sugerencia.php?q="+str,true);
		ajax3.send();
	}


window.onload= function(){cargarContenido()}


