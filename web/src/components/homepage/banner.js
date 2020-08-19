import "../../assets/stylesheets/banner.sass"
import Navbar from "../navbar";
import React, { Component } from "react";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby"

function FadeSlideBanner() {
  const {strapiHomePage} = useStaticQuery(
    graphql`
      query {
        strapiHomePage{
          banner{
            color
            image {
              url
            }
          }
        }
        site{
          siteMetadata{
            sourceUrl
          }
        }
      }
    `
  )
  
  console.log("AAAAAAAA", strapiHomePage)

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  const sourceUrl = `http://localhost:1337`
  
  return (
      <Slider className="banner-section" {...settings}>
        {
          strapiHomePage.banner.map((item, index, array) => {
            console.log("UUU", item)
            return (
              <div key={index} className="banner-image-wrapper">
                <img className="banner-image" src={sourceUrl+item.image[0].url}/>
              </div>
            )

          })
        }
      </Slider>
  );
}



const Banner = ({ children, title, subtitle }) => {
  return (
    <section className="banner">
      <FadeSlideBanner/>
      <div className="banner-content">
        <Navbar textColor="light"></Navbar>
        <div></div>
        <div className="banner-content-bottom">
            WEDDING PHOTOGRAPHY
        </div>
      </div>
    </section>
  );
};

export default Banner;
