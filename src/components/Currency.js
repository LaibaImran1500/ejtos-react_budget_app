import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const {currency} = useContext(AppContext);
    const [selectedCurrency, setCurrency ] = useState(currency);
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span> {currency} {selectedCurrency === 'USD' ? '$' : selectedCurrency === 'GBP' ? '£' : selectedCurrency === 'EUR' ? '€' : '₹'} {currency}</span>
      <select value={selectedCurrency} onChange={handleCurrencyChange}>
        <option value="USD">$ Dollar</option>
        <option value="GBP">£ Pound</option>
        <option value="EUR">€ Euro</option>
        <option value="INR">₹ Rupee</option>
      </select>
</div>
    );
};
export default Currency;
