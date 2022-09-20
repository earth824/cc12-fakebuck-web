import { useState } from 'react';
import { toast } from 'react-toastify';
import { useAuth } from '../../contexts/AuthContext';
import { useLoading } from '../../contexts/LoadingContext';
import { validateRegister } from '../../validations/userValidate';

function RegisterForm({ onSuccess }) {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: ''
  });

  const handleChangeInput = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = async e => {
    e.preventDefault();
    const { error } = validateRegister(input);
    if (error) {
      return toast.error(error.message);
    }
    try {
      startLoading();
      await register(input);
      toast.success('success register');
      onSuccess();
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="First name"
          name="firstName"
          value={input.firstName}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-6">
        <input
          className="form-control"
          type="text"
          placeholder="Last name"
          name="lastName"
          value={input.lastName}
          onChange={handleChangeInput} // e => setInput({ ...input, lastName: e.target.value })
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Mobile number or email address"
          name="emailOrMobile"
          value={input.emailOrMobile}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="New password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          placeholder="Confirm password"
          name="confirmPassword"
          value={input.confirmPassword}
          onChange={handleChangeInput}
        />
      </div>
      <div className="d-flex justify-content-center">
        <button
          type="submit"
          className="btn d-flex justify-content-center align-items-center btn-green text-4.5 h-9 tw-px-10"
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default RegisterForm;
