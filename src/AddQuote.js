import React from "react";
import QuoteForm from "./QuoteForm";
import "bootstrap/dist/css/bootstrap.css";

const AddQuote = (props) => {
  const { addItem } = props;

  const formSubmission = (formData) => {
    addItem(formData);
  };

  return (
    <div>
      <h2>Add Quote</h2>
      <QuoteForm formSubmission={formSubmission} />
    </div>
  );
};

export default AddQuote;
