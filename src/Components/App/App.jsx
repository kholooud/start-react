import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Cards from '../Cards/Cards';
import FisrtComponent from '../FisrtComponent/FirstComponent.jsx';
import About from '../About/About.jsx';
import Form from '../Form/Form.jsx';
import Footer from '../Footer/Footer.jsx';
import {Routes,Route, BrowserRouter} from 'react-router-dom';
import Notfound from '../Notfound/Notfound';




class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <FisrtComponent/>
                <Cards/>
                <About/>
                <Form/>
                <Footer/>
            </div>
        );
    }
}

export default App;