import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';


// eslint-disable-next-line react/prop-types
function Search({onSearch}){
    const [searchVal, setSearchVal] = useState("");
    const handleInputChange = (event) => {
        setSearchVal(event.target.value);
    };
    
    const handleSearchClick = (e) => {
        e.preventDefault(); 
        onSearch(searchVal);
    };


    return(
        <>                
        
        <button className="navbar-toggler mb-2 mb-lg-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
            <form className="d-flex ms-auto mt-3 mt-lg-0" role="search" onSubmit={handleSearchClick}>
                <div className="input-group input-group-sm">
                <input type="text" value={searchVal} onChange={handleInputChange} className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2" style={{ width: "250px" }} />
                <button className="btn btn-dark" type="submit" id="button-addon2">Search</button>
                </div>
            </form>
        </div>
        
        </>
    )
}

export default Search;