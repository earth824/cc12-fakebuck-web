function RegisterModal() {
  return (
    <div className="modal fade" id="modal-register" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sign Up</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row gx-2 gy-3">
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="First name"
                />
              </div>
              <div className="col-6">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Mobile number or email address"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="New password"
                />
              </div>
              <div className="col-12">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Confirm password"
                />
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn d-flex justify-content-center align-items-center btn-green text-4.5 h-9 tw-px-10"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterModal;
