import ProtoTypes from "prop-types";
const CourseShape = ProtoTypes.shape({
  id: ProtoTypes.number.isRequired,
  name: ProtoTypes.string.isRequired,
  credit: ProtoTypes.number.isRequired,
});
export default CourseShape;
