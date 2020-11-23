export const checkBudget = (budget, remaining) => {
    let kind;

    if( (budget / 4) > remaining) {
        kind = "alert alert-danger"
    } else if ( (budget / 2) > remaining ) {
        kind = "alert alert-warning"
    } else {
        kind = "alert alert-success"
    }

    return kind;
}