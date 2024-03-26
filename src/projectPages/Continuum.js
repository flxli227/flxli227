import React from 'react';
import ImageGallery from 'react-image-gallery';

class Continuum extends React.Component {
    render(){
        return (
            <>
                <h2>What is it?</h2>
                <p>Continuum is an evolving interactive exhibition that was first displayed at this year's Imperial Festival and went on to be selected to exhibit at the Victoria & Albert Museum's Friday Late in July 2017.</p>
                <ImageGallery
                    lazyLoad={true}
                    items={[
                        {
                            original: require("./../assets/Continuum/DSC0020-resized-min.jpg"),
                            thumbnail: require("./../assets/Continuum/DSC0020-thumbnail-min.jpg"),
                        },
                        { 
                            original: require("./../assets/Continuum/DSC0021-resized-min.jpg"),
                            thumbnail: require("./../assets/Continuum/DSC0021-thumbnail-min.jpg"),
                        },
                        { 
                            original: require("./../assets/Continuum/DSC0028-resized-min.jpg"),
                            thumbnail: require("./../assets/Continuum/DSC0028-thumbnail-min.jpg"),
                        },
                        { 
                            original: require("./../assets/Continuum/Crowd-resized-min.jpg"),
                            thumbnail: require("./../assets/Continuum/Crowd-thumbnail-min.jpg"),
                        },
                        { 
                            original: require("./../assets/Continuum/Continuum-Logo-Final-Web-1000px.png"),
                            thumbnail: require("./../assets/Continuum/Continuum-Logo-Final-Web-1000px.png"),
                        },
                    ]}
                />
            </>
        )
    }
}

export default Continuum