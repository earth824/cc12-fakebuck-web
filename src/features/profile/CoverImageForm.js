import { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import CoverImage from '../../components/ui/CoverImage';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function CoverImageForm({ onSuccess }) {
  const {
    user: { coverImage },
    updateUser
  } = useAuth();

  const { startLoading, stopLoading } = useLoading();

  const [file, setFile] = useState(null);

  const inputEl = useRef();

  const handleClickSave = async () => {
    try {
      startLoading();
      const formData = new FormData();
      formData.append('coverImage', file);
      await updateUser(formData);
      toast.success('success upload');
      setFile(null);
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

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
              <button
                className="btn btn-link text-decoration-none hover-bg-gray-100"
                onClick={handleClickSave}
              >
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
        className="overflow-hidden position-relative mt-3 rounded-lg max-w-274 max-h-101 cursor-pointer"
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
