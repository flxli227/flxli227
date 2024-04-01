import MultiColumn from './../components/multiColumn/MultiColumn'
import YouTube from './../components/youTube/YouTube.js'
import ImageGallery from 'react-image-gallery';

function Coinbox() {
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Coinbox is a chocolate coin dispenser and also a physical replica of the question mark block from the Mario series. 
                <br/><br/>
                It was a solo submission to the “Level UP!” competition held by Imperial College Advanced Hackspace over 4 weeks.
            </p>
            <h2>Planning</h2>
            <p>
                The brief of the competition was to build an installation with the theme of “Moving Up Levels”. 
                <br/><br/>
                I wanted the installation to be fun, interactive, and keep with the theme. So I wanted to build an all mechanical version of one of the most recognised icons in retro gaming. 
            </p>
            <img 
                src={require("./../assets/Coinbox/Coinbox gif works.gif")}
                alt="Mario coinbox in the Super Mario Bros series"
            />
            <p>
                For me to be happy with the outcome, it needed to be able to do some specific things, so I made a product design specification:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Target-cropped.png"),
                            alt: "Target Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Consistently eject coins to a similar location"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Ejection Seat-cropped.png"),
                            alt: "Ejection Seat Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Eject a single coin per punch"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Boxes-cropped.png"),
                            alt: "Boxes Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Store up to at least 10 Coins"
                    },
                ]}
            />            
            <h2>Mechanism</h2>
            <p>This was the original mechanism I pitched when I applied for the competition.</p>
            <img 
                src={require("./../assets/Coinbox/Level Up-01.jpg")}
                alt="Preliminary brainstorm of mechanism of coin launching from the box"
            />
            <p>
                But depending on how hard the bottom is hit, the coin will eject to a different place so I needed to redesign the launching mechanism.
                <br/><br/>
                I used a spring and trigger so when the bottom panel is pushed up, it pulls a pin, which releases the spring and launches the coin.
                <br/><br/>
                To reset the mechanism after the user has let go, a stiffer spring pushes the bottom down and also pulling launching arm hence resetting the mechanism.
            </p>
            <img 
                src={require("./../assets/Coinbox/20180826_175831-resized-min.jpg")}
                alt="Prototype of the lauching and resetting mechanism of the Coinbox"
            />
            <p>
                Then I made the coin feeding mechanism. 
                <br/><br/>
                The release works by pivoting a part with two teeth. Due to the position of the pivot point, when the part is rotated, a coin rolls past the first tooth and gets caught on the second. 
                <br/><br/>
                When it is rotated back to its original rotation, the coin rolls past the second tooth and into the launching arm and the first tooth stops the rest of the coins from rolling onto the arm.
                <br/><br/>
                The rotation of this part is synced to the bottom of the box, (but later changed to the launching arm).
            </p>
            <img 
                src={require("./../assets/Coinbox/20180826_211027-resized-min.jpg")}
                alt="Prototype of the coin feeding mechanism of the Coinbox"
            />
            <p>
                Once these mechanisms were prototyped and made, I built a box around it, added more coin storage and fixed issues that arose. 
            </p>
            <img 
                src={require("./../assets/Coinbox/20180908_195301-resized-min.jpg")}
                alt="The launch mechanism for the Coinbox housed inside a box"
            />
            <p>
                Here is a montage of the progress of building the mechanism.
            </p>
            <YouTube id="zZjDRcfeX7w"/>
            <h2>Conclusion</h2>
            <p>I am very happy with how the box turned out. It won 3rd prize and it was many people’s favourite project!</p>
        </>
    )
}

export default Coinbox