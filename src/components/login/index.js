import React from "react"
import Input from '../input'
import Label from '../label'
import Button from '../button'

function LogIn() {
    return (
        <div id="login">
            <h1>Welcome Back!</h1>
            <form action="/" method="post">
                <div className="field-wrap">
                    <Label fieldName="Email Address"/>
                    <Input type="email" />
                </div>
                <div className="field-wrap">
                    <Label fieldName="Password"/>
                    <Input type="password" />
                </div>
                <p className="forgot"><a href="forgot">Forgot Password?</a></p>
                <Button type="submit" className="button button-block" buttonName="Log In"/>
            </form>
        </div>
    );
}

export default LogIn;