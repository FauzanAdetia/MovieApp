import "bootstrap/dist/css/bootstrap.min.css";


// eslint-disable-next-line react/prop-types, no-unused-vars
function Movie({img, textTitle}){
    return(
        <>
        
            <p className="card-text">{textTitle}</p>

        
        </>
    );
}

export default Movie;