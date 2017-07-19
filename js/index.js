window.onload = function()
{      

	var oDiv = document.getElementById('scrollbox'); 
	
	var oUl = document.getElementById('ul1');
	var speed = 2;//初始化速度       
	oUl.innerHTML += oUl.innerHTML;//图片内容*2-----参考图（2）
	var oLi= document.getElementsByTagName('li');     
	oUl.style.width = oLi.length*160+'px';//设置ul的宽度使图片可以放下
	var oBtn1 = document.getElementById('btn1');    
	var oBtn2 = document.getElementById('btn2');
	var stop=0;
	var offsetleft=oUl.offsetLeft;

	var scrolltimer =setTimeout(start,30);
	
	function start()
	{
		oUl.style.left = oUl.offsetLeft + speed + 'px';  
		
		
		//scrolltimer =setTimeout(move,30);
		move();
	}
	function move()
	{   
		
		
		
		offsetleft=oUl.offsetLeft;
		if(stop!=0)
		{
			
			if((offsetleft)%160==0)
			{
			console.log("offsetleft-------->"+offsetleft);
			clearTimeout(scrolltimer);
		
			stop=0;
			var scrolltimer =setTimeout(move,6000);
			
			//stop();
			return;
			}
		}
		
		if(oUl.offsetLeft< -(oUl.offsetWidth/2))
		{   //向左滚动，当靠左的图4移出边框时         
		oUl.style.left = 0;        
		}         
		if(oUl.offsetLeft > 0)
		{//向右滚动，当靠右的图1移出边框时         
		oUl.style.left = -(oUl.offsetWidth/2)+'px';        
		}        
		oUl.style.left = oUl.offsetLeft + speed + 'px';  
		
		stop=1;
		scrolltimer =setTimeout(move,30);
		
	}
	function test(num)
	{
		console.log("test"+num);
	}
	
	function stop()
	{
		clearTimeout(scrolltimer);
		
		var scrolltimer =setTimeout(move,3000);
		
	}
	oBtn1.addEventListener('click',function()
	{        speed = -2;      },false);      
	oBtn2.addEventListener('click',function()
	{        speed = 2;      },false);      
	//var timer = setInterval(move,3000);//全局变量 ，保存返回的定时器     
	
	/*oDiv.addEventListener('mouseout', function ()
	{        //timer = setInterval(move,30000);    
		console.log("宽---->"+oUl.offsetLeft);
	},false);
	oDiv.addEventListener('mousemove', function () 
	{       
		//clearInterval(timer);//鼠标移入清除定时器
	},false);    */
}