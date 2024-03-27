import YouTube from './../components/youTube/YouTube.js'
import MultiColumn from './../components/multiColumn/MultiColumn'
import ImageGallery from 'react-image-gallery';

function Firefly() {
    const invertStyle = {
        filter: 'invert(1)',
    };
    
    return (
        <>
            <h2>What is it?</h2>
            <p>
                Firefly is a dynamic system, that uses visual and audio cues, for security personnel to guide crowds efficiently at a pop-up venue.
                <br/><br/>
                Firefly is designed by Eric Du, Felix Li (me) and Syed Abid.
            </p>
            <YouTube id="DndVUuhv3Ag"/>
            <h2>How does it work?</h2>
            <p>Many Firefly devices are set up in a venue.</p>
            <img 
                src={require("./../assets/Firefly/Awesome Photo-resized-min.jpg")}
                alt="The Firefly device"
            />
            <p>Each Firefly device is installed with a camera which allows security personnel to monitor events.</p>
            <img 
                src={require("./../assets/Firefly/Monitoring-resized-min.jpg")}
                alt="A security guard using the Firefly system"
            />
            <p>If an emergency happens, a security personnel enters into the system where the danger is. The system calculates the best route for evacuation for everyone.</p>
            {/* Video */}
            <p>This information is projected onto the ground and crowd as moving arrows. Everyone in the crowd knows where to go and exits the venue safely.</p>
            {/* Video */}
            <p>The cameras in the device can see if anyone is left behind, aiding the security guard's final checking of the venue.</p>
            <img 
                src={require("./../assets/Firefly/Final Check UI-min.jpg")}
                alt="A prototype UI for the final checks of a venue using Firefly"
            />
            <h2>What is the need for it?</h2>
            <p>There are occasions where there could be a large crowd of people, such as:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/DJ-cropped.png"),
                            alt: "Music Festival Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Music Festivals",
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Religion-cropped.png"),
                            alt: "Religious Gatherings Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Religious Gatherings",
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Festival-cropped.png"),
                            alt: "Festive Celebrations Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Festive Celebrations",
                    },
                ]}
            />
            <p>Crowds can also be very dangerous if not handled correctly,</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Firefly/Love Parade-resized-min.jpg"),
                            alt: "An Image of Love Parade in Germany 2010",
                        },
                        title: "Love Parade",
                        body: "Duisburg Germany (2010), 21 fatalities, over 500 injuries"
                    },
                    {
                        image: {
                            url: require("./../assets/Firefly/Shanghai NYE-resized-min.jpg"),
                            alt: "An Image of New Year's Eve Shanghai China (2014)",
                        },
                        title: "New Year's Eve",
                        body: "Shanghai China (2014), 36 fatalities, 49 injuries"
                    },
                ]}
            />
            <h2>What is currently used for crowd control?</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Firefly/Security-resized-min.jpg"),
                            alt: "An Image of security guards in an outdoor venue",
                        },
                        title: "Security Guards",
                        body: "May use hand gestures and verbal information"
                    },
                    {
                        image: {
                            url: require("./../assets/Firefly/Exit Sign-resized-min.jpg"),
                            alt: "An Image of an exit sign in an outdoor venue",
                        },
                        title: "Signs",
                        body: "Show the nearest exit using visual information"
                    },
                ]}
            />
            <p>These methods are not always effective because:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Police-cropped.png"),
                            alt: "Security Guard Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Security Guards",
                        body: "They only work when people are close enough to see or hear them"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Megaphone-cropped.png"),
                            alt: "Megaphone Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Verbal Instruction",
                        body: "Can be hard to follow especially"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Exit-cropped.png"),
                            alt: "Exit sign Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Exit Signs",
                        body: "May not be updated in real time with the latest information of the emergency"
                    },
                ]}
            />
            <p>All of this leads to:</p>
            <img 
                src={require("./../assets/Icons/Slow Information Spread-03.png")}
                alt="An Icon of slow information spread"
                style={invertStyle}
            />
            <p>Slow spreading of information</p>
            <h2>What are the dangers of slow spreading of information?</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Person Exiting-cropped.png"),
                            alt: "Person Exiting Icon",
                            filters: ["invert(1)"]
                        },
                        body: "People may not use all available exits"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Confusion-cropped.png"),
                            alt: "Confusion Icon",
                            filters: ["invert(1)"]
                        },
                        body: "People at the back may not know what's happening at the front"
                    },
                ]}
            />
            <p>Which leads to:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Exit Bottleneck.png"),
                            alt: "Exit Bottleneck Icon",
                            filters: ["invert(1)"]
                        },
                        body: "Overcrowding of one of the exits"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/People at the back don't know-02.png"),
                            alt: "People at the back don't know Icon",
                            filters: ["invert(1)"]
                        },
                        body: "People at the back keep walking when there's not space in front"
                    },
                ]}
            />
            <p>And leads to:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Ambulance-cropped1.png"),
                            alt: "Ambulance Icon",
                            filters: ["invert(1)"]
                        },
                        body: "Crowd Crushing, Injuries and Death"
                    },
                ]}
            />
            <h2>Experimentation</h2>
            <ul>
                <li>
                    How to improve communication between the security staff and crowds
                </li>
                <li>
                    How to split large crowds into smaller crowds
                </li>
                <li>
                    How to prevent crowd crushing and bottlenecks
                </li>
            </ul>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Firefly/EXP Pictures-01-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-01-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-02-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-02-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-03-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-03-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Firefly/EXP Pictures-04-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-04-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-05-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-05-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-06-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-06-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Firefly/EXP Pictures-07-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-07-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-08-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-08-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-09-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-09-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Firefly/EXP Pictures-10-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-10-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Firefly/EXP Pictures-11-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-11-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-12-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-12-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Firefly/EXP Pictures-13-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-13-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Firefly/EXP Pictures-14-min.jpg"),
                        thumbnail: require("./../assets/Firefly/EXP Pictures-14-thumbnail-min.jpg"),
                    },
                ]}
            />
        </>
    )
}

export default Firefly