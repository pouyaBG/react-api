import "../AddNewComments/css/AddNewComments.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import axios from "axios";
const AddNewComments = () => {
  // user input in state
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const nameHandler = (e) => {
    setComment({
      ...comment,
      name: e.target.value,
    });
  };
  const emailHandler = (e) => {
    setComment({
      ...comment,
      email: e.target.value,
    });
  };
  const bodyHandler = (e) => {
    setComment({
      ...comment,
      body: e.target.value,
    });
  };

  // post
  const addComment = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/comments", comment)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className="newComment">
      <h1>Add your comment</h1>
      <div className="input">
        <label>Name</label>
        <input id="name" type="text" onChange={nameHandler} />
      </div>
      <div className="input">
        <label>Email</label>
        <input
          id="email"
          type="Email"
          placeholder="example@example.com"
          onChange={emailHandler}
        />
      </div>
      <div className="input">
        <label>Comments</label>
        <textarea
          placeholder="Max Caracters:500"
          maxLength="500"
          id="body"
          onChange={bodyHandler}
          type="text"></textarea>
      </div>
      <Stack direction="row" spacing={4}>
        <Button variant="contained" onClick={addComment}>
          Add New Comment
        </Button>
      </Stack>
    </div>
  );
};

export default AddNewComments;
