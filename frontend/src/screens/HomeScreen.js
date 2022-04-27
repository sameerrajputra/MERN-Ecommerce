import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message.js";
import Loader from "../components/Loader.js";
import { listProducts } from "../actions/productActions.js";
import Paginate from "../components/Paginate.js";
import ProductCarousel from "../components/ProductCarousel.js";
import Meta from "../components/Meta.js";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const params = useParams();
  const { keyword, pageNumber } = params;

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // this is going to be fired as soon as home screen loads
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
