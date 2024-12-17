import React, { useState } from "react";
import "../App.css";

const Container = ({ color, records, handleAdd, handleRemove }) => {
  return (
    <div className="container" style={{ backgroundColor: color }}>
      <h3>{color.toUpperCase()} Container</h3>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            {record}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleAdd(color)} disabled={records.length >= 10}>
        Add Record
      </button>
    </div>
  );
};

export default Container;