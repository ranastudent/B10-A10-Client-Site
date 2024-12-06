import React from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

const TooltipExample = () => {
  return (
    <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Tooltip Example</h2>
      <button data-tip="Hello, I am a tooltip!" className="btn btn-primary">
        Hover over me
      </button>
      <ReactTooltip />
    </div>
  );
};

export default TooltipExample;
