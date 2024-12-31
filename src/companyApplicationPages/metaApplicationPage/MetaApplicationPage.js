import styles from './MetaApplicationPage.module.css';
import './../../components/javascriptPageShow/JavascriptPageShow.css';
import MultiColumn from './../../components/multiColumn/MultiColumn'
import Gallery from './../../components/gallery/Gallery'
import ImageGallery from 'react-image-gallery'
import Video from './../../components/video/Video'
import {Link} from "react-router-dom";

function MetaApplicationPage() {

  return (
    <>
      <div className={styles.imageTextContainer}>
        <div className={styles.imageContainer}>
              <div>
                  <img
                    src={require("./../../assets/ProfilePic.png")}
                    alt="Felix punching his coinbox"
                  />
              </div>
          </div>
          <div className={styles.mainDesciptionContainer}>
            <p className={`${styles.mainDesciption} ${styles.heyGoogle}`}> 
              Hey Meta!
            </p>
            <p className={`${styles.mainDesciption} ${styles.niceToMeetYou}`}>
              I’m Felix, nice to meet you!
            </p>
          </div>
      </div>
      <div className="markdownShowFlexContainer">
        <div className="markdownContainer">
          <h2>My Journey in AR/VR and Prototyping</h2>
          <p>
            I'm a creative technologist and prototyper with a passion for designing and building innovative user experiences.
            <br/><br/> 
            Over the past few years, I’ve explored the intersection of <b>technology, design, and interaction,</b> bringing ideas to life through iterative prototyping and user-centered design.
            <br/><br/>
            This page highlights my most relevant projects and skills for the <b>Product Design Prototyper</b> role at Reality Labs. From conceptualizing an AR time companion (Timie) to designing and launching an indie game on Steam (Pool 2), each project reflects my drive to <b>create immersive, impactful experiences.</b>
            <br/><br/>
            I’m excited about the opportunity to work with Reality Labs to define the future of AR/VR, combining creativity with cutting-edge technology.
          </p>
          <h2>Featured Projects</h2>

          <h3>Timie: Your AR Time Companion</h3>
          <p>
            <b>Role:</b> AR Interaction Designer 
            <br/><br/>
            <b>Tools:</b> Adobe Illustrator, Photoshop, Physical Prototyping
          </p>
          <Gallery
              images={[
                  require("./../../assets/Timie/Infographic New 2-01-min.png"),
                  require("./../../assets/Timie/Front Cover for Solo Major-min.png"),
              ]}
          />
          <h4>Overview</h4>
          <p>
            Timie helps individuals with ADHD or poor planning habits manage their time by gamifying punctuality. Users race against a virtual version of themselves that is on time, turning time management into an engaging challenge.
          </p>
          <h4>Problem</h4>
          <p>
            Chronic lateness due to leaving their house late. (Caused by poor task planning and underestimating how long they will take.)
          </p>
          <Gallery
            images={[
                require("./../../assets/Timie/1-min.png"),
                require("./../../assets/Timie/2-min.png"),
                require("./../../assets/Timie/3-min.png"),
                require("./../../assets/Timie/4-min.png"),
                require("./../../assets/Timie/5-min.png"),
                require("./../../assets/Timie/6-min.png"),
                require("./../../assets/Timie/7-min.png"),
                require("./../../assets/Timie/8-min.png"),
                require("./../../assets/Timie/9-min.png"),
                require("./../../assets/Timie/10-min.png"),
                require("./../../assets/Timie/11-min.png"),
                require("./../../assets/Timie/12-min.png"),
                require("./../../assets/Timie/13-min.png"),
                require("./../../assets/Timie/14-min.png"),
                require("./../../assets/Timie/15-min.png"),
                require("./../../assets/Timie/16-min.png"),
            ]}
          />
          <h4>Solution</h4>
          <p>
            Designed an intuitive, gamified system to help users visualise when they need to start getting ready.
          </p>
          <Video path={require("./../../assets/Timie/03 - Time Animation.mp4")}/>
          <h4>Process</h4>
          <ul>
            <li>Conducted user interviews to identify pain points and define problem statement.</li>
            <li>Explored solutions, from physical prototypes (post-it timelines) to AR concepts for Google Glass.</li>
            <li>Adapted the design to a smartphone/smartwatch app, creating detailed user flows and mockups.</li>
          </ul>
          <ImageGallery
            lazyLoad={true}
            items={[
                {
                    original: require("./../../assets/Timie/AR-2-resized.gif"),
                    thumbnail: require("./../../assets/Timie/AR-2-thumbnail.gif"),
                },
                { 
                    original: require("./../../assets/Timie/Day Timeline 2-resized-min.jpg"),
                    thumbnail: require("./../../assets/Timie/Day Timeline 2-thumbnail-min.jpg"),
                },
                {
                    original: require("./../../assets/Timie/Micro Timeline-resized-min.jpg"),
                    thumbnail: require("./../../assets/Timie/Micro Timeline-thumbnail-min.jpg"),
                },
                {
                    original: require("./../../assets/Timie/Day Timeline 1-resized-min.jpg"),
                    thumbnail: require("./../../assets/Timie/Day Timeline 1-thumbnail-min.jpg"),
                },
                { 
                    original: require("./../../assets/Timie/IMAG1089-resized-min.jpg"),
                    thumbnail: require("./../../assets/Timie/IMAG1089-thumbnail-min.jpg"),
                },
                {
                    original: require("./../../assets/Timie/IMAG1090-resized-min.jpg"),
                    thumbnail: require("./../../assets/Timie/IMAG1090-thumbnail-min.jpg"),
                },
            ]}
          />
          <h4>Outcome</h4>
          <p>
            Developed a visual prototype demonstrating innovative interaction design.
          </p>
          <img
            src={require("./../../assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg")}
            alt="A prototype smart watch and app to help you be on time"
          />
          <h4>Key skills</h4>
          <ul>
            <li>User Research</li>
            <li>Prototyping</li>
            <li>AR Interaction Design</li>
          </ul>          
          <p>
            Check out the project in more detail <Link to="/project/timie" target="_blank" rel="noopener noreferrer">here</Link>!
          </p>
          <hr/>

          <h3>Pool 2: Pool but you don’t have to wait your turn</h3>
          <p>
            <b>Role:</b> Solo indie game developer  
            <br/><br/>
            <b>Tools:</b> Unity (C#), Figma, Blender
          </p>
          <Video path={require("./../../assets/Pool2/TableMontage-ezgif.com-resize-video.mp4")}/>
          <h4>Overview</h4>
          <p>
            Pool 2 is a 4 player physics-based party game where you play pool with a chaotic twist on wacky tables. No more waiting for your turn as each player controls a cue ball, and shots are taken in real-time! 
          </p>
          <h4>Process</h4>
          <ul>
            <li>Built playable prototype of the game</li>
            <li>Set up user testing and gathered player feedback</li>
            <li>Iterate and added requested features and maps</li>
            <li>Polish visuals and game juciness</li>
            <li>Release on Steam</li>
          </ul>
          {/* [Screenshot of Joe Mama] */}
          <Video path={require("./../../assets/Pool2/AimBot-ezgif.com-resize-video.mp4")}/>
          <h4>Outcome</h4>
          <p>
            Released a full game on Steam
          </p>
          <img
              src={require("./../../assets/Pool2/Steam Store.png")}
              alt="Screenshot of the Steam Store"
          />
          <MultiColumn 
              columns = {[
                  {
                      image: {
                          url: require("./../../assets/Pool2/Review 1.png"),
                          alt: "A positive reivew on the Pool 2 Steam Store",
                      },
                  },
                  {
                      image: {
                          url: require("./../../assets/Pool2/Review 2.png"),
                          alt: "A positive reivew on the Pool 2 Steam Store",
                      },
                  },
              ]}
          />
          <h4>Key skills</h4>
          <ul>
            <li>Unity (C#) development</li>
            <li>Game design</li>
            <li>User testing</li>
          </ul>
          <p>
            Check out the project in more detail <Link to="/project/pool-2" target="_blank" rel="noopener noreferrer">here</Link>!
          </p>
          <hr/>

          <h3>Pasta vs. Noodles: Exploring ML for Image Classification</h3>
          <p>
            <b>Tools:</b> Python, Kaggle, PyTorch, Jupyter Notebook
          </p>
          <Video path={require("./../../assets/Pasta or Noodles/PastaOrNoodle.mp4")}/>
          <h4>Overview</h4>
          <p>
            Prototyped a playful ML tool to classify images as either pasta or noodles, exploring the application of machine learning in real-world scenarios.
          </p>
          <h4>Challenge</h4>
          <p>
            Understanding and fine-tuning image classification models while working with a custom dataset of food images.
          </p>
          <h4>Process</h4>
          <ul>
            <li>
              Trained a model using Pytorch with labeled images of pasta and noodles.
              <br/><br/>
              <img 
                  src={require("./../../assets/Pasta or Noodles/DataBlock.png")}
                  alt="A image of some of the training data"
              />
            </li>
            <li>
              Iteratively improved the model’s accuracy by refining the dataset
              <br/><br/>
              <img 
                  src={require("./../../assets/Pasta or Noodles/Error.png")}
                  alt="Pasta or Noodles training data"
              />
            </li>
          </ul>
          <h4>Outcome</h4>
          <p>
            Delivered a functional classifier and gained hands-on experience with ML workflows, including data preparation, training, and testing.
          </p>
          <img 
              src={require("./../../assets/Pasta or Noodles/Hero Image 2.png")}
              alt="Example of pasta and image classified"
          />
          <h4>Takeaway</h4>
          <p>
            Deepened my understanding of ML prototyping and identified opportunities for integrating ML tools into future AR/VR experiences.
          </p>
          <h4>Key skills</h4>
          <ul>
            <li>Protoyping with Machine Learning</li>
          </ul>
          <p>
            Check out the project in more detail <Link to="/project/pasta-or-noodles" target="_blank" rel="noopener noreferrer">here</Link>!
          </p>
          <hr/>

          <h3>Library: A place where you can access the files you bought on MyMiniFactory</h3>
          <p>
            <b>Role:</b> UX/UI designer, Project Owner 
            <br/><br/>
            <b>Tools:</b> Figma, Trello, Google Docs
          </p>
          <img
            src={require("./../../assets/Library/Hero Image.png")}
            alt="A mockup of the finalised new library design"
          />
          <h4>Overview</h4>
          <p>
            The library is the place where a user can access all the 3D files they have bought on MyMIniFactory. The task is to redesign and improve the MyMiniFactory library.
          </p>
          <h4>Problem</h4>
          <p>
            Users on the platform are not happy about the library
          </p>
          <h4>Solution</h4>
          <p>
            Conduct UX research and redesign the library to make it more user friendly
          </p>
          <h4>Process</h4>
          <ul>
            <li>
              Conducted UX research by sending surveys and interviewing extreme users to collect qualitative and quantitative data on the existing library
              <br/><br/>
              <i><q>I now have Purchased, Campaigns AND Shared with me....why can't these be all together by designer?</q></i> - User 1
              <br/><br/>
              <i><q>Also let us search in our library so if I'm printing dwarves I can see what I already have on hand.</q></i> - User 2
              <br/><br/>

              <table>
                <tr>
                  <th>Task</th>
                  <th>Time</th>
                </tr>
                <tr>
                  <td>Locate a specific object</td>
                  <td> &gt; 1 minute</td>
                </tr>
                <tr>
                  <td>Find files from a specific campaign</td>
                  <td>20sec</td>
                </tr>
                <tr>
                  <td>Find a specific release from a monthly subscription</td>
                  <td>10sec</td>
                </tr>
                <tr>
                  <td>Find a specific collection of files</td>
                  <td>12sec</td>
                </tr>
              </table>
            </li>
            <li>
              Design and tested UX prototypes with users on Figma and iterated the design
              <br/><br/>
              <img 
                  src={require("./../../assets/Library/Library prototype.png")}
                  alt="A clickable prototype of the new library interface"
              />
              <MultiColumn 
                  columns = {[
                      {
                          image: {
                              url: require("./../../assets/Library/Overall Time Taken.png"),
                              alt: "Graphic showing the time decrease when using the library",
                          },
                          // title: "Time save",
                          // body:"Tasks in the prototype took a third of the time they used to"
                      },
                      {
                          image: {
                              url: require("./../../assets/Library/Rating.png"),
                              alt: "Graphic showing the customer satisfaction score from the old library to the prototype",
                          },
                          // title: "Customer satisfaction",
                          // body:"Users felt better when using the final prototype"
                      },
                  ]}
              />
            </li>
            <li>
              Developed product specification documents for the tech team and QA
            </li>
            <li>
              Liase with the tech team to validate the feasibility of the project and get rough timeline for project managment 
            </li>
            <li>
              Conceived the product roadmap and prioritised features to put into the tech sprint
            </li>
          </ul>
          <h4>Outcome</h4>
          <p>
            Produced in depth product specification and roadmap document. (The library has since become live on MyMiniFactory.)
          </p>
          {/* [Another mock-up?] */}
          <h4>Key skills</h4>
          <ul>
            <li>UX/UI research with qualitative and quantitative methods</li>
            <li>Product Specification</li>
            <li>Product roadmap and Agile</li>
          </ul>
          <p>
            Check out the project in more detail <Link to="/project/library" target="_blank" rel="noopener noreferrer">here</Link>!
          </p>
          <hr/>

          <h3>Customizer: Make money by selling customisable 3D designs</h3>
          <p>
            <b>Role:</b> Project Manager, UX/UI designer, Frontend Web Dev 
            <br/><br/>
            <b>Tools:</b> Adobe XD, HTML / CSS, Unity (C#)
          </p>
          <Video path={require("./../../assets/Customizer/Customizer.mp4")}/>
          
          <h4>Overview</h4>
          <p>
            The MyMiniFactory Customizer is a tool where a 3D designer can make money by selling customisable 3D designs.
            <br/><br/>
            My role was to design a system where 3D designers:
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Icons/Upload.png"),
                  alt: "Upload icon",
                  filters: ["invert(1)"]
                },
                title: "Upload STL files",
                body: "Can upload multiple STL files that will be interchanged to make a single STL file",
              },
              {
                image: {
                  url: require("./../../assets/Icons/Jigsaw Pieces-cropped.png"),
                  alt: "Jigsaw Icon",
                  filters: ["invert(1)"]
                },
                title: "Create customizer structure",
                body: "Create the structure of the Customizer (which parts are interchangeable with other parts and how they join together)",
              },
            ]}
          />
          <p>
            3D printer hobbyists:
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Icons/Robot.png"),
                  alt: "Robot icon",
                  filters: ["invert(1)"]
                },
                title: "Customise",
                body: "Can use the tool to pick and choose parts to customise their designs",
              },
              {
                image: {
                  url: require("./../../assets/Icons/Download.png"),
                  alt: "Download Icon",
                  filters: ["invert(1)"]
                },
                title: "Buy the customised file",
                body: "Pay for every customised file they download",
              },
            ]}
          />
          <h4>Task</h4>
          <p>
            Create a interface where 3D designers can upload their own versions of a  customisable “Character Creator” but for any object
          </p>
          <h4>Process</h4>
          <ul>
            <li>
              Analysed our competitors to see currently how other STL “Character Creators” work
            </li>
            <li>
              Made prototypes on paper and Unity to test the user flow, joining accuracy and make iterations
              <br/><br/>
              <Video path={require("./../../assets/Customizer/PaperPrototype-ezgif.com-mute-video.mp4")}/>
              <br/><br/>
              <Video path={require("./../../assets/Customizer/Joining-ezgif.com-mute-video.mp4")}/>
              <br/><br/>
            </li>
            <li>
              Produced the final user flow diagrams and mockups and liaised with developers
              <br/><br/>
              <Gallery
                images={[
                    require("./../../assets/Customizer/Flowchart-min.png"),
                    require("./../../assets/Customizer/ScreenshotOfCustomizer.png"),
                    require("./../../assets/Customizer/CreatorSideUI.png"),
                    require("./../../assets/Customizer/CreatorSideUI2.png"),
                    require("./../../assets/Customizer/CreatorSideUI3.png"),
                ]}
              />
            </li>
            <li>
              Communicated with stakeholders and coordinated the product launch within the cross functional team
            </li>
            <li>
              Produced documentation for how the Customizer technically works and future plans for the product
              <br/><br/>
              <img
                src={require("./../../assets/Customizer/Docs.png")}
                alt="A screenshot of 2 pages of the Customizer documentation"
              />
            </li>
          </ul>
          <h4>Outcome</h4>
          <p>
            Lauched the Customizer on MyMiniFactory.com (50,000 downloads 100,000+ views)
          </p>
          <img
            src={require("./../../assets/Customizer/HeroImage.jpg")}
            alt="A character created from the MyMiniFactory Customizer"
          />
          <h4>Key skills</h4>
          <ul>
            <li>Product Launch</li>
            <li>Leading cross-functional teams</li>
            <li>UX/UI Prototyping</li>
          </ul>
          <p>
            Check out the project in more detail <Link to="/project/customizer" target="_blank" rel="noopener noreferrer">here</Link>!
          </p>
          <hr/>
          <h2>Skills & Projects</h2>
          <h3>Product Launch and Leading Cross-Functional Teams</h3>
          <p>
            Projects showcasing my leadership in cross-functional environments and commercial product launches:
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/FronTiers/FronTiersHero-min.jpg"),
                  alt: "The FronTiers Logo overlayed on a FronTiers page",
                },
                title: "FronTiers",
                body: "Spearheaded a project from prototype to launch, generating $50,000/month in revenue.",
                link: {
                  internalLinkTo: "/project/frontiers",
                  target: "_blank"
                }
              },
              {
                video: {
                  url: require("./../../assets/Customizer/Customizer-ezgif.com-resize-video.mp4"),
                },
                image: {
                  url: require("./../../assets/Customizer/HeroImage.jpg"),
                  alt: "A character created from the MyMiniFactory Customizer",
                },
                title: "Customizer",
                body: "Designed and developed a web-based tool for 3D printing, achieving 50,000 downloads.",
                link: {
                  internalLinkTo: "/project/customizer",
                  target: "_blank"
                }
              },
            ]}
          />
          {/* <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Library/Hero Image.png"),
                  alt: "A mockup of the finalised new library design",
                },
                title: "Library",
                body: "Overhauled the platform's library feature, improving file discoverability and user satisfaction.",
                link: {
                  internalLinkTo: "/project/library",
                  target: "_blank"
                }
              },
            ]}
          /> */}
          <h3>Leveraging ML/AI Models</h3>
          <p>
            Projects where I prototyped with Machine Learning:
          </p>
          <MultiColumn 
            columns = {[
              {
                video: {
                  url: require("./../../assets/Pasta or Noodles/PastaOrNoodle.mp4"),
                },
                image: {
                  url: require("./../../assets/Pasta or Noodles/Hero Image 2.png"),
                  alt: "A screenshot of Not-Book, the interactive learning platform",
                },
                title: "Pasta or Noodles",
                body: "A playful ML tool to distinguish between pictures of Pasta or Noodles",
                link: {
                  internalLinkTo: "/project/pasta-or-noodles",
                  target: "_blank"
                }
              },
            ]}
          />
          <h3>Interaction, Prototyping, and Design Skills</h3>
          <p>
            Examples of projects where I prototyped and designed user interactions:
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Not-Book/New Hero Shot Photoshop Replacement-02-01-resized-min.jpg"),
                  alt: "A screenshot of Not-Book, the interactive learning platform",
                },
                title: "Notbook",
                body: "An interactive learning platform where you learn by playing",
                link: {
                  internalLinkTo: "/project/notbook",
                  target: "_blank"
                }
              },
              {
                image: {
                  url: require("./../../assets/Firefly/Awesome Photo-resized-min.jpg"),
                  alt: "Firefly directing crowds by projecting arrows",
                },
                title: "Firefly",
                body: "A dynamic crowd management system using visual (projected arrows) and audio cues to help security personnel efficiently guide crowds at pop-up venues.",
                link: {
                  internalLinkTo: "/project/firefly",
                  target: "_blank"
                }
              },
            ]}
          />
          {/* <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg"),
                  alt: "A prototype smart watch and app to help you be on time",
                },
                title: "Timie",
                body: "A gamified time management tool that uses AR concepts and physical prototyping to help users plan tasks and stay on time.",
                link: {
                  internalLinkTo: "/project/timie",
                  target: "_blank"
                }
              },
            ]}
          /> */}
          <h3>Coding in Unity with C#</h3>
          <p>
            Projects demonstrating my experience building interactive experiences in Unity:
          </p>
          <MultiColumn 
            columns = {[
              {
                video: {
                  url: require("./../../assets/Pool2/TableMontage-ezgif.com-resize-video.mp4"),
                },
                image: {
                  url: require("./../../assets/Pool2/Heroshot-min.jpg"),
                  alt: "A screenshot of the Pool 2 game",
                },
                title: "Pool 2",
                body: "An indie game published on Steam, showcasing my end-to-end skills in Unity development, gameplay design, and shipping a commercial product",
                link: {
                  internalLinkTo: "/project/pool-2",
                  target: "_blank"
                }
              },
              {
                video: {
                  url: require("./../../assets/Awesome per Second/01-8Second-ezgif.com-resize-video.mp4"),
                },
                image: {
                  url: require("./../../assets/Awesome per Second/AwesomePerSecond.jpg"),
                  alt: "A screenshot of Awsome per Second the game",
                },
                title: "Awesome Per Second",
                body: "An Extra Credits Game Jam Entry about my experence of making my first game",
                link: {
                  internalLinkTo: "/project/Awesome-Per-Second",
                  target: "_blank"
                }
              },
            ]}
          />
          <hr/>
          <h2>Why I’m Excited About Reality Labs</h2>
          <img
            src={require("./../../assets/Misc/Meta Email.png")}
            alt="A screenshot of the Meta email I've recieved"
          />
          <p>
            Three years ago, I had the privilege of being contacted by Reality Labs for this exact role. Although I wasn’t ready to transition at the time, the opportunity left a lasting impression. 
            <br/><br/>
            Since then, I’ve focused on refining my skills in prototyping, interaction design, and Unity development to align even more closely with the work your team is doing.
            <br/><br/>
            This role represents the perfect next step in my career, and I’m excited to contribute my creativity and technical expertise to shape the future of AR/VR interactions.
            <br/><br/>
            Let’s connect, I’d love to discuss how my skills and passion can bring value to Reality Labs.
          </p>
          <h2>Thank you!</h2>

          <p>
            Thank you for your time, I hope you saw a project you liked and I look forward to hearing from you!
            <br/><br/>
            <a 
              href="mailto:felix.li@network.rca.ac.uk" 
              target="_blank"
              rel="noreferrer"
            >
              Let's have a chat!
            </a>
            <br/><br/>
            <a href="Felix Li - Meta Product Design Prototyper CV" download>
              Download my CV!
            </a>
            <br/><br/>
            (If you’d like, there are more projects to check out on the main site, <Link to="/projects">here</Link>!
            <br/><br/>
            This is a special page just for you guys so there is no way to navigate back to here from the main site!)
          </p>
        </div>
      </div>
    </>
  );
}

export default MetaApplicationPage;