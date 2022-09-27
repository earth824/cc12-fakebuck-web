import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

function Post({ post, toggleLike, createComment }) {
  return (
    <div className="border bg-white shadow-sm px-3 rounded-lg tw-pt-3">
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter
        post={post}
        toggleLike={toggleLike}
        createComment={createComment}
      />
    </div>
  );
}

export default Post;
