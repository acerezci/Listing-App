import { dateFormatType } from "./helpers";
import moment from "moment";

const getCurrentDate = () => {
  const currentDate = new Date();
  const formatedDate = moment(currentDate).format(dateFormatType);

  return formatedDate;
};

export default getCurrentDate;
