import React from 'react';
import './index.css'; 
import ConverterWindow from './components/ConverterWindow';

const App = () => {

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <ConverterWindow/>
      {/* <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">Currency Converter</h1>
        
        <div className="mb-4">
          <Input
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
          />
        </div>
        
        <div className="mb-4">
          <Select
            value={fromCurrency}
            onChange={(value) => setFromCurrency(value)}
            className="w-full"
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </div>

        <div className="mb-4">
          <Select
            value={toCurrency}
            onChange={(value) => setToCurrency(value)}
            className="w-full"
          >
            {currencies.map((currency) => (
              <Option key={currency} value={currency}>
                {currency}
              </Option>
            ))}
          </Select>
        </div>

        <div className="text-center">
          <Button type="primary" loading={loading} onClick={convertCurrency}>
            Convert
          </Button>
        </div>

        {convertedAmount && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">
              {amount} {fromCurrency} = {convertedAmount} {toCurrency}
            </h2>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default App;
