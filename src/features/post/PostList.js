import Post from './Post';

function PostList({ posts }) {
  return (
    <div className="d-flex flex-column gap-3">
      {posts.map(item => (
        <Post key={item.id} post={item} />
      ))}
    </div>
  );
}

export default PostList;
