import Post from './Post';

function PostList({ posts, toggleLike, createComment }) {
  return (
    <div className="d-flex flex-column gap-3">
      {posts.map(item => (
        <Post
          key={item.id}
          post={item}
          toggleLike={toggleLike}
          createComment={createComment}
        />
      ))}
    </div>
  );
}

export default PostList;
