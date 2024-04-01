// import styles from './GoogleApplicationPage.module.css';
import './../javascriptPageShow/JavascriptPageShow.css';
import MultiColumn from './../multiColumn/MultiColumn'
import {Link} from "react-router-dom";

function About() {

  return (
    <>
      <h1 className="pageTitle">Hey Google!</h1>
      <div className="markdownShowFlexContainer">
        <div className="markdownContainer">
          <p>
            I’m Felix Nice to meet you!
          </p>

          <h2>A bit about me!</h2>
          <p>
            The bulk of my professional work has been in Project management, UX/UI and Web development, but...
            <br/><br/>
            I find it difficult to be categorised as one role, so I’d like to holistically show you who I am and the variety of things I do!
            <br/><br/>
            Here are some of my best projects!
          </p>
          <p>
            (Alternatively, if you want to just look through all of my projects click <Link to="/projects">here</Link>!
            <br/><br/>
            This is a special page just for you guys so there is no way to navigate back to here from the main site!)
          </p>

          <h2>Tech and Web</h2>
          <p>
            For my last job I worked at MyMiniFactory, a 3D printing e-commerce website.
            <br/><br/>
            I’ve worked there for 4 years, during my time, it was a start-up that grew into a scale-up.
            <br/><br/>
            I also grew as well, starting off as UX/UI, learnt how to code and became a front-end developer, to leading projects as a Product Owner / Project Manager.
            <br/><br/>
            Here are my two main projects where I was involved from the initial idea until the launch of the product:
          </p>
          <MultiColumn 
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
          />
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
          <p>(If you’d like, there are more projects to check out on the main site, <Link to="/projects">here</Link>!)</p>
        </div>
      </div>
    </>
  );
}

export default About;
