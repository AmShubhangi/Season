import React from 'react';
import './seasonDisplay.css';

const seasonConfig = {
    Summer: {
        text: "Let's Hit the Beach!",
        iconName: 'sun'
    },
    Winter: {
        text: "Burr, It's so Chilly and Foggy Day!",
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'Summer' : 'Winter';
    } else {
        return lat > 0 ? 'Winter' : 'Summer';
    }
}


const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth() + 1);
    const { text, iconName } = seasonConfig[season];
    return <div className={`season-display ${season}`}>
        <i className={`icon-left massive ${iconName} icon`}></i>
        <h1>{text}</h1>
        <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
}

export default SeasonDisplay;