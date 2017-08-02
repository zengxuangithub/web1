function getFocus(element)
{
		element.style.border="1px solid green";
		
		element.value="";
		if(element.id=="pwd")
		{
			
			element.type="password";
		}
		
		
		
}


function lostFocus(myelement)
{	
		myelement.style.border="1px solid #FFFFFF";
		var  xmlhttp;
		if(myelement.value!="")
		{
		
		
				if(myelement.id=="user")
				
				{
			
				console.log("lostFocus");
				
				//ajax 请求用户名
				var user=myelement.value;
				 xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET","/web1/API/register.php?user="+user,true);
				xmlhttp.setRequestHeader("Content-Type","text/json");
				
   				xmlhttp.onreadystatechange=CheckUsercallback;//状态信息发生改变调用函数
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
				myelement.type="text";
				}
		
		}
		
		
		function CheckUsercallback()
		{
			
			if(xmlhttp.readyState==4)
			{//响应完毕后
		        if(xmlhttp.status==200)
		        {//http状态码为200时
		            var result=xmlhttp.responseText;//获取ajax请求的文本内容
		            var admininfo=JSON.parse(result);
		          
		          	var img=document.getElementById("okimg");
		            if(admininfo.error!="0")
		            {
		           
		            img.style.display="block";
		            img.src="img/error.png";
		             alert(admininfo.info);	
		            }
		            else
		            {
		            	img.style.display="block";
		           		 img.src="img/ok.png";
		            }

		        }
		    }
		}

		
		
		
		
}
 
function register()
{
	var userStr=document.getElementById("user").value;
	var pwdStr=document.getElementById("pwd").value;
	console.log("userStr----"+userStr);	
	console.log("pwdStr----"+pwdStr);
	var  xmlhttp;
	if(userStr!=""&&pwdStr!="")
	{
				
				 xmlhttp=new XMLHttpRequest();
				xmlhttp.open("GET","/web1/API/register.php?user="+userStr+"&pwd="+pwdStr,true);
				xmlhttp.setRequestHeader("Content-Type","text/json");
				
   				xmlhttp.onreadystatechange=CheckPwdcallback;//状态信息发生改变调用函数
   				 xmlhttp.send();
	}
	
	function CheckPwdcallback()
		{
			console.log("readyState----------->"+xmlhttp.readyState);
			if(xmlhttp.readyState==4)
			{//响应完毕后
		        if(xmlhttp.status==200)
		        {//http状态码为200时
		            var result=xmlhttp.responseText;//获取ajax请求的文本内容
		            var admininfo=JSON.parse(result);
		          
		            if(admininfo.error=="0")
		            {
		            	alert("login success");
		            }
		            else
		            {
		            	var pwdElement=document.getElementById("pwd");
		            	pwdElement.value="密码";
						pwdElement.type="text";
		            
		            	 alert(admininfo.info);
		            }
		          
		        }
		    }
		}
}

