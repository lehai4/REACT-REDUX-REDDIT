import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Section, Input, avaUrl } from "../Common/index";
import { updateUser } from "../redux/userSlide";
import storage from "../db/storage";
const EditPage = (props) => {
  const { setIsEdit } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [name, setName] = useState(user.name);
  const [age, setAge] = useState(user.age);
  const [about, setAbout] = useState(user.about);
  const [theme, setTheme] = useState("#ff9051");
  const [imageUrl, setImageUrl] = useState(user.avaUrl);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEdit(false);
    const update = {
      name: name,
      age: age,
      about: about,
      avaUrl: imageUrl,
      themeColor: theme,
    };
    storage.set(update);
    dispatch(updateUser(update));
  };
  return (
    <>
      <form action="" className="" onSubmit={handleSubmit}>
        <Section css={`edit-container`}>
          <button className="close">SAVE </button>
          <div className="edit-profile">Edit Profile</div>
          <div className="input-container">
            <Input label="Display name" name={name} setData={setName} />
            <Input label="Age" name={age} setData={setAge} />
            <Input
              inputType="textarea"
              classStyle="input-about"
              label="About"
              name={about}
              setData={setAbout}
            />
            <label htmlFor="">Profile picture</label>
            <div className="input-image-container">
              {avaUrl.map((avatar, i) => (
                <img
                  src={avatar}
                  alt={`photography ${avatar}`}
                  className="input-image"
                  onClick={(e) => setImageUrl(e.target.src)}
                  key={i}
                />
              ))}
            </div>
            <div className="theme-container">
              <label htmlFor="">Theme</label>
              <input
                type="color"
                aria-required="true"
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
          </div>
        </Section>
      </form>
    </>
  );
};

export default EditPage;
