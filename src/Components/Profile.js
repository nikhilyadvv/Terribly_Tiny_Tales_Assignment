import React from "react";
import "../App.css";
import cover from "../assets/cover.png";
import profile from "../assets/profile.png";

const Profile = () => {
  const data = {
    profile_name: "Anuj Gosalia",
    followers: "6482",
    following: "245",
    profile_bio: "Co-founder & CEO at Terribly Tiny Tales",
    instagram: "https://www.instagram.com/anujgosalia",
    stars: "125",
    likes: "12",
    views: "57.8k",
    hearts: "26.0k",
  };
  return (
    <>
      <div className="hero">
        <img src={cover} alt="Cover pic" className="bgimg" />
        <div className="herobottom">
          <div className="heromain">
            <div className="profilediv">
              <img src={profile} alt="Profile pic" className="profile" />
            </div>
            <div className="herobtmtext">
              <div className="profilehead">
                <h2 className="profileheadname">{data.profile_name}</h2>
                <div className="icons">
                  <ion-icon
                    name="diamond-outline"
                    style={{ backgroundColor: "purple" }}
                  ></ion-icon>
                  <ion-icon
                    name="checkmark-outline"
                    style={{ backgroundColor: "green", color: "black" }}
                  ></ion-icon>
                </div>
              </div>
              <div className="followerdiv">
                <div className="followers">
                  <div className="followertext">{data.followers}</div>
                  Followers
                </div>
                <div className="followers">
                  <div className="followertext">{data.following}</div>
                  Following
                </div>
              </div>
            </div>
          </div>
          <div className="herobtmdivs">
            <div className="herodesc">
              <h3 className="profileheaddesc">{data.profile_bio}</h3>
              <a href={`${data.instagram}`} className="link">
                {data.instagram}
              </a>
            </div>
            <div className="icondivs">
              <div className="icondiv">
                <ion-icon
                  name="star-outline"
                  style={{ backgroundColor: "aquamarine" }}
                ></ion-icon>
                {data.stars}
              </div>
              <div className="icondiv">
                <ion-icon
                  name="thumbs-up-outline"
                  style={{ backgroundColor: "orange" }}
                ></ion-icon>
                {data.likes}
              </div>
              <div className="icondiv">
                <ion-icon
                  name="eye-outline"
                  style={{ backgroundColor: "gray" }}
                ></ion-icon>
                {data.views}
              </div>
              <div className="icondiv">
                <ion-icon
                  name="heart-outline"
                  style={{ backgroundColor: "red" }}
                ></ion-icon>
                {data.hearts}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
