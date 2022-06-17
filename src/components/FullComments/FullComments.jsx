import axios from "axios";
import { useEffect, useState } from "react";
import "../FullComments/css/FullComments.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const FullComments = ({ commentId }) => {
  const [comment, setComments] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/${commentId}`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log(err));
  }, [commentId]);

  if (!commentId) return <p>pleas select comments</p>;

  const deleteHandler = () => {
    setComments("");
  };
  return (
    <div className="full-container">
      <div className="full-comments">
        <p>
          name:<br></br>
          {comment.name}
        </p>
        <p>
          Email:<br></br>
          {comment.email}
        </p>
        <p className="body-comment">{comment.body}</p>
        <Stack direction="row" spacing={4}>
          <Button variant="contained" onClick={deleteHandler} color="warning">
            Delete
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default FullComments;
