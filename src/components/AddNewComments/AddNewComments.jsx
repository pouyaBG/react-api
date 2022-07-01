import '../AddNewComments/css/AddNewComments.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
const AddNewComments = ({ setComments }) => {
  // user input in state
  const [comment, setComment] = useState({
    name: '',
    email: '',
    body: '',
  });

  // post

  const newCommentHandler = (e) => {
    setComment({ ...comment, [e.target.name]: e.target.value });
  };
  return (
    <div className='newComment'>
      <h1>Add your comment</h1>
      <div className='input'>
        <label>Name</label>
        <input name='name' type='text' onChange={newCommentHandler} />
      </div>
      <div className='input'>
        <label>Email</label>
        <input
          name='email'
          type='Email'
          placeholder='example@example.com'
          onChange={newCommentHandler}
        />
      </div>
      <div className='input'>
        <label>Comments</label>
        <textarea
          placeholder='Max Caracters:500'
          maxLength='500'
          name='body'
          onChange={newCommentHandler}
          type='text'></textarea>
      </div>
      <Stack direction='row' spacing={4}>
        <Button variant='contained' onClick={() => setComments(comment)}>
          Add New Comment
        </Button>
      </Stack>
    </div>
  );
};

export default AddNewComments;
