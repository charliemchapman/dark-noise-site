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
        <p>Download Press Kit with screenshots, promo art, and hi-res icon <a href="https://s3.us-east-2.amazonaws.com/media.charliemchapman.com/Dark_Noise_PressKit_V2_5-Mac.zip">here</a>.</p>
        <div className="presskit-hero">
          <a href="/banners/dark-noise-hero-v3-transparent.png">
            <img src="/banners/dark-noise-hero-v3-transparent.png" />
          </a>
        </div>
        <h2>Dark Noise 2.5 - Welcome to the Mac</h2>
        <p>
          Dark Noise is coming to the Mac! The sleek UI and large selection of ambient sounds you know and love are now easier than ever to use while you work.
        </p>
        <p>
          Taking advantage of the Mac platform, a new innovative "adaptive toolbar" UI allows you to shrink your window into a Mini Player to keep Dark Noise quickly accessible while taking up very little screen space. Dark Noise for Mac also features full menu support with keyboard shortcuts to feel right at home on your Mac.
        </p>
        <p>
          All of your favorite Dark Noise features are here including timers, custom mixes, widgets, and multiple themes. And with iCloud syncing, all of your custom mixes will automatically be available on your Mac.
        </p>
        <p>
          Dark Noise is available on the App Store <a href="https://apps.apple.com/us/app/dark-noise/id1465439395">here</a> and Dark Noise for Mac will release on Tuesday, May 25th as a universal app including the iPhone and iPad versions. Existing Dark Noise customers will be able to download Dark Noise for Mac for free.
        </p>
        <p>
          You can find the latest beta release <a href="https://github.com/charliemchapman/dark-noise-mac-beta/releases">here</a>.
        </p>
        <br/>
        <h3>App Store Screenshots</h3>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_01.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_01.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_02.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_02.png" />
              </a>
          </div>
        </div>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_03.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_03.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_04.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_04.png" />
              </a>
          </div>
        </div>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_05.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_05.png" />
              </a>
          </div>
        </div>
        <h2>Dark Noise 2</h2>
        <p>
          Dark Noise 2 is the next major evolution of the best ambient noise app on iOS. Mixing sounds has been the most requested feature since launch and I’m excited to announce it’s finally here! A lot of work went in to maintaining the simplicity and tight iOS integration Dark Noise is known for and I’m very proud of the results. Along with iCloud syncing, new sounds, new icons, and loads of bug fixes this is the biggest update to date.
        </p>
        <h3>New Features</h3>
        <p><strong>Create Mix • </strong> Build your own custom mix from any number of sounds. Mix multiple of the same sound for even more variety! Animated icons can be built using the new icon creator or images or animated GIFs can be imported from the Photo Library.</p>
        <p><strong>iCloud Syncing • </strong> Custom mixes and favorites will now sync to all of your devices using iCloud! No need to sign in or configure anything, your data will simply follow you to all of your Apple devices.</p>
        <p><strong>8 New Sounds • </strong> New sounds have been added to the Dark Noise catalogue for playing on their own or added to mixes including: <b>Rain on Tent</b>,<b> Wind Chimes</b>,<b> Windy Trees</b>,<b> Seagulls</b>,<b> Lake</b>,<b> Ship Deck</b>,<b> Flag</b>, and<b> Lullaby</b></p>
        <p><strong>iPad Pointer Support • </strong> Navigate Dark Noise 2 using a trackpad or mouse with full pointer support on the iPad.</p>
        <p><strong>New Icons • </strong> Inspired by the new design of macOS Big Sur a skeuomorphic icon was added to the list of custom icons. And the new Launched icon is in honor of the podcast of the same name by Dark Noise developer Charlie.</p>
        <p><strong>And More! • </strong> Bug fixes, improved shortcuts support, and a rewritten audio engine, and even a new “Auto Volume” experimental feature round out the biggest update yet.</p>
        <p>
          Dark Noise is available on the App Store <a href="https://apps.apple.com/us/app/dark-noise/id1465439395">here</a> and Dark Noise 2 will release on Monday, July 20th.  
        </p>
        <h2>Dark Noise 1.0</h2>
        <p>
          Dark Noise is a delightful ambient noise app designed to be simple to use, with a lot of powerful features under the hood.  Each of the 30+ high quality ambient noises feature a custom built animated icon that brings the sound to life.
        </p>
        <p>
          Let's be honest, an ambient noise app should play your noise and get out of your way as quickly as possible.  Dark Noise was designed with this in mind.
        </p>
        <p>
          Power users will enjoy faster access to Dark Noise with Siri Shortcuts integrations, Today Extension widgets, and home screen quick actions.  Dark Noise features over 20 custom home screen icons and has alternate light and pure black themes.
        </p>
        <p>Dark Noise 1.0 press kit is available <Link to="/presskit-v1">here</Link>.</p>
        <h2>Dark Noise 2 Video Promo</h2>
        <div className="presskit-video">
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/D4dbuYqoHmA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
        <h3>iPhone</h3>
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
        <h3>iPad</h3>
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
        <h3>Mac</h3>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_01.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_01.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_02.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_02.png" />
              </a>
          </div>
        </div>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_03.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_03.png" />
              </a>
          </div>
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_04.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_04.png" />
              </a>
          </div>
        </div>
        <div className="presskit-mac-screenshots">
          <div className="presskit-screenshot">
              <a href="/screenshots/app-store/mac/screenshot_mac_05.png">
                <img src="/screenshots/app-store/mac/screenshot_mac_05.png" />
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
        <p>For any questions or to request a promo code email me at <a href="mailto:charlie@darknoise.app">charlie@darknoise.app</a></p>
      </div>
  </Layout>
)

export default IndexPage
