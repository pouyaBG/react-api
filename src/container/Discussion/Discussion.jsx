import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddNewComments from '../../components/AddNewComments/AddNewComments';
import Comments from '../../components/Comments/Comments';
import FullComments from '../../components/FullComments/FullComments';
import http from '../../services/http';
import '../Discussion/css.css';
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [error, setErorr] = useState(false);
  // get to date
  // useEffect
  //comments did monr

  useEffect(() => {
    // axios
    //   .get(URL)
    //   .then((response) => {
    //     setComments(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const fetchData = async () => {
      try {
        const result = await http.get('/comments');
        setComments(result.data.slice(0, 6));
        toast.success('comments added');
      } catch (error) {
        setErorr(true);
        toast.error('problem in data fetching');
      }
    };
    fetchData();
  }, []);

  const selectedHandler = (id) => {
    setSelectedId(id);
  };

  const addComment = async (comment) => {
    try {
      await http.post('/comments', comment);
      const { data } = await http.get('/comments');
      setComments(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // or we can use the axios for handel fetch
    // axios
    //   .post("http://localhost:3001/comments", { ...comment, postId: 10 })
    //   .then((res) => axios.get("http://localhost:3001/comments"))
    //   .then((res) => setComments(res.data))
    //   .catch((err) => console.log(err));
  };

  const renderComments = () => {
    let renderComment = <p>Loading...</p>;
    if (error) {
      renderComment = <p>Have a problem in get data...</p>;
      toast.error('Have a problem in get data...');
    }
    if (comments && !error) {
      renderComment = comments.map((c) => (
        <Comments
          key={c.id}
          name={c.name}
          email={c.email}
          body={c.body}
          onClick={() => selectedHandler(c.id)}
        />
      ));
    }
    return renderComment;
  };

  return (
    <main>
      <section className='comments'>{renderComments()}</section>
      <section>
        <FullComments
          commentId={selectedId}
          setComments={addComment}
          setSelectedId={setSelectedId}
        />
      </section>
      <section>
        <AddNewComments setComments={addComment} />
      </section>
    </main>
  );
};

export default Discussion;
