import Footer from "./footer";
import Nav from "./nav";
import sub from"../assets/subvert-avatar.png"
function Home() {
  return (
    <>
      <Nav/>
      <section>
        <div className="container">
          <div className="row mt-5 d-flex justify-content-center mb-5">
            <div className="col-xl-6 col-lg-8 col-md-12">
              <div className="info_about_free">
                <h1 className="text-center c-1 fw-1 fs60px">
                  Try Pulse free for 30 days.
                </h1>
                <p className="text-center fsi-2">
                  See why Pulse is the best way to monitor your cash flow. Sign
                  up for any plan and try Pulse absolutely free for 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-xl-4 col-md-6">
              <div className="first_card">
                <h2 className="fw-1 fsi-1">
                  These are what we call the Pulse Basics. They’re what every
                  customer gets.
                </h2>
                <ul>
                  <li className="c-2">
                    Manage cash flow on a daily, weekly, monthly, or yearly
                    basis
                  </li>
                  <li className="c-2">
                    Forecast growth with recurring income or expenses that scale
                    automatically
                  </li>
                  <li className="c-2">Works with any currency</li>
                  <li className="c-2">
                    See Money In and Money Out, categorize transactions, and run
                    helpful reports
                  </li>
                  <li className="c-2">
                    Toggle entries and accounts on and off to game out different
                    scenarios
                  </li>
                </ul>
                <p>
                  Just need the Pulse Basics?{" "}
                  <a className="c-2" href="#">
                    Get them now
                  </a>{" "}
                  for $29 per month.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="second_card">
                <div className="title_card">
                  <p className="text-center">RECOMMENDED</p>
                </div>
                <div className="body_card">
                  <div className="name_card pt-4">
                    <h1 className="text-center fw-1">
                      Small <br /> Business <br /> Plan
                    </h1>
                  </div>
                  <p className="text-center">$59 per month</p>
                  <div className="sign_body_box d-flex justify-content-center">
                    <div className="sign_body">
                      <a className="c-2 fw-1 fsi-1" href="#">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                  <h6 className="text-center mt-4 fw-1 c-2">
                    You get Pulse Basics, plus:
                  </h6>
                  <ul>
                    <li className="c-2">
                      Manage cash flow across multiple financial accounts
                    </li>
                    <li className="c-2">
                      Invite your investors, book keeper, or management team to
                      see reports or manage cash flow
                    </li>
                    <li className="c-2">
                      Integrate with QuickBooks Online for more accurate cash
                      flow
                    </li>
                    <li className="c-2">
                      Track your actual cash flow alongside your projected cash
                      flow
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="third_card">
                <div className="title_card">
                  <p className="text-center">
                    Complex business with multiple financial accounts,
                    currencies, or auditing needs?
                  </p>
                </div>
                <div className="body_card">
                  <div className="name_card pt-4">
                    <h1 className="text-center fw-1">
                      Unlock Extra <br /> Features
                    </h1>
                  </div>
                  <p className="text-center">$89 per month</p>
                  <div className="sign_body_box d-flex justify-content-center">
                    <div className="sign_body">
                      <a className="c-2 fw-1 fsi-1" href="#">
                        Sign Up Now
                      </a>
                    </div>
                  </div>
                  <h6 className="text-center mt-4 fw-1 c-2">
                    Get it all, plus:
                  </h6>
                  <ul>
                    <li className="c-2">
                      Manage cash flow across unlimited financial accounts
                    </li>
                    <li className="c-2">
                      Convert to any currency for localized cash flow reporting
                      and projections
                    </li>
                    <li className="c-2">
                      Attach invoices or contracts to your cash flow entries for
                      accountability and auditing
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="avatar_logo d-flex justify-content-center">
                <img
                  src={sub}
                  alt="subvert logo for pulse"
                  className="align-items-center"
                />
              </div>
              <p className="idea_p text-center c-1 ls-2">
                “Pulse is worth every penny because it empowers business owners
                with critical financial insight and knowledge.”
              </p>
              <p className="mark_p text-center fw-1 ls-2">
                SUBVERT MARKETING, INC.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="second_section">
        <div className="container">
          <h1 className="mb-4 c-1 fw-1 ls-1">FAQ</h1>
          <div className="row d-flex justify-content-between">
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  How does the 30-day free trial work?
                </h4>
                <p className="c-2 fsi-2">
                  You can use Pulse absolutely free for 30 days. After 30 days,
                  we will charge the credit card you used when you sign up. If
                  you choose to cancel your account before your trial ends, your
                  card will not be charged.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  If I upgrade an existing account, do I get another free trial?
                </h4>
                <p className="c-2 fsi-2">
                  Brand new accounts are the only ones eligible for a 30-day
                  free trial. If you upgrade an existing account, your credit
                  card will be billed the new amount on the date of your next
                  billing cycle.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  What is a “Financial Account”?
                </h4>
                <p className="c-2 fsi-2">
                  Financial Accounts are a grouping of income and expense items
                  that can be used for tracking or reporting purposes.
                </p>
                <p className="c-2 fsi-2">
                  They’re designed to be flexible and can be used to
                  differentiate between bank accounts, companies, individuals or
                  between personal and business entries.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  Do I have to commit to a long-term contract?
                </h4>
                <p className="c-2 fsi-2">
                  No. There is no contract when you use Pulse, other than
                  agreeing to our Terms of Service.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  Will I be able to cancel my account if I don’t use Pulse?
                </h4>
                <p className="c-2 fsi-2">
                  Yes – you can cancel your account at any time. To cancel your
                  account, go to your billing page and click on “Please cancel
                  my account” at the bottom of the page. The account owner is
                  the only one who can cancel an account. An email request to
                  delete an account is not considered cancellation.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-sm-12 col-lg-6 col-md-6">
              <div className="extra_info">
                <h4 className="c-1 fw-1 fsi-1">
                  What types of payments do you accept?
                </h4>
                <p className="c-2 fsi-2">
                  We accept payments made online using Visa, Mastercard,
                  Discover, and American Express.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Home;
