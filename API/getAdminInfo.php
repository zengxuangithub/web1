<?php

		error_reporting(0);//禁用错误报告
	header("Content-Type: text/json;charset=utf-8");
	header("Access-Control-Allow-Origin: *"); 
	if(!isset($_GET["user"]))
	{
		
		$result=array('error'=>'0','info'=>'参数异常');
		echo json_encode($result);
		die();
		
		
	}
	if(isset($_GET["user"])&&!isset($_GET["pwd"]))
	{
		//校验用户名
		$mysqli = new mysqli("112.74.45.198:3306", "root", "chairman521", "web1");  
		
		
		
		
		if (!$mysqli)
 		 {
  			
			$info=array('error'=>'1','info'=> mysql_error());
			echo json_encode($info);
			exit;
  		}
  		else
 		 {
 		 	$url="select id from admins where user='".$_GET["user"]."';";
			$result=$mysqli->query($url);
			while ($rows=mysqli_fetch_assoc($result))
			 {
				$logoStr=array('error'=>'0','info'=>$rows['id']);
				echo json_encode($logoStr);
				exit;
			}
			
			$info=array('error'=>'1','info'=>$_GET['user']);
			echo $url;
			//echo "tst" ."". "test2";
			//echo "test";
			exit;

  			
  		}

		

	
	//echo $_GET['callback']."(".json_encode($logoStr).")";
	//echo json_encode($logoStr);
		
		//$result=array('error'=>'0','info'=>'校验用户名');
		//echo $result;
		//die();
		
	}
	if(isset($_GET["user"])&&isset($_GET["pwd"]))
	{
		//校验用户名
		$result=array('error'=>'0','info'=>'ok');
		echo $result;
		die();
	}
	
?>