import { useEffect, useState } from 'react';
import PostCreateToggle from './PostCreateToggle';
import PostList from './PostList';
import * as postService from '../../api/postApi';
import * as likeService from '../../api/likeApi';
import * as commentService from '../../api/commentApi';
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
  }, [id]);

  const createPost = async input => {
    const res = await postService.createPost(input);
    setPosts([res.data.post, ...posts]);
  };

  const toggleLike = async postId => {
    try {
      const res = await likeService.toggleLike(postId);
      const idx = posts.findIndex(item => item.id === postId);
      const newPosts = [...posts];
      if (res.data.like) {
        newPosts[idx].Likes.push(res.data.like);
        return setPosts(newPosts);
      }
      newPosts[idx].Likes = newPosts[idx].Likes.filter(
        item => item.userId !== id
      );
      setPosts(newPosts);
    } catch (err) {
      console.log(err);
    }
  };

  const createComment = async (input, postId) => {
    const res = await commentService.createComment(input, postId);
    const idx = posts.findIndex(item => item.id === postId);
    const newPosts = [...posts];
    newPosts[idx].Comments.push(res.data.comment);
    setPosts(newPosts);
  };

  return (
    <div className="mx-auto py-4 max-w-152">
      <div className="mx-2 d-flex flex-column gap-3">
        <PostCreateToggle createPost={createPost} />
        <PostList
          posts={posts}
          toggleLike={toggleLike}
          createComment={createComment}
        />
      </div>
    </div>
  );
}

export default PostContainer;
