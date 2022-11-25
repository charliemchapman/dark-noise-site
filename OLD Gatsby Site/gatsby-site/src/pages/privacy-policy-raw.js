import React from "react"
import PrivacyPolicyText from "../components/privacyPolicyText"

const IndexPage = ({ data }) => (
  (
    <div>
      <PrivacyPolicyText/>
      <a href="https://darknoise.app/privacy-policy/" style={{display:'block', textAlign: 'center'}}>Open in browser</a>
    </div>
  )
)

export default IndexPage