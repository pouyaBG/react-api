import axios from 'axios';
import { useEffect, useState } from 'react';
import '../FullComments/css/FullComments.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
const FullComments = ({ commentId, setComments, setSelectedId }) => {
  const [comment, setComment] = useState({});

  useEffect(() => {
    axios
      .get(`/comments/${commentId}`)
      .then((res) => setComment(res.data))
      .catch((err) => console.log(err));
  }, [commentId]);

  const deleteHandler = async () => {
    try {
      await axios.delete(`/comments/${commentId}`);
      const { data } = await axios.get(`/comments`);
      setComments(data);
      setComment(null);
      setSelectedId(null);
    } catch (error) {
      console.log(error);
    }
  };
  if (!commentId) return <p>pleas select comments</p>;
  return (
    <div className='full-container'>
      <div className='full-comments'>
        <p>
          name:<br></br>
          {comment.name}
        </p>
        <p>
          Email:<br></br>
          {comment.email}
        </p>
        <p className='body-comment'>{comment.body}</p>
        <Stack direction='row' spacing={4}>
          <Button variant='contained' onClick={deleteHandler} color='warning'>
            Delete
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default FullComments;
