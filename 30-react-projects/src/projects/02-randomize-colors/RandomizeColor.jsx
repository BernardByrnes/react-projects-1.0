import Title from "../components/Title";

const RandomizeColor = () => {
  function handleClick2(e) {
    console.log("click");
  }
  const handleClick = (e) => {
    console.log("click");
    console.log(getRandomColor());
    let body = document.querySelector("body");
    body.style.background = getRandomColor();
    e.target.style.background = getRandomColor();
  };

  function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={"Randomize Color"} classes={"mb-4"} />
      <button className="btn btn-danger" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-success" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        Click Me
      </button>
      <button className="btn btn-warning" onClick={handleClick}>
        Click Me
      </button>
    </div>
  );
};
export default RandomizeColor;
