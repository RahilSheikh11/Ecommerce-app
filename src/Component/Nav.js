import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  const total = useSelector((state) => state.totalCart);

  return (
    <nav className="navbar navbar-expand-lg p-4 align-items-center" style={style.nav}>
      <div className="container-fluid">
        {/* Logo */}
        <Link to="/" className="navbar-brand fs-3" style={style.navHead}>
          Ecommerce APP
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link" style={{ color: "black" }}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/addproducts" className="nav-link" style={{ color: "black" }}>
                Add a product
              </Link>
            </li>
          </ul>

          {/* Cart Icons */}
          <div className="d-flex gap-5 position-relative">
            {/* Cart Icon */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/4290/4290854.png"
              alt="Cart"
              width={"40rem"}
              onClick={() => navigate("/cart")}
              style={{ cursor: "pointer" }}
            />

            {/* Cart Item Count */}
            {total > 0 && (
              <p
                className="bg-white rounded-circle position-absolute d-flex align-items-center justify-content-center border-solid-black-1px"
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  top: "21%",
                  left: "20%",
                }}
              >
                {total}
              </p>
            )}

            {/* User Icon */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/236/236832.png"
              alt="User"
              width={"40rem"}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

const style = {
  nav: {
    backgroundColor: "white",
  },
  navHead: {
    fontFamily: "var(--fontStyle)",
    color: "black",
  },
};
