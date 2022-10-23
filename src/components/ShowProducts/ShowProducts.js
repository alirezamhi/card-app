import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../redux/products/products.action";

const ShowProducts = () => {
  const allProducts = useSelector((state) => state.productReducer.product);
  const dispatch = useDispatch()
  return (
    <div className="col">
      {allProducts.map((node, index) => {
        return (
          <div key={index} className="card mt-4">
            <div className="card-header">name : {node.name}</div>
            <div className="card-body d-flex justify-content-around align-items-baseline">
              <p>price : {node.price}</p>
              <p>count : {node.count}</p>
              <p>discount : {node.discount}</p>
              <p>finalprice : {Math.floor(node.finalprice)}$</p>
              <div className="btn-group">
                <button className="btn btn-warning" onClick={dispatch(productsAction.editproduct(node.id))}><i className="bi bi-pencil"></i></button>
                <button className="btn btn-danger"><i className="bi bi-trash"></i></button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
