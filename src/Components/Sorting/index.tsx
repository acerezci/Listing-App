import React from "react";
import { AscendingIcon, DescendingIcon } from "../../assets/Icons";
import { ValuesProps } from "../../Containers/AddLinkContainer";
import { ascendingSortingByVote, descendingSortingByVote } from "../../utils/sorting";

const Sorting: React.FC<Props> = ({ data, setData }) => {
  const ascending = () => {
    const sortedData = ascendingSortingByVote(data);
    setData([...sortedData]);
  };

  const descending = () => {
    const sortedData = descendingSortingByVote(data);
    setData([...sortedData]);
  };

  return (
    <div className="flex w-5/12 justify-end">
      <div className="cursor-pointer" onClick={descending}>
        <DescendingIcon width={32} />
      </div>
      <div className="ml-3 cursor-pointer" onClick={ascending}>
        <AscendingIcon width={32} />
      </div>
    </div>
  );
};

interface Props {
  data: ValuesProps[];
  setData: (e: ValuesProps[]) => void;
}

export default React.memo(Sorting);
