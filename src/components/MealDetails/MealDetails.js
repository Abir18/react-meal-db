import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Restaurant from '../Restaurant/Restaurant';
import SearchBar from '../SearchBar/SearchBar';

const MealDetails = () => {
  const { mealId } = useParams();
  //   console.log(mealId, 'mealId');

  const [mealDetails, setMealDetails] = useState([]);
  //   const { strMealThumb, strMeal, strArea } = mealDetails;
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then(res => res.json())
      .then(data => setMealDetails(data.meals[0]));
  }, [mealId]);

  return (
    <div>
      <h4>Single Meal </h4>
      <Container>
        <Card style={{ width: '16rem' }} className="mx-auto">
          <Card.Img variant="top" src={mealDetails.strMealThumb} />
          <Card.Body>
            <Card.Title>{mealDetails.strMeal}</Card.Title>
            <Card.Text>{mealDetails.strArea} Food</Card.Text>
            <Link to={`/`}>
              <Button variant="info" className="mx-3">
                Meals
              </Button>
            </Link>
            {/* <Button>Details</Button> */}
          </Card.Body>
          {/* <Button>Details</Button> */}
        </Card>
      </Container>
      <SearchBar></SearchBar>
      {/* <Restaurant></Restaurant> */}
    </div>
  );
};

export default MealDetails;
