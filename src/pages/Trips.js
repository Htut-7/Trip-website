import useFetch from "../hooks/useFetch";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Trips.css";

function Trips() {

  const url = "http://localhost:3005/trips";
  const { data: trip, loading, error } = useFetch(url);

  const [filter, setFilter] = useState("All");

  let filterTrips = trip;

  if (filter !== "All") {
    filterTrips = trip.filter(
      t => t.category === filter
    );
  }

  return (
    <div className="trip-container">

      <div className="filter-btn">
        <button
          className={`button-filter ${filter === 'All' ? 'filter-button-active' : ''}`}
          onClick={() => setFilter('All')}
        >
          All
        </button>

        <button
          className={`button-filter ${filter === 'Beach' ? 'filter-button-active' : ''}`}
          onClick={() => setFilter('Beach')}
        >
          Beach
        </button>

        <button
          className={`button-filter ${filter === 'Adventure' ? 'filter-button-active' : ''}`}
          onClick={() => setFilter('Adventure')}
        >
          Adventure
        </button>

        <button
          className={`button-filter ${filter === 'City Tour' ? 'filter-button-active' : ''}`}
          onClick={() => setFilter('City')}
        >
          City Tour
        </button>
      </div>

      {error && <p>{error}</p>}
      {loading && <p>loading...</p>}

    <div className="trips-grid">
         {filterTrips && filterTrips.map(t => (
        <div className="single-trip" key={t.id}>
          <img src={t.image} alt="trip" />
          <p>{t.title}</p>
          <p>Price: {t.price}</p>
          <span>{t.category}</span>
          <NavLink to={`/trips/${t.id}`}>Read More</NavLink>
        </div>
      ))}
    </div>
     

    </div>
  );
}

export default Trips;