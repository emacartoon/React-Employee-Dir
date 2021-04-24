import React from "react";

function SearchForm(props) {
  console.log(props);
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="search"
          value={props.value}
          id="search"
          placeholder="Search..."
          onChange={props.handleOnInputChange}
          name="search"
          list="employees"
        />
      </div>
    </form>
  );
}

export default SearchForm;
