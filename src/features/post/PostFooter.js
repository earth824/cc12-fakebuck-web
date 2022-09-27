import { useState } from 'react';
import CommentContainer from '../comment/CommentContainer';
import PostAction from './PostAction';
import PostReaction from './PostReaction';

function PostFooter({ post, toggleLike, createComment }) {
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  return (
    <>
      <PostReaction
        post={post}
        toggleComment={() => setIsCommentOpen(!isCommentOpen)}
      />
      <hr className="hr-sm my-0" />
      <PostAction
        post={post}
        toggleLike={toggleLike}
        toggleComment={() => setIsCommentOpen(prev => !prev)}
      />
      {isCommentOpen && (
        <CommentContainer post={post} createComment={createComment} />
      )}
    </>
  );
}

export default PostFooter;
