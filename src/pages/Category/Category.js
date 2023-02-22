import React, { useState, useEffect } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import data from "../../TestData/Categories";
import dataPrevTable from "../../TestData/PreviousTableData";
import CategoryViewModal from "../../components/CategoryViewModal/CategoryViewModal";
import { images } from "../../constants";
import GenerateImage from "../../components/GenerateImages/GenerateImages";
import "./Category.scss";

/**
 *  Component to show  category card having a image, name  and its description
 * @param  {Array} Categories having an array of categories
 * @param  {Array}  setCategories use to assign categories data from testData
 * @component
 * @CategoryCard passing category data to this component.
 * @return  {Jsx}  It returns jsx to render categories.
 *
 * )
 */

const Category = () => {
  const [activeTab, setActiveTab] = useState("newSearches");
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  /*Handling Modal Box Operation */
  const [currentIndex, setCurrentIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const [categories, setCategories] = useState([]);
  const [tableData, setTableData] = useState([]);

  const handleCategoryModel = (index, e) => {
    setCurrentIndex(index);
    setOpenModal(true);
  };

  //view result
  const [showResult, setShowResult] = useState(false);
  const handleResult = () => {
    setShowResult(!showResult);
  };

  //categoryData
  const categoryModalData = {
    name: "Category",
    description: "Choose the best image category to start creating one",
    data: data,
  };

  useEffect(() => {
    setCategories((current) => [...current, ...data]);
    setTableData((current) => [...current, ...dataPrevTable]);
    return () => {
      setCategories([]);
      setTableData([]);
    };
  }, []);

  return (
    <div>
      <div className="tabs">
        <button
          className={`tab-item ${activeTab === "newSearches" ? "active" : ""}`}
          onClick={() => onClickTabItem("newSearches")}
        >
          New Search
        </button>

        <button
          className={`tab-item ${
            activeTab === "pendingSearches" ? "active" : ""
          }`}
          onClick={() => onClickTabItem("pendingSearches")}
        >
          Pending Searches
          <span></span>
        </button>
        <button
          className={`tab-item ${
            activeTab === "previousSearches" ? "active" : ""
          }`}
          onClick={() => onClickTabItem("previousSearches")}
        >
          Previous Searches
          <span></span>
        </button>
      </div>
      <div className="tab-content">
        {activeTab === "newSearches" && (
          <div className="tab-content_wrapper">
            <div className="row">
              {categories.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" col-12 col-md-6 col-sm-6 col-lg-4 col-xl-3 mb-3 mb-md-4 g-0"
                    onClick={() => handleCategoryModel(index)}
                  >
                    <CategoryCard
                      mainImageUrl={item.image}
                      name={item.title}
                      description={item.description}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {activeTab === "pendingSearches" && (
          <div className="tab-content_wrapper">
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th scope="col">S.N</th>
                    <th scope="col">Created</th>
                    <th scope="col">Prompt</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.length > 0 ? (
                    tableData.slice(0, 4).map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{index + 1}</th>
                          <td>
                            <div className="table_createDate d-flex align-items-center">
                              <img src={images.CategoryIcon} alt="" />
                              <div className="date ms-2">{item.date}</div>
                            </div>
                          </td>
                          <td>
                            <p>{item.prompt}</p>
                          </td>
                          <td>
                            <div className="table_processing d-flex align-items-center">
                              <i class="ri-loader-4-line me-2"></i>In processing
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <td colSpan={4} className="no-data text-center">
                      No data
                    </td>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === "previousSearches" && (
          <div className="tab-content_wrapper">
            {!showResult && (
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Created</th>
                      <th scope="col">Prompt</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div className="table_createDate d-flex align-items-center">
                                <img src={images.CategoryIcon} alt="" />
                                <div className="date ms-2">{item.date}</div>
                              </div>
                            </td>
                            <td>
                              <p>{item.prompt}</p>
                            </td>
                            <td>
                              <button
                                className="btn-viewResult"
                                onClick={handleResult}
                              >
                                View result
                                <img src={images.RightVectorIcon} alt="" />
                              </button>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <td colSpan={4} className="no-data text-center">
                        No data
                      </td>
                    )}
                  </tbody>
                </table>
              </div>
            )}
            {showResult && <GenerateImage onClick={handleResult} />}
          </div>
        )}
      </div>

      {/*CategoryViewModal is component to perform pop-up operation */}
      <CategoryViewModal
        openModal={openModal}
        setOpenModal={setOpenModal}
        cagetoryData={categoryModalData}
        index={currentIndex}
        setIndex={setCurrentIndex}
      />
    </div>
  );
};

export default Category;
