import PropTypes from "prop-types";
import "./CourseListRow.css";
const CourseListRow = ({
  isHeader = false,
  textFirstCell,
  textSecondCell = "",
}) => {
  textSecondCell = textSecondCell === "" ? null : textSecondCell;

  if (isHeader === false) {
    return (
      <tr>
        <td>{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
  return (
    <tr>
      {textSecondCell === null ? (
        <th colSpan="2">{textFirstCell}</th>
      ) : (
        <>
          <th>{textFirstCell}</th> <th>{textSecondCell}</th>
        </>
      )}
    </tr>
  );
};

CourseListRow.prototype = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
