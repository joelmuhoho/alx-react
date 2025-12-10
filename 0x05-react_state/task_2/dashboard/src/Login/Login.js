import { StyleSheet } from "aphrodite";
import { Component } from "react";

const styles = StyleSheet.create({
  margin: {
    margin: "auto",
  },
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enableSubmit: false,
    };
  }
  handleLoginSubmit = (event) => {
    event.preventDefault();
    this.props.logIn(this.state.email, this.state.password);
  };
  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
    if (event.target.value !== "" && this.state.password !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };
  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
    if (event.target.value !== "" && this.state.email !== "") {
      this.setState({ enableSubmit: true });
    } else {
      this.setState({ enableSubmit: false });
    }
  };
  render() {
    return (
      <>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="enter your email"
            onChange={this.handleChangeEmail}
          />
          <br />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="enter your password"
            onChange={this.handleChangePassword}
          />
          <br />
          <input
            type="submit"
            value="Login"
            disabled={!this.state.enableSubmit}
          />
        </form>
      </>
    );
  }
}

export default Login;
