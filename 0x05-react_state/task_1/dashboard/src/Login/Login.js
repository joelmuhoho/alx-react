import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  margin: {
    margin: "auto",
  },
});
const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email: </label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder="enter your email"
      />
      <br />
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="enter your password"
      />
      <br />
      <button>OK</button>
    </>
  );
};

export default Login;
