import React from "react"
import PrivacyPolicyTextV2 from "../components/privacyPolicyTextV2"

const IndexPage = ({ data }) => (
  (
    <div>
      <PrivacyPolicyTextV2/>
      <a href="https://darknoise.app/privacy-policy-v2/" style={{display:'block', textAlign: 'center'}}>Open in browser</a>
    </div>
  )
)

export default IndexPage