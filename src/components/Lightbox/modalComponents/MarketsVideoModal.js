import React, { useEffect, useState } from "react";
import { ModalWrapper } from "../ModalWrapper";
import { useRouter } from "next/router";
import { getMarketSection } from "@/api/market";
import getFullVideoURL from "@/common/functions/videoURL";

const MarketsVideoModal = () => {
  const router = useRouter();
  const [src, setSrc] = useState(null);

  useEffect(() => {
    const getData = async ()=>{
      const marketSection = await getMarketSection(router.query.id);
      setSrc(getFullVideoURL(marketSection?.video));
    }
    getData();
  }, [router])
  
  return (
    <ModalWrapper name={"modal-markets-video"} no_wrapper={true}>
      <div className="container-img video-wrapper market-intro-video-modal" data-aos="d:loop">
        {src ? (
          <video
            data-src={src}
            src={src}
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

export default MarketsVideoModal;
