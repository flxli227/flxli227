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
            {/* <h2>Making friends</h2>
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
            /> */}
            <h2>Computer AI behaviour</h2>           
            <p>
                One of the technical challenges I had to overcome is programming computer (bot) players.
            </p>
            <Video path={require("./../assets/Pool2/AimBot-ezgif.com-resize-video.mp4")}/>
            <p>
                When a computer makes a shot, this is its thought process:
            </p>
            <ul>
                <li>Takes the positions of all the ball and holes</li>
                <li>Check which coloured balls it is currently trying to sink</li>
                <li>For each ball it is trying to sink, calculate the angle of the shot to sink the ball in to each hole</li>
                <li>For each possible shot, check if the shot is clear or if there are obstacles or other balls in the way</li>
            </ul>
            <p>
                Then the computer prioritises the possible shots:
            </p>
            <ul>
                <li>Balls that can be sunk with no obstacle in the way will be sunk first</li>
                <li>Then, Balls that can be sunk but there’s obstacles</li>
                <li>Then, if there are no possible shots to sink any ball regardless of obstacles, just hit the ball directly closes to where computer is currently aiming to move the balls around</li>
            </ul>
            <p>
                If there are multiple balls in bullet 1 and 2, it goes for the ball most in line with the cue ball and the hole
                <br/><br/>
                After all of this, a random aiming error is applied to the computer player so the human player is not playing against an aimbot.
            </p>
            <h2>Expanding the concept</h2>            
            <p>
                After coding the main game I was looking to other multiplayer games for inspiration. 
                <br/><br/>
                I was playing Mario Kart at the time. In Mario Kart, there are different courses and modes to keep things fresh. 
                <br/><br/>
                From there, I expanded the base game with these features:
            </p>
            <h3>Different tables</h3>
            <p>
                I wanted to explore different tables, generally there are 3 different thought patterns for ideas of different tables.
            </p>
            <Video path={require("./../assets/Pool2/TableMontage-ezgif.com-resize-video.mp4")}/>
            <h4>Different shaped tables</h4>
            <p>
                What would happen if I altered the shape of the Pool table? This is the inspiration for the Donut table where there is one hole in the middle of the table
            </p>
            <h4>Existing tables with a different context</h4>
            <p>
                What different tables are already out there that I can play Pool on? For example a Foosball table or a conveyor belt Sushi table
            </p>
            <h4>Tables with a fun mechanic</h4>
            <p>
                I brainstormed mechanics that could be fun. From there, I figure out a theming that makes sense to present the main mechanic of the table. For example:
                <br/><br/>
                A table where the hole moves -&gt; A Radar table
            </p>
            <h3>Alternate game modes</h3>
            <MultiColumn 
                columns = {[
                    {
                        // TODO INSERT IMAGE
                        video: {
                            url: require("./../assets/Pool2/Pool100-ezgif.com-mute-video.mp4"),
                        },
                        title: "Sink ‘em All",
                        body: "A game mode where everyone sinks the same set of balls."
                    },
                    {
                        video: {
                            url: require("./../assets/Pool2/TimeTrial-ezgif.com-mute-video.mp4"),
                        },
                        // TODO INSERT IMAGE
                        // image: {
                        //     url: require("./../assets/Not-Book/Prototype Screenshots-01.png"),
                        //     alt: "A screenshot of Not-Book, the interactive learning platform"
                        // },
                        title: "Time trial mode",
                        body: "A mode where you try and beat your own time." 
                        //  (I’ll probably add an online leader board as downloadable content in the future)

                    },
                ]}
            />
            <h3>More expansions</h3>
            <p>
                There are many game modes and ways to change that I wanted to include but didn’t have time:
            </p>
            <ul>
                <li>
                    Battle Mode
                    <ul>
                        <li>Everyone tries to sink each other with the playable area shrinking</li>
                        <li>When you sink a neutral ball, it joins your team to try and sink other players</li>
                        <li>When you get sunk you replace a ball on your team</li>
                        <li>Players are eliminated when they run out of balls on their team</li>
                    </ul>
                </li>
                <li>
                    Team Mode
                    <ul>
                        <li>Instead of free for all, what about 2v2?</li>
                    </ul>
                </li>
                <li>
                    Power Ups
                    <ul>
                        <li>For example: A ball if you sink it slows thing down but you</li>
                    </ul>
                </li>
                <li>
                    Variations
                    <ul>
                        <li>Changes to the rules, for example if you sink the black ball too early you are not eliminated</li>
                    </ul>
                </li>
            </ul>
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
            <Video path={require("./../assets/Pool2/ReactionShot-ezgif.com-resize-video.mp4")}/>
            <p>
                In these festivals, people love playing Pool 2 because of it’s easy to just pick up and play with friends.
                <br/><br/>
                I made friends in the games industry, had the first sign-ups to my mailing list, got wishlists and received feedback for my game.
            </p>
            <h2>Marketing, trailers and short form content</h2> 
            <p>
                Outside of actual development, I also made marketing material for the game.
            </p>
            <p>
                Here are some trailers I’ve made
            </p>
            <Video 
                lazyLoad={true}
                path={require("./../assets/Pool2/Demo Trailer.mp4")}
            />
            <p>
                Here are some reels to try to capture potential players on TikTok and Instagram. 
            </p>
            {/* TODO Refactor into video component*/}
            <div className="restrictVideoHeightContainer">
                <div>
                    <Video 
                        lazyLoad={true}
                        path={require("./../assets/Pool2/Inspiration.mp4")}
                    />
                </div>
            </div>
            <Video 
                lazyLoad={true}
                path={require("./../assets/Pool2/Fumble.mp4")}
            />
            <h2>Launch and reception</h2>
            <img
                src={require("./../assets/Pool2/Steam Store.png")}
                alt="Screenshot of the Steam Store"
            />
            <img
                src={require("./../assets/Pool2/Demo and Buy.png")}
                alt="Screenshot of the Steam Store download demo and buy button"
            />
            <p>
                People seem to really enjoy playing Pool 2, here are some of the reviews:
                <br/><br/>
                <i><q>It's a must-have for any party game fans, in my humble opinion.</q></i> 9/10 – <a href="https://higherplaingames.com/pc/pool-2-review/" target="_blank" rel="noreferrer">Higher Plain Games</a>
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Pool2/Review 1.png"),
                            alt: "A positive reivew on the Pool 2 Steam Store",
                        },
                    },
                    {
                        image: {
                            url: require("./../assets/Pool2/Review 2.png"),
                            alt: "A positive reivew on the Pool 2 Steam Store",
                        },
                    },
                ]}
            />
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