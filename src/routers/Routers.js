import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Landing/Landing";
import Category from "../pages/Category/Category";
import Layout from "../components/Layout/Layout";
import SavedImages from "../pages/SavedImages/SavedImages";
import UseImage from "../pages/UseImage/UseImage";
import UserProfile from "../pages/UserProfile/UserProfile";
import TypePrompt from "../pages/TypePrompt/TypePrompt";
import CategoryResults from "../pages/CategoryResults/CategoryResults";
import LogIn from "../pages/LogIn/LogIn";
import SignUp from "../pages/SignUp/SignUp";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" element={<LogIn />} />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Dashboard content route */}
      <Route path="/dashboard" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="category" element={<Category />} />
        <Route path="category/Results" element={<CategoryResults />} />
        <Route path="savedimages" element={<SavedImages />} />
        <Route path="imagesss" element={<UseImage />} />
        <Route path="promt" element={<TypePrompt />} />
        <Route path="use-images" element={<UseImage />} />
        <Route path="saved-images" element={<SavedImages />} />
        <Route path="user-profile" element={<UserProfile />} />
        <Route path="type-prompt" element={<TypePrompt />} />
      </Route>
      <Route path="*" element={<> not found</>} />
    </Routes>
  );
};

export default Routers;
