import {Link} from "react-router-dom";
import React from 'react';
// import './NoPage.css';

class NoPage extends React.Component {

  render() {
      
    return (
      <div className="Content">
        <div className="markdownShowFlexContainer">
            <div className="markdownContainer">
              <h1>This page does not exist...</h1>
              <p>Check out my projects <Link to="/projects">here</Link>!</p>
            </div>
        </div>
      </div>
    );
  }
}

export default NoPage;
