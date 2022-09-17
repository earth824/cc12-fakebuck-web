import RegisterModal from './RegisterModal';
import { Modal } from 'bootstrap';

function LoginPage() {
  return (
    <div className="container-fluid">
      <div className="mx-auto max-w-245">
        <div className="row">
          <div className="col-12 col-lg-6 ps-xl-0 tw-pt-10 tw-pt-lg-41 tw-ps-lg-10">
            <div className="text-center mx-auto text-lg-start max-w-100 max-w-lg-92 max-w-xl-125">
              <div className="tw-mb-5">
                <img
                  src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
                  className="-m-7"
                  alt="fakebook-logo"
                  height="106"
                />
              </div>
              <h2 className="fw-normal mb-0 px-3 px-lg-0 text-6 text-xl-7">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
          </div>

          <div className="col-12 col-lg-6 pe-xl-0 tw-mt-10 tw-pt-lg-23 tw-pe-lg-10">
            <form className="border border-1 shadow p-3 bg-white mx-auto rounded-lg max-w-99">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control rounded-md h-13"
                  placeholder="Email address or phone number"
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control rounded-md h-13"
                  placeholder="Password"
                />
              </div>
              <div className="mb-2 d-grid">
                <button
                  type="button"
                  className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
                >
                  Log In
                </button>
              </div>

              <hr className="hr-sm" />
              <div className="text-center tw-py-2.5">
                <button
                  className="btn fw-bold btn-green rounded-md h-12"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#modal-register"
                >
                  Create New Account
                </button>
              </div>
            </form>

            <div className="mt-4 text-center">
              <small>
                <b>Create a Page</b> for a celebrity, brand or business.
              </small>
            </div>
          </div>
        </div>
      </div>
      <RegisterModal />
    </div>
  );
}

export default LoginPage;
