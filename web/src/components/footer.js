import React, {Component} from "react";
import  "../assets/stylesheets/footer.sass"
import logo from "../assets/images/logo_dark.png"
export default class Footer extends Component{
    render(){
        return (
            <section className="footer">
                <div className="footer-img-wrapper">
                    <div className="footer-social-link">
                        <span>@phongdoanfoto</span>
                    </div>
                    <div className="item item-small1"/>
                    <div className="item item-small2"/>
                    <div className="item item-small3"/>
                    <div className="item item-small4"/>
                    <div className="item item-small5"/>
                    <div className="item item-small6"/>
                </div>
                <div className="footer-description">
                    <img src={logo} alt="" height="50px"/>
                    <span>©2019 COPYRIGHT PHONG DOAN FOTO</span>
                    <span>TO TOP</span>
                </div>
            </section>
        );
    }
}
