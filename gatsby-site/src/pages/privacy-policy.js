import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PrivacyPolicyText from "../components/privacyPolicyText"

const IndexPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <div className="privacyPolicy">
            <h1>Privacy Policy</h1> 
            <PrivacyPolicyText/>
          </div>
  </Layout>
)

export default IndexPage
