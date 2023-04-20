import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { v4 as uuidV4 } from "uuid";

const QuoteForm = (props) => {
  const {
    handleToggle,
    formSubmission,
    id: slNo,
    name: author,
    body: quote,
  } = props;

  const [id] = useState(slNo ? slNo : uuidV4());
  const [name, setName] = useState(author ? author : "");
  const [body, setBody] = useState(quote ? quote : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      id: id,
      name: name,
      body: body,
    };
    formSubmission(formData);
    if (handleToggle) {
      handleToggle();
    }
    setName("");
    setBody("");
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label>Name</label>
        <br />
        <input type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Body</label>
        <br />
        <textarea value={body} onChange={handleBodyChange} />
        <br />
        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default QuoteForm;
