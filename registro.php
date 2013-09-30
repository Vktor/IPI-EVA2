<?php
include 'conexion.php';

$nombre=$_POST["nombre"];
//$nombre='Juancho';
//echo $nombre;
$tabla ='"Usuarios"';

$query ="insert into ".$tabla."(nombre_user) values('".$nombre."')";
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());

pg_free_result($result);
pg_close($conect);
?>