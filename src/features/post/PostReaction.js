function PostReaction({
  post: { Likes: likes, Comments: comments },
  toggleComment
}) {
  return (
    <div className="d-flex tw-py-2.5">
      {likes.length > 0 && (
        <div className="d-flex align-items-center flex-grow-1 space-x-1.5">
          <div className="rounded-circle bg-primary position-relative w-4.5 h-4.5">
            <i className="fa-solid fa-thumbs-up position-absolute top-50 start-50 translate-middle text-white text-2.5" />
          </div>
          <small className="text-muted">{likes.length}</small>
        </div>
      )}
      {comments.length > 0 && (
        <small
          className="text-muted hover-underline"
          role="button"
          onClick={toggleComment}
        >
          {comments.length} Comments
        </small>
      )}
    </div>
  );
}

export default PostReaction;
