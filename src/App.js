import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NewsFeed from "./screen/newsFeed";
// import CustomBtn from "./components/customBtn";

function App() {
  // const userName = prompt("Enter your Name");
  const time = Date.now();
  return (
    <div className="App">
      <header className="App-header">
        <NewsFeed
          profilePic={
            "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
          }
          name={"Ahmed"}
          date={time}
          pictures={[
            "https://www.w3schools.com/howto/img_forest.jpg",
            "https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrKHPsvNDJHY9tWpkHrfkfo8Dkf0LvZU3Hdg&usqp=CAU",
            "https://www.oberlo.com/media/1603969791-image-1.jpg",
            "https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/find-font-from-image.png",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEuSKv1VSK9XoW7PdK-Lpm0TmcW6RfFL9Xw&usqp=CAU",
          ]}
          title={"Like"}
        />
        {/* <div>
          <CustomBtn title={"like"} />
        </div> */}
      </header>
    </div>
  );
}

export default App;
