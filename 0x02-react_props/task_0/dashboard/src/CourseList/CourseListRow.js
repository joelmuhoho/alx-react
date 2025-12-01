import propTypes from "prop-types";

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
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.string,
};

export default CourseListRow;
