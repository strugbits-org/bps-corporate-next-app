import { markPageLoaded } from "@/utils/utilityFunctions"

export default function Custom404() {
    markPageLoaded();
    return (
        <>
            <section class="section-error-404">
                <div class="container-title">
                    <h1 class="fs--900 blue-1 split-chars words chars splitting aos-animate" data-aos="d:loop">404</h1>
                    <span class="fs--20 fw-600 text-uppercase aos-animate fadeIn" data-aos="fadeIn .8s ease-in-out .6s">Page not found</span>
                </div>
            </section></>
    )
}