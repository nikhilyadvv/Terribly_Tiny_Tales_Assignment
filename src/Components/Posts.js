import React from "react";
import "../App.css";

const Posts = () => {
    const data = {
        "totalPosts": 134,
        "author": "anujgosalia",
        "posts": [
            {
            "id": 1,
            "title": "A Changing World Order",
            "description": "The world is changing at a feverish pace. Friends, colleagues and everyone engaged in knowledge work are beginning to sense this, including ...",
            "type": "musing",
            "date": "August 2",
            "views": 102,
            },
            {
            "id": 2,
            "title": "Indian v/s Australia",
            "description": "Think about it - this cricket series was akin to therapy. \n\nLaying our childhood trauma up top, working with it slowly and surely over two m...",
            "type": "thought",
            "date": "January 21",
            "views": 156,
            },
            {
            "id": 3,
            "title": "Write To Build",
            "description": "Writing is the first step to create:\n\n- stories \n- products \n- companies ",
            "type": "thought",
            "date": "November 18",
            "views": 228,
            },
        ]
    }
  return (
    <>
      <div className="postcount">
        <h3 className="postsnumber">{data.totalPosts} Posts</h3>
      </div>
      <div className="postdiv">
        {data.posts.map((post)=> (
            <div className="posts" key={post.id}>
                <div className="posthead">
                    <h3>{post.title}</h3>
                    <ion-icon
                    name="thumbs-up-outline"
                    style={{ backgroundColor: "orange" }}
                    ></ion-icon>
                </div>
                <p className="posttext">{post.description}</p>
                <div className="postfooter">
                    <p className="postfootertype">
                    <span style={{ color: "#03a9f4" }}>{post.type}</span>
                    <span style={{ color: "rgb(60,60,60)" }}><b> by {data.author}</b></span>
                    </p>
                    <p className="postdate">{post.date} - {Math.floor(0.1*post.description.split(" ").filter((element)=>{return element.length!==0;}).length)} mins Read - {post.views} Views</p>
                </div>
            </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
