<?php
   //error_reporting(0);
   header("Conten-Type:text/json;charset=utf-8");
   header("Access-Control-Allow-Origin:*");
   if(isset($_GET['user'])&&!isset($_GET['pwd']))
   {
   	//只传递了用户名参数  用户校验用户名是否已经被
   	$mysqli=new mysqli("112.74.45.198","root","chairman521","web1");
	if(!$mysqli)
		{
		$info=array('error'=>'1','info'=>'数据库连接失败');   
		echo json_encode($info);
		exit;
	   }
		else
		{
			$sql="select id from users where user='".$_GET['user']."';";
			

			$result=$mysqli->query($sql);
			
			if($result)
			{

				
				while ($row=mysqli_fetch_assoc($result))
				 {
				$info=array('error'=>'2','info'=>'该用户已经存在');
				echo json_encode($info);
				exit; 
				
				}	
				 $info=array('error'=>'0','info'=>'用户不存在');
			 	echo json_encode($info);
			 	exit;
			}
			else
			{
				 $info=array('error'=>'4','info'=>'查询失败');
			 	echo json_encode($info);
			 	exit;
			}
			
			 
			
			 
		}
		
		
		
	
	
   }
    else if(isset($_GET['user'])&&isset($_GET['pwd']))
   {
   	//用户注册
   
	
	$mysqli = new mysqli("112.74.45.198:3306", "root", "chairman521", "web1");  
	mysqli_set_charset($mysqli, "utf8");
	if($mysqli->connect_error)
	{
		
		
		$info=array('error'=>'1','info'=>'database failed');
		echo json_encode($info);
		exit;
	}
	else
	{

		
		
		$sql="insert  into users (user,pwd) values ('".$_GET['user']."','".$_GET['pwd']."');";
		$result=$mysqli->query($sql);
		
	
		if($result===TRUE)
		{
			$info=array('error'=>'0','info'=>'注册成功'.$mysqli->connect_error);
			echo json_encode($info);
			exit;
		}
		else
		{
				$info=array('error'=>'5','info'=>'注册失败'.$_GET['user'].$mysqli->error);
				echo json_encode($info);
				exit;
		}
	}
	
   	$info=array('error'=>'2','info'=>'参数错误');
   	echo json_encode($info);
	exit;
   }
   else
   {
   	$info=array('error'=>'3','info'=>'参数错误');
   	echo json_encodew($info);
	exit;
   }
?>