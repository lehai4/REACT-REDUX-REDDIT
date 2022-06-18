import { useState } from "react";
import "./App.css";
import { Header, EditPage, Post, MakePost, Footer } from "./Common/index";

function App() {
  const [isEdit, setIsEdit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      {isEdit ? (
        <EditPage setIsEdit={setIsEdit} />
      ) : !isEdit && !isOpen ? (
        <>
          <Header setIsEdit={setIsEdit} />
          <div className="post-container">
            <Post />
          </div>
          <Footer setIsOpen={setIsOpen} isOpen={isOpen} />
        </>
      ) : (
        <>
          <Header setIsEdit={setIsEdit} />
          <MakePost setIsOpen={setIsOpen} />
        </>
      )}
    </div>
  );
}

export default App;
