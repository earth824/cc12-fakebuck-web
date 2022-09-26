function PostContent({ post: { title, image } }) {
  return (
    <div className="tw-mt-3">
      <p className="text-3.5 mb-0">{title}</p>
      <div className="mt-3 -px-4">
        <img src={image} alt="post" className="img-fluid" />
      </div>
    </div>
  );
}
export default PostContent;
