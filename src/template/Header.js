import { FacebookLogo, Friend, Home } from './icons';
import { Dropdown } from 'bootstrap';
import { Outlet } from 'react-router-dom';

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-white shadow-sm py-0 fixed-top">
        <div className="container-fluid mx-1">
          <div className="py-2 flex-1">
            <a className="navbar-brand" href="/">
              <FacebookLogo />
            </a>
          </div>
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav space-x-1">
              <a href="/" className="nav-link tw-px-10 rounded-lg">
                <Home className="fill-primary" />
              </a>
              <a
                href="/friend"
                className="nav-link tw-px-10 rounded-lg hover-bg-gray-200"
              >
                <Friend />
              </a>
            </div>
          </div>
          <div className="d-flex justify-content-end flex-1">
            <div className="dropdown">
              <img
                src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                className="rounded-circle cursor-pointer"
                width="40"
                height="40"
                alt="user"
                data-bs-toggle="dropdown"
              />

              <ul className="dropdown-menu end-0 px-2 mt-1 border shadow-sm rounded-xl w-sm-90">
                <li>
                  <a
                    href="/profile"
                    className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
                  >
                    <img
                      src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                      className="rounded-circle"
                      width="60"
                      height="60"
                      alt="user"
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
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Header;
