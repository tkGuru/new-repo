/* eslint-disable react/style-prop-object */
import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import Card from 'react-bootstrap/Card';
//import {Col} from 'reactstrap'

export default function Product(props) {
  const { product } = props;

  return (
    
    <div key={product._id} class="card h-60 justify-container-center container">
      <Link to={`/product/${product.slug}`}>
        <img src={product.image}  alt={product.name} width="226" height="200"/>
      </Link>
      <Card.Body class="text-center">
        <Link to={`/product/${product.slug}`}>
          <Card.Title as="h3" class="btn btn-outline-dark mt-2">{product.name}</Card.Title>
        </Link>
        <Rating class='gap-5'
          rating={product.rating}
          numReviews={product.numReviews}
        ></Rating>
        <Card.Text class="text-center">${product.price}</Card.Text>
        {product.seller && product.seller.seller && (
          <Link to={`/seller/${product.seller._id}`}>
            {product.seller.seller.name}
          </Link>
        )}
      </Card.Body>
    </div>  
  
  );
}

/*<Col lg="3" md="4" className="mb-2">
<div key={product._id} className="product__item">
  <motion.div whileHover={{ scale: 0.9 }} className="product__img">
  <Link to={`/product/${product.slug}`}>
    <img src={product.image} alt={product.name} />
  </Link> 
  </motion.div>
  <div className="product__info p-2">
    <h3 className="product__name">
    <Link to={`/product/${product.slug}`}>{product.name}</Link>
    </h3>
    <Rating
          rating={product.rating}
          numReviews={product.numReviews}
    ></Rating>
  </div>
  <div className="product__card-button d-flex align-items-center justify-content-between p-2">
    <span className="price">${product.price}</span>

    {product.countInStock > 0 && (
    <motion.span whileHover={{ scale: 1.2 }} onClick={addToCartHandler}>
      <i className="ri-add-line"></i>
    </motion.span>
    )}
  </div>
</div>
</Col>

*/