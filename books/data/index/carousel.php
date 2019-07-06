<?php

header("Content-Type:application/json; charset=utf-8");
require_once("../init.php");
$sql = "select img from bs_index_carousel";
echo json_encode(sql_execute($sql));
?>