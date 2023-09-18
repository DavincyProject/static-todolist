import { useState } from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

export default function TodoSearch({ jsonData, setFilteredData }) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = () => {
    const filter = jsonData.filter((item) =>
      item.task.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredData(filter);
  };

  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl text-center my-3">TodoSearch</h1>
      <div className="container-fluid mx-2 m-2 border rounded-md p-3 flex justify-around">
        <div className="flex flex-col w-1/2 mr-1">
          <div className="flex items-center gap-2">
            🔎
            <input
              placeholder="Search Todo"
              className="border p-1 w-full"
              value={search}
              onChange={handleInputChange}
            ></input>
          </div>

          <button
            onClick={handleSearch}
            className="bg-btn-default rounded mt-2 text-white hover:text-slate-600 font-medium h-8"
          >
            Search
          </button>
        </div>
        <div className="flex flex-col-reverse w-1/2">
          <Link to="/add-todo">
            <button className="bg-btn-default rounded mt-2 text-white hover:text-slate-600 font-medium w-full h-8">
              Add New Task
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

TodoSearch.propTypes = {
  jsonData: propTypes.array,
  setFilteredData: propTypes.func,
};
