import React from 'react'

function ProductCard({name,img,price,discount}) {
  return (
    <div className="card product-card">
      <div className="card-header">
        {" "}
        <img height="150px" width="150px" src={img} alt={name} />{" "}
      </div>
      <div className="card-body color-primary flex flex-space-between m-0">
        <p className="small-text">{name}</p>
        <p className="card-para">${price} <span className="discount-price">${discount}</span></p>
      </div>{" "}
    </div>  )
}

export default ProductCard