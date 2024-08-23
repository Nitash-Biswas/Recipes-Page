import React from "react";

function Loader() {
  return (
    <>
      <div className="flex flex-col rounded-md bg-base-100 overflow-hidden p-3 relative">
        <div className="skeleton h-32 w-full mb-2"></div>
        <div className="skeleton h-4 w-28 mb-2"></div>
        <div className="skeleton h-4 w-full mb-2"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>
    </>
  );
}

export default Loader;
