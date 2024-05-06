import { markPageLoaded } from '@/utils/utilityFunctions'

export default function Careers() {
    markPageLoaded();
    return (
        <>
            <section class="careers-intro pt-mobile-120 pb-lg-125 pb-mobile-50">
                <div class="container-fluid">
                    <div class="row row-1">
                        <div class="col-lg-8 col-md-10 offset-md-1 offset-lg-2 column-1">
                            <h1 class="fs--160 text-center split-words" data-aos="d:loop">Put Our Clients &
                                Employees First</h1>
                            <button class="btn-large btn-blue mt-lg-70 mt-mobile-30" data-aos="fadeIn - .3s, d:loop"
                                data-cursor-style="off">
                                <span>Access Our Jobs Board</span>
                                <i class="icon-arrow-right-2"></i>
                            </button>
                        </div>
                    </div>
                    <div class="row row-2 mt-lg-125 mt-mobile-70">
                        <div class="col-lg-10 offset-lg-1 mb-lg-55 mb-mobile-30 column-1">
                            <div class="container-video">
                                <div class="container-img play-img">
                                    <img src="https://staging.programatorio.net/blueprint/images/play.svg" data-preload class=" media" />
                                </div>
                                <div class="main-video" data-aos="d:loop">
                                    <video data-src="https://staging.programatorio.net/blueprint/images/lib/video.mp4#t=0.01" src="https://staging.programatorio.net/blueprint/images/lib/video.mp4#t=0.01"
                                        data-preload class="player-video careers-video media" muted loop playsinline></video>
                                </div>
                                <div class="thumb"><video data-src="https://staging.programatorio.net/blueprint/images/lib/video-2.mp4#t=0.01"
                                    src="https://staging.programatorio.net/blueprint/images/lib/video-2.mp4#t=0.01" data-preload
                                    class=" media" muted playsinline></video>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-5 col-md-5 offset-lg-1">
                            <h2 class="fs--80 split-words" data-aos="d:loop">Career Opportunities</h2>
                        </div>
                        <div class="col-lg-5 col-md-7 offset-lg-2 mt-phone-20">
                            <div class="container-text fs--20" data-aos="fadeIn .6s ease-in-out .4s, d:loop">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit efficitur
                                    ex eget facilisis. Proin molestie orci et efficitur tristique. Nunc fringilla
                                    sem ut velit finibus interdum. Nunc tempor euismod tincidunt. Pellentesque
                                    dictum odio in mollis eleifend. Sed tincidunt malesuada leo. Aliquam vulputate
                                    eleifend quam eu sagittis.
                                </p>
                                <p class="mt-lg-35 mt-mobile-10">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce blandit efficitur
                                    ex eget facilisis. Proin molestie orci et efficitur tristique.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="section-heres-what-people-are-saying pt-lg-300 pt-tablet-105 pt-phone-145 pb-lg-130 pb-tablet-100 pb-phone-145 pos-relative">
                <div class="container-fluid pos-relative z-3">
                    <div class="row">
                        <div class="col-lg-6 offset-lg-3 column-1">
                            <h2 class="fs--80 white-1 title text-center split-words" data-aos="d:loop">Who Works
                            </h2>
                        </div>
                        <div class="col-lg-10 offset-lg-1 mt-lg-120 mt-tablet-100 mt-phone-45">
                            <div class="slider-testimony" data-aos="d:loop">
                                <div class="swiper-container">
                                    {/* <!-- Additional required wrapper --> */}
                                    <div class="swiper-wrapper">
                                        {/* <!-- Slides --> */}
                                        <div class="swiper-slide">
                                            <div class="wrapper-content">
                                                <div class="container-img">
                                                    <img src="images/lib/06_desktop.jpg" data-preload class=" media" />
                                                </div>
                                                <div class="container-text">
                                                    <p class="testimony">
                                                        We partnered with Blueprint Studios to provide our employees
                                                        with a virtual
                                                        halloween experience instead of hosting an in-person party
                                                        this year, and
                                                        our employees loved it! The VES (Virtual Exploration Space)
                                                        was well built,
                                                        immersive, and even challenging to get through. We will
                                                        definitely be doing
                                                        this again as a safe alternative to celebrating our favorite
                                                        holiday!
                                                    </p>
                                                    <div class="container-profile">
                                                        <div class="name">Jennifer Luu</div>
                                                        <div class="occupation">Twitch / Global Internal Events
                                                            Manager</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="swiper-slide">
                                            <div class="wrapper-content">
                                                <div class="container-img">
                                                    <img src="images/lib/06_desktop.jpg" data-preload
                                                        class=" media" />
                                                </div>
                                                <div class="container-text">
                                                    <p class="testimony">
                                                        We partnered with Blueprint Studios to provide our employees
                                                        with a virtual
                                                        halloween experience instead of hosting an in-person party
                                                        this year, and
                                                        our employees loved it! The VES (Virtual Exploration Space)
                                                        was well built,
                                                        immersive, and even challenging to get through. We will
                                                        definitely be doing
                                                        this again as a safe alternative to celebrating our favorite
                                                        holiday!
                                                    </p>
                                                    <div class="container-profile">
                                                        <div class="name">Jennifer Luu</div>
                                                        <div class="occupation">Twitch / Global Internal Events
                                                            Manager</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="swiper-button-prev no-mobile"><span>Back</span></div>
                                <div class="swiper-button-next no-mobile"><span>Next</span></div>
                                <div class="swiper-pagination no-mobile"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-our-boards">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-8 offset-lg-2">
                            <ul class="list-boards">
                                <li data-parallax data-parallax-no-phone data-parallax-no-tablet
                                    data-translate-y="-2.5rem" data-rotate-to="-10deg" data-translate-y-from="30vh"
                                    data-end="center center" data-trigger="parent">
                                    <div class="content">
                                        <h2 class="title">
                                            Our Commitment
                                        </h2>
                                        <p class="text">
                                            We are a trusted partner to the world’s biggest brands
                                            because we never stop trying to out-do ourselves. For nearly
                                            20 years we’ve been perfecting the art of event design with
                                            our industry-leading event strategies, cutting-edge
                                            technology, and trend-forward designs. We reject the
                                            “business as usual” approach and work tirelessly to ensure
                                            your event is executed to the highest possible standards.
                                            From start to finish, this is our commitment to you.
                                        </p>
                                    </div>
                                </li>
                                <li data-parallax data-parallax-no-phone data-parallax-no-tablet
                                    data-translate-y="5rem">
                                    <div class="content">
                                        <h2 class="title">
                                            Our Culture
                                        </h2>
                                        <p class="text">
                                            With our company roots established in San Francisco, the
                                            multi-cultural spirit of this city is deeply engrained in our
                                            DNA. We believe in a diversity of thought and a rich variety of
                                            voices. It’s what makes us stronger, more creative, and
                                            ultimately more successful; inspiring exciting, innovative
                                            solutions. We realize, with our team and our work, we have
                                            the ability to deliver an experience for a globalist world; one
                                            that resonates with a wider audience of people.
                                        </p>
                                    </div>
                                </li>
                                <li data-parallax data-parallax-no-phone data-parallax-no-tablet
                                    data-translate-y="-15rem" data-rotate-from="30deg" data-translate-y-from="20vh"
                                    data-end="center center" data-trigger="parent">
                                    <div class="content">
                                        <h2 class="title">
                                            Our Vision
                                        </h2>
                                        <p class="text">
                                            We believe in the un-status quo when it comes to event
                                            design. Connecting people in a meaningful way, through
                                            innovative and strategic event design that engages guests in
                                            a multidimensional experience, is at the very core of what
                                            we do and why we do it.
                                        </p>
                                    </div>
                                </li>
                                <li data-parallax data-parallax-no-phone data-parallax-no-tablet
                                    data-translate-y="10rem" data-translate-x="-5rem" data-rotate-to="10deg"
                                    data-rotate-from="30deg" data-end="center center">
                                    <div class="content">
                                        <h2 class="title">
                                            Our People
                                        </h2>
                                        <p class="text">
                                            We are comprised of dedicated creatives, strategic thinkers,
                                            visionaries, producers, fabricators, and engineers — all here
                                            to deliver a one-of-a-kind event experience. As your
                                            strategic partner, we work with you every step of the way to
                                            ensure your vision and brand is on point.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="careers-jobs-board pt-lg-140 pt-mobile-50">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-10 offset-lg-1 column-1">
                            <h2 class="fs--80 text-center split-words" data-aos="d:loop">Jobs Board</h2>
                            <ul class="list-jobs mt-50">
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-item" data-aos="d:loop">
                                    <div class="wrapper-job">
                                        <div class="container-function">
                                            <h3 class="function">Event Manager</h3>
                                        </div>
                                        <div class="container-job-info">
                                            <div class="job-info">
                                                <div class="local job-info-item">
                                                    <span class="description-1">Local</span>
                                                    <span class="description-2">Brisbane, CA</span>
                                                </div>
                                                <div class="job-type job-info-item">
                                                    <span class="description-1">Job type</span>
                                                    <span class="description-2">Full-time</span>
                                                </div>
                                                <div class="pay job-info-item">
                                                    <span class="description-1">Pay</span>
                                                    <span class="description-2">$65,000 - $75,000 a year</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="container-btn-apply-now">
                                            <button class="btn-apply-now">
                                                <span>Apply now</span>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-6 offset-lg-3 column-2 py-lg-240 py-mobile-150">
                            <h2 class="fs--80 text-center split-words" data-aos="d:loop">Explore Available Positions
                            </h2>
                            <button class="btn-large btn-blue mt-lg-55 mt-mobile-30" data-aos="fadeIn - .3s, d:loop"
                                data-cursor-style="off">
                                <span>Access Our Jobs Board</span>
                                <i class="icon-arrow-right-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section
                class="section-lets-get-social pt-lg-195 pt-tablet-105 pt-phone-155 pb-lg-130 pb-tablet-105 pb-phone-140 mt-lg-240">
                <div class="bg" data-parallax data-translate-y-from="50vh" data-parallax-no-phone
                    data-parallax-no-tablet data-end="center 80%" data-phone-end="top top" data-trigger="parent">
                </div>
                <div class="container-fluid pos-relative z-5">
                    <div class="row">
                        <div class="col-lg-3 mx-auto">
                            <h2 class="fs--60 blue-1 text-center split-words" data-aos="d:loop">Let’s get social
                            </h2>
                            <h3 class="fs--16 fs-tablet-20 fs-phone-18 blue-1 text-center mt-10"
                                data-aos="fadeIn .8s ease-in-out .2s, d:loop">
                                Connect, create, celebrate: #BlueprintVibes
                            </h3>
                        </div>
                        <div class="col-lg-12 column-2">
                            <ul class="list-social mt-lg-60 mt-tablet-100 mt-phone-40">
                                <li data-parallax data-translate-y-from="-30%" data-parallax-no-phone
                                    data-parallax-no-tablet data-end="center 80%" data-phone-end="top top"
                                    data-trigger="parent">
                                    <div class="content blog-content">
                                        <div class="social-media-title">
                                            <i class="icon-blog"></i>
                                            <h3>From our blog</h3>
                                        </div>
                                        <ul class="list-blog-lets-get-social">
                                            <li>
                                                <a href="blog-post.html" class="link-blog">
                                                    <div class="container-img" data-cursor-style="view"><img
                                                        src="images/lib/06_desktop.jpg" data-preload
                                                        class=" media" />
                                                    </div>
                                                    <div class="container-text">
                                                        <h4 class="blog-title">
                                                            A Picturesque Day with Blueprint Studios: Showcasing Our
                                                            New Wooden Furniture Collection
                                                        </h4>
                                                        <p class="blog-text">
                                                            In the heart of the great outdoors, with nature as our
                                                            backdrop, Blueprint Studios embarked on a creative
                                                            journey
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-post.html" class="link-blog">
                                                    <div class="container-img" data-cursor-style="view"><img
                                                        src="images/lib/06_desktop.jpg" data-preload
                                                        class=" media" />
                                                    </div>
                                                    <div class="container-text">
                                                        <h4 class="blog-title">
                                                            A Toast to Tradition: An Autumn Affair at Darioush
                                                            Winery
                                                        </h4>
                                                        <p class="blog-text">
                                                            As the golden hues of early fall descend upon the
                                                            picturesque landscapes of Napa, there’s no venue that
                                                            encapsulates the region’s beauty
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-post.html" class="link-blog">
                                                    <div class="container-img" data-cursor-style="view"><img
                                                        src="images/lib/06_desktop.jpg" data-preload
                                                        class=" media" />
                                                    </div>
                                                    <div class="container-text">
                                                        <h4 class="blog-title">
                                                            A Taste Explosion: Event Design Extravaganza at Boa
                                                            Restaurant Beverly Hills
                                                        </h4>
                                                        <p class="blog-text">
                                                            Beverly Hills, renowned for its luxury and panache,
                                                            witnessed an unforgettable evening that melded culinary
                                                            wonders with unmatched event
                                                        </p>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li data-parallax data-translate-y-from="-60%" data-parallax-no-phone
                                    data-parallax-no-tablet data-end="center 80%" data-phone-end="top top"
                                    data-trigger="parent">
                                    <div class="content">
                                        <div class="social-media-title">
                                            <i class="icon-instagram"></i>
                                            <h3>Stay connected Feed</h3>
                                        </div>
                                        <ul class="list-instagram">
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/06_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/04_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/02_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/01_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/08_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/06_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/07_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/03_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" target="_blank" rel="noopener noreferrer">
                                                    <div class="container-img"><img src="images/lib/04_desktop.jpg"
                                                        data-preload class=" media" />
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li data-parallax data-translate-y-from="-80%" data-parallax-no-phone
                                    data-parallax-no-tablet data-end="center 80%" data-phone-end="top top"
                                    data-trigger="parent">
                                    <div class="content">
                                        <div class="social-media-title">
                                            <i class="icon-pinterest"></i>
                                            <h3>Stay connected Feed</h3>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

// export const getServerSideProps = async () => {
//     const [aboutUsCardsSection] = await Promise.all([
//         getAboutUsCardsSection(),
//     ]);

//     return {
//         props: { aboutUsCardsSection },
//     };
// };