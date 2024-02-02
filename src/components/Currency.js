import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {currency} = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useContext(AppContext);
    const handleCurrencyChange = (event) => {
       setNewCurrency(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Currency: £{currency}</span>
<input type="number" step="10" value={newCurrency} onChange={handleCurrencyChange}>
<div id="currencyDropdown">
      <div data-value="USD">Dollar ($)</div>
      <div data-value="GBP">Pound (£)</div>
      <div data-value="EUR">Euro (€)</div>
      <div data-value="INR">Rupee (₹)</div>
    </div>
</input>
</div>
    );
};
export default Currency;
