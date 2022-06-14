import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/postSlide";
import storeContent from "../db/storeContent";
import { Section, Input } from "../Common/index";
const MakePost = (props) => {
  const { setIsOpen } = props;
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
  const handlePost = () => {
    setIsOpen(false);
    const newPost = {
      title: title,
      description: description,
      tag: selectedIdx,
    };
    storeContent.set(newPost);
    dispatch(createPost(newPost));
  };

  return (
    <Section css={`makepost-container`}>
      <div className="makepost-navigation">
        <div className="makepost-save" onClick={handlePost}>
          Post
        </div>
      </div>
      <Input
        inputType="textarea"
        setData={setTitle}
        label="Title"
        classType="makepost-title"
      />
      <Input
        inputType="textarea"
        setData={setDescription}
        label="Descriptions"
        classType="makepost-desc"
      />
      <label htmlFor="" style={{ margin: "10px 0" }}>
        Tags
      </label>
      <div className="makepost-tags">
        {tags.map((tag, index) => (
          <button
            key={index}
            className={`${
              selectedIdx === index
                ? `makepost-tags-selected`
                : `makepost-tags-${tag}`
            }`}
            onClick={() => setSelectedIdx(index)}
          >
            {tag}
          </button>
        ))}
      </div>
    </Section>
  );
};

export default MakePost;
