/* eslint-disable react/prop-types */
import { RiAddLine } from "react-icons/ri";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";
import { toast } from "react-toastify";

function ProductCard({ item }) {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-2">
      <div className="product__item">
        <motion.img
          whileHover={{ scale: 0.9 }}
          src={item.imgUrl}
          alt="product image"
        />
        <div className="p-2 product-info">
          <h3 className="product__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <span>{item.category}</span>
        </div>
        <div
          className="product__card-bottom d-flex
         align-items-center justify-content-between p-2"
        >
          <span className="price">${item.price}</span>
          <motion.span whileTap={{ scale: 1.2 }} onClick={addToCart}>
            <i>
              <RiAddLine />
            </i>
          </motion.span>
        </div>
      </div>
    </Col>
  );
}

export default ProductCard;
