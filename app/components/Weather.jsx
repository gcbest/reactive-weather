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
    componentDidMount () {
        var location = this.props.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }
    componentWillReceiveProps (newProps) {
        // we are change the query parameter in the url so we have to
        // notify that the prop is changing
        var location = newProps.location.query.location;

        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    }
    handleSearch (location) {
        var that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
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
                <h3 className="text-center page-title">Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>


        );
    }
}

export default Weather;