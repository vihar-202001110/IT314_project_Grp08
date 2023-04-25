import React, { useState } from 'react';
import './Search.css';
import ButtonSearch from './ButtonSearch';
const data = [
  {
    "veg_name": "Roasted Broccoli",
    "time_to_make": "30 minutes",
    "ingredients": [
      "1 head broccoli, cut into florets",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    "cuisine":"italian",
    "rating":"9",
    },
  {
    "veg_name": "Garlic Mashed Potatoes",
    "time_to_make": "45 minutes",
    "ingredients": [
      "3 pounds Yukon Gold potatoes, peeled and cut into chunks",
      "6 cloves garlic, peeled",
      "1/2 cup unsalted butter, at room temperature",
      "1/2 cup milk, warmed",
      "Salt and pepper to taste"
    ],
    "cuisine":"italian",
    "rating":"9",
  },
  {
    "veg_name": "Honey Glazed Carrots",
    "time_to_make": "25 minutes",
    "ingredients": [
      "1 pound carrots, peeled and sliced",
      "2 tablespoons unsalted butter",
      "2 tablespoons honey",
      "1/4 teaspoon ground ginger",
      "Salt and pepper to taste"
    ],
    "cuisine":"italian",
    "rating":"9",
  },
  {
    "veg_name": "Roasted Brussels Sprouts",
    "time_to_make": "30 minutes",
    "ingredients": [
      "1 pound Brussels sprouts, trimmed and halved",
      "2 tablespoons olive oil",
      "Salt and pepper to taste"
    ],
    "cuisine":"italian",
    "rating":"9",
  },
  {
    "veg_name": "Sauteed Green Beans",
    "time_to_make": "20 minutes",
    "ingredients": [
      "1 pound green beans, trimmed",
      "2 tablespoons unsalted butter",
      "1 clove garlic, minced",
      "Salt and pepper to taste"
    ],
    "cuisine":"italian",
    "rating":"9",
  }
];

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('meals');

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchCategoryChange = (event) => {
    setSearchCategory(event.target.value);
  };
  const setToName=() => {
    setSearchCategory('meals');
  }
  const setToIngre=()=>{
    setSearchCategory('ingredients');
  }
  const setTotime=() => {
    setSearchCategory('time');
  }
  const setToRating=()=>{
    setSearchCategory('rating');
  }
  const setTocuisine=()=>{
    setSearchCategory('cuisine');
  }
  const filteredData = data.filter((item) => {
    if (searchCategory === 'meals') {
      return item.veg_name.toLowerCase().includes(searchTerm.toLowerCase());
    } else if (searchCategory === 'cuisine') {
      return item.cuisine.toString().includes(searchTerm);
    }
    else if(searchCategory === 'time'){
        return item.time_to_make.toString().includes(searchTerm);
    }
    else if(searchCategory === 'rating'){
      return item.rating.toString().includes(searchTerm);
    }
    else if(searchCategory === 'ingredients'){
      return item.ingredients.toString().includes(searchTerm);
    }
    else if(searchCategory === 'healthReq'){
      return item.healthReq.toString().includes(searchTerm);
    }
  });

  const changeColor = () => {
    
  }
  const getClass = (btn_name) => {
    if(btn_name === searchCategory) {
      return "blackButton";
    } 
    return "whiteButton";
  }

  return (
    <div>
      <div className='main'>
      <div className="headText">
        <h1>Search
            <span>Search your Favorite Recipes Here</span>
        </h1>
      </div>
      <div class="body_search">

    <div className="box_s">
          <form name="search">      
            <input type="text" class="input" name="txt" onmouseout="this.value = ''; this.blur();" value={searchTerm} onChange={handleSearchTermChange} />
            <button type='submit' id='submitButton'> Search </button>
        </form>
        <i class="fas fa-search"></i>
    </div>
  </div>
      <div className="searchCat">
        <button className = {getClass('meals')} id='meals' value={searchCategory} onClick={()=>{setToName(); changeColor(this);}}>Meals</button>
        <button className = {getClass('time')} id='time' value={searchCategory} onClick={()=>{setTotime(); changeColor(this);}}>Time</button>
        <button className = {getClass('rating')} id='rating' value={searchCategory} onClick={()=>{setToRating(); changeColor(this);}}>Rating</button>
        {/* <button className = {getClass('healthReq')} id='health' value={searchCategory} onClick={()=>{setToHealthReq(); changeColor(this);}}>Health requirements</button> */}
        <button className = {getClass('cuisine')} id='cuisine' value={searchCategory} onClick={()=>{setTocuisine(); changeColor(this);}}>Cuisine</button>
        <button className = {getClass('ingredients')} id='ing' value={searchCategory} onClick={()=>{setToIngre(); changeColor(this);}}>Ingredients</button>
      </div>  

      
      </div>
      <div>
      {searchTerm !== '' && filteredData.length > 0 ? (
        <div className="card_search-container">
          {filteredData.map((item, index) => (
            <div className="card_search" key={index}>
              <a href={item.url}>
              <h2>{item.veg_name}</h2>
              <p>time: {item.time_to_make}</p>
              <p>ingredients: {item.ingredients}</p>
              <p>Rating: {item.rating}</p>
              <p>Cuisine: {item.cuisine}</p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        searchTerm !== '' && <p>No results found.</p>
      )}
      </div>
    </div>
  );
}

export default Search;
