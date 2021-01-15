import moment from "moment";

const getCurrentDate = () => {
  const currentDate = new Date();
  const formatedDate = moment(currentDate).format("DD/MM/YYYY HH:mm:ss");

  return formatedDate;
};

export default getCurrentDate;
