import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a 
        className="linkedInIcon"
        href="https://www.linkedin.com/in/felix-li-a87693131/"
        target="_blank"
      >
        <img src={require("./../../assets/Misc/LinkedInLogo.png")}/>
      </a>
      <a 
        href="mailto:felix.li@network.rca.ac.uk" 
        target="_blank"
      >
        felix.li@network.rca.ac.uk
      </a>
    </div>
  );
}

export default Footer;
