import { Link } from 'react-router-dom';
import { FacebookLogo } from '../../components/icons';

function Logo() {
  return (
    <div className="py-2 flex-1">
      <Link className="navbar-brand" to="/">
        <FacebookLogo />
      </Link>
    </div>
  );
}

export default Logo;
