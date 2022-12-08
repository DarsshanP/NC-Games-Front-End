import { postComment } from "../api";

function CommentBox({ review_id, setComments, newComment, setNewComment }) {
  const comment = {
    username: "jessjelly", //temp hardcoded username until login feature is added
    body: newComment,
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (newComment.length) {
      postComment(review_id, comment).then((postedComment) => {
        setNewComment("");
      });
    } else {
      alert('Comment can"t be empty');
    }
  };

  return (
    <div>
      <div>
        <form type="submit">
          <input
            id="comment-bar"
            type="text"
            placeholder="add a comment"
            value={newComment}
            onChange={(e) => {
              setNewComment(e.target.value);
            }}
          ></input>
          <button onClick={submitHandler}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default CommentBox;
