import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery'

function SurrealDream() {
    return (
        <>
            <h2>What is it?</h2>
            <p>Surreal Dream is an escape room, which was a project for the Imperial College Advanced Hackspace.</p>
            <p>It was made in 2 months by Becky Hartnup, Felix Li (me) and Vaikkun Venkat.</p>
            <h2>My Role in the Team</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Jigsaw Pieces-cropped.png"),
                            alt: "Puzzle Icon",
                            filters: ["invert(1)"]
                        },
                        body:'Level designer'
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Umbrella-cropped.png"),
                            alt: "Umbrella Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Environmental Designer / Prop Maker"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Gentleman-cropped.png"),
                            alt: "Gentleman Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Live actor (During game)"
                    },
                ]}
            />
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Escape Room/Book-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Book-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Chimes 2-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Chimes 2-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Hat Band-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Hat Band-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Hat Mirror-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Hat Mirror-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Small Note-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Small Note-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Table-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Table-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Tree-cropped-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Tree-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Chess 1-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Chess 1-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Chess 2-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Chess 2-thumbnail-min.jpg"),
                    },
                ]}
            />
            <h2>Theme</h2>
            <p>Many escape rooms have a science or time travel theme.</p>
            <p>We wanted an escape room that can evoke a certain feeling while being located at a university lecture hall. We felt surrealism have enough reference material but still have creative freedom.</p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Escape Room/Concept-01-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Concept-01-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Concept-02-resized-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Concept-02-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Concept-03-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Concept-03-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/VIDEO0255_0000000799.jpg"),
                        thumbnail: require("./../assets/Escape Room/VIDEO0255_0000000799-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Escape Room/Final-min.jpg"),
                        thumbnail: require("./../assets/Escape Room/Final-thumbnail-min.jpg"),
                    },
                ]}
            /> 
            <h2>Puzzles</h2>
            <p>The aim of the escape room is to improve teamwork and communication of the players.</p>
            <p>Our first puzzle can only be if everyone is communicating. This is how it works:</p>
            <img
                src={require("./../assets/Escape Room/Blindfold-min.jpg")}
                alt="Two people solving the blindfold puzzle"
            />
            <ul>
                <li>
                    Players are blindfolded and taken into the escape room.
                </li>
                <li>
                    They are each given a pair of headphones and a sound clue will play​
                </li>
                <li>
                    When the sound finishes, they are instructed to take their headphones off.
                </li>
            </ul>
            <img
                src={require("./../assets/Escape Room/Paintings-min.jpg")}
                alt="Two people solving the painting puzzle"
            />
            <p>To solve the puzzle:</p>
            <ul>
                <li>
                    They have to realise each player is hearing a different sound
                </li>
                <li>
                    Communicate what they have heard
                </li>
                <li>
                    Decide where they are with reference to one of the pictures on the wall.
                </li>
            </ul>
        </>
    )
}

export default SurrealDream