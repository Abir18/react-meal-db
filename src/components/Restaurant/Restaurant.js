import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Restaurant = props => {
  // const { meals } = props;
  console.log(props);
  return (
    <>
      {/* <input type="text" onChange={handleClick} placeholder="Search Meal" /> */}
      <Container>
        <Row xs={1} md={3} className="g-4">
          {props.meals.map(meal => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Restaurant;
