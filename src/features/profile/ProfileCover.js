import CoverImage from '../../components/ui/CoverImage';

function ProfileCover({ coverImage }) {
  return (
    <div
      className="overflow-hidden position-relative mx-auto rounded-b-lg max-w-274 max-h-101"
      style={{
        aspectRatio: '1096/404'
      }}
    >
      <CoverImage src={coverImage} />
    </div>
  );
}

export default ProfileCover;
