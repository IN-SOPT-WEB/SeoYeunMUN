import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Search from "../pages/Search";
import Profile from "../pages/Profile";
const Layout = () => {
  return (
    <>
      <Search />
      <Outlet />
    </>
  );
};
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/search" />} />
        <Route index path="/search/" element={<Search />} />
        <Route element={<Layout />}>
          <Route path="/search/:userId" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
