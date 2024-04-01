import MultiColumn from './../components/multiColumn/MultiColumn'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery'

function AwesomePerSecond() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Awesome per Second is a solo submission for "<a href="https://itch.io/jam/extra-credits-game-design-jam" target="_blank" rel="noreferrer">The Very First Extra Credits Game Design Jam!</a>", a 48 hour game jam.
                <br/><br/>
                The theme of the jam was Awesome per Second, trying to fit as much intrinsic fun into as little time as possible. 
                <br/><br/>
                Click <a href="https://flxli227.itch.io/awesome-per-second" target="_blank" rel="noreferrer">here</a> to play Awesome per Second.
                <br/><br/>
                I made Awesome Per Second on Unity (C#) and made the assets on Adobe Illustrator.
            </p>

            <h2>What Software did I use?</h2>
            <p>
                I felt like the opposite of the brief is trying to have extrinsic fun, and to be the genre of idle games fit that description. 
                <br/><br/>
                Idle games typically require the player to do an action in the early game to earn a currency which they can spend on things that generate currency. 
                <br/><br/>
                As the game goes on, the automatic currency generation is so great that the player doesn’t have to do anything and typically they wait until they can buy the next thing.
                <br/><br/>
                A good example of an idle game is <a href="https://orteil.dashnet.org/cookieclicker/" target="_blank" rel="noreferrer">Cookie Clicker</a>.
            </p>
            <img 
                src={require("./../assets/Awesome per Second/Cookie Clicker.jpg")}
                alt="A screenshot of Cookie Clicker"
            />
            <p>
                For my game, I wanted to subvert that expectation and deliver an idle game where you are not idle at all.
            </p>
            
            <h2>Game Feel</h2>
            <p>I wanted the game to feel:</p>
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
                        title: "Overwhelming",
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
                        body:"I included no random elements that can speed up or slow down the player"
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
            <h2>Extra touches</h2>
            <p>
                I wanted to add a story to a very abstract game so the player has a reason to do their quite random actions.
                <br/><br/>
                I made the story about me, making and submitting my first game and submitting it to this very game jam. The main character tries to add as much “fun” in their game by making as many gameplay elements as he can and making it up as he goes. (In a way, this was very meta since this is exactly what I did for this game jam.)
                <br/><br/>
                So for the colour scheme I used the same colours as the game jam. For the characters, I drew in the same artstyle as the Extra Credits YouTube channel, the hosts of this jam.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Awesome per Second/Screenshot1-min.png"),
                        thumbnail: require("./../assets/Awesome per Second/Screenshot1-min.png"),
                    },
                    {
                        original: require("./../assets/Awesome per Second/Screenshot2-min.png"),
                        thumbnail: require("./../assets/Awesome per Second/Screenshot2-min.png"),
                    },
                    {
                        original: require("./../assets/Awesome per Second/Screenshot3-min.png"),
                        thumbnail: require("./../assets/Awesome per Second/Screenshot3-min.png"),
                    },
                    {
                        original: require("./../assets/Awesome per Second/Screenshot4-min.png"),
                        thumbnail: require("./../assets/Awesome per Second/Screenshot4-min.png"),
                    },
                    {
                        original: require("./../assets/Awesome per Second/Screenshot5-min.png"),
                        thumbnail: require("./../assets/Awesome per Second/Screenshot5-min.png"),
                    },
                ]}
            />
            <p>
                To add to the chaotic and frantic nature of the game. I added fake buttons in the main menu screen that start the game when the player hovers their mouse in the general area. 
                <br/><br/>
                This is so the game starts before the player clicks to start the game, making them feel like the game rushed to begin before they were ready.
            </p>
            <Video path={require("./../assets/Awesome per Second/FakeMenu.mp4")}/>
            <h2>Conclusion</h2>
            <p>
                I am extremely proud of how the game turned out. 
                <br/><br/>
                Making your first game, making it functional and submitting it within the game jam time limit is not easy.
                <br/><br/>
                On top of that, I’ve received many warm comments from other players:
                <br/><br/>
                <i><q>Playing it feels like watching an episode of Extra Credits, Only difference is that I get to participate in it</q></i> - vicksonzero
                <br/><br/>
                <i><q>I think this is the best game of this jam, you made a perfect combination of the theme, jokes and a challenge</q></i> - monkopus
            </p>
        </>
    )
}

export default AwesomePerSecond