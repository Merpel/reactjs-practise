import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

//import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Header } from "./components/Header";
import { User } from "./components/User";
import { Recipes } from "./components/Recipes";
import { Quotes } from "./components/Quotes";

const APP_ID = "553982d5";
const APP_KEY = "54c73ee620294e1ef43fcc2fbf53eef6";


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home"
        };
    }

    render() {
        let linkElements = ["Recipes", "Sudoku", "Links", "About", "Quotes"];
        return (
            <Router>
                <div className="container">
                    <h2><Link to={'/'}>Home</Link></h2>
                    <nav style={{ border: '2px solid grey' }}>
                        <ul id="navbar-top" style={{ display: 'flex', flexDirection: 'column' }}>
                            {linkElements.map((linkElement, i) => (
                                <li key={i}>
                                    <Link to={linkElement}  >
                                        {linkElement}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <Route exact path="/" component={() => <Home tab1={"recipes"} tab2={"about"} tab3={"quotes"} />} />
                    <Route path="/about" component={User} />
                    <Route path="/list" component={Header} />
                    <Route path="/recipes" component={() => <Recipes APP_ID={APP_ID} APP_KEY={APP_KEY} />} />
                    <Route path="/quotes" component={Quotes} />
                </div>
            </Router >
        );
    }
}

render(<App />, window.document.getElementById("app"));