<?php
header("Content-Type:application/json");
require("../init.php");
$output=[];
$sql="select * from index_author";
$result = sql_execute($sql);
$output[]=$result;

$sql="select * from index_author_book";
$result = sql_execute($sql);
$output[]=$result;

echo json_encode($output);
?>