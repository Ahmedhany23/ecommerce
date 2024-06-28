"use client"
import ReactPaginate from "react-paginate";
export default function Pagination() {
  
  
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        pageCount={100}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        containerClassName="flex  p-3 mt-20  mx-auto justify-center items-center text-white"
        activeClassName="text-white"
        pageClassName="mx-[6px] bg-[#202020] rounded-md  p-1 maw-w-auto min-w-[32px] height-[32px] flex items-center justify-center cursor-pointer"
        previousClassName= "block align-middle text-lg mx-[6px] px-3 py-1 bg-[#202020] rounded-md  maw-w-auto min-w-[32px] height-[32px] flex items-center justify-center cursor-pointer "
        nextClassName=  "block align-middle text-lg mx-[6px] bg-[#202020] rounded-md  p-1 maw-w-auto min-w-[32px] height-[32px] flex items-center justify-center cursor-pointer "
      />
    );
  }