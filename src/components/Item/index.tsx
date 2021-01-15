import React, { useState } from "react";
import { DeleteIcon } from "../../assets/Icons";

const Item: React.FC<Props> = (props) => {
  const [deleteStyle, setDeleteStyle] = useState<deleteStyleType>("hidden");

  const onMouseEnter = () => {
    setDeleteStyle("block");
  };

  const onMouseLeave = () => {
    setDeleteStyle("hidden");
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="transition duration-500 ease-in-out shadow-sm hover:shadow-lg cursor-pointer w-6/12 flex justify-between items-center mt-4 border rounded-sm border-gray-400 h-12 px-3"
    >
      <div>
        <div>{props.linkName}</div>
      </div>
      <div className={deleteStyle}>
        <DeleteIcon />
      </div>
    </div>
  );
};

interface Props {
  linkName: string;
}

type deleteStyleType = "hidden" | "block";

export default Item;
