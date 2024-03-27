import React from 'react';
import Gallery from './../components/gallery/Gallery'
import MultiColumn from './../components/multiColumn/MultiColumn'

class Customizer extends React.Component {
    render(){
        return (
            <>
                <p>
                    The MyMiniFactory Customizer is a tool where a 3D designer can make money by selling customisable 3D designs.
                    <br/><br/>
                    I managed the project, designed the user experience for both the 3D designer and customer and also coded some of the UI. I worked with Adrian Delgado, the lead developer for this project.
                    <br/><br/>
                    Try it out <a href="https://www.myminifactory.com/customizer/name-tag-91" target="_blank" rel="noreferrer">here</a>!
                </p>
                <h2>How does it work</h2>
                <p>
                    The 3D designer: 
                </p>
                <MultiColumn 
                    columns = {[
                        {
                            image: {
                                url: require("./../assets/Icons/Model.png"),
                                alt: "3D Model Icon",
                                filters: ["invert(1)"]
                            },
                            title: "3D Models",
                            body:"Model parts which are joined together to form an object"
                        },
                        {
                            image: {
                                url: require("./../assets/Icons/Upload.png"),
                                alt: "Upload Icon",
                                filters: ["invert(1)"]
                            },
                            title: "Uploads",
                            body:"Uploads the parts to the Customizer"
                        },
                        {
                            image: {
                                url: require("./../assets/Icons/Money.png"),
                                alt: "Money Icon",
                                filters: ["invert(1)"]
                            },
                            title: "Sell",
                            body:"(Optional) Sets a price for the 3D model"
                        },
                    ]}
                />
                <p>    
                    The customer (Maker):
                </p>
                <MultiColumn 
                    columns = {[
                        {
                            image: {
                                url: require("./../assets/Icons/Robot.png"),
                                alt: "Customise Icon",
                                filters: ["invert(1)"]
                            },
                            title: "Customise",
                            body:"Select different parts to customise their object to their liking"
                        },
                        {
                            image: {
                                url: require("./../assets/Icons/Download.png"),
                                alt: "Download Icon",
                                filters: ["invert(1)"]
                            },
                            title: "Download",
                            body:"Buys the file and download it as a single STL file to print"
                        },
                    ]}
                />
                <h2>Designing the user experience</h2>
                <p>
                    The user interface for the customer to customise their file is simple. I looked at our competitor, <a href="https://www.heroforge.com/" target="_blank" rel="noreferrer">Hero Forge</a> and video games character creators for inspiration.
                </p>
                <img 
                    src={require("./../assets/Customizer/HeroForge-resized-min.jpg")}
                    alt="UI of HeroForge"
                />
                <p>
                    But the main challenge of the project was how to design an intuitive system for the 3D designer to upload their designs. 
                    <br/><br/>
                    I spoke to the developer to find out how the project worked technically behind the scenes. From there, I figured out what actions the 3D designer needs to do.
                </p>
                <ul>
                    <li>Upload a STL file</li>
                    <li>Tell the customizer which group of parts (part type) it belongs to. So the customer can swap it out for another part from the same group.</li>
                    <li>Tell the customizer where and how the parts join together</li>
                </ul>
                <p>
                    I brainstormed different ways the overall main structure of the Customizer could work. I tested these using paper prototypes with which users can click through. With paper, I can easily iterate and change the prototype quickly even during mid test.
                </p>
                <img 
                    src={require("./../assets/Customizer/UserTest1.jpg")}
                />
                <p>
                    For inputting the position and rotation of where parts joined together I prototyped a few different ways to do that in Unity.
                </p>
                <img src={require("./../assets/Customizer/UnityTest.jpg")}/>
                <p>
                    These were the metrics and considerations of choosing the method of joining parts.
                </p>
                <MultiColumn 
                    columns = {[
                        {
                            image: {
                                url: require("./../assets/Icons/Carer-cropped.png"),
                                alt: "Preference Icon",
                                filters: ["invert(1)"]
                            },
                            title:"Preference",
                            body:"Asked users which way they liked the most"
                        },
                        {
                            image: {
                                url: require("./../assets/Icons/Time-cropped.png"),
                                alt: "Time Icon",
                                filters: ["invert(1)"]
                            },
                            title:"Time",
                            body:"Timed how long it took for the users to join the parts"
                        },
                        {
                            image: {
                                url: require("./../assets/Icons/Target-cropped.png"),
                                alt: "Accuracy Icon",
                                filters: ["invert(1)"]
                            },
                            title:"Accuracy",
                            body:"Measured how close the users were to the mathmatical perfect fit"
                        },
                    ]}
                />
                <p>
                    After designing the user journey, I sent the developer a flowchart detailing which screens need to be shown and also mock-ups of the user interface
                </p>
                <Gallery
                    images={[
                        require("./../assets/Customizer/Flowchart-min.png"),
                        require("./../assets/Customizer/ScreenshotOfCustomizer.png"),
                        require("./../assets/Customizer/CreatorSideUI.png"),
                        require("./../assets/Customizer/CreatorSideUI2.png"),
                        require("./../assets/Customizer/CreatorSideUI3.png"),
                    ]}
                />
                <p>
                    While the developer is developing the main Customizer feature, I designed and coded the UI for additional pages and touchpoints to integrate it to the existing site.
                </p>
                <Gallery
                    images={[
                        require("./../assets/Customizer/CustomizerSearch-min.jpg"),
                        require("./../assets/Customizer/CustomizerWorld-min.jpg"),
                        require("./../assets/Customizer/CustomizerFAQ-min.jpg"),
                    ]}
                />
                <h2>Managing the project</h2>
                <p>
                    I joined the project close to its inception. When I joined we had an idea what the backend would look like, how to join multiple STL files in the code but there was no usable graphical interface yet.
                    <br/><br/>
                    I interviewed stakeholders and users to create the vision  and requirements of the product for launch. Worked together with the developer to figure out steps to get there. When it was time to launch, I liaised with the marketing team to spread the word about the product. Read customer feedback and prioritised fixes and improvements. 
                    <br/><br/>
                    I wrote the handover document detailing technical information, an analysis of what’s good and what needs improving and a vision of the future of the project.
                    <br/><br/>
                    Overall I am very proud of this project. The Customizer has seen tens of thousands of downloads. This is the first commercial project I have managed almost from conception to launch.
                </p>
                {/* TODO Add Images */}
                <img 
                    src={require("./../assets/Customizer/HeroImage.jpg")}
                    alt="A character made from the Customizer"
                />
            </>
        )
    }
}

export default Customizer