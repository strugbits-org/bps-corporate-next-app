import React, { useState } from "react";

const ContentComponent = ({ content, title, maxWords }) => {
  
  const words = content.split(" ");

  const paragraphs = [];
  let currentParagraph = "";

  words.forEach((word, index) => {
    currentParagraph += (currentParagraph ? " " : "") + word;

    if ((index + 1) % maxWords === 0 || index === words.length - 1) {
      paragraphs.push(currentParagraph);
      currentParagraph = "";
    }
  });

  const hideButton = words.length < maxWords;
  const [showAll, setShowAll] = useState(false);

  const handleButtonClick = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={"container-text container-read-more"}>
      <h2 className="title">{title}</h2>
      <div className={`wrapper-text ${showAll ? "active" : ""}`} >
        <p>{paragraphs[0]}</p>
        <div className={"readmore-paragraphs text"}>
          {paragraphs.slice(1).map((paragraph, index) => <React.Fragment key={index}> <br /><p>{paragraph}</p></React.Fragment>)}
        </div>
      </div>
      {!hideButton && (
        <button onClick={handleButtonClick} className="btn-read-more">
          <div className="btn-text">
            <span className="read-more">Read More</span>
            <span className="to-go-back">To go back</span>
          </div>
          <i className="icon-arrow-down"></i>
        </button>
      )}
    </div>
  );
};

export default ContentComponent;
