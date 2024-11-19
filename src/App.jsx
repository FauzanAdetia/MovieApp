import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';



function App() {
  // eslint-disable-next-line no-unused-vars
  const [searchVal, setSearchVal] = useState("");
  const [movie, setMovies] = useState([]);

  const handleSearch = (query) => {
    setSearchVal(query);

    axios.get("http://www.omdbapi.com/", {
        params: {
            s: query || "one piece",
            apikey: "your_apikey",
        },
    })
    .then(response => {
        setMovies(response.data.Search || []);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
};


  useEffect(()=>{
    handleSearch()
  },[]);


  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#195e83" }}>
        <div className="container">
          <Header title="FinProH8"/>
          <Search onSearch={handleSearch}/>

        </div>
      </nav>
      <div className="container">
        <h3 className="my-4" style={{ color: "#60779C" }}>Show Your Favorite Movies</h3>
        <div className="row">
          {
            movie.map(m =>(
              <Movie key={m.imdbID} img= {m.Poster} textTitle={m.Title} />
            ))
          }
        </div>
        
      </div>

    </>
  )
  
}

export default App;
