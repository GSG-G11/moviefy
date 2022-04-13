import React from 'react';
import PropTypes from 'prop-types';
import './css/Pagenation.css';
import { Button } from '../eleComponent';

function Pagenation({ setPage }) {
  const pageNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChangePageNum = (pageNum) => {
    setPage(pageNum);
  };
  return (
    <div>
      {pageNumber.map((pageNum) => <Button key={pageNum} className="pagenationBtn" handleFunc={() => handleChangePageNum(pageNum)} title={pageNum} />)}

    </div>
  );
}
Pagenation.propTypes = {
  setPage: PropTypes.func.isRequired,
};

export default Pagenation;
