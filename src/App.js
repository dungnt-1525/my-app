import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Tab from './components/tabs'
import SignUp from './components/signup'
import LogIn from './components/login'

class App extends React.Component {
  constructor(props) {
    super(props);

    // Bind the this context to the handler function
    this.handler = this.handler.bind(this);

    // Set some state
    this.state = {
      isSignUp: true
    };
  }
  // This method will be sent to the child component
  handler(tab) {
    if (tab === "#login") {
      this.setState({
        isSignUp: false
      });
    } else {
      this.setState({
        isSignUp: true
      });
    }
  }
  render() {
    return (
        <div className="form">
          <ul className="tab-group">
            <Tab
                tab="#signup"
                tabName="Sign Up"
                active={this.state.isSignUp === true}
                action={this.handler}
            />
            <Tab
                tab="#login"
                tabName="Log In"
                active={this.state.isSignUp === false}
                action={this.handler}
            />
          </ul>
          <div className="tab-content">
            {
              this.state.isSignUp ? <SignUp /> : <LogIn />
            }
          </div>
        </div>
    );
  }
}

export default App;
