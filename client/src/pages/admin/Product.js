import React, { useState, useEffect, useCallback } from "react";
import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Siddebar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import { DeleteModal } from "./layouts/Modals";

const Product = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, seteditModalOpen] = useState(false);
  const [isDarkMode, setDarkMode] = useState(false);
  const [gettingCategoryData, setGettingCategoryData] = useState();
  const [gettingProductData, setGettingProductData] = useState();
  const [productIdtoDelete, setProductIdToDelete] = useState(null);
  const [addingProductData, setAddingProductData] = useState({
    image: null,
    product_Title: "",
    product_Description: "",
    category_Id: "",
  });
  const [updatedProductData, setUpdateProductData] = useState({
    image: null,
    product_Title: "",
    product_Description: "",
    category_Id: "",
  });

  // pagination code starts here
  const [currentPage, setCurrentPage] = useState(1);
  const [DataPerPage] = useState(5);
  const [showBackButton, setShowBackButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    // window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getCurrentData = () => {
    const indexOfLastData = currentPage * DataPerPage;
    const indexOfFirstData = indexOfLastData - DataPerPage;
    const currentData = gettingProductData?.slice(
      indexOfFirstData,
      indexOfLastData
    );
    return currentData;
  };
  //pagination code ends here

  // sidebar
  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  //darkmode
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  // open Delete modal
  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  // close Delete modal
  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  // open Edit modal
  const openEditModal = (productData) => {
    console.log(productData.image);
    setUpdateProductData({
      id: productData.id,
      image: productData.image,
      product_Title: productData.product_Title,
      product_Description: productData.product_Description,
      category_Id: productData.category_Id,
    });
    seteditModalOpen(true);
  };

  // Close Edit modal
  const closeEditModal = () => {
    seteditModalOpen(false);
  };

  // get categody data
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
  //getting all product data
  const getProductData = () => {
    axios
      .get("http://localhost:4000/getProductData")
      .then((response) => {
        setGettingProductData(response.data);
      })
      .catch((error) => {
        console.log("Error from geeting Product data Function", error);
      });
  };
  // add data

  const addProductData = () => {
    if (
      !addingProductData.image ||
      !addingProductData.product_Title ||
      !addingProductData.product_Description ||
      !addingProductData.category_Id
    ) {
      toast.error("All Field Is Required");
      return;
    }
    const formData = new FormData();
    formData.append("image", addingProductData.image[0]);
    formData.append("product_Title", addingProductData.product_Title);
    formData.append(
      "product_Description",
      addingProductData.product_Description
    );
    formData.append("category_Id", addingProductData.category_Id);

    axios
      .post("http://localhost:4000/addProductData", formData)
      .then(() => {
        getProductData();
        setAddingProductData({
          image: "",
          product_Title: "",
          product_Description: "",
          category_Id: "",
        });
        toast.success("Data Added Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };

  const handleCategoryChange = (e) => {
    setAddingProductData({
      ...addingProductData,
      category_Id: e.target.value,
    });
  };

  //Delete data from dashboard..
  const deleteProductData = useCallback((id) => {
    axios
      .delete(`http://localhost:4000/deleteProductData/${id}`)
      .then(() => {
        getProductData();
        setDeleteModalOpen(false);
        toast.success("Deleted Successfully");
      })
      .catch((error) => {
        console.error("Error deleting category data:", error);
        toast.error("Some internel error!");
      });
  }, []);

  // edit modal input fields

  const submitUpdateData = () => {
    if (
      !updatedProductData.image ||
      !updatedProductData.product_Title ||
      !updatedProductData.product_Description ||
      !updatedProductData.category_Id
    ) {
      toast.error("All Field Is Required");
      return;
    }
    const formData = new FormData();
    formData.append("image", updatedProductData.image[0]);
    formData.append("product_Title", updatedProductData.product_Title);
    formData.append(
      "product_Description",
      updatedProductData.product_Description
    );
    formData.append("category_Id", updatedProductData.category_Id);
    console.log(updatedProductData.id);
    axios
      .put(
        `http://localhost:4000/updateProductData/${updatedProductData.id}`,
        formData
      )
      .then(() => {
        getProductData();
        setUpdateProductData({
          image: "",
          product_Title: "",
          product_Description: "",
          category_Id: "",
        });
        closeEditModal();
      })
      .catch((error) => {
        if (error) {
          console.error("Error updating product data:", error.message);
        }
      });
  };

  useEffect(() => {
    getProductData();
    getCategoryData();
    const totalPages = Math.ceil(
      (gettingProductData ? gettingProductData.length : 1) / DataPerPage
    );
    setShowBackButton(currentPage > 1);
    setShowNextButton(currentPage < totalPages);
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentPage, DataPerPage, gettingProductData]);

  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <DeleteModal
        isDeleteOpen={deleteModalOpen}
        onCloseDelete={closeDeleteModal}
        onDelete={deleteProductData}
        itemId={productIdtoDelete}
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
              <h1>Product</h1>
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
            <NavLink to="/category" className="btn-download">
              <i className="fa-solid fa-plus bx bx-plus"></i>
              <span className="text">Add Category</span>
            </NavLink>
          </div>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>product Table</h3>
                <i className="fa-solid fa-magnifying-glass bx bx-search"></i>
                <i className="fa-solid fa-filter bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Image</th>
                    <th>Product Title</th>
                    <th>Product Description</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {getCurrentData() &&
                    getCurrentData().map((product) => (
                      <tr key={product.id}>
                        <td>
                          <img
                            src={`/assets/${product.image}`}
                            alt="upload data"
                          />
                        </td>
                        <td>{product.product_Title}</td>
                        <td>{product.product_Description}</td>
                        <td>
                          <button
                            className="status completed"
                            style={{ marginRight: "5px" }}
                            onClick={() => openEditModal(product)}
                          >
                            <i className="fa-solid fa-pen"></i>
                          </button>

                          <button
                            type="button"
                            className="status pending"
                            onClick={() => {
                              openDeleteModal();
                              setProductIdToDelete(product.id);
                            }}
                          >
                            <i className="fa-solid fa-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {/* pagination code */}
              <div className="pagination">
                {showNextButton && (
                  <div className="arrow">
                    <span
                      className="fas fa-arrow-right"
                      onClick={() => paginate(currentPage + 1)}
                    ></span>
                  </div>
                )}
                {showBackButton && (
                  <div className="arrow">
                    <span
                      className="fas fa-arrow-left"
                      onClick={() => paginate(currentPage - 1)}
                    ></span>
                  </div>
                )}
              </div>
              {/* pagination code */}
            </div>
            <div className="todo">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addProductData(e);
                }}
                method="post"
                encType="multipart/form-data"
              >
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Product Image:
                  </label>
                  <input
                    id="imageField"
                    type="file"
                    name="image"
                    multiple
                    onChange={(e) => {
                      setAddingProductData({
                        ...addingProductData,
                        image: e.target.files,
                      });
                    }}
                    className="form-control"
                    placeholder="Enter Product Image..."
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Product Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleField"
                    value={addingProductData.product_Title}
                    onChange={(e) =>
                      setAddingProductData({
                        ...addingProductData,
                        product_Title: e.target.value,
                      })
                    }
                    placeholder="Category Title"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Product Discription
                  </label>
                  <textarea
                    className="form-control"
                    id="descriptionField"
                    rows="3"
                    value={addingProductData.product_Description}
                    onChange={(e) =>
                      setAddingProductData({
                        ...addingProductData,
                        product_Description: e.target.value,
                      })
                    }
                    placeholder="Category Discription"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Select Category
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={addingProductData.category_Id}
                    onChange={handleCategoryChange}
                  >
                    <option defaultValue>Select Category</option>
                    {gettingCategoryData &&
                      gettingCategoryData.map((category, i) => (
                        <>
                          <option key={i} value={category.category_Heading}>
                            {category.category_Heading}
                          </option>
                        </>
                      ))}
                  </select>
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
                Edit Product
              </p>
              <br />
              <form method="post" encType="multipart/form-data">
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Product Image:
                  </label>
                  <input
                    id="imageField"
                    type="file"
                    name="image"
                    multiple
                    className="form-control"
                    placeholder="Enter Product Image..."
                    onChange={(e) =>
                      setUpdateProductData({
                        ...updatedProductData,
                        image: e.target.files,
                      })
                    }
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Product Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="titleField"
                    value={updatedProductData.product_Title || ""}
                    onChange={(e) =>
                      setUpdateProductData({
                        ...updatedProductData,
                        product_Title: e.target.value,
                      })
                    }
                    placeholder="Category Title"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Product Description
                  </label>
                  <textarea
                    className="form-control"
                    id="descriptionField"
                    rows="3"
                    value={updatedProductData?.product_Description || ""}
                    onChange={(e) =>
                      setUpdateProductData({
                        ...updatedProductData,
                        product_Description: e.target.value,
                      })
                    }
                    placeholder="Category Description"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Select Category
                  </label>
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    value={updatedProductData?.category_Id || ""}
                    onChange={(e) =>
                      setUpdateProductData({
                        ...updatedProductData,
                        category_Id: e.target.value,
                      })
                    }
                  >
                    <option defaultValue>Select Category</option>
                    {gettingCategoryData &&
                      gettingCategoryData.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.category_Heading}
                        </option>
                      ))}
                  </select>
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
                onClick={submitUpdateData}
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

export default Product;
