
export class Bean extends React.Component{

	handleClick(){
	}

	componentDidMount(){	
	}

	render(){
		return(
			<div id="razu-project">
				<div id="slider">
				
					<div id="webpack" className="slide">
						<div className="top">
							<h3>Bundling</h3>
							<p>Webpack is a code transpiler/bundler that offers a ton of functionality to compress and improve your production. I use webpack primarly, but I have used task runners such as Gulp implementing SystemJS.</p>
									
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/y3LkahLx/embedded/js/dark/?menuColor=6ee3ff&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>
					<div id="firebase" className="slide">
						<div className="top">
							<h3>Firebase</h3>
								<p>Firebase is an all in one solution that provides realtime database performance, error handling and cloud networking. </p>
									
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/q284fbxt/embedded/js/dark/?menuColor=6ee3ff&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>
					
					<div id="immutable" className="slide">
						<div className="top">
								<h3>Immutability</h3>
								<p>
									Immutability has a range of benefits including efficiency, simplified coding strategy and change detection. This allows for cleaner code, faster systems and smooth development process.
								</p>							
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/Lm3dzzxm/embedded/js/dark/?menuColor=6ee3ff&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>	


					<div id="git" className="slide">
						<div className="top">
							<div className="left">
								<h3>Version Control</h3>
								<p>
									For every project git and GitHub are invaluable to handling goals in an Agile environment,  keep track of updates/backups and collaborating in a team environment.
								</p>							
							</div>
							<a  href="/assets/git.png" data-title="Repo" className="right"></a>	
						</div>
						<a  href="/assets/git1.png" data-title="Commits"  className="bottom">
						</a>
					</div>	

				</div>
					
			</div>

			)
	}
}