import logo from "../assets/alx-logo.jpg";
import { getFullYear, getFooterCopy } from "../utils/utils";

const App = () => {
  return (
    <>
      <header className="App-header">
        <img className="App-logo" src={logo} alt="alx holberton logo" />
        <h1>School dashboard</h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="enter your email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter your password"
        />
        <button>OK</button>
      </main>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
};

export default App;
