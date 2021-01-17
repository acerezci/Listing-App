import {
  sortingByDate,
  ascendingSortingByVote,
  descendingSortingByVote,
} from "../../utils/sorting";

describe("Sorting Test", () => {
  const mockItem = [
    {
      linkName: "link1",
      id: 1,
      vote: 3,
      createdDate: "18/01/2021 13:55:27",
    },
    {
      linkName: "link2",
      id: 2,
      vote: 4,
      createdDate: "16/01/2021 23:00:16",
    },
    {
      linkName: "link3",
      id: 3,
      vote: 2,
      createdDate: "17/01/2021 13:55:01",
    },
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should output return sorting by date", () => {
    const sortingByDateReal = sortingByDate(mockItem);
    const sortedData = [
      {
        linkName: "link1",
        id: 1,
        vote: 3,
        createdDate: "18/01/2021 13:55:27",
      },
      {
        linkName: "link3",
        id: 3,
        vote: 2,
        createdDate: "17/01/2021 13:55:01",
      },
      {
        linkName: "link2",
        id: 2,
        vote: 4,
        createdDate: "16/01/2021 23:00:16",
      },
    ];

    expect(sortingByDateReal).toStrictEqual(sortedData);
  });

  it("should output return sorting by vote ascending", () => {
    const ascendingSortingByVoteReal = ascendingSortingByVote(mockItem);
    const sortedData = [
      {
        linkName: "link2",
        id: 2,
        vote: 4,
        createdDate: "16/01/2021 23:00:16",
      },
      {
        linkName: "link1",
        id: 1,
        vote: 3,
        createdDate: "18/01/2021 13:55:27",
      },
      {
        linkName: "link3",
        id: 3,
        vote: 2,
        createdDate: "17/01/2021 13:55:01",
      },
    ];

    expect(ascendingSortingByVoteReal).toStrictEqual(sortedData);
  });

  it("should output return sorting by vote descending", () => {
    const descendingSortingByVoteReal = descendingSortingByVote(mockItem);
    const sortedData = [
      {
        linkName: "link3",
        id: 3,
        vote: 2,
        createdDate: "17/01/2021 13:55:01",
      },
      {
        linkName: "link1",
        id: 1,
        vote: 3,
        createdDate: "18/01/2021 13:55:27",
      },
      {
        linkName: "link2",
        id: 2,
        vote: 4,
        createdDate: "16/01/2021 23:00:16",
      },
    ];

    expect(descendingSortingByVoteReal).toStrictEqual(sortedData);
  });
});
