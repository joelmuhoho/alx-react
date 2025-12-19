import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
import { AppContext } from "../App/AppContext";
import { useContext } from "react";
const Footer = () => {
  const context = useContext(AppContext);
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
      {context.user.isLoggedIn ? (
        <p>
          <a href="#">Contact us</a>
        </p>
      ) : (
        ""
      )}
    </footer>
  );
};

export default Footer;
