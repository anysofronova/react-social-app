import React from "react";
import "./paginator.scss";

const Paginator = ({
  onchangeCurrentPage,
  currentPage,
  totalUsersCount,
  pageSize,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
    if (i === 20) break;
  }
  return (
    <div className="paginator_buttons">
      {pages.map((i) => (
        <button
          onClick={() => onchangeCurrentPage(i)}
          key={i}
          className={currentPage === i ? "selectedPage" : ""}
        >
          {i}
        </button>
      ))}
    </div>
  );
};

export default Paginator;
