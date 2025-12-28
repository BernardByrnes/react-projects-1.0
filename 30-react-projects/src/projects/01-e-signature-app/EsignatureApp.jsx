import { useState } from "react";
import Title from "../components/Title";

const EsignatureApp = () => {
  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35rem 0",
  };
  document.body.style.background = "eee";

  const [name, setName] = useState("sign");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="container text-center">
      <Title classes={"title"} text={name} />
      <Title classes={"main-title"} text={"Date"} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        autem. Adipisci cupiditate neque illum voluptatem temporibus reiciendis?
        Vero, maxime quos neque labore veritatis possimus enim quasi deserunt
        reiciendis voluptates, maiores adipisci dolorem assumenda itaque
        laudantium? Laudantium sint hic totam iure.
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: "space-around",
          position: "relative",
          top: "40vh",
        }}
      >
        <input type="date" value={""} style={inputStyle} />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={() => setName}
        />
      </footer>
    </div>
  );
};
export default EsignatureApp;
