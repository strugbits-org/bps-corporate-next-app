import React from "react";
import { ModalWrapper } from "../ModalWrapper";
import getFullVideoURL from "@/common/functions/videoURL";

const AboutUsVideoModal = ({data}) => {

  return (
    <ModalWrapper name={"modal-about-video"} no_wrapper={true}>
      <div className="container-img video-wrapper about-modal-video" data-aos="d:loop">
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
