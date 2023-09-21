import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function TodoSearch({ jsonData, setFilteredData }) {
  const [search, setSearch] = useState("");

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
          {/* <div className="flex items-center "> */}
          {/* <label htmlFor="Search_Todo">🔎</label>
            <input
              placeholder="Search Todo"
              className="border p-1 w-full rounded-sm"
              value={search}
              onChange={handleInputChange}
            ></input> */}
          <div className="relative flex flex-nowrap items-stretch">
            <span
              className="flex items-center bg-btn-default whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              id="addon-wrapping"
            >
              <img
                src="search.svg"
                className="sm:w-[15px] sm:h-[15px] w-[22px] h-[22px]"
                alt="search"
              ></img>
            </span>
            <input
              type="text"
              placeholder="Search Todo"
              aria-label="Search Todo"
              aria-describedby="addon-wrapping"
              className="sm:text-sm md:text-md lg:text-lg relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            ></input>
          </div>
          {/* </div> */}

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
  jsonData: PropTypes.array,
  setFilteredData: PropTypes.func,
};
