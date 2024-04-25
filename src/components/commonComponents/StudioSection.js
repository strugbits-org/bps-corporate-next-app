import { generateImageURL } from "@/common/functions/imageURL";
import React from "react";
const StudioSection = ({studioData, homeSectionDetails}) => {
  return (

    <section
      className={`section-studios ${studioData.length === 0 ? "hidden" : ""}`}
    >
      <div className="container-fluid">
        <div className="row row-1">
          <div className="col-lg-2 col-md-6">
            {homeSectionDetails.studioTitle && (
              <h2 className="fs--90 fs-tablet-40 blue-1 split-chars" data-aos="d:loop">
                {homeSectionDetails.studioTitle}
              </h2>
            )}
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-5 column-2">
            <p
              className="fs--40 fs-mobile-18 text"
              data-aos="fadeIn .6s ease-in-out .4s, d:loop"
            >
              {homeSectionDetails.studioDescription}
            </p>
          </div>
        </div>

        <div className="row mt-lg-95 mt-tablet-45 mt-phone-40">
          <div className="col-lg-12">
            <ul className="accordion-list-studios" data-aos="d:loop">
              {studioData.map((data, index) => {
                return (
                  <li
                    key={index}
                    className={`accordion-item `}
                  >
                    <div className="accordion-header">
                      <h3
                        className="accordion-title split-words"
                        data-aos="d:loop"
                      >
                        {data?.cardName}
                      </h3>
                    </div>
                    <div className="accordion-content">
                      <div className="container-img bg-blue">
                        <img
                          src={generateImageURL({ wix_url: data?.image, h: "900", fit: "fit", q: "95" })}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <p className="accordion-text">
                        {data?.cardDescription}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
