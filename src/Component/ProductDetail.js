import React from "react";
import { addCart, CartItems } from "../actions";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { showToastMessage } from "../Notification/notify";

export default function ProductDetail({ item }) {
  const dispatchCart = useDispatch();
  const dispatchTotal = useDispatch();

  function handleClick(item) {
    if (!item.qty) {
      item.qty = 1;
      dispatchCart(addCart(item));
      dispatchTotal(CartItems());
      showToastMessage("item Added to cart", "success");
    } else {
      dispatchCart(addCart(item));
      dispatchTotal(CartItems());
      showToastMessage("item Added to cart", "success");
    }
  }
  
  return (
    <div className="container-sm d-flex flex-lg-row flex-column mt-4 gap-5">
      <ToastContainer />
      {item.images ? (
        <div className="border border-1" style={{ width: "100%", objectFit: "cover" }}>
          <div className="carousel carousel-dark slide" style={{ height: "100%" }}>
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              {item.images[0] && (
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src={item.images[0]} className="d-block w-100" alt="error" style={{ height: "38rem" }} />
                </div>
              )}
              {item.images[1] && (
                <div className="carousel-item" data-bs-interval="2000">
                  <img src={item.images[1]} className="d-block w-100" alt="error" style={{ height: "38rem" }} />
                </div>
              )}
              {item.images[2] && (
                <div className="carousel-item">
                  <img src={item.images[2]} className="d-block w-100" alt="error" style={{ height: "38rem" }} />
                </div>
              )}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      ) : (
        <img src={item.thumbnail} alt="error" id="detailAddedImage" />
      )}

      <div className="d-flex flex-column gap-3">
        <h1 className="text-black">{item.title}</h1> {/* Use an h1 tag for item name and set text color to black */}
        <div className="d-flex flex-column gap-2">
          {/* <span>
            <BasicRating value={item.rating} />
          </span> */}
          <div className="d-flex gap-3 ">
            <span className="text-success">
              <span className="text-danger">Price:</span> Rs{item.price}
            </span>
            <span className="text-danger">
              Discount:
              <span className="text-success">
                {item.discountPercentage ? item.discountPercentage : ""}%
              </span>
            </span>
          </div>
          <span className="text-danger">
            Category:<span className="text-success">{item.category}</span>
          </span>
        </div>
        <div className="d-flex flex-column gap-3">
          <span className="text-danger">
            {" "}
            Stocks:
            <span className="text-success">{item.stock ? item.stock : ""}</span>
          </span>
          <div className="border border-1 p-3" style={{ backgroundColor: "white" }}> {/* Add a white background to the description box */}
            <span className="text-black">{item.description}</span> {/* Set text color to black for item description */}
          </div>
        </div>

        <div className="align-self-end">
          <button
            type="button"
            className="btn btn-primary"
            style={{
              width: "9rem",
              backgroundColor: "var(--nav)",
              color: "black", // Set text color to black
              border: "2px solid black", // Add border
            }}
            onClick={() => handleClick(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
