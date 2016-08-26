
var l = false;
export function load(){
if(!l){
	l = true;
    $('#load').velocity('stop').velocity({left: '0%' }, {complete: function(){


    	$('#progress').velocity({width: '100%'},{duration:1300,
    		complete: function(){
	    		$('#content-cover').hide();

		    	$('#load').velocity({left: '100%' }, {complete: function(){

		    		$('#load').css('left', '-100%');
		    		$('#progress').css('width', '0%');
		    		l = false;
	    		}
	    	}, mina.ease);
	    }
	});
	  

	}});
}

}