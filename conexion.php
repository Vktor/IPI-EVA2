<?php
$conect = pg_connect("host=localhost dbname=IPI-EVA2 user=postgres password=1234")
    or die('No se ha podido conectar: '. pg_last_error());

?>