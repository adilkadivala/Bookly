import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Siddebar";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { DeleteModal } from "./layouts/Modals";

const Category = () => {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, seteditModalOpen] = useState(false);
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);
  const [gettingCategoryData, setGettingCategoryData] = useState();
  const [categoryIdToDelete, setCategoryIdToDelete] = useState(null);
  const [addingCategoryData, setAddingCategoryData] = useState({
    category_Heading: "",
    category_Description: "",
    category_Link: "",
  });
  const [updateCategoryData, setUpdateCategoryData] = useState({
    category_Heading: "",
    category_Description: "",
    category_Link: "",
  });

  // open Delete modal
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  // close Delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // open Edit modal
  const openEditModal = (category) => {
    setUpdateCategoryData({
      id: category.id,
      category_Heading: category.category_Heading,
      category_Description: category.category_Description,
      category_Link: category.category_Link,
    });
    seteditModalOpen(true);
  };

  // Close Edit modal
  const closeEditModal = () => {
    seteditModalOpen(false);
  };

  // sidebar
  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  // darkmode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // getting data from server side...
  const getCategoryData = () => {
    axios
      .get("http://localhost:4000/getCategoryData")
      .then((response) => {
        setGettingCategoryData(response.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching from getting category data function:",
          error
        );
      });
  };

  // adding data from deshboard and saving it....

  const addCategoryData = () => {
    if (
      !addingCategoryData.category_Heading ||
      !addingCategoryData.category_Description ||
      !addingCategoryData.category_Link
    ) {
      toast.error("All Field Is Required");
      return;
    }

    const formData = new FormData();
    formData.append("category_Heading", addingCategoryData.category_Heading);
    formData.append(
      "category_Description",
      addingCategoryData.category_Description
    );
    formData.append("category_Link", addingCategoryData.category_Link);

    axios
      .post("http://localhost:4000/addCategoryData", formData)
      .then(() => {
        getCategoryData();
        setAddingCategoryData({
          category_Heading: "",
          category_Description: "",
          category_Link: "",
        });
        toast.success("Data Added Successfully");
      })
      .catch((error) => {
        console.error("Error adding category data:", error);
        toast.error("Some internally error");
      });
  };

  const deleteCategory = useCallback((id) => {
    axios
      .delete(`http://localhost:4000/deleteCategoryDate/${id}`)
      .then(() => {
        getCategoryData();
        setDeleteModalOpen(false);
        toast.success("Deleted Successfully");
      })
      .catch((error) => {
        console.error("Error deleting category data:", error);
        toast.error("Some internel error!");
      });
  }, []);

  // update data and save it

  const submitUpdateData = () => {
    if (
      !updateCategoryData.category_Heading ||
      !updateCategoryData.category_Description ||
      !updateCategoryData.category_Link
    ) {
      toast.error("All Field Is Required");
      return;
    }
    const formData = new FormData();
    formData.append("category_Heading", updateCategoryData.category_Heading);
    formData.append(
      "category_Description",
      updateCategoryData.category_Description
    );
    formData.append("category_Link", updateCategoryData.category_Link);

    axios
      .put(
        `http://localhost:4000/updateCategoryData/${updateCategoryData.id}`,
        formData
      )
      .then(() => {
        getCategoryData();
        closeEditModal();
      })
      .catch((error) => {
        if (error) {
          console.log("Category not found or no changes made");
        } else {
          console.error("Error updating category data:", error.message);
        }
      });
  };

  useEffect(() => {
    getCategoryData();

    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [deleteCategory]);

  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <DeleteModal
        isDeleteOpen={deleteModalOpen}
        onCloseDelete={closeDeleteModal}
        onDelete={deleteCategory}
        itemId={categoryIdToDelete}
      />

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

      <div id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Category</h1>
              <ul className="breadcrumb">
                <li>
                  <NavLink className="active" to="/dashboard">
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <i className="fa-solid fa-chevron-right"></i>
                </li>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink to="/product" className="btn-download">
              <i className="fa-solid fa-plus bx bx-plus"></i>
              <span className="text">Add Product</span>
            </NavLink>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Category Details</h3>
                <i className="fa-solid fa-magnifying-glass bx bx-search"></i>
                <i className="fa-solid fa-filter bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Link</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {gettingCategoryData &&
                    gettingCategoryData.map((category) => {
                      return (
                        <>
                          <tr key={category.id}>
                            <td>{category.category_Heading}</td>
                            <td>{category.category_Description}</td>
                            <td>
                              <NavLink to={`/product${category.id}`}>
                                {category.category_Link}
                              </NavLink>
                            </td>

                            <td>
                              <button
                                className="status completed"
                                style={{ marginRight: "5px" }}
                                onClick={() => openEditModal(category)}
                              >
                                <i className="fa-solid fa-pen"></i>
                              </button>

                              <button
                                type="button"
                                className="status pending"
                                onClick={() => {
                                  openDeleteModal();
                                  setCategoryIdToDelete(category.id);
                                }}
                              >
                                <i className="fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                </tbody>
              </table>
            </div>

            <div className="todo">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addCategoryData(e);
                }}
                method="post"
                encType="multipart/form-data"
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Category Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Category Title"
                    value={addingCategoryData.category_Heading}
                    onChange={(e) =>
                      setAddingCategoryData({
                        ...addingCategoryData,
                        category_Heading: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Category Discription
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Category Discription"
                    value={addingCategoryData.category_Description}
                    onChange={(e) =>
                      setAddingCategoryData({
                        ...addingCategoryData,
                        category_Description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="categoryLink" className="form-label">
                    Category Link
                  </label>
                  <input
                    className="form-control"
                    id="categoryLink"
                    rows="3"
                    placeholder="Category Link"
                    value={addingCategoryData.category_Link}
                    onChange={(e) =>
                      setAddingCategoryData({
                        ...addingCategoryData,
                        category_Link: e.target.value,
                      })
                    }
                  ></input>
                </div>

                <button className="btn-download" type="submit">
                  Publish
                </button>
              </form>
            </div>
          </div>
        </main>
      </div>

      {/* edit modal  */}
      <div
        className="modal fade show position-fixed"
        tabIndex="-1"
        style={{ display: editModalOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div>
              <button
                type="button"
                style={{
                  backgroundColor: "#db504a",
                  color: "#fff",
                  border: "none",
                }}
                className=" position-absolute top-0 end-0 py-2 px-3"
                onClick={closeEditModal}
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body mt-4 mb-2 mx-3 p-0">
              <p className="modal-title fs-5 w-50" id="exampleModalLabel">
                Edit Category
              </p>
              <br />
              <form method="post" encType="multipart/form-data">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Category Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Category Title"
                    value={updateCategoryData.category_Heading || ""}
                    onChange={(e) =>
                      setUpdateCategoryData({
                        ...updateCategoryData,
                        category_Heading: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Category Description
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Category Discription"
                    value={updateCategoryData.category_Description || ""}
                    onChange={(e) =>
                      setUpdateCategoryData({
                        ...updateCategoryData,
                        category_Description: e.target.value,
                      })
                    }
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Category Link
                  </label>
                  <input
                    className="form-control"
                    id="categoryLink"
                    rows="3"
                    placeholder="Category Link"
                    value={updateCategoryData.category_Link || ""}
                    onChange={(e) =>
                      setUpdateCategoryData({
                        ...updateCategoryData,
                        category_Link: e.target.value,
                      })
                    }
                  ></input>
                </div>
              </form>
            </div>
            <div className="d-flex justify-content-end p-2">
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
                onClick={closeEditModal}
              >
                CANCEL
              </button>
              <button
                type="button"
                className="py-2 px-4"
                style={{
                  backgroundColor: "#db504a",
                  border: "none",
                  color: "#FFF",
                  marginLeft: "5px",
                  borderRadius: "5px",
                }}
                onClickCapture={submitUpdateData}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* edit modal  */}
    </>
  );
};

export default Category;
