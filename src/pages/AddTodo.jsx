import { useState } from "react";
import propTypes from 'prop-types';

export default function AddTodo({ jsonData, setJsonData }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // supaya tidak refresh saat kirim form

    if (newTodo.trim() === "") return; // cek input kosong

    const newTodoObject = {
      id: jsonData.length + 1,
      task: newTodo,
      complete: false,
    }

    // tambah object baru ke json
    setJsonData((prevData) => [...prevData, newTodoObject]);
    setNewTodo(""); //reset inputnya abis ditambah
  }

  return (
    <>
      <div className="container mt-2 mx-auto border rounded-md p-4">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl my-3">TodoInput</h1>
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col w-auto">
              <div className="flex items-center gap-2">
                📝
                <input
                  placeholder="Add Todo"
                  className="border p-1 w-full"
                  value={newTodo}
                  onChange={handleInputChange}
                ></input>
              </div>

              <button
                type="submit"
                className="bg-btn-default rounded mt-2 text-white font-medium h-8"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

AddTodo.propTypes = {
  jsonData: propTypes.array,
  setJsonData: propTypes.func
}