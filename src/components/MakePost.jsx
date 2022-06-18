import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../redux/postSlide";
import storeContent from "../db/storeContent";
import { Section, Input } from "../Common/index";
import { useRef } from "react";
const MakePost = (props) => {
  const { setIsOpen } = props;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedIdx, setSelectedIdx] = useState(0);
  const refTitle = useRef(null);
  const refDescription = useRef(null);
  const dispatch = useDispatch();

  const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];

  const handlePost = () => {
    if (title === "" || description === "") {
      alert("Vui lòng không để trống");
      title === "" ? refTitle.current.focus() : refDescription.current.focus();
    } else {
      setIsOpen(false);
      const newPost = {
        title: title,
        description: description,
        tag: selectedIdx,
      };
      storeContent.set(newPost);
      dispatch(createPost(newPost));
    }
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
        refName={refTitle}
      />
      <Input
        inputType="textarea"
        setData={setDescription}
        label="Descriptions"
        classType="makepost-desc"
        refName={refDescription}
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
