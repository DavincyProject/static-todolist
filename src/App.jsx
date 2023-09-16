import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AddTodo from "./pages/AddTodo";
import data from "./json/data.json";

function App() {
  const [jsonData, setJsonData] = useState([...data]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home jsonData={jsonData} setJsonData={setJsonData} />} />
          <Route path="/add-todo" element={<AddTodo jsonData={jsonData} setJsonData={setJsonData} />} />

          <Route path="*" element={<h1>404 | NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
