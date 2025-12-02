import PropTypes from "prop-types";
import "./CourseListRow.css";
const CourseListRow = (props) => {
  const isHeader = props.isHeader ? props.isHeader : false;
  const textFirstCell = props.textFirstCell;
  const textSecondCell = props.textSecondCell ? props.textSecondCell : null;

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
  textSecondCell: PropTypes.string,
};

export default CourseListRow;
