import profileImage from '../../assets/images/profile-image.png';

function Avatar({ src, size, borderSize, borderColor }) {
  const classes = `${borderSize ? ' border border-' + borderSize : ''}${
    borderColor ? ' border-' + borderColor : ''
  }`;
  return (
    <img
      src={src || profileImage}
      className={`rounded-circle cursor-pointer${classes}`}
      width={size}
      height={size}
      alt="user"
    />
  );
}

export default Avatar;
