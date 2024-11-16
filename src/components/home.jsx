import Footer from "./footer";
import Nav from "./nav";
function Home() {
  return (
    <>
      <Nav/>
      <main id="content" role="main">
  <div className="bg-green-100 ">
    <div className="container pb-4 sm-max:pt-8 lg:flex lg:justify-center lg:pb-10 lg:mb-10">
      <div className="w-full md:max-w-1/2 lg:text-center">
        <h1 className="h1 sm-max:text-4xl sm-max:mb-12">
          Try Pulse free for <br className="hidden md:inline-block" />
          30 days.
        </h1>
        <p className="text-gray-800">
          See why Pulse is the best way to monitor your cash flow. Sign up for
          any plan and try Pulse absolutely free for 30 days.
        </p>
      </div>
    </div>
    <div className="container">
      <div className="pricing-blocks -mx-4 lg:flex items-center">
        <div className="md-max:mb-8 lg:p-8 lg:flex lg:w-1/3">
          <div className="container">
            <h2 className="font-bold text-xl block text-green-400 leading-tight mb-4">
              These are what we call the Pulse Basics. They’re what every
              customer gets.
            </h2>
            <ul className="block mb-4 text-base list-disc ml-8 lg:ml-4">
              <li>
                Manage cash flow on a daily, weekly, monthly, or yearly basis
              </li>
              <li>
                Forecast growth with recurring income or expenses that scale
                automatically
              </li>
              <li>Works with any currency</li>
              <li>
                See Money In and Money Out, categorize transactions, and run
                helpful reports
              </li>
              <li>
                Toggle entries and accounts on and off to game out different
                scenarios
              </li>
            </ul>
            <p className="text-base">
              Just need the Pulse Basics? <br />
              <a
                className="text-gray-800 font-normal"
                href="https://create.pulseapp.com/signup/"
              >
                Get them now
              </a>{" "}
              for $29 per month.
            </p>
          </div>
        </div>
        <div className="lg:flex lg:w-1/3">
          <a
            href="https://signup.pulseapp.com/plus"
            target="_blank"
            rel="noopener"
            className="block-pricing group flex flex-col no-underline text-gray-700 border bg-white md-max:mx-4 md-max:mb-8 lg:text-center recommended hover:border-green-400"
          >
            <div className="overflow-hidden relative h-full font-normal lg:flex lg:flex-col lg:px-8 lg:pt-12 lg:pb-6">
              <div className="block-banner py-2 bg-green-400 text-white text-center uppercase tracking-widest text-xs font-bold lg:absolute lg:top-0 lg:right-0 lg:py-1">
                Recommended
              </div>
              <div className="md-max:flex md-max:items-center md-max:justify-between md-max:p-4">
                <div>
                  <div className="lg:text-4xl font-bold lg:px-4 text-3xl text-green-400 leading-none tracking-tighterer xs:inline-block lg:block lg:mt-4 ">
                    Small Business Plan
                  </div>
                  <div className="my-2 text-gray-600 text-2xl leading-none tracking-tighter xs:inline-block xs:text-xl sm:pl-2 sm:text-2xl lg:block lg:text-2xl lg:mb-6">
                    $59 per month
                  </div>
                  <div className="hidden mt-auto lg:block">
                    <div className="pricing-button inline-block px-8 pt-2 pb-3 font-bold text-xl bg-green-300 mb-8">
                      Sign Up Now
                    </div>
                  </div>
                  <div className="font-bold uppercase tracking-widest text-xs leading-tight md-max:mt-8">
                    You get Pulse Basics, plus:
                  </div>
                </div>
              </div>
              <ul
                className="tracking-tighter md-max:pb-4 md-max:px-8 lg:mb-4 text-left"
                role="list"
              >
                <li className="py-2  md-max:leading-tight">
                  <span className="Manage cash flow across multiple financial accounts">
                    Manage cash flow across multiple financial accounts
                  </span>
                </li>
                <li className="py-2  md-max:leading-tight">
                  <span className="Invite your investors, book keeper, or management team to see reports or manage cash flow">
                    Invite your investors, book keeper, or management team to
                    see reports or manage cash flow
                  </span>
                </li>
                <li className="py-2  md-max:leading-tight">
                  <span className="Integrate with QuickBooks Online for more accurate cash flow">
                    Integrate with QuickBooks Online for more accurate cash flow
                  </span>
                </li>
                <li className="py-2  md-max:leading-tight">
                  <span className="Track your actual cash flow alongside your projected cash flow">
                    Track your actual cash flow alongside your projected cash
                    flow
                  </span>
                </li>
              </ul>
              <div className="block p-4 lg:hidden">
                <div className="w-full px-8 pt-2 pb-3 font-bold text-xl bg-green-300 text-center">
                  Sign Up Now
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="lg:flex lg:w-1/3">
          <a
            href="https://signup.pulseapp.com/premium"
            target="_blank"
            rel="noopener"
            className="block-pricing group flex flex-col no-underline text-gray-700 border bg-white md-max:mx-4 md-max:mb-8 lg:text-center premium hover:border-green-400"
          >
            <div className="overflow-hidden relative h-full font-normal lg:flex lg:flex-col lg:px-8 lg:pt-12 lg:pb-6">
              <div className="block-banner p-4 lg:px-8 lg:pt-5 lg:pb-6 bg-gray-200 text-center text-sm lg:absolute lg:top-0 lg:right-0 leading-snug">
                Complex business with multiple financial accounts, currencies,
                or auditing needs?
              </div>
              <div className="md-max:flex md-max:items-center md-max:justify-between md-max:p-4">
                <div>
                  <div className=" text-3xl text-green-400 leading-none tracking-tighterer xs:inline-block lg:block lg:mt-4 lg:mt-16">
                    Unlock Extra Features
                  </div>
                  <div className="my-2 text-gray-600 text-2xl leading-none tracking-tighter xs:inline-block xs:text-xl sm:pl-2 sm:text-2xl lg:block lg:text-2xl lg:mb-6">
                    $89 per month
                  </div>
                  <div className="hidden mt-auto lg:block">
                    <div className="pricing-button inline-block px-8 pt-2 pb-3 font-bold text-xl bg-green-300 mb-8">
                      Try Premium
                    </div>
                  </div>
                  <div className="font-bold uppercase tracking-widest text-xs leading-tight md-max:mt-8">
                    Get it all, plus:
                  </div>
                </div>
              </div>
              <ul
                className="tracking-tighter md-max:pb-4 md-max:px-8 lg:mb-4 text-left"
                role="list"
              >
                <li className="py-2  md-max:leading-tight">
                  <span className="Manage cash flow across unlimited financial accounts">
                    Manage cash flow across unlimited financial accounts
                  </span>
                </li>
                <li className="py-2  md-max:leading-tight">
                  <span className="Convert to any currency for localized cash flow reporting and projections">
                    Convert to any currency for localized cash flow reporting
                    and projections
                  </span>
                </li>
                <li className="py-2  md-max:leading-tight">
                  <span className="Attach invoices or contracts to your cash flow entries for accountability and auditing">
                    Attach invoices or contracts to your cash flow entries for
                    accountability and auditing
                  </span>
                </li>
              </ul>
              <div className="block p-4 lg:hidden">
                <div className="w-full px-8 pt-2 pb-3 font-bold text-xl bg-green-300 text-center">
                  Try Premium
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div className="container flex justify-center py-12 lg:py-24">
      <div className="max-w-2/3 text-center">
        <img
          src="https://pulseapp.com/img/subvert-avatar.png"
          srcSet="https://pulseapp.com/img/subvert-avatar.png,
                      https://pulseapp.com/img/subvert-avatar@2x.png 2x"
          alt=""
          aria-hidden="true"
          className="mx-auto"
        />
        <div className="py-4 text-2xl text-gray-800">
          “Pulse is worth every penny because it empowers business owners with
          critical financial insight and knowledge.”
        </div>
        <div className="uppercase font-bold text-xs text-green-400 tracking-widest">
          Subvert Marketing, Inc.
        </div>
      </div>
    </div>
  </div>
  <div className="container pt-12 pb-8 lg:pt-24 lg:pb-20">
    <h2 className="h2 mb-4">FAQ</h2>
    <div className="faq-blocks flex flex-wrap -mx-4">
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">How does the 30-day free trial work?</div>
        <p>
          You can use Pulse absolutely free for 30 days. After 30 days, we will
          charge the credit card you used when you sign up. If you choose to
          cancel your account before your trial ends, your card will not be
          charged.
        </p>
      </div>
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">
          If I upgrade an existing account, do I get another free trial?
        </div>
        <p>
          Brand new accounts are the only ones eligible for a 30-day free trial.
          If you upgrade an existing account, your credit card will be billed
          the new amount on the date of your next billing cycle.
        </p>
      </div>
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">What is a “Financial Account”?</div>
        <p>
          Financial Accounts are a grouping of income and expense items that can
          be used for tracking or reporting purposes.
          <br />
          <br />
          They’re designed to be flexible and can be used to differentiate
          between bank accounts, companies, individuals or between personal and
          business entries.
        </p>
      </div>
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">Do I have to commit to a long-term contract?</div>
        <p>
          No. There is no contract when you use Pulse, other than agreeing to
          our Terms of Service.
        </p>
      </div>
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">
          Will I be able to cancel my account if I don’t use Pulse?
        </div>
        <p>
          Yes – you can cancel your account at any time. To cancel your account,
          go to your billing page and click on “Please cancel my account” at the
          bottom of the page. The account owner is the only one who can cancel
          an account. An email request to delete an account is not considered
          cancellation.
        </p>
      </div>
      <div className="px-4 py-6 md:w-1/2">
        <div className="h4">What types of payments do you accept?</div>
        <p>
          We accept payments made online using Visa, Mastercard, Discover, and
          American Express.
        </p>
      </div>
    </div>
  </div>
</main>

      <Footer/>
    </>
  );
}

export default Home;
