import React from "react";

export const Intro = () => {
    return (
        <div id="home" className="intro route bg-image" style={{ backgroundImage: "url('https://www.lancaster.ac.uk/media/lancaster-university/content-assets/images/cyber-foundry/Technicalphoto.jpg')" }}>
            <div className="overlay-itro"></div>
            <div className="intro-content display-table">
                <div className="table-cell">
                    <div className="container">
                        <h1 className="intro-title mb-4">Manyikana Kutlwano Lufuno's <p>Portfolio</p></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};