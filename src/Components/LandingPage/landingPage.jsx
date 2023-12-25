import "./landingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeMain">
        <div className="homeLeft">
          <div className="introText">
            <span className="span1"><span className="firstLetter">Hey! I am VIkas Mishra</span></span>
            <span className="span2">Let's Get to Know About Me! </span>
            <button className="button button-2">Connect With Vikas</button>
          </div>
        </div>
        <div className="homeRight">
          <img src="./Assets/Proud.svg" className="homeImg" />
        </div>
        </div>
        <div className="scrollIconDiv">
            <div className="triangle">
            </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
