import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddBookForm from "./components/AddBookForm";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBookForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
