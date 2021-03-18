import React from "react";
import PropTypes from "prop-types";

const Button = props => <button type={props.type} className={props.className}>{props.buttonName}</button>;

Button.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string,
    buttonName: PropTypes.string
}

export default Button;