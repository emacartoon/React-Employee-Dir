import React from "react";
import { Form, FormControl } from "react-bootstrap";


function SearchForm(props) {
  console.log(props);
  return (
    <Form inline>
      <FormControl
          id="search"
          onChange={props.handleOnInputChange}
          name="search"
          type="text"
          className="form-control search"
          placeholder="Search..."
        />
    </Form>
  );
}

export default SearchForm;
