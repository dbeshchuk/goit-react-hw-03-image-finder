import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "21932135-4f5d77beca28a3dee23c5711e";

export default function searchApi(searchQuery, searchPage) {
  return axios
    .get(
      `${BASE_URL}?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${searchPage}&per_page=12&key=${API_KEY}`
    )
    .then((response) => {
      if (response.data.hits.length > 0) {
        return response.data.hits;
      }

      return Promise.reject(new Error("No match found"));
    });
}
