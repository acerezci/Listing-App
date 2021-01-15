import { ValuesProps } from "./../containers/AddLinkContainer/index";

const getLocalStorage = (key: string) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || "[]");

  return savedValue;
};

const saveLocalStorage = (key: string, value: ValuesProps[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

const deleteItemLocalStorage = (key: string, id: string) => {
  const savedValue = getLocalStorage(key);
  const deletedLocalStorage = savedValue.filter((item: ValuesProps) => item.id !== id);
  saveLocalStorage(key, deletedLocalStorage);
};

const changeVoteItemLocalStorage = (key: string, id: string, value: number) => {
  const savedValue = getLocalStorage(key);
  const changedVoteLocalStorage = savedValue.map((item: ValuesProps) => {
    if (item.id === id) {
      item.vote += value;
    }

    return item;
  });
  saveLocalStorage(key, changedVoteLocalStorage);
};

export { getLocalStorage, saveLocalStorage, deleteItemLocalStorage, changeVoteItemLocalStorage };
