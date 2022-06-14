import { useSelector } from "react-redux";
import { Section } from "../Common/index";
import storeContent from "../db/storeContent";
const Post = () => {
  const post = useSelector((state) => state.post.posts);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  let postData = [storeContent.get()];
  return (
    <Section css={`post-container`}>
      {post.length === 0 ? (
        <>
          {postData.map((post, i) => (
            <div className="posts" key={i}>
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                {tags[post.tag]}
              </p>
              <p className="posts-desc">{post.description}</p>
            </div>
          ))}
        </>
      ) : (
        <>
          {post.map((post, i) => (
            <div className="posts" key={i}>
              <p className="posts-title">{post.title}</p>
              <p className={`posts-tags-${tags[post.tag]} posts-tags`}>
                {tags[post.tag]}
              </p>
              <p className="posts-desc">{post.description}</p>
            </div>
          ))}
        </>
      )}
    </Section>
  );
};

export default Post;
