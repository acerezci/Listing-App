import React from "react";
import { DeleteWarningIcon } from "../../assets/Icons";

const DeletePopup: React.FC<Props> = ({ title, text, setVisible, deleteItem }) => {
  const cancel = () => {
    setVisible(false);
  };

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <DeleteWarningIcon width={24} />
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  data-testid="deletepopup-title"
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  {title}
                </h3>
                <div className="mt-2">
                  <p data-testid="deletepopup-text" className="text-sm text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="rounded-md border shadow-sm px-4 py-2 bg-red-600 font-medium text-white focus:outline-none ml-3"
              onClick={deleteItem}
              data-testid="deletepopup-delete"
            >
              Delete
            </button>
            <button
              onClick={cancel}
              type="button"
              className="focus:outline-none border py-2 px-4 rounded-md shadow-sm"
              data-testid="deletepopup-cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  title: string;
  text: string;
  setVisible: (e: boolean) => void;
  deleteItem: () => void;
}

export default DeletePopup;
