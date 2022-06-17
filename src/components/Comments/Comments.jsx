import "../Comments/css/comments.css";
const Comments = ({ name, email, onClick }) => {
  return (
    <div className="container" onClick={onClick}>
      <div className="comment">
        <p clsssName="name">
          Name:<br></br>
          {name}
        </p>
        <p>
          Email:<br></br>
          {email}
        </p>
      </div>
    </div>
  );
};

export default Comments;
