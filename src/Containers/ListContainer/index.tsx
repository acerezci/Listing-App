import React, { useEffect, useState } from "react";
import Item from "../../Components/Item";
import Pagination from "../../Components/Pagination";
import Sorting from "../../Components/Sorting";
import ToastrMessage from "../../Components/ToastrMessage";
import { localStorageKey } from "../../utils/helpers";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage";
import { sortingByDate } from "../../utils/sorting";
import { ValuesProps } from "../AddLinkContainer";

const ListContainer: React.FC = () => {
  const localStorageData = getLocalStorage(localStorageKey);
  const [data, setData] = useState<ValuesProps[]>(sortingByDate([...localStorageData]));
  const [visibleToastrMessage, setVisibleToastrMessage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const perPage = 5;
  const dataLength = data.length;
  const totalPage = Math.ceil(dataLength / perPage);
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;

  useEffect(() => {
    saveLocalStorage(localStorageKey, data);
  }, [data]);

  useEffect(() => () => setVisibleToastrMessage(false), []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Sorting data={data} setData={setData} />
      {data.length > 0 ? (
        data
          .slice(indexOfFirstPost, indexOfLastPost)
          .map((item: ValuesProps, index: number) => (
            <Item
              setVisibleToastrMessage={setVisibleToastrMessage}
              setData={setData}
              item={item}
              key={`${item.linkName}${item.id}${index}`}
            />
          ))
      ) : (
        <div className="mt-4 text-2xl gray-900">Your Link List is Empty</div>
      )}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={totalPage} />
      <ToastrMessage
        position="rightBottom"
        visible={visibleToastrMessage}
        type="success"
        text="The Link Was Deleted Successfully!"
      />
    </div>
  );
};

export default ListContainer;
