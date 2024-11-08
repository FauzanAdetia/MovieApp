import "bootstrap/dist/css/bootstrap.min.css";


function Header(props){
    return(
        <>
            <a className="navbar-brand text-white">{props.title}</a>
        </>
    )
}

export default Header;