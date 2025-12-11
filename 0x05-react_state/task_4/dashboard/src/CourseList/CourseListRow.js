import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import { useState } from "react";

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
  rowChecked: { backgroundColor: "#e6e4e4" },
});
const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  const [rowChecked, setRowChecked] = useState(false);
  const handleRowChecked = (event) => {
    if (!rowChecked) {
      setRowChecked(true);
    } else {
      setRowChecked(false);
    }
  };
  return (
    <tr
      className={css(
        isHeader
          ? styles.headerRow
          : rowChecked
          ? styles.rowChecked
          : styles.row
      )}
    >
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
          <td>
            <input
              type="checkbox"
              checked={rowChecked}
              onChange={handleRowChecked}
            />
            {textFirstCell}
          </td>
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
