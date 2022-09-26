import PostAction from './PostAction';
import PostReaction from './PostReaction';

function PostFooter({ post }) {
  return (
    <>
      <PostReaction post={post} />
      <hr className="hr-sm my-0" />
      <PostAction post={post} />
    </>
  );
}

export default PostFooter;
