import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Presentation Page</title>
        <meta property="og:title" content="Presentation Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo">
            <img
              alt="image"
              src="/playground_assets/smkr%20logo%20%E2%80%93%2011.svg"
              className="home-image"
            />
          </div>
          <div className="home-links-container">
            <a href="#services" className="home-link Anchor">
              services
            </a>
            <a href="#about-us" className="home-link01 Anchor">
              About Us
            </a>
            <a href="#contact" className="home-link02 Anchor">
              contact
            </a>
          </div>
          <div className="home-cta-container">
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img
                alt="image"
                src="/playground_assets/default-img.svg"
                className="home-image1"
              />
              <div data-role="CloseMobileMenu" className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container1">
                <a href="#features" className="home-link03 Anchor">
                  features
                </a>
                <a href="#services" className="home-link04 Anchor">
                  services
                </a>
                <a href="#about-us" className="home-link05 Anchor">
                  About Us
                </a>
                <a href="#contact" className="home-link06 Anchor">
                  contact
                </a>
              </div>
              <button className="home-cta-btn Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading">SMKR Consultancy</h1>
          <span className="home-text">
            <span>
              SMKR Consultancy provides a niche set of services addressing the
              problems faced by organizations to get the right-fit skills to
              support their business and know-how in setting up core IT
              teams/Center of Excellences on niche IT domain areas.
            </span>
            <br></br>
            <br className="home-text003"></br>
            <span className="home-text004">Core Services:</span>
            <br></br>
            <span>IT HR Requirement</span>
            <br></br>
            <span>IT Advisory &amp; Consulting</span>
            <br></br>
            <span>IT Delivery and QA</span>
            <br></br>
          </span>
        </div>
        <div className="home-image2">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHx0ZWNobm9sb2d5fGVufDB8fHx8MTY3Mjc3MzQxNQ&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1500"
            className="home-image3"
          />
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="about-us" className="home-about-us">
        <div className="home-heading-container">
          <h2 className="home-heading1 Section-Heading">About Us</h2>
          <span className="home-secondary-text Section-Text">
            {' '}
            Get to know us better
          </span>
        </div>
        <div className="home-text-container">
          <span className="home-text012">
            <span>
              SMKR Consultancy incorprated by seasoned professionals in HR &amp;
              IT Consultancy, together with over 35 years of experience in
              Technology sector providing, boutique recruitment services,
              advisory, consulting on niche software engineering areas and
              incubating &amp; scaling value driven Centers Of Excellence (CoE).
            </span>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
          </span>
        </div>
        <a href="#services" className="home-link07">
          <svg viewBox="0 0 1024 1024" className="home-icon10">
            <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
          </svg>
        </a>
      </div>
      <div className="home-section-separator1"></div>
      <h2 className="home-text021">
        <br className="Section-Heading"></br>
        <br className="Section-Heading"></br>
        <br className="Section-Heading"></br>
        <span className="Section-Heading">Our Services</span>
        <br></br>
      </h2>
      <div className="home-section-separator2"></div>
      <div id="services" className="home-services">
        <div className="home-service-card">
          <div className="home-card-content">
            <h3 className="home-text027 BigCard-Heading">IT HR Recruitment</h3>
            <span className="home-text028 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a href="#features1" className="home-link08 button Anchor">
              READ MORE
            </a>
          </div>
        </div>
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text029 BigCard-Heading">
              <span>IT Advisory</span>
              <br></br>
              <span> &amp; </span>
              <span> Consulting</span>
            </h3>
            <span className="home-text034 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a href="#features2" className="home-link09 button Anchor">
              READ MORE
            </a>
          </div>
        </div>
        <div className="home-service-card2">
          <div className="home-card-content2">
            <h3 className="home-text035 BigCard-Heading">
              <span>
                IT Delivery
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>&amp; </span>
              <span>
                QA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </h3>
            <span className="home-text040 Card-Text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a href="#features3" className="home-link10 Anchor button">
              READ MORE
            </a>
          </div>
        </div>
      </div>
      <span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </span>
      <div className="home-section-separator3"></div>
      <div className="home-container2">
        <div id="features1" className="home-i-t-h-r-recruitment">
          <div className="home-heading-container1">
            <h2 className="home-text054 Section-Heading">IT HR Recruitment</h2>
          </div>
          <div className="home-cards-container">
            <div className="home-feature-card">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxpdCUyMGlufGVufDB8fHx8MTY3Mjg0NDE1OA&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image4"
              />
              <span className="home-heading2 BigCard-Heading">Why</span>
              <span className="home-text055">
                We know the IT industry as we are a part of IT. We assure first
                time screen select.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="home-feature-card1">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1616587894289-86480e533129?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxpbnRlcnZpZXd8ZW58MHx8fHwxNjcyODQ0MjAx&amp;ixlib=rb-4.0.3&amp;w=200"
                className="home-image5"
              />
              <span className="home-heading3 BigCard-Heading">What</span>
              <span className="home-text056">
                <span className="home-text057">
                  Drastically reduce hiring cycle time.
                </span>
                <br className="home-text058"></br>
                <span className="home-text059">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text060"></br>
                <span className="home-text061">
                  We take ownership to present you the right talent, resulting
                  in lower overall accquisition costs.
                </span>
                <br className="home-text062"></br>
                <span className="home-text063">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text064"></br>
                <span className="home-text065">
                  Faster GTM and lower onboarding cost
                </span>
                <span className="home-text066">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="home-feature-card2">
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE3fHxpbnRlcnZpZXd8ZW58MHx8fHwxNjcyODQ0MjAx&amp;ixlib=rb-4.0.3&amp;w=300"
                className="home-image6"
              />
              <span className="home-heading4 BigCard-Heading">How</span>
              <span className="home-text067">
                <span>
                  Proven track record of sourcing right fit profiles using
                  proprietary outcome based talent search methodology.
                </span>
                <br className="Card-Text"></br>
                <br></br>
                <span>
                  Inhouse &amp; empanelled technical experts across domains to
                  evaluate and screen talent.
                </span>
              </span>
            </div>
            <a href="#services" className="home-link11">
              <svg viewBox="0 0 1024 1024" className="home-icon12">
                <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
              </svg>
            </a>
          </div>
          <div className="home-heading-container2">
            <h2 className="home-text072 Section-Heading">
              <br></br>
              <br></br>
              <span>Candidate Service</span>
            </h2>
          </div>
          <span className="home-text076">
            <span className="home-text077">
              Potential Candidates are at the core of the recruitment journey
              for any organization. At SMKR, we offer candidate centric services
              to help the potential candidates to put their best foot forward in
              their career growth journey
            </span>
            <br></br>
            <span>
              SMKR Consultancy, offer personalized services to Candidates on:
            </span>
            <br></br>
            <span>1. Career Counselling</span>
            <br></br>
            <span>2. Resume writing and review</span>
            <br></br>
            <span>3. Negotiation tips</span>
          </span>
          <a href="#services" className="home-link12">
            <svg viewBox="0 0 1024 1024" className="home-icon14">
              <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div id="features2" className="home-i-t-advisory-consultancy">
        <div className="home-heading-container3">
          <h2 className="home-text086 Section-Heading">
            IT Advisory &amp; Consultancy
          </h2>
          <span className="home-text087">
            <br></br>
            <br></br>
          </span>
        </div>
        <span className="home-text090">
          <span>
            IT Advisory &amp; Consultancy services across IT Architecture,
            Software Engineering, Performance Engineering, User Experience and
            related areas.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            This is supported by a wide network of empanelled consultants who
            are industry practitioners 
          </span>
        </span>
        <a href="#services" className="home-link13">
          <svg viewBox="0 0 1024 1024" className="home-icon16">
            <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
          </svg>
        </a>
        <div className="home-section-separator4"></div>
      </div>
      <div className="home-section-separator5"></div>
      <div id="features3" className="home-i-t-delivery-q-a">
        <div className="home-heading-container4">
          <h2 className="home-text094 Section-Heading">IT Delivery &amp; QA</h2>
        </div>
        <span className="home-text095">
          <span>
            SMKR can help organizations by conducting due diligence followed by
            strategy to incubate tailored Centres of Excellence (CoE) for
            various units across IT Delivery
          </span>
          <br className="home-text097"></br>
          <br className="home-text098"></br>
          <span className="home-text099">Key areas of Expertise:</span>
          <br className="home-text100"></br>
          <span>
            1. Development &amp; delivery of custom web-based &amp; mobile
            applications.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br className="home-text102"></br>
          <span>
            2. QA verticals for Functional Testing, Test case Automation,
            Performance Testing and Security Testing.
          </span>
          <br className="home-text104"></br>
          <span>
            3. DevOps, Software Engineering and Performance Engineering
          </span>
          <br className="home-text106"></br>
          <br className="home-text107"></br>
          <span>
            The value-centric models benefit both the services organization and
            their customers.
          </span>
          <br className="home-text109"></br>
          <br className="home-text110"></br>
          <br></br>
          <br></br>
        </span>
        <a href="#services" className="home-link14">
          <svg viewBox="0 0 1024 1024" className="home-icon18">
            <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
          </svg>
        </a>
      </div>
      <div className="home-section-separator6"></div>
      <div className="home-section-separator7"></div>
      <div id="contact" className="home-contact">
        <div className="home-content-container">
          <h2 className="home-text113 Section-Heading">Contact us</h2>
          <div className="home-locations-container">
            <div className="home-location-1">
              <span className="home-heading5">Bangalore Office</span>
              <div className="home-email">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                </svg>
                <span>reachus@smkr.in</span>
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon22"
                >
                  <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
                </svg>
                <span className="Section-Text">    +91 829 629 SMKR</span>
                <a
                  href="https://www.linkedin.com/in/smkrc"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon24"
                  >
                    <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1512428559087-560fa5ceab42?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxjb250YWN0JTIwdXN8ZW58MHx8fHwxNjcyODQ0ODMw&amp;ixlib=rb-4.0.3&amp;w=1500"
          className="home-image7"
        />
        <a href="#services" className="home-link16">
          <svg viewBox="0 0 1024 1024" className="home-icon26">
            <path d="M512 32l-480 480h288v512h384v-512h288z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Home
