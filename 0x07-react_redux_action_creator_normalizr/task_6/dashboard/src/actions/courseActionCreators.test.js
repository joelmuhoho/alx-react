import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("selectCourse", () => {
  it("should return the correct action object", () => {
    const expectedResults = { type: SELECT_COURSE, index: 1 };

    const index = 1;
    const result = selectCourse(index);
    expect(result).toEqual(expectedResults);
  });
});

describe("unSelectCourse", () => {
  it("should return the correct action object", () => {
    const expectedResults = { type: UNSELECT_COURSE, index: 1 };

    const index = 1;
    const result = unSelectCourse(index);
    expect(result).toEqual(expectedResults);
  });
});
