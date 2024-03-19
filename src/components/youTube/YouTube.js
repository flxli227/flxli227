import styles from './YouTube.module.css';

function YouTube(props){
    return(
        <div className={styles.youtubeContainer}>
            <div>
                <iframe 
                    src={"https://www.youtube.com/embed/" + props.id} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default YouTube