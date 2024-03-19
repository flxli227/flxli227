import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'

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
            <Gallery
                images={[
                    require("./../assets/Escape Room/Book.png"),
                    require("./../assets/Escape Room/Chimes 2.png"),
                    require("./../assets/Escape Room/Hat Band.png"),
                    require("./../assets/Escape Room/Hat Mirror.png"),
                    require("./../assets/Escape Room/Small Note.png"),
                    require("./../assets/Escape Room/Table.png"),
                    require("./../assets/Escape Room/Tree.png"),
                    require("./../assets/Escape Room/Chess 1.png"),
                    require("./../assets/Escape Room/Chess 2.png"),
                ]}
            />
            <h2>Theme</h2>
            <p>Many escape rooms have a science or time travel theme.</p>
            <p>We wanted an escape room that can evoke a certain feeling while being located at a university lecture hall. We felt surrealism have enough reference material but still have creative freedom.</p>
            <Gallery
                images={[
                    require("./../assets/Escape Room/Concept-01.png"),
                    require("./../assets/Escape Room/Concept-02.png"),
                    require("./../assets/Escape Room/Concept-03.png"),
                    require("./../assets/Escape Room/VIDEO0255_0000000799.jpg"),
                    require("./../assets/Escape Room/Final.jpg"),
                ]}
            />

            <h2>Puzzles</h2>
            <p>The aim of the escape room is to improve teamwork and communication of the players.</p>
            <p>Our first puzzle can only be if everyone is communicating. This is how it works:</p>
            <img
                src={require("./../assets/Escape Room/Blindfold.png")}
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
                src={require("./../assets/Escape Room/Paintings.png")}
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