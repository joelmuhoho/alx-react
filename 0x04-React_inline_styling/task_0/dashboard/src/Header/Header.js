import logo from "../assets/alx-logo.jpg";
import "./Header.css";
const Header = () => {
  return (
    <header className="App-header">
      <img className="App-logo" src={logo} alt="alx holberton logo" />
      <h1>School dashboard</h1>
    </header>
  );
};
export default Header;
