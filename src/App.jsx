import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Gallery } from "./components/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* This single route covers both /gallery and /gallery/:serviceId */}
        <Route path="/gallery/:serviceId?" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
