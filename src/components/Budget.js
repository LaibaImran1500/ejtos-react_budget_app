import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        if (event.target.value < 20001 )
        {
            if ( event.target.value > {totalExpenses})
            {
                setNewBudget(event.target.value);
            }
            else{
                alert("Cannot be lower than spending");
            }
        }
        else{
            alert("Cannot exceed 20000!");
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
