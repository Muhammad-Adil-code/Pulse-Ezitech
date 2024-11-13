import img from "../assets/pulse-logo.svg";

function Footer() {
    

    return (
        <>
            <footer>
        <div className="container">
          <div className="row mb-5 d-flex justify-content-between">
            <div className="col-md-4 col-sm-4">
              <div className="sign_up_img">
                <img
                  src={img}
                  alt="pulse logo for site"
                  height="66px"
                />
                <br />
                <br />
                <br />
                <div className="sign_up">
                  <a href="/signup">Sign Up for a Free 30-Day Trial</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-8">
              <div className="footer_infos">
                <ul>
                  <li>
                    <h5>Product</h5>
                  </li>
                  <li>
                    <a href="/signup">Features</a>
                  </li>
                  <li>
                    <a href="/pricing">Pricing</a>
                  </li>
                  <li>
                    <a href="/signup">Sign Up</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Company</h5>
                  </li>
                  <li>
                    <a href="/customer-stories">Customer Stories</a>
                  </li>
                  <li>
                    <a href="/signup">About</a>
                  </li>
                  <li>
                    <a href="/signup">Contact</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h5>Resources</h5>
                  </li>
                  <li>
                    <a href="/signup">Support</a>
                  </li>
                  <li>
                    <a href="/blog">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-7 col-md-12">
              <span>©2019 Pulseapp.com, Inc. All Rights Reserved |</span>
              <a href="#">Terms of Use</a>
              <span>|</span>
              <a href="#">Privacy Policy </a>
              <span>|</span>
              <a href="#">EU Privacy</a>
              <br />
              <span>
                Pulse is made by
                <span>
                  <a href="#">Simple Focus</a>
                  <span>. We also make</span>
                  <a href="#">Ballpark</a>
                  <span>,</span>
                  <a href="#">Sifter</a>
                  <span>, and</span>
                  <a href="#">Curated</a>
                  <span>.</span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </footer>
        </>
    )
}

export default Footer;
