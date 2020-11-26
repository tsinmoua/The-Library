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

  function handleButtonClick(event) {
    // event.preventDefault()
    event.stopPropagation()

    const btnName = event.target.getAttribute("name")

    if (btnName === "save") {
      console.log("clicked save");
      API.saveBook({
        src: results.src,
        alt: results.title,
        title: results.title,
        authors: results.authors,
        description: results.description,
        id: results.id,
        link: results.infoLink
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
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
              onClick={handleFormSubmit}
            >
              Submit
          </FormBtn>
          </form>
        </Container>
      </div>

      <Container>
        <h1>{results.length > 0 ? "Results" : ""}</h1>
        {console.log(results)}
        {
          results.map((books, index) => {
            return (
              <Card
                key={index}
                src={books.volumeInfo.imageLinks.smallThumbnail}
                alt={books.volumeInfo.title}
                title={books.volumeInfo.title}
                authors={books.volumeInfo.authors}
                description={books.volumeInfo.description}
                id={books.id}
                link={books.volumeInfo.infoLink}
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
