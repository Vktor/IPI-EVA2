<?php
$conect = pg_connect("host=localhost dbname=IPI-EVA2 user=postgres password=123456")
    or die('No se ha podido conectar: '. pg_last_error());

?>