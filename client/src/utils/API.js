import axios from "axios";
// const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY

export default {
  // Search for books on google books
  search: function (query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  // Save book to favorites
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },

  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
};
