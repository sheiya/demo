<?php

session_start();
header("Content-Type:text/plain");
$uid=$_SESSION["uid"];
//$uid=1;
@$bid=$_REQUEST["bid"];
@$count=$_REQUEST["count"];
require_once("../init.php");

$sql_has="select * from bs_shopping_cart where product_id=$bid and user_id=$uid";
$sql_insert="insert into bs_shopping_cart(cid,user_id,product_id,count)values(null,$uid,$bid,$count)";
$sql_update="update bs_shopping_cart set count=count+$count where product_id=$bid and user_id=$uid";

if(count(sql_execute($sql_has)))
	sql_execute($sql_update);
else
	sql_execute($sql_insert);

$row = mysqli_affected_rows($conn);

if($row>0){
	echo '{"code":1,"msg":"success"}';
}else{
	echo '{"code":-1,"msg":"failure"}';
}

