import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe("selectCourse", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = { type: "SELECT_COURSE", index: 1 };

    const index = 1;
    const result = selectCourse(index);
    expect(result).toEqual(expectedResults);
  });
});

describe("unSelectCourse", () => {
  it("Should return expected object with correct type and index as it was called with", () => {
    const expectedResults = { type: "UNSELECT_COURSE", index: 1 };

    const index = 1;
    const result = unSelectCourse(index);
    expect(result).toEqual(expectedResults);
  });
});
