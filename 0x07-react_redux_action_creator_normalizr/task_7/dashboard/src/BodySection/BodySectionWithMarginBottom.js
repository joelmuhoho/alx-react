import ProtoTypes from "prop-types";
import BodySection from "./BodySection";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  margin: {
    marginBottom: "40px",
  },
});
const BodySectionWithMarginBottom = (props) => {
  return (
    <div className={css(styles.margin)}>
      <BodySection {...props} />
    </div>
  );
};
BodySectionWithMarginBottom.protoTypes = {
  title: ProtoTypes.string,
  children: ProtoTypes.node,
};
export default BodySectionWithMarginBottom;
