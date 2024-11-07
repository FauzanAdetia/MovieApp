import "bootstrap/dist/css/bootstrap.min.css";
import Search from "./Search";


function Header(){
    return(
        <>
            <nav className="navbar" style = {{"backgroundColor" : "#E85428"}}>
                <div className="container">
                    <a className="navbar-brand text-white">FinProH8</a>
                    <Search />
                </div>
            </nav>
        
        </>
    )
}

export default Header;