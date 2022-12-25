import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import CreatePost from "../page/create";
import Explore from "../page/explore";
import HomePage from "../page/home";
import MessagePage from "../page/messages";
import Notifications from "../page/notifications";
import ProfilePage from "../page/profile";
import ReelsPage from "../page/reels";
import RootPage from "../page/root";
import Search from "../page/search";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route element={<HomePage />} index path="" />
      <Route element={<Explore />} path="explore" />
      <Route element={<ProfilePage />} path="profile" />
      <Route element={<CreatePost />} index path="create" />
      <Route element={<Notifications />} path="notifications" />
      <Route element={<MessagePage />} path="messagePage" />
      <Route element={<ReelsPage />} path="reelsPage" />
      <Route element={<Search />} path="Search" />
    </Route>
  )
);
