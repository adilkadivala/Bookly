import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// delete modal
const DeleteModal = ({ isDeleteOpen, onCloseDelete, onDelete, itemId }) => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
  };

  const handleDelete = () => {
    if (isCheckboxChecked) {
      onDelete(itemId);
      onCloseDelete();
      setIsCheckboxChecked(false);
    } else {
      toast.error("Please check First");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {isDeleteOpen && (
        <div
          className="modal fade show position-fixed"
          tabIndex="-1"
          style={{ display: "block" }}
        >
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content ">
              <button
                type="button"
                style={{
                  backgroundColor: "#db504a",
                  color: "#fff",
                  border: "none",
                }}
                className=" position-absolute top-0 end-0 py-2 px-3"
                onClick={onCloseDelete}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              <div className="sub_container m-2">
                <div className="modal-body m-3">
                  <p>Are You Sure For Delete This Item ?</p>
                  <input
                    id="check"
                    type="checkbox"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange}
                  />{" "}
                  <span id="check">Yes, I'm sure!</span>
                </div>

                <div className="d-flex justify-content-end">
                  <button
                    type="button"
                    className="py-2 px-4"
                    style={{
                      backgroundColor: "#3c91e6",
                      border: "none",
                      color: "#FFF",
                      marginRight: "5px",
                      borderRadius: "5px",
                    }}
                    onClick={onCloseDelete}
                  >
                    CANCLE
                  </button>
                  <button
                    type="button"
                    className="py-2 px-4"
                    onClick={handleDelete}
                    style={{
                      backgroundColor: "#db504a",
                      border: "none",
                      color: "#FFF",
                      marginLeft: "5px",
                      borderRadius: "5px",
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { DeleteModal };
