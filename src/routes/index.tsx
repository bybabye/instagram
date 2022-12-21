import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Explore from "../page/explore";
import HomePage from "../page/home";
import ProfilePage from "../page/profile";
import RootPage from "../page/root";
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootPage />}>
      <Route element={<HomePage />} index path="" />
      <Route element={<Explore />} path="explore" />
      <Route element={<ProfilePage />} path="profile" />
    </Route>
  )
);
