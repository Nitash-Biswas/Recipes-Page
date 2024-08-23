import React from "react";

function Pagination({ nPages, currentPage, setCurrentPage }) {
  // if nPages is 5, the resulting pageNumbers array would be [1, 2, 3, 4, 5].
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="flex gap-2 items-center justify-center">
       
        <button
          className={`btn btn-primary px-2  ${
            currentPage === 1 ? "btn-disabled" : ""
          }`}
          onClick={goToPrevPage}
        >
          Prev
        </button>
        {pageNumbers?.map((number) => (
          <button
            key={number}
            onClick={() => setCurrentPage(number)}
            className={` btn text-lg  ${
              currentPage === number ? "text-primary" : ""
            }`}
          >
            {number}
          </button>
        ))}
        <button
          className={` btn btn-primary px-2 ${
            currentPage === nPages ? "btn-disabled" : ""
          }`}
          onClick={goToNextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
