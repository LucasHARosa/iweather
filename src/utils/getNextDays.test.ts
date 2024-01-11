import { getNextDays } from "./getNextDays";

it("should return next 5 days", () => {
  const days = getNextDays();
  expect(days.length).toBe(5);
})