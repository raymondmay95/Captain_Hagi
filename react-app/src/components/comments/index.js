import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import * as classes from "./comments.module.css";

function Comments() {
  const history = useHistory();
  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [comments, setComments] = useState([]);

  // Why is this in react state and not redux store???
  // My reasoning is to preserver data givin the point that reports for weather are driven by users.
  useEffect(() => {
    async function fetchData() {
      const commentsData = await fetch(`/api/comments/spot/${id}`);
      if (commentsData.ok) {
        const { Comments_By_Spot } = await commentsData.json();
        setComments([...Comments_By_Spot]);
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

  return (
    <div>
      <div className={classes.Comments_container}>
        <div className={classes.Comments_inner_container}>
          <ul>
            <h2>
              Do you have an eye on the surf now? Contribute to this forecast...
            </h2>
            {comments.map((comment, i) => (
              <li key={`comment${i}`} className={classes.Comments}>
                <h3 className={classes.UserName}>{comment.user.displayName}</h3>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={classes.Comment_Form__Container}>
        <div className={classes.Comments_Inner_Form}>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={comment ? comment : ""}
              placeholder={"Post a report..."}
              onChange={(e) => setComment(e.target.value)}
            />
          </form>
          <button type="submit">Contribute</button>
        </div>
      </div>
    </div>
  );
}

export default Comments;
