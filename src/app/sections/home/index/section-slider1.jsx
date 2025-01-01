import { publicUrlFor } from "../../../../globals/constants";
import { NavLink } from "react-router-dom";
import { register } from "swiper/element/bundle";
register();

function SectionSlider1() {
  return (
    <>
      <div className="sx-bnr-1-wrap-outer home-1-slider">
        {/* swiper slides */}
        <swiper-container
          loop="true"
          space-between="30"
          effect="fade"
          navigation-next-el=".swiper-button-next"
          navigation-perv-el=".swiper-button-prev"
          pagination-el=".swiper-pagination"
          pagination-clickable="true"
          autoplay-delay="7000"
          autoplay-disable-on-interaction="true"
          class="swiper-wrapper"
        >
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/main-slider/slider1/slide-1.webp"
              )})`,
            }}
          >
            <div className="sx-bg-overlay opacity-05 sx-bg-light" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are Dedicated
                </span>
                <h2 className="sx-bnr-1-large-title text-stroke">
                  Where Innovation Meets Digital Transformation
                </h2>
                <div className="sx-bnr-1-info ">
                  Transform how you innovate by leveraging advanced AI
                  technologies built to adapt and evolve with your business
                  goals.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="animate-charcter">AI Solutions</h1>
              </div>
            </div>
          </swiper-slide>
          <swiper-slide
            class="sx-bnr-1-wrap swiper-slide overlay-overlay"
            style={{
              backgroundImage: `url(${publicUrlFor(
                "images/main-slider/slider1/slide-2.webp"
              )})`,
            }}
          >
            <div className="sx-bg-overlay opacity-07 sx-bg-light" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  We are The best
                </span>
                <h2 className="sx-bnr-1-large-title">
                  Innovative IT Solutions for a Digital World
                </h2>
                <div className="sx-bnr-1-info">
                  Revolutionize your business operations with AI, delivering
                  precision, scalability, and insights to overcome challenges
                  and achieve lasting success.
                </div>
                <div className="sx-bnr-readmore">
                  <NavLink
                    to="/about-us"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </NavLink>
                </div>
                {/* <div className="sx-bnr-video">
                  <a
                    href="https://www.youtube.com/watch?v=c1XNqw2gSbU"
                    className="mfp-video circle"
                  >
                    <i className="flaticon-play" />
                  </a>
                </div> */}
              </div>
            </div>
            <div className="sx-bnr-text-masking">
              <div className="light">
                <h1 className="sx-title">AI Company</h1>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
        {/* !swiper slides */}
        {/* Add Arrows */}
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
      </div>
    </>
  );
}

export default SectionSlider1;
