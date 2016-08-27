import {anim,bubbles,slide} from './../plugins/velocity.js';
import classNames from 'classnames';
import {Razu} from './projects/razu.js'
import {Hu} from './projects/HU.js'
import {Bean} from './projects/bean.js'
export class Projects extends React.Component{
	constructor(props){
		super(props);
		this.state={
			projectActive: false,
			projectLoad: false,
			projectLoading: false,
			slide:0,
			project: 1
		}
	}


	slideLeft(){
		var x = this.state.slide;

		if(this.state.slide == 0){
			this.setState({slide: 3});
			slide(3);

		}
		else{
			this.setState({slide: (x - 1)});
			slide(x -1);
		}

	}

	slideRight(){
		var x = this.state.slide;
		x = ((x +1) % 4);
		this.setState({slide: x});

		slide(x);
	}

	componentDidMount(){
		anim($('#projects').children('h1'), 7, 1900);
		bubbles()
	}

	closeProject(){
		$('.bottom-orbit').removeClass('bottom-orbit')	
		this.setState({projectActive: false})
		this.setState({projectLoading : false})	
		this.setState({slide : 0})	
		// this.setState({projectFalse : true})					
	}

	setActive0(){
		this.setState({project : 0})			
		this.setState({projectLoad : true})
		this.setState({projectLoading : true})
		setTimeout(() => {
			this.setState({projectActive: true})

		}, 1000)
	}

	setActive1(){
		this.setState({project : 1})			
		this.setState({projectLoad : true})
		this.setState({projectLoading : true})
		setTimeout(() => {
			this.setState({projectActive: true})

		}, 1000)
	}

	setActive2(){
		this.setState({project : 2})			
		this.setState({projectLoad : true})
		this.setState({projectLoading : true})
		setTimeout(() => {
			this.setState({projectActive: true})

		}, 1000)
	}		

	render(){
		var project = <span></span>;

		if(this.state.project == 0){
			project = <Razu />
		}
		else if(this.state.project == 1){
			project = <Bean />
		}			
		else if(this.state.project == 2){
			project = <Hu />
		}		

		if(this.state.projectLoad){
				var proj = (<span id="project-container" className={classNames({
					'enable': this.state.projectActive
				})}>
					<div id="left" onClick={this.slideLeft.bind(this)}><i className="fa fa-chevron-left"></i></div>
					{project}
					<div id="right" onClick={this.slideRight.bind(this)}><i className="fa fa-chevron-right"></i></div>
					<div id="indicator">
						<div>
							<span className={classNames({
								'active': this.state.slide == 0
							})}></span>
							<span  className={classNames({
								'active': this.state.slide == 1
							})}></span>
							<span  className={classNames({
								'active': this.state.slide == 2
							})}></span>
							<span className={classNames({
								'active': this.state.slide == 3
							})}></span>
						</div>
					</div>								
				</span>		);	
		}

		return(
			<div id="projects">
				<div id="proj-load">!</div>
				<h1><span>P</span>
					<span>r</span>
					<span>o</span>
					<span>j</span>
					<span>e</span>
					<span>c</span>
					<span>t</span>
					<span>s</span>
				</h1>
				{proj}

				<span className={classNames({'open': this.state.projectActive})} onClick={this.closeProject.bind(this)} id="close">x</span>
				<div onClick={this.setActive0.bind(this)} id="Razu" className="project">
					<h2>Razu Music</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>	
				<div onClick={this.setActive1.bind(this)} id="Tell" className="project">
					<h2>Bean</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>	
				<div onClick={this.setActive2.bind(this)} id="VU" className="project">
					<h2>Hu API</h2>
					<span>
						<p className="view">View Project</p>
					</span>
				</div>									
			</div>

		)
	}
}