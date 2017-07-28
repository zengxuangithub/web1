<?php

	header('Content-Type:text/json'); 
	header("Access-Control-Allow-Origin: *"); 
	 
	
	
$str=array ('a1'=>1,'b1'=>2,'c1'=>3,'d1'=>4,'e1'=>5);;
$testr=array();
for ($x=0; $x<=10; $x++) 
	{
  $testr[$x]=$str;
} 


$arr = array ('a'=>$testr,'b'=>2,'c'=>3,'d'=>4,'e'=>5);

	//echo json_encode($arr);
	$logoStr=array('img'=>'http://pic122.nipic.com/file/20170221/23749051_142920258000_2.jpg','tag'=>'logoPic');
	
	//echo $_GET['callback']."(".json_encode($logoStr).")";
	echo json_encode($logoStr);
?>