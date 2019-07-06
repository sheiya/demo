<?php

header("Content-Type:application/json");
require("../init.php");

$sql = "select * from bs_book_family";
$result = sql_execute($sql);

echo json_encode($result);