import { useRef, useState } from 'react';
import CoverImage from '../../components/ui/CoverImage';
import { useAuth } from '../../contexts/AuthContext';

function CoverImageForm() {
  const {
    user: { coverImage }
  } = useAuth();

  const [file, setFile] = useState(null);

  const inputEl = useRef();
  return (
    <>
      <div className="d-flex justify-content-between align-items-center pt-3">
        <h5 className="mb-0">Cover Photo</h5>
        <input
          type="file"
          className="d-none"
          ref={inputEl}
          onChange={e => {
            if (e.target.files[0]) {
              setFile(e.target.files[0]);
            }
          }}
        />
        <div>
          {file && (
            <>
              <button className="btn btn-link text-decoration-none hover-bg-gray-100">
                Save
              </button>
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={() => {
                  setFile(null);
                  inputEl.current.value = null;
                }}
              >
                Cancel
              </button>
            </>
          )}
          <button
            className="btn btn-link text-decoration-none hover-bg-gray-100"
            onClick={() => inputEl.current.click()}
          >
            Edit
          </button>
        </div>
      </div>
      <div
        className="overflow-hidden position-relative mt-3 rounded-lg max-w-274 max-h-101"
        style={{
          aspectRatio: '1096/404'
        }}
        onClick={() => inputEl.current.click()}
      >
        <CoverImage src={file ? URL.createObjectURL(file) : coverImage} />
      </div>
    </>
  );
}

export default CoverImageForm;
