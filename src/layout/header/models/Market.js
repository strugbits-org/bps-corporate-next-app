"use client"
import React, { useEffect, useState } from "react";
import { getMarketsSectionData } from "@/api/home.js";
import { generateImageURL } from "@/common/functions/imageURL";
import DelayedLink from "@/components/common/DelayedLink";

const Market = () => {
  const [data, setData] = useState([]);

  useEffect(async() => {
    const data = await getMarketsSectionData();
    setData(data.filter(x => x.menuItem));
  }, []);

  return (
    <div className="wrapper-submenu-market wrapper-submenu">
      <div className="container-title-mobile">
        <h2 className="submenu-title">Markets</h2>
        <button className="btn-go-back" data-submenu-close>
          <i className="icon-arrow-left-3"></i>
          <span>Go back</span>
        </button>
      </div>
      <ul className="list-submenu-market list-submenu list-projects font-submenu">
        {data.map((item) => {
          return (
            <li key={item._id} className="list-item">
              <DelayedLink
                to={`/market/${item.slug}`}
                className="market-link project-link"
                attributes={{
                  "data-menu-close": "",
                  "data-cursor-style": "view",
                }}
              >
                <div className="container-img bg-blue" data-cursor-style="view">
                  <img
                    src={generateImageURL({ wix_url: item?.image, w: "600", h: "1280", q: "95" })}
                    data-preload
                    className="media"
                    alt={item.cardname}
                  />
                </div>
                <div className="container-text">
                  <h3 className="title-project split-words">{item.cardname}</h3>
                  <ul className="list-tags">
                    {item.marketTags.map((tag, index) => (
                      <li key={index}>
                        <span>{tag}</span>
                      </li>
                    ))};
                  </ul>
                </div>
              </DelayedLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Market;
