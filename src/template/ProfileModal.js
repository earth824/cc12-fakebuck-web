function ProfileModal() {
  return (
    <div className="modal fade" id="modal-edit-profile" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Edit profile</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            />
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Profile Picture</h5>
              <input type="file" className="d-none" />
              <div>
                <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                  Edit
                </button>
              </div>
            </div>
            <div className="text-center mt-3">
              <img
                src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
                alt="user"
                className="rounded-circle border"
                width="168"
                height="168"
              />
            </div>
            <div className="d-flex justify-content-between align-items-center pt-3">
              <h5 className="mb-0">Cover Photo</h5>
              <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                Edit
              </button>
            </div>
            <div
              className="overflow-hidden position-relative mt-3 rounded-lg max-w-274 max-h-101"
              style={{
                aspectRatio: '1096/404'
              }}
            >
              <img
                src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="cover"
                className="position-absolute img-fluid top-50 start-50 translate-middle border"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileModal;
