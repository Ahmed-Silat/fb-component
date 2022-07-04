import React from "react";
import FbImageLibrary from "react-fb-image-grid";
import CustomBtn from "../components/customBtn";
function NewsFeed(props) {
  return (
    <div>
      <div>
        <img src={props.profilePic} />
        <p>{props.name}</p>
        <p>{props.date}</p>
      </div>
      <div>
        <FbImageLibrary images={props.pictures} />
        <CustomBtn title={props.title} />
      </div>
      {/* <div>
        
      </div> */}
    </div>
  );
}

export default NewsFeed;
