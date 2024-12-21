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
          <h4>Highlights</h4>
          {/* <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul> */}
          <ul>
            <li>
              Problem: Chronic lateness due to leaving their house late. (Caused by poor task planning and underestimating how long they will take.)
              <br/><br/>
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
            </li>
            <li>
              Solution: Designed an intuitive, gamified system to help users visualise when they need to start getting ready.
              <br/><br/>
              <Video path={require("./../../assets/Timie/03 - Time Animation.mp4")}/>
              <br/><br/>
            </li>
            <li>
              Process:
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
            </li>
            <li>
              Outcome: Developed a visual prototype demonstrating innovative interaction design.
              <br/><br/>
              <img
                src={require("./../../assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg")}
                alt="A prototype smart watch and app to help you be on time"
              />
            </li>
          </ul>
          <h4>Key skills</h4>
          <ul>
            <li>User Research</li>
            <li>Prototyping</li>
            <li>AR Interaction Design</li>
          </ul>
          <p>
            Check out the project in more detail here!
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
          <h4>Highlights</h4>
          <ul>
            <li>
              Process:
              <ul>
                <li>Built playable prototype of the game</li>
                <li>Set up user testing and gathered player feedback</li>
                <li>Iterate and added requested features and maps</li>
                <li>Polish visuals and game juciness</li>
                <li>Release on Steam</li>
              </ul>
              {/* [Screenshot of Joe Mama] */}
              <Video path={require("./../../assets/Pool2/AimBot-ezgif.com-resize-video.mp4")}/>
              <br/><br/>
              {/* [Screenshot of Joe Mama] */}
            </li>
            <li>
              Outcome: Released a full game on Steam
              <br/><br/>
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
            </li>
          </ul>
          <h4>Key skills</h4>
          <ul>
            <li>Unity (C#) development</li>
            <li>Game design</li>
            <li>User testing</li>
          </ul>
          <p>
            Check out the project in more detail here!
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
          <h4>Highlights</h4>
          <ul>
            <li>Problem: Users on the platform are not happy about the library</li>
            <li>Solution: Conduct UX research and redesign the library to make it more user friendly</li>
            <li>
              Process:
              <ul>
                <li>
                  Conducted UX research by sending surveys and interviewing extreme users to collect qualitative and quantitative data on the existing library
                </li>
                {/* [Quotes] */}
                <li>
                  Design and tested UX prototypes with users on Figma and iterated the design
                </li>
                  {/* [Low fidelity mock up] */}
                  {/* [Results] */}
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
            </li>
            <li>
              Outcome: Produced in depth product specification and roadmap document. (The library has since become live on MyMiniFactory.)
              <br/><br/>
              {/* [Another mock-up?] */}
            </li>
          </ul>
          <h4>Key skills</h4>
          <ul>
            <li>UX/UI research with qualitative and quantitative methods</li>
            <li>Product Specification</li>
            <li>Product roadmap and Agile</li>
          </ul>
          <p>
            Check out the project in more detail here!
          </p>






          <h3>Customizer: Make money by selling customisable 3D designs</h3>
          <p>
            <b>Role:</b> Project Manager, UX/UI designer, Frontend Web Dev 
            <br/><br/>
            <b>Tools:</b> Adobe XD, HTML / CSS, Unity (C#)
          </p>
          <img
            src={require("./../../assets/Customizer/HeroImage.jpg")}
            alt="A character created from the MyMiniFactory Customizer"
          />
          <h4>Overview</h4>
          <p>
            The MyMiniFactory Customizer is a tool where a 3D designer can make money by selling customisable 3D designs.
            <br/><br/>
            My role was to design a system where:
          </p>
          <ul>
            <li>
              3D designers:
              <ul>
                <li>
                Can upload multiple STL files that will be interchanged to make a single STL file
                </li>
                <li>
                  Create the structure of the Customizer and tell the software which parts are interchangeable with other parts and how they join together
                </li>
              </ul>
            </li>
            <li>
              3D printer hobbyists:
              <ul>
                <li>
                  Can use the tool to pick and choose parts to customise their designs
                </li>
              </ul>
            </li>
          </ul>
          <h4>Highlights</h4>
          <ul>
            <li>Problem: Users on the platform are not happy about the library</li>
            <li>Solution: Conduct UX research and redesign the library to make it more user friendly</li>
            <li>
              Process:
              <ul>
                <li>
                  Analysed our competitors to see currently how other STL “Character Creators” work
                </li>
                <li>
                  Brainstormed different interfaces to allow 3D designers to upload their files and create the structure of the Customizer
                </li>
                <li>
                  Made prototypes on paper and Unity to test the user flow, joining accuracy and make iterations
                  <Video path={require("./../../assets/Customizer/PaperPrototype-ezgif.com-mute-video.mp4")}/>
                  <Video path={require("./../../assets/Customizer/Joining-ezgif.com-mute-video.mp4")}/>
                </li>
                <li>
                  Produced the final user flow diagrams and mockups and liaised with developers
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
              </ul>
            </li>
            <li>
              Outcome: Lauched the Customizer on MyMiniFactory.com (50,000 downloads 100,000+ views)
              <br/><br/>
              <Video path={require("./../../assets/Customizer/Customizer.mp4")}/>
            </li>
          </ul>
          <h4>Key skills</h4>
          <ul>
            <li>Product Launch</li>
            <li>Leading cross-functional teams</li>
            <li>UX/UI Prototyping</li>
          </ul>
          <p>
            Check out the project in more detail here!
          </p>
          {/* <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/FronTiers/FronTiersHero-min.jpg"),
                  alt: "The FronTiers Logo overlayed on a FronTiers page",
                },
                title: "FronTiers",
                body: "A product launch tool for 3D designers",
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
                body: "A tool where a 3D designer can make money by selling customisable 3D designs",
                link:{
                  internalLinkTo: "/project/customizer",
                  target: "_blank"
                }
              },
            ]}
          /> */}
          <h2>Physical Making</h2>
          <p>
            Outside of the digital world, I am also good with engineering and mechanisms. 
            <br/><br/>
            I can manufacture and make prototypes/ products in a workshop using wood and metal. I can also 3D model and produce engineering drawings.
            <br/><br/>
            Here are my proudest wood and metal working projects:
          </p>
          <MultiColumn 
            columns = {[
              {
                video: {
                  url: require("./../../assets/Coinbox/02-FinalMontage-ezgif.com-resize-video.mp4"),
                },
                image: {
                  url: require("./../../assets/Coinbox/Hero Shot-min.jpg"),
                  alt: "Felix with his coinbox",
                },
                title: "Coinbox",
                body: "A physical Super Mario Bros Coinbox replica submitted as a part of Level-up competition hosted by the Imperial Hackspace",
                link: {
                  internalLinkTo: "/project/coinbox",
                  target: "_blank"
                }
              },
              {
                image: {
                  url: require("./../../assets/Scooter/IMG-20150203-WA0006-resized-min.jpg"),
                  alt: "The inner workings of our ME2 electric scooter as a part of Mechanical Engineering at Imperial College",
                },
                title: "ME2 Scooter Project",
                body: "Transformation of a push scooter to an electric scooter",
                link: {
                  internalLinkTo: "/project/me2-scooter-project",
                  target: "_blank"
                }
              },
            ]}
          />
          <h2>Product Design and solving problems</h2>
          <p>
            I’m also curious and inquisitive, I like to learn about the world and solve problems.
            <br/><br/>
            It is a dream of mine to invent a product that changes the world for good.
            <br/><br/>
            The area I am particularly passionate about is education and assistive technology. Maybe because I was diagnosed with Dyslexia in my final year of university and at the time, I did not cope well with my studies.
            <br/><br/>
            Here are my projects which focus on education and assistive technology, finding the problem, experimentation and finding solutions for those problems:
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
                  url: require("./../../assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg"),
                  alt: "A prototype smart watch and app to help you be on time",
                },
                title: "Timie",
                body: "Your Personal Time Companion",
                link: {
                  internalLinkTo: "/project/timie",
                  target: "_blank"
                }
              },
            ]}
          />
          <h2>Games</h2>
          <p>
            Video games are a big part of my life.
            <br/><br/>
            I love creating and participating in creative, novel interactive experiences. 
            <br/><br/>
            Currently I am developing my own Indie game and my goal is to sell it as a product.
            <br/><br/>
            Here is the game I am working on and one I’ve made in the past:
          </p>
          <MultiColumn 
            columns = {[
              {
                video: {
                  url: require("./../../assets/Pool2/Pool2Gameplay12Seconds-ezgif.com-resize-video.mp4"),
                },
                image: {
                  url: require("./../../assets/Pool2/Heroshot-min.jpg"),
                  alt: "A screenshot of the Pool 2 game",
                },
                title: "Pool 2",
                body: "A game of pool, but each player has their own cue ball and shots happen in real time",
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
          <h2>Sports</h2>
          <p>
            Outside of making things, I enjoy doing sports!
            <br/><br/>
            Currently I am playing Kabaddi and Wrestling. 
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Sports/Dabang Delhi-min.jpg"),
                  alt: "Felix Li and Mohit in Pro Kabaddi League Season 10",
                },
                title: "Kabaddi",
                body: "Just came back from India having participated in the Pro Kabaddi League Seaon 10 as a professional Kabaddi player!",
                link: {
                  url:"https://www.instagram.com/p/C40P2gKpbGU/",
                  target: "_blank"
                }
              },
              {
                image: {
                  url: require("./../../assets/Sports/Wrestling-min.jpg"),
                  alt: "Felix training at London Fight Factory",
                },
                title: "Wrestling",
                body: "Looking to start competing in June!",
              },
            ]}
          />
          <h2>Thank you!</h2>
          <p>
            Overall, my process is to find opportunities and problems to solve!
            <br/><br/>
            I experiment physically and digitally to see what sticks.
            <br/><br/>
            Thank you for your time, I hope you saw a project you liked and I look forward to hearing from you!
          </p>
          <p>
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