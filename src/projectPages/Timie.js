import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
import Video from './../components/video/Video'

function Timie() {
    return (
        <>
            <h2>What is it?</h2>
            <p>Timie is a smartwatch paired with an app that is designed to help people with AD(H)D get to places on time if they are “late” due to disorganisation and bad time management.</p>
            <Gallery
                images={[
                    require("./../assets/Timie/Front Cover for Solo Major.png"),
                    require("./../assets/Timie/Infographic New 2-01.png"),
                ]}
            />
            <h2>How does it work?</h2>
            <p>The user first sets up Timie by downloading the app and creating an account. The app will ask a few questions about the user's morning routine.</p>
            <img
                src={require("./../assets/Timie/Slide7.PNG")}
                alt="A screenshot of a user selecting their morning routine"
            />
            <p>To use Timie, the user enters when and where they need to be as a new event in the app.</p>
            <p>With this information the app can figure out:</p>
            <ul>
                <li>
                    When the user needs to leave
                </li>
                <li>
                    What the user needs to do before leaving
                </li>
                <li>
                    When the user needs to start getting ready to leave
                </li>
            </ul>
            <img
                src={require("./../assets/Timie/Slide14+16.png")}
                alt="A screenshot of a user creating a new event and selecting what they need to do for that event"
            />
            <p>The app reminds the user what events they have on a given day.</p>
            <img
                src={require("./../assets/Timie/Slide11.PNG")}
                alt="A screenshot of Timie reminding a user what events they have for the day"
            />
            <p>
                When the time comes for the user to start getting ready, the smartwatch notifies them. The smartwatch shows Timie, a punctual version of themselves.
                <br/><br/>
                Timie does the task the user needs to do to get ready. All the user has to do is to race Timie.
                <br/><br/>
                For every task the user completes, they press the button on the smartwatch. This informs Timie how long it takes the user to do a certain task and will help Timie become more accurate in the future.
            </p>
            <Video path={require("./../assets/Timie/03 - Time Animation.mp4")}/>
            <p>With this the user will use their time in a better way and leave on time to be punctual.</p>

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
                There are many reasons why people can be late. Many reasons are out of their control.
                <br/><br/>
                However, many people are late due to bad time management.
                <br/><br/>
                "Me personally it's related to <b>knowing when to stop doing something</b> and do something else" Anonymous
                <br/><br/>
                "Sometimes <b>if I get really hooked I can be half an hour late,</b> but normally I stop as I'm just meant to be leaving" Dan
                <br/><br/>
                This is what tends to happen before these people leave the house.
            </p>
            <Gallery
                images={[
                    require("./../assets/Timie/1. To Do.jpg"),
                    require("./../assets/Timie/2. Maps.jpg"),
                    require("./../assets/Timie/3. Try and be on time.jpg"),
                    require("./../assets/Timie/4. Get ready Earlier.jpg"),
                    require("./../assets/Timie/5. Clothes on.jpg"),
                    require("./../assets/Timie/6. 20 minutes to kill.jpg"),
                    require("./../assets/Timie/7. TV.jpg"),
                    require("./../assets/Timie/8. TV 2.jpg"),
                    require("./../assets/Timie/9. Oh no.jpg"),
                    require("./../assets/Timie/10. Pack Computer.jpg"),
                    require("./../assets/Timie/11. Shoes.jpg"),
                    require("./../assets/Timie/12. Loo.jpg"),
                    require("./../assets/Timie/13. Keys.jpg"),
                    require("./../assets/Timie/14. Leaves House.jpg"),
                    require("./../assets/Timie/15. Conclusion 1.jpg"),
                    require("./../assets/Timie/16. Conclusion 2.jpg"),
                ]}
            />

            <h2>Who are these people?</h2>
            <p>
                Anyone could be late, however many people with AD(H)D are often chronically late.
                <br/><br/>
                "11% of children (6.4 million) have been diagnosed with AD(H)D, 2011" www.cdc.gov/ncbddd/adhd/data.html
                <br/><br/>
                Symptoms often include:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Studying-cropped.png"),
                            alt: "Hyperfocus Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Hyperfocus"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Daydream-cropped.png"),
                            alt: "Concentration Issues Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Concentration Issues"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Messy-cropped.png"),
                            alt: "Disorganisation Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Disorganisation, (which may cause bad time management)"
                    },
                ]}
            />            
            <h2>What do people currently use?</h2>
            <p>
                People tend to use apps that tell them how long it takes to get to their destination and what the steps are in their journey. Then they can figure out when to leave the house.
                <br/><br/>
                Here are some examples of these apps:
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
            <p>These apps help the user plan, but only in an outdoor context.</p>

            <p>People also tend to keep track of time using:</p>
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
            <p>These rely on the user's planning skills to know when to set the timers.</p>
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
            {/* Images */}
            <Gallery
                images={[
                    require("./../assets/Timie/AR-2.gif"),
                    require("./../assets/Timie/Day Timeline 1.jpg"),
                    require("./../assets/Timie/Day Timeline 2.jpg"),
                    require("./../assets/Timie/IMAG1089.jpg"),
                    require("./../assets/Timie/IMAG1090.jpg"),
                    require("./../assets/Timie/IMAG1135.jpg"),
                    require("./../assets/Timie/IMAG1146.jpg"),
                    require("./../assets/Timie/Micro Timeline.jpg"),
                    require("./../assets/Timie/Morning Mode Big Compact.jpg"),
                    require("./../assets/Timie/Phone Cropped 1.jpg"),
                    require("./../assets/Timie/Phone Cropped.jpg"),
                    require("./../assets/Timie/Punctuality-Board-Gif.gif"),
                    require("./../projectPages/Timie.js"),
                    require("./../assets/Timie/Tim-E-gif-Big.gif"),
                    require("./../assets/Timie/Timie EXP Pictures-01.png"),
                    require("./../assets/Timie/Timie EXP Pictures-02.png"),
                    require("./../assets/Timie/Timie EXP Pictures-03.png"),
                    require("./../assets/Timie/Timie EXP Pictures-04.png"),
                ]}
            />
            <Video path={require("./../assets/Timie/01 - VIDEO0069.mp4")}/>
            <Video path={require("./../assets/Timie/02 - VIDEO0072TrimTrim.mp4")}/>
        </>
    )
}

export default Timie