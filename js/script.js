//alert($);
var initIndex=0;
function move(t){
	var arrW=[],arrH=[],arrL=[],arrT=[],arrZ=[],arrO=[];
	$("ul li").each(function(i){
		arrW[i]=$(this).css("width");
		arrH[i]=$(this).css("height");
		arrL[i]=$(this).css("left");
		arrT[i]=$(this).css("top");
		arrZ[i]=$(this).css("zIndex");
		arrO[i]=$(this).css("opacity");
	});
	$("ul li").each(function(i){
		var index;
		if(t){
			index=i-1;
			if(index<0) index=7;
		}else{
			index=i+1;
			if(index>7) index=0;
		}
		
		$(this).css("zIndex",arrZ[index]);
		$(this).animate({
			width:arrW[index],
			height:arrH[index],
			left:arrL[index],
			top:arrT[index],
			opacity:arrO[index]
		},500);
	});
}

window.onload=function(){
	var source=document.getElementsByTagName("img");
	var p1=document.getElementsByTagName("p")[0];
	var j=0;
	$("#left").click(function(){
		move(true);
		if(j<7){
			j++;
		}else{
			j=0;
		}
		p1.innerHTML=source[j].alt;
		
	});
	$("#right").click(function(){
		move(false);
		if(j>0){
			j--;
		}else{
			j=7;
		}
		p1.innerHTML=source[j].alt;
	});
}