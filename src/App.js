import React from "react";
import QuotesContainer from "./QuotesContainer";
import "bootstrap/dist/css/bootstrap.css";

const App = (props) => {
  return (
    <div className="container text-center">
      <h1 className="mb-4">Quote Book</h1>
      <QuotesContainer />
    </div>
  );
};

export default App;
