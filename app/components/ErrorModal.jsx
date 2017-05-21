import React, {Component} from 'react';
import PropTypes from'prop-types';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class ErrorModal extends Component {
    componentDidMount () {
        var {title, message} = this.props;

        var modalMarkup = (
            <div className="reveal tiny text-center" id="error-modal" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));

        $(ReactDOM.findDOMNode(this)).html($modal);
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    render () {
        return (
            <div>
            </div>
        );
    }
}

ErrorModal.PropTypes = {
    title: PropTypes.string,
    message: PropTypes.string.isRequired
};

ErrorModal.defaultProps = {
    title: 'Error'
};

export default ErrorModal;