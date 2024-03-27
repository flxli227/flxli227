import styles from './Video.module.css';

function Video(props){
    // Automatically get file extention from the letters after the last "." in path
    let videoFormat = "video/" + props.path.slice(props.path.lastIndexOf('.') + 1);

    return(
        <video 
            className={styles.video}
            preload={props.lazyLoad ? "metadata" : "auto"} //If lazy loading is truth-y, don't load the full video unless the user plays it
            autoPlay={props.lazyLoad ? false : true} //If lazy loading is false-y, autoplay the video
            muted={props.lazyLoad ? false : true}  //If lazy loading is false-y, and the video plays by itself, mute the video
            loop 
            playsInline
            controls
        >
                <source src={props.path} type={videoFormat}/>
        </video>
    )
}

export default Video