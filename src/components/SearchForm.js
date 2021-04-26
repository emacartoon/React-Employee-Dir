import React from "react";

function SearchForm(props) {
  console.log(props);
  return (
    <form className="form-inline">
      <div className="form-group">
        <input
          type="text"
          className="search"
          id="search"
          placeholder="Search..."
          onChange={props.handleOnInputChange}
          value={props.searchTerm}
          name="search"
          list="employees"
        />
      </div>
    </form>
  );
}

export default SearchForm;

