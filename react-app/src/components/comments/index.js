import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import * as classes from "./comments.module.css";

function Comments() {
  const history = useHistory();
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const commentsData = await fetch(`/api/comments/spot/${id}`);
      if (commentsData.ok) {
        const { Comments_By_Spot } = await commentsData.json();
        console.log(Comments_By_Spot);
        setComments([...Comments_By_Spot]);
        // let userIds = Comments_By_Spot.map((comment) => comment.userId);
        // console.log(userIds);
        // setUserIds(userIds);
      } else {
        console.log(
          `failed to fetch comments by spotId(${id})`,
          commentsData.status
        );
      }
    }
    fetchData();
  }, [id, comment]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    setComment("");
    const res = await fetch(`/api/comments/spot/${id}`, {
      method: "POST",
      body: formData,
    });
    if (res.ok) {
      const { Comment } = await res.json();
      setComment(Comment);
      history.push({
        pathname: `/spots/${id}`,
        state: Comment,
      });
    } else {
      console.log("failed to handle submit", res.status);
    }
  };
  // useEffect(() => {
  //   async function fetchData(id) {
  //     const res = await fetch(`/api/users/${id}`);
  //     if (res.ok) {
  //       const user = await res.json();
  //       // console.log(user);
  //       return user;
  //     } else {
  //       console.log(`failed to fetch user at ${id}`);
  //     }
  //   }
  //   if (!userIds) return;
  //   let users = userIds.map((id) => fetchData(id));
  //   setCommenters(users);
  // }, [userIds]);

  return (
    <div>
      <div>
        <ul>
          {comments.map((comment, i) => (
            <>
              <li key={comment.id} className={classes.Comments}>
                <p>{comment.comment}</p>
              </li>
            </>
          ))}
        </ul>
      </div>
      <div className={classes.Comment}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={comment ? comment : ""}
            placeholder={"Post a report..."}
            onChange={(e) => setComment(e.target.value)}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
}

export default Comments;
