import axios from "axios";
// const APIKEY = process.env.REACT_APP_GOOGLE_API_KEY

export default {
  search: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query);
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
