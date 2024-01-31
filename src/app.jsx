import CourseListing from "./pages/CourseListing.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<CourseListing />} />
        <Route path="/courseListing" element={<CourseListing />} />
        <Route path="/courseDetail" element={<CourseDetail />} />
      </Routes>
    </>
  );
}
