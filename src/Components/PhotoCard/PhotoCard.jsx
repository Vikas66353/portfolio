import "./PhotoCard.css";
const PhotoCard = ({ counter }) => {
  return (
    <>
      <div className="mainWorkCard">
        <div className="workDesc">
          <div className="workTitle">Weather Report</div>
          <div className="workDetails">
            Built a "Weather Report" Using ReactJS, Library, CSS, HTML
            and JSX. This Web App Fetches the data from OpenWeatherAPI and
            Display it to the Users.
          </div>
        </div>
        <div className="workDemoImg">
          <img
            src={"./assets/DemoImg/" + counter + ".png"}
            className="demoImg"
            alt="DemoImg"
          />
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
