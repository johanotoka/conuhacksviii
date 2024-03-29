import React, { useState } from 'react';

const InflationCalculator = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [inflationRate, setInflationRate] = useState('');
  const [years, setYears] = useState('');
  const [futureValue, setFutureValue] = useState(null);

  const calculateFutureValue = () => {
    const principal = parseFloat(initialAmount);
    const rate = parseFloat(inflationRate) / 100;
    const time = parseFloat(years);

    const futureValueResult = principal * Math.pow(1 + rate, time);
    setFutureValue(futureValueResult.toFixed(2));
  };

  return (
    <div className="inflation-calculator-container">
      <h1 className='calculator-name'>Inflation Calculator</h1>

      <div>
        <label>
          <input
            type="number"
            placeholder='Initial Amount $'
            className='calculator-input'
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="number"
            placeholder='Annual Inflation Rate %'
            className='calculator-input'
            value={inflationRate}
            onChange={(e) => setInflationRate(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          <input
            type="number"
            placeholder='Years'
            className='calculator-input'
            value={years}
            onChange={(e) => setYears(e.target.value)}
          />
        </label>
      </div>

      <button className='btn' onClick={calculateFutureValue}>Calculate</button>

      {futureValue !== null && (
        <div>
          <h2>Future Value:</h2>
          <p>${futureValue}</p>
        </div>
      )}
    </div>
  );
};

export default InflationCalculator;
