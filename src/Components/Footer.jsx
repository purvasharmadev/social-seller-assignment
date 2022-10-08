import React from "react";

function Footer() {
  return (
    <footer className="flex flex-space-evenly">
      <div>
        <h3>Hekto</h3>
        <input type="email" placeholder="enter your email" />
        <button className="btn btn-secondary">Subscribe</button>
        <h5>Contact info:</h5>
        <p className="text-small">17 Princess Road, London, Greater London NW1 8JR, UK</p>
      </div>
      <div>
        <h3>Categories</h3>
        <ul  className="text-small">
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>LWaterproof Headphones</li>
        </ul>
      </div>

      <div>
        <h3>Customer Care</h3>
        <ul  className="text-small">
          <li>My Account</li>
          <li>Discount</li>
          <li>Order history</li>
          <li>Order tracking</li>
        </ul>
      </div>
      <div>
        <h3>Pages</h3>
        <ul className="text-small">
          <li>Blog</li>
          <li>Browse the history</li>
          <li>Products</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
