import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="App-footer">
      <p>
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </p>
    </footer>
  );
};

export default Footer;
