import React, { useState } from 'react';
import BillInput from './components/BillInput';
import TipInput from './components/TipInput';
import SplitResult from './components/SplitResult';
import ReceiptUpload from './components/ReceiptUpload'; // Import the new component
import './App.css';

function App() {
  const [totalBill, setTotalBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [customTip, setCustomTip] = useState(0);
  const [useCustomTip, setUseCustomTip] = useState(false);

  const calculateSplit = () => {
    let tipAmount = useCustomTip ? customTip : (totalBill * tipPercentage) / 100;
    const totalWithTip = totalBill + tipAmount;
    return totalWithTip / numberOfPeople;
  }

  return (
    <div className="app-container">
      <ReceiptUpload setTotalBill={setTotalBill} setTipPercentage={setTipPercentage} />
      
      <div className="top-section">
        <BillInput 
          totalBill={totalBill} 
          setTotalBill={setTotalBill} 
          numberOfPeople={numberOfPeople} 
          setNumberOfPeople={setNumberOfPeople} 
        />
        <TipInput 
          tipPercentage={tipPercentage} 
          setTipPercentage={setTipPercentage} 
          customTip={customTip}
          setCustomTip={setCustomTip}
          useCustomTip={useCustomTip}
          setUseCustomTip={setUseCustomTip} 
        />
      </div>

      <div className="total-amount">
        <div className="circle">
          <h2>Total</h2>
          <p>{totalBill.toFixed(2)}</p>
        </div>
      </div>

      <div className="bottom-section">
        <SplitResult result={calculateSplit()} numberOfPeople={numberOfPeople} />
      </div>
    </div>
  );
}

export default App;
