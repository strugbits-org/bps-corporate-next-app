import { generateImageURL } from "@/common/functions/imageURL";
import React from "react";
import DelayedLink from "../common/DelayedLink";
const StudioSection = ({ studioData, homeSectionDetails }) => {
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
                  <li key={index} class="accordion-item">
                    <div class="accordion-header">
                      <h3 class="accordion-title split-words" data-aos="d:loop">{data?.cardName}</h3>
                    </div>
                    <div class="accordion-content">
                      <div class="container-img bg-blue">
                        <img
                          src={generateImageURL({ wix_url: data?.image, h: "900", fit: "fit", q: "95" })}
                          data-preload class=" media"
                          alt="" />
                      </div>
                      <div class="container-accordion-text">
                        <p class="accordion-text">
                          {data?.cardDescription}
                        </p>
                        <DelayedLink
                          to={`/services/${data.slug}`}
                          className="btn-border-blue">
                          <span>See more</span>
                          <i class="icon-arrow-right"></i>
                        </DelayedLink>
                      </div>
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
