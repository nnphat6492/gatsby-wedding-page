import React from "react"

import { Container, Row, Col } from 'reactstrap'
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Banner from '../components/homepage/banner'
import Gallery from '../components/homepage/gallery'
import Video from '../components/homepage/video'

export default () => (
  <Layout>
    <Banner></Banner>
    <Gallery></Gallery>
    <Video></Video>
    {/* <SEO title="Home" />
    <div>ABCDEF</div> */}
  </Layout>
)
