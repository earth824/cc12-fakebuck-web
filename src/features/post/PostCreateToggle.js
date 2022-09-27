import { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import Modal from '../../components/ui/Modal';
import { useAuth } from '../../contexts/AuthContext';
import PostForm from './PostForm';

function PostCreateToggle({ createPost }) {
  const {
    user: { id, profileImage, firstName }
  } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  const savePost = async input => {
    await createPost(input);
    setIsOpen(false);
  };

  return (
    <div className="border bg-white shadow-sm px-3 rounded-lg tw-py-3">
      <div className="d-flex gap-2">
        <Link to={`/profile/${id}`}>
          <Avatar src={profileImage} size="40" />
        </Link>
        <button
          className="btn rounded-pill text-muted text-start flex-1 btn-gray-200"
          onClick={() => setIsOpen(true)}
        >
          What's on your mind, {firstName}?
        </button>
      </div>
      <Modal title="Create Post" open={isOpen} onClose={() => setIsOpen(false)}>
        <PostForm onSubmit={savePost} />
      </Modal>
    </div>
  );
}

export default PostCreateToggle;
