import React from "react";
import "./signIn.styles.scss";
import FromInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/customButton.component";
import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handleValueChange = event => {
    const { value, name } = event.target;
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FromInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleValueChange}
            required
          ></FromInput>
          <FromInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleValueChange}
            required
          ></FromInput>
          <div className="buttons">
            <CustomButton type="submit" value="Submit form">
              Sign In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              isGoogleSignIn
              value="Submit form"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
