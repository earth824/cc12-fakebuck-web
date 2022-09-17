function FriendPage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="bg-white d-flex flex-column shadow position-fixed h-100 w-80">
        <h1 className="mx-3 mb-3 fw-bolder tw-mt-3 text-6">Friends</h1>
        <ul className="px-2">
          <li className="rounded-3 bg-gray-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center bg-primary text-white rounded-circle w-9 h-9 ">
                <i className="fa-solid fa-user-check" />
              </div>
              <span>Friend Requests</span>
            </a>
          </li>
          <li className="rounded-3 hover-bg-neutral-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center rounded-circle w-9 h-9 bg-gray-200">
                <i className="fa-solid fa-user-plus" />
              </div>
              <span>Suggestions</span>
            </a>
          </li>
          <li className="rounded-3 hover-bg-neutral-100">
            <a
              href="/#"
              className="text-decoration-none text-black p-2 d-flex align-items-center gap-3"
            >
              <div className="d-flex justify-content-center align-items-center rounded-circle w-9 h-9 bg-gray-200">
                <i className="fa-solid fa-user-group" />
              </div>
              <span>All Friends</span>
            </a>
          </li>
        </ul>
      </div>

      <div
        className="p-3 d-none d-sm-block position-absolute tw-left-80 tw-m-5"
        style={{ width: 'calc(100% - 360px)' }}
      >
        <h1 className="mb-3 fw-bold text-5">Friend Requests</h1>
        <div className="row g-2">
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1550831858-3c2581fed470"
                className="card-img-top"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Andy Dufresne</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow">
              <img
                src="https://images.unsplash.com/photo-1627541718143-1adc1b582e62"
                className="card-img-top"
                alt="user"
              />
              <div className="card-body">
                <h6 className="card-title">Anju Salgaonkar</h6>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary text-3.5">Confirm</button>
                  <button className="btn btn-gray-200 text-3.5">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendPage;
