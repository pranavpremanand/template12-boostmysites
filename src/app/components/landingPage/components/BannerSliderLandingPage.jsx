import { NavLink } from "react-router-dom";
import webbannerone from "../../../../assets/images/webdevelopmentbanner-1.webp";
import webbannertwo from "../../../../assets/images/webdevelopmentbanner-2.webp";
import appbannerone from "../../../../assets/images/appdevelopmentbanner-1.webp";
import appbannertwo from "../../../../assets/images/appdevelopmentbanner-2.webp";
import { register } from "swiper/element/bundle";
import { Link } from "react-scroll";
register();

function BannerSliderLandingPage({ page }) {
  const isWebDevelopment = Boolean(page === "web-development");

  const bannerone = isWebDevelopment ? webbannerone : appbannerone;
  const bannertwo = isWebDevelopment ? webbannertwo : appbannertwo;
  return (
    <>
      <div id="banner" className="sx-bnr-1-wrap-outer home-1-slider">
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
              backgroundImage: `url(${bannerone})`,
            }}
          >
            <div className="sx-bg-overlay opacity-06 sx-bg-light" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  {isWebDevelopment ? "Web Development" : "App Development"}
                </span>
                <h2 className="sx-bnr-1-large-title">
                  inspired and passionate about innovation.
                </h2>
                <div className="sx-bnr-1-info">
                  Transform how you innovate by leveraging advanced AI
                  technologies built to adapt and evolve with your business
                  goals.
                </div>
                <div className="sx-bnr-readmore">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={300}
                    to="about"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </Link>
                </div>
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
              backgroundImage: `url(${bannertwo})`,
            }}
          >
            <div className="sx-bg-overlay opacity-06 sx-bg-light" />
            <div className="container">
              <div className="sx-bnr-1-content">
                <span
                  className="sx-bnr-1-small-title"
                  data-swiper-parallax="-300"
                >
                  {isWebDevelopment ? "Web Development" : "App Development"}
                </span>
                <h2 className="sx-bnr-1-large-title">
                  Your Trusted Partner in Digital Innovation
                </h2>
                <div className="sx-bnr-1-info">
                  Revolutionize your business operations with AI, delivering
                  precision, scalability, and insights to overcome challenges
                  and achieve lasting success.
                </div>
                <div className="sx-bnr-readmore">
                  <Link
                    spy={true}
                    smooth={true}
                    duration={300}
                    to="about"
                    className="site-button sx-btn-primary icon"
                  >
                    <i className="fa  fa-long-arrow-right" />
                    Read More
                  </Link>
                </div>
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

export default BannerSliderLandingPage;