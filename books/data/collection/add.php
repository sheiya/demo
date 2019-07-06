<?php

session_start();
header("Content-Type:text/plain");
$uid=$_SESSION["uid"];
//$uid=1;
@$bid=$_REQUEST["bid"];
require_once("../init.php");

$sql_has="select * from bs_collection where product_id=$bid and user_id=$uid";
$sql_insert="insert into bs_collection(cid,user_id,product_id)values(null,$uid,$bid)";
$sql_cancel="delete from bs_collection where product_id=$bid and user_id=$uid";
echo count(sql_execute($sql_has));
if(count(sql_execute($sql_has))>0){
	sql_execute($sql_cancel);
}else{
	sql_execute($sql_insert);
}

$row = mysqli_affected_rows($conn);
echo $row;                                                            
if($row>0){
	echo '{"code":1,"msg":"success"}';
}else{
	echo '{"code":-1,"msg":"failure"}';
}

