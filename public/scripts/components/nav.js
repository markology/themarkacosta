import classNames from 'classnames';
import Isvg from 'react-inlinesvg'
export var items = [
      {"icon": "fa fa-home Home", "option": "Home", "url": "/Home"},
      {"icon": "fa fa-user About", "option": "About", "url": "/About"},
      {"icon": "fa fa-code Skills", "option": "Skills", "url": "/Skills"},
      {"icon": "fa fa-file-image-o Projects", "option": "Projects", "url": "/Projects"},
      {"icon": "fa fa-envelope Contact", "option": "Contact", "url": "/Contact"}];
 


export var socials = [
      {"icon": "fa fa-github", "option": "GitHub", "url": "http://www.github.com/papasquats"}];






export class Nav extends React.Component{

  constructor(props) {
    super(props);

    this.state = {
      activeItem:  'Home'
    }
  }

  handleClick = (event) =>{
    this.setState({activeItem: event.target.classList[2]} )
    this.props.onUpdate(event.target.classList[2]);
  }
  generateItem(item){

    return <NavItem onClick={this.handleClick} className={classNames({
      [item.icon.toString()]: true,
      'active': (item.option.toString() == this.state.activeItem.toString())})} 
      key={item.option} option={item.option} url={item.url} />
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
      var t = null;

      if(this.props.option == 'LinkedIn' || this.props.option == 'GitHub'){
        t = (<a href={this.props.url}>
                <i className={this.props.className }></i>  
                <span>{this.props.option}</span>
              </a>)
      }
      else{
        t = (<a>
                <i className={this.props.className }></i>  
                <span>{this.props.option}</span>
              </a>);
      }
        return (
            <li onClick={this.props.onClick}>
              {t}
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

