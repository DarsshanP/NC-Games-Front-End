import React from "react";
import { useState } from "react";

function Queries({ setCategory }) {
  const [categoryClick, setCategoryClick] = useState(false);
  const categoryHandler = (e) => {
    setCategory(e.target.value);
  };

  const queryButtonHandler = () => {
    if (!categoryClick) {
      setCategoryClick(true);
    } else {
      setCategoryClick(false);
    }
  };

  return (
    <div id="query-form">
      <button onClick={queryButtonHandler} id="query-button">
        Categories
      </button>
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
