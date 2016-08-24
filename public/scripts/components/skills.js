import {anim, bars} from './../plugins/velocity.js';
import {charts, donuts} from './../plugins/chart.js';

export class Skills extends React.Component{

	handleClick(){
	    this.props.onUpdate('Projects');

	}

	componentDidMount(){
		// anim($('#projects-link'), 0, 1900)
		anim($('#skills').children('h1'), 7, 1900)
		anim($('#skills').children('p'), 0, 1900)		
		bars();
		donuts();
		// anim($('#person').children('h3'), 0, 1900)
		// anim($('#coder').children('h3'), 0, 1900)
	}

	render(){
		return(
			<div id="skills">
				<h1>
					<span>S</span>
					<span>k</span>
					<span>i</span>
					<span>l</span>
					<span>l</span>
					<span>s</span>
				</h1>
				<p>Skillset is diverse. Experience building APIs, animations, modular plugins, CRUD operations, Etc.</p> 
					<p>Supplementary experience in Adobe products, php, Python, JAVA, team leading and Agile work environments.  </p>
					<p>Versed in git, linux, aws. I believe in constantly learning new technologies and building the ones you already know. Quick learner and treats every challenge as an opportunity. </p>
				<div id="languages">
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-blue" ></div>
							<p>AngularJS</p>						
						</span>
					</span>	
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-pink" ></div>
							<p>Angular 2</p>						
						</span>
					</span>	
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-yellow"></div>
							<p>ReactJS</p>						
						</span>
					</span>	
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-green"></div>
							<p>NodeJS</p>						
						</span>
					</span>		
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-teal" ></div>
							<p>jQuery</p>						
						</span>
					</span>	
					<span className="chart" id="coding-languages">
						<span>
							<div className="fancy-orange" ></div>
							<p>Vanilla</p>						
						</span>
					</span>														
				</div>	

				<div id="basics">
				    <div>
				        <div id="mongo"></div>
				    </div>
				    <div>
				        <div id="sass"></div>
				    </div>
				    <div>
				        <div id="html"></div>
				    </div>
				    <div>
				        <div id="git"></div>
				    </div>	
				    <div>
				        <div id="gulp"></div>
				    </div>					    			    				    				    
				</div>										
															
			</div>
			)
	}
}