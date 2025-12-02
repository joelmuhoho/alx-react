import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";

const App = ({ isLoggedIn = false }) => {
  return (
    <>
      <Notifications displayDrawer={false} />
      <div className="App">
        <Header />
        <main className="App-body">
          {isLoggedIn ? <CourseList /> : <Login />}
        </main>
        <Footer />
      </div>
    </>
  );
};

App.propTypes = { isLoggedIn: PropTypes.bool };

export default App;
