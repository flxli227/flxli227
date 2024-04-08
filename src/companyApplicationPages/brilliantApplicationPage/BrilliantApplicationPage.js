import './../../components/javascriptPageShow/JavascriptPageShow.css';
import MultiColumn from './../../components/multiColumn/MultiColumn'
import {Link} from "react-router-dom";

function BrilliantApplicationPage() {

  return (
    <>
      <h1 className="pageTitle">Hey Brilliant!</h1>
      <div className="markdownShowFlexContainer">
        <div className="markdownContainer">
          <h2>I’m Felix Nice to meet you!</h2>
          <p>
            Here are the most relevant projects for the Product Designer role!
          </p>

          <h2>Product management / web</h2>
          <p>
            For my last job I worked at <a href="https://www.myminifactory.com/" target="_blank" rel="noreferrer">MyMiniFactory</a>, a 3D printing e-commerce website.
            <br/><br/>
            I worked as a Product Owner and also did UX/UI. 
            <br/><br/>
            Here are my two main projects where I managed the initial idea until the launch of the product:
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
          />
          
          <h2>Interactive STEM subject learning</h2>
          <p>
            For my final university project at Imperial and the Royal College of Art, I developed an an online learning platform where users can learn math by clicking and dragging elements.
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
            ]}
          />

          <h2>Creative problem solving</h2>
          <p>
            Here are two more projects where I solve problems using creative thinking and experimentation.
          </p>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/Timie/Timie EXP Pictures-05 2-05-05 1-resized-min.jpg"),
                  alt: "A prototype smart watch and app to help you be on time",
                },
                title: "Timie",
                body: "Your Personal Time Companion",
                link:{
                  internalLinkTo: "/project/timie",
                  target: "_blank"
                }
              },
              {
                image: {
                  url: require("./../../assets/Firefly/Awesome Photo-resized-min.jpg"),
                  alt: "Firefly directing crowds by projecting arrows",
                },
                title: "Firefly",
                body: "A dynamic crowd control system for evacuation of outdoor venues",
                link: {
                  internalLinkTo: "/project/firefly",
                  target: "_blank"
                }
              },
            ]}
          />

          <h2>Thank you!</h2>
          <p>
            I’ve done loads of other projects you may find interesting too, check them out <Link to="/projects">here</Link>!
            <br/><br/>
            This is a special page just for you guys so there is no way to navigate back to here from the main site!
          </p>
        </div>
      </div>
    </>
  );
}

export default BrilliantApplicationPage;
