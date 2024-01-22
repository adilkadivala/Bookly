import React, { useState, useEffect } from "react";
import Navbar from "../../pages/admin/layouts/Navbar";
import Sidebar from "../../pages/admin/layouts/Siddebar";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../../assets/css/admin/deshboard.css";

const Main = () => {
  const [sidebarHidden, setSidebarHidden] = useState(window.innerWidth < 768);
  const [isDarkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };

  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
    document.body.classList.toggle("dark");
  };

  useEffect(() => {
    const handleResize = () => {
      setSidebarHidden(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Sidebar isOpen={!sidebarHidden} />
      <Navbar toggleSidebar={toggleSidebar} toggleDarkMode={toggleDarkMode} />
      <div id="content">
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <NavLink className="active" to="/product">
                    Product
                  </NavLink>
                </li>
                <li>
                  <i class="fa-solid fa-chevron-right"></i> 
                </li>
                <li>
                  <NavLink className="active" to="/">
                    Home
                  </NavLink>
                </li>
              </ul>
            </div>
            <NavLink className="btn-download">
              <i className="fa-solid fa-download "></i>
              <span className="text">Download PDF</span>
            </NavLink>
          </div>

          <ul className="box-info">
            <li>
              <i className="fa-solid fa-calendar-days bx bxs-calendar-check"></i>
              <span className="text">
                <h3>1020</h3>
                <p>New Order</p>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-people-group bx bxs-group"></i>
              <span className="text">
                <h3>2834</h3>
                <p>Visitors</p>
              </span>
            </li>
            <li>
              <i className="fa-solid fa-circle-dollar-to-slot bx bxs-dollar-circle"></i>
              <span className="text">
                <h3>$2543</h3>
                <p>Total Sales</p>
              </span>
            </li>
          </ul>

          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>Recent Orders</h3>
                <i className="fa-solid fa-magnifying-glass bx bx-search"></i>
                <i className="fa-solid fa-filter bx bx-filter"></i>
              </div>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Date Order</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/people.png")}
                        alt="user"
                      />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/people.png")}
                        alt="user"
                      />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/people.png")}
                        alt="user"
                      />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status process">Process</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/people.png")}
                        alt="user"
                      />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status pending">Pending</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src={require("../../assets/images/people.png")}
                        alt="user"
                      />
                      <p>John Doe</p>
                    </td>
                    <td>01-10-2021</td>
                    <td>
                      <span className="status completed">Completed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <i className="fa-solid fa-plus bx bx-plus"></i>
                <i className="fa-solid fa-filter bx bx-filter"></i>
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Todo List</p>
                  <i className="fa-solid fa-ellipsis-vertical bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className="fa-solid fa-ellipsis-vertical bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className="fa-solid fa-ellipsis-vertical bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="completed">
                  <p>Todo List</p>
                  <i className="fa-solid fa-ellipsis-vertical bx bx-dots-vertical-rounded"></i>
                </li>
                <li className="not-completed">
                  <p>Todo List</p>
                  <i className="fa-solid fa-ellipsis-vertical bx bx-dots-vertical-rounded"></i>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
