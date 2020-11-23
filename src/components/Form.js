import React, { useState } from 'react';
import Error from "./Error";
import shortId from "shortid";
import PropTypes from "prop-types";

const Form = ({saveExpense, saveCreateExpense}) => {

    const [ name, saveName ] = useState("");
    const [ quantity, saveQuantity ] = useState(0);
    const [ error, saveError ] = useState(false);

    const [ messages, saveMessages ] = useState();

    //When the user adds an Expense
    const addExpense = (e) => {
        e.preventDefault();

        //validate
        if(name === "" || isNaN( quantity ) ) {
            saveError(true)
            saveMessages(<Error mesaje="Both fields are required "/>); 
            return;
        }
        if(quantity < 1) {
            saveError(true);
            saveMessages(<Error mesaje="Incorrect amount"/>);
            return;
        }
        

        //if it's ok
        saveError(false)

        //build expense
        const expense = {
            name, //<= name: name,
            quantity,
            id: shortId.generate()
        }
        console.log(expense);

        //move expense
        saveExpense(expense)
        saveCreateExpense(true)

        //reset form
        saveName("");
        saveQuantity(0);
        
    }


    return (
        <form onSubmit={addExpense}>
            <h2>Add your expenses</h2>

            {error ? messages : null}

            <div className="campo">
                <label>Expense Name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Example. Food"
                    value={name}
                    onChange={e => saveName(e.target.value)}
                />
            </div>

            <div className="campo">
                <label>Spending Amount</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Example. 100"
                    onChange={e => saveQuantity(parseInt(e.target.value))}
                    value={quantity}
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"            
            />
        </form>
    )
}

Form.propTypes = {
    saveExpense: PropTypes.func.isRequired,
    saveCreateExpense: PropTypes.func.isRequired,

}
export default Form;