import React from "react"

import Layout from "components/Layout"
import MainTechStack from "components/blocks/MainTechStack"
import Jobs from "components/blocks/Jobs"
import Projects from "components/blocks/Projects"
import MainEducation from "components/blocks/MainEducation"
import AdditionalEducation from "components/blocks/AdditionalEducation"
import Links from "components/blocks/Links"
import MainInfo from "components/blocks/MainInfo"
import About from "components/blocks/About"

export default function IndexPage() {
  return (
    <Layout>
      <MainInfo />
      <MainTechStack />
      <About />
      <Jobs />
      <MainEducation />
      <AdditionalEducation />
      <Projects />
      <Links />
    </Layout>
  )
}
