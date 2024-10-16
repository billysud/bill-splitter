import React from 'react';

function TipInput({ tipPercentage, setTipPercentage, customTip, setCustomTip, useCustomTip, setUseCustomTip }) {
  return (
    <div>
      <label>
        <input 
          type="radio" 
          checked={!useCustomTip} 
          onChange={() => setUseCustomTip(false)}
        /> 
        Tip Percentage
      </label>
      { !useCustomTip && (
        <input 
          type="number" 
          value={tipPercentage} 
          onChange={(e) => setTipPercentage(parseFloat(e.target.value))}
        />
      )}
      <br />
      <label>
        <input 
          type="radio" 
          checked={useCustomTip} 
          onChange={() => setUseCustomTip(true)}
        /> 
        Custom Tip Amount
      </label>
      { useCustomTip && (
        <input 
          type="number" 
          value={customTip} 
          onChange={(e) => setCustomTip(parseFloat(e.target.value))}
        />
      )}
    </div>
  );
}

export default TipInput;
