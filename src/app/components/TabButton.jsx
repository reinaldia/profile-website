import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-gray-400";

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 pb-1 font-semibold hover:text-gray-200 hover:border-b hover:border-purple-700 ${buttonClasses}`}
      >
        {children}
      </p>
    </button>
  );
};

export default TabButton;
