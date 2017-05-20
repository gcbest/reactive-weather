import React, {Component} from 'react';
import PropTypes from'prop-types';

class ErrorModal extends Component {
    componentDidMount () {
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();
    }
    render () {
        var {title, message} = this.props
        return (
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