import React from "react"

function PrivacyPolicyText({ description, lang, meta, keywords, title }) {
  return (
    <div>
        <p>Dark Noise takes your privacy very seriously. If you have opted in to allow Apple to share information with developers we recieve some anonymous analytics. Dark Noise uses no other third party analytics tools or SDKs to track your activity in the app.</p>
        <h4>Policy Changes</h4>
        <ul>
          <li><b>June 28, 2020:</b> Removed Firebase and Crashlytics reporting and analytics.</li>
        </ul>
    </div>
  )
}

export default PrivacyPolicyText
