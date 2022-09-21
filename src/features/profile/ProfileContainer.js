import { useParams } from 'react-router-dom';
import ProfileCover from './ProfileCover';
import ProfileInfo from './ProfileInfo';

function ProfileContainer() {
  const { id } = useParams();

  return (
    <div
      className="shadow-sm pb-2"
      style={{ backgroundImage: 'linear-gradient(#f0f2f5, #fff)' }}
    >
      <ProfileCover />
      <ProfileInfo isMe={!id} />
    </div>
  );
}

export default ProfileContainer;
