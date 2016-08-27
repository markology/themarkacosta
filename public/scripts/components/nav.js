import classNames from 'classnames';
import { connect } from 'react-redux';
import {changeState } from './../redux/actions.js';
import store from './../redux/store'
import Isvg from 'react-inlinesvg'
export var items = [
      {"icon": "fa fa-home Home", "option": "Home", "url": "/Home"},
      {"icon": "fa fa-user About", "option": "About", "url": "/About"},
      {"icon": "fa fa-code Skills", "option": "Skills", "url": "/Skills"},
      {"icon": "fa fa-file-image-o Projects", "option": "Projects", "url": "/Projects"},
      {"icon": "fa fa-envelope Contact", "option": "Contact", "url": "/Contact"}];
 


export var socials = [
      {"icon": "fa fa-linkedin", "option": "LinkedIn", "url": "www.linkedin.com"},
      {"icon": "fa fa-github", "option": "GitHub", "url": "www.github.com/papasquats"}];


// load loadJSON(callback, filename) {   

//     var xobj = new XMLHttpRequest();
//         xobj.overrideMimeType("application/json");
//     xobj.open('GET', filename, true); // Replace 'my_data' with the path to your file
//     xobj.onreadystatechange = function () {
//           if (xobj.readyState == 4 && xobj.status == "200") {
//             // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
//             callback(xobj.responseText);
//           }
//     };
//     xobj.send(null);  
//  }

@connect((store)=>{
    return {
        activeState:  store.activeState
    }
})





export class Nav extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      activeItem: store.getState().activeState
    }
  }

  handleClick = (event) =>{
    store.dispatch(changeState(event.target.classList[2]))
    this.setState({activeItem: event.target.classList[2]} )
    this.props.onUpdate(event.target.classList[2]);
  }
  generateItem(item){

    return <NavItem onClick={this.handleClick} className={classNames({
      [item.icon.toString()]: true,
      'active': (item.option.toString() == this.state.activeItem.toString())
    })} key={item.option} option={item.option} url={item.url} />
  }


  render() {
    var p = this;
    var k = [];
    var items = this.props.items.map( function(item){k.push( p.generateItem(item))}, this);

      return (
          <ul> 
            <span id="embed-back"></span>
            <span id="logo">
            <Isvg src="/assets/themarkacosta.svg"></Isvg>
            </span>
            <span id="nav-items">{k}</span>
            <span id="socials">
              <SocialBar socials={this.props.socials}/>

            </span>
          </ul>

      );
    }
};



class SocialBar extends React.Component{
   constructor(props) {
      super(props);
    } 

  handleClick = (event) =>{

  }

  generateItem(social){
    
    var liClasses = classNames({
      [social.icon.toString()]: true,
    })      
    return <NavItem onClick={this.handleClick} className={liClasses} key={social.option} option={social.option} url={social.url} />
  }


    render() {
      var p = this;
      var k = [];
      var socials = this.props.socials.map( function(social){k.push( p.generateItem(social))}, this);
        return (
              <div>
              {k}
              </div>

        );
    }
};
class NavItem extends React.Component{


    render (){
        return (
            <li onClick={this.props.onClick}>
              <a>
                <i className={this.props.className }></i>  
                <span>{this.props.option}</span>
              </a>
            </li>
        );
    }
};





// ReactDOM.render(
//  <Nav items={items} />,
//   document.getElementById('nav')
// );

// ReactDOM.render(
//  <SocialBar socials={socials} />,
//   document.getElementById('socials')
// );

