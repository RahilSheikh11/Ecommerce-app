import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addproducts } from "../actions";

export default function Sort() {
  const [flag, setflag] = useState(false);
  const products = useSelector((state) => state.products);
  const dispatchSort = useDispatch();
  const dispatchCancel = useDispatch();

  function handleSort() {
    let sortedData = products.sort((a, b) => a.price - b.price);
    dispatchSort(addproducts([...sortedData]));
    setflag(true);
  }

  function cancelSort() {
    let products = JSON.parse(window.localStorage.getItem("products"));
    dispatchCancel(addproducts([...products]));
    setflag(false);
  }

  return (
    <div className="align-self-end">
      <div
        className="bg-custom p-2 rounded-lg d-flex justify-content-around"
        style={customStyle}
      >
        <span
          className="fw-bold text-white"
          onClick={() => handleSort()}
          style={{ cursor: "pointer" }}
        >
          Sort by Price
        </span>
        {flag && (
          <span>
            <img
              src="https://cdn-icons-png.flaticon.com/512/561/561189.png"
              alt="Cancel Sort"
              width={"20rem"}
              onClick={() => cancelSort()}
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
      </div>
    </div>
  );
}

const customStyle = {
  width: "9rem",
  backgroundColor: "white(--custom-bg-color)", // Change background color
  border: "20px solid white(--custom-border-color)", // Add a border
};


