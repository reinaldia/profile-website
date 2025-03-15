import React from "react";

const Tags = ({ name }) => {
  return (
    <button className={"cursor-default text-white rounded-md border-white border-2 px-2 py-1 text-xs"}>
      {name}
    </button>
  );
};

export default Tags;
