import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
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
                src={require("./../assets/Elastic Octopus/Elastic Octopus Portfolio A3-03.png")}
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
                            url: require("./../assets/Elastic Octopus/Mimosa Drawing.png"),
                            alt: "An illustation of a Mimosa",
                        },
                    },
                    {
                        image: {
                            url: require("./../assets/Elastic Octopus/Bird Illustration.png"),
                            alt: "An illustation of a Bird",
                        },
                    },
                    {
                        image: {
                            url: require("./../assets/Elastic Octopus/Monkey Illustration.png"),
                            alt: "An illustation of a Monkey",
                        },
                    },
                ]}
            />
            <Gallery
                images={[
                    require("./../assets/Elastic Octopus/IMG_9578.jpg"),
                    require("./../assets/Elastic Octopus/Mimosa Plant Box.gif"),
                    require("./../assets/Elastic Octopus/IMG_7374.jpg"),
                    require("./../assets/Elastic Octopus/Andy Monkey Hug.jpg"),
                    require("./../assets/Elastic Octopus/IMG_9568.jpg"),
                    require("./../assets/Elastic Octopus/Beak.png"),
                    require("./../assets/Elastic Octopus/IMG_9584.jpg"),
                    require("./../assets/Elastic Octopus/Joe as a Bird.png"),
                    require("./../assets/Elastic Octopus/IMAG0477.jpg"),
                    require("./../assets/Elastic Octopus/Andy Monkey Hug.jpg"),
                    require("./../assets/Elastic Octopus/IMG_9649.jpg"),
                    require("./../assets/Elastic Octopus/IMG_9653.jpg"),
                    require("./../assets/Elastic Octopus/IMAG0481.jpg"),
                    require("./../assets/Elastic Octopus/IMAG0472.jpg"),
                ]}
            />
        </>
    )
}

export default GorillaSuit