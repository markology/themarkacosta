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
						<div>My name is Mark Acosta, but people call me ...<i> Mark Acosta</i>. 
							I knew I waas going to be involved with computers my entire life. I started slaving over it since I was about 9 years old. 
						 I started coding in high school and loved it but my real passion became apparent during my time at Rowan Unversity.I studied JAVA, but I never felt quenched until I decided to become a <i>Web Developer</i>. Why? Because I like quick results and competition. Nothing excites me more than becoming an expert at my craft. I hear it so much that sometimes <strong>I actually believe my name is <strong><i>"You need to take a break"</i></strong>.</strong> 
						</div><div>I enjoy teaching code as much  than I enjoy coding itself. I intend to code until my fingers stop complying but I really want to lead teams in development and become a mentor/teacher for those interested. For this reason, my absolute favorite position was with Razu Inc. At Razu,I oriented new developers with the <strong>Mean</strong> stack using <strong>Angular</strong> 2 as well as coded a vast majority of the project to build a social network for artists to collaborate on projects and promote themselves.
						My other passions include drumming, art and fitness.</div>
						
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