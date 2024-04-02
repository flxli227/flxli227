import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery'

function Timie() {
    return (
        <>
            <h2>What is it?</h2>
            <p>Timie is a smartwatch paired with an app designed to help people who are regularly late to places and meetings due to disorganisation and bad time management to be on time.</p>
            <Gallery
                images={[
                    require("./../assets/Timie/Infographic New 2-01-min.png"),
                    require("./../assets/Timie/Front Cover for Solo Major-min.png"),
                ]}
            />
            <h2>How does it work?</h2>
            <p>When setting up Timie for the first time, the app asks the user about their morning routine.</p>
            <img
                src={require("./../assets/Timie/Slide7-min.PNG")}
                alt="A screenshot of a user selecting their morning routine"
            />
            <p>
                To use Timie, the user enters where they are going and when they need to be there.
                <br/><br/>
                The app will figure out:
            </p>
            <ul>
                <li>
                    When the user needs to leave their house
                </li>
                <li>
                    What the user needs to do before leaving
                </li>
                <li>
                    When the user needs to start getting ready to leave on time
                </li>
            </ul>
            <img
                src={require("./../assets/Timie/Slide14+16-min.png")}
                alt="A screenshot of a user creating a new event and selecting what they need to do for that event"
            />
            <p>On a given day, Timie will remind the user what they have got on that day.</p>
            <img
                src={require("./../assets/Timie/Slide11-min.PNG")}
                alt="A screenshot of Timie reminding a user what events they have for the day"
            />
            <p>
            When the time comes for the user to start getting ready, the smartwatch notifies them. 
                <br/><br/>
                The smartwatch shows Timie, a punctual version of the user. Timie does all the tasks the user needs to do to get ready. To be on time, all the user has to do is to race Timie.
                <br/><br/>
                The watch will remind the user each task they have to do and upon completion of the task they press the button on the watch.
            </p>
            <Video path={require("./../assets/Timie/03 - Time Animation.mp4")}/>
            <p>
                As the user uses Timie more, Timie will know how long it takes the user to do that task and become more accurate in the future.
                <br/><br/>
                With this, the user will do all the tasks they need to before leaving when they need to be done to be punctual.
            </p>
            <h2>What is the need for this?</h2>
            <p>People who are often late for meetings or events may have a negative impact on themselves and the people around them:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Work 1-cropped.png"),
                            alt: "Work Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Work",
                        body:"Miss promotions or get fired"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Family-cropped.png"),
                            alt: "Family Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Family",
                        body:"Being thought as disrespectful and careless"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Person-cropped.png"),
                            alt: "Person Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Self",
                        body:"Affect self esteem and cause self-blame"
                    },
                ]}
            />
            <h2>Why are people late?</h2>
            <p>
                There are many reasons why people can be late and many could be out of their control, such as a traffic jam or an emergency.
                <br/><br/>
                However, many people are late due to bad time management.
                <br/><br/>
                <i><q>Me personally it's related to knowing when to stop doing something and do something else</q></i> - Anonymous
                <br/><br/>
                <i><q>Sometimes if I get really hooked I can be half an hour late, but normally I stop as I'm just meant to be leaving</q></i> - Dan
                <br/><br/>
                I interviewed many people and found a recurring theme and how they are late.
            </p>
            <ul>
                <li>
                    They either underestimate how long something takes to do and start getting ready late. 
                </li>
                <li>
                    Or they get ready extra early and have time to kill so they do something else, but they next realise what time it is they are already late.
                </li>
                <li>
                    Or they are about to leave the house, just to discover they haven’t packed their bags or factor in time to wear their shoes or go to the loo.
                </li>
            </ul>
            <p>Here is a comic that show a common way people are late:</p>
            <Gallery
                images={[
                    require("./../assets/Timie/1-min.png"),
                    require("./../assets/Timie/2-min.png"),
                    require("./../assets/Timie/3-min.png"),
                    require("./../assets/Timie/4-min.png"),
                    require("./../assets/Timie/5-min.png"),
                    require("./../assets/Timie/6-min.png"),
                    require("./../assets/Timie/7-min.png"),
                    require("./../assets/Timie/8-min.png"),
                    require("./../assets/Timie/9-min.png"),
                    require("./../assets/Timie/10-min.png"),
                    require("./../assets/Timie/11-min.png"),
                    require("./../assets/Timie/12-min.png"),
                    require("./../assets/Timie/13-min.png"),
                    require("./../assets/Timie/14-min.png"),
                    require("./../assets/Timie/15-min.png"),
                    require("./../assets/Timie/16-min.png"),
                ]}
            />

            <h2>Who are these people?</h2>
            <p>
                Anyone could be late, however many people with AD(H)D are often chronically late.
                <br/><br/>
                <i><q>11% of children (6.4 million) have been diagnosed with AD(H)D, 2011</q></i> - <a href="www.cdc.gov/ncbddd/adhd/data.html" target="_blank" rel="noreferrer">CDC</a>
                <br/><br/>
                People with AD(H)D often experience:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Studying-cropped.png"),
                            alt: "Hyperfocus Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Hyperfocus"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Daydream-cropped.png"),
                            alt: "Concentration Issues Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Concentration Issues"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Messy-cropped.png"),
                            alt: "Disorganisation Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Disorganisation",
                        body: "Which may cause bad time management"
                    },
                ]}
            />            
            <h2>What do people currently use?</h2>
            <p>
                People tend to use apps to tell them how long the journey takes from their home to their destination and what steps are in their journey. 
                <br/><br/>
                These apps help the user plan, but only in an outdoor context:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Timie/Google Maps.png"),
                            alt: "Google Maps Logo",
                        },
                        body:"Google Maps"
                    },
                    {
                        image: {
                            url: require("./../assets/Timie/City mapper.jpg"),
                            alt: "Citymapper Logo",
                        },
                        body:"Citymapper"
                    },
                ]}
            />
            <p>People also keep track of time using:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Timie/Alarms.jpg"),
                            alt: "An image of a alarm on a smartphone",
                        },
                        body:"Alarms"
                    },
                    {
                        image: {
                            url: require("./../assets/Timie/egg-timer.jpg"),
                            alt: "An image of an egg timer",
                        },
                        body:"Timers"
                    },
                ]}
            />
            <p>But these rely on the user's planning skills to know when to set the timers.</p>
            <h2>Key Problem and Opportunities</h2>
            <p>Here are the key problems the project aims to solve. People may:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Forget-cropped.png"),
                            alt: "Forget Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Forget they have certain tasks to do before leaving"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Hourglass Empty-cropped.png"),
                            alt: "Empty Hourglass Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Think they have more time than they do"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Slow-cropped.png"),
                            alt: "Slow Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Underestimate how long a specific task takes"
                    },
                ]}
            />
            <p>To solve these problems the solution should:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Remind-cropped.png"),
                            alt: "Reminder Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Remind the user what they need to do before leaving"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Estimate-cropped.png"),
                            alt: "Estimate Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Estimate how long each task actually takes"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Inform-cropped.png"),
                            alt: "Inform Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Inform the user how much time they take"
                    },
                ]}
            />
            <h2>Process and Experimentation</h2>
            <p>
                The first experiment I wanted to be someone’s time assistant. So as my friend was getting ready, I sent them Facebook messages to try to keep them on time.
            </p>
            <img
                src={require("./../assets/Timie/Timie EXP Pictures-03-min.png")}
                alt="A screenshot of my first experiment of being a time assistant on Facebook messenger"
            />
            <p>
                The main finding was describing time in a text format in minutes and seconds, it is not very intuitive. 
                <br/><br/>
                Then I made the punctuality board so time can be shown as blocks in a timeline. 
                <br/><br/>
                Users would plan what they need to do before leaving and move the respective blocks onto the timeline. Then they would set an alarm for that time and would start getting ready when the alarm rang.
            </p>
            <img
                src={require("./../assets/Timie/Punctuality-Board-Gif-resized.gif")}
                alt="Timie experiment 2, punctuality board"
            />
            <Video 
                lazyLoad={true} 
                path={require("./../assets/Timie/01 - VIDEO0069.mp4")}
            />
            <p>
                The main finding was that different people take different amounts of time for each task. Also it’s hard to track if they are currently on time.
                <br/><br/>
                So I went back to Facebook messenger but this time I sent them photos with a timeline of tasks they had to do versus a visualisation of the current time/ time left decreasing.
            </p>
            <img
                src={require("./../assets/Timie/Timie EXP Pictures-04-resized-min.jpg")}
                alt="A screenshot of my second experiment of being a time assistant on Facebook messenger with a timeline"
            />
            <p>
                This was a lot clearer but pictures over Facebook messenger isn’t the best. 
                <br/><br/>
                At the time, companies were investing in augmented reality technology such as the Google Glass and Apple Vision Pro. So I experimented to see if I could make time companions in AR.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    {
                        original: require("./../assets/Timie/AR-2-resized.gif"),
                        thumbnail: require("./../assets/Timie/AR-2-thumbnail.gif"),
                    },
                    { 
                        original: require("./../assets/Timie/Day Timeline 2-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/Day Timeline 2-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Timie/Micro Timeline-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/Micro Timeline-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Timie/Day Timeline 1-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/Day Timeline 1-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Timie/IMAG1089-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/IMAG1089-thumbnail-min.jpg"),
                    },
                    {
                        original: require("./../assets/Timie/IMAG1090-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/IMAG1090-thumbnail-min.jpg"),
                    },
                ]}
            />
            <Video 
                lazyLoad={true}
                path={require("./../assets/Timie/02 - VIDEO0072TrimTrim.mp4")}
            />
            <p>
                Then I decided that may be a bit far into the future and tried to make it with technology widely used today. So I experimented with making it a phone and smartwatch app.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    { 
                        original: require("./../assets/Timie/IMAG1135-resized-min.jpg"),
                        thumbnail: require("./../assets/Timie/IMAG1135-thumbnail-min.jpg"),
                    },
                    { 
                        original: require("./../assets/Timie/Morning Mode Big Compact-min.png"),
                        thumbnail: require("./../assets/Timie/Morning Mode Big Compact-min.png"),
                    },
                    { 
                        original: require("./../assets/Timie/Tim-E-gif-Big.gif"),
                        thumbnail: require("./../assets/Timie/Tim-E-gif-Big.gif"),
                    },
                    { 
                        original: require("./../assets/Timie/Timie EXP Pictures-01-min.png"),
                        thumbnail: require("./../assets/Timie/Timie EXP Pictures-01-thumbnail-min.png"),
                    },
                ]}
            />
        </>
    )
}

export default Timie