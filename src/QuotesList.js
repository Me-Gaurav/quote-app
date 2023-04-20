import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import QuotesItem from "./QuotesItem";

const QuotesList = (props) => {
  const { quotes, removeItem, editItem } = props;
  return (
    <div className="row">
      {quotes.length === 0 ? (
        <div>
          <h1>No Quotes Found</h1>
          <p>Add your first Quote</p>
        </div>
      ) : (
        <div>
          <h4>My Quotes - {quotes.length}</h4>
          {quotes.map((quote) => {
            return (
              <QuotesItem
                key={quote.id}
                {...quote}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default QuotesList;
