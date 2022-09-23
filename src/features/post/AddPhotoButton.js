function AddPhotoButton() {
  return (
    <div className="d-flex flex-column align-items-center mt-3 py-3 rounded-2 bg-gray-100 hover-bg-gray-200">
      <div className="text-center rounded-circle bg-gray-300 p-2 position-relative h-10 w-10 ">
        <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle" />
      </div>
      <div className="mt-1">Add Photos</div>
    </div>
  );
}

export default AddPhotoButton;
