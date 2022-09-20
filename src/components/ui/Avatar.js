function Avatar({ src, size }) {
  return (
    <img
      src={src}
      className="rounded-circle cursor-pointer"
      width={size}
      height={size}
      alt="user"
    />
  );
}

export default Avatar;
