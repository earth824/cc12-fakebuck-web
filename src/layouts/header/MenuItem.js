import { Link } from 'react-router-dom';

function MenuItem({ to, active, children }) {
  return (
    <Link
      to={to}
      className={`nav-link tw-px-10 rounded-lg${
        active ? '' : ' hover-bg-gray-200'
      }`}
    >
      {children}
    </Link>
  );
}

export default MenuItem;
