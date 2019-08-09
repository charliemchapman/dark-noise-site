(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(n,e,t){"use strict";t.r(e);var i=t(0),a=t.n(i),o=t(151),r=t(150);e.default=function(){return a.a.createElement(o.a,null,a.a.createElement(r.a,{title:"404: Not found"}),a.a.createElement("h1",null,"NOT FOUND"),a.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(n,e){n.exports={appstore_link:null,playstore_link:null,google_analytics_ID:null,presskit_download_link:null,video_or_screenshot:"screenshot",app_url:"https://darknoise.app/",path_prefix:"/",app_name:"Dark Noise",app_price:null,app_description:"Simple. Fast. White noise, refined. For iPhone and iPad.",app_keywords:["White Noise","Ambient Noise","Meditation"],your_name:"Charlie Chapman",your_link:"https://charliemchapman.com",your_city:"St. Louis",email_address:"dev.charliemchapman@gmail.com",linkedin_username:null,facebook_username:null,instagram_username:null,twitter_username:"DarkNoiseApp",github_username:null,youtube_username:null,features:[{title:"Simple",description:"A beautiful, clean interface makes it easy to find and play your favorite noises.",fontawesome_icon_name:"star"},{title:"Fast",description:"With widgets, quick actions, and Siri Shortcuts support, you can start up a noise in seconds, in any environment.",fontawesome_icon_name:"bolt"},{title:"1 Price, All Noises",description:"All noises are included with 1 price, so you'll have access to every noise you see.",fontawesome_icon_name:"dollar-sign"}],header_background:"rgba(0, 0, 0, 0.1)",topbar_title_color:"#ffffff",cover_overlay_color_rgba:"rgba(40, 32, 51, 0.9)",device_color:"black",body_background_color:"#0a0117",primary_text_color:"#000",content_width:"1170px",font:'"Helvetica Neue", sans-serif',link_color:"#ab73ff",app_title_color:"#ffffff",app_price_color:"#ffffff",app_description_color:"#ffffff",feature_title_color:"#ffffff",feature_text_color:"#999999",feature_icons_foreground_color:"#802bff",feature_icons_background_color:"#f6f6f6",social_icons_foreground_color:"#666666",social_icons_background_color:"#e6e6e6",footer_text_color:"#888888"}},150:function(n,e,t){"use strict";var i=t(152),a=t(0),o=t.n(a),r=t(4),p=t.n(r),l=t(158),c=t.n(l);function d(n){var e=n.description,t=n.lang,a=n.meta,r=n.keywords,p=n.title,l=i.data.site,d=e||l.siteMetadata.description;return o.a.createElement(c.a,{htmlAttributes:{lang:t},title:p,titleTemplate:l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:p},{property:"og:description",content:d},{property:"og:type",content:"website"},{property:"og:image",content:"https://darknoise.app/app-icon-dark-noise-512.png"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:p},{name:"twitter:description",content:d}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(a)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:p.a.string,lang:p.a.string,meta:p.a.array,keywords:p.a.arrayOf(p.a.string),title:p.a.string.isRequired},e.a=d},151:function(n,e,t){"use strict";var i=t(0),a=t.n(i),o=t(4),r=t.n(o),p=t(156),l=t.n(p),c=t(157),d=t(149),s=t.n(d);function h(){var n=l()(["\n  html {\n    font-size: 62.5%;\n    font-family: ",";\n    line-height: 1;\n  }\n\n  body {\n    font-size: 2rem;\n    background-color: ",";\n  }\n\n  h1 {\n    font-size: 3rem;\n  }\n\n  h2 {\n    font-size: 2rem;\n  }\n\n  h3 {\n    font-size: 2rem;\n  }\n\n  // Better font rendering\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: ",";\n  }\n\n  a:link,\n  a:hover,\n  a:visited,\n  a:active {\n    color: ",";\n    text-decoration: none;\n  }\n\n  // Various resets\n  *,\n  *::before,\n  *::after {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n  }\n\n  .imageWrapper {\n    // Sets the background image in the header area\n    height: 714px;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: top;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerImage {\n    position: unset !important;\n    height: 0 !important;\n    display: block !important;\n    \n  }\n  .headerImage > div{\n    padding-bottom: 0 !important;\n  }\n  .headerImage img {\n    z-index: -1;\n    border-radius: 0px 0px 40px 40px;\n  }\n\n  .headerBackground {\n    height: 115px;\n    background-color: ",";\n  }\n\n  .container {\n    // Set up the container for the site content\n    display: grid;\n    margin: auto;\n    max-width: ",';\n    padding-left: 15px;\n    padding-right: 15px;\n    grid-template-columns: repeat(12, 1fr);\n    grid-template-rows: 115px 876px auto auto;\n    grid-column-gap: 30px;\n    grid-template-areas:\n      "h h h h h h h h h h h h"\n      "p p p p p i i i i i i i"\n      "c c c c c c c c c c c c"\n      "f f f f f f f f f f f f";\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .container {\n      // Set up the container for the site content\n      grid-template-rows: 115px 811px auto auto;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .container {\n      grid-column-gap: 0px;\n      grid-template-columns: 1;\n      grid-template-rows: 115px auto auto auto auto;\n      grid-template-areas:\n        "h h h h h h h h h h h h"\n        "i i i i i i i i i i i i"\n        "p p p p p p p p p p p p"\n        "c c c c c c c c c c c c"\n        "f f f f f f f f f f f f";\n    }\n  }\n\n  header {\n    grid-area: h;\n    display: flex;\n  }\n\n  .logo {\n    display: flex;\n    width: 100%;\n    justify-content: flex-start;\n    align-items: center;\n    height: 115px;\n  }\n\n  .logo > p {\n    color: ',";\n    display: flex;\n    font-weight: bold;\n    padding-bottom: 1px;\n  }\n\n  .headerIcon {\n    width: 50px;\n    height: 50px;\n    -webkit-clip-path: url(#shape);\n    clip-path: url(#shape);\n    margin-right: 15px;\n  }\n\n  // Navigation Links\n  nav {\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n    height: 115px;\n  }\n\n  nav > ul {\n    color: #fff;\n    display: flex;\n    list-style-type: none;\n  }\n\n  nav > ul li {\n    padding-left: 30px;\n    text-align: right;\n  }\n\n  nav > ul li:first-child {\n    padding-left: 0px;\n  }\n\n  nav > ul li a:link,\n  nav > ul li a:visited {\n    text-decoration: none;\n    color: rgba(",", 0.6);\n  }\n\n  nav > ul li a:hover,\n  nav > ul li a:active {\n    text-decoration: none;\n    color: rgba(",", 1);\n  }\n\n  // App Title, Price, Description and Links\n\n  .appInfo {\n    grid-area: i;\n    display: flex;\n    flex-wrap: wrap;\n    padding-top: 140px;\n    align-content: flex-start;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appInfo {\n      padding-top: 50px;\n      justify-content: center;\n    }\n  }\n\n  .appIconShadow {\n    display: flex;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  .appIconLarge {\n    width: 120px;\n    height: 120px;\n    -webkit-clip-path: url(#shape120);\n    clip-path: url(#shape120);\n  }\n\n  .appNamePriceContainer {\n    display: flex;\n    flex: 0 1 auto;\n    flex-direction: column;\n    align-items: start;\n    justify-content: center;\n    margin-left: 30px;\n  }\n\n  .appName {\n    color: ",";\n  }\n\n  .appPrice {\n    color: ",";\n    font-weight: normal;\n    margin-top: 13px;\n  }\n\n  @media only screen and (max-width: 768px) {\n    .appNamePriceContainer {\n      width: 100%;\n      margin-left: 0px;\n      align-items: center;\n      justify-content: center;\n    }\n\n    .appName {\n      margin-top: 30px;\n      text-align: center;\n    }\n\n    .appPrice {\n      margin-top: 13px;\n      text-align: center;\n    }\n  }\n\n  .appDescriptionContainer {\n    font-size: 2.5rem;\n    font-weight: normal;\n    width: 100%;\n    align-items: flex-start;\n    margin-top: 45px;\n    flex: 0 1 auto;\n    line-height: 1.5;\n  }\n\n  .appDescription {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 992px) {\n    .appDescription {\n      text-align: center;\n    }\n  }\n\n  .downloadButtonsContainer {\n    display: inline-block;\n    margin-top: 42px;\n    filter: drop-shadow(0px 5px 10px rgba(#000, 0.1)) drop-shadow(0px 1px 1px rgba(#000, 0.2));\n  }\n\n  @media only screen and (max-width: 992px) {\n    .downloadButtonsContainer {\n      text-align: center;\n    }\n  }\n\n  .playStore {\n    height: 75px;\n    margin-right: 24px;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .playStore {\n      margin-right: 24px;\n      margin-bottom: 0px;\n    }\n  }\n\n  @media only screen and (max-width: 528px) {\n    .playStore {\n      margin-right: 0px;\n      margin-bottom: 24px;\n    }\n  }\n\n  .appStore {\n    height: 75px;\n  }\n\n  // iPhone Device Preview\n\n  .iphonePreview {\n    grid-area: p;\n    background-size: 400px auto;\n    background-repeat: no-repeat;\n    margin-top: 68px;\n  }\n\n  .iphoneScreen {\n    width: 349px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer {\n    width: 349px;\n    height: 755px;\n    -webkit-clip-path: url(#screenMask);\n    clip-path: url(#screenMask);\n    margin-left: 26px;\n    margin-top: 23px;\n  }\n\n  .videoContainer > video {\n    width: 349px;\n    height: 755px;\n  }\n\n  @media only screen and (max-width: 1070px) {\n    .iphonePreview {\n      background-size: 370px auto;\n    }\n\n    .iphoneScreen {\n      width: 322px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer {\n      width: 322px;\n      height: 698px;\n      margin-left: 24px;\n      margin-top: 22px;\n    }\n\n    .videoContainer > video {\n      width: 322px;\n      height: 698px;\n    }\n  }\n\n  @media only screen and (max-width: 992px) {\n    .iphonePreview {\n      display: flex;\n      background-size: 260px auto;\n      background-position: center 0;\n      margin-top: 47px;\n      justify-content: center;\n      padding-bottom: 75px;\n    }\n\n    .iphoneScreen {\n      width: 226px;\n      height: 488px;\n      -webkit-clip-path: url(#screenMask);\n      clip-path: url(#screenMask);\n      margin: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer {\n      width: 226px;\n      height: 488px;\n      margin-left: 0px;\n      margin-top: 17px;\n    }\n\n    .videoContainer > video {\n      width: 226px;\n      height: 488px;\n    }\n  }\n\n  // Feature List\n\n  .features {\n    grid-area: c;\n    display: flex;\n    flex: 0 1 auto;\n    align-content: flex-start;\n    justify-content: flex-start;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    margin-top: 93px;\n  }\n\n  .feature {\n    display: flex;\n    padding-top: 63px;\n    padding-left: 15px;\n    padding-right: 15px;\n    width: calc(100% / 3);\n  }\n\n  .feature:nth-child(-n + 3) {\n    padding-top: 0px;\n  }\n\n  .feature:nth-child(3n) {\n    padding-right: 0px;\n  }\n\n  .feature:nth-child(3n + 1) {\n    padding-left: 0px;\n  }\n\n  .iconBack {\n    color: ",";\n  }\n\n  .iconTop {\n    color: ",";\n  }\n\n  .socialIconBack {\n    color: ",";\n  }\n\n  .socialIconTop {\n    color: ",";\n  }\n\n  .featureText {\n    margin-left: 18px;\n  }\n\n  .featureText > h3 {\n    color: ",";\n  }\n\n  .featureText > p {\n    color: ",";\n    margin-top: 8px;\n    line-height: 1.5;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .features {\n      flex-grow: 1;\n      flex-direction: row;\n      flex-wrap: wrap;\n      margin-top: 11px;\n    }\n\n    .feature {\n      display: flex;\n      padding-top: 41px;\n      padding-left: 15px;\n      padding-right: 15px;\n      width: 100%;\n    }\n\n    .feature:nth-child(-n + 3) {\n      padding-top: 41px;\n    }\n\n    .feature:nth-child(1) {\n      padding-top: 0px;\n    }\n\n    .feature:nth-child(3n) {\n      padding-right: 15px;\n    }\n\n    .feature:nth-child(3n + 1) {\n      padding-left: 15px;\n    }\n  }\n\n  // Footer\n\n  footer {\n    grid-area: f;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-content: center;\n  }\n\n  .footerText {\n    color: ",";\n    display: block;\n    line-height: 1.5;\n    width: 100%;\n    text-align: center;\n    padding-top: 70px;\n    padding-bottom: 70px;\n  }\n\n  .footerIcons {\n    padding-bottom: 35px;\n    display: flex;\n  }\n\n  @media only screen and (max-width: 992px) {\n    .footerText {\n      color: ",';\n      display: block;\n      line-height: 1.5;\n      width: 100%;\n      text-align: center;\n      padding-top: 54px;\n      padding-bottom: 61px;\n    }\n\n    .footerIcons {\n      padding-bottom: 35px;\n      display: flex;\n    }\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .privacyPolicy {\n    grid-area: p; \n    color: white\n    line-height: normal;\n    margin-left: 20px;\n    margin-right: 20px;\n  }\n\n  .privacyPolicy h1 {\n    margin-top: 40px;\n    margin-bottom:30px;\n  }\n\n  .privacyPolicy p {\n    margin-top: 10px;\n    margin-bottom:30px;\n  }\n\n  .privacyPolicy ul {\n    margin-top: 10px;\n    margin-bottom:30px;\n    margin-left: 30px\n  }\n\n  .privacyPage {\n    display: block;\n    grid-template-areas: "h h h h h h h h h h h h" "p p p p p p p p p p p p" "c c c c c c c c c c c c" "f f f f f f f f f f f f";\n  }\n\n  .presskitPage {\n    display: block;\n    grid-template-areas: "h h h h h h h h h h h h" "p p p p p p p p p p p p" "c c c c c c c c c c c c" "f f f f f f f f f f f f";\n  }\n\n  p {\n    line-height: 25px;\n  }\n\n  .presskit-body {\n    color: white;\n    max-width: 800px\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .presskit-body h2 {\n    margin-top: 40px\n    margin-bottom: 20px;\n    font-size: 3rem;\n    color: #ab73ff;\n  }\n\n  .presskit-body p{\n    font-size: 1.75rem;\n    margin-bottom: 20px;\n  }\n\n  .presskit-banner {\n    margin-bottom: 20px;\n  }\n\n  .presskit-hero {\n    max-width: 600px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n\n  .presskit-hero img{\n    width: 100%;\n    max-height: 100%;\n  }\n\n  .presskit-banner img{\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 10px;\n    border-width: 1px;\n    border-color: #444;\n    border-style: solid;\n  }\n  \n  .presskit-iphone-screenshots{\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n\n  .presskit-ipad-screenshots{\n    display: flex;\n    width: 100%;\n    justify-content: space-between;\n    margin-bottom: 20px;\n  }\n  \n  .presskit-screenshot{\n    width: 23%;\n  }\n\n  .presskit-iphone-screenshots img{\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 10px;\n    border-width: 1px;\n    border-color: #444;\n    border-style: solid;\n  }\n\n  .presskit-ipad-screenshots img{\n    max-width: 100%;\n    max-height: 100%;\n    border-radius: 5px;\n    border-width: 1px;\n    border-color: #444;\n    border-style: solid;\n  }\n\n  .presskit-video {\n    position: relative;\n    padding-bottom: 56.25%; /* 16:9 */\n    padding-top: 25px;\n    height: 0;\n  }\n  .presskit-video iframe {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n  }\n\n  .footer-privacy {\n    display: block;\n    text-align: center;\n    width: 100%;\n    margin-bottom: 40px;\n    font-size: 0.85em;\n}\n']);return h=function(){return n},n}var g=Object(c.a)(h(),s.a.font,s.a.body_background_color,s.a.body_background_color,s.a.link_color,s.a.header_background,s.a.content_width,s.a.topbar_title_color,s.a.topbar_title_color,s.a.topbar_title_color,s.a.app_title_color,s.a.app_price_color,s.a.app_description_color,s.a.feature_icons_background_color,s.a.feature_icons_foreground_color,s.a.social_icons_background_color,s.a.social_icons_foreground_color,s.a.feature_title_color,s.a.feature_text_color,s.a.footer_text_color,s.a.footer_text_color),f=function(n){var e=n.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(g,null),e)};f.propTypes={children:r.a.node.isRequired};e.a=f},152:function(n){n.exports={data:{site:{siteMetadata:{title:"Dark Noise",description:"Simple. Fast. White noise, refined. For iPhone and iPad.",author:"DarkNoiseApp"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-8c9722c34f0ba6c2a93e.js.map