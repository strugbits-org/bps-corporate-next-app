import { generateImageURL } from "@/common/functions/imageURL";
import DelayedLink from "../common/DelayedLink";
import React from "react";

const ProductCartSlider = ({ data }) => {
  const EXTERNAL_SITE_URL = "https://www.rentals.blueprintstudios.com";

  return (
    <div className="slider-featured-products" data-aos="d:loop">
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {data?.storeProducts?.map((item, index) => {
            return (
              <div key={index} className="swiper-slide">
                <div className="rental-product-link">
                  {/* <button className="btn-bookmark">
                    <i className="icon-bookmark"></i>
                    <i className="icon-bookmark-full"></i>
                  </button> */}

                  <DelayedLink
                    to={EXTERNAL_SITE_URL + item.productPageUrl}
                    target={"blank"}
                    className="product-link"
                  >
                    <h3 className="product-name productSlider-label">
                      {item.name}
                    </h3>

                    <div className="wrapper-img">
                      <div className="container-img">
                        <img
                          src={generateImageURL({
                            wix_url: item.mainMedia,
                            w: "200",
                            h: "200",
                            fit: "fit",
                            q: "95",
                          })}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="container-bottom">
                      <div className="view-more">
                        <span className="view">
                          <span>View more</span>
                        </span>
                        <i className="icon-arrow-diagonal-right"></i>
                      </div>
                      <ul className="list-thumb">
                        {item.productOptions.Color
                          ? item.productOptions.Color.choices.map(
                              (option, index) => (
                                <React.Fragment key={index}>
                                  {index < 4 && (
                                    <li key={index}>
                                      <div className="container-img">
                                        <img
                                          src={generateImageURL({
                                            wix_url: option.mainMedia
                                              ? option.mainMedia
                                              : item.mainMedia,
                                            w: "24",
                                            h: "24",
                                            fit: "fit",
                                            q: "95",
                                          })}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                  )}
                                </React.Fragment>
                              )
                            )
                          : item.productOptions["Color "]
                          ? item.productOptions["Color "].choices.map(
                              (option, index) => (
                                <React.Fragment key={index}>
                                  {index < 4 && (
                                    <li key={index}>
                                      <div className="container-img">
                                        <img
                                          src={generateImageURL({
                                            wix_url: option.mainMedia
                                              ? option.mainMedia
                                              : item.mainMedia,
                                            w: "24",
                                            h: "24",
                                            fit: "fit",
                                            q: "95",
                                          })}
                                          data-preload
                                          className="media"
                                          alt=""
                                        />
                                      </div>
                                    </li>
                                  )}
                                </React.Fragment>
                              )
                            )
                          : null}
                      </ul>
                      {item.productOptions.Color &&
                      item.productOptions.Color.choices.length > 4 ? (
                        <div className="colors-number">
                          <span>
                            +{item.productOptions.Color.choices.length - 4}
                          </span>
                        </div>
                      ) : item.productOptions["Color "] &&
                        item.productOptions["Color "].choices.length > 4 ? (
                        <div className="colors-number">
                          <span>
                            +{item.productOptions["Color "].choices.length - 4}
                          </span>
                        </div>
                      ) : null}
                    </div>
                  </DelayedLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="swiper-button-prev no-mobile">
        <i className="icon-arrow-left-3"></i>
      </div>
      <div className="swiper-button-next no-mobile">
        <i className="icon-arrow-right-3"></i>
      </div>
    </div>
  );
};

export default ProductCartSlider;
