/* eslint-disable no-unused-vars */
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import "../styles/shop.css";

import products from "../assets/data/products";
import ProductsList from "../components/UI/ProductsList";

function Shop() {
  const [productsData, setProductsData] = useState(products);

  const handleFilter = function (e) {
    const filterValue = e.target.value;

    const filteredProducts = products.filter(
      (item) => item.category === filterValue
    );
    setProductsData(filteredProducts);
  };

  const handleSearch = function (e) {
    const searchTerm = e.target.value;

    const searchedProducts = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setProductsData(searchedProducts);
  };

  return (
    <Helmet title="Shop">
      <CommonSection title="Products" />
      <section>
        <Container>
          <Row className="filter__widgets">
            <Col lg="3" md="6" sm="6" xs="6">
              <div className="filter__widget">
                <select
                  defaultValue="Filter By Category"
                  onChange={handleFilter}
                >
                  <option disabled hidden>
                    Filter By Category
                  </option>
                  <option value="sofa">Sofa</option>
                  <option value="mobile">Mobile</option>
                  <option value="chair">Chair</option>
                  <option value="watch">Watch</option>
                  <option value="wireless">Wireless</option>
                </select>
              </div>
            </Col>
            <Col lg="3" md="6" sm="6" xs="6" className="text-end">
              <div className="filter__widget">
                <select defaultValue="Sort By">
                  <option disabled hidden>
                    Sort By
                  </option>
                  <option value="ascending">Ascending</option>
                  <option value="descending">Descending</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="12">
              <div className="search__box">
                <input
                  type="text"
                  placeholder="Search..."
                  onChange={handleSearch}
                />
                <span>
                  <RiSearchLine />
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {productsData.length === 0 ? (
              <h1 className="text-center fs-4">No products are found!</h1>
            ) : (
              <ProductsList data={productsData} />
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
}

export default Shop;
