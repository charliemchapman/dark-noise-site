import React from "react"

function PrivacyPolicyText({ description, lang, meta, keywords, title }) {
  return (
    <div>
        <p>Dark Noise takes your privacy very seriously.  On top of the anonymous information Apple provides to developers, Dark Noise uses <a href="https://firebase.google.com/">Firebase Services</a> to collect anonymous data. Firebase's Privacy Policy can be <a href="https://firebase.google.com/support/privacy">found here</a>.  Dark Noises uses two Firebase services: Crashlytics and Firebase Analytics.</p> 
        <p>Crashlytics collects crash logs which can be used to identify crashes in the app that can be fixed to improve stability.  Firebase Analytics collects anonymous logs about user behavior (such as which noises are being played or what themes are being used) to help determine future feature enhancements to the app.  This information is all anonymous and cannot be linked back to an individual user.</p>
        <p>Dark Noise does not sell or rent your data, and the anonymous information is collected only for use in improving the app.  If you desire you can disable analytics and crash reporting by going to Settings -> Analytics and Logging -> and turning on "Disable Analytics"</p>
    </div>
  )
}

export default PrivacyPolicyText
