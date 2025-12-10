import people from "./data";
import { useState } from "react";
import {
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaQuoteRight,
} from "react-icons/fa";
const App = () => {
  const [index, setIndex] = useState(0);
  people[index];
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    // setIndex(index + 1);
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      if (newIndex > people.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const prevPerson = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      if (newIndex < 0) {
        return people.length - 1;
      }
      return newIndex;
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    // if (randomNumber === index) {
    //   randomNumber + 1;
    // }
    setIndex(randomNumber);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevPerson}>
            <FaChevronCircleLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextPerson}>
            <FaChevronCircleRight />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={randomPerson}>
          Suprise Me
        </button>
      </article>
    </main>
  );
};
export default App;
