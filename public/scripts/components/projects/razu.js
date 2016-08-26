
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
						<div className="left">
							<h3>Encapsulation</h3>
							<p></p>
						</div>
						<div className="right">
							<span className="top"></span>
							<span className="bottom"><iframe width="100%" height="300" src="//jsfiddle.net/markology/9tpwbuho/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe></span>
						</div>					
					</div>
					<div id="sockets" className="slide">
						<div className="left">
							<h3>Sockets</h3>
							<p>In order to perform certain functions on the website such as chat, notifications or real-time updates I had to implement the use of sockets. 
							Implementing a library called Socket.io I was able to accomplish several different applications. 
							Example on the right shows a chat with similar functionality as the facebook messenger application.</p>
						</div>
						<div className="right">
							<span className="top"></span>
							<span className="bottom"><iframe width="100%" height="300" src="//jsfiddle.net/markology/eeqrqneu/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe></span>
						</div>					
					</div>
					<div id="API" className="slide">
						<div className="left">
							<h3>API</h3>
							<p></p>
						</div>
						<div className="right">
							<span className="top"></span>
							<span className="bottom"><iframe width="100%" height="300" src="//jsfiddle.net/markology/kyzoq845/embedded/js,html,css,result/dark/" allowfullscreen="allowfullscreen" frameborder="0"></iframe></span>
						</div>					
					</div>
					<div id="UI" className="slide">
						<div className="left">
							<h3>UI</h3>
							<p></p>
						</div>
						<div className="right">
							<span className="top"></span>
							<span className="bottom"></span>
						</div>					
					</div>
					<div id="indicator">
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			)
	}
}