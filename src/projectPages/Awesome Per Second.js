import MultiColumn from './../components/multiColumn/MultiColumn'

function AwesomePerSecond() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Awesome per Second is a solo submission for "<a href="https://itch.io/jam/extra-credits-game-design-jam">The Very First Extra Credits Game Design Jam!</a>", which lasted 48 hours.
                <br/><br/>
                The theme of the jam was Awesome per Second, trying to fit as much intrinsic fun into as little time as possible. I wanted to explore idle games, a genre known for making players wait, and fitting as much happening at once.
                <br/><br/>
                Click <a href="https://flxli227.itch.io/awesome-per-second">here</a> to play Awesome per Second.
            </p>

            <h2>What Software did I use?</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Software Logo/Unity.png"),
                            alt: "Unity Logo",
                            filters: ["brightness(99)"]
                        },
                        title: "Unity Engine, C# Scripting"
                    },
                    {
                        image: {
                            url: require("./../assets/Software Logo/Illustrator.png"),
                            alt: "Adobe Illustrator Logo"
                        },
                        title: "Adobe Illustrator"
                    },
                ]}
            />
            <h2>Game Feel</h2>
            <p>This is how I wanted the game to feel:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Time-cropped.png"),
                            alt: "Time Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Competitive",
                        body:"Time attack, players can compare time taken (score)"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Mind Blow-cropped.png"),
                            alt: "Mind Blow Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Overwhleming",
                        body:"Juxtaposing the calm, patient nature of idle games"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Jigsaw Pieces-cropped.png"),
                            alt: "Jigsaw Pieces Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Efficient",
                        body:"No task should feel redundant"
                    },
                ]}
            />
            <p>How I achieved it:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Dice-edited.png"),
                            alt: "Dice Icon",
                            filters: ["invert(1)"]
                        },
                        body:"I included no random elements that can speed up or slow down the player."
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Hand 2-cropped.png"),
                            alt: "Hand 2 Icon",
                            filters: ["invert(1)"]
                        },
                        body:"The left hand controls 3 different tasks, while the right is occupied with clicking"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Balance-cropped.png"),
                            alt: "Balance Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Balancing Awesome given by each task"
                    },
                ]}
            />
        </>
    )
}

export default AwesomePerSecond