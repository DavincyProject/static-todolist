import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import propTypes from "prop-types";

export default function AddTodo({ jsonData, setJsonData }) {
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

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
    };

    // tambah object baru ke json
    setJsonData((prevData) => [...prevData, newTodoObject]);
    setNewTodo(""); //reset inputnya abis ditambah

    navigate("/"); // redirect ke home pages
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="container w-11/12 mt-2 mx-auto border rounded-md p-4">
          <div className=" flex flex-col">
            <div className="flex justify-between gap-2 items-center">
              <h1 className="font-bold text-2xl my-3">TodoInput</h1>
              <Link to="/">
                <img src="close.svg"></img>
              </Link>
            </div>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="flex flex-col w-auto">
                <div className="relative flex flex-nowrap items-stretch">
                  <span
                    className="flex items-center bg-btn-default whitespace-nowrap rounded-l border border-r-0 border-solid border-neutral-300 px-3 py-[0.25rem] text-center text-base font-normal leading-[1.6] text-neutral-700 dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                    id="addon-wrapping"
                  >📝</span>
                  <input
                    type="text"
                    placeholder="Add Todo"
                    aria-label="Add Todo"
                    aria-describedby="addon-wrapping"
                    className='relative m-0 block w-[1px] min-w-0 flex-auto rounded-r border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary'
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
  setJsonData: propTypes.func,
};
