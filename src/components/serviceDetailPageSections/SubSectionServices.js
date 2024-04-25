import React, { useEffect, useState } from 'react'
import { useSelector } from "react-redux";
import { generateImageURL } from "../../common/functions/imageURL";

export const SubSectionServices = () => {
  const [cards, setCards] = useState([]);
  const data = useSelector((state) => state.services.servicesData);

  useEffect(() => {
    if (data && data.subServices) {
      let cards = data.subServices.slice();
      cards.sort((a, b) => a.orderNumber - b.orderNumber);
      setCards(cards);
    }
  }, [data])

  return (
    <section className="services-description pt-lg-210 pt-tablet-105 pt-phone-200">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h2 className="fs--60 text-center split-words" data-aos="d:loop">
              {data?.subServicesTitle}
            </h2>
          </div>
          <div className="col-12 mt-40">
            <ul
              className="list-services grid-lg-25 grid-md-50"
              data-aos="d:loop"
            >
              {cards.map((service, index) => {
                return (
                  <li key={index} className="grid-item">
                    <div className="content">
                      <div className="container-img">
                        <img
                          src={generateImageURL({ wix_url: service?.image, w: "480", h: "302", q: "90" })}
                          data-preload
                          className="media"
                          alt=""
                        />
                      </div>
                      <div className="container-text">
                        <h3 className="service-name split-words">
                          {service.title}
                        </h3>
                        <p className="service-description">{service.description}</p>
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
}
