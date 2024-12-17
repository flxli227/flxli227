import MultiColumn from './../components/multiColumn/MultiColumn'
import YouTube from './../components/youTube/YouTube.js'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery';

function Pool2() {
    return (
        <>
            <p>
                Pool 2 is a local multiplayer game about pool but each player has their own cue ball and shots happen in real time.
                <br/><br/>
                Click <a href="https://store.steampowered.com/app/2601390/Pool_2/" target="_blank" rel="noreferrer">here</a> to check out the Steam page and play the demo. 
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
                src={require("./../assets/Pool2/LondonBuildspace-resized-min.jpg")}
                alt="The Buildspace London meet-up"
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
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Pool2/BuildspaceSign-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceSign-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/BuildspaceTesting-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceTesting-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/Farza-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/Farza-thumbnail.jpg"),
                    },
                    {
                        original: require("./../assets/Pool2/Jeff-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/Jeff-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/Winner-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/Winner-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/BuildspaceExhibition-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceExhibition-thumbnail.jpg"),
                    },
                    {
                        original: require("./../assets/Pool2/BuildspaceGame-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceGame-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/BuildspaceGame1-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceGame1-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Pool2/BuildspaceGroupPic-resized-min.jpg"),
                        thumbnail: require("./../assets/Pool2/BuildspaceGroupPic-thumbnail.jpg"),
                    },
                ]}
            />
            <h2>Showing my game</h2>            
            <p>
                During the development of Pool 2, I showed it at some in person festivals:
            </p>
            <ul>
                <li><a href="https://thurrockscreenculturefestival.uk/2023-2/" target="_blank" rel="noreferrer">Thurrock Screen Culture Festival</a> </li>
                <li><a href="https://games.london/event/game-day-x/" target="_blank" rel="noreferrer">Game Day X</a></li>
                <li>PLAY Showcase at the <a href="https://re-publica.com/en/news/tincon-x-republica-24" target="_blank" rel="noreferrer">TINCON/re:publica</a></li>
                <li><a href="https://x.com/egx?lang=en" target="_blank" rel="noreferrer">EGX</a></li>
            </ul>
            <Video path={require("./../assets/Pool2/ReactionShot.mp4")}/>
            <p>
                In these festivals, I made friends in the games industry, had the first sign-ups to my mailing list, got wishlists and received feedback for my game.
            </p>
            <h2>The “Mario Kart of Pool”</h2>            
            <p>
                After coding the main game I was looking to other multiplayer games for inspiration. I was playing Mario Kart at the time and was thinking in Mario Kart, there are different courses and modes to keep things fresh. 
                <br/><br/>
                From there, I got the inspiration to make different tables, a time trial mode (and maybe a battle mode and “Grand Prix” mode to come.)
            </p>
            <Video path={require("./../assets/Pool2/TableMontage.mp4")}/>
            <h2>Conclusion</h2>
            <p>
                I am extremely proud of how this project. I’ve always loved games while growing up, and making a games and releasing one was on my bucket list and one of my life goals! 
                <br/><br/>
                Now that I’ve released a game, I know the basics of how to develop, design, and market a game. I feel like my next game could be much larger in scope, higher fidelity and could be made much quicker. I hope to make another commercial game in the future!
            </p>
        </>
    )
}

export default Pool2