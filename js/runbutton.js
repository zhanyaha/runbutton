$(function() {
	var startstopCounter=1;
	var onoffCounter=1;
	var startstopButton=function(button) {
		var pY=0;
		var run;
		var flag=true;
		clearInterval(run);
		run=setInterval(function(){
			if(startstopCounter!==91&&flag) {
				pY=-(startstopCounter++)*300-30;
				if (startstopCounter===46) {
					flag = !flag;
				}
				button.css({backgroundPositionY:pY});
			}else{
				startstopCounter=(startstopCounter===91)?0:startstopCounter;
				clearInterval(run);
			}
		},60);
	};
	var onoffButton=function(button) {
		var pY=0;
		var run;
		var flag=true;
		clearInterval(run);
		run=setInterval(function(){
			if(onoffCounter!==13&&flag) {
				pY=-(onoffCounter++)*300;
				if (onoffCounter===13) {
					pY=0;
				}
				if (onoffCounter===7) {
					flag = !flag;
				}
				button.css({backgroundPositionY:pY});
			}else{
				onoffCounter=(onoffCounter===13)?1:onoffCounter;
				clearInterval(run);
			}
		},60);
	};
	
	$('#startstopButton').click(function(){
		startstopButton($(this));
	});
	$('#onoffButton').click(function(){
		onoffButton($(this));
	});
});
