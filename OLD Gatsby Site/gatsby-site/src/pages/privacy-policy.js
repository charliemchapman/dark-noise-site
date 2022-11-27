import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PrivacyPolicyTextV2 from "../components/privacyPolicyTextV2"

const IndexPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div className="privacyPolicy">
            <h1>Privacy Policy</h1> 
            <PrivacyPolicyTextV2/>
          </div>
  </Layout>
)

export default IndexPage
