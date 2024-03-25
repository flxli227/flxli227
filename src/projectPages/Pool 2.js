import MultiColumn from './../components/multiColumn/MultiColumn'
import YouTube from './../components/youTube/YouTube.js'
import Video from './../components/video/Video'
import Gallery from './../components/gallery/Gallery'

function Pool2() {
    return (
        <>
            <p>
                Pool 2 is a local multiplayer game about pool but each player has their own cue ball and shots happen in real time.
                <br/><br/>
                Click <a href="https://flxli227.itch.io/8-ball-pool-2" target="_blank" rel="noreferrer">here</a> to play the demo. (For desktop only.)
            </p>
            <h2>Inspiration</h2>
            <p>
                These are the games projects I have coded before on Unity, they are very simple, 2D and every action is predetermined.
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Awesome per Second/AwesomePerSecond.jpg"),
                            alt: "A screenshot of Awsome per Second the game",
                        },
                        title: "Awesome Per Second"
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Prototype Screenshots-01.png"),
                            alt: "A screenshot of Not-Book, the interactive learning platform"
                        },
                        title: "Not-Book"
                    },
                ]}
            />
            <p>
                I wanted to move onto making more complex games. To do that I wanted to learn how to use the Unity 3D engine with physics. So I started coding a Pool game but I wanted mine to be a unique and novel experience so I added a twist!
            </p>

            <h2>Journey</h2>
            <p>
                At the beginning, I was coding the game and learning about collisions, rigidbodies. I achieved my goal and the game was playable.
                <br/><br/>
                From there, I wanted to improve the game so I fixed some bugs and improved the visuals by adding textures and lighting to the table. 
            </p>
            <Video path={require("./../assets/Pool2/Pool2InitialProgressCropped.mp4")}/>
            <p>
                When I was playing it with friends, we found it very fun. We thought the game had the potential to do well. So to challenge myself, my goal is to release this game on Steam as a small Indie game for about $2 to $4.
            </p>

            <p>
                With this, I needed to learn more skills to be able to deliver a successful product. Here are some of the features and skills I need to learn and implement.
            </p>
            <ul>
                <li>Controller support</li>
                <li>Menus and UI</li>
                <li>Sound design</li>
                <li>3D modelling (Blender)</li>
                <li>Steamworks and how to upload to Steam</li>
                <li>Game marketing</li>
            </ul>
            <h2>Making friends</h2>
            <p>
                In order to maximise the chances of success, I need to show people my game, make friends in the industry and ask for help.
                <br/><br/>
                I joined <a href="https://buildspace.so/" target="_blank" rel="noreferrer">Buildspace</a> Season 4. Buildspace is a school where you can work on your own ideas. We all built our ideas alongside each other and graduated. 
            </p>
            <img 
                src={require("./../assets/Pool2/LondonBuildspace.jpg")}
                alt="The Buildspace London meet-up"
            />
            <p>
                During that time I also showed Pool 2 at a festival, the <a href="https://thurrockscreenculturefestival.uk/2023-2/" target="_blank" rel="noreferrer">Thurrock Screen Culture Festival</a>. I made some friends in the games industry, had the first sign-ups to my mailing list and received feedback for my game.
            </p>
            <img 
                src={require("./../assets/Pool2/Thurrock.png")}
                alt="Two people playing Pool 2"
            />
            <p>
                This is the final video showing my progress in the 6 weeks of Buildspace!
            </p>
            <YouTube id="H285iIVfSMg"/>
            <p>    
                After graduation, I received sponsorship to go to San Francisco to meet up with the teachers and other students. 
                <br/><br/>
                I showcased Pool 2, streamed Pool 2 on Twitch, and hosted a Pool 2 tournament where attendees can play for a prize! (Even the founder of Buildspace played my game!)
            </p>
            <Gallery
                images={[
                    require("./../assets/Pool2/BuildspaceSign.jpg"),
                    require("./../assets/Pool2/BuildspaceTesting.jpg"),
                    require("./../assets/Pool2/Farza.jpg"),
                    require("./../assets/Pool2/Jeff.jpg"), 
                    require("./../assets/Pool2/Winner.png"),
                    require("./../assets/Pool2/BuildspaceExhibition.jpg"),
                    require("./../assets/Pool2/BuildspaceGame.jpg"),
                    require("./../assets/Pool2/BuildspaceGame1.jpg"), 
                    require("./../assets/Pool2/BuildspaceGroupPic.jpg"),
                ]}
            />
            <h2>Conclusion?</h2>
            <p>
                Pool 2 is still ongoing and the adventure has not ended. Stay tuned for the release of Pool 2 on Steam!
            </p>
        </>
    )
}

export default Pool2