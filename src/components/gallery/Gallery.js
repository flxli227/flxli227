import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './Gallery.css';

function Gallery(props){

    const imageGalleryImages  = props.images.map((image) => 
        ({
            original: image,
            thumbnail: image,
        })
    );

    return(
        <ImageGallery items={imageGalleryImages}/>
    )
}

export default Gallery