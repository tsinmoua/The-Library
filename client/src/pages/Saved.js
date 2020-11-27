import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import Card from "../components/Card"
import API from "../utils/API"

function Saved() {

  const [books, setBooks] = useState([])

  useEffect(() => {
    loadSavedBooks()
  }, [])

  function loadSavedBooks() {
    API.getBooks()
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }

  function handleButtonClick(event) {
    event.stopPropagation();

    const deleteID = event.currentTarget.getAttribute("id")

    if (event.currentTarget.name === "delete") {
      // console.log("clicked delete");
      deleteBook(deleteID)
    }

  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then(res => {
        console.log(res);
        loadSavedBooks()})
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
        <h1>Saved Books</h1>
        <br/>
        <h3>{books.length > 0 ? "" : "You have no saved books."}</h3>
        <h3>{books.length > 0 ? "" : "Search for a book and click the 'Save' button for books to appear here."}</h3>
        {
          books.map((books, index) => {
            return (
              <Card
                key={index}
                src={books.image}
                alt={books.title}
                title={books.title}
                authors={books.authors}
                description={books.description}
                link={books.link}
                buttonvalue1="View"
                buttonvalue2="Delete"
                buttonname2="delete"
                id={books._id}
                onClick={handleButtonClick}
              />
            )
          })
        }
      </Container>
    </>
  )
}


export default Saved;


