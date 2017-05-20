import React, {Component} from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import ErrorModal from './ErrorModal';
import openWeatherMap from '../api/openWeatherMap';

class Weather extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isLoading: false,
            errorMessage: undefined
        };
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSearch (location) {
        var that = this;

        this.setState({
            isLoading: true
        });

        openWeatherMap.getTemp(location).then((temp) => {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, (e) => {
            that.setState({
                isLoading: false,
                errorMessage: e.message
            });
            alert(error);
        });

    }
    render () {
        var {isLoading, location, temp, errorMessage} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}/>
                );
            }
        }
        return (
            <div>
                <h3 className="text-center">Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>


        );
    }
}

export default Weather;