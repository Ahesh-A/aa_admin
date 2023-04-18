import "./update-product.styles.scss";
import { ChangeEvent, FormEvent, useState } from "react";
import { updateProduct } from "../../utils/firebase.utils";
const UpdateProduct = () => {
  const [prodInfo, setProdInfo] = useState({
    id: "",
    discount: "",
    quantity_left: "",
  });
  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProdInfo({ ...prodInfo, [name]: value });
  };

  const updateProductSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateProduct(prodInfo);
  };
  return (
    <div className="update-product-container">
      <div className="update-product-heading-container">
        <h2 className="update-product-heading">Updatem Product</h2>
      </div>
      <div className="update-product-body">
        <form
          className="update-products-item-container"
          onSubmit={updateProductSubmitHandler}
        >
          <div className="update-product-item-input-container">
            <label htmlFor="id" className="update-products-item-input-label">
              Id:
            </label>
            <input
              type="text"
              className="update-products-item-input"
              name="id"
              value={prodInfo.id}
              onChange={changeHandler}
              id="id"
            />
          </div>
          <div className="update-product-item-input-container">
            <label htmlFor="id" className="update-products-item-input-label">
              Discount:
            </label>
            <input
              type="number"
              className="update-products-item-input"
              name="discount"
              value={prodInfo.discount}
              onChange={changeHandler}
              id="discount"
              min="0"
              max="100"
            />
          </div>
          <div className="update-product-item-input-container">
            <label htmlFor="id" className="update-products-item-input-label">
              Quantity left:
            </label>
            <input
              type="number"
              className="update-products-item-input"
              name="quantity_left"
              value={prodInfo.quantity_left}
              onChange={changeHandler}
              id="quantity_left"
              min="0"
            />
          </div>
          <button type="submit" className="update-product-button">
            {" "}
            Sumbit{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
