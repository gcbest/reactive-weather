import React, {Component} from 'react';
import {Link} from 'react-router';

// class About extends Component {
//     render () {
//         return (
//             <h3>About Component</h3>
//         );
//     }
// }

const About = (props) => {
  return (
      <div>
        <h1 className="text-center">About</h1>
          <div class="callout primary large">
              <h5>Description</h5>
              <p> You can enter a city name to find out up to the minute info about its temperature.</p>
              <p>Here are some of the tools I used:</p>
              <ul>
                  <li><a href="https://facebook.github.io/react" target="_blank">React</a> - Views were created with React</li>
                  <li><a href="http://openweathermap.org" target="_blank">Open Weather Map</a> - Weather data source from ths API</li>
              </ul>
              <Link to="/"><a className="button">Try it out!</a></Link>
          </div>
      </div>
  );
};

export default About;