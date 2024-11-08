import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Movie from './components/Movie';
import Search from './components/Search';


function App() {
  return (
    <>
      <nav className="navbar" style = {{"backgroundColor" : "#E85428"}}>
        <div className="container">
          <Header title = "FinProH8"></Header>
          <Search />
        </div>
      </nav>
      <div className="container">
        <h3 className="my-4" style={{ color: "#60779C" }}>Show Your Favorite Movies</h3>
          <div className="row">
              <div className="col-3 p-3">
                  <div className="card">
                      <div className="ratio ratio-1x1">
                        <img
                          src="https://grovewatch.com/wp-content/uploads/2019/11/Dragon_Ball_Super_Broly_0a64851e-4f88-411a-b587-a3f408f4cdc0_600x-e1574090551205.png"
                          className="card-img-top"
                          alt="..."
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="card-body text-white text-center" style={{ backgroundColor: "#E85428" }}>
                        <Movie textTitle={"Dragon Ball Super: Broly"} />
                      </div>
                  </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
