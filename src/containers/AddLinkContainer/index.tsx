import React from "react";
import Input from "../../components/Input";
import useForm from "../../Hooks/useForm";
import getCurrentDate from "../../utils/date";
import { saveLocalStorage, getLocalStorage } from "../../utils/localStorage";
import validate from "../../utils/validate";

const AddItemContainer: React.FC = () => {
  const localStorageKey = "link";

  const submit = () => {
    const savedLocalStorageData = getLocalStorage(localStorageKey);
    const savedLocalStorageDataLength = savedLocalStorageData.length;
    const toBeSavedLocalStorageData = [
      { ...values, id: savedLocalStorageDataLength, vote: 0, createdDate: getCurrentDate() },
      ...savedLocalStorageData,
    ];
    saveLocalStorage(localStorageKey, toBeSavedLocalStorageData);
  };

  const { handleChange, values, handleSubmit, errors } = useForm(validate, submit);

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit}>
        <Input
          containerClass="flex justify-center items-center"
          inputClass="border rounded-sm border-gray-500 h-8 p-2"
          labelClass="mr-2 text-xl"
          label="Link Name:"
          placeholder="Please Enter The Link Name"
          type="text"
          id="link"
          name="linkName"
          value={values.linkName}
          onChange={handleChange}
        />
        {errors.linkName && (
          <p className="text-sm text-red-700 text-right mt-1">{errors.linkName}</p>
        )}
        <div className="flex justify-center mt-4">
          <button className="border rounded-sm border-gray-500 h-8 w-32" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export interface ValuesProps {
  linkName: string;
  id: string;
  vote: number;
  createdDate: string;
}

export default AddItemContainer;
