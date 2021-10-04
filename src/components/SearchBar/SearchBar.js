import React, { useEffect, useState } from 'react';
import { Container, FormControl, InputGroup } from 'react-bootstrap';
import Restaurant from '../Restaurant/Restaurant';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then(res => res.json())
      .then(data => setMeals(data?.meals));
  }, [searchText]);

  const handleClick = e => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <Container>
      <InputGroup className="mb-5 my-3">
        <FormControl
          placeholder="Search Meal"
          aria-label="Search Meal"
          aria-describedby="basic-addon2"
          onChange={handleClick}
        />
        <InputGroup.Text onClick={handleClick} id="basic-addon2">
          Search
        </InputGroup.Text>
      </InputGroup>
      <Restaurant meals={meals}></Restaurant>
    </Container>
  );
};

export default SearchBar;
