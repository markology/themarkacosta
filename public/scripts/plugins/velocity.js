import velocity from './../../js/velocity.min.js'



export function bubbles(){
	$('.project').each(function(){
		$(this).on('click', function(){
			$('.project').each(function(){
				$(this).addClass('bottom-orbit');							
			})
			$('#projects h1').addClass('bottom-orbit');
		})
	})
}


export function slide(n){

	console.log(n)

	var x = '0vw';
	if(n == 1){
		x = '-78vw';
	}
	else if(n == 2){
		x = '-156vw';
	}
	else if(n ==3){
		x = '-234vw'
	}

	$('#slider').velocity({
		translateX: x
	}, {duration: 200, easing: 'ease' })
}

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

export function button(){
	$('#email').click(function(){
	    $(this).addClass('rubberBandLight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	      $(this).removeClass('rubberBandLight')
	    });
	  })	
}

export function rotate(){
          for( var x =0; x < 5; x++){
    
              $($('.svg-container')[x]).velocity({
                rotateZ: '0deg'
              }, {
                easing: 'easeOutQuart',
                delay: 2200
              })
              
          } 	
}


export function lines(){
	  
	var words = $($('#line').children('div')[0]).text().split('. ')
	var words2 = $($('#line').children('div')[1]).text().split('. ')

	// .each(function(){
	// 	$(this).mouseover(function(){
	// 	    $(this).addClass('rubberBandLight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	// 	      $(this).removeClass('rubberBandLight')
	// 	    });
	// 	  })
	// })
	var spans = [];

	for(var x in words){
		var t = document.createElement('span');
		var newContent = document.createTextNode(words[x] + '. '); 
		t.appendChild(newContent);
		spans.push(t); 

	}
	$('#line').html('<div><p></p></div>');
	for(var x  in spans){
	// 	$(spans[x]).mouseover(function(){
	// 	    $(this).addClass('rubberBandLight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	// 	      $(this).removeClass('rubberBandLight')
	// 	    });
	// 	  })
		$($('#line').children('div')[0]).prepend(spans[spans.length - x- 1] );
	}

	$($($('#line').children('div')[0]).children('p')[0]).append(document.createElement('p').appendChild(document.createTextNode('I hear it so much that sometimes that I actually start to believe my name it "You need to take a break".'))) 

var spans1 = [];

	for(var x in words2){
		var t = document.createElement('span');
		var newContent = document.createTextNode(words2[x] + '. '); 
		t.appendChild(newContent);
		spans1.push(t); 

	}
	$('#line').append('<div></div>');

	for(var x  in spans1){
	// 	$(spans[x]).mouseover(function(){
	// 	    $(this).addClass('rubberBandLight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
	// 	      $(this).removeClass('rubberBandLight')
	// 	    });
	// 	  })
		$($('#line').children('div')[1]).prepend(spans1[spans1.length - x- 1] );
	}

	  	

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

		if(charLength > 0 && charLength < 200){

		  for( var x =0; x < charLength; x++){
	
			 $($(elem).children('span')[x]).mouseover(function(){
			    $(this).addClass('rubberBand').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			      $(this).removeClass()
			    });
			  })
		  }	

		  update();
		}
		else if(charLength >= 200){
			$(elem).mouseover(function(){
			    $(this).addClass('rubberBandLight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			      $(this).removeClass()
			    });
			  })				
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
		$('#hill').velocity({translateX: '-138px'}, {ease: 'easeOutQuart', delay: 2800});
		$('#bug-lord').velocity({translateX: '-270px'}, {ease: 'easeOutQuart', delay: 2800});
	}
	
