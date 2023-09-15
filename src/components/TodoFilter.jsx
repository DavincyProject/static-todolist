// import React from 'react'

import Button from "./Button";

export default function TodoFilter() {
  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <div className="container-fluid mx-2 mt-2 p-2 border rounded-md">
        <div className="flex justify-evenly items-center gap-2">
          <Button
            bgColor="bg-btn-default"
            className="rounded mt-2 text-white font-medium w-full h-7"
            text="All"
          />
          <Button
            bgColor="bg-btn-default"
            className="rounded mt-2 text-white font-medium w-full h-7"
            text="Done"
          />
          <Button
            bgColor="bg-btn-default"
            className="rounded mt-2 text-white font-medium w-full h-7"
            text="Todo"
          />
        </div>
      </div>
    </div>
  );
}
