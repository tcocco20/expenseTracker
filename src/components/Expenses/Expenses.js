import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = props => {
  const [selectedYear, selectYear] = useState("2020");

  const selectYearHandler = year => {
    selectYear(year);
  };

  const filteredExpenses = props.expenses.filter(
    expense => expense.date.getFullYear() === +selectedYear
  );

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onSelectYear={selectYearHandler}
      />
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
