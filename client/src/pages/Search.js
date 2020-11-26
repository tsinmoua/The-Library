import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import { Input, FormBtn } from "../components/Form"
import Card from "../components/Card"
import API from "../utils/API"

function Search() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  function searchBooks(query) {
    API.search(query)
      .then(res => {
        // console.log(res);
        // console.log(res.data.items);
        setResults(res.data.items)
      }
      )
      .catch(err => console.log(err));
  };

  function handleInputChange(event) {
    const { value } = event.target;
    // console.log(value);
    setSearch(value)
  };

  function handleFormSubmit(event) {
    event.preventDefault();

    searchBooks(search)
    setSearch("");
  };

  function handleButtonClick(event){
    event.preventDefault()
    event.stopPropagation()
    
    const btnName = event.target.getAttribute("name")

    if (btnName === "view") {
      console.log("clicked view");
    } else if (btnName === "save") {
      console.log("clicked save");
    }

  }


  return (
    <>
      <Navbar />

      <Jumbotron
        heading="The Library Books Search"
        heading2="Search for and Save Books of Interest"
      />

      <div className="row">
        <Container>
          <h1>Book Search</h1>
          <form>
            <Input
              onChange={handleInputChange}
              name="title"
              value={search}
            />
            <FormBtn
              // disabled={!(formObject.title)}
              onClick={handleFormSubmit}
            >
              Submit Book
          </FormBtn>
          </form>
        </Container>
      </div>

      <Container>
        <h1>Results</h1>
        {
          results.map((books, index) => {
            console.log(results);
            return(
              <Card 
              key={index}
              src={books.volumeInfo.imageLinks.smallThumbnail}
              alt={books.volumeInfo.title}
              title={books.volumeInfo.title}
              authors={books.volumeInfo.authors}
              description={books.volumeInfo.description}
              onClick={handleButtonClick}
              />
            )
          })
        }
      </Container>
    </>
  )
}


export default Search;
