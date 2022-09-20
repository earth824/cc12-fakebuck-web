import Avatar from '../../components/ui/Avatar';

function DropdownMenu() {
  return (
    <ul className="dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90 d-block">
      <li>
        <a
          href="/profile"
          className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
        >
          <Avatar
            src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
            size="60"
          />

          <div className="d-flex flex-column">
            <span className="text-black fw-bold">Hsiao Li</span>
            <small className="text-muted">See your profile</small>
          </div>
        </a>
      </li>
      <li>
        <hr className="dropdown-divider mx-2 border-1" />
      </li>
      <li>
        <button className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg">
          <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
          <small className="text-black fw-bold">Log Out</small>
        </button>
      </li>
    </ul>
  );
}

export default DropdownMenu;
