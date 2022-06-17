/** @format */

import axios from "axios";
import { useEffect, useState } from "react";
import AddNewComments from "../../components/AddNewComments/AddNewComments";
import Comments from "../../components/Comments/Comments";
import FullComments from "../../components/FullComments/FullComments";
import "../Discussion/css.css"
const Discussion = () => {
  const [comments, setComments] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  // get to date
  // useEffect
  //comments did monr
  const URL = "https://jsonplaceholder.typicode.com/comments";
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setComments(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // use async/await
  const selectedHandler = (id) => {
    setSelectedId(id);
  };

  return (
    <main>
      <section className="comments">
        {comments ? (
          comments.map((c) => (
            <Comments
              key={c.id}
              name={c.name}
              email={c.email}
              body={c.body}
              onClick={() => selectedHandler(c.id)}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </section>
      <section>
        <FullComments commentId={selectedId} />
      </section>
      <section>
        <AddNewComments />
      </section>
    </main>
  );
};

export default Discussion;
