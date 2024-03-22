import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <a 
        className="linkedInIcon"
        href="https://www.linkedin.com/in/felix-li-a87693131/"
        target="_blank"
        rel="noreferrer"
      >
        <img 
          src={require("./../../assets/Misc/LinkedInLogo.png")}
          alt="LinkedIn Icon"
        />
      </a>
      <a 
        href="mailto:felix.li@network.rca.ac.uk" 
        target="_blank"
        rel="noreferrer"
      >
        felix.li@network.rca.ac.uk
      </a>
    </div>
  );
}

export default Footer;
