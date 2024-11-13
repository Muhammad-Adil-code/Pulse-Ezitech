import Nav from "./nav";
import Footer from "./footer";
function Contact() {
  return (
    <>
      <>
            <Nav></Nav>

            <div className="contact_section">
            <div className="container7">
          <div className="logo">
            pul<span className="dot">.</span>se
          </div>
          <p className="tagline">
            Take control of your cash flow with the
            <br />
            <strong>#1 cash flow software.</strong>
          </p>
        </div>
        {/* Registration Form  */}
        <div className="form-container">
          <form action="#" method="post">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="" />
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="" />
            <label htmlFor="company-name">Company Name</label>
            <input type="text" id="company-name" placeholder="" />
            <label htmlFor="password">Create a Password</label>
            <input type="password" id="password" placeholder="" />
            <label htmlFor="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder="" />
            <div className="site-address-section">
              <p className="section-title">Your Pulse Site Address</p>
              <p className="section-description">
                Every Pulse account has its own unique web address where you&apos;ll
                log in. Remember to bookmark it!
              </p>
              <div className="site-address-input">
                <input type="text" id="site-address" placeholder="" />
                <span className="domain">.pulseapp.com</span>
              </div>
              <p className="note">Letters and numbers only, no spaces.</p>
            </div>
          </form>
        </div>
        {/* billing form  */}
        <div className="bill-container">
          <h2>
            Billing Information <span className="lock">🔒</span>
          </h2>
          <div className="form-box">
            <label htmlFor="name">Name on card</label>
            <input type="text" id="name" placeholder="" />
            <label htmlFor="card">Credit or debit card</label>
            <div className="card-input">
              <input type="text" id="card" placeholder="Card number" />
              <button className="autofill-button">
                Autofill <span className="link">link</span>
              </button>
            </div>
            <p className="secure-text">
              All data and transactions are securely stored and processed using
              industry standards.
            </p>
          </div>
          <p className="trial-info">
            You’re signing up for a free 30-day trial of the Plus plan. At the
            end of the trial on December 8 we’ll charge you $59 a month to keep
            using Pulse, and you can <a href="#">cancel any time</a>.
          </p>
          <div className="checkbox-group">
            <label>
              <input type="checkbox" /> I have read and agree to Pulse’s{" "}
              <a href="#">Terms of Use</a>
            </label>
            <br />
            <label>
              <input type="checkbox" /> I have read and agree to Pulse’s{" "}
              <a href="#">Privacy Policy</a>
            </label>
            <br />
            <label>
              <input type="checkbox" /> I want to receive a{" "}
              <a href="#">monthly newsletter</a> with helpful cash flow advice
            </label>
          </div>
          <button className="start-trial-button">Start Trial</button>
        </div>
            </div>
        <Footer></Footer>
      </>
    </>
  );
}



export default Contact;