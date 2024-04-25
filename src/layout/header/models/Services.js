"use client"
import React, { useEffect, useState } from "react";
import { getStudiosSectionData } from "@/api/home.js";
import { generateImageURL } from "@/common/functions/imageURL";
import DelayedLink from "@/components/common/DelayedLink";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(async() => {
    const data = await getStudiosSectionData();
    setData(data.filter(x => x.menuItem));
  }, []);

  return (
    <div className="wrapper-submenu-services wrapper-submenu">
      <div className="container-title-mobile">
        <h2 className="submenu-title">Services</h2>
        <button className="btn-go-back" data-submenu-close>
          <i className="icon-arrow-left-3"></i>
          <span>Go back</span>
        </button>
      </div>
      <ul className="list-submenu-services list-submenu">
        {data.map((service, index) => (
          <li key={index}>
            <DelayedLink
              to={`/services/${service.slug}`}
              className="service-link"
              attributes={{ "data-menu-close": "" }}
            >
              <div className="container-img bg-blue">
                <img
                  src={generateImageURL({ wix_url: service?.image, fit: "fit", w: index === 0 ? "1280" : "600", h: index === 0 ? "1280" : "600", q: "95" })}
                  data-preload
                  className="media"
                  alt=""
                />
              </div>
              <h2 className="service-title split-words">
                {service.cardName}
              </h2>
              <span className="number">
                {index > 10 ? index + 1 : "0" + (index + 1)}
              </span>
            </DelayedLink>
          </li>)
        )}
      </ul>
    </div>
  );
};
export default Services;
