import {anim, moon, lines} from './../plugins/velocity.js';

export class About extends React.Component {

	handleClick(){
	    this.props.onUpdate('Projects');
	}

	componentDidMount() {
		anim($('#projects-link'), 0, 1900)
		anim($('#about').children('h1')[0], 7, 1900)
		lines();
		moon();
	}

	render() {
		return (
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
							I knew I was going to be involved with computers my entire life. I started slaving over it since I was about 9 years old.
						 I started coding in high school and loved it but my real passion became apparent during my time at Rowan Unversity. I studied JAVA, but I never felt quenched until I decided to become a <i>Web Developer</i>. Why? Because I like quick results and sharing my talents with the world . Nothing excites me more than becoming an expert at my craft.
						</div><div>I enjoy teaching code as much  than I enjoy coding itself. I intend to code until my fingers stop complying but I really want to lead teams in development, mentor those willing to learn and add a spark of creativity to the mix. I was fortunate enough to have a few paid positions but Complex Magazine was by far the most experiential. Being able to work in a large team operation and push Javascript to unique places has expanded my growth significantly as developer and I am glad to have had that experience. I am now looking to bring that experience with me into my next venture. Feel free to poke around :)</div>
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
