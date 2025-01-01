import ItodoImage from "../../../elements/itodo-img";

function WhyChooseUs() {
  return (
    <>
      <div className="section-full p-b30 sx-bg-white sx-about-bx1-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx1-content-wrap">
              <div className="row">
                <div
                  className="col-lg-6 col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-content">
                    <h2 className="sx-title">Why Choose Us?</h2>
                    <p>
                      When it comes to technology, there’s no one-size-fits-all
                      approach. At AI Company, we believe in building long-term
                      partnerships, where we work with you to understand your
                      needs and create tailored solutions that bring lasting
                      value to your business. Our team combines technical
                      expertise with a dedication to quality, ensuring that
                      every project we deliver is designed to help you achieve
                      your goals and excel in today’s digital landscape.
                    </p>
                    {/* <div className="progress">
                      <div
                        className="progress-bar sx-bg-primary"
                        role="progressbar"
                        style={{ width: "75%" }}
                        aria-valuenow={75}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <span>95.00% Work Success</span>
                      </div>
                    </div> */}
                    <div className="row sx-about-icon-bx1-column">
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-mouse" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Solution
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-6">
                        <div className="sx-icon-bx-2">
                          <div className="sx-media">
                            <i className="flaticon-download" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title">
                              IT Consultant
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-6 d-lg-flex d-none col-md-12 wow fadeInDown"
                  data-wow-duration="1000ms"
                >
                  <div className="sx-about-bx1-media">
                    <div className="sx-dot-bx">
                      <ItodoImage src="images/about/dotted-pic.png" alt="" />
                    </div>
                    <div className="sx-ab-img-outer">
                      <div className="sx-ab-img-section-2">
                        <ItodoImage src="images/about/p1.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* COUNTER START */}
            {/* <SectionCounter1 /> */}
            {/* COUNTER  END */}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;
