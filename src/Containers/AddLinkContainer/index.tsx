import React, { useEffect, useRef, useState } from "react";
import Input from "../../Components/Input";
import ToastrMessage from "../../Components/ToastrMessage";
import useForm from "../../Hooks/useForm";
import getCurrentDate from "../../utils/date";
import { localStorageKey } from "../../utils/helpers";
import { saveLocalStorage, getLocalStorage } from "../../utils/localStorage";
import showToastrMessage from "../../utils/showToastrMessage";
import validate from "../../utils/validate";

const AddItemContainer: React.FC = () => {
  const [visibleToastMessage, setVisibleToastrMessage] = useState<boolean>(false);

  const submit = () => {
    const savedLocalStorageData = getLocalStorage(localStorageKey);
    const savedLocalStorageDataLength = savedLocalStorageData.length;
    const toBeSavedLocalStorageData = [
      { ...values, id: savedLocalStorageDataLength, vote: 0, createdDate: getCurrentDate() },
      ...savedLocalStorageData,
    ];
    saveLocalStorage(localStorageKey, toBeSavedLocalStorageData);
    showToastrMessage(setVisibleToastrMessage, 2000);
  };

  const { handleChange, values, handleSubmit, errors } = useForm(validate, submit);

  useEffect(() => () => setVisibleToastrMessage(false), []);

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
        {errors.linkName && <p className="error-text">{errors.linkName}</p>}
        <div className="flex justify-center mt-4">
          <button className="border rounded-sm border-gray-500 h-8 w-32" type="submit">
            Add
          </button>
        </div>
      </form>
      <ToastrMessage
        position="rightBottom"
        visible={visibleToastMessage}
        type="success"
        text="The Link Was Added Successfully!"
      />
    </div>
  );
};

export interface ValuesProps {
  linkName: string;
  id: number;
  vote: number;
  createdDate: string;
}

export default AddItemContainer;
