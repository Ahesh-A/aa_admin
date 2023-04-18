import "./products-to-deliver.styles.scss";
import ProcessOrder from "../../components/process-order/process-order.component";
import { useSelector } from "react-redux";
import { selectItemsToDeliver } from "../../store/items-to-deliver/items-to-deliver.selector";

const ProductToDeliver = () => {
  const productsToDeliver = useSelector(selectItemsToDeliver);

  return (
    <div className="products-to-deliver-component">
      <div className="products-to-deliver-title-container">
        <h2 className="product-title">Products to deliver</h2>
      </div>
      {productsToDeliver &&
        productsToDeliver.map((order: any, idx: number) => (
          <ProcessOrder order={order} key={idx} />
        ))}
    </div>
  );
};

export default ProductToDeliver;
