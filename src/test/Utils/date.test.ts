import moment from "moment";

import getCurrentDate from "../../utils/date";

describe("Test Date", () => {
  it("should output format date", () => {
    const currentDate = new Date();
    const formatedDate = moment(currentDate).format("DD/MM/YYYY HH:mm:ss");

    const getCurrenDateReal = getCurrentDate();
    expect(getCurrenDateReal).toBe(formatedDate);
  });
});
