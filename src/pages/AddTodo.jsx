import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import propTypes from 'prop-types';

export default function AddTodo({ jsonData, setJsonData }) {
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // supaya tidak refresh saat kirim form

    // cek jika input kosong, jangan kirim form (selesai dari blok kode). 
    // jika tidak kosong akan dikirim data berupa object baru ke data.json
    //menggunakan trim agar spasi saja tidak bisa terkirim juga
    if (newTodo.trim() === "") return;

    const newTodoObject = {
      id: jsonData.length + 1,
      task: newTodo,
      complete: false,
    }

    // tambah object baru ke json
    setJsonData((prevData) => [...prevData, newTodoObject]);
    setNewTodo(""); //reset inputnya abis ditambah

    navigate("/"); // redirect ke home pages
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container w-11/12 mt-2 mx-auto border rounded-md p-4">
          <div className=" flex flex-col">
            <div className="flex justify-between gap-2 items-center">
              <h1 className="font-bold text-2xl my-3">TodoInput</h1>
              <Link to="/"><img src="close.svg"></img></Link>
            </div>
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
      </div>
    </>
  );
}

AddTodo.propTypes = {
  jsonData: propTypes.array,
  setJsonData: propTypes.func
}