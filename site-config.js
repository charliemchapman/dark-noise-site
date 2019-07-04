module.exports = {
  // App Info
  appstore_link         : "https://itunes.apple.com/app/id1465439395",                                  // Enter App Store URL.
  playstore_link        : null,                                         // Enter Google Play Store URL.
  google_analytics_ID   : null,                                         // Enter Google Analytics ID or ""
  presskit_download_link: null,                                         // Enter a link to downloadable file or (e.g. public Dropbox link to a .zip file). 
  video_or_screenshot   : "screenshot",                                 // "screenshot" or "video"
  app_url               : "https://darknoise.app/",                              // Domain of your website without path_prefix.
  path_prefix           : "/",                                          // Prefixes all links. For cases when deployed to example.github.io/automatic-gatsbyjs-app-landing-page/.
  app_name              : "Dark Noise",
  app_price             : null,
  app_description       : "Simple, fast, white noise app for iOS.",
  app_keywords          : ["White Noise", "Ambient Noise", "Meditation"],

  // Personal Info
  your_name              : "Charlie Chapman",
  your_link              : "https://charliemchapman.com",
  your_city              : "St. Louis",
  email_address          : "dev.charliemchapman@gmail.com",
  linkedin_username      : null,
  facebook_username      : null,
  instagram_username     : null,
  twitter_username       : "DarkNoiseApp",
  github_username        : null,
  youtube_username       : null,

  // Features List
  features               : [
    {
      title: "Simple",
      description:
        "A beautiful, clean interface makes it easy to find and play your favorite noises.",
      fontawesome_icon_name: "star",
    },
    {
      title: "Fast",
      description:
        "With widgets, quick actions, and Siri Shortcuts support, you can start up a noise in seconds, in any environment.",
      fontawesome_icon_name: "bolt",
    },
    {
      title: "1 Price, All Noises",
      description:
        "All noises are included with 1 price, so you'll have access to every noise you see now, or added in the future.",
      fontawesome_icon_name: "dollar-sign",
    },
  ],
  header_background             : "rgba(0, 0, 0, 0.1)",
  topbar_title_color            : "#ffffff",
  cover_overlay_color_rgba      : "rgba(54, 59, 61, 0.8)",
  device_color                  : "black",                          // Set to "black", "blue", "coral", "white", or "yellow"
  body_background_color         : "ffffff",
  primary_text_color            : "#000",
  content_width                 : "1170px",
  font                          : `"Helvetica Neue", sans-serif`,
  link_color                    : "#1d63ea",
  app_title_color               : "#ffffff",
  app_price_color               : "#ffffff",
  app_description_color         : "#ffffff",
  feature_title_color           : "#000000",
  feature_text_color            : "#666666",
  feature_icons_foreground_color: "#1d63ea",
  feature_icons_background_color: "#e6e6e6",
  social_icons_foreground_color : "#666666",
  social_icons_background_color : "#e6e6e6",
  footer_text_color             : "#666666",
}
