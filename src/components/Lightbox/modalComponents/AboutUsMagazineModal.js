import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import parse from 'html-react-parser';

const AboutUsMagazineModal = ({ data }) => {
  
  return (
    <ModalWrapper name={"modal-about-magazine"} no_wrapper={true}>
      <div id="trendMagazine" className="wrapper-modal" data-aos="d:loop">
        {parse(data.magazineEmbededCode)}
      </div>
    </ModalWrapper>
  );
};

export default AboutUsMagazineModal;
