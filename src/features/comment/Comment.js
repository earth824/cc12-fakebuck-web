import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../../components/ui/Avatar';
import { useClickOutside } from '../../hooks/useClickOutside';
import { timeSince } from '../../utils/dateFormat';

function Comment({
  comment: {
    User: { id, firstName, lastName, profileImage },
    title,
    createdAt
  }
}) {
  const [isOpen, setIsOpen] = useState(false);
  const closeDropdown = useCallback(() => setIsOpen(false), []);
  const dropdownEl = useClickOutside(closeDropdown);
  return (
    <div className="pt-2 d-flex flex-column gap-1">
      <div className="d-flex gap-2">
        <Link to={`/profile/${id}`}>
          <Avatar src={profileImage} size="32" />
        </Link>
        <div className="d-flex flex-column">
          <div className="d-flex align-items-center gap-1">
            <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
              <Link
                to={`/profile/${id}`}
                className="text-dark fw-bold no-underline hover-underline text-3"
              >
                {firstName} {lastName}
              </Link>
              <small>{title}</small>
            </div>

            <div className="dropdown" ref={dropdownEl}>
              <button
                className="btn rounded-circle position-relative h-8 w-8 hover-bg-gray-200"
                onClick={() => setIsOpen(prev => !prev)}
              >
                <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
              </button>
              <div
                className={`dropdown-menu end-0 mt-1${
                  isOpen ? ' d-block' : ''
                }`}
              >
                <button className="dropdown-item">Edit</button>
                <button className="dropdown-item">Delete</button>
              </div>
            </div>
          </div>

          <span className="text-muted ms-2 text-3">{timeSince(createdAt)}</span>
        </div>
      </div>
    </div>
  );
}

export default Comment;
