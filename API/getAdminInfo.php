<?php


		error_reporting(0);//禁用错误报告

	header("Content-Type: text/json;charset=utf-8");
	header("Access-Control-Allow-Origin: *"); 
	if(!isset($_GET["user"]))
	{
		
		$result=array('error'=>'0','info'=>'参数异常');

		echo $result;

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
			
			$info=array('error'=>'1','info'=>'不存在的用户:'."". $_GET['user']);
			echo json_encode($info);
			
			exit;

  			
  		}

		

	
		
	}
	if(isset($_GET["user"])&&isset($_GET["pwd"]))
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
 		 	$url="select id from admins where user='".$_GET["user"]."' and pwd='".$_GET["pwd"]."';";
			$result=$mysqli->query($url);
			while ($rows=mysqli_fetch_assoc($result))
			 {
				$logoStr=array('error'=>'0','info'=>$rows['id']);
				echo json_encode($logoStr);
				exit;
			}
			
			$info=array('error'=>'1','info'=>'密码错误：'."" .$_GET["pwd"]);
			echo json_encode($info);
			
			exit;

  			
  		}

		
		
		
		
	}
	
?>