import { ValuesProps } from "./../containers/AddLinkContainer/index";
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

export { sortingByDate };
