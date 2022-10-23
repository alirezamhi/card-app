import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productsAction from "../../redux/products/products.action";

const AddProducts = () => {
  const { finalprice } = useSelector((state) => state.productReducer.values);
  const dispatch = useDispatch();

  return (
    <div className="col-4 bg-light border rounded m-4 p-3 add_products">
      <form>
        <div className="mb-2">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <div className="input-group">
            <i className="bi bi-tag input-group-text"></i>
            <input
              autoComplete="off"
              className="form-control"
              id="name"
              type="text"
              onChange={(e) =>
                dispatch(productsAction.change("name", e.target.value))
              }
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            price
          </label>
          <div className="input-group">
            <i className="bi bi-currency-dollar input-group-text"></i>
            <input
              className="form-control"
              id="price"
              type="number"
              onChange={(e) =>
                dispatch(productsAction.change("price", e.target.value))
              }
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="count" className="form-label">
            count
          </label>
          <div className="input-group">
            <i className="bi bi-plus-circle input-group-text"></i>
            <input
              className="form-control"
              id="count"
              type="number"
              onChange={(e) =>
                dispatch(productsAction.change("count", e.target.value))
              }
            />
          </div>
        </div>
        <div>
          <label htmlFor="discount" className="form-range">
            discount
          </label>
          <input
            className="form-range"
            id="range"
            type="range"
            min="0"
            max="100"
            onChange={(e) => {
              dispatch(productsAction.change("discount", e.target.value));
            }}
          />
        </div>
        <div className="mb-3">
          final price :
          {!finalprice ? (
            <span className="text-center ">$0</span>
          ) : (
            <span className="text-center ">${Math.floor(finalprice)}</span>
          )}
        </div>
        <button
          className="btn btn-success w-100"
          type="button"
          onClick={() => dispatch(productsAction.pushproduct())}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProducts;
