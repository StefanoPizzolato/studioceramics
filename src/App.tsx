import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WheelThrowingCourseLanding from "./pages/WheelThrowingCourseLanding";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route
        path="/five-week-wheel-throwing-course-ballarat"
        element={<WheelThrowingCourseLanding />}
      />
      <Route
        path="/wheel-throwing-course"
        element={<WheelThrowingCourseLanding />}
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
