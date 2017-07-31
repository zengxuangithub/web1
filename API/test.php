<?php
	header("Content-Type: text/json;charset=utf-8");
	header("Access-Control-Allow-Origin: *"); 
	if(!isset($_GET["user"]))
	{
		
		$result=array('error'=>'0','info'=>'参数异常');
		
		//$result="wewr";
		echo json_encode($result);
		die();
		
		
	}
	if(isset($_GET["user"])&&!isset($_GET["pwd"]))
	{
		//校验用户名
		
		$logoStr=array('img'=>'http://pic122.nipic.com/file/20170221/23749051_142920258000_2.jpg','tag'=>'logoPic');
	
	//echo $_GET['callback']."(".json_encode($logoStr).")";
	echo json_encode($logoStr);
		
		//$result=array('error'=>'0','info'=>'校验用户名');
		//echo $result;
		die();
		
	}
	if(isset($_GET["user"])&&isset($_GET["pwd"]))
	{
		//校验用户名
		$result=array('error'=>'0','info'=>'ok');
		echo $result;
		die();
	}
	
?>