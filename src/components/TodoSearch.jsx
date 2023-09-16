// import React from "react";
import { Link } from "react-router-dom";

export default function TodoSearch() {
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
            ></input>
          </div>

          <button className="bg-btn-default rounded mt-2 text-white hover:text-slate-600 font-medium h-8">
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
