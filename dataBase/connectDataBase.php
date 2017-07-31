<?php
	
	
//$mysqli = mysql_connect("112.74.45.198:3306","root","chairman521","web1");
$mysqli = new mysqli("112.74.45.198:3306", "root", "chairman521", "web1");  
if (!$mysqli)
  {
  die('Could not connect: ' . mysql_error());
  }
  else
  {
  	echo "conneted ok";
  }

// some code
?>