import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar"
import Jumbotron from "../components/Jumbotron"
import Container from "../components/Container"
import Card from "../components/Card"
import API from "../utils/API"
import { DangerAlert } from "../components/Alert"
import $ from "jquery"

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
    const alertnumber = event.currentTarget.getAttribute("alertnumber")

    if (event.currentTarget.name === "delete") {
      // console.log("clicked delete");
      deleteBook(deleteID, alertnumber)
    }
  }

  function deleteBook(id, index) {
    API.deleteBook(id)
      .then(res => {
        $(`#danger-alert${index}`).show()
        $(`#danger-alert${index}`)
          .fadeTo(2500, 500)
          .slideUp(500, function () {
            $(`#danger-alert${index}`).slideUp(500);
          });

        setTimeout(function () {
          loadSavedBooks()
        }, 3000)

        // console.log(res);
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar />

      <Jumbotron />

      <Container>
        <h1>Saved Books</h1>
        <br />
        <h3>{books.length > 0 ? "" : "You have no saved books."}</h3>
        <h3>{books.length > 0 ? "" : "Search for a book and click the 'Save' button for books to appear here."}</h3>
        {books.map((books, index) => {
          return (
            <div key={index}>
              <DangerAlert
                alertnumber={index}
                title={books.title}
              />
              <Card
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
                alertnumber={index}
              />
            </div>
          )
        })}
      </Container>
    </>
  )
}


export default Saved;


