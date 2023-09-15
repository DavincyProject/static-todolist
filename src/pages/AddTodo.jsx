// import React from "react";

export default function AddTodo() {
  return (
    <>
      <div className="container mt-2 mx-auto border rounded-md p-4">
        <div className=" flex flex-col justify-center items-center">
          <h1 className="font-bold text-2xl my-3">TodoInput</h1>
          <form className="w-full">
            <div className="flex flex-col w-auto">
              <div className="flex items-center gap-2">
                📝
                <input
                  placeholder="Add Todo"
                  className="border p-1 w-full"
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
