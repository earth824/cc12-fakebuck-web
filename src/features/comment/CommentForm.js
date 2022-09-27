import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Avatar from '../../components/ui/Avatar';
import { useEffect, useRef } from 'react';

function CommentForm({ createComment, post: { id: postId } }) {
  const inputEl = useRef();

  const {
    user: { id, profileImage }
  } = useAuth();

  useEffect(() => {
    inputEl.current.focus();
  }, []);

  const handleKeyUpEnter = async e => {
    try {
      if (e.key === 'Enter') {
        await createComment({ title: inputEl.current.value }, postId);
        inputEl.current.value = '';
      } else if (e.key === 'Escape') {
        inputEl.current.value = '';
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="d-flex pt-1 gap-2">
      <Link to={`/profile/${id}`}>
        <Avatar src={profileImage} size="32" />
      </Link>
      <input
        ref={inputEl}
        className="form-control rounded-pill shadow-none border-0 h-9 text-3.5 bg-gray-200 focus-bg-gray-200"
        placeholder="Write a comment..."
        onKeyUp={handleKeyUpEnter}
      />
    </div>
  );
}

export default CommentForm;
