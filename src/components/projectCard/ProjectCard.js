import styles from './ProjectCard.module.css';
import {Link} from "react-router-dom";
import {sluggify} from './../../Utils'

function ProjectCard(props) {
  const link = "/project/" + sluggify(props.name);

  return (
    <div className={styles.ProjectCard}>
        <Link to={link}>
          <div className={styles.imageContainer}>
            <div>
                <img 
                  src={props.imageURL}
                  alt={props.imageAlt}
                />
            </div>
          </div>
          <h2 className={styles.title}>{props.name}</h2>
          <p className={styles.year}>{props.year}</p>
        </Link>
        <p  className={styles.body}>{props.body}</p>
    </div>
  );
}

export default ProjectCard;
