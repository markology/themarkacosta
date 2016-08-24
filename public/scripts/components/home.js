
import {anim} from './../plugins/velocity.js';
import {logo} from './../plugins/logo.js';


export class Home extends React.Component{

	constructor(props){
		super(props);
	}

	componentDidMount(){

		if(this.props.first){
			anim($('#greeting'), 3, 1100)
			anim($('#title'), 13, 1100)
			anim($('#contact-button'), 0, 1100)
		    logo();    
		}
		else{
			anim($('#greeting'), 3, 2900)
			anim($('#title'), 13, 2900)
			anim($('#contact-button'), 0, 2900)	
		    logo();    
					
		}
	}

	handleClick(){
	    this.props.onUpdate('Contact');

	}
	render(){
		return(
			<span id="home">
				<h2 id="greeting">
					<span>H</span>
					<span>i</span>
					<span>,</span>
				</h2>
				<h1 id="crumble">I'm Mark,</h1>
				<h3 id="title">
					<span>J</span>
					<span>a</span>
					<span>v</span>
					<span>a</span>
					<span>s</span>
					<span>c</span>
					<span>r</span>
					<span>i</span>
					<span>p</span>
					<span>t</span> 
					<span>D</span>
					<span>e</span>
					<span>v</span>
				</h3>	
				<p id="title-under"><span>Full Stack JavaSc</span> <span>ript Developer</span></p>
				<img id="flag" src=""></img>
				<span  onClick={this.handleClick.bind(this)}id="contact-button">contact</span>	
				<span id="astronaut"></span>	
			</span>)
	}
}