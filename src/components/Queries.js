import React from "react";
import { useState } from "react";
import "../styling/Queries.css";

function Queries({ setCategory, setSortBy }) {
  const [categoryClick, setCategoryClick] = useState(false);

  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const sortByHandler = (e) => {
    setSortBy(e.target.value);
  };

  const categoryButtonHandler = () => {
    if (!categoryClick) {
      setCategoryClick(true);
    } else {
      setCategoryClick(false);
    }
  };

  return (
    <div id="query-form">
      <div className="queryButtons">
        <button onClick={categoryButtonHandler} id="category-button">
          Categories
        </button>
        <select id="sortby" name="sortby" onChange={sortByHandler}>
          <option value="">Sort By</option>
          <option value="owner">Owner</option>
          <option value="title">Title</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
          <option value="comment_count">Comments</option>
        </select>
      </div>
      <div className={categoryClick ? "queries" : "queries-hidden"}>
        <form>
          <input
            type="radio"
            value=""
            id="All"
            name="category"
            onClick={categoryHandler}
            defaultChecked
          />
          <label htmlFor="All">All</label>
          <br></br>
          <input
            type="radio"
            value="strategy"
            id="strategy"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="Strategy">Strategy</label>
          <br></br>
          <input
            type="radio"
            value="hidden-roles"
            id="hidden-roles"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="hidden-roles">Hidden Roles</label>
          <br></br>
          <input
            type="radio"
            value="dexterity"
            id="dexterity"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="dexterity">Dexterity</label>
          <br></br>
          <input
            type="radio"
            value="push-your-luck"
            id="push-your-luck"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="push-your-luck">Push Your Luck</label>
          <br></br>
          <input
            type="radio"
            value="roll-and-write"
            id="roll-and-write"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="roll-and-write">Roll and Write</label>
          <br></br>
          <input
            type="radio"
            value="deck-building"
            id="deck-building"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="deck-building">Deck Building</label>
          <br></br>
          <input
            type="radio"
            value="engine-building"
            id="engine-building"
            name="category"
            onClick={categoryHandler}
          />
          <label htmlFor="engine-building">Engine Building</label>
        </form>
      </div>
    </div>
  );
}

export default Queries;
