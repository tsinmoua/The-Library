import React from "react";
import "./style.css";
import GoogleBooks from "../../assets/images/GoogleBooks.png"

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-1">The Library</h1>
      <h2 className="display-4">Search/Save Books of Interest</h2>
      <h4 className="d">Powered by <span><img src={GoogleBooks} className="googleBooksIcon" alt="Google Books"/></span></h4>
    </div>
  );
}

export default Jumbotron;
