import React, {Component} from 'react';

const WeatherMessage = ({temp, location}) => {
    // var {temp, location} = props;
    return (
        <div>
            <p>It is always {temp} in {location}</p>
        </div>
    );
};

export default WeatherMessage;

