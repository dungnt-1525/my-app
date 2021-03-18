import React from "react"
import Input from '../input'
import Button from '../button'
import Label from '../label'

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.handler = this.handler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            firstName: "",
            lastName: "",
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
        alert(`firstName: ${this.state.firstName}\nlastName: ${this.state.lastName} \nemail: ${this.state.email}\npassword: ${this.state.password}`);
        event.preventDefault();
    }

    render() {
        return (
            <div id="signup">
                <h1>Sign Up for Free</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="top-row">
                        <div className="field-wrap">
                            <Label fieldName="First Name"/>
                            <Input name="firstName" type="text" change={this.handler} value={this.state.firstName}/>
                        </div>
                        <div className="field-wrap">
                            <Label fieldName="Last Name"/>
                            <Input name="lastName" type="text" change={this.handler} value={this.state.lastName}/>
                        </div>
                    </div>
                    <div className="field-wrap">
                        <Label fieldName="Email Address"/>
                        <Input name="email" type="email" value={this.state.email} change={this.handler}/>
                    </div>
                    <div className="field-wrap">
                        <Label fieldName="Set A Password"/>
                        <Input name="password" type="password" value={this.state.password} change={this.handler}
                        />
                    </div>
                    <Button type="submit" className="button button-block" buttonName="Get Started"/>
                </form>
            </div>
        );
    }
}

export default SignUp;