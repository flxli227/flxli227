import styles from './About.module.css';
import './../javascriptPageShow/JavascriptPageShow.css';
import MultiColumn from './../multiColumn/MultiColumn'

function About() {

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
            <p className={styles.mainDesciption}>
              Hi! I’m Felix,<br/>
              I do <b>tech&nbsp;stuff,</b> <b>physical&nbsp;stuff</b> and I love <b>games!</b>
            </p>
          </div>
      </div>
      <div className="markdownShowFlexContainer">
        <div className="markdownContainer">
          <h2>Education</h2>
          <MultiColumn 
            columns = {[
              {
                image: {
                  url: require("./../../assets/University Logos/Royal College of Art-Photoroom.png-Photoroom.png"),
                  alt: "Explain Icon",
                },
                body:<p>MA<br/> Innovation Design Engineering - 2018</p>
              },
              {
                image: {
                  url: require("./../../assets/University Logos/Imperial_resized_png.png"),
                  alt: "Memory Icon",
                },
                body: <p>MSc<br/> Innovation Design Engineering - 2018 <br/><br/>BEng<br/> Mechanical Engineering - 2016</p>
              },
            ]}
            />
            <p>
              Download my CV <a href="Felix Li - Project Owner CV.pdf" download>here</a>!
            </p>
        </div>
      </div>
    </>
  );
}

export default About;
