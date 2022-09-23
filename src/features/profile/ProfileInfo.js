import Avatar from '../../components/ui/Avatar';
import AvatarGroup from '../../components/ui/AvatarGroup';
import ProfileEdit from './ProfileEdit';
import * as friendService from '../../api/friendApi';
import { toast } from 'react-toastify';
import { useLoading } from '../../contexts/LoadingContext';
import {
  FRIEND_STATUS_ANNONYMOUS,
  FRIEND_STATUS_FRIEND,
  FRIEND_STATUS_REQUESTER
} from '../../config/constants';

function ProfileInfo({
  isMe,
  user: { profileImage, firstName, lastName, id },
  friends,
  isFriend,
  isAnonymous,
  isRequester,
  isAccepter,
  changeStatusWithMe,
  deleteFriend,
  createFriend
}) {
  const { startLoading, stopLoading } = useLoading();

  const handleClickDelete = async () => {
    try {
      startLoading();
      await friendService.deleteFriend(id);
      changeStatusWithMe(FRIEND_STATUS_ANNONYMOUS);
      if (isFriend) {
        deleteFriend();
      }
      toast.success('success delete');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  const handleClickAdd = async () => {
    try {
      startLoading();
      await friendService.addFriend(id);
      changeStatusWithMe(FRIEND_STATUS_REQUESTER);
      toast.success('success add friend');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  const handleClickAccept = async () => {
    try {
      startLoading();
      await friendService.acceptFriend(id);
      changeStatusWithMe(FRIEND_STATUS_FRIEND);
      createFriend();
      toast.success('success accept friend');
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="d-flex flex-column flex-md-row align-items-center align-items-md-stretch mx-auto px-3 space-x-4 max-w-266">
      <div className="-mt-20 -mt-md-10 z-10">
        <Avatar
          src={profileImage}
          size="168"
          borderSize="4"
          borderColor="white"
        />
      </div>

      <div className="my-3 flex-grow-1 d-flex flex-column align-items-center d-md-block">
        <h2 className="fw-bold mb-0">
          {firstName} {lastName}
        </h2>
        <span className="d-inline-block text-muted py-1">
          {friends.length} Friends
        </span>
        <AvatarGroup
          data={friends}
          size="32"
          borderSize="2"
          borderColor="white"
          maxAvatar="5"
        />
      </div>

      <div className="mb-3 align-self-md-end">
        {isMe && <ProfileEdit />}
        {isFriend && (
          <button className="btn btn-gray-200" onClick={handleClickDelete}>
            <i className="fa-solid fa-user-xmark" /> Unfriend
          </button>
        )}
        {isAnonymous && (
          <button className="btn btn-gray-200" onClick={handleClickAdd}>
            <i className="fa-solid fa-user-plus" /> Add Friend
          </button>
        )}
        {isRequester && (
          <button className="btn btn-gray-200" onClick={handleClickDelete}>
            <i className="fa-solid fa-user-xmark" /> Cancel Request
          </button>
        )}
        {isAccepter && (
          <>
            <button className="btn btn-gray-200" onClick={handleClickAccept}>
              <i className="fa-solid fa-user-check" /> Accept
            </button>
            <button
              className="btn btn-gray-200 ms-3"
              onClick={handleClickDelete}
            >
              <i className="fa-solid fa-user-xmark" /> Reject
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfileInfo;
