import { ValuesProps } from "../Containers/AddLinkContainer/index";
import { dateFormatType } from "./helpers";
import moment from "moment";

const sortingByDate = (data: ValuesProps[]): ValuesProps[] => {
  const sortedData = data.sort((a: ValuesProps, b: ValuesProps): number => {
    const aCreatedDate = moment(a.createdDate, dateFormatType).format();
    const bCreatedDate = moment(b.createdDate, dateFormatType).format();

    if (aCreatedDate > bCreatedDate) {
      return -1;
    }

    return 0;
  });

  return sortedData;
};

const ascendingSortingByVote = (data: ValuesProps[]): ValuesProps[] => {
  const sortedData = data.sort((a: ValuesProps, b: ValuesProps) => b.vote - a.vote);

  return sortedData;
};

const descendingSortingByVote = (data: ValuesProps[]): ValuesProps[] => {
  const sortedData = data.sort((a: ValuesProps, b: ValuesProps) => a.vote - b.vote);

  return sortedData;
};

export { sortingByDate, ascendingSortingByVote, descendingSortingByVote };
