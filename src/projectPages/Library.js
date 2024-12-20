import MultiColumn from './../components/multiColumn/MultiColumn'
import Video from './../components/video/Video'

function Library() {
    return (
        <>
            <h2>What is the project?</h2>
            <p>
                The Library is a place where users of MyMiniFactory can access the STL files they have previously bought.
                <br/><br/>
                We get many complaints that the Library is bad and the task is to completely overhaul it.
                <br/><br/>
                In this project I worked as a:
            </p>
            <ul>
                <li>
                    UX/UI designer
                    <ul>
                        <li>
                            Doing research (via surveys, user interviews and sessions) 
                        </li>
                        <li>
                            Producing mock-ups and user flows
                        </li>
                    </ul> 
                </li>
                <li>
                Product owner
                    <ul>
                        <li>
                            Leading a cross-functional team / stakeholder management and keeping everyone informed (UX/UI, tech, marketing and customer support)
                        </li>
                        <li>
                            Using agile methodology (splitting the tasks into stories and prioritising them into the tech sprint)
                        </li>
                    </ul> 
                </li>
            </ul>
            <p>
                For this project I worked particularly closely with Lukas Serelis (UX/UI) and Charles, the lead developer for this project.
            </p>
            <h2>Research</h2>
            <p>
                To make improvements, I wanted to know the pain points of the existing library.
            </p>
            <Video path={require("./../assets/Library/CurrentLibrary-ezgif.com-video-speed.mp4")}/>
            <h3>Survey</h3>
            <p>
                We sent out a survey to see broadly what the issues are with the current library and how people are using it. The survey was completed by over 500 users.
            </p>
            <MultiColumn 
                columns = {[
                    {
                        title: "1. Why do users usually access the library?",
                        body:<ul>
                                <li>To redeem their files from creators (84%)</li>
                                <li>To download files from the library (76%)</li>
                                <li>... and more</li>
                            </ul>
                    },
                    {
                        title: "2. What sections of the library do users visit most?",
                        body:<ul>
                            <li>Objects shared with me (80%)​</li>
                            <li>Purchases (65%)</li>
                            <li>... and more</li>
                        </ul>
                    },
                    {
                        title: "3. What tasks are users performing most often?",
                        body:<ul>
                            <li>Finding specific objects to download</li>
                            <li>Claiming rewards and checking if all the promised files are there</li>
                            <li>Accessing creators' profiles from the library to find similar files</li>
                            <li>... and more</li>
                        </ul>
                    },
                    {
                        title: "4. What annoys users the most?",
                        body:<ul>
                            <li>The way files are organised (76%)</li>
                            <li>Lack of custom organisation (54%)</li>
                            <li>No-multi file download (40%)</li>
                            <li>... and more</li>
                        </ul>
                    },
                ]}
            />
            <h3>Speaking to users</h3>
            <p>
                Then we set up a call with some of MyMiniFactory’s biggest users to understand them, how they use the library and how they feel because they were extreme users who would feel the pain points of the library the most.
                <br/><br/>
                Here are some of the quotes we had from users:
                <br/><br/>
                <i><q>I now have Purchased, Campaigns AND Shared with me....why can't these be all together by designer?</q></i> - User 1
                <br/><br/>
                <i><q>Also let us search in our library so if I'm printing dwarves I can see what I already have on hand.</q></i> - User 2
                <br/><br/>
                <i><q>Please allow additional sorting or filtering options in the "Purchases" section of the library.</q></i> - User 3
            </p>
            <h3>Summary of findings</h3>
            <h4>Current library</h4>
            <p>
                Here's a summary of the structure of the current library.                
            </p>
            <img 
                src={require("./../assets/Library/Library structure.png")}
                alt="The structure of the old library"
            />
            <ul>
                <li>A file could be bought from the shop, a campaign or redeemed from Patreon. Depending on where they obtained the file, it will appear under a different tab.</li>
                <li>Tabs for files you own, files you've uploaded and files you do not own are mixed together without separation, causing confusion.</li>
            </ul> 
            <p>
                Even within finding files users want to print, there are these issues:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Boxes-cropped.png"),
                            alt: "Boxes Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Segregation of files",
                        body:"Currently files are placed in different tabs categorised by where on the website the user bought the file from"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Browse.png"),
                            alt: "Magnifying glass Icon",
                            filters: ["invert(1)"]
                        },
                        title: "No Search",
                        body:"Currently users use Control + F to find files but pagination and different tabs make this ineffective."
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Overview.png"),
                            alt: "Overview Icon",
                            filters: ["invert(1)"]
                        },
                        title: "No overview",
                        body:"Users do not have an overview of the files they own and cannot search categories of files"
                    },
                ]}
            />
            <h4>Users wants/ needs</h4>
            <p>
                Here's how users want their library to be sorted.
            </p>
            <img 
                src={require("./../assets/Library/Library structure 2.png")}
                alt="Diagram of how users want their library to be sorted"
            />
            <p>
                They want everything they own to be in one place, separate from things they might own in the future. 
                <br/><br/>
                Uploads can go with other features of the website for 3D designers rather than 3D printing hobbyists.
                <br/><br/>
                Also within each tab or section they want:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Search Bar.png"),
                            alt: "Search Bar Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Search bar",
                        body:"Users want a search bar to search all the files they own"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Checkboxes.png"),
                            alt: "Checkboxes Icon",
                            filters: ["invert(1)"]
                        },
                        title: "Sorting and filtering",
                        body:"Users want to be able to see what files they own and filter to find what they want to print"
                    },
                ]}
            />
            <h2>Prototyping</h2>
            <p>
                We produced low-fidelity wireframes to test our ideas. The main idea is to have all the files you own in one place and give the user the ability to search, sort and filter.
            </p>
            <img 
                src={require("./../assets/Library/Library prototype.png")}
                alt="A clickable prototype of the new library interface"
            />
            <h2>Testing</h2>
            <p>
                We made the wireframes clickable so they can be tested by a user
                <br/><br/>
                We gathered both qualitative and quantitative data by asking questions about the new interface and by giving testers a task and timing them and comparing it to the old library.
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Library/1.png"),
                            alt: "Graphic showing the time decrease when users are to locate a specific object in the library",
                        },
                        title: "Task 1",
                        body:"Locate a specific object in the library"
                    },
                    {
                        image: {
                            url: require("./../assets/Library/2.png"),
                            alt: "Graphic showing the time decrease when users are to find files from a specific campaign and visit the campaign page",
                        },
                        title: "Task 2",
                        body:"Find files from a specific campaign and visit the campaign page"
                    },
                    {
                        image: {
                            url: require("./../assets/Library/3.png"),
                            alt: "Graphic showing the time decrease when users are to find a specific release from a monthly subscription",
                        },
                        title: "Task 3",
                        body:"Find a specific release from a monthly subscription"
                    },
                    {
                        image: {
                            url: require("./../assets/Library/4.png"),
                            alt: "Graphic showing the time decrease when users are to find a specific collection of files",
                        },
                        title: "Task 4",
                        body:"Find a specific collection of files"
                    },
                ]}
            />
            <p>
                We iterated on the design and retested; here are the final results:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Library/Overall Time Taken.png"),
                            alt: "Graphic showing the time decrease when using the library",
                        },
                        title: "Time save",
                        body:"Tasks in the prototype took a third of the time they used to"
                    },
                    {
                        image: {
                            url: require("./../assets/Library/Rating.png"),
                            alt: "Graphic showing the customer satisfaction score from the old library to the prototype",
                        },
                        title: "Customer satisfaction",
                        body:"Users felt better when using the final prototype"
                    },
                ]}
            />
            <p>
                This could lead to:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Library/People.png"),
                            alt: "Icon showing people",
                            filters: ["invert(1)"]
                        },
                        title: "Customer loyalty",
                        body:"Users are happy to store all their files on the platform. They become more likely to purchase the same files from our platform than from competitors."
                    },
                    {
                        image: {
                            url: require("./../assets/Library/Tickets.png"),
                            alt: "Graphic showing that there are a third fewer support tickets",
                        },
                        title: "Support time saved",
                        body:"Over 30% of support tickets were complaints and issues related to library and file distribution."
                    },
                ]}
            />
            <h2>Management</h2>
            <p>
                I took the mockup and split it into smaller features for smaller incremental releases. These smaller features are prioritised in importance or a logical order to form a roadmap with rough time estimations.
                <br/><br/>
                This roadmap is presented to the CEO and CTO to get the feature approved.
                <br/><br/>
                For each feature, I would:
            </p>
            <ul>
                <li>Draft a specification of what the feature is and how it works</li>
                <li>Discuss the feasibility with the tech team and confirm the specifications</li>
                <li>Get a time / story points estimate</li>
                <li>Create a Trello card to be assigned to a developer in the sprints</li>
            </ul> 
            <p>
                When features are implemented, I would hold demos to inform different people of the changes:
            </p>
            <ul>
                <li>CEO, CTO because they need to be informed about the project</li>
                <li>Marketing, so they can write marketing material for the new feature</li>
                <li>Customer Support, so they can help people with the new features</li>
                <li>Anyone else who has worked on the project, so they know the project is moving forward</li>
            </ul> 
            <h2>Conlusion</h2>
            <p>
                I left the company about a quarter of the way into the development of the features. I handed over all the Trello cards and specifications to the project owner after me. 
                <br/><br/>
                It was great to see the feature live on the website 6 months after I left the company, so I would call the project a success!
            </p>
        </>
    )
}

export default Library