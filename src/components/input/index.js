import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.change(event)
    }

    render() {
        return (
            <input
                type={this.props.type}
                required
                value={this.props.value}
                autoComplete="off"
                onChange={this.handleChange}
                name={this.props.name}
            />
        );
    }
}

export default Input;