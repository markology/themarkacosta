import {anim} from './../plugins/velocity.js';

export class Contact extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			valid: true,
			error: ''
		}
	}

	validateForm() {
	    var x = $('#from').val();

	    var atpos = x.indexOf("@");
	    var dotpos = x.lastIndexOf(".");
	    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	    	$('#error').removeClass('success');
	    	$('#error').addClass('error');	    	
	    	this.setState({error: 'Email much?'})
			this.setTimeError();

	    	return false;
	    }
	    var y = $('#subject').val();
	    if (y == null || y == "") {
	    	$('#error').removeClass('success');
	    	$('#error').addClass('error');	    	
	    	this.setState({error: 'Identify yourself stranger!'})
			this.setTimeError();

	    	return false;
	    }

	    var z = $('#text').val();
	    if (z == null || z == "") {
	    	$('#error').removeClass('success');
	    	$('#error').addClass('error');	    	
	    	this.setState({error: 'Cat got your tongue?'})
			this.setTimeError();

	    	return false;
		}

	    return true;
	}	

	keys(){
	    $('#from').on('keyup', (e) => {
	    	this.checkKey(e)});
	    $('#subject').on('keyup', (e) => {
	    	this.checkKey(e)});
	}

	checkKey(e){
		 var code = e.keyCode || e.which;
		 if(code == 13) { //Enter keycode
		   this.validateForm();
		 }		
	}

	componentDidMount(){

		this.keys();
		anim($('#contact').children('h1'), 7, 1900)

		$('#email').on('click', () => {
			this.sendEmail();
		})		
	}

	timeError(){
    	$('#error').removeClass('success');
    	$('#error').removeClass('error');
	}

	setTimeError(){
		setTimeout(() => {
			$('#error').addClass('retract')		
		}, 2300)

		setTimeout(() => {
	    	$('#error').removeClass('success');
    		$('#error').removeClass('error');		
    		$('#error').removeClass('load');		
    		$('#error').removeClass('retract');		
		}, 3000)
	}

	sendEmail(){
		if(this.validateForm()){
			this.timeError();
	    	this.setState({error: 'Sending ... '})
		    $('#error').addClass('load');

			$.ajax({
			  method: "POST",
			  url: "/api/v1/contact",
			  data: { from: $('#from').val(), subject: $('#subject').val(), text: $('#text').val() }
			})
			  .done( (msg) =>  {
		    	$('#error').addClass('success');
		    	$('#error').removeClass('error');
		    	this.setState({error: 'I look forward to reading that! :)'})
    		    $('#text').val("");
    		    $('#from').val("");
    		    $('#subject').val("");
				this.setTimeError();

			  });
		}
		else{
			this.setState({valid: false});
		}
	}

	sendText(){
		$.ajax({
		  method: "POST",
		  url: "/api/v1/text",
		  data: { message: $('#message').val()}
		})
		  .done(function( msg ) {
		    $('#error').addClass('success');
		  });
	}

	render(){
		return(

			<div id="contact">
				<h1><span>C</span>
					<span>o</span>
					<span>n</span>
					<span>t</span>
					<span>a</span>
					<span>c</span>
					<span>t</span>
				</h1>			
				<div className="moneyz">
					<div className="hireus">
							<div> 								
								<input type="email" id="from" name="from" placeholder="email address"/>
								<div className="underline"></div>
								<input type="text" id="subject" name="subject"  placeholder="name"/>
								<div className="underline"></div>
								<textarea  name="text"  id="text" placeholder="message"></textarea>
								<div className="underline"></div>
						  </div>
						  <p id="error">{this.state.error}</p>
						  <p id="phone">Mobile: 609-513-1269</p>
						  <button type="submit" id="email">Send Message</button>
						<div className="response"></div>
					</div>
				</div>		
						
				<div id="selfie"></div>
			</div>

			)
	}
}