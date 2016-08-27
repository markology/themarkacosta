
export class Razu extends React.Component{

	handleClick(){
	}

	componentDidMount(){	
	}

	render(){
		return(
			<div id="razu-project">
				<div id="slider">
					<div id="encapsulation" className="slide">
						<div className="top">
							<div className="left">
								<h3>Encapsulation</h3>
								<p>Encapsulation is the foundation of Object Oriented Design. It implies that your functions and data are coded without outside interference or misuse. Razu was built with this concept at the forefront.</p>
							</div>
							<a href="/assets/encapsulation.png" data-lightbox="image-0"data-title="Video & Music Components"  className="right">

							</a>	
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/9tpwbuho/embedded/js,html,css/dark/?menuColor=e1be2c&bodyColor=232323&fontColor=ffffff&accentColor=ffffff" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>						
						</div>
					</div>

					<div id="sockets" className="slide">
						<div className="top">
							<div className="left">
								<h3>Sockets</h3>
								<p>
								In order to perform functionality such as chat or notifications, I used a socket library (Socket.io) to implement live updates. 
								</p>							
							</div>
							<a  href="/assets/sockets.png" data-lightbox="image-1"data-title="Chat"  className="right">
									
							</a>	
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/eeqrqneu/embedded/js/dark/?menuColor=e1be2c&bodyColor=232323&fontColor=ffffff&accentColor=ffffff" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>					
						</div>
					</div>

					<div id="API" className="slide">
						<div className="top">
							<div>
								<h3>API</h3>
								<p>
									The API for Razu contains over 50 routes each with unique functionality. In the code to the right, you can see a sample of routes include a dynamic search. Endpoints were built with speed and error-handling in mind. 
								</p>							
							</div>
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/kyzoq845/embedded/js/dark/?bodyColor=232323&menuColor=e1be2c&fontColor=ffffff&accentColor=ffffff" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>			
						</div>
					</div>	
					<div id="UI" className="slide">
						<div className="top">
							<div className="left">
								<h3>UI</h3>
								<p>
									Designed the UI using normalize, bootstrap, google material and other CSS3 standards using SCSS/SASS. The UI was built to contrast the typical dark feel music sites boast and was designed for the user.
								</p>							
							</div>
							<a  href="/assets/razu.png" data-lightbox="image-2"data-title="Video & Music Components" className="right"></a>	
						</div>
						<a  href="/assets/profile.png" data-lightbox="image-3"data-title="Video & Music Components" className="bottom">
						</a>
					</div>	

				</div>
					
			</div>

			)
	}
}