import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import Listing from "./components/Listing";
import BudgetControl from "./components/BudgetControl";

function App() {
  const [ budget, saveBudget ] = useState(0);
  const [ remaining, saveRemaining ] = useState(0);
  const [ showquestion, updateQuestion ] = useState(true); //carga condicional de un componente
  const [ expenses, saveExpenses ] = useState([]);
  const [ expense, saveExpense ] = useState({});
  const [ createexpense, saveCreateExpense ] = useState(false);

  //useEffect updating the remaining
  useEffect(() => {
    //add new budget
    if(createexpense){
      saveExpenses([
        ...expenses,
        expense
      ])

    //substraction current budget
    const remainingBudget = remaining - expense.quantity;
    saveRemaining(remainingBudget);

      saveCreateExpense(false)
    }
  }, [createexpense, expense, expenses, remaining])


  return (
    <div className="container">
      <header>
        <h1>Weekly expense</h1>

        <div className="contenido-principal contenido">
          {showquestion ? (
            <Question
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              updateQuestion={updateQuestion}
            />
          ) : (
            <div className="row">
              <div className="one-half column">
                <Form 
                  saveExpense={saveExpense}
                  saveCreateExpense={saveCreateExpense}
                />
              </div>

              <div className="one-half column">
                <Listing 
                  expenses={expenses}
                />
                
                <BudgetControl 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
