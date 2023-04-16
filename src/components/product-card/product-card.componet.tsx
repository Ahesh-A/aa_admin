import "./product-card.styles.scss";

import { Product } from "../../store/products/products.reducer";

import { FC } from "react";
import Star from "../star/star.component";
type ProductType = {
  product: Product;
};
const ProductCard: FC<ProductType> = ({ product }): JSX.Element => {
  const { imageUrl, star, price, view_count, units_sold, quantity_left } =
    product;
  return (
    <div className="product-card-container">
      <div className="product-image-container">
        <img
          src={require(`../../${imageUrl}`)}
          alt=""
          className="product-image"
        />
      </div>
      <div className="product-info-container">
        <label htmlFor="star" className="product-info-label">
          Rating:
          <span className="star" id="star">
            <Star star={star} />
          </span>
        </label>
        <label htmlFor="price" className="product-info-label">
          Price:
          <span className="price" id="price">
            &#x20B9;{price}
          </span>
        </label>
        <label htmlFor="quantity-left" className="product-info-label">
          Quantity left:
          <span className="price" id="quantity-left">
            {quantity_left}
          </span>
        </label>
        <label htmlFor="view-count" className="product-info-label">
          View count:
          <span className="view-count" id="view-count">
            {view_count}
          </span>
        </label>
        <label htmlFor="units-sold" className="product-info-label">
          Units sold:
          <span className="units-sold" id="units-sold">
            {units_sold}
          </span>
        </label>
      </div>
    </div>
  );
};
export default ProductCard;
