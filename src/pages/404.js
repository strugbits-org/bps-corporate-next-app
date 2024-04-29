import { markPageLoaded } from "@/utils/utilityFunctions";

export default function Custom404({abc}) {
  markPageLoaded();
  return (
    <>
      <section class="section-error-404">
        <div class="container-title">
          <h1 class="fs--900 blue-1 split-chars" data-aos="d:loop"><span>404</span></h1>
          <span class="fs--20 fw-600 text-uppercase" data-aos="fadeIn .8s ease-in-out .6s">PAGE NOT FOUND</span>
        </div>
      </section>
    </>
  );
}
