function Spinner() {
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center gap-3 offcanvas-backdrop show"
      style={{ zIndex: 1100 }}
    >
      <div className="spinner-border text-warning"></div>
      <span className="text-warning">Please Wait</span>
    </div>
  );
}

export default Spinner;
