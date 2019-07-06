<?php

session_start();
header("Content-Type:application/json");
require_once("../init.php");
@$uid=$_SESSION["uid"];
//$uid = 1;
$sql="select cid,produce,bid,name,pic from bs_collection inner join bs_book on bid=product_id where user_id=$uid";
echo json_encode(sql_execute($sql));