import React, { useState } from "react";
import Item from "../../components/Item";
import { getLocalStorage } from "../../utils/localStorage";
import { ValuesProps } from "../AddLinkContainer";

const ListContainer: React.FC = () => {
  const localStorageKey = "link";
  const [data, setData] = useState<ValuesProps[]>(getLocalStorage(localStorageKey));

  return (
    <div className="flex flex-col justify-center items-center">
      {data.length > 0 ? (
        data.map((item: ValuesProps) => (
          <Item
            setData={setData}
            key={`${item.linkName}${item.id}`}
            linkName={item.linkName}
            id={item.id}
            createdDate={item.createdDate}
            vote={item.vote}
          />
        ))
      ) : (
        <div className="mt-4 text-2xl gray-900">Your Link List is Empty</div>
      )}
    </div>
  );
};

export default ListContainer;
