import React, {Component} from 'react';

const WeatherMessage = ({temp, location}) => {
    // var {temp, location} = props;
    return (
        <div>
            <p className="text-center">It is always {temp} in {location}</p>
        </div>
    );
};

export default WeatherMessage;

