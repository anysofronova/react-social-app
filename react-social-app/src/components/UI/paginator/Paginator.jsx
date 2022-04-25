import React from "react";
import "./paginator.scss";
import Pagination from "@mui/material/Pagination";

const Paginator = ({ onchangeCurrentPage, totalUsersCount, pageSize }) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) pages.push(i);

  return (
    <div className="paginator_buttons">
      <Pagination
        count={pages.length}
        onChange={(_, num) => onchangeCurrentPage(num)}
      />
    </div>
  );
};

export default Paginator;
