import React from "react";
import PropTypes from "prop-types";
import Label from "../label";
import Input from "../input";

const Div = props => <div className={props.class_name}>
    <Label field_name={props.field_name}>
    </Label>
    <Input type={props.type} required placeholder={props.placeholder}>
    </Input>
</div>;

Div.propTypes = {
    class_name: PropTypes.string,
    field_name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string
}

export default Div;