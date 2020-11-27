import React, { useState } from "react";
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import { Input, FormBtn } from "../components/Form"
import Card from "../components/Card"
import { SuccessAlert } from "../components/Alert"
import API from "../utils/API"
import $ from "jquery"

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
    const alertnumber = event.currentTarget.getAttribute("alertnumber")

    if (event.currentTarget.name === "save") {
      // console.log("clicked save");      
      saveBook({ title, authors, description, image: src, link }, alertnumber);
    }
  }

  function saveBook(object, index) {
    API.saveBook(object)
      .then(res => {
        // console.log(res)
        $(`#success-alert${index}`).show()
        $(`#success-alert${index}`)
          .fadeTo(3000, 500)
          .slideUp(500, function () {
            $(`#success-alert${index}`).slideUp(500);
          });
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar />

      <Jumbotron />

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
            <div key={index}>
              <SuccessAlert
                alertnumber={index}
                title={books.volumeInfo.title}
              />
              <Card
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
                alertnumber={index}
              />
            </div>
          )
        })}
      </Container>
    </>
  )
}


export default Search;
