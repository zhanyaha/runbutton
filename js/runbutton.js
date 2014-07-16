$(function() {
	var button = $('#button');
	var counter=1;
	var pY=0;
	var run;
	var runButton=function() {
		var flag=true;
		clearInterval(run);
		run=setInterval(function(){
			if(counter!==91&&flag) {
				pY=-(counter++)*300-30;
				if (counter===46) {
					flag = !flag;
				}
				button.css({backgroundPositionY:pY});
			}else{
				counter=(counter===91)?0:counter;
				clearInterval(run);
			}
		},60);
	};

	button.click(function(){
		runButton();
	});
});