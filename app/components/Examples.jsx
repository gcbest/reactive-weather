import React, {Component} from 'react';
import {Link} from 'react-router';

const Examples = (props) => {
    return (
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few examples to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=newark">Newark, NJ</Link>
                </li>
                <li>
                    <Link to="/?location=shanghai">Shanghai, CH</Link>
                </li>
            </ol>
        </div>

    );
};
export default Examples;