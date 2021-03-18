import React from "react"
import Input from '../input'
import Label from '../label'
import Button from '../button'

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            email: "",
            password: ""
        }
    }
    handler(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert(`email: ${this.state.email}\npassword: ${this.state.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <div id="login">
                <h1>Welcome Back!</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="field-wrap">
                        <Label fieldName="Email Address"/>
                        <Input name="email" type="email" value={this.state.email} change={this.handler}/>
                    </div>
                    <div className="field-wrap">
                        <Label fieldName="Password"/>
                        <Input name="password" type="password" value={this.state.password} change={this.handler}
                        />
                    </div>
                    <p className="forgot"><a href="forgot">Forgot Password?</a></p>
                    <Button type="submit" className="button button-block" buttonName="Log In"/>
                </form>
            </div>
        );
    }
}

export default LogIn;