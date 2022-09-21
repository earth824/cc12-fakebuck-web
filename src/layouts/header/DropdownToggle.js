import Avatar from '../../components/ui/Avatar';

function DropdownToggle({ onClick }) {
  return (
    <div onClick={onClick}>
      <Avatar
        src="https://images.pexels.com/photos/5193860/pexels-photo-5193860.png"
        size="40"
      />
    </div>
  );
}

export default DropdownToggle;
