import React, { useEffect, useState } from "react";
import Item from "../../components/Item";
import ToastrMessage from "../../components/ToastrMessage";
import { localStorageKey } from "../../utils/helpers";
import { getLocalStorage, saveLocalStorage } from "../../utils/localStorage";
import { sortingByDate } from "../../utils/sorting";
import { ValuesProps } from "../AddLinkContainer";

const ListContainer: React.FC = () => {
  const localStorageData = getLocalStorage(localStorageKey);
  const [data, setData] = useState<ValuesProps[]>(sortingByDate([...localStorageData]));
  const [visibleToastrMessage, setVisibleToastrMessage] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const perPage: number = 5;
  const dataLength = data.length;
  const lastIndeOfItem = dataLength;

  useEffect(() => {
    saveLocalStorage(localStorageKey, data);

    console.log(data.slice(currentPage, lastIndeOfItem));
  }, [data]);

  useEffect(() => () => setVisibleToastrMessage(false), []);

  return (
    <div className="flex flex-col justify-center items-center">
      {data.length > 0 ? (
        data.map((item: ValuesProps, index: number) => (
          <Item
            setVisibleToastrMessage={setVisibleToastrMessage}
            setData={setData}
            item={item}
            key={`${item.linkName}${item.id}${index}`}
            linkName={item.linkName}
            id={item.id}
            createdDate={item.createdDate}
            vote={item.vote}
          />
        ))
      ) : (
        <div className="mt-4 text-2xl gray-900">Your Link List is Empty</div>
      )}
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
