import "bootstrap/dist/css/bootstrap.min.css";


function Search(){
    return(
        <>                
        
        <form className="d-flex" role="search">        
            <div className="input-group input-group-sm mb-3 my-3">
                <input type="text" className="form-control" placeholder="Search..." aria-label="Search" aria-describedby="button-addon2 inputGroup-sizing-sm" style={{width : "250px"}} />
                <button className="btn btn-dark" type="button" id="button-addon2">Search</button>
            </div>
        </form>
        
        </>
    )
}

export default Search;