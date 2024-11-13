import Nav from "./nav";
import image1 from '../assets/download.jpg';
import image2 from '../assets/th.jpg';
import image3 from '../assets/th (1).jpg';
import Footer from "./footer";
function Customer() {
  return (
    <>
        <Nav></Nav>
        <section>
          <div className="container">
            <div className="row mt-4 d-flex justify-content-center">
              <div className="col-lg-10">
                <h1 className="text-center c-1 fw-1 fs60px">
                  See What Our Customers Are Saying About Pulse.
                </h1>
              </div>
            </div>
            <div className="row mt-4 d-flex justify-content-center ">
              <div className="col-lg-3 col-sm-6">
                <div className="customer_ideas">
                    <img src={image1} alt="Man Image" />
                  <p>
                    “Casimir Loeber from RealtyNinja tells us how Pulse takes
                    the fear and stress out of cash flow projection and
                    management.”
                  </p>
                </div>
                <h5 className="fw-1">
                  HOW REALTYNINJA USES PULSE TO AVOID STRESS ABOUT CASH FLOW
                </h5>
                <div className="read_more">
                  <a className="fw-1" href="#">
                    Read Case Study →
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="customer_ideas">
                <img src={image2} alt="Man Image" />
                  <p>
                    “Pulse helps us monitor the heart-rate of our business and
                    reconcile our monthly operational expenses.”
                  </p>
                </div>
                <h5 className="fw-1">
                  HOW BOLDUNDERLINE USES PULSE TO STAY FINANCIALLY STRONG
                </h5>
                <div className="read_more">
                  <a className="fw-1" href="#">
                    Read Case Study →
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="customer_ideas">
                <img src={image3} alt="Man Image" />
                  <p>
                    “Pulse gives the folks at nGen Works confidence in their
                    cash flow.”
                  </p>
                </div>
                <h5 className="fw-1">
                  HOW NGEN WORKS USES PULSE TO MAKE BETTER BUSINESS DECISIONS
                </h5>
                <div className="read_more">
                  <a className="fw-1" href="#">
                    Read Case Study →
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6">
                <div className="customer_ideas">
                <img src={image1} alt="Man Image" />
                  <p>
                    “After using Pulse at his previous agency, Carl came back to
                    Pulse because it gives him a feeling of control over his
                    business.”
                  </p>
                </div>
                <h5 className="fw-1">
                  BUREAU OF DIGITAL USES PULSE TO CONTROL CASH FLOW
                </h5>
                <div className="read_more">
                  <a className="fw-1" href="#">
                    Read Case Study →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="second_section mt-5">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-12">
                <div className="question_div d-flex justify-content-center">
                  <p className="text-center ls-2 fsi-2">
                    Have something to say about Pulse? We’d love to hear it.{" "}
                    <a className="fw-1" href="#">
                      Tell us your story
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Cash flow is king, and yet, there are no tools to
                      properly manage it. I think Pulse is really onto
                      something. It took me about an hour to finish entering all
                      of my inflows and outflows and share it with the other
                      partners. I now have a really clear idea of where I need
                      to tighten things up to hit my goals.”
                    </p>
                  </div>
                  <h6 className="fw-1">Navid Safabakhsh</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Pulse is perfect for those of us who are not
                      accounting-minded and need something more automated than
                      an Excel spreadsheet and less complicated than
                      Quickbooks.”
                    </p>
                  </div>
                  <h6 className="fw-1">Scott Allen, Founder/CCO</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Pulse is the only app that has allowed me to easily see
                      how my cash flow changes if I add additional income or
                      expenses and plan accordingly. I would rebuild Pulse as a
                      spreadsheet if you guys stopped offering it.”
                    </p>
                  </div>
                  <h6 className="fw-1">Daryl Freier, Fine Council</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Pulse is exactly the application I was looking for when I
                      was trying to figure out how to track eight accounts in a
                      single view. It was very difficult with Excel and beyond
                      my accounting skills.”
                    </p>
                  </div>
                  <h6 className="fw-1">Karin Armstrong</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Our company, which has offices in Milan, Italy and a
                      network of more than 400 consultants worldwide, has been
                      using Pulse for some weeks, and we love it because it’s
                      simple and totally web-based.”
                    </p>
                  </div>
                  <h6 className="fw-1">Simone Lovati, founder</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Thank you for developing Pulse App. I have been using
                      Excel to manage my cash flow for years, as there was no
                      robust online alternative available. Pulse is excellently
                      designed and has no junk features. It’s nice and simple
                      and does an excellent job!”
                    </p>
                  </div>
                  <h6 className="fw-1">Niall Kearns</h6>
                </div>
              </div>
              <div className="col-6 mb-5">
                <div className="autor_infos d-flex flex-column justify-content-between">
                  <div className="autor_infos_p">
                    <p className="fsi-2">
                      “Pulse gives me a fluid overview of my cash flow that I
                      can not achieve using my accounting package.”
                    </p>
                  </div>
                  <h6 className="fw-1">Rachel</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="third_section">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="col-12">
                <p className="text-center">
                  <a className="fw-1" href="#">
                    Sign Up for a Free 30-Day Trial →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </>
  )
}

export default Customer;