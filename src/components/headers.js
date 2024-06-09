import Nav from "./nav";

function Header (props) {
    console.log(props.message);
return (<header>

Hi Houssem 
<Nav message={props.message} /> 
</header>)


}


Header.defaultProps={
    message: 'hello user'
}

export default Header;