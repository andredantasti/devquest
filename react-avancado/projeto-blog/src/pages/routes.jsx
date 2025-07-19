import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Posts } from "./posts";
import { PostDetails } from "../post";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Posts />} />
        <Route exact path="/post/:id" element={<PostDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
