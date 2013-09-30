<?php
include 'conexion.php';
$query = 'select id_user from "Usuarios";';
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());


//$q=$_GET["q"];
$q="2";
echo $q;
if ($q>0) {
	echo "entro al for <br>";
	for ($i=0; $i<$q ; $i++) { 
		echo "entro al segundo for";
	$array=pg_fetch_array($result,0, pgsql_num);
		if($q==$array){
			
				$otro=pg_fetch_array($result,$i, pgsql_num);
				echo "llego al if"+$otro;
		
		}
	}
}



pg_free_result($result);

pg_close($conect);

?>