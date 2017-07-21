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
	  console.log("with----------->"+myli[0].offsetWidth); 
	 
	var myleft=myscrollUl.offsetLeft;
	
	var startx,endx;
	function ulStart(event)
	{
		 var touch = event.touches[0];
	    
           startx = touch.pageX;
           
	}
	
	
	function ulSmove(event)
	{
		 var touch = event.touches[0];
                
                 //myleft=myscrollUl.offsetLeft;
                endx=touch.pageX;
                //myleft=myscrollUl.offsetLeft;
                var leng=touch.pageX-startx;
              console.log("myleft----------->"+myleft); 
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
	
	 function ulEnd(event) 
	 {
	 	myleft=myscrollUl.offsetLeft;
               // console.log("startx-----------"+startx); 
               // console.log("endx-----------"+endx);
               // myscrollUl.style.left=
              // var touch =event.touches[0];
              
                
      }
	
	
	
	
	
}
