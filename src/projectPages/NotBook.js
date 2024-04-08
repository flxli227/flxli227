import MultiColumn from './../components/multiColumn/MultiColumn'
import Video from './../components/video/Video'
import ImageGallery from 'react-image-gallery'
import YouTube from './../components/youTube/YouTube.js'

function Notbook() {
    return (
        <>
            <h2>What is it?</h2>
            <p>NotBook is an online learning platform where users can learn maths and science by interacting with elements on the screen, exploring and seeing information update in real time, while keeping reading to a minimum.</p>
            <Video path={require("./../assets/Not-Book/01 - Clicking and Dragging.mp4")}/>
            <h2>What is the need for it?</h2>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Explain-cropped.png"),
                            alt: "Explain Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Mainstream academic learning, in maths and science, is mainly done by listening in class and reading textbooks"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Memory-cropped.png"),
                            alt: "Memory Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Not everyone learns in this way, such as people with dyslexia or other specific learning difficulties"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Drop Out-cropped.png"),
                            alt: "Drop Out Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Not everyone is included in the current education system"
                    },
                ]}
            />
            <h2>Early Experimentation</h2>
            <p>The project started as an exploration of empathy with neurodiverse people.</p>
            <ul>
                <li>
                    How can we understand people with a brain working differently from our own?
                </li>
                <li>
                    How can we step into their shoes and understand what it feels like to be different?
                </li>
                <li>
                    Can we use this to provide a better understanding and care for these people?
                </li>
                <li>
                    Can we help these people understand themselves better and seek support if they need it?
                </li>
            </ul>
            <Video path={require("./../assets/Not-Book/03-Gateway2EXPMontage2-ezgif.com-mute-video.mp4")}/>
            <p>As I did more research and experiments, I found out these people actually need a way of learning that is catered to them. So the project evolved into an exploration of alternative ways of learning.</p>
            <ul>
                <li>
                    How can we teach academic subjects in a more visual and hands-on way?
                </li>
                <li>
                    How can we make education more inclusive for people with alternate learning needs?
                </li>
            </ul>
            <p>
                So I experimented with making learning more kinesthetic, and tried to teach algebra, a topic many people struggle with.
            </p>
            <Video 
                path={require("./../assets/Not-Book/EXP1-ezgif.com-resize-video.mp4")}
                lazyLoad={true}
            />
            <p>
                The main finding was that the cards were just symbols and the participants still didn’t understand what they meant and why they were learning algebra.
                <br/><br/>
                So for the next experiments I tried to visualise algebra in increasingly more tangible ways.
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    { 
                        original: require("./../assets/Not-Book/Maths 2.jpg"),
                        thumbnail: require("./../assets/Not-Book/Maths 2-thumbnail.jpg"),
                    },
                    { 
                        original: require("./../assets/Not-Book/Maths 3-resized-min.jpg"),
                        thumbnail: require("./../assets/Not-Book/Maths 3-thumbnail.jpg"),
                    },
                ]}
            />
            <p>My findings were: </p>
            <ul>
                <li>
                    People don’t want to learn if they are not having fun
                </li>
                <li>
                    People can’t learn things unless they have all the prerequisites 
                </li>
            </ul>
            <h2>Video games</h2>
            <p>
                The findings of the last experiment reminded me of video games. 
                <br/><br/>
                People play video games for fun and in many games there is progression where the player cannot access a level unless they have beaten the levels leading up to it.
                <br/><br/>
                If you break some video games down, for example Mario, the game constantly teaches the player about the world and its rules and constantly tests the player on that knowledge.
                <br/><br/>
                For example, here is the start of the first level of Mario, the player can explore and learn about the control scheme and jumping.
            </p>
            <img
                src={require("./../assets/Not-Book/Mario-small.jpg")}
                alt="The very first part of Mario 1-1"
            />
            <p>
                Straight afterwards, the player is tested on their knowledge of jumping when they have to jump to avoid this enemy. The player cannot progress unless they understand how to jump.
            </p>
            <img
                src={require("./../assets/Not-Book/Mario1-small.jpg")}
                alt="The first enemy encounter of Mario 1-1"
            />
            <p>
                With this, I wanted to see if I could make people learn academic subjects in the form of a game. This is how the idea of NotBook was conceived. 
            </p>
            <h2>More experimentation</h2>
            <p>
                To test and iterate on this idea, I made NotBook lessons for a variety of topics ranging from GCSE mathematics to first-year university level thermodynamics, and tested them on their respective user groups.
                <br/><br/>
                Here an Imperial mechanical engineering student explores system boundaries and energy transfers.
            </p>
            <Video path={require("./../assets/Not-Book/Thermo-ezgif.com-mute-video.mp4")}/>
            <p>
                Here are more NotBook lessons I coded on Unity where I try to let the learner explore the concept by clicking and dragging.  
            </p>
            <Video path={require("./../assets/Not-Book/02 - Final Montage.mp4")}/>
            <p>
                To gauge if the learner has understood the lesson, they have to do a test. The learner can only move on to the next part of the lesson once they manage to complete it.
                <br/><br/>
                I prototyped the NotBook tests with paper so I can iterate quicker than if it was coded.
            </p>
            <Video 
                path={require("./../assets/Not-Book/05-TestMontage2-ezgif.com-mute-video.mp4")}
                lazyLoad={true}
            />
            <h2>How does it work?</h2>
            <p>
                After doing many lessons and tests, this is the framework that seems to work the best for any given topic. 
                <br/><br/>
                First introduce the topic. What are the students learning? What is it used for?
                <br/><br/>
                In this example they are learning about graphs. Graphs can be used to show a relationship between two variables, such as the price for renting out a bike.
            </p>
            <img 
                src={require("./../assets/Not-Book/Prototype Screenshots-02-resized-min.png")}
                alt="Screenshot of NotBook Introduction phase"
            />
            <p>
                Then the learner is free to explore by clicking and dragging the interactive prop. It is important that topics are broken down into simple parts which explore one thing at a time. 
                <br/><br/>
                What they learn is governed by the syllabus and what will come up in the exam.
            </p>
            <img 
                src={require("./../assets/Not-Book/Prototype Screenshots-01-resized-min.png")}
                alt="Screenshot of NotBook Explore phase"
            />
            <p>
                The learner is then tested on what they’ve learnt in the previous stage. They can only move on to the next concept once they demonstrate they understood the concept they are tested on. 
                <br/><br/>
                They can go back to the previous explore phases if they would like to explore some more.
            </p>
            <img 
                src={require("./../assets/Not-Book/Prototype Screenshots-04-resized-min.png")}
                alt="Screenshot of NotBook Test phase"
            />
            <p>
                The exploring and testing phases repeats until all the concepts for the topic are covered.
                <br/><br/>
                When all the concepts are covered the learner can see a summary on what they have learnt to consolidate their learning and test themselves.
            </p>
            <img 
                src={require("./../assets/Not-Book/Prototype Screenshots-03-resized-min.png")}
                alt="Screenshot of NotBook Summary phase"
            />
            <h2>Early Stage Validation</h2>
            <p>
                I went to the Royal Grammar School to test my lesson on graphs. 5 participants from year 10 tested my NotBook lesson.
                <br/><br/>
                I wanted to compare NotBook with the current way the students learn maths. So I first asked them how they learn maths:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Explain-cropped.png"),
                            alt: "Explain Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Listening in Class"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Book-cropped.png"),
                            alt: "Book Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Reading Textbooks"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Test-cropped.png"),
                            alt: "Test Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Doing Questions"
                    },
                ]}
            />
            <p>
                First I asked the students to do a written test on graphs. Then the students did the NotBook lesson on that topic. Afterwards, they did another written test on graphs.
                <br/><br/>
                I also asked them to score NotBook and the current way of learning in engagement and how much they felt they understood the topic. 
                <br/><br/>
                Here are the results:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Not-Book/Engagement.png"),
                            alt: "Explain Icon",
                        },
                        title:"Engagement",
                        body:"How much the participant enjoyed this method of learning"
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Internal Understanding.png"),
                            alt: "Book Icon",
                        },
                        title:"Internal Understanding",
                        body:"How much the participant felt they understood the topic"
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Understanding.png"),
                            alt: "Test Icon",
                        },
                        title:"Test performance",
                        body:"How well the participant scored in the written test"
                    },
                ]}
            />
            <p>
                Here are some positive feedback from the user testing:
            </p>
            <ImageGallery
                lazyLoad={true}
                items={[
                    { 
                        original: require("./../assets/Not-Book/StudentFeedback.png"),
                        thumbnail: require("./../assets/Not-Book/StudentFeedback.png"),
                    },
                    { 
                        original: require("./../assets/Not-Book/StudentFeedback1.png"),
                        thumbnail: require("./../assets/Not-Book/StudentFeedback1.png"),
                    },
                ]}
            />
            <p>
                When they were doing the test on the NotBook, many of the students wanted to do the interactive test. They became very competitive and compared their scores with each other. This shows there could be potential in providing minigames about a topic and a leaderboard for it for a future feature.
            </p>
            <h2>Digital Discovery Day</h2>
            <p>
                In 2019, I gave a talk on NotBook at the Digital Discovery Day from <a href="https://get.vitalsource.com/" target="_blank" rel="noreferrer">VitalSource</a>. 
            </p>
            <YouTube id="m_xRdN4Sn0g"/>
        </>
    )
}

export default Notbook