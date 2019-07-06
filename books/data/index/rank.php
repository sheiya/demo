<?php
header("Content-Type:application/json; charset=utf-8");
require_once("../init.php");

$sql = "select * from bs_rank_product";
$result=sql_execute($sql);
echo json_encode($result);
?>