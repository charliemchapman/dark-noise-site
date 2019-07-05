import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Link from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fortawesome/fontawesome-free/css/all.min.css"

import configs from "../../site-config"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Dark Noise" keywords={configs.app_keywords} />

    <div
      className="imageWrapper"
      style={{
        backgroundImage: `linear-gradient(${configs.cover_overlay_color_rgba},${
          configs.cover_overlay_color_rgba
        }),url(${data.headerImage.childImageSharp.fluid.src})`,
        height: "114px",
        borderRadius: "0"
      }}
    >
      <div className="headerBackground">
        <div className="container">
          <header>
            <Link to="/" className="logo">
              <div className="appIconShadow">
                <svg width="0" height="0">
                  <defs>
                    <clipPath id="shape">
                      <path
                        id="shape"
                        d="M6181.23,233.709v-1.792c0-.5-0.02-1-0.02-1.523a24.257,24.257,0,0,0-.28-3.3,11.207,11.207,0,0,0-1.04-3.132,10.683,10.683,0,0,0-1.95-2.679,10.384,10.384,0,0,0-2.68-1.943,10.806,10.806,0,0,0-3.13-1.038,19.588,19.588,0,0,0-3.3-.285c-0.5-.017-1-0.017-1.52-0.017h-22.39c-0.51,0-1.01.017-1.53,0.017a24.041,24.041,0,0,0-3.3.285,11.009,11.009,0,0,0-3.13,1.038,10.491,10.491,0,0,0-4.62,4.622,10.893,10.893,0,0,0-1.04,3.132,19.2,19.2,0,0,0-.28,3.3c-0.02.5-.02,1-0.02,1.523v22.392c0,0.5.02,1,.02,1.524a24.257,24.257,0,0,0,.28,3.3,10.9,10.9,0,0,0,1.04,3.132,10.491,10.491,0,0,0,4.62,4.622,11.04,11.04,0,0,0,3.13,1.038,19.891,19.891,0,0,0,3.3.285c0.51,0.017,1.01.017,1.53,0.017h22.39c0.5,0,1-.017,1.52-0.017a24.221,24.221,0,0,0,3.3-.285,10.836,10.836,0,0,0,3.13-1.038,10.408,10.408,0,0,0,2.68-1.943,10.683,10.683,0,0,0,1.95-2.679,11.217,11.217,0,0,0,1.04-3.132,20.257,20.257,0,0,0,.28-3.3c0.02-.5.02-1,0.02-1.524v-20.6h0Z"
                        transform="translate(-6131 -218)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Img
                  fluid={data.headerIcon.childImageSharp.fluid}
                  className="headerIcon"
                />
              </div>
              <p className="headerName">{configs.app_name}</p>
            </Link>
            <nav>
              <ul>
                {configs.presskit_download_link && (
                  <li>
                    <a href={configs.presskit_download_link}>Press Kit</a>
                  </li>
                )}
                <li>
                <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className="privacyPolicy">
          <h1>Privacy Policy</h1> <p>
                    Charles Chapman built the Dark Noise app as
                    a Commercial app. This SERVICE is provided by
                    Charles Chapman  and is intended for
                    use as is.
                  </p> <p>
                    This page is used to inform visitors regarding
                    my policies with the collection, use, and
                    disclosure of Personal Information if anyone decided to use
                    my Service.
                  </p> <p>
                    If you choose to use my Service, then you agree
                    to the collection and use of information in relation to this
                    policy. The Personal Information that I collect is
                    used for providing and improving the Service.
                    I will not use or share your
                    information with anyone except as described in this Privacy
                    Policy.
                  </p> <p>
                    The terms used in this Privacy Policy have the same meanings
                    as in our Terms and Conditions, which is accessible at
                    Dark Noise unless otherwise defined in this Privacy
                    Policy.
                  </p> <p><strong>Information Collection and Use</strong></p> <p>
                    For a better experience, while using our Service,
                    I may require you to provide us with certain
                    personally identifiable information. The
                    information that I request will be
                    retained on your device and is not collected by me in any way.
                  </p> <p>
                    The app does use third party services that may collect
                    information used to identify you.
                  </p> <div><p>
                      Link to privacy policy of third party service providers
                      used by the app
                    </p> <ul><li><a href="https://firebase.google.com/policies/analytics" >Firebase Analytics</a></li><li><a href="http://try.crashlytics.com/terms/privacy-policy.pdf" >Crashlytics</a></li></ul></div> <p><strong>Log Data</strong></p> <p>
                    I want to inform you that whenever
                    you use my Service, in a case of an error in the
                    app I collect data and information (through third
                    party products) on your phone called Log Data. This Log Data
                    may include information such as your device Internet
                    Protocol (“IP”) address, device name, operating system
                    version, the configuration of the app when utilizing
                    my Service, the time and date of your use of the
                    Service, and other statistics.
                  </p> <p><strong>Cookies</strong></p> <p>
                    Cookies are files with a small amount of data that are
                    commonly used as anonymous unique identifiers. These are
                    sent to your browser from the websites that you visit and
                    are stored on your device's internal memory.
                  </p> <p>
                    This Service does not use these “cookies” explicitly.
                    However, the app may use third party code and libraries that
                    use “cookies” to collect information and improve their
                    services. You have the option to either accept or refuse
                    these cookies and know when a cookie is being sent to your
                    device. If you choose to refuse our cookies, you may not be
                    able to use some portions of this Service.
                  </p> <p><strong>Service Providers</strong></p> <p>
                    I may employ third-party companies
                    and individuals due to the following reasons:
                  </p> <ul><li>To facilitate our Service;</li> <li>To provide the Service on our behalf;</li> <li>To perform Service-related services; or</li> <li>To assist us in analyzing how our Service is used.</li></ul> <p>
                    I want to inform users of this
                    Service that these third parties have access to your
                    Personal Information. The reason is to perform the tasks
                    assigned to them on our behalf. However, they are obligated
                    not to disclose or use the information for any other
                    purpose.
                  </p> <p><strong>Security</strong></p> <p>
                    I value your trust in providing us
                    your Personal Information, thus we are striving to use
                    commercially acceptable means of protecting it. But remember
                    that no method of transmission over the internet, or method
                    of electronic storage is 100% secure and reliable, and
                    I cannot guarantee its absolute security.
                  </p> <p><strong>Links to Other Sites</strong></p> <p>
                    This Service may contain links to other sites. If you click
                    on a third-party link, you will be directed to that site.
                    Note that these external sites are not operated by
                    me. Therefore, I strongly advise you to
                    review the Privacy Policy of these websites.
                    I have no control over and assume no
                    responsibility for the content, privacy policies, or
                    practices of any third-party sites or services.
                  </p> <p><strong>Children’s Privacy</strong></p> <p>
                    These Services do not address anyone under the age of 13.
                    I do not knowingly collect personally
                    identifiable information from children under 13. In the case
                    I discover that a child under 13 has provided
                    me with personal information,
                    I immediately delete this from our servers. If you
                    are a parent or guardian and you are aware that your child
                    has provided us with personal information, please contact
                    me so that I will be able to do
                    necessary actions.
                  </p> <p><strong>Changes to This Privacy Policy</strong></p> <p>
                    I may update our Privacy Policy from
                    time to time. Thus, you are advised to review this page
                    periodically for any changes. I will
                    notify you of any changes by posting the new Privacy Policy
                    on this page. These changes are effective immediately after
                    they are posted on this page.
                  </p> <p><strong>Contact Us</strong></p> <p>
                    If you have any questions or suggestions about
                    my Privacy Policy, do not hesitate to contact
                    me at dev.charliemchapman@gmail.com.
                  </p> <p>
                    This privacy policy page was created at <a href="https://privacypolicytemplate.net">privacypolicytemplate.net</a> and modified/generated by <a href="https://app-privacy-policy-generator.firebaseapp.com/" > App Privacy Policy Generator</a></p>

          </div>
          <footer>
            <p className="footerText">
              Made by{" "}
              {configs.your_link ? (
                <a href={configs.your_link}>{configs.your_name}</a>
              ) : (
                `${configs.your_name}`
              )}
              {configs.your_city && ` in ${configs.your_city}`}
            </p>
            <div className="footerIcons">
              {configs.facebook_username && (
                <a
                  href={`https://facebook.com/${configs.facebook_username}`}
                  aria-label="Facebook"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-facebook fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.linkedin_username && (
                <a
                  href={`https://www.linkedin.com/in/${configs.linkedin_username}`}
                  aria-label="LinkedIn"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-linkedin fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.twitter_username && (
                <a
                  href={`https://twitter.com/${configs.twitter_username}`}
                  aria-label="Twitter"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-twitter fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.github_username && (
                <a
                  href={`https://github.com/${configs.github_username}`}
                  aria-label="GitHub"
                >
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fab fa-github fa-stack-1x" />
                  </span>
                </a>
              )}

              {configs.email_address && (
                <a href={`mailto:${configs.email_address}`} aria-label="Email">
                  <span className="fa-stack fa-1x">
                    <i className="socialIconBack fas fa-circle fa-stack-2x" />
                    <i className="socialIconTop fas fa-envelope fa-stack-1x" />
                  </span>
                </a>
              )}
            </div>
          </footer>
          {/*TODO: Add App Store API */}
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    headerIcon: file(relativePath: { eq: "app-icon-dark-noise-512.png" }) {
      childImageSharp {
        fluid(maxWidth: 50) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    appStore: file(relativePath: { eq: "appstore.png" }) {
      childImageSharp {
        fixed(width: 220) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    playStore: file(relativePath: { eq: "playstore.png" }) {
      childImageSharp {
        fixed(height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    iphoneScreen: file(relativePath: { glob: "screenshot/*.{png,jpg}" }) {
      childImageSharp {
        fluid(maxWidth: 350) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    videoScreen: file(
      extension: { ne: "txt" }
      relativePath: { glob: "videos/*" }
    ) {
      publicURL
      extension
    }
    appIconLarge: file(relativePath: { eq: "app-icon-dark-noise-512.png" }) {
      childImageSharp {
        fluid(maxWidth: 120) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    headerImage: file(relativePath: { eq: "headerimage.png" }) {
      childImageSharp {
        fluid(maxHeight: 714) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlack: file(relativePath: { eq: "black.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewBlue: file(relativePath: { eq: "blue.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewCoral: file(relativePath: { eq: "coral.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewWhite: file(relativePath: { eq: "white.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iphonePreviewYellow: file(relativePath: { eq: "yellow.png" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
