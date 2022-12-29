import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";

import LoginPage from "./page/login";
import { Private } from "./page/private";
import RootPage from "./page/root";
import HomePage from "./page/home";
import Explore from "./page/explore";
import ProfilePage from "./page/profile";
import CreatePost from "./page/create";
import Notifications from "./page/notifications";
import MessagePage from "./page/messages";
import ReelsPage from "./page/reels";
import Search from "./page/search";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Private Component={<RootPage />} />}>
          <Route element={<HomePage />} path="/" />
          <Route element={<Explore />} path="explore" />
          <Route element={<ProfilePage />} path="profile" />
          <Route element={<CreatePost />} path="create" />
          <Route element={<Notifications />} path="notifications" />
          <Route element={<MessagePage />} path="messagePage" />
          <Route element={<ReelsPage />} path="reelsPage" />
          <Route element={<Search />} path="Search" />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
