import React, { Fragment, useState } from "react";
import Errors from "./Error";
import PropTypes from "prop-types";

const Question = ({ saveBudget, saveRemaining, updateQuestion }) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const defineBudget = (e) => {
    saveQuantity(parseInt(e.target.value, 10));
  };

  //Submit
  const addBudget = (e) => {
    e.preventDefault();
    //Validate
    if (quantity < 1 || isNaN(quantity)) {
      saveError(true);
      return;
    }

    //if pass validation
    saveError(false);
    saveBudget(quantity);
    saveRemaining(quantity);
    updateQuestion(false);
  };

  return (
    <Fragment>
      <h2>Put Your Budget</h2>

      {error ? <Errors mesaje="Incorrect Budget" /> : null}
      <form onSubmit={addBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Put your budget"
          onChange={defineBudget}
        />

        <input
          type="submit"
          className="button-primary u-full-width"
          value="Define Budget"
        />
      </form>
    </Fragment>
  );
};

Question.propTypes = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  updateQuestion: PropTypes.func.isRequired

}
export default Question;
