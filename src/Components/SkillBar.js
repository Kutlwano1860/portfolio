import React from "react";

export const SkillBar = ({Skill, percentage }) => {
    return(
        <div>
            <span>{Skill}</span><span className="Pull-right">{percentage}%</span>
            <div className="progress">
                <div className="Progress-bar" role="progressbar" style={{ width: '${percentage}%' }} aria-valuenow={ percentage } aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
};