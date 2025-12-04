import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { Component } from "react";
import "./App.css";

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];
const listNotifications = [
  {
    id: 1,
    type: "default",
    html: { __html: "New course available" },
    value: "",
  },
  {
    id: 2,
    type: "urgent",
    html: { __html: "New resume available" },
    value: "",
  },
  {
    id: 3,
    type: "urgent",
    html: { __html: getLatestNotification() },
    value: "",
  },
];
class App extends Component {
  render() {
    return (
      <>
        <Notifications
          displayDrawer={false}
          listNotifications={listNotifications}
        />
        <div className="App">
          <Header />
          <main className="App-body">
            {this.props.isLoggedIn ? (
              <CourseList listCourses={listCourses} />
            ) : (
              <Login />
            )}
          </main>
          <Footer />
        </div>
      </>
    );
  }
}
App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = { isLoggedIn: PropTypes.bool };

export default App;
