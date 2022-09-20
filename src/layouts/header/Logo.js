import { FacebookLogo } from '../../components/icons';

function Logo() {
  return (
    <div className="py-2 flex-1">
      <a className="navbar-brand" href="/">
        <FacebookLogo />
      </a>
    </div>
  );
}

export default Logo;
