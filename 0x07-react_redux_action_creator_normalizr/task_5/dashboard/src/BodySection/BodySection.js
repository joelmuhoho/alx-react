import ProtoTypes from "prop-types";
const BodySection = (props) => {
  return (
    <div className="bodySection">
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

BodySection.protoTypes = {
  title: ProtoTypes.string,
  children: ProtoTypes.node,
};
export default BodySection;
