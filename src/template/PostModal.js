function PostModal() {
  return (
    <div className="modal fade" id="modal-post" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create Post</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>
          <div className="modal-body">
            <textarea
              className="form-control border-0 shadow-none resize-none"
              placeholder="What's on your mind, Hsiao?"
              rows="5"
            />
            <div className="position-relative" role="button">
              <div className="d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200">
                <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
                  <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle" />
                </div>
                <div className="mt-1">Add Photos</div>
              </div>
            </div>
            <input type="file" className="d-none" />
            <div className="pt-3">
              <button
                type="button"
                className="btn btn-primary w-100 fw-bold text-3.5 h-9"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostModal;
