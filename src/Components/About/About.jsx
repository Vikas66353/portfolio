import "./About.css";
import DataCard from "./DataCard/DataCard";
// import resume from "./Assets/files/vikasMishra-resume.pdf";

const About = () => {
  return (
    <>
      <div id="About" className="aboutContainer">
        <span className="headerText">About Me</span>
        <div className="aboutCard">
          <div className="aboutImg">
            <div className="profileImg">
              <div className="profileCircle">
                <img
                  src="./Assets/1image.jpeg"
                  className="profilePic"
                  atl="profile pic"
                />
              </div>
            </div>
            <div className="profileDesc">
              Masters In Computer Application
              <a
                href="./Assets/files/vikasMishra-resume.pdf"
                download="resume"
                target="_blank"
              >
                <button className="prmButton">Download Resume</button>
              </a>
            </div>
          </div>
          <div className="aboutStatus">
            <DataCard />
          </div>
          <div className="aboutDetails">
            <div className="aboutTitle">
              <span className="ml">Summary</span>
            </div>
            <div className="aboutSummary">
              Hey! This is Vikas MIshra I am grateful that you visited my
              profile
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
