import styles from './Video.module.css';

function Video(props){
    // Automatically get file extention from the letters after the last "." in path
    let videoFormat = "video/" + props.path.slice(props.path.lastIndexOf('.') + 1);

    return(
        <video 
            className={styles.video}
            autoPlay={true}
            muted
            loop 
            playsInline
            controls
        >
                <source src={props.path} type={videoFormat}/>
        </video>
    )
}

export default Video