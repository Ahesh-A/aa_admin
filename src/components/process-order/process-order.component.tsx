import "./process-order.styles.scss";
import { FormEvent, FormEventHandler, useState } from "react";
import { updateItemsToDeliver } from "../../utils/firebase.utils";
type ProcessOrderProps = {
  order: any;
};
const ProcessOrder = ({ order }: ProcessOrderProps) => {
  const {
    confirmed_order,
    deliverId,
    processing_order,
    product_delivered,
    product_dispatched,
    quality_check,
  } = order;
  const [processOrderState, setProcessOrderState] = useState({ ...order });

  const [divs] = useState([
    {
      content: `Deliver Id :${deliverId}`,
      name: "deliverId",
    },
    {
      content: "Confirmed Order",
      name: "confirmed_order",
    },
    {
      content: "Processing order",
      name: "processing_order",
    },
    {
      content: "Quality check",
      name: "quality_check",
    },
    {
      content: "Product dispatched",
      name: "product_dispatched",
    },
    {
      content: "Product Delivered",
      name: "product_delivered",
    },
  ]);

  const processOrderClickHandler = (idx: number) => {
    const newstate = {
      ...processOrderState,
      [divs[idx].name]: !processOrderState[divs[idx].name],
    };

    setProcessOrderState(newstate);
  };

  const productsToDeliverClickHandler = (
    e: FormEvent<HTMLFormElement>
  ): void => {
    e.preventDefault();
    const data = { ...order, ...processOrderState };
    //console.log(data);
     updateItemsToDeliver(data);
  };

  return (
    <form
      className="process-order-container"
      onSubmit={productsToDeliverClickHandler}
    >
      {divs.map((div, idx) => (
        <div
          className={`process-order-element ${
            processOrderState[divs[idx].name] ? "active" : ""
          }`}
          onClick={() => processOrderClickHandler(idx)}
          key={idx}
        >
          {div.content}
        </div>
      ))}
      <button className="process-order-element">Submit</button>
    </form>
  );
};

export default ProcessOrder;
