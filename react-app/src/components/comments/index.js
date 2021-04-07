import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router";
import { useSelector } from "react-redux";

function Comments() {
  const history = useHistory();
  const { user } = useSelector((state) => state.session.user);
  const { id } = useParams();
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const commentsData = await fetch(`/api/comments/spot/${id}`);
      if (commentsData.ok) {
        const { Comments_By_Spot } = await commentsData.json();
        setComments(Comments_By_Spot);
      } else {
        console.log(
          `failed to fetch comments by spotId(${id})`,
          commentsData.status
        );
      }
    }
    fetchData();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("comment", comment);
    formData.append("image", image);

    setLoading(true);

    const imgRes = await fetch(`/api/image/spot/${id}`, {
      method: "POST",
      body: {
        image: formData["image"],
      },
    });
    if (imgRes.ok) {
      let { url } = await imgRes.json();
      setUrl(url);
    } else {
    }

    const res = await fetch(`/api/comments/spot/${id}`, {
      method: "POST",
      body: {
        comment: formData["comment"],
        userId: user.id,
        spotId: id,
        awsUrl: url ? url : null,
      },
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      await res.json();
      setLoading(false);
      history.push(`/spots/${id}`);
    } else {
      setLoading(false);
      console.log("failed to handle submit", res.status);
    }
  };
  const updateComment = (e) => {
    const comment = e.target.value;
    setComment(comment);
  };

  const updateImage = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  return (
    <div>
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p>{comment.comment}</p>
            </li>
          ))}
        </ul>
      </div>
      {!loading ? (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              value={image ? image : ""}
              accept="image/*"
              onChange={updateImage}
            />
            <input
              type="text"
              value={comment}
              placeholder={"Post a report..."}
              onChange={updateComment}
            />
            <button type="submit">submit</button>
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Comments;
