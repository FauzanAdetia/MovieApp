import "bootstrap/dist/css/bootstrap.min.css";


// eslint-disable-next-line react/prop-types, no-unused-vars
function Movie({img, textTitle}){
    return(
        <>
        
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 p-3">
                <div className="card">
                    <div className="ratio ratio-1x1">
                        <img src={img} className="card-img-top" alt="..." style={{ objectFit: "cover" }} />
                    </div>
                    <div className="card-body text-white text-center" style={{ backgroundColor: "#195e83"}}>
                        <p className="card-text">{textTitle}</p>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Movie;