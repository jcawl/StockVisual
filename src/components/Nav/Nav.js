import React, { useEffect } from 'react';
import {Link, useHistory} from 'react-router-dom';
import './Nav.scss'

function SearchBar() {
  let history = useHistory();

  function handleClick() {
    history.push("/tickers");
  }

  useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        console.log("Enter key was pressed. Run your function.");
        handleClick();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <input placeholder="ticker" type="text" onKeyDown={useEffect}></input>
  );
}


export default class Navbar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            redirect: false
        }
    }

    
    render () {
        return(
            <div className="nav-container">
              <div className="links">
                <li className='single-link'><Link to="/">Home</Link></li>
              </div>
              <div className="search-bar">
                <form>
                    <SearchBar />
                </form>
              </div>
            </div>
        )
    }
}