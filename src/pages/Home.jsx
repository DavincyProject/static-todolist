import { useState, useEffect } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoFilter from "../components/TodoFilter";
import Button from "../components/Button";

import data from "../json/data.json";

export default function Home() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="container w-11/12  mx-auto p-5 border rounded-md mt-5">
      <TodoSearch />
      <TodoFilter />

      {/* todo list start */}
      {/* <section id="todo items">
        <div className="container-fluid my-2">
          <div className="flex flex-col gap-2">
            {filterTodos().map((todo, index) => (
              <div
                className="flex justify-between border p-2 rounded-md"
                key={index}
              >
                <div>
                  {editingTodo && editingTodo.id === todo.id ? (
                    edit && (
                      <EditItem
                        editingTodo={editingTodo}
                        onSaveEdit={(editedText) => handleSaveEdit(editedText)}
                      />
                    )
                  ) : (
                    <h1
                      className={todo.done ? "line-through text-red-600" : ""}
                    >
                      {todo.text}
                    </h1>
                  )}
                </div>
                <div className="flex gap-1 items-center">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onClick={() => handleToggleDone(todo.id)}
                  />

                  <button onClick={() => handleEdit(todo)}>✏️</button>
                  <button onClick={() => handleDeleteTodo(todo)}>🗑️</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}
      {/* todo list end */}

      <div className="container mx-2">
        <ul>
          {jsonData.map((item, i) => (
            <li key={i}>{item.task}</li>
          ))}
        </ul>
      </div>

      <div className="container p-2">
        <div className="flex gap-2">
          <Button
            // onClick={handleDeleteDone}
            text="Delete done tasks"
            bgColor="bg-red-500"
          />
          <Button
            // onClick={handleDeleteAll}
            text="Delete all tasks"
            bgColor="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
}
