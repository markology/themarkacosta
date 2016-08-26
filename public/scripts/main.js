
import Isvg from 'react-inlinesvg'
import store from './redux/store.js';
import {Home} from './components/home.js';
import {About} from './components/about.js';
import {Contact} from './components/contact.js';
import {Skills} from './components/skills.js';
import {Projects} from './components/projects.js';
import {Provider} from 'react-redux'
import {Nav, items, socials} from './components/nav.js'
import {gunk , drawText, positionParticles} from './plugins/gunk.js';
import {particle} from './plugins/particle.js';
import {load} from './plugins/load.js';





class TheMarkAcosta extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeItem: store.getState().activeState,
      particles: [],
      ctx: null,
      keyword: "I'm Mark ,",
      W:0,
      H:0,
      minDist: 6,
      imageData: null,
      firstLoad:true,
      firstLoadHome: true

    }

  }

  componentDidMount(){
    gunk(this);
    particle();
  }

  update(state){
	 this.setState({activeItem: state})  	
   this.setState({firstLoad: false})
   this.setState({firstLoadHome: false})
    this.setState({particles: []});
   
  }


  render() {
    if(!this.state.firstLoadHome){

      $('#content-cover').show();

      drawText(this);
      positionParticles(this);


      setTimeout(() => {
          load();
        }, 200)      

    } 

  	var h = null;

    if(this.state.activeItem == 'Home' )
    {
      $($('canvas')[1]).show() ;    
      h = <Home  first={this.state.firstLoad} onUpdate={this.update.bind(this)} />
    }
  	else if( this.state.activeItem == "About"){
      $($('canvas')[1]).hide();  		
      h = <About onUpdate={this.update.bind(this)} />
    }
  	else if( this.state.activeItem == "Skills"){
      $($('canvas')[1]).hide();  		
      h = <Skills />  		
    }
  	else if( this.state.activeItem == "Projects"){
      $($('canvas')[1]).hide();  		
      h = <Projects />
    }
  	else if( this.state.activeItem == "Contact"){
      $($('canvas')[1]).hide() ; 		
      h =  <Contact />  
    }
  	else{h = <h1>Invalid Choice</h1>}  		  		  	

    return (
    <span>
       <p id="breadcrumb">{'<' + this.state.activeItem + '/>'}</p>    
       <div id="nav">
  	      <div id="nav-container">
  	      	<Nav onUpdate={this.update.bind(this)} items={items} socials={socials}/>
  	      </div>
       </div>
       <div id="content">
         {h}
         <span id="load">
            <div id="load-brand"><Isvg src="/assets/themarkacosta.svg"></Isvg></div>
         
            <p id="load-text">Mark is thinking</p>
            <div id="progress-bar"><span id="progress"></span></div>
         </span>
         <span id="content-cover"></span>
       </div>
       <span style={{position: 'absolute',top: '0'}} id="particlesjs"></span>
    </span>
    )
  }
}

ReactDOM.render(
	<Provider store={store}>
 <TheMarkAcosta  />
  </Provider>

 ,
  document.getElementById('the-mark-acosta')
);
