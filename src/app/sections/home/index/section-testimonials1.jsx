const testimonials = [
  {
    id: 1,
    name: "Alex R",
    designation: "Operations Manager, SupplyCo",
    review:
      "Working with AI Company was exactly what we needed to elevate our operations. They listened closely to our requirements and delivered a custom software solution that not only met but exceeded our expectations. The system is user-friendly, flexible, and has significantly streamlined our workflow. The team was proactive, knowledgeable, and truly committed to our project’s success. We couldn’t be happier!",
  },
  {
    id: 2,
    name: "Lisa M",
    designation: "Customer Experience Director, RetailHub",
    review:
      "Our customer service has been transformed since we added the chatbot developed by AI Company. The bot engages users effectively, providing fast, accurate answers and reducing wait times. It’s clear they designed it with our customers in mind, and the support we’ve received from their team has been top-notch. We’re seeing great feedback from customers and have freed up our team to focus on more complex issues. A fantastic partnership!",
  },
  {
    id: 3,
    name: "Chris T",
    designation: "Founder, FitFlow",
    review:
      "The mobile app AI Company developed for us has been a hit with our users. From the very beginning, they were attentive to our vision, and the final product is both stunning and highly functional. The app is intuitive, performs flawlessly, and reflects our brand perfectly. They communicated every step of the way, ensuring we were involved and satisfied. We couldn’t ask for a better team to bring our app to life!",
  },
  {
    id: 4,
    name: "Jessica P",
    designation: "Marketing VP, TrendWave",
    review:
      "Our business needed more insight into our data, and AI Company delivered a powerful AI solution that’s made a real difference. The AI system provides us with accurate predictions and helps us make better, data-driven decisions. Their team was dedicated to understanding our unique needs and customizing the solution to maximize its impact. Our ability to analyze customer trends and personalize marketing has never been stronger.",
  },
  {
    id: 5,
    name: "Mark B",
    designation: "COO, FinTrust Services",
    review:
      "We turned to AI Company to implement RPA, and the results have been outstanding. Their team analyzed our processes thoroughly and identified tasks that were perfect for automation. The RPA solution has saved us time, reduced errors, and allowed our team to focus on strategic projects. They made the process seamless and were incredibly responsive throughout. This has been a big win for us!",
  },
  {
    id: 6,
    name: "Sandra L",
    designation: "Owner, GreenLeaf Consulting",
    review:
      "We had high hopes for our website redesign, and AI Company delivered beyond our expectations. They brought our vision to life with a site that’s professional, attractive, and easy to navigate. Our clients love the new design, and it’s already driving more engagement. Working with their team was a smooth experience, and they took the time to understand our goals. We’re thrilled with the outcome!",
  },
];

function SectionTestimonials1() {
  return (
    <>
      <div className="section-full  p-t10 p-b10 sx-bg-light sx-about-bx4-outer">
        <div className="container">
          <div className="section-content">
            {/*testimonial section */}

            <div className="sx-testimonial-bx-2  m-b30">
              {/* TITLE START */}
              <div className="section-head center">
                <div className="sx-head-s-title">Our Testimonials</div>
                <div className="sx-head-l-title">
                  <h2 className="sx-title">What Clients Say?</h2>
                </div>
              </div>
              {/* TITLE END */}
              <div className="owl-carousel testimonial-section-2 owl-btn-vertical-center">
                {testimonials.map((obj, i) => (
                  <div key={i} className="item">
                    <div className="testimonial-1 hover-animation-1 sx-bg-white">
                      <div className="testimonial-text">
                        <p>{obj.review}</p>
                      </div>
                      <div className="testimonial-detail">
                        <div className="testimonial-user-info">
                          <h4 className="testimonial-name">{obj.name}</h4>
                          <span className="testimonial-position">
                            {obj.designation}
                          </span>
                        </div>
                      </div>
                      <div className="testimonial-footer">
                        <div className="testimonial-quote sx-text-primary">
                          <i className="flaticon-quote" />
                        </div>
                        <ul className="sx-rating-st1">
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                          <li>
                            <span>
                              <i className="fa fa-star" />
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SectionTestimonials1;
