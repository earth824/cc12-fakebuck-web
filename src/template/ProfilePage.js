import ProfileModal from './ProfileModal';

function ProfilePage() {
  return (
    <div className="min-vh-100 tw-pt-14">
      <div
        className="shadow-sm pb-2"
        style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
      >
        <div
          className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
          style={{
            aspectRatio: '1096/404'
          }}
        >
          <img
            src="https://images.pexels.com/photos/957002/berchtesgaden-alpine-watzmann-berchtesgaden-national-park-957002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cover"
            className="img-fluid position-absolute top-50 start-50 translate-middle"
          />
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266">
          <div className="-mt-20 -mt-md-10 z-10">
            <img
              src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
              className="rounded-circle border border-4 border-white"
              width="168"
              height="168"
              alt="user"
            />
          </div>

          <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
            <h2 className="fw-bold mb-0">Hsiao Li</h2>
            <span className="d-inline-block text-muted py-1">5 Friends</span>
            <div>
              <span>
                <img
                  src="https://images.pexels.com/photos/654696/pexels-photo-654696.jpeg"
                  className="rounded-circle border border-2 border-white"
                  height="32"
                  width="32"
                  alt="user"
                />
              </span>
              <span className="-ms-2">
                <img
                  src="https://images.pexels.com/photos/6986009/pexels-photo-6986009.jpeg"
                  className="rounded-circle border border-2 border-white"
                  height="32"
                  width="32"
                  alt="user"
                />
              </span>
              <span className="-ms-2">
                <img
                  src="https://images.unsplash.com/photo-1597248374161-426f0d6d2fc9"
                  className="rounded-circle border border-2 border-white"
                  height="32"
                  width="32"
                  alt="user"
                />
              </span>
              <span className="-ms-2">
                <img
                  src="https://images.unsplash.com/photo-1608109741046-0f246ffe4b9b"
                  className="rounded-circle border border-2 border-white"
                  height="32"
                  width="32"
                  alt="user"
                />
              </span>
              <span className="-ms-2">
                <img
                  src="https://images.unsplash.com/photo-1570752321219-41822a21a761"
                  className="rounded-circle border border-2 border-white"
                  height="32"
                  width="32"
                  alt="user"
                />
              </span>
            </div>
          </div>

          <div className="mb-3 align-self-md-end">
            <button
              className="btn btn-gray-200"
              data-bs-toggle="modal"
              data-bs-target="#modal-edit-profile"
            >
              <i className="fa-solid fa-pen" /> Edit Profile
            </button>
          </div>
        </div>
      </div>
      <ProfileModal />
    </div>
  );
}

export default ProfilePage;
