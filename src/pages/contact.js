import { getContactUsContent } from "@/api/contact";
import { getContactData, getSocialLinks } from "@/api/footer";
import getFullVideoURL from "@/common/functions/videoURL";
import ContactForm from "@/components/common/ContactForm";
import ContactDetails from "@/components/commonComponents/ContactDetails";
import { markPageLoaded } from "@/utils/utilityFunctions";

export default function contact({ data, contactData, socialLinks }) {
  markPageLoaded();
  return (
    <>
      <section className="contact-intro" data-aos="d:loop">
        <div className="container-fluid pos-relative z-5">
          <div className="row">
            <div className="col-lg-5 offset-lg-6 column-1">
              <h1
                className="fs--165 title-contact white-1 split-chars"
                data-aos="d:loop"
              >
                {data?.title}
              </h1>
              <div className="container-text fs--25 lh-140 fs-tablet-18 white-1 mt-15">
                <p data-aos="fadeInUp .8s ease-out-cubic .8s, d:loop">
                  {data?.description1}
                </p>
                <p
                  className="mt-lg-35 mt-mobile-15"
                  data-aos="fadeInUp .8s ease-out-cubic .9s, d:loop"
                >
                  {data?.description2}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container-img bg-img">
          <video
            data-src={getFullVideoURL(data?.backgroundVideo)}
            src={getFullVideoURL(data?.backgroundVideo)}
            data-preload
            autoPlay
            loop
            data-parallax-top
            data-translate-y="30rem"
            className="media"
            muted
            playsInline
          ></video>
        </div>
      </section>
      <section
        className="contact-footer bg-blue-1 pt-lg-85 pt-mobile-55 pb-lg-padding pb-tablet-15 pb-phone-padding-fluid"
        data-cursor-style="off"
        data-aos="d:loop, trigger:.contact-intro"
      >
        <div className="container-fluid">
          <div className="row contact-info">
            {/* contact form start.. */}
            <ContactForm data={data} />
            {/* contact form end.. */}

            {/* contactDetails here */}
            <ContactDetails contactData={contactData} contactusData={data} socialLinks={socialLinks} />
          </div>

          <div className="row mt-135 no-mobile">
            <div className="col-lg-6">
              <p className="fs--14 font-2 white-1">{data?.copyrightText}</p>
            </div>
            <div className="col-lg-6 flex-end">
              <p className="fs--14 font-2 white-1">{data?.bottomDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export const getServerSideProps = async () => {
  const [data, contactData, socialLinks] = await Promise.all([
    getContactUsContent(),
    getContactData(),
    getSocialLinks(),
  ]);

  return {
    props: { data, contactData, socialLinks },
  };
}