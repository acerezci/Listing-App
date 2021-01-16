import React, { useState } from "react";
import { DeleteIcon, DissLikeIcon, LikeIcon } from "../../assets/Icons";
import { ValuesProps } from "../../containers/AddLinkContainer";
import showToastrMessage from "../../utils/showToastrMessage";
import DeletePopup from "../DeletePopup";

const Item: React.FC<Props> = ({
  vote,
  createdDate,
  linkName,
  setData,
  item,
  setVisibleToastrMessage,
}) => {
  const [deleteStyle, setDeleteStyle] = useState<deleteStyleType>("hidden");
  const [visibleDeletePopup, setVisibleDeletePopup] = useState<boolean>(false);

  const onMouseEnter = () => {
    setDeleteStyle("block");
  };

  const onMouseLeave = () => {
    setDeleteStyle("hidden");
  };

  const showDeletePopup = () => {
    setVisibleDeletePopup(true);
  };

  const deleteItem = () => {
    showToastrMessage(setVisibleToastrMessage, 1000);
    setData((prevState: ValuesProps[]) => {
      const deletedPrevState = prevState.filter((el) => el !== item);

      return deletedPrevState;
    });
  };

  const upVote = () => {
    item.vote += 1;
    setData((prevState: ValuesProps[]) => [...prevState]);
  };

  const downVote = () => {
    item.vote += -1;
    setData((prevState: ValuesProps[]) => [...prevState]);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="item-container">
      <div className="flex h-full">
        <div className="flex flex-col justify-between">
          <div className="text-lg font-semibold">{linkName}</div>
          <div className="text-xs font-light">Created Date : {createdDate}</div>
        </div>
        <div className="flex flex-col justify-center items-center text-sm font-medium">
          <div className="text-xl">Vote : {vote}</div>
          <div className="flex">
            <div onClick={upVote} className="flex justify-between items-center cursor-pointer mr-3">
              <span className="mr-1.5">Up Vote</span>
              <LikeIcon width={14} />
            </div>
            <div onClick={downVote} className="flex justify-between items-center cursor-pointer">
              <span className="mr-1.5">Down Vote</span>
              <DissLikeIcon width={14} />
            </div>
          </div>
        </div>
      </div>
      <div className={`${deleteStyle} cursor-pointer h-full`} onClick={showDeletePopup}>
        <DeleteIcon />
      </div>
      {visibleDeletePopup && (
        <DeletePopup
          deleteItem={deleteItem}
          setVisible={setVisibleDeletePopup}
          text="Are You Sure Want Delete The Item?"
          title="Delete Item"
        />
      )}
    </div>
  );
};

interface Props {
  linkName: string;
  id: number;
  vote: number;
  createdDate: string;
  setData: (e: any) => void;
  setVisibleToastrMessage: (e: boolean) => void;
  item: ValuesProps;
}

type deleteStyleType = "hidden" | "block";

export default Item;
