<?php
header("Content-Type:application/json");
require("../init.php");

@ $n=$_REQUEST["uname"];  //屏蔽错误信息
@ $p=$_REQUEST["upwd"];
@ $m=$_REQUEST["email"];
@ $h=$_REQUEST["phone"];

$sql="INSERT INTO bs_user values(null,'$n','$p','$m','$h','images/avatar/default.jpg',null,null)";

$result = mysqli_query($conn,$sql);
if($result===false){
	echo '"code":"-1","msg":"请按格式填写"';
}
else{
	echo '"code":"1","msg":"成功注册"';
}
