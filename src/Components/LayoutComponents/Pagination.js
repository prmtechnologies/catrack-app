import React from "react";

const Pagination = props => {
  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item" onClick={props.prevPage}>
            <span className="page-link" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span className="sr-only">Previous</span>
            </span>
          </li>
          <li className="page-item">
            <input
              type="text"
              value={props.currentPage}
              //   onChange={props.currentPageChange}
              className="page-link"
              style={{ width: "45px" }}
            />
          </li>
          <li className="page-item">
            <span
              className="page-link"
              aria-label="Next"
              onClick={props.nextPage}
            >
              <span aria-hidden="true">&raquo;</span>
              <span className="sr-only">Next</span>
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
