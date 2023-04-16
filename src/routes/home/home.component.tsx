import "./home.styles.scss";
import Logo from "../../components/logo/logo.compoent";
import Loader from "../../components/loader/loader.component";
import Trending from "../../components/trending/trending.component";
import BestSeller from "../../components/best-seller/best-seller.component";
import { useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProductStart } from "../../store/products/products.action";
import { selectProductsIsLoading } from "../../store/products/products.selector";
import { itemsToDeliverStart } from "../../store/items-to-deliver/items-to-deliver.action";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currUser = useSelector(selectCurrentUser);
  const productIsLoading = useSelector(selectProductsIsLoading);
  const viewProductClickHandler = () => {
    navigate("/view-products");
  };
  useEffect(() => {
    dispatch(getProductStart());
  }, [dispatch]);
  const productsToDeliverHandler = () => {
    dispatch(itemsToDeliverStart());
  };
  return productIsLoading ? (
    <Loader />
  ) : !!currUser ? (
    <div className="home-container">
      <div className="home-header-container">
        <div className="home-logo-cantainer">
          <Logo />
        </div>
        <div className="home-options-container">
          <span className="option" onClick={viewProductClickHandler}>
            View products
          </span>
          <span className="option">View users</span>

          <span className="option">Delete product</span>
          <span className="option" onClick={productsToDeliverHandler}>
            Products to deliver
          </span>
          <span className="option">Update product</span>
          <span className="option">Logout</span>
        </div>
      </div>
      <div className="onsale-body-container">
        <h2 className="onsale-title-container">
          <span className="onsale-title">Trendig</span>
          <div className="underline"></div>
        </h2>
        <Trending />
      </div>
      <div className="onsale-body-container">
        <h2 className="onsale-title-container">
          <span className="onsale-title">Best Seller</span>
          <div className="underline"></div>
        </h2>
        <BestSeller />
      </div>
    </div>
  ) : (
    <div>Please login</div>
  );
};

export default Home;
