import image from "../assets/pulse-invoicing-hero.jpg";
import image2 from "../assets/FinalDrafts-usingcashflowdecisions.png";
import image3 from "../assets/FinalDrafts-Startupsneedpulse.png";
import Nav from "./nav";
import Footer from "./footer";
function Main() {
  return (
    <>
    <Nav/>
      <main id="content" role="main">
        {/* Hero Section */}
        <section
          className="home-hero overflow-hidden relative pt-8 pb-80 sm:pb-96 xs:max:bg-green-100"
          style={{ visibility: "visible" }}
        >
          <div className="container">
            {/* Title */}
            <h1 className="home-hero__title h1" style={{ opacity: 1 }}>
              Yes, your business can
              <br />
              survive &nbsp;
              <span className="marker-circle-wrapper relative inline-block">
                that expense.
                {/* Decorative Circle SVG */}
                <svg
                  className="marker-circle"
                  width={386}
                  height={87}
                  viewBox="0 0 386 87"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "330.891px" }}
                >
                  <g
                    stroke="none"
                    strokeWidth={1}
                    fill="none"
                    fillRule="evenodd"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <g
                      transform="translate(3.000000, 3.000000)"
                      stroke="#3BA0F2"
                      strokeWidth={7}
                    >
                      <path
                        className="circle"
                        d="M144.55,21.15 C88,13.77 -1.91, 32.48 0.55,52.15 C3.73,77.57 130.55,83.15 212.55,79.15 C272.67,76.22 381.75,68.05 378.55,40.15 C373.63,-4.11 114.89,-13.33 16.55,22.73"
                        id="Path"
                        strokeDasharray="924.990234375"
                        style={{ strokeDashoffset: 0 }}
                      />
                    </g>
                  </g>
                </svg>
              </span>
            </h1>
          </div>
        </section>
      </main>
      <>
        <svg
          className="marker-arrow-wrapper"
          style={{ transform: "rotate(60.4357deg)" }}
          // -webkit-transform: scaleX(1.4) rotateX(180deg) rotate(-75deg);
        >
          <svg
            className="marker-arrow"
            width={150}
            height={63}
            viewBox="0 0 150 63"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              stroke="none"
              strokeWidth={1}
              fill="none"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <g
                transform="translate(3.000000, -46.000000)"
                stroke="#3BA0F2"
                strokeWidth={6}
              >
                <g
                  id="Group"
                  transform="translate(72.502285, 68.487514) rotate(-53.000000) translate(-72.502285, -68.487514) translate(31.002285, 9.987514)"
                >
                  <path
                    className="line"
                    d="M0.233522490,0.0166880603 C7.4432525,27.2866881 36.2,79.46 68.09,104.86"
                    strokeDasharray="126.44490051269531"
                    style={{ strokeDashoffset: 0 }}
                  />
                  <path
                    className="point"
                    d="M28.2,102.73 C45.5,109.86 83,116.5 83,116.5 C83,116.5 65.23,74.07 65.23,59"
                    strokeDasharray="116.97999572753906"
                    style={{ strokeDashoffset: 0 }}
                  />
                </g>
              </g>
            </g>
          </svg>
        </svg>
        {/* Text Content */}
        <p
          className="home-hero__content text-gray-800 lg:w-3/5 xs:max:leading-tight"
          style={{ opacity: 1}}
        >
          Do you know how much money you&apos;ll have in two weeks? Two months? Two
          years? Business owners who use Pulse have better cash flow habits and
          a firm grasp on the pulse of their business.
          <strong>First&nbsp;month&nbsp;free.</strong>
        </p>
        {/* Call to Action Button */}
        <a
          href="/signup"
          className="home-hero__button button button-blue xs:max:px-4 xs:max:py-2 xs:max:text-lg"
          style={{ opacity: 1, transform: "scale(1)" }}
        >
          Try 30 Days Free
        </a>
        {/* Pricing Text */}
        <p className="home-hero__pricing text-sm" style={{ opacity: 1, zIndex:[10], position: "relative" }}>
          Plans start at $29.
          <a href="/pricing" className="text-gray-800">
            See full pricing.
          </a>
        </p>






        <svg className="bar-graph" width="1295px" height="545px" viewBox="150 0 1252 545" xmlns="http://www.w3.org/2000/svg">
    <defs className="">
        <linearGradient x1="50%" y1="71.0416667%" x2="50%" y2="100%" id="linearGradient-line">
            <stop stopColor="#D6DAE5" offset="0%"></stop>
            <stop stopColor="#D6DAE5" stopOpacity="0" offset="100%"></stop>
        </linearGradient>
    </defs>

    <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" className="">
        <g transform="translate(-661.000000, -290.000000)" className="">
            <g transform="translate(661.000000, 290.000000)">
                <g transform="translate(142.000000, 0.000000)" className="">
                    <g className="bars bars-aug" transform="translate(1191.000000, 0.000000)">
                        <polygon
                        className="bar bar-red"
                        fill="#6F6878"
                        points="39 83 75 83 75 500 39 500"
                        style={{ transform: "scaleY(1)" }}
                        />
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 0 36 0 36 499.828125 0 499.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 83 75 83 75 500 39 500" style={{transform: "scaleY(1)"}}></polygon> 
                    </g>
                     <g className="bars bars-jul" transform="translate(1021.000000, 83.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 0 36 0 36 416.828125 0 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 153 75 153 75 416.828125 39 416.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-jun" transform="translate(851.000000, 197.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 -1.13686838e-13 36 -1.13686838e-13 36 302.828125 0 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 151 75 151 75 302.828125 39 302.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-may" transform="translate(680.000000, 116.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 150 36 150 36 383.828125 0 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 5.68434189e-14 75 5.68434189e-14 75 383.828125 39 383.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-apr" transform="translate(510.000000, 247.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 -7.10542736e-14 36 -7.10542736e-14 36 252.828125 0 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 12 75 12 75 252.828125 39 252.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-mar" transform="translate(339.000000, 298.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 -1.42108547e-14 36 -1.42108547e-14 36 201.828125 0 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 14 75 14 75 201.828125 39 201.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-feb" transform="translate(170.000000, 290.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 12 36 12 36 209.828125 0 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 -2.84217094e-14 75 -2.84217094e-14 75 209.828125 39 209.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g>
                    <g className="bars bars-jan" transform="translate(0.000000, 274.000000)">
                        <polygon className="bar bar-green" fill="#00AD6A" points="0 2.84217094e-14 36 2.84217094e-14 36 225.828125 0 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                        <polygon className="bar bar-red" fill="#F68787" points="39 28 75 28 75 225.828125 39 225.828125" style={{transform: "scaleY(1)"}}></polygon>
                    </g> 
                </g>

                <g className="base" transform="translate(12.000000, 104.500000)" fillRule="nonzero">
                    <polygon className="white-base" fill="#FCFCFC" points="0.5 440.148437 1528 440.148438 1528 1.0463852e-12 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0.5 297.5"></polygon>
                    <polyline className="blue-line" stroke="#87C4F5" strokeWidth="4" points="1528 1.6328125 1362 60 1191.5 240.5 1021.5 346 850.5 245 680.5 270 509.5 303 340 291 167.120392 333 0 297.5"></polyline>
                </g>

                <g className="months" transform="translate(169.000000, 518.000000)" fill="#969696" fontFamily="WorkSans-Regular, Work Sans" fontSize="13" fontWeight="normal" style={{opacity: "1"}}>
                    <text className="aug">
                        <tspan x="1190" y="12">Aug</tspan>
                    </text>
                    <text className="jul">
                        <tspan x="1020" y="12">Jul</tspan>
                    </text>
                    <text className="jun">
                        <tspan x="850" y="12">Jun</tspan>
                    </text>
                    <text className="may">
                        <tspan x="681" y="12">May</tspan>
                    </text>
                    <text className="apr">
                        <tspan x="510" y="12">Apr</tspan>
                    </text>
                    <text className="mar">
                        <tspan x="338" y="12">Mar</tspan>
                    </text>
                    <text className="feb">
                        <tspan x="169" y="12">Feb</tspan>
                    </text>
                    <text className="jan">
                        <tspan x="0" y="12">Jan</tspan>
                    </text>
                </g>

                <g className="lines" transform="translate(179.000000, 177.000000)" style={{opacity: "1"}}>
                    <rect className="line-8" fill="url(#linearGradient-line)" x="1191" y="0" width="1" height="338"></rect>
                    <rect className="line-7" fill="url(#linearGradient-line)" x="1021" y="179" width="1" height="159"></rect>
                    <rect className="line-6" fill="url(#linearGradient-line)" x="851" y="276" width="1" height="62"></rect>
                    <rect className="line-5" fill="url(#linearGradient-line)" x="680" y="179" width="1" height="159"></rect>
                    <rect className="line-4" fill="url(#linearGradient-line)" x="510" y="205" width="1" height="133"></rect>
                    <rect className="line-3" fill="url(#linearGradient-line)" x="339" y="225" width="1" height="113"></rect>
                    <rect className="line-2" fill="url(#linearGradient-line)" x="170" y="225" width="1" height="113"></rect>
                    <rect className="line-1" fill="url(#linearGradient-line)" x="0" y="269" width="1" height="69"></rect>
                </g>

                <g className="dots" transform="translate(0.000000, 92.000000)" fill="#87C4F5">
                    <circle className="dot dot-10" cx="1539.5" cy="12.5" r="12.5"></circle>
                    <circle className="dot dot-9" cx="1370.5" cy="77.5" r="12.5"></circle>
                    <circle className="dot dot-8" cx="1200.5" cy="257.5" r="12.5"></circle>
                    <circle className="dot dot-7" cx="1030.5" cy="358.5" r="12.5"></circle>
                    <circle className="dot dot-6" cx="859.5" cy="257.5" r="12.5"></circle>
                    <circle className="dot dot-5" cx="689.5" cy="282.5" r="12.5"></circle>
                    <circle className="dot dot-4" cx="518.5" cy="315.5" r="12.5"></circle>
                    <circle className="dot dot-3" cx="349.5" cy="303.5" r="12.5"></circle>
                    <circle className="dot dot-2" cx="179.5" cy="345.5" r="12.5"></circle>
                    <circle className="dot dot-1" cx="12.5" cy="308.5" r="12.5"></circle>
                </g>
            </g>
        </g>
    </g> 
</svg>

<section className="border-b border-gray-400 py-12 lg:py-32">
        <div className="container">
            <div className="flex justify-center text-center">
                <div>
                    <h2 className="h2 mb-4">Business owners trust Pulse.</h2>
                    <p>Below are real quotes from business owners.</p>
                </div>
            </div>

            <div className="home-quotes flex flex-col items-center">
                                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“I like that it provides the opportunity to test scenarios.”</div>
                        <p>You can quickly toggle income and expenses off and on to see what happens based on different scenarios to see how they impact your bottom line. When you can forecast your cash flow this quickly and easily, you’re empowered to make smarter business decisions.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“Pulse shows me how to track cash flow the right way.”</div>
                        <p>Stop stumbling your way through spreadsheets not knowing what you don’t know. Pulse shows you a simple, easy to understand chart that answers the questions you have about your cash flow.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“It’s easy to set up and understand.”</div>
                        <p>Our user friendly design makes Pulse a breeze to set up and manage your cash flow. It’s so easy that over half of our customers are able to use Pulse every day without it taking up too much of their time.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“It used to take us hours to manually do in Excel what Pulse does out of the box.”</div>
                        <p>If you’re trying to manage your cash flow in systems that aren’t specifically designed for that purpose, you’re wasting the one resource more valuable than your cash, your time.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“I like the simplicity.”</div>
                        <p>Pulse is meant to do one thing really well—cash flow management. No other product on the market is as focused on putting you in control of how cash moves in and out of your business.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“I like that Pulse is web-based.”</div>
                        <p>You can access Pulse from any computer, any time. There’s no software to install.</p>
                    </div>
                                    <div className="max-w-2/5 mt-16">
                        <div className="h4 mb-1">“I can connect it to my accounting software.”</div>
                        <p>With our direct connection to QuickBooks Online, keeping your cash flow projections and your actual performance in sync is a breeze.</p>
                    </div>
                            </div>
        </div>
    </section>



    <section className="py-12 lg:py-32 sm:text-center lg:text-left">
        <div className="container lg:flex">
            <div className="mb-12 lg:w-1/2 lg:mb-0">
                <h2 className="h2">Make smarter business decisions with Pulse.</h2>
                <p>Do you know if you can hire another employee or take some money out of the company? Should you take on that new project or should turn it down? With Pulse, you immediately see how business decisions will impact your cash in the future, which in turn gives you the confidence you need to know if the decision is right.</p>
            </div>

            <div className="w-full lg:w-1/2 lg:pl-24">
                        
    <div className="sm:w-5/6 sm-full mx-auto px-4 py-6 border bg-white text-center lg:px-8 lg:py-12">
        <img src="https://pulseapp.com/img/carl-smith-avatar.png"  alt="" aria-hidden="true" className="inline-block w-20 mb-4 rounded-100"/>

        <p className="mb-4 text-green-400 leading-snug tracking-tighter text-2xl">“Pulse makes my business smarter. We make better decisions because we can see further. You could say it has lowered our stress level by removing the fear of not knowing.”</p>
        <p className="mb-2 uppercase text-gray-600 tracking-widest text-xs font-bold">Carl Smith, Bureau of Digital</p>
        <p><a href="/customer-stories" className="text-sm">Read Customer Story →</a></p>
    </div>

            </div>
        </div>
    </section>
    <section className="py-16 lg:py-40 bg-gradient-green bg-cover bg-no-repeat bg-center" >
        <div className="container flex">
            <div className="max-w-2/5 text-left">
                <h2 className="h2 text-white">Pulse is specifically designed for small businesses.</h2>
                <p className="text-white">Our customers include creative and technology agencies, service providers, restaurants, manufacturers, retail shops, contractors, freelancers, and more.</p>
                <a href="/signup" className="button">Sign Up for a Free 30-Day Trial</a>
            </div>
        </div>
    </section>


    <section className="py-10 lg:py-32">
        <div className="container">
                            <div className="flex justify-center mb-12 text-center">
                    <div className="max-w-1/2">
                                                    <h2 className="h2 mb-4">Pulse helps real businesses survive &amp; thrive.</h2>
                        
                                                    <p>Our blog features stories from real business owners with real business advice, in addition to our own insights on how you can build better cash flow habits.</p>
                                            </div>
                </div>
            
                                        <div className="-mx-4 md:flex md:flex-wrap">
                                            <div className="p-4 md:flex md:w-1/2 lg:w-1/3">
                                            <a href="/blog" className="block-blog block no-underline group border hover:border-green-400 lg:hover:shadow-card">
        <div className="box">
                            <div className="image"><img src={image3}/></div>
            
            <div className="words-container pt-3 px-4 pb-5 lg:pt-4 lg:pb-6 lg:px-6">
                <div className="pt-2 spacing-32 text-xs text-gray-600 uppercase tracking-widest">Survive &amp; Thrive</div>
                <div className="pt-1 text-xl text-gray-800 leading-none">Growth in a Downturn: How Arash Fayz of LA Tutoring Pivoted After An 80% Client Drop</div>
                <div className="pt-2 text-gray-700 font-normal tracking-tight leading-snug">Arash Fayz of LA Tutors knew he needed to change his business model when the pandemic hit. Here’s how he scaled his tutoring business after an 80% drop in clients.</div>
                <div className="pt-2 text-sm text-green-400 underline leading-snug">Read More →</div>
            </div>
        </div>
    </a>

                        </div>
                                            <div className="p-4 md:flex md:w-1/2 lg:w-1/3">
                                            <a href="/blog" className="block-blog block no-underline group border hover:border-green-400 lg:hover:shadow-card">
        <div className="box">
                            <div className="image"><img src={image2}/></div>
            
            <div className="words-container pt-3 px-4 pb-5 lg:pt-4 lg:pb-6 lg:px-6">
                <div className="pt-2 spacing-32 text-xs text-gray-600 uppercase tracking-widest">Entrepreneurship</div>
                <div className="pt-1 text-xl text-gray-800 leading-none">Monetizing a Network: How Jodi Brandstetter Started Her Second Business</div>
                <div className="pt-2 text-gray-700 font-normal tracking-tight leading-snug">STEM talent consultant Jodi Brandstetter started her second business during the pandemic—a business book publishing network. Here’s how she made it work.</div>
                <div className="pt-2 text-sm text-green-400 underline leading-snug">Read More →</div>
            </div>
        </div>
    </a>

                        </div>
                                            <div className="p-4 md:flex md:w-1/2 lg:w-1/3">
                                            <a href="/blog" className="block-blog block no-underline group border hover:border-green-400 lg:hover:shadow-card">
        <div className="box">
                            <div className="image"><img src={image}/></div>
            
            <div className="words-container pt-3 px-4 pb-5 lg:pt-4 lg:pb-6 lg:px-6">
                <div className="pt-2 spacing-32 text-xs text-gray-600 uppercase tracking-widest">Pro Tips</div>
                <div className="pt-1 text-xl text-gray-800 leading-none">5 Steps to Optimizing A Services Business from Brogan Renshaw, Founder of FireWire Digital</div>
                <div className="pt-2 text-gray-700 font-normal tracking-tight leading-snug">Brogan Renshaw filled a gap in his local market by starting an SEO agency, FireWire Digital. Here’s what he’s learned from niching down and streamlining his business.</div>
                <div className="pt-2 text-sm text-green-400 underline leading-snug">Read More →</div>
            </div>
        </div>
    </a>

                        </div>
                                    </div>
                    </div>
    </section>
    <Footer/>
    
    </>
  </> 
  );
}

export default Main;
