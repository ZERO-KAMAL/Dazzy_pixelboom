import React, { useState, useEffect } from "react";

import "./SubAccount.scss";

//table data
const data = [
  {
    id: 1,
    name: "Aravindh Sridhar",
    email: " aravindh@kirana.biz",
    date: "06:11 AM, 4/03/2023",
  },
  {
    id: 2,
    name: "Jesus Cid",
    email: " aravindh@kirana.biz",
    date: "06:11 AM, 4/03/2023",
  },
  {
    id: 3,
    name: "Manibond Art",
    email: " aravindh@kirana.biz",
    date: "06:11 AM, 4/03/2023",
  },
  {
    id: 4,
    name: "Dmytro Stohnii",
    email: " aravindh@kirana.biz",
    date: "06:11 AM, 4/03/2023",
  },
];

const SubAccount = () => {
  const [activeTab, setActiveTab] = useState("clients");
  //popup
  const [isOpenClient, setIsOpenClient] = useState(false);
  const [isOpenOutSource, setIsOpenOutSource] = useState(false);
  const toggleClient = () => {
    setIsOpenClient(!isOpenClient);
  };
  const toggleOutsource = () => {
    setIsOpenOutSource(!isOpenOutSource);
  };
  const preventClose = (event) => {
    event.stopPropagation();
  };

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };
  const [tableData, setTableData] = useState([]);

  //delete data from table
  const handleDeleteItem = (id) => {
    setTableData(tableData.filter((item) => item.id !== id));
  };

  //fetching table data
  useEffect(() => {
    setTableData((current) => [...current, ...data]);
    return () => {
      setTableData([]);
    };
  }, []);
  return (
    <div className="subAccounts">
      <div className="subAccounts d-flex justify-content-between flex-wrap">
        <div className="tabs mb-2">
          <button
            className={`tab-item ${activeTab === "clients" ? "active" : ""}`}
            onClick={() => onClickTabItem("clients")}
          >
            Clients
          </button>

          <button
            className={`tab-item ${
              activeTab === "outSourcers" ? "active" : ""
            }`}
            onClick={() => onClickTabItem("outSourcers")}
          >
            Outsourcers
          </button>
        </div>
        {activeTab === "clients" && (
          <button className="btn btn-primary mb-2" onClick={toggleClient}>
            <i class="ri-add-fill me-2"></i>
            Add new client
          </button>
        )}
        {activeTab === "outSourcers" && (
          <button className="btn btn-primary mb-2" onClick={toggleOutsource}>
            <i class="ri-add-fill me-2"></i>
            Add new outsourcer
          </button>
        )}
      </div>
      <div className="tab-content">
        {activeTab === "clients" && (
          <div className="tab-content_wrapper">
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Created</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.length > 0 ? (
                    tableData.map((item, index) => {
                      return (
                        <tr key={index.id}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <div className="date ms-2">{item.name}</div>
                          </td>
                          <td>{item.email}</td>
                          <td>{item.date}</td>
                          <td>
                            <button
                              className="btn-delete"
                              onClick={() => handleDeleteItem(item.id)}
                            >
                              <i class="ri-delete-bin-6-line"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <td colSpan={5} className="no-data text-center">
                      No data
                    </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "outSourcers" && (
          <div className="tab-content_wrapper">
            <div className="container">
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Created</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.slice(0, 2).map((item, index) => {
                        return (
                          <tr key={index.id}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div className="date ms-2">{item.name}</div>
                            </td>
                            <td>{item.email}</td>
                            <td>{item.date}</td>
                            <td>
                              <button
                                className="btn-delete"
                                onClick={() => handleDeleteItem(item.id)}
                              >
                                <i class="ri-delete-bin-6-line"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <td colSpan={5} className="no-data text-center">
                        No data
                      </td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>

      {isOpenClient && (
        <div className="popup" onClick={preventClose}>
          <div className="popup_wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5 bg-white p-4 rounded-2">
                  <div className="popup_toogleButtons d-flex justify-content-between">
                    <div className="content-title">
                      <h3>Create new client</h3>
                    </div>
                    <button className="btn btn-close " onClick={toggleClient}>
                      <i class="ri-close-line"></i>
                    </button>
                  </div>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="kamal Khatri"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="kamal1997khatri@gmail.com"
                      ></input>
                    </div>
                    <div id="emailHelp" class="form-text mb-3">
                      Note: allow create up to 5 accounts.
                    </div>
                    <button
                      className="btn btn-goback me-3"
                      onClick={toggleClient}
                    >
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpenOutSource && (
        <div className="popup" onClick={preventClose}>
          <div className="popup_wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5 bg-white p-4 rounded-2">
                  <div className="popup_toogleButtons d-flex justify-content-between">
                    <div className="content-title">
                      <h3>Create new outsourcer</h3>
                    </div>
                    <button
                      className="btn btn-close "
                      onClick={toggleOutsource}
                    >
                      <i class="ri-close-line"></i>
                    </button>
                  </div>
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Name
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="kamal Khatri"
                      ></input>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        class="form-control"
                        placeholder="kamal1997khatri@gmail.com"
                      ></input>
                    </div>
                    <div id="emailHelp" class="form-text mb-3">
                      Note: allow create up to 5 accounts.
                    </div>
                    <button
                      className="btn btn-goback me-3"
                      onClick={toggleOutsource}
                    >
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Create
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubAccount;
