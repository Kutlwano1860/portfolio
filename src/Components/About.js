import React from "react";
import './about.css';
import { SkillBar } from "./SkillBar";

export const About = () => {
    return (
        <section id="about" className="about-mf sect-pt4 route">
            <div className=" container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="box-shadow-full">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-5">
                                            <div className="about-img">
                                                <img src="Me.jpeg"className="img-fluid rounded b-shadow-a" alt=""/>
                                            </div>
                                            <div className="col-sm-6 col-md-7">
                                                <div className="About-info">
                                                    <p><span className="title-s">Name:</span> <span>Manyikana Kutlwano Lufuno </span></p>
                                                    <p><span className="title-s"> Email:</span><span>LufunoManyikana315@gmail.com</span></p>
                                                    <p><span className="title-s">Phone:</span><span>+27 (67) 028 - 5003</span></p>
                                                    <p><span className="title-s">Location</span><span>Cape Town</span></p>
                                                </div>
                                            </div>
                                            <div className="Skill-mf">
                                               <p className="title--s">Skills</p> 
                                               <SkillBar skill="HTML" percentage={80}/>
                                               <SkillBar skill="CSS" percentage={50}/>
                                               <SkillBar skill="C#" percentage={75}/>
                                               <SkillBar skill="Javascript,React.js" percentage={78}/>
                                               <SkillBar skill="MySQL,SQL,Postgres,DB Visualiser" percentage={60}/>
                                               <SkillBar skill="Confluence,AZURE.JIRA" percentage={90}/>
                                               <SkillBar skill="GIT hub" percentage={50}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="about-me pt-4 pt-md-0">
                                                <div className="title-box-2">
                                                    <h5 className="title-left">About Me</h5>
                                                </div>
                                                <p className="lead">
                                                Manyikana Lufuno Kutlwano is a dedicated individual currently pursuing studies in software development while maintaining his passion for sprinting. Combining a keen interest in technology with athleticism, he embodies a unique blend of mental agility and physical prowess. As he delves into the intricacies of software development, Manyikana remains committed to maintaining his agility on the track, reflecting his determination to excel both in the digital realm and on the running track. With a multifaceted approach to personal growth and achievement, he embodies the spirit of versatility and resilience in pursuing his passions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="skill-mf">
                                            <p className="title-s">Other Skills:</p>
                                            <span>Critical thinking, Hard working,etc........</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};