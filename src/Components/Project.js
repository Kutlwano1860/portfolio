import React from 'react';

export const Project = ({title, description, Link}) => {
    return(
        <div className="project">
            <h2>{title}</h2>
            <p>{description}</p>
            <a> href={Link} target </a>
        </div>
    );
};