
export class Hu extends React.Component{

	handleClick(){
	}

	componentDidMount(){	
	}

	render(){
		return(
			<div id="razu-project">
				<div id="slider">
					<div id="auth" className="slide">
						<div className="top">
							<div>
								<h3>Authentication</h3>
								<p>Security and account management is very important in the development process. Implementing Passport and BCrypt I was able to perform high level authentication and encryption for sensitive information. </p>
							</div>
									
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/bght7kqL/embedded/js/dark/?menuColor=ca5282&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>

					<div id="hu-api" className="slide">
						<div className="top">
							<div>
								<h3>API</h3>
								<p>
								My jobs at Hu's main focus was to make the backend for the UI team to integrate. The snippet to the right only features publicly available information using MongoDB/MongooseJS.
								</p>							
							</div>
									
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/kafanegk/embedded/js/dark/?menuColor=ca5282&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>

					<div id="express" className="slide">
						<div className="top">
							<div>
								<h3>Express</h3>
								<p>
									NodeJS is a specialty of mine and as you can see on the right, I implemented the ExpressJS framework to handle our endpoints,server and routing.
								</p>							
							</div>

						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/kafanegk/embedded/js/dark/?menuColor=ca5282&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>	
					<div id="modeling" className="slide">
						<div className="top">
							<div>
								<h3>Modeling</h3>
								<p>
									I love MongooseJS. Its a library that makes MongoDB user friendly for JS use. Shown here is a user model schema for the api to handle information storage and user credentials.
								</p>							
							</div>
						</div>
						<div className="bottom">
							<iframe width="100%" height="300" src="//jsfiddle.net/markology/oeoqtk51/embedded/js/dark/?menuColor=ca5282&bodyColor=232323&fontColor=ffffff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>						
						</div>
					</div>	

				</div>
					
			</div>

			)
	}
}