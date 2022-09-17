import PostModal from './PostModal';

function PostPage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div className="mx-auto py-4 max-w-152">
        <div className="mx-2 d-flex flex-column gap-3">
          <div className="border bg-white shadow-sm px-3 rounded-lg tw-py-3">
            <div className="d-flex gap-2">
              <a href="/#">
                <img
                  src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                  className="rounded-circle"
                  width="40"
                  height="40"
                  alt="user"
                />
              </a>
              <button
                className="btn rounded-pill text-muted text-start flex-1 btn-gray-200"
                data-bs-toggle="modal"
                data-bs-target="#modal-post"
              >
                What's on your mind, Hsiao?
              </button>
            </div>
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="border bg-white shadow-sm px-3 rounded-lg tw-pt-3">
              <div className="d-flex align-items-center gap-2">
                <a href="/#">
                  <img
                    src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                    className="rounded-circle"
                    width="40"
                    height="40"
                    alt="user"
                  />
                </a>
                <div className="d-flex flex-column flex-fill">
                  <a
                    href="/#"
                    className="text-dark fw-bold no-underline hover-underline text-3.5"
                  >
                    Hsiao Li
                  </a>
                  <small className="text-muted text-3">2m</small>
                </div>
                <div className="dropdown">
                  <button
                    className="btn rounded-circle position-relative h-9 w-9 hover-bg-gray-200"
                    data-bs-toggle="dropdown"
                  >
                    <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                  </button>
                  <div className="dropdown-menu end-0 mt-1">
                    <button className="dropdown-item">Edit</button>
                    <button className="dropdown-item">Delete</button>
                  </div>
                </div>
              </div>

              <div className="tw-mt-3">
                <p className="text-3.5 mb-0">
                  This classic combination is delicious, so I stick to it.
                </p>
                <div className="mt-3 -px-4">
                  <img
                    src="https://images.unsplash.com/photo-1546069901-5ec6a79120b0"
                    alt="post"
                    className="img-fluid"
                  />
                </div>
              </div>

              <div className="d-flex tw-py-2.5">
                <div className="d-flex align-items-center flex-grow-1 space-x-1.5">
                  <div className="rounded-circle bg-primary position-relative w-4.5 h-4.5">
                    <i className="fa-solid fa-thumbs-up position-absolute top-50 start-50 translate-middle text-white text-2.5" />
                  </div>
                  <small className="text-muted">10</small>
                </div>
                <small className="text-muted hover-underline" role="button">
                  8 Comments
                </small>
              </div>

              <hr className="hr-sm my-0" />

              <div className="d-flex gap-1 py-1">
                <button className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200">
                  <i className="fa-regular fa-thumbs-up" />
                  <small className="fw-bold">Like</small>
                </button>
                <button className="btn text-muted flex-1 d-flex align-items-center justify-content-center gap-2 hover-bg-gray-200">
                  <i className="fa-regular fa-message" />
                  <small className="fw-bold">Comment</small>
                </button>
              </div>

              <div className="pb-2">
                <hr className="my-0 hr-sm" />

                <div className="pt-1">
                  <small className="text-muted hover-underline" role="button">
                    View 5 previous comments
                  </small>
                </div>

                <div className="pt-2 d-flex flex-column gap-1">
                  <div className="d-flex gap-2">
                    <a href="/">
                      <img
                        src="https://images.unsplash.com/photo-1607408315636-9bbf355e7ff4"
                        className="rounded-circle"
                        width="32"
                        height="32"
                        alt="user"
                      />
                    </a>

                    <div className="d-flex flex-column">
                      <div className="d-flex align-items-center gap-1">
                        <div className="d-flex flex-column align-items-start tw-py-2 tw-px-3 bg-gray-200 rounded-2xl">
                          <a
                            href="/#"
                            className="text-dark fw-bold no-underline hover-underline text-3"
                          >
                            Takahiro Miki
                          </a>
                          <small>Look Delicous.</small>
                        </div>

                        <div className="dropdown">
                          <button className="btn rounded-circle position-relative h-8 w-8 hover-bg-gray-200">
                            <i className="fa-solid fa-ellipsis text-muted position-absolute top-50 left-50 translate-middle" />
                          </button>
                        </div>
                      </div>

                      <span className="text-muted ms-2 text-3">2h</span>
                    </div>
                  </div>
                </div>

                <div className="d-flex pt-1 gap-2">
                  <a href="/">
                    <img
                      src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                      className="rounded-circle"
                      width="32"
                      height="32"
                      alt="user"
                    />
                  </a>
                  <input
                    className="form-control rounded-pill shadow-none border-0 h-9 text-3.5 bg-gray-200 focus-bg-gray-200"
                    placeholder="Write a comment..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PostModal />
    </div>
  );
}

export default PostPage;
