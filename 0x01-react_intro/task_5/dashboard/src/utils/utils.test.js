import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("test getFullYear returns the correct year", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const previousYear = currentYear - 1;
  expect(getFullYear()).toBe(currentYear);
  expect(getFullYear() === previousYear).toBe(false);
});
test("test getFooterCopy returns the correct string", () => {
  expect(getFooterCopy(true)).toBe("ALX");
  expect(getFooterCopy(false)).toBe("ALX main dashboard");
});
test("test getLatestNotification returns the correct string", () => {
  expect(getLatestNotification()).toBe(
    "<strong>Urgent requirement</strong> - complete by EOD"
  );
});
