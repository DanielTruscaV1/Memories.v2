//Import React
import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
//Import @material-ui components
import {Container, Grow, Grid} from "@material-ui/core";

//Import styles
import useStyles from "./styles";

//Import the "Navbar" component
import Navbar from "./components/Navbar/Navbar";
//Import the "Home" component
import Home from "./components/Home/Home";
//Import the "Auth" component
import Auth from "./components/Auth/Auth";

//Create the "App" component
const App = () => {
    //Return the HTML
    return (
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>}/>
                    <Route path="/auth" exact element={<Auth/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    );
}

//Export the "App" component
export default App;