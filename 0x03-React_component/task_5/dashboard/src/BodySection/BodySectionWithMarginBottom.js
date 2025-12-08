import ProtoTypes from "prop-types";
import BodySection from "./BodySection";
import "./BodySectionWithMarginBottom.css";
const BodySectionWithMarginBottom = (props) => {
  return (
    <div className="bodySectionWithMargin">
      <BodySection {...props} />
    </div>
  );
};
BodySectionWithMarginBottom.protoTypes = {
  title: ProtoTypes.string,
  children: ProtoTypes.node,
};
export default BodySectionWithMarginBottom;
