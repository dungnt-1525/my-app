import React from "react";
import PropTypes from "prop-types";

const Label = props => <label>{props.fieldName} <span className="req">*</span></label>;

Label.propTypes = {
    fieldName: PropTypes.string,
}

export default Label;