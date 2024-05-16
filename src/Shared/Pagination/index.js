import React from 'react'
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Pagination = ({className,subData,page,setPage,setPageCount}) => {
  return (
    <div className="!flex  gap-2  !text-[1.2rem] justify-end pr-2 py-2  items-center bg-purple-300">
    <div className="flex gap-1 items-center">
      <span className="">Items per pages</span>
      <select
        className="outline-none"
        onChange={(e) => setPageCount(e.target.value)}
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <span>{page}</span>
      <span>of</span>
      <span>{subData?.total_pages}</span>
      <span
        className="!text-sm cursor-pointer"
        onClick={() => (page - 1 <= 0 ? 1 : setPage(page - 1))}
      >
        <ArrowBackIosNewIcon fontSize="small" />
      </span>
      &nbsp;
      <span
        className="cursor-pointer"
        onClick={() =>
          subData?.total_pages < page + 1
            ? subData?.total_pages
            : setPage(page + 1)
        }
      >
        <ArrowForwardIosIcon fontSize="small" color="black" />
      </span>
    </div>
  </div>
  )
}

export default Pagination