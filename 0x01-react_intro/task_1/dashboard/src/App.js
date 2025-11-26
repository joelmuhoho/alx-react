import logo from "./alx-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

const App = () => {
  return (
    <>
      <div className="App-header">
        <img className="App-logo" src={logo} alt="alx holberton logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
};

export default App;
