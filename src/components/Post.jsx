import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
const Post = () => {
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handleDelete = (e) => {
    alert("Chức năng đang tạm khóa. Mời bạn quay lại sau");
  };
  return (
    <>
      {post.map((post, i) => (
        <div className="posts" key={i}>
          <p className="posts-title">{post.title}</p>
          <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
            {tags[post.tag]}
          </p>
          <p className="posts-desc">{post.description}</p>
          <div>
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="posts-icon"
              onClick={() => handleDelete(post.tag)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
