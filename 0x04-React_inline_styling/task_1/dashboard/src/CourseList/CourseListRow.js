import PropTypes from "prop-types";
import "./CourseListRow.css";
const headerRowColor = "#deb5b545";
const rowColor = "#f5f5f5ab";
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr style={{ backgroundColor: isHeader ? headerRowColor : rowColor }}>
      {isHeader ? (
        !textSecondCell ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.prototype = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
