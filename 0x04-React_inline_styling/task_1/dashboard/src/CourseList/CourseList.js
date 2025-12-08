import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

import "./CourseList.css";
const CourseList = ({ listCourses = [] }) => {
  if (listCourses.length === 0) {
    return <p>No course available yet</p>;
  }
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow isHeader={true} textFirstCell="Available courses" />
        <CourseListRow
          isHeader={true}
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.map((course) => {
          return (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          );
        })}
      </tbody>
    </table>
  );
};

CourseList.prototype = {
  listCourses: PropTypes.arrayOf(CourseShape),
};
export default CourseList;
