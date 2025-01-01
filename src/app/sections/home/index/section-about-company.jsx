import { companyDetails, publicUrlFor } from "../../../../globals/constants";
import ItodoImage from "../../../elements/itodo-img";
import SectionCounter1 from "./section-counter1";

function SectionAboutCompany() {
  return (
    <>
      <div className="section-full m-t110 p-b50 bg-white sx-about-bx3-outer">
        <div className="container">
          <div className="section-content">
            <div className="sx-about-bx3-content-wrap">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-media">
                    <div className="sx-dot-bx1">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-dot-bx2">
                      <ItodoImage
                        src="images/about/dotted-pic2.png"
                        alt="image"
                      />
                    </div>
                    <div className="sx-ab3-img-outer">
                      <div className="sx-ab3-media">
                        <img
                          src={publicUrlFor("images/about/p2.webp")}
                          style={{ aspectRatio: "1", objectFit: "cover" }}
                          className="w-100 h-100 rounded"
                          alt="media"
                        />
                      </div>
                    </div>
                    <div className="sx-ab-circle-box">
                      <div className="sx-ab-circle-box-content">
                        <span className="sx-exp">3+ Years Experience</span>
                        <div className="sx-exp-title-outer">
                          <span className="sx-exp-title-1">It</span>
                          <span className="sx-exp-title-2">Solutions</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="sx-about-bx3-content">
                    <h2 className="sx-title">Welcome to AI Company</h2>
                    {/* <span className="sx-title-2">
                      Nam eu leo nec diam efficitur aliquet lacinia tellus
                      locusstome.
                    </span> */}
                    <p>
                      At AI Company, we believe in using technology not just as a
                      tool, but as a catalyst for growth. Our team of expert
                      developers, designers, and strategists work closely with
                      you to craft custom digital solutions that propel your
                      business forward in a fast-evolving world.
                    </p>
                    <div className="row sx-about-icon-bx3-column">
                      <div className="col-lg-5 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-incoming-call" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Phone
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.number}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-7 col-md-6">
                        <div className="sx-icon-bx-3">
                          <div className="sx-media">
                            <i className="flaticon-email-1" />
                          </div>
                          <div className="sx-icon-bx-info">
                            <span className="sx-icon-bx-title-info">
                              Contact Mail
                            </span>
                            <span className="sx-icon-bx-title">
                              {companyDetails.email}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <SectionCounter1 />
            <div className="hilite-title text-left p-l50 text-uppercase">
              <strong>About Us</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionAboutCompany;
