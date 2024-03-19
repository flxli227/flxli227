import './ContentAndFooter.css';
import ProjectList from './../projectList/ProjectList';
import About from './../about/About';
import JavascriptPageShow from './../javascriptPageShow/JavascriptPageShow';
import Footer from './../footer/Footer';
import YouTube from '../youTube/YouTube';
import Video from '../video/Video';

function ContentAndFooter(props) {

  let content;
  if(props.pageContent === "Projects"){
    content = (
      <>
        <h1 className="pageTitle">Projects</h1>
        <ProjectList
          projectsData = {props.projectsData}
        />
      </>
    );
    document.title = "Felix Li - Projects";
  } else if(props.pageContent === "About"){
    content = (
      <>
        <About/>
      </>
    );
    document.title = "Felix Li - About";
  } else if(props.pageContent === "JavascriptPage"){
    let mainImageOrVideo;
    if(props.titleVideoOverride){ // If video or YouTube
      if(props.titleVideoOverride.youTubeId){ // If YouTube ID
        mainImageOrVideo = (
          <div className="mainVideoContainer">
            <YouTube id={props.titleVideoOverride.youTubeId}/>
          </div>
        )
      }else if(props.titleVideoOverride.localFileLocation){ // If video
        mainImageOrVideo = (
          <div className="mainVideoContainer">
            <Video path={props.titleVideoOverride.localFileLocation}/>
          </div>
        )
      }
    }else{ // If image
      mainImageOrVideo = (
        <img 
          className="mainImage"
          src={props.imageURL}
          alt={props.imageAlt}
        />
      )
    }
    content = (
      <>
        <h1 className="pageTitle">{props.name}</h1>
        {mainImageOrVideo}
        <JavascriptPageShow
          name = {props.name}
          imageURL = {props.imageURL}
          imageAlt = {props.imageAlt}
        />
      </>
    );
    document.title = "Felix Li - "+ props.name;
  }

  return (
    <div className="ContentAndFooter">
      <div className="Content">
        {content}
      </div>
      <Footer/>
    </div>
  );
}

export default ContentAndFooter;
