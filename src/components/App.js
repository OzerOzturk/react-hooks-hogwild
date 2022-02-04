import React, { useState } from "react";
import Nav from "./Nav";
import hogs from "../porkers_data";
import "semantic-ui-css/semantic.min.css";
import HogCard from "./Card";

function App() {
  const [greased, setGreased] = useState(false);
  const [filter, setFilter] = useState("");

  function handleFilterChange(e) {
    setFilter(e.target.value);
  }

  function handleGreasedChange(e) {
    setGreased(!greased);
  }

  let returnHogs = hogs;
  if (greased == true) {
    if (filter !== "") {
      returnHogs = hogs.filter((h) => h.greased == true);
      returnHogs = returnHogs.filter((h) =>
        h.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      returnHogs = hogs.filter((h) => h.greased == true);
    }
  }
  if (greased == false) {
    if (filter !== "") {
      returnHogs = hogs.filter((h) =>
        h.name.toLowerCase().includes(filter.toLowerCase())
      );
    } else {
      returnHogs = hogs;
    }
  }

  return (
    <div className="App">
      <Nav />
      <label>
        <input tpye="checkbox" onChange={handleGreasedChange} /> Only Greased
        Hogs
      </label>{" "}
      <br />
      <label>
        <input type="text" onChange={handleFilterChange} value={filter} />
        Filter by Name
      </label>{" "}
      <br />
      <label>
        <input tpye="text" />
        Filter by Weight
      </label>
      <div style={{ display: "flex" }}>
        {returnHogs.map((hog, index) => {
          return <HogCard key={index} hog={hog} />;
        })}
      </div>
    </div>
  );
}

export default App;
