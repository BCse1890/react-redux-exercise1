import expenses from "../fixtures/expenses";
import selectExpensesTotal from "../../selectors/expenses-total";

test("should return 0 if no expenses", () => {
  const res = selectExpensesTotal([]);
  expect(res).toBe(0);
});

test("should correctly add up a single expense", () => {
  const res = selectExpensesTotal([expenses[1]]);
  expect(res).toBe(109500);
});

test("should correctly add muliple expenses", () => {
  const res = selectExpensesTotal(expenses);
  expect(res).toBe(114195);
});
