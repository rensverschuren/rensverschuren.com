import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Rens Verschuren" keywords={[`Rens`, `Verschuren`, `Developer`, `Netherlands`, `Castual`]} />
    <Container>
      <p>Hi, my name is Rens Verschuren and I’m a web developer from the Netherlands. At the moment I’m specialised in React and Ruby on Rails. I have a keen eye for clean interfaces and love to build things that are a joy to use.</p>
      <p>At the moment I’m working on <a href="http://castual.com" rel="noopener noreferrer" target="_blank">Castual</a>: an app that makes it easy to create beautiful digital signage.</p>
      <p>In my spare time I love to play the saxophone and read interesting books.</p>
      <p>Say <a href="mailto:hi@rensverschuren.com">hi@rensverschuren.com</a></p>
    </Container>
  </Layout>
)

export default IndexPage
