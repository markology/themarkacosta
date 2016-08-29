import {anim, moon, lines} from './../plugins/velocity.js';

export class About extends React.Component{

	handleClick(){
	    this.props.onUpdate('Projects');

	}

	componentDidMount(){
		anim($('#projects-link'), 0, 1900)
		anim($('#about').children('h1')[0], 7, 1900)
		lines();
		moon();
	
	}

	render(){
		return(
			<div id="about">
				<h1><span>A</span>
					<span>b</span>
					<span>o</span>
					<span>u</span>
					<span style={{marginRight: '10px'}}>t</span>
					<span>M</span>
					<span>e</span>
				</h1>
				<span id="person">
					<p id="line">
						<div>My name is Mark Acosta, but people call me .. Mark Acosta. 
						 I started coding in high school and loved it but my real passion became apparent during my time at Rowan Unversity.I studied JAVA, never felt quenched until I decided to become a Web Developer. Why? Because I like quick results and competition. Nothing excites me more than becoming an expert at my craft. I hear it so much that sometimes I actually believe my name is "You need to take a break". 
						My other passions include drumming, art and fitness.</div>
					<div>
						I have experience in many languages but I specialize in JavaScript. 
						My favorite languages/frameworks/libraries include JavaScript, jQuery, Angular, React, Node/Express and Angular 2.
						I've been developing web apps for a 4 years now using these technologies and 
						This portfolio was also built in ReactJS and was intended to show my flexibility in design and development.  
						I enjoy teaching code as much, if not more, than I enjoy coding itself.
						I intend to code until my fingers stop complying but I really want to lead teams in development and become a mentor/teacher for those interested. 
						For this reason, my absolute favorite position was with Razu Inc.
						At Razu,I oriented new developers with the Mean stack using Angular 2 as well as coded a vast majority of the project to build a social network for artists to collaborate on projects and promote themselves.
						</div>

					</p>
				</span>				
				
				<span id="moon">
					<img id="bug-lord" src="/assets/mark-flip.png"></img>
					<img id="hill" src="/assets/hill4.png"></img>
				</span>
			</div>
			)
	}
}