import { useState } from 'react';
import Modal from '../../components/ui/Modal';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthForm() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-1 shadow p-3 bg-white mx-auto rounded-lg max-w-99">
      <LoginForm />
      <hr className="hr-sm" />
      <div className="text-center tw-py-2.5">
        <button
          className="btn fw-bold btn-green rounded-md h-12"
          type="button"
          onClick={() => setIsOpen(true)}
        >
          Create New Account
        </button>
      </div>
      <Modal title="Sign Up" open={isOpen} onClose={() => setIsOpen(false)}>
        <RegisterForm onSuccess={() => setIsOpen(false)} />
      </Modal>
    </div>
  );
}

export default AuthForm;
