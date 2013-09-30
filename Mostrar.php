<?php
include 'conexion.php';
$query = 'select id_user, nombre_user from "Usuarios";';
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

pg_free_result($result);

pg_close($conect);
?>