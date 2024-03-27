import React from 'react';
import ImageGallery from 'react-image-gallery'

function Superform() {
    return (
        <>
            <h2>What is it?</h2>
            <p>Superform is a fold-able cardboard chair for two people.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Superform/IMG_0186 copy-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMG_0186 copy-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/DSCF1739-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/DSCF1739-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/DSCF1740-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/DSCF1740-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/DSCF1741-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/DSCF1741-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/DSCF1742-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/DSCF1742-thumbnail-min.jpg"),
                    },
                ]}
            />
            <h2>Process</h2>
            <p>I wanted to make a chair that promotes social interaction and also allow social isolation when the user chooses to.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Superform/IMAG0729-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0729-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0730-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0730-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0731-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0731-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0732-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0732-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0735-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0735-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Superform/IMAG0736-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0736-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0746-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0746-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0747-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0747-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0752-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0752-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0754-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0754-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0756-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0756-thumbnail-min.jpg"),
                    },
                ]}
            />
            <p>Folding chairs became a big theme and I wanted to explore folding and hinges.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Superform/IMAG0757-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0757-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0759-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0759-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0760-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0760-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0766-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0766-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0769-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0769-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0773-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0773-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0777-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0777-thumbnail-min.jpg"),
                    },
                ]}
            />
            <p>I settled with an idea and prototyped it in 3mm plywood.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Superform/IMAG0789-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0789-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0790-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0790-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Superform/IMAG0791-resized-min.jpg"),
                        thumbnail: require("./../assets/Superform/IMAG0791-thumbnail-min.jpg"),
                    },
                ]}
            />
            <p>The wood started to bend if you sat on it in a certain way, so I decided to go back to using cardboard. This is because I could add more thickness to the panels without it being too heavy.</p>
            <img 
                src = {require("./../assets/Superform/IMAG0842-resized-min.jpg")}
                alt = "Bottom spiral of chair"
            />
        </>
    )
}

export default Superform