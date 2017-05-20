import React, {Component} from 'react';

class WeatherMessage extends Component {
    render() {
        return (
            <div>
                <p>It is always {this.props.temp} in {this.props.location}</p>
            </div>

        );
    }
}

export default WeatherMessage;

