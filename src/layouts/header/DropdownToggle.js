import Avatar from '../../components/ui/Avatar';
import { useAuth } from '../../contexts/AuthContext';

function DropdownToggle({ onClick }) {
  const {
    user: { profileImage }
  } = useAuth();
  return (
    <div onClick={onClick}>
      <Avatar src={profileImage} size="40" />
    </div>
  );
}

export default DropdownToggle;
