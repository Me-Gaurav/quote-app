import React, { useState } from "react";
import EditQuote from "./EditQuote";
import "bootstrap/dist/css/bootstrap.css";

const QuotesItem = (props) => {
  const { id, name, body, removeItem, editItem } = props;
  const [toggle, setToggle] = useState(false);

  const handleRemove = () => {
    const confirmRemove = window.confirm("Are you sure?");
    if (confirmRemove) {
      removeItem(id);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="card mb-1">
      <h5 className="card-header">- {name}</h5>
      {toggle ? (
        <div className="card-body">
          <EditQuote
            id={id}
            name={name}
            body={body}
            editItem={editItem}
            handleToggle={handleToggle}
          />
          <button onClick={handleToggle}>cancel</button>
        </div>
      ) : (
        <div className="card-body">
          <p className="card-text">
            {body} - {name}
          </p>
          <button
            className="btn btn-primary btn-sm pr-3"
            onClick={handleToggle}
          >
            edit
          </button>
          <button className="btn btn-primary btn-sm" onClick={handleRemove}>
            remove
          </button>
        </div>
      )}
    </div>
  );
};

export default QuotesItem;
