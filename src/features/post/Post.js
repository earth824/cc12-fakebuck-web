import PostContent from './PostContent';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';

function Post({ post }) {
  return (
    <div className="border bg-white shadow-sm px-3 rounded-lg tw-pt-3">
      <PostHeader post={post} />
      <PostContent post={post} />
      <PostFooter post={post} />
    </div>
  );
}

export default Post;
