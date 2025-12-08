import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  headerRow: { backgroundColor: "#deb5b545" },
  row: { backgroundColor: "#f5f5f5ab" },
  th: {
    textAlign: "left",
    borderBottom: "1.5px solid rgb(70, 66, 66)",
  },
  thColspan2: {
    textAlign: "center",
  },
});
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr className={css(isHeader ? styles.headerRow : styles.row)}>
      {isHeader ? (
        !textSecondCell ? (
          <th className={css(styles.th, styles.thColspan2)} colSpan={2}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className={css(styles.th)}>{textFirstCell}</th>
            <th className={css(styles.th)}>{textSecondCell}</th>
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
