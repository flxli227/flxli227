import './ProjectList.css';
import ProjectCard from './../projectCard/ProjectCard';

function Content(props) {

  let projectsJSX = props.projectsData.map((project) => 
    <ProjectCard
        key = {project.name}
        name = {project.name}
        imageURL = {project.imageURL}
        imageAlt = {project.imageAlt}
        body = {project.body}
    />
  )

  return (
    <div className="projectList">
        {projectsJSX}
    </div>
  );
}

export default Content;
