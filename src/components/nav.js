function Nav(props) {
    return (<div>
        <a href="">React</a>
        
                <nav>
                    {props.message}
                  <ul>
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </nav>
                
                </div>);

        }

        export default Nav;