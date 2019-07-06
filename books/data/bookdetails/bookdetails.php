<?php
header("Content-Type:application/json");
require_once("../init.php");

@$bid=$_REQUEST["bid"];
$output = [];
$sql="select pid,pic from book_pic where book_id=$bid";
$output[] = sql_execute($sql);
$sql="select * from bs_book where bid=$bid";
$output[] = sql_execute($sql);
echo json_encode($output);