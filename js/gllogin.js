function getFocus(element)
{
		element.style.border="1px solid green";
		
		element.value="";
}


function lostFocus(myelement)
{	
		myelement.style.border="1px solid #FFFFFF";
		var  xmlhttp;
		if(myelement.value!="")
		{
		
		
				if(myelement.id=="user")
				
				{
			
				
				//ajax 请求用户名
				var user=myelement.value;
				 xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET","/web1/API/getAdmininfo.php?user="+user,true);
				xmlhttp.setRequestHeader("Content-Type","text/json");
				
   				xmlhttp.onreadystatechange=callback;//状态信息发生改变调用函数
   				 xmlhttp.send();
				}
				
				
		}
		else
		{
				if(myelement.id=="user")
				
				{
				myelement.value="用户名";
				
			
				
				}
				else
				{
				myelement.value="密码";
				}
		
		}
		
		
		function callback()
		{
			console.log("readyState----------->"+xmlhttp.readyState)
			if(xmlhttp.readyState==4)
			{//响应完毕后
		        if(xmlhttp.status==200)
		        {//http状态码为200时
		            var result=xmlhttp.responseText;//获取ajax请求的文本内容
		            var admininfo=JSON.parse(result);
		          
		            
		            alert(admininfo.info);
		        }
		    }
		}

		
		
		
		
}

