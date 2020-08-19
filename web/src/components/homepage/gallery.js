import React, {Component} from "react";
import  "../../assets/stylesheets/home/gallery.sass"
export default class Gallery extends Component{
    render(){
        return (
            <section className="gallery">
                <div className="gallery-title">
                    EKTE & NATURLIG
                </div>
                <div className="gallery-title-description">
                    ØYEBLIKK DU VIL HUSKE
                </div>
                <div className="gallery-grid-container-wrapper">
                    <div className="gallery-grid-container">
                        <div className="item item-big1">
                            <div className="item-title item-title-big">Blogg</div>
                        </div>
                        <div className="item item-big2 ">
                            <div className="item-title item-title-big">Bryllup</div>
                        </div>
                        <div className="item item-small1">
                            <div className="item-title">Om</div>
                        </div>
                        <div className="item item-small2">
                            <div className="item-title">Family</div>
                        </div>
                        <div className="item item-small3">

                        </div>
                        <div className="item item-small4">
                            <div className="item-title">Kontakl</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
