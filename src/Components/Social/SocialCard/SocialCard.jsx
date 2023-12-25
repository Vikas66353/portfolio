import "./SocialCard.css";
const SocialCard = () => {
  return (
    <>
      <div className="socialCard">
        <a id="github" href="https://github.com/Vikas66353" target="_blank">
          <div className="mainCard github">
            <div className="cardIcon">
              <img
                className="cardIconImg"
                src="https://editor.analyticsvidhya.com/uploads/765900ba9-article-200807-github-gitguardbody-text.jpg"
              />
            </div>
            <div className="cardTitle">GitHub</div>
          </div>
        </a>
        <a id="linkedIn" href="https://www.linkedin.com/in/vikasdev/" target="_blank">
          <div className="mainCard linkedin">
            <div className="cardIcon">
              <img className="cardIconImg" src="./Assets/linkedIn.png" />
            </div>
            <div className="cardTitle">LinkedIn</div>
          </div>
        </a>
        {/* <div className="mainCard leetcode">
          <div className="cardIcon" style={{ backgroundColor: "lightgray" }}>
            <img
              className="cardIconImg"
              src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
            />
          </div>
          <div className="cardTitle">LeetCode</div>
        </div> */}
        {/* <div className="mainCard">
          <div className="cardIcon">
            <img
              className="cardIconImg"
              src="https://www.danoneinstitute.org/wp-content/uploads/2020/06/logo-rond-twitter.png"
            />
          </div>
          <div className="cardTitle">Twitter</div>
        </div> */}
      </div>
    </>
  );
};

export default SocialCard;
