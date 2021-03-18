import React from "react"

class Tab extends React.Component {
    render() {
        return (
            <li className={this.props.active === true ? "tab active" : "tab"}>
                <a onClick={() => this.props.action(this.props.tab)} href={this.props.tab}>
                    {this.props.tabName}
                </a>
            </li>
        );
    }
}

export default Tab;