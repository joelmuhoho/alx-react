import logo from "../assets/alx-logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { AppContext } from "../App/AppContext";
import { Component } from "react";

const styles = StyleSheet.create({
  logo: {
    height: "150px",
    width: "150px",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    color: "#e0354b",
    borderBottom: "5px solid #e0354b",
  },
});
class Header extends Component {
  static contextType = AppContext;
  render() {
    return (
      <>
        <header className={css(styles.header)}>
          <img
            className={css(styles.logo)}
            src={logo}
            alt="alx holberton logo"
          />
          <h1>School dashboard</h1>
        </header>
        {this.context.user.isLoggedIn ? (
          <section id="logoutSection">
            Welcome {this.context.user.email}
            <button onClick={this.context.logOut}>LogOut</button>
          </section>
        ) : (
          ""
        )}
      </>
    );
  }
}
export default Header;
