import React from "react";

const Pagination: React.FC<Props> = ({ currentPage, totalPage, setCurrentPage }) => {
  const totalPageArray = [...Array(totalPage)];
  const activeItemStyle = "bg-gray-900 text-white";

  const changePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-row mt-5">
      {totalPageArray.map((_, index) => {
        const page = index + 1;

        return (
          <div
            onClick={() => changePage(page)}
            key={index}
            className={`${currentPage === page && activeItemStyle}
            border rounded-md py-2 px-3 mr-3 shadow-sm hover:shadow-xl transition duration-500 ease-in-out cursor-pointer`}
          >
            <div>{page}</div>
          </div>
        );
      })}
    </div>
  );
};

interface Props {
  currentPage: number;
  totalPage: number;
  setCurrentPage: (e: number) => void;
}

export default React.memo(Pagination);
