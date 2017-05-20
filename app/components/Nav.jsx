import React, {Component} from 'react';
import {Link} from 'react-router';


class Nav extends Component {
    render () {
        return (
            <div>
                <h2>Nav</h2>
                <Link to="/">Get Weather</Link>
                <Link to="/about">About</Link>
                <Link to="/examples">Examples</Link>
            </div>
        );
    }
}

export default Nav;