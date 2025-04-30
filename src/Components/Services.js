import React from "react";
import './Service.css';
export const Services = () => {
    return (
        <section id="service" className="services-mf route">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="title-box text-center">
                            <h3 className="title-a">Services</h3>
                            <div className="line-mf"></div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-box">
                            <div className="service-ico">
                                <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                            </div>
                            <div className="services-content">
                                <h2 className="s-title"> Back-End Development</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="services-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                        </div>
                        <div className="services-content">
                            <h2 className="s-title"> SQL,MySQL,Postgres,DB Visualiser</h2>
                        </div>
                    </div>
                </div>
                <div className=" col-md-4">
                    <div className="service-box">
                        <div className="service-ico">
                            <span className="ico-circle"><i className="icon ion-md-laptop"></i></span>
                        </div>
                        <div className="service-content">
                            <h2 className="s-title">Front-End Development</h2>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};