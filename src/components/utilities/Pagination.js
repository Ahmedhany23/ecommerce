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
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="flex gap-5 p-3 bg-[var(--blue-dark)] mt-20 w-fit mx-auto justify-center items-center text-white"
        activeClassName="text-[var(--light-color)]"
        pageClassName="hover:text-[var(--light-color)]"
      />
    );
  }