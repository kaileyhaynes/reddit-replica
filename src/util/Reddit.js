import SearchBar from "../Components/SearchBar/SearchBar";

const API_ROOT = 'https://www.reddit.com';

const Reddit = {
    search(term) {
        return fetch(`${API_ROOT}/search.json?q=${term}`).then(response => {
            return response.json();
        }).then(jsonResponse => {
            return jsonResponse.data.children.map(post => post.data);     
        });
    }
}


export default Reddit;