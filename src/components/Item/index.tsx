import React, { useState } from "react";
import { DeleteIcon, DissLikeIcon, LikeIcon } from "../../assets/Icons";
import { ValuesProps } from "../../containers/AddLinkContainer";
import {
  deleteItemLocalStorage,
  getLocalStorage,
  changeVoteItemLocalStorage,
} from "../../utils/localStorage";

const Item: React.FC<Props> = (props) => {
  const localStorageKey = "link";
  const increaseAmount = 1;
  const decreaseAmount = -1;
  const [deleteStyle, setDeleteStyle] = useState<deleteStyleType>("hidden");

  const onMouseEnter = () => {
    setDeleteStyle("block");
  };

  const onMouseLeave = () => {
    setDeleteStyle("hidden");
  };

  const deleteItem = () => {
    deleteItemLocalStorage(localStorageKey, props.id);
    props.setData(getLocalStorage(localStorageKey));
  };

  const upVote = () => {
    changeVoteItemLocalStorage(localStorageKey, props.id, increaseAmount);
    props.setData(getLocalStorage(localStorageKey));
  };

  const downVote = () => {
    changeVoteItemLocalStorage(localStorageKey, props.id, decreaseAmount);
    props.setData(getLocalStorage(localStorageKey));
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="transition duration-500 ease-in-out shadow-sm hover:shadow-xl w-6/12 flex justify-between items-center mt-4 py-1 border rounded-sm border-gray-400 h-28 px-3"
    >
      <div className="flex flex-col h-full justify-between">
        <div className="text-lg font-semibold">{props.linkName}</div>
        <div className="flex text-sm font-medium">
          <div>Vote : {props.vote}</div>
          <div className="flex flex-col ml-3">
            <div onClick={upVote} className="flex justify-between items-center cursor-pointer">
              <span className="mr-1.5">Up Vote</span>
              <LikeIcon width={14} />
            </div>
            <div onClick={downVote} className="flex justify-between items-center cursor-pointer">
              <span className="mr-1.5">Down Vote</span>
              <DissLikeIcon width={14} />
            </div>
          </div>
        </div>
        <div className="text-xs font-light">Created Date : {props.createdDate}</div>
      </div>
      <div className={`${deleteStyle} cursor-pointer h-full `} onClick={deleteItem}>
        <DeleteIcon />
      </div>
    </div>
  );
};

interface Props {
  linkName: string;
  id: string;
  vote: number;
  createdDate: string;
  setData: (e: ValuesProps[]) => void;
}

type deleteStyleType = "hidden" | "block";

export default Item;
