<?php
$conect = pg_connect("host=localhost dbname=IPI-EVA2 user=postgres password=123456")
    or die('No se ha podido conectar: '. pg_last_error());

/*
CONSULTA DE PRUEBA QUE FUNCIONA NO TOCAR!
$query = 'select*from "Usuarios";';
$result = pg_query($query) or die('La consulta fallo: ' . pg_last_error());

echo "<table>\n";
while ($line = pg_fetch_array($result, null, PGSQL_ASSOC)) {
    echo "\t<tr>\n";
    foreach ($line as $col_value) {
        echo "\t\t<td>$col_value</td>\n";
    }
   echo "\t</tr>\n";
}
echo "</table>\n";
*/

// Liberando el conjunto de resultados
//pg_free_result($result);

// Cerrando la conexión
//pg_close($conect);
?>