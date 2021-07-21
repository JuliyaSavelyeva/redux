import React from 'react';

const Pagination = ({ goPrev, goNext, currentPage, totalItems, itemsPerPage }) => {
  const actualPage = currentPage + 1;
  const isPrevPageAvailbale = actualPage !== 1;
  const isNextPageAvailbale = Math.ceil(totalItems / itemsPerPage) !== actualPage;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrev} disabled={!isPrevPageAvailbale}>
        {isPrevPageAvailbale && '←'}
      </button>
      <span className="pagination__page">{actualPage}</span>
      <button className="btn" onClick={goNext} disabled={!isNextPageAvailbale}>
        {isNextPageAvailbale && '→'}
      </button>
    </div>
  );
};

export default Pagination;
