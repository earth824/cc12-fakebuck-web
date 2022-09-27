import { useAuth } from '../../contexts/AuthContext';

function PostAction({
  post: { Likes: likes, id: postId },
  toggleLike,
  toggleComment
}) {
  const {
    user: { id }
  } = useAuth();

  const isUserLiked = likes.find(item => item.userId === id);
  return (
    <div className="d-flex gap-1 py-1">
      <button
        className={`btn flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200 ${
          isUserLiked ? 'text-primary' : 'text-muted'
        }`}
        onClick={() => toggleLike(postId)}
      >
        <i className="fa-regular fa-thumbs-up" />
        <small className="fw-bold">Like</small>
      </button>
      <button
        className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200"
        onClick={toggleComment}
      >
        <i className="fa-regular fa-message" />
        <small className="fw-bold">Comment</small>
      </button>
    </div>
  );
}

export default PostAction;
