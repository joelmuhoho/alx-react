import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { Component } from "react";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
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
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === "h") {
      alert("Logging you out");
      this.props.logOut();
    }
  };

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
              <BodySectionWithMarginBottom title="Course list">
                <CourseList listCourses={listCourses} />
              </BodySectionWithMarginBottom>
            ) : (
              <BodySectionWithMarginBottom title="Log in to continue">
                <Login />
                <BodySection title="News from the School">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur vulputate auctor tellus. Quisque velit massa,
                    luctus ac augue quis, aliquam imperdiet diam. Nulla
                    facilisi. Donec eget quam vel nisi consectetur congue in
                    porttitor risus. Curabitur id massa dignissim, venenatis
                    quam et, eleifend dui. Morbi id metus felis. Fusce ut massa
                    eu justo molestie luctus ut quis lacus. Donec id luctus
                    augue. Nam eleifend mauris eget ultricies ultricies. Fusce
                    gravida auctor turpis, et efficitur mauris. Aliquam
                    facilisis ac felis eu condimentum. Vivamus fermentum
                    sollicitudin lacus in venenatis. Nulla auctor nibh eget ante
                    consectetur efficitur.
                  </p>
                </BodySection>
              </BodySectionWithMarginBottom>
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
  logOut: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;
