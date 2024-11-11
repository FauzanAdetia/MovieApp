import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';
import axios from 'axios';



function App() {

  
  const [movie, setMovie] = useState([]);

  const getMovies = () => {
    axios.get("http://www.omdbapi.com/", {
      params : {
        's' : "one piece",
        'apikey' : 'dca61bcc'
      }
    })

    .then(response =>{
      setMovie(response.data.Search);
    })
    .catch(error =>{
      console.log(error.response.data);
    })
  }

  useEffect(()=>{
    getMovies()
  },[]);


  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#195e83" }}>
        <div className="container">
          <Header title="FinProH8"/>
          <Search />
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
