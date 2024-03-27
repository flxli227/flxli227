import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery';
import YouTube from './../components/youTube/YouTube'


function GorillaSuit() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Elastic Octopus is a project to encourage the use of a creative experimental design process and embracing the unknown. There were no fixed output requirements; we were tasked to make something with the words "Wearable Bio-mimicry".
                <br/><br/>
                Our final output was the Power Suit, a suit which when worn made the user feel powerful. Made by Andy Carrera, Felix Li (me), Iris Wang and Niki Goransson.
            </p>
            <h2>How does it work?</h2>
            <p>The Power suit works by using many elements such as an increased height and broadness. The boxing gloves and weighted shoes encourage the user to stomp and punch. The sound of the punching and stomping are amplified for the user, making them feel powerful like Godzilla.</p>
            <img 
                src={require("./../assets/Elastic Octopus/Elastic Octopus Portfolio A3-03-resized-min.png")}
                alt="A poster about the key features of the Powersuit"
            />
            <h2>What effect does this power have?</h2>
            <p>After wearing the suit, participants did better in a physical test of push ups and sit ups, had a quicker reaction time and reported to be in a better mood.</p>
            <YouTube id="87hw3sM08SM"/>
            <h2>Process</h2>
            <p>We did many tests and explorations, most of them took inspiration from one of these animals or plant:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Elastic Octopus/Mimosa Drawing-min.png"),
                            alt: "An illustation of a Mimosa",
                        },
                    },
                    {
                        image: {
                            url: require("./../assets/Elastic Octopus/Bird Illustration-min.png"),
                            alt: "An illustation of a Bird",
                        },
                    },
                    {
                        image: {
                            url: require("./../assets/Elastic Octopus/Monkey Illustration-min.png"),
                            alt: "An illustation of a Monkey",
                        },
                    },
                ]}
            />
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Elastic Octopus/IMG_9578-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_9578-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/MimosaPlantBox.gif"),
                        thumbnail: require("./../assets/Elastic Octopus/MimosaPlantBox-thumbnail.gif"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMG_7374-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_7374-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Elastic Octopus/Andy Monkey Hug-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/Andy Monkey Hug-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMG_9568-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_9568-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/Beak-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/Beak-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Elastic Octopus/IMG_9584-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_9584-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/Joe as a Bird-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/Joe as a Bird-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMAG0477-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMAG0477-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Elastic Octopus/Andy Monkey Hug-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/Andy Monkey Hug-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMG_9649-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_9649-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMG_9653-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMG_9653-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Elastic Octopus/IMAG0481-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMAG0481-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Elastic Octopus/IMAG0472-resized-min.jpg"),
                        thumbnail: require("./../assets/Elastic Octopus/IMAG0472-thumbnail-min.jpg"),
                    },
                ]}
            />
        </>
    )
}

export default GorillaSuit