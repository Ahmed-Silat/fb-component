import React from "react";
import FbImageLibrary from "react-fb-image-grid";
import "./newsFeed.css";
// import CustomBtn from "../components/customBtn";
function NewsFeed(props) {
  return (
    <div className="main">
      <div className="user-details">
        <div>
          <img src={props.profilePic} className="profile-pic" />
        </div>
        <div className="user-info">
          <p className="user-name">{props.name}</p>
          <p className="date">{props.date}</p>
        </div>
      </div>
      <div className="image-library">
        <img src="https://www.w3schools.com/howto/img_forest.jpg" />
        {/* <FbImageLibrary images={props.pictures} /> */}
        {/* <CustomBtn title={props.title} /> */}
      </div>
    </div>
  );
}

export default NewsFeed;
