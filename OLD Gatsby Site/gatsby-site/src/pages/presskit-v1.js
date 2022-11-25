import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Press Kit" />
    <div className="presskit-body">
      <h2>Press Kit</h2>
        <p>Download full Press Kit with screenshots, promo art, and hi-res icon <a href="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/Dark_Noise_PressKit.zip">here</a>.</p>
        <div className="presskit-hero">
          <a href="/banners/dark-noise-hero-transparent.png">
            <img src="/banners/dark-noise-hero-transparent.png" />
          </a>
        </div>
        <h2>Dark Noise</h2>
        <p>
          Dark Noise is a delightful ambient noise app designed to be simple to use, with a lot of powerful features under the hood.  Each of the 30+ high quality ambient noises feature a custom built animated icon that brings the sound to life.
        </p>
        <p>
          Let's be honest, an ambient noise app should play your noise and get out of your way as quickly as possible.  Dark Noise was designed with this in mind.
        </p>
        <p>
          Power users will enjoy faster access to Dark Noise with Siri Shortcuts integrations, Today Extension widgets, and home screen quick actions.  Dark Noise features over 20 custom home screen icons and has alternate light and pure black themes.
        </p>
        <p>
          Dark Noise is available for pre-order <a href="https://apps.apple.com/us/app/dark-noise/id1465439395">here</a> and will release on Tuesday, August 27th for the introductory price of $3.99.  
        </p>
        <h2>Launch Trailer</h2>
        <div className="presskit-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Q7BDtu9CkAI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h2>Promo Images</h2>
        <div className="presskit-banner">
          <a href="/banners/dark-noise-banner-01-wAppStore.png">
            <img src="/banners/dark-noise-banner-01-wAppStore.png" />
          </a>
        </div>
        <div className="presskit-banner">
          <a href="/banners/dark-noise-banner-02-wAppStore.png">
            <img src="/banners/dark-noise-banner-02-wAppStore.png" />
          </a>
        </div>
        <div className="presskit-iphone-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_01.png">
                <img src="/screenshots/app-store/screenshot_iphone_01.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_02.png">
                <img src="/screenshots/app-store/screenshot_iphone_02.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_03.png">
                <img src="/screenshots/app-store/screenshot_iphone_03.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_04.png">
                <img src="/screenshots/app-store/screenshot_iphone_04.png" />
              </a>
          </div>
        </div>
        <div className="presskit-iphone-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_05.png">
                <img src="/screenshots/app-store/screenshot_iphone_05.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_06.png">
                <img src="/screenshots/app-store/screenshot_iphone_06.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_07.png">
                <img src="/screenshots/app-store/screenshot_iphone_07.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_iphone_08.png">
                <img src="/screenshots/app-store/screenshot_iphone_08.png" />
              </a>
          </div>
        </div>
        <div className="presskit-ipad-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_01.png">
                <img src="/screenshots/app-store/screenshot_ipad_01.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_02.png">
                <img src="/screenshots/app-store/screenshot_ipad_02.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_03.png">
                <img src="/screenshots/app-store/screenshot_ipad_03.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_04.png">
                <img src="/screenshots/app-store/screenshot_ipad_04.png" />
              </a>
          </div>
        </div>
        <div className="presskit-ipad-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_05.png">
                <img src="/screenshots/app-store/screenshot_ipad_05.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_06.png">
                <img src="/screenshots/app-store/screenshot_ipad_06.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_07.png">
                <img src="/screenshots/app-store/screenshot_ipad_07.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/screenshot_ipad_08.png">
                <img src="/screenshots/app-store/screenshot_ipad_08.png" />
              </a>
          </div>
        </div>
        {/* <h2>Praise for Dark Noise</h2>
        <p>TBD 🤪</p>
        <h2>Awards</h2>
        <p>TBD 🤪</p> */}
        <h2>About the Developer</h2>
        <p>👋 Hi, I'm Charlie Chapman</p>
        <p>I'm a software engineer in St. Louis, Missouri by day, and a designer, motion graphics artist, podcaster, and indie dev by night.</p>
        <p>I've been building software for over 8 years, and I'm pretty new to the iOS scene. I've been blown away by the kindness and helpfulness of the iOS development community so far, and I'm excited to finally join them on the store.</p>
        <p>This app also wouldn't be possible without the patience and vigilant beta testing of my wife. My two sons also contributed with their own hand drawn alternate icons featured in the app!</p>
        <h2>Contact</h2>
        <p>For any questions or to request a promo code email me at <a href="mailto:dev.charliemchapman@gmail.com">dev.charliemchapman@gmail.com</a></p>
      </div>
  </Layout>
)

export default IndexPage
