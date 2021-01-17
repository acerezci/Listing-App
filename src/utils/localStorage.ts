import { ValuesProps } from "../Containers/AddLinkContainer/index";

const getLocalStorage = (key: string) => {
  const savedValue = JSON.parse(localStorage.getItem(key) || "[]");

  return savedValue;
};

const saveLocalStorage = (key: string, value: ValuesProps[]): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getLocalStorage, saveLocalStorage };
