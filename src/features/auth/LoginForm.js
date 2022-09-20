import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';

function LoginForm() {
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    emailOrMobile: '',
    password: ''
  });

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success('success login');
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Email address or phone number"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control rounded-md h-13"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-2 d-grid">
        <button className="btn btn-primary fw-bold rounded-md h-12 text-4.5">
          Log In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
