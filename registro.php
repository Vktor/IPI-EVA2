<?php
include 'conexion.php';

$nombre=$_POST['envio'];


$query ='INSERT INTO "Usuarios"(nombre_user) VALUES ('$nombre');';
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());

pg_free_result($result);
pg_close($conect);
?>