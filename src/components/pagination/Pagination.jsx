import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css'

const Pagination = ({ onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    onPageChange(newPage);
  };

  return (
    <>
    <div className={styles.pagination}>
      <button className={styles.prevBtn} onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
        Previous
      </button>
      <button className={styles.nextBtn} onClick={() => handlePageChange(currentPage + 1)}>Next</button>
    </div>
    </>
  );
};

Pagination.propTypes = {
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
