import { markPageLoaded } from "@/utils/utilityFunctions";

export default function Custom404() {
    markPageLoaded();
    return (
        <>
            <section className="section-error-404">
                <div className="container-title">
                    <h1
                        className="fs--900 blue-1 split-chars words chars splitting aos-animate"
                        data-aos="d:loop"
                    >
                        404
                    </h1>
                    <span
                        className="fs--20 fw-600 text-uppercase aos-animate fadeIn"
                        data-aos="fadeIn .8s ease-in-out .6s"
                    >
                        Page not found
                    </span>
                </div>
            </section>

            <style jsx>{`
        .fs--900 {
          font-size: 20rem;
        }

        .fs--20 {
          font-size: 1.5rem;
        }

        @media screen and (min-width: 1024px) {
          .fs--900 {
            font-size: 84rem;
          }
        }
      `}</style>
        </>
    );
}
