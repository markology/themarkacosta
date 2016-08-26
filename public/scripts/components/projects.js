import {anim,bubbles} from './../plugins/velocity.js';
import classNames from 'classnames';
import {Razu} from './projects/razu.js'
export class Projects extends React.Component{
	constructor(props){
		super(props);
		this.state={
			projectActive: false,
			project: 1
		}
	}
	componentDidMount(){
		anim($('#projects').children('h1'), 7, 1900);
		bubbles()
	}

	closeProject(){
		$('.project').removeClass('active bottom-orbit top-orbit')	
		this.setState({projectActive: false})		
	}

	setActive(){
		this.setState({projectActive: true})
	}

	render(){
		var project = <span></span>;

		if(this.state.project == 1){
			project = <Razu />
		}

		return(
			<div id="projects">
				<h1><span>P</span>
					<span>r</span>
					<span>o</span>
					<span>j</span>
					<span>e</span>
					<span>c</span>
					<span>t</span>
					<span>s</span>
				</h1>
				<span id="project-container" className={className({
					'enable': this.state.projectActive
				})}>{project}</span>
				<span className={classNames({'open': this.state.projectActive})} onClick={this.closeProject.bind(this)} id="close">x</span>
				<div onClick={this.setActive.bind(this)} id="Razu" className="project">
					<h2>Razu Music</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>	
				<div onClick={this.setActive.bind(this)} id="Tell" className="project">
					<h2>Tell Us Who</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>	
				<div onClick={this.setActive.bind(this)} id="VU" className="project">
					<h2>VU API</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>									
			</div>

		)
	}
}