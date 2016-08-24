import velocity from './../../js/velocity.min.js'


export function bars(){
	var skills = ['230px','270px', '250px', '240px', '280px', '220px'];
	var d = 2300;
	$('#languages').children('span').each(function(){

		$($(this).children('span')[0]).each(function(){
			$($(this).children('div')[0]).velocity({
			height: skills.pop(),
		}, {easing: 'easeOutQuart', delay: d})	
		})
		d += 100
	})
}


export function anim(elem, charLength, del){


		function update(){
			$($(elem).children('span')[(Math.floor(Math.random() *charLength -1))]).mouseover();
				
				setTimeout(() => {
					update();
				}, Math.floor((Math.random() * 40000)/charLength))					
		}

		var d = del;
		if(charLength > 0){
			var t = 0;

				$(elem).children('span').each(function(){
					d = d + 50;
					console.log($(this))
					$(this).velocity({
					opacity:1
				}, {duration: 300, delay: d}, [ 250, 15 ]);

				});


					


			
		}

		if(charLength > 0){

		  for( var x =0; x < charLength; x++){
	
			  $($(elem).children('span')[x]).mouseover(function(){
			    $(this).addClass('rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			      $(this).removeClass()
			    });
			  })
		  }	

		  update();
		}
		else{
			$(elem).mouseover(function(){
			    $(this).addClass('rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			      $(this).removeClass()
			    });
			  })			
		}


			

	}

	export function moon(){
		$('#hill').velocity({right: '-50px'}, {ease: 'easeOutQuart', delay: 2800});
		$('#bug-lord').velocity({right: '0px'}, {ease: 'easeOutQuart', delay: 2800});
	}
	
