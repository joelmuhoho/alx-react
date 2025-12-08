import "./Login.css";
const Login = () => {
  return (
    <>
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
    </>
  );
};

export default Login;
