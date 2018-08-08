import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";
import { connect } from "tls";

test("should correctly render expenses summary with single expense", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render expenses summary with multiple expenses", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={18} expensesTotal={43829323892} />
  );
  expect(wrapper).toMatchSnapshot();
});
