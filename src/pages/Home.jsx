import propTypes from "prop-types";
import { useState, useEffect } from "react";
import TodoSearch from "../components/TodoSearch";
import TodoFilter from "../components/TodoFilter";
import Button from "../components/Button";

export default function Home({ jsonData, setJsonData }) {
  // jsonData,setJsonData diambil dari App.jsx kemudian diproses dibawah
  const [editedItemId, setEditedItemId] = useState(null); // untuk menyimpan id dari item yang diedit
  const [editedText, setEditedText] = useState(""); // untuk menyimpan teks sebelumnya pada saat diedit
  const [activeFilter, setActiveFilter] = useState("All"); // untuk menyimpan filter yang aktif saat ini (defaultnya di All)
  const [filteredData, setFilteredData] = useState([...jsonData]); // untuk memfilter data berdasarkan filter yang aktif ("All", "Done", "Todo")

  // supaya setiap kali data json berubah, tampilan awal tetap di filter All
  useEffect(() => {
    setActiveFilter("All");
  }, [jsonData]);

  // untuk memperbarui data filter setiap jsonData berubah, tampilan akan berubah ketika pilihan filter dipilih
  useEffect(() => {
    const filtered = jsonData.filter((item) => {
      if (activeFilter === "All") {
        return true; // munculkan semua item langsung tanpa melihat status completenya di data
      } else if (activeFilter === "Done") {
        return item.complete; // munculkan item yang status completenya true
      } else if (activeFilter === "Todo") {
        return !item.complete; // munculkan item yang status completenya false
      }
      return true;
    });
    setFilteredData(filtered); // setelah kondisi diatas terpenuhi, update filtered data menjadi sesuai filtered yang dipilih
  }, [jsonData, activeFilter]);

  //untuk ubah filter yang aktif di component <TodoFilter onFilterChange={handleFilterChange} /> dibawah
  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  //untuk menandai tugas jika complete true atau false
  const handleCheckbox = (itemId) => {
    setJsonData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, complete: !item.complete } : item
      )
    );
  };

  // untuk hapus tugas
  const handleDelete = (itemId) => {
    const confirmDelete = window.confirm("yakin ingin menghapus task ini?");
    if (confirmDelete) {
      setJsonData((prevData) => prevData.filter((item) => item.id !== itemId));
    }
  };

  // untuk edit tugas
  const handleEdit = (itemId, initialText) => {
    setEditedItemId(itemId);
    setEditedText(initialText);
  };

  // untuk simpan tugas yang sudah selesai diedit
  const handleSaveEdit = (itemId) => {
    setJsonData((prevData) =>
      prevData.map((item) =>
        item.id === itemId ? { ...item, task: editedText } : item
      )
    );
    setEditedItemId(null);
    setEditedText("");
  };

  // untuk menghapus semua tugas dengan properti object complete true
  const handleDeleteDone = () => {
    const confirmDelete = window.confirm(
      "yakin ingin menghapus task yang sudah selesai?"
    );
    if (confirmDelete) {
      setJsonData((prevData) => prevData.filter((item) => !item.complete));
    }
  };

  // untuk menghapus semua tugas di dalam json data dan membuat array menjadi kosong
  const handleDeleteAll = () => {
    const confirmDelete = window.confirm("yakin ingin menghapus semua task?");
    if (confirmDelete) {
      setJsonData([]);
    }
  };

  return (
    <div className="container w-11/12  mx-auto p-5 border rounded-md mt-5">
      <TodoSearch jsonData={jsonData} setFilteredData={setFilteredData} />
      <TodoFilter onFilterChange={handleFilterChange} />

      <div className="container rounded">
        <ul>
          {filteredData.map((item, i) => (
            <div
              key={i}
              className="flex justify-between w-auto border rounded-sm m-2 p-2"
            >
              {editedItemId === item.id ? (
                <div className="w-full">
                  <input
                    type="text"
                    className="p-1 w-full border rounded"
                    value={editedText} // Menggunakan item.task sebagai nilai input teks
                    onChange={(e) => setEditedText(e.target.value)}
                    autoFocus
                  />
                </div>
              ) : (
                <li
                  className={item.complete ? "line-through text-red-700" : ""}
                >
                  {item.task}
                </li>
              )}

              <div className="flex gap-1 mx-5 items-center justify-center">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={item.complete}
                  onChange={() => handleCheckbox(item.id)}
                />

                {editedItemId === item.id ? (
                  <button onClick={() => handleSaveEdit(item.id)}>💾</button>
                ) : (
                  <button onClick={() => handleEdit(item.id, item.task)}>
                    ✏️
                  </button>
                )}

                <button onClick={() => handleDelete(item.id)}>🗑️</button>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className="container p-2">
        <div className="flex gap-2">
          <Button
            onClick={handleDeleteDone}
            text="Delete done tasks"
            bgColor="bg-red-500"
          />
          <Button
            onClick={handleDeleteAll}
            text="Delete all tasks"
            bgColor="bg-red-500"
          />
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  jsonData: propTypes.array,
  setJsonData: propTypes.func,
};
