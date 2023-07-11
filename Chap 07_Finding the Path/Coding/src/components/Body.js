import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { RestaurantCard } from './RestaurantCard';
import Shimmer from './Shimmer';

import { SwiggyAPIURL } from '../constants';

function findRestaurant(searchText, restaurants) {
  const filteredRestaurant_s = restaurants.filter((eachRestaurant) =>
    eachRestaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredRestaurant_s;
}

const Body = () => {
  const [searchText, setSearchText] = useState('');
  const [allRestaurant, setAllRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  async function getRestaurants() {
    const data = await fetch(SwiggyAPIURL);

    const json = await data.json();
    setAllRestaurant(json.data.cards[2].data.data.cards);
    setFilteredRestaurant(json.data.cards[2].data.data.cards);
    console.log(json.data.cards[2].data.data.cards);
  }
  useEffect(() => {
    getRestaurants();
  }, []);

  // use searchData function and set condition if data is empty show error message
  const searchData = (searchText, restaurants) => {
    if (searchText !== '') {
      const data = findRestaurant(searchText, restaurants);
      setFilteredRestaurant(data);
      setErrorMessage('');
      if (data.length === 0) {
        setErrorMessage('No matches restaurant found');
      }
    } else {
      setErrorMessage('');
      setFilteredRestaurant(restaurants);
    }
  };

  // if allRestaurants is empty don't render restaurants cards
  if (!allRestaurant) return null;

  return (
    <>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            searchData(searchText, allRestaurant);
            // setAllRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      {errorMessage && (
        <div className="error-msg-container">{errorMessage}</div>
      )}
      {allRestaurant?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filteredRestaurant.map((restaurant) => {
            return (
              <Link
                to={'/restaurantmenu/' + restaurant.data.id}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
