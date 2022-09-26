import { useEffect, useState } from 'react';
import PostCreateToggle from './PostCreateToggle';
import PostList from './PostList';
import * as postService from '../../api/postApi';
import { useAuth } from '../../contexts/AuthContext';

function PostContainer() {
  const [posts, setPosts] = useState([]);
  const {
    user: { id }
  } = useAuth();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await postService.getUserPosts(id, 'friend');
        setPosts(res.data.posts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }, []);

  return (
    <div className="mx-auto py-4 max-w-152">
      <div className="mx-2 d-flex flex-column gap-3">
        <PostCreateToggle />
        <PostList posts={posts} />
      </div>
    </div>
  );
}

export default PostContainer;
