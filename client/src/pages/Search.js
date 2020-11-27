import React, { useState } from "react";
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
      })
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

  function handleButtonClick(event) {
    // event.preventDefault()
    event.stopPropagation()

    const title = event.currentTarget.getAttribute("title")
    const authors = event.currentTarget.getAttribute("authors")
    const description = event.currentTarget.getAttribute("description")
    const src = event.currentTarget.getAttribute("src")
    const link = event.currentTarget.getAttribute("link")

    if (event.currentTarget.name === "save") {
      // console.log("clicked save");
      saveBook({ title, authors, description, image: src, link });
    }
  }

  function saveBook(object) {
    // console.log("Save book");
    API.saveBook(object)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar />

      <Jumbotron
        heading="The Library Books Search"
        heading2="Search for and Save Books of Interest"
      />

      <Container>
        <h1>Book Search</h1>
        <form>
          <Input onChange={handleInputChange} name="title" value={search} />
          <FormBtn onClick={handleFormSubmit}>
            Submit
            </FormBtn>
        </form>
      </Container>

      <Container>
        <h1>{results.length > 0 ? "Results" : ""}</h1>
        {results.map((books, index) => {
          return (
            <Card
              key={index}
              src={books.volumeInfo.imageLinks.smallThumbnail}
              alt={books.volumeInfo.title}
              title={books.volumeInfo.title}
              authors={!books.volumeInfo.authors ?
                "No author available" : books.volumeInfo.authors}
              description={!books.volumeInfo.description ?
                "No description available" : books.volumeInfo.description}
              link={books.volumeInfo.infoLink}
              buttonvalue1="View"
              buttonvalue2="Save"
              buttonname2="save"
              onClick={handleButtonClick}
            />
          )
        })}
      </Container>
    </>
  )
}


export default Search;
