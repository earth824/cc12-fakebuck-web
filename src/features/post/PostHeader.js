import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';

function PostHeader({
  post: {
    User: { firstName, lastName, id, profileImage }
  }
}) {
  return (
    <div className="d-flex align-items-center gap-2">
      <Link to={`/profile/${id}`}>
        <Avatar src={profileImage} size="40" />
      </Link>
      <div className="d-flex flex-column">
        <Link
          to={`/profile/${id}`}
          className="text-dark fw-bold no-underline hover-underline text-3.5"
        >
          {firstName} {lastName}
        </Link>
        <small className="text-muted text-3">2m</small>
      </div>
      <div className="dropdown flex-fill text-end">
        <button className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200">
          <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
        </button>
        <div className="dropdown-menu end-0 mt-1">
          <button className="dropdown-item">Edit</button>
          <button className="dropdown-item">Delete</button>
        </div>
      </div>
    </div>
  );
}

export default PostHeader;
