import React from 'react';

function SplitResult({ result, numberOfPeople }) {
  const bubbles = [];

  for (let i = 0; i < numberOfPeople; i++) {
    bubbles.push(
      <div key={i} className="bubble">
        Amount Due: ${result.toFixed(2)}
      </div>
    );
  }

  return <div className="bubbles-container">{bubbles}</div>;
}

export default SplitResult;
