import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import { useSelector } from "react-redux";
import getFullVideoURL from '../../../common/functions/videoURL';

const AboutUsVideoModal = () => {
  const data = useSelector((state) => state.aboutus.IntroData);

  return (
    <ModalWrapper name={"modal-about-video"} no_wrapper={true}>
      <div className="container-img video-wrapper" data-aos="d:loop">
        {data && data.lightboxVideo ? (
          <video
            data-src={getFullVideoURL(data.lightboxVideo)}
            src={getFullVideoURL(data.lightboxVideo)}
            className="player-video media"
            playsInline
          ></video>
        ) : (
          <h6
            className="fs--40 text-center split-words not_found_text"
            data-aos="d:loop"
          >
            No video found
          </h6>
        )}

      </div>
    </ModalWrapper>
  );
};

export default AboutUsVideoModal;
