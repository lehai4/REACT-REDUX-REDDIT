import { useState } from "react";
import "./App.css";
import {
  Header,
  EditPage,
  Post,
  MakePost,
  Footer,
  Section,
} from "./Common/index";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="App">
        {isEdit ? (
          <EditPage setIsEdit={setIsEdit} />
        ) : !isEdit && !isOpen ? (
          <>
            <Header setIsEdit={setIsEdit} />
            <Section css={`post-container`}>
              <Post />
            </Section>
            <Footer setIsOpen={setIsOpen} isOpen={isOpen} />
          </>
        ) : (
          <>
            <Header setIsEdit={setIsEdit} />
            <MakePost setIsOpen={setIsOpen} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
