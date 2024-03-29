/* eslint-disable no-unused-vars */
import { Col, Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { RiStarSFill, RiStarHalfSFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../styles/product-details.css";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";

import Helmet from "../components/Helmet/Helmet";
import ProductsList from "../components/UI/ProductsList";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";

function ProductDetails() {
  const [tab, setTab] = useState("desc");
  const reviewUser = useRef("");
  const reviewMsg = useRef("");
  const dispatch = useDispatch();

  const [rating, setRating] = useState(null);
  const { id } = useParams();
  const product = products.find((item) => item.id === id);
  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category,
  } = product;

  const relatedProducts = products
    .filter((item) => item.category === category)
    .slice(0, 4);

  const submitHandler = function (e) {
    e.preventDefault();

    const reviewUserName = reviewUser.current.value;
    const reviewUserMsg = reviewMsg.current.value;

    const reviewObj = {
      userName: reviewUserName,
      text: reviewUserMsg,
      rating,
    };

    toast.success("Review submitted");
  };

  const addToCart = function () {
    dispatch(
      cartActions.addItem({
        id,
        Image: imgUrl,
        productName,
        price,
      })
    );

    toast.success("Product added successfully");
  };

  // We can add scroll to top here inside a useEffect. Then when we click on a
  // product and go to the product detail, page automaticly scrolls to the top

  return (
    <Helmet title={productName}>
      <CommonSection />

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} />
            </Col>

            <Col lg="6">
              <div className="product__details">
                <h2>productName</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <RiStarSFill />
                    </span>
                    <span>
                      <RiStarSFill />
                    </span>
                    <span>
                      <RiStarSFill />
                    </span>
                    <span>
                      <RiStarSFill />
                    </span>
                    <span>
                      <RiStarHalfSFill />
                    </span>
                  </div>
                  <p>
                    (<span>{avgRating}</span> ratings)
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-5">
                <span className="product__price">${price}</span>
                <span>category: {category.toUpperCase()}</span>
              </div>
              <p className="mt-3">{shortDesc}</p>

              <motion.button
                whileTap={{ scale: 1.1 }}
                className="buy__btn"
                onClick={addToCart}
              >
                Add to Cart
              </motion.button>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6
                  className={`${tab === "desc" ? "active__tab" : ""}`}
                  onClick={() => setTab("desc")}
                >
                  Description
                </h6>
                <h6
                  className={`${tab === "revs" ? "active__tab" : ""}`}
                  onClick={() => setTab("rev")}
                >
                  Reviews ({reviews.length})
                </h6>
              </div>

              {tab === "desc" ? (
                <div className="tab__content mt-5">
                  <p>{description}</p>
                </div>
              ) : (
                <div className="product__reviewa mt-5">
                  <div className="review__wrapper">
                    <ul>
                      {reviews?.map((item, index) => (
                        <li key={index} className="mb-4">
                          <h6>John Doe</h6>
                          <span>{item.rating} (rating)</span>
                          <p>{item.text}</p>
                        </li>
                      ))}
                    </ul>

                    <div className="review__form">
                      <h4>Leave your experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group ">
                          <input
                            type="text"
                            placeholder="Enter name"
                            ref={reviewUser}
                            required
                          />
                        </div>

                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                          <span onClick={() => setRating(1)}>
                            1<RiStarSFill />
                          </span>
                          <span onClick={() => setRating(2)}>
                            2<RiStarSFill />
                          </span>
                          <span onClick={() => setRating(3)}>
                            3<RiStarSFill />
                          </span>
                          <span onClick={() => setRating(4)}>
                            4<RiStarSFill />
                          </span>
                          <span onClick={() => setRating(5)}>
                            5<RiStarSFill />
                          </span>
                        </div>
                        <div className="form__group">
                          <textarea
                            ref={reviewMsg}
                            rows={4}
                            type="text"
                            placeholder="Review Message..."
                            required
                          />
                        </div>
                        <button type="submit" className="buy__btn">
                          Submit
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </Col>
            <Col lg="12" className="mt-5">
              <h2 className="related__title">You might also like</h2>
            </Col>

            <ProductsList data={relatedProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default ProductDetails;
