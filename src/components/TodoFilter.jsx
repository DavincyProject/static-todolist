import { useState } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

export default function TodoFilter({ onFilterChange }) {
  //set default filter ke All agar tampilan filter selalu active di All sebelum di klik
  const [activeFilter, setActiveFilter] = useState("All");

  const handleFilterChange = (filter) => {
    // filter akan menangkap onclick dibawah dan dikirim ke Home agar tampilan sesuai dengan filter yang dipilih
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="mb-5">
      <h1 className="text-3xl font-bold text-center">Todo List</h1>
      <div className="container-fluid mx-2 mt-2 p-2 border rounded-md">
        <div className="flex justify-evenly items-center gap-2">
          <Button
            bgColor={
              activeFilter === "All" ? "bg-btn-active" : "bg-btn-default"
            }
            text="All"
            onClick={() => handleFilterChange("All")}
          />
          <Button
            bgColor={
              activeFilter === "Done" ? "bg-btn-active" : "bg-btn-default"
            }
            text="Done"
            onClick={() => handleFilterChange("Done")}
          />
          <Button
            bgColor={
              activeFilter === "Todo" ? "bg-btn-active" : "bg-btn-default"
            }
            text="Todo"
            onClick={() => handleFilterChange("Todo")}
          />
        </div>
      </div>
    </div>
  );
}

TodoFilter.propTypes = {
  onFilterChange: PropTypes.func,
};
