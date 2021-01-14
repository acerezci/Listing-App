import React from "react";
import Input from "../../components/Input";
import useForm from "../../Hooks/useForm";
import validate from "../../utils/validate";

const AddItemContainer: React.FC = () => {
  const { handleChange, values, handleSubmit, errors } = useForm(validate);

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
          value={values.linkName}
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

export default AddItemContainer;
