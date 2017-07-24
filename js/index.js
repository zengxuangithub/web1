window.onload = function()
{      

	var oDiv = document.getElementById('scrollbox'); 
	
	var oUl = document.getElementById('ul1');
	var screenwith=oDiv.offsetWidth;
	var speed = 1;//初始化速度     
	
	oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;//图片内容*2-----参考图（2）
	   
	var scrollbox=document.getElementById("scrollbox");
	var oLi= scrollbox.getElementsByTagName('li'); 
	oUl.style.width = oLi.length*screenwith+'px';//设置ul的宽度使图片可以放下
	
	var stop=0;
	var offsetleft=oUl.offsetLeft;
	
	
	
	
	var scrolltimer =setTimeout(start,10);
	
	function start()
	{
		if(stop!=0)
		{
			if(oUl.offsetLeft%screenwith==0)
			{
				
				
			    clearTimeout(scrolltimer);
			    scrolltimer =setTimeout(start,10000);
			    stop=0;
			    return;
			}
		}
		
		
		stop=1;
		
		if(-oUl.offsetLeft>oUl.offsetWidth/2)
		{
				
			oUl.style.left = 0+'px'; 
		}
		
		oUl.style.left = oUl.offsetLeft -speed + 'px';  
		
		scrolltimer =setTimeout(start,10);
		
	}
	
	
	
	
	var myscrollUl=document.getElementById("adUl");
	 
	myscrollUl.addEventListener("touchstart",ulStart,false);
	myscrollUl.addEventListener("touchmove",ulSmove,false);
	myscrollUl.addEventListener("touchend",ulEnd,false);
	var myli=myscrollUl.getElementsByTagName("li");
	  //console.log("with----------->"+myli[0].offsetWidth); 
	
	var myleft=myscrollUl.offsetLeft;
	var isend=false;
	var isstart=true;
	var leng;
	var startx,endx;
	var ulLeftpostion=0;
	function ulStart(event)
	{
		
		
		 var touch = event.touches[0];
	    event.preventDefault();
           startx = touch.pageX;
          // ulLeftpostion=myscrollUl.offsetLeft;
           
	}
	
	
	function ulSmove(event)
	{
		event.preventDefault();
		 var touch = event.touches[0];
                
                 //myleft=myscrollUl.offsetLeft;
                endx=touch.pageX;
                //myleft=myscrollUl.offsetLeft;
                 leng=touch.pageX-startx;
            
                if(leng>0)
                {
                	//向右滑
                	   //console.log("右边move----------->"+leng); 
                	   
                	myscrollUl.style.left=myleft+leng+"px";
                }
                else
                {
                	//向左滑
                	  //console.log("左边move----------->"+leng); 
                	myscrollUl.style.left=myleft+leng+"px";
                }
                
                
              
	}
	
	var adsrollTime;
	var backTime;
	 function ulEnd(event) 
	 {
	 	event.preventDefault();
	 	myleft=myscrollUl.offsetLeft;
	 	
	 	
	 	
	 	if(leng>0)
	 	{
	 			 
	 			 if(isstart)
	 			 {
	 			 		console.log("isstart----------->"+myscrollUl.offsetLeft); 
	 			 		myscrollUl.style.left =0+'px'; 
	 			 		myleft=0;
	 			 		return;
	 			 	//backmove(1);
	 			 }
	 				if(leng<50)
                	  
       				 	 {
       				  		backTime =setTimeout(backmove(1),1);
                	   	
        				}
                	   else
      					{
        	        	  if(leng>600) 
        	        	  {
        	        	  	ulLeftpostion=600+ulLeftpostion;
        	        	  	backTime =setTimeout(backmove(1),1);
        	        	  }
        	        	  else
        	        	  {
        	        	  	ulLeftpostion=600+ulLeftpostion;
        	        	  	 //console.log("myleft----------->"+(600+ulLeftpostion)); 
        	        	  	backTime =setTimeout(backmove(0),1);
        	        	  }
        			 	}
	 	}
	 	else
	 	{
	 		
	 			if(isend)
	 			 {
	 			 		console.log("isend----------->"+myscrollUl.offsetWidth); 
	 			 		myscrollUl.style.left =-myscrollUl.offsetWidth+600+'px'; 
	 			 		myleft=-2400;
	 			 		return;
	 			 }
	 		
	 				if(leng>-50)
                	  
       				  {
       				  		backTime =setTimeout(backmove(1),1);
                	   	
        				}
                	   else
      					{
        	        	  if(leng<-600) 
        	        	  {
        	        	  	ulLeftpostion=-600+ulLeftpostion;
        	        	  	backTime =setTimeout(backmove(0),1);
        	        	  }
        	        	  else
        	        	  {
        	        	  	ulLeftpostion=-600+ulLeftpostion;
        	        
        	        	  	//backTime =setTimeout(backmove(1),1);
        	        	  	backmove(1);
        	        	  	//console.log("ulEnd----------->"+myscrollUl.offsetLeft); 
        	        	  }
        			 	}
	 	}
	 
            
              
                
      }
	 
	 
	 function backmove(isleft)
	 {
	 	
	 
	 	if(myscrollUl.offsetLeft==ulLeftpostion)  
	 	{
	 		console.log("stop----------->"+myscrollUl.offsetLeft); 
	 		clearTimeout(backTime);
	 		ulLeftpostion=myscrollUl.offsetLeft;
	 		myleft=myscrollUl.offsetLeft;
	 		if(ulLeftpostion==-2400)
	 		{
	 			isend=true;
	 			isstart=false;
	 		}
	 		
	 	 else	if(ulLeftpostion==0)
	 		{
	 			isend=false;
	 			isstart=true;
	 		}
	 		else
	 		{
	 			isend=false;
	 			isstart=false;
	 		}
	 		return;
	 	}
	 	if(isleft==1)
	 	{
	 		myscrollUl.style.left = (myscrollUl.offsetLeft -1)+'px'; 
	 		console.log("myleft----------->"+myscrollUl.offsetLeft);
	 		backTime =setTimeout(backmove(1),30);
	 		
	 	}
	 	else
	 	{
	 		console.log("offsetLeft----------->"+myscrollUl.offsetLeft); 
	 		myscrollUl.style.left = myscrollUl.offsetLeft +1 + 'px';
	 		backTime =setTimeout(backmove(0),1);
	 			 
	 	}
	 	
	 	
	 }
	 
	
	
	
	
	
	
}
