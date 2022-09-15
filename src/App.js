//Import React
import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
//Import @material-ui components
import {Container, Grow, Grid} from "@material-ui/core";

//Import styles
import useStyles from "./styles";

//Import the "Navbar" component
import Navbar from "./components/Navbar/Navbar";
//Import the "Home" component
import Home from "./components/Home/Home";

//Create the "App" component
const App = () => {
    //Return the HTML
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar/>
                <Home/>
            </Container>
        </BrowserRouter>
    );
}

//Export the "App" component
export default App;