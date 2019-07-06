<?php

header("Content-Type:application/json; charset=utf-8");
require_once("../init.php");

$output=[];
$sql = "select distinct book_type from bs_daily_product";
$output[]=sql_execute($sql);
$sql = "select * from bs_daily_product";
$output[]=sql_execute($sql);
echo json_encode($output);
?>