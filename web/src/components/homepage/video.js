import React, {Component} from "react";
import  "../../assets/stylesheets/home/video.sass"
export default class Video extends Component{
    render(){
        return (
            <section className="video">
                <hr/>
                <div className="video-container">
                  <video className="video-player" autoplay="autoplay" name="media" muted>
                    <source src="http://localhost:1337/uploads/home_video_f50cccd977.mp4?40111.33499999414" type="video/mp4"/>
                  </video>
                  {/* <div className="background-img"/> */}
                  <div className="video-desc">
                      <div className="video-des1">Best of 2018</div>
                      <div className="video-des2">BRYLLUP</div>
                  </div>
                </div>
            </section>
        );
    }
}
