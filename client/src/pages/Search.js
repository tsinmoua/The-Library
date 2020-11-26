import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import { Input, FormBtn } from "../components/Form"
import API from "../utils/API"

function Search() {

  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])

  function searchBooks(query) {
    API.search(query)
      .then(res => {
        console.log(res);
        console.log(res.data.items);
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


  return (
    <>
      <Navbar />

      <Jumbotron
        heading="The Library Books Search"
        heading2="Search for and Save Books of Interest"
      />

      <Container fluid="true">
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

      <Container fluid="true">
        {/* {
          results.map((books, index) => {
            return(
              <div className="card" key={index}>
                {books.volumeInfo.title}
              </div>
            )
          })
        } */}
      </Container>
    </>
  )
}


export default Search;
