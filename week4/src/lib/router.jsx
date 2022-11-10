import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "../pages/Search";
import Profile from "../pages/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search/:userId" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
