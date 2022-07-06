import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = props => {
  const [formShown, buttonChangeState] = useState(false);

  const saveExpenseDataHandler = enteredExpenseData => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    buttonChangeState(false);
  };

  const showFormHandler = () => {
    buttonChangeState(true);
  };

  const hideFormHandler = () => {
    buttonChangeState(false);
  };

  return (
    <div className="new-expense">
      {!formShown && <button onClick={showFormHandler}>Add New Expense</button>}
      {formShown && (
        <ExpenseForm
          onCancel={hideFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
