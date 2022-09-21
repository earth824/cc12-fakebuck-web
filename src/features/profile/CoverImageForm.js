function CoverImageForm() {
  return (
    <>
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
    </>
  );
}

export default CoverImageForm;
