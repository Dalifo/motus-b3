import React from 'react';

const firstLine = 'AZERTYUIOP';
const secondLine = 'QSDFGHJKLM';
const thirdLine = 'WXCVBN⌫⏎';

const Keyboard: React.FC = () => (
  <div className="flex justify-center items-center flex-col mt-12">
    <div className="flex">
      {firstLine.split('').map((value) => (
        <button key={value} type="button" className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1">
          {value}
        </button>
      ))}
    </div>

    <div className="flex">
      {secondLine.split('').map((value) => (
        <button key={value} type="button" className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1">
          {value}
        </button>
      ))}
    </div>

    <div className="flex">
      {thirdLine.split('').map((value) => (
        <button key={value} type="button" className="w-8 h-8 bg-gray-200 rounded-md flex items-center justify-center m-1">
          {value}
        </button>
      ))}
    </div>
  </div>
);

export default Keyboard;
