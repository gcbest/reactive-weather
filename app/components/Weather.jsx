import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';

class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            location: 'Miami',
            temp: 88
        }
        this.handleSearch = this.handleSearch.bind(this);
    }
    // API Key = 7486057fd080d966249b2b5959530883
    handleSearch (location) {
        this.setState({
            location: location,
            temp: 23
        });
    }
    render () {
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
            </div>


        );
    }
}

export default Weather;