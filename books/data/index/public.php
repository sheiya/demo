<?php
header("Content-Type:application/json");
require("../init.php");
$output=[];
$sql="select * from index_public";
$result = sql_execute($sql);
$output[]=$result;

$sql="select * from index_public_book";
$result = sql_execute($sql);
$output[]=$result;

echo json_encode($output);
?>