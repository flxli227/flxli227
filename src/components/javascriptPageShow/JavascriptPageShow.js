import './JavascriptPageShow.css';
import React, { Component } from 'react';
import AwesomePerSecond from '../../projectPages/Awesome Per Second';
import BarbourGinInfusers from '../../projectPages/Barbour Gin Infusers';
import Coinbox from '../../projectPages/Coinbox';
import Continuum from '../../projectPages/Continuum';
import Customizer from '../../projectPages/Customizer';
import Firefly from '../../projectPages/Firefly';
import GorillaSuit from '../../projectPages/Gorilla Suit';
import ME2ScooterProject from '../../projectPages/ME2 Scooter Project';
import NewSpawnBaby from '../../projectPages/New Spawn Baby';
import Notbook from '../../projectPages/NotBook';
import Pool2 from '../../projectPages/Pool 2';
import Superform from '../../projectPages/Superform';
import SurrealDream from '../../projectPages/Surreal Dream';
import Timie from '../../projectPages/Timie';

class JavascriptPageShow extends Component {  

  showCorrectPage = (projectName)=>{
    if(projectName === "Awesome Per Second"){
      return <AwesomePerSecond/>      
    } else if(projectName === "Barbour Gin Infuser"){
      return <BarbourGinInfusers/>  
    } else if(projectName === "Coinbox"){
      return <Coinbox/>  
    } else if(projectName === "Continuum"){
      return <Continuum/>  
    } else if(projectName === "Customizer"){
      return <Customizer/>  
    } else if(projectName === "Firefly"){
      return <Firefly/>  
    } else if(projectName === "Gorilla Suit"){
      return <GorillaSuit/>  
    } else if(projectName === "ME2 Scooter Project"){
      return <ME2ScooterProject/>  
    } else if(projectName === "New Spawn Baby"){
      return <NewSpawnBaby/>  
    } else if(projectName === "Notbook"){
      return <Notbook/>  
    } else if(projectName === "Pool 2"){
      return <Pool2/>  
    } else if(projectName === "Superform"){
      return <Superform/>  
    } else if(projectName === "Surreal Dream"){
      return <SurrealDream/>  
    } else if(projectName === "Timie"){
      return <Timie/>  
    }
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <div className="markdownShowFlexContainer">
          <div className="markdownContainer">
            {this.showCorrectPage(this.props.name)}
          </div>
      </div>
    )
  }
}
  
export default JavascriptPageShow
