import logo from "../assets/alx-logo.jpg";
import { StyleSheet, css } from "aphrodite";

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
const Header = () => {
  return (
    <header className={css(styles.header)}>
      <img className={css(styles.logo)} src={logo} alt="alx holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
};
export default Header;
