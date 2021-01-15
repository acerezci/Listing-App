import React, { useEffect, useRef, useState } from "react";
import Item from "../../components/Item";
import { ValuesProps } from "../../Hooks/useForm";
import { getLocalStorage } from "../../utils/localStorage";

const ListContainer: React.FC = () => {
  const localStorageKey = "link";
  const [data, setData] = useState(getLocalStorage(localStorageKey));
  const [style, setStyle] = useState("hidden");
  const deleteRef = useRef(null);

  const hoverOn = (e: React.MouseEvent) => {
    // e.currentTarget.lastElementChild.att
    setStyle("block");
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {data.map((item: ValuesProps, index: number) => (
        <Item key={`${item.linkName}${index}`} linkName={item.linkName} />
      ))}
    </div>
  );
};

export default ListContainer;
