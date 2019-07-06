<?php
session_start();
header("Content-Type:application/json");
require_once("init.php");
@$uid=$_SESSION["uid"];
if($uid){
  $sql="select uname from xz_user where uid=$uid";
  $result=sql_execute($sql);
  echo json_encode(
    ["ok"=>1,"uname"=>$result[0]["uname"]]);
}else
  echo json_encode(
    ["ok"=>0,"uname"=>""]);
