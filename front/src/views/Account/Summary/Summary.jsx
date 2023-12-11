import React from 'react';

const Summary = () => {

    
  return (
      <div className="my-3 p-1 shadow-sm border">
        <div>
          <div className="m-1  p-1 flex justify-between">
            <label>Account balance: </label>
            <h1>{"$20000.00 "}</h1>
          </div>

          <div className="m-1  p-1 flex  justify-between">
            <label>Spending: </label>
            <h1>{"$12000.00 "}</h1>
          </div>

          <div className="m-1  p-1 flex justify-between">
            <label>Remaining: </label>
            <h1>{"$8000.00 "}</h1>
          </div>
        </div>
      </div>
  );
}

export default Summary;
