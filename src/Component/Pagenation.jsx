import React from 'react';
import PropTypes from 'prop-types';
import './css/Pagenation.css';

function Pagenation({ setPage }) {
  const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChangePageNum = (pageNum) => {
    setPage(pageNum);
  };
  return (
    <div>
      <div>

        {pageNumber.map((pageNum) => <button key={pageNum} className="pagenationBtn" type="submit" onClick={() => handleChangePageNum(pageNum)}>{pageNum}</button>)}

      </div>
    </div>
  );
}
Pagenation.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Pagenation;
