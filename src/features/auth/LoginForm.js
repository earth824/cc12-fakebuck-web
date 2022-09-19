function LoginForm() {
  return (
    <form>
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Email address or phone number"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          className="form-control rounded-md h-13"
          placeholder="Password"
        />
      </div>
      <div className="mb-2 d-grid">
        <button
          type="button"
          className="btn btn-primary fw-bold rounded-md h-12 text-4.5"
        >
          Log In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
