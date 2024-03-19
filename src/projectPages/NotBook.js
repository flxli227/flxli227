import MultiColumn from './../components/multiColumn/MultiColumn'
import Gallery from './../components/gallery/Gallery'
import Video from './../components/video/Video'

function Notbook() {
    return (
        <div>
            <h2>What is it?</h2>
            <p>Not-Book is an online learning platform where users can interact with elements on the screen, explore and see information update in real time while keeping reading to a minimum.</p>
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
                        body:"Mainstream academic learning, in maths and science, is mainly done by listening in class and reading textbooks."
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Memory-cropped.png"),
                            alt: "Memory Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Not everyone learns in this way, such as people with dyslexia or other specific learning difficulties."
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Drop Out-cropped.png"),
                            alt: "Drop Out Icon",
                            filters: ["invert(1)"]
                        },
                        body:"Not everyone is included in the current education system."
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
            <Video path={require("./../assets/Not-Book/03 - Gateway 2 EXP Montage 2.mp4")}/>
            <p>The project evolved into an exploration of alternative ways of learning.</p>
            <ul>
                <li>
                    How can we teach academic subjects in a more visual and hands-on way?
                </li>
                <li>
                    How can we make education more inclusive for people with alternate learning needs?
                </li>
                <li>
                    How can we use the full potential of the rise in digital learning?
                </li>
            </ul>
            <Gallery
                images={[
                    require("./../assets/Not-Book/Maths 1.jpg"),
                    require("./../assets/Not-Book/Maths 2.jpg"),
                    require("./../assets/Not-Book/Maths 3.jpg"),
                ]}
            />
            <h2>How does it work?</h2>
            <p>The way Not-Book teaches any given topic is broken down into four parts.</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Not-Book/Prototype Screenshots-02.png"),
                            alt: "Target Icon",
                        },
                        title: "Introduce",
                        body:'"What are the students learning?", "What is it used for?"'
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Prototype Screenshots-01.png"),
                            alt: "Ejection Seat Icon",
                        },
                        title: "Explore",
                        body:"The user is free to explore by clicking and dragging the interactive prop to learn about the topic."
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Prototype Screenshots-04.png"),
                            alt: "Boxes Icon",
                        },
                        title: "Test",
                        body:"The user can move onto a task that tests their understanding of the learning objectives. They can only progress once they manage to complete it."
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Prototype Screenshots-03.png"),
                            alt: "Summarise",
                        },
                        title: "Summarise",
                        body:"The user can use the summary of the learning objectives to consolidate and test themselves."
                    },
                ]}
            />
            <h2>How does it work?</h2>
            <p>I wanted to test Not-Book's ability to teach different topics to students of different ages. For this, I have made many Not-Book lesson, ranging from GCSE to first-year university level thermodynamics.</p>
            <p>I have tested them on their respective user groups (at Imperial College London, Royal College of Art and the Royal Grammar School). Many of Not-Book's features are informed by these tests.</p>
            <Video path={require("./../assets/Not-Book/02 - Final Montage.mp4")}/>
            <img 
                className="contentImage"
                src={require("./../assets/Not-Book/Challenge.png")}
                alt="User testing a paper prototye of the test part"
            />
            <h2>Early Stage Validation</h2>
            <p>The Not-Book lesson on linear graphs was tested on 5 participants from the Royal Grammar School.</p>
            <p>Here are the findings:</p>
            <p>Currently, year 10s students mainly learn maths from:</p>
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
            <p>This is how Not-Book compares to the current main methods of learning maths:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Not-Book/Engagement.png"),
                            alt: "Explain Icon",
                        },
                        title:"Engagement",
                        body:"How much the user enjoys this method of learning"
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Internal Understanding.png"),
                            alt: "Book Icon",
                        },
                        title:"Internal Understanding",
                        body:"How much the user feels they have understood the topic"
                    },
                    {
                        image: {
                            url: require("./../assets/Not-Book/Understanding.png"),
                            alt: "Test Icon",
                        },
                        title:"Test performance",
                        body:"How well the user scores in a test"
                    },
                ]}
            />
        </div>
    )
}

export default Notbook