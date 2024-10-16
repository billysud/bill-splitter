import React from 'react';

function BillInput({ totalBill, setTotalBill, numberOfPeople, setNumberOfPeople }) {
  return (
    <div>
      <label>Total Bill: </label>
      <input 
        type="number" 
        value={totalBill} 
        onChange={(e) => setTotalBill(parseFloat(e.target.value))}
      />
      <br/>
      <label>Number of People: </label>
      <input 
        type="number" 
        value={numberOfPeople} 
        onChange={(e) => setNumberOfPeople(parseInt(e.target.value))}
      />
    </div>
  );
}

export default BillInput;

