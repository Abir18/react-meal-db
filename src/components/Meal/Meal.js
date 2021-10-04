import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Meal = props => {
  const { strMeal, strMealThumb, strArea, idMeal } = props.meal;
  //   const singleMeal = `/meal/${idMeal}`;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={strMealThumb} />
        <Card.Body>
          <Card.Title>{strMeal}</Card.Title>
          <Card.Text>{strArea} Food</Card.Text>
          <Link to={`/meals/${idMeal}`}>
            <Button variant="info" className="mx-3">
              Details
            </Button>
          </Link>
          <Button>Details</Button>
        </Card.Body>
        <Button>Details</Button>
      </Card>
    </Col>
  );
};

export default Meal;
