import MultiColumn from './../components/multiColumn/MultiColumn'
import YouTube from './../components/youTube/YouTube.js'
import Video from './../components/video/Video'
import Gallery from './../components/gallery/Gallery'

function FronTiers() {
    return (
        <>
            <p>
                MyMiniFactory FronTiers is a product where 3D designers can do a product launch, and communicate with their customers.
                <br/><br/>
                In this project I started off as the frontend developer and swapped to being the UX/UI designer and project owner. I was also the QA tester of this product.
                <br/><br/>
                Check it out <a href="https://www.myminifactory.com/campaigns?show=FronTiers" target="_blank" rel="noreferrer">here</a>!
            </p>
            <h2>How does it work</h2>

            <p>The 3D designer:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Model.png"),
                            alt: "3D Model Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Models the product",
                        body:"Typically, a collection of 30+ miniatures used for Dungeons and Dragons"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/UI Design-cropped.png"),
                            alt: "Set Up Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Sets up the FronTiers page",
                        body:"Showcase their product, upload the miniatures and select a launch date"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Inform-cropped.png"),
                            alt: "Inform Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Communicate with Customers",
                        body:"Write news and updates on the FronTiers page"
                    },
                ]}
            /> 
            <p>As a customer:</p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/Browse.png"),
                            alt: "Target Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Browse",
                        body:"Look for upcoming collections and deals"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Money.png"),
                            alt: "Money Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Pledge",
                        body:"Buy the collection and support its creator"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Download.png"),
                            alt: "Download Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Receive",
                        body:"When the product has launched, the files are automatically in their library"
                    },
                ]}
            />
            <h2>Early Days</h2>
            <p>
                When I was brought onto the project, lots of manual work was needed to set up each product release page. 
                <br/><br/>
                As the frontend developer I received mock-ups of each product release page and code the UI using HTML and CSS. 
            </p>
            <Gallery
                images={[
                    require("./../assets/FronTiers/image 38.png"),
                    require("./../assets/FronTiers/image 39.png"),
                    require("./../assets/FronTiers/image 40.png"),
                    require("./../assets/FronTiers/image 42.png"), 
                    require("./../assets/FronTiers/image 41.png"), 
                ]}
            />
            <h2>Automation</h2>
            <p>
                As I grew in the company I became a Product Owner and was put in charge of this project. It was clear the process of creating a product launch needs to be less manual and automated.
                <br/><br/>
                By automating the process we can: 
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/Icons/UX.png"),
                            alt: "Target Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Achieve a better user experience ",
                        body:"If the 3D designer makes changes on the page, it is updated immediately "
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/public-cropped.png"),
                            alt: "People Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Free up our resources",
                        body:"Our UX/UI and frontend developers can work on other important projects"
                    },
                    {
                        image: {
                            url: require("./../assets/Icons/Scale.png"),
                            alt: "Boxes Icon",
                            filters: ["invert(1)"]
                        },
                        title:"Scale the product",
                        body:"We can release many more campaigns as our resources will not be the limiting factor"
                    },
                ]}
            />
            <h2>Research</h2>
            <p>
                Before committing time and resources to large projects, it is important to make sure you understand the problem and what’s currently happening. This is so you can find the gap in the market to ensure you make the best product. 
                <br/><br/>
                To achieve that I did research in two areas, competitor analysis and user research.
                <br/><br/>
                Before FronTiers, 3D designers used Kickstarter to release their products. Kickstarter was  good for showcasing and selling their models, but it didn’t have the ability to distribute them. 
            </p>
            <img 
                src={require("./../assets/FronTiers/Kickstarter.png")}
                alt="The A Helluva Sisters: Warlock Tiefling Pin-Up STL Set + Altar campaign on Kickstarter"
            />
            <p>
                I also looked at Gamefound, a similar product to ours, it offered distribution of goods but it was targeted at board games.
            </p>
            <img 
                src={require("./../assets/FronTiers/Gamefound.png")}
                alt="The Dungeons & Lasers VI: Caves campaign on Gamefound"
            />
            <p>
                With customer research I sent surveys and conducted interviews with both 3D designers and buyers to understand them, find out what matters to them and what their frustrations are.
                <br/><br/>
                The main point we found is the distribution of the 3D files is terrible for both 3D designers and end customers.
                <br/><br/>
                For the distribution of the 3D files designers use:
            </p>
            <MultiColumn 
                columns = {[
                    {
                        image: {
                            url: require("./../assets/FronTiers/GoogleDrive.png"),
                            alt: "Target Icon",
                        },
                        title:"Google Drive",
                    },
                    {
                        image: {
                            url: require("./../assets/FronTiers/Dropbox.png"),
                            alt: "People Icon",
                        },
                        title:"Dropbox",
                    },
                ]}
            />
            <ul>
                <li>
                    3D Designers use Google Drive and Dropbox links to distribute their product upon release. However because of the many different pledges and stretchgoals it is a big task to send the correct links to each user without making a mistake.
                </li>
                <li>
                    Sometimes when the buyers try to download their miniatures the link is expired or they don’t have the permission to access the folder. And they would need to reach out to the 3D designer to rectify this issue.
                </li>
            </ul>
            <p>
                It was clear the end product should be a product where a 3D designer could set up their product launch page and upload their 3D files without intervention. When the time comes, it should automatically distribute the files to the buyers.
            </p>
            <h2>Priorities and Roadmap</h2>
            <p>
                My first priority was to automate as much as I could without adding new features to the product. This is so we can have less of a burden on our developers and their time can be used to create new features for this product.
                <br/><br/>
                As the developer for the previous product launch pages, I understood what information is needed to make one. I produced mock-ups and requirements for a page that contains different fields and a text editor so a MyMiniFactory staff and eventually a 3D designer can complete a product launch page without needing a developer.
            </p>
            <Gallery
                images={[
                    require("./../assets/FronTiers/ExampleFronTier.png"),
                    require("./../assets/FronTiers/ExampleFronTier2.png"),
                    require("./../assets/FronTiers/FronTierBuilder.png"),
                    require("./../assets/FronTiers/AboutBuilder.png"),
                ]}
            />
            <p>
                The next priority is to integrate product launches, FronTiers, to our platform. Since creating a FronTier would be easier, we will have more of them so an easy way for customers to discover and browse them is needed. 
                <br/><br/>
                For that I produced mock-ups and requirements for a page where you can browse and search for FronTiers and also integrate it with our platform's main search.
            </p>
            <Gallery
                images={[
                    require("./../assets/FronTiers/Campaigns Search.png"),
                    require("./../assets/FronTiers/FronTiersPageCropped.png"),
                    require("./../assets/FronTiers/FronTiers Page.png"),
                ]}
            />
            <p>
                After that the focus is to improve the product with more features that tackle smaller issues found in our research and to have all of the relevant features as our competitors. 
                <br/><br/>
                This included: 
            </p>
            <ul>
                <li>A premaketing page which a 3D designer can set up to offer a freebie model to someone who signs up to their mailing list</li>
            </ul>
            <Gallery
                images={[
                    require("./../assets/FronTiers/Premarketing Page.png"),
                    require("./../assets/FronTiers/PremarketingBuilder.png"),
                ]}
            />
            <ul>
                <li>A dedicated Milestones feature where 3D designers can upload models which are unlocked as the total sales of the product launch reaches certain thresholds.</li>
            </ul>
            <Gallery
                images={[
                    require("./../assets/FronTiers/Milestones.png"),
                    require("./../assets/FronTiers/AddMilestones.png"),
                    require("./../assets/FronTiers/MilestonesBuilder.png"),
                ]}
            />
            <p>
                On top of the main project roadmap, I would prioritise bug fixes and urgent matters that are found by the Designer and Customer Relations team.
            </p>
            <h2>Conclusion</h2>
            <p>
                I am proud to be a part of MyMiniFactory’s main services as a platform. Starting from a validation prototype and to oversee its 1.0 release, playing many roles from front-end developer, UX/UI, Product Owner and QA tester.
                <br/><br/>
                The product is used by tens of thousands of customers and saw around $60000 revenue this month (March 2024).
            </p>
        </>
    )
}

export default FronTiers