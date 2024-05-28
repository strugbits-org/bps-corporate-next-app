import React, { useEffect, useState } from "react";

const ContentComponent = ({ content, title, maxWords }) => {
  const [showAll, setShowAll] = useState(false);
  const [isReadMore, setIsReadMore] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    const words = content.split(" ");
    setIsReadMore(words.length > maxWords);

    const paragraphsArray = [];
    let currentParagraph = "";
    words.forEach((word, index) => {
      currentParagraph += (currentParagraph ? " " : "") + word;
      if ((index + 1) % maxWords === 0 || index === words.length - 1) {
        paragraphsArray.push(currentParagraph);
        currentParagraph = "";
      }
    });

    setParagraphs(paragraphsArray);

  }, [content, maxWords]);

  return (
    <div class={`container-text ${isReadMore ? "container-read-more" : ""}`}>
      <h2 class="title">
        {title}
      </h2>
      <div class={`wrapper-text ${showAll ? "active" : ""}`}>
        <p>{paragraphs[0]}</p>
        <div className={"readmore-paragraphs text"}>
          {paragraphs.slice(1).map((paragraph, index) => <React.Fragment key={index}><br /><p>{paragraph}</p></React.Fragment>)}
        </div>
      </div>
      {isReadMore && (
        <button onClick={() => setShowAll(!showAll)} class="btn-read-more">
          <div class="btn-text">
            <span class="read-more">Read More</span>
            <span class="to-go-back">To go back</span>
          </div>
          <i class="icon-arrow-down"></i>
        </button>
      )}
    </div>
  );
};

export default ContentComponent;
