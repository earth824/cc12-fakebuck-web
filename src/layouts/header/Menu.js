import { useLocation } from 'react-router-dom';
import { Friend, Home } from '../../components/icons';
import MenuItem from './MenuItem';

function Menu() {
  const { pathname } = useLocation();

  return (
    <div className="collapse navbar-collapse justify-content-center">
      <div className="navbar-nav space-x-1">
        <MenuItem to="/" active={pathname === '/'}>
          <Home className={pathname === '/' ? 'fill-primary' : 'fill-gray'} />
        </MenuItem>
        <MenuItem to="/friend" active={pathname === '/friend'}>
          <Friend
            className={pathname === '/friend' ? 'fill-primary' : 'fill-gray'}
          />
        </MenuItem>
      </div>
    </div>
  );
}

export default Menu;
