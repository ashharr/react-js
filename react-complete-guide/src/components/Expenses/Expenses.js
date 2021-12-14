import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesChart from "./ExpensesChart";
import ExpenseFilter from "./ExpenseFilter";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  const yearFilterHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
    // console.log(enteredYear);
    // // console.log(props.items.filter(expense => expense.date.getFullYear() == enteredYear)); filter(item => item.)
    // console.log(props.items[0].date.getFullYear());
    // console.log(props.items.filter(item => item.date.getFullYear() == enteredYear));
  };


  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onYearSelect={yearFilterHandler}
        />
        <ExpensesChart expenses= {filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>

        {/* Another approach to filter year */}
        {/* {filteredExpenses.length === 0 && <p>No Expenses found</p>}
        {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}
          
        {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
      </Card>
    </div>
  );
};

export default Expenses;
